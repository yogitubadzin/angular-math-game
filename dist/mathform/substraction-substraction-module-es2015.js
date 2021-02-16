(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["substraction-substraction-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/substraction/substraction-learn/substraction-learn.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/substraction/substraction-learn/substraction-learn.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Substraction</h4>\n<h5>Time:</h5>\n<input [(ngModel)]=\"time\"/>\n<h5>Choose level (draw set of numbers):</h5>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"5\"\n    id=\"exampleRadios1\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios1\">\n    5 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"6\"\n    id=\"exampleRadios2\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios2\">\n    6 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"7\"\n    id=\"exampleRadios3\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios3\">\n    7 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"8\"\n    id=\"exampleRadios4\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios4\">\n    8 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"9\"\n    id=\"exampleRadios5\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios5\">\n    9 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"10\"\n    id=\"exampleRadios6\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios6\">\n    10 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"15\"\n    id=\"exampleRadios7\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios7\">\n    15 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"20\"\n    id=\"exampleRadios8\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios8\">\n    20 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"30\"\n    id=\"exampleRadios9\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios9\">\n    30 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"50\"\n    id=\"exampleRadios10\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios10\">\n    50 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"100\"\n    id=\"exampleRadios11\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios11\">\n    100 numbers\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"200\"\n    id=\"exampleRadios12\">\n  <label class=\"form-check-label\" for=\"exampleRadios12\">\n    200 numbers\n  </label>\n</div>\n<div class=\"form-check disabled\">\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"500\"\n    id=\"exampleRadios13\">\n  <label class=\"form-check-label\" for=\"exampleRadios13\">\n    500 numbers\n  </label>\n</div>\n<button type=\"button\" name=\"btnStart\" (click)=\"start()\" class=\"btn btn-primary\"\n  [disabled]=\"isGameStarted\">Start</button>\n\n<div>Number of tries: {{numberSolved}}</div>\n<div *ngIf=\"numberSolved > 0\">\n  Your result is: {{ secondsPerSolution | number: '1.1-2' }}\n</div>\n\n<div class=\"stats\">\n  <p>{{timeLeft}} Seconds Left....</p>\n</div>\n<form [formGroup]=\"mathForm\">\n  <div class=\"equation\">{{ firstNumber }} - {{ secondNumber }} =</div>\n  <input appAnswer formControlName=\"answer\" class=\"input-result\" disabled />\n</form>\n<div class=\"stats\">\n  Average time: {{ secondsPerSolution | number: '1.1-2' }}\n</div>");

/***/ }),

/***/ "./src/app/substraction/math-substraction-validator.ts":
/*!*************************************************************!*\
  !*** ./src/app/substraction/math-substraction-validator.ts ***!
  \*************************************************************/
/*! exports provided: MathSubstractionValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathSubstractionValidator", function() { return MathSubstractionValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MathSubstractionValidator {
    static validate(target, sourceOne, sourceTwo) {
        return (form) => {
            const sum = form.value[target];
            let firstNumber = form.value[sourceOne];
            let secondNumber = form.value[sourceTwo];
            if (firstNumber - secondNumber === parseInt(sum)) {
                return null;
            }
            return { result: true };
        };
    }
}


/***/ }),

/***/ "./src/app/substraction/substraction-learn/substraction-learn.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/substraction/substraction-learn/substraction-learn.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnN0cmFjdGlvbi9zdWJzdHJhY3Rpb24tbGVhcm4vc3Vic3RyYWN0aW9uLWxlYXJuLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/substraction/substraction-learn/substraction-learn.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/substraction/substraction-learn/substraction-learn.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SubstractionLearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstractionLearnComponent", function() { return SubstractionLearnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _math_substraction_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../math-substraction-validator */ "./src/app/substraction/math-substraction-validator.ts");






let SubstractionLearnComponent = class SubstractionLearnComponent {
    constructor() {
        this.randomNumber = 10;
        this.mathForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            secondNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        }, [_math_substraction_validator__WEBPACK_IMPORTED_MODULE_5__["MathSubstractionValidator"].validate('answer', 'firstNumber', 'secondNumber')]);
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
        let firstNumber = this.calculateRandomNumber();
        let secondNumber = this.calculateRandomNumber();
        if (firstNumber < secondNumber) {
            const temp = firstNumber;
            firstNumber = secondNumber;
            secondNumber = temp;
        }
        this.mathForm.setValue({
            firstNumber: firstNumber,
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
SubstractionLearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-substraction-learn',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./substraction-learn.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/substraction/substraction-learn/substraction-learn.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./substraction-learn.component.css */ "./src/app/substraction/substraction-learn/substraction-learn.component.css")).default]
    })
], SubstractionLearnComponent);



/***/ }),

/***/ "./src/app/substraction/substraction-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/substraction/substraction-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SubstractionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstractionRoutingModule", function() { return SubstractionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _substraction_learn_substraction_learn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./substraction-learn/substraction-learn.component */ "./src/app/substraction/substraction-learn/substraction-learn.component.ts");




const routes = [{ path: '', component: _substraction_learn_substraction_learn_component__WEBPACK_IMPORTED_MODULE_3__["SubstractionLearnComponent"] }];
let SubstractionRoutingModule = class SubstractionRoutingModule {
};
SubstractionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SubstractionRoutingModule);



/***/ }),

/***/ "./src/app/substraction/substraction.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/substraction/substraction.module.ts ***!
  \*****************************************************/
/*! exports provided: SubstractionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstractionModule", function() { return SubstractionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _substraction_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./substraction-routing.module */ "./src/app/substraction/substraction-routing.module.ts");
/* harmony import */ var _substraction_learn_substraction_learn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./substraction-learn/substraction-learn.component */ "./src/app/substraction/substraction-learn/substraction-learn.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let SubstractionModule = class SubstractionModule {
};
SubstractionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_substraction_learn_substraction_learn_component__WEBPACK_IMPORTED_MODULE_4__["SubstractionLearnComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _substraction_routing_module__WEBPACK_IMPORTED_MODULE_3__["SubstractionRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]
    })
], SubstractionModule);



/***/ })

}]);