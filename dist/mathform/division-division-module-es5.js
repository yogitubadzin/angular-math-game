function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["division-division-module"], {
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

    var routes = [];

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

    var DivisionModule = function DivisionModule() {
      _classCallCheck(this, DivisionModule);
    };

    DivisionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _division_routing_module__WEBPACK_IMPORTED_MODULE_3__["DivisionRoutingModule"]]
    })], DivisionModule);
    /***/
  }
}]);
//# sourceMappingURL=division-division-module-es5.js.map