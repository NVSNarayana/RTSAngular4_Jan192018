import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { EmpValidationsService } from './validations/emp-validations.service';


@NgModule({
  declarations: [
    AppComponent,
    FormsValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpValidationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
