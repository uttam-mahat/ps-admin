import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { ProductsComponent } from './products/products.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CKEditorModule,
    FormsModule,
  ]
})
export class ProductModule { }
