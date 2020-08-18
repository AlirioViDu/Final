import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { NgForm } from '@angular/forms';
import { Students } from 'src/app/models/students';

declare var M: any;

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentsService]
})
export class StudentsComponent implements OnInit {

  constructor(public studentService: StudentsService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.studentService.selectedStudent = new Students();
    }
  }

  addStudent(sFrom: NgForm ) {
    /* console.log(sFrom.value); */
    if (sFrom.value._id) {
      this.studentService.updateStudent(sFrom.value).subscribe((res: any) => {
        this.resetForm();
        M.toast({html: res.status});
        this.getStudents();
      });
    } else {
      this.studentService.createStudent(sFrom.value).subscribe((res: any) => {
        this.resetForm();
        M.toast({html: res.status});
        this.getStudents();
      });
    }
  }

  getStudents() {
    this.studentService.getStudents().subscribe((res) => {
      this.studentService.students = res as Students[];
    });
  }

  editStudent(student: Students){
    this.studentService.selectedStudent = student;
  }

  deleteStudent(_id: string){
    if(confirm("Are you sure you want to delete")){
      this.studentService.deleteStudent(_id).subscribe((res:any) => {
        M.toast({html: res.status});
        this.getStudents();        
      });
    }
  }


}
