import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { AboutUsViewComponent } from './about-us-view/about-us-view.component';
import { AboutUsAddEditComponent } from './about-us-add-edit/about-us-add-edit.component';

@NgModule({
  declarations: [
    AboutUsViewComponent,
    AboutUsAddEditComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    CKEditorModule,
    FormsModule,
  ]
})
export class AboutUsModule { }
