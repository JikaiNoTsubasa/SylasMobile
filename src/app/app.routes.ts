import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { authGuard } from './services/AuthGuard';
import { MainComponent } from './pages/main/main.component';
import { TodoComponent } from './pages/todo/todo.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', component: MainComponent },
            { path: 'todos', component: TodoComponent },
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
