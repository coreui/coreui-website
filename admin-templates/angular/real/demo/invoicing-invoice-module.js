(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoicing-invoice-module"],{

/***/ "./src/app/views/apps/invoicing/invoice-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/apps/invoicing/invoice-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.component */ "./src/app/views/apps/invoicing/invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'invoice',
        component: _invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"],
        data: {
            title: 'Invoice'
        }
    }
];
var InvoiceRoutingModule = /** @class */ (function () {
    function InvoiceRoutingModule() {
    }
    InvoiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/apps/invoicing/invoice.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/apps/invoicing/invoice.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Invoice <strong>#90-98792</strong>\n        <a href=\"https://coreui.io/pro/angular/\" class=\"badge badge-danger ml-2\">CoreUI Pro Component</a>\n        <a href=\"#\" class=\"btn btn-sm btn-info float-right\" onclick=\"javascript:window.print();\"><i class=\"fa fa-print\"></i> Print</a>\n        <a href=\"#\" class=\"btn btn-sm btn-info float-right\"><i class=\"fa fa-save\"></i> Save</a>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row mb-4\">\n\n            <div class=\"col-sm-4\">\n                <h6 class=\"mb-3\">From:</h6>\n                <div><strong>BootstrapMaster.com</strong></div>\n                <div>Konopnickiej 42</div>\n                <div>43-190 Mikolow, Poland</div>\n                <div>Email: lukasz@bootstrapmaster.com</div>\n                <div>Phone: +48 123 456 789</div>\n            </div><!--/.col-->\n\n            <div class=\"col-sm-4\">\n                <h6 class=\"mb-3\">To:</h6>\n                <div><strong>BootstrapMaster.com</strong></div>\n                <div>Konopnickiej 42</div>\n                <div>43-190 Mikolow, Poland</div>\n                <div>Email: lukasz@bootstrapmaster.com</div>\n                <div>Phone: +48 123 456 789</div>\n            </div><!--/.col-->\n\n            <div class=\"col-sm-4\">\n                <h6 class=\"mb-3\">Details:</h6>\n                <div>Invoice <strong>#90-98792</strong></div>\n                <div>March 30, 2013</div>\n                <div>VAT: PL9877281777</div>\n                <div>Account Name: BootstrapMaster.com</div>\n                <div><strong>SWIFT code: 99 8888 7777 6666 5555</strong></div>\n            </div><!--/.col-->\n\n        </div><!--/.row-->\n\n        <div class=\"table-responsive-sm\">\n            <table class=\"table table-striped\">\n                <thead>\n                    <tr>\n                        <th class=\"center\">#</th>\n                        <th>Item</th>\n                        <th>Description</th>\n                        <th class=\"center\">Quantity</th>\n                        <th class=\"right\">Unit Cost</th>\n                        <th class=\"right\">Total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td class=\"center\">1</td>\n                        <td class=\"left\">Origin License</td>\n                        <td class=\"left\">Extended License</td>\n                        <td class=\"center\">1</td>\n                        <td class=\"right\">$999,00</td>\n                        <td class=\"right\">$999,00</td>\n                    </tr>\n                    <tr>\n                        <td class=\"center\">2</td>\n                        <td class=\"left\">Custom Services</td>\n                        <td class=\"left\">Instalation and Customization (cost per hour)</td>\n                        <td class=\"center\">20</td>\n                        <td class=\"right\">$150,00</td>\n                        <td class=\"right\">$3.000,00</td>\n                    </tr>\n                    <tr>\n                        <td class=\"center\">3</td>\n                        <td class=\"left\">Hosting</td>\n                        <td class=\"left\">1 year subcription</td>\n                        <td class=\"center\">1</td>\n                        <td class=\"right\">$499,00</td>\n                        <td class=\"right\">$499,00</td>\n                    </tr>\n                    <tr>\n                        <td class=\"center\">4</td>\n                        <td class=\"left\">Platinum Support</td>\n                        <td class=\"left\">1 year subcription 24/7</td>\n                        <td class=\"center\">1</td>\n                        <td class=\"right\">$3.999,00</td>\n                        <td class=\"right\">$3.999,00</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"col-lg-4 col-sm-5\">\n                <div class=\"well\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                </div>\n            </div><!--/.col-->\n\n            <div class=\"col-lg-4 offset-lg-4 col-sm-5 offset-sm-2\">\n                <table class=\"table table-clear\">\n                    <tbody>\n                        <tr>\n                            <td class=\"left\"><strong>Subtotal</strong></td>\n                            <td class=\"right\">$8.497,00</td>\n                        </tr>\n                        <tr>\n                            <td class=\"left\"><strong>Discount (20%)</strong></td>\n                            <td class=\"right\">$1,699,40</td>\n                        </tr>\n                        <tr>\n                            <td class=\"left\"><strong>VAT (10%)</strong></td>\n                            <td class=\"right\">$679,76</td>\n                        </tr>\n                        <tr>\n                            <td class=\"left\"><strong>Total</strong></td>\n                            <td class=\"right\"><strong>$7.477,36</strong></td>\n                        </tr>\n                    </tbody>\n                </table>\n                <a href=\"#\" class=\"btn btn-success\"><i class=\"fa fa-usd\"></i> Proceed to Payment</a>\n            </div><!--/.col-->\n\n        </div><!--/.row-->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/apps/invoicing/invoice.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/apps/invoicing/invoice.component.ts ***!
  \***********************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent() {
    }
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/views/apps/invoicing/invoice.component.html")
        })
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/views/apps/invoicing/invoice.module.ts":
/*!********************************************************!*\
  !*** ./src/app/views/apps/invoicing/invoice.module.ts ***!
  \********************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.component */ "./src/app/views/apps/invoicing/invoice.component.ts");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-routing.module */ "./src/app/views/apps/invoicing/invoice-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Invoice

// Routing

//
var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _invoice_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvoiceRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [
                _invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"]
            ]
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=invoicing-invoice-module.js.map