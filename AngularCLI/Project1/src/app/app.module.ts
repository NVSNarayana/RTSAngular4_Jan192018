import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { StudentsComponent } from './students/students.component';
import { MenuComponent } from './menu/menu.component';
import { AddressComponent } from './address/address.component';
import { StuEmpComponent } from './stu-emp/stu-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    StudentsComponent,
    MenuComponent,
    AddressComponent,
    StuEmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
