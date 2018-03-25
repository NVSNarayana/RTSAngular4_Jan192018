import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../models/customer-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  custs: CustomerModel[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.custs = [];
    for (var i = 0; i < 10; i++) {
      this.custs.push(new CustomerModel(i, "C" + i, 30 + i));
    }
  }
  getAllDetails(c: CustomerModel) {
    this.router.navigate(['/customers/details'], { queryParams: { cno: c.cno, cname: c.cname, custAge: c.age } });
  }
}
