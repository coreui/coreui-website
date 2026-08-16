/*!
  * CoreUI v5.26.0 (https://coreui.io)
  * Copyright 2026 The CoreUI Team (https://github.com/orgs/coreui/people)
  * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) :
  typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.coreui = factory(global.Popper));
})(this, (function (Popper) { 'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const Popper__namespace = /*#__PURE__*/_interopNamespaceDefault(Popper);

  /**
   * --------------------------------------------------------------------------
   * CoreUI dom/data.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  const elementMap = new Map();
  const Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }
      const instanceMap = elementMap.get(element);

      // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);

      // free up element references if there are no instances left for an element
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI util/index.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';

  /**
   * Properly escape IDs selectors to handle weird IDs
   * @param {string} selector
   * @returns {string}
   */
  const parseSelector = selector => {
    if (selector && window.CSS && window.CSS.escape) {
      // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };

  // Shout-out Angus Croll (https://goo.gl/pxwQGp)
  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  /**
   * Public Util API
   */

  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }

    // Get transition-duration of the element
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = object => {
    if (!object || typeof object !== 'object') {
      return false;
    }
    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }
    return typeof object.nodeType !== 'undefined';
  };
  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest('details:not([open])');
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest('summary');
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains('disabled')) {
      return true;
    }
    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };
  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    }

    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }

    // when we don't find a shadow root
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  const noop = () => {};

  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */
  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };
  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-coreui-no-jquery')) {
      return window.jQuery;
    }
    return null;
  };
  const DOMContentLoadedCallbacks = [];
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  const isRTL = () => document.documentElement.dir === 'rtl';
  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === 'function' ? possibleCallback.call(...args) : defaultValue;
  };
  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };

  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */
  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);

    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI dom/event-handler.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage
  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'input', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string';
    // TODO: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.coreui.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }
  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');
      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI dom/manipulator.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === '' || value === 'null') {
      return null;
    }
    if (typeof value !== 'string') {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }
  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-coreui-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-coreui-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const coreuiKeys = Object.keys(element.dataset).filter(key => key.startsWith('coreui') && !key.startsWith('coreuiConfig'));
      for (const key of coreuiKeys) {
        let pureKey = key.replace(/^coreui/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-coreui-${normalizeDataKey(key)}`));
    }
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI util/config.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Class definition
   */

  class Config {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return {
        ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement(value) ? 'element' : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI base-component.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const VERSION = '5.26.0';

  /**
   * Class definition
   */

  class BaseComponent extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }

    // Private
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static
    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `coreui.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI dom/selector-engine.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const getSelector = element => {
    let selector = element.getAttribute('data-coreui-target');
    if (!selector || selector === '#') {
      let hrefAttribute = element.getAttribute('href');

      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      }

      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(',').map(sel => parseSelector(sel)).join(',') : null;
  };
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI util/component-functions.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-coreui-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);

      // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
      instance[method]();
    });
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI alert.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$x = 'alert';
  const DATA_KEY$s = 'coreui.alert';
  const EVENT_KEY$t = `.${DATA_KEY$s}`;
  const EVENT_CLOSE = `close${EVENT_KEY$t}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$t}`;
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$g = 'show';

  /**
   * Class definition
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$x;
    }

    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$g);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }

    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  enableDismissTrigger(Alert, 'close');

  /**
   * jQuery
   */

  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * CoreUI util/sanitizer.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  // js-docs-start allow-list
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  // js-docs-end allow-list

  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);

  /**
   * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
   * contexts.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
   */
  const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }

    // Check if a regular expression validates the attribute.
    return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO autocomplete.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$w = 'autocomplete';
  const DATA_KEY$r = 'coreui.autocomplete';
  const EVENT_KEY$s = `.${DATA_KEY$r}`;
  const DATA_API_KEY$n = '.data-api';
  const ARROW_UP_KEY$6 = 'ArrowUp';
  const ARROW_DOWN_KEY$6 = 'ArrowDown';
  const BACKSPACE_KEY$2 = 'Backspace';
  const DELETE_KEY$1 = 'Delete';
  const ENTER_KEY$4 = 'Enter';
  const ESCAPE_KEY$6 = 'Escape';
  const TAB_KEY$6 = 'Tab';
  const RIGHT_MOUSE_BUTTON$5 = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_BLUR$1 = `blur${EVENT_KEY$s}`;
  const EVENT_CHANGED$1 = `changed${EVENT_KEY$s}`;
  const EVENT_CLICK$6 = `click${EVENT_KEY$s}`;
  const EVENT_HIDE$c = `hide${EVENT_KEY$s}`;
  const EVENT_HIDDEN$c = `hidden${EVENT_KEY$s}`;
  const EVENT_INPUT$5 = `input${EVENT_KEY$s}`;
  const EVENT_KEYDOWN$9 = `keydown${EVENT_KEY$s}`;
  const EVENT_KEYUP$1 = `keyup${EVENT_KEY$s}`;
  const EVENT_SHOW$c = `show${EVENT_KEY$s}`;
  const EVENT_SHOWN$c = `shown${EVENT_KEY$s}`;
  const EVENT_CLICK_DATA_API$i = `click${EVENT_KEY$s}${DATA_API_KEY$n}`;
  const EVENT_KEYUP_DATA_API$6 = `keyup${EVENT_KEY$s}${DATA_API_KEY$n}`;
  const EVENT_LOAD_DATA_API$f = `load${EVENT_KEY$s}${DATA_API_KEY$n}`;
  const CLASS_NAME_AUTOCOMPLETE = 'autocomplete';
  const CLASS_NAME_BUTTONS$1 = 'autocomplete-buttons';
  const CLASS_NAME_CLEANER$3 = 'autocomplete-cleaner';
  const CLASS_NAME_DISABLED$8 = 'disabled';
  const CLASS_NAME_DROPDOWN$2 = 'autocomplete-dropdown';
  const CLASS_NAME_INDICATOR$2 = 'autocomplete-indicator';
  const CLASS_NAME_INPUT$2 = 'autocomplete-input';
  const CLASS_NAME_INPUT_HINT = 'autocomplete-input-hint';
  const CLASS_NAME_INPUT_GROUP$3 = 'autocomplete-input-group';
  const CLASS_NAME_LABEL$1 = 'label';
  const CLASS_NAME_OPTGROUP$1 = 'autocomplete-optgroup';
  const CLASS_NAME_OPTGROUP_LABEL$1 = 'autocomplete-optgroup-label';
  const CLASS_NAME_OPTION$1 = 'autocomplete-option';
  const CLASS_NAME_OPTIONS$1 = 'autocomplete-options';
  const CLASS_NAME_OPTIONS_EMPTY$1 = 'autocomplete-options-empty';
  const CLASS_NAME_SELECTED$2 = 'selected';
  const CLASS_NAME_SHOW$f = 'show';
  const SELECTOR_DATA_TOGGLE$i = '[data-coreui-toggle="autocomplete"]:not(.disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN$4 = `.autocomplete:not(.disabled).${CLASS_NAME_SHOW$f}`;
  const SELECTOR_INDICATOR = '.autocomplete-indicator';
  const SELECTOR_OPTGROUP$1 = '.autocomplete-optgroup';
  const SELECTOR_OPTION$1 = '.autocomplete-option';
  const SELECTOR_OPTIONS$1 = '.autocomplete-options';
  const SELECTOR_OPTIONS_EMPTY$1 = '.autocomplete-options-empty';
  const SELECTOR_VISIBLE_ITEMS$2 = '.autocomplete-options .autocomplete-option:not(.disabled):not(:disabled)';
  const Default$t = {
    allowList: DefaultAllowlist,
    allowOnlyDefinedOptions: false,
    ariaCleanerLabel: 'Clear selection',
    ariaIndicatorLabel: 'Toggle visibility of options menu',
    cleaner: false,
    clearSearchOnSelect: true,
    container: false,
    disabled: false,
    highlightOptionsOnSearch: false,
    id: null,
    indicator: false,
    invalid: false,
    name: null,
    options: false,
    optionsGroupsTemplate: null,
    optionsMaxHeight: 'auto',
    optionsTemplate: null,
    placeholder: null,
    required: false,
    sanitize: true,
    sanitizeFn: null,
    search: null,
    searchNoResultsLabel: false,
    showHints: false,
    valid: false,
    value: null
  };
  const DefaultType$t = {
    allowList: 'object',
    allowOnlyDefinedOptions: 'boolean',
    ariaCleanerLabel: 'string',
    ariaIndicatorLabel: 'string',
    cleaner: 'boolean',
    clearSearchOnSelect: 'boolean',
    container: '(string|element|boolean)',
    disabled: 'boolean',
    highlightOptionsOnSearch: 'boolean',
    id: '(string|null)',
    indicator: 'boolean',
    invalid: 'boolean',
    name: '(string|null)',
    options: '(array|null)',
    optionsGroupsTemplate: '(function|null)',
    optionsMaxHeight: '(number|string)',
    optionsTemplate: '(function|null)',
    placeholder: '(string|null)',
    required: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    search: '(array|string|null)',
    searchNoResultsLabel: 'boolean|string',
    showHints: 'boolean',
    valid: 'boolean',
    value: '(number|string|null)'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Autocomplete extends BaseComponent {
    constructor(element, config) {
      var _this$_config$id;
      super(element, config);
      this._uniqueId = (_this$_config$id = this._config.id) != null ? _this$_config$id : getUID(`${this.constructor.NAME}`);
      this._indicatorElement = null;
      this._inputElement = null;
      this._inputHintElement = null;
      this._togglerElement = null;
      this._optionsElement = null;
      this._menu = null;
      this._selected = [];
      this._options = this._getOptionsFromConfig();
      this._popper = null;
      this._search = '';
      this._createAutocomplete();
      this._addEventListeners();
      Data.set(this._element, DATA_KEY$r, this);
    }

    // Getters

    static get Default() {
      return Default$t;
    }
    static get DefaultType() {
      return DefaultType$t;
    }
    static get NAME() {
      return NAME$w;
    }

    // Public

    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._config.disabled || this._isShown()) {
        return;
      }
      if (!this._config.searchNoResultsLabel && this._flattenOptions().filter(option => option.label.toLowerCase().includes(this._search.toLowerCase())).length === 0) {
        return;
      }
      EventHandler.trigger(this._element, EVENT_SHOW$c);
      this._element.classList.add(CLASS_NAME_SHOW$f);
      this._inputElement.setAttribute('aria-expanded', 'true');
      if (this._config.container) {
        this._menu.style.minWidth = `${this._element.offsetWidth}px`;
        this._menu.classList.add(CLASS_NAME_SHOW$f);
      }
      EventHandler.trigger(this._element, EVENT_SHOWN$c);
      this._createPopper();
    }
    hide() {
      EventHandler.trigger(this._element, EVENT_HIDE$c);
      if (this._popper) {
        this._popper.destroy();
      }
      this._element.classList.remove(CLASS_NAME_SHOW$f);
      this._inputElement.setAttribute('aria-expanded', 'false');
      if (this._config.container) {
        this._menu.classList.remove(CLASS_NAME_SHOW$f);
      }
      if (this._inputHintElement) {
        this._inputHintElement.value = '';
      }
      EventHandler.trigger(this._element, EVENT_HIDDEN$c);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    clear() {
      this.deselectAll();
      this.search('');
      this._filterOptionsList();
      this._inputElement.value = '';
      this._triggerChangeEvent(null);
    }
    search(label) {
      this._search = label.length > 0 ? label.toLowerCase() : '';
      if (!this._isExternalSearch()) {
        this._filterOptionsList();
      }
      EventHandler.trigger(this._element, EVENT_INPUT$5, {
        value: label
      });
    }
    update(config) {
      if (config.value) {
        this.deselectAll();
      }
      this._config = {
        ...this._config,
        ...this._configAfterMerge(config)
      };
      this._options = this._getOptionsFromConfig();
      this._optionsElement.innerHTML = '';
      this._createOptions(this._optionsElement, this._options);
    }
    deselectAll(options = this._selected) {
      if (this._selected.length === 0) {
        return;
      }
      for (const option of options) {
        if (option.disabled) {
          continue;
        }
        if (Array.isArray(option.options)) {
          this.deselectAll(option.options);
          continue;
        }
        this._deselectOption(option.value);
        this._updateCleaner();
      }
    }

    // Helpers

    _triggerChangeEvent(value) {
      EventHandler.trigger(this._element, EVENT_CHANGED$1, {
        value
      });
    }
    _flattenOptions(options = this._options, flat = []) {
      for (const opt of options) {
        if (opt && Array.isArray(opt.options)) {
          this._flattenOptions(opt.options, flat);
          continue;
        }
        flat.push(opt);
      }
      return flat;
    }
    _getClassNames() {
      return this._element.classList.value.split(' ');
    }
    _highlightOption(label) {
      const regex = new RegExp(this._search, 'gi');
      return label.replace(regex, string => `<strong>${string}</strong>`);
    }
    _isExternalSearch() {
      return Array.isArray(this._config.search) && this._config.search.includes('external');
    }
    _isGlobalSearch() {
      return Array.isArray(this._config.search) && this._config.search.includes('global');
    }
    _isVisible(element) {
      const style = window.getComputedStyle(element);
      return style.display !== 'none';
    }
    _isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW$f);
    }

    // Private

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK$6, event => {
        if (!this._config.disabled && !event.target.closest(SELECTOR_INDICATOR)) {
          this.show();
        }
      });
      EventHandler.on(this._element, EVENT_KEYDOWN$9, event => {
        if (event.key === ESCAPE_KEY$6) {
          this.hide();
          if (this._config.allowOnlyDefinedOptions && this._selected.length === 0) {
            this.search('');
            this._inputElement.value = '';
          }
          return;
        }
        if (this._isGlobalSearch() && (event.key.length === 1 || event.key === BACKSPACE_KEY$2 || event.key === DELETE_KEY$1)) {
          this._inputElement.focus();
        }
      });
      EventHandler.on(this._menu, EVENT_KEYDOWN$9, event => {
        if (this._isGlobalSearch() && (event.key.length === 1 || event.key === BACKSPACE_KEY$2 || event.key === DELETE_KEY$1)) {
          this._inputElement.focus();
        }
      });
      EventHandler.on(this._togglerElement, EVENT_KEYDOWN$9, event => {
        if (!this._isShown() && (event.key === ENTER_KEY$4 || event.key === ARROW_DOWN_KEY$6)) {
          event.preventDefault();
          this.show();
          return;
        }
        if (this._isShown() && event.key === ARROW_DOWN_KEY$6) {
          event.preventDefault();
          this._selectMenuItem(event);
        }
      });
      EventHandler.on(this._indicatorElement, EVENT_CLICK$6, event => {
        event.preventDefault();
        this.toggle();
      });
      EventHandler.on(this._inputElement, EVENT_BLUR$1, () => {
        const inputValue = this._inputElement.value;
        if (inputValue.length === 0) {
          return;
        }
        const inputValueLower = inputValue.toLowerCase();
        const exactMatches = this._flattenOptions().filter(option => option.label.toLowerCase() === inputValueLower);
        if (exactMatches.length === 1) {
          this._selectOption(exactMatches[0]);
          return;
        }
        if (this._config.allowOnlyDefinedOptions) {
          this.clear();
          return;
        }
        this._triggerChangeEvent(inputValue);
      });
      EventHandler.on(this._inputElement, EVENT_KEYDOWN$9, event => {
        if (!this._isShown() && event.key !== TAB_KEY$6) {
          this.show();
        }
        if (event.key === ARROW_DOWN_KEY$6 && this._inputElement.value.length === this._inputElement.selectionStart) {
          this._selectMenuItem(event);
          return;
        }
        if (event.key === TAB_KEY$6 && this._config.showHints && this._inputElement.value.length > 0) {
          if (this._inputHintElement.value) {
            event.preventDefault();
            event.stopPropagation();
          }
          const options = this._flattenOptions().filter(option => option.label.toLowerCase().startsWith(this._inputElement.value.toLowerCase()));
          if (options.length > 0) {
            this._selectOption(options[0]);
          }
        }
        if (event.key === ENTER_KEY$4) {
          event.preventDefault();
          event.stopPropagation();
          if (this._inputElement.value.length === 0) {
            return;
          }
          const options = this._flattenOptions().filter(option => option.label.toLowerCase() === this._inputElement.value.toLowerCase());
          if (options.length > 0) {
            this._selectOption(options[0]);
          }
          if (options.length === 0 && !this._config.allowOnlyDefinedOptions) {
            this._triggerChangeEvent(this._inputElement.value);
            this.hide();
            if (this._config.clearSearchOnSelect) {
              this.search('');
            }
          }
        }
      });
      EventHandler.on(this._inputElement, EVENT_KEYUP$1, event => {
        if (event.key.length === 1 || event.key === BACKSPACE_KEY$2 || event.key === DELETE_KEY$1) {
          const {
            value
          } = event.target;
          this.search(value);
          if (this._config.showHints) {
            const options = value ? this._flattenOptions().filter(option => option.label.toLowerCase().startsWith(value.toLowerCase())) : [];
            this._inputHintElement.value = options.length > 0 ? `${value}${options[0].label.slice(value.length)}` : '';
          }
          if (this._selected.length > 0) {
            this.deselectAll();
            this._triggerChangeEvent(null);
          }
        }
      });
      EventHandler.on(this._optionsElement, EVENT_CLICK$6, event => {
        event.preventDefault();
        event.stopPropagation();
        this._onOptionsClick(event.target);
      });
      EventHandler.on(this._cleanerElement, EVENT_CLICK$6, event => {
        if (!this._config.disabled) {
          event.preventDefault();
          event.stopPropagation();
          this.clear();
        }
      });
      EventHandler.on(this._cleanerElement, EVENT_KEYDOWN$9, event => {
        if (!this._config.disabled && event.key === ENTER_KEY$4) {
          event.preventDefault();
          event.stopPropagation();
          this.clear();
        }
      });
      EventHandler.on(this._optionsElement, EVENT_KEYDOWN$9, event => {
        if (event.key === ENTER_KEY$4) {
          this._onOptionsClick(event.target);
        }
        if ([ARROW_UP_KEY$6, ARROW_DOWN_KEY$6].includes(event.key)) {
          event.preventDefault();
          this._selectMenuItem(event);
        }
      });
    }
    _getOptionsFromConfig(options = this._config.options) {
      if (!options || !Array.isArray(options)) {
        return [];
      }
      const _options = [];
      for (const option of options) {
        var _option$value;
        if (option.options && Array.isArray(option.options)) {
          const customGroupProperties = {
            ...option
          };
          delete customGroupProperties.label;
          delete customGroupProperties.options;
          _options.push({
            ...customGroupProperties,
            label: option.label,
            options: this._getOptionsFromConfig(option.options)
          });
          continue;
        }
        const label = typeof option === 'string' ? option : option.label;
        const value = (_option$value = option.value) != null ? _option$value : typeof option === 'string' ? option : option.label;
        const isSelected = option.selected || this._config.value && this._config.value === value;
        const customProperties = typeof option === 'object' ? {
          ...option
        } : {};
        delete customProperties.label;
        delete customProperties.value;
        delete customProperties.selected;
        delete customProperties.disabled;
        _options.push({
          ...customProperties,
          label,
          value: String(value),
          ...(isSelected && {
            selected: true
          }),
          ...(option.disabled && {
            disabled: true
          })
        });
        if (isSelected) {
          this._selected.push({
            label: option.label,
            value: String(value)
          });
        }
      }
      return _options;
    }
    _createAutocomplete() {
      this._element.classList.add(CLASS_NAME_AUTOCOMPLETE);
      this._element.classList.toggle('is-invalid', this._config.invalid);
      this._element.classList.toggle('is-valid', this._config.valid);
      if (this._config.disabled) {
        this._element.classList.add(CLASS_NAME_DISABLED$8);
      }
      for (const className of this._getClassNames()) {
        this._element.classList.add(className);
      }
      this._createInputGroup();
      this._createButtons();
      this._createOptionsContainer();
      this._updateOptionsList();
    }
    _createInputGroup() {
      var _this$_config$placeho;
      const togglerEl = document.createElement('div');
      togglerEl.classList.add(CLASS_NAME_INPUT_GROUP$3);
      this._togglerElement = togglerEl;
      if (!this._config.search && !this._config.disabled) {
        togglerEl.tabIndex = -1;
      }
      if (!this._config.disabled && this._config.showHints) {
        const inputHintEl = document.createElement('input');
        inputHintEl.classList.add(CLASS_NAME_INPUT$2, CLASS_NAME_INPUT_HINT);
        inputHintEl.setAttribute('name', (this._config.name || `${this._uniqueId}-hint`).toString());
        inputHintEl.autocomplete = 'off';
        inputHintEl.readOnly = true;
        inputHintEl.tabIndex = -1;
        inputHintEl.setAttribute('aria-hidden', true);
        togglerEl.append(inputHintEl);
        this._inputHintElement = inputHintEl;
      }
      const inputEl = document.createElement('input');
      inputEl.classList.add(CLASS_NAME_INPUT$2);
      inputEl.id = this._uniqueId;
      inputEl.setAttribute('name', (this._config.name || this._uniqueId).toString());
      inputEl.autocomplete = 'off';
      inputEl.placeholder = (_this$_config$placeho = this._config.placeholder) != null ? _this$_config$placeho : '';
      inputEl.role = 'combobox';
      inputEl.setAttribute('aria-autocomplete', 'list');
      inputEl.setAttribute('aria-expanded', 'false');
      inputEl.setAttribute('aria-haspopup', 'listbox');
      if (this._config.disabled) {
        inputEl.setAttribute('disabled', true);
        inputEl.tabIndex = -1;
      }
      if (this._config.required) {
        inputEl.setAttribute('required', true);
      }
      togglerEl.append(inputEl);
      this._inputElement = inputEl;
      this._element.append(togglerEl);
    }
    _createButtons() {
      if (!this._config.cleaner && !this._config.indicator) {
        return;
      }
      const buttons = document.createElement('div');
      buttons.classList.add(CLASS_NAME_BUTTONS$1);
      if (!this._config.disabled && this._config.cleaner) {
        const cleaner = document.createElement('button');
        cleaner.type = 'button';
        cleaner.classList.add(CLASS_NAME_CLEANER$3);
        cleaner.style.display = 'none';
        cleaner.setAttribute('aria-label', this._config.ariaCleanerLabel);
        buttons.append(cleaner);
        this._cleanerElement = cleaner;
      }
      if (this._config.indicator) {
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.classList.add(CLASS_NAME_INDICATOR$2);
        indicator.setAttribute('aria-label', this._config.ariaIndicatorLabel);
        if (this._config.disabled) {
          indicator.tabIndex = -1;
        }
        buttons.append(indicator);
        this._indicatorElement = indicator;
        this._indicatorElement = indicator;
      }
      this._togglerElement.append(buttons);
      this._updateCleaner();
    }
    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('CoreUI\'s Auto Complete component require Popper (https://popper.js.org)');
      }
      const popperConfig = {
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: 'clippingParents'
          }
        }, {
          name: 'offset',
          options: {
            offset: [0, 2]
          }
        }],
        placement: isRTL() ? 'bottom-end' : 'bottom-start'
      };
      this._popper = Popper__namespace.createPopper(this._togglerElement, this._menu, popperConfig);
    }
    _createOptionsContainer() {
      const dropdownDiv = document.createElement('div');
      dropdownDiv.classList.add(CLASS_NAME_DROPDOWN$2);
      dropdownDiv.role = 'listbox';
      dropdownDiv.setAttribute('aria-labelledby', this._uniqueId);
      dropdownDiv.setAttribute('id', `${this._uniqueId}-listbox`);
      const optionsDiv = document.createElement('div');
      optionsDiv.classList.add(CLASS_NAME_OPTIONS$1);
      if (this._config.optionsMaxHeight !== 'auto') {
        optionsDiv.style.maxHeight = `${this._config.optionsMaxHeight}px`;
        optionsDiv.style.overflow = 'auto';
      }
      dropdownDiv.append(optionsDiv);
      const {
        container
      } = this._config;
      if (container) {
        this._inputElement.setAttribute('aria-owns', `${this._uniqueId}-listbox`);
        dropdownDiv.id = `${this._uniqueId}-listbox`;
        container.append(dropdownDiv);
      } else {
        this._element.append(dropdownDiv);
      }
      this._createOptions(optionsDiv, this._options);
      this._optionsElement = optionsDiv;
      this._menu = dropdownDiv;
    }
    _createOptions(parentElement, options) {
      for (const option of options) {
        if (Array.isArray(option.options)) {
          const optgroup = document.createElement('div');
          optgroup.classList.add(CLASS_NAME_OPTGROUP$1);
          optgroup.setAttribute('role', 'group');
          const optgrouplabel = document.createElement('div');
          if (this._config.optionsGroupsTemplate && typeof this._config.optionsGroupsTemplate === 'function') {
            optgrouplabel.innerHTML = this._config.sanitize ? sanitizeHtml(this._config.optionsGroupsTemplate(option), this._config.allowList, this._config.sanitizeFn) : this._config.optionsGroupsTemplate(option);
          } else {
            optgrouplabel.textContent = option.label;
          }
          optgrouplabel.classList.add(CLASS_NAME_OPTGROUP_LABEL$1);
          optgroup.append(optgrouplabel);
          this._createOptions(optgroup, option.options);
          parentElement.append(optgroup);
          continue;
        }
        const optionDiv = document.createElement('div');
        optionDiv.classList.add(CLASS_NAME_OPTION$1);
        if (option.disabled) {
          optionDiv.classList.add(CLASS_NAME_DISABLED$8);
          optionDiv.setAttribute('aria-disabled', 'true');
        }
        optionDiv.dataset.value = option.value;
        optionDiv.tabIndex = 0;
        if (this._isExternalSearch() && this._config.highlightOptionsOnSearch && this._search) {
          optionDiv.innerHTML = this._highlightOption(option.label);
        } else if (this._config.optionsTemplate && typeof this._config.optionsTemplate === 'function') {
          optionDiv.innerHTML = this._config.sanitize ? sanitizeHtml(this._config.optionsTemplate(option), this._config.allowList, this._config.sanitizeFn) : this._config.optionsTemplate(option);
        } else {
          optionDiv.textContent = option.label;
        }
        parentElement.append(optionDiv);
      }
    }
    _onOptionsClick(element) {
      if (element.classList.contains(CLASS_NAME_LABEL$1)) {
        return;
      }
      if (!element.classList.contains(CLASS_NAME_OPTION$1)) {
        element = element.closest(SELECTOR_OPTION$1);
        if (!element) {
          return;
        }
      }
      const {
        value
      } = element.dataset;
      const foundOption = this._findOptionByValue(value);
      if (foundOption) {
        this._selectOption(foundOption);
        this._inputElement.focus();
      }
    }
    _findOptionByValue(value, options = this._options) {
      for (const option of options) {
        if (option.value === value) {
          return option;
        }
        if (option.options && Array.isArray(option.options)) {
          const found = this._findOptionByValue(value, option.options);
          if (found) {
            return found;
          }
        }
      }
      return null;
    }
    _selectOption(option) {
      this.deselectAll();
      if (this._selected.filter(selectedOption => selectedOption.value === option.value).length === 0) {
        this._selected.push(option);
      }
      const foundOption = SelectorEngine.findOne(`[data-value="${option.value}"]`, this._optionsElement);
      if (foundOption) {
        foundOption.classList.add(CLASS_NAME_SELECTED$2);
        foundOption.setAttribute('aria-selected', true);
      }
      this._triggerChangeEvent(option);
      this._inputElement.value = option.label;
      if (this._config.showHints) {
        this._inputHintElement.value = '';
      }
      this.hide();
      if (this._config.clearSearchOnSelect) {
        this.search('');
      }
      this._updateCleaner();
    }
    _deselectOption(value) {
      this._selected = this._selected.filter(option => option.value !== value);
      const option = SelectorEngine.findOne(`[data-value="${value}"]`, this._optionsElement);
      if (option) {
        option.classList.remove(CLASS_NAME_SELECTED$2);
        option.setAttribute('aria-selected', false);
      }
    }
    _updateCleaner() {
      if (!this._config.cleaner || this._cleanerElement === null) {
        return;
      }
      if (this._selected.length > 0) {
        this._cleanerElement.style.removeProperty('display');
        return;
      }
      this._cleanerElement.style.display = 'none';
    }
    _updateOptionsList(options = this._options) {
      for (const option of options) {
        if (Array.isArray(option.options)) {
          this._updateOptionsList(option.options);
          continue;
        }
        if (option.selected) {
          this._selectOption(option);
        }
      }
    }
    _filterOptionsList() {
      const options = SelectorEngine.find(SELECTOR_OPTION$1, this._menu);
      let visibleOptions = 0;
      for (const option of options) {
        // eslint-disable-next-line unicorn/prefer-includes
        if (option.textContent.toLowerCase().indexOf(this._search) === -1) {
          option.style.display = 'none';
        } else {
          if (this._config.highlightOptionsOnSearch && !this._config.optionsTemplate) {
            option.innerHTML = this._highlightOption(option.textContent);
          }
          option.style.removeProperty('display');
          visibleOptions++;
        }
        const optgroup = option.closest(SELECTOR_OPTGROUP$1);
        if (optgroup) {
          // eslint-disable-next-line  unicorn/prefer-array-some
          if (SelectorEngine.children(optgroup, SELECTOR_OPTION$1).filter(element => this._isVisible(element)).length > 0) {
            optgroup.style.removeProperty('display');
          } else {
            optgroup.style.display = 'none';
          }
        }
      }
      if (visibleOptions > 0) {
        if (SelectorEngine.findOne(SELECTOR_OPTIONS_EMPTY$1, this._menu)) {
          SelectorEngine.findOne(SELECTOR_OPTIONS_EMPTY$1, this._menu).remove();
        }
        return;
      }
      if (visibleOptions === 0) {
        if (this._config.searchNoResultsLabel) {
          const placeholder = document.createElement('div');
          placeholder.classList.add(CLASS_NAME_OPTIONS_EMPTY$1);
          placeholder.innerHTML = this._config.searchNoResultsLabel;
          if (!SelectorEngine.findOne(SELECTOR_OPTIONS_EMPTY$1, this._menu)) {
            SelectorEngine.findOne(SELECTOR_OPTIONS$1, this._menu).append(placeholder);
          }
          return;
        }
        this.hide();
      }
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS$2, this._menu).filter(element => isVisible(element));
      if (!items.length) {
        return;
      }

      // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$6, !items.includes(target)).focus();
    }
    _configAfterMerge(config) {
      if (config.container === true) {
        config.container = document.body;
      }
      if (typeof config.container === 'object' || typeof config.container === 'string') {
        config.container = getElement(config.container);
      }
      if (typeof config.options === 'string') {
        config.options = config.options.split(/,\s*/).map(String);
      }
      if (typeof config.search === 'string') {
        config.search = config.search.split(/,\s*/).map(String);
      }
      return config;
    }

    // Static

    static autocompleteInterface(element, config) {
      const data = Autocomplete.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        Autocomplete.autocompleteInterface(this, config);
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON$5 || event.type === 'keyup' && event.key !== TAB_KEY$6) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN$4);
      for (const toggle of openToggles) {
        const context = Autocomplete.getInstance(toggle);
        if (!context) {
          continue;
        }
        const composedPath = event.composedPath();
        if (composedPath.includes(context._element)) {
          continue;
        }
        ({
          relatedTarget: context._element
        });
        if (event.type === 'click') ;
        context.hide();
        context.search('');
        if (context._config.allowOnlyDefinedOptions && context._selected.length === 0) {
          context._inputElement.value = '';
        }
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$f, () => {
    for (const autocomplete of SelectorEngine.find(SELECTOR_DATA_TOGGLE$i)) {
      Autocomplete.autocompleteInterface(autocomplete);
    }
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$i, Autocomplete.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API$6, Autocomplete.clearMenus);

  /**
   * jQuery
   */

  defineJQueryPlugin(Autocomplete);

  /**
   * --------------------------------------------------------------------------
   * CoreUI button.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$v = 'button';
  const DATA_KEY$q = 'coreui.button';
  const EVENT_KEY$r = `.${DATA_KEY$q}`;
  const DATA_API_KEY$m = '.data-api';
  const CLASS_NAME_ACTIVE$8 = 'active';
  const SELECTOR_DATA_TOGGLE$h = '[data-coreui-toggle="button"]';
  const EVENT_CLICK_DATA_API$h = `click${EVENT_KEY$r}${DATA_API_KEY$m}`;

  /**
   * Class definition
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$v;
    }

    // Public
    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$8));
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);
        if (config === 'toggle') {
          data[config]();
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$h, SELECTOR_DATA_TOGGLE$h, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$h);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Button);

  let _2 = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7;
  /**
   * Converts an ISO week string to a Date object representing the Monday of that week.
   * @param isoWeek - The ISO week string (e.g., "2023W05" or "2023w05").
   * @returns The Date object for the Monday of the specified week, or null if invalid.
   */
  /**
   * Helper function to calculate Monday of ISO week 1 for a given year.
   * @param year - The year to calculate for.
   * @returns The Monday of ISO week 1.
   */
  const getMondayOfISOWeek1 = year => {
    const jan4 = new Date(year, 0, 4);
    const jan4DayOfWeek = jan4.getDay();
    const daysFromMonday = jan4DayOfWeek === 0 ? 6 : jan4DayOfWeek - 1; // Sunday = 6 days from Monday
    const mondayOfWeek1 = new Date(jan4);
    mondayOfWeek1.setDate(jan4.getDate() - daysFromMonday);
    return mondayOfWeek1;
  };

  /**
   * Helper function to calculate Monday of a specific ISO week.
   * @param year - The year.
   * @param week - The ISO week number.
   * @returns The Monday of the specified ISO week.
   */
  const getMondayOfISOWeek = (year, week) => {
    const mondayOfWeek1 = getMondayOfISOWeek1(year);
    const weekStart = new Date(mondayOfWeek1);
    // prettier-ignore
    weekStart.setDate(mondayOfWeek1.getDate() + (week - 1) * 7);
    return weekStart;
  };

  /**
   * Helper function to convert a date to a month number for comparison.
   * @param date - The date to convert.
   * @returns A number representing year*12 + month for easy comparison.
   */
  const dateToMonthNumber = date => {
    // prettier-ignore
    return date.getFullYear() * 12 + date.getMonth();
  };

  /**
   * Helper function to convert a date to a quarter number for comparison.
   * @param date - The date to convert.
   * @returns A number representing year*4 + quarter for easy comparison.
   */
  const dateToQuarterNumber = date => {
    const quarter = Math.floor(date.getMonth() / 3);
    return date.getFullYear() * 4 + quarter;
  };

  /**
   * Helper function to check if a value is within min/max range.
   * @param value - The value to check.
   * @param min - Minimum allowed value (null means no minimum).
   * @param max - Maximum allowed value (null means no maximum).
   * @returns True if the value is outside the range, false if within range.
   */
  const isOutsideRange = (value, min, max) => {
    if (min !== null && value < min) {
      return true;
    }
    if (max !== null && value > max) {
      return true;
    }
    return false;
  };

  /**
   * Converts an ISO week string to a Date object representing the Monday of that week.
   * @param isoWeek - The ISO week string (e.g., "2023W05" or "2023w05").
   * @returns The Date object for the Monday of the specified week.
   */
  const convertIsoWeekToDate = isoWeek => {
    const [year, week] = isoWeek.split(/[Ww]/);
    const parsedYear = parseYearSmart(year);
    const parsedWeek = Number.parseInt(week, 10);

    // Create date from ISO week using helper function
    return getMondayOfISOWeek(parsedYear, parsedWeek);
  };

  /**
   * Parses a week string and returns a Date object for the Monday of that week.
   * @param dateString - The week string to parse.
   * @returns The Date object for the Monday of the week, or null if invalid.
   */
  const parseWeekString = dateString => {
    const weekPatterns = [/^(\d{4})-W(\d{1,2})$/,
    // 2023-W05, 2023-W5
    /^(\d{4})W(\d{1,2})$/,
    // 2023W05, 2023W5
    /^(\d{4})\s+W(\d{1,2})$/ // 2023 W05, 2023 W5
    ];
    for (const pattern of weekPatterns) {
      const match = dateString.trim().match(pattern);
      if (match) {
        const parsedYear = parseYearSmart(match[1]);
        const parsedWeek = Number.parseInt(match[2], 10);

        // Create date from ISO week using helper function
        return getMondayOfISOWeek(parsedYear, parsedWeek);
      }
    }

    // Fallback to existing ISO week parsing
    return convertIsoWeekToDate(dateString);
  };

  /**
   * Parses a quarter string and returns a Date object for the first day of that quarter.
   * @param dateString - The quarter string to parse.
   * @returns The Date object for the first day of the quarter, or null if invalid.
   */
  const parseQuarterString = dateString => {
    const quarterPatterns = [/^(\d{4})-Q(\d{1})$/,
    // 2023-Q1, 2023-Q4
    /^(\d{4})Q(\d{1})$/,
    // 2023Q1, 2023Q4
    /^(\d{4})\s+Q(\d{1})$/ // 2023 Q1, 2023 Q4
    ];
    for (const pattern of quarterPatterns) {
      const match = dateString.trim().match(pattern);
      if (match) {
        const parsedYear = parseYearSmart(match[1]);
        const parsedQuarter = Number.parseInt(match[2], 10);

        // Validate quarter (1-4)
        if (parsedQuarter >= 1 && parsedQuarter <= 4) {
          // Calculate the first month of the quarter (Q1=0, Q2=3, Q3=6, Q4=9)
          const monthIndex = (parsedQuarter - 1) * 3;
          return new Date(parsedYear, monthIndex, 1);
        }
      }
    }
    return null;
  };

  /**
   * Parses a month string and returns a Date object for the first day of that month.
   * @param dateString - The month string to parse.
   * @returns The Date object for the first day of the month, or null if invalid.
   */
  const parseMonthString = dateString => {
    const monthPatterns = [/^(\d{2,4})[-/.\s](\d{1,2})$/,
    // 2023-12, 23-12, 2023/12, 23/12, 2023 12, etc.
    /^(\d{1,2})[-/.\s](\d{2,4})$/ // 12-2023, 12-23, 12/2023, 12/23, 12 2023, etc.
    ];
    for (const pattern of monthPatterns) {
      const match = dateString.trim().match(pattern);
      if (match) {
        const firstGroup = match[1];
        const secondGroup = match[2];

        // Determine which group is year and which is month
        const parsedFirst = Number.parseInt(firstGroup, 10);
        const parsedSecond = Number.parseInt(secondGroup, 10);
        let parsedYear;
        let parsedMonth;

        // Determine which group is year and which is month based on several heuristics
        if (firstGroup.length >= 3 || parsedFirst >= 100) {
          // First group is clearly a year (3+ digits or >= 100)
          parsedYear = parseYearSmart(firstGroup);
          parsedMonth = parsedSecond - 1;
        } else if (secondGroup.length >= 3 || parsedSecond >= 100) {
          // Second group is clearly a year (3+ digits or >= 100)
          parsedYear = parseYearSmart(secondGroup);
          parsedMonth = parsedFirst - 1;
        } else {
          // Both groups are 1-2 digits, use context clues
          // If second group is a valid month (1-12), treat first as year
          // eslint-disable-next-line no-lonely-if
          if (parsedSecond >= 1 && parsedSecond <= 12 && (parsedFirst > 12 || parsedFirst < 1)) {
            parsedYear = parseYearSmart(firstGroup);
            parsedMonth = parsedSecond - 1;
          } else {
            // Default: treat second group as year
            parsedYear = parseYearSmart(secondGroup);
            parsedMonth = parsedFirst - 1;
          }
        }
        if (parsedMonth >= 0 && parsedMonth <= 11) {
          return new Date(parsedYear, parsedMonth, 1);
        }
      }
    }

    // For month selection, don't use fallback parsing - return null if no pattern matches
    return null;
  };

  /**
   * Parses a year string or number and returns a Date object for January 1st of that year.
   * @param dateString - The year string or number to parse.
   * @returns The Date object for January 1st of the year, or null if invalid.
   */
  const parseYearString = dateString => {
    const yearString = String(dateString);
    const yearPattern = /^(\d{2,4})$/;
    const match = yearString.trim().match(yearPattern);
    if (match) {
      const groups = {
        year: match[1]
      };
      return createDateFromYear(groups);
    }
    return parseLocalDateString(yearString);
  };

  /**
   * Helper function to generate multiple date format patterns based on locale.
   * @param locale - The locale to use for date format patterns.
   * @param includeTime - Whether to include time in the patterns.
   * @returns Array of date format patterns.
   */
  const generateDatePatterns = (locale, includeTime) => {
    const referenceDate = new Date(2013, 11, 31, 17, 19, 22);
    const patterns = [];
    try {
      // Get the standard locale format
      const standardFormat = includeTime ? referenceDate.toLocaleString(locale) : referenceDate.toLocaleDateString(locale);
      patterns.push(standardFormat);
    } catch (_unused) {
      // Fallback to default locale if invalid locale provided
      const standardFormat = includeTime ? referenceDate.toLocaleString("en-US") : referenceDate.toLocaleDateString("en-US");
      patterns.push(standardFormat);
    }

    // Generate common alternative formats by replacing separators
    const separators = ["/", "-", ".", " "];
    const standardFormat = patterns[0];

    // Detect the original separator
    let originalSeparator = "/"; // default
    if (standardFormat.includes("/")) {
      originalSeparator = "/";
    } else if (standardFormat.includes("-")) {
      originalSeparator = "-";
    } else if (standardFormat.includes(".")) {
      originalSeparator = ".";
    }
    for (const sep of separators) {
      if (sep !== originalSeparator) {
        // Escape the original separator for regex if it's a special character
        const escapedSeparator = originalSeparator.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw(_t || (_t = _2`\$&`)));
        const altFormat = standardFormat.replaceAll(new RegExp(escapedSeparator, "g"), sep);
        patterns.push(altFormat);
      }
    }
    return patterns;
  };

  /**
   * Helper function to build regex pattern for date parsing.
   * @param formatString - The date format string.
   * @param includeTime - Whether to include time patterns.
   * @returns The regex pattern string.
   */
  const buildDateRegexPattern = (formatString, includeTime) => {
    // First escape special regex characters

    let regexPattern = formatString.replaceAll(/[.*+?^${}()|[\\]\\]/g, "\\$&");

    // Then replace the date/time components with regex groups
    regexPattern = regexPattern.replace("2013", String.raw(_t2 || (_t2 = _2`(?<year>\d{2,4})`))).replace("12", String.raw(_t3 || (_t3 = _2`(?<month>\d{1,2})`))).replace("31", String.raw(_t4 || (_t4 = _2`(?<day>\d{1,2})`)));
    if (includeTime) {
      regexPattern = regexPattern.replaceAll(/17|5/g, String.raw(_t5 || (_t5 = _2`(?<hour>\d{1,2})`))).replace("19", String.raw(_t6 || (_t6 = _2`(?<minute>\d{1,2})`))).replace("22", String.raw(_t7 || (_t7 = _2`(?<second>\d{1,2})`))).replaceAll(/AM|PM/gi, "(?<ampm>[APap][Mm])");
    }
    return regexPattern;
  };

  /**
   * Helper function to try parsing with multiple patterns.
   * @param dateString - The date string to parse.
   * @param patterns - Array of format patterns to try.
   * @param includeTime - Whether time parsing is included.
   * @returns Parsed groups or null if no match.
   */
  const tryParseWithPatterns = (dateString, patterns, includeTime) => {
    for (const pattern of patterns) {
      const regexPattern = buildDateRegexPattern(pattern, includeTime);
      const regex = new RegExp(`^${regexPattern}$`);
      const match = dateString.trim().match(regex);
      if (match != null && match.groups) {
        return match.groups;
      }
    }
    return null;
  };

  /**
   * Helper function to convert 12-hour to 24-hour format.
   * @param hour - Hour string.
   * @param ampm - AM/PM indicator.
   * @returns Hour in 24-hour format.
   */
  const convertTo24Hour = (hour, ampm) => {
    const parsedHour = Number.parseInt(hour, 10);
    if (!ampm) {
      return parsedHour;
    }
    const isPM = ampm.toLowerCase() === "pm";
    if (isPM && parsedHour !== 12) {
      return parsedHour + 12;
    }
    if (!isPM && parsedHour === 12) {
      return 0;
    }
    return parsedHour;
  };

  /**
   * Helper function to validate time components.
   * @param hour - Hour value.
   * @param minute - Minute value.
   * @param second - Second value.
   * @returns True if time components are valid.
   */
  const validateTimeComponents = (hour, minute, second) => {
    return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59;
  };

  /**
   * Helper function to validate date components.
   * @param month - Month string.
   * @param day - Day string.
   * @returns True if date components are valid.
   */
  const validateDateComponents = (month, day) => {
    const parsedMonth = Number.parseInt(month, 10) - 1;
    const parsedDay = Number.parseInt(day, 10);
    return parsedMonth >= 0 && parsedMonth <= 11 && parsedDay >= 1 && parsedDay <= 31;
  };

  /**
   * Helper function to create date with time.
   * @param groups - Parsed date and time groups.
   * @returns Date object or null if invalid.
   */
  const createDateWithTime = groups => {
    const {
      year,
      month,
      day,
      hour,
      minute,
      second,
      ampm
    } = groups;
    const parsedYear = parseYearSmart(year);
    const parsedMonth = Number.parseInt(month, 10) - 1;
    const parsedDay = Number.parseInt(day, 10);
    const parsedHour = convertTo24Hour(hour, ampm);
    const parsedMinute = Number.parseInt(minute != null ? minute : "0", 10) || 0;
    const parsedSecond = Number.parseInt(second != null ? second : "0", 10) || 0;
    if (!validateTimeComponents(parsedHour, parsedMinute, parsedSecond)) {
      return null;
    }
    return new Date(parsedYear, parsedMonth, parsedDay, parsedHour, parsedMinute, parsedSecond);
  };

  /**
   * Helper function to create date without time.
   * @param groups - Parsed date groups.
   * @returns Date object or null if invalid.
   */
  const createDateOnly = groups => {
    const {
      year,
      month,
      day
    } = groups;
    if (!validateDateComponents(month, day)) {
      return null;
    }
    const parsedYear = parseYearSmart(year);
    const parsedMonth = Number.parseInt(month, 10) - 1;
    const parsedDay = Number.parseInt(day, 10);
    return new Date(parsedYear, parsedMonth, parsedDay);
  };

  /**
   * Helper function to determine expected parts count from patterns.
   * @param patterns - Array of date format patterns.
   * @returns Expected number of parts for a complete date.
   */
  const getExpectedPartsCount = patterns => {
    if (patterns.length === 0) {
      return 3;
    }

    // Analyze the first pattern to determine expected parts count
    const firstPattern = patterns[0];
    const parts = firstPattern.split(/[-/.\s:]+/).filter(part => part.length > 0);
    return parts.length;
  };

  /**
   * Enhanced day parsing with locale-aware patterns.
   * @param dateString - The day string to parse.
   * @param locale - The locale to use for parsing.
   * @param includeTime - Whether to include time parsing.
   * @returns Date object or null if invalid.
   */
  const parseDayString = (dateString, locale, includeTime) => {
    const patterns = generateDatePatterns(locale, includeTime);
    const groups = tryParseWithPatterns(dateString, patterns, includeTime);
    if (!groups) {
      // Check if input looks like a complete date (has separators and multiple parts)
      const trimmed = dateString.trim();
      const hasDateSeparators = /[-/.:]/.test(trimmed);
      const parts = trimmed.split(/[-/.\s:]+/).filter(part => part.length > 0);
      const expectedPartsCount = getExpectedPartsCount(patterns);
      const hasRequiredParts = parts.length >= expectedPartsCount;
      if (hasDateSeparators && hasRequiredParts) {
        // Use fallback for complete date strings that don't match locale patterns
        return parseLocalDateString(dateString);
      }

      // For incomplete input return null
      return null;
    }

    // For day selection, require at least year, month, and day to be present
    if ("year" in groups && "month" in groups && "day" in groups) {
      const {
        month,
        day
      } = groups;
      if (!validateDateComponents(month, day)) {
        return null;
      }
    } else {
      // If incomplete date information, return null instead of guessing
      return null;
    }

    // Create and return appropriate date object
    return includeTime ? createDateWithTime(groups) : createDateOnly(groups);
  };

  /**
   * Parses a date string into a local Date object.
   * @param dateString - The date string to parse.
   * @returns The Date object in local timezone, or null if invalid.
   */
  const parseLocalDateString = dateString => {
    const _date = new Date(Date.parse(dateString));
    if (!Number.isNaN(_date.getTime())) {
      return _date;
    }
    return null;
  };

  /**
   * Converts a date string or Date object to a Date object based on selection type.
   * @param date - The date to convert.
   * @param selectionType - The type of selection ('day', 'week', 'month', 'year').
   * @param locale - The locale to use for date parsing (for day parsing).
   * @param includeTime - Whether to include time parsing (for day parsing).
   * @returns The corresponding Date object or null if invalid.
   */
  const convertToDateObject = (date, selectionType, locale = "en-US", includeTime = false) => {
    if (date === null) {
      return null;
    }
    if (date instanceof Date) {
      return Number.isNaN(date.getTime()) ? null : date;
    }
    const dateString = date;
    switch (selectionType) {
      case "week":
        {
          return parseWeekString(dateString);
        }
      case "month":
        {
          return parseMonthString(dateString);
        }
      case "quarter":
        {
          return parseQuarterString(dateString);
        }
      case "year":
        {
          return parseYearString(dateString);
        }
      default:
        {
          // Enhanced day parsing with locale support
          return parseDayString(dateString, locale, includeTime);
        }
    }
  };

  /**
   * Enhanced locale-aware date parsing function (replaces getLocalDateFromString).
   * @param dateString - The date string to parse.
   * @param locale - The locale to use for date format patterns.
   * @param includeTime - Whether to include time parsing.
   * @param selectionType - The selection type ('day', 'week', 'month', 'quarter', 'year').
   * @returns A Date object if parsing succeeds, null if parsing fails.
   */
  const getLocalDateFromString = (dateString, locale = "en-US", includeTime = false, selectionType = "day") => {
    // Input validation
    if (!dateString || typeof dateString !== "string") {
      return null;
    }
    return convertToDateObject(dateString, selectionType, locale, includeTime);
  };

  /**
   * Creates groups from an array.
   * @param arr - The array to group.
   * @param numberOfGroups - Number of groups to create.
   * @returns An array of grouped arrays.
   */
  const createGroupsInArray = (arr, numberOfGroups) => {
    const perGroup = Math.ceil(arr.length / numberOfGroups);
    return Array.from({
      length: numberOfGroups
    }).fill("").map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  };

  /**
   * Adjusts the calendar date based on order and view type.
   * @param calendarDate - The current calendar date.
   * @param order - The order to adjust by.
   * @param view - The current view type.
   * @returns The adjusted Date object.
   */
  const getCalendarDate = (calendarDate, order, view) => {
    if (order !== 0 && view === "days") {
      return new Date(calendarDate.getFullYear(), calendarDate.getMonth() + order, 1);
    }
    if (order !== 0 && (view === "months" || view === "quarters")) {
      return new Date(calendarDate.getFullYear() + order, calendarDate.getMonth(), 1);
    }
    if (order !== 0 && view === "years") {
      // prettier-ignore
      return new Date(calendarDate.getFullYear() + 12 * order, calendarDate.getMonth(), 1);
    }
    return calendarDate;
  };

  /**
   * Formats a date based on the selection type.
   * @param date - The date to format.
   * @param selectionType - The type of selection ('day', 'week', 'month', 'quarter', 'year').
   * @returns A formatted date string or the original Date object.
   */
  const getDateBySelectionType = (date, selectionType) => {
    if (date === null) {
      return null;
    }
    if (selectionType === "week") {
      const {
        year,
        weekNumber
      } = getISOWeekNumberAndYear(date);
      return `${year}W${weekNumber.toString().padStart(2, "0")}`;
    }
    if (selectionType === "month") {
      const monthNumber = `0${date.getMonth() + 1}`.slice(-2);
      return `${date.getFullYear()}-${monthNumber}`;
    }
    if (selectionType === "quarter") {
      const quarter = Math.floor(date.getMonth() / 3) + 1;
      return `${date.getFullYear()}Q${quarter}`;
    }
    if (selectionType === "year") {
      return `${date.getFullYear()}`;
    }
    return date;
  };

  /**
   * Retrieves an array of month names based on locale and format.
   * @param locale - The locale string (e.g., 'en-US').
   * @param format - The format of the month names ('short' or 'long').
   * @returns An array of month names.
   */
  const getMonthsNames = (locale, format = "short") => {
    return Array.from({
      length: 12
    }, (_, i) => {
      return new Date(2000, i, 1).toLocaleString(locale, {
        month: format
      });
    });
  };

  /**
   * Generates an array of years centered around a given year.
   * @param year - The central year.
   * @param range - The number of years before and after the central year.
   * @returns An array of years.
   */
  const getYears = (year, range = 6) => {
    return Array.from({
      length: range * 2
    }, (_, i) => year - range + i);
  };

  /**
   * Retrieves leading days (from the previous month) for a calendar view.
   * @param year - The year.
   * @param month - The month (0-11).
   * @param firstDayOfWeek - The first day of the week (0-6, where 0 is Sunday).
   * @returns An array of leading day objects.
   */
  const getLeadingDays = (year, month, firstDayOfWeek) => {
    // 0: sunday
    // 1: monday
    const dates = [];
    const d = new Date(year, month);
    const y = d.getFullYear();
    const m = d.getMonth();
    const firstWeekday = new Date(y, m, 1).getDay();
    let leadingDays = 6 - (6 - firstWeekday) - firstDayOfWeek;
    if (firstDayOfWeek) {
      leadingDays = leadingDays < 0 ? 7 + leadingDays : leadingDays;
    }
    for (let i = leadingDays * -1; i < 0; i++) {
      dates.push({
        date: new Date(y, m, i + 1),
        month: "previous"
      });
    }
    return dates;
  };

  /**
   * Retrieves all days within a specific month.
   * @param year - The year.
   * @param month - The month (0-11).
   * @returns An array of day objects.
   */
  const getMonthDays = (year, month) => {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= lastDay; i++) {
      dates.push({
        date: new Date(year, month, i),
        month: "current"
      });
    }
    return dates;
  };

  /**
   * Retrieves trailing days (from the next month) for a calendar view.
   * @param year - The year.
   * @param month - The month (0-11).
   * @param leadingDays - Array of leading day objects.
   * @param monthDays - Array of current month day objects.
   * @returns An array of trailing day objects.
   */
  const getTrailingDays = (year, month, leadingDays, monthDays) => {
    const dates = [];
    const days = 42 - (leadingDays.length + monthDays.length);
    for (let i = 1; i <= days; i++) {
      dates.push({
        date: new Date(year, month + 1, i),
        month: "next"
      });
    }
    return dates;
  };

  /**
   * Calculates the ISO 8601 week number and year for a given date.
   *
   * In the ISO 8601 standard:
   * - Weeks start on Monday.
   * - The first week of the year is the one that contains January 4th.
   * - The year of the week may differ from the calendar year (e.g., Dec 29, 2025 is in ISO year 2026).
   *
   * @param {Date} date - The date for which to calculate the ISO week number and year.
   * @returns {{ weekNumber: number, year: number }} An object containing:
   *   - `weekNumber`: the ISO week number (1–53),
   *   - `year`: the ISO year (may differ from the calendar year of the date).
   */
  const getISOWeekNumberAndYear = date => {
    const tempDate = new Date(date);
    tempDate.setHours(0, 0, 0, 0);

    // Thursday in current week decides the year
    tempDate.setDate(tempDate.getDate() + 3 - (tempDate.getDay() + 6) % 7);
    const week1 = new Date(tempDate.getFullYear(), 0, 4);

    // Calculate full weeks to the date
    const weekNumber = 1 + Math.round((tempDate.getTime() - week1.getTime()) / (86400000 * 7));
    return {
      weekNumber,
      year: tempDate.getFullYear()
    };
  };

  /**
   * Retrieves detailed information about each week in a month for calendar rendering.
   * @param year - The year.
   * @param month - The month (0-11).
   * @param firstDayOfWeek - The first day of the week (0-6, where 0 is Sunday).
   * @returns An array of week objects containing week numbers and day details.
   */
  const getMonthDetails = (year, month, firstDayOfWeek) => {
    const daysPrevMonth = getLeadingDays(year, month, firstDayOfWeek);
    const daysThisMonth = getMonthDays(year, month);
    const daysNextMonth = getTrailingDays(year, month, daysPrevMonth, daysThisMonth);
    const days = [...daysPrevMonth, ...daysThisMonth, ...daysNextMonth];
    const weeks = [];
    for (const [index, day] of days.entries()) {
      if (index % 7 === 0 || weeks.length === 0) {
        weeks.push({
          week: {
            number: 0,
            year: 0
          },
          days: []
        });
      }
      if ((index + 1) % 7 === 0) {
        const {
          weekNumber,
          year
        } = getISOWeekNumberAndYear(day.date);
        const lastWeek = weeks.at(-1);
        if (lastWeek) {
          lastWeek.week = {
            number: weekNumber,
            year
          };
        }
      }
      const lastWeek = weeks.at(-1);
      if (lastWeek) {
        lastWeek.days.push(day);
      }
    }
    return weeks;
  };

  /**
   * Checks if a date is disabled based on the 'date' period type.
   * @param date - The date to check.
   * @param min - Minimum allowed date.
   * @param max - Maximum allowed date.
   * @param disabledDates - Criteria for disabled dates.
   * @returns True if the date is disabled, false otherwise.
   */
  const isDateDisabled = (date, min, max, disabledDates) => {
    if (min && date < min) {
      return true;
    }
    if (max && date > max) {
      return true;
    }
    if (disabledDates === undefined) {
      return false;
    }
    if (typeof disabledDates === "function") {
      return disabledDates(date);
    }
    if (disabledDates instanceof Date && isSameDateAs(date, disabledDates)) {
      return true;
    }
    if (Array.isArray(disabledDates) && disabledDates) {
      for (const _date of disabledDates) {
        if (typeof _date === "function" && _date(date)) {
          return true;
        }
        if (Array.isArray(_date) && isDateInRange(date, _date[0], _date[1])) {
          return true;
        }
        if (_date instanceof Date && isSameDateAs(date, _date)) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * Checks if a date is within a specified range.
   * @param date - The date to check.
   * @param start - Start date of the range.
   * @param end - End date of the range.
   * @returns True if the date is within the range, false otherwise.
   */
  const isDateInRange = (date, start, end) => {
    const _date = removeTimeFromDate(date);
    const _start = start ? removeTimeFromDate(start) : null;
    const _end = end ? removeTimeFromDate(end) : null;
    return Boolean(_start && _end && _start <= _date && _date <= _end);
  };

  /**
   * Checks if a date is selected based on start and end dates.
   * @param date - The date to check.
   * @param start - Start date.
   * @param end - End date.
   * @returns True if the date is selected, false otherwise.
   */
  const isDateSelected = (date, start, end) => {
    if (start !== null && isSameDateAs(start, date)) {
      return true;
    }
    if (end !== null && isSameDateAs(end, date)) {
      return true;
    }
    return false;
  };

  /**
   * Determines if any date within a range is disabled.
   * @param startDate - Start date of the range.
   * @param endDate - End date of the range.
   * @param disabledDates - Criteria for disabled dates.
   * @returns True if any date in the range is disabled, false otherwise.
   */
  const isDisableDateInRange = (startDate, endDate, disabledDates) => {
    if (startDate && endDate) {
      const date = new Date(startDate);
      let disabled = false;

      // eslint-disable-next-line no-unmodified-loop-condition
      while (date < endDate) {
        date.setDate(date.getDate() + 1);
        if (isDateDisabled(date, null, null, disabledDates)) {
          disabled = true;
          break;
        }
      }
      return disabled;
    }
    return false;
  };

  /**
   * Checks if a month is disabled based on the 'month' period type.
   * @param date - The date representing the month to check.
   * @param min - Minimum allowed date.
   * @param max - Maximum allowed date.
   * @param disabledDates - Criteria for disabled dates.
   * @returns True if the month is disabled, false otherwise.
   */
  const isMonthDisabled = (date, min, max, disabledDates) => {
    const current = dateToMonthNumber(date);
    const _min = min ? dateToMonthNumber(min) : null;
    const _max = max ? dateToMonthNumber(max) : null;
    if (isOutsideRange(current, _min, _max)) {
      return true;
    }
    if (disabledDates === undefined) {
      return false;
    }
    const startTime = min ? Math.max(date.getTime(), min.getTime()) : date.getTime();
    const endTime = max ? Math.min(date.getTime(), max.getTime()) : new Date(new Date().getFullYear(), 11, 31).getTime();
    for (const currentDate = new Date(startTime); currentDate.getTime() <= endTime; currentDate.setDate(currentDate.getDate() + 1)) {
      if (!isDateDisabled(currentDate, min, max, disabledDates)) {
        return false;
      }
    }
    return false;
  };

  /**
   * Checks if a month is selected based on start and end dates.
   * @param date - The date representing the month.
   * @param start - Start date.
   * @param end - End date.
   * @returns True if the month is selected, false otherwise.
   */
  const isMonthSelected = (date, start, end) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    if (start !== null && year === start.getFullYear() && month === start.getMonth()) {
      return true;
    }
    if (end !== null && year === end.getFullYear() && month === end.getMonth()) {
      return true;
    }
    return false;
  };

  /**
   * Checks if a month is within a specified range.
   * @param date - The date representing the month.
   * @param start - Start date.
   * @param end - End date.
   * @returns True if the month is within the range, false otherwise.
   */
  const isMonthInRange = (date, start, end) => {
    const _start = start ? dateToMonthNumber(start) : null;
    const _end = end ? dateToMonthNumber(end) : null;
    const _date = dateToMonthNumber(date);
    return Boolean(_start && _end && _start <= _date && _date <= _end);
  };

  /**
   * Checks if a quarter is disabled based on the 'quarter' period type.
   * @param date - The date representing the quarter to check.
   * @param min - Minimum allowed date.
   * @param max - Maximum allowed date.
   * @param disabledDates - Criteria for disabled dates.
   * @returns True if the quarter is disabled, false otherwise.
   */
  const isQuarterDisabled = (date, min, max, disabledDates) => {
    const current = dateToQuarterNumber(date);
    const _min = min ? dateToQuarterNumber(min) : null;
    const _max = max ? dateToQuarterNumber(max) : null;
    if (isOutsideRange(current, _min, _max)) {
      return true;
    }
    if (disabledDates === undefined) {
      return false;
    }

    // Get the start and end of the quarter
    const quarter = Math.floor(date.getMonth() / 3);
    const quarterStartMonth = quarter * 3;
    const quarterEndMonth = quarterStartMonth + 2;
    const year = date.getFullYear();
    const quarterStart = new Date(year, quarterStartMonth, 1);
    const quarterEnd = new Date(year, quarterEndMonth + 1, 0); // Last day of the quarter

    const startTime = min ? Math.max(quarterStart.getTime(), min.getTime()) : quarterStart.getTime();
    const endTime = max ? Math.min(quarterEnd.getTime(), max.getTime()) : quarterEnd.getTime();
    for (const currentDate = new Date(startTime); currentDate.getTime() <= endTime; currentDate.setDate(currentDate.getDate() + 1)) {
      if (!isDateDisabled(currentDate, min, max, disabledDates)) {
        return false;
      }
    }
    return false;
  };

  /**
   * Checks if a quarter is selected based on start and end dates.
   * @param date - The date representing the quarter.
   * @param start - Start date.
   * @param end - End date.
   * @returns True if the quarter is selected, false otherwise.
   */
  const isQuarterSelected = (date, start, end) => {
    const year = date.getFullYear();
    const quarter = Math.floor(date.getMonth() / 3);
    if (start !== null) {
      const startYear = start.getFullYear();
      const startQuarter = Math.floor(start.getMonth() / 3);
      if (year === startYear && quarter === startQuarter) {
        return true;
      }
    }
    if (end !== null) {
      const endYear = end.getFullYear();
      const endQuarter = Math.floor(end.getMonth() / 3);
      if (year === endYear && quarter === endQuarter) {
        return true;
      }
    }
    return false;
  };

  /**
   * Checks if a quarter is within a specified range.
   * @param date - The date representing the quarter.
   * @param start - Start date.
   * @param end - End date.
   * @returns True if the quarter is within the range, false otherwise.
   */
  const isQuarterInRange = (date, start, end) => {
    const _start = start ? dateToQuarterNumber(start) : null;
    const _end = end ? dateToQuarterNumber(end) : null;
    const _date = dateToQuarterNumber(date);
    return Boolean(_start && _end && _start <= _date && _date <= _end);
  };

  /**
   * Checks if two dates are the same calendar date.
   * @param date - First date.
   * @param date2 - Second date.
   * @returns True if both dates are the same, false otherwise.
   */
  const isSameDateAs = (date, date2) => {
    if (date instanceof Date && date2 instanceof Date) {
      return date.getDate() === date2.getDate() && date.getMonth() === date2.getMonth() && date.getFullYear() === date2.getFullYear();
    }
    if (date === null && date2 === null) {
      return true;
    }
    return false;
  };

  /**
   * Checks if a date is today.
   * @param date - The date to check.
   * @returns True if the date is today, false otherwise.
   */
  const isToday = date => {
    const today = new Date();
    return isSameDateAs(date, today);
  };

  /**
   * Checks if a year is disabled based on the 'year' period type.
   * @param date - The date representing the year to check.
   * @param min - Minimum allowed date.
   * @param max - Maximum allowed date.
   * @param disabledDates - Criteria for disabled dates.
   * @returns True if the year is disabled, false otherwise.
   */
  const isYearDisabled = (date, min, max, disabledDates) => {
    const year = date.getFullYear();
    const minYear = min ? min.getFullYear() : null;
    const maxYear = max ? max.getFullYear() : null;
    if (isOutsideRange(year, minYear, maxYear)) {
      return true;
    }
    if (disabledDates === undefined) {
      return false;
    }
    const startTime = min ? Math.max(date.getTime(), min.getTime()) : date.getTime();
    const endTime = max ? Math.min(date.getTime(), max.getTime()) : new Date(new Date().getFullYear(), 11, 31).getTime();
    for (const currentDate = new Date(startTime); currentDate.getTime() <= endTime; currentDate.setDate(currentDate.getDate() + 1)) {
      if (!isDateDisabled(currentDate, min, max, disabledDates)) {
        return false;
      }
    }
    return false;
  };

  /**
   * Checks if a year is selected based on start and end dates.
   * @param date - The date representing the year.
   * @param start - Start date.
   * @param end - End date.
   * @returns True if the year matches the start's or end's year, false otherwise.
   */
  const isYearSelected = (date, start, end) => {
    const year = date.getFullYear();
    if (start !== null && year === start.getFullYear()) {
      return true;
    }
    if (end !== null && year === end.getFullYear()) {
      return true;
    }
    return false;
  };

  /**
   * Checks if a year is within a specified range.
   * @param date - The date representing the year.
   * @param start - Start date.
   * @param end - End date.
   * @returns True if the year's value lies between start's year and end's year, false otherwise.
   */
  const isYearInRange = (date, start, end) => {
    const year = date.getFullYear();
    const _start = start ? start.getFullYear() : null;
    const _end = end ? end.getFullYear() : null;
    return Boolean(_start && _end && _start <= year && year <= _end);
  };

  /**
   * Removes the time component from a Date object.
   * @param date - The original date.
   * @returns A new Date object with the time set to 00:00:00.
   */
  const removeTimeFromDate = date => {
    const clearedDate = new Date(date);
    clearedDate.setHours(0, 0, 0, 0);
    return clearedDate;
  };

  /**
   * Copies the time (hours, minutes, seconds, milliseconds) from one Date to another.
   *
   * @param {Date} target - The date whose time will be updated.
   * @param {Date | null} source - The date to copy the time from.
   * @returns {Date} A new Date instance with the date from `target` and time from `source`.
   */
  const setTimeFromDate = (target, source) => {
    if (target === null) {
      return null;
    }
    if (!(source instanceof Date)) {
      return target;
    }
    const result = new Date(target); // create a copy to avoid mutation
    result.setHours(source.getHours(), source.getMinutes(), source.getSeconds(), source.getMilliseconds());
    return result;
  };

  /**
   * Parses a year string with smart 2-digit handling.
   * @param yearString - The year string to parse.
   * @returns The parsed year as a number with intelligent century assignment.
   */
  const parseYearSmart = yearString => {
    let parsedYear = Number.parseInt(yearString, 10);

    // Handle 2-digit years with intelligent century assignment
    if (parsedYear < 100) {
      const currentYear = new Date().getFullYear();
      const currentCentury = Math.floor(currentYear / 100) * 100;
      parsedYear = currentCentury + parsedYear;

      // If the result is more than 50 years in the future, use previous century
      // This creates a sliding window: for current year 2025, years 76-99 become 1976-1999
      // and years 00-75 become 2000-2075
      if (parsedYear > currentYear + 50) {
        parsedYear -= 100;
      }
    }
    return parsedYear;
  };

  /**
   * Creates a date from year groups.
   * @param groups - The year groups containing year string.
   * @returns A Date object for January 1st of the year.
   */
  const createDateFromYear = groups => {
    const {
      year
    } = groups;
    const parsedYear = parseYearSmart(year);
    return new Date(parsedYear, 0, 1);
  };

  /* eslint-disable complexity, indent, multiline-ternary, @stylistic/multiline-ternary */
  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO calendar.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$u = 'calendar';
  const DATA_KEY$p = 'coreui.calendar';
  const EVENT_KEY$q = `.${DATA_KEY$p}`;
  const DATA_API_KEY$l = '.data-api';
  const DISALLOWED_ATTRIBUTES$4 = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const ARROW_UP_KEY$5 = 'ArrowUp';
  const ARROW_RIGHT_KEY$5 = 'ArrowRight';
  const ARROW_DOWN_KEY$5 = 'ArrowDown';
  const ARROW_LEFT_KEY$5 = 'ArrowLeft';
  const ENTER_KEY$3 = 'Enter';
  const SPACE_KEY$2 = 'Space';
  const EVENT_BLUR = `blur${EVENT_KEY$q}`;
  const EVENT_CALENDAR_DATE_CHANGE = `calendarDateChange${EVENT_KEY$q}`;
  const EVENT_CALENDAR_MOUSE_LEAVE = `calendarMouseleave${EVENT_KEY$q}`;
  const EVENT_CALENDAR_VIEW_CHANGE = `calendarViewChange${EVENT_KEY$q}`;
  const EVENT_CELL_HOVER = `cellHover${EVENT_KEY$q}`;
  const EVENT_END_DATE_CHANGE$1 = `endDateChange${EVENT_KEY$q}`;
  const EVENT_FOCUS$1 = `focus${EVENT_KEY$q}`;
  const EVENT_KEYDOWN$8 = `keydown${EVENT_KEY$q}`;
  const EVENT_SELECT_END_CHANGE = `selectEndChange${EVENT_KEY$q}`;
  const EVENT_START_DATE_CHANGE$1 = `startDateChange${EVENT_KEY$q}`;
  const EVENT_MOUSEENTER$3 = `mouseenter${EVENT_KEY$q}`;
  const EVENT_MOUSELEAVE$3 = `mouseleave${EVENT_KEY$q}`;
  const EVENT_LOAD_DATA_API$e = `load${EVENT_KEY$q}${DATA_API_KEY$l}`;
  const EVENT_CLICK_DATA_API$g = `click${EVENT_KEY$q}${DATA_API_KEY$l}`;
  const CLASS_NAME_CALENDAR_CELL = 'calendar-cell';
  const CLASS_NAME_CALENDAR_CELL_INNER = 'calendar-cell-inner';
  const CLASS_NAME_CALENDAR_ROW = 'calendar-row';
  const CLASS_NAME_CALENDARS$1 = 'calendars';
  const CLASS_NAME_SHOW_WEEK_NUMBERS = 'show-week-numbers';
  const SELECTOR_BTN_DOUBLE_NEXT = '.btn-double-next';
  const SELECTOR_BTN_DOUBLE_PREV = '.btn-double-prev';
  const SELECTOR_BTN_MONTH = '.btn-month';
  const SELECTOR_BTN_NEXT = '.btn-next';
  const SELECTOR_BTN_PREV = '.btn-prev';
  const SELECTOR_BTN_YEAR = '.btn-year';
  const SELECTOR_CALENDAR$1 = '.calendar';
  const SELECTOR_CALENDAR_CELL = '.calendar-cell';
  const SELECTOR_CALENDAR_CELL_CLICKABLE = `${SELECTOR_CALENDAR_CELL}[tabindex="0"]`;
  const SELECTOR_CALENDAR_ROW = '.calendar-row';
  const SELECTOR_CALENDAR_ROW_CLICKABLE = `${SELECTOR_CALENDAR_ROW}[tabindex="0"]`;
  const SELECTOR_DATA_TOGGLE$g = '[data-coreui-toggle="calendar"]';
  const Default$s = {
    allowList: DefaultAllowlist,
    ariaNavNextMonthLabel: 'Next month',
    ariaNavNextYearLabel: 'Next year',
    ariaNavPrevMonthLabel: 'Previous month',
    ariaNavPrevYearLabel: 'Previous year',
    calendarDate: null,
    calendars: 1,
    dayFormat: 'numeric',
    disabledDates: null,
    endDate: null,
    firstDayOfWeek: 1,
    locale: 'default',
    maxDate: null,
    minDate: null,
    monthFormat: 'short',
    range: false,
    renderDayCell: null,
    renderMonthCell: null,
    renderQuarterCell: null,
    renderYearCell: null,
    sanitize: true,
    sanitizeFn: null,
    selectAdjacementDays: false,
    selectEndDate: false,
    selectionType: 'day',
    showAdjacementDays: true,
    showWeekNumber: false,
    startDate: null,
    weekdayFormat: 2,
    weekNumbersLabel: null,
    yearFormat: 'numeric'
  };
  const DefaultType$s = {
    allowList: 'object',
    ariaNavNextMonthLabel: 'string',
    ariaNavNextYearLabel: 'string',
    ariaNavPrevMonthLabel: 'string',
    ariaNavPrevYearLabel: 'string',
    calendarDate: '(date|number|string|null)',
    calendars: 'number',
    dayFormat: 'string',
    disabledDates: '(array|date|function|null)',
    endDate: '(date|number|string|null)',
    firstDayOfWeek: 'number',
    locale: 'string',
    maxDate: '(date|number|string|null)',
    minDate: '(date|number|string|null)',
    monthFormat: 'string',
    range: 'boolean',
    renderDayCell: '(function|null)',
    renderMonthCell: '(function|null)',
    renderQuarterCell: '(function|null)',
    renderYearCell: '(function|null)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selectAdjacementDays: 'boolean',
    selectEndDate: 'boolean',
    selectionType: 'string',
    showAdjacementDays: 'boolean',
    showWeekNumber: 'boolean',
    startDate: '(date|number|string|null)',
    weekdayFormat: '(number|string)',
    weekNumbersLabel: '(string|null)',
    yearFormat: 'string'
  };

  /**
   * Class definition
   */

  class Calendar extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._initializeDates();
      this._initializeView();
      this._createCalendar();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$s;
    }
    static get DefaultType() {
      return DefaultType$s;
    }
    static get NAME() {
      return NAME$u;
    }

    // Public
    update(config) {
      this._config = this._getConfig(config);
      this._initializeDates();
      this._initializeView();

      // Clear the current calendar content
      this._element.innerHTML = '';
      this._createCalendar();
    }
    refresh() {
      // Clear the current calendar content
      this._element.innerHTML = '';
      this._createCalendar();
    }

    // Private
    _focusOnFirstAvailableCell() {
      const cell = SelectorEngine.findOne(SELECTOR_CALENDAR_CELL_CLICKABLE, this._element);
      if (cell) {
        cell.focus();
      }
    }
    _getDate(target) {
      if (this._config.selectionType === 'week') {
        const firstCell = SelectorEngine.findOne(SELECTOR_CALENDAR_CELL, target.closest(SELECTOR_CALENDAR_ROW));
        return new Date(Manipulator.getDataAttribute(firstCell, 'date'));
      }
      return new Date(Manipulator.getDataAttribute(target, 'date'));
    }
    _handleCalendarClick(event) {
      const target = event.target.closest(SELECTOR_CALENDAR_CELL);
      const date = this._getDate(target);
      const cloneDate = new Date(date);
      const index = Manipulator.getDataAttribute(target.closest(SELECTOR_CALENDAR$1), 'calendar-index');
      if (this._view === 'days') {
        this._setCalendarDate(index ? new Date(cloneDate.setMonth(cloneDate.getMonth() - index)) : date);
      }
      if (this._view === 'months' && this._config.selectionType !== 'month') {
        this._setCalendarDate(index ? new Date(cloneDate.setMonth(cloneDate.getMonth() - index)) : date, 'days');
        this._setCalendarView('days', 'cellClick');
        this._updateCalendar(this._focusOnFirstAvailableCell.bind(this));
        return;
      }
      if (this._view === 'years' && this._config.selectionType !== 'year') {
        this._setCalendarDate(index ? new Date(cloneDate.setFullYear(cloneDate.getFullYear() - index)) : date, 'months');
        this._setCalendarView(this._config.selectionType === 'quarter' ? 'quarters' : 'months', 'cellClick');
        this._updateCalendar(this._focusOnFirstAvailableCell.bind(this));
        return;
      }

      // Allow to change the calendarDate but not startDate or endDate
      if (isDateDisabled(date, this._minDate, this._maxDate, this._config.disabledDates)) {
        return;
      }
      this._hoverDate = null;
      this._selectDate(date);
      this._updateClassNamesAndAriaLabels();
    }
    _handleCalendarKeydown(event) {
      const date = this._getDate(event.target);
      if (event.code === SPACE_KEY$2 || event.key === ENTER_KEY$3) {
        event.preventDefault();
        this._handleCalendarClick(event);
      }
      if (event.key === ARROW_RIGHT_KEY$5 || event.key === ARROW_LEFT_KEY$5 || event.key === ARROW_UP_KEY$5 || event.key === ARROW_DOWN_KEY$5) {
        event.preventDefault();
        if (this._maxDate && date >= convertToDateObject(this._maxDate, this._config.selectionType) && (event.key === ARROW_RIGHT_KEY$5 || event.key === ARROW_DOWN_KEY$5)) {
          return;
        }
        if (this._minDate && date <= convertToDateObject(this._minDate, this._config.selectionType) && (event.key === ARROW_LEFT_KEY$5 || event.key === ARROW_UP_KEY$5)) {
          return;
        }
        let element = event.target;
        if (this._config.selectionType === 'week' && element.tabIndex === -1) {
          element = element.closest(SELECTOR_CALENDAR_ROW_CLICKABLE);
        }
        const list = SelectorEngine.find(this._config.selectionType === 'week' ? SELECTOR_CALENDAR_ROW_CLICKABLE : SELECTOR_CALENDAR_CELL_CLICKABLE, this._element);
        const index = list.indexOf(element);
        const first = index === 0;
        const last = index === list.length - 1;
        const toBoundary = {
          start: index,
          end: list.length - (index + 1)
        };
        const gap = {
          ArrowRight: 1,
          ArrowLeft: -1,
          ArrowUp: this._config.selectionType === 'week' && this._view === 'days' ? -1 : this._view === 'days' ? -7 : -3,
          ArrowDown: this._config.selectionType === 'week' && this._view === 'days' ? 1 : this._view === 'days' ? 7 : 3
        };
        if (event.key === ARROW_RIGHT_KEY$5 && last || event.key === ARROW_DOWN_KEY$5 && toBoundary.end < gap.ArrowDown || event.key === ARROW_LEFT_KEY$5 && first || event.key === ARROW_UP_KEY$5 && toBoundary.start < Math.abs(gap.ArrowUp)) {
          const callback = key => {
            const _list = SelectorEngine.find(`${SELECTOR_CALENDAR_CELL_CLICKABLE}, ${SELECTOR_CALENDAR_ROW_CLICKABLE}`, this._element);
            if (_list.length && key === ARROW_RIGHT_KEY$5) {
              _list[0].focus();
            }
            if (_list.length && key === ARROW_LEFT_KEY$5) {
              _list[_list.length - 1].focus();
            }
            if (_list.length && key === ARROW_DOWN_KEY$5) {
              _list[gap.ArrowDown - (list.length - index)].focus();
            }
            if (_list.length && key === ARROW_UP_KEY$5) {
              _list[_list.length - (Math.abs(gap.ArrowUp) + 1 - (index + 1))].focus();
            }
          };
          if (this._view === 'days') {
            this._modifyCalendarDate(0, event.key === ARROW_RIGHT_KEY$5 || event.key === ARROW_DOWN_KEY$5 ? 1 : -1, callback.bind(this, event.key));
          }
          if (this._view === 'months' || this._view === 'quarters') {
            this._modifyCalendarDate(event.key === ARROW_RIGHT_KEY$5 || event.key === ARROW_DOWN_KEY$5 ? 1 : -1, 0, callback.bind(this, event.key));
          }
          if (this._view === 'years') {
            this._modifyCalendarDate(event.key === ARROW_RIGHT_KEY$5 || event.key === ARROW_DOWN_KEY$5 ? 10 : -10, 0, callback.bind(this, event.key));
          }
          return;
        }
        if (list[index + gap[event.key]].tabIndex === 0) {
          list[index + gap[event.key]].focus();
          return;
        }
        for (let i = index; i < list.length; event.key === ARROW_RIGHT_KEY$5 || event.key === ARROW_DOWN_KEY$5 ? i++ : i--) {
          if (list[i + gap[event.key]].tabIndex === 0) {
            list[i + gap[event.key]].focus();
            break;
          }
        }
      }
    }
    _handleCalendarMouseEnter(event) {
      const target = event.target.closest(SELECTOR_CALENDAR_CELL);
      const date = this._getDate(target);
      if (isDateDisabled(date, this._minDate, this._maxDate, this._config.disabledDates)) {
        return;
      }
      this._hoverDate = setTimeFromDate(date, this._selectEndDate ? this._endDate : this._startDate);
      EventHandler.trigger(this._element, EVENT_CELL_HOVER, {
        date: getDateBySelectionType(this._hoverDate, this._config.selectionType)
      });
      this._updateClassNamesAndAriaLabels();
    }
    _handleCalendarMouseLeave() {
      this._hoverDate = null;
      EventHandler.trigger(this._element, EVENT_CELL_HOVER, {
        date: null
      });
      this._updateClassNamesAndAriaLabels();
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$g, SELECTOR_CALENDAR_CELL_CLICKABLE, event => {
        this._handleCalendarClick(event);
      });
      EventHandler.on(this._element, EVENT_KEYDOWN$8, SELECTOR_CALENDAR_CELL_CLICKABLE, event => {
        this._handleCalendarKeydown(event);
      });
      EventHandler.on(this._element, EVENT_MOUSEENTER$3, SELECTOR_CALENDAR_CELL_CLICKABLE, event => {
        this._handleCalendarMouseEnter(event);
      });
      EventHandler.on(this._element, EVENT_MOUSELEAVE$3, SELECTOR_CALENDAR_CELL_CLICKABLE, () => {
        this._handleCalendarMouseLeave();
      });
      EventHandler.on(this._element, EVENT_FOCUS$1, SELECTOR_CALENDAR_CELL_CLICKABLE, event => {
        this._handleCalendarMouseEnter(event);
      });
      EventHandler.on(this._element, EVENT_BLUR, SELECTOR_CALENDAR_CELL_CLICKABLE, () => {
        this._handleCalendarMouseLeave();
      });
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$g, SELECTOR_CALENDAR_ROW_CLICKABLE, event => {
        this._handleCalendarClick(event);
      });
      EventHandler.on(this._element, EVENT_KEYDOWN$8, SELECTOR_CALENDAR_ROW_CLICKABLE, event => {
        this._handleCalendarKeydown(event);
      });
      EventHandler.on(this._element, EVENT_MOUSEENTER$3, SELECTOR_CALENDAR_ROW_CLICKABLE, event => {
        this._handleCalendarMouseEnter(event);
      });
      EventHandler.on(this._element, EVENT_MOUSELEAVE$3, SELECTOR_CALENDAR_ROW_CLICKABLE, () => {
        this._handleCalendarMouseLeave();
      });
      EventHandler.on(this._element, EVENT_FOCUS$1, SELECTOR_CALENDAR_ROW_CLICKABLE, event => {
        this._handleCalendarMouseEnter(event);
      });
      EventHandler.on(this._element, EVENT_BLUR, SELECTOR_CALENDAR_ROW_CLICKABLE, () => {
        this._handleCalendarMouseLeave();
      });

      // Navigation
      this._addNavigationEventListeners();
      EventHandler.on(this._element, EVENT_MOUSELEAVE$3, 'table', () => {
        EventHandler.trigger(this._element, EVENT_CALENDAR_MOUSE_LEAVE);
      });
    }
    _addNavigationEventListeners() {
      const navigationSelectors = {
        [SELECTOR_BTN_PREV]: () => this._modifyCalendarDate(0, -1),
        [SELECTOR_BTN_DOUBLE_PREV]: () => this._modifyCalendarDate(this._view === 'years' ? -10 : -1),
        [SELECTOR_BTN_NEXT]: () => this._modifyCalendarDate(0, 1),
        [SELECTOR_BTN_DOUBLE_NEXT]: () => this._modifyCalendarDate(this._view === 'years' ? 10 : 1),
        [SELECTOR_BTN_MONTH]: () => {
          this._setCalendarView('months', 'navigation');
          this._updateCalendar();
        },
        [SELECTOR_BTN_YEAR]: () => {
          this._setCalendarView('years', 'navigation');
          this._updateCalendar();
        }
      };
      for (const [selector, handler] of Object.entries(navigationSelectors)) {
        EventHandler.on(this._element, EVENT_CLICK_DATA_API$g, selector, event => {
          event.preventDefault();
          const selectors = SelectorEngine.find(selector, this._element);
          const selectorIndex = selectors.indexOf(event.target.closest(selector));
          handler();

          // Retrieve focus to the navigation element
          const _selectors = SelectorEngine.find(selector, this._element);
          if (_selectors && _selectors[selectorIndex]) {
            _selectors[selectorIndex].focus();
          }
        });
      }
    }
    _setCalendarDate(date, view = this._view) {
      this._calendarDate = date;
      EventHandler.trigger(this._element, EVENT_CALENDAR_DATE_CHANGE, {
        date,
        view
      });
    }
    _setCalendarView(view, source) {
      this._view = view;
      EventHandler.trigger(this._element, EVENT_CALENDAR_VIEW_CHANGE, {
        view,
        source
      });
    }
    _modifyCalendarDate(years, months = 0, callback) {
      const year = this._calendarDate.getFullYear();
      const month = this._calendarDate.getMonth();
      const d = new Date(year, month, 1);
      if (years) {
        d.setFullYear(d.getFullYear() + years);
      }
      if (months) {
        d.setMonth(d.getMonth() + months);
      }
      this._calendarDate = d;
      EventHandler.trigger(this._element, EVENT_CALENDAR_DATE_CHANGE, {
        date: d,
        view: this._view
      });
      this._updateCalendar(callback);
    }
    _setEndDate(date) {
      this._endDate = setTimeFromDate(date, this._endDate);
      EventHandler.trigger(this._element, EVENT_END_DATE_CHANGE$1, {
        date: getDateBySelectionType(this._endDate, this._config.selectionType)
      });
    }
    _setStartDate(date) {
      this._startDate = setTimeFromDate(date, this._startDate);
      EventHandler.trigger(this._element, EVENT_START_DATE_CHANGE$1, {
        date: getDateBySelectionType(this._startDate, this._config.selectionType)
      });
    }
    _setSelectEndDate(value) {
      this._selectEndDate = value;
      EventHandler.trigger(this._element, EVENT_SELECT_END_CHANGE, {
        value
      });
    }
    _selectDate(date) {
      if (isDateDisabled(date, this._minDate, this._maxDate, this._config.disabledDates)) {
        return;
      }
      if (this._config.range) {
        if (this._selectEndDate) {
          if (this._startDate && this._startDate > date) {
            this._setStartDate(date);
            this._setEndDate(null);
            return;
          }
          this._setSelectEndDate(false);
          if (isDisableDateInRange(this._startDate, date, this._config.disabledDates)) {
            this._setStartDate(null);
            this._setEndDate(null);
            return;
          }
          this._setEndDate(date);
          return;
        }
        if (this._endDate && this._endDate < date) {
          this._setStartDate(date);
          this._setEndDate(null);
          this._setSelectEndDate(true);
          return;
        }
        if (isDisableDateInRange(date, this._endDate, this._config.disabledDates)) {
          this._setStartDate(null);
          this._setEndDate(null);
          return;
        }
        this._setSelectEndDate(true);
        this._setStartDate(date);
        return;
      }
      this._setStartDate(date);
    }
    _createCalendarPanel(order) {
      var _this$_config$weekNum;
      const calendarDate = getCalendarDate(this._calendarDate, order, this._view);
      const year = calendarDate.getFullYear();
      const month = calendarDate.getMonth();
      const calendarPanelEl = document.createElement('div');
      calendarPanelEl.classList.add('calendar');
      Manipulator.setDataAttribute(calendarPanelEl, 'calendar-index', order);

      // Create navigation
      const navigationElement = document.createElement('div');
      navigationElement.classList.add('calendar-nav');
      navigationElement.innerHTML = `
      <div class="calendar-nav-prev">
        <button type="button" class="calendar-nav-btn btn-double-prev" aria-label="${this._config.ariaNavPrevYearLabel}">
          <span class="calendar-nav-icon calendar-nav-icon-double-prev"></span>
        </button>
        ${this._view === 'days' ? `<button type="button" class="calendar-nav-btn btn-prev" aria-label="${this._config.ariaNavPrevMonthLabel}">
          <span class="calendar-nav-icon calendar-nav-icon-prev"></span>
        </button>` : ''}
      </div>
      <div class="calendar-nav-date" aria-live="polite">
        ${this._view === 'days' ? `<button type="button" class="calendar-nav-btn btn-sm btn-month">
          ${calendarDate.toLocaleDateString(this._config.locale, {
      month: 'long'
    })}
        </button>` : ''}
        <button type="button" class="calendar-nav-btn btn-year">
          ${calendarDate.toLocaleDateString(this._config.locale, {
      year: 'numeric'
    })}
        </button>
      </div>
      <div class="calendar-nav-next">
        ${this._view === 'days' ? `<button type="button" class="calendar-nav-btn btn-next" aria-label="${this._config.ariaNavNextMonthLabel}">
          <span class="calendar-nav-icon calendar-nav-icon-next"></span>
        </button>` : ''}
        <button type="button" class="calendar-nav-btn btn-double-next" aria-label="${this._config.ariaNavNextYearLabel}">
          <span class="calendar-nav-icon calendar-nav-icon-double-next"></span>
        </button>
      </div>
    `;
      const monthDetails = getMonthDetails(year, month, this._config.firstDayOfWeek);
      const listOfMonths = createGroupsInArray(getMonthsNames(this._config.locale, this._config.monthFormat), 4);
      const listOfYears = createGroupsInArray(getYears(calendarDate.getFullYear()), 4);
      const weekDays = monthDetails[0].days;
      const calendarTable = document.createElement('table');
      calendarTable.innerHTML = `
    ${this._view === 'days' ? `
      <thead>
        <tr>
          ${this._config.showWeekNumber ? `<th class="${CLASS_NAME_CALENDAR_CELL}">
              <div class="calendar-header-cell-inner">
               ${(_this$_config$weekNum = this._config.weekNumbersLabel) != null ? _this$_config$weekNum : ''}
              </div>
            </th>` : ''}
          ${weekDays.map(({
      date
    }) => `<th class="${CLASS_NAME_CALENDAR_CELL}" abbr="${date.toLocaleDateString(this._config.locale, {
      weekday: 'long'
    })}">
              <div class="calendar-header-cell-inner">
              ${typeof this._config.weekdayFormat === 'string' ? date.toLocaleDateString(this._config.locale, {
      weekday: this._config.weekdayFormat
    }) : date.toLocaleDateString(this._config.locale, {
      weekday: 'long'
    }).slice(0, this._config.weekdayFormat)}
              </div>
            </th>`).join('')}
        </tr>
      </thead>` : ''}
      <tbody>
        ${this._view === 'days' ? monthDetails.map(({
      week,
      days
    }) => {
      const {
        date
      } = days[0];
      const rowAttributes = this._rowWeekAttributes(date);
      return `<tr 
              class="${rowAttributes.className}"
              tabindex="${rowAttributes.tabIndex}"
              ${rowAttributes.ariaSelected ? 'aria-selected="true"' : ''}
            >
              ${this._config.showWeekNumber ? `<th class="calendar-cell-week-number">${week.number}</td>` : ''}
              ${days.map(({
        date,
        month
      }) => {
        const cellAttributes = this._cellDayAttributes(date, month);
        return month === 'current' || this._config.showAdjacementDays ? `<td 
                    class="${cellAttributes.className}"
                    tabindex="${cellAttributes.tabIndex}"
                    ${cellAttributes.ariaSelected ? 'aria-selected="true"' : ''}
                    data-coreui-date="${date}"
                  >
                    <div class="${CLASS_NAME_CALENDAR_CELL_INNER} day">
                      ${this._config.renderDayCell ? this._sanitizeHtml(this._config.renderDayCell(date, cellAttributes.meta)) : date.toLocaleDateString(this._config.locale, {
          day: this._config.dayFormat
        })}
                    </div>
                  </td>` : '<td></td>';
      }).join('')}</tr>`;
    }).join('') : ''}
        ${this._view === 'months' ? listOfMonths.map((row, index) => `<tr>
            ${row.map((month, idx) => {
      const date = new Date(calendarDate.getFullYear(), index * 3 + idx, 1);
      const cellAttributes = this._cellMonthAttributes(date);
      return `<td
                  class="${cellAttributes.className}"
                  tabindex="${cellAttributes.tabIndex}"
                  ${cellAttributes.ariaSelected ? 'aria-selected="true"' : ''}
                  data-coreui-date="${date.toDateString()}"
                >
                  <div class="${CLASS_NAME_CALENDAR_CELL_INNER} month">
                    ${this._config.renderMonthCell ? this._sanitizeHtml(this._config.renderMonthCell(date, cellAttributes.meta)) : month}
                  </div>
                </td>`;
    }).join('')}
          </tr>`).join('') : ''}
        ${this._view === 'quarters' ? `<tr>
            ${Array.from({
      length: 4
    }, (_, index) => {
      const date = new Date(calendarDate.getFullYear(), index * 3, 1);
      const cellAttributes = this._cellQuarterAttributes(date);
      return `<td
                  class="${cellAttributes.className}"
                  tabindex="${cellAttributes.tabIndex}"
                  ${cellAttributes.ariaSelected ? 'aria-selected="true"' : ''}
                  data-coreui-date="${date.toDateString()}"
                >
                  <div class="${CLASS_NAME_CALENDAR_CELL_INNER} quarter">
                    ${this._config.renderQuarterCell ? this._sanitizeHtml(this._config.renderQuarterCell(date, cellAttributes.meta)) : `Q${index + 1}`}
                  </div>
                </td>`;
    }).join('')}
          </tr>` : ''}
        ${this._view === 'years' ? listOfYears.map(row => `<tr>
            ${row.map(year => {
      const date = new Date(year, 0, 1);
      const cellAttributes = this._cellYearAttributes(date);
      return `<td
                  class="${cellAttributes.className}"
                  tabindex="${cellAttributes.tabIndex}"
                  ${cellAttributes.ariaSelected ? 'aria-selected="true"' : ''}
                  data-coreui-date="${date.toDateString()}"
                >
                  <div class="${CLASS_NAME_CALENDAR_CELL_INNER} year">
                    ${this._config.renderYearCell ? this._sanitizeHtml(this._config.renderYearCell(date, cellAttributes.meta)) : date.toLocaleDateString(this._config.locale, {
        year: this._config.yearFormat
      })}
                  </div>
                </td>`;
    }).join('')}
          </tr>`).join('') : ''}
      </tbody>
    `;
      calendarPanelEl.append(navigationElement, calendarTable);
      return calendarPanelEl;
    }
    _createCalendar() {
      if (this._config.selectionType && this._view === 'days') {
        this._element.classList.add(`select-${this._config.selectionType}`);
      }
      if (this._config.showWeekNumber) {
        this._element.classList.add(CLASS_NAME_SHOW_WEEK_NUMBERS);
      }
      for (const [index, _] of Array.from({
        length: this._config.calendars
      }).entries()) {
        this._element.append(this._createCalendarPanel(index));
      }
      this._element.classList.add(CLASS_NAME_CALENDARS$1);
    }
    _initializeDates() {
      // Convert dates to date objects based on the selection type
      this._calendarDate = convertToDateObject(this._config.calendarDate || this._config.startDate || this._config.endDate, this._config.selectionType) || new Date();
      this._startDate = convertToDateObject(this._config.startDate, this._config.selectionType);
      this._endDate = convertToDateObject(this._config.endDate, this._config.selectionType);
      this._minDate = convertToDateObject(this._config.minDate, this._config.selectionType);
      this._maxDate = convertToDateObject(this._config.maxDate, this._config.selectionType);
      this._hoverDate = null;
      this._selectEndDate = this._config.selectEndDate;
    }
    _initializeView() {
      const viewMap = {
        day: 'days',
        week: 'days',
        month: 'months',
        quarter: 'quarters',
        year: 'years'
      };
      this._view = viewMap[this._config.selectionType] || 'days';
    }
    _updateCalendar(callback) {
      this._element.innerHTML = '';
      this._createCalendar();
      if (callback) {
        setTimeout(callback, 1);
      }
    }
    _updateClassNamesAndAriaLabels() {
      if (this._config.selectionType === 'week') {
        const rows = SelectorEngine.find(SELECTOR_CALENDAR_ROW, this._element);
        for (const row of rows) {
          const firstCell = SelectorEngine.findOne(SELECTOR_CALENDAR_CELL, row);
          const date = new Date(Manipulator.getDataAttribute(firstCell, 'date'));
          const rowAttributes = this._rowWeekAttributes(date);
          row.className = rowAttributes.className;
          row.tabIndex = rowAttributes.tabIndex;
          if (rowAttributes.ariaSelected) {
            row.setAttribute('aria-selected', true);
          } else {
            row.removeAttribute('aria-selected');
          }
        }
        return;
      }
      const cells = SelectorEngine.find(SELECTOR_CALENDAR_CELL_CLICKABLE, this._element);
      for (const cell of cells) {
        const date = new Date(Manipulator.getDataAttribute(cell, 'date'));
        let cellAttributes;
        switch (this._view) {
          case 'days':
            {
              cellAttributes = this._cellDayAttributes(date, 'current');
              break;
            }
          case 'months':
            {
              cellAttributes = this._cellMonthAttributes(date);
              break;
            }
          case 'quarters':
            {
              cellAttributes = this._cellQuarterAttributes(date);
              break;
            }
          default:
            {
              cellAttributes = this._cellYearAttributes(date);
            }
        }
        cell.className = cellAttributes.className;
        cell.tabIndex = cellAttributes.tabIndex;
        if (cellAttributes.ariaSelected) {
          cell.setAttribute('aria-selected', true);
        } else {
          cell.removeAttribute('aria-selected');
        }
      }
    }
    _classNames(classNames) {
      return Object.entries(classNames).filter(([_, value]) => Boolean(value)).map(([key]) => key).join(' ');
    }
    _cellDayAttributes(date, month) {
      const isCurrentMonth = month === 'current';
      const isDisabled = isDateDisabled(date, this._minDate, this._maxDate, this._config.disabledDates);
      const isSelected = isDateSelected(date, this._startDate, this._endDate);
      const isTodayDate = isToday(date);
      if (this._config.selectionType !== 'day' || this._view !== 'days') {
        return {
          className: this._classNames({
            [CLASS_NAME_CALENDAR_CELL]: true,
            today: isTodayDate,
            [month]: true
          }),
          tabIndex: -1,
          ariaSelected: false
        };
      }
      const isInRange = isCurrentMonth && isDateInRange(date, this._startDate, this._endDate);
      const isRangeHover = isCurrentMonth && this._hoverDate && (this._selectEndDate ? isDateInRange(date, this._startDate, this._hoverDate) : isDateInRange(date, this._hoverDate, this._endDate));
      const classNames = this._classNames({
        [CLASS_NAME_CALENDAR_CELL]: true,
        clickable: !isCurrentMonth && this._config.selectAdjacementDays,
        disabled: isDisabled,
        range: isInRange,
        'range-hover': isRangeHover,
        selected: isSelected,
        today: isTodayDate,
        [month]: true
      });
      return {
        className: classNames,
        tabIndex: (isCurrentMonth || this._config.selectAdjacementDays) && !isDisabled ? 0 : -1,
        ariaSelected: isSelected,
        meta: {
          isDisabled,
          isInCurrentMonth: isCurrentMonth,
          isInRange,
          isSelected,
          isToday: isTodayDate
        }
      };
    }
    _cellMonthAttributes(date) {
      const isDisabled = isMonthDisabled(date, this._minDate, this._maxDate, this._config.disabledDates);
      const isSelected = isMonthSelected(date, this._startDate, this._endDate);
      const isInRange = isMonthInRange(date, this._startDate, this._endDate);
      const isRangeHover = this._config.selectionType === 'month' && this._hoverDate && (this._selectEndDate ? isMonthInRange(date, this._startDate, this._hoverDate) : isMonthInRange(date, this._hoverDate, this._endDate));
      const classNames = this._classNames({
        [CLASS_NAME_CALENDAR_CELL]: true,
        disabled: isDisabled,
        'range-hover': isRangeHover,
        range: isInRange,
        selected: isSelected
      });
      return {
        className: classNames,
        tabIndex: isDisabled ? -1 : 0,
        ariaSelected: isSelected,
        meta: {
          isDisabled,
          isInRange,
          isSelected
        }
      };
    }
    _cellQuarterAttributes(date) {
      const isDisabled = isQuarterDisabled(date, this._minDate, this._maxDate, this._config.disabledDates);
      const isSelected = isQuarterSelected(date, this._startDate, this._endDate);
      const isInRange = isQuarterInRange(date, this._startDate, this._endDate);
      const isRangeHover = this._config.selectionType === 'quarter' && this._hoverDate && (this._selectEndDate ? isQuarterInRange(date, this._startDate, this._hoverDate) : isQuarterInRange(date, this._hoverDate, this._endDate));
      const classNames = this._classNames({
        [CLASS_NAME_CALENDAR_CELL]: true,
        disabled: isDisabled,
        'range-hover': isRangeHover,
        range: isInRange,
        selected: isSelected
      });
      return {
        className: classNames,
        tabIndex: isDisabled ? -1 : 0,
        ariaSelected: isSelected,
        meta: {
          isDisabled,
          isInRange,
          isSelected
        }
      };
    }
    _cellYearAttributes(date) {
      const isDisabled = isYearDisabled(date, this._minDate, this._maxDate, this._config.disabledDates);
      const isSelected = isYearSelected(date, this._startDate, this._endDate);
      const isInRange = isYearInRange(date, this._startDate, this._endDate);
      const isRangeHover = this._config.selectionType === 'year' && this._hoverDate && (this._selectEndDate ? isYearInRange(date, this._startDate, this._hoverDate) : isYearInRange(date, this._hoverDate, this._endDate));
      const classNames = this._classNames({
        [CLASS_NAME_CALENDAR_CELL]: true,
        disabled: isDisabled,
        'range-hover': isRangeHover,
        range: isInRange,
        selected: isSelected
      });
      return {
        className: classNames,
        tabIndex: isDisabled ? -1 : 0,
        ariaSelected: isSelected,
        meta: {
          isDisabled,
          isInRange,
          isSelected
        }
      };
    }
    _rowWeekAttributes(date) {
      if (this._config.selectionType !== 'week') {
        return {
          className: this._classNames({
            [CLASS_NAME_CALENDAR_ROW]: true
          }),
          tabIndex: -1,
          ariaSelected: false
        };
      }
      const isDisabled = isDateDisabled(date, this._minDate, this._maxDate, this._config.disabledDates);
      const isSelected = isDateSelected(date, this._startDate, this._endDate);
      const isInRange = isDateInRange(date, this._startDate, this._endDate);
      const isRangeHover = this._hoverDate && (this._selectEndDate ? isYearInRange(date, this._startDate, this._hoverDate) : isYearInRange(date, this._hoverDate, this._endDate));
      const classNames = this._classNames({
        [CLASS_NAME_CALENDAR_ROW]: true,
        disabled: isDisabled,
        range: isInRange,
        'range-hover': isRangeHover,
        selected: isSelected
      });
      return {
        className: classNames,
        tabIndex: isDisabled ? -1 : 0,
        ariaSelected: isSelected
      };
    }
    _sanitizeHtml(html) {
      if (this._config.sanitize) {
        return sanitizeHtml(html, this._config.allowList, this._config.sanitizeFn);
      }
      return html;
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES$4.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static

    static calendarInterface(element, config) {
      const data = Calendar.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Calendar.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$e, () => {
    for (const element of Array.from(document.querySelectorAll(SELECTOR_DATA_TOGGLE$g))) {
      Calendar.calendarInterface(element);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Calendar);

  /**
   * --------------------------------------------------------------------------
   * CoreUI util/swipe.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's util/swipe.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$t = 'swipe';
  const EVENT_KEY$p = '.coreui.swipe';
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$p}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$p}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$p}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$p}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$p}`;
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SWIPE_THRESHOLD = 40;
  const Default$r = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const DefaultType$r = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
  };

  /**
   * Class definition
   */

  class Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }

    // Getters
    static get Default() {
      return Default$r;
    }
    static get DefaultType() {
      return DefaultType$r;
    }
    static get NAME() {
      return NAME$t;
    }

    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$p);
    }

    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }

    // Static
    static isSupported() {
      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI carousel.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$s = 'carousel';
  const DATA_KEY$o = 'coreui.carousel';
  const EVENT_KEY$o = `.${DATA_KEY$o}`;
  const DATA_API_KEY$k = '.data-api';
  const ARROW_LEFT_KEY$4 = 'ArrowLeft';
  const ARROW_RIGHT_KEY$4 = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const EVENT_SLIDE = `slide${EVENT_KEY$o}`;
  const EVENT_SLID = `slid${EVENT_KEY$o}`;
  const EVENT_KEYDOWN$7 = `keydown${EVENT_KEY$o}`;
  const EVENT_MOUSEENTER$2 = `mouseenter${EVENT_KEY$o}`;
  const EVENT_MOUSELEAVE$2 = `mouseleave${EVENT_KEY$o}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$o}`;
  const EVENT_LOAD_DATA_API$d = `load${EVENT_KEY$o}${DATA_API_KEY$k}`;
  const EVENT_CLICK_DATA_API$f = `click${EVENT_KEY$o}${DATA_API_KEY$k}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE$7 = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_DATA_SLIDE = '[data-coreui-slide], [data-coreui-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-coreui-ride="carousel"]';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$4]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$4]: DIRECTION_LEFT
  };
  const Default$q = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  const DefaultType$q = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
  };

  /**
   * Class definition
   */

  class Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }

    // Getters
    static get Default() {
      return Default$q;
    }
    static get DefaultType() {
      return DefaultType$q;
    }
    static get NAME() {
      return NAME$s;
    }

    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      // FIXME TODO use `document.visibilityState`
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }

    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$7, event => this._keydown(event));
      }
      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER$2, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$2, () => this._maybeEnableCycle());
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== 'hover') {
          return;
        }

        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling

        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$7);
      activeIndicator.removeAttribute('aria-current');
      const newActiveIndicator = SelectorEngine.findOne(`[data-coreui-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$7);
        newActiveIndicator.setAttribute('aria-current', 'true');
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute('data-coreui-interval'), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = eventName => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        // TODO: change tests that use empty divs to avoid this check
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$7);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$7, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Carousel.getOrCreateInstance(this, config);
        if (typeof config === 'number') {
          data.to(config);
          return;
        }
        if (typeof config === 'string') {
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$f, SELECTOR_DATA_SLIDE, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute('data-coreui-slide-to');
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$d, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Carousel);

  /**
   * --------------------------------------------------------------------------
   * CoreUI chip.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$r = 'chip';
  const DATA_KEY$n = 'coreui.chip';
  const EVENT_KEY$n = `.${DATA_KEY$n}`;
  const DATA_API_KEY$j = '.data-api';
  const EVENT_REMOVE$1 = `remove${EVENT_KEY$n}`;
  const EVENT_REMOVED = `removed${EVENT_KEY$n}`;
  const EVENT_SELECT$1 = `select${EVENT_KEY$n}`;
  const EVENT_SELECTED = `selected${EVENT_KEY$n}`;
  const EVENT_DESELECT = `deselect${EVENT_KEY$n}`;
  const EVENT_DESELECTED = `deselected${EVENT_KEY$n}`;
  const SELECTOR_CHIP_CHECK = '.chip-check';
  const SELECTOR_CHIP_REMOVE$2 = '.chip-remove';
  const SELECTOR_DATA_CHIP = '[data-coreui-chip]';
  const CLASS_NAME_CHIP_CHECK = 'chip-check';
  const CLASS_NAME_CHIP_CLICKABLE = 'chip-clickable';
  const CLASS_NAME_CHIP_REMOVE = 'chip-remove';
  const CLASS_NAME_ACTIVE$6 = 'active';
  const CLASS_NAME_DISABLED$7 = 'disabled';
  const DEFAULT_REMOVE_ICON$1 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>';
  const DEFAULT_SELECTED_ICON$1 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="currentColor"><path d="M425.373 89.373 196 318.745 86.627 209.373l-45.254 45.254L196 409.255l274.627-274.628z"/></svg>';
  const Default$p = {
    ariaRemoveLabel: 'Remove',
    disabled: false,
    filter: false,
    removable: false,
    removeIcon: DEFAULT_REMOVE_ICON$1,
    selectable: false,
    selected: false,
    selectedIcon: DEFAULT_SELECTED_ICON$1
  };
  const DefaultType$p = {
    ariaRemoveLabel: 'string',
    disabled: 'boolean',
    filter: 'boolean',
    removable: 'boolean',
    removeIcon: 'string',
    selectable: 'boolean',
    selected: 'boolean',
    selectedIcon: 'string'
  };

  /**
   * Class definition
   */

  class Chip extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._disabled = this._config.disabled || this._element.classList.contains(CLASS_NAME_DISABLED$7);
      this._selected = this._config.selected || this._element.classList.contains(CLASS_NAME_ACTIVE$6);
      this._ensureRemoveButton();
      this._applyState();
      if (this._config.selectable || this._config.removable) {
        this._makeFocusable();
      }
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$p;
    }
    static get DefaultType() {
      return DefaultType$p;
    }
    static get NAME() {
      return NAME$r;
    }

    // Public
    remove() {
      const removeEvent = EventHandler.trigger(this._element, EVENT_REMOVE$1);
      if (removeEvent.defaultPrevented) {
        return;
      }
      this._destroyElement();
    }
    toggle() {
      if (!this._config.selectable) {
        return;
      }
      if (this._selected) {
        this.deselect();
        return;
      }
      this.select();
    }
    select() {
      if (!this._config.selectable) {
        return;
      }
      if (this._selected) {
        return;
      }
      const selectEvent = EventHandler.trigger(this._element, EVENT_SELECT$1);
      if (selectEvent.defaultPrevented) {
        return;
      }
      this._selected = true;
      this._applyState();
      EventHandler.trigger(this._element, EVENT_SELECTED);
    }
    deselect() {
      if (!this._config.selectable) {
        return;
      }
      if (!this._selected) {
        return;
      }
      const deselectEvent = EventHandler.trigger(this._element, EVENT_DESELECT);
      if (deselectEvent.defaultPrevented) {
        return;
      }
      this._selected = false;
      this._applyState();
      EventHandler.trigger(this._element, EVENT_DESELECTED);
    }

    // Private
    _configAfterMerge(config) {
      // A filter chip is selectable by definition.
      if (config.filter) {
        config.selectable = true;
      }
      return config;
    }
    _addEventListeners() {
      EventHandler.on(this._element, 'keydown', event => this._handleKeydown(event));
      EventHandler.on(this._element, 'click', event => {
        if (this._disabled) {
          return;
        }
        if (event.target.closest(SELECTOR_CHIP_REMOVE$2)) {
          return;
        }
        this.toggle();
      });
      EventHandler.on(this._element, 'click', SELECTOR_CHIP_REMOVE$2, event => {
        event.stopPropagation();
        this.remove();
      });
    }
    _applyState() {
      if (!this._disabled && (this._config.clickable || this._config.selectable)) {
        this._element.classList.add(CLASS_NAME_CHIP_CLICKABLE);
      }
      if (this._disabled) {
        this._element.classList.add(CLASS_NAME_DISABLED$7);
        this._element.setAttribute('aria-disabled', 'true');
      } else {
        this._element.classList.remove(CLASS_NAME_DISABLED$7);
        if (this._element.getAttribute('aria-disabled') === 'true') {
          this._element.setAttribute('aria-disabled', 'false');
        }
      }
      if (this._config.selectable) {
        this._element.classList.toggle(CLASS_NAME_ACTIVE$6, this._selected);
        this._element.setAttribute('aria-selected', this._selected ? 'true' : 'false');
        if (this._config.filter) {
          if (this._selected) {
            this._ensureCheckIcon();
          } else {
            var _SelectorEngine$findO;
            (_SelectorEngine$findO = SelectorEngine.findOne(SELECTOR_CHIP_CHECK, this._element)) == null || _SelectorEngine$findO.remove();
          }
        }
      } else {
        this._element.classList.remove(CLASS_NAME_ACTIVE$6);
        if (this._element.getAttribute('aria-selected') === 'true') {
          this._element.setAttribute('aria-selected', 'false');
        }
      }
    }
    _ensureCheckIcon() {
      if (SelectorEngine.findOne(SELECTOR_CHIP_CHECK, this._element)) {
        return;
      }
      const check = document.createElement('span');
      check.className = CLASS_NAME_CHIP_CHECK;
      check.setAttribute('aria-hidden', 'true');
      check.innerHTML = this._config.selectedIcon;
      this._element.prepend(check);
    }
    _createRemoveButton() {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = CLASS_NAME_CHIP_REMOVE;
      button.setAttribute('aria-label', this._config.ariaRemoveLabel);
      button.setAttribute('tabindex', '-1'); // Not in tab order, chips handle keyboard
      button.innerHTML = this._config.removeIcon;
      return button;
    }
    _ensureRemoveButton() {
      // A disabled chip is not interactive, so it never shows a remove button.
      if (!this._config.removable || this._disabled) {
        return;
      }
      if (SelectorEngine.findOne(SELECTOR_CHIP_REMOVE$2, this._element)) {
        return;
      }
      this._element.append(this._createRemoveButton());
    }
    _makeFocusable() {
      if (this._element.hasAttribute('tabindex') || this._disabled) {
        return;
      }
      this._element.setAttribute('tabindex', '0');
    }
    _handleKeydown(event) {
      const {
        key
      } = event;
      if (this._disabled) {
        return;
      }
      switch (key) {
        case 'Enter':
        case ' ':
        case 'Spacebar':
          {
            if (!this._config.selectable) {
              return;
            }
            event.preventDefault();
            this.toggle();
            break;
          }
        case 'Backspace':
        case 'Delete':
          {
            if (this._config.removable) {
              event.preventDefault();
              this.remove();
            }
            break;
          }

        // No default
      }
    }
    _destroyElement() {
      EventHandler.trigger(this._element, EVENT_REMOVED);
      this._element.remove();
      this.dispose();
    }

    // Static
    static chipInterface(element, config) {
      const data = Chip.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Chip.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, `DOMContentLoaded${EVENT_KEY$n}${DATA_API_KEY$j}`, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_CHIP)) {
      Chip.chipInterface(element);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Chip);

  /**
   * --------------------------------------------------------------------------
   * CoreUI chip-set.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$q = 'chip-set';
  const DATA_KEY$m = 'coreui.chip-set';
  const EVENT_KEY$m = `.${DATA_KEY$m}`;
  const DATA_API_KEY$i = '.data-api';
  const EVENT_ADD = 'add';
  const EVENT_REMOVE = 'remove';
  const EVENT_CHANGE$3 = 'change';
  const EVENT_SELECT = 'select';
  const EVENT_KEYDOWN$6 = 'keydown';
  const EVENT_CHIP_SELECTED = 'selected.coreui.chip';
  const EVENT_CHIP_DESELECTED = 'deselected.coreui.chip';
  const EVENT_CHIP_REMOVE = 'remove.coreui.chip';
  const EVENT_CHIP_REMOVED = 'removed.coreui.chip';
  const SELECTOR_DATA_CHIP_SET = '[data-coreui-chip-set]';
  const SELECTOR_CHIP$1 = '.chip';
  const SELECTOR_CHIP_ACTIVE = `${SELECTOR_CHIP$1}.active`;
  const SELECTOR_CHIP_REMOVE$1 = '.chip-remove';
  const SELECTOR_FOCUSABLE_ITEMS = '.chip:not(.disabled)';
  const CLASS_NAME_CHIP = 'chip';
  const CLASS_NAME_DISABLED$6 = 'disabled';
  const SELECTION_MODE_SINGLE = 'single';
  const DEFAULT_REMOVE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>';
  const DEFAULT_SELECTED_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="currentColor"><path d="M425.373 89.373 196 318.745 86.627 209.373l-45.254 45.254L196 409.255l274.627-274.628z"/></svg>';
  const Default$o = {
    ariaRemoveLabel: 'Remove',
    chipClassName: null,
    disabled: false,
    filter: false,
    maxChips: null,
    removable: false,
    removeIcon: DEFAULT_REMOVE_ICON,
    selectable: false,
    selectedIcon: DEFAULT_SELECTED_ICON,
    selectionMode: 'multiple',
    unique: false
  };
  const DefaultType$o = {
    ariaRemoveLabel: 'string',
    chipClassName: '(string|function|null)',
    disabled: 'boolean',
    filter: 'boolean',
    maxChips: '(number|null)',
    removable: 'boolean',
    removeIcon: 'string',
    selectable: 'boolean',
    selectedIcon: 'string',
    selectionMode: 'string',
    unique: 'boolean'
  };

  /**
   * Class definition
   */

  class ChipSet extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._disabled = this._config.disabled || this._element.classList.contains(CLASS_NAME_DISABLED$6);
      this._pendingFocus = null;
      this._chips = [];
      this._initChips();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$o;
    }
    static get DefaultType() {
      return DefaultType$o;
    }
    static get NAME() {
      return NAME$q;
    }

    // Public
    add(chip) {
      var _this$_input;
      if (!this._canModify()) {
        return null;
      }
      const isElement = typeof chip !== 'string';
      const value = isElement ? this._getChipValue(chip) : String(chip).trim();
      if (!value) {
        return null;
      }
      if (this._config.unique && this._chips.includes(value)) {
        return null;
      }
      if (this._config.maxChips !== null && this._chips.length >= this._config.maxChips) {
        return null;
      }
      const addEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_ADD), {
        value,
        relatedTarget: (_this$_input = this._input) != null ? _this$_input : null
      });
      if (addEvent.defaultPrevented) {
        return null;
      }
      const element = isElement ? chip : this._createChip(value);
      this._appendChip(element);
      this._setupChip(element);
      this._chips.push(value);
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_CHANGE$3), {
        values: this.getValues()
      });
      return element;
    }
    remove(chipOrValue) {
      var _this$_input2;
      if (!this._canModify()) {
        return false;
      }
      let chip;
      let value;
      if (typeof chipOrValue === 'string') {
        value = chipOrValue;
        chip = this._findChipByValue(value);
      } else {
        chip = chipOrValue;
        value = this._getChipValue(chip);
      }
      if (!chip || !value) {
        return false;
      }
      const removeEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_REMOVE), {
        value,
        chip,
        relatedTarget: (_this$_input2 = this._input) != null ? _this$_input2 : null
      });
      if (removeEvent.defaultPrevented) {
        return false;
      }
      const instance = Chip.getInstance(chip);
      if (instance) {
        instance.remove();
      } else {
        chip.remove();
        this._handleChipRemoval(chip, value);
      }
      return !chip.isConnected;
    }
    removeSelected() {
      for (const chip of this.getSelected()) {
        this.remove(chip);
      }
    }
    clear() {
      for (const chip of this._getChipElements()) {
        this.remove(chip);
      }
    }
    selectChip(chip) {
      var _Chip$getInstance;
      if (!this._getChipElements().includes(chip)) {
        return;
      }
      (_Chip$getInstance = Chip.getInstance(chip)) == null || _Chip$getInstance.select();
    }
    selectAll() {
      if (!this._config.selectable) {
        return;
      }
      for (const chip of this._getChipElements()) {
        var _Chip$getInstance2;
        (_Chip$getInstance2 = Chip.getInstance(chip)) == null || _Chip$getInstance2.select();
      }
    }
    deselectAll() {
      for (const chip of this.getSelected()) {
        var _Chip$getInstance3;
        (_Chip$getInstance3 = Chip.getInstance(chip)) == null || _Chip$getInstance3.deselect();
      }
    }
    clearSelection() {
      this.deselectAll();
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SELECT), {
        selected: this.getSelectedValues()
      });
    }
    getSelected() {
      return SelectorEngine.find(SELECTOR_CHIP_ACTIVE, this._element);
    }
    getValues() {
      return [...this._chips];
    }
    getSelectedValues() {
      return this.getSelected().map(chip => this._getChipValue(chip));
    }
    dispose() {
      EventHandler.off(this._element, Chip.EVENT_KEY);
      super.dispose();
    }

    // Private
    _configAfterMerge(config) {
      // Filter chips are selectable by definition.
      if (config.filter) {
        config.selectable = true;
      }
      return config;
    }
    _canModify() {
      return !this._disabled;
    }
    _appendChip(chip) {
      this._element.append(chip);
    }
    _getChipElements() {
      return SelectorEngine.find(SELECTOR_CHIP$1, this._element);
    }
    _findChipByValue(value) {
      return this._getChipElements().find(chip => this._getChipValue(chip) === value);
    }
    _getChipValue(chip) {
      var _clone$textContent;
      if (chip.dataset.coreuiChipValue) {
        return chip.dataset.coreuiChipValue;
      }
      const clone = chip.cloneNode(true);
      const remove = SelectorEngine.findOne(SELECTOR_CHIP_REMOVE$1, clone);
      if (remove) {
        remove.remove();
      }
      return ((_clone$textContent = clone.textContent) == null ? void 0 : _clone$textContent.trim()) || '';
    }
    _getFocusableChips() {
      return SelectorEngine.find(SELECTOR_FOCUSABLE_ITEMS, this._element);
    }
    _initChips() {
      for (const chip of this._getChipElements()) {
        const value = this._getChipValue(chip);
        if (value) {
          this._chips.push(value);
          this._applyChipClassName(chip, value);
        }
        this._setupChip(chip);
      }
    }
    _setupChip(chip) {
      Chip.getOrCreateInstance(chip, this._getChipConfig(chip));
    }
    _getChipConfig(chip) {
      // A chip's own data attributes override the set's options.
      return {
        ariaRemoveLabel: this._config.ariaRemoveLabel,
        disabled: this._disabled,
        filter: this._config.filter,
        removable: this._config.removable,
        removeIcon: this._config.removeIcon,
        selectable: this._config.selectable,
        selectedIcon: this._config.selectedIcon,
        ...Manipulator.getDataAttributes(chip)
      };
    }
    _createChip(value) {
      const chip = document.createElement('span');
      chip.className = CLASS_NAME_CHIP;
      chip.dataset.coreuiChipValue = value;
      chip.append(document.createTextNode(value));
      this._applyChipClassName(chip, value);
      return chip;
    }
    _applyChipClassName(chip, value) {
      const className = this._resolveChipClassName(value);
      if (!className) {
        return;
      }
      chip.classList.add(...className.split(/\s+/).filter(Boolean));
    }
    _resolveChipClassName(value) {
      const {
        chipClassName
      } = this._config;
      if (!chipClassName) {
        return '';
      }
      if (typeof chipClassName === 'function') {
        const resolvedClassName = chipClassName(value);
        return typeof resolvedClassName === 'string' ? resolvedClassName : '';
      }
      return typeof chipClassName === 'string' ? chipClassName : '';
    }
    _addEventListeners() {
      EventHandler.on(this._element, this.constructor.eventName(EVENT_KEYDOWN$6), SELECTOR_CHIP$1, event => this._handleKeydown(event));
      EventHandler.on(this._element, EVENT_CHIP_SELECTED, SELECTOR_CHIP$1, event => this._handleSelectionChange(event));
      EventHandler.on(this._element, EVENT_CHIP_DESELECTED, SELECTOR_CHIP$1, event => this._handleSelectionChange(event));
      EventHandler.on(this._element, EVENT_CHIP_REMOVE, SELECTOR_CHIP$1, event => this._handleChipRemove(event));
      EventHandler.on(this._element, EVENT_CHIP_REMOVED, SELECTOR_CHIP$1, event => this._handleChipRemoved(event));
    }
    _handleKeydown(event) {
      const chip = event.target.closest(SELECTOR_CHIP$1);
      if (!chip || chip.classList.contains(CLASS_NAME_DISABLED$6)) {
        return;
      }
      switch (event.key) {
        case 'ArrowLeft':
          {
            event.preventDefault();
            // In RTL the visual direction is mirrored, so ArrowLeft moves to the next chip.
            this._focusSibling(chip, isRTL());
            break;
          }
        case 'ArrowRight':
          {
            event.preventDefault();
            this._focusSibling(chip, !isRTL());
            break;
          }
        case 'Home':
          {
            event.preventDefault();
            this._navigateToEdge(0);
            break;
          }
        case 'End':
          {
            event.preventDefault();
            this._navigateToEdge(-1);
            break;
          }

        // No default
      }
    }
    _focusSibling(chip, shouldGetNext) {
      const chips = this._getFocusableChips();
      if (chips.length === 0) {
        return;
      }

      // No cycling: navigation stops at the edges.
      const sibling = getNextActiveElement(chips, chip, shouldGetNext, false);
      if (sibling && sibling !== chip) {
        sibling.focus();
      }
    }
    _getRemovalNeighbor(chip) {
      const chips = this._getFocusableChips();
      if (chips.length === 0) {
        return null;
      }

      // Prefer the next chip, fall back to the previous one at the end.
      const next = getNextActiveElement(chips, chip, true, false);
      if (next && next !== chip) {
        return next;
      }
      const previous = getNextActiveElement(chips, chip, false, false);
      return previous && previous !== chip ? previous : null;
    }
    _navigateToEdge(targetIndex) {
      var _chips$at;
      const chips = this._getFocusableChips();
      (_chips$at = chips.at(targetIndex)) == null || _chips$at.focus();
    }
    _handleSelectionChange(event) {
      const chip = event.target.closest(SELECTOR_CHIP$1);
      if (this._config.selectionMode === SELECTION_MODE_SINGLE && chip != null && chip.matches(SELECTOR_CHIP_ACTIVE)) {
        this._enforceSingleSelection(chip);
      }
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SELECT), {
        selected: this.getSelectedValues()
      });
    }
    _enforceSingleSelection(selectedChip) {
      for (const chip of this.getSelected()) {
        if (chip !== selectedChip) {
          var _Chip$getInstance4;
          (_Chip$getInstance4 = Chip.getInstance(chip)) == null || _Chip$getInstance4.deselect();
        }
      }
    }
    _handleChipRemove(event) {
      const chip = event.target.closest(SELECTOR_CHIP$1);
      this._pendingFocus = chip ? this._getRemovalNeighbor(chip) : null;
    }
    _handleChipRemoved(event) {
      var _this$_pendingFocus;
      const chip = event.target.closest(SELECTOR_CHIP$1);
      (_this$_pendingFocus = this._pendingFocus) == null || _this$_pendingFocus.focus();
      this._pendingFocus = null;
      this._handleChipRemoval(chip, this._getChipValue(chip));
    }
    _handleChipRemoval(chip, value) {
      const index = this._chips.indexOf(value);
      if (index !== -1) {
        this._chips.splice(index, 1);
      }
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_CHANGE$3), {
        values: this.getValues()
      });
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SELECT), {
        selected: this.getSelectedValues()
      });
    }

    // Static
    static chipSetInterface(element, config) {
      const data = ChipSet.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        const data = ChipSet.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, `DOMContentLoaded${EVENT_KEY$m}${DATA_API_KEY$i}`, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_CHIP_SET)) {
      ChipSet.chipSetInterface(element);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(ChipSet);

  /**
   * --------------------------------------------------------------------------
   * CoreUI chip-input.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   *
   * This component is a highly modified version of the Bootstrap's chip-input.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$p = 'chip-input';
  const DATA_KEY$l = 'coreui.chip-input';
  const EVENT_KEY$l = `.${DATA_KEY$l}`;
  const DATA_API_KEY$h = '.data-api';
  const EVENT_INPUT$4 = `input${EVENT_KEY$l}`;
  const SELECTOR_DATA_CHIP_INPUT = '[data-coreui-chip-input]';
  const SELECTOR_CHIP = '.chip';
  const SELECTOR_CHIP_INPUT_LABEL = '.chip-input-label';
  const SELECTOR_CHIP_REMOVE = '.chip-remove';
  const CLASS_NAME_DISABLED$5 = 'disabled';
  const CLASS_NAME_CHIP_INPUT_FIELD = 'chip-input-field';
  const Default$n = {
    ...ChipSet.Default,
    createOnBlur: true,
    id: null,
    name: null,
    placeholder: '',
    readonly: false,
    removable: true,
    separator: ',',
    unique: true
  };
  const DefaultType$n = {
    ...ChipSet.DefaultType,
    createOnBlur: 'boolean',
    id: '(string|null)',
    name: '(string|null)',
    placeholder: 'string',
    readonly: 'boolean',
    separator: '(string|null)'
  };

  /**
   * Class definition
   *
   * ChipInput is a thin input layer on top of ChipSet: ChipSet owns the chips
   * (the single source of truth), while ChipInput only adds the text field, form
   * integration (hidden input) and turns typed text into chips. The public API
   * (methods + `*.coreui.chip-input` events) is preserved through overrides.
   */

  class ChipInput extends ChipSet {
    constructor(element, config) {
      var _this$_config$id;
      super(element, config);
      this._uniqueId = (_this$_config$id = this._config.id) != null ? _this$_config$id : getUID(NAME$p);
      this._hiddenInput = null;
      this._input = SelectorEngine.findOne('input', this._element);
      if (this._input) {
        this._setInputSize();
      } else {
        this._createInput();
      }
      this._applyInteractionState();
      this._createHiddenInput();
      this._addInputEventListeners();
    }

    // Getters
    static get Default() {
      return Default$n;
    }
    static get DefaultType() {
      return DefaultType$n;
    }
    static get NAME() {
      return NAME$p;
    }

    // Public
    // Keep the inherited add behavior and mirror the new value into the form input.
    add(value) {
      const chip = super.add(value);
      if (chip) {
        this._syncHiddenInput();
      }
      return chip;
    }
    focus() {
      var _this$_input;
      (_this$_input = this._input) == null || _this$_input.focus();
    }

    // Private
    _canModify() {
      return !this._disabled && !this._config.readonly;
    }

    // Chips live before the text field, not at the end of the set.
    _appendChip(chip) {
      this._element.insertBefore(chip, this._input);
    }

    // Per-chip configuration based on the chip value and the input's
    // disabled/readonly state.
    _getChipConfig(chip) {
      return {
        ariaRemoveLabel: `Remove ${this._getChipValue(chip)}`,
        disabled: this._disabled,
        removable: this._config.removable && !this._config.readonly && !this._disabled,
        removeIcon: this._config.removeIcon,
        selectable: this._config.selectable
      };
    }

    // Keep the inherited chip instantiation and sync the remove button.
    _setupChip(chip) {
      super._setupChip(chip);
      const removeButton = SelectorEngine.findOne(SELECTOR_CHIP_REMOVE, chip);
      if (removeButton) {
        removeButton.disabled = this._disabled || this._config.readonly;
      }
    }

    // Sync the form mirror and refocus the text field after a chip is removed.
    _handleChipRemoved(event) {
      var _this$_input2;
      super._handleChipRemoved(event);
      this._syncHiddenInput();
      (_this$_input2 = this._input) == null || _this$_input2.focus();
    }
    _syncHiddenInput() {
      if (this._hiddenInput) {
        this._hiddenInput.value = this.getValues().join(',');
      }
    }
    _addInputEventListeners() {
      EventHandler.on(this._element, 'keydown', event => {
        if (event.target === this._input) {
          return;
        }

        // The arrow key past the last chip moves focus into the text field, which
        // sits after the chips (mirrors the input's "go to last chip" key). The
        // direction is mirrored in RTL.
        if (event.key === (isRTL() ? 'ArrowLeft' : 'ArrowRight')) {
          const chips = this._getFocusableChips();
          if (chips.length > 0 && chips.at(-1).contains(event.target)) {
            event.preventDefault();
            this._input.focus();
            return;
          }
        }
        if (event.key.length === 1) {
          this._input.focus();
        }
      });
      EventHandler.on(this._input, 'keydown', event => this._handleInputKeydown(event));
      EventHandler.on(this._input, 'input', event => this._handleInput(event));
      EventHandler.on(this._input, 'paste', event => this._handlePaste(event));
      EventHandler.on(this._input, 'focus', () => this.clearSelection());
      if (this._config.createOnBlur) {
        EventHandler.on(this._input, 'blur', event => {
          var _event$relatedTarget;
          // Don't create chip if clicking on a chip
          if (!((_event$relatedTarget = event.relatedTarget) != null && _event$relatedTarget.closest(SELECTOR_CHIP))) {
            this._createChipFromInput();
          }
        });
      }

      // Focus input when clicking container background
      EventHandler.on(this._element, 'click', event => {
        if (event.target === this._element) {
          var _this$_input3;
          (_this$_input3 = this._input) == null || _this$_input3.focus();
        }
      });
    }
    _createInput() {
      const input = document.createElement('input');
      const label = SelectorEngine.findOne(SELECTOR_CHIP_INPUT_LABEL, this._element);
      const labelFor = label == null ? void 0 : label.getAttribute('for');
      const generatedInputId = labelFor || getUID(`${NAME$p}-input`);
      input.type = 'text';
      input.className = CLASS_NAME_CHIP_INPUT_FIELD;
      input.id = generatedInputId;
      if (this._config.placeholder) {
        input.placeholder = this._config.placeholder;
      }
      if (label && !labelFor) {
        label.setAttribute('for', generatedInputId);
      }
      this._input = input;
      this._setInputSize();
      this._element.append(input);
    }
    _createHiddenInput() {
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.id = this._uniqueId;
      hiddenInput.name = this._config.name || this._uniqueId;
      this._element.append(hiddenInput);
      this._hiddenInput = hiddenInput;
      this._hiddenInput.value = this.getValues().join(',');
    }
    _createChipFromInput() {
      if (!this._canModify()) {
        return;
      }
      const value = this._input.value.trim();
      if (value) {
        this.add(value);
        this._input.value = '';
        this._setInputSize();
      }
    }
    _applyInteractionState() {
      const {
        readonly
      } = this._config;
      this._element.classList.toggle(CLASS_NAME_DISABLED$5, this._disabled);
      this._input.disabled = this._disabled;
      this._input.readOnly = !this._disabled && readonly;
      this._element.setAttribute('aria-disabled', this._disabled ? 'true' : 'false');
      this._element.setAttribute('aria-readonly', readonly ? 'true' : 'false');
    }
    _handleInputKeydown(event) {
      const {
        key
      } = event;
      switch (key) {
        case 'Enter':
          {
            event.preventDefault();
            this._createChipFromInput();
            break;
          }
        case 'Backspace':
        case 'Delete':
          {
            if (this._input.value === '') {
              event.preventDefault();
              const chips = this._getChipElements();
              if (chips.length > 0) {
                chips.at(-1).focus();
              }
            }
            break;
          }
        case 'ArrowLeft':
        case 'ArrowRight':
          {
            // The arrow pointing toward the chips (left in LTR, right in RTL) jumps
            // to the last chip when the caret is at the start of the input.
            const towardChipsKey = isRTL() ? 'ArrowRight' : 'ArrowLeft';
            if (key === towardChipsKey && this._input.selectionStart === 0 && this._input.selectionEnd === 0) {
              event.preventDefault();
              const chips = this._getChipElements();
              if (chips.length > 0) {
                chips.at(-1).focus();
              }
            }
            break;
          }
        case 'Escape':
          {
            this._input.value = '';
            this._input.blur();
            break;
          }

        // No default
      }
    }
    _handleInput(event) {
      if (!this._canModify()) {
        return;
      }
      const {
        value
      } = event.target;
      const {
        separator
      } = this._config;
      if (separator && value.includes(separator)) {
        const parts = value.split(separator);
        for (const part of parts.slice(0, -1)) {
          this.add(part.trim());
        }
        this._input.value = parts.at(-1);
      }
      this._setInputSize();
      EventHandler.trigger(this._element, EVENT_INPUT$4, {
        value: this._input.value,
        relatedTarget: this._input
      });
    }
    _handlePaste(event) {
      if (!this._canModify()) {
        return;
      }
      const {
        separator
      } = this._config;
      if (!separator) {
        return;
      }
      const pastedData = (event.clipboardData || window.clipboardData).getData('text');
      if (pastedData.includes(separator)) {
        event.preventDefault();
        const parts = pastedData.split(separator);
        for (const part of parts) {
          this.add(part.trim());
        }
      }
    }
    _setInputSize() {
      if (!this._input) {
        return;
      }
      this._input.size = Math.max(this._input.placeholder.length, this._input.value.length) || 1;
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, `DOMContentLoaded${EVENT_KEY$l}${DATA_API_KEY$h}`, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_CHIP_INPUT)) {
      ChipInput.getOrCreateInstance(element);
    }
  });

  /**
   * --------------------------------------------------------------------------
   * CoreUI collapse.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$o = 'collapse';
  const DATA_KEY$k = 'coreui.collapse';
  const EVENT_KEY$k = `.${DATA_KEY$k}`;
  const DATA_API_KEY$g = '.data-api';
  const EVENT_SHOW$b = `show${EVENT_KEY$k}`;
  const EVENT_SHOWN$b = `shown${EVENT_KEY$k}`;
  const EVENT_HIDE$b = `hide${EVENT_KEY$k}`;
  const EVENT_HIDDEN$b = `hidden${EVENT_KEY$k}`;
  const EVENT_CLICK_DATA_API$e = `click${EVENT_KEY$k}${DATA_API_KEY$g}`;
  const CLASS_NAME_SHOW$e = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE$f = '[data-coreui-toggle="collapse"]';
  const Default$m = {
    parent: null,
    toggle: true
  };
  const DefaultType$m = {
    parent: '(null|element)',
    toggle: 'boolean'
  };

  /**
   * Class definition
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$f);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }

    // Getters
    static get Default() {
      return Default$m;
    }
    static get DefaultType() {
      return DefaultType$m;
    }
    static get NAME() {
      return NAME$o;
    }

    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];

      // find active children
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$b);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$e);
        this._element.style[dimension] = '';
        EventHandler.trigger(this._element, EVENT_SHOWN$b);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$b);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$e);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$b);
      };
      this._element.style[dimension] = '';
      this._queueCallback(complete, this._element, true);
    }

    // Private
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$e);
    }
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle); // Coerce string values
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$f);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      // remove children if greater depth
      return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute('aria-expanded', isOpen);
      }
    }

    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function () {
        const data = Collapse.getOrCreateInstance(this, _config);
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$e, SELECTOR_DATA_TOGGLE$f, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Collapse);

  /**
   * --------------------------------------------------------------------------
   * CoreUI util/focustrap.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$n = 'focustrap';
  const DATA_KEY$j = 'coreui.focustrap';
  const EVENT_KEY$j = `.${DATA_KEY$j}`;
  const EVENT_FOCUSIN$3 = `focusin${EVENT_KEY$j}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$j}`;
  const TAB_KEY$5 = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default$l = {
    additionalElement: null,
    autofocus: true,
    trapElement: null // The element to trap focus inside of
  };
  const DefaultType$l = {
    additionalElement: '(element|null|undefined)',
    autofocus: 'boolean',
    trapElement: 'element'
  };

  /**
   * Class definition
   */

  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    // Getters
    static get Default() {
      return Default$l;
    }
    static get DefaultType() {
      return DefaultType$l;
    }
    static get NAME() {
      return NAME$n;
    }

    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$j); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN$3, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$j);
    }

    // Private
    _handleFocusin(event) {
      const {
        additionalElement,
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      if (additionalElement && (event.target === additionalElement || additionalElement.contains(event.target))) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY$5) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
      const {
        additionalElement,
        trapElement
      } = this._config;
      if (!additionalElement) {
        return;
      }
      const trapElements = SelectorEngine.focusableChildren(trapElement);
      const additionalElements = SelectorEngine.focusableChildren(additionalElement);
      if (trapElements.length === 0 || additionalElements.length === 0) {
        return;
      }
      event.preventDefault();
      if (trapElements.indexOf(event.target) === trapElements.length - 1 && !event.shiftKey) {
        additionalElements[0].focus();
        return;
      }
      if (trapElements.indexOf(event.target) === 0 && event.shiftKey) {
        additionalElements[additionalElements.length - 1].focus();
        return;
      }
      if (additionalElements.indexOf(event.target) === additionalElements.length - 1 && !event.shiftKey) {
        trapElements[0].focus();
        return;
      }
      if (additionalElements.indexOf(event.target) === 0 && event.shiftKey) {
        trapElements[trapElements.length - 1].focus();
      }
    }
  }

  /**
   * Converts a 12-hour time format to a 24-hour time format.
   * @param {('am' | 'pm')} abbr The abbreviation indicating AM or PM.
   * @param {number} hour The hour to be converted.
   * @returns {number} The hour in 24-hour format.
   */
  const convert12hTo24h = (abbr, hour) => {
    if (abbr === 'am' && hour === 12) {
      return 0;
    }
    if (abbr === 'am') {
      return hour;
    }
    if (abbr === 'pm' && hour === 12) {
      return 12;
    }
    return hour + 12;
  };

  /**
   * Converts a 24-hour time format to a 12-hour format.
   * @param {number} hour The hour to be converted.
   * @returns {number} The hour in 12-hour format.
   */
  const convert24hTo12h = hour => hour % 12 || 12;

  /**
   * Retrieves the AM/PM part of the specified date according to the given locale.
   * @param {Date} date The date from which to extract the AM/PM part.
   * @param {string} locale The locale to use for formatting.
   * @returns {string} 'am' or 'pm' based on the given date and locale.
   */
  const getAmPm = (date, locale) => {
    if (date.toLocaleTimeString(locale).includes('AM')) {
      return 'am';
    }
    if (date.toLocaleTimeString(locale).includes('PM')) {
      return 'pm';
    }
    return date.getHours() >= 12 ? 'pm' : 'am';
  };

  /**
   * Formats an array of time values (hours, minutes, or seconds) according to the specified locale and partial.
   * @param {number[]} values An array of time values to format.
   * @param {string} locale The locale to use for formatting.
   * @param {('hour' | 'minute' | 'second')} partial The type of time value to format.
   * @returns {Array} An array of objects with the original value and its localized label.
   */
  const formatTimePartials = (values, locale, partial) => {
    const date = new Date();
    const forceTwoDigit = shouldUseTwoDigitHour(locale);
    const formatter = new Intl.DateTimeFormat(locale, {
      hour: forceTwoDigit ? '2-digit' : 'numeric',
      minute: '2-digit',
      second: '2-digit'
    });
    return values.map(value => {
      var _formatter$formatToPa;
      if (partial === 'hour') {
        date.setHours(value);
      }
      if (partial === 'minute') {
        date.setMinutes(value);
      }
      if (partial === 'second') {
        date.setSeconds(value);
      }
      return {
        value,
        label: ((_formatter$formatToPa = formatter.formatToParts(date).find(part => part.type === partial)) == null ? void 0 : _formatter$formatToPa.value) || ''
      };
    });
  };

  /**
   * Generates localized time partials (hours, minutes, seconds) based on the given parameters.
   * @param {string} locale The locale to use for generating localized time partials.
   * @param {'auto' | boolean} ampm Determines whether to use 12-hour or 24-hour format. 'auto' decides based on locale.
   * @param {boolean | number[] | Function} hours An array of hours, a boolean, or a function to generate hours.
   * @param {boolean | number[] | Function} minutes An array of minutes, a boolean, or a function to generate minutes.
   * @param {boolean | number[] | Function} seconds An array of seconds, a boolean, or a function to generate seconds.
   * @returns {LocalizedTimePartials} An object containing arrays of localized time partials and a boolean indicating if 12-hour format is used.
   */
  const getLocalizedTimePartials = (locale, ampm = 'auto', hours = [], minutes = [], seconds = []) => {
    const hour12 = ampm === 'auto' && isAmPm(locale) || ampm === true;
    const listOfHours = Array.isArray(hours) && hours.length > 0 ? hours : typeof hours === 'function' ? Array.from({
      length: hour12 ? 12 : 24
    }, (_, i) => hour12 ? i + 1 : i).filter(hour => hours(hour)) : Array.from({
      length: hour12 ? 12 : 24
    }, (_, i) => hour12 ? i + 1 : i);
    const listOfMinutes = Array.isArray(minutes) && minutes.length > 0 ? minutes : typeof minutes === 'function' ? Array.from({
      length: 60
    }, (_, i) => i).filter(minute => minutes(minute)) : Array.from({
      length: 60
    }, (_, i) => i);
    const listOfSeconds = Array.isArray(seconds) && seconds.length > 0 ? seconds : typeof seconds === 'function' ? Array.from({
      length: 60
    }, (_, i) => i).filter(second => seconds(second)) : Array.from({
      length: 60
    }, (_, i) => i);
    return {
      listOfHours: formatTimePartials(listOfHours, locale, 'hour'),
      listOfMinutes: formatTimePartials(listOfMinutes, locale, 'minute'),
      listOfSeconds: formatTimePartials(listOfSeconds, locale, 'second'),
      hour12
    };
  };

  /**
   * Determines if the given locale uses AM/PM format.
   * @param {string} locale The locale to check.
   * @returns {boolean} True if the locale uses AM/PM format, otherwise false.
   */
  const isAmPm = locale => ['am', 'AM', 'pm', 'PM'].some(el => new Date().toLocaleString(locale).includes(el));

  /**
   * Validates if the given string represents a valid time.
   * @param {string} time The time string to validate.
   * @returns {boolean} True if the string is a valid time, otherwise false.
   */
  const isValidTime = time => {
    const d = new Date(`1970-01-01 ${time}`);
    return d instanceof Date && !Number.isNaN(d.getTime());
  };

  /**
   * Checks whether the given locale formats the hour "9" with a leading zero ("09")
   * when using `hour: 'numeric'` in `toLocaleTimeString`.
   *
   * This helps determine if you should force `hour: '2-digit'` for consistent formatting.
   *
   * @param {string} locale - The locale code (e.g., "en-US", "pl-PL").
   * @returns {boolean} `true` if the formatted hour starts with a leading zero, otherwise `false`.
   */
  const shouldUseTwoDigitHour = locale => {
    const d = new Date(2020, 0, 1, 7, 5, 7); // 7:05:07
    const formatted = d.toLocaleTimeString(locale);
    return formatted.startsWith('0'); // check if the hour starts with "0"
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO time-picker.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$m = 'time-picker';
  const DATA_KEY$i = 'coreui.time-picker';
  const EVENT_KEY$i = `.${DATA_KEY$i}`;
  const DATA_API_KEY$f = '.data-api';
  const END_KEY$2 = 'End';
  const ENTER_KEY$2 = 'Enter';
  const ESCAPE_KEY$5 = 'Escape';
  const HOME_KEY$2 = 'Home';
  const SPACE_KEY$1 = 'Space';
  const TAB_KEY$4 = 'Tab';
  const ARROW_UP_KEY$4 = 'ArrowUp';
  const ARROW_DOWN_KEY$4 = 'ArrowDown';
  const ARROW_LEFT_KEY$3 = 'ArrowLeft';
  const ARROW_RIGHT_KEY$3 = 'ArrowRight';
  const RIGHT_MOUSE_BUTTON$4 = 2;
  const EVENT_CLICK$5 = `click${EVENT_KEY$i}`;
  const EVENT_FOCUSOUT$3 = `focusout${EVENT_KEY$i}`;
  const EVENT_HIDE$a = `hide${EVENT_KEY$i}`;
  const EVENT_HIDDEN$a = `hidden${EVENT_KEY$i}`;
  const EVENT_INPUT$3 = `input${EVENT_KEY$i}`;
  const EVENT_KEYDOWN$5 = `keydown${EVENT_KEY$i}`;
  const EVENT_SHOW$a = `show${EVENT_KEY$i}`;
  const EVENT_SHOWN$a = `shown${EVENT_KEY$i}`;
  const EVENT_SUBMIT$1 = 'submit';
  const EVENT_TIME_CHANGE = `timeChange${EVENT_KEY$i}`;
  const EVENT_CLICK_DATA_API$d = `click${EVENT_KEY$i}${DATA_API_KEY$f}`;
  const EVENT_KEYUP_DATA_API$5 = `keyup${EVENT_KEY$i}${DATA_API_KEY$f}`;
  const EVENT_LOAD_DATA_API$c = `load${EVENT_KEY$i}${DATA_API_KEY$f}`;
  const CLASS_NAME_BODY$1 = 'time-picker-body';
  const CLASS_NAME_CLEANER$2 = 'time-picker-cleaner';
  const CLASS_NAME_DISABLED$4 = 'disabled';
  const CLASS_NAME_DROPDOWN$1 = 'time-picker-dropdown';
  const CLASS_NAME_FOOTER$1 = 'time-picker-footer';
  const CLASS_NAME_INDICATOR$1 = 'time-picker-indicator';
  const CLASS_NAME_INLINE_ICON = 'time-picker-inline-icon';
  const CLASS_NAME_INLINE_SELECT = 'time-picker-inline-select';
  const CLASS_NAME_INPUT$1 = 'time-picker-input';
  const CLASS_NAME_INPUT_GROUP$2 = 'time-picker-input-group';
  const CLASS_NAME_IS_INVALID$1 = 'is-invalid';
  const CLASS_NAME_IS_VALID$1 = 'is-valid';
  const CLASS_NAME_ROLL = 'time-picker-roll';
  const CLASS_NAME_ROLL_COL = 'time-picker-roll-col';
  const CLASS_NAME_ROLL_CELL = 'time-picker-roll-cell';
  const CLASS_NAME_SELECTED$1 = 'selected';
  const CLASS_NAME_SHOW$d = 'show';
  const CLASS_NAME_TIME_PICKER$1 = 'time-picker';
  const CLASS_NAME_WAS_VALIDATED$1 = 'was-validated';
  const SELECTOR_DATA_TOGGLE$e = '[data-coreui-toggle="time-picker"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN$3 = `${SELECTOR_DATA_TOGGLE$e}.${CLASS_NAME_SHOW$d}`;
  const SELECTOR_ROLL_CELL = '.time-picker-roll-cell';
  const SELECTOR_ROLL_CELL_FOCUSABLE = '.time-picker-roll-cell[tabindex="0"]';
  const SELECTOR_ROLL_COL = '.time-picker-roll-col';
  const SELECTOR_WAS_VALIDATED$1 = 'form.was-validated';
  const Default$k = {
    ariaSelectHoursLabel: 'Select hours',
    ariaSelectMeridiemLabel: 'Select AM/PM',
    ariaSelectMinutesLabel: 'Select minutes',
    ariaSelectSecondsLabel: 'Select seconds',
    cancelButton: 'Cancel',
    cancelButtonClasses: ['btn', 'btn-sm', 'btn-ghost-primary'],
    cleaner: true,
    confirmButton: 'OK',
    confirmButtonClasses: ['btn', 'btn-sm', 'btn-primary'],
    container: false,
    disabled: false,
    footer: true,
    hours: null,
    indicator: true,
    inputOnChangeDelay: 750,
    inputReadOnly: false,
    invalid: false,
    locale: 'default',
    minutes: true,
    name: null,
    placeholder: 'Select time',
    required: true,
    seconds: true,
    size: null,
    time: null,
    type: 'dropdown',
    valid: false,
    variant: 'roll'
  };
  const DefaultType$k = {
    ariaSelectHoursLabel: 'string',
    ariaSelectMeridiemLabel: 'string',
    ariaSelectMinutesLabel: 'string',
    ariaSelectSecondsLabel: 'string',
    cancelButton: '(boolean|string)',
    cancelButtonClasses: '(array|string)',
    cleaner: 'boolean',
    confirmButton: '(boolean|string)',
    confirmButtonClasses: '(array|string)',
    container: '(string|element|boolean)',
    disabled: 'boolean',
    footer: 'boolean',
    hours: '(array|function|null)',
    indicator: 'boolean',
    inputOnChangeDelay: 'number',
    inputReadOnly: 'boolean',
    invalid: 'boolean',
    locale: 'string',
    minutes: '(array|boolean|function)',
    name: '(string|null)',
    placeholder: 'string',
    required: 'boolean',
    seconds: '(array|boolean|function)',
    size: '(string|null)',
    time: '(date|string|null)',
    type: 'string',
    valid: 'boolean',
    variant: 'string'
  };

  /**
   * Class definition
   */

  class TimePicker extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._handleTimeChange = (set, value) => {
        const _date = this._date || new Date('1970-01-01');
        if (set === 'meridiem') {
          const currentHours = _date.getHours();
          if (value === 'am') {
            this._ampm = 'am';
            // Convert PM hours (12-23) to AM hours (0-11)
            if (currentHours >= 12) {
              _date.setHours(currentHours - 12);
            }
          }
          if (value === 'pm') {
            this._ampm = 'pm';
            // Convert AM hours (0-11) to PM hours (12-23)
            if (currentHours < 12) {
              _date.setHours(currentHours + 12);
            }
          }
        }
        if (set === 'hours') {
          if (isAmPm(this._config.locale)) {
            _date.setHours(convert12hTo24h(this._ampm, Number.parseInt(value, 10)));
          } else {
            _date.setHours(Number.parseInt(value, 10));
          }
        }
        if (set === 'minutes') {
          _date.setMinutes(Number.parseInt(value, 10));
        }
        if (set === 'seconds') {
          _date.setSeconds(Number.parseInt(value, 10));
        }
        this._date = new Date(_date);
        if (this._input) {
          this._setInputValue(_date);
          this._input.dispatchEvent(new Event('change'));
        }
        EventHandler.trigger(this._element, EVENT_TIME_CHANGE, {
          timeString: _date.toTimeString(),
          localeTimeString: _date.toLocaleTimeString(),
          date: _date
        });
      };
      this._config = this._getConfig(config);
      this._date = this._convertStringToDate(this._config.time);
      this._initialDate = null;
      this._ampm = this._date ? getAmPm(new Date(this._date), this._config.locale) : 'am';
      this._popper = null;
      this._indicatorElement = null;
      this._input = null;
      this._menu = null;
      this._timePickerBody = null;
      this._inputTimeout = null;
      this._localizedTimePartials = getLocalizedTimePartials(this._config.locale, this.ampm, this._config.hours, this._config.minutes, this._config.seconds);
      this._createTimePicker();
      this._createTimePickerSelection();
      this._addEventListeners();
      this._setUpSelects();
      this._focustrap = this._initializeFocusTrap();
    }

    // Getters
    static get Default() {
      return Default$k;
    }
    static get DefaultType() {
      return DefaultType$k;
    }
    static get NAME() {
      return NAME$m;
    }

    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._config.disabled || this._isShown()) {
        return;
      }
      this._initialDate = new Date(this._date);
      EventHandler.trigger(this._element, EVENT_SHOW$a);
      this._element.classList.add(CLASS_NAME_SHOW$d);
      this._element.setAttribute('aria-expanded', true);
      if (this._config.container) {
        this._menu.classList.add(CLASS_NAME_SHOW$d);
      }
      this._focustrap.activate();
      EventHandler.trigger(this._element, EVENT_SHOWN$a);
      this._createPopper();
    }
    hide() {
      EventHandler.trigger(this._element, EVENT_HIDE$a);
      if (this._popper) {
        this._popper.destroy();
      }
      this._element.classList.remove(CLASS_NAME_SHOW$d);
      this._element.setAttribute('aria-expanded', 'false');
      if (this._config.container) {
        this._menu.classList.remove(CLASS_NAME_SHOW$d);
      }
      this._focustrap.deactivate();
      EventHandler.trigger(this._element, EVENT_HIDDEN$a);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      if (this._inputTimeout) {
        clearTimeout(this._inputTimeout);
      }
      this._focustrap.deactivate();
      super.dispose();
    }
    cancel() {
      this._date = this._initialDate;
      this._setInputValue(this._initialDate || '');
      this._timePickerBody.innerHTML = '';
      this.hide();
      this._createTimePickerSelection();
      this._emitChangeEvent(this._date);
    }
    clear() {
      this._date = null;
      this._setInputValue('');
      this._timePickerBody.innerHTML = '';
      this._createTimePickerSelection();
      this._emitChangeEvent(this._date);
    }
    reset() {
      this._date = this._convertStringToDate(this._config.time);
      this._setInputValue(this._config.time);
      this._timePickerBody.innerHTML = '';
      this._createTimePickerSelection();
      this._emitChangeEvent(this._date);
    }
    update(config) {
      this._config = this._getConfig(config);
      this._date = this._convertStringToDate(this._config.time);
      this._ampm = this._date ? getAmPm(new Date(this._date), this._config.locale) : 'am';
      this._timePickerBody.innerHTML = '';
      this._createTimePickerSelection();
      this._setUpSelects();
    }

    // Private
    _initializeFocusTrap() {
      return new FocusTrap({
        additionalElement: this._config.container ? this._menu : null,
        trapElement: this._element
      });
    }
    _moveFocusToNextColumn(event) {
      if (!this._timePickerBody) {
        return;
      }
      const {
        target
      } = event;
      const columnElement = target.parentElement;
      const columns = SelectorEngine.find(SELECTOR_ROLL_COL, this._timePickerBody);
      const currentColumnIndex = columns.indexOf(columnElement);
      if (currentColumnIndex < columns.length - 1) {
        const firstFocusableCell = SelectorEngine.findOne(SELECTOR_ROLL_CELL_FOCUSABLE, columns[currentColumnIndex + 1]);
        firstFocusableCell.focus();
      }
    }
    _moveFocusToPreviousColumn(event) {
      if (!this._timePickerBody) {
        return;
      }
      const {
        target
      } = event;
      const columnElement = target.parentElement;
      const columns = SelectorEngine.find(SELECTOR_ROLL_COL, this._timePickerBody);
      const currentColumnIndex = columns.indexOf(columnElement);
      if (currentColumnIndex > 0) {
        const firstFocusableCell = SelectorEngine.findOne(SELECTOR_ROLL_CELL_FOCUSABLE, columns[currentColumnIndex - 1]);
        firstFocusableCell.focus();
      }
    }
    _addEventListeners() {
      EventHandler.on(this._indicatorElement, EVENT_CLICK$5, () => {
        if (!this._config.disabled) {
          this.toggle();
        }
      });
      EventHandler.on(this._indicatorElement, EVENT_KEYDOWN$5, event => {
        if (!this._config.disabled && event.key === ENTER_KEY$2) {
          this.toggle();
        }
      });
      EventHandler.on(this._togglerElement, EVENT_CLICK$5, event => {
        if (!this._config.disabled && event.target !== this._indicatorElement) {
          this.show();
          if (this._config.variant === 'roll') {
            this._setUpRolls(true);
          }
          if (this._config.variant === 'select') {
            this._setUpSelects();
          }
        }
      });
      if (this._config.variant === 'roll') {
        EventHandler.on(this._timePickerBody, EVENT_FOCUSOUT$3, SELECTOR_ROLL_COL, event => {
          if (!event.delegateTarget.contains(event.relatedTarget)) {
            this._setUpRolls(false);
          }
        });
        EventHandler.on(this._timePickerBody, EVENT_KEYDOWN$5, SELECTOR_ROLL_CELL, event => {
          if (event.key === ARROW_DOWN_KEY$4 || event.key === ARROW_UP_KEY$4) {
            event.preventDefault();
            const {
              key,
              target
            } = event;
            const items = SelectorEngine.find(SELECTOR_ROLL_CELL, target.parentElement);
            if (!items.length) {
              return;
            }
            const nextElement = getNextActiveElement(items, target, key === ARROW_DOWN_KEY$4, !items.includes(target));
            if (nextElement) {
              nextElement.focus();
            }
            return;
          }
          if (event.key === HOME_KEY$2 || event.key === END_KEY$2) {
            event.preventDefault();
            const {
              key,
              target
            } = event;
            const items = SelectorEngine.find(SELECTOR_ROLL_CELL, target.parentElement);
            if (!items.length) {
              return;
            }
            const index = key === HOME_KEY$2 ? 0 : items.length - 1;
            items[index].focus();
            return;
          }
          if (event.key === ARROW_LEFT_KEY$3 || event.key === ARROW_RIGHT_KEY$3) {
            event.preventDefault();
            const {
              key
            } = event;
            const isRtl = isRTL();
            const shouldGoLeft = key === ARROW_LEFT_KEY$3 && !isRtl || key === ARROW_RIGHT_KEY$3 && isRtl;
            if (shouldGoLeft) {
              this._moveFocusToPreviousColumn(event);
            } else {
              this._moveFocusToNextColumn(event);
            }
          }
        });
      }
      EventHandler.on(this._element, EVENT_KEYDOWN$5, event => {
        if (event.key === ESCAPE_KEY$5) {
          this.hide();
        }
      });
      EventHandler.on(this._element, 'timeChange.coreui.time-picker', () => {
        if (this._config.variant === 'roll') {
          this._setUpRolls();
        }
        if (this._config.variant === 'select') {
          this._setUpSelects();
        }
      });
      EventHandler.on(this._element, 'onCancelClick.coreui.picker', () => {
        this.cancel();
      });
      EventHandler.on(this._input, EVENT_INPUT$3, event => {
        if (this._inputTimeout) {
          clearTimeout(this._inputTimeout);
        }
        this._inputTimeout = setTimeout(() => {
          if (isValidTime(event.target.value)) {
            this._date = this._convertStringToDate(event.target.value);
            EventHandler.trigger(this._element, EVENT_TIME_CHANGE, {
              timeString: this._date ? this._date.toTimeString() : null,
              localeTimeString: this._date ? this._date.toLocaleTimeString() : null,
              date: this._date
            });
          }
        }, this._config.inputOnChangeDelay);
      });
      if (this._config.type === 'dropdown') {
        EventHandler.on(this._input.form, EVENT_SUBMIT$1, () => {
          if (this._input.form.classList.contains(CLASS_NAME_WAS_VALIDATED$1)) {
            if (Number.isNaN(Date.parse(`1970-01-01 ${this._input.value}`))) {
              return this._element.classList.add(CLASS_NAME_IS_INVALID$1);
            }
            if (this._date instanceof Date) {
              return this._element.classList.add(CLASS_NAME_IS_VALID$1);
            }
            this._element.classList.add(CLASS_NAME_IS_INVALID$1);
          }
        });
      }
    }
    _createTimePicker() {
      this._element.classList.add(CLASS_NAME_TIME_PICKER$1);
      Manipulator.setDataAttribute(this._element, 'meridiem', CLASS_NAME_TIME_PICKER$1);
      if (this._config.size) {
        this._element.classList.add(`time-picker-${this._config.size}`);
      }
      this._element.classList.toggle(CLASS_NAME_IS_VALID$1, this._config.valid);
      if (this._config.disabled) {
        this._element.classList.add(CLASS_NAME_DISABLED$4);
      }
      this._element.classList.toggle(CLASS_NAME_IS_INVALID$1, this._config.invalid);
      if (this._config.type === 'dropdown') {
        this._element.append(this._createTimePickerInputGroup());
        const dropdownEl = document.createElement('div');
        dropdownEl.classList.add(CLASS_NAME_DROPDOWN$1);
        dropdownEl.append(this._createTimePickerBody());
        if (this._config.footer || this._config.timepicker) {
          dropdownEl.append(this._createTimePickerFooter());
        }
        const {
          container
        } = this._config;
        if (container) {
          container.append(dropdownEl);
        } else {
          this._element.append(dropdownEl);
        }
        this._menu = dropdownEl;
      }
      if (this._config.type === 'inline') {
        this._element.append(this._createTimePickerBody());
      }
    }
    _createTimePickerInputGroup() {
      const inputGroupEl = document.createElement('div');
      inputGroupEl.classList.add(CLASS_NAME_INPUT_GROUP$2);
      const inputEl = document.createElement('input');
      inputEl.classList.add(CLASS_NAME_INPUT$1);
      inputEl.autocomplete = 'off';
      inputEl.disabled = this._config.disabled;
      inputEl.placeholder = this._config.placeholder;
      inputEl.readOnly = this._config.inputReadOnly;
      inputEl.required = this._config.required;
      inputEl.type = 'text';
      this._setInputValue(this._date || '', inputEl);
      if (this._config.name || this._element.id) {
        inputEl.name = this._config.name || `time-picker-${this._element.id}`;
      }
      const events = ['change', 'keyup', 'paste'];
      for (const event of events) {
        inputEl.addEventListener(event, ({
          target
        }) => {
          if (target.closest(SELECTOR_WAS_VALIDATED$1)) {
            if (Number.isNaN(Date.parse(`1970-01-01 ${target.value}`))) {
              this._element.classList.add(CLASS_NAME_IS_INVALID$1);
              this._element.classList.remove(CLASS_NAME_IS_VALID$1);
              return;
            }
            if (this._date instanceof Date) {
              this._element.classList.add(CLASS_NAME_IS_VALID$1);
              this._element.classList.remove(CLASS_NAME_IS_INVALID$1);
              return;
            }
            this._element.classList.add(CLASS_NAME_IS_INVALID$1);
            this._element.classList.remove(CLASS_NAME_IS_VALID$1);
          }
        });
      }
      inputGroupEl.append(inputEl);
      if (this._config.indicator) {
        const inputGroupIndicatorEl = document.createElement('div');
        inputGroupIndicatorEl.classList.add(CLASS_NAME_INDICATOR$1);
        if (!this._config.disabled) {
          inputGroupIndicatorEl.tabIndex = 0;
        }
        inputGroupEl.append(inputGroupIndicatorEl);
        this._indicatorElement = inputGroupIndicatorEl;
      }
      if (this._config.cleaner) {
        const inputGroupCleanerEl = document.createElement('div');
        inputGroupCleanerEl.classList.add(CLASS_NAME_CLEANER$2);
        inputGroupCleanerEl.addEventListener('click', event => {
          event.stopPropagation();
          this.clear();
        });
        inputGroupEl.append(inputGroupCleanerEl);
      }
      this._input = inputEl;
      this._togglerElement = inputGroupEl;
      return inputGroupEl;
    }
    _createTimePickerSelection() {
      if (this._config.variant === 'roll') {
        this._createTimePickerRoll();
      }
      if (this._config.variant === 'select') {
        this._createTimePickerInlineSelects();
      }
    }
    _createTimePickerBody() {
      const timePickerBodyEl = document.createElement('div');
      timePickerBodyEl.classList.add(CLASS_NAME_BODY$1);
      if (this._config.variant === 'roll') {
        timePickerBodyEl.classList.add(CLASS_NAME_ROLL);
        timePickerBodyEl.setAttribute('role', 'group');
      }
      this._timePickerBody = timePickerBodyEl;
      return timePickerBodyEl;
    }
    _createTimePickerInlineSelect(className, options, ariaLabel) {
      const selectEl = document.createElement('select');
      selectEl.classList.add(CLASS_NAME_INLINE_SELECT, className);
      selectEl.disabled = this._config.disabled;
      selectEl.setAttribute('aria-label', ariaLabel);
      selectEl.addEventListener('change', event => this._handleTimeChange(className, event.target.value));
      for (const option of options) {
        const optionEl = document.createElement('option');
        optionEl.value = option.value;
        optionEl.innerHTML = option.label;
        selectEl.append(optionEl);
      }
      return selectEl;
    }
    _createTimePickerInlineSelects() {
      const timeSeparatorEl = document.createElement('div');
      timeSeparatorEl.innerHTML = ':';
      this._timePickerBody.innerHTML = `<span class="${CLASS_NAME_INLINE_ICON}"></span>`;
      this._timePickerBody.append(this._createTimePickerInlineSelect('hours', this._localizedTimePartials.listOfHours, this._config.ariaSelectHoursLabel));
      if (this._config.minutes) {
        this._timePickerBody.append(timeSeparatorEl.cloneNode(true), this._createTimePickerInlineSelect('minutes', this._localizedTimePartials.listOfMinutes, this._config.ariaSelectMinutesLabel));
      }
      if (this._config.seconds) {
        this._timePickerBody.append(timeSeparatorEl, this._createTimePickerInlineSelect('seconds', this._localizedTimePartials.listOfSeconds, this._config.ariaSelectSecondsLabel));
      }
      if (this._localizedTimePartials.hour12) {
        this._timePickerBody.append(this._createTimePickerInlineSelect('meridiem', [{
          value: 'am',
          label: 'AM'
        }, {
          value: 'pm',
          label: 'PM'
        }], this._config.ariaSelectMeridiemLabel));
      }
    }
    _createTimePickerRoll() {
      this._timePickerBody.append(this._createTimePickerRollCol(this._localizedTimePartials.listOfHours, 'hours', this._config.ariaSelectHoursLabel));
      if (this._config.minutes) {
        this._timePickerBody.append(this._createTimePickerRollCol(this._localizedTimePartials.listOfMinutes, 'minutes', this._config.ariaSelectMinutesLabel));
      }
      if (this._config.seconds) {
        this._timePickerBody.append(this._createTimePickerRollCol(this._localizedTimePartials.listOfSeconds, 'seconds', this._config.ariaSelectSecondsLabel));
      }
      if (this._localizedTimePartials.hour12) {
        this._timePickerBody.append(this._createTimePickerRollCol([{
          value: 'am',
          label: 'AM'
        }, {
          value: 'pm',
          label: 'PM'
        }], 'meridiem', this._config.ariaSelectMeridiemLabel));
      }
    }
    _createTimePickerRollCol(options, part, ariaLabel) {
      const timePickerRollColEl = document.createElement('div');
      timePickerRollColEl.classList.add(CLASS_NAME_ROLL_COL);
      timePickerRollColEl.setAttribute('role', 'listbox');
      timePickerRollColEl.setAttribute('aria-label', ariaLabel);
      for (const [index, option] of options.entries()) {
        const timePickerRollCellEl = document.createElement('div');
        timePickerRollCellEl.classList.add(CLASS_NAME_ROLL_CELL);
        timePickerRollCellEl.setAttribute('role', 'option');
        timePickerRollCellEl.tabIndex = index === 0 ? 0 : -1;
        timePickerRollCellEl.setAttribute('aria-label', option.label.toString());
        timePickerRollCellEl.setAttribute('aria-selected', 'false');
        timePickerRollCellEl.innerHTML = option.label;
        timePickerRollCellEl.addEventListener('click', () => {
          this._handleTimeChange(part, option.value);
        });
        timePickerRollCellEl.addEventListener('keydown', event => {
          if (event.code === SPACE_KEY$1 || event.key === ENTER_KEY$2) {
            event.preventDefault();
            this._handleTimeChange(part, option.value);
            this._moveFocusToNextColumn(event);
          }
        });
        Manipulator.setDataAttribute(timePickerRollCellEl, part, option.value);
        timePickerRollColEl.append(timePickerRollCellEl);
      }
      return timePickerRollColEl;
    }
    _createTimePickerFooter() {
      const footerEl = document.createElement('div');
      footerEl.classList.add(CLASS_NAME_FOOTER$1);
      if (this._config.cancelButton) {
        const cancelButtonEl = document.createElement('button');
        cancelButtonEl.classList.add(...this._getButtonClasses(this._config.cancelButtonClasses));
        cancelButtonEl.type = 'button';
        cancelButtonEl.innerHTML = this._config.cancelButton;
        cancelButtonEl.addEventListener('click', () => {
          this.cancel();
        });
        footerEl.append(cancelButtonEl);
      }
      if (this._config.confirmButton) {
        const confirmButtonEl = document.createElement('button');
        confirmButtonEl.classList.add(...this._getButtonClasses(this._config.confirmButtonClasses));
        confirmButtonEl.type = 'button';
        confirmButtonEl.innerHTML = this._config.confirmButton;
        confirmButtonEl.addEventListener('click', () => {
          this.hide();
        });
        footerEl.append(confirmButtonEl);
      }
      return footerEl;
    }
    _emitChangeEvent(date) {
      this._input.dispatchEvent(new Event('change'));
      EventHandler.trigger(this._element, EVENT_TIME_CHANGE, {
        timeString: date === null ? null : date.toTimeString(),
        localeTimeString: date === null ? null : date.toLocaleTimeString(),
        date
      });
    }
    _setUpRolls(initial = false) {
      const parts = ['hours', 'minutes', 'seconds', 'meridiem'];
      for (const part of parts) {
        const partValue = this._getPartOfTime(part);
        if (partValue === null) {
          continue;
        }
        const elements = SelectorEngine.find(`[data-coreui-${part}]`, this._element);
        const selectedElement = elements.find(element => partValue === Manipulator.getDataAttribute(element, part));
        if (selectedElement) {
          this._selectRollElement(selectedElement, initial);
        }
      }
    }
    _selectRollElement(element, initial = false) {
      const {
        parentElement
      } = element;
      const currentSelected = SelectorEngine.findOne(SELECTOR_ROLL_CELL_FOCUSABLE, parentElement);
      if (currentSelected && currentSelected !== element) {
        currentSelected.classList.remove(CLASS_NAME_SELECTED$1);
        currentSelected.tabIndex = -1;
        currentSelected.setAttribute('aria-selected', 'false');
      }
      element.classList.add(CLASS_NAME_SELECTED$1);
      element.tabIndex = 0;
      element.setAttribute('aria-selected', 'true');
      this._scrollTo(parentElement, element, initial);
    }
    _setInputValue(date, input = this._input) {
      input.value = date instanceof Date ? date.toLocaleTimeString(this._config.locale, {
        hour12: this._localizedTimePartials.hour12,
        hour: 'numeric',
        ...(this._config.minutes && {
          minute: 'numeric'
        }),
        ...(this._config.seconds && {
          second: 'numeric'
        })
      }) : date;
    }
    _setUpSelects() {
      for (const part of Array.from(['hours', 'minutes', 'seconds', 'meridiem'])) {
        for (const element of SelectorEngine.find(`select.${part}`, this._element)) {
          if (this._getPartOfTime(part)) {
            element.value = this._getPartOfTime(part);
          }
        }
      }
    }
    _updateTimePicker() {
      this._element.innerHTML = '';
      this._createTimePicker();
    }
    _convertStringToDate(date) {
      return date ? date instanceof Date ? date : new Date(`1970-01-01 ${date}`) : null;
    }
    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('CoreUI\'s time picker require Popper (https://popper.js.org)');
      }
      const popperConfig = {
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: 'clippingParents'
          }
        }, {
          name: 'offset',
          options: {
            offset: [0, 2]
          }
        }],
        placement: isRTL() ? 'bottom-end' : 'bottom-start'
      };
      this._popper = Popper__namespace.createPopper(this._togglerElement, this._menu, popperConfig);
    }
    _getButtonClasses(classes) {
      if (typeof classes === 'string') {
        return classes.split(' ');
      }
      return classes;
    }
    _getPartOfTime(part) {
      if (this._date === null) {
        return null;
      }
      if (part === 'hours') {
        return isAmPm(this._config.locale) ? convert24hTo12h(this._date.getHours()) : this._date.getHours();
      }
      if (part === 'minutes') {
        return this._date.getMinutes();
      }
      if (part === 'seconds') {
        return this._date.getSeconds();
      }
      if (part === 'meridiem') {
        return getAmPm(new Date(this._date), this._config.locale);
      }
    }
    _isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW$d);
    }
    _scrollTo(parent, children, initial = false) {
      parent.scrollTo({
        top: children.offsetTop,
        behavior: initial ? 'instant' : 'smooth'
      });
    }
    _configAfterMerge(config) {
      if (config.container === 'dropdown' || config.container === 'inline') {
        config.type = config.container;
      }
      if (config.container === true) {
        config.container = document.body;
      }
      if (typeof config.container === 'object' || typeof config.container === 'string' && config.container === 'dropdown' && config.container === 'inline') {
        config.container = getElement(config.container);
      }
      return config;
    }

    // Static
    static timePickerInterface(element, config) {
      const data = TimePicker.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        const data = TimePicker.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON$4 || event.type === 'keyup' && event.key !== TAB_KEY$4) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN$3);
      for (const toggle of openToggles) {
        const context = TimePicker.getInstance(toggle);
        if (!context) {
          continue;
        }
        const composedPath = event.composedPath();
        if (composedPath.includes(context._element)) {
          continue;
        }
        ({
          relatedTarget: context._element
        });
        if (event.type === 'click') ;
        context.hide();
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$c, () => {
    const timePickers = SelectorEngine.find(SELECTOR_DATA_TOGGLE$e);
    for (let i = 0, len = timePickers.length; i < len; i++) {
      TimePicker.timePickerInterface(timePickers[i]);
    }
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$d, TimePicker.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API$5, TimePicker.clearMenus);

  /**
   * jQuery
   */

  defineJQueryPlugin(TimePicker);

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO date-range-picker.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$l = 'date-range-picker';
  const DATA_KEY$h = 'coreui.date-range-picker';
  const EVENT_KEY$h = `.${DATA_KEY$h}`;
  const DATA_API_KEY$e = '.data-api';
  const DISALLOWED_ATTRIBUTES$3 = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const ENTER_KEY$1 = 'Enter';
  const ESCAPE_KEY$4 = 'Escape';
  const TAB_KEY$3 = 'Tab';
  const RIGHT_MOUSE_BUTTON$3 = 2;
  const EVENT_CLICK$4 = `click${EVENT_KEY$h}`;
  const EVENT_END_DATE_CHANGE = `endDateChange${EVENT_KEY$h}`;
  const EVENT_HIDE$9 = `hide${EVENT_KEY$h}`;
  const EVENT_HIDDEN$9 = `hidden${EVENT_KEY$h}`;
  const EVENT_INPUT$2 = `input${EVENT_KEY$h}`;
  const EVENT_KEYDOWN$4 = `keydown${EVENT_KEY$h}`;
  const EVENT_RESIZE$4 = 'resize';
  const EVENT_SHOW$9 = `show${EVENT_KEY$h}`;
  const EVENT_SHOWN$9 = `shown${EVENT_KEY$h}`;
  const EVENT_SUBMIT = 'submit';
  const EVENT_START_DATE_CHANGE = `startDateChange${EVENT_KEY$h}`;
  const EVENT_CLICK_DATA_API$c = `click${EVENT_KEY$h}${DATA_API_KEY$e}`;
  const EVENT_KEYUP_DATA_API$4 = `keyup${EVENT_KEY$h}${DATA_API_KEY$e}`;
  const EVENT_LOAD_DATA_API$b = `load${EVENT_KEY$h}${DATA_API_KEY$e}`;
  const CLASS_NAME_BODY = 'date-picker-body';
  const CLASS_NAME_CALENDAR = 'date-picker-calendar';
  const CLASS_NAME_CALENDARS = 'date-picker-calendars';
  const CLASS_NAME_CLEANER$1 = 'date-picker-cleaner';
  const CLASS_NAME_DATE_PICKER = 'date-picker';
  const CLASS_NAME_DATE_RANGE_PICKER = 'date-range-picker';
  const CLASS_NAME_DISABLED$3 = 'disabled';
  const CLASS_NAME_DROPDOWN = 'date-picker-dropdown';
  const CLASS_NAME_INDICATOR = 'date-picker-indicator';
  const CLASS_NAME_INPUT = 'date-picker-input';
  const CLASS_NAME_INPUT_GROUP$1 = 'date-picker-input-group';
  const CLASS_NAME_INPUT_PREVIEW = 'date-picker-input-preview';
  const CLASS_NAME_INPUT_WRAPPER = 'date-picker-input-wrapper';
  const CLASS_NAME_IS_INVALID = 'is-invalid';
  const CLASS_NAME_IS_VALID = 'is-valid';
  const CLASS_NAME_FOOTER = 'date-picker-footer';
  const CLASS_NAME_RANGES = 'date-picker-ranges';
  const CLASS_NAME_SEPARATOR = 'date-picker-separator';
  const CLASS_NAME_SHOW$c = 'show';
  const CLASS_NAME_TIME_PICKER = 'time-picker';
  const CLASS_NAME_TIME_PICKERS = 'date-picker-timepickers';
  const CLASS_NAME_WAS_VALIDATED = 'was-validated';
  const SELECTOR_CALENDAR = '.calendars';
  const SELECTOR_DATA_TOGGLE$d = '[data-coreui-toggle="date-range-picker"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN$2 = `${SELECTOR_DATA_TOGGLE$d}.${CLASS_NAME_SHOW$c}`;
  const SELECTOR_INPUT = '.date-picker-input';
  const SELECTOR_WAS_VALIDATED = 'form.was-validated';
  const Default$j = {
    allowList: DefaultAllowlist,
    ariaNavNextMonthLabel: 'Next month',
    ariaNavNextYearLabel: 'Next year',
    ariaNavPrevMonthLabel: 'Previous month',
    ariaNavPrevYearLabel: 'Previous year',
    calendarDate: null,
    calendars: 2,
    cancelButton: 'Cancel',
    cancelButtonClasses: ['btn', 'btn-sm', 'btn-ghost-primary'],
    confirmButton: 'OK',
    confirmButtonClasses: ['btn', 'btn-sm', 'btn-primary'],
    cleaner: true,
    container: false,
    date: null,
    dayFormat: 'numeric',
    disabled: false,
    disabledDates: null,
    endDate: null,
    endName: null,
    firstDayOfWeek: 1,
    footer: false,
    inputDateFormat: null,
    inputDateParse: null,
    inputOnChangeDelay: 750,
    inputReadOnly: false,
    invalid: false,
    indicator: true,
    locale: 'default',
    maxDate: null,
    minDate: null,
    monthFormat: 'short',
    name: null,
    placeholder: ['Start date', 'End date'],
    previewDateOnHover: true,
    range: true,
    ranges: {},
    rangesButtonsClasses: ['btn', 'btn-ghost-secondary'],
    renderDayCell: null,
    renderMonthCell: null,
    renderQuarterCell: null,
    renderYearCell: null,
    required: true,
    sanitize: true,
    sanitizeFn: null,
    separator: true,
    size: null,
    startDate: null,
    startName: null,
    selectAdjacementDays: false,
    selectEndDate: false,
    selectionType: 'day',
    showAdjacementDays: true,
    showWeekNumber: false,
    timepicker: false,
    todayButton: 'Today',
    todayButtonClasses: ['btn', 'btn-sm', 'btn-primary', 'me-auto'],
    valid: false,
    weekdayFormat: 2,
    weekNumbersLabel: null,
    yearFormat: 'numeric'
  };
  const DefaultType$j = {
    allowList: 'object',
    ariaNavNextMonthLabel: 'string',
    ariaNavNextYearLabel: 'string',
    ariaNavPrevMonthLabel: 'string',
    ariaNavPrevYearLabel: 'string',
    calendarDate: '(date|number|string|null)',
    calendars: 'number',
    cancelButton: '(boolean|string)',
    cancelButtonClasses: '(array|string)',
    cleaner: 'boolean',
    confirmButton: '(boolean|string)',
    confirmButtonClasses: '(array|string)',
    container: '(string|element|boolean)',
    date: '(date|number|string|null)',
    dayFormat: 'string',
    disabledDates: '(array|date|function|null)',
    disabled: 'boolean',
    endDate: '(date|number|string|null)',
    endName: '(string|null)',
    firstDayOfWeek: 'number',
    footer: 'boolean',
    indicator: 'boolean',
    inputDateFormat: '(function|null)',
    inputDateParse: '(function|null)',
    inputOnChangeDelay: 'number',
    inputReadOnly: 'boolean',
    invalid: 'boolean',
    locale: 'string',
    maxDate: '(date|number|string|null)',
    minDate: '(date|number|string|null)',
    monthFormat: 'string',
    name: '(string|null)',
    placeholder: '(array|string)',
    previewDateOnHover: 'boolean',
    range: 'boolean',
    ranges: 'object',
    rangesButtonsClasses: '(array|string)',
    renderDayCell: '(function|null)',
    renderMonthCell: '(function|null)',
    renderQuarterCell: '(function|null)',
    renderYearCell: '(function|null)',
    required: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    separator: 'boolean',
    size: '(string|null)',
    startDate: '(date|number|string|null)',
    startName: '(string|null)',
    selectAdjacementDays: 'boolean',
    selectEndDate: 'boolean',
    selectionType: 'string',
    showAdjacementDays: 'boolean',
    showWeekNumber: 'boolean',
    timepicker: 'boolean',
    todayButton: '(boolean|string)',
    todayButtonClasses: '(array|string)',
    valid: 'boolean',
    weekdayFormat: '(number|string)',
    weekNumbersLabel: '(string|null)',
    yearFormat: 'string'
  };

  /**
   * Class definition
   */

  class DateRangePicker extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._calendarDate = this._config.calendarDate;
      this._startDate = this._config.date || this._config.startDate;
      this._endDate = this._config.endDate;
      this._initialStartDate = null;
      this._initialEndDate = null;
      this._mobile = window.innerWidth < 768;
      this._popper = null;
      this._selectEndDate = this._config.selectEndDate;
      this._calendar = null;
      this._calendars = null;
      this._endInput = null;
      this._endInputTimeout = null;
      this._endPreviewInput = null;
      this._indicatorElement = null;
      this._menu = null;
      this._startInput = null;
      this._startInputTimeout = null;
      this._startPreviewInput = null;
      this._timepickers = null;
      this._timePickerEnd = null;
      this._timePickerStart = null;
      this._togglerElement = null;
      this._createDateRangePicker();
      this._createDateRangePickerCalendars();
      this._addEventListeners();
      this._addCalendarEventListeners();
      this._focustrap = this._initializeFocusTrap();
    }

    // Getters
    static get Default() {
      return Default$j;
    }
    static get DefaultType() {
      return DefaultType$j;
    }
    static get NAME() {
      return NAME$l;
    }

    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._config.disabled || this._isShown()) {
        return;
      }
      this._initialStartDate = this._startDate ? new Date(this._startDate) : null;
      this._initialEndDate = this._endDate ? new Date(this._endDate) : null;
      EventHandler.trigger(this._element, EVENT_SHOW$9);
      this._element.classList.add(CLASS_NAME_SHOW$c);
      this._element.setAttribute('aria-expanded', true);
      if (this._config.container) {
        this._menu.classList.add(CLASS_NAME_SHOW$c);
      }
      this._focustrap.activate();
      EventHandler.trigger(this._element, EVENT_SHOWN$9);
      this._createPopper();
    }
    hide() {
      EventHandler.trigger(this._element, EVENT_HIDE$9);
      if (this._popper) {
        this._popper.destroy();
      }
      this._element.classList.remove(CLASS_NAME_SHOW$c);
      this._element.setAttribute('aria-expanded', 'false');
      if (this._config.container) {
        this._menu.classList.remove(CLASS_NAME_SHOW$c);
      }
      this._focustrap.deactivate();
      EventHandler.trigger(this._element, EVENT_HIDDEN$9);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      if (this._startInputTimeout) {
        clearTimeout(this._startInputTimeout);
      }
      if (this._endInputTimeout) {
        clearTimeout(this._endInputTimeout);
      }
      this._focustrap.deactivate();
      super.dispose();
    }
    cancel() {
      this.hide();
      if (this._initialStartDate) {
        this._changeStartDate(this._initialStartDate);
      }
      if (this._config.range && this._initialEndDate) {
        this._changeEndDate(this._initialEndDate);
      }
      if (this._initialStartDate || this._initialEndDate) {
        this._calendar.update(this._getCalendarConfig);
      }
    }
    clear() {
      this._changeStartDate(null);
      this._changeEndDate(null);
      this._calendar.update(this._getCalendarConfig());
    }
    reset() {
      this._changeStartDate(this._config.startDate);
      this._changeEndDate(this._config.endDate);
      this._calendar.update(this._getCalendarConfig());
    }
    update(config) {
      this._config = this._getConfig(config);
      this._calendarDate = this._config.calendarDate;
      this._startDate = this._config.date || this._config.startDate;
      this._endDate = this._config.endDate;
      this._selectEndDate = this._config.selectEndDate;
      this._element.innerHTML = '';
      this._createDateRangePicker();
      this._createDateRangePickerCalendars();
      this._addEventListeners();
      this._addCalendarEventListeners();
    }

    // Private
    _initializeFocusTrap() {
      return new FocusTrap({
        additionalElement: this._config.container ? this._menu : null,
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._indicatorElement, EVENT_CLICK$4, () => {
        if (!this._config.disabled) {
          this.toggle();
        }
      });
      EventHandler.on(this._indicatorElement, EVENT_KEYDOWN$4, event => {
        if (!this._config.disabled && event.key === ENTER_KEY$1) {
          this.toggle();
        }
      });
      EventHandler.on(this._togglerElement, EVENT_CLICK$4, event => {
        if (!this._config.disabled && event.target !== this._indicatorElement) {
          this.show();
        }
      });
      EventHandler.on(this._element, EVENT_KEYDOWN$4, event => {
        if (event.key === ESCAPE_KEY$4) {
          this.hide();
          this._startInput.focus();
        }
      });
      EventHandler.on(this._startInput, EVENT_CLICK$4, () => {
        this._selectEndDate = false;
        this._calendar.update(this._getCalendarConfig());
      });
      EventHandler.on(this._startInput, EVENT_INPUT$2, event => {
        if (this._startInputTimeout) {
          clearTimeout(this._startInputTimeout);
        }
        this._startInputTimeout = setTimeout(() => {
          const date = this._parseDate(event.target.value);
          let formatedDate = date;
          if (date instanceof Date && date.getTime()) {
            if (isDateDisabled(date, this._config.minDate, this._config.maxDate, this._config.disabledDates)) {
              return; // Don't update if date is disabled
            }
            if (this._config.selectionType !== 'day') {
              formatedDate = getDateBySelectionType(date, this._config.selectionType);
            }
            this._calendarDate = formatedDate;
            this._startInput.value = this._setInputValue(formatedDate);
          }
          this._startDate = formatedDate;
          this._calendar.update(this._getCalendarConfig());
          if (this._timePickerStart) {
            this._timePickerStart.update(this._getTimePickerConfig(true));
          }
          EventHandler.trigger(this._element, EVENT_START_DATE_CHANGE, {
            date: formatedDate
          });
        }, this._config.inputOnChangeDelay);
      });
      EventHandler.on(this._startInput.form, EVENT_SUBMIT, () => {
        if (this._startInput.form.classList.contains(CLASS_NAME_WAS_VALIDATED)) {
          if (this._config.range && (Number.isNaN(Date.parse(this._startInput.value)) || Number.isNaN(Date.parse(this._endInput.value)))) {
            return this._element.classList.add(CLASS_NAME_IS_INVALID);
          }
          if (this._config.range && this._startDate instanceof Date && this._endDate instanceof Date) {
            return this._element.classList.add(CLASS_NAME_IS_VALID);
          }
          if (!this._config.range && Number.isNaN(Date.parse(this._startInput.value))) {
            return this._element.classList.add(CLASS_NAME_IS_INVALID);
          }
          if (!this._config.range && this._startDate instanceof Date) {
            return this._element.classList.add(CLASS_NAME_IS_VALID);
          }
          this._element.classList.add(CLASS_NAME_IS_INVALID);
        }
      });
      EventHandler.on(this._endInput, EVENT_CLICK$4, () => {
        this._selectEndDate = true;
        this._calendar.update(this._getCalendarConfig());
      });
      EventHandler.on(this._endInput, EVENT_INPUT$2, event => {
        if (this._endInputTimeout) {
          clearTimeout(this._endInputTimeout);
        }
        this._endInputTimeout = setTimeout(() => {
          const date = this._parseDate(event.target.value);
          let formatedDate = date;
          if (date instanceof Date && date.getTime()) {
            if (date && isDateDisabled(date, this._config.minDate, this._config.maxDate, this._config.disabledDates)) {
              return; // Don't update if date is disabled
            }
            if (this._config.selectionType !== 'day') {
              formatedDate = getDateBySelectionType(date, this._config.selectionType);
            }
            this._calendarDate = formatedDate;
            this._endInput.value = this._setInputValue(formatedDate);
          }
          this._endDate = formatedDate;
          this._calendar.update(this._getCalendarConfig());
          if (this._timePickerEnd) {
            this._timePickerEnd.update(this._getTimePickerConfig(false));
          }
          EventHandler.trigger(this._element, EVENT_END_DATE_CHANGE, {
            date: formatedDate
          });
        }, this._config.inputOnChangeDelay);
      });
      EventHandler.on(window, EVENT_RESIZE$4, () => {
        this._mobile = window.innerWidth < 768;
      });
    }
    _addCalendarEventListeners() {
      for (const calendar of SelectorEngine.find(SELECTOR_CALENDAR, this._menu)) {
        EventHandler.on(calendar, 'startDateChange.coreui.calendar', event => {
          this._changeStartDate(event.date);
          if (!this._config.range && !this._config.footer && !this._config.timepicker) {
            this.hide();
          }
        });
        EventHandler.on(calendar, 'endDateChange.coreui.calendar', event => {
          this._changeEndDate(event.date);
          if (this._startDate && !this._config.footer && !this._config.timepicker) {
            this.hide();
          }
        });
        if (this._config.previewDateOnHover && !this._config.disabled) {
          EventHandler.on(calendar, 'cellHover.coreui.calendar', event => {
            if (this._selectEndDate) {
              const previewValue = event.date ? this._setInputValue(event.date) : this._setInputValue(this._endDate);
              this._updatePreviewInputVisibility(this._endPreviewInput, event.date ? previewValue : '');
              return;
            }
            const previewValue = event.date ? this._setInputValue(event.date) : this._setInputValue(this._startDate);
            this._updatePreviewInputVisibility(this._startPreviewInput, event.date ? previewValue : '');
          });
        }
        EventHandler.on(calendar, 'selectEndChange.coreui.calendar', event => {
          this._selectEndDate = event.value;
        });
      }
    }
    _changeStartDate(value, skipTimePickerUpdate = false) {
      this._startDate = value;
      this._startInput.value = this._setInputValue(value);
      this._startInput.dispatchEvent(new Event('change'));
      EventHandler.trigger(this._element, EVENT_START_DATE_CHANGE, {
        date: value
      });
      if (this._timePickerStart && !skipTimePickerUpdate) {
        this._timePickerStart.update(this._getTimePickerConfig(true));
      }
    }
    _changeEndDate(value, skipTimePickerUpdate = false) {
      this._endDate = value;
      this._endInput.value = this._setInputValue(value);
      this._endInput.dispatchEvent(new Event('change'));
      EventHandler.trigger(this._element, EVENT_END_DATE_CHANGE, {
        date: value
      });
      if (this._timePickerEnd && !skipTimePickerUpdate) {
        this._timePickerEnd.update(this._getTimePickerConfig(false));
      }
    }
    _getCalendarConfig() {
      return {
        allowList: this._config.allowList,
        ariaNavNextMonthLabel: this._config.ariaNavNextMonthLabel,
        ariaNavNextYearLabel: this._config.ariaNavNextYearLabel,
        ariaNavPrevMonthLabel: this._config.ariaNavPrevMonthLabel,
        ariaNavPrevYearLabel: this._config.ariaNavPrevYearLabel,
        calendarDate: this._calendarDate,
        calendars: this._mobile ? 1 : this._config.calendars,
        dayFormat: this._config.dayFormat,
        disabledDates: this._config.disabledDates,
        endDate: this._endDate,
        firstDayOfWeek: this._config.firstDayOfWeek,
        locale: this._config.locale,
        maxDate: this._config.maxDate,
        minDate: this._config.minDate,
        monthFormat: this._config.monthFormat,
        range: this._config.range,
        renderDayCell: this._config.renderDayCell,
        renderMonthCell: this._config.renderMonthCell,
        renderQuarterCell: this._config.renderQuarterCell,
        renderYearCell: this._config.renderYearCell,
        sanitize: this._config.sanitize,
        sanitizeFn: this._config.sanitizeFn,
        selectAdjacementDays: this._config.selectAdjacementDays,
        selectEndDate: this._selectEndDate,
        selectionType: this._config.selectionType,
        showAdjacementDays: this._config.showAdjacementDays,
        showWeekNumber: this._config.showWeekNumber,
        startDate: this._startDate,
        weekdayFormat: this._config.weekdayFormat,
        weekNumbersLabel: this._config.weekNumbersLabel,
        yearFormat: this._config.yearFormat
      };
    }
    _getTimePickerConfig(start) {
      return {
        disabled: start ? !this._startDate : !this._endDate,
        locale: this._config.locale,
        time: start ? this._startDate && new Date(this._startDate) : this._endDate && new Date(this._endDate),
        type: 'inline',
        variant: 'select'
      };
    }
    _createDateRangePicker() {
      this._element.classList.add(CLASS_NAME_DATE_PICKER);
      Manipulator.setDataAttribute(this._element, 'toggle', this._config.range ? CLASS_NAME_DATE_RANGE_PICKER : CLASS_NAME_DATE_PICKER);
      if (this._config.size) {
        this._element.classList.add(`date-picker-${this._config.size}`);
      }
      if (this._config.disabled) {
        this._element.classList.add(CLASS_NAME_DISABLED$3);
      }
      this._element.classList.toggle(CLASS_NAME_IS_INVALID, this._config.invalid);
      this._element.classList.toggle(CLASS_NAME_IS_VALID, this._config.valid);
      this._element.append(this._createDateRangePickerInputGroup());
      const dropdownEl = document.createElement('div');
      dropdownEl.classList.add(CLASS_NAME_DROPDOWN);
      dropdownEl.append(this._createDateRangePickerBody());
      if (this._config.footer || this._config.timepicker) {
        dropdownEl.append(this._createDateRangeFooter());
      }
      const {
        container
      } = this._config;
      if (container) {
        container.append(dropdownEl);
      } else {
        this._element.append(dropdownEl);
      }
      this._menu = dropdownEl;
    }
    _updatePreviewInputVisibility(previewInput, value) {
      if (!previewInput) {
        return;
      }
      if (value && value.trim() !== '') {
        previewInput.style.display = 'block';
        previewInput.value = value;
      } else {
        previewInput.style.display = 'none';
        previewInput.value = '';
      }
    }
    _createInputWrapper(inputEl, isStart = true) {
      if (!this._config.previewDateOnHover || this._config.disabled) {
        return inputEl;
      }
      const wrapperEl = document.createElement('div');
      wrapperEl.classList.add(CLASS_NAME_INPUT_WRAPPER);
      wrapperEl.append(inputEl);
      const previewInputEl = document.createElement('input');
      previewInputEl.classList.add(CLASS_NAME_INPUT, CLASS_NAME_INPUT_PREVIEW);
      previewInputEl.type = 'text';
      previewInputEl.readOnly = true;
      previewInputEl.tabIndex = -1;
      previewInputEl.style.display = 'none';
      if (isStart) {
        this._startPreviewInput = previewInputEl;
      } else {
        this._endPreviewInput = previewInputEl;
      }
      wrapperEl.append(previewInputEl);
      return wrapperEl;
    }
    _createDateRangePickerInputGroup() {
      const inputGroupEl = document.createElement('div');
      inputGroupEl.classList.add(CLASS_NAME_INPUT_GROUP$1);
      let startInputName = null;
      if (this._config.name || this._config.startName || this._element.id) {
        startInputName = this._config.name || this._config.startName || (this._config.range ? `date-range-picker-start-date-${this._element.id}` : `date-picker-${this._element.id}`);
      }
      const startInputEl = this._createInput(startInputName, this._getPlaceholder()[0], this._setInputValue(this._startDate));
      let endInputName = null;
      if (this._config.endName || this._element.id) {
        endInputName = this._config.endName || `date-range-picker-end-date-${this._element.id}`;
      }
      const endInputEl = this._createInput(endInputName, this._getPlaceholder()[1], this._setInputValue(this._endDate));
      const inputGroupTextSeparatorEl = document.createElement('div');
      inputGroupTextSeparatorEl.classList.add(CLASS_NAME_SEPARATOR);
      this._startInput = startInputEl;
      this._endInput = endInputEl;
      const startInputWrapper = this._createInputWrapper(startInputEl, true);
      inputGroupEl.append(startInputWrapper);
      if (this._config.separator) {
        inputGroupEl.append(inputGroupTextSeparatorEl);
      }
      if (this._config.range) {
        const endInputWrapper = this._createInputWrapper(endInputEl, false);
        inputGroupEl.append(endInputWrapper);
      }
      if (this._config.indicator) {
        const inputGroupIndicatorEl = document.createElement('div');
        inputGroupIndicatorEl.classList.add(CLASS_NAME_INDICATOR);
        if (!this._config.disabled) {
          inputGroupIndicatorEl.tabIndex = 0;
        }
        inputGroupEl.append(inputGroupIndicatorEl);
        this._indicatorElement = inputGroupIndicatorEl;
      }
      if (this._config.cleaner) {
        const inputGroupCleanerEl = document.createElement('div');
        inputGroupCleanerEl.classList.add(CLASS_NAME_CLEANER$1);
        inputGroupCleanerEl.addEventListener('click', event => {
          event.stopPropagation();
          this.clear();
        });
        inputGroupEl.append(inputGroupCleanerEl);
      }
      this._togglerElement = inputGroupEl;
      return inputGroupEl;
    }
    _createDateRangePickerBody() {
      const dateRangePickerBodyEl = document.createElement('div');
      dateRangePickerBodyEl.classList.add(CLASS_NAME_BODY);
      if (Object.keys(this._config.ranges).length) {
        const dateRangePickerRangesEl = document.createElement('div');
        dateRangePickerRangesEl.classList.add(CLASS_NAME_RANGES);
        for (const key of Object.keys(this._config.ranges)) {
          const buttonEl = document.createElement('button');
          buttonEl.classList.add(...this._getButtonClasses(this._config.rangesButtonsClasses));
          buttonEl.type = 'button';
          buttonEl.addEventListener('click', () => {
            this._changeStartDate(this._config.ranges[key][0]);
            this._changeEndDate(this._config.ranges[key][1]);
            this._calendar.update(this._getCalendarConfig());
          });
          buttonEl.innerHTML = key;
          dateRangePickerRangesEl.append(buttonEl);
        }
        dateRangePickerBodyEl.append(dateRangePickerRangesEl);
      }
      const calendarsEl = document.createElement('div');
      calendarsEl.classList.add(CLASS_NAME_CALENDARS);
      this._calendars = calendarsEl;
      dateRangePickerBodyEl.append(calendarsEl);
      if (this._config.timepicker) {
        const timepickersEl = document.createElement('div');
        timepickersEl.classList.add(CLASS_NAME_TIME_PICKERS);
        this._timepickers = timepickersEl;
        dateRangePickerBodyEl.append(timepickersEl);
      }
      return dateRangePickerBodyEl;
    }
    _createDateRangePickerCalendars() {
      const calendarEl = document.createElement('div');
      calendarEl.classList.add(CLASS_NAME_CALENDAR);
      this._calendars.append(calendarEl);
      this._calendar = new Calendar(calendarEl, this._getCalendarConfig());
      EventHandler.on(calendarEl, 'calendarDateChange.coreui.calendar', event => {
        this._calendarDate = event.date;
      });
      EventHandler.on(calendarEl, 'calendarMouseleave.coreui.calendar', () => {
        this._updatePreviewInputVisibility(this._startPreviewInput, '');
        this._updatePreviewInputVisibility(this._endPreviewInput, '');
      });
      if (this._config.timepicker) {
        if (this._mobile && this._config.range || this._config.range && this._config.calendars === 1) {
          const timePickerStartEl = document.createElement('div');
          timePickerStartEl.classList.add(CLASS_NAME_TIME_PICKER);
          this._timePickerStart = new TimePicker(timePickerStartEl, this._getTimePickerConfig(true));
          this._timepickers.append(timePickerStartEl);
          EventHandler.on(timePickerStartEl, 'timeChange.coreui.time-picker', event => {
            this._changeStartDate(event.date, true);
            this._calendar.update(this._getCalendarConfig());
          });
          const timePickerEndEl = document.createElement('div');
          timePickerEndEl.classList.add(CLASS_NAME_TIME_PICKER);
          this._timePickerEnd = new TimePicker(timePickerEndEl, this._getTimePickerConfig(false));
          this._timepickers.append(timePickerEndEl);
          EventHandler.on(timePickerEndEl, 'timeChange.coreui.time-picker', event => {
            this._changeEndDate(event.date, true);
            this._calendar.update(this._getCalendarConfig());
          });
        } else {
          for (const [index, _] of Array.from({
            length: this._config.calendars
          }).entries()) {
            const timePickerEl = document.createElement('div');
            timePickerEl.classList.add(CLASS_NAME_TIME_PICKER);
            const _timepicker = new TimePicker(timePickerEl, this._getTimePickerConfig(index === 0));
            if (index === 0) {
              this._timePickerStart = _timepicker;
            } else {
              this._timePickerEnd = _timepicker;
            }
            this._timepickers.append(timePickerEl);
            EventHandler.on(timePickerEl, 'timeChange.coreui.time-picker', event => {
              if (index === 0) {
                this._changeStartDate(event.date, true);
              } else {
                this._changeEndDate(event.date, true);
              }
              this._calendar.update(this._getCalendarConfig());
            });
          }
        }
      }
    }
    _createDateRangeFooter() {
      const footerEl = document.createElement('div');
      footerEl.classList.add(CLASS_NAME_FOOTER);
      if (this._config.todayButton) {
        const todayButtonEl = document.createElement('button');
        todayButtonEl.classList.add(...this._getButtonClasses(this._config.todayButtonClasses));
        todayButtonEl.type = 'button';
        todayButtonEl.innerHTML = this._config.todayButton;
        todayButtonEl.addEventListener('click', () => {
          const date = new Date();
          this._calendarDate = date;
          this._changeStartDate(date);
          if (this._config.range) {
            this._changeEndDate(date);
          }
          this._calendar.update(this._getCalendarConfig());
        });
        footerEl.append(todayButtonEl);
      }
      if (this._config.cancelButton) {
        const cancelButtonEl = document.createElement('button');
        cancelButtonEl.classList.add(...this._getButtonClasses(this._config.cancelButtonClasses));
        cancelButtonEl.type = 'button';
        cancelButtonEl.innerHTML = this._config.cancelButton;
        cancelButtonEl.addEventListener('click', () => {
          this.cancel();
        });
        footerEl.append(cancelButtonEl);
      }
      if (this._config.confirmButton) {
        const confirmButtonEl = document.createElement('button');
        confirmButtonEl.classList.add(...this._getButtonClasses(this._config.confirmButtonClasses));
        confirmButtonEl.type = 'button';
        confirmButtonEl.innerHTML = this._config.confirmButton;
        confirmButtonEl.addEventListener('click', () => {
          this.hide();
        });
        footerEl.append(confirmButtonEl);
      }
      return footerEl;
    }
    _createInput(name, placeholder, value) {
      const inputEl = document.createElement('input');
      inputEl.classList.add(CLASS_NAME_INPUT);
      inputEl.autocomplete = 'off';
      inputEl.disabled = this._config.disabled;
      inputEl.placeholder = placeholder;
      inputEl.readOnly = this._config.inputReadOnly;
      inputEl.required = this._config.required;
      inputEl.type = 'text';
      inputEl.value = value;
      if (name) {
        inputEl.name = name;
      }
      const events = ['change', 'keyup', 'paste'];
      for (const event of events) {
        inputEl.addEventListener(event, ({
          target
        }) => {
          if (target.closest(SELECTOR_WAS_VALIDATED)) {
            const inputs = SelectorEngine.find(SELECTOR_INPUT, this._element);
            for (const input of inputs) {
              if (Number.isNaN(Date.parse(input.value))) {
                this._element.classList.add(CLASS_NAME_IS_INVALID);
                this._element.classList.remove(CLASS_NAME_IS_VALID);
                return;
              }
            }
            if (this._config.range && this._startDate instanceof Date && this._endDate instanceof Date) {
              this._element.classList.add(CLASS_NAME_IS_VALID);
              this._element.classList.remove(CLASS_NAME_IS_INVALID);
              return;
            }
            if (!this._config.range && this._startDate instanceof Date) {
              this._element.classList.add(CLASS_NAME_IS_VALID);
              this._element.classList.remove(CLASS_NAME_IS_INVALID);
              return;
            }
            this._element.classList.add(CLASS_NAME_IS_INVALID);
            this._element.classList.remove(CLASS_NAME_IS_VALID);
          }
        });
      }
      return inputEl;
    }
    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('CoreUI\'s date picker require Popper (https://popper.js.org)');
      }
      const popperConfig = {
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: 'clippingParents'
          }
        }, {
          name: 'offset',
          options: {
            offset: [0, 2]
          }
        }],
        placement: isRTL() ? 'bottom-end' : 'bottom-start'
      };
      this._popper = Popper__namespace.createPopper(this._togglerElement, this._menu, popperConfig);
    }
    _parseDate(str) {
      if (!str) {
        return null;
      }
      if (this._config.inputDateParse) {
        return this._config.inputDateParse(str);
      }
      if (this._config.selectionType === 'day') {
        return getLocalDateFromString(str, this._config.locale, this._config.timepicker);
      }
      return convertToDateObject(str, this._config.selectionType);
    }
    _formatDate(date) {
      if (!date) {
        return '';
      }
      if (this._config.inputDateFormat) {
        return this._config.inputDateFormat(date instanceof Date ? new Date(date) : convertToDateObject(date, this._config.selectionType));
      }
      if (this._config.selectionType !== 'day') {
        return date;
      }
      const _date = new Date(date);
      return this._config.timepicker ? _date.toLocaleString(this._config.locale) : _date.toLocaleDateString(this._config.locale);
    }
    _getButtonClasses(classes) {
      if (typeof classes === 'string') {
        return classes.split(' ');
      }
      return classes;
    }
    _getPlaceholder() {
      const {
        placeholder
      } = this._config;
      if (typeof placeholder === 'string') {
        return placeholder.split(',');
      }
      return placeholder;
    }
    _isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW$c);
    }
    _setInputValue(date) {
      if (date) {
        return this._formatDate(date);
      }
      return '';
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES$3.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      if (config.container === true) {
        config.container = document.body;
      }
      if (typeof config.container === 'object' || typeof config.container === 'string') {
        config.container = getElement(config.container);
      }
      return config;
    }

    // Static
    static dateRangePickerInterface(element, config) {
      const data = DateRangePicker.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        const data = DateRangePicker.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON$3 || event.type === 'keyup' && event.key !== TAB_KEY$3) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN$2);
      for (const toggle of openToggles) {
        const context = DateRangePicker.getInstance(toggle);
        if (!context) {
          continue;
        }
        const composedPath = event.composedPath();
        if (composedPath.includes(context._element) || composedPath.includes(context._menu)) {
          continue;
        }
        ({
          relatedTarget: context._element
        });
        if (event.type === 'click') ;
        context.hide();
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$b, () => {
    const dateRangePickers = SelectorEngine.find(SELECTOR_DATA_TOGGLE$d);
    for (let i = 0, len = dateRangePickers.length; i < len; i++) {
      DateRangePicker.dateRangePickerInterface(dateRangePickers[i]);
    }
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$c, DateRangePicker.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API$4, DateRangePicker.clearMenus);

  /**
   * jQuery
   */

  defineJQueryPlugin(DateRangePicker);

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO date-picker.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$k = 'date-picker';
  const DATA_KEY$g = 'coreui.date-picker';
  const EVENT_KEY$g = `.${DATA_KEY$g}`;
  const DATA_API_KEY$d = '.data-api';
  const TAB_KEY$2 = 'Tab';
  const RIGHT_MOUSE_BUTTON$2 = 2;
  const EVENT_DATE_CHANGE = `dateChange${EVENT_KEY$g}`;
  const EVENT_HIDE$8 = `hide${EVENT_KEY$g}`;
  const EVENT_HIDDEN$8 = `hidden${EVENT_KEY$g}`;
  const EVENT_SHOW$8 = `show${EVENT_KEY$g}`;
  const EVENT_SHOWN$8 = `shown${EVENT_KEY$g}`;
  const EVENT_CLICK_DATA_API$b = `click${EVENT_KEY$g}${DATA_API_KEY$d}`;
  const EVENT_KEYUP_DATA_API$3 = `keyup${EVENT_KEY$g}${DATA_API_KEY$d}`;
  const EVENT_LOAD_DATA_API$a = `load${EVENT_KEY$g}${DATA_API_KEY$d}`;
  const CLASS_NAME_SHOW$b = 'show';
  const SELECTOR_DATA_TOGGLE$c = '[data-coreui-toggle="date-picker"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN$1 = `${SELECTOR_DATA_TOGGLE$c}.${CLASS_NAME_SHOW$b}`;
  const Default$i = {
    ...DateRangePicker.Default,
    calendars: 1,
    placeholder: ['Select date'],
    range: false,
    separator: false
  };
  const DefaultType$i = {
    ...DateRangePicker.DefaultType,
    date: '(date|number|string|null)'
  };

  /**
   * Class definition
   */

  class DatePicker extends DateRangePicker {
    // Getters
    static get Default() {
      return Default$i;
    }
    static get DefaultType() {
      return DefaultType$i;
    }
    static get NAME() {
      return NAME$k;
    }

    // Overrides
    _addEventListeners() {
      super._addEventListeners();
      EventHandler.on(this._element, 'startDateChange.coreui.date-range-picker', event => {
        EventHandler.trigger(this._element, EVENT_DATE_CHANGE, {
          date: event.date
        });
      });
      EventHandler.on(this._element, 'show.coreui.date-range-picker', () => {
        EventHandler.trigger(this._element, EVENT_SHOW$8);
      });
      EventHandler.on(this._element, 'shown.coreui.date-range-picker', () => {
        EventHandler.trigger(this._element, EVENT_SHOWN$8);
      });
      EventHandler.on(this._element, 'hide.coreui.date-range-picker', () => {
        EventHandler.trigger(this._element, EVENT_HIDE$8);
      });
      EventHandler.on(this._element, 'hidden.coreui.date-range-picker', () => {
        EventHandler.trigger(this._element, EVENT_HIDDEN$8);
      });
    }

    // Static
    static datePickerInterface(element, config) {
      const data = DatePicker.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        const data = DatePicker.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON$2 || event.type === 'keyup' && event.key !== TAB_KEY$2) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN$1);
      for (const toggle of openToggles) {
        const context = DatePicker.getInstance(toggle);
        if (!context) {
          continue;
        }
        const composedPath = event.composedPath();
        if (composedPath.includes(context._element) || composedPath.includes(context._menu)) {
          continue;
        }
        ({
          relatedTarget: context._element
        });
        if (event.type === 'click') ;
        context.hide();
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$a, () => {
    const datePickers = SelectorEngine.find(SELECTOR_DATA_TOGGLE$c);
    for (let i = 0, len = datePickers.length; i < len; i++) {
      DatePicker.datePickerInterface(datePickers[i]);
    }
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$b, DatePicker.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API$3, DatePicker.clearMenus);

  /**
   * jQuery
   */

  defineJQueryPlugin(DatePicker);

  /**
   * --------------------------------------------------------------------------
   * CoreUI dropdown.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$j = 'dropdown';
  const DATA_KEY$f = 'coreui.dropdown';
  const EVENT_KEY$f = `.${DATA_KEY$f}`;
  const DATA_API_KEY$c = '.data-api';
  const ESCAPE_KEY$3 = 'Escape';
  const TAB_KEY$1 = 'Tab';
  const ARROW_UP_KEY$3 = 'ArrowUp';
  const ARROW_DOWN_KEY$3 = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON$1 = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_HIDE$7 = `hide${EVENT_KEY$f}`;
  const EVENT_HIDDEN$7 = `hidden${EVENT_KEY$f}`;
  const EVENT_SHOW$7 = `show${EVENT_KEY$f}`;
  const EVENT_SHOWN$7 = `shown${EVENT_KEY$f}`;
  const EVENT_CLICK_DATA_API$a = `click${EVENT_KEY$f}${DATA_API_KEY$c}`;
  const EVENT_KEYDOWN_DATA_API$1 = `keydown${EVENT_KEY$f}${DATA_API_KEY$c}`;
  const EVENT_KEYUP_DATA_API$2 = `keyup${EVENT_KEY$f}${DATA_API_KEY$c}`;
  const CLASS_NAME_SHOW$a = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE$b = '[data-coreui-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$b}.${CLASS_NAME_SHOW$a}`;
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR = '.navbar';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS$1 = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  const PLACEMENT_TOPCENTER = 'top';
  const PLACEMENT_BOTTOMCENTER = 'bottom';
  const Default$h = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  const DefaultType$h = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  };

  /**
   * Class definition
   */

  class Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode; // dropdown wrapper
      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }

    // Getters
    static get Default() {
      return Default$h;
    }
    static get DefaultType() {
      return DefaultType$h;
    }
    static get NAME() {
      return NAME$j;
    }

    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$7, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
      }
      this._element.focus();
      this._element.setAttribute('aria-expanded', true);
      this._menu.classList.add(CLASS_NAME_SHOW$a);
      this._element.classList.add(CLASS_NAME_SHOW$a);
      EventHandler.trigger(this._element, EVENT_SHOWN$7, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }

    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$7, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }

      // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$a);
      this._element.classList.remove(CLASS_NAME_SHOW$a);
      this._element.setAttribute('aria-expanded', 'false');
      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$7, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$j.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('CoreUI\'s dropdowns require Popper (https://popper.js.org/docs/v2/)');
      }
      let referenceElement = this._element;
      if (this._config.reference === 'parent') {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$a);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }

      // We need to trim the value because custom properties can also include spaces
      const isEnd = getComputedStyle(this._menu).getPropertyValue('--cui-position').trim() === 'end';
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset
      } = this._config;
      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }
      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }
      return offset;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      };

      // Disable Popper if we have a static display or Dropdown is in Navbar
      if (this._inNavbar || this._config.display === 'static') {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [undefined, defaultBsPopperConfig])
      };
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS$1, this._menu).filter(element => isVisible(element));
      if (!items.length) {
        return;
      }

      // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$3, !items.includes(target)).focus();
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON$1 || event.type === 'keyup' && event.key !== TAB_KEY$1) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        }

        // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command

      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$3;
      const isUpOrDownEvent = [ARROW_UP_KEY$3, ARROW_DOWN_KEY$3].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();

      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$b) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$b)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$b)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$b, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        // else is escape and we check if it is shown
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_KEYDOWN_DATA_API$1, SELECTOR_DATA_TOGGLE$b, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API$1, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$a, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API$2, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$a, SELECTOR_DATA_TOGGLE$b, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Dropdown);

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO loading-button.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$i = 'loading-button';
  const DATA_KEY$e = 'coreui.loading-button';
  const EVENT_KEY$e = `.${DATA_KEY$e}`;
  const DATA_API_KEY$b = '.data-api';
  const EVENT_START = `start${EVENT_KEY$e}`;
  const EVENT_STOP = `stop${EVENT_KEY$e}`;
  const EVENT_CLICK_DATA_API$9 = `click${EVENT_KEY$e}${DATA_API_KEY$b}`;
  const CLASS_NAME_IS_LOADING = 'is-loading';
  const CLASS_NAME_LOADING_BUTTON = 'btn-loading';
  const CLASS_NAME_LOADING_BUTTON_SPINNER = 'btn-loading-spinner';
  const SELECTOR_DATA_TOGGLE$a = '[data-coreui-toggle="loading-button"]';
  const Default$g = {
    disabledOnLoading: false,
    spinner: true,
    spinnerType: 'border',
    timeout: false
  };
  const DefaultType$g = {
    disabledOnLoading: 'boolean',
    spinner: 'boolean',
    spinnerType: 'string',
    timeout: '(boolean|number)'
  };

  /**
   * Class definition
   */

  class LoadingButton extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._timeout = this._config.timeout;
      this._spinner = null;
      this._state = 'idle';
      if (this._element) {
        Data.set(element, DATA_KEY$e, this);
      }
      this._createButton();
    }

    // Getters

    static get Default() {
      return Default$g;
    }
    static get DefaultType() {
      return DefaultType$g;
    }
    static get NAME() {
      return NAME$i;
    }

    // Public

    start() {
      if (this._state !== 'loading') {
        this._createSpinner();
        this._state = 'loading';
        setTimeout(() => {
          this._element.classList.add(CLASS_NAME_IS_LOADING);
          EventHandler.trigger(this._element, EVENT_START);
          if (this._config.disabledOnLoading) {
            this._element.setAttribute('disabled', true);
          }
        }, 1);
        if (this._config.timeout) {
          setTimeout(() => {
            this.stop();
          }, this._config.timeout);
        }
      }
    }
    stop() {
      this._element.classList.remove(CLASS_NAME_IS_LOADING);
      const stoped = () => {
        this._removeSpinner();
        this._state = 'idle';
        if (this._config.disabledOnLoading) {
          this._element.removeAttribute('disabled');
        }
        EventHandler.trigger(this._element, EVENT_STOP);
      };
      if (this._spinner) {
        this._queueCallback(stoped, this._spinner, true);
        return;
      }
      stoped();
    }
    _createButton() {
      this._element.classList.add(CLASS_NAME_LOADING_BUTTON);
    }
    _createSpinner() {
      if (this._config.spinner) {
        const spinner = document.createElement('span');
        const type = this._config.spinnerType;
        spinner.classList.add(CLASS_NAME_LOADING_BUTTON_SPINNER, `spinner-${type}`, `spinner-${type}-sm`);
        spinner.setAttribute('role', 'status');
        spinner.setAttribute('aria-hidden', 'true');
        this._element.insertBefore(spinner, this._element.firstChild);
        this._spinner = spinner;
      }
    }
    _removeSpinner() {
      if (this._config.spinner) {
        this._spinner.remove();
        this._spinner = null;
      }
    }

    // Static

    static loadingButtonInterface(element, config) {
      const data = LoadingButton.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        LoadingButton.loadingButtonInterface(this, config);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$9, SELECTOR_DATA_TOGGLE$a, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$a);
    const data = LoadingButton.getOrCreateInstance(button);
    data.start();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(LoadingButton);

  /**
   * --------------------------------------------------------------------------
   * CoreUI util/backdrop.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$h = 'backdrop';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$9 = 'show';
  const EVENT_MOUSEDOWN$1 = `mousedown.coreui.${NAME$h}`;
  const Default$f = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements
  };
  const DefaultType$f = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };

  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    // Getters
    static get Default() {
      return Default$f;
    }
    static get DefaultType() {
      return DefaultType$f;
    }
    static get NAME() {
      return NAME$h;
    }

    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$9);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$9);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN$1);
      this._element.remove();
      this._isAppended = false;
    }

    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN$1, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI util/scrollBar.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';

  /**
   * Class definition
   */

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }

    // Public
    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      // give padding to element to balance the hidden scrollbar width
      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow');
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }

    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
      this._element.style.overflow = 'hidden';
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        // We only want to remove the property if the value is `null`; the value can also be zero
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI modal.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$g = 'modal';
  const DATA_KEY$d = 'coreui.modal';
  const EVENT_KEY$d = `.${DATA_KEY$d}`;
  const DATA_API_KEY$a = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const EVENT_HIDE$6 = `hide${EVENT_KEY$d}`;
  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$d}`;
  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$d}`;
  const EVENT_SHOW$6 = `show${EVENT_KEY$d}`;
  const EVENT_SHOWN$6 = `shown${EVENT_KEY$d}`;
  const EVENT_RESIZE$3 = `resize${EVENT_KEY$d}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$d}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$d}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$d}`;
  const EVENT_CLICK_DATA_API$8 = `click${EVENT_KEY$d}${DATA_API_KEY$a}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$8 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR$1 = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$9 = '[data-coreui-toggle="modal"]';
  const Default$e = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType$e = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };

  /**
   * Class definition
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$e;
    }
    static get DefaultType() {
      return DefaultType$e;
    }
    static get NAME() {
      return NAME$g;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$6, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$d);
      EventHandler.off(this._dialog, EVENT_KEY$d);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }

    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$8);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$6, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
        if (event.key !== ESCAPE_KEY$2) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$3, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === 'static') {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      // return if the following background transition hasn't yet completed
      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }

    /**
     * The following methods are used to handle overflowing modals
     */

    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }

    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$8, SELECTOR_DATA_TOGGLE$9, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$6, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$6, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });

    // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);

  /**
   * jQuery
   */

  defineJQueryPlugin(Modal);

  /* eslint-disable max-lines */


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$f = 'multi-select';
  const DATA_KEY$c = 'coreui.multi-select';
  const EVENT_KEY$c = `.${DATA_KEY$c}`;
  const DATA_API_KEY$9 = '.data-api';
  const ARROW_UP_KEY$2 = 'ArrowUp';
  const ARROW_DOWN_KEY$2 = 'ArrowDown';
  const BACKSPACE_KEY$1 = 'Backspace';
  const DELETE_KEY = 'Delete';
  const ENTER_KEY = 'Enter';
  const ESCAPE_KEY$1 = 'Escape';
  const SPACE_KEY = ' ';
  const TAB_KEY = 'Tab';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const SELECTOR_CLEANER = '.form-multi-select-cleaner';
  const SELECTOR_OPTGROUP = '.form-multi-select-optgroup';
  const SELECTOR_OPTION = '.form-multi-select-option';
  const SELECTOR_OPTIONS = '.form-multi-select-options';
  const SELECTOR_OPTIONS_EMPTY = '.form-multi-select-options-empty';
  const SELECTOR_SEARCH = '.form-multi-select-search';
  const SELECTOR_DATA_MULTI_SELECT = '[data-coreui-multi-select]';
  // TODO: remove the class-based selector in v6, use the data attribute instead
  const SELECTOR_SELECT = 'select.form-multi-select';
  const SELECTOR_SELECTION = '.form-multi-select-selection';
  const SELECTOR_TAG = '.form-multi-select-tag';
  const SELECTOR_TAG_DELETE = '.form-multi-select-tag-delete';
  const SELECTOR_VISIBLE_ITEMS = '.form-multi-select-options .form-multi-select-option:not(.disabled):not(:disabled)';
  const SELECTOR_NAVIGABLE_ITEMS = `.form-multi-select-all:not(.disabled):not(:disabled), ${SELECTOR_VISIBLE_ITEMS}, .form-multi-select-options .form-multi-select-optgroup-label-with-checkbox`;
  const EVENT_CHANGED = `changed${EVENT_KEY$c}`;
  const EVENT_CLICK$3 = `click${EVENT_KEY$c}`;
  const EVENT_HIDE$5 = `hide${EVENT_KEY$c}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$c}`;
  const EVENT_KEYDOWN$3 = `keydown${EVENT_KEY$c}`;
  const EVENT_KEYUP = `keyup${EVENT_KEY$c}`;
  const EVENT_SEARCH = `search${EVENT_KEY$c}`;
  const EVENT_SELECTION_LIMIT = `selectionLimit${EVENT_KEY$c}`;
  const EVENT_SHOW$5 = `show${EVENT_KEY$c}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$c}`;
  const EVENT_CLICK_DATA_API$7 = `click${EVENT_KEY$c}${DATA_API_KEY$9}`;
  const EVENT_KEYUP_DATA_API$1 = `keyup${EVENT_KEY$c}${DATA_API_KEY$9}`;
  const EVENT_LOAD_DATA_API$9 = `load${EVENT_KEY$c}${DATA_API_KEY$9}`;
  const CLASS_NAME_BUTTONS = 'form-multi-select-buttons';
  const CLASS_NAME_CLEANER = 'form-multi-select-cleaner';
  const CLASS_NAME_DISABLED$2 = 'disabled';
  const CLASS_NAME_DROPDOWN_HEADER = 'form-multi-select-dropdown-header';
  const CLASS_NAME_INPUT_GROUP = 'form-multi-select-input-group';
  const CLASS_NAME_LABEL = 'label';
  const CLASS_NAME_SELECT = 'form-multi-select';
  const CLASS_NAME_SELECT_DROPDOWN = 'form-multi-select-dropdown';
  const CLASS_NAME_SELECT_ALL = 'form-multi-select-all';
  const CLASS_NAME_SELECT_ALL_WITH_CHECKBOX = 'form-multi-select-all-with-checkbox';
  const CLASS_NAME_OPTGROUP = 'form-multi-select-optgroup';
  const CLASS_NAME_OPTGROUP_LABEL = 'form-multi-select-optgroup-label';
  const CLASS_NAME_OPTGROUP_LABEL_WITH_CHECKBOX = 'form-multi-select-optgroup-label-with-checkbox';
  const CLASS_NAME_OPTION = 'form-multi-select-option';
  const CLASS_NAME_OPTION_WITH_CHECKBOX = 'form-multi-select-option-with-checkbox';
  const CLASS_NAME_OPTIONS = 'form-multi-select-options';
  const CLASS_NAME_OPTIONS_EMPTY = 'form-multi-select-options-empty';
  const CLASS_NAME_SEARCH = 'form-multi-select-search';
  const CLASS_NAME_SELECTED = 'form-multi-selected';
  const CLASS_NAME_INDETERMINATE = 'form-multi-select-indeterminate';
  const CLASS_NAME_SELECTION = 'form-multi-select-selection';
  const CLASS_NAME_SELECTION_TAGS = 'form-multi-select-selection-tags';
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_TAG = 'form-multi-select-tag';
  const CLASS_NAME_TAG_DELETE = 'form-multi-select-tag-delete';
  const Default$d = {
    allowList: DefaultAllowlist,
    ariaCleanerLabel: 'Clear all selections',
    ariaIndicatorLabel: 'Toggle visibility of options menu',
    ariaSearchLabel: 'Search',
    ariaTagDeleteLabel: 'Remove',
    cleaner: true,
    clearSearchOnSelect: false,
    container: false,
    deselectAllLabel: 'Deselect all',
    deselectFilteredLabel: 'Deselect filtered',
    disabled: false,
    headerTemplate: null,
    id: null,
    invalid: false,
    multiple: true,
    name: null,
    options: false,
    optionsGroupsSelectable: false,
    optionsGroupsStyle: 'checkbox',
    optionsGroupsTemplate: null,
    optionsMaxHeight: 'auto',
    optionsStyle: 'checkbox',
    optionsTemplate: null,
    placeholder: 'Select...',
    required: false,
    sanitize: true,
    sanitizeFn: null,
    search: false,
    searchNoResultsLabel: 'No results found',
    selectAll: true,
    selectAllLabel: 'Select all',
    selectAllMode: 'all',
    selectAllStyle: 'checkbox',
    selectionLimit: null,
    selectionType: 'tags',
    selectionTypeCounterText: 'item(s) selected',
    selectFilteredLabel: 'Select filtered',
    valid: false,
    value: null
  };
  const DefaultType$d = {
    allowList: 'object',
    ariaCleanerLabel: 'string',
    ariaIndicatorLabel: 'string',
    ariaSearchLabel: 'string',
    ariaTagDeleteLabel: 'string',
    cleaner: 'boolean',
    clearSearchOnSelect: 'boolean',
    container: '(string|element|boolean)',
    deselectAllLabel: 'string',
    deselectFilteredLabel: 'string',
    disabled: 'boolean',
    headerTemplate: '(function|null)',
    id: '(string|null)',
    invalid: 'boolean',
    multiple: 'boolean',
    name: '(string|null)',
    options: '(boolean|array)',
    optionsGroupsSelectable: 'boolean',
    optionsGroupsStyle: 'string',
    optionsGroupsTemplate: '(function|null)',
    optionsMaxHeight: '(number|string)',
    optionsStyle: 'string',
    optionsTemplate: '(function|null)',
    placeholder: 'string',
    required: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    search: '(boolean|string)',
    searchNoResultsLabel: 'string',
    selectAll: 'boolean',
    selectAllStyle: 'string',
    selectAllLabel: 'string',
    selectAllMode: 'string',
    selectionLimit: '(number|null)',
    selectionType: 'string',
    selectionTypeCounterText: 'string',
    selectFilteredLabel: 'string',
    valid: 'boolean',
    value: '(string|array|null)'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class MultiSelect extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._uniqueId = this._config.id || this._element.id || getUID(`${this.constructor.NAME}`);
      this._uniqueName = this._config.name || this._element.name || this._uniqueId;
      this._configureNativeSelect();
      this._indicatorElement = null;
      this._selectAllElement = null;
      this._headerElement = null;
      this._selectionElement = null;
      this._selectionCleanerElement = null;
      this._searchElement = null;
      this._togglerElement = null;
      this._optionsElement = null;
      this._wrapperElement = null;
      this._menu = null;
      this._selected = [];
      this._options = this._getOptions();
      this._popper = null;
      this._search = '';
      if (this._config.options.length > 0) {
        this._createNativeOptions(this._element, this._config.options);
      }
      this._createSelect();
      this._addEventListeners();
      Data.set(this._element, DATA_KEY$c, this);
    }

    // Getters

    static get Default() {
      return Default$d;
    }
    static get DefaultType() {
      return DefaultType$d;
    }
    static get NAME() {
      return NAME$f;
    }

    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._config.disabled || this._isShown()) {
        return;
      }
      EventHandler.trigger(this._element, EVENT_SHOW$5);
      this._wrapperElement.classList.add(CLASS_NAME_SHOW$7);
      this._togglerElement.setAttribute('aria-expanded', 'true');
      if (this._config.container) {
        this._menu.style.minWidth = `${this._wrapperElement.offsetWidth}px`;
        this._menu.classList.add(CLASS_NAME_SHOW$7);
      }
      EventHandler.trigger(this._element, EVENT_SHOWN$5);
      this._createPopper();
      if (this._config.search) {
        SelectorEngine.findOne(SELECTOR_SEARCH, this._wrapperElement).focus();
      }
    }
    hide() {
      EventHandler.trigger(this._element, EVENT_HIDE$5);
      const refocusFromInside = this._wrapperElement.contains(document.activeElement) || this._menu.contains(document.activeElement);
      if (this._popper) {
        this._popper.destroy();
      }
      if (this._config.search) {
        this._searchElement.value = '';
      }
      this._onSearchChange(this._searchElement);
      this._wrapperElement.classList.remove(CLASS_NAME_SHOW$7);
      this._togglerElement.setAttribute('aria-expanded', 'false');
      if (this._config.container) {
        this._menu.classList.remove(CLASS_NAME_SHOW$7);
      }
      if (refocusFromInside && !this._config.disabled) {
        const refocusTarget = this._config.search ? this._searchElement : this._togglerElement;
        if (refocusTarget) {
          refocusTarget.focus();
        }
      }
      EventHandler.trigger(this._element, EVENT_HIDDEN$5);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      for (const element of [this._wrapperElement, this._menu, this._selectionElement, this._togglerElement, this._searchElement, this._indicatorElement, this._selectAllElement, this._headerElement, this._optionsElement]) {
        if (element) {
          EventHandler.off(element, EVENT_KEY$c);
        }
      }
      if (this._menu) {
        this._menu.remove();
      }
      if (this._wrapperElement) {
        this._wrapperElement.before(this._element);
        this._wrapperElement.remove();
      }
      this._element.removeAttribute('tabindex');
      super.dispose();
    }
    search(text) {
      this._search = text.length > 0 ? text.toLowerCase() : text;
      this._filterOptionsList();
      EventHandler.trigger(this._element, EVENT_SEARCH);
    }
    update(config) {
      if (config.value) {
        this.deselectAll();
      }
      this._config = {
        ...this._config,
        ...this._configAfterMerge(config)
      };
      this._selected = [];
      this._options = this._getOptions();
      this._menu.remove();
      this._wrapperElement.before(this._element);
      this._wrapperElement.remove();
      this._element.innerHTML = '';
      this._configureNativeSelect();
      this._createNativeOptions(this._element, this._options);
      this._createSelect();
      this._addEventListeners();
    }
    selectAll(options = this._options) {
      const limitReached = this._selectAllOptions(options);
      this._refreshAfterSelectionChange();
      if (limitReached) {
        this._triggerSelectionLimit();
      }
    }
    deselectAll(options = this._options) {
      this._deselectAllOptions(options);
      this._refreshAfterSelectionChange();
    }
    selectFiltered() {
      const items = this._getDisplayedItems();
      let limitReached = false;
      for (const item of items) {
        if (this._isSelectionLimitReached()) {
          limitReached = true;
          break;
        }
        const value = String(item.dataset.value);
        const option = this._findOptionByValue(value);
        if (option && !this._selected.some(selected => selected.value === value)) {
          this._selectOption(value, option.text, {
            refresh: false
          });
        }
      }
      this._refreshAfterSelectionChange();
      if (limitReached) {
        this._triggerSelectionLimit();
      }
    }
    deselectFiltered() {
      const items = this._getDisplayedItems();
      for (const item of items) {
        const value = String(item.dataset.value);
        if (this._selected.some(selected => selected.value === value)) {
          this._deselectOption(value, {
            refresh: false
          });
        }
      }
      this._refreshAfterSelectionChange();
    }
    getValue() {
      return this._selected;
    }

    // Private

    _addEventListeners() {
      EventHandler.on(this._selectionElement, EVENT_CLICK$3, SELECTOR_TAG_DELETE, event => {
        event.preventDefault();
        event.stopPropagation();
        const tag = event.target.closest(SELECTOR_TAG);
        if (tag) {
          this._deselectOption(String(tag.dataset.value));
        }
      });
      EventHandler.on(this._togglerElement, EVENT_CLICK$3, SELECTOR_CLEANER, event => {
        if (!this._config.disabled) {
          event.preventDefault();
          event.stopPropagation();
          this.deselectAll();
        }
      });
      EventHandler.on(this._wrapperElement, EVENT_CLICK$3, () => {
        if (!this._config.disabled) {
          this.show();
        }
      });
      EventHandler.on(this._wrapperElement, EVENT_KEYDOWN$3, event => {
        if (event.key === ESCAPE_KEY$1) {
          this.hide();
          return;
        }
        if (this._config.search === 'global' && (event.key.length === 1 || event.key === BACKSPACE_KEY$1 || event.key === DELETE_KEY)) {
          this._searchElement.focus();
        }
      });
      EventHandler.on(this._menu, EVENT_KEYDOWN$3, event => {
        if (this._config.search === 'global' && (event.key.length === 1 || event.key === BACKSPACE_KEY$1 || event.key === DELETE_KEY)) {
          this._searchElement.focus();
        }
      });
      EventHandler.on(this._togglerElement, EVENT_KEYDOWN$3, event => {
        if (!this._isShown() && (event.key === ENTER_KEY || event.key === ARROW_DOWN_KEY$2)) {
          event.preventDefault();
          this.show();
          return;
        }
        if (this._isShown() && event.key === ARROW_DOWN_KEY$2) {
          event.preventDefault();
          this._selectMenuItem(event);
        }
      });

      // Validation focuses the overlay select; hand its keystrokes to the custom control.
      EventHandler.on(this._element, EVENT_KEYDOWN$3, event => {
        if (event.key === TAB_KEY || event.key === ESCAPE_KEY$1) {
          return;
        }

        // Suppress the native select's own keyboard behavior (typeahead, value change).
        event.preventDefault();
        const isPrintable = event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey;
        if (!this._isShown() && (event.key === ENTER_KEY || event.key === ARROW_DOWN_KEY$2 || this._config.search && isPrintable)) {
          this.show();
        }
        if (this._config.search) {
          this._searchElement.focus();

          // The keystroke can't be retargeted mid-event, so inject the character that
          // would otherwise be lost and start filtering on this first press.
          if (isPrintable) {
            this._searchElement.value += event.key;
            this._onSearchChange(this._searchElement);
          }
        } else {
          this._togglerElement.focus();
        }
      });
      EventHandler.on(this._indicatorElement, EVENT_CLICK$3, event => {
        event.preventDefault();
        event.stopPropagation();
        this.toggle();
      });
      EventHandler.on(this._searchElement, EVENT_KEYUP, () => {
        this._onSearchChange(this._searchElement);
      });
      EventHandler.on(this._searchElement, EVENT_KEYDOWN$3, event => {
        if (!this._isShown() && event.key.length === 1 && !event.ctrlKey && !event.metaKey || event.key === ARROW_DOWN_KEY$2) {
          this.show();
        }
        if (event.key === ARROW_DOWN_KEY$2 && this._searchElement.value.length === this._searchElement.selectionStart) {
          this._selectMenuItem(event);
          return;
        }
        if ((event.key === BACKSPACE_KEY$1 || event.key === DELETE_KEY) && event.target.value.length === 0) {
          this._deselectLastOption();
        }
        this._searchElement.focus();
      });
      if (this._selectAllElement) {
        EventHandler.on(this._selectAllElement, EVENT_CLICK$3, event => {
          if (this._selectAllElement.disabled) {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          this._toggleSelectAll();
        });

        // The select all button lives in the header, outside the options list, so it
        // needs its own arrow-key handler to join the navigation flow (Enter/Space
        // already toggle via the native button click above).
        EventHandler.on(this._selectAllElement, EVENT_KEYDOWN$3, event => {
          if ([ARROW_UP_KEY$2, ARROW_DOWN_KEY$2].includes(event.key)) {
            event.preventDefault();
            this._selectMenuItem(event);
          }
        });
      }
      EventHandler.on(this._optionsElement, EVENT_CLICK$3, event => {
        event.preventDefault();
        event.stopPropagation();
        this._onOptionsClick(event.target);
      });
      EventHandler.on(this._optionsElement, EVENT_KEYDOWN$3, event => {
        if (event.key === ENTER_KEY || event.key === SPACE_KEY) {
          // Space would otherwise scroll the options list.
          event.preventDefault();
          this._onOptionsClick(event.target);
        }
        if ([ARROW_UP_KEY$2, ARROW_DOWN_KEY$2].includes(event.key)) {
          event.preventDefault();
          this._selectMenuItem(event);
        }
      });
    }
    _getOptions() {
      if (this._config.options) {
        return this._getOptionsFromConfig();
      }
      return this._getOptionsFromElement();
    }
    _getOptionsFromConfig(options = this._config.options) {
      const _options = [];
      for (const option of options) {
        if (this._isOptionGroup(option)) {
          const customGroupProperties = {
            ...option
          };
          delete customGroupProperties.label;
          delete customGroupProperties.options;
          _options.push({
            ...customGroupProperties,
            label: option.label,
            options: this._getOptionsFromConfig(option.options)
          });
          continue;
        }
        const value = String(option.value);
        const isSelected = option.selected || this._config.value && this._config.value.includes(value);
        const shouldSelect = isSelected && !this._isSelectionLimitReached();
        const customProperties = typeof option === 'object' ? {
          ...option
        } : {};
        delete customProperties.value;
        delete customProperties.selected;
        delete customProperties.disabled;
        _options.push({
          ...customProperties,
          value,
          ...(shouldSelect && {
            selected: true
          }),
          ...(option.disabled && {
            disabled: true
          })
        });
        if (shouldSelect) {
          this._selected.push({
            value: String(option.value),
            text: option.text
          });
        }
      }
      return _options;
    }
    _getOptionsFromElement(node = this._element) {
      const nodes = Array.from(node.childNodes).filter(element => element.nodeName === 'OPTION' || element.nodeName === 'OPTGROUP');
      const options = [];
      for (const node of nodes) {
        if (node.nodeName === 'OPTION' && node.value) {
          const value = String(node.value);
          const text = node.textContent;
          const isSelected = node.selected || this._config.value && this._config.value.includes(node.value);
          const shouldSelect = isSelected && !this._isSelectionLimitReached();
          options.push({
            value,
            text,
            selected: shouldSelect,
            disabled: node.disabled
          });
          node.selected = shouldSelect;
          if (shouldSelect) {
            this._selected.push({
              value,
              text: node.textContent,
              ...(node.disabled && {
                disabled: true
              })
            });
          }
        }
        if (node.nodeName === 'OPTGROUP') {
          options.push({
            label: node.label,
            options: this._getOptionsFromElement(node)
          });
        }
      }
      return options;
    }
    _configureNativeSelect() {
      this._element.classList.add(CLASS_NAME_SELECT);

      // Set or clear so update() can flip these on or off.
      if (this._config.multiple) {
        this._element.setAttribute('multiple', true);
      } else {
        this._element.removeAttribute('multiple');
      }
      if (this._config.required) {
        this._element.setAttribute('required', true);
      } else {
        this._element.removeAttribute('required');
      }
    }
    _createNativeOptions(parentElement, options) {
      for (const option of options) {
        if (this._isOptionGroup(option)) {
          const optgroup = document.createElement('optgroup');
          optgroup.label = option.label;
          this._createNativeOptions(optgroup, option.options);
          parentElement.append(optgroup);
        } else {
          const opt = document.createElement('OPTION');
          opt.value = option.value;
          if (option.disabled === true) {
            opt.setAttribute('disabled', 'disabled');
          }
          if (option.selected === true) {
            opt.setAttribute('selected', 'selected');
          }
          opt.textContent = option.text;
          parentElement.append(opt);
        }
      }
    }
    _hideNativeSelect() {
      this._element.tabIndex = '-1';
    }
    _createSelect() {
      const wrapper = document.createElement('div');
      wrapper.classList.add(CLASS_NAME_SELECT);
      wrapper.classList.toggle('is-invalid', this._config.invalid);
      wrapper.classList.toggle('is-valid', this._config.valid);
      if (this._config.disabled) {
        this._element.classList.add(CLASS_NAME_DISABLED$2);
      }
      for (const className of this._element.classList.value.split(' ')) {
        wrapper.classList.add(className);
      }
      this._wrapperElement = wrapper;
      // The wrapper takes the native select's place, then the select moves inside it
      // as an invisible overlay so native `required` validation anchors over the control.
      this._element.parentNode.insertBefore(wrapper, this._element);
      wrapper.prepend(this._element);
      this._createSelection();
      this._createButtons();
      if (this._config.search) {
        this._createSearchInput();
        this._updateSearch();
      }
      this._element.setAttribute('id', this._uniqueId);
      this._element.setAttribute('name', this._uniqueName);
      this._createOptionsContainer();
      this._hideNativeSelect();
      this._selectInitialOptions();
    }
    _createSelection() {
      const togglerEl = document.createElement('div');
      togglerEl.classList.add(CLASS_NAME_INPUT_GROUP);
      togglerEl.setAttribute('role', 'combobox');
      togglerEl.setAttribute('aria-expanded', 'false');
      togglerEl.setAttribute('aria-haspopup', 'listbox');
      togglerEl.setAttribute('aria-controls', `${this._uniqueId}-listbox`);
      this._togglerElement = togglerEl;
      if (this._config.disabled) {
        togglerEl.setAttribute('aria-disabled', 'true');
      }
      if (!this._config.search && !this._config.disabled) {
        togglerEl.tabIndex = 0;
      }
      const selectionEl = document.createElement('div');
      selectionEl.classList.add(CLASS_NAME_SELECTION);
      selectionEl.setAttribute('aria-live', 'polite');
      if (this._config.multiple && this._config.selectionType === 'tags') {
        selectionEl.classList.add(CLASS_NAME_SELECTION_TAGS);
      }
      togglerEl.append(selectionEl);
      this._wrapperElement.append(togglerEl);
      this._updateSelection();
      this._selectionElement = selectionEl;
    }
    _createButtons() {
      const buttons = document.createElement('div');
      buttons.classList.add(CLASS_NAME_BUTTONS);
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.classList.add('form-multi-select-indicator');
      indicator.setAttribute('aria-label', this._config.ariaIndicatorLabel);
      if (this._config.disabled) {
        indicator.tabIndex = -1;
      }
      buttons.append(indicator);
      this._indicatorElement = indicator;
      this._togglerElement.append(buttons);
      this._updateSelectionCleaner();
    }
    _createSelectionCleaner() {
      const cleaner = document.createElement('button');
      cleaner.type = 'button';
      cleaner.classList.add(CLASS_NAME_CLEANER);
      cleaner.setAttribute('aria-label', this._config.ariaCleanerLabel);
      return cleaner;
    }
    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('CoreUI\'s multi select require Popper (https://popper.js.org)');
      }
      const popperConfig = {
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: 'clippingParents'
          }
        }, {
          name: 'offset',
          options: {
            offset: [0, 2]
          }
        }],
        placement: isRTL() ? 'bottom-end' : 'bottom-start'
      };
      this._popper = Popper__namespace.createPopper(this._togglerElement, this._menu, popperConfig);
    }
    _createSearchInput() {
      const input = document.createElement('input');
      input.classList.add(CLASS_NAME_SEARCH);
      if (this._config.disabled) {
        input.disabled = true;
      }
      input.setAttribute('id', `search-${this._uniqueId}`);
      input.setAttribute('name', `search-${this._uniqueName}`);
      input.setAttribute('aria-label', this._config.ariaSearchLabel);
      input.setAttribute('aria-autocomplete', 'list');
      input.setAttribute('aria-controls', `${this._uniqueId}-listbox`);
      this._searchElement = input;
      this._updateSearchSize();
      this._selectionElement.append(input);
    }
    _createOptionsContainer() {
      const dropdownDiv = document.createElement('div');
      dropdownDiv.classList.add(CLASS_NAME_SELECT_DROPDOWN);
      const hasHeaderTemplate = typeof this._config.headerTemplate === 'function';
      const showSelectAll = this._config.selectAll && this._config.multiple;
      if (hasHeaderTemplate || showSelectAll) {
        const header = document.createElement('div');
        header.classList.add(CLASS_NAME_DROPDOWN_HEADER);
        if (hasHeaderTemplate) {
          const headerContent = document.createElement('div');

          // Keep interactions with custom controls from closing the dropdown,
          // mirroring the built-in button's stopPropagation behavior.
          EventHandler.on(headerContent, EVENT_CLICK$3, event => {
            event.stopPropagation();
          });
          this._headerElement = headerContent;
          header.append(headerContent);
        } else {
          const selectAllButton = document.createElement('button');
          selectAllButton.type = 'button';
          selectAllButton.classList.add(CLASS_NAME_SELECT_ALL);
          if (this._config.selectAllStyle === 'checkbox' && this._config.multiple) {
            selectAllButton.classList.add(CLASS_NAME_SELECT_ALL_WITH_CHECKBOX);
          }
          this._selectAllElement = selectAllButton;
          header.append(selectAllButton);
        }
        dropdownDiv.append(header);
      }
      const optionsDiv = document.createElement('div');
      optionsDiv.classList.add(CLASS_NAME_OPTIONS);
      optionsDiv.setAttribute('role', 'listbox');
      optionsDiv.setAttribute('id', `${this._uniqueId}-listbox`);
      if (this._config.multiple) {
        optionsDiv.setAttribute('aria-multiselectable', 'true');
      }
      if (this._config.optionsMaxHeight !== 'auto') {
        optionsDiv.style.maxHeight = `${this._config.optionsMaxHeight}px`;
        optionsDiv.style.overflow = 'auto';
      }
      dropdownDiv.append(optionsDiv);
      const {
        container
      } = this._config;
      if (container) {
        container.append(dropdownDiv);
      } else {
        this._wrapperElement.append(dropdownDiv);
      }
      this._createOptions(optionsDiv, this._options);
      this._optionsElement = optionsDiv;
      this._menu = dropdownDiv;
      this._updateHeader();
      this._updateGroupsState();
      this._updateMasterCheckbox();
    }
    _createOptions(parentElement, options) {
      for (const option of options) {
        if (!this._isOptionGroup(option)) {
          const optionDiv = document.createElement('div');
          optionDiv.classList.add(CLASS_NAME_OPTION);
          if (option.disabled) {
            optionDiv.classList.add(CLASS_NAME_DISABLED$2);
          }
          if (this._config.optionsStyle === 'checkbox') {
            optionDiv.classList.add(CLASS_NAME_OPTION_WITH_CHECKBOX);
          }
          optionDiv.dataset.value = String(option.value);
          optionDiv.tabIndex = 0;
          optionDiv.setAttribute('role', 'option');
          optionDiv.setAttribute('aria-selected', option.selected === true ? 'true' : 'false');
          if (typeof this._config.optionsTemplate === 'function') {
            optionDiv.innerHTML = this._maybeSanitize(this._config.optionsTemplate(option));
          } else {
            optionDiv.textContent = option.text;
          }
          parentElement.append(optionDiv);
        }
        if (this._isOptionGroup(option)) {
          const optgroup = document.createElement('div');
          optgroup.classList.add(CLASS_NAME_OPTGROUP);
          const optgrouplabel = document.createElement('div');
          if (typeof this._config.optionsGroupsTemplate === 'function') {
            optgrouplabel.innerHTML = this._maybeSanitize(this._config.optionsGroupsTemplate(option));
          } else {
            optgrouplabel.textContent = option.label;
          }
          optgrouplabel.classList.add(CLASS_NAME_OPTGROUP_LABEL);
          if (this._config.optionsGroupsSelectable && this._config.optionsGroupsStyle === 'checkbox' && this._config.multiple) {
            optgrouplabel.classList.add(CLASS_NAME_OPTGROUP_LABEL_WITH_CHECKBOX);
            optgrouplabel.tabIndex = 0;
            optgrouplabel.setAttribute('role', 'button');
          }
          optgroup.append(optgrouplabel);
          this._createOptions(optgroup, option.options);
          parentElement.append(optgroup);
        }
      }
    }
    _createTag(value, text, disabled) {
      const tag = document.createElement('div');
      tag.classList.add(CLASS_NAME_TAG);
      tag.dataset.value = value;
      tag.textContent = text;
      if (!this._config.disabled && disabled !== true) {
        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.classList.add(CLASS_NAME_TAG_DELETE);
        closeBtn.setAttribute('aria-label', `${this._config.ariaTagDeleteLabel} ${text}`.trim());
        tag.append(closeBtn);
      }
      return tag;
    }
    _updateTags(selection, search) {
      const placeholder = SelectorEngine.findOne('.form-multi-select-placeholder', selection);
      if (placeholder) {
        placeholder.remove();
      }
      const existingTags = new Map();
      for (const tag of SelectorEngine.children(selection, SELECTOR_TAG)) {
        existingTags.set(tag.dataset.value, tag);
      }
      const selectedValues = new Set(this._selected.map(option => String(option.value)));
      for (const [value, tag] of existingTags) {
        if (!selectedValues.has(value)) {
          tag.remove();
          existingTags.delete(value);
        }
      }
      for (const option of this._selected) {
        const value = String(option.value);
        const tag = existingTags.get(value) || this._createTag(option.value, option.text, option.disabled);
        if (search) {
          search.before(tag);
        } else {
          selection.append(tag);
        }
      }
    }
    _onOptionsClick(element) {
      if (this._config.optionsGroupsSelectable) {
        const groupLabel = element.closest(`.${CLASS_NAME_OPTGROUP_LABEL_WITH_CHECKBOX}`);
        if (groupLabel) {
          this._toggleGroup(groupLabel.closest(SELECTOR_OPTGROUP));
          return;
        }
      }
      if (element.classList.contains(CLASS_NAME_LABEL)) {
        return;
      }
      if (!element.classList.contains(CLASS_NAME_OPTION)) {
        element = element.closest(SELECTOR_OPTION);
        if (!element) {
          return;
        }
      }
      const value = String(element.dataset.value);
      const {
        text
      } = this._findOptionByValue(value);
      if (this._config.multiple && element.classList.contains(CLASS_NAME_SELECTED)) {
        this._deselectOption(value);
      } else if (this._config.multiple && !element.classList.contains(CLASS_NAME_SELECTED)) {
        this._selectOption(value, text);
      } else if (!this._config.multiple) {
        this._selectOption(value, text);
      }
      if (!this._config.multiple) {
        this.hide();
        this.search('');
        this._searchElement.value = null;
      }
      if (this._config.clearSearchOnSelect && this._config.search) {
        this.search('');
        this._searchElement.value = null;
        this._searchElement.focus();
      }
    }
    _findOptionByValue(value, options = this._options) {
      for (const option of options) {
        if (String(option.value) === value) {
          return option;
        }
        if (this._isOptionGroup(option)) {
          const found = this._findOptionByValue(value, option.options);
          if (found) {
            return found;
          }
        }
      }
      return null;
    }
    _selectAllOptions(options) {
      for (const option of options) {
        if (option.disabled) {
          continue;
        }
        if (this._isOptionGroup(option)) {
          if (this._selectAllOptions(option.options)) {
            return true;
          }
          continue;
        }
        if (this._isSelectionLimitReached()) {
          return true;
        }
        this._selectOption(option.value, option.text, {
          refresh: false
        });
      }
      return false;
    }
    _deselectAllOptions(options) {
      for (const option of options) {
        if (option.disabled) {
          continue;
        }
        if (this._isOptionGroup(option)) {
          this._deselectAllOptions(option.options);
          continue;
        }
        this._deselectOption(option.value, {
          refresh: false
        });
      }
    }
    _getNativeOption(value) {
      return SelectorEngine.findOne(`option[value="${CSS.escape(value)}"]`, this._element);
    }
    _getOptionElement(value) {
      return SelectorEngine.findOne(`[data-value="${CSS.escape(value)}"]`, this._optionsElement);
    }
    _getDisplayedItems() {
      return SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => this._isOptionDisplayed(element));
    }
    _maybeSanitize(content) {
      return this._config.sanitize ? sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn) : content;
    }
    _isOptionGroup(option) {
      return Array.isArray(option.options);
    }
    _selectOption(value, text, {
      refresh = true
    } = {}) {
      if (!this._config.multiple) {
        this.deselectAll();
      }
      const isSelected = this._selected.some(option => option.value === String(value));
      if (!isSelected && this._isSelectionLimitReached()) {
        this._triggerSelectionLimit();
        return;
      }
      if (!isSelected) {
        this._selected.push({
          value: String(value),
          text
        });
      }
      const nativeOption = this._getNativeOption(value);
      if (nativeOption) {
        nativeOption.selected = true;
      }
      const option = this._getOptionElement(value);
      if (option) {
        option.classList.add(CLASS_NAME_SELECTED);
        option.setAttribute('aria-selected', 'true');
      }
      EventHandler.trigger(this._element, EVENT_CHANGED, {
        value: this._selected
      });

      // During init every preselected option runs through here while `_selected` is
      // already fully populated, so callers can batch the costly DOM refresh into a
      // single `_refreshAfterSelectionChange()` instead of repeating it per option.
      if (refresh) {
        this._refreshAfterSelectionChange();
      }
    }
    _deselectOption(value, {
      refresh = true
    } = {}) {
      this._selected = this._selected.filter(option => option.value !== String(value));
      const nativeOption = this._getNativeOption(value);
      if (nativeOption) {
        nativeOption.selected = false;
      }
      const option = this._getOptionElement(value);
      if (option) {
        option.classList.remove(CLASS_NAME_SELECTED);
        option.setAttribute('aria-selected', 'false');
      }
      EventHandler.trigger(this._element, EVENT_CHANGED, {
        value: this._selected
      });
      if (refresh) {
        this._refreshAfterSelectionChange();
      }
    }
    _deselectLastOption() {
      if (this._selected.length > 0) {
        const last = this._selected.findLast(option => option.disabled !== true);
        if (last) {
          this._deselectOption(last.value);
        }
      }
    }
    _refreshAfterSelectionChange() {
      this._updateSelection();
      this._updateSelectionCleaner();
      this._updateSearch();
      this._updateSearchSize();
      this._updateHeader();
      this._updateGroupsState();
      this._updateMasterCheckbox();
    }
    _toggleGroup(optgroupEl) {
      if (!optgroupEl) {
        return;
      }
      const items = SelectorEngine.children(optgroupEl, SELECTOR_OPTION).filter(element => !element.classList.contains(CLASS_NAME_DISABLED$2));
      const allSelected = items.length > 0 && items.every(element => element.classList.contains(CLASS_NAME_SELECTED));
      let limitReached = false;
      for (const item of items) {
        const value = String(item.dataset.value);
        if (allSelected) {
          this._deselectOption(value, {
            refresh: false
          });
        } else if (!item.classList.contains(CLASS_NAME_SELECTED)) {
          if (this._isSelectionLimitReached()) {
            limitReached = true;
            break;
          }
          const option = this._findOptionByValue(value);
          if (option) {
            this._selectOption(value, option.text, {
              refresh: false
            });
          }
        }
      }
      this._refreshAfterSelectionChange();
      if (limitReached) {
        this._triggerSelectionLimit();
      }
    }
    _selectInitialOptions() {
      // `_selected` is already fully populated by `_getOptions()` before this runs,
      // so iterate it directly (no tree walk) and batch the DOM refresh into one call.
      for (const option of this._selected) {
        this._selectOption(option.value, option.text, {
          refresh: false
        });
      }
      this._refreshAfterSelectionChange();
    }
    _updateSelection() {
      const selection = SelectorEngine.findOne(SELECTOR_SELECTION, this._wrapperElement);
      const search = SelectorEngine.findOne(SELECTOR_SEARCH, this._wrapperElement);
      if (this._selected.length === 0 && !this._config.search) {
        const placeholder = document.createElement('span');
        placeholder.classList.add('form-multi-select-placeholder');
        placeholder.textContent = this._config.placeholder;
        selection.innerHTML = '';
        selection.append(placeholder);
        return;
      }
      if (this._config.multiple && this._config.selectionType === 'counter' && !this._config.search) {
        selection.textContent = `${this._selected.length} ${this._config.selectionTypeCounterText}`;
      }
      if (this._config.multiple && this._config.selectionType === 'tags') {
        this._updateTags(selection, search);
      }
      if (this._config.multiple && this._config.selectionType === 'text') {
        selection.innerHTML = '';
        for (const [index, option] of this._selected.entries()) {
          const span = document.createElement('span');
          span.textContent = `${option.text}${index === this._selected.length - 1 ? '' : ','}\u00A0`;
          selection.append(span);
        }
      }
      if (!this._config.multiple && this._selected.length > 0 && !this._config.search) {
        selection.textContent = this._selected[0].text;
      }
      if (search) {
        selection.append(search);
      }
      if (this._popper) {
        this._popper.update();
      }
    }
    _updateSelectionCleaner() {
      if (!this._config.cleaner || this._config.disabled) {
        return;
      }
      if (this._selected.length > 0 && this._selectionCleanerElement === null) {
        const buttons = SelectorEngine.findOne(`.${CLASS_NAME_BUTTONS}`, this._wrapperElement);
        const selectionCleaner = this._createSelectionCleaner();
        buttons.insertBefore(selectionCleaner, this._indicatorElement);
        this._selectionCleanerElement = selectionCleaner;
        return;
      }
      if (this._selected.length === 0 && this._selectionCleanerElement !== null) {
        this._selectionCleanerElement.remove();
        this._selectionCleanerElement = null;
      }
    }
    _updateSearch() {
      if (!this._config.search) {
        return;
      }

      // Select single

      if (!this._config.multiple && this._selected.length > 0) {
        this._searchElement.placeholder = this._selected[0].text;
        return;
      }
      if (!this._config.multiple && this._selected.length === 0) {
        this._searchElement.placeholder = this._config.placeholder;
        return;
      }

      // Select multiple

      if (this._config.multiple && this._selected.length > 0 && this._config.selectionType !== 'counter') {
        this._searchElement.removeAttribute('placeholder');
        return;
      }
      if (this._config.multiple && this._selected.length === 0) {
        this._searchElement.placeholder = this._config.placeholder;
        return;
      }
      if (this._config.multiple && this._config.selectionType === 'counter') {
        this._searchElement.placeholder = `${this._selected.length} ${this._config.selectionTypeCounterText}`;
      }
    }
    _updateSearchSize(size = 2) {
      if (!this._searchElement || !this._config.multiple) {
        return;
      }
      if (this._selected.length > 0 && (this._config.selectionType === 'tags' || this._config.selectionType === 'text')) {
        this._searchElement.size = size;
        return;
      }
      if (this._selected.length === 0 && (this._config.selectionType === 'tags' || this._config.selectionType === 'text')) {
        this._searchElement.removeAttribute('size');
      }
    }
    _updateHeader() {
      if (this._headerElement) {
        this._renderHeader();
        return;
      }
      if (!this._selectAllElement) {
        return;
      }
      this._selectAllElement.textContent = this._getSelectAllLabel();
    }
    _getSelectAllLabel() {
      const allSelected = this._isAllSelected();
      if (this._isFilteredScopeNarrowed()) {
        return allSelected ? this._config.deselectFilteredLabel : this._config.selectFilteredLabel;
      }
      return allSelected ? this._config.deselectAllLabel : this._config.selectAllLabel;
    }
    _isAllSelected() {
      const {
        selected,
        total
      } = this._getSelectAllScope();
      const target = this._getSelectableTarget(total);
      return target > 0 && selected >= target;
    }
    _getSelectAllScope() {
      const {
        selected,
        total,
        filtered,
        filteredSelected
      } = this._getSelectionState();
      return this._config.selectAllMode === 'filtered' ? {
        selected: filteredSelected,
        total: filtered
      } : {
        selected,
        total
      };
    }
    _isFilteredScopeNarrowed() {
      if (this._config.selectAllMode !== 'filtered') {
        return false;
      }
      const {
        filtered,
        total
      } = this._getSelectionState();
      return filtered < total;
    }
    _toggleSelectAll() {
      const filteredMode = this._config.selectAllMode === 'filtered';
      if (this._isAllSelected()) {
        if (filteredMode) {
          this.deselectFiltered();
        } else {
          this.deselectAll();
        }
        return;
      }
      if (filteredMode) {
        this.selectFiltered();
      } else {
        this.selectAll();
      }
    }
    _getSelectableTarget(total) {
      return this._hasSelectionLimit() ? Math.min(total, this._config.selectionLimit) : total;
    }
    _getCheckboxState(selected, total) {
      if (total > 0 && selected >= total) {
        return 'all';
      }
      return selected === 0 ? 'none' : 'indeterminate';
    }
    _applyCheckboxState(element, state) {
      element.classList.toggle(CLASS_NAME_SELECTED, state === 'all');
      element.classList.toggle(CLASS_NAME_INDETERMINATE, state === 'indeterminate');
    }
    _updateGroupsState() {
      if (!this._config.optionsGroupsSelectable) {
        return;
      }
      for (const optgroup of SelectorEngine.find(`.${CLASS_NAME_OPTGROUP}`, this._menu)) {
        const label = SelectorEngine.findOne(`.${CLASS_NAME_OPTGROUP_LABEL_WITH_CHECKBOX}`, optgroup);
        if (!label) {
          continue;
        }
        const items = SelectorEngine.children(optgroup, SELECTOR_OPTION).filter(element => !element.classList.contains(CLASS_NAME_DISABLED$2));
        const selected = items.filter(element => element.classList.contains(CLASS_NAME_SELECTED)).length;
        this._applyCheckboxState(label, this._getCheckboxState(selected, items.length));
      }
    }
    _updateMasterCheckbox() {
      if (this._config.selectAllStyle !== 'checkbox' || !this._selectAllElement) {
        return;
      }
      const {
        selected,
        total
      } = this._getSelectAllScope();
      this._applyCheckboxState(this._selectAllElement, this._getCheckboxState(selected, this._getSelectableTarget(total)));
    }
    _renderHeader() {
      if (!this._headerElement || typeof this._config.headerTemplate !== 'function') {
        return;
      }
      const result = this._config.headerTemplate(this._getSelectionState(), this._getSelectionActions());
      if (result instanceof Node) {
        this._headerElement.replaceChildren(result);
      } else {
        this._headerElement.innerHTML = this._maybeSanitize(result);
      }
    }
    _getSelectionState() {
      const allItems = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu);
      const filteredItems = allItems.filter(element => this._isOptionDisplayed(element));
      return {
        selected: this._selected.length,
        total: allItems.length,
        filtered: filteredItems.length,
        filteredSelected: filteredItems.filter(element => element.classList.contains(CLASS_NAME_SELECTED)).length
      };
    }
    _getSelectionActions() {
      return {
        selectAll: () => this.selectAll(),
        deselectAll: () => this.deselectAll(),
        selectFiltered: () => this.selectFiltered(),
        deselectFiltered: () => this.deselectFiltered()
      };
    }
    _onSearchChange(element) {
      if (element) {
        this.search(element.value);
        this._updateSearchSize(element.value.length + 1);
      }
    }

    // Checks only `display` (unlike the imported `isVisible`) so it still works while
    // the menu is closed, e.g. when called from the constructor.
    _isOptionDisplayed(element) {
      const style = window.getComputedStyle(element);
      return style.display !== 'none';
    }
    _isShown() {
      return this._wrapperElement.classList.contains(CLASS_NAME_SHOW$7);
    }
    _hasSelectionLimit() {
      return this._config.multiple && this._config.selectionLimit !== null;
    }
    _isSelectionLimitReached() {
      return this._hasSelectionLimit() && this._selected.length >= this._config.selectionLimit;
    }
    _triggerSelectionLimit() {
      EventHandler.trigger(this._element, EVENT_SELECTION_LIMIT, {
        selectionLimit: this._config.selectionLimit
      });
    }
    _filterOptionsList() {
      const options = SelectorEngine.find(SELECTOR_OPTION, this._menu);
      let visibleOptions = 0;
      for (const option of options) {
        // eslint-disable-next-line unicorn/prefer-includes
        if (option.textContent.toLowerCase().indexOf(this._search) === -1) {
          option.style.display = 'none';
        } else {
          option.style.removeProperty('display');
          visibleOptions++;
        }
        const optgroup = option.closest(SELECTOR_OPTGROUP);
        if (optgroup) {
          // eslint-disable-next-line  unicorn/prefer-array-some
          if (SelectorEngine.children(optgroup, SELECTOR_OPTION).filter(element => this._isOptionDisplayed(element)).length > 0) {
            optgroup.style.removeProperty('display');
          } else {
            optgroup.style.display = 'none';
          }
        }
      }
      this._updateHeader();
      this._updateMasterCheckbox();
      const emptyMessage = SelectorEngine.findOne(SELECTOR_OPTIONS_EMPTY, this._menu);
      if (visibleOptions > 0) {
        if (emptyMessage) {
          emptyMessage.remove();
        }
        return;
      }
      if (visibleOptions === 0 && !emptyMessage) {
        const placeholder = document.createElement('div');
        placeholder.classList.add(CLASS_NAME_OPTIONS_EMPTY);
        placeholder.setAttribute('role', 'status');
        placeholder.textContent = this._config.searchNoResultsLabel;
        SelectorEngine.findOne(SELECTOR_OPTIONS, this._menu).append(placeholder);
      }
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_NAVIGABLE_ITEMS, this._menu).filter(element => isVisible(element));
      if (!items.length) {
        return;
      }

      // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$2, !items.includes(target)).focus();
    }
    _configAfterMerge(config) {
      if (config.container === true) {
        config.container = document.body;
      }
      if (typeof config.container === 'object' || typeof config.container === 'string') {
        config.container = getElement(config.container);
      }
      if (typeof config.value === 'number') {
        config.value = [String(config.value)];
      }
      if (typeof config.value === 'string') {
        config.value = config.value.split(/,\s*/).map(String);
      }
      return config;
    }

    // Static

    static multiSelectInterface(element, config) {
      const data = MultiSelect.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        MultiSelect.multiSelectInterface(this, config);
      });
    }
    static clearMenus(event) {
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
        return;
      }
      const selects = SelectorEngine.find(SELECTOR_SELECT);
      for (let i = 0, len = selects.length; i < len; i++) {
        const context = Data.get(selects[i], DATA_KEY$c);
        ({
          relatedTarget: selects[i]
        });
        if (event && event.type === 'click') ;
        if (!context) {
          continue;
        }
        if (!context._wrapperElement.classList.contains(CLASS_NAME_SHOW$7)) {
          continue;
        }
        if (context._wrapperElement.contains(event.target)) {
          continue;
        }
        context.hide();
        EventHandler.trigger(context._element, EVENT_HIDDEN$5);
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$9, () => {
    const elements = new Set([...SelectorEngine.find(SELECTOR_DATA_MULTI_SELECT), ...SelectorEngine.find(SELECTOR_SELECT)]);
    for (const ms of elements) {
      if (ms.tabIndex !== -1) {
        MultiSelect.multiSelectInterface(ms);
      }
    }
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$7, MultiSelect.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API$1, MultiSelect.clearMenus);

  /**
   * jQuery
   */

  defineJQueryPlugin(MultiSelect);

  /**
   * --------------------------------------------------------------------------
   * CoreUI navigation.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$e = 'navigation';
  const DATA_KEY$b = 'coreui.navigation';
  const EVENT_KEY$b = `.${DATA_KEY$b}`;
  const DATA_API_KEY$8 = '.data-api';
  const Default$c = {
    activeLinksExact: true,
    groupsAutoCollapse: true
  };
  const DefaultType$c = {
    activeLinksExact: 'boolean',
    groupsAutoCollapse: '(string|boolean)'
  };
  const CLASS_NAME_ACTIVE$5 = 'active';
  const CLASS_NAME_SHOW$6 = 'show';
  const CLASS_NAME_NAV_GROUP = 'nav-group';
  const CLASS_NAME_NAV_GROUP_TOGGLE = 'nav-group-toggle';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$b}${DATA_API_KEY$8}`;
  const EVENT_LOAD_DATA_API$8 = `load${EVENT_KEY$b}${DATA_API_KEY$8}`;
  const SELECTOR_NAV_GROUP = '.nav-group';
  const SELECTOR_NAV_GROUP_ITEMS = '.nav-group-items';
  const SELECTOR_NAV_GROUP_TOGGLE = '.nav-group-toggle';
  const SELECTOR_NAV_LINK = '.nav-link';
  const SELECTOR_DATA_NAVIGATION = '[data-coreui-navigation], [data-coreui="navigation"]';

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Navigation extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._setActiveLink();
      this._addEventListeners();
      Data.set(element, DATA_KEY$b, this);
    }
    // Getters

    static get Default() {
      return Default$c;
    }
    static get DATA_KEY() {
      return DATA_KEY$b;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$e;
    }

    // Private

    _setActiveLink() {
      for (const element of Array.from(this._element.querySelectorAll(SELECTOR_NAV_LINK))) {
        if (element.classList.contains(CLASS_NAME_NAV_GROUP_TOGGLE)) {
          continue;
        }
        let currentUrl = String(window.location);
        const urlHasParams = /\?.*=/;
        const urlHasQueryString = /\?./;
        const urlHasHash = /#./;
        if (urlHasParams.test(currentUrl) || urlHasQueryString.test(currentUrl)) {
          currentUrl = currentUrl.split('?')[0];
        }
        if (urlHasHash.test(currentUrl)) {
          currentUrl = currentUrl.split('#')[0];
        }
        if (this._config.activeLinksExact && element.href === currentUrl) {
          element.classList.add(CLASS_NAME_ACTIVE$5);
          // eslint-disable-next-line unicorn/no-array-for-each
          Array.from(this._getParents(element, SELECTOR_NAV_GROUP)).forEach(element => {
            element.classList.add(CLASS_NAME_SHOW$6);
            element.setAttribute('aria-expanded', true);
          });
        }
        if (!this._config.activeLinksExact && currentUrl.startsWith(element.href)) {
          element.classList.add(CLASS_NAME_ACTIVE$5);
          // eslint-disable-next-line unicorn/no-array-for-each
          Array.from(this._getParents(element, SELECTOR_NAV_GROUP)).forEach(element => {
            element.classList.add(CLASS_NAME_SHOW$6);
            element.setAttribute('aria-expanded', true);
          });
        }
      }
    }
    _getParents(element, selector) {
      // Setup parents array
      const parents = [];

      // Get matching parent elements
      for (; element && element !== document; element = element.parentNode) {
        // Add matching parents to array
        if (selector) {
          if (element.matches(selector)) {
            parents.push(element);
          }
        } else {
          parents.push(element);
        }
      }
      return parents;
    }
    _getAllSiblings(element, filter) {
      const siblings = [];
      element = element.parentNode.firstChild;
      do {
        if (element.nodeType === 3) {
          continue; // text node
        }
        if (element.nodeType === 8) {
          continue; // comment node
        }
        if (!filter || filter(element)) {
          siblings.push(element);
        }

        // eslint-disable-next-line no-cond-assign
      } while (element = element.nextSibling);
      return siblings;
    }
    _getChildren(n, skipMe) {
      const children = [];
      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== skipMe) {
          children.push(n);
        }
      }
      return children;
    }
    _getSiblings(element, filter) {
      const siblings = this._getChildren(element.parentNode.firstChild, element).filter(filter);
      return siblings;
    }
    _slideDown(element) {
      element.style.height = 'auto';
      const height = element.clientHeight;
      element.style.height = '0px';
      setTimeout(() => {
        element.style.height = `${height}px`;
      }, 0);
      this._queueCallback(() => {
        element.style.height = 'auto';
      }, element, true);
    }
    _slideUp(element, callback) {
      const height = element.clientHeight;
      element.style.height = `${height}px`;
      setTimeout(() => {
        element.style.height = '0px';
      }, 0);
      this._queueCallback(() => {
        if (typeof callback === 'function') {
          callback();
        }
      }, element, true);
    }
    _toggleGroupItems(event) {
      let toggler = event.target;
      if (!toggler.classList.contains(CLASS_NAME_NAV_GROUP_TOGGLE)) {
        toggler = toggler.closest(SELECTOR_NAV_GROUP_TOGGLE);
      }
      const filter = element => Boolean(element.classList.contains(CLASS_NAME_NAV_GROUP) && element.classList.contains(CLASS_NAME_SHOW$6));

      // Close other groups
      if (this._config.groupsAutoCollapse === true) {
        for (const element of this._getSiblings(toggler.parentNode, filter)) {
          this._slideUp(SelectorEngine.findOne(SELECTOR_NAV_GROUP_ITEMS, element), () => {
            element.classList.remove(CLASS_NAME_SHOW$6);
            element.setAttribute('aria-expanded', false);
          });
        }
      }
      if (toggler.parentNode.classList.contains(CLASS_NAME_SHOW$6)) {
        this._slideUp(SelectorEngine.findOne(SELECTOR_NAV_GROUP_ITEMS, toggler.parentNode), () => {
          toggler.parentNode.classList.remove(CLASS_NAME_SHOW$6);
          toggler.parentNode.setAttribute('aria-expanded', false);
        });
        return;
      }
      toggler.parentNode.classList.add(CLASS_NAME_SHOW$6);
      toggler.parentNode.setAttribute('aria-expanded', true);
      this._slideDown(SelectorEngine.findOne(SELECTOR_NAV_GROUP_ITEMS, toggler.parentNode));
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$6, SELECTOR_NAV_GROUP_TOGGLE, event => {
        event.preventDefault();
        this._toggleGroupItems(event, this);
      });
    }

    // Static

    static navigationInterface(element, config) {
      const data = Navigation.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        Navigation.navigationInterface(this, config);
      });
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
  EventHandler.on(window, EVENT_LOAD_DATA_API$8, () => {
    for (const element of Array.from(document.querySelectorAll(SELECTOR_DATA_NAVIGATION))) {
      Navigation.navigationInterface(element);
    }
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Navigation to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Navigation);

  /**
   * --------------------------------------------------------------------------
   * CoreUI offcanvas.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$d = 'offcanvas';
  const DATA_KEY$a = 'coreui.offcanvas';
  const EVENT_KEY$a = `.${DATA_KEY$a}`;
  const DATA_API_KEY$7 = '.data-api';
  const EVENT_LOAD_DATA_API$7 = `load${EVENT_KEY$a}${DATA_API_KEY$7}`;
  const ESCAPE_KEY = 'Escape';
  const CLASS_NAME_SHOW$5 = 'show';
  const CLASS_NAME_SHOWING$1 = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP$1 = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$4 = `show${EVENT_KEY$a}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$a}`;
  const EVENT_HIDE$4 = `hide${EVENT_KEY$a}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$a}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$a}`;
  const EVENT_RESIZE$2 = `resize${EVENT_KEY$a}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$a}${DATA_API_KEY$7}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$a}`;
  const SELECTOR_DATA_TOGGLE$8 = '[data-coreui-toggle="offcanvas"]';
  const Default$b = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType$b = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
  };

  /**
   * Class definition
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$d;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW$5);
        this._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$5, CLASS_NAME_HIDING);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }

    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === 'static') {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };

      // 'static' option will be translated to true, and booleans will keep their value
      const isVisible = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP$1,
        isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$8, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$4, () => {
      // focus on trigger when it is closed
      if (isVisible(this)) {
        this.focus();
      }
    });

    // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$7, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE$2, () => {
    for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
      if (getComputedStyle(element).position !== 'fixed') {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);

  /**
   * jQuery
   */

  defineJQueryPlugin(Offcanvas);

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO password-input.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$c = 'otp-input';
  const DATA_KEY$9 = 'coreui.otp-input';
  const EVENT_KEY$9 = `.${DATA_KEY$9}`;
  const DATA_API_KEY$6 = '.data-api';
  const ARROW_RIGHT_KEY$2 = 'ArrowRight';
  const ARROW_LEFT_KEY$2 = 'ArrowLeft';
  const BACKSPACE_KEY = 'Backspace';
  const EVENT_CHANGE$2 = `change${EVENT_KEY$9}`;
  const EVENT_COMPLETE = `complete${EVENT_KEY$9}`;
  const EVENT_FOCUS = `focus${EVENT_KEY$9}`;
  const EVENT_INPUT$1 = `input${EVENT_KEY$9}`;
  const EVENT_KEYDOWN$2 = `keydown${EVENT_KEY$9}`;
  const EVENT_PASTE = `paste`;
  const EVENT_LOAD_DATA_API$6 = `load${EVENT_KEY$9}${DATA_API_KEY$6}`;
  const SELECTOR_FORM_OTP_CONTROL = '.form-otp-control';
  const SELECTOR_DATA_TOGGLE$7 = '[data-coreui-toggle="otp"]';
  const Default$a = {
    ariaLabel: (index, total) => `Digit ${index + 1} of ${total}`,
    autoSubmit: false,
    disabled: false,
    id: null,
    linear: true,
    masked: false,
    name: null,
    placeholder: null,
    readonly: false,
    required: false,
    type: 'number',
    value: null
  };
  const DefaultType$a = {
    ariaLabel: 'function',
    autoSubmit: 'boolean',
    disabled: 'boolean',
    id: '(string|null)',
    linear: 'boolean',
    masked: 'boolean',
    name: '(string|null)',
    placeholder: '(number|string|null)',
    readonly: 'boolean',
    required: 'boolean',
    type: 'string',
    value: '(number|string|null)'
  };

  /**
   * Class definition
   */

  class OTPInput extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._config = this._getConfig(config);
      this._inputElement = null;
      this._createHiddenInput();
      this._setRoleAttribute();
      this._setInputsAttributes();
      this._setInputsTabIndexes();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$c;
    }

    // Public
    clear() {
      const inputs = this._getInputs();
      for (const input of inputs) {
        input.value = '';
      }
      this._setHiddenInputValue(null);
      this._setInputsTabIndexes();
    }
    reset() {
      const inputs = this._getInputs();
      for (const [index, input] of inputs.entries()) {
        const valueString = String(this._config.value || '');
        input.value = valueString && valueString[index] ? valueString[index] : '';
      }
      this._setHiddenInputValue(null);
      this._setInputsTabIndexes();
    }
    update(config) {
      if (typeof config !== 'object') {
        return;
      }
      this._config = {
        ...this._config,
        ...config
      };
      this._typeCheckConfig(this._config);
      this._setInputsAttributes();
      this._setInputsTabIndexes();
      this._inputElement.remove();
      this._createHiddenInput();
    }

    // Private
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_FOCUS, SELECTOR_FORM_OTP_CONTROL, event => {
        const {
          target
        } = event;
        if (target.value) {
          setTimeout(() => {
            target.select();
          }, 0);
          return;
        }
        if (this._config.linear) {
          const inputs = this._getInputs();
          const firstEmptyInput = inputs.find(input => !input.value);
          if (firstEmptyInput && firstEmptyInput !== target) {
            firstEmptyInput.focus();
          }
        }
      });
      EventHandler.on(this._element, EVENT_INPUT$1, SELECTOR_FORM_OTP_CONTROL, event => {
        const {
          target
        } = event;
        if (target.value.length === 1 && !this._isValidInput(target.value)) {
          target.value = '';
          return;
        }
        if (target.value.length === 1) {
          const inputs = this._getInputs();
          if (!inputs.length) {
            return;
          }
          const currentValue = inputs.map(input => input.value).join('');
          this._setHiddenInputValue(currentValue);
          const nextInput = getNextActiveElement(inputs, target, true);
          if (nextInput) {
            nextInput.focus();
          }
          this._setInputsTabIndexes();
          this._checkAutoSubmit(inputs);
        }
      });
      EventHandler.on(this._element, EVENT_KEYDOWN$2, SELECTOR_FORM_OTP_CONTROL, event => {
        const {
          key,
          target
        } = event;
        if (key === BACKSPACE_KEY && target.value === '') {
          const inputs = this._getInputs();
          if (!inputs.length) {
            return;
          }
          getNextActiveElement(inputs, target, false).focus();
          const currentValue = inputs.map(input => input.value).join('');
          this._setHiddenInputValue(currentValue);
          this._setInputsTabIndexes();
          return;
        }
        if (key === ARROW_RIGHT_KEY$2) {
          if (this._config.linear && target.value === '') {
            return;
          }
          const inputs = this._getInputs();
          if (!inputs.length) {
            return;
          }

          // In RTL mode, right arrow moves to previous input, in LTR mode it moves to next input
          const shouldMoveNext = !isRTL();
          getNextActiveElement(inputs, target, shouldMoveNext).focus();
          return;
        }
        if (key === ARROW_LEFT_KEY$2) {
          const inputs = this._getInputs();
          if (!inputs.length) {
            return;
          }

          // In RTL mode, left arrow moves to next input, in LTR mode it moves to previous input
          const shouldMoveNext = isRTL();
          getNextActiveElement(inputs, target, shouldMoveNext).focus();
        }
      });
      EventHandler.on(this._element, EVENT_PASTE, SELECTOR_FORM_OTP_CONTROL, event => {
        event.preventDefault();
        const pastedData = event.clipboardData.getData('text');
        const validChars = this._extractValidChars(pastedData);
        if (!validChars) {
          return;
        }
        const inputs = this._getInputs();
        const currentIndex = inputs.indexOf(event.target);
        for (let i = 0; i < validChars.length && currentIndex + i < inputs.length; i++) {
          inputs[currentIndex + i].value = validChars[i];
        }

        // Focus the next empty input or the last filled input
        const nextEmptyIndex = currentIndex + validChars.length;
        if (nextEmptyIndex < inputs.length) {
          inputs[nextEmptyIndex].focus();
        } else {
          inputs[inputs.length - 1].focus();
        }
        this._setHiddenInputValue(validChars);
        this._setInputsTabIndexes();
        this._checkAutoSubmit(inputs);
      });
    }
    _checkAutoSubmit(inputs) {
      if (!this._config.autoSubmit) {
        return;
      }

      // Check if all inputs are filled
      const allFilled = inputs.every(input => input.value.length === 1);
      if (allFilled) {
        // Find the closest form element
        const form = this._element.closest('form');
        if (form && typeof form.requestSubmit === 'function') {
          form.requestSubmit();
        }
      }
    }
    _getInputs() {
      return SelectorEngine.find(SELECTOR_FORM_OTP_CONTROL, this._element);
    }
    _createHiddenInput() {
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      if (this._config.disabled) {
        hiddenInput.disabled = true;
      }
      if (this._config.id) {
        hiddenInput.id = this._config.id;
      }
      if (this._config.name) {
        hiddenInput.name = this._config.name;
      }
      hiddenInput.value = this._config.value || '';
      this._element.append(hiddenInput);
      this._inputElement = hiddenInput;
    }
    _extractValidChars(text) {
      switch (this._config.type) {
        case 'number':
          {
            return text.replace(/\D/g, '');
          }
        default:
          {
            return text; // Allow all characters for unknown types
          }
      }
    }
    _isValidInput(value) {
      if (value.length !== 1) {
        return false;
      }
      switch (this._config.type) {
        case 'number':
          {
            return /^\d$/.test(value);
          }
        default:
          {
            return /^[^]$/.test(value); // Allow any single character for unknown types
          }
      }
    }
    _setHiddenInputValue(value) {
      if (this._inputElement) {
        this._inputElement.value = value || '';
      }
      EventHandler.trigger(this._element, EVENT_CHANGE$2, {
        value
      });
      if (value && value.length === this._getInputs().length) {
        EventHandler.trigger(this._element, EVENT_COMPLETE, {
          value
        });
      }
    }
    _setInputsAttributes() {
      const inputs = SelectorEngine.find(SELECTOR_FORM_OTP_CONTROL, this._element);
      for (const [index, input] of inputs.entries()) {
        input.type = this._config.masked ? 'password' : 'text';
        input.maxLength = 1;
        input.autocomplete = 'off';
        if (this._config.placeholder !== null) {
          const placeholder = String(this._config.placeholder);
          input.placeholder = placeholder.length > 1 ? placeholder[index] || '' : placeholder;
        }
        if (this._config.required !== null) {
          input.setAttribute('required', true);
        }
        switch (this._config.type) {
          case 'number':
            {
              input.inputMode = 'numeric';
              input.pattern = '[0-9]*';
              break;
            }
          default:
            {
              input.inputMode = 'text';
              input.pattern = '.*';
            }
        }
        if (this._config.disabled) {
          input.disabled = true;
        }
        if (this._config.id) {
          input.id = `${this._config.id}-${index}`;
        }
        if (this._config.name) {
          input.name = `${this._config.name}-${index}`;
        }
        if (this._config.readonly) {
          input.readOnly = true;
        }
        const valueString = String(this._config.value || '');
        if (valueString && valueString[index]) {
          input.value = valueString[index];
        }
        if (typeof this._config.ariaLabel === 'function') {
          const ariaLabel = this._config.ariaLabel(index, inputs.length);
          input.setAttribute('aria-label', ariaLabel);
        }
      }
    }
    _setInputsTabIndexes() {
      if (!this._config.linear) {
        return;
      }
      const inputs = this._getInputs();
      let foundEmpty = false;
      for (const input of inputs) {
        const hasValue = input.value !== '';
        if (hasValue) {
          input.removeAttribute('tabindex');
        } else if (foundEmpty) {
          input.tabIndex = -1;
        } else {
          // First empty input - should be tabbable
          input.removeAttribute('tabindex');
          foundEmpty = true;
        }
      }
    }
    _setRoleAttribute() {
      this._element.setAttribute('role', 'group');
    }

    // Static
    static otpInputInterface(element, config) {
      const data = OTPInput.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        const data = OTPInput.getOrCreateInstance(this);
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$6, () => {
    for (const otp of SelectorEngine.find(SELECTOR_DATA_TOGGLE$7)) {
      OTPInput.otpInputInterface(otp);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(OTPInput);

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO password-input.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$b = 'password-input';
  const DATA_KEY$8 = 'coreui.password-input';
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const DATA_API_KEY$5 = '.data-api';
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const SELECTOR_FORM_CONTROL = '.form-control';
  const SELECTOR_DATA_TOGGLE$6 = `${SELECTOR_FORM_CONTROL}:not([disabled]) ~ [data-coreui-toggle="password"]`;

  /**
   * Class definition
   */

  class PasswordInput extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$b;
    }

    // Public
    toggle() {
      this._element.type = this._element.type === 'password' ? 'text' : 'password';
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = PasswordInput.getOrCreateInstance(this);
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$6, event => {
    event.preventDefault();
    const toggler = event.target.closest(SELECTOR_DATA_TOGGLE$6);
    PasswordInput.getOrCreateInstance(SelectorEngine.findOne(SELECTOR_FORM_CONTROL, toggler.parentNode)).toggle();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(PasswordInput);

  /**
   * --------------------------------------------------------------------------
   * CoreUI util/template-factory.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's util/template-factory.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$a = 'TemplateFactory';
  const Default$9 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  const DefaultType$9 = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  };
  const DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
  };

  /**
   * Class definition
   */

  class TemplateFactory extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }

    // Getters
    static get Default() {
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
    }

    // Public
    getContent() {
      return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = {
        ...this._config.content,
        ...content
      };
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement('div');
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(' '));
      }
      return template;
    }

    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [undefined, this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = '';
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI tooltip.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$9 = 'tooltip';
  const DISALLOWED_ATTRIBUTES$2 = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$4 = 'show';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = 'hide.coreui.modal';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  const EVENT_HIDE$3 = 'hide';
  const EVENT_HIDDEN$3 = 'hidden';
  const EVENT_SHOW$3 = 'show';
  const EVENT_SHOWN$3 = 'shown';
  const EVENT_INSERTED = 'inserted';
  const EVENT_CLICK$2 = 'click';
  const EVENT_FOCUSIN$2 = 'focusin';
  const EVENT_FOCUSOUT$2 = 'focusout';
  const EVENT_MOUSEENTER$1 = 'mouseenter';
  const EVENT_MOUSELEAVE$1 = 'mouseleave';
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default$8 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 6],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  const DefaultType$8 = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };

  /**
   * Class definition
   */

  class Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('CoreUI\'s dropdowns require Popper (https://popper.js.org/docs/v2/)');
      }
      super(element, config);

      // Private
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;

      // Protected
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }

    // Getters
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }

    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute('data-coreui-original-title')) {
        this._element.setAttribute('title', this._element.getAttribute('data-coreui-original-title'));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$3));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      // TODO: v6 remove this or make it optional
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
      const {
        container
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$4);

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
      }
      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$3));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$3));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$4);

      // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null; // it is a trick to support manual triggering

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute('aria-describedby');
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$3));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }

    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();

      // TODO: remove this check in v6
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$4);
      // TODO: v6 the following can be achieved with CSS only
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute('id', tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-coreui-original-title');
    }

    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$4);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const {
        offset
      } = this._config;
      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }
      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }
      return offset;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element, this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'preSetPlacement',
          enabled: true,
          phase: 'beforeMain',
          fn: data => {
            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
          }
        }]
      };
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [undefined, defaultBsPopperConfig])
      };
    }
    _setListeners() {
      const triggers = this._config.trigger.split(' ');
      for (const trigger of triggers) {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$2), this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[TRIGGER_CLICK] = !(context._isShown() && context._activeTrigger[TRIGGER_CLICK]);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER$1) : this.constructor.eventName(EVENT_FOCUSIN$2);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE$1) : this.constructor.eventName(EVENT_FOCUSOUT$2);
          EventHandler.on(this._element, eventIn, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute('title');
      if (!title) {
        return;
      }
      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
        this._element.setAttribute('aria-label', title);
      }
      this._element.setAttribute('data-coreui-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
      this._element.removeAttribute('title');
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES$2.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }
      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = 'manual';

      // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * jQuery
   */

  defineJQueryPlugin(Tooltip);

  /**
   * --------------------------------------------------------------------------
   * CoreUI popover.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$8 = 'popover';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  const Default$7 = {
    ...Tooltip.Default,
    content: '',
    offset: [0, 8],
    placement: 'right',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
    trigger: 'click'
  };
  const DefaultType$7 = {
    ...Tooltip.DefaultType,
    content: '(null|string|element|function)'
  };

  /**
   * Class definition
   */

  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$7;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }

    // Overrides
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }

    // Private
    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Popover.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * jQuery
   */

  defineJQueryPlugin(Popover);

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO range-slider.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$7 = 'range-slider';
  const DATA_KEY$7 = 'coreui.range-slider';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$4 = '.data-api';
  const DISALLOWED_ATTRIBUTES$1 = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const EVENT_CHANGE$1 = `change${EVENT_KEY$7}`;
  const EVENT_INPUT = `input${EVENT_KEY$7}`;
  const EVENT_LOAD_DATA_API$5 = `load${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const EVENT_MOUSEDOWN = `mousedown${EVENT_KEY$7}`;
  const EVENT_MOUSEMOVE = `mousemove${EVENT_KEY$7}`;
  const EVENT_MOUSEUP = `mouseup${EVENT_KEY$7}`;
  const EVENT_RESIZE$1 = `resize${EVENT_KEY$7}`;
  const CLASS_NAME_CLICKABLE = 'clickable';
  const CLASS_NAME_DISABLED$1 = 'disabled';
  const CLASS_NAME_RANGE_SLIDER = 'range-slider';
  const CLASS_NAME_RANGE_SLIDER_INPUT = 'range-slider-input';
  const CLASS_NAME_RANGE_SLIDER_INPUTS_CONTAINER = 'range-slider-inputs-container';
  const CLASS_NAME_RANGE_SLIDER_LABEL = 'range-slider-label';
  const CLASS_NAME_RANGE_SLIDER_LABELS_CONTAINER = 'range-slider-labels-container';
  const CLASS_NAME_RANGE_SLIDER_TOOLTIP = 'range-slider-tooltip';
  const CLASS_NAME_RANGE_SLIDER_TOOLTIP_ARROW = 'range-slider-tooltip-arrow';
  const CLASS_NAME_RANGE_SLIDER_TOOLTIP_INNER = 'range-slider-tooltip-inner';
  const CLASS_NAME_RANGE_SLIDER_TRACK = 'range-slider-track';
  const CLASS_NAME_RANGE_SLIDER_VERTICAL = 'range-slider-vertical';
  const SELECTOR_DATA_TOGGLE$5 = '[data-coreui-toggle="range-slider"]';
  const SELECTOR_RANGE_SLIDER_INPUT = '.range-slider-input';
  const SELECTOR_RANGE_SLIDER_INPUTS_CONTAINER = '.range-slider-inputs-container';
  const SELECTOR_RANGE_SLIDER_LABEL = '.range-slider-label';
  const SELECTOR_RANGE_SLIDER_LABELS_CONTAINER = '.range-slider-labels-container';
  const Default$6 = {
    allowList: DefaultAllowlist,
    clickableLabels: true,
    disabled: false,
    distance: 0,
    labels: false,
    max: 100,
    min: 0,
    name: null,
    sanitize: true,
    sanitizeFn: null,
    step: 1,
    tooltips: true,
    tooltipsFormat: null,
    track: 'fill',
    value: 0,
    vertical: false
  };
  const DefaultType$6 = {
    allowList: 'object',
    clickableLabels: 'boolean',
    disabled: 'boolean',
    distance: 'number',
    labels: '(array|boolean|string)',
    max: 'number',
    min: 'number',
    name: '(array|string|null)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    step: '(number|string)',
    tooltips: 'boolean',
    tooltipsFormat: '(function|null)',
    track: '(boolean|string)',
    value: '(array|number)',
    vertical: 'boolean'
  };

  /**
   * Class definition
   */

  class RangeSlider extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._currentValue = this._config.value;
      this._dragIndex = 0;
      this._inputs = [];
      this._isDragging = false;
      this._sliderTrack = null;
      this._thumbSize = null;
      this._tooltips = [];
      this._initializeRangeSlider();
    }

    // Getters
    static get Default() {
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
    }

    // Public
    update(config) {
      this._config = this._getConfig(config);
      this._currentValue = this._config.value;
      this._element.innerHTML = '';
      this._initializeRangeSlider();
    }

    // Private
    _addEventListeners() {
      if (this._config.disabled) {
        return;
      }
      EventHandler.on(this._element, EVENT_INPUT, SELECTOR_RANGE_SLIDER_INPUT, event => {
        const {
          target
        } = event;
        this._isDragging = false;
        const children = SelectorEngine.children(target.parentElement, SELECTOR_RANGE_SLIDER_INPUT);
        const index = Array.from(children).indexOf(target);
        this._updateValue(target.value, index);
        EventHandler.trigger(this._element, EVENT_INPUT, {
          value: this._currentValue
        });
      });
      EventHandler.on(this._element, EVENT_CHANGE$1, SELECTOR_RANGE_SLIDER_INPUT, () => {
        EventHandler.trigger(this._element, EVENT_CHANGE$1, {
          value: this._currentValue
        });
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN, SELECTOR_RANGE_SLIDER_LABEL, event => {
        if (!this._config.clickableLabels || event.button !== 0) {
          return;
        }
        const value = Manipulator.getDataAttribute(event.target, 'value');
        this._updateNearestValue(value);
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN, SELECTOR_RANGE_SLIDER_INPUTS_CONTAINER, event => {
        if (event.button !== 0) {
          return;
        }
        if (!(event.target instanceof HTMLInputElement) && !event.target.className.includes(CLASS_NAME_RANGE_SLIDER_TRACK)) {
          return;
        }
        this._isDragging = true;
        const clickValue = this._calculateClickValue(event);
        this._dragIndex = this._getNearestValueIndex(clickValue);
        this._updateNearestValue(clickValue);
        EventHandler.trigger(this._element, EVENT_CHANGE$1, {
          value: this._currentValue
        });
        EventHandler.trigger(this._element, EVENT_INPUT, {
          value: this._currentValue
        });
      });
      EventHandler.on(document.documentElement, EVENT_MOUSEUP, () => {
        this._isDragging = false;
      });
      EventHandler.on(document.documentElement, EVENT_MOUSEMOVE, event => {
        if (!this._isDragging) {
          return;
        }
        const moveValue = this._calculateMoveValue(event);
        this._updateValue(moveValue, this._dragIndex);
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        this._updateLabelsContainerSize();
      });
    }
    _initializeRangeSlider() {
      this._element.classList.add(CLASS_NAME_RANGE_SLIDER);
      if (this._config.vertical) {
        this._element.classList.add(CLASS_NAME_RANGE_SLIDER_VERTICAL);
      }
      if (this._config.disabled) {
        this._element.classList.add(CLASS_NAME_DISABLED$1);
      }
      this._sliderTrack = this._createSliderTrack();
      this._createInputs();
      this._createLabels();
      this._updateLabelsContainerSize();
      this._createTooltips();
      this._updateGradient();
      this._addEventListeners();
    }
    _createSliderTrack() {
      const sliderTrackElement = this._createElement('div', CLASS_NAME_RANGE_SLIDER_TRACK);
      return sliderTrackElement;
    }
    _createInputs() {
      const container = this._createElement('div', CLASS_NAME_RANGE_SLIDER_INPUTS_CONTAINER);
      for (const [index, value] of this._currentValue.entries()) {
        const inputElement = this._createInput(index, value);
        container.append(inputElement);
        this._inputs[index] = inputElement;
      }
      container.append(this._sliderTrack);
      this._element.append(container);
    }
    _createInput(index, value) {
      const inputElement = this._createElement('input', CLASS_NAME_RANGE_SLIDER_INPUT);
      inputElement.type = 'range';
      inputElement.min = this._config.min;
      inputElement.max = this._config.max;
      inputElement.step = this._config.step;
      inputElement.value = value;
      if (this._config.name) {
        inputElement.name = Array.isArray(this._config.name) ? `${this._config.name[index]}` : `${this._config.name}-${index}`;
      }
      inputElement.disabled = this._config.disabled;

      // Accessibility attributes
      inputElement.setAttribute('role', 'slider');
      inputElement.setAttribute('aria-valuemin', this._config.min);
      inputElement.setAttribute('aria-valuemax', this._config.max);
      inputElement.setAttribute('aria-valuenow', value);
      inputElement.setAttribute('aria-orientation', this._config.vertical ? 'vertical' : 'horizontal');
      return inputElement;
    }
    _createLabels() {
      const {
        clickableLabels,
        disabled,
        labels,
        min,
        max,
        vertical
      } = this._config;
      if (!labels || !Array.isArray(labels) || labels.length === 0) {
        return;
      }
      const labelsContainer = this._createElement('div', CLASS_NAME_RANGE_SLIDER_LABELS_CONTAINER);
      for (const [index, label] of this._config.labels.entries()) {
        const labelElement = this._createElement('div', CLASS_NAME_RANGE_SLIDER_LABEL);
        if (clickableLabels && !disabled) {
          labelElement.classList.add(CLASS_NAME_CLICKABLE);
        }
        if (label.class) {
          const classNames = Array.isArray(label.class) ? label.class : [label.class];
          labelElement.classList.add(...classNames);
        }
        if (label.style && typeof label.style === 'object') {
          Object.assign(labelElement.style, label.style);
        }

        // Calculate percentage based on index
        const percentage = labels.length === 1 ? 0 : index / (labels.length - 1) * 100;

        // Determine label value
        const labelValue = typeof label === 'object' ? label.value : min + percentage / 100 * (max - min);

        // Set data-coreui-value attribute
        Manipulator.setDataAttribute(labelElement, 'value', labelValue);

        // Set label content
        labelElement.textContent = typeof label === 'object' ? label.label : label;

        // Calculate and set position
        const position = this._calculateLabelPosition(label, index, percentage);
        if (vertical) {
          labelElement.style.bottom = position;
        } else {
          labelElement.style[isRTL() ? 'right' : 'left'] = position;
        }
        labelsContainer.append(labelElement);
      }
      this._element.append(labelsContainer);
    }
    _calculateLabelPosition(label, index) {
      // Check if label is an object with a specific value
      if (typeof label === 'object' && label.value !== undefined) {
        return `${(label.value - this._config.min) / (this._config.max - this._config.min) * 100}%`;
      }

      // Calculate position based on index when label is not an object
      return `${index / (this._config.labels.length - 1) * 100}%`;
    }
    _updateLabelsContainerSize() {
      const labelsContainer = SelectorEngine.findOne(SELECTOR_RANGE_SLIDER_LABELS_CONTAINER, this._element);
      if (!this._config.labels || !labelsContainer) {
        return;
      }
      const labels = SelectorEngine.find(SELECTOR_RANGE_SLIDER_LABEL, this._element);
      if (labels.length === 0) {
        return;
      }
      const maxSize = Math.max(...labels.map(label => this._config.vertical ? label.offsetWidth : label.offsetHeight));
      labelsContainer.style[this._config.vertical ? 'width' : 'height'] = `${maxSize}px`;
    }
    _createTooltips() {
      if (!this._config.tooltips) {
        return;
      }
      const inputs = SelectorEngine.find(SELECTOR_RANGE_SLIDER_INPUT, this._element);
      this._thumbSize = this._getThumbSize();
      for (const input of inputs) {
        const tooltipElement = this._createElement('div', CLASS_NAME_RANGE_SLIDER_TOOLTIP);
        const tooltipInnerElement = this._createElement('div', CLASS_NAME_RANGE_SLIDER_TOOLTIP_INNER);
        const tooltipArrowElement = this._createElement('div', CLASS_NAME_RANGE_SLIDER_TOOLTIP_ARROW);
        tooltipInnerElement.innerHTML = this._config.tooltipsFormat ? this._config.sanitize ? sanitizeHtml(this._config.tooltipsFormat(input.value), this._config.allowList, this._config.sanitizeFn) : this._config.tooltipsFormat(input.value) : input.value;
        tooltipElement.append(tooltipInnerElement, tooltipArrowElement);
        input.parentNode.insertBefore(tooltipElement, input.nextSibling);
        this._positionTooltip(tooltipElement, input);
        this._tooltips.push(tooltipElement);
      }
    }
    _getThumbSize() {
      const value = window.getComputedStyle(this._element, null).getPropertyValue(this._config.vertical ? '--cui-range-slider-thumb-height' : '--cui-range-slider-thumb-width');
      const regex = /^(\d+\.?\d*)([%a-z]*)$/i;
      const match = value.match(regex);
      if (match) {
        return {
          value: Number.parseFloat(match[1]),
          unit: match[2] || null
        };
      }
      return '1rem';
    }
    _positionTooltip(tooltip, input) {
      const thumbSize = this._thumbSize;
      const percent = (input.value - this._config.min) / (this._config.max - this._config.min);
      const margin = percent > 0.5 ? `-${(percent - 0.5) * thumbSize.value}${thumbSize.unit}` : `${(0.5 - percent) * thumbSize.value}${thumbSize.unit}`;
      if (this._config.vertical) {
        Object.assign(tooltip.style, {
          bottom: `${percent * 100}%`,
          marginBottom: margin
        });
        return;
      }
      Object.assign(tooltip.style, {
        insetInlineStart: `${percent * 100}%`,
        marginInlineStart: margin
      });
    }
    _updateTooltip(index, value) {
      if (!this._config.tooltips) {
        return;
      }
      if (this._tooltips[index]) {
        this._tooltips[index].children[0].innerHTML = this._config.tooltipsFormat ? this._config.tooltipsFormat(value) : value;
        const input = SelectorEngine.find(SELECTOR_RANGE_SLIDER_INPUT, this._element)[index];
        this._positionTooltip(this._tooltips[index], input);
      }
    }
    _calculateClickValue(event) {
      const clickPosition = this._getClickPosition(event);
      const value = this._config.min + clickPosition * (this._config.max - this._config.min);
      return this._roundToStep(value, this._config.step);
    }
    _calculateMoveValue(event) {
      const trackRect = this._sliderTrack.getBoundingClientRect();
      const position = this._config.vertical ? this._calculateVerticalPosition(event.clientY, trackRect) : this._calculateHorizontalPosition(event.clientX, trackRect);
      if (typeof position === 'string') {
        return position === 'max' ? this._config.max : this._config.min;
      }
      const value = this._config.min + position * (this._config.max - this._config.min);
      return this._roundToStep(value, this._config.step);
    }
    _calculateVerticalPosition(mouseY, rect) {
      if (mouseY < rect.top) {
        return 'max';
      }
      if (mouseY > rect.bottom) {
        return 'min';
      }
      return Math.min(Math.max((rect.bottom - mouseY) / rect.height, 0), 1);
    }
    _calculateHorizontalPosition(mouseX, rect) {
      if (mouseX < rect.left) {
        return isRTL() ? 'max' : 'min';
      }
      if (mouseX > rect.right) {
        return isRTL() ? 'min' : 'max';
      }
      const relativeX = isRTL() ? rect.right - mouseX : mouseX - rect.left;
      return Math.min(Math.max(relativeX / rect.width, 0), 1);
    }
    _createElement(tag, className) {
      const element = document.createElement(tag);
      element.classList.add(className);
      return element;
    }
    _getClickPosition(event) {
      const {
        offsetX,
        offsetY
      } = event;
      const {
        offsetWidth,
        offsetHeight
      } = this._sliderTrack;
      if (this._config.vertical) {
        return 1 - offsetY / offsetHeight;
      }
      return isRTL() ? 1 - offsetX / offsetWidth : offsetX / offsetWidth;
    }
    _getNearestValueIndex(value) {
      const values = this._currentValue;
      const valuesLength = values.length;
      if (value < values[0]) {
        return 0;
      }
      if (value > values[valuesLength - 1]) {
        return valuesLength - 1;
      }
      const distances = values.map(v => Math.abs(v - value));
      const min = Math.min(...distances);
      const firstIndex = distances.indexOf(min);
      return value < values[firstIndex] ? firstIndex : distances.lastIndexOf(min);
    }
    _updateGradient() {
      if (!this._config.track) {
        return;
      }
      const [min, max] = [Math.min(...this._currentValue), Math.max(...this._currentValue)];
      const from = (min - this._config.min) / (this._config.max - this._config.min) * 100;
      const to = (max - this._config.min) / (this._config.max - this._config.min) * 100;
      const direction = this._config.vertical ? 'to top' : isRTL() ? 'to left' : 'to right';
      if (this._currentValue.length === 1) {
        this._sliderTrack.style.backgroundImage = `linear-gradient(
        ${direction},
        var(--cui-range-slider-track-in-range-bg) 0%,
        var(--cui-range-slider-track-in-range-bg) ${to}%,
        transparent ${to}%,
        transparent 100%
      )`;
        return;
      }
      this._sliderTrack.style.backgroundImage = `linear-gradient(
      ${direction},
      transparent 0%,
      transparent ${from}%,
      var(--cui-range-slider-track-in-range-bg) ${from}%,
      var(--cui-range-slider-track-in-range-bg) ${to}%,
      transparent ${to}%,
      transparent 100%
    )`;
    }
    _updateNearestValue(value) {
      const nearestIndex = this._getNearestValueIndex(value);
      this._updateValue(value, nearestIndex);
    }
    _updateValue(value, index) {
      const _value = this._validateValue(value, index);
      this._currentValue[index] = _value;
      this._updateInput(index, _value);
      this._updateGradient();
      this._updateTooltip(index, _value);
    }
    _updateInput(index, value) {
      const input = this._inputs[index];
      input.value = value;
      input.setAttribute('aria-valuenow', value);
      setTimeout(() => {
        input.focus();
      });
    }
    _validateValue(value, index) {
      const {
        distance
      } = this._config;
      const {
        length
      } = this._currentValue;
      if (length === 1) {
        return value;
      }
      const prevValue = index > 0 ? this._currentValue[index - 1] : undefined;
      const nextValue = index < length - 1 ? this._currentValue[index + 1] : undefined;
      if (index === 0 && nextValue !== undefined) {
        return Math.min(value, nextValue - distance);
      }
      if (index === length - 1 && prevValue !== undefined) {
        return Math.max(value, prevValue + distance);
      }
      if (prevValue !== undefined && nextValue !== undefined) {
        const minVal = prevValue + distance;
        const maxVal = nextValue - distance;
        return Math.min(Math.max(value, minVal), maxVal);
      }
      return value;
    }
    _roundToStep(number, step) {
      const _step = step === 0 ? 1 : step;
      return Math.round(number / _step) * _step;
    }
    _configAfterMerge(config) {
      if (typeof config.labels === 'string') {
        config.labels = config.labels.split(/,\s*/);
      }
      if (typeof config.name === 'string' && config.name.includes(',')) {
        config.name = config.name.split(/,\s*/);
      }
      if (typeof config.value === 'number') {
        config.value = [config.value];
      }
      if (typeof config.value === 'string') {
        config.value = config.value.split(/,\s*/).map(Number);
      }
      return config;
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES$1.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static
    static rangeSliderInterface(element, config) {
      const data = RangeSlider.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        const data = RangeSlider.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$5, () => {
    const ratings = SelectorEngine.find(SELECTOR_DATA_TOGGLE$5);
    for (let i = 0, len = ratings.length; i < len; i++) {
      RangeSlider.rangeSliderInterface(ratings[i]);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(RangeSlider);

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO rating.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$6 = 'rating';
  const DATA_KEY$6 = 'coreui.rating';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const EVENT_CHANGE = `change${EVENT_KEY$6}`;
  const EVENT_CLICK$1 = `click${EVENT_KEY$6}`;
  const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$6}`;
  const EVENT_FOCUSOUT$1 = `focusout${EVENT_KEY$6}`;
  const EVENT_HOVER = `hover${EVENT_KEY$6}`;
  const EVENT_LOAD_DATA_API$4 = `load${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$6}`;
  const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$6}`;
  const CLASS_NAME_ACTIVE$4 = 'active';
  const CLASS_NAME_DISABLED = 'disabled';
  const CLASS_NAME_RATING = 'rating';
  const CLASS_NAME_RATING_ITEM = 'rating-item';
  const CLASS_NAME_RATING_ITEM_ICON = 'rating-item-icon';
  const CLASS_NAME_RATING_ITEM_CUSTOM_ICON = 'rating-item-custom-icon';
  const CLASS_NAME_RATING_ITEM_CUSTOM_ICON_ACTIVE = 'rating-item-custom-icon-active';
  const CLASS_NAME_RATING_ITEM_INPUT = 'rating-item-input';
  const CLASS_NAME_RATING_ITEM_LABEL = 'rating-item-label';
  const CLASS_NAME_READONLY = 'readonly';
  const SELECTOR_DATA_TOGGLE$4 = '[data-coreui-toggle="rating"]';
  const SELECTOR_RATING_ITEM_INPUT = '.rating-item-input';
  const SELECTOR_RATING_ITEM_LABEL = '.rating-item-label';

  // js-docs-start svg-allow-list
  const svgAllowList = {
    ...DefaultAllowlist,
    svg: ['xmlns', 'version', 'baseprofile', 'width', 'height', 'viewbox', 'preserveaspectratio', 'aria-hidden', 'role', 'focusable'],
    g: ['id', 'class', 'transform', 'style'],
    path: ['id', 'class', 'd', 'fill', 'fill-opacity', 'fill-rule', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-opacity'],
    circle: ['id', 'class', 'cx', 'cy', 'r', 'fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity'],
    rect: ['id', 'class', 'x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity'],
    ellipse: ['id', 'class', 'cx', 'cy', 'rx', 'ry', 'fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity'],
    line: ['id', 'class', 'x1', 'y1', 'x2', 'y2', 'stroke', 'stroke-width', 'stroke-opacity'],
    polygon: ['id', 'class', 'points', 'fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity'],
    polyline: ['id', 'class', 'points', 'fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity'],
    text: ['id', 'class', 'x', 'y', 'dx', 'dy', 'text-anchor', 'font-family', 'font-size', 'font-weight', 'fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity'],
    tspan: ['id', 'class', 'x', 'y', 'dx', 'dy', 'text-anchor', 'font-family', 'font-size', 'font-weight', 'fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity'],
    defs: [],
    symbol: ['id', 'class', 'viewbox', 'preserveaspectratio'],
    use: ['id', 'class', 'x', 'y', 'width', 'height', 'href'],
    image: ['id', 'class', 'x', 'y', 'width', 'height', 'href', 'preserveaspectratio', 'xlink:href'],
    pattern: ['id', 'class', 'x', 'y', 'width', 'height', 'patternunits', 'patterncontentunits', 'patterntransform', 'preserveaspectratio'],
    lineargradient: ['id', 'class', 'gradientunits', 'x1', 'y1', 'x2', 'y2', 'spreadmethod', 'gradienttransform'],
    radialgradient: ['id', 'class', 'gradientunits', 'cx', 'cy', 'r', 'fx', 'fy', 'spreadmethod', 'gradienttransform'],
    mask: ['id', 'class', 'x', 'y', 'width', 'height', 'maskunits', 'maskcontentunits', 'masktransform'],
    clippath: ['id', 'class', 'clippathunits'],
    marker: ['id', 'class', 'markerunits', 'markerwidth', 'markerheight', 'orient', 'preserveaspectratio', 'viewbox', 'refx', 'refy'],
    title: [],
    desc: []
  };
  // js-docs-end svg-allow-list

  const Default$5 = {
    activeIcon: null,
    allowClear: false,
    allowList: svgAllowList,
    disabled: false,
    highlightOnlySelected: false,
    icon: null,
    itemCount: 5,
    name: null,
    precision: 1,
    readOnly: false,
    sanitize: true,
    sanitizeFn: null,
    size: null,
    tooltips: false,
    value: null
  };
  const DefaultType$5 = {
    activeIcon: '(object|string|null)',
    allowClear: 'boolean',
    allowList: 'object',
    disabled: 'boolean',
    highlightOnlySelected: 'boolean',
    icon: '(object|string|null)',
    itemCount: 'number',
    name: '(string|null)',
    precision: 'number',
    readOnly: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    size: '(string|null)',
    tooltips: '(array|boolean|object)',
    value: '(number|null)'
  };

  /**
   * Class definition
   */

  class Rating extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._currentValue = this._config.value;
      this._name = this._config.name || getUID(`${this.constructor.NAME}-name-`).toString();
      this._tooltip = null;
      this._createRating();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
    }

    // Public
    update(config) {
      this._config = this._getConfig(config);
      this._currentValue = this._config.value;
      this._element.innerHTML = '';
      this._createRating();
      this._addEventListeners();
    }
    reset(value = null) {
      this._currentValue = value;
      this._element.innerHTML = '';
      this._createRating();
      this._addEventListeners();
      EventHandler.trigger(this._element, EVENT_CHANGE, {
        value
      });
    }

    // Private
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK$1, SELECTOR_RATING_ITEM_INPUT, ({
        target
      }) => {
        if (this._config.disabled || this._config.readOnly) {
          return;
        }

        // eslint-disable-next-line eqeqeq
        if (this._config.allowClear && this._currentValue == target.value) {
          this._currentValue = null;
          target.checked = false;
          this._resetLabels();
          EventHandler.trigger(this._element, EVENT_CHANGE, {
            value: null
          });
        }
      });
      EventHandler.on(this._element, EVENT_CHANGE, SELECTOR_RATING_ITEM_INPUT, ({
        target
      }) => {
        if (this._config.disabled || this._config.readOnly) {
          return;
        }
        this._currentValue = target.value;
        EventHandler.trigger(this._element, EVENT_CHANGE, {
          value: target.value
        });
        const inputs = SelectorEngine.find(SELECTOR_RATING_ITEM_INPUT, this._element);
        this._resetLabels();
        if (this._config.highlightOnlySelected) {
          const label = SelectorEngine.findOne(SELECTOR_RATING_ITEM_LABEL, target.parentElement);
          label.classList.add(CLASS_NAME_ACTIVE$4);
          return;
        }
        for (const input of inputs) {
          const label = SelectorEngine.findOne(SELECTOR_RATING_ITEM_LABEL, input.parentElement);
          label.classList.add(CLASS_NAME_ACTIVE$4);
          if (input === target) {
            break;
          }
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEENTER, SELECTOR_RATING_ITEM_LABEL, ({
        target
      }) => {
        if (this._config.disabled || this._config.readOnly) {
          return;
        }
        const label = target.closest(SELECTOR_RATING_ITEM_LABEL);
        const labels = SelectorEngine.find(SELECTOR_RATING_ITEM_LABEL, this._element);
        this._resetLabels();
        const input = SelectorEngine.findOne(SELECTOR_RATING_ITEM_INPUT, label.parentElement);
        EventHandler.trigger(this._element, EVENT_HOVER, {
          value: input.value
        });
        this._createTooltip(label.parentElement, input.value);
        if (this._config.highlightOnlySelected) {
          label.classList.add(CLASS_NAME_ACTIVE$4);
          return;
        }
        for (const _label of labels) {
          _label.classList.add(CLASS_NAME_ACTIVE$4);
          if (_label === label) {
            break;
          }
        }
      });
      EventHandler.on(this._element, EVENT_MOUSELEAVE, SELECTOR_RATING_ITEM_LABEL, () => {
        if (this._config.disabled || this._config.readOnly) {
          return;
        }
        if (this._tooltip) {
          this._tooltip.hide();
        }
        const checkedInput = SelectorEngine.findOne(`${SELECTOR_RATING_ITEM_INPUT}[value="${this._currentValue}"]`, this._element);
        this._resetLabels();
        EventHandler.trigger(this._element, EVENT_HOVER, {
          value: null
        });
        if (checkedInput && this._config.highlightOnlySelected) {
          const label = SelectorEngine.findOne(SELECTOR_RATING_ITEM_LABEL, checkedInput.parentElement);
          label.classList.add(CLASS_NAME_ACTIVE$4);
          return;
        }
        if (checkedInput) {
          const inputs = SelectorEngine.find(SELECTOR_RATING_ITEM_INPUT, this._element);
          this._resetLabels();
          for (const input of inputs) {
            const label = SelectorEngine.findOne(SELECTOR_RATING_ITEM_LABEL, input.parentElement);
            label.classList.add(CLASS_NAME_ACTIVE$4);
            if (input === checkedInput) {
              break;
            }
          }
        }
      });
      EventHandler.on(this._element, EVENT_FOCUSIN$1, SELECTOR_RATING_ITEM_INPUT, ({
        target
      }) => {
        EventHandler.trigger(this._element, EVENT_HOVER, {
          value: target.value
        });
        this._createTooltip(target.parentElement, target.value);
      });
      EventHandler.on(this._element, EVENT_FOCUSOUT$1, SELECTOR_RATING_ITEM_INPUT, () => {
        EventHandler.trigger(this._element, EVENT_HOVER, {
          value: null
        });
        if (this._tooltip) {
          this._tooltip.hide();
        }
      });
    }
    _createTooltip(selector, value) {
      if (this._config.tooltips === false) {
        return;
      }
      if (this._tooltip) {
        this._tooltip.hide();
      }
      let tooltipTitle;
      if (typeof this._config.tooltips === 'boolean') {
        tooltipTitle = value;
      }
      if (typeof this._config.tooltips === 'object') {
        tooltipTitle = this._config.tooltips[value];
      }
      if (Array.isArray(this._config.tooltips)) {
        tooltipTitle = this._config.tooltips[value - 1];
      }
      this._tooltip = new Tooltip(selector, {
        title: tooltipTitle
      });
    }
    _configAfterMerge(config) {
      if (typeof config.tooltips === 'string') {
        config.tooltips = config.tooltips.split(',');
      }
      return config;
    }
    _resetLabels() {
      const labels = SelectorEngine.find(SELECTOR_RATING_ITEM_LABEL, this._element);
      for (const label of labels) {
        label.classList.remove(CLASS_NAME_ACTIVE$4);
      }
    }
    _createRating() {
      this._element.classList.add(CLASS_NAME_RATING);
      if (this._config.size) {
        this._element.classList.add(`rating-${this._config.size}`);
      }
      if (this._config.disabled) {
        this._element.classList.add(CLASS_NAME_DISABLED);
      }
      if (this._config.readOnly) {
        this._element.classList.add(CLASS_NAME_READONLY);
      }
      this._element.setAttribute('role', 'radiogroup');
      Array.from({
        length: this._config.itemCount
      }, (_, index) => this._createRatingItem(index));
    }
    _createRatingItem(index) {
      const ratingItemElement = document.createElement('div');
      ratingItemElement.classList.add(CLASS_NAME_RATING_ITEM);
      const numberOfRadios = 1 / this._config.precision;

      // eslint-disable-next-line array-callback-return
      Array.from({
        length: numberOfRadios
      }, (_, _index) => {
        const ratingItemId = getUID(`${this.constructor.NAME}${index}`).toString();
        const isNotLastItem = _index + 1 < numberOfRadios;
        const value = numberOfRadios === 1 ? index + 1 : (_index + 1) * Number(this._config.precision) + index;

        // Create label
        const ratingItemLabelElement = document.createElement('label');
        ratingItemLabelElement.classList.add(CLASS_NAME_RATING_ITEM_LABEL);
        ratingItemLabelElement.setAttribute('for', ratingItemId);

        // eslint-disable-next-line eqeqeq
        if (this._config.highlightOnlySelected && this._currentValue == value) {
          ratingItemLabelElement.classList.add(CLASS_NAME_ACTIVE$4);
        }
        if (!this._config.highlightOnlySelected && this._currentValue >= value) {
          ratingItemLabelElement.classList.add(CLASS_NAME_ACTIVE$4);
        }
        if (isNotLastItem) {
          ratingItemLabelElement.style.zIndex = 1 / this._config.precision - _index;
          ratingItemLabelElement.style.position = 'absolute';
          ratingItemLabelElement.style.width = `${this._config.precision * (_index + 1) * 100}%`;
          ratingItemLabelElement.style.overflow = 'hidden';
          ratingItemLabelElement.style.opacity = 0;
        }
        if (this._config.icon) {
          const ratingItemIconElement = document.createElement('div');
          ratingItemIconElement.classList.add(CLASS_NAME_RATING_ITEM_CUSTOM_ICON);
          ratingItemIconElement.innerHTML = this._sanitizeIcon(typeof this._config.icon === 'object' ? this._config.icon[index + 1] : this._config.icon);
          ratingItemLabelElement.append(ratingItemIconElement);
        } else {
          const ratingItemIconElement = document.createElement('div');
          ratingItemIconElement.classList.add(CLASS_NAME_RATING_ITEM_ICON);
          ratingItemLabelElement.append(ratingItemIconElement);
        }
        if (this._config.icon && this._config.activeIcon) {
          const ratingItemIconActiveElement = document.createElement('div');
          ratingItemIconActiveElement.classList.add(CLASS_NAME_RATING_ITEM_CUSTOM_ICON_ACTIVE);
          ratingItemIconActiveElement.innerHTML = this._sanitizeIcon(typeof this._config.activeIcon === 'object' ? this._config.activeIcon[index + 1] : this._config.activeIcon);
          ratingItemLabelElement.append(ratingItemIconActiveElement);
        }

        // Create input
        const ratingItemInputElement = document.createElement('input');
        ratingItemInputElement.classList.add(CLASS_NAME_RATING_ITEM_INPUT);
        ratingItemInputElement.id = ratingItemId;
        ratingItemInputElement.type = 'radio';
        ratingItemInputElement.value = value;
        ratingItemInputElement.name = this._name;
        if (this._config.disabled || this._config.readOnly) {
          ratingItemInputElement.setAttribute('disabled', true);
        }
        if (this._currentValue === value) {
          ratingItemInputElement.checked = true;
        }

        // Append elements

        if (this._config.precision === 1) {
          ratingItemElement.append(ratingItemLabelElement);
          ratingItemElement.append(ratingItemInputElement);
        } else {
          const wrapper = document.createElement('div');
          wrapper.append(ratingItemLabelElement);
          wrapper.append(ratingItemInputElement);
          ratingItemElement.append(wrapper);
        }
      });
      this._element.append(ratingItemElement);
    }
    _sanitizeIcon(icon) {
      return this._config.sanitize ? sanitizeHtml(icon, this._config.allowList, this._config.sanitizeFn) : icon;
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static
    static ratingInterface(element, config) {
      const data = Rating.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Rating.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$4, () => {
    const ratings = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
    for (let i = 0, len = ratings.length; i < len; i++) {
      Rating.ratingInterface(ratings[i]);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Rating);

  /**
   * --------------------------------------------------------------------------
   * CoreUI scrollspy.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$5 = 'scrollspy';
  const DATA_KEY$5 = 'coreui.scrollspy';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const DATA_API_KEY$2 = '.data-api';
  const EVENT_ACTIVATE = `activate${EVENT_KEY$5}`;
  const EVENT_CLICK = `click${EVENT_KEY$5}`;
  const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$3 = 'active';
  const SELECTOR_DATA_SPY = '[data-coreui-spy="scroll"]';
  const SELECTOR_TARGET_LINKS = '[href]';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const Default$4 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  const DefaultType$4 = {
    offset: '(number|null)',
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element',
    threshold: 'array'
  };

  /**
   * Class definition
   */

  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config);

      // this._element is the observablesContainer and config.target the menu links wrapper
      this._targetLinks = new Map();
      this._observableSections = new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh(); // initialize
    }

    // Getters
    static get Default() {
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
    }

    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }

    // Private
    _configAfterMerge(config) {
      // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
      config.target = getElement(config.target) || document.body;

      // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === 'string') {
        config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }

      // unregister any previous listeners
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: 'smooth'
            });
            return;
          }

          // Chrome 60 doesn't support `scrollTo`
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver(entries => this._observerCallback(entries), options);
    }

    // The logic of selection
    _observerCallback(entries) {
      const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);
      const activate = entry => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        // if we are scrolling down, pick the bigger offsetTop
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
          if (!parentScrollTop) {
            return;
          }
          continue;
        }

        // if we are scrolling up, pick the smallest offsetTop
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = new Map();
      this._observableSections = new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        // ensure that the anchor has an id and is not disabled
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);

        // ensure that the observableSection exists & is visible
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$3);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      // Activate dropdown parents
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$3);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$3);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$3);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$3}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$3);
      }
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(ScrollSpy);

  /**
   * --------------------------------------------------------------------------
   * CoreUI search-button.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$4 = 'search-button';
  const DATA_KEY$4 = 'coreui.search-button';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const DATA_API_KEY$1 = '.data-api';
  const EVENT_BLUR_DATA_API = `blur${EVENT_KEY$4}${DATA_API_KEY$1}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$4}${DATA_API_KEY$1}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$4}${DATA_API_KEY$1}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$4}${DATA_API_KEY$1}`;
  const EVENT_TRIGGER = `trigger${EVENT_KEY$4}`;
  const CLASS_NAME_SHORTCUT_KEYS = 'search-button-keys';
  const CLASS_NAME_SHORTCUT_KEY = 'search-button-key';
  const CLASS_NAME_ACTIVE$2 = 'active';
  const SELECTOR_DATA_TOGGLE$3 = '[data-coreui-search-button]';
  const SELECTOR_EDITABLE_TARGET = 'input, textarea, select, [contenteditable=""], [contenteditable="true"], [contenteditable="plaintext-only"]';
  const SELECTOR_PLACEHOLDER = '.search-button-placeholder';
  const SELECTOR_SHORTCUT_KEY = '.search-button-key';
  const SELECTOR_SHORTCUT_KEYS = '.search-button-keys';
  const Default$3 = {
    preventDefault: true,
    shortcut: 'meta+/,ctrl+/'
  };
  const DefaultType$3 = {
    preventDefault: 'boolean',
    shortcut: 'string'
  };
  const MODIFIER_KEYS = new Set(['alt', 'ctrl', 'meta', 'shift']);
  const KEY_ALIASES = {
    cmd: 'meta',
    command: 'meta',
    control: 'ctrl',
    option: 'alt',
    return: 'enter',
    esc: 'escape',
    spacebar: 'space',
    ' ': 'space'
  };
  const KEY_LABELS = {
    alt: 'Alt',
    ctrl: 'Ctrl',
    meta: '⌘',
    shift: 'Shift',
    space: 'Space'
  };

  /**
   * Class definition
   */

  class SearchButton extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._shortcutTriggered = false;
      this._shortcuts = this._parseShortcut(this._config.shortcut);
      this._preferredShortcut = this._getPreferredShortcut(this._shortcuts);
      this._syncShortcutKeys();
    }

    // Getters
    static get Default() {
      return Default$3;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    static get NAME() {
      return NAME$4;
    }

    // Public
    trigger() {
      this._triggerEvent('api');
    }

    // Private
    _triggerEvent(trigger) {
      if (this._isDisabled()) {
        return;
      }
      EventHandler.trigger(this._element, EVENT_TRIGGER, {
        trigger
      });
    }
    _handleShortcut(event) {
      if (this._isDisabled() || event.defaultPrevented || event.repeat || this._shouldIgnoreShortcut(event)) {
        return false;
      }
      const matchedShortcut = this._shortcuts.find(shortcut => this._matchesShortcut(shortcut, event));
      if (!matchedShortcut) {
        return false;
      }
      if (this._config.preventDefault) {
        event.preventDefault();
      }
      this._shortcutTriggered = true;
      try {
        this._element.click();
      } finally {
        this._shortcutTriggered = false;
      }
      return true;
    }
    _isDisabled() {
      return this._element.classList.contains('disabled') || this._element.getAttribute('aria-disabled') === 'true' || this._element.disabled;
    }
    _ensureShortcutKeys() {
      const existingShortcutKeys = this._element.querySelector(SELECTOR_SHORTCUT_KEYS);
      if (existingShortcutKeys) {
        return existingShortcutKeys;
      }
      const shortcutKeys = document.createElement('span');
      shortcutKeys.className = CLASS_NAME_SHORTCUT_KEYS;
      shortcutKeys.setAttribute('aria-hidden', 'true');
      const placeholder = this._element.querySelector(SELECTOR_PLACEHOLDER);
      if (placeholder) {
        placeholder.after(shortcutKeys);
        return shortcutKeys;
      }
      this._element.append(shortcutKeys);
      return shortcutKeys;
    }
    _syncShortcutKeys() {
      var _this$_preferredShort;
      const shortcutKeys = this._ensureShortcutKeys();
      const shortcutTokens = this._formatShortcutTokens(((_this$_preferredShort = this._preferredShortcut) == null ? void 0 : _this$_preferredShort.shortcut) || '').filter(Boolean);
      shortcutKeys.replaceChildren();
      for (const key of shortcutTokens) {
        const shortcutKey = document.createElement('span');
        shortcutKey.className = CLASS_NAME_SHORTCUT_KEY;
        shortcutKey.textContent = key;
        shortcutKey.dataset.coreuiSearchButtonKey = key;
        shortcutKeys.append(shortcutKey);
      }
    }
    _syncActiveKeys(event) {
      const pressedKeys = this._getPressedKeys(event);
      for (const shortcutKey of this._element.querySelectorAll(SELECTOR_SHORTCUT_KEY)) {
        shortcutKey.classList.toggle(CLASS_NAME_ACTIVE$2, pressedKeys.has(shortcutKey.dataset.coreuiSearchButtonKey));
      }
    }
    _clearActiveKeys() {
      for (const shortcutKey of this._element.querySelectorAll(SELECTOR_SHORTCUT_KEY)) {
        shortcutKey.classList.remove(CLASS_NAME_ACTIVE$2);
      }
    }
    _consumeShortcutTrigger() {
      const shortcutTriggered = this._shortcutTriggered;
      this._shortcutTriggered = false;
      return shortcutTriggered;
    }
    _shouldIgnoreShortcut(event) {
      return this._isEditableTarget(event.target) && !event.ctrlKey && !event.metaKey;
    }
    _isEditableTarget(target) {
      if (!(target instanceof Element)) {
        return false;
      }
      return target.matches(SELECTOR_EDITABLE_TARGET) || target.closest(SELECTOR_EDITABLE_TARGET);
    }
    _normalizeKey(key) {
      return KEY_ALIASES[key.toLowerCase()] || key.toLowerCase();
    }
    _parseShortcut(shortcut) {
      return shortcut.split(',').map(value => value.trim()).filter(Boolean).map(value => {
        const keys = value.split('+').map(part => this._normalizeKey(part.trim()));
        const modifiers = {
          alt: false,
          ctrl: false,
          meta: false,
          shift: false
        };
        let key = '';
        for (const part of keys) {
          if (MODIFIER_KEYS.has(part)) {
            modifiers[part] = true;
            continue;
          }
          key = part;
        }
        return {
          key,
          modifiers,
          shortcut: value
        };
      });
    }
    _matchesShortcut(shortcut, event) {
      if (!shortcut.key || this._normalizeKey(event.key) !== shortcut.key) {
        return false;
      }
      return shortcut.modifiers.alt === event.altKey && shortcut.modifiers.ctrl === event.ctrlKey && shortcut.modifiers.meta === event.metaKey && shortcut.modifiers.shift === event.shiftKey;
    }
    _formatShortcutTokens(shortcut) {
      return shortcut.split('+').map(part => this._normalizeKey(part.trim())).map(part => this._getKeyLabel(part));
    }
    _getPlatform() {
      var _window$navigator$use;
      return ((_window$navigator$use = window.navigator.userAgentData) == null ? void 0 : _window$navigator$use.platform) || window.navigator.platform || window.navigator.userAgent || '';
    }
    _isMacOS() {
      return /Mac|iPhone|iPad|iPod|macOS|Macintosh/.test(this._getPlatform());
    }
    _getPreferredShortcut(shortcuts) {
      return shortcuts.find(shortcut => {
        return this._isMacOS() ? shortcut.modifiers.meta : shortcut.modifiers.ctrl;
      }) || shortcuts[0] || null;
    }
    _getPressedKeys(event) {
      const pressedKeys = new Set();
      if (event.altKey) {
        pressedKeys.add(KEY_LABELS.alt);
      }
      if (event.ctrlKey) {
        pressedKeys.add(KEY_LABELS.ctrl);
      }
      if (event.metaKey) {
        pressedKeys.add(KEY_LABELS.meta);
      }
      if (event.shiftKey) {
        pressedKeys.add(KEY_LABELS.shift);
      }
      const normalizedKey = this._normalizeKey(event.key);
      const keyLabel = this._getKeyLabel(normalizedKey);
      if (!MODIFIER_KEYS.has(normalizedKey) && event.type === 'keydown') {
        pressedKeys.add(keyLabel);
      }
      return pressedKeys;
    }
    _getKeyLabel(key) {
      return KEY_LABELS[key] || (key.length === 1 ? key.toUpperCase() : `${key.charAt(0).toUpperCase()}${key.slice(1)}`);
    }

    // Static
    static searchButtonInterface(element, config) {
      const data = SearchButton.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (config.startsWith('_') || typeof data[config] !== 'function') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        SearchButton.searchButtonInterface(this, config);
      });
    }
    static _initializeDataApi() {
      for (const button of document.querySelectorAll(SELECTOR_DATA_TOGGLE$3)) {
        SearchButton.getOrCreateInstance(button);
      }
    }
    static _handleDataApiClick(event) {
      event.preventDefault();
      const button = event.target.closest(SELECTOR_DATA_TOGGLE$3);
      const data = SearchButton.getOrCreateInstance(button);
      const shortcutTriggered = data._consumeShortcutTrigger();
      if (shortcutTriggered) {
        data._triggerEvent('shortcut');
        return;
      }
      data._triggerEvent('click');
    }
    static _handleDataApiKeydown(event) {
      for (const button of document.querySelectorAll(SELECTOR_DATA_TOGGLE$3)) {
        const data = SearchButton.getOrCreateInstance(button);
        data._syncActiveKeys(event);
        if (data._handleShortcut(event)) {
          break;
        }
      }
    }
    static _handleDataApiKeyup(event) {
      for (const button of document.querySelectorAll(SELECTOR_DATA_TOGGLE$3)) {
        SearchButton.getOrCreateInstance(button)._syncActiveKeys(event);
      }
    }
    static _handleDataApiBlur() {
      for (const button of document.querySelectorAll(SELECTOR_DATA_TOGGLE$3)) {
        SearchButton.getOrCreateInstance(button)._clearActiveKeys();
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, `DOMContentLoaded${EVENT_KEY$4}${DATA_API_KEY$1}`, () => {
    SearchButton._initializeDataApi();
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, event => {
    SearchButton._handleDataApiClick(event);
  });
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, event => {
    SearchButton._handleDataApiKeydown(event);
  });
  EventHandler.on(document, EVENT_KEYUP_DATA_API, event => {
    SearchButton._handleDataApiKeyup(event);
  });
  EventHandler.on(window, EVENT_BLUR_DATA_API, () => {
    SearchButton._handleDataApiBlur();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(SearchButton);

  /**
   * --------------------------------------------------------------------------
   * CoreUI sidebar.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$3 = 'sidebar';
  const DATA_KEY$3 = 'coreui.sidebar';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const DATA_API_KEY = '.data-api';
  const Default$2 = {};
  const DefaultType$2 = {};
  const CLASS_NAME_BACKDROP = 'sidebar-backdrop';
  const CLASS_NAME_HIDE$1 = 'hide';
  const CLASS_NAME_SHOW$3 = 'show';
  const CLASS_NAME_SIDEBAR_NARROW = 'sidebar-narrow';
  const CLASS_NAME_SIDEBAR_OVERLAID = 'sidebar-overlaid';
  const CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE = 'sidebar-narrow-unfoldable';
  const EVENT_HIDE$2 = `hide${EVENT_KEY$3}`;
  const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$3}`;
  const EVENT_RESIZE = 'resize';
  const EVENT_SHOW$2 = `show${EVENT_KEY$3}`;
  const EVENT_SHOWN$2 = `shown${EVENT_KEY$3}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$3}${DATA_API_KEY}`;
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY}`;
  const SELECTOR_DATA_CLOSE = '[data-coreui-close="sidebar"]';
  const SELECTOR_DATA_TOGGLE$2 = '[data-coreui-toggle]';
  const SELECTOR_SIDEBAR = '.sidebar';

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Sidebar extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._show = this._isVisible();
      this._mobile = this._isMobile();
      this._overlaid = this._isOverlaid();
      this._narrow = this._isNarrow();
      this._unfoldable = this._isUnfoldable();
      this._backdrop = this._initializeBackDrop();
      this._addEventListeners();
    }

    // Getters

    static get Default() {
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
    }

    // Public

    show() {
      EventHandler.trigger(this._element, EVENT_SHOW$2);
      if (this._element.classList.contains(CLASS_NAME_HIDE$1)) {
        this._element.classList.remove(CLASS_NAME_HIDE$1);
      }
      if (this._overlaid) {
        this._element.classList.add(CLASS_NAME_SHOW$3);
      }
      if (this._isMobile()) {
        this._element.classList.add(CLASS_NAME_SHOW$3);
        this._backdrop.show();
        new ScrollBarHelper().hide();
      }
      const complete = () => {
        if (this._isVisible() === true) {
          this._show = true;
          if (this._isMobile() || this._isOverlaid()) {
            this._addClickOutListener();
          }
          EventHandler.trigger(this._element, EVENT_SHOWN$2);
        }
      };
      this._queueCallback(complete, this._element, true);
    }
    hide() {
      EventHandler.trigger(this._element, EVENT_HIDE$2);
      if (this._element.classList.contains(CLASS_NAME_SHOW$3)) {
        this._element.classList.remove(CLASS_NAME_SHOW$3);
      }
      if (this._isMobile()) {
        this._backdrop.hide();
        new ScrollBarHelper().reset();
      }
      if (!this._isMobile() && !this._overlaid) {
        this._element.classList.add(CLASS_NAME_HIDE$1);
      }
      const complete = () => {
        if (this._isVisible() === false) {
          this._show = false;
          if (this._isMobile() || this._isOverlaid()) {
            this._removeClickOutListener();
          }
          EventHandler.trigger(this._element, EVENT_HIDDEN$2);
        }
      };
      this._queueCallback(complete, this._element, true);
    }
    toggle() {
      if (this._isVisible()) {
        this.hide();
        return;
      }
      this.show();
    }
    narrow() {
      if (!this._isMobile()) {
        this._element.classList.add(CLASS_NAME_SIDEBAR_NARROW);
        this._narrow = true;
      }
    }
    unfoldable() {
      if (!this._isMobile()) {
        this._element.classList.add(CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE);
        this._unfoldable = true;
      }
    }
    reset() {
      if (!this._isMobile()) {
        if (this._narrow) {
          this._element.classList.remove(CLASS_NAME_SIDEBAR_NARROW);
          this._narrow = false;
        }
        if (this._unfoldable) {
          this._element.classList.remove(CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE);
          this._unfoldable = false;
        }
      }
    }
    toggleNarrow() {
      if (this._narrow) {
        this.reset();
        return;
      }
      this.narrow();
    }
    toggleUnfoldable() {
      if (this._unfoldable) {
        this.reset();
        return;
      }
      this.unfoldable();
    }

    // Private

    _initializeBackDrop() {
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: this._isMobile(),
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      });
    }
    _isMobile() {
      return Boolean(window.getComputedStyle(this._element, null).getPropertyValue('--cui-is-mobile'));
    }
    _isNarrow() {
      return this._element.classList.contains(CLASS_NAME_SIDEBAR_NARROW);
    }
    _isOverlaid() {
      return this._element.classList.contains(CLASS_NAME_SIDEBAR_OVERLAID);
    }
    _isUnfoldable() {
      return this._element.classList.contains(CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE);
    }
    _isVisible() {
      const rect = this._element.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && Math.floor(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) && Math.floor(rect.right) <= (window.innerWidth || document.documentElement.clientWidth);
    }
    _clickOutListener(event) {
      if (event.target.closest(SELECTOR_SIDEBAR) === null) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
      }
    }
    _addClickOutListener() {
      EventHandler.on(document, EVENT_CLICK_DATA_API$2, event => {
        this._clickOutListener(event);
      });
    }
    _removeClickOutListener() {
      EventHandler.off(document, EVENT_CLICK_DATA_API$2);
    }

    // Sidebar navigation
    _addEventListeners() {
      if (this._mobile && this._show) {
        this._addClickOutListener();
      }
      if (this._overlaid && this._show) {
        this._addClickOutListener();
      }
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, event => {
        event.preventDefault();
        const toggle = Manipulator.getDataAttribute(event.target.closest(SELECTOR_DATA_TOGGLE$2), 'toggle');
        if (toggle === 'narrow') {
          this.toggleNarrow();
        }
        if (toggle === 'unfoldable') {
          this.toggleUnfoldable();
        }
      });
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_CLOSE, event => {
        event.preventDefault();
        this.hide();
      });
      EventHandler.on(window, EVENT_RESIZE, () => {
        if (this._isMobile() && this._isVisible()) {
          this.hide();
          this._backdrop = this._initializeBackDrop();
        }
      });
    }

    // Static

    static sidebarInterface(element, config) {
      const data = Sidebar.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        Sidebar.sidebarInterface(this, config);
      });
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const element of Array.from(document.querySelectorAll(SELECTOR_SIDEBAR))) {
      Sidebar.sidebarInterface(element);
    }
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(Sidebar);

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO stepper.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$2 = 'stepper';
  const DATA_KEY$2 = 'coreui.stepper';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
  const EVENT_FINISH = `finish${EVENT_KEY$2}`;
  const EVENT_RESET = `reset${EVENT_KEY$2}`;
  const EVENT_STEP_CHANGE = `stepChange${EVENT_KEY$2}`;
  const EVENT_STEP_VALIDATION_COMPLETE = `stepValidationComplete${EVENT_KEY$2}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$2}`;
  const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}`;
  const CLASS_NAME_ACTIVE$1 = 'active';
  const CLASS_NAME_COMPLETE = 'complete';
  const CLASS_NAME_SHOW$2 = 'show';
  const CLASS_NAME_STEPPER_STEP_CONNECTOR = 'stepper-step-connector';
  const CLASS_NAME_STEPPER_STEP_INDICATOR_ICON = 'stepper-step-indicator-icon';
  const CLASS_NAME_STEPPER_STEP_INDICATOR_TEXT = 'stepper-step-indicator-text';
  const SELECTOR_DATA_TOGGLE$1 = '[data-coreui-toggle="stepper"]';
  const SELECTOR_STEPPER = '.stepper';
  const SELECTOR_STEPPER_ACTION = '[data-coreui-stepper-action]';
  const SELECTOR_STEPPER_STEP = '.stepper-step';
  const SELECTOR_STEPPER_STEP_BUTTON = '.stepper-step-button';
  const SELECTOR_STEPPER_STEP_CONTENT = '.stepper-step-content';
  const SELECTOR_STEPPER_STEP_INDICATOR = '.stepper-step-indicator';
  const SELECTOR_STEPPER_STEP_INDICATOR_ICON = '.stepper-step-indicator-icon';
  const SELECTOR_STEPPER_STEPS = '.stepper-steps';
  const SELECTOR_STEPPER_PANE = '.stepper-pane';
  const ARROW_LEFT_KEY$1 = 'ArrowLeft';
  const ARROW_RIGHT_KEY$1 = 'ArrowRight';
  const ARROW_UP_KEY$1 = 'ArrowUp';
  const ARROW_DOWN_KEY$1 = 'ArrowDown';
  const HOME_KEY$1 = 'Home';
  const END_KEY$1 = 'End';
  const Default$1 = {
    linear: true,
    skipValidation: false
  };
  const DefaultType$1 = {
    linear: 'boolean',
    skipValidation: 'boolean'
  };

  /**
   * Class definition
   */

  class Stepper extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._stepButtons = this._getStepButtons();
      this._activeStepButton = this._getActiveElem();
      this._initialStepButton = this._activeStepButton;
      this._isFinished = false;
      this._addStepperConnector();
      this._resetPanes(this._getTargetPane(this._activeStepButton));
      this._wrapIndicatorText();
      this._setInitialComplete();
      this._updateStepButtonsDisabledState();
      this._setupAccessibilityAttributes();
      EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
    }

    // Getters
    static get Default() {
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }

    // Public
    showStep(buttonOrStepNumber) {
      let button = buttonOrStepNumber;
      if (typeof buttonOrStepNumber === 'number') {
        button = this._stepButtons[buttonOrStepNumber - 1];
      }
      if (!button) {
        return;
      }
      const active = this._getActiveElem();
      if (active && !this._isCurrentStepValid(active)) {
        return;
      }
      if (this._elemIsActive(button)) {
        return;
      }
      if (this._config.linear) {
        const steps = this._getEnabledStepButtons();
        const targetIndex = steps.indexOf(button);
        const activeIndex = steps.indexOf(active);
        if (targetIndex > activeIndex + 1) {
          return;
        }
      }
      const index = this._stepButtons.indexOf(button) + 1;
      EventHandler.trigger(this._element, EVENT_STEP_CHANGE, {
        index
      });
      this._activeStepButton = button;
      this._deactivate(active);
      this._activate(button);
      this._updateStepButtonsDisabledState();
      this._complete(button);
    }
    next() {
      if (this._isFinished) {
        return;
      }
      if (!this._isCurrentStepValid(this._getActiveElem())) {
        return;
      }
      const steps = this._getEnabledStepButtons();
      const active = this._getActiveElem();
      const index = steps.indexOf(active);
      const next = steps[index + 1];
      if (next) {
        this.showStep(next);
      }
    }
    prev() {
      if (this._isFinished) {
        return;
      }
      const steps = this._getEnabledStepButtons();
      const active = this._getActiveElem();
      const index = steps.indexOf(active);
      const prev = steps[index - 1];
      if (prev) {
        this.showStep(prev);
      }
    }
    finish() {
      if (this._isFinished) {
        return;
      }
      if (!this._isCurrentStepValid(this._getActiveElem())) {
        return;
      }
      const steps = this._getEnabledStepButtons();
      const active = this._getActiveElem();
      const index = steps.indexOf(active);
      if (index !== steps.length - 1) {
        const next = steps[index + 1];
        if (next) {
          this.showStep(next);
        }
        return;
      }
      const finishHandler = () => {
        active.classList.remove(CLASS_NAME_ACTIVE$1);
        this._markAsComplete(active);
        EventHandler.trigger(this._element, EVENT_FINISH);
        this._isFinished = true;
        this._disableStepButtons();
      };
      const pane = this._getTargetPane(active);
      const stepContent = active.parentNode.querySelector(SELECTOR_STEPPER_STEP_CONTENT);
      if (pane) {
        pane.classList.remove(CLASS_NAME_ACTIVE$1, CLASS_NAME_SHOW$2);
        finishHandler();
      } else if (stepContent) {
        this._animateHeight(stepContent, false, finishHandler);
      } else {
        finishHandler();
      }
    }
    reset() {
      const steps = this._getEnabledStepButtons();
      if (!steps.length) {
        return;
      }
      for (const pane of SelectorEngine.find(SELECTOR_STEPPER_PANE, this._element)) {
        pane.classList.remove(CLASS_NAME_ACTIVE$1, CLASS_NAME_SHOW$2);
        pane.setAttribute('aria-hidden', 'true');
      }
      for (const content of SelectorEngine.find(SELECTOR_STEPPER_STEP_CONTENT, this._element)) {
        content.classList.remove(CLASS_NAME_ACTIVE$1, CLASS_NAME_SHOW$2);
        content.setAttribute('aria-hidden', 'true');
      }
      for (const btn of steps) {
        btn.classList.remove(CLASS_NAME_ACTIVE$1, CLASS_NAME_COMPLETE);
        this._removeIndicatorIcon(btn);
        btn.disabled = false;
      }
      for (const form of this._element.querySelectorAll(`${SELECTOR_STEPPER_PANE} form, ${SELECTOR_STEPPER_STEP_CONTENT} form`)) {
        form.reset();
      }
      const firstStep = this._initialStepButton || steps[0];
      firstStep.classList.add(CLASS_NAME_ACTIVE$1);
      const pane = this._getTargetPane(firstStep);
      if (pane) {
        pane.classList.add(CLASS_NAME_ACTIVE$1, CLASS_NAME_SHOW$2);
        pane.setAttribute('aria-hidden', 'false');
      } else {
        const stepContent = firstStep.parentNode.querySelector(SELECTOR_STEPPER_STEP_CONTENT);
        if (stepContent) {
          stepContent.classList.add(CLASS_NAME_ACTIVE$1, CLASS_NAME_SHOW$2);
          stepContent.setAttribute('aria-hidden', 'false');
        }
      }
      this._updateCompleteStates(this._stepButtons.indexOf(firstStep));
      this._activeStepButton = firstStep;
      this._isFinished = false;
      this._updateStepButtonsDisabledState();
      EventHandler.trigger(this._element, EVENT_RESET);
    }

    // Private
    _getStepButtons() {
      return SelectorEngine.find(SELECTOR_STEPPER_STEP_BUTTON, this._element);
    }
    _getEnabledStepButtons() {
      return this._getStepButtons().filter(el => !isDisabled(el));
    }
    _getActiveElem() {
      return this._stepButtons.find(child => this._elemIsActive(child)) || null;
    }
    _getTargetPane(element) {
      return SelectorEngine.getElementFromSelector(element);
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE$1);
    }
    _isCurrentStepValid(element) {
      if (this._config.skipValidation) {
        return true;
      }
      const pane = this._getTargetPane(element);
      const target = pane != null ? pane : element.parentNode.querySelector(SELECTOR_STEPPER_STEP_CONTENT);
      if (!target) {
        return true;
      }
      const form = target.querySelector('form');
      if (!form) {
        return true;
      }
      const isValid = form.checkValidity();
      EventHandler.trigger(this._element, EVENT_STEP_VALIDATION_COMPLETE, {
        stepIndex: this._stepButtons.indexOf(element) + 1,
        isValid
      });
      if (!isValid) {
        if (form.noValidate) {
          form.classList.add('was-validated');
        } else {
          form.reportValidity();
        }
        return false;
      }
      return true;
    }
    _activate(element) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE$1);
      element.setAttribute('aria-selected', 'true');
      element.setAttribute('tabIndex', '0');
      const pane = this._getTargetPane(element);
      if (pane) {
        pane.classList.add(CLASS_NAME_ACTIVE$1, CLASS_NAME_SHOW$2);
        pane.setAttribute('aria-hidden', 'false');
      }
      const stepContentElement = SelectorEngine.findOne(SELECTOR_STEPPER_STEP_CONTENT, element.parentNode);
      if (stepContentElement) {
        this._animateHeight(stepContentElement, true);
      }
    }
    _deactivate(element) {
      this._resetPanes();
      if (!element) {
        return;
      }
      element.setAttribute('aria-selected', 'false');
      element.setAttribute('tabIndex', '-1');
      const stepContentElement = SelectorEngine.findOne(SELECTOR_STEPPER_STEP_CONTENT, element.parentNode);
      if (stepContentElement) {
        this._animateHeight(stepContentElement, false, () => element.classList.remove(CLASS_NAME_ACTIVE$1));
      } else {
        element.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    }
    _complete(activeBtn) {
      const stepsContainer = activeBtn.closest(SELECTOR_STEPPER_STEPS) || document;
      const steps = SelectorEngine.find(SELECTOR_STEPPER_STEP, stepsContainer);
      const activeStepIdx = steps.indexOf(activeBtn.parentNode);
      if (activeStepIdx === -1) {
        return;
      }
      this._updateCompleteStates(activeStepIdx);
    }
    _markAsComplete(button) {
      const activeStep = button.closest(SELECTOR_STEPPER_STEP);
      if (activeStep) {
        const stepButton = SelectorEngine.findOne(SELECTOR_STEPPER_STEP_BUTTON, activeStep);
        if (stepButton) {
          stepButton.classList.add(CLASS_NAME_COMPLETE);
          this._appendIndicatorIcon(stepButton);
        }
      }
    }
    _updateCompleteStates(activeIndex) {
      for (const [idx, stepButton] of this._stepButtons.entries()) {
        const isComplete = idx < activeIndex;
        stepButton.classList.toggle(CLASS_NAME_COMPLETE, isComplete);
        if (isComplete) {
          this._appendIndicatorIcon(stepButton);
        } else {
          this._removeIndicatorIcon(stepButton);
        }
      }
    }
    _setInitialComplete() {
      const steps = SelectorEngine.find(SELECTOR_STEPPER_STEP, this._element);
      const activeBtn = this._getActiveElem();
      if (!activeBtn) {
        return;
      }
      const activeIdx = steps.indexOf(activeBtn.closest(SELECTOR_STEPPER_STEP));
      if (activeIdx === -1) {
        return;
      }
      this._updateCompleteStates(activeIdx);
    }
    _appendIndicatorIcon(button) {
      const indicator = SelectorEngine.findOne(SELECTOR_STEPPER_STEP_INDICATOR, button);
      if (indicator && !SelectorEngine.findOne(SELECTOR_STEPPER_STEP_INDICATOR_ICON, indicator)) {
        const icon = document.createElement('span');
        icon.classList.add(CLASS_NAME_STEPPER_STEP_INDICATOR_ICON);
        indicator.append(icon);
      }
    }
    _removeIndicatorIcon(button) {
      const indicator = SelectorEngine.findOne(SELECTOR_STEPPER_STEP_INDICATOR, button);
      if (!indicator) {
        return;
      }
      const icon = SelectorEngine.findOne(SELECTOR_STEPPER_STEP_INDICATOR_ICON, indicator);
      if (icon) {
        icon.remove();
      }
    }
    _updateStepButtonsDisabledState() {
      const activeIndex = this._stepButtons.indexOf(this._activeStepButton);
      for (const [index, button] of this._stepButtons.entries()) {
        button.disabled = this._config.linear && index > activeIndex + 1;
      }
    }
    _disableStepButtons() {
      for (const stepButton of this._stepButtons) {
        stepButton.disabled = true;
      }
    }
    _animateHeight(element, expand, callback) {
      const startHeight = expand ? 0 : element.scrollHeight;
      const endHeight = expand ? element.scrollHeight : 0;
      element.style.height = `${startHeight}px`;
      element.style.overflow = 'hidden';

      // ensure reflow
      // eslint-disable-next-line no-unused-expressions
      element.offsetHeight;
      requestAnimationFrame(() => {
        element.style.height = `${endHeight}px`;
        this._queueCallback(() => {
          element.style.overflow = 'initial';
          if (expand) {
            element.style.height = 'auto';
          }
          callback == null || callback();
        }, element, true);
      });
    }
    _resetPanes(activePane = null) {
      for (const pane of SelectorEngine.find(SELECTOR_STEPPER_PANE, this._element)) {
        const isActive = pane === activePane;
        pane.classList.toggle(CLASS_NAME_ACTIVE$1, isActive);
        pane.classList.toggle(CLASS_NAME_SHOW$2, isActive);
        pane.setAttribute('aria-hidden', !isActive);
      }
    }
    _addStepperConnector() {
      for (const [index, stepButton] of this._stepButtons.entries()) {
        if (index < this._stepButtons.length - 1) {
          const next = stepButton.nextElementSibling;
          if (!next || !next.classList.contains(CLASS_NAME_STEPPER_STEP_CONNECTOR)) {
            const connectorElement = document.createElement('div');
            connectorElement.classList.add(CLASS_NAME_STEPPER_STEP_CONNECTOR);
            stepButton.after(connectorElement);
          }
        }
      }
    }
    _wrapIndicatorText() {
      for (const stepButton of this._stepButtons) {
        const indicator = SelectorEngine.findOne(SELECTOR_STEPPER_STEP_INDICATOR, stepButton);
        if (!indicator) {
          continue;
        }
        const childNodes = Array.from(indicator.childNodes);
        const visibleNodes = childNodes.filter(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent.trim() !== '';
          }
          if (node.nodeType === Node.ELEMENT_NODE) {
            return true;
          }
          return false;
        });
        if (visibleNodes.length !== 1 || visibleNodes[0].nodeType !== Node.TEXT_NODE) {
          continue;
        }
        const textNode = visibleNodes[0];
        const wrapper = document.createElement('span');
        wrapper.classList.add(CLASS_NAME_STEPPER_STEP_INDICATOR_TEXT);
        wrapper.textContent = textNode.textContent.trim();
        textNode.replaceWith(wrapper);
      }
    }
    _setupAccessibilityAttributes() {
      const uId = getUID(this.constructor.NAME).toString();
      for (const [index, stepButton] of this._stepButtons.entries()) {
        const parentStepItem = stepButton.closest(SELECTOR_STEPPER_STEP);
        if (parentStepItem) {
          parentStepItem.setAttribute('role', 'presentation');
        }
        stepButton.setAttribute('role', 'tab');
        if (!stepButton.id) {
          stepButton.id = `${uId}${index + 1}`;
        }
        const pane = SelectorEngine.getElementFromSelector(stepButton);
        if (pane) {
          stepButton.setAttribute('aria-controls', pane.id);
          pane.setAttribute('role', 'tabpanel');
          pane.setAttribute('aria-labelledby', stepButton.id);
          pane.setAttribute('aria-live', 'polite');
          pane.setAttribute('aria-hidden', !this._elemIsActive(stepButton));
        }
        if (this._elemIsActive(stepButton)) {
          stepButton.setAttribute('aria-selected', 'true');
          stepButton.setAttribute('tabIndex', '0');
        } else {
          stepButton.setAttribute('aria-selected', 'false');
          stepButton.setAttribute('tabIndex', '-1');
        }
      }
    }
    _keydown(event) {
      var _nextActiveElement;
      if (![ARROW_LEFT_KEY$1, ARROW_RIGHT_KEY$1, ARROW_UP_KEY$1, ARROW_DOWN_KEY$1, HOME_KEY$1, END_KEY$1].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getEnabledStepButtons();
      let nextActiveElement;
      switch (event.key) {
        case HOME_KEY$1:
          {
            nextActiveElement = children[0];
            break;
          }
        case END_KEY$1:
          {
            nextActiveElement = children[children.length - 1];
            break;
          }
        case ARROW_RIGHT_KEY$1:
        case ARROW_DOWN_KEY$1:
          {
            nextActiveElement = getNextActiveElement(children, event.target, true, true);
            break;
          }
        case ARROW_LEFT_KEY$1:
        case ARROW_UP_KEY$1:
          {
            nextActiveElement = getNextActiveElement(children, event.target, false, true);
            break;
          }
      }
      (_nextActiveElement = nextActiveElement) == null || _nextActiveElement.focus({
        preventScroll: true
      });
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Stepper.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * Data API implementation
   */
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_STEPPER_STEP_BUTTON, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    const stepperElement = this.closest(SELECTOR_STEPPER);
    if (!stepperElement) {
      return;
    }
    const stepper = Stepper.getOrCreateInstance(stepperElement);
    stepper.showStep(this);
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_STEPPER_ACTION, function () {
    const action = Manipulator.getDataAttribute(this, 'stepper-action');
    const stepperElement = this.closest(SELECTOR_STEPPER);
    if (!stepperElement) {
      return;
    }
    const stepper = Stepper.getOrCreateInstance(stepperElement);
    if (stepper && typeof stepper[action] === 'function') {
      stepper[action]();
    }
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE$1)) {
      Stepper.getOrCreateInstance(element);
    }
  });

  /**
   * jQuery integration
   */

  defineJQueryPlugin(Stepper);

  /**
   * --------------------------------------------------------------------------
   * CoreUI tab.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$1 = 'tab';
  const DATA_KEY$1 = 'coreui.tab';
  const EVENT_KEY$1 = `.${DATA_KEY$1}`;
  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const HOME_KEY = 'Home';
  const END_KEY = 'End';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';
  const CLASS_DROPDOWN = 'dropdown';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  const SELECTOR_OUTER = '.nav-item, .list-group-item';
  const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE = '[data-coreui-toggle="tab"], [data-coreui-toggle="pill"], [data-coreui-toggle="list"]'; // TODO: could only be `tab` in v6
  const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-coreui-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-coreui-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-coreui-toggle="list"]`;

  /**
   * Class definition
   */

  class Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
        // TODO: should throw exception in v6
        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
      }

      // Set up initial aria attributes
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
    }

    // Getters
    static get NAME() {
      return NAME$1;
    }

    // Public
    show() {
      // Shows this elem and deactivate the active sibling if exists
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }

      // Search for active tab on same parent to deactivate it
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }

    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section

      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute('tabindex');
        element.setAttribute('aria-selected', true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too

      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute('aria-selected', false);
        element.setAttribute('tabindex', '-1');
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
      event.preventDefault();
      const children = this._getChildren().filter(element => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      // collection of inner elements
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find(child => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, 'role', 'tablist');
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute('aria-selected', isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
      }
      if (!isActive) {
        child.setAttribute('tabindex', '-1');
      }
      this._setAttributeIfNotExists(child, 'role', 'tab');

      // set attributes to the related panel too
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, 'role', 'tabpanel');
      if (child.id) {
        this._setAttributeIfNotExists(target, 'aria-labelledby', `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element = SelectorEngine.findOne(selector, outerElem);
        if (element) {
          element.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute('aria-expanded', open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }

    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }

    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tab.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });

  /**
   * Initialize on focus
   */
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  /**
   * jQuery
   */

  defineJQueryPlugin(Tab);

  /**
   * --------------------------------------------------------------------------
   * CoreUI toast.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This component is a modified version of the Bootstrap's toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'toast';
  const DATA_KEY = 'coreui.toast';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };

  /**
   * Class definition
   */

  class Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }

    // Private
    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          {
            this._hasMouseInteraction = isInteracting;
            break;
          }
        case 'focusin':
        case 'focusout':
          {
            this._hasKeyboardInteraction = isInteracting;
            break;
          }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Toast.getOrCreateInstance(this, config);
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  enableDismissTrigger(Toast);

  /**
   * jQuery
   */

  defineJQueryPlugin(Toast);

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO index.esm.js
   * Licensed under MIT (Licensed under MIT (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */

  const index_umd = {
    Alert,
    Autocomplete,
    Button,
    Calendar,
    Carousel,
    Chip,
    ChipInput,
    ChipSet,
    Collapse,
    DatePicker,
    DateRangePicker,
    Dropdown,
    LoadingButton,
    Modal,
    MultiSelect,
    Navigation,
    OffCanvas: Offcanvas,
    OTPInput,
    PasswordInput,
    Popover,
    RangeSlider,
    Rating,
    ScrollSpy,
    SearchButton,
    Sidebar,
    Stepper,
    Tab,
    TimePicker,
    Toast,
    Tooltip
  };

  return index_umd;

}));
//# sourceMappingURL=coreui.js.map
