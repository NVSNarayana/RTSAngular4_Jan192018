import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'advertising', loadChildren: "../advertising/advertising.module#AdvertisingModule" },
  { path: 'customers', loadChildren: "../customers/customers.module#CustomersModule" },
  { path: 'security', loadChildren: "../security/security.module#SecurityModule" }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, HomeComponent],
  declarations: [HomeComponent]
})
export class AppRoutingModule { }
