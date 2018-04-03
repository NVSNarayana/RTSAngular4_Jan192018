import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  routeParam: string;
  emp: any;
  constructor(private activRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activRoute.params.subscribe(v => {
      console.log(v);
      this.routeParam = v["id"];
     var data= this.activRoute.snapshot.data["emp"];
     console.log(data);
this.emp=data;
      // var ob = Observable.of({ eno: this.routeParam, ename: "E" + this.routeParam, age: 30 }).delay(5000);//this data comes from api
      // ob.subscribe(v => {
      //   this.emp = v;
      // })
    })
  }

}
