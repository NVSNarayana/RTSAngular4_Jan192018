import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../models/student-model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studs: StudentModel[];
  constructor() { }

  ngOnInit() {
    this.studs = [];
    for (let i = 0; i < 10; i++) {
      this.studs.push({ sno: i, sname: "S" + i, age: 20 + i, address: "Adre" + i, section: 'A' })
    }
  }

}
