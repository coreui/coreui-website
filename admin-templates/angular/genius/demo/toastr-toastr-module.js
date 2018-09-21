(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toastr-toastr-module"],{

/***/ "./node_modules/angular2-toaster/angular2-toaster.js":
/*!***********************************************************!*\
  !*** ./node_modules/angular2-toaster/angular2-toaster.js ***!
  \***********************************************************/
/*! exports provided: ToastComponent, ToasterContainerComponent, ToasterService, ToasterConfig, BodyOutputType, ToasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/toast.component */ "./node_modules/angular2-toaster/src/toast.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return _src_toast_component__WEBPACK_IMPORTED_MODULE_0__["ToastComponent"]; });

/* harmony import */ var _src_toaster_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToasterContainerComponent", function() { return _src_toaster_container_component__WEBPACK_IMPORTED_MODULE_1__["ToasterContainerComponent"]; });

/* harmony import */ var _src_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return _src_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]; });

/* harmony import */ var _src_toaster_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/toaster-config */ "./node_modules/angular2-toaster/src/toaster-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToasterConfig", function() { return _src_toaster_config__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]; });

/* harmony import */ var _src_bodyOutputType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/bodyOutputType */ "./node_modules/angular2-toaster/src/bodyOutputType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BodyOutputType", function() { return _src_bodyOutputType__WEBPACK_IMPORTED_MODULE_4__["BodyOutputType"]; });

/* harmony import */ var _src_toaster_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/toaster.module */ "./node_modules/angular2-toaster/src/toaster.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToasterModule", function() { return _src_toaster_module__WEBPACK_IMPORTED_MODULE_5__["ToasterModule"]; });







//# sourceMappingURL=angular2-toaster.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/bodyOutputType.js":
/*!*************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/bodyOutputType.js ***!
  \*************************************************************/
/*! exports provided: BodyOutputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyOutputType", function() { return BodyOutputType; });
var BodyOutputType;
(function (BodyOutputType) {
    BodyOutputType[BodyOutputType["Default"] = 0] = "Default";
    BodyOutputType[BodyOutputType["TrustedHtml"] = 1] = "TrustedHtml";
    BodyOutputType[BodyOutputType["Component"] = 2] = "Component";
})(BodyOutputType || (BodyOutputType = {}));
//# sourceMappingURL=bodyOutputType.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/toast.component.js":
/*!**************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/toast.component.js ***!
  \**************************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _bodyOutputType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bodyOutputType */ "./node_modules/angular2-toaster/src/bodyOutputType.js");



var ToastComponent = /** @class */ (function () {
    function ToastComponent(sanitizer, componentFactoryResolver, changeDetectorRef) {
        this.sanitizer = sanitizer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.bodyOutputType = _bodyOutputType__WEBPACK_IMPORTED_MODULE_2__["BodyOutputType"];
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ToastComponent.prototype.ngOnInit = function () {
        if (this.toast.closeHtml) {
            this.safeCloseHtml = this.sanitizer.bypassSecurityTrustHtml(this.toast.closeHtml);
        }
        if (this.toast.bodyOutputType === _bodyOutputType__WEBPACK_IMPORTED_MODULE_2__["BodyOutputType"].TrustedHtml) {
            this.safeBodyHtml = this.sanitizer.bypassSecurityTrustHtml(this.toast.body);
        }
    };
    ToastComponent.prototype.ngAfterViewInit = function () {
        if (this.toast.bodyOutputType === this.bodyOutputType.Component) {
            var component = this.componentFactoryResolver.resolveComponentFactory(this.toast.body);
            var componentInstance = this.componentBody.createComponent(component, undefined, this.componentBody.injector);
            componentInstance.instance.toast = this.toast;
            this.changeDetectorRef.detectChanges();
        }
    };
    ToastComponent.prototype.click = function (event, toast) {
        event.stopPropagation();
        this.clickEvent.emit({
            value: { toast: toast, isCloseButton: true }
        });
    };
    ToastComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: '[toastComp]',
                    template: "\n        <i class=\"toaster-icon\" [ngClass]=\"iconClass\"></i>\n        <div class=\"toast-content\">\n            <div [ngClass]=\"titleClass\">{{toast.title}}</div>\n            <div [ngClass]=\"messageClass\" [ngSwitch]=\"toast.bodyOutputType\">\n                <div *ngSwitchCase=\"bodyOutputType.Component\" #componentBody></div>\n                <div *ngSwitchCase=\"bodyOutputType.TrustedHtml\" [innerHTML]=\"safeBodyHtml\"></div>\n                <div *ngSwitchCase=\"bodyOutputType.Default\">{{toast.body}}</div>\n            </div>\n        </div>\n        <div class=\"toast-close-button\" *ngIf=\"toast.showCloseButton\" (click)=\"click($event, toast)\"\n            [innerHTML]=\"safeCloseHtml\">\n        </div>"
                },] },
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    ToastComponent.propDecorators = {
        "toast": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "iconClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "titleClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "messageClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "componentBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['componentBody', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] },],
        "clickEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ToastComponent;
}());

//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster-config.js":
/*!*************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/toaster-config.js ***!
  \*************************************************************/
/*! exports provided: ToasterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterConfig", function() { return ToasterConfig; });
/* harmony import */ var _bodyOutputType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bodyOutputType */ "./node_modules/angular2-toaster/src/bodyOutputType.js");

var ToasterConfig = /** @class */ (function () {
    function ToasterConfig(configOverrides) {
        configOverrides = configOverrides || {};
        this.limit = configOverrides.limit || null;
        this.tapToDismiss = configOverrides.tapToDismiss != null ? configOverrides.tapToDismiss : true;
        this.showCloseButton = configOverrides.showCloseButton != null ? configOverrides.showCloseButton : false;
        this.closeHtml = configOverrides.closeHtml || '<button class="toast-close-button" type="button">&times;</button>';
        this.newestOnTop = configOverrides.newestOnTop != null ? configOverrides.newestOnTop : true;
        this.timeout = configOverrides.timeout != null ? configOverrides.timeout : 5000;
        this.typeClasses = configOverrides.typeClasses || {
            error: 'toast-error',
            info: 'toast-info',
            wait: 'toast-wait',
            success: 'toast-success',
            warning: 'toast-warning'
        };
        this.iconClasses = configOverrides.iconClasses || {
            error: 'icon-error',
            info: 'icon-info',
            wait: 'icon-wait',
            success: 'icon-success',
            warning: 'icon-warning'
        };
        this.bodyOutputType = configOverrides.bodyOutputType || _bodyOutputType__WEBPACK_IMPORTED_MODULE_0__["BodyOutputType"].Default;
        this.bodyTemplate = configOverrides.bodyTemplate || 'toasterBodyTmpl.html';
        this.defaultTypeClass = configOverrides.defaultTypeClass || 'toast-info';
        this.positionClass = configOverrides.positionClass || 'toast-top-right';
        this.titleClass = configOverrides.titleClass || 'toast-title';
        this.messageClass = configOverrides.messageClass || 'toast-message';
        this.animation = configOverrides.animation || '';
        this.preventDuplicates = configOverrides.preventDuplicates != null ? configOverrides.preventDuplicates : false;
        this.mouseoverTimerStop = configOverrides.mouseoverTimerStop != null ? configOverrides.mouseoverTimerStop : false;
        this.toastContainerId = configOverrides.toastContainerId != null ? configOverrides.toastContainerId : null;
    }
    return ToasterConfig;
}());

//# sourceMappingURL=toaster-config.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster-container.component.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/toaster-container.component.js ***!
  \**************************************************************************/
/*! exports provided: ToasterContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterContainerComponent", function() { return ToasterContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _toaster_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toaster-config */ "./node_modules/angular2-toaster/src/toaster-config.js");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");




var ToasterContainerComponent = /** @class */ (function () {
    function ToasterContainerComponent(toasterService, ref, ngZone) {
        this.ref = ref;
        this.ngZone = ngZone;
        this.timeoutIds = new Map();
        this.toasts = [];
        this.toasterService = toasterService;
    }
    ToasterContainerComponent.prototype.ngOnInit = function () {
        this.registerSubscribers();
        if (this.isNullOrUndefined(this.toasterconfig)) {
            this.toasterconfig = new _toaster_config__WEBPACK_IMPORTED_MODULE_2__["ToasterConfig"]();
        }
    };
    // event handlers
    // event handlers
    ToasterContainerComponent.prototype.click = 
    // event handlers
    function (toast, isCloseButton) {
        if (this.toasterconfig.tapToDismiss || (toast.showCloseButton && isCloseButton)) {
            var removeToast = true;
            if (toast.clickHandler) {
                if (typeof toast.clickHandler === 'function') {
                    removeToast = toast.clickHandler(toast, isCloseButton);
                }
                else {
                    console.log('The toast click handler is not a callable function.');
                    return false;
                }
            }
            if (removeToast) {
                this.removeToast(toast);
            }
        }
    };
    ToasterContainerComponent.prototype.childClick = function ($event) {
        this.click($event.value.toast, $event.value.isCloseButton);
    };
    ToasterContainerComponent.prototype.stopTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            var toastId = this.toastIdOrDefault(toast);
            var timeoutId = this.timeoutIds.get(toastId);
            if (timeoutId) {
                window.clearTimeout(timeoutId);
                this.timeoutIds.delete(toastId);
            }
        }
    };
    ToasterContainerComponent.prototype.restartTimer = function (toast) {
        var timeoutId = this.timeoutIds.get(this.toastIdOrDefault(toast));
        if (this.toasterconfig.mouseoverTimerStop) {
            if (!timeoutId) {
                this.configureTimer(toast);
            }
        }
        else if (toast.timeout !== 0 && !timeoutId && this.toasterconfig.timeout) {
            this.removeToast(toast);
        }
    };
    // private functions
    // private functions
    ToasterContainerComponent.prototype.registerSubscribers = 
    // private functions
    function () {
        var _this = this;
        this.addToastSubscriber = this.toasterService.addToast.subscribe(function (toast) {
            _this.addToast(toast);
        });
        this.clearToastsSubscriber = this.toasterService.clearToasts.subscribe(function (clearWrapper) {
            _this.clearToasts(clearWrapper);
        });
    };
    ToasterContainerComponent.prototype.addToast = function (toast) {
        if (toast.toastContainerId && this.toasterconfig.toastContainerId
            && toast.toastContainerId !== this.toasterconfig.toastContainerId) {
            return;
        }
        ;
        if (!toast.type) {
            toast.type = this.toasterconfig.defaultTypeClass;
        }
        if (this.toasterconfig.preventDuplicates && this.toasts.length > 0) {
            if (toast.toastId && this.toasts.some(function (t) { return t.toastId === toast.toastId; })) {
                return;
            }
            else if (this.toasts.some(function (t) { return t.body === toast.body; })) {
                return;
            }
        }
        if (this.isNullOrUndefined(toast.showCloseButton)) {
            if (typeof this.toasterconfig.showCloseButton === 'object') {
                toast.showCloseButton = this.toasterconfig.showCloseButton[toast.type];
            }
            else if (typeof this.toasterconfig.showCloseButton === 'boolean') {
                toast.showCloseButton = this.toasterconfig.showCloseButton;
            }
        }
        if (toast.showCloseButton) {
            toast.closeHtml = toast.closeHtml || this.toasterconfig.closeHtml;
        }
        toast.bodyOutputType = toast.bodyOutputType || this.toasterconfig.bodyOutputType;
        this.configureTimer(toast);
        if (this.toasterconfig.newestOnTop) {
            this.toasts.unshift(toast);
            if (this.isLimitExceeded()) {
                this.toasts.pop();
            }
        }
        else {
            this.toasts.push(toast);
            if (this.isLimitExceeded()) {
                this.toasts.shift();
            }
        }
        if (toast.onShowCallback) {
            toast.onShowCallback(toast);
        }
    };
    ToasterContainerComponent.prototype.configureTimer = function (toast) {
        var _this = this;
        var timeout = (typeof toast.timeout === 'number')
            ? toast.timeout : this.toasterconfig.timeout;
        if (typeof timeout === 'object') {
            timeout = timeout[toast.type];
        }
        ;
        if (timeout > 0) {
            this.ngZone.runOutsideAngular(function () {
                var timeoutId = window.setTimeout(function () {
                    _this.ngZone.run(function () {
                        _this.ref.markForCheck();
                        _this.removeToast(toast);
                    });
                }, timeout);
                _this.timeoutIds.set(_this.toastIdOrDefault(toast), timeoutId);
            });
        }
    };
    ToasterContainerComponent.prototype.isLimitExceeded = function () {
        return this.toasterconfig.limit && this.toasts.length > this.toasterconfig.limit;
    };
    ToasterContainerComponent.prototype.removeToast = function (toast) {
        var index = this.toasts.indexOf(toast);
        if (index < 0) {
            return;
        }
        ;
        var toastId = this.toastIdOrDefault(toast);
        var timeoutId = this.timeoutIds.get(toastId);
        this.toasts.splice(index, 1);
        if (timeoutId) {
            window.clearTimeout(timeoutId);
            this.timeoutIds.delete(toastId);
        }
        if (toast.onHideCallback) {
            toast.onHideCallback(toast);
        }
        this.toasterService._removeToastSubject.next({ toastId: toastId, toastContainerId: toast.toastContainerId });
    };
    ToasterContainerComponent.prototype.removeAllToasts = function () {
        for (var i = this.toasts.length - 1; i >= 0; i--) {
            this.removeToast(this.toasts[i]);
        }
    };
    ToasterContainerComponent.prototype.clearToasts = function (clearWrapper) {
        var toastId = clearWrapper.toastId;
        var toastContainerId = clearWrapper.toastContainerId;
        if (this.isNullOrUndefined(toastContainerId)) {
            this.clearToastsAction(toastId);
        }
        else if (toastContainerId === this.toasterconfig.toastContainerId) {
            this.clearToastsAction(toastId);
        }
    };
    ToasterContainerComponent.prototype.clearToastsAction = function (toastId) {
        if (toastId) {
            this.removeToast(this.toasts.filter(function (t) { return t.toastId === toastId; })[0]);
        }
        else {
            this.removeAllToasts();
        }
    };
    ToasterContainerComponent.prototype.toastIdOrDefault = function (toast) {
        return toast.toastId || '';
    };
    ToasterContainerComponent.prototype.isNullOrUndefined = function (value) {
        return value === null || typeof value === 'undefined';
    };
    ToasterContainerComponent.prototype.ngOnDestroy = function () {
        if (this.addToastSubscriber) {
            this.addToastSubscriber.unsubscribe();
        }
        if (this.clearToastsSubscriber) {
            this.clearToastsSubscriber.unsubscribe();
        }
    };
    ToasterContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'toaster-container',
                    template: "\n        <div id=\"toast-container\" [ngClass]=\"[toasterconfig.positionClass]\">\n            <div toastComp *ngFor=\"let toast of toasts\" class=\"toast\" [toast]=\"toast\"\n                [@toastState]=\"toasterconfig.animation\"\n                [iconClass]=\"toasterconfig.iconClasses[toast.type]\"\n                [titleClass]=\"toasterconfig.titleClass\"\n                [messageClass]=\"toasterconfig.messageClass\"\n                [ngClass]=\"toasterconfig.typeClasses[toast.type]\"\n                (click)=\"click(toast)\" (clickEvent)=\"childClick($event)\"\n                (mouseover)=\"stopTimer(toast)\" (mouseout)=\"restartTimer(toast)\">\n            </div>\n        </div>\n        ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toastState', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('flyRight, flyLeft, slideDown, slideUp, fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translate(0,0)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => flyRight', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0, transform: 'translateX(100%)'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.25s ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('flyRight => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.25s 10ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0, transform: 'translateX(100%)'
                                }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => flyLeft', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0, transform: 'translateX(-100%)'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.25s ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('flyLeft => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.25s 10ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0, transform: 'translateX(-100%)'
                                }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => slideDown', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0, transform: 'translateY(-200%)'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('slideDown => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s 10ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0, transform: 'translateY(200%)'
                                }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => slideUp', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0, transform: 'translateY(200%)'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('slideUp => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s 10ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0, transform: 'translateY(-200%)'
                                }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => fade', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0,
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('fade => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s 10ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0,
                                }))
                            ])
                        ]),
                    ]
                },] },
    ];
    /** @nocollapse */
    ToasterContainerComponent.ctorParameters = function () { return [
        { type: _toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    ToasterContainerComponent.propDecorators = {
        "toasterconfig": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ToasterContainerComponent;
}());

//# sourceMappingURL=toaster-container.component.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster.module.js":
/*!*************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/toaster.module.js ***!
  \*************************************************************/
/*! exports provided: ToasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterModule", function() { return ToasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.component */ "./node_modules/angular2-toaster/src/toast.component.js");
/* harmony import */ var _toaster_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toaster-container.component */ "./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toaster.service */ "./node_modules/angular2-toaster/src/toaster.service.js");





var ToasterModule = /** @class */ (function () {
    function ToasterModule() {
    }
    ToasterModule.forRoot = function () {
        return {
            ngModule: ToasterModule,
            providers: [_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], _toaster_container_component__WEBPACK_IMPORTED_MODULE_3__["ToasterContainerComponent"]]
        };
    };
    ToasterModule.forChild = function () {
        return {
            ngModule: ToasterModule,
            providers: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_3__["ToasterContainerComponent"]]
        };
    };
    ToasterModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        _toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"],
                        _toaster_container_component__WEBPACK_IMPORTED_MODULE_3__["ToasterContainerComponent"]
                    ],
                    exports: [
                        _toaster_container_component__WEBPACK_IMPORTED_MODULE_3__["ToasterContainerComponent"],
                        _toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"]
                    ]
                },] },
    ];
    return ToasterModule;
}());

//# sourceMappingURL=toaster.module.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster.service.js":
/*!**************************************************************!*\
  !*** ./node_modules/angular2-toaster/src/toaster.service.js ***!
  \**************************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



// http://stackoverflow.com/questions/26501688/a-typescript-guid-class
var 
// http://stackoverflow.com/questions/26501688/a-typescript-guid-class
Guid = /** @class */ (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
var ToasterService = /** @class */ (function () {
    /**
     * Creates an instance of ToasterService.
     */
    function ToasterService() {
        var _this = this;
        this.addToast = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) { return _this._addToast = observer; }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.clearToasts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) { return _this._clearToasts = observer; }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this._removeToastSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.removeToast = this._removeToastSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
    /**
     * Synchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Toast}
     *          The newly created Toast instance with a randomly generated GUID Id.
     */
    /**
         * Synchronously create and show a new toast instance.
         *
         * @param {(string | Toast)} type The type of the toast, or a Toast object.
         * @param {string=} title The toast title.
         * @param {string=} body The toast body.
         * @returns {Toast}
         *          The newly created Toast instance with a randomly generated GUID Id.
         */
    ToasterService.prototype.pop = /**
         * Synchronously create and show a new toast instance.
         *
         * @param {(string | Toast)} type The type of the toast, or a Toast object.
         * @param {string=} title The toast title.
         * @param {string=} body The toast body.
         * @returns {Toast}
         *          The newly created Toast instance with a randomly generated GUID Id.
         */
    function (type, title, body) {
        var toast = typeof type === 'string' ? { type: type, title: title, body: body } : type;
        if (!toast.toastId) {
            toast.toastId = Guid.newGuid();
        }
        if (!this._addToast) {
            throw new Error('No Toaster Containers have been initialized to receive toasts.');
        }
        this._addToast.next(toast);
        return toast;
    };
    /**
     * Asynchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Observable<Toast>}
     *          A hot Observable that can be subscribed to in order to receive the Toast instance
     *          with a randomly generated GUID Id.
     */
    /**
         * Asynchronously create and show a new toast instance.
         *
         * @param {(string | Toast)} type The type of the toast, or a Toast object.
         * @param {string=} title The toast title.
         * @param {string=} body The toast body.
         * @returns {Observable<Toast>}
         *          A hot Observable that can be subscribed to in order to receive the Toast instance
         *          with a randomly generated GUID Id.
         */
    ToasterService.prototype.popAsync = /**
         * Asynchronously create and show a new toast instance.
         *
         * @param {(string | Toast)} type The type of the toast, or a Toast object.
         * @param {string=} title The toast title.
         * @param {string=} body The toast body.
         * @returns {Observable<Toast>}
         *          A hot Observable that can be subscribed to in order to receive the Toast instance
         *          with a randomly generated GUID Id.
         */
    function (type, title, body) {
        var _this = this;
        setTimeout(function () {
            _this.pop(type, title, body);
        }, 0);
        return this.addToast;
    };
    /**
     * Clears a toast by toastId and/or toastContainerId.
     *
     * @param {string} toastId The toastId to clear.
     * @param {number=} toastContainerId
     *        The toastContainerId of the container to remove toasts from.
     */
    /**
         * Clears a toast by toastId and/or toastContainerId.
         *
         * @param {string} toastId The toastId to clear.
         * @param {number=} toastContainerId
         *        The toastContainerId of the container to remove toasts from.
         */
    ToasterService.prototype.clear = /**
         * Clears a toast by toastId and/or toastContainerId.
         *
         * @param {string} toastId The toastId to clear.
         * @param {number=} toastContainerId
         *        The toastContainerId of the container to remove toasts from.
         */
    function (toastId, toastContainerId) {
        var clearWrapper = {
            toastId: toastId, toastContainerId: toastContainerId
        };
        this._clearToasts.next(clearWrapper);
    };
    ToasterService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ToasterService.ctorParameters = function () { return []; };
    return ToasterService;
}());

//# sourceMappingURL=toaster.service.js.map

/***/ }),

/***/ "./src/app/views/notifications/toastr/toastr-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/notifications/toastr/toastr-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ToastrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrRoutingModule", function() { return ToastrRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toastr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastr.component */ "./src/app/views/notifications/toastr/toastr.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _toastr_component__WEBPACK_IMPORTED_MODULE_2__["ToastrComponent"],
        data: {
            title: 'Toastr'
        }
    }
];
var ToastrRoutingModule = /** @class */ (function () {
    function ToastrRoutingModule() {
    }
    ToastrRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ToastrRoutingModule);
    return ToastrRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/notifications/toastr/toastr.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/notifications/toastr/toastr.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Notifications\n      <a href=\"https://coreui.io/pro/angular/\" class=\"badge badge-danger ml-2\">CoreUI Pro Component</a>\n    </div>\n    <div class=\"card-body\">\n      <button class=\"btn btn-success\" (click)=\"showSuccess()\">Try Success</button>\n      <button class=\"btn btn-danger\" (click)=\"showError()\">Try Error</button>\n      <button class=\"btn btn-warning\" (click)=\"showWarning()\">Try Warning</button>\n      <button class=\"btn btn-info\" (click)=\"showInfo()\">Try Info</button>\n      <button class=\"btn btn-primary\" (click)=\"showPrimary()\">Try Primary</button>\n    </div>\n  </div>\n</div>\n<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\n"

/***/ }),

/***/ "./src/app/views/notifications/toastr/toastr.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/notifications/toastr/toastr.component.ts ***!
  \****************************************************************/
/*! exports provided: ToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrComponent", function() { return ToastrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastrComponent = /** @class */ (function () {
    function ToastrComponent(toasterService) {
        this.toasterconfig = new angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterConfig"]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.toasterService = toasterService;
    }
    ToastrComponent.prototype.showSuccess = function () {
        this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showError = function () {
        this.toasterService.pop('error', 'Error Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showWarning = function () {
        this.toasterService.pop('warning', 'Warning Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showInfo = function () {
        this.toasterService.pop('info', 'Info Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showPrimary = function () {
        this.toasterService.pop('primary', 'Primary Toaster', 'This is toaster description');
    };
    ToastrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./toastr.component.html */ "./src/app/views/notifications/toastr/toastr.component.html"),
            styles: [__webpack_require__(/*! ../../../../scss/vendors/toastr/toastr.scss */ "./src/scss/vendors/toastr/toastr.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]]
        }),
        __metadata("design:paramtypes", [angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]])
    ], ToastrComponent);
    return ToastrComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/toastr/toastr.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/notifications/toastr/toastr.module.ts ***!
  \*************************************************************/
/*! exports provided: ToastrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return ToastrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _toastr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastr.component */ "./src/app/views/notifications/toastr/toastr.component.ts");
/* harmony import */ var _toastr_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toastr-routing.module */ "./src/app/views/notifications/toastr/toastr-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Toastr


// Routing

var ToastrModule = /** @class */ (function () {
    function ToastrModule() {
    }
    ToastrModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _toastr_routing_module__WEBPACK_IMPORTED_MODULE_4__["ToastrRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterModule"],
            ],
            declarations: [
                _toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastrComponent"]
            ]
        })
    ], ToastrModule);
    return ToastrModule;
}());



/***/ }),

/***/ "./src/scss/vendors/toastr/toastr.scss":
/*!*********************************************!*\
  !*** ./src/scss/vendors/toastr/toastr.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toast-title {\n  font-weight: bold; }\n\n.toast-message {\n  -ms-word-wrap: break-word;\n  word-wrap: break-word; }\n\n.toast-message a,\n.toast-message label {\n  color: #ffffff; }\n\n.toast-message a:hover {\n  color: #cccccc;\n  text-decoration: none; }\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #ffffff;\n  -webkit-text-shadow: 0 1px 0 #ffffff;\n  text-shadow: 0 1px 0 #ffffff;\n  opacity: 0.8;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n  filter: alpha(opacity=80); }\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\n  filter: alpha(opacity=40); }\n\n/*Additional properties for button version\niOS requires the button element instead of an anchor tag.\nIf you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-top-left {\n  top: 12px;\n  left: 12px; }\n\n.toast-top-right {\n  top: 12px;\n  right: 12px; }\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px; }\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px; }\n\n#toast-container {\n  position: fixed;\n  z-index: 999999;\n  /*overrides*/ }\n\n#toast-container * {\n  box-sizing: border-box; }\n\n#toast-container .toast {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  color: #ffffff;\n  opacity: 0.9;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=90);\n  filter: alpha(opacity=90); }\n\n#toast-container .toast:hover {\n  opacity: 1;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  filter: alpha(opacity=100);\n  cursor: pointer; }\n\n#toast-container .toast {\n  background-image: none !important; }\n\n#toast-container .toast:before {\n  position: relative;\n  font-family: simple-line-icons;\n  font-size: 24px;\n  line-height: 18px;\n  float: left;\n  margin: 13px 0 0 -35px; }\n\n#toast-container .toast-warning:before {\n  content: \"\\e01c\"; }\n\n#toast-container .toast-error:before {\n  content: \"\\e082\"; }\n\n#toast-container .toast-info:before {\n  content: \"\\e08b\"; }\n\n#toast-container .toast-success:before {\n  content: \"\\e080\"; }\n\n#toast-container.toast-top-center > div,\n#toast-container.toast-bottom-center > div {\n  width: 300px;\n  margin: auto; }\n\n#toast-container.toast-top-full-width > div,\n#toast-container.toast-bottom-full-width > div {\n  width: 96%;\n  margin: auto; }\n\n.toast {\n  background-color: #36a9e1; }\n\n.toast-success {\n  background-color: #bdea74; }\n\n.toast-error {\n  background-color: #ff5454; }\n\n.toast-info {\n  background-color: #63c2de; }\n\n.toast-warning {\n  background-color: #ffc107; }\n\nprogress-bar,\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: .2;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=20);\n  filter: alpha(opacity=20); }\n\n/*Animations*/\n\ndiv[toast],\n.toast {\n  opacity: 1 !important; }\n\ndiv[toast].ng-enter,\n.toast.ng-enter {\n  opacity: 0 !important;\n  transition: opacity .3s linear; }\n\ndiv[toast].ng-enter.ng-enter-active,\n.toast.ng-enter.ng-enter-active {\n  opacity: 1 !important; }\n\ndiv[toast].ng-leave,\n.toast.ng-leave {\n  opacity: 1;\n  transition: opacity .3s linear; }\n\ndiv[toast].ng-leave.ng-leave-active,\n.toast.ng-leave.ng-leave-active {\n  opacity: 0 !important; }\n\n/*Responsive Design*/\n\n@media all and (max-width: 240px) {\n  #toast-container > div {\n    padding: 8px 8px 8px 50px;\n    width: 11em; }\n  #toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em; } }\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  #toast-container > div {\n    padding: 8px 8px 8px 50px;\n    width: 18em; }\n  #toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em; } }\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  #toast-container > div {\n    padding: 15px 15px 15px 50px;\n    width: 25em; } }\n\n.toaster-icon.icon-info {\n  display: none; }\n"

/***/ })

}]);
//# sourceMappingURL=toastr-toastr-module.js.map