import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Student} from "../models/student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentUrl: string = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  getStudentsTel(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl + '/telematics');
  }

  getStudentsSys(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl + '/systems');
  }

  getStudentsAer(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl + '/aeros');
  }

  getStudentByName(name: string): Observable<Student> {
    return this.http.get<Student>(this.studentUrl + '/' + name);
  }

}
