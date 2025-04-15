import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ITask } from '../../interfaces/task.interface';
import { TaskStoreService } from '../../services/task-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-task',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskStore: TaskStoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // const projectId = this.route.snapshot.paramMap.get('id');
    // if (!projectId) {
    //   console.error('Project ID is not provided');
    //   return;
    // }
    // console.log('Project ID:', projectId);

    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      status: ['OPEN', Validators.required],
      assignee: ['', Validators.required],
      size: ['M', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: ITask = {
        id: Date.now(), // Generate a unique ID
        projectId: Number(this.route.snapshot.paramMap.get('id')),
        ...this.taskForm.value,
      };
      this.taskStore.addTask(newTask);
      this.taskForm.reset();
    }
  }
}
