import { Component } from '@angular/core';
import {
  StudentResponse,
  StudentService,
} from '../../Services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css',
})
export class StudentPageComponent {
  constructor(private studentService: StudentService) {}
  students!: StudentResponse[];
  isLoading: boolean = false;
  ngOnInit() {
    this.getStudentLists();
  }

  getStudentLists() {
    this.isLoading = true;
    this.studentService.getStudents().subscribe((res: any) => {
      console.log(res.student);
      this.students = res.student;
      this.isLoading = false;
    });
  }
  deleteStudent(event: any, studentId: Number) {
    if (confirm('Are You Sure You Want to Delete This Data')) {
      event.target.innerText = 'Deleting...';
      this.studentService.destroyStudent(studentId).subscribe((res: any) => {
        this.getStudentLists();
        alert(res.message);
      });
    }
  }
}
