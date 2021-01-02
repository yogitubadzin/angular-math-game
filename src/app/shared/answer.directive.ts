import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswer]'
})
export class AnswerDirective {
  constructor(private el: ElementRef, private controlName: NgControl) {}

  ngOnInit() {
    this.controlName.control.parent.valueChanges
      .pipe(map(({ firstNumber, secondNumber, answer }) => Math.abs((firstNumber + secondNumber - answer) / (firstNumber + secondNumber))))
      .subscribe(value => {
        console.log(value);
      });
  }
}