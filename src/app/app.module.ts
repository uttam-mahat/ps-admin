import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CKEditorModule } from 'ngx-ckeditor';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LoginComponent } from './login';;
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoaderInterceptor } from './_helpers/loader.interceptor';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AboutUsModule } from './about-us/about-us.module';
import { FaqModule } from './faq/faq.module';
import { ProductModule } from './product/product.module';
import { OrderManagementModule } from './order-management/order-management.module';
import { BulkOrdersModule } from './bulk-orders/bulk-orders.module';
import { AppUsersModule } from './app-users/app-users.module';
import { CartsModule } from './carts/carts.module';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        NgxUiLoaderModule,
        CKEditorModule,
        FormsModule,
        AboutUsModule,
        FaqModule,
        ProductModule,
        OrderManagementModule,
        BulkOrdersModule,
        AppUsersModule,
        CartsModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        DashboardComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }