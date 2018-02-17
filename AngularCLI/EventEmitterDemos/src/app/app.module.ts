import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddressComponent } from './address/address.component';
import { EventEmitterService } from './services/event-emiiter.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
