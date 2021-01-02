import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionLearnComponent } from './addition-learn/addition-learn.component';

const routes: Routes = [{ path: '', component: AdditionLearnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionRoutingModule { }
