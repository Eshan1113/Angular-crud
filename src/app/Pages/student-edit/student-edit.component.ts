import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService, StudentResponse } from '../../Services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentId: any;
  student!: StudentResponse;
  errors: any = {}; // Object to hold error messages
  errorMessage: string = ''; // Variable for general error message
  isLoading: boolean = false; // Loading state flag
  loadingTitle: string = 'Loading';

  constructor(private route: ActivatedRoute, private studentService: StudentService) {}

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.studentService.getStudent(this.studentId).subscribe(
      res => {
        console.log(res);
        this.student = res.student;
        this.isLoading = false;
      },
      err => {
        this.errorMessage = 'An error occurred while fetching the student data.';
        this.isLoading = false;
      }
    );
  }

  updateStudent() {
    const inputData = {
      name: this.student.name,
      email: this.student.email,
      phone: this.student.phone
    };
    this.isLoading = true;
    this.studentService.updateStudent(inputData, this.studentId).subscribe(
      (res: any) => {
        console.log(res);
        alert(res.message);
        this.isLoading = false;
      },
      (err: any) => {
        console.log(err);
        this.errors = err.error.message;
        this.isLoading = false;
      }
    );
  }
}
