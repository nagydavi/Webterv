import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ArukRoutingModule } from './aruk-routing.module';
import { ArukComponent } from './aruk.component';


@NgModule({
  declarations: [
    ArukComponent
  ],
    
  imports: [
    CommonModule,
    ArukRoutingModule
  ]
})
export class ArukModule { }
