import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Route[] = [
  { path: "", redirectTo: "students", pathMatch: "full" },
  { path: "students", component: StudentComponent },
  { path: "employees", component: EmployeeComponent },
  { path: "employees/:id", component: EmployeeDetailsComponent },

  { path: "customers", component: CustomerComponent },
  { path: "**", component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    StudentComponent,
    EmployeeComponent,
    CustomerComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
