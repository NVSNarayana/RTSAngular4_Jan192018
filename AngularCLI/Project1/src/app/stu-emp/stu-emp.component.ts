import { Component, OnInit, Input } from '@angular/core';
import { StuEmpUIModel } from '../models/stu-emp-ui.model';

@Component({
  selector: 'app-stu-emp',
  templateUrl: './stu-emp.component.html',
  styleUrls: ['./stu-emp.component.less']
})
export class StuEmpComponent implements OnInit {
  // @Input() caption: string;
  // @Input() no: string;
  // @Input() name: string;
  // @Input() age: string;
  @Input() stuEmpUIModel: StuEmpUIModel;
  
  constructor() { }

  ngOnInit() {
  }

}
