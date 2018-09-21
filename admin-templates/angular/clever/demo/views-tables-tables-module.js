(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-tables-tables-module"],{

/***/ "./src/app/views/tables/tables-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/tables/tables-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function() { return TablesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.component */ "./src/app/views/tables/tables.component.ts");
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
            title: 'Tables'
        },
        children: [
            {
                path: 'datatable',
                loadChildren: './datatable/datatable.module#DatatableInitModule'
            },
            {
                path: 'tables',
                component: _tables_component__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"],
                data: {
                    title: 'Tables'
                }
            },
        ]
    }
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/tables/tables.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/tables/tables.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Simple Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Samppa Nori</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Estavan Lykos</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Chetan Mohamed</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Derick Maximinus</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Friderik Dávid</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Striped Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Yiorgos Avraamu</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Avram Tarasios</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Quintin Ed</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Enéas Kwadwo</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Agapetus Tadeáš</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Condensed Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Carwyn Fachtna</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Nehemiah Tatius</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Ebbe Gemariah</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Eustorgios Amulius</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Leopold Gáspár</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bordered Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Pompeius René</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Paĉjo Jadon</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Micheal Mercurius</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Ganesha Dubhghall</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Hiroto Šimun</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Combined All Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Vishnu Serghei</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Zbyněk Phoibos</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Einar Randall</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Félix Troels</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Aulus Agmundr</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <nav>\n            <ul class=\"pagination\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n</div>\n"

/***/ }),

/***/ "./src/app/views/tables/tables.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/tables/tables.component.ts ***!
  \**************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/views/tables/tables.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/views/tables/tables.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/tables/tables.module.ts ***!
  \***********************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.component */ "./src/app/views/tables/tables.component.ts");
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables-routing.module */ "./src/app/views/tables/tables-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Routing

var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _tables_routing_module__WEBPACK_IMPORTED_MODULE_2__["TablesRoutingModule"]
            ],
            declarations: [
                _tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]
            ]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-tables-tables-module.js.map