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
  randomNumber = 10;
  mathForm = new FormGroup(
    {
      firstNumber: new FormControl(0),
      secondNumber: new FormControl(0),
      answer: new FormControl('')
    },
    [MathAdditionValidator.validate('answer', 'firstNumber', 'secondNumber')]
  );
  mainNumber = 10;
  model = { options: this.randomNumber };
  numberOfTries = 10;

  get firstNumber() {
    return this.mathForm.value.firstNumber;
  }

  get secondNumber() {
    return this.mathForm.value.secondNumber;
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
        this.secondsPerSolution = (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
        this.setValues();
        this.decreaseNumberOfTries();
      });
  }

  calculateRandomNumber() {
    return Math.floor(Math.random() * this.randomNumber);
  }

  start() {
    this.numberOfTries = 10;
    this.randomNumber = this.model.options;
    this.setValues();
    this.mathForm.controls.answer.enable();
  }

  next() {
    if(this.numberOfTries == 0){

      return;
    }

    this.setValues();
    this.decreaseNumberOfTries();
  }

  setValues() {
    this.mathForm.setValue({
      firstNumber: this.calculateRandomNumber(),
      secondNumber: this.calculateRandomNumber(),
      answer: ''
    });
  }

  decreaseNumberOfTries(){
    this.numberOfTries = --this.numberOfTries;
  }
}
