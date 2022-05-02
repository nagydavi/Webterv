import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArukComponent } from './aruk.component';

const routes: Routes = [
  { path: '', component: ArukComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArukRoutingModule { }
