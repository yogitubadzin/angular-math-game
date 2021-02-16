function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["division-division-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/division/division-learn/division-learn.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/division/division-learn/division-learn.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDivisionDivisionLearnDivisionLearnComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4>Division</h4>\r\n<h5>Choose level:</h5>\r\n<div class=\"form-check\">\r\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"5\"\r\n    id=\"exampleRadios1\" checked>\r\n  <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n    5 numbers (second number and result)\r\n  </label>\r\n</div>\r\n<div class=\"form-check\">\r\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"10\"\r\n    id=\"exampleRadios2\" checked>\r\n  <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n    10 numbers (second number and result)\r\n  </label>\r\n</div>\r\n<div class=\"form-check\">\r\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"15\"\r\n    id=\"exampleRadios3\" checked>\r\n  <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n    15 numbers (second number and result)\r\n  </label>\r\n</div>\r\n<div class=\"form-check\">\r\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"20\"\r\n    id=\"exampleRadios4\" checked>\r\n  <label class=\"form-check-label\" for=\"exampleRadios4\">\r\n    20 numbers (second number and result)\r\n  </label>\r\n</div>\r\n<div class=\"form-check\">\r\n  <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"model.options\" name=\"exampleRadios\" [value]=\"30\"\r\n    id=\"exampleRadios5\" checked>\r\n  <label class=\"form-check-label\" for=\"exampleRadios5\">\r\n    30 numbers (second number and result)\r\n  </label>\r\n</div>\r\n<button type=\"button\" name=\"btnStart\" (click)=\"start()\" class=\"btn btn-primary\"\r\n  [disabled]=\"isGameStarted\">Start</button>\r\n\r\n<div>Number of tries: {{numberSolved}}</div>\r\n<div *ngIf=\"numberSolved > 0\">\r\n  Your result is: {{ secondsPerSolution | number: '1.1-2' }}\r\n</div>\r\n\r\n<div class=\"stats\">\r\n  <p>{{timeLeft}} Seconds Left....</p>\r\n</div>\r\n<form [formGroup]=\"mathForm\">\r\n  <div class=\"equation\">{{ firstNumber }} / {{ secondNumber }} =</div>\r\n  <input appAnswer formControlName=\"answer\" class=\"input-result\" disabled />\r\n</form>\r\n<div class=\"stats\">\r\n  Average time: {{ secondsPerSolution | number: '1.1-2' }}\r\n</div>";
    /***/
  },

  /***/
  "./src/app/division/division-learn/division-learn.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/division/division-learn/division-learn.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDivisionDivisionLearnDivisionLearnComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpdmlzaW9uL2RpdmlzaW9uLWxlYXJuL2RpdmlzaW9uLWxlYXJuLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/division/division-learn/division-learn.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/division/division-learn/division-learn.component.ts ***!
    \*********************************************************************/

  /*! exports provided: DivisionLearnComponent */

  /***/
  function srcAppDivisionDivisionLearnDivisionLearnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DivisionLearnComponent", function () {
      return DivisionLearnComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _math_division_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../math-division-validator */
    "./src/app/division/math-division-validator.ts");

    var DivisionLearnComponent =
    /*#__PURE__*/
    function () {
      function DivisionLearnComponent() {
        _classCallCheck(this, DivisionLearnComponent);

        this.randomNumber = 10;
        this.mathForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          firstNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
          secondNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
          answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        }, [_math_division_validator__WEBPACK_IMPORTED_MODULE_5__["MathDivisionValidator"].validate('answer', 'firstNumber', 'secondNumber')]);
        this.model = {
          options: this.randomNumber
        };
        this.isGameStarted = false;
        this.timeLeft = 60;
        this.secondsPerSolution = 0;
        this.numberSolved = 0;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
      }

      _createClass(DivisionLearnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "calculateRandomNumber",
        value: function calculateRandomNumber() {
          return Math.floor(Math.random() * this.randomNumber);
        }
      }, {
        key: "start",
        value: function start() {
          this.subscriptions.add(this.trackChanges());
          this.timeLeft = 60;
          this.numberSolved = 0;
          this.secondsPerSolution = 0;
          this.randomNumber = this.model.options;
          this.setValues();
          this.mathForm.controls.answer.enable();
          this.isGameStarted = true;
          this.startTimer();
        }
      }, {
        key: "stop",
        value: function stop() {
          this.mathForm.setValue({
            firstNumber: 0,
            secondNumber: 0,
            answer: ''
          });
          this.isGameStarted = false;
          this.mathForm.controls.answer.disable();
        }
      }, {
        key: "trackChanges",
        value: function trackChanges() {
          var _this = this;

          this.mathForm.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (value) {
            return value === 'VALID';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(function (acc) {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime
            };
          }, {
            numberSolved: 0,
            startTime: new Date().getTime()
          })).subscribe(function (_ref) {
            var numberSolved = _ref.numberSolved,
                startTime = _ref.startTime;
            _this.secondsPerSolution = (new Date().getTime() - startTime) / numberSolved / 1000;
            _this.numberSolved = numberSolved;

            _this.setValues();

            _this.increaseNumberOfTries();
          });
        }
      }, {
        key: "setValues",
        value: function setValues() {
          var firstNumber = this.calculateRandomNumber();
          var secondNumber = this.calculateRandomNumber();
          var result = firstNumber * secondNumber;
          this.mathForm.setValue({
            firstNumber: result,
            secondNumber: secondNumber,
            answer: ''
          });
        }
      }, {
        key: "increaseNumberOfTries",
        value: function increaseNumberOfTries() {
          this.numberSolved = this.numberSolved++;
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this2 = this;

          this.interval = setInterval(function () {
            if (_this2.timeLeft > 0) {
              _this2.timeLeft--;
            } else {
              _this2.pauseTimer();

              _this2.stop();
            }
          }, 1000);
        }
      }, {
        key: "pauseTimer",
        value: function pauseTimer() {
          clearInterval(this.interval);
        }
      }, {
        key: "ngDestroy",
        value: function ngDestroy() {
          this.subscriptions.unsubscribe();
        }
      }, {
        key: "firstNumber",
        get: function get() {
          return this.mathForm.value.firstNumber;
        }
      }, {
        key: "secondNumber",
        get: function get() {
          return this.mathForm.value.secondNumber;
        }
      }]);

      return DivisionLearnComponent;
    }();

    DivisionLearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-division-learn',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./division-learn.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/division/division-learn/division-learn.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./division-learn.component.css */
      "./src/app/division/division-learn/division-learn.component.css")).default]
    })], DivisionLearnComponent);
    /***/
  },

  /***/
  "./src/app/division/division-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/division/division-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: DivisionRoutingModule */

  /***/
  function srcAppDivisionDivisionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DivisionRoutingModule", function () {
      return DivisionRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _division_learn_division_learn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./division-learn/division-learn.component */
    "./src/app/division/division-learn/division-learn.component.ts");

    var routes = [{
      path: '',
      component: _division_learn_division_learn_component__WEBPACK_IMPORTED_MODULE_3__["DivisionLearnComponent"]
    }];

    var DivisionRoutingModule = function DivisionRoutingModule() {
      _classCallCheck(this, DivisionRoutingModule);
    };

    DivisionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DivisionRoutingModule);
    /***/
  },

  /***/
  "./src/app/division/division.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/division/division.module.ts ***!
    \*********************************************/

  /*! exports provided: DivisionModule */

  /***/
  function srcAppDivisionDivisionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DivisionModule", function () {
      return DivisionModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _division_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./division-routing.module */
    "./src/app/division/division-routing.module.ts");
    /* harmony import */


    var _division_learn_division_learn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./division-learn/division-learn.component */
    "./src/app/division/division-learn/division-learn.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var DivisionModule = function DivisionModule() {
      _classCallCheck(this, DivisionModule);
    };

    DivisionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_division_learn_division_learn_component__WEBPACK_IMPORTED_MODULE_4__["DivisionLearnComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _division_routing_module__WEBPACK_IMPORTED_MODULE_3__["DivisionRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
    })], DivisionModule);
    /***/
  },

  /***/
  "./src/app/division/math-division-validator.ts":
  /*!*****************************************************!*\
    !*** ./src/app/division/math-division-validator.ts ***!
    \*****************************************************/

  /*! exports provided: MathDivisionValidator */

  /***/
  function srcAppDivisionMathDivisionValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MathDivisionValidator", function () {
      return MathDivisionValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MathDivisionValidator =
    /*#__PURE__*/
    function () {
      function MathDivisionValidator() {
        _classCallCheck(this, MathDivisionValidator);
      }

      _createClass(MathDivisionValidator, null, [{
        key: "validate",
        value: function validate(target, sourceOne, sourceTwo) {
          return function (form) {
            var sum = form.value[target];
            var firstNumber = form.value[sourceOne];
            var secondNumber = form.value[sourceTwo];

            if (firstNumber / secondNumber === parseInt(sum)) {
              return null;
            }

            return {
              result: true
            };
          };
        }
      }]);

      return MathDivisionValidator;
    }();
    /***/

  }
}]);
//# sourceMappingURL=division-division-module-es5.js.map