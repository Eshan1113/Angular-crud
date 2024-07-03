import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface StudentResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

export interface StudentResponseType {
  status: number;
  students: StudentResponse[];
}

export interface SingleStudentResponseType {
  status: number;
  student: StudentResponse;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  getStudents() {
    return this.httpClient.get<StudentResponseType>('http://127.0.0.1:8000/api/student');
  }

  getStudent(studentId: number) {
    return this.httpClient.get<SingleStudentResponseType>(`http://127.0.0.1:8000/api/student/show/${studentId}`);
  }

  saveStudent(inputData: object) {
    return this.httpClient.post('http://127.0.0.1:8000/api/student', inputData);
  }

  updateStudent(inputData: object, studentId: number) {
    return this.httpClient.put(`http://127.0.0.1:8000/api/student/edit/${studentId}`, inputData);
  }

  destroyStudent(studentId: Number) {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/student/del/${studentId}`);
  }
}
