import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService, private navCtrl: NavController) { }

  studentsTel: Student[];
  studentsSys: Student[];
  studentsAer: Student[];

  async ngOnInit() {
    this.studentsTel = await this.studentService.getStudentsTel().toPromise();
    this.studentsSys = await this.studentService.getStudentsSys().toPromise();
    this.studentsAer = await this.studentService.getStudentsAer().toPromise();
  }

  viewStudentInfo(name: string): void {
    this.navCtrl.navigateForward('/student-info/' + name);
  }

}
