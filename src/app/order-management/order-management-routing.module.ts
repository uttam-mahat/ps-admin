import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderManagement } from './order-management.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { OrderProcessingComponent } from './order-processing/order-processing.component';
import { OrderDispatchedComponent } from './order-dispatched/order-dispatched.component';
import { OrderDeliveredComponent } from './order-delivered/order-delivered.component';
import { OrderReadyForCollectionComponent } from './order-ready-for-collection/order-ready-for-collection.component';
import { OrderPaymentPendingComponent } from './order-payment-pending/order-payment-pending.component';
import { OrderPaymentReceivedComponent } from './order-payment-received/order-payment-received.component';
import { OrderDeferredComponent } from './order-deferred/order-deferred.component';


const routes: Routes = [
    { path: 'order-management', component: OrderManagement },
    { path: 'order-placed', component: OrderPlacedComponent },
    { path: 'order-processing', component: OrderProcessingComponent },
    { path: 'order-dispatched', component: OrderDispatchedComponent },
    { path: 'order-delivered', component: OrderDeliveredComponent },
    { path: 'order-readyForCollection', component: OrderReadyForCollectionComponent },
    { path: 'order-paymentPending', component: OrderPaymentPendingComponent },
    { path: 'order-paymentReceived', component: OrderPaymentReceivedComponent },
    { path: 'order-deferred', component: OrderDeferredComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderManagementRoutingModule { }
