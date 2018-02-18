import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { EmployeeModel } from '../../models/employee-model';
import { AddressModel } from '../../models/address-model';


@Component({
  selector: 'app-predefiend-pipes',
  templateUrl: './predefiend-pipes.component.html',
  styleUrls: ['./predefiend-pipes.component.css']
})
export class PredefiendPipesComponent implements OnInit {
  asynData: EventEmitter<string[]> = new EventEmitter();

  arrStr: string[] = ["ONe", "tWo", "Three"];
  index: number = 0;
  emp: EmployeeModel = new EmployeeModel(2000, "RTS", 40);
  addressModel: AddressModel = new AddressModel();
  htmlProp:string="<div style='color:red;'>My Html Div</div>";

  constructor() {
    this.asynData.subscribe(v => {
      this.arrStr = v;
    });
    this.addressModel.addressLine1 = "2-3003";
    this.addressModel.adrdessLine2 = "5th Main";
    this.addressModel.city = "BLR";
    this.addressModel.state = "KA";
    this.addressModel.pin = "560089";
  }

  ngOnInit() {

    // setInterval(() => {
    //   console.log("interval");
    //   //this.asynData.emit(["One"+this.index, "Two"+this.index, "Three"+this.index])
    //   this.index++;
    // }, 5000);

    Observable.interval(5000).subscribe(v => {
      this.arrStr = ["One" + v, "Two" + v, "Three" + v];
      this.asynData.emit(this.arrStr);
    })
  }

  abc(): void {//void Method

  }

  abc1(): string {//string return method
    return "aa";
  }

}
