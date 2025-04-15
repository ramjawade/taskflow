import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectStoreService {
  private projects: IProject[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Development of an online shopping platform.',
      status: 'IN_PROGRESS',
      owner: 'John Doe',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      priority: 'HIGH',
    },
    {
      id: '2',
      title: 'CRM System',
      description: 'Implementation of a customer relationship management system.',
      status: 'COMPLETED',
      owner: 'Jane Smith',
      startDate: '2023-02-01',
      endDate: '2023-11-30',
      priority: 'MEDIUM',
    },
    {
      id: '3',
      title: 'Mobile Banking App',
      description: 'Development of a mobile application for banking services.',
      status: 'NOT_STARTED',
      owner: 'Alice Johnson',
      startDate: '2023-03-01',
      endDate: '2023-10-31',
      priority: 'LOW',
    },
    {
      id: '4',
      title: 'Inventory Management System',
      description: 'Creation of a system to manage inventory for warehouses.',
      status: 'IN_PROGRESS',
      owner: 'Bob Brown',
      startDate: '2023-04-01',
      endDate: '2023-09-30',
      priority: 'HIGH',
    },
    {
      id: '5',
      title: 'Learning Management System',
      description: 'Development of an online learning platform.',
      status: 'COMPLETED',
      owner: 'Charlie Davis',
      startDate: '2023-05-01',
      endDate: '2023-08-31',
      priority: 'MEDIUM',
    },
    {
      id: '6',
      title: 'Healthcare Portal',
      description: 'Development of a portal for managing healthcare services.',
      status: 'NOT_STARTED',
      owner: 'David Wilson',
      startDate: '2023-06-01',
      endDate: '2023-07-31',
      priority: 'LOW',
    },
    {
      id: '7',
      title: 'Social Media Analytics Tool',
      description: 'Creation of a tool to analyze social media data.',
      status: 'IN_PROGRESS',
      owner: 'Eva Green',
      startDate: '2023-07-01',
      endDate: '2023-06-30',
      priority: 'HIGH',
    },
    {
      id: '8',
      title: 'Project Management Software',
      description: 'Development of software for managing projects.',
      status: 'COMPLETED',
      owner: 'Frank Harris',
      startDate: '2023-08-01',
      endDate: '2023-05-31',
      priority: 'MEDIUM',
    },
    {
      id: '9',
      title: 'AI Chatbot',
      description: 'Development of an AI-powered chatbot for customer support.',
      status: 'NOT_STARTED',
      owner: 'Grace Lee',
      startDate: '2023-09-01',
      endDate: '',
      priority: 'LOW',
    },
    {
      id: '10',
      title: 'Cloud Storage Solution',
      description: 'Implementation of a secure cloud storage solution.',
      status: 'NOT_STARTED',
      owner: '',
      startDate: '',
      endDate: '',
      priority: 'LOW',
    },
    {
      id: '11',
      title: 'Cybersecurity Platform',
      description: 'Development of a platform for monitoring and preventing cyber threats.',
      status: 'IN_PROGRESS',
      owner: 'Henry Adams',
      startDate: '2023-10-01',
      endDate: '2024-03-31',
      priority: 'HIGH',
    },
    {
      id: '12',
      title: 'Data Analytics Dashboard',
      description: 'Creation of a dashboard for visualizing business data.',
      status: 'COMPLETED',
      owner: 'Ivy Clark',
      startDate: '2023-01-15',
      endDate: '2023-06-30',
      priority: 'MEDIUM',
    },
  ];

  constructor() {}

  getProjects(): IProject[] {
    return this.projects;
  }
  addProject(project: IProject): void {
    project.id = (this.projects.length + 1).toString(); // Assign a new ID
    this.projects.push(project);
    console.log('Project added:', project);
  }
  updateProject(index: number, project: IProject): void {
    if (index >= 0 && index < this.projects.length) {
      this.projects[index] = project;
    }
  }
  deleteProject(index: number): void {
    if (index >= 0 && index < this.projects.length) {
      this.projects.splice(index, 1);
    }
  }
  getProject(id: string): IProject | undefined {
    return this.projects.find((project) => project.id === id);
  }
}
