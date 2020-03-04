import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { FaqsComponent } from './faqs/faqs.component';
import { FaqsAddComponent } from './faqs-add/faqs-add.component';
import { FaqsEditComponent } from './faqs-edit/faqs-edit.component';

@NgModule({
  declarations: [
    FaqsComponent,
    FaqsAddComponent,
    FaqsEditComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    CKEditorModule,
    FormsModule,
  ]
})
export class FaqModule { }
