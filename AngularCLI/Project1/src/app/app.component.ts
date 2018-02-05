import { Component } from '@angular/core';

@Component({
  selector: 'abc',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedComponent: string;
  constructor() {
    let res = 3;
    console.log(res);
  }

  handleEmployees(e) {
    this.selectedComponent = "Employees";
  }
  handleStudents(e) {
    this.selectedComponent = "Students";
  }
}

