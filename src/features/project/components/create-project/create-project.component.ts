import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
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
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    status: new FormControl('NOT_STARTED', [Validators.required]),
    owner: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl(''),
    priority: new FormControl('LOW', [Validators.required]),
  });

  constructor(
    private projectStoreService: ProjectStoreService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.projectForm.valid) {
      const projectData = this.projectForm.getRawValue() as IProject;
      this.projectStoreService.addProject(projectData);

      this.router.navigate(['/projects']);
    } else {
      console.log('Form is invalid');
    }
  }

  goBack() {
    this.router.navigate(['/projects']);
  }
}
