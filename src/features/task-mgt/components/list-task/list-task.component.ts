import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask, TaskStatus } from '../../interfaces/task.interface';
import { TaskStoreService } from '../../services/task-store.service';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements OnInit {
  headers: { label: string; key: keyof ITask }[] = [
    { key: 'id', label: '#' },
    { key: 'title', label: 'Title' },
    { key: 'status', label: 'Status' },
    { key: 'assignee', label: 'Assignee' },
    { key: 'size', label: 'Size' },
    { key: 'startDate', label: 'Start Date' },
    { key: 'endDate', label: 'End Date' },
  ];

  status: Record<TaskStatus, string> = {
    OPEN: 'Open',
    IN_PROGRESS: 'In Progress',
    COMPLETED: 'Completed',
  };

  tasks: ITask[] = [];

  constructor(
    private route: ActivatedRoute,
    private taskStore: TaskStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (!projectId) {
      console.error('Project ID is not provided');
      return;
    }
    console.log('Project ID:', projectId);
    this.tasks = this.taskStore.getTasks(projectId);
  }

  createTask() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl(`projects/view-project/${projectId}/create`);
  }
}
