import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { UsersRoutingModule } from './users-routing.module';

import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CKEditorModule,
    FormsModule,
  ]
})
export class UsersModule { }
