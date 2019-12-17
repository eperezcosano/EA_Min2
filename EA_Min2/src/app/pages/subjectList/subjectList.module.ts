import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubjectListPage } from './subjectList.page';
import {SubjectComponent} from "../../components/subject/subject.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SubjectListPage }])
  ],
    declarations: [SubjectListPage, SubjectComponent]
})
export class SubjectListPageModule {}
