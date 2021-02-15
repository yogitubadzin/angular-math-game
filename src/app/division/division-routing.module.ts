import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisionLearnComponent } from './division-learn/division-learn.component';

const routes: Routes = [{ path: '', component: DivisionLearnComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionRoutingModule { }
