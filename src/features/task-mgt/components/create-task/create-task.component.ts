import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask, TaskStatus } from '../../interfaces/task.interface';
import { TaskStoreService } from '../../services/task-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-task',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent implements OnInit, OnChanges {
  @Input() status: TaskStatus = 'OPEN';
  @Output() taskCreated = new EventEmitter<ITask>();
  @Input() isRouted = true;
  taskForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskStore: TaskStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      status: [this.status, Validators.required],
      assignee: ['', Validators.required],
      size: ['M', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status'] && !changes['status'].isFirstChange()) {
      this.taskForm.patchValue({ status: changes['status'].currentValue });
    }
  }

  onSubmit(): void {
    let projectId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.taskForm.valid) {
      const newTask: ITask = {
        id: Date.now(), // Generate a unique ID
        projectId: Number(this.route.snapshot.paramMap.get('id')),
        ...this.taskForm.value,
      };
      this.taskStore.addTask(newTask);
      this.taskForm.reset();
      if (this.isRouted) {
        this.router.navigateByUrl(
          `projects/view-project/${projectId}/backlogs`
        );
      } else {
        this.taskCreated.emit(newTask);
      }
    }
  }
}
