import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/employee-model';
import { AddressModel } from '../models/address-model';
import { EventEmitterService } from '../services/event-emiiter.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _emitterSvc:EventEmitterService) { }

  ngOnInit() {
  }
  emitEmployee(){
    var addr=new AddressModel();
    addr.addressLine1="1-200";
    addr.adrdessLine2="abc street";
    addr.city="BLR";
    addr.state="Karnataka";
    addr.pin="560023";
    var emp= new EmployeeModel(1000, "A", 25,addr );
    this._emitterSvc.empDetailsEmitter.emit(emp);
  }
}
