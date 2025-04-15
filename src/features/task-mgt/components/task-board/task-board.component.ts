import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask, TaskStatus } from '../../interfaces/task.interface';
import { TaskStoreService } from '../../services/task-store.service';
import { ModalComponent } from '../../../../shared/modal/modal.component';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { ModalService } from '../../../../shared/modal/modal.service';

interface DragTaskList {
  status: TaskStatus;
  tasks: ITask[];
}

@Component({
  selector: 'app-task-board',
  imports: [DragDropModule, CommonModule, ModalComponent, CreateTaskComponent],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.scss',
})
export class TaskBoardComponent implements OnInit {
  tasks: { status: TaskStatus; tasks: any[] }[] = [];
  connectedDropLists: string[] = [];
  status: Record<TaskStatus, string> = {
    OPEN: 'Open',
    IN_PROGRESS: 'In Progress',
    COMPLETED: 'Completed',
  };
  currentStatus: TaskStatus = 'OPEN';

  constructor(
    private route: ActivatedRoute,
    private taskStore: TaskStoreService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (!projectId) {
      console.error('Project ID is not provided');
      return;
    }
    console.log('Project ID:', projectId);

    this.tasks = this.getTasksByProjectId(projectId);
  }

  getTasksByProjectId(
    projectId: string
  ): { status: TaskStatus; tasks: any[] }[] {
    let tasks = this.taskStore.getTasks(projectId);
    let data = tasks.reduce(
      (acc: DragTaskList[], task: ITask) => {
        const existingList = acc.find((list) => list.status === task.status);
        existingList?.tasks.push(task);
        return acc;
      },
      [
        {
          status: 'OPEN',
          tasks: [],
        },
        {
          status: 'IN_PROGRESS',
          tasks: [],
        },
        {
          status: 'COMPLETED',
          tasks: [],
        },
      ]
    );
    this.connectedDropLists = data.map((_, index) => `cdk-drop-list-${index}`);
    return data;
  }

  drop(event: CdkDragDrop<ITask[]>, targetStatus: string) {
    if (event.previousContainer === event.container) {
      // Reorder items within the same category
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Move item to a different category
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      // Update the task's status
      const movedTask = event.container.data[event.currentIndex];
      console.log(`Task "${movedTask}" moved to "${targetStatus}"`);
    }
  }

  addTask(status: TaskStatus) {
    this.currentStatus = status;
    this.modalService.show('createTaskModal');
  }

  taskCreated(task: ITask) {
    this.modalService.hide('createTaskModal');
    this.tasks = this.getTasksByProjectId(
      this.route.snapshot.paramMap.get('id') as string
    );
    console.log('Task created:', task);
  }
}
