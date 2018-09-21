(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-theme-theme-module"],{

/***/ "./node_modules/@coreui/coreui-pro/dist/js/coreui-utilities.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@coreui/coreui-pro/dist/js/coreui-utilities.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * CoreUI Pro v2.0.7 (https://coreui.io/pro/)
  * Copyright 2018 Łukasz Holeczek
  */
(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.0.7): get-style.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var getCssCustomProperties = function getCssCustomProperties() {
    var cssCustomProperties = {};
    var sheets = document.styleSheets;
    var cssText = '';

    for (var i = sheets.length - 1; i > -1; i--) {
      var rules = sheets[i].cssRules;

      for (var j = rules.length - 1; j > -1; j--) {
        if (rules[j].selectorText === '.ie-custom-properties') {
          cssText = rules[j].cssText;
          break;
        }
      }

      if (cssText) {
        break;
      }
    }

    cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
    cssText.split(';').forEach(function (property) {
      if (property) {
        var name = property.split(': ')[0];
        var value = property.split(': ')[1];

        if (name && value) {
          cssCustomProperties["--" + name.trim()] = value.trim();
        }
      }
    });
    return cssCustomProperties;
  };

  var minIEVersion = 10;

  var isIE1x = function isIE1x() {
    return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
  };

  var isCustomProperty = function isCustomProperty(property) {
    return property.match(/^--.*/i);
  };

  var getStyle = function getStyle(property, element) {
    if (element === void 0) {
      element = document.body;
    }

    var style;

    if (isCustomProperty(property) && isIE1x()) {
      var cssCustomProperties = getCssCustomProperties();
      style = cssCustomProperties[property];
    } else {
      style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
    }

    return style;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.0.7): hex-to-rgb.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgb = function hexToRgb(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.0.7): hex-to-rgba.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgba = function hexToRgba(color, opacity) {
    if (opacity === void 0) {
      opacity = 100;
    }

    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.0.7): rgb-to-hex.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var rgbToHex = function rgbToHex(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    if (!rgb) {
      throw new Error(color + " is not a valid rgb color");
    }

    var r = "0" + parseInt(rgb[1], 10).toString(16);
    var g = "0" + parseInt(rgb[2], 10).toString(16);
    var b = "0" + parseInt(rgb[3], 10).toString(16);
    return "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
  };

  exports.getStyle = getStyle;
  exports.hexToRgb = hexToRgb;
  exports.hexToRgba = hexToRgba;
  exports.rgbToHex = rgbToHex;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=coreui-utilities.js.map


/***/ }),

/***/ "./src/app/views/theme/colors.component.html":
/*!***************************************************!*\
  !*** ./src/app/views/theme/colors.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"icon-drop\"></i> Theme colors\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-primary theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Brand Primary Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-secondary theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Brand Secondary Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-success theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Brand Success Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-danger theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Brand Danger Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-warning theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Brand Warning Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-info theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Brand Info Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-light theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Brand Light Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-dark theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Brand Dark Color</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"icon-drop\"></i> Grays\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row mb-3\">\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-gray-100 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Gray 100 Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-gray-200 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Gray 200 Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-gray-300 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Gray 300 Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-gray-400 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Gray 400 Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-gray-500 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Gray 500 Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-gray-600 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Gray 600 Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-gray-700 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Gray 700 Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-gray-800 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Gray 800 Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-gray-900 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Gray 900 Color</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"icon-drop\"></i> Additional colors\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"mb-3 bg-blue theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Blue Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-light-blue theme-color mb-3 w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Light Blue Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-indigo theme-color mb-3 w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Indigo Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-purple theme-color mb-3 w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Purple Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-pink theme-color mb-3 w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Pink Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-red theme-color mb-3 w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Red Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-orange theme-color mb-3 w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Orange Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-yellow theme-color mb-3 w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Yellow Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-green theme-color mb-3 w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Green Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-teal theme-color mb-3 w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Teal Color</h6>\n        </div>\n        <div class=\"col-xl-2 col-md-3 col-sm-4 col-6 mb-4\">\n          <div class=\"bg-cyan theme-color mb-3 w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\n          <h6>Cyan Color</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/theme/colors.component.ts":
/*!*************************************************!*\
  !*** ./src/app/views/theme/colors.component.ts ***!
  \*************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/coreui-pro/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui-pro/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ColorsComponent = /** @class */ (function () {
    function ColorsComponent() {
    }
    ColorsComponent.prototype.themeColors = function () {
        Array.from(document.querySelectorAll('.theme-color')).forEach(function (el) {
            var elem = document.getElementsByClassName(el.classList[0])[0];
            var background = Object(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('background-color', elem);
            var table = document.createElement('table');
            table.innerHTML = "\n        <table class=\"w-100\">\n          <tr>\n            <td class=\"text-muted\">HEX:</td>\n            <td class=\"font-weight-bold\">" + Object(_coreui_coreui_pro_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_1__["rgbToHex"])(background) + "</td>\n          </tr>\n          <tr>\n            <td class=\"text-muted\">RGB:</td>\n            <td class=\"font-weight-bold\">" + background + "</td>\n          </tr>\n        </table>\n      ";
            el.parentNode.appendChild(table);
        });
    };
    ColorsComponent.prototype.ngOnInit = function () {
        this.themeColors();
    };
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/views/theme/colors.component.html")
        })
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/theme-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/theme/theme-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ThemeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeRoutingModule", function() { return ThemeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors.component */ "./src/app/views/theme/colors.component.ts");
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography.component */ "./src/app/views/theme/typography.component.ts");
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
            title: 'Theme'
        },
        children: [
            {
                path: 'colors',
                component: _colors_component__WEBPACK_IMPORTED_MODULE_2__["ColorsComponent"],
                data: {
                    title: 'Colors'
                }
            },
            {
                path: 'typography',
                component: _typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"],
                data: {
                    title: 'Typography'
                }
            }
        ]
    }
];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/theme/theme.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/theme/theme.module.ts ***!
  \*********************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors.component */ "./src/app/views/theme/colors.component.ts");
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography.component */ "./src/app/views/theme/typography.component.ts");
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-routing.module */ "./src/app/views/theme/theme-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular




// Theme Routing

var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _theme_routing_module__WEBPACK_IMPORTED_MODULE_4__["ThemeRoutingModule"]
            ],
            declarations: [
                _colors_component__WEBPACK_IMPORTED_MODULE_2__["ColorsComponent"],
                _typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"]
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());



/***/ }),

/***/ "./src/app/views/theme/typography.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/theme/typography.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Headings\n    </div>\n    <div class=\"card-body\">\n      <p>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Heading</th>\n            <th>Example</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <p><code class=\"highlighter-rouge\">&lt;h1&gt;&lt;/h1&gt;</code></p>\n            </td>\n            <td><span class=\"h1\">h1. Bootstrap heading</span></td>\n          </tr>\n          <tr>\n            <td>\n              <p><code class=\"highlighter-rouge\">&lt;h2&gt;&lt;/h2&gt;</code></p>\n            </td>\n            <td><span class=\"h2\">h2. Bootstrap heading</span></td>\n          </tr>\n          <tr>\n            <td>\n              <p><code class=\"highlighter-rouge\">&lt;h3&gt;&lt;/h3&gt;</code></p>\n            </td>\n            <td><span class=\"h3\">h3. Bootstrap heading</span></td>\n          </tr>\n          <tr>\n            <td>\n              <p><code class=\"highlighter-rouge\">&lt;h4&gt;&lt;/h4&gt;</code></p>\n            </td>\n            <td><span class=\"h4\">h4. Bootstrap heading</span></td>\n          </tr>\n          <tr>\n            <td>\n              <p><code class=\"highlighter-rouge\">&lt;h5&gt;&lt;/h5&gt;</code></p>\n            </td>\n            <td><span class=\"h5\">h5. Bootstrap heading</span></td>\n          </tr>\n          <tr>\n            <td>\n              <p><code class=\"highlighter-rouge\">&lt;h6&gt;&lt;/h6&gt;</code></p>\n            </td>\n            <td><span class=\"h6\">h6. Bootstrap heading</span></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Headings\n    </div>\n    <div class=\"card-body\">\n      <p><code class=\"highlighter-rouge\">.h1</code> through <code class=\"highlighter-rouge\">.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>\n      <div class=\"bd-example\">\n        <p class=\"h1\">h1. Bootstrap heading</p>\n        <p class=\"h2\">h2. Bootstrap heading</p>\n        <p class=\"h3\">h3. Bootstrap heading</p>\n        <p class=\"h4\">h4. Bootstrap heading</p>\n        <p class=\"h5\">h5. Bootstrap heading</p>\n        <p class=\"h6\">h6. Bootstrap heading</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Display headings\n    </div>\n    <div class=\"card-body\">\n      <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>\n      <div class=\"bd-example bd-example-type\">\n        <table class=\"table\">\n          <tbody>\n            <tr>\n              <td><span class=\"display-1\">Display 1</span></td>\n            </tr>\n            <tr>\n              <td><span class=\"display-2\">Display 2</span></td>\n            </tr>\n            <tr>\n              <td><span class=\"display-3\">Display 3</span></td>\n            </tr>\n            <tr>\n              <td><span class=\"display-4\">Display 4</span></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Inline text elements\n    </div>\n    <div class=\"card-body\">\n      <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>\n      <div class=\"bd-example\">\n        <p>You can use the mark tag to <mark>highlight</mark> text.</p>\n        <p><del>This line of text is meant to be treated as deleted text.</del></p>\n        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\n        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\n        <p><u>This line of text will render as underlined</u></p>\n        <p><small>This line of text is meant to be treated as fine print.</small></p>\n        <p><strong>This line rendered as bold text.</strong></p>\n        <p><em>This line rendered as italicized text.</em></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Description list alignment\n    </div>\n    <div class=\"card-body\">\n      <p>Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a <code class=\"highlighter-rouge\">.text-truncate</code> class to truncate the text with an ellipsis.</p>\n      <div class=\"bd-example\">\n        <dl class=\"row\">\n          <dt class=\"col-sm-3\">Description lists</dt>\n          <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\n\n          <dt class=\"col-sm-3\">Euismod</dt>\n          <dd class=\"col-sm-9\">\n            <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>\n            <p>Donec id elit non mi porta gravida at eget metus.</p>\n          </dd>\n\n          <dt class=\"col-sm-3\">Malesuada porta</dt>\n          <dd class=\"col-sm-9\">Etiam porta sem malesuada magna mollis euismod.</dd>\n\n          <dt class=\"col-sm-3 text-truncate\">Truncated term is truncated</dt>\n          <dd class=\"col-sm-9\">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\n\n          <dt class=\"col-sm-3\">Nesting</dt>\n          <dd class=\"col-sm-9\">\n            <dl class=\"row\">\n              <dt class=\"col-sm-4\">Nested definition list</dt>\n              <dd class=\"col-sm-8\">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>\n            </dl>\n          </dd>\n        </dl>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/theme/typography.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/theme/typography.component.ts ***!
  \*****************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/views/theme/typography.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-theme-theme-module.js.map