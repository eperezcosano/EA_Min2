import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-subject-info',
  templateUrl: './subject-info.page.html',
  styleUrls: ['./subject-info.page.scss'],
})
export class SubjectInfoPage implements OnInit {

  subjectName: string;

  constructor(private route: ActivatedRoute) {
    this.subjectName = this.route.snapshot.paramMap.get('subject')
  }

  ngOnInit() {
  }

}
