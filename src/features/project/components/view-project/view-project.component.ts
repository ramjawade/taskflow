import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../../interfaces/project.interface';
import { ProjectStoreService } from '../../services/project-store.service';

@Component({
  selector: 'app-view-project',
  imports: [CommonModule, DragDropModule],
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {
  project: IProject | any = null;
  tasks: { status: string; items: string[] }[] = [];
  connectedDropLists: string[] = [];

  constructor(private route: ActivatedRoute, private projectStoreService: ProjectStoreService) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (!projectId) {
      console.error('Project ID is not provided');
      return;
    }
    this.project = this.projectStoreService.getProject(Number(projectId));
    console.log('Project ID:', projectId);

    // Example dynamic tasks (replace with actual data from the project or API)
    this.tasks = [
      { status: 'TO DO', items: ['Task 1', 'Task 2', 'Task 3'] },
      { status: 'IN PROGRESS', items: ['Task 4', 'Task 5'] },
      { status: 'DONE', items: ['Task 6', 'Task 7'] }
    ];

    // Dynamically generate connected drop list IDs
    this.connectedDropLists = this.tasks.map((_, index) => `cdk-drop-list-${index}`);
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
