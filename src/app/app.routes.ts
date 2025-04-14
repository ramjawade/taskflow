import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren : ()=> import('../features/project/project.routes').then(r=>r.projectRoutes)
}];
