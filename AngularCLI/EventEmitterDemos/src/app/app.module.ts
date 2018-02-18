import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddressComponent } from './address/address.component';
import { EventEmitterService } from './services/event-emiiter.service';
import { PredefiendPipesComponent } from './pipes/predefiend-pipes/predefiend-pipes.component';
import { AddressPipePipe } from './pipes/user-defined/address-pipe.pipe';
import { SafeHtmlPipe } from './pipes/user-defined/safe-html.pipe';
import { ModelBindingComponent } from './model-binding/model-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddressComponent,
    PredefiendPipesComponent,
    AddressPipePipe,
    SafeHtmlPipe,
    ModelBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
