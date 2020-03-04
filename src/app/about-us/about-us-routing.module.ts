import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsViewComponent } from './about-us-view/about-us-view.component';
import { AboutUsAddEditComponent } from './about-us-add-edit/about-us-add-edit.component';

const routes: Routes = [
  { path: 'aboutUs', component: AboutUsViewComponent },
  { path: 'aboutUs-edit', component: AboutUsAddEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
