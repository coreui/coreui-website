(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-editors-editors-module"],{

/***/ "./src/app/views/editors/editors-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/editors/editors-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EditorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsRoutingModule", function() { return EditorsRoutingModule; });
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
            title: 'Editors'
        },
        children: [
            {
                path: 'text-editors',
                loadChildren: './text-editors/text-editors.module#TextEditorsModule'
            },
            {
                path: 'code-editors',
                loadChildren: './code-editors/code-editors.module#CodeEditorsModule'
            }
        ]
    }
];
var EditorsRoutingModule = /** @class */ (function () {
    function EditorsRoutingModule() {
    }
    EditorsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EditorsRoutingModule);
    return EditorsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/editors/editors.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/editors/editors.module.ts ***!
  \*************************************************/
/*! exports provided: EditorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsModule", function() { return EditorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editors_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editors-routing.module */ "./src/app/views/editors/editors-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Routing

var EditorsModule = /** @class */ (function () {
    function EditorsModule() {
    }
    EditorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _editors_routing_module__WEBPACK_IMPORTED_MODULE_1__["EditorsRoutingModule"]
            ],
            declarations: []
        })
    ], EditorsModule);
    return EditorsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-editors-editors-module.js.map