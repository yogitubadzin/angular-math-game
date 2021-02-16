import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { delay, filter, scan } from 'rxjs/operators';
import { MathAdditionValidator } from '../math-addition-validator';

@Component({
  selector: 'app-addition-learn',
  templateUrl: './addition-learn.component.html',
  styleUrls: ['./addition-learn.component.css']
})
export class AdditionLearnComponent implements OnInit {
  private subscriptions: Subscription;
  secondsPerSolution = 0;
  numberSolved = 0;
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
  numberOfTries = 0;
  isGameStarted = false;
  timeLeft: number = 10;
  interval;

  constructor() {
    this.subscriptions = new Subscription();
  }

  get firstNumber() {
    return this.mathForm.value.firstNumber;
  }

  get secondNumber() {
    return this.mathForm.value.secondNumber;
  }

  ngOnInit() {
  }

  calculateRandomNumber() {
    return Math.floor(Math.random() * this.randomNumber);
  }

  start() {
    this.subscriptions.add(this.mathForm.statusChanges
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
          { numberSolved: 0, startTime: new Date().getTime() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution = (new Date().getTime() - startTime) / numberSolved / 1000;
        this.numberSolved = numberSolved;
        this.setValues();
        this.increaseNumberOfTries();
      }));

    this.timeLeft = 10;
    this.numberOfTries = 0;
    this.secondsPerSolution = 0;
    this.randomNumber = this.model.options;
    this.setValues();
    this.mathForm.controls.answer.enable();
    this.isGameStarted = true;
    this.startTimer();
  }

  stop() {
    this.mathForm.setValue({
      firstNumber: 0,
      secondNumber: 0,
      answer: ''
    });

    this.isGameStarted = false;
    this.mathForm.controls.answer.disable();
  }

  setValues() {
    this.mathForm.setValue({
      firstNumber: this.calculateRandomNumber(),
      secondNumber: this.calculateRandomNumber(),
      answer: ''
    });
  }

  increaseNumberOfTries() {
    this.numberOfTries = ++this.numberOfTries;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
        this.stop();
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  ngDestroy() {
    this.subscriptions.unsubscribe();
  }
}
