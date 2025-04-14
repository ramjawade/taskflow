import { Routes } from '@angular/router';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectComponent } from './components/list-project/project.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';

export const projectRoutes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
  },{
    path:'view-project/:id',
    component: ViewProjectComponent,
    children: [{
      path:'',
      loadChildren: () => import('../task-mgt/task-mgt.routes').then(r => r.taskRoutes)
    }]  
  }
];
