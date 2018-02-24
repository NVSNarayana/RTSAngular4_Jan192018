import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showDiv: boolean = true;
  students = [];

  constructor() {
    for (var i = 1000; i < 1020; i++) {
      this.students.push({ sno: i, sname: "S" + i, age: this.getRandamNumber(20, 40), marks: this.getRandamNumber(1, 100) })
    }
  }

  clickHere() {
    this.showDiv = !this.showDiv;
  }

  getRandamNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRowId(sno: number): string {
    return "stu_" + sno;
  }

}
