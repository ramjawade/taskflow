import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FooterComponent } from '../../../../layout/footer/footer.component';
import { IProject } from '../../../common/interfaces/project.interface';
import { ProjectStoreService } from '../../../common/services/project-store.service';

@Component({
  selector: 'app-project',
  imports: [FooterComponent, CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects: IProject[] = [];

  constructor(
    private router: Router,
    private storeService: ProjectStoreService
  ) {}

  ngOnInit() {
    this.projects = this.storeService.getProjects();
  }

  navigateToCreateProject() {
    this.router.navigateByUrl(`projects/create-project`);
  }

  viewProject(project: IProject) {
    this.router.navigateByUrl(`projects/view-project/${project.id}`);
  }

}
