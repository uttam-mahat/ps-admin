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
    {
        path: '',
        component: OrderManagement
    },
    {
        path: 'placed',
        component: OrderPlacedComponent
    },
    {
        path: 'processing',
        component: OrderProcessingComponent
    },
    {
        path: 'dispatched',
        component: OrderDispatchedComponent
    },
    {
        path: 'delivered',
        component: OrderDeliveredComponent
    },
    {
        path: 'readyForCollection',
        component: OrderReadyForCollectionComponent
    },
    {
        path: 'paymentPending',
        component: OrderPaymentPendingComponent
    },
    {
        path: 'paymentReceived',
        component: OrderPaymentReceivedComponent
    },
    {
        path: 'deferred',
        component: OrderDeferredComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderManagementRoutingModule { }
