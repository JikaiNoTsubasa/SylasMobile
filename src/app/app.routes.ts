import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { authGuard } from './services/AuthGuard';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
