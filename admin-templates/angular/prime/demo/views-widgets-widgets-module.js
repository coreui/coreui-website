(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-widgets-widgets-module"],{

/***/ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * CoreUI Plugins - Custom Tooltips for Chart.js (v1.2.0): custom-tooltips.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  function CustomTooltips(tooltipModel) {
    var _this = this;

    // Add unique id if not exist
    var _setCanvasId = function _setCanvasId() {
      var _idMaker = function _idMaker() {
        var _hex = 16;
        var _multiplier = 0x10000;
        return ((1 + Math.random()) * _multiplier | 0).toString(_hex);
      };

      var _canvasId = "_canvas-" + (_idMaker() + _idMaker());

      _this._chart.canvas.id = _canvasId;
      return _canvasId;
    };

    var ClassName = {
      ABOVE: 'above',
      BELOW: 'below',
      CHARTJS_TOOLTIP: 'chartjs-tooltip',
      NO_TRANSFORM: 'no-transform',
      TOOLTIP_BODY: 'tooltip-body',
      TOOLTIP_BODY_ITEM: 'tooltip-body-item',
      TOOLTIP_BODY_ITEM_COLOR: 'tooltip-body-item-color',
      TOOLTIP_BODY_ITEM_LABEL: 'tooltip-body-item-label',
      TOOLTIP_BODY_ITEM_VALUE: 'tooltip-body-item-value',
      TOOLTIP_HEADER: 'tooltip-header',
      TOOLTIP_HEADER_ITEM: 'tooltip-header-item'
    };
    var Selector = {
      DIV: 'div',
      SPAN: 'span',
      TOOLTIP: (this._chart.canvas.id || _setCanvasId()) + "-tooltip"
    };
    var tooltip = document.getElementById(Selector.TOOLTIP);

    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = Selector.TOOLTIP;
      tooltip.className = ClassName.CHARTJS_TOOLTIP;

      this._chart.canvas.parentNode.appendChild(tooltip);
    } // Hide if no tooltip


    if (tooltipModel.opacity === 0) {
      tooltip.style.opacity = 0;
      return;
    } // Set caret Position


    tooltip.classList.remove(ClassName.ABOVE, ClassName.BELOW, ClassName.NO_TRANSFORM);

    if (tooltipModel.yAlign) {
      tooltip.classList.add(tooltipModel.yAlign);
    } else {
      tooltip.classList.add(ClassName.NO_TRANSFORM);
    } // Set Text


    if (tooltipModel.body) {
      var titleLines = tooltipModel.title || [];
      var tooltipHeader = document.createElement(Selector.DIV);
      tooltipHeader.className = ClassName.TOOLTIP_HEADER;
      titleLines.forEach(function (title) {
        var tooltipHeaderTitle = document.createElement(Selector.DIV);
        tooltipHeaderTitle.className = ClassName.TOOLTIP_HEADER_ITEM;
        tooltipHeaderTitle.innerHTML = title;
        tooltipHeader.appendChild(tooltipHeaderTitle);
      });
      var tooltipBody = document.createElement(Selector.DIV);
      tooltipBody.className = ClassName.TOOLTIP_BODY;
      var tooltipBodyItems = tooltipModel.body.map(function (item) {
        return item.lines;
      });
      tooltipBodyItems.forEach(function (item, i) {
        var tooltipBodyItem = document.createElement(Selector.DIV);
        tooltipBodyItem.className = ClassName.TOOLTIP_BODY_ITEM;
        var colors = tooltipModel.labelColors[i];
        var tooltipBodyItemColor = document.createElement(Selector.SPAN);
        tooltipBodyItemColor.className = ClassName.TOOLTIP_BODY_ITEM_COLOR;
        tooltipBodyItemColor.style.backgroundColor = colors.backgroundColor;
        tooltipBodyItem.appendChild(tooltipBodyItemColor);

        if (item[0].split(':').length > 1) {
          var tooltipBodyItemLabel = document.createElement(Selector.SPAN);
          tooltipBodyItemLabel.className = ClassName.TOOLTIP_BODY_ITEM_LABEL;
          tooltipBodyItemLabel.innerHTML = item[0].split(': ')[0];
          tooltipBodyItem.appendChild(tooltipBodyItemLabel);
          var tooltipBodyItemValue = document.createElement(Selector.SPAN);
          tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
          tooltipBodyItemValue.innerHTML = item[0].split(': ').pop();
          tooltipBodyItem.appendChild(tooltipBodyItemValue);
        } else {
          var _tooltipBodyItemValue = document.createElement(Selector.SPAN);

          _tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
          _tooltipBodyItemValue.innerHTML = item[0];
          tooltipBodyItem.appendChild(_tooltipBodyItemValue);
        }

        tooltipBody.appendChild(tooltipBodyItem);
      });
      tooltip.innerHTML = '';
      tooltip.appendChild(tooltipHeader);
      tooltip.appendChild(tooltipBody);
    }

    var positionY = this._chart.canvas.offsetTop;
    var positionX = this._chart.canvas.offsetLeft; // Display, position, and set styles for font

    tooltip.style.opacity = 1;
    tooltip.style.left = positionX + tooltipModel.caretX + "px";
    tooltip.style.top = positionY + tooltipModel.caretY + "px";
  }

  exports.CustomTooltips = CustomTooltips;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=custom-tooltips.js.map


