(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-plugins-plugins-module"],{

/***/ "./src/app/views/plugins/plugins-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/plugins/plugins-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PluginsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsRoutingModule", function() { return PluginsRoutingModule; });
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
            title: 'Plugins'
        },
        children: [
            {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarInitModule'
            },
            {
                path: 'draggable-cards',
                loadChildren: './draggable-cards/draggable-cards.module#DraggableCardsModule'
            },
            {
                path: 'spinners',
                loadChildren: './spinners/spinners.module#SpinnersModule'
            }
        ]
    }
];
var PluginsRoutingModule = /** @class */ (function () {
    function PluginsRoutingModule() {
    }
    PluginsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PluginsRoutingModule);
    return PluginsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/plugins/plugins.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/plugins/plugins.module.ts ***!
  \*************************************************/
/*! exports provided: PluginsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsModule", function() { return PluginsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _plugins_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins-routing.module */ "./src/app/views/plugins/plugins-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Routing

var PluginsModule = /** @class */ (function () {
    function PluginsModule() {
    }
    PluginsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _plugins_routing_module__WEBPACK_IMPORTED_MODULE_1__["PluginsRoutingModule"]
            ],
            declarations: []
        })
    ], PluginsModule);
    return PluginsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-plugins-plugins-module.js.map