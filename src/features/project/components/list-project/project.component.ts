import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from '../../../common/interfaces/project.interface';
import { ProjectStoreService } from '../../../common/services/project-store.service';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects: IProject[] = [];
  filteredProjects: IProject[] = [];
  isListView = false;
  isAccedingOrder = true;

  // Status counts
  allProjectsCount = 0;
  completedProjectsCount = 0;
  inProgressProjectsCount = 0;
  notStartedProjectsCount = 0;

  constructor(
    private router: Router,
    private storeService: ProjectStoreService
  ) {}

  ngOnInit() {
    this.projects = this.storeService.getProjects();
    this.filteredProjects = [...this.projects]; // Initialize with all projects

    // Calculate counts for each status
    this.allProjectsCount = this.projects.length;
    this.completedProjectsCount = this.projects.filter(
      (project) => project.status === 'COMPLETED'
    ).length;
    this.inProgressProjectsCount = this.projects.filter(
      (project) => project.status === 'IN_PROGRESS'
    ).length;
    this.notStartedProjectsCount = this.projects.filter(
      (project) => project.status === 'NOT_STARTED'
    ).length;
  }

  navigateToCreateProject() {
    this.router.navigateByUrl(`projects/create-project`);
  }

  viewProject(project: IProject) {
    this.router.navigateByUrl(`projects/view-project/${project.id}`);
  }

  filterByStatus(status: string) {
    if (status === 'ALL') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.status === status
      );
    }
  }

  trackByFn(index: number, item: IProject) {
    return item.id;
  }
}
