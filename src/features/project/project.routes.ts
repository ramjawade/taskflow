import { Routes } from '@angular/router';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectComponent } from './components/list-project/project.component';

export const projectRoutes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
  },
];
