import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';
import { CartsComponent } from './carts/carts.component';


@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
    CKEditorModule,
    FormsModule,
  ]
})
export class CartsModule { }
