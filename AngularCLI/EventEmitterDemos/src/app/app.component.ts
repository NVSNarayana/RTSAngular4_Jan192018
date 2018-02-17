import { Component, EventEmitter } from '@angular/core';
import { EventEmitterService } from './services/event-emiiter.service';
import { EmployeeModel } from './models/employee-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  stringEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor(private _emitSvc: EventEmitterService) {
    //this.stringEmitter.emit("before subscibe");

    this.stringEmitter.subscribe((v: string) => {
      console.log("First Subscribe: " + v);
    });
    this.stringEmitter.subscribe((v: string) => {
      console.log("Second Subscribe: " + v);
    });

    // this.stringEmitter.emit("After subscribe1");
    // this.stringEmitter.emit("After subscribe2");
    // this.stringEmitter.emit("After subscribe3");
    // this.stringEmitter.emit("After subscribe4");

    this._emitSvc.empDetailsEmitter.subscribe((v: EmployeeModel) => {
      console.log("This is App Component");
      console.log(v);
    });
  }

  emit() {
    this.stringEmitter.emit("Emitting from button click");
  }
}
