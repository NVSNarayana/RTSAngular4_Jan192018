import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { EmpValidationsService } from './validations/emp-validations.service';
import { HttpCallsComponent } from './http-calls/http-calls.component';
import { HttpClientModule } from '@angular/common/http';
import { NgcontainerDemoComponent } from './ngcontainer-demo/ngcontainer-demo.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
// import {Http, HttpModule} from '@angular/http'; //old packages

@NgModule({
  declarations: [
    AppComponent,
    FormsValidationComponent,
    HttpCallsComponent,
    NgcontainerDemoComponent,
    StudentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [EmployeeComponent, StudentComponent],
  providers: [EmpValidationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
