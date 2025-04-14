import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Project } from '../../modals/project';
import { IProject } from '../../../common/interfaces/project.interface';
import { Router } from '@angular/router';
import { ProjectStoreService } from '../../../common/services/project-store.service';

@Component({
  selector: 'app-create-project',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss',
})
export class CreateProjectComponent {
  projectForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    owner: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    priority: new FormControl(''),
  });

  constructor(
    private projectStoreService: ProjectStoreService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.projectForm.valid) {
      const projectData = this.projectForm.getRawValue() as IProject;
      this.projectStoreService.addProject(new Project(projectData));

      this.router.navigate(['/projects']);
    } else {
      console.log('Form is invalid');
    }
  }
}
