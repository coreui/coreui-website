(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-email-module"],{

/***/ "./src/app/views/apps/email/compose.component.html":
/*!*********************************************************!*\
  !*** ./src/app/views/apps/email/compose.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"email-app\">\n    <nav>\n      <a href=\"#\" class=\"btn btn-danger btn-block\">New Email</a>\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n        </li>\n      </ul>\n    </nav>\n    <main>\n      <p class=\"text-center\">New Message</p>\n      <form>\n        <div class=\"form-row mb-3\">\n          <label for=\"to\" class=\"col-2 col-sm-1 col-form-label\">To:</label>\n          <div class=\"col-10 col-sm-11\">\n            <input type=\"email\" class=\"form-control\" id=\"to\" placeholder=\"Type email\">\n          </div>\n        </div>\n        <div class=\"form-row mb-3\">\n          <label for=\"cc\" class=\"col-2 col-sm-1 col-form-label\">CC:</label>\n          <div class=\"col-10 col-sm-11\">\n            <input type=\"email\" class=\"form-control\" id=\"cc\" placeholder=\"Type email\">\n          </div>\n        </div>\n        <div class=\"form-row mb-3\">\n          <label for=\"bcc\" class=\"col-2 col-sm-1 col-form-label\">BCC:</label>\n          <div class=\"col-10 col-sm-11\">\n            <input type=\"email\" class=\"form-control\" id=\"bcc\" placeholder=\"Type email\">\n          </div>\n        </div>\n      </form>\n      <div class=\"row\">\n        <div class=\"col-sm-11 ml-auto\">\n          <div class=\"toolbar\" role=\"toolbar\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-bold\"></span></button>\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-italic\"></span></button>\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-underline\"></span></button>\n            </div>\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-align-left\"></span></button>\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-align-right\"></span></button>\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-align-center\"></span></button>\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-align-justify\"></span></button>\n            </div>\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-indent\"></span></button>\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-outdent\"></span></button>\n            </div>\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-list-ul\"></span></button>\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-list-ol\"></span></button>\n            </div>\n            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-trash-o\"></span></button>\n            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-paperclip\"></span></button>\n            <div class=\"btn-group\" dropdown placement=\"bottom right\">\n              <button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n                <span class=\"fa fa-tags\"></span> <span class=\"caret\"></span>\n              </button>\n              <div class=\"dropdown-menu\" *dropdownMenu>\n                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a>\n                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-info\"> Job</span></a>\n                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-success\"> Clients</span></a>\n                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-warning\"> News</span></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group mt-4\">\n            <textarea class=\"form-control\" id=\"message\" name=\"body\" rows=\"12\" placeholder=\"Click here to reply\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\">Send</button>\n            <button type=\"submit\" class=\"btn btn-light\">Draft</button>\n            <button type=\"submit\" class=\"btn btn-danger\">Discard</button>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/apps/email/compose.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/apps/email/compose.component.ts ***!
  \*******************************************************/
/*! exports provided: ComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeComponent", function() { return ComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComposeComponent = /** @class */ (function () {
    function ComposeComponent() {
    }
    ComposeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./compose.component.html */ "./src/app/views/apps/email/compose.component.html")
        })
    ], ComposeComponent);
    return ComposeComponent;
}());



/***/ }),

/***/ "./src/app/views/apps/email/email-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/apps/email/email-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: EmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRoutingModule", function() { return EmailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _compose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compose.component */ "./src/app/views/apps/email/compose.component.ts");
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox.component */ "./src/app/views/apps/email/inbox.component.ts");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.component */ "./src/app/views/apps/email/message.component.ts");
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
            title: 'Email App'
        },
        children: [
            {
                path: 'compose',
                component: _compose_component__WEBPACK_IMPORTED_MODULE_2__["ComposeComponent"],
                data: {
                    title: 'Compose'
                }
            },
            {
                path: 'inbox',
                component: _inbox_component__WEBPACK_IMPORTED_MODULE_3__["InboxComponent"],
                data: {
                    title: 'Inbox'
                }
            },
            {
                path: 'message',
                component: _message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"],
                data: {
                    title: 'Message'
                }
            }
        ]
    }
];
var EmailRoutingModule = /** @class */ (function () {
    function EmailRoutingModule() {
    }
    EmailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmailRoutingModule);
    return EmailRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/apps/email/email.module.ts":
/*!**************************************************!*\
  !*** ./src/app/views/apps/email/email.module.ts ***!
  \**************************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var _compose_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compose.component */ "./src/app/views/apps/email/compose.component.ts");
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox.component */ "./src/app/views/apps/email/inbox.component.ts");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.component */ "./src/app/views/apps/email/message.component.ts");
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-routing.module */ "./src/app/views/apps/email/email-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Email



// Routing

var EmailModule = /** @class */ (function () {
    function EmailModule() {
    }
    EmailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _email_routing_module__WEBPACK_IMPORTED_MODULE_6__["EmailRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"]
            ],
            declarations: [
                _compose_component__WEBPACK_IMPORTED_MODULE_3__["ComposeComponent"],
                _inbox_component__WEBPACK_IMPORTED_MODULE_4__["InboxComponent"],
                _message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"],
            ]
        })
    ], EmailModule);
    return EmailModule;
}());



/***/ }),

/***/ "./src/app/views/apps/email/inbox.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/apps/email/inbox.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"email-app mb-4\">\n    <nav>\n      <a href=\"page-inbox-compose.html\" class=\"btn btn-danger btn-block\">New Email</a>\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n        </li>\n      </ul>\n    </nav>\n    <main class=\"inbox\">\n      <div class=\"toolbar\">\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-envelope\"></span></button>\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-star\"></span></button>\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-star-o\"></span></button>\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-bookmark-o\"></span></button>\n        </div>\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-reply\"></span></button>\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-reply-all\"></span></button>\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-forward\"></span></button>\n        </div>\n        <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-trash-o\"></span></button>\n        <div class=\"btn-group\" dropdown placement=\"bottom right\">\n          <button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n            <span class=\"fa fa-tags\"></span> <span class=\"caret\"></span>\n          </button>\n          <div class=\"dropdown-menu\" *dropdownMenu>\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a>\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-info\"> Job</span></a>\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-success\"> Clients</span></a>\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-warning\"> News</span></a>\n          </div>\n        </div>\n        <div class=\"btn-group float-right\">\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-chevron-left\"></span></button>\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-chevron-right\"></span></button>\n        </div>\n      </div>\n\n      <ul class=\"messages\">\n        <li class=\"message unread\">\n          <a href=\"#\">\n            <div class=\"actions\">\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\n            </div>\n            <div class=\"header\">\n              <span class=\"from\">Lukasz Holeczek</span>\n              <span class=\"date\"><span class=\"fa fa-paper-clip\"></span> Today, 3:47 PM</span>\n            </div>\n            <div class=\"title\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            </div>\n            <div class=\"description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </div>\n          </a>\n        </li>\n        <li class=\"message\">\n          <a href=\"#\">\n            <div class=\"actions\">\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\n            </div>\n            <div class=\"header\">\n              <span class=\"from\">Lukasz Holeczek</span>\n              <span class=\"date\"><span class=\"fa fa-paper-clip\"></span> Today, 3:47 PM</span>\n            </div>\n            <div class=\"title\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            </div>\n            <div class=\"description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </div>\n          </a>\n        </li>\n        <li class=\"message\">\n          <a href=\"#\">\n            <div class=\"actions\">\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\n            </div>\n            <div class=\"header\">\n              <span class=\"from\">Lukasz Holeczek</span>\n              <span class=\"date\">Today, 3:47 PM</span>\n            </div>\n            <div class=\"title\">\n              Lorem ipsum dolor sit amet.\n            </div>\n            <div class=\"description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </div>\n          </a>\n        </li>\n        <li class=\"message unread\">\n          <a href=\"#\">\n            <div class=\"actions\">\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\n            </div>\n            <div class=\"header\">\n              <span class=\"from\">Lukasz Holeczek</span>\n              <span class=\"date\">Today, 3:47 PM</span>\n            </div>\n            <div class=\"title\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            </div>\n            <div class=\"description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </div>\n          </a>\n        </li>\n        <li class=\"message\">\n          <a href=\"#\">\n            <div class=\"actions\">\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\n            </div>\n            <div class=\"header\">\n              <span class=\"from\">Lukasz Holeczek</span>\n              <span class=\"date\">Today, 3:47 PM</span>\n            </div>\n            <div class=\"title\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            </div>\n            <div class=\"description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </div>\n\n          </a>\n        </li>\n        <li class=\"message\">\n          <a href=\"#\">\n            <div class=\"actions\">\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\n            </div>\n            <div class=\"header\">\n              <span class=\"from\">Lukasz Holeczek</span>\n              <span class=\"date\">Today, 3:47 PM</span>\n            </div>\n            <div class=\"title\">\n              Lorem ipsum dolor sit amet.\n            </div>\n            <div class=\"description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </div>\n          </a>\n        </li>\n        <li class=\"message unread\">\n          <a href=\"#\">\n            <div class=\"actions\">\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\n            </div>\n            <div class=\"header\">\n              <span class=\"from\">Lukasz Holeczek</span>\n              <span class=\"date\">Today, 3:47 PM</span>\n            </div>\n            <div class=\"title\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            </div>\n            <div class=\"description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </div>\n          </a>\n        </li>\n        <li class=\"message\">\n          <a href=\"#\">\n            <div class=\"actions\">\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\n            </div>\n            <div class=\"header\">\n              <span class=\"from\">Lukasz Holeczek</span>\n              <span class=\"date\">Today, 3:47 PM</span>\n            </div>\n            <div class=\"title\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            </div>\n            <div class=\"description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </div>\n          </a>\n        </li>\n        <li class=\"message\">\n          <a href=\"#\">\n            <div class=\"actions\">\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\n            </div>\n            <div class=\"header\">\n              <span class=\"from\">Lukasz Holeczek</span>\n              <span class=\"date\">Today, 3:47 PM</span>\n            </div>\n            <div class=\"title\">\n              Lorem ipsum dolor sit amet.\n            </div>\n            <div class=\"description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            </div>\n          </a>\n        </li>\n      </ul>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/apps/email/inbox.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/apps/email/inbox.component.ts ***!
  \*****************************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InboxComponent = /** @class */ (function () {
    function InboxComponent() {
    }
    InboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./inbox.component.html */ "./src/app/views/apps/email/inbox.component.html")
        })
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/views/apps/email/message.component.html":
/*!*********************************************************!*\
  !*** ./src/app/views/apps/email/message.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"email-app mb-4\">\n    <nav>\n      <a href=\"#\" class=\"btn btn-danger btn-block\">New Email</a>\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n        </li>\n      </ul>\n    </nav>\n    <main class=\"message\">\n      <div class=\"toolbar\">\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-star\"></span></button>\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-star-o\"></span></button>\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-bookmark-o\"></span></button>\n        </div>\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-reply\"></span></button>\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-reply-all\"></span></button>\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-forward\"></span></button>\n        </div>\n        <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-trash-o\"></span></button>\n        <div class=\"btn-group\" dropdown placement=\"bottom right\">\n          <button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n            <span class=\"fa fa-tags\"></span> <span class=\"caret\"></span>\n          </button>\n          <div class=\"dropdown-menu\" *dropdownMenu>\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a>\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-info\"> Job</span></a>\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-success\"> Clients</span></a>\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-warning\"> News</span></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"details\">\n        <div class=\"title\">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>\n        <div class=\"header\">\n          <img class=\"avatar\" src=\"assets/img/avatars/7.jpg\">\n          <div class=\"from\">\n            <span>Lukasz Holeczek</span>\n            lukasz@bootstrapmaster.com\n          </div>\n          <div class=\"date\">Today, <b>3:47 PM</b></div>\n        </div>\n        <div class=\"content\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </p>\n          <blockquote>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </blockquote>\n        </div>\n        <div class=\"attachments\">\n          <div class=\"attachment\">\n            <span class=\"badge badge-danger\">zip</span> <b>bootstrap.zip</b> <i>(2,5MB)</i>\n            <span class=\"menu\">\n              <a href=\"#\" class=\"fa fa-search\"></a>\n              <a href=\"#\" class=\"fa fa-share\"></a>\n              <a href=\"#\" class=\"fa fa-cloud-download\"></a>\n            </span>\n          </div>\n          <div class=\"attachment\">\n            <span class=\"badge badge-info\">txt</span> <b>readme.txt</b> <i>(7KB)</i>\n            <span class=\"menu\">\n              <a href=\"#\" class=\"fa fa-search\"></a>\n              <a href=\"#\" class=\"fa fa-share\"></a>\n              <a href=\"#\" class=\"fa fa-cloud-download\"></a>\n            </span>\n          </div>\n          <div class=\"attachment\">\n            <span class=\"badge badge-success\">xls</span> <b>spreadsheet.xls</b> <i>(984KB)</i>\n            <span class=\"menu\">\n              <a href=\"#\" class=\"fa fa-search\"></a>\n              <a href=\"#\" class=\"fa fa-share\"></a>\n              <a href=\"#\" class=\"fa fa-cloud-download\"></a>\n            </span>\n          </div>\n        </div>\n        <form method=\"post\" action=\"\">\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" id=\"message\" name=\"body\" rows=\"12\" placeholder=\"Click here to reply\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <button tabindex=\"3\" type=\"submit\" class=\"btn btn-success\">Send message</button>\n          </div>\n        </form>\n      </div>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/apps/email/message.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/apps/email/message.component.ts ***!
  \*******************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/views/apps/email/message.component.html")
        })
    ], MessageComponent);
    return MessageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=email-email-module.js.map