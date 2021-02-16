import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiplicationLearnComponent } from './multiplication-learn/multiplication-learn.component';


const routes: Routes = [{ path: '', component: MultiplicationLearnComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiplicationRoutingModule { }
