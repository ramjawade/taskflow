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


interface DragTaskList {
  status: TaskStatus;
  tasks: ITask[];
}

@Component({
  selector: 'app-task-board',
  imports: [DragDropModule, CommonModule],
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

  constructor(
    private route: ActivatedRoute,
    private taskStore: TaskStoreService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (!projectId) {
      console.error('Project ID is not provided');
      return;
    }
    console.log('Project ID:', projectId);
    this.tasks 
    let tasks= this.taskStore.getTasks(Number(projectId));
    this.tasks = tasks.reduce((acc: DragTaskList[], task: ITask) => {
      const existingList = acc.find((list) => list.status === task.status);
      if (existingList) {
        existingList.tasks.push(task);
      }
      else {
        acc.push({ status: task.status, tasks: [task] });
      }
      return acc;
    }, []);  

    this.connectedDropLists = this.tasks.map(
      (_, index) => `cdk-drop-list-${index}`
    );
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
}
