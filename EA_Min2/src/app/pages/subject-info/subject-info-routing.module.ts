import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectInfoPage } from './subject-info.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectInfoPageRoutingModule {}
