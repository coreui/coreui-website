(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.coreui = global.coreui || {}, global.coreui.Utils = {})));
})(this, (function (exports) { 'use strict';

    /**
     * --------------------------------------------------------------------------
     * CoreUI (v2.0.0-alpha.2): deep-objects-merge.ts
     * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var deepObjectsMerge = function (target, source) {
        // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
        for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
            var key = _a[_i];
            if (source[key] instanceof Object) {
                Object.assign(source[key], deepObjectsMerge(target[key], source[key]));
            }
        }
        // Join `target` and modified `source`
        Object.assign(target || {}, source);
        return target;
    };

    /**
     * --------------------------------------------------------------------------
     * CoreUI (v2.0.0-alpha.2): get-style.ts
     * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var getStyle = function (property, element) {
        if (element === void 0) { element = document.body; }
        return window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
    };

    /**
     * --------------------------------------------------------------------------
     * CoreUI (v2.0.0-alpha.2): get-color.ts
     * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var getColor = function (rawProperty, element) {
        if (element === void 0) { element = document.body; }
        var property = "--".concat(rawProperty);
        var style = getStyle(property, element);
        return style ? style : rawProperty;
    };

    /**
     * --------------------------------------------------------------------------
     * CoreUI (v2.0.0-alpha.2): hex-to-rgb.ts
     * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    /* eslint-disable no-magic-numbers */
    var hexToRgb = function (color) {
        if (typeof color === 'undefined') {
            throw new TypeError('Hex color is not defined');
        }
        color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);
        var r;
        var g;
        var b;
        if (color.length === 7) {
            r = parseInt(color.slice(1, 3), 16);
            g = parseInt(color.slice(3, 5), 16);
            b = parseInt(color.slice(5, 7), 16);
        }
        else {
            r = parseInt(color.slice(1, 2), 16);
            g = parseInt(color.slice(2, 3), 16);
            b = parseInt(color.slice(3, 5), 16);
        }
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    };

    /**
     * --------------------------------------------------------------------------
     * CoreUI (v2.0.0-alpha.2): hex-to-rgba.ts
     * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    /* eslint-disable no-magic-numbers */
    var hexToRgba = function (color, opacity) {
        if (opacity === void 0) { opacity = 100; }
        if (typeof color === 'undefined') {
            throw new TypeError('Hex color is not defined');
        }
        var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);
        if (!hex) {
            throw new Error("".concat(color, " is not a valid hex color"));
        }
        var r;
        var g;
        var b;
        if (color.length === 7) {
            r = parseInt(color.slice(1, 3), 16);
            g = parseInt(color.slice(3, 5), 16);
            b = parseInt(color.slice(5, 7), 16);
        }
        else {
            r = parseInt(color.slice(1, 2), 16);
            g = parseInt(color.slice(2, 3), 16);
            b = parseInt(color.slice(3, 5), 16);
        }
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity / 100, ")");
    };

    /**
     * --------------------------------------------------------------------------
     * CoreUI (v2.0.0-alpha.2): make-uid.ts
     * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    //function for UI releted ID assignment, due to one in 10^15 probability of duplication
    var makeUid = function () {
        var key = Math.random().toString(36).substr(2);
        return 'uid-' + key;
    };

    /**
     * --------------------------------------------------------------------------
     * CoreUI (v2.0.0-alpha.2): omit-by-keys.ts
     * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var omitByKeys = function (originalObject, keys) {
        var newObj = {};
        var objKeys = Object.keys(originalObject);
        for (var i = 0; i < objKeys.length; i++) {
            !keys.includes(objKeys[i]) && (newObj[objKeys[i]] = originalObject[objKeys[i]]);
        }
        return newObj;
    };

    /**
     * --------------------------------------------------------------------------
     * CoreUI (v2.0.0-alpha.2): pick-by-keys.ts
     * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var pickByKeys = function (originalObject, keys) {
        var newObj = {};
        for (var i = 0; i < keys.length; i++) {
            newObj[keys[i]] = originalObject[keys[i]];
        }
        return newObj;
    };

    /**
     * --------------------------------------------------------------------------
     * CoreUI (v2.0.0-alpha.2): rgb-to-hex.ts
     * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    var rgbToHex = function (color) {
        if (typeof color === 'undefined') {
            throw new TypeError('Hex color is not defined');
        }
        if (color === 'transparent') {
            return '#00000000';
        }
        var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        if (!rgb) {
            throw new Error("".concat(color, " is not a valid rgb color"));
        }
        var r = "0".concat(parseInt(rgb[1], 10).toString(16));
        var g = "0".concat(parseInt(rgb[2], 10).toString(16));
        var b = "0".concat(parseInt(rgb[3], 10).toString(16));
        return "#".concat(r.slice(-2)).concat(g.slice(-2)).concat(b.slice(-2));
    };

    exports.deepObjectsMerge = deepObjectsMerge;
    exports.getColor = getColor;
    exports.getStyle = getStyle;
    exports.hexToRgb = hexToRgb;
    exports.hexToRgba = hexToRgba;
    exports.makeUid = makeUid;
    exports.omitByKeys = omitByKeys;
    exports.pickByKeys = pickByKeys;
    exports.rgbToHex = rgbToHex;

}));
//# sourceMappingURL=index.js.map
