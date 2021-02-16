import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubstractionLearnComponent } from './substraction-learn/substraction-learn.component';


const routes: Routes = [{ path: '', component: SubstractionLearnComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubstractionRoutingModule { }
