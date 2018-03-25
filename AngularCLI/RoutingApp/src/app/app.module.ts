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
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { StudentAuthGuard } from './guards/student-auth.guard';
import { AttrCustDirectiveComponent } from './attr-cust-directive/attr-cust-directive.component';
import { BtnHilightDirective } from './directive/btn-hilight.directive';

const routes: Route[] = [
  { path: "", redirectTo: "students", pathMatch: "full" },
  { path: "customattributes", component:AttrCustDirectiveComponent },
  {
    path: "students", component: StudentComponent, canActivate: [StudentAuthGuard], children: [
      { path: "details/:studentId", component: StudentDetailsComponent }
    ]
  },
  { path: "employees", component: EmployeeComponent },
  { path: "employees/:id", component: EmployeeDetailsComponent },

  {
    path: "customers", component: CustomerComponent, children: [
      { path: "details", component: CustomerDetailsComponent }
    ]
  },
  { path: "**", component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    StudentComponent,
    StudentDetailsComponent,
    EmployeeComponent,
    CustomerComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
    CustomerDetailsComponent,
    AttrCustDirectiveComponent,
    BtnHilightDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StudentAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
