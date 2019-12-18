import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.page.html',
  styleUrls: ['./student-info.page.scss'],
})
export class StudentInfoPage implements OnInit {

  studentName: string;
  student: Student = new Student();

  constructor(private studentService: StudentService, private route: ActivatedRoute) {
    this.studentName = this.route.snapshot.paramMap.get('name');
  }

  async ngOnInit() {
    let tmp = await this.studentService.getStudentByName(this.studentName).toPromise();
    this.student = tmp[0];
  }

}
