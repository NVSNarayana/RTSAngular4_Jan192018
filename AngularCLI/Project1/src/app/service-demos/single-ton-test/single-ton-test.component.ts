import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-single-ton-test',
  templateUrl: './single-ton-test.component.html',
  styleUrls: ['./single-ton-test.component.less']
})
export class SingleTonTestComponent implements OnInit {

  constructor(private empSvc: EmployeeService) { }

  ngOnInit() {
    console.log(this.empSvc.currentDateString);
  }
  updateServiceDateString() {
    this.empSvc.currentDateString ="From Single-top-test "+ new Date().toString();
  }
  ReadServiceDateString(){
    console.log(this.empSvc.currentDateString);
  }
}
