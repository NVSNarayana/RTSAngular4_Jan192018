import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomersResolveService } from '../services/customers-resolve.service';
import { JqueryDemoComponent } from './jquery-demo/jquery-demo.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'advertising', loadChildren: "../advertising/advertising.module#AdvertisingModule" },
  { path: 'customers', loadChildren: "../customers/customers.module#CustomersModule" },
  { path: 'security', loadChildren: "../security/security.module#SecurityModule" },
  { path: 'jqueryBootstrapDemo', component: JqueryDemoComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    //RouterModule.forRoot(routes)//lazy load modules

  ],
  exports: [RouterModule, HomeComponent, JqueryDemoComponent],
  declarations: [HomeComponent, JqueryDemoComponent],
  providers: [CustomersResolveService]
})
export class AppRoutingModule { }
