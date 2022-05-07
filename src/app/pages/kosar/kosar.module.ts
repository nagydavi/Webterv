import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KosarRoutingModule } from './kosar-routing.module';
import { KosarComponent } from './kosar.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    KosarComponent,
    
  ],
  imports: [
    CommonModule,
    KosarRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    
    
  ]
})
export class KosarModule { }
