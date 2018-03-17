import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-ngcontainer-demo',
  templateUrl: './ngcontainer-demo.component.html',
  styleUrls: ['./ngcontainer-demo.component.css']
})
export class NgcontainerDemoComponent implements OnInit {
  templateNumber: number;
  dynamicComponent: any;

  constructor() { }

  ngOnInit() {
  }
  onKeyup() {
    console.log(this.templateNumber);
  }
  loadEmpComp() {
    this.dynamicComponent = EmployeeComponent;
  }
  loadStuComp() {
    this.dynamicComponent = StudentComponent;

  }
}
