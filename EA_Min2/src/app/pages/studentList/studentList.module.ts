import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentListPage } from './studentList.page';
import {StudentComponent} from "../../components/student/student.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: StudentListPage }])
  ],
  declarations: [StudentListPage, StudentComponent]
})
export class StudentListPageModule {}
