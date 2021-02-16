(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multiplication-multiplication-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/multiplication/multiplication-learn/multiplication-learn.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/multiplication/multiplication-learn/multiplication-learn.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Multiplication</h4>\n<h5>Time:</h5>\n<input [(ngModel)]=\"time\"/>\n<h5>Choose level:</h5>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"5\"\n    id=\"exampleRadios1\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios1\">\n    5 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"6\"\n    id=\"exampleRadios2\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios2\">\n    6 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"7\"\n    id=\"exampleRadios3\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios3\">\n    7 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"8\"\n    id=\"exampleRadios4\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios4\">\n    8 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"9\"\n    id=\"exampleRadios5\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios5\">\n    9 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"10\"\n    id=\"exampleRadios6\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios6\">\n    10 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"15\"\n    id=\"exampleRadios7\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios7\">\n    15 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"20\"\n    id=\"exampleRadios8\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios8\">\n    20 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"30\"\n    id=\"exampleRadios9\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios9\">\n    30 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"50\"\n    id=\"exampleRadios10\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios10\">\n    50 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"100\"\n    id=\"exampleRadios11\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios11\">\n    100 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"200\"\n    id=\"exampleRadios12\">\n  <label class=\"form-check-label\" for=\"exampleRadios12\">\n    200 numbers\n  </label>\n</div>\n<div class=\"form-check disabled\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"500\"\n    id=\"exampleRadios13\">\n  <label class=\"form-check-label\" for=\"exampleRadios13\">\n    500 numbers\n  </label>\n</div>\n<button type=\"button\" name=\"btnStart\" (click)=\"start()\" class=\"btn btn-primary\"\n  [disabled]=\"isGameStarted\">Start</button>\n\n<div>Number of tries: {{numberSolved}}</div>\n<div *ngIf=\"numberSolved > 0\">\n  Your result is: {{ secondsPerSolution | number: '1.1-2' }}\n</div>\n\n<div class=\"stats\">\n  <p>{{timeLeft}} Seconds Left....</p>\n</div>\n<form [formGroup]=\"mathForm\">\n  <div class=\"equation\">{{ firstNumber }} * {{ secondNumber }} =</div>\n  <input appAnswer formControlName=\"answer\" class=\"input-result\" disabled />\n</form>\n<div class=\"stats\">\n  Average time: {{ secondsPerSolution | number: '1.1-2' }}\n</div>");

/***/ }),

/***/ "./src/app/multiplication/math-multiplication-validator.ts":
/*!*****************************************************************!*\
  !*** ./src/app/multiplication/math-multiplication-validator.ts ***!
  \*****************************************************************/
/*! exports provided: MathMultiplicationValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathMultiplicationValidator", function() { return MathMultiplicationValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MathMultiplicationValidator {
    static validate(target, sourceOne, sourceTwo) {
        return (form) => {
            const sum = form.value[target];
            const firstNumber = form.value[sourceOne];
            const secondNumber = form.value[sourceTwo];
            if (firstNumber * secondNumber === parseInt(sum)) {
                return null;
            }
            return { result: true };
        };
    }
}


/***/ }),

/***/ "./src/app/multiplication/multiplication-learn/multiplication-learn.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/multiplication/multiplication-learn/multiplication-learn.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211bHRpcGxpY2F0aW9uL211bHRpcGxpY2F0aW9uLWxlYXJuL211bHRpcGxpY2F0aW9uLWxlYXJuLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/multiplication/multiplication-learn/multiplication-learn.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/multiplication/multiplication-learn/multiplication-learn.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MultiplicationLearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplicationLearnComponent", function() { return MultiplicationLearnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _math_multiplication_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../math-multiplication-validator */ "./src/app/multiplication/math-multiplication-validator.ts");






let MultiplicationLearnComponent = class MultiplicationLearnComponent {
    constructor() {
        this.randomNumber = 10;
        this.mathForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            secondNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        }, [_math_multiplication_validator__WEBPACK_IMPORTED_MODULE_5__["MathMultiplicationValidator"].validate('answer', 'firstNumber', 'secondNumber')]);
        this.model = { options: this.randomNumber };
        this.isGameStarted = false;
        this.time = 60;
        this.secondsPerSolution = 0;
        this.numberSolved = 0;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(value => value === 'VALID'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(acc => {
            return {
                numberSolved: acc.numberSolved + 1,
                startTime: acc.startTime
            };
        }, { numberSolved: 0, startTime: new Date().getTime() }))
            .subscribe(({ numberSolved, startTime }) => {
            this.secondsPerSolution = (new Date().getTime() - startTime) / numberSolved / 1000;
            this.numberSolved = numberSolved;
            this.setValues();
            this.increaseNumberOfTries();
        });
    }
    setValues() {
        this.mathForm.setValue({
            firstNumber: this.calculateRandomNumber(),
            secondNumber: this.calculateRandomNumber(),
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
            }
            else {
                this.pauseTimer();
                this.stop();
            }
        }, 1000);
    }
    pauseTimer() {
        clearInterval(this.interval);
    }
    ngDestroy() {
        this.subscriptions.unsubscribe();
    }
};
MultiplicationLearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multiplication-learn',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./multiplication-learn.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/multiplication/multiplication-learn/multiplication-learn.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./multiplication-learn.component.css */ "./src/app/multiplication/multiplication-learn/multiplication-learn.component.css")).default]
    })
], MultiplicationLearnComponent);



/***/ }),

/***/ "./src/app/multiplication/multiplication-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/multiplication/multiplication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MultiplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplicationRoutingModule", function() { return MultiplicationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _multiplication_learn_multiplication_learn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiplication-learn/multiplication-learn.component */ "./src/app/multiplication/multiplication-learn/multiplication-learn.component.ts");




const routes = [{ path: '', component: _multiplication_learn_multiplication_learn_component__WEBPACK_IMPORTED_MODULE_3__["MultiplicationLearnComponent"] }];
let MultiplicationRoutingModule = class MultiplicationRoutingModule {
};
MultiplicationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MultiplicationRoutingModule);



/***/ }),

/***/ "./src/app/multiplication/multiplication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/multiplication/multiplication.module.ts ***!
  \*********************************************************/
/*! exports provided: MultiplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplicationModule", function() { return MultiplicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _multiplication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiplication-routing.module */ "./src/app/multiplication/multiplication-routing.module.ts");
/* harmony import */ var _multiplication_learn_multiplication_learn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiplication-learn/multiplication-learn.component */ "./src/app/multiplication/multiplication-learn/multiplication-learn.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let MultiplicationModule = class MultiplicationModule {
};
MultiplicationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_multiplication_learn_multiplication_learn_component__WEBPACK_IMPORTED_MODULE_4__["MultiplicationLearnComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _multiplication_routing_module__WEBPACK_IMPORTED_MODULE_3__["MultiplicationRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]
    })
], MultiplicationModule);



/***/ })

}]);