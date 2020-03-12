import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { PriceManagementComponent } from './price-management/price-management.component';
import { RolesComponent } from './roles/roles.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'price-management',
    component: PriceManagementComponent
  },
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'address',
    component: AddressComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
