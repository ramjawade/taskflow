import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-board',
  imports: [DragDropModule, CommonModule],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.scss',
})
export class TaskBoardComponent implements OnInit {
  tasks = [
    { status: 'TO DO', items: ['Task 1', 'Task 2', 'Task 3'] },
    { status: 'IN PROGRESS', items: ['Task 4', 'Task 5'] },
    { status: 'DONE', items: ['Task 6', 'Task 7'] },
  ];
  connectedDropLists: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (!projectId) {
      console.error('Project ID is not provided');
      return;
    }
    console.log('Project ID:', projectId);

    this.connectedDropLists = this.tasks.map(
      (_, index) => `cdk-drop-list-${index}`
    );
  }

  drop(event: CdkDragDrop<string[]>, targetStatus: string) {
    if (event.previousContainer === event.container) {
      // Reorder items within the same category
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
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
