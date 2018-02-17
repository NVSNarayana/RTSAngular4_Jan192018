import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { StudentsComponent } from './students/students.component';
import { MenuComponent } from './menu/menu.component';
import { AddressComponent } from './address/address.component';
import { StuEmpComponent } from './stu-emp/stu-emp.component';
import { ParentComponent } from './projection/parent/parent.component';
import { ChildComponent } from './projection/parent/child/child.component';
import { SingleTonTestComponent } from './service-demos/single-ton-test/single-ton-test.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    StudentsComponent,
    MenuComponent,
    AddressComponent,
    StuEmpComponent,
    ParentComponent,
    ChildComponent,
    SingleTonTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
