import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin/admin.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { UsersComponent } from './users/users/users.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin-add', component: AdminAddComponent },
  { path: 'admin-edit', component: AdminEditComponent },
  { path: 'admin-view', component: AdminViewComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUsersRoutingModule { }
