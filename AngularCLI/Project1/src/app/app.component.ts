import { Component, ViewChild } from '@angular/core';
import { StuEmpUIModel } from './models/stu-emp-ui.model';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-appcomponent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedComponent: string;
  stuEmpUI: StuEmpUIModel;
  empCaption: string = "Employee Details";
  stuCaption: string = "Student Details";
  @ViewChild("empComponent") empComponent: EmployeesComponent;

  // captionP: string;
  // noP: string;
  // nameP: string;
  // ageP: string;

  constructor(private empSvc:EmployeeService) {
    let res = 3;
    this.stuEmpUI = new StuEmpUIModel();
  }
  handleMenuClick(menuText: string) {
    this.selectedComponent = menuText;
    if (menuText == "Employees") {
      this.stuEmpUI.caption = "Emp Details";
      this.stuEmpUI.name = "Ename";
      this.stuEmpUI.no = "Eno";
      this.stuEmpUI.age = "Age";
      // this.captionP = "Employee Details";
      // this.noP = "Eno";
      // this.nameP = "Ename";
      // this.ageP = "Emp Age";
    } else if (menuText == "Students") {
      // this.captionP = "Student Details";
      // this.noP = "Sno";
      // this.nameP = "Sname";
      // this.ageP = "Age";
      this.stuEmpUI.caption = "Stu Details";
      this.stuEmpUI.name = "Sname";
      this.stuEmpUI.no = "Sno";
      this.stuEmpUI.age = "Age";
    }
  }

  onSubmit() {
    console.log("Submit from AppComponent.ts");
    //this.empCaption="Employeee Detalis modified";
    this.empComponent.caption = "Caption updated from parent (Appcomponent.ts)";
    this.empComponent.submit();
  }
  updateServiceDateString() {
    this.empSvc.currentDateString ='From AppComponet: '+ new Date().toString();
  }
  ReadServiceDateString(){
    console.log(this.empSvc.currentDateString);
  }
}

