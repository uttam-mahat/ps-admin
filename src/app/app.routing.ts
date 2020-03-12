import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    },
    {
        path: 'admin',
        loadChildren: './app-users/admin/admin.module#AdminModule'
    },
    {
        path: 'user-list',
        loadChildren: './app-users/users/users.module#UsersModule'
    },
    {
        path: 'bulk-orders',
        loadChildren: './bulk-orders/bulk-orders.module#BulkOrdersModule'
    },
    {
        path: 'cart-list',
        loadChildren: './carts/carts.module#CartsModule'
    },
    {
        path: 'faqs',
        loadChildren: './faq/faq.module#FaqModule'
    },
    {
        path: 'orders',
        loadChildren: './order-management/order-management.module#OrderManagementModule'
    },
    {
        path: 'product',
        loadChildren: './product/product.module#ProductModule'
    },
    {
        path: 'about-us',
        loadChildren: './about-us/about-us.module#AboutUsModule'
    },

    // otherwise redirect to home
    {
        path: '**',
        redirectTo: ''
    }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true, scrollPositionRestoration: 'enabled' });