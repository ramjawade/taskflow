import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { ModalService } from '../../../../shared/modal/modal.service';
import { IProject } from '../../../common/interfaces/project.interface';
import { ProjectStoreService } from '../../../common/services/project-store.service';
import { ModalComponent } from '../../../../shared/modal/modal.component';
import { TaskStoreService } from '../../../task-mgt/services/task-store.service';
import { ITask } from '../../../task-mgt/interfaces/task.interface';

@Component({
  selector: 'app-view-project',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    ModalComponent,
    RouterModule,
  ],
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss'],
})
export class ViewProjectComponent implements OnInit, OnDestroy {
  project: IProject | any = null;
  tasks: ITask[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectStoreService: ProjectStoreService,
    private router: Router,
    private modalService: ModalService,
    private taskStoreService: TaskStoreService
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (!projectId) {
      console.error('Project ID is not provided');
      return;
    }
    this.tasks = this.taskStoreService.getTasks(projectId);
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
      this.modalService.show('modal1');
    } else {
      console.error('Project ID is not provided');
    }
  }

  apply() {
    this.modalService.hide('modal1');
    this.projectStoreService.deleteProject(this.project.id);
    this.router.navigateByUrl('/projects');
  }

  ngOnDestroy(): void {
    this.modalService.removeModal('modal1');
  }
  goBack() {
    this.router.navigateByUrl('/projects');
  }

  getCompletedTasksCount() {
    return this.tasks.filter((task) => task.status === 'COMPLETED').length;
  }

  getPendingTasksCount() {
    return this.tasks.filter((task) => task.status === 'OPEN' || task.status === 'IN_PROGRESS').length;
  }
}
