import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ArukRoutingModule } from './aruk-routing.module';
import { ArukComponent } from './aruk.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    ArukComponent
  ],
    
  imports: [
    CommonModule,
    ArukRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class ArukModule { }
