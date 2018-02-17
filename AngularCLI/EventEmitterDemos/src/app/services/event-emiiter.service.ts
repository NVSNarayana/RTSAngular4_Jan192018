import { Injectable, EventEmitter } from '@angular/core';
import { EmployeeModel } from '../models/employee-model';

@Injectable()
export class EventEmitterService {
  empDetailsEmitter: EventEmitter<EmployeeModel>

  constructor() {
    this.empDetailsEmitter = new EventEmitter<EmployeeModel>();
  }

}
