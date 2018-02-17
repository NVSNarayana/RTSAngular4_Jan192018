import { Component } from '@angular/core';

@Component({
  selector: 'employees',
  template:`<div class="red"> this is Employees Component with Title {{title}}</div
  >`,
  styles:[`
    .red{color:red;}
  `]
})
export class EmployeesComponent1 {
  title = 'Employees';
  constructor() {

  }
}
