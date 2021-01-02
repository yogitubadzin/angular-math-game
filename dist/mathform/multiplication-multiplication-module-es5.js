function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multiplication-multiplication-module"], {
  /***/
  "./src/app/multiplication/multiplication-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/multiplication/multiplication-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MultiplicationRoutingModule */

  /***/
  function srcAppMultiplicationMultiplicationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiplicationRoutingModule", function () {
      return MultiplicationRoutingModule;
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

    var routes = [];

    var MultiplicationRoutingModule = function MultiplicationRoutingModule() {
      _classCallCheck(this, MultiplicationRoutingModule);
    };

    MultiplicationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MultiplicationRoutingModule);
    /***/
  },

  /***/
  "./src/app/multiplication/multiplication.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/multiplication/multiplication.module.ts ***!
    \*********************************************************/

  /*! exports provided: MultiplicationModule */

  /***/
  function srcAppMultiplicationMultiplicationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiplicationModule", function () {
      return MultiplicationModule;
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


    var _multiplication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./multiplication-routing.module */
    "./src/app/multiplication/multiplication-routing.module.ts");

    var MultiplicationModule = function MultiplicationModule() {
      _classCallCheck(this, MultiplicationModule);
    };

    MultiplicationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _multiplication_routing_module__WEBPACK_IMPORTED_MODULE_3__["MultiplicationRoutingModule"]]
    })], MultiplicationModule);
    /***/
  }
}]);
//# sourceMappingURL=multiplication-multiplication-module-es5.js.map