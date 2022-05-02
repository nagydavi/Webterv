import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KosarRoutingModule } from './kosar-routing.module';
import { KosarComponent } from './kosar.component';


@NgModule({
  declarations: [
    KosarComponent
  ],
  imports: [
    CommonModule,
    KosarRoutingModule
  ]
})
export class KosarModule { }
