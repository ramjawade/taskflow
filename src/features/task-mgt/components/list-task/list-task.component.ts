import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
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

  tasks: ITask[] = [
    {
      projectId: 1,
      id: 1,
      title: 'Task 1',
      status: 'OPEN',
      assignee: 'Mark',
      size: 'S',
      startDate: '2025-04-01',
      endDate: '2025-04-10',
    },
    {
      projectId: 1,
      id: 2,
      title: 'Task 2',
      status: 'IN_PROGRESS',
      assignee: 'Jacob',
      size: 'M',
      startDate: '2025-04-05',
      endDate: '2025-04-15',
    },
    {
      projectId: 1,
      id: 3,
      title: 'Task 3',
      status: 'COMPLETED',
      assignee: 'John',
      size: 'L',
      startDate: '2025-04-10',
      endDate: '2025-04-20',
    },
  ];

  constructor(private route: ActivatedRoute, private taskStore: TaskStoreService) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (!projectId) {
      console.error('Project ID is not provided');
      return;
    }
    console.log('Project ID:', projectId);
    this.tasks = this.taskStore.getTasks(Number(projectId))
  }
}
