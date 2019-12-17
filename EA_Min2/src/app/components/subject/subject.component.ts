import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../models/subject";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService, private navCtrl: NavController) { }

  subjects: Subject[];

  async ngOnInit() {
    this.subjects = await this.subjectService.getSubjects().toPromise();
  }

  viewSubjectInfo(subject: string) {
    this.navCtrl.navigateForward('/subject-info/' + subject);
  }

}
