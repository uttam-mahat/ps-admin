import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderManagementRoutingModule } from './order-management-routing.module';

import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { OrderManagement } from './order-management.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { OrderProcessingComponent } from './order-processing/order-processing.component';
import { OrderDispatchedComponent } from './order-dispatched/order-dispatched.component';
import { OrderDeliveredComponent } from './order-delivered/order-delivered.component';
import { OrderReadyForCollectionComponent } from './order-ready-for-collection/order-ready-for-collection.component';
import { OrderPaymentPendingComponent } from './order-payment-pending/order-payment-pending.component';
import { OrderPaymentReceivedComponent } from './order-payment-received/order-payment-received.component';
import { OrderDeferredComponent } from './order-deferred/order-deferred.component';

@NgModule({
  declarations: [
    OrderManagement,
    OrderPlacedComponent,
    OrderProcessingComponent,
    OrderDispatchedComponent,
    OrderDeliveredComponent,
    OrderReadyForCollectionComponent,
    OrderPaymentPendingComponent,
    OrderPaymentReceivedComponent,
    OrderDeferredComponent
  ],
  imports: [
    CommonModule,
    OrderManagementRoutingModule,
    CKEditorModule,
    FormsModule
  ]
})
export class OrderManagementModule { }
