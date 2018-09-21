(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-5\">\n              <h4 class=\"card-title mb-0\">Traffic</h4>\n              <div class=\"small text-muted\">November 2015</div>\n            </div>\n            <div class=\"col-sm-7\">\n              <button type=\"button\" class=\"btn btn-outline-primary float-right\"><i class=\"icon-cloud-download\"></i></button>\n              <div class=\"btn-group btn-group-toggle float-right mr-3\" data-toggle=\"buttons\">\n                <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Day\" id=\"option1\">Day</label>\n                <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Month\" id=\"option2\">Month</label>\n                <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Year\" id=\"option3\">Year</label>\n              </div>\n            </div>\n          </div>\n          <hr class=\"mb-4\">\n          <div class=\"chart-wrapper\" style=\"height:343px\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"mainChartData\"\n            [labels]=\"mainChartLabels\"\n            [options]=\"mainChartOptions\"\n            [colors]=\"mainChartColours\"\n            [legend]=\"mainChartLegend\"\n            [chartType]=\"mainChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title mb-0\">Traffic Details</h4>\n          <div class=\"small text-muted\">November 2017 - December 2017</div>\n          <hr class=\"mb-4\">\n\n          <div>Visits <span class=\"font-weight-bold float-right\">(40% - 29.703 Users)</span></div>\n          <div class=\"progress progress-xs mt-2 mb-3\">\n            <div class=\"progress-bar bg-success\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n\n          <div>Unique <span class=\"font-weight-bold float-right\">(20% - 24.093 Unique Users)</span></div>\n          <div class=\"progress progress-xs mt-2 mb-3\">\n            <div class=\"progress-bar bg-info\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n\n          <div>Pageviews <span class=\"font-weight-bold float-right\">(60% - 78.706 Views)</span></div>\n          <div class=\"progress progress-xs mt-2 mb-3\">\n            <div class=\"progress-bar bg-warning\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n\n          <div>New Users <span class=\"font-weight-bold float-right\">(80% - 22.123 Users)</span></div>\n          <div class=\"progress progress-xs mt-2 mb-3\">\n            <div class=\"progress-bar bg-danger\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n\n          <div>Bounce Rate <span class=\"font-weight-bold float-right\">(40.15%)</span></div>\n          <div class=\"progress progress-xs mt-2 mb-3\">\n            <div class=\"progress-bar bg-success\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n\n          <div>Visits <span class=\"font-weight-bold float-right\">(40% - 29.703 Users)</span></div>\n          <div class=\"progress progress-xs mt-2 mb-3\">\n            <div class=\"progress-bar bg-success\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n\n          <div>Unique <span class=\"font-weight-bold float-right\">(20% - 24.093 Unique Users)</span></div>\n          <div class=\"progress progress-xs mt-2 mb-3\">\n            <div class=\"progress-bar bg-info\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-facebook\">\n          <i class=\"fa fa-facebook\"></i>\n          <div class=\"chart-wrapper\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"brandBoxChartData1\"\n            [labels]=\"brandBoxChartLabels\"\n            [options]=\"brandBoxChartOptions\"\n            [colors]=\"brandBoxChartColours\"\n            [legend]=\"brandBoxChartLegend\"\n            [chartType]=\"brandBoxChartType\"></canvas>\n          </div>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">89k</div>\n            <div class=\"text-uppercase text-muted small\">friends</div>\n          </div>\n          <div>\n            <div class=\"text-value\">459</div>\n            <div class=\"text-uppercase text-muted small\">feeds</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-twitter\">\n          <i class=\"fa fa-twitter\"></i>\n          <div class=\"chart-wrapper\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"brandBoxChartData2\"\n            [labels]=\"brandBoxChartLabels\"\n            [options]=\"brandBoxChartOptions\"\n            [colors]=\"brandBoxChartColours\"\n            [legend]=\"brandBoxChartLegend\"\n            [chartType]=\"brandBoxChartType\"></canvas>\n          </div>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">973k</div>\n            <div class=\"text-uppercase text-muted small\">followers</div>\n          </div>\n          <div>\n            <div class=\"text-value\">1.792</div>\n            <div class=\"text-uppercase text-muted small\">tweets</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-linkedin\">\n          <i class=\"fa fa-linkedin\"></i>\n          <div class=\"chart-wrapper\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"brandBoxChartData3\"\n            [labels]=\"brandBoxChartLabels\"\n            [options]=\"brandBoxChartOptions\"\n            [colors]=\"brandBoxChartColours\"\n            [legend]=\"brandBoxChartLegend\"\n            [chartType]=\"brandBoxChartType\"></canvas>\n          </div>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">500+</div>\n            <div class=\"text-uppercase text-muted small\">contacts</div>\n          </div>\n          <div>\n            <div class=\"text-value\">292</div>\n            <div class=\"text-uppercase text-muted small\">feeds</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-google-plus\">\n          <i class=\"fa fa-google-plus\"></i>\n          <div class=\"chart-wrapper\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"brandBoxChartData4\"\n            [labels]=\"brandBoxChartLabels\"\n            [options]=\"brandBoxChartOptions\"\n            [colors]=\"brandBoxChartColours\"\n            [legend]=\"brandBoxChartLegend\"\n            [chartType]=\"brandBoxChartType\"></canvas>\n          </div>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">894</div>\n            <div class=\"text-uppercase text-muted small\">followers</div>\n          </div>\n          <div>\n            <div class=\"text-value\">92</div>\n            <div class=\"text-uppercase text-muted small\">circles</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Traffic &amp; Sales\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-info\">\n                    <small class=\"text-muted\">New Clients</small>\n                    <br>\n                    <strong class=\"h4\">9,123</strong>\n                  </div>\n                </div><!--/.col-->\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-danger\">\n                    <small class=\"text-muted\">Recuring Clients</small>\n                    <br>\n                    <strong class=\"h4\">22,643</strong>\n                  </div>\n                </div><!--/.col-->\n              </div><!--/.row-->\n              <hr class=\"mt-0\">\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Monday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 34%\" aria-valuenow=\"34\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 78%\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Tuesday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 94%\" aria-valuenow=\"94\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Wednesday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 12%\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 67%\" aria-valuenow=\"67\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Thursday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 91%\" aria-valuenow=\"91\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Friday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 73%\" aria-valuenow=\"73\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Saturday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 53%\" aria-valuenow=\"53\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 82%\" aria-valuenow=\"82\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-4\">\n                <div class=\"progress-group-prepend\">\n                  <span class=\"progress-group-text\">\n                    Sunday\n                  </span>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 9%\" aria-valuenow=\"9\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 69%\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div><!--/.col-->\n            <div class=\"col-sm-6\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-warning\">\n                    <small class=\"text-muted\">Pageviews</small>\n                    <br>\n                    <strong class=\"h4\">78,623</strong>\n                  </div>\n                </div><!--/.col-->\n                <div class=\"col-sm-6\">\n                  <div class=\"callout callout-success\">\n                    <small class=\"text-muted\">Organic</small>\n                    <br>\n                    <strong class=\"h4\">49,123</strong>\n                  </div>\n                </div><!--/.col-->\n              </div><!--/.row-->\n              <hr class=\"mt-0\">\n              <div class=\"progress-group\">\n                <div class=\"progress-group-header\">\n                  <i class=\"icon-user progress-group-icon\"></i>\n                  <div>Male</div>\n                  <div class=\"ml-auto font-weight-bold\">43%</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group mb-5\">\n                <div class=\"progress-group-header\">\n                  <i class=\"icon-user-female progress-group-icon\"></i>\n                  <div>Female</div>\n                  <div class=\"ml-auto font-weight-bold\">37%</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group\">\n                <div class=\"progress-group-header align-items-end\">\n                  <i class=\"icon-globe progress-group-icon\"></i>\n                  <div>Organic Search</div>\n                  <div class=\"ml-auto font-weight-bold mr-2\">191.235</div>\n                  <div class=\"text-muted small\">(56%)</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group\">\n                <div class=\"progress-group-header align-items-end\">\n                  <i class=\"icon-social-facebook progress-group-icon\"></i>\n                  <div>Facebook</div>\n                  <div class=\"ml-auto font-weight-bold mr-2\">51.223</div>\n                  <div class=\"text-muted small\">(15%)</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group\">\n                <div class=\"progress-group-header align-items-end\">\n                  <i class=\"icon-social-twitter progress-group-icon\"></i>\n                  <div>Twitter</div>\n                  <div class=\"ml-auto font-weight-bold mr-2\">37.564</div>\n                  <div class=\"text-muted small\">(11%)</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 11%\" aria-valuenow=\"11\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"progress-group\">\n                <div class=\"progress-group-header align-items-end\">\n                  <i class=\"icon-social-linkedin progress-group-icon\"></i>\n                  <div>LinkedIn</div>\n                  <div class=\"ml-auto font-weight-bold mr-2\">27.319</div>\n                  <div class=\"text-muted small\">(8%)</div>\n                </div>\n                <div class=\"progress-group-bars\">\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 8%\" aria-valuenow=\"8\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div><!--/.col-->\n          </div><!--/.row-->\n          <br>\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\n                <th>User</th>\n                <th class=\"text-center\">Country</th>\n                <th>Usage</th>\n                <th class=\"text-center\">Payment Method</th>\n                <th>Activity</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-success\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Yiorgos Avraamu</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-us h4 mb-0\" title=\"us\" id=\"us\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>50%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-cc-mastercard\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>10 sec ago</strong>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-danger\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Avram Tarasios</div>\n                  <div class=\"small text-muted\">\n\n                    <span>Recurring</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-br h4 mb-0\" title=\"br\" id=\"br\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>10%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-cc-visa\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>5 minutes ago</strong>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-warning\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Quintin Ed</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-in h4 mb-0\" title=\"in\" id=\"in\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>74%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 74%\" aria-valuenow=\"74\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-cc-stripe\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>1 hour ago</strong>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-secondary\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Enéas Kwadwo</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-fr h4 mb-0\" title=\"fr\" id=\"fr\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>98%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 98%\" aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-paypal\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>Last month</strong>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-success\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Agapetus Tadeáš</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-es h4 mb-0\" title=\"es\" id=\"es\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>22%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-google-wallet\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>Last week</strong>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-danger\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Friderik Dávid</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-pl h4 mb-0\" title=\"pl\" id=\"pl\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>43%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"fa fa-cc-amex\" style=\"font-size:24px\"></i>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>Yesterday</strong>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        // constructor( ) { }
        this.brandPrimary = '#20a8d8';
        this.brandSuccess = '#4dbd74';
        this.brandInfo = '#63c2de';
        this.brandWarning = '#f8cb00';
        this.brandDanger = '#f86c6b';
        this.radioModel = 'Month';
        // dropdown buttons
        this.status = { isopen: false };
        this.mainChartData1 = [100, 200, 180, 250, 220, 190, 210, 215];
        this.mainChartData2 = [180, 280, 260, 330, 300, 270, 290, 295];
        this.mainChartData3 = [260, 360, 340, 410, 380, 350, 370, 375];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Current'
            },
            {
                data: this.mainChartData2,
                label: 'Previous'
            },
            {
                data: this.mainChartData3,
                label: 'BEP'
            }
        ];
        this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.mainChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {}
                    }],
                yAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(400 / 5),
                            max: 500
                        }
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.mainChartColours = [
            {
                backgroundColor: this.shadeColor2(this.brandInfo, 0),
                borderColor: '#fff',
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: this.shadeColor2(this.brandInfo, 0.25),
                borderColor: '#fff',
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: this.shadeColor2(this.brandInfo, 0.5),
                borderColor: '#fff',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.socialChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.socialChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.socialChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.socialChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.socialChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.socialChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.socialChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.socialChartLegend = false;
        this.socialChartType = 'line';
        // sparkline charts
        this.sparklineChartData1 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Clients'
            }
        ];
        this.sparklineChartData2 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Clients'
            }
        ];
        this.sparklineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.sparklineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.sparklineChartDefault = [
            {
                backgroundColor: 'transparent',
                borderColor: '#d1d4d7',
            }
        ];
        this.sparklineChartPrimary = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandPrimary,
            }
        ];
        this.sparklineChartInfo = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
            }
        ];
        this.sparklineChartDanger = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
            }
        ];
        this.sparklineChartWarning = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandWarning,
            }
        ];
        this.sparklineChartSuccess = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
            }
        ];
        this.sparklineChartLegend = false;
        this.sparklineChartType = 'line';
    }
    DashboardComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    // convert Hex to RGBA
    DashboardComponent.prototype.convertHex = function (hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
        return rgba;
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // mainChart
    DashboardComponent.prototype.shadeColor2 = function (color, percent) {
        var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
        return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
    };
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/index.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"].forRoot()
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map