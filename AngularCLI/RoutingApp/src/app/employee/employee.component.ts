import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
emps:EmployeeModel[];
  constructor() { }

  ngOnInit() {
    this.emps=[];
    for (let index = 0; index < 10; index++) {
      this.emps.push({eno:index, ename:"E"+index, age:20+index, address:"blr"+index});
    }
  }

}
