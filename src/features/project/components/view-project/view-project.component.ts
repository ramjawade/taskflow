import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { ModalService } from '../../../../shared/modal/modal.service';
import { IProject } from '../../../common/interfaces/project.interface';
import { ProjectStoreService } from '../../../common/services/project-store.service';

@Component({
  selector: 'app-view-project',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss'],
})
export class ViewProjectComponent implements OnInit {
  project: IProject | any = null;

  constructor(
    private route: ActivatedRoute,
    private projectStoreService: ProjectStoreService,
    private router: Router,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (!projectId) {
      console.error('Project ID is not provided');
      return;
    }
    this.project = this.projectStoreService.getProject(projectId);
    console.log('Project ID:', projectId);
  }

  createNewTask() {
    this.router.navigateByUrl(
      `projects/view-project/${this.project.id}/create`
    );
  }

  deleteProject() {
    const projectId = this.project.id;
    if (projectId) {
      this.projectStoreService.deleteProject(projectId);
      this.router.navigateByUrl('/projects');
    } else {
      console.error('Project ID is not provided');
    }
  }
}
