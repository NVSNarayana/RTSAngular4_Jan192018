import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() menuClickEvent: EventEmitter<string>=new EventEmitter();

  constructor() { }

  handleEmployees() {
  this.menuClickEvent.emit("Employees");
  }
  handleStudents() {
    this.menuClickEvent.emit("Students");
  }

}