/***/ }),

/***/ "./src/app/views/widgets/widgets-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/widgets/widgets-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WidgetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsRoutingModule", function() { return WidgetsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets.component */ "./src/app/views/widgets/widgets.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _widgets_component__WEBPACK_IMPORTED_MODULE_2__["WidgetsComponent"],
        data: {
            title: 'Widgets'
        }
    }
];
var WidgetsRoutingModule = /** @class */ (function () {
    function WidgetsRoutingModule() {
    }
    WidgetsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WidgetsRoutingModule);
    return WidgetsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/widgets/widgets.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/widgets/widgets.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"lineChart1Data\"\n          [labels]=\"lineChart1Labels\"\n          [options]=\"lineChart1Options\"\n          [colors]=\"lineChart1Colours\"\n          [legend]=\"lineChart1Legend\"\n          [chartType]=\"lineChart1Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body pb-0\">\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n            <i class=\"icon-location-pin\"></i>\n          </button>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"lineChart2Data\"\n          [labels]=\"lineChart2Labels\"\n          [options]=\"lineChart2Options\"\n          [colors]=\"lineChart2Colours\"\n          [legend]=\"lineChart2Legend\"\n          [chartType]=\"lineChart2Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"lineChart3Data\"\n          [labels]=\"lineChart3Labels\"\n          [options]=\"lineChart3Options\"\n          [colors]=\"lineChart3Colours\"\n          [legend]=\"lineChart3Legend\"\n          [chartType]=\"lineChart3Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <div class=\"text-value\">9.823</div>\n          <div>Members online</div>\n        </div>\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"barChart1Data\"\n          [labels]=\"barChart1Labels\"\n          [options]=\"barChart1Options\"\n          [colors]=\"barChart1Colours\"\n          [legend]=\"barChart1Legend\"\n          [chartType]=\"barChart1Type\"></canvas>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n              <small>Today 6:43 AM</small>\n            </span>\n            <span class=\"float-right\">\n              <small>+432,50 (15,78%)</small>\n            </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart4Data\"\n            [labels]=\"lineChart4Labels\"\n            [options]=\"lineChart4Options\"\n            [colors]=\"lineChart4Colours\"\n            [legend]=\"lineChart4Legend\"\n            [chartType]=\"lineChart4Type\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart2Data\"\n            [labels]=\"barChart2Labels\"\n            [options]=\"barChart2Options\"\n            [colors]=\"barChart2Colours\"\n            [legend]=\"barChart2Legend\"\n            [chartType]=\"barChart2Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-header bg-danger\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n              <small>Today 6:43 AM</small>\n            </span>\n            <span class=\"float-right\">\n              <small>+432,50 (15,78%)</small>\n            </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart4Data\"\n            [labels]=\"lineChart4Labels\"\n            [options]=\"lineChart4Options\"\n            [colors]=\"lineChart4Colours\"\n            [legend]=\"lineChart4Legend\"\n            [chartType]=\"lineChart4Type\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart2Data\"\n            [labels]=\"barChart2Labels\"\n            [options]=\"barChart2Options\"\n            [colors]=\"barChart2Colours\"\n            [legend]=\"barChart2Legend\"\n            [chartType]=\"barChart2Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-header bg-success\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n              <small>Today 6:43 AM</small>\n            </span>\n            <span class=\"float-right\">\n              <small>+432,50 (15,78%)</small>\n            </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart4Data\"\n            [labels]=\"lineChart4Labels\"\n            [options]=\"lineChart4Options\"\n            [colors]=\"lineChart4Colours\"\n            [legend]=\"lineChart4Legend\"\n            [chartType]=\"lineChart4Type\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart2Data\"\n            [labels]=\"barChart2Labels\"\n            [options]=\"barChart2Options\"\n            [colors]=\"barChart2Colours\"\n            [legend]=\"barChart2Legend\"\n            [chartType]=\"barChart2Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-header bg-warning\">\n          <div class=\"font-weight-bold\">\n            <span>SALE</span>\n            <span class=\"float-right\">$1.890,65</span>\n          </div>\n          <div>\n            <span>\n              <small>Today 6:43 AM</small>\n            </span>\n            <span class=\"float-right\">\n              <small>+432,50 (15,78%)</small>\n            </span>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart4Data\"\n            [labels]=\"lineChart4Labels\"\n            [options]=\"lineChart4Options\"\n            [colors]=\"lineChart4Colours\"\n            [legend]=\"lineChart4Legend\"\n            [chartType]=\"lineChart4Type\"></canvas>\n          </div>\n          <div class=\"chart-wrapper\" style=\"height:38px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart2Data\"\n            [labels]=\"barChart2Labels\"\n            [options]=\"barChart2Options\"\n            [colors]=\"barChart2Colours\"\n            [legend]=\"barChart2Legend\"\n            [chartType]=\"barChart2Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">89.9%</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">12.124</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">$98.111,00</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">2 TB</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-xs my-3\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">89.9%</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-white progress-xs my-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">12.124</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-white progress-xs my-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">$98.111,00</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-white progress-xs my-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body\">\n          <div class=\"h4 m-0\">2 TB</div>\n          <div>Lorem ipsum...</div>\n          <div class=\"progress progress-white progress-xs my-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div class=\"row\">\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart3Data\"\n            [labels]=\"barChart3Labels\"\n            [options]=\"barChart3Options\"\n            [colors]=\"barChart3Primary\"\n            [legend]=\"barChart3Legend\"\n            [chartType]=\"barChart3Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart3Data\"\n            [labels]=\"barChart3Labels\"\n            [options]=\"barChart3Options\"\n            [colors]=\"barChart3Danger\"\n            [legend]=\"barChart3Legend\"\n            [chartType]=\"barChart3Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"barChart3Data\"\n            [labels]=\"barChart3Labels\"\n            [options]=\"barChart3Options\"\n            [colors]=\"barChart3Success\"\n            [legend]=\"barChart3Legend\"\n            [chartType]=\"barChart3Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart5Data\"\n            [labels]=\"lineChart5Labels\"\n            [options]=\"lineChart5Options\"\n            [colors]=\"lineChart5Info\"\n            [legend]=\"lineChart5Legend\"\n            [chartType]=\"lineChart5Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart5Data\"\n            [labels]=\"lineChart5Labels\"\n            [options]=\"lineChart5Options\"\n            [colors]=\"lineChart5Success\"\n            [legend]=\"lineChart5Legend\"\n            [chartType]=\"lineChart5Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-2 col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-muted small text-uppercase font-weight-bold\">Title</div>\n          <div class=\"h2 py-3\">1,123</div>\n          <div class=\"chart-wrapper mx-auto\" style=\"height:40px;width:80px;\">\n            <canvas baseChart class=\"chart\"\n            [datasets]=\"lineChart5Data\"\n            [labels]=\"lineChart5Labels\"\n            [options]=\"lineChart5Options\"\n            [colors]=\"lineChart5Warning\"\n            [legend]=\"lineChart5Legend\"\n            [chartType]=\"lineChart5Type\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-primary mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-laptop bg-info p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-info mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-warning mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-bell bg-danger p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-danger mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-primary mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n        <div class=\"card-footer px-3 py-2\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-laptop bg-info p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-info mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n        <div class=\"card-footer px-3 py-2\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-warning mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n        <div class=\"card-footer px-3 py-2\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-3 clearfix\">\n          <i class=\"fa fa-bell bg-danger p-3 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-danger mb-0 mt-2\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n        <div class=\"card-footer px-3 py-2\">\n          <a class=\"font-weight-bold font-xs btn-block text-muted\" href=\"#\">View More <i class=\"fa fa-angle-right float-right font-lg\"></i></a>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-primary mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-laptop bg-info p-4 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-info mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-moon-o bg-warning p-4 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-warning mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-bell bg-danger p-4 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-danger mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-primary mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-info mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-warning mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-6 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body p-0 clearfix\">\n          <i class=\"fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left\"></i>\n          <div class=\"h5 text-danger mb-0 pt-3\">$1.999,50</div>\n          <div class=\"text-muted text-uppercase font-weight-bold font-xs\">Income</div>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-facebook\">\n          <i class=\"fa fa-facebook\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">89k</div>\n            <div class=\"text-uppercase text-muted small\">friends</div>\n          </div>\n          <div>\n            <div class=\"text-value\">459</div>\n            <div class=\"text-uppercase text-muted small\">feeds</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-twitter\">\n          <i class=\"fa fa-twitter\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">973k</div>\n            <div class=\"text-uppercase text-muted small\">followers</div>\n          </div>\n          <div>\n            <div class=\"text-value\">1.792</div>\n            <div class=\"text-uppercase text-muted small\">tweets</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-linkedin\">\n          <i class=\"fa fa-linkedin\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">500+</div>\n            <div class=\"text-uppercase text-muted small\">contacts</div>\n          </div>\n          <div>\n            <div class=\"text-value\">292</div>\n            <div class=\"text-uppercase text-muted small\">feeds</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-google-plus\">\n          <i class=\"fa fa-google-plus\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">894</div>\n            <div class=\"text-uppercase text-muted small\">followers</div>\n          </div>\n          <div>\n            <div class=\"text-value\">92</div>\n            <div class=\"text-uppercase text-muted small\">circles</div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div class=\"card-group mb-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"h1 text-muted text-right mb-4\">\n          <i class=\"icon-people\"></i>\n        </div>\n        <div class=\"h4 mb-0\">87.500</div>\n        <small class=\"text-muted text-uppercase font-weight-bold\">Visitors</small>\n        <div class=\"progress progress-xs mt-3 mb-0\">\n          <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"h1 text-muted text-right mb-4\">\n          <i class=\"icon-user-follow\"></i>\n        </div>\n        <div class=\"h4 mb-0\">385</div>\n        <small class=\"text-muted text-uppercase font-weight-bold\">New Clients</small>\n        <div class=\"progress progress-xs mt-3 mb-0\">\n          <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"h1 text-muted text-right mb-4\">\n          <i class=\"icon-basket-loaded\"></i>\n        </div>\n        <div class=\"h4 mb-0\">1238</div>\n        <small class=\"text-muted text-uppercase font-weight-bold\">Products sold</small>\n        <div class=\"progress progress-xs mt-3 mb-0\">\n          <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"h1 text-muted text-right mb-4\">\n          <i class=\"icon-pie-chart\"></i>\n        </div>\n        <div class=\"h4 mb-0\">28%</div>\n        <small class=\"text-muted text-uppercase font-weight-bold\">Returning Visitors</small>\n        <div class=\"progress progress-xs mt-3 mb-0\">\n          <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"h1 text-muted text-right mb-4\">\n          <i class=\"icon-speedometer\"></i>\n        </div>\n        <div class=\"h4 mb-0\">5:34:11</div>\n        <small class=\"text-muted text-uppercase font-weight-bold\">Avg. Time</small>\n        <div class=\"progress progress-xs mt-3 mb-0\">\n          <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-people\"></i>\n          </div>\n          <div class=\"h4 mb-0\">87.500</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Visitors</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-user-follow\"></i>\n          </div>\n          <div class=\"h4 mb-0\">385</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">New Clients</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-basket-loaded\"></i>\n          </div>\n          <div class=\"h4 mb-0\">1238</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Products sold</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-pie-chart\"></i>\n          </div>\n          <div class=\"h4 mb-0\">28%</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Returning Visitors</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-speedometer\"></i>\n          </div>\n          <div class=\"h4 mb-0\">5:34:11</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Avg. Time</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-speech\"></i>\n          </div>\n          <div class=\"h4 mb-0\">972</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Comments</small>\n          <div class=\"progress progress-xs mt-3 mb-0\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-people\"></i>\n          </div>\n          <div class=\"h4 mb-0\">87.500</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Visitors</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-success\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-user-follow\"></i>\n          </div>\n          <div class=\"h4 mb-0\">385</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">New Clients</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-basket-loaded\"></i>\n          </div>\n          <div class=\"h4 mb-0\">1238</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Products sold</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-pie-chart\"></i>\n          </div>\n          <div class=\"h4 mb-0\">28%</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Returning Visitors</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-speedometer\"></i>\n          </div>\n          <div class=\"h4 mb-0\">5:34:11</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Avg. Time</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-2\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body\">\n          <div class=\"h1 text-muted text-right mb-4\">\n            <i class=\"icon-speech\"></i>\n          </div>\n          <div class=\"h4 mb-0\">972</div>\n          <small class=\"text-muted text-uppercase font-weight-bold\">Comments</small>\n          <div class=\"progress progress-white progress-xs mt-3\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n"

/***/ }),

/***/ "./src/app/views/widgets/widgets.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/widgets/widgets.component.ts ***!
  \****************************************************/
/*! exports provided: WidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function() { return WidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/coreui-pro/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui-pro/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WidgetsComponent = /** @class */ (function () {
    function WidgetsComponent() {
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: Object(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--primary'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: Object(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--info'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
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
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A'
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        // lineChart4
        this.lineChart4Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.lineChart4Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.lineChart4Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        points: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false
            }
        };
        this.lineChart4Colours = [
            {
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                borderWidth: 2
            }
        ];
        this.lineChart4Legend = false;
        this.lineChart4Type = 'line';
        // barChart2
        this.barChart2Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.barChart2Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.barChart2Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart2Colours = [
            {
                backgroundColor: 'rgba(0,0,0,.2)',
                borderWidth: 0
            }
        ];
        this.barChart2Legend = false;
        this.barChart2Type = 'bar';
        // barChart3
        this.barChart3Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.barChart3Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.barChart3Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart3Primary = [
            {
                backgroundColor: Object(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--primary'),
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Danger = [
            {
                backgroundColor: Object(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--danger'),
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Success = [
            {
                backgroundColor: Object(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--success'),
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Legend = false;
        this.barChart3Type = 'bar';
        // lineChart5
        this.lineChart5Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart5Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart5Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_2__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        points: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false
            }
        };
        this.lineChart5Info = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--info'),
                borderWidth: 2
            }
        ];
        this.lineChart5Success = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--info'),
                borderWidth: 2
            }
        ];
        this.lineChart5Warning = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('--warning'),
                borderWidth: 2
            }
        ];
        this.lineChart5Legend = false;
        this.lineChart5Type = 'line';
    }
    WidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./widgets.component.html */ "./src/app/views/widgets/widgets.component.html")
        })
    ], WidgetsComponent);
    return WidgetsComponent;
}());



/***/ }),

/***/ "./src/app/views/widgets/widgets.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/widgets/widgets.module.ts ***!
  \*************************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets.component */ "./src/app/views/widgets/widgets.component.ts");
/* harmony import */ var _widgets_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets-routing.module */ "./src/app/views/widgets/widgets-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _widgets_routing_module__WEBPACK_IMPORTED_MODULE_4__["WidgetsRoutingModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"]
            ],
            declarations: [_widgets_component__WEBPACK_IMPORTED_MODULE_3__["WidgetsComponent"]]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-widgets-widgets-module.js.map