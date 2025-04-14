import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  onSubmit() {
    if (this.projectForm.valid) {
      const projectData = this.projectForm.getRawValue();
      console.log('Project Data:', projectData);
      // Here you can send the data to your backend or perform any other action
    } else {
      console.log('Form is invalid');
    }
  }
}
