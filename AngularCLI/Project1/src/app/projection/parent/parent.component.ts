import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less']
})
export class ParentComponent implements OnInit {
  header: string = "Employee Details";
  constructor() { }

  ngOnInit() {
  }
  updateHeader() {
    this.header = "This is modified Emploee details";
  }
}
