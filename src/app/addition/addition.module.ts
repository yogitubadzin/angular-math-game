import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionRoutingModule } from './addition-routing.module';
import { AdditionLearnComponent } from './addition-learn/addition-learn.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdditionLearnComponent],
  imports: [
    CommonModule,
    AdditionRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdditionModule { }
