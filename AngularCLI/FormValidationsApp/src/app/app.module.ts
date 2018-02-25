import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { EmpValidationsService } from './validations/emp-validations.service';
import { HttpCallsComponent } from './http-calls/http-calls.component';
import { HttpClientModule } from '@angular/common/http'
// import {Http, HttpModule} from '@angular/http'; //old packages

@NgModule({
  declarations: [
    AppComponent,
    FormsValidationComponent,
    HttpCallsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmpValidationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
