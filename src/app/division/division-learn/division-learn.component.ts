import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { delay, filter, scan } from 'rxjs/operators';
import { MathDivisionValidator } from '../math-division-validator';

@Component({
  selector: 'app-division-learn',
  templateUrl: './division-learn.component.html',
  styleUrls: ['./division-learn.component.css']
})
export class DivisionLearnComponent implements OnInit {
  private subscriptions: Subscription;
  private randomNumber = 10;
  private timeLeft: number;

  mathForm = new FormGroup(
    {
      firstNumber: new FormControl(0),
      secondNumber: new FormControl(0),
      answer: new FormControl('')
    },
    [MathDivisionValidator.validate('answer', 'firstNumber', 'secondNumber')]
  );
  model = { options: this.randomNumber };
  isGameStarted = false;
  time = 60;
  secondsPerSolution = 0;
  numberSolved = 0;
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
    this.timeLeft = this.time;
    this.subscriptions.add(this.trackChanges());
    this.numberSolved = 0;
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

  trackChanges() {
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
          { numberSolved: 0, startTime: new Date().getTime() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution = (new Date().getTime() - startTime) / numberSolved / 1000;
        this.numberSolved = numberSolved;
        this.setValues();
        this.increaseNumberOfTries();
      });
  }

  setValues() {    
    let firstNumber = this.calculateRandomNumber();
    let secondNumber = this.calculateRandomNumber();

    var result = firstNumber * secondNumber;

    this.mathForm.setValue({
      firstNumber: result,
      secondNumber: secondNumber,
      answer: ''
    });
  }

  increaseNumberOfTries() {
    this.numberSolved = this.numberSolved++;
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