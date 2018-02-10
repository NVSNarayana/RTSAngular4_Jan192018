import { Component } from '@angular/core';
import { StuEmpUIModel } from './models/stu-emp-ui.model';

@Component({
  selector: 'app-appcomponent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedComponent: string;
  stuEmpUI:StuEmpUIModel;
  // captionP: string;
  // noP: string;
  // nameP: string;
  // ageP: string;

  constructor() {
    let res = 3;
    console.log(res);
    this.stuEmpUI=new StuEmpUIModel();
  }
  handleMenuClick(menuText: string) {
    this.selectedComponent = menuText;
    if (menuText == "Employees") {
      this.stuEmpUI.caption="Emp Details";
      this.stuEmpUI.name="Ename";
      this.stuEmpUI.no="Eno";
      this.stuEmpUI.age="Age";
      // this.captionP = "Employee Details";
      // this.noP = "Eno";
      // this.nameP = "Ename";
      // this.ageP = "Emp Age";
    } else if (menuText == "Students") {
      // this.captionP = "Student Details";
      // this.noP = "Sno";
      // this.nameP = "Sname";
      // this.ageP = "Age";
      this.stuEmpUI.caption="Stu Details";
      this.stuEmpUI.name="Sname";
      this.stuEmpUI.no="Sno";
      this.stuEmpUI.age="Age";
    }


  }

}

