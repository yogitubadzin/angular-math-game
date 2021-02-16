import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubstractionRoutingModule } from './substraction-routing.module';
import { SubstractionLearnComponent } from './substraction-learn/substraction-learn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SubstractionLearnComponent],
  imports: [
    CommonModule,
    SubstractionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SubstractionModule { }
