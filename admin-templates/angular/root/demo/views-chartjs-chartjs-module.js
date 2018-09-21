(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chartjs-chartjs-module"],{

/***/ "./src/app/views/chartjs/chartjs-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/chartjs/chartjs-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ChartJSRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJSRoutingModule", function() { return ChartJSRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chartjs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartjs.component */ "./src/app/views/chartjs/chartjs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _chartjs_component__WEBPACK_IMPORTED_MODULE_2__["ChartJSComponent"],
        data: {
            title: 'Charts'
        }
    }
];
var ChartJSRoutingModule = /** @class */ (function () {
    function ChartJSRoutingModule() {
    }
    ChartJSRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChartJSRoutingModule);
    return ChartJSRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/chartjs/chartjs.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card-columns cols-2\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Line Chart\n        <div class=\"card-header-actions\">\n          <a href=\"http://www.chartjs.org\">\n            <small class=\"text-muted\">docs</small>\n          </a>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-wrapper\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"lineChartData\"\n          [labels]=\"lineChartLabels\"\n          [options]=\"lineChartOptions\"\n          [colors]=\"lineChartColours\"\n          [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Bar Chart\n        <div class=\"card-header-actions\">\n          <a href=\"http://www.chartjs.org\">\n            <small class=\"text-muted\">docs</small>\n          </a>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-wrapper\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"barChartData\"\n          [labels]=\"barChartLabels\"\n          [options]=\"barChartOptions\"\n          [legend]=\"barChartLegend\"\n          [chartType]=\"barChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Doughnut Chart\n        <div class=\"card-header-actions\">\n          <a href=\"http://www.chartjs.org\">\n            <small class=\"text-muted\">docs</small>\n          </a>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-wrapper\">\n          <canvas baseChart class=\"chart\"\n          [data]=\"doughnutChartData\"\n          [labels]=\"doughnutChartLabels\"\n          [chartType]=\"doughnutChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Radar Chart\n        <div class=\"card-header-actions\">\n          <a href=\"http://www.chartjs.org\">\n            <small class=\"text-muted\">docs</small>\n          </a>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-wrapper\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"radarChartData\"\n          [labels]=\"radarChartLabels\"\n          [chartType]=\"radarChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Pie Chart\n        <div class=\"card-header-actions\">\n          <a href=\"http://www.chartjs.org\">\n            <small class=\"text-muted\">docs</small>\n          </a>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-wrapper\">\n          <canvas baseChart class=\"chart\"\n          [data]=\"pieChartData\"\n          [labels]=\"pieChartLabels\"\n          [chartType]=\"pieChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Polar Area Chart\n        <div class=\"card-header-actions\">\n          <a href=\"http://www.chartjs.org\">\n            <small class=\"text-muted\">docs</small>\n          </a>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-wrapper\">\n          <canvas baseChart class=\"chart\"\n          [data]=\"polarAreaChartData\"\n          [labels]=\"polarAreaChartLabels\"\n          [legend]=\"polarAreaLegend\"\n          [chartType]=\"polarAreaChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/chartjs/chartjs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.component.ts ***!
  \****************************************************/
/*! exports provided: ChartJSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJSComponent", function() { return ChartJSComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartJSComponent = /** @class */ (function () {
    function ChartJSComponent() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    // events
    ChartJSComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartJSComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartJSComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./chartjs.component.html */ "./src/app/views/chartjs/chartjs.component.html")
        })
    ], ChartJSComponent);
    return ChartJSComponent;
}());



/***/ }),

/***/ "./src/app/views/chartjs/chartjs.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.module.ts ***!
  \*************************************************/
/*! exports provided: ChartJSModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJSModule", function() { return ChartJSModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chartjs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartjs.component */ "./src/app/views/chartjs/chartjs.component.ts");
/* harmony import */ var _chartjs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjs-routing.module */ "./src/app/views/chartjs/chartjs-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChartJSModule = /** @class */ (function () {
    function ChartJSModule() {
    }
    ChartJSModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _chartjs_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChartJSRoutingModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ChartsModule"]
            ],
            declarations: [_chartjs_component__WEBPACK_IMPORTED_MODULE_2__["ChartJSComponent"]]
        })
    ], ChartJSModule);
    return ChartJSModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-chartjs-chartjs-module.js.map