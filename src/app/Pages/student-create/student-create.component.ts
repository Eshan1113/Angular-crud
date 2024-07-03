import { Component } from '@angular/core';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  errors: any = {}; // Object to hold error messages
  errorMessage: string = ''; // Variable for general error message
  isLoading: boolean = false; // Loading state flag
  loadingTitle: string = 'Loading'; // Loading state message

  constructor(private studentService: StudentService) { }

  saveStudent() {
    this.isLoading = true;
    this.loadingTitle = 'Saving';

    // Reset errors before submitting
    this.errors = {};

    // Validate inputs
    if (!this.name) {
      this.errors.name = 'Name is required';
    }
    if (!this.email) {
      this.errors.email = 'Email is required';
    }
    if (!this.phone) {
      this.errors.phone = 'Phone is required';
    }

    // If any errors exist, prevent form submission
    if (Object.keys(this.errors).length > 0) {
      this.isLoading = false; // Reset loading state if there are errors
      return;
    }

    // Prepare data to save
    const inputData = {
      name: this.name,
      email: this.email,
      phone: this.phone
    };

    // Call service to save data
    this.studentService.saveStudent(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        this.isLoading = false;
        alert(res.message); // Display success message
        this.name = ''; // Clear form fields after successful save
        this.email = '';
        this.phone = '';
        // Optionally handle success (navigate, show success message, etc.)
      },
      error: (err: any) => {
        this.isLoading = false; // Reset loading state on error
        if (err.error && err.error.message) {
          this.errorMessage = err.error.message; // Set specific error message from server
          console.log(this.errorMessage, 'error message');
        } else {
          console.error('Unexpected error:', err);
          this.errorMessage = 'Unexpected error occurred.'; // Set a generic error message
        }
        // Optionally display error messages to the user
      }
    });
  }
}
