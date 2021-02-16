import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiplicationRoutingModule } from './multiplication-routing.module';
import { MultiplicationLearnComponent } from './multiplication-learn/multiplication-learn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MultiplicationLearnComponent],
  imports: [
    CommonModule,
    MultiplicationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MultiplicationModule { }
