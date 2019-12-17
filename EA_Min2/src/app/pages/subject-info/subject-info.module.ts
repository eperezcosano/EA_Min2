import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectInfoPageRoutingModule } from './subject-info-routing.module';

import { SubjectInfoPage } from './subject-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectInfoPageRoutingModule
  ],
  declarations: [SubjectInfoPage]
})
export class SubjectInfoPageModule {}
