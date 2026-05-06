import { Routes } from '@angular/router';
import { OnacHomeComponent } from './pages/onac-home/onac-home.component';
import { OnacFormComponent } from './pages/onac-form/onac-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/onac',
        pathMatch: 'full'
    },
    {
        path: 'onac',
        component: OnacHomeComponent
    },
    {
        path: 'onac/form',
        component: OnacFormComponent
    }
];
