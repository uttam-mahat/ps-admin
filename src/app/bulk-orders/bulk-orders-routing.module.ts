import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulkOrdersComponent } from './bulk-orders/bulk-orders.component';
import { BulkOrdersAddComponent } from './bulk-orders-add/bulk-orders-add.component';
import { BulkOrdersEditComponent } from './bulk-orders-edit/bulk-orders-edit.component';
import { BulkOrdersViewComponent } from './bulk-orders-view/bulk-orders-view.component';

const routes: Routes = [
  {
    path: '',
    component: BulkOrdersComponent
  },
  {
    path: 'view',
    component: BulkOrdersViewComponent
  },
  {
    path: 'add',
    component: BulkOrdersAddComponent
  },
  {
    path: 'edit',
    component: BulkOrdersEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkOrdersRoutingModule { }
