(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loading-buttons-loading-buttons-module"],{

/***/ "./node_modules/angular2-ladda/module/ladda-config.js":
/*!************************************************************!*\
  !*** ./node_modules/angular2-ladda/module/ladda-config.js ***!
  \************************************************************/
/*! exports provided: LaddaConfigArgs, configAttributes, LaddaConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaConfigArgs", function() { return LaddaConfigArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configAttributes", function() { return configAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaConfig", function() { return LaddaConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LaddaConfigArgs = /** @class */ (function () {
    function LaddaConfigArgs() {
    }
    return LaddaConfigArgs;
}());

var configAttributes = {
    "data-style": "style",
    "data-spinner-size": "spinnerSize",
    "data-spinner-color": "spinnerColor",
    "data-spinner-lines": "spinnerLines",
};
var LaddaConfig = /** @class */ (function () {
    function LaddaConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, config);
    }
    LaddaConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LaddaConfig.ctorParameters = function () { return [
        { type: LaddaConfigArgs, },
    ]; };
    return LaddaConfig;
}());

//# sourceMappingURL=ladda-config.js.map

/***/ }),

/***/ "./node_modules/angular2-ladda/module/ladda.directive.js":
/*!***************************************************************!*\
  !*** ./node_modules/angular2-ladda/module/ladda.directive.js ***!
  \***************************************************************/
/*! exports provided: LaddaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaDirective", function() { return LaddaDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ladda_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ladda-config */ "./node_modules/angular2-ladda/module/ladda-config.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");



var LaddaDirective = /** @class */ (function () {
    function LaddaDirective(el, config) {
        this.el = el.nativeElement;
        if (!config) {
            return;
        }
        // apply default styles if they aren't overwritten by an attribute
        for (var attribute in _ladda_config__WEBPACK_IMPORTED_MODULE_1__["configAttributes"]) {
            var configValue = config[_ladda_config__WEBPACK_IMPORTED_MODULE_1__["configAttributes"][attribute]];
            if (!configValue) {
                continue; // don't waste time reading the attribute
            }
            if (!this.el.getAttribute(attribute)) {
                // attribute isn't set - apply the default config value
                var value = (typeof configValue === "number") ? configValue.toString() : configValue;
                this.el.setAttribute(attribute, value);
            }
        }
    }
    LaddaDirective.prototype.ngOnChanges = function (changes) {
        if (!this._ladda) {
            return; // needed since ngOnChanges is called before ngOnInit
        }
        if (changes['loading']) {
            this.updateLadda(changes['loading'].previousValue);
        }
        if (changes['disabled']) {
            this.updateDisabled();
        }
    };
    LaddaDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._ladda = Object(ladda__WEBPACK_IMPORTED_MODULE_2__["create"])(this.el);
        // if the initial loading value isn't false, a timeout of 0 ms
        // is necessary for the calculated spinner size to be correct.
        setTimeout(function () { _this.updateLadda(false); }, 0);
    };
    LaddaDirective.prototype.ngOnDestroy = function () {
        if (this._ladda) {
            this._ladda.remove();
        }
    };
    LaddaDirective.prototype.updateLadda = function (previousValue) {
        var loading = typeof this.loading === 'number' || !!this.loading;
        var wasLoading = typeof previousValue === 'number' || !!previousValue;
        if (!loading) {
            if (wasLoading) {
                this._ladda.stop();
            }
            return this.updateDisabled();
        }
        if (!wasLoading) {
            this._ladda.start();
        }
        if (typeof this.loading === 'number') {
            this._ladda.setProgress(this.loading);
        }
    };
    LaddaDirective.prototype.updateDisabled = function () {
        this.el.disabled = this.disabled;
    };
    LaddaDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ladda]'
                },] },
    ];
    /** @nocollapse */
    LaddaDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _ladda_config__WEBPACK_IMPORTED_MODULE_1__["LaddaConfigArgs"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_ladda_config__WEBPACK_IMPORTED_MODULE_1__["LaddaConfig"],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    LaddaDirective.propDecorators = {
        "loading": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ladda',] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] },],
    };
    return LaddaDirective;
}());

//# sourceMappingURL=ladda.directive.js.map

/***/ }),

/***/ "./node_modules/angular2-ladda/module/module.js":
/*!******************************************************!*\
  !*** ./node_modules/angular2-ladda/module/module.js ***!
  \******************************************************/
/*! exports provided: LaddaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaModule", function() { return LaddaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ladda_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ladda.directive */ "./node_modules/angular2-ladda/module/ladda.directive.js");
/* harmony import */ var _ladda_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ladda-config */ "./node_modules/angular2-ladda/module/ladda-config.js");



var LaddaModule = /** @class */ (function () {
    function LaddaModule() {
    }
    LaddaModule.forRoot = function (config) {
        return {
            ngModule: LaddaModule,
            providers: [
                { provide: _ladda_config__WEBPACK_IMPORTED_MODULE_2__["LaddaConfig"], useValue: config }
            ]
        };
    };
    LaddaModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_ladda_directive__WEBPACK_IMPORTED_MODULE_1__["LaddaDirective"]],
                    exports: [_ladda_directive__WEBPACK_IMPORTED_MODULE_1__["LaddaDirective"]],
                },] },
    ];
    return LaddaModule;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/ladda/dist/ladda-themeless.min.css":
/*!*********************************************************!*\
  !*** ./node_modules/ladda/dist/ladda-themeless.min.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Ladda\r\n * http://lab.hakim.se/ladda\r\n * MIT licensed\r\n *\r\n * Copyright (C) 2018 Hakim El Hattab, http://hakim.se\r\n */@-webkit-keyframes ladda-spinner-line-fade{0%,100%{opacity:0.22}1%{opacity:1}}@keyframes ladda-spinner-line-fade{0%,100%{opacity:0.22}1%{opacity:1}}.ladda-button{position:relative}.ladda-button .ladda-spinner{position:absolute;z-index:2;display:inline-block;width:32px;top:50%;margin-top:0;opacity:0;pointer-events:none}.ladda-button .ladda-label{position:relative;z-index:3}.ladda-button .ladda-progress{position:absolute;width:0;height:100%;left:0;top:0;background:rgba(0,0,0,0.2);display:none;transition:0.1s linear all !important}.ladda-button[data-loading] .ladda-progress{display:block}.ladda-button,.ladda-button .ladda-spinner,.ladda-button .ladda-label{transition:0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important}.ladda-button[data-style=zoom-in],.ladda-button[data-style=zoom-in] .ladda-spinner,.ladda-button[data-style=zoom-in] .ladda-label,.ladda-button[data-style=zoom-out],.ladda-button[data-style=zoom-out] .ladda-spinner,.ladda-button[data-style=zoom-out] .ladda-label{transition:0.3s ease all !important}.ladda-button[data-style=expand-right] .ladda-spinner{right:-6px}.ladda-button[data-style=expand-right][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-right][data-size=\"xs\"] .ladda-spinner{right:-12px}.ladda-button[data-style=expand-right][data-loading]{padding-right:56px}.ladda-button[data-style=expand-right][data-loading] .ladda-spinner{opacity:1}.ladda-button[data-style=expand-right][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-right][data-loading][data-size=\"xs\"]{padding-right:40px}.ladda-button[data-style=expand-left] .ladda-spinner{left:26px}.ladda-button[data-style=expand-left][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-left][data-size=\"xs\"] .ladda-spinner{left:4px}.ladda-button[data-style=expand-left][data-loading]{padding-left:56px}.ladda-button[data-style=expand-left][data-loading] .ladda-spinner{opacity:1}.ladda-button[data-style=expand-left][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-left][data-loading][data-size=\"xs\"]{padding-left:40px}.ladda-button[data-style=expand-up]{overflow:hidden}.ladda-button[data-style=expand-up] .ladda-spinner{top:-32px;left:50%;margin-left:0}.ladda-button[data-style=expand-up][data-loading]{padding-top:54px}.ladda-button[data-style=expand-up][data-loading] .ladda-spinner{opacity:1;top:26px;margin-top:0}.ladda-button[data-style=expand-up][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-up][data-loading][data-size=\"xs\"]{padding-top:32px}.ladda-button[data-style=expand-up][data-loading][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-up][data-loading][data-size=\"xs\"] .ladda-spinner{top:4px}.ladda-button[data-style=expand-down]{overflow:hidden}.ladda-button[data-style=expand-down] .ladda-spinner{top:62px;left:50%;margin-left:0}.ladda-button[data-style=expand-down][data-size=\"s\"] .ladda-spinner,.ladda-button[data-style=expand-down][data-size=\"xs\"] .ladda-spinner{top:40px}.ladda-button[data-style=expand-down][data-loading]{padding-bottom:54px}.ladda-button[data-style=expand-down][data-loading] .ladda-spinner{opacity:1}.ladda-button[data-style=expand-down][data-loading][data-size=\"s\"],.ladda-button[data-style=expand-down][data-loading][data-size=\"xs\"]{padding-bottom:32px}.ladda-button[data-style=slide-left]{overflow:hidden}.ladda-button[data-style=slide-left] .ladda-label{position:relative}.ladda-button[data-style=slide-left] .ladda-spinner{left:100%;margin-left:0}.ladda-button[data-style=slide-left][data-loading] .ladda-label{opacity:0;left:-100%}.ladda-button[data-style=slide-left][data-loading] .ladda-spinner{opacity:1;left:50%}.ladda-button[data-style=slide-right]{overflow:hidden}.ladda-button[data-style=slide-right] .ladda-label{position:relative}.ladda-button[data-style=slide-right] .ladda-spinner{right:100%;margin-left:0;left:16px}[dir=\"rtl\"] .ladda-button[data-style=slide-right] .ladda-spinner{right:auto}.ladda-button[data-style=slide-right][data-loading] .ladda-label{opacity:0;left:100%}.ladda-button[data-style=slide-right][data-loading] .ladda-spinner{opacity:1;left:50%}.ladda-button[data-style=slide-up]{overflow:hidden}.ladda-button[data-style=slide-up] .ladda-label{position:relative}.ladda-button[data-style=slide-up] .ladda-spinner{left:50%;margin-left:0;margin-top:1em}.ladda-button[data-style=slide-up][data-loading] .ladda-label{opacity:0;top:-1em}.ladda-button[data-style=slide-up][data-loading] .ladda-spinner{opacity:1;margin-top:0}.ladda-button[data-style=slide-down]{overflow:hidden}.ladda-button[data-style=slide-down] .ladda-label{position:relative}.ladda-button[data-style=slide-down] .ladda-spinner{left:50%;margin-left:0;margin-top:-2em}.ladda-button[data-style=slide-down][data-loading] .ladda-label{opacity:0;top:1em}.ladda-button[data-style=slide-down][data-loading] .ladda-spinner{opacity:1;margin-top:0}.ladda-button[data-style=zoom-out]{overflow:hidden}.ladda-button[data-style=zoom-out] .ladda-spinner{left:50%;margin-left:32px;-webkit-transform:scale(2.5);transform:scale(2.5)}.ladda-button[data-style=zoom-out] .ladda-label{position:relative;display:inline-block}.ladda-button[data-style=zoom-out][data-loading] .ladda-label{opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}.ladda-button[data-style=zoom-out][data-loading] .ladda-spinner{opacity:1;margin-left:0;-webkit-transform:none;transform:none}.ladda-button[data-style=zoom-in]{overflow:hidden}.ladda-button[data-style=zoom-in] .ladda-spinner{left:50%;margin-left:-16px;-webkit-transform:scale(0.2);transform:scale(0.2)}.ladda-button[data-style=zoom-in] .ladda-label{position:relative;display:inline-block}.ladda-button[data-style=zoom-in][data-loading] .ladda-label{opacity:0;-webkit-transform:scale(2.2);transform:scale(2.2)}.ladda-button[data-style=zoom-in][data-loading] .ladda-spinner{opacity:1;margin-left:0;-webkit-transform:none;transform:none}.ladda-button[data-style=contract]{overflow:hidden;width:100px}.ladda-button[data-style=contract] .ladda-spinner{left:50%;margin-left:0}.ladda-button[data-style=contract][data-loading]{border-radius:50%;width:52px}.ladda-button[data-style=contract][data-loading] .ladda-label{opacity:0}.ladda-button[data-style=contract][data-loading] .ladda-spinner{opacity:1}.ladda-button[data-style=contract-overlay]{overflow:hidden;width:100px;box-shadow:0px 0px 0px 2000px rgba(0,0,0,0)}.ladda-button[data-style=contract-overlay] .ladda-spinner{left:50%;margin-left:0}.ladda-button[data-style=contract-overlay][data-loading]{border-radius:50%;width:52px;box-shadow:0px 0px 0px 2000px rgba(0,0,0,0.8)}.ladda-button[data-style=contract-overlay][data-loading] .ladda-label{opacity:0}.ladda-button[data-style=contract-overlay][data-loading] .ladda-spinner{opacity:1}[dir=\"rtl\"] .ladda-spinner>div{left:25% !important}\n"

/***/ }),

/***/ "./node_modules/ladda/js/ladda.js":
/*!****************************************!*\
  !*** ./node_modules/ladda/js/ladda.js ***!
  \****************************************/
/*! exports provided: create, bind, stopAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAll", function() { return stopAll; });
/* harmony import */ var spin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spin.js */ "./node_modules/spin.js/spin.js");
/*!
 * Ladda
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2018 Hakim El Hattab, http://hakim.se
 */

 

// All currently instantiated instances of Ladda
var ALL_INSTANCES = [];

/**
 * Creates a new instance of Ladda which wraps the
 * target button element.
 *
 * @return An API object that can be used to control
 * the loading animation state.
 */
function create( button ) {

	if( typeof button === 'undefined' ) {
		console.warn( "Ladda button target must be defined." );
		return;
	}

	// The button must have the class "ladda-button"
	if ( !button.classList.contains('ladda-button') ) {
		button.classList.add( 'ladda-button' );
	}

	// Style is required, default to "expand-right"
	if( !button.hasAttribute( 'data-style' ) ) {
		button.setAttribute( 'data-style', 'expand-right' );
	}

	// The text contents must be wrapped in a ladda-label
	// element, create one if it doesn't already exist
	if( !button.querySelector( '.ladda-label' ) ) {
		var laddaLabel = document.createElement( 'span' );
		laddaLabel.className = 'ladda-label';
		wrapContent( button, laddaLabel );
	}

	// The spinner component
	var spinner,
		spinnerWrapper = button.querySelector( '.ladda-spinner' );

	// Wrapper element for the spinner
	if( !spinnerWrapper ) {
		spinnerWrapper = document.createElement( 'span' );
		spinnerWrapper.className = 'ladda-spinner';
	}

	button.appendChild( spinnerWrapper );

	// Timer used to delay starting/stopping
	var timer;

	var instance = {

		/**
		 * Enter the loading state.
		 */
		start: function() {

			// Create the spinner if it doesn't already exist
			if( !spinner ) {
				spinner = createSpinner( button );
			}

			button.disabled = true;
			button.setAttribute( 'data-loading', '' );

			clearTimeout( timer );
			spinner.spin( spinnerWrapper );

			this.setProgress( 0 );

			return this; // chain

		},

		/**
		 * Enter the loading state, after a delay.
		 */
		startAfter: function( delay ) {

			clearTimeout( timer );
			timer = setTimeout( function() { instance.start(); }, delay );

			return this; // chain

		},

		/**
		 * Exit the loading state.
		 */
		stop: function() {

			if (instance.isLoading()) {
				button.disabled = false;
				button.removeAttribute( 'data-loading' );	
			}

			// Kill the animation after a delay to make sure it
			// runs for the duration of the button transition
			clearTimeout( timer );

			if( spinner ) {
				timer = setTimeout( function() { spinner.stop(); }, 1000 );
			}

			return this; // chain

		},

		/**
		 * Toggle the loading state on/off.
		 */
		toggle: function() {
			return this.isLoading() ? this.stop() : this.start();
		},

		/**
		 * Sets the width of the visual progress bar inside of
		 * this Ladda button
		 *
		 * @param {Number} progress in the range of 0-1
		 */
		setProgress: function( progress ) {

			// Cap it
			progress = Math.max( Math.min( progress, 1 ), 0 );

			var progressElement = button.querySelector( '.ladda-progress' );

			// Remove the progress bar if we're at 0 progress
			if( progress === 0 && progressElement && progressElement.parentNode ) {
				progressElement.parentNode.removeChild( progressElement );
			}
			else {
				if( !progressElement ) {
					progressElement = document.createElement( 'div' );
					progressElement.className = 'ladda-progress';
					button.appendChild( progressElement );
				}

				progressElement.style.width = ( ( progress || 0 ) * button.offsetWidth ) + 'px';
			}

		},

		isLoading: function() {

			return button.hasAttribute( 'data-loading' );

		},

		remove: function() {

			clearTimeout( timer );

			button.disabled = false;
			button.removeAttribute( 'data-loading' );

			if( spinner ) {
				spinner.stop();
				spinner = null;
			}

			ALL_INSTANCES.splice( ALL_INSTANCES.indexOf(instance), 1 );

		}

	};

	ALL_INSTANCES.push( instance );

	return instance;

}

/**
 * Binds the target buttons to automatically enter the
 * loading state when clicked.
 *
 * @param target Either an HTML element or a CSS selector.
 * @param options
 *          - timeout Number of milliseconds to wait before
 *            automatically cancelling the animation.
 *          - callback A function to be called with the Ladda
 *            instance when a target button is clicked.
 */
function bind( target, options ) {

	var targets;

	if( typeof target === 'string' ) {
		targets = document.querySelectorAll( target );
	}
	else if( typeof target === 'object' ) {
		targets = [ target ];
	} else {
		throw new Error('target must be string or object');
	}

	options = options || {};

	for( var i = 0; i < targets.length; i++ ) {
		bindElement(targets[i], options);
	}

}

/**
 * Stops ALL current loading animations.
 */
function stopAll() {

	for( var i = 0, len = ALL_INSTANCES.length; i < len; i++ ) {
		ALL_INSTANCES[i].stop();
	}

}

/**
* Get the first ancestor node from an element, having a
* certain type.
*
* @param elem An HTML element
* @param type an HTML tag type (uppercased)
*
* @return An HTML element
*/
function getAncestorOfTagType( elem, type ) {

	while ( elem.parentNode && elem.tagName !== type ) {
		elem = elem.parentNode;
	}

	return ( type === elem.tagName ) ? elem : undefined;

}

function createSpinner( button ) {

	var height = button.offsetHeight,
		spinnerColor,
		spinnerLines;

	if( height === 0 ) {
		// We may have an element that is not visible so
		// we attempt to get the height in a different way
		height = parseFloat( window.getComputedStyle( button ).height );
	}

	// If the button is tall we can afford some padding
	if( height > 32 ) {
		height *= 0.8;
	}

	// Prefer an explicit height if one is defined
	if( button.hasAttribute( 'data-spinner-size' ) ) {
		height = parseInt( button.getAttribute( 'data-spinner-size' ), 10 );
	}

	// Allow buttons to specify the color of the spinner element
	if( button.hasAttribute( 'data-spinner-color' ) ) {
		spinnerColor = button.getAttribute( 'data-spinner-color' );
	}

	// Allow buttons to specify the number of lines of the spinner
	if( button.hasAttribute( 'data-spinner-lines' ) ) {
		spinnerLines = parseInt( button.getAttribute( 'data-spinner-lines' ), 10 );
	}

	var radius = height * 0.2,
		length = radius * 0.6,
		width = radius < 7 ? 2 : 3;

	return new spin_js__WEBPACK_IMPORTED_MODULE_0__["Spinner"]( {
		color: spinnerColor || '#fff',
		lines: spinnerLines || 12,
		radius: radius,
		length: length,
		width: width,
		animation: 'ladda-spinner-line-fade',
		zIndex: 'auto',
		top: 'auto',
		left: 'auto',
		className: ''
	} );

}

function wrapContent( node, wrapper ) {

	var r = document.createRange();
	r.selectNodeContents( node );
	r.surroundContents( wrapper );
	node.appendChild( wrapper );

}

function bindElement( element, options ) {
	if( typeof element.addEventListener !== 'function' ) {
		return;
	}

	var instance = create( element );
	var timeout = -1;

	element.addEventListener( 'click', function() {

		// If the button belongs to a form, make sure all the
		// fields in that form are filled out
		var valid = true;
		var form = getAncestorOfTagType( element, 'FORM' );

		if( typeof form !== 'undefined' && !form.hasAttribute('novalidate') ) {
			// Modern form validation
			if( typeof form.checkValidity === 'function' ) {
				valid = form.checkValidity();
			}
		}

		if( valid ) {
			// This is asynchronous to avoid an issue where disabling
			// the button prevents forms from submitting
			instance.startAfter( 1 );

			// Set a loading timeout if one is specified
			if( typeof options.timeout === 'number' ) {
				clearTimeout( timeout );
				timeout = setTimeout( instance.stop, options.timeout );
			}

			// Invoke callbacks
			if( typeof options.callback === 'function' ) {
				options.callback.apply( null, [ instance ] );
			}
		}

	}, false );

}


/***/ }),

/***/ "./node_modules/spin.js/spin.js":
/*!**************************************!*\
  !*** ./node_modules/spin.js/spin.js ***!
  \**************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: '#000',
    fadeColor: 'transparent',
    animation: 'spinner-line-fade-default',
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute',
};
var Spinner = /** @class */ (function () {
    function Spinner(opts) {
        if (opts === void 0) { opts = {}; }
        this.opts = __assign({}, defaults, opts);
    }
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */
    Spinner.prototype.spin = function (target) {
        this.stop();
        this.el = document.createElement('div');
        this.el.className = this.opts.className;
        this.el.setAttribute('role', 'progressbar');
        css(this.el, {
            position: this.opts.position,
            width: 0,
            zIndex: this.opts.zIndex,
            left: this.opts.left,
            top: this.opts.top,
            transform: "scale(" + this.opts.scale + ")",
        });
        if (target) {
            target.insertBefore(this.el, target.firstChild || null);
        }
        drawLines(this.el, this.opts);
        return this;
    };
    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
    Spinner.prototype.stop = function () {
        if (this.el) {
            if (typeof requestAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.animateId);
            }
            else {
                clearTimeout(this.animateId);
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            this.el = undefined;
        }
        return this;
    };
    return Spinner;
}());

/**
 * Sets multiple style properties at once.
 */
function css(el, props) {
    for (var prop in props) {
        el.style[prop] = props[prop];
    }
    return el;
}
/**
 * Returns the line color from the given string or array.
 */
function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length];
}
/**
 * Internal method that draws the individual lines.
 */
function drawLines(el, opts) {
    var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
    var shadow = 'none';
    if (opts.shadow === true) {
        shadow = '0 2px 4px #000'; // default shadow
    }
    else if (typeof opts.shadow === 'string') {
        shadow = opts.shadow;
    }
    var shadows = parseBoxShadow(shadow);
    for (var i = 0; i < opts.lines; i++) {
        var degrees = ~~(360 / opts.lines * i + opts.rotate);
        var backgroundLine = css(document.createElement('div'), {
            position: 'absolute',
            top: -opts.width / 2 + "px",
            width: (opts.length + opts.width) + 'px',
            height: opts.width + 'px',
            background: getColor(opts.fadeColor, i),
            borderRadius: borderRadius,
            transformOrigin: 'left',
            transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)",
        });
        var delay = i * opts.direction / opts.lines / opts.speed;
        delay -= 1 / opts.speed; // so initial animation state will include trail
        var line = css(document.createElement('div'), {
            width: '100%',
            height: '100%',
            background: getColor(opts.color, i),
            borderRadius: borderRadius,
            boxShadow: normalizeShadow(shadows, degrees),
            animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation,
        });
        backgroundLine.appendChild(line);
        el.appendChild(backgroundLine);
    }
}
function parseBoxShadow(boxShadow) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
        var shadow = _a[_i];
        var matches = shadow.match(regex);
        if (matches === null) {
            continue; // invalid syntax
        }
        var x = +matches[2];
        var y = +matches[5];
        var xUnits = matches[4];
        var yUnits = matches[7];
        if (x === 0 && !xUnits) {
            xUnits = yUnits;
        }
        if (y === 0 && !yUnits) {
            yUnits = xUnits;
        }
        if (xUnits !== yUnits) {
            continue; // units must match to use as coordinates
        }
        shadows.push({
            prefix: matches[1] || '',
            x: x,
            y: y,
            xUnits: xUnits,
            yUnits: yUnits,
            end: matches[8],
        });
    }
    return shadows;
}
/**
 * Modify box-shadow x/y offsets to counteract rotation
 */
function normalizeShadow(shadows, degrees) {
    var normalized = [];
    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
        var shadow = shadows_1[_i];
        var xy = convertOffset(shadow.x, shadow.y, degrees);
        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
    }
    return normalized.join(', ');
}
function convertOffset(x, y, degrees) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [
        Math.round((x * cos + y * sin) * 1000) / 1000,
        Math.round((-x * sin + y * cos) * 1000) / 1000,
    ];
}


/***/ }),

/***/ "./src/app/views/buttons/loading-buttons/loading-buttons-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/buttons/loading-buttons/loading-buttons-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LoadingButtonsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingButtonsRoutingModule", function() { return LoadingButtonsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loading_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-buttons.component */ "./src/app/views/buttons/loading-buttons/loading-buttons.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _loading_buttons_component__WEBPACK_IMPORTED_MODULE_2__["LoadingButtonsComponent"],
        data: {
            title: 'Loading Buttons - Ladda'
        }
    }
];
var LoadingButtonsRoutingModule = /** @class */ (function () {
    function LoadingButtonsRoutingModule() {
    }
    LoadingButtonsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoadingButtonsRoutingModule);
    return LoadingButtonsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/buttons/loading-buttons/loading-buttons.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/buttons/loading-buttons/loading-buttons.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"icon-cursor\"></i> Loading buttons - Ladda\n      <a href=\"https://coreui.io/pro/angular/\" class=\"badge badge-danger ml-2\">CoreUI Pro Component</a>\n      <div class=\"card-header-actions\">\n        <a href=\"https://github.com/hakimel/Ladda\" class=\"card-header-action\"><small class=\"text-muted\">docs</small></a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <p>\n        A UI concept which merges loading indicators into the action that invoked them. Primarily intended for use with forms where\n        it gives users immediate feedback upon submit rather than leaving them wondering while the browser does its thing. For a\n        real-world example, check out any of the forms on <a href=\"http://slides.com\">slides.com</a>.\n      </p>\n\n      <div class=\"text-center\">\n        <button class=\"btn btn-primary\" (click)='toggleLoading()'>Toggle Ladda in button below</button>\n      </div>\n\n      <hr class=\"my-4\">\n\n      <div class=\"row text-center\">\n\n        <div class=\"col-md-3 py-4\">\n          <h6>expand-left</h6>\n          <button class=\"btn btn-success btn-ladda\" data-style=\"expand-left\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n        <div class=\"col-md-3 py-4\">\n          <h6>expand-right</h6>\n          <button class=\"btn btn-success btn-ladda\" data-style=\"expand-right\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n        <div class=\"col-md-3 py-4\">\n          <h6>expand-up</h6>\n          <button class=\"btn btn-success btn-ladda\" data-style=\"expand-up\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n        <div class=\"col-md-3 py-4\">\n          <h6>expand-down</h6>\n          <button class=\"btn btn-success btn-ladda\" data-style=\"expand-down\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n\n        <div class=\"col-md-3 py-4\">\n          <h6>contract</h6>\n          <button class=\"btn btn-danger btn-ladda\" data-style=\"contract\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n        <div class=\"col-md-3 py-4\">\n          <h6>contract-overlay</h6>\n          <button class=\"btn btn-danger btn-ladda\" data-style=\"contract-overlay\" style=\"z-index: 10;\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n        <div class=\"col-md-3 py-4\">\n          <h6>zoom-in</h6>\n          <button class=\"btn btn-danger btn-ladda\" data-style=\"zoom-in\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n        <div class=\"col-md-3 py-4\">\n          <h6>zoom-out</h6>\n          <button class=\"btn btn-danger btn-ladda\" data-style=\"zoom-out\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n\n        <div class=\"col-md-3 py-4\">\n          <h6>slide-left</h6>\n          <button class=\"btn btn-info btn-ladda\" data-style=\"slide-left\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n        <div class=\"col-md-3 py-4\">\n          <h6>slide-right</h6>\n          <button class=\"btn btn-info btn-ladda\" data-style=\"slide-right\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n        <div class=\"col-md-3 py-4\">\n          <h6>slide-up</h6>\n          <button class=\"btn btn-info btn-ladda\" data-style=\"slide-up\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n        <div class=\"col-md-3 py-4\">\n          <h6>slide-down</h6>\n          <button class=\"btn btn-info btn-ladda\" data-style=\"slide-down\" [ladda]='isLoading'>Submit</button>\n        </div>\n      </div>\n\n      <hr class=\"my-4\">\n\n      <h4 class=\"text-center\">Sizes</h4>\n      <div class=\"row text-center\">\n        <div class=\"col-md-4 py-4\">\n          <h6>Small</h6>\n          <button class=\"btn btn-sm btn-primary btn-ladda\" data-style=\"expand-right\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n        <div class=\"col-md-4 py-4\">\n          <h6>Normall</h6>\n          <button class=\"btn btn-primary btn-ladda\" data-style=\"expand-right\" [ladda]='isLoading'>Submit</button>\n        </div>\n\n        <div class=\"col-md-4 py-4\">\n          <h6>Large</h6>\n          <button class=\"btn btn-lg btn-primary btn-ladda\" data-style=\"expand-right\" [ladda]='isLoading'>Submit</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/buttons/loading-buttons/loading-buttons.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/buttons/loading-buttons/loading-buttons.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoadingButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingButtonsComponent", function() { return LoadingButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingButtonsComponent = /** @class */ (function () {
    function LoadingButtonsComponent() {
        // trigger-variable for Ladda
        this.isLoading = false;
    }
    LoadingButtonsComponent.prototype.toggleLoading = function () {
        this.isLoading = !this.isLoading;
    };
    LoadingButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./loading-buttons.component.html */ "./src/app/views/buttons/loading-buttons/loading-buttons.component.html"),
            styles: [__webpack_require__(/*! ../../../../../node_modules/ladda/dist/ladda-themeless.min.css */ "./node_modules/ladda/dist/ladda-themeless.min.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], LoadingButtonsComponent);
    return LoadingButtonsComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/loading-buttons/loading-buttons.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/buttons/loading-buttons/loading-buttons.module.ts ***!
  \*************************************************************************/
/*! exports provided: LoadingButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingButtonsModule", function() { return LoadingButtonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/module/module.js");
/* harmony import */ var _loading_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-buttons.component */ "./src/app/views/buttons/loading-buttons/loading-buttons.component.ts");
/* harmony import */ var _loading_buttons_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-buttons-routing.module */ "./src/app/views/buttons/loading-buttons/loading-buttons-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Loading Buttons


// Routing

var LoadingButtonsModule = /** @class */ (function () {
    function LoadingButtonsModule() {
    }
    LoadingButtonsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _loading_buttons_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoadingButtonsRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular2_ladda__WEBPACK_IMPORTED_MODULE_2__["LaddaModule"]
            ],
            declarations: [
                _loading_buttons_component__WEBPACK_IMPORTED_MODULE_3__["LoadingButtonsComponent"]
            ]
        })
    ], LoadingButtonsModule);
    return LoadingButtonsModule;
}());



/***/ })

}]);
//# sourceMappingURL=loading-buttons-loading-buttons-module.js.map