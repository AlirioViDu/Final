import { Injectable } from '@angular/core';
import { Students } from '../models/students';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  selectedStudent: Students
  students: Students[];
  readonly db_url = 'http://localhost:3000/api/students';

  constructor(private http: HttpClient) {
    this.selectedStudent = new Students();
  }

  getStudents() {
    return this.http.get(this.db_url);
  }

  getStudent(_id: string) {
    return this.http.get(this.db_url + `${_id}`);
  }

  createStudent(student: Students) {
    return this.http.post(this.db_url, student);
  }

  updateStudent(student: Students) {
    return this.http.put(this.db_url + `/${student._id}`, student)
  }

  deleteStudent(_id: string) {
    return this.http.delete(this.db_url + `/${_id}`);
  }

}
