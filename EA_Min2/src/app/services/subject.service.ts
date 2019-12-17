import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Subject} from "../models/subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjectUrl: string = 'http://localhost:3000/subjects';

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectUrl);
  }

  getStudentsFromSubject(subject: string): Observable<Subject> {
    return this.http.get<Subject>(this.subjectUrl + '/' + subject);
  }

}
