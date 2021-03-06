import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../models/subject";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-subject-info',
  templateUrl: './subject-info.page.html',
  styleUrls: ['./subject-info.page.scss'],
})
export class SubjectInfoPage implements OnInit {

  subjectName: string;
  subject: Subject = new Subject();

  constructor(private subjectService: SubjectService, private route: ActivatedRoute, private navCtrl: NavController) {
    this.subjectName = this.route.snapshot.paramMap.get('subject');
  }

  async ngOnInit() {
    let tmp = await this.subjectService.getStudentsFromSubject(this.subjectName).toPromise();
    this.subject = tmp[0];
  }

  viewStudentInfo(name: string): void {
    this.navCtrl.navigateForward('/student-info/' + name);
  }

}
