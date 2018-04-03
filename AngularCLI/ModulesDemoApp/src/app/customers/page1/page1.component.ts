import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  var resolveData=  this.route.snapshot.data["cust"];
    console.log(resolveData);
  }


}
