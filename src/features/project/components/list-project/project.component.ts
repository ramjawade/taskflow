import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FooterComponent } from '../../../../layout/footer/footer.component';

@Component({
  selector: 'app-project',
  imports: [FooterComponent, CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projects = [
    {
      title: 'Project Alpha',
      description: 'Description for Project Alpha',
      status: 'Completed',
      owner: 'Yash Jawade',
      startDate: '2025-01-01',
    },
    {
      title: 'Project Beta',
      description: 'Description for Project Beta',
      status: 'In Progress',
      owner: 'John Doe',
      startDate: '2025-02-15',
    },
    {
      title: 'Project Gamma',
      description: 'Description for Project Gamma',
      status: 'Not Started',
      owner: 'Jane Smith',
      startDate: '2025-03-10',
    },
    {
      title: 'Project Delta',
      description: 'Description for Project Delta',
      status: 'Completed',
      owner: 'Alice Johnson',
      startDate: '2025-04-20',
    },
    {
      title: 'Project Epsilon',
      description: 'Description for Project Epsilon',
      status: 'In Progress',
      owner: 'Bob Brown',
      startDate: '2025-05-30',
    },
    {
      title: 'Project Zeta',
      description: 'Description for Project Zeta',
      status: 'Not Started',
      owner: 'Charlie Davis',
      startDate: '2025-06-15',
    },
    {
      title: 'Project Eta',
      description: 'Description for Project Eta',
      status: 'Completed',
      owner: 'David Wilson',
      startDate: '2025-07-01',
    },
    {
      title: 'Project Theta',
      description: 'Description for Project Theta',
      status: 'In Progress',
      owner: 'Eva Green',
      startDate: '2025-08-10',
    },
    {
      title: 'Project Iota',
      description: 'Description for Project Iota',
      status: 'Not Started',
      owner: 'Frank Harris',
      startDate: '2025-09-20',
    },
    {
      title: 'Project Kappa',
      description: 'Description for Project Kappa',
      status: 'Completed',
      owner: 'Grace Lee',
      startDate: '2025-10-05',
    },
  ];

  constructor(private router: Router) {}

  navigateToCreateProject() {
    this.router.navigateByUrl(`/create-project`);
  }
}
