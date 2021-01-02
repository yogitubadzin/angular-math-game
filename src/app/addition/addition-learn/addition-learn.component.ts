import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { delay, filter, scan } from 'rxjs/operators';
import { MathAdditionValidator } from '../math-addition-validator';

@Component({
  selector: 'app-addition-learn',
  templateUrl: './addition-learn.component.html',
  styleUrls: ['./addition-learn.component.css']
})
export class AdditionLearnComponent implements OnInit {
  secondsPerSolution = 0;
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl('')
    },
    [MathAdditionValidator.validate('answer', 'a', 'b')]
  );

  constructor() { }

  get firstNumber() {
    return this.mathForm.value.a;
  }

  get secondNumber() {
    return this.mathForm.value.b;
  }

  ngOnInit() {
    this.mathForm.statusChanges
      .pipe(
        filter(value => value === 'VALID'),
        delay(100),
        scan(
          acc => {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ''
        });
      });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
