import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: Page1Component },
    { path: "page2", pathMatch: 'full', component: Page2Component }
    ])
  ],
  declarations: [Page1Component, Page2Component]
})
export class AdvertisingModule { }
