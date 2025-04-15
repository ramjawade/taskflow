import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskStoreService {
  private tasks: ITask[] = [
    {
      projectId: '1',
      id: '1',
      title: 'Set up Angular Project',
      status: 'COMPLETED',
      assignee: 'Alice',
      size: 'M',
      startDate: '2025-04-01',
      endDate: '2025-04-02',
    },
    {
      id: '2',
      title: 'Create Task Interface',
      status: 'COMPLETED',
      assignee: 'Bob',
      size: 'S',
      projectId: '1',
      startDate: '2025-04-02',
      endDate: '2025-04-02',
    },
    {
      id: '3',
      title: 'Develop TaskStoreService',
      status: 'IN_PROGRESS',
      assignee: 'Charlie',
      size: 'L',
      projectId: '1',
      startDate: '2025-04-03',
      endDate: '2025-04-05',
    },
    {
      id: '4',
      title: 'Implement Task List Component',
      status: 'OPEN',
      assignee: 'Alice',
      size: 'L',
      projectId: '1',
      startDate: '2025-04-06',
      endDate: '2025-04-08',
    },
    {
      id: '5',
      title: 'Add Task Filtering Feature',
      status: 'OPEN',
      assignee: 'Bob',
      size: 'M',
      projectId: '1',
      startDate: '2025-04-09',
      endDate: '2025-04-10',
    },
    {
      id: '6',
      title: 'Write Unit Tests for TaskStoreService',
      status: 'OPEN',
      assignee: 'Charlie',
      size: 'S',
      projectId: '1',
      startDate: '2025-04-11',
      endDate: '2025-04-12',
    },
    {
      id: '7',
      title: 'Set up CRM System Backend',
      status: 'OPEN',
      assignee: 'David',
      size: 'L',
      projectId: '2',
      startDate: '2025-04-13',
      endDate: '2025-04-15',
    },
    {
      id: '8',
      title: 'Design CRM System UI',
      status: 'IN_PROGRESS',
      assignee: 'Eve',
      size: 'M',
      projectId: '2',
      startDate: '2025-04-16',
      endDate: '2025-04-18',
    },
    {
      id: '9',
      title: 'Integrate CRM System with Email Service',
      status: 'OPEN',
      assignee: 'Frank',
      size: 'S',
      projectId: '2',
      startDate: '2025-04-19',
      endDate: '2025-04-20',
    },
    {
      id: '10',
      title: 'Set up Mobile Banking Backend',
      status: 'OPEN',
      assignee: 'Grace',
      size: 'L',
      projectId: '3',
      startDate: '2025-04-21',
      endDate: '2025-04-23',
    },
    {
      id: '11',
      title: 'Design Mobile Banking UI',
      status: 'IN_PROGRESS',
      assignee: 'Hank',
      size: 'M',
      projectId: '3',
      startDate: '2025-04-24',
      endDate: '2025-04-26',
    },
    {
      id: '12',
      title: 'Implement Mobile Banking Authentication',
      status: 'OPEN',
      assignee: 'Ivy',
      size: 'S',
      projectId: '3',
      startDate: '2025-04-27',
      endDate: '2025-04-28',
    },
  ];

  constructor() {}

  getTasks(projectId: string): ITask[] {
    return this.tasks.filter((task) => task.projectId === projectId);
  }

  addTask(task: ITask): void {
    this.tasks.push(task);
  }

  updateTask(updatedTask: ITask): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  getTaskById(taskId: string): ITask | undefined {
    return this.tasks.find((task) => task.id === taskId);
  }
}
