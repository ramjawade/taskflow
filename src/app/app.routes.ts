import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'projects',
    loadChildren : ()=> import('../features/project/project.routes').then(r=>r.projectRoutes)
},{
    path:'',
    redirectTo:'projects',
    pathMatch:'full'
}];
