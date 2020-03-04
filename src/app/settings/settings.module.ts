import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';

import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { PriceManagementComponent } from './price-management/price-management.component';
import { RolesComponent } from './roles/roles.component';
import { AddressComponent } from './address/address.component';
import { Settings } from './settings.component';

@NgModule({
  declarations: [
    HomepageComponent,
    ProductComponent,
    PriceManagementComponent,
    RolesComponent,
    AddressComponent,
    Settings
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    CKEditorModule,
    FormsModule
  ]
})
export class SettingsModule { }
