import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true, scrollPositionRestoration: 'enabled' });