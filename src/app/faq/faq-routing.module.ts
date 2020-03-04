import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqsComponent } from './faqs/faqs.component';
import { FaqsAddComponent } from './faqs-add/faqs-add.component';
import { FaqsEditComponent } from './faqs-edit/faqs-edit.component';

const routes: Routes = [
  { path: 'faqs', component: FaqsComponent },
  { path: 'faqs-add', component: FaqsAddComponent },
  { path: 'faqs-edit', component: FaqsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
