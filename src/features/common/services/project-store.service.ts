import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectStoreService {
  private projects: IProject[] = [
    {
      id: '1',
      title: 'Project 1',
      description: 'Description of Project 1',
      status: 'In Progress',
      owner: 'John Doe',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      priority: 'High',
    },
    {
      id: '2',
      title: 'Project 2',
      description: 'Description of Project 2',
      status: 'Completed',
      owner: 'Jane Smith',
      startDate: '2023-02-01',
      endDate: '2023-11-30',
      priority: 'Medium',
    },
    {
      id: '3',
      title: 'Project 3',
      description: 'Description of Project 3',
      status: 'Not Started',
      owner: 'Alice Johnson',
      startDate: '2023-03-01',
      endDate: '2023-10-31',
      priority: 'Low',
    },
    {
      id: '4',
      title: 'Project 4',
      description: 'Description of Project 4',
      status: 'In Progress',
      owner: 'Bob Brown',
      startDate: '2023-04-01',
      endDate: '2023-09-30',
      priority: 'High',
    },{
      id: '5',
      title: 'Project 5',
      description: 'Description of Project 5',
      status: 'Completed',
      owner: 'Charlie Davis',
      startDate: '2023-05-01',
      endDate: '2023-08-31',
      priority: 'Medium',
    },
    {
      id: '6',
      title: 'Project 6',
      description: 'Description of Project 6',
      status: 'Not Started',
      owner: 'David Wilson',
      startDate: '2023-06-01',
      endDate: '2023-07-31',
      priority: 'Low',
    }, {
      id: '7',
      title: 'Project 7',
      description: 'Description of Project 7',
      status: 'In Progress',
      owner: 'Eva Green',
      startDate: '2023-07-01',
      endDate: '2023-06-30',
      priority: 'High',
    },
    {
      id: '8',
      title: 'Project 8',
      description: 'Description of Project 8',
      status: 'Completed',
      owner: 'Frank Harris',
      startDate: '2023-08-01',
      endDate: '2023-05-31',
      priority: 'Medium',
    },
    {
      id: '9',
      title: 'Project 9',
      description: 'Description of Project 9',
      status: 'Not Started',
      owner: 'Grace Lee',
      startDate: '2023-09-01',
      endDate: '',
      priority: '',
    },
    {
      id: '10',
      title: 'Project 10',
      description: 'Description of Project 10',
      status: '',
      owner: '',
      startDate: '',
      endDate: '',
      priority: '', 
    }
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
  getProject(index: number): IProject | null {
    if (index >= 0 && index < this.projects.length) {
      return this.projects[index];
    }
    return null;
  }
}
