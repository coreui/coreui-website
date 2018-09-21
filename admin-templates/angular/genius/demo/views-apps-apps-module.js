(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-apps-apps-module"],{

/***/ "./src/app/views/apps/apps-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/apps/apps-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsRoutingModule", function() { return AppsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        data: {
            title: 'Apps'
        },
        children: [
            {
                path: 'email',
                loadChildren: './email/email.module#EmailModule'
            },
            {
                path: 'invoicing',
                loadChildren: './invoicing/invoice.module#InvoiceModule'
            }
        ]
    }
];
var AppsRoutingModule = /** @class */ (function () {
    function AppsRoutingModule() {
    }
    AppsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppsRoutingModule);
    return AppsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/apps/apps.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/apps/apps.module.ts ***!
  \*******************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps-routing.module */ "./src/app/views/apps/apps-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Routing

var AppsModule = /** @class */ (function () {
    function AppsModule() {
    }
    AppsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _apps_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppsRoutingModule"]
            ],
            declarations: []
        })
    ], AppsModule);
    return AppsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-apps-apps-module.js.map