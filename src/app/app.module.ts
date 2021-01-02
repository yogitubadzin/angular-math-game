import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';
import { AnswerHighlightDirective } from './answer-highlight.directive';
import { SharedModule } from './shared/shared.module';
import { AdditionModule } from './addition/addition.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, EquationComponent, AnswerHighlightDirective],
  imports: [BrowserModule, ReactiveFormsModule, SharedModule, AdditionModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
