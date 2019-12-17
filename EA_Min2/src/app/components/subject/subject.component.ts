import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../models/subject";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  subjects: Subject[];

  async ngOnInit() {
    this.subjects = await this.subjectService.getSubjects().toPromise();
  }

}
