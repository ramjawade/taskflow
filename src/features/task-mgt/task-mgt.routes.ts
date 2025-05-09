import { Route } from '@angular/router';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

export const taskRoutes: Route[] = [
  {
    path: 'create',
    component: CreateTaskComponent
  },
  {
    path: 'board',
    component: TaskBoardComponent,
  },
  {
    path: 'backlogs',
    component: ListTaskComponent,
  },
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full',
  },
];
