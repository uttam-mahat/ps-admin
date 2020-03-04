import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'product-view', component: ProductViewComponent },
  { path: 'products-add', component: ProductsAddComponent },
  { path: 'products-edit', component: ProductsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
