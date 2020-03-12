import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'add',
    component: AdminAddComponent,
  },
  {
    path: 'edit',
    component: AdminEditComponent,
  },
  {
    path: 'view',
    component: AdminViewComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
