import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../services/event-emiiter.service';
import { EmployeeModel } from '../models/employee-model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private _emitSvc: EventEmitterService) {
    this._emitSvc.empDetailsEmitter.subscribe((v: EmployeeModel) => {
      console.log("This is Address Component");
      console.log(v);
    });
  }

  ngOnInit() {
  }

}
