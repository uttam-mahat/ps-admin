import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkOrdersRoutingModule } from './bulk-orders-routing.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { BulkOrdersComponent } from './bulk-orders/bulk-orders.component';
import { BulkOrdersAddComponent } from './bulk-orders-add/bulk-orders-add.component';
import { BulkOrdersEditComponent } from './bulk-orders-edit/bulk-orders-edit.component';
import { BulkOrdersViewComponent } from './bulk-orders-view/bulk-orders-view.component';

@NgModule({
  declarations: [
    BulkOrdersComponent,
    BulkOrdersAddComponent,
    BulkOrdersEditComponent,
    BulkOrdersViewComponent
  ],
  imports: [
    CommonModule,
    BulkOrdersRoutingModule,
    CKEditorModule,
    FormsModule,
  ]
})
export class BulkOrdersModule { }
