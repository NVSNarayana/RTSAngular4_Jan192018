import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  routeParam:string;
  constructor(private activRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activRoute.params.subscribe(v=>{
      this.routeParam= v["id"];
    })
  }

}
