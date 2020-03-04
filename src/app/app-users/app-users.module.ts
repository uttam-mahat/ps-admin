import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUsersRoutingModule } from './app-users-routing.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { AdminComponent } from './admin/admin/admin.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { UsersComponent } from './users/users/users.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminAddComponent,
    AdminEditComponent,
    AdminViewComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AppUsersRoutingModule,
    CKEditorModule,
    FormsModule,
  ]
})
export class AppUsersModule { }
