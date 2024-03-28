/*!
  * CoreUI v5.0.0 (https://coreui.io)
  * Copyright 2024 The CoreUI Team (https://github.com/orgs/coreui/people)
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
    return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;
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
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

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
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
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

  const VERSION = '5.0.0';

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

  const NAME$n = 'alert';
  const DATA_KEY$i = 'coreui.alert';
  const EVENT_KEY$j = `.${DATA_KEY$i}`;
  const EVENT_CLOSE = `close${EVENT_KEY$j}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$j}`;
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$e = 'show';

  /**
   * Class definition
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$n;
    }

    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$e);
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

  const NAME$m = 'button';
  const DATA_KEY$h = 'coreui.button';
  const EVENT_KEY$i = `.${DATA_KEY$h}`;
  const DATA_API_KEY$e = '.data-api';
  const CLASS_NAME_ACTIVE$4 = 'active';
  const SELECTOR_DATA_TOGGLE$a = '[data-coreui-toggle="button"]';
  const EVENT_CLICK_DATA_API$e = `click${EVENT_KEY$i}${DATA_API_KEY$e}`;

  /**
   * Class definition
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$m;
    }

    // Public
    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$4));
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

  EventHandler.on(document, EVENT_CLICK_DATA_API$e, SELECTOR_DATA_TOGGLE$a, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$a);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Button);

  const convertIsoWeekToDate = isoWeek => {
    const [year, week] = isoWeek.split(/w/i);
    // Get date for 4th of January for year
    const date = new Date(Number(year), 0, 4);
    // Get previous Monday, add 7 days for each week after first
    date.setDate(
    // eslint-disable-next-line no-mixed-operators
    date.getDate() - (date.getDay() || 7) + 1 + (Number(week) - 1) * 7);
    return date;
  };
  const convertToDateObject = (date, selectionType) => {
    if (date === null) {
      return null;
    }
    if (date instanceof Date) {
      return date;
    }
    if (selectionType === 'week') {
      return convertIsoWeekToDate(date);
    }
    return new Date(Date.parse(date));
  };
  const createGroupsInArray = (arr, numberOfGroups) => {
    const perGroup = Math.ceil(arr.length / numberOfGroups);
    return Array.from({
      length: numberOfGroups
    }).fill('').map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  };
  const getCalendarDate = (calendarDate, order, view) => {
    if (order !== 0 && view === 'days') {
      return new Date(Date.UTC(calendarDate.getFullYear(), calendarDate.getMonth() + order, 1));
    }
    if (order !== 0 && view === 'months') {
      return new Date(Date.UTC(calendarDate.getFullYear() + order, calendarDate.getMonth(), 1));
    }
    if (order !== 0 && view === 'years') {
      return new Date(Date.UTC(calendarDate.getFullYear() + 12 * order, calendarDate.getMonth(), 1));
    }
    return calendarDate;
  };
  const getDateBySelectionType = (date, selectionType) => {
    if (date === null) {
      return null;
    }
    if (selectionType === 'week') {
      return `${date.getFullYear()}W${getWeekNumber(date)}`;
    }
    if (selectionType === 'month') {
      const monthNumber = `0${date.getMonth() + 1}`.slice(-2);
      return `${date.getFullYear()}-${monthNumber}`;
    }
    if (selectionType === 'year') {
      return `${date.getFullYear()}`;
    }
    return date;
  };
  const getMonthsNames = locale => {
    const months = [];
    const d = new Date();
    d.setDate(1);
    for (let i = 0; i < 12; i++) {
      d.setMonth(i);
      months.push(d.toLocaleString(locale, {
        month: 'short'
      }));
    }
    return months;
  };
  const getYears = year => {
    const years = [];
    for (let _year = year - 6; _year < year + 6; _year++) {
      years.push(_year);
    }
    return years;
  };
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
        month: 'previous'
      });
    }
    return dates;
  };
  const getMonthDays = (year, month) => {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= lastDay; i++) {
      dates.push({
        date: new Date(year, month, i),
        month: 'current'
      });
    }
    return dates;
  };
  const getTrailingDays = (year, month, leadingDays, monthDays) => {
    const dates = [];
    const days = 42 - (leadingDays.length + monthDays.length);
    for (let i = 1; i <= days; i++) {
      dates.push({
        date: new Date(year, month + 1, i),
        month: 'next'
      });
    }
    return dates;
  };
  const getLocalDateFromString = (string, locale, time) => {
    const date = new Date(2013, 11, 31, 17, 19, 22);
    let regex = time ? date.toLocaleString(locale) : date.toLocaleDateString(locale);
    regex = regex.replace('2013', '(?<year>[0-9]{2,4})').replace('12', '(?<month>[0-9]{1,2})').replace('31', '(?<day>[0-9]{1,2})');
    if (time) {
      regex = regex.replace('5', '(?<hour>[0-9]{1,2})').replace('17', '(?<hour>[0-9]{1,2})').replace('19', '(?<minute>[0-9]{1,2})').replace('22', '(?<second>[0-9]{1,2})').replace('PM', '(?<ampm>[A-Z]{2})');
    }
    const rgx = new RegExp(`${regex}`);
    const partials = string.match(rgx);
    if (partials === null) {
      return;
    }
    const newDate = partials.groups && (time ? new Date(Number(partials.groups.year, 10), Number(partials.groups.month, 10) - 1, Number(partials.groups.day), partials.groups.ampm ? partials.groups.ampm === 'PM' ? Number(partials.groups.hour) + 12 : Number(partials.groups.hour) : Number(partials.groups.hour), Number(partials.groups.minute), Number(partials.groups.second)) : new Date(Number(partials.groups.year), Number(partials.groups.month) - 1, Number(partials.groups.day)));
    return newDate;
  };
  const getWeekNumber = date => {
    const week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(
    // eslint-disable-next-line no-mixed-operators
    ((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  };
  const getMonthDetails = (year, month, firstDayOfWeek) => {
    const daysPrevMonth = getLeadingDays(year, month, firstDayOfWeek);
    const daysThisMonth = getMonthDays(year, month);
    const daysNextMonth = getTrailingDays(year, month, daysPrevMonth, daysThisMonth);
    const days = [...daysPrevMonth, ...daysThisMonth, ...daysNextMonth];
    const weeks = [];
    for (const [index, day] of days.entries()) {
      if (index % 7 === 0 || weeks.length === 0) {
        weeks.push({
          days: []
        });
      }
      if ((index + 1) % 7 === 0) {
        weeks[weeks.length - 1].weekNumber = getWeekNumber(day.date);
      }
      weeks[weeks.length - 1].days.push(day);
    }
    return weeks;
  };
  const isDisableDateInRange = (startDate, endDate, dates) => {
    if (startDate && endDate) {
      const date = new Date(startDate);
      let disabled = false;

      // eslint-disable-next-line no-unmodified-loop-condition
      while (date < endDate) {
        date.setDate(date.getDate() + 1);
        if (isDateDisabled(date, null, null, dates)) {
          disabled = true;
          break;
        }
      }
      return disabled;
    }
    return false;
  };
  const isDateDisabled = (date, min, max, dates) => {
    let disabled;
    if (dates) {
      for (const _date of dates) {
        if (Array.isArray(_date) && isDateInRange(date, _date[0], _date[1])) {
          disabled = true;
        }
        if (_date instanceof Date && isSameDateAs(date, _date)) {
          disabled = true;
        }
      }
    }
    if (min && date < min) {
      disabled = true;
    }
    if (max && date > max) {
      disabled = true;
    }
    return disabled;
  };
  const isDateInRange = (date, start, end) => {
    return start && end && start <= date && date <= end;
  };
  const isDateSelected = (date, start, end) => {
    return start && isSameDateAs(start, date) || end && isSameDateAs(end, date);
  };
  const isSameDateAs = (date, date2) => {
    if (date instanceof Date && date2 instanceof Date) {
      return date.getDate() === date2.getDate() && date.getMonth() === date2.getMonth() && date.getFullYear() === date2.getFullYear();
    }
    if (date === null && date2 === null) {
      return true;
    }
    return false;
  };
  const isToday = date => {
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  };

  /* eslint-disable complexity, indent, multiline-ternary */
  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO calendar.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$l = 'calendar';
  const DATA_KEY$g = 'coreui.calendar';
  const EVENT_KEY$h = `.${DATA_KEY$g}`;
  const DATA_API_KEY$d = '.data-api';
  const ARROW_UP_KEY$2 = 'ArrowUp';
  const ARROW_RIGHT_KEY$2 = 'ArrowRight';
  const ARROW_DOWN_KEY$2 = 'ArrowDown';
  const ARROW_LEFT_KEY$2 = 'ArrowLeft';
  const ENTER_KEY$1 = 'Enter';
  const SPACE_KEY$1 = 'Space';
  const EVENT_BLUR = `blur${EVENT_KEY$h}`;
  const EVENT_CALENDAR_DATE_CHANGE = `calendarDateChange${EVENT_KEY$h}`;
  const EVENT_CALENDAR_MOUSE_LEAVE = `calendarMouseleave${EVENT_KEY$h}`;
  const EVENT_CELL_HOVER = `cellHover${EVENT_KEY$h}`;
  const EVENT_END_DATE_CHANGE$1 = `endDateChange${EVENT_KEY$h}`;
  const EVENT_FOCUS = `focus${EVENT_KEY$h}`;
  const EVENT_KEYDOWN$3 = `keydown${EVENT_KEY$h}`;
  const EVENT_SELECT_END_CHANGE = `selectEndChange${EVENT_KEY$h}`;
  const EVENT_START_DATE_CHANGE$1 = `startDateChange${EVENT_KEY$h}`;
  const EVENT_MOUSEENTER$2 = `mouseenter${EVENT_KEY$h}`;
  const EVENT_MOUSELEAVE$2 = `mouseleave${EVENT_KEY$h}`;
  const EVENT_LOAD_DATA_API$a = `load${EVENT_KEY$h}${DATA_API_KEY$d}`;
  const EVENT_CLICK_DATA_API$d = `click${EVENT_KEY$h}${DATA_API_KEY$d}`;
  const CLASS_NAME_CALENDAR$1 = 'calendar';
  const CLASS_NAME_CALENDAR_CELL = 'calendar-cell';
  const CLASS_NAME_CALENDAR_CELL_INNER = 'calendar-cell-inner';
  const CLASS_NAME_CALENDAR_ROW = 'calendar-row';
  const SELECTOR_BTN_DOUBLE_NEXT = '.btn-double-next';
  const SELECTOR_BTN_DOUBLE_PREV = '.btn-double-prev';
  const SELECTOR_BTN_MONTH = '.btn-month';
  const SELECTOR_BTN_NEXT = '.btn-next';
  const SELECTOR_BTN_PREV = '.btn-prev';
  const SELECTOR_BTN_YEAR = '.btn-year';
  const SELECTOR_CALENDAR$2 = '.calendar';
  const SELECTOR_CALENDAR_CELL = '.calendar-cell';
  const SELECTOR_CALENDAR_PANEL = '.calendar-panel';
  const SELECTOR_CALENDAR_ROW = '.calendar-row';
  const Default$k = {
    calendarDate: null,
    calendars: 1,
    disabledDates: null,
    endDate: null,
    firstDayOfWeek: 1,
    locale: 'default',
    maxDate: null,
    minDate: null,
    range: true,
    selectAdjacementDays: false,
    selectEndDate: false,
    selectionType: 'day',
    showAdjacementDays: true,
    showWeekNumber: false,
    startDate: null,
    weekdayFormat: 2,
    weekNumbersLabel: null
  };
  const DefaultType$k = {
    calendarDate: '(date|string|null)',
    calendars: 'number',
    disabledDates: '(array|null)',
    endDate: '(date|string|null)',
    firstDayOfWeek: 'number',
    locale: 'string',
    maxDate: '(date|string|null)',
    minDate: '(date|string|null)',
    range: 'boolean',
    selectAdjacementDays: 'boolean',
    selectEndDate: 'boolean',
    selectionType: 'string',
    showAdjacementDays: 'boolean',
    showWeekNumber: 'boolean',
    startDate: '(date|string|null)',
    weekdayFormat: '(number|string)',
    weekNumbersLabel: '(string|null)'
  };

  /**
   * Class definition
   */

  class Calendar extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._calendarDate = convertToDateObject(this._config.calendarDate || this._config.startDate || this._config.endDate || new Date(), this._config.selectionType);
      this._startDate = convertToDateObject(this._config.startDate, this._config.selectionType);
      this._endDate = convertToDateObject(this._config.endDate, this._config.selectionType);
      this._hoverDate = null;
      this._selectEndDate = this._config.selectEndDate;
      if (this._config.selectionType === 'day' || this._config.selectionType === 'week') {
        this._view = 'days';
      }
      if (this._config.selectionType === 'month') {
        this._view = 'months';
      }
      if (this._config.selectionType === 'year') {
        this._view = 'years';
      }
      this._createCalendar();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$k;
    }
    static get DefaultType() {
      return DefaultType$k;
    }
    static get NAME() {
      return NAME$l;
    }

    // Public
    update(config) {
      this._config = this._getConfig(config);
      this._calendarDate = convertToDateObject(this._config.calendarDate || this._config.startDate || this._config.endDate || new Date(), this._config.selectionType);
      this._startDate = convertToDateObject(this._config.startDate, this._config.selectionType);
      this._endDate = convertToDateObject(this._config.endDate, this._config.selectionType);
      this._hoverDate = null;
      this._selectEndDate = this._config.selectEndDate;
      if (this._config.selectionType === 'day' || this._config.selectionType === 'week') {
        this._view = 'days';
      }
      if (this._config.selectionType === 'month') {
        this._view = 'months';
      }
      if (this._config.selectionType === 'year') {
        this._view = 'years';
      }
      this._element.innerHTML = '';
      this._createCalendar();
    }

    // Private
    _getDate(target) {
      if (this._config.selectionType === 'week') {
        const firstCell = SelectorEngine.findOne(SELECTOR_CALENDAR_CELL, target.closest(SELECTOR_CALENDAR_ROW));
        return new Date(Manipulator.getDataAttribute(firstCell, 'date'));
      }
      return new Date(Manipulator.getDataAttribute(target, 'date'));
    }
    _handleCalendarClick(event) {
      const target = event.target.classList.contains(CLASS_NAME_CALENDAR_CELL_INNER) ? event.target.parentElement : event.target;
      const date = this._getDate(target);
      const cloneDate = new Date(date);
      const index = Manipulator.getDataAttribute(target.closest(SELECTOR_CALENDAR_PANEL), 'calendar-index');
      if (isDateDisabled(date, this._config.minDate, this._config.maxDate, this._config.disabledDates)) {
        return;
      }
      if (this._view === 'days') {
        this._setCalendarDate(index ? new Date(cloneDate.setMonth(cloneDate.getMonth() - index)) : date);
      }
      if (this._view === 'months' && this._config.selectionType !== 'month') {
        this._setCalendarDate(index ? new Date(cloneDate.setMonth(cloneDate.getMonth() - index)) : date);
        this._view = 'days';
        this._updateCalendar();
        return;
      }
      if (this._view === 'years' && this._config.selectionType !== 'year') {
        this._setCalendarDate(index ? new Date(cloneDate.setFullYear(cloneDate.getFullYear() - index)) : date);
        this._view = 'months';
        this._updateCalendar();
        return;
      }
      this._hoverDate = null;
      this._selectDate(date);
      this._updateClassNames();
    }
    _handleCalendarKeydown(event) {
      const date = this._getDate(event.target);
      if (event.code === SPACE_KEY$1 || event.key === ENTER_KEY$1) {
        event.preventDefault();
        this._handleCalendarClick(event);
      }
      if (event.key === ARROW_RIGHT_KEY$2 || event.key === ARROW_LEFT_KEY$2 || event.key === ARROW_UP_KEY$2 || event.key === ARROW_DOWN_KEY$2) {
        event.preventDefault();
        if (this._config.maxDate && date >= convertToDateObject(this._config.maxDate, this._config.selectionType) && (event.key === ARROW_RIGHT_KEY$2 || event.key === ARROW_DOWN_KEY$2)) {
          return;
        }
        if (this._config.minDate && date <= convertToDateObject(this._config.minDate, this._config.selectionType) && (event.key === ARROW_LEFT_KEY$2 || event.key === ARROW_UP_KEY$2)) {
          return;
        }
        let element = event.target;
        if (this._config.selectionType === 'week' && element.tabIndex === -1) {
          element = element.closest('tr[tabindex="0"]');
        }
        const list = SelectorEngine.find(this._config.selectionType === 'week' ? 'tr[tabindex="0"]' : 'td[tabindex="0"]', this._element);
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
        if (event.key === ARROW_RIGHT_KEY$2 && last || event.key === ARROW_DOWN_KEY$2 && toBoundary.end < gap.ArrowDown || event.key === ARROW_LEFT_KEY$2 && first || event.key === ARROW_UP_KEY$2 && toBoundary.start < Math.abs(gap.ArrowUp)) {
          const callback = key => {
            setTimeout(() => {
              const _list = SelectorEngine.find('td[tabindex="0"], tr[tabindex="0"]', SelectorEngine.find('.calendar-panel', this._element).pop());
              if (_list.length && key === ARROW_RIGHT_KEY$2) {
                _list[0].focus();
              }
              if (_list.length && key === ARROW_LEFT_KEY$2) {
                _list[_list.length - 1].focus();
              }
              if (_list.length && key === ARROW_DOWN_KEY$2) {
                _list[gap.ArrowDown - (list.length - index)].focus();
              }
              if (_list.length && key === ARROW_UP_KEY$2) {
                _list[_list.length - (Math.abs(gap.ArrowUp) + 1 - (index + 1))].focus();
              }
            }, 0);
          };
          if (this._view === 'days') {
            this._modifyCalendarDate(0, event.key === ARROW_RIGHT_KEY$2 || event.key === ARROW_DOWN_KEY$2 ? 1 : -1, callback(event.key));
          }
          if (this._view === 'months') {
            this._modifyCalendarDate(event.key === ARROW_RIGHT_KEY$2 || event.key === ARROW_DOWN_KEY$2 ? 1 : -1, callback(event.key));
          }
          if (this._view === 'years') {
            this._modifyCalendarDate(event.key === ARROW_RIGHT_KEY$2 || event.key === ARROW_DOWN_KEY$2 ? 10 : -10, callback(event.key));
          }
          return;
        }
        if (list[index + gap[event.key]].tabIndex === 0) {
          list[index + gap[event.key]].focus();
          return;
        }
        for (let i = index; i < list.length; event.key === ARROW_RIGHT_KEY$2 || event.key === ARROW_DOWN_KEY$2 ? i++ : i--) {
          if (list[i + gap[event.key]].tabIndex === 0) {
            list[i + gap[event.key]].focus();
            break;
          }
        }
      }
    }
    _handleCalendarMouseEnter(event) {
      const target = event.target.classList.contains(CLASS_NAME_CALENDAR_CELL_INNER) ? event.target.parentElement : event.target;
      const date = this._getDate(target);
      if (isDateDisabled(date, this._config.minDate, this._config.maxDate, this._config.disabledDates)) {
        return;
      }
      this._hoverDate = date;
      EventHandler.trigger(this._element, EVENT_CELL_HOVER, {
        date: getDateBySelectionType(date, this._config.selectionType)
      });
      this._updateClassNames();
    }
    _handleCalendarMouseLeave() {
      this._hoverDate = null;
      EventHandler.trigger(this._element, EVENT_CELL_HOVER, {
        date: null
      });
      this._updateClassNames();
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$d, `${SELECTOR_CALENDAR_CELL}[tabindex="0"]`, event => {
        this._handleCalendarClick(event);
      });
      EventHandler.on(this._element, EVENT_KEYDOWN$3, `${SELECTOR_CALENDAR_CELL}[tabindex="0"]`, event => {
        this._handleCalendarKeydown(event);
      });
      EventHandler.on(this._element, EVENT_MOUSEENTER$2, `${SELECTOR_CALENDAR_CELL}[tabindex="0"]`, event => {
        this._handleCalendarMouseEnter(event);
      });
      EventHandler.on(this._element, EVENT_MOUSELEAVE$2, `${SELECTOR_CALENDAR_CELL}[tabindex="0"]`, () => {
        this._handleCalendarMouseLeave();
      });
      EventHandler.on(this._element, EVENT_FOCUS, `${SELECTOR_CALENDAR_CELL}[tabindex="0"]`, event => {
        this._handleCalendarMouseEnter(event);
      });
      EventHandler.on(this._element, EVENT_BLUR, `${SELECTOR_CALENDAR_CELL}[tabindex="0"]`, () => {
        this._handleCalendarMouseLeave();
      });
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$d, `${SELECTOR_CALENDAR_ROW}[tabindex="0"]`, event => {
        this._handleCalendarClick(event);
      });
      EventHandler.on(this._element, EVENT_KEYDOWN$3, `${SELECTOR_CALENDAR_ROW}[tabindex="0"]`, event => {
        this._handleCalendarKeydown(event);
      });
      EventHandler.on(this._element, EVENT_MOUSEENTER$2, `${SELECTOR_CALENDAR_ROW}[tabindex="0"]`, event => {
        this._handleCalendarMouseEnter(event);
      });
      EventHandler.on(this._element, EVENT_MOUSELEAVE$2, `${SELECTOR_CALENDAR_ROW}[tabindex="0"]`, () => {
        this._handleCalendarMouseLeave();
      });
      EventHandler.on(this._element, EVENT_FOCUS, `${SELECTOR_CALENDAR_ROW}[tabindex="0"]`, event => {
        this._handleCalendarMouseEnter(event);
      });
      EventHandler.on(this._element, EVENT_BLUR, `${SELECTOR_CALENDAR_ROW}[tabindex="0"]`, () => {
        this._handleCalendarMouseLeave();
      });

      // Navigation
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$d, SELECTOR_BTN_PREV, event => {
        event.preventDefault();
        this._modifyCalendarDate(0, -1);
      });
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$d, SELECTOR_BTN_DOUBLE_PREV, event => {
        event.preventDefault();
        this._modifyCalendarDate(this._view === 'years' ? -10 : -1);
      });
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$d, SELECTOR_BTN_NEXT, event => {
        event.preventDefault();
        this._modifyCalendarDate(0, 1);
      });
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$d, SELECTOR_BTN_DOUBLE_NEXT, event => {
        event.preventDefault();
        this._modifyCalendarDate(this._view === 'years' ? 10 : 1);
      });
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$d, SELECTOR_BTN_MONTH, event => {
        event.preventDefault();
        this._view = 'months';
        this._updateCalendar();
      });
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$d, SELECTOR_BTN_YEAR, event => {
        event.preventDefault();
        this._view = 'years';
        this._updateCalendar();
      });
      EventHandler.on(this._element, EVENT_MOUSELEAVE$2, 'table', () => {
        EventHandler.trigger(this._element, EVENT_CALENDAR_MOUSE_LEAVE);
      });
    }
    _setCalendarDate(date) {
      this._calendarDate = date;
      EventHandler.trigger(this._element, EVENT_CALENDAR_DATE_CHANGE, {
        date
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
      if (this._view === 'days') {
        EventHandler.trigger(this._element, EVENT_CALENDAR_DATE_CHANGE, {
          date: d
        });
      }
      this._updateCalendar(callback);
    }
    _setEndDate(date) {
      this._endDate = date;
      EventHandler.trigger(this._element, EVENT_END_DATE_CHANGE$1, {
        date: getDateBySelectionType(this._endDate, this._config.selectionType)
      });
    }
    _setStartDate(date) {
      this._startDate = date;
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
      if (isDateDisabled(date, this._config.minDate, this._config.maxDate, this._config.disabledDates)) {
        return;
      }
      if (this._config.range) {
        if (this._selectEndDate) {
          this._setSelectEndDate(false);
          if (this._startDate && this._startDate > date) {
            this._setStartDate(null);
            this._setEndDate(null);
            return;
          }
          if (isDisableDateInRange(this._startDate, date, this._config.disabledDates)) {
            this._setStartDate(null);
            this._setEndDate(null);
            return;
          }
          this._setEndDate(date);
          return;
        }
        if (this._endDate && this._endDate < date) {
          this._setStartDate(null);
          this._setEndDate(null);
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
      calendarPanelEl.classList.add('calendar-panel');
      Manipulator.setDataAttribute(calendarPanelEl, 'calendar-index', order);

      // Create navigation
      const navigationElement = document.createElement('div');
      navigationElement.classList.add('calendar-nav');
      navigationElement.innerHTML = `
      <div class="calendar-nav-prev">
        <button class="btn btn-transparent btn-sm btn-double-prev">
          <span class="calendar-nav-icon calendar-nav-icon-double-prev"></span>
        </button>
        ${this._view === 'days' ? `<button class="btn btn-transparent btn-sm btn-prev">
          <span class="calendar-nav-icon calendar-nav-icon-prev"></span>
        </button>` : ''}
      </div>
      <div class="calendar-nav-date">
        ${this._view === 'days' ? `<button class="btn btn-transparent btn-sm btn-month">
          ${calendarDate.toLocaleDateString(this._config.locale, {
      month: 'long'
    })}
        </button>` : ''}
        <button class="btn btn-transparent btn-sm btn-year">
          ${calendarDate.toLocaleDateString(this._config.locale, {
      year: 'numeric'
    })}
        </button>
      </div>
      <div class="calendar-nav-next">
        ${this._view === 'days' ? `<button class="btn btn-transparent btn-sm btn-next">
          <span class="calendar-nav-icon calendar-nav-icon-next"></span>
        </button>` : ''}
        <button class="btn btn-transparent btn-sm btn-double-next">
          <span class="calendar-nav-icon calendar-nav-icon-double-next"></span>
        </button>
      </div>
    `;
      const monthDetails = getMonthDetails(year, month, this._config.firstDayOfWeek);
      const listOfMonths = createGroupsInArray(getMonthsNames(this._config.locale), 4);
      const listOfYears = createGroupsInArray(getYears(calendarDate.getFullYear()), 4);
      const weekDays = monthDetails[0].days;
      const calendarTable = document.createElement('table');
      calendarTable.innerHTML = `
    ${this._view === 'days' ? `
      <thead>
        <tr>
          ${this._config.showWeekNumber ? `<th class="calendar-cell">
              <div class="calendar-header-cell-inner">
               ${(_this$_config$weekNum = this._config.weekNumbersLabel) != null ? _this$_config$weekNum : ''}
              </div>
            </th>` : ''}
          ${weekDays.map(({
      date
    }) => `<th class="calendar-cell">
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
        ${this._view === 'days' ? monthDetails.map(week => {
      const date = convertToDateObject(week.weekNumber === 0 ? `${calendarDate.getFullYear()}W53` : `${calendarDate.getFullYear()}W${week.weekNumber}`, this._config.selectionType);
      return `<tr 
              class="calendar-row ${this._config.selectionType === 'week' && this._sharedClassNames(date)}"
              tabindex="${this._config.selectionType === 'week' && week.days.some(day => day.month === 'current') && !isDateDisabled(date, this._config.minDate, this._config.maxDate, this._config.disabledDates) ? 0 : -1}"
            >
              ${this._config.showWeekNumber ? `<th class="calendar-cell-week-number">${week.weekNumber === 0 ? 53 : week.weekNumber}</td>` : ''}
              ${week.days.map(({
        date,
        month
      }) => month === 'current' || this._config.showAdjacementDays ? `<td 
                  class="calendar-cell ${this._dayClassNames(date, month)}"
                  tabindex="${this._config.selectionType === 'day' && (month === 'current' || this._config.selectAdjacementDays) && !isDateDisabled(date, this._config.minDate, this._config.maxDate, this._config.disabledDates) ? 0 : -1}"
                  data-coreui-date="${date}"
                >
                  <div class="calendar-cell-inner day">
                    ${date.toLocaleDateString(this._config.locale, {
        day: 'numeric'
      })}
                  </div>
                </td>` : '<td></td>').join('')}</tr>`;
    }).join('') : ''}
        ${this._view === 'months' ? listOfMonths.map((row, index) => `<tr>
            ${row.map((month, idx) => {
      const date = new Date(calendarDate.getFullYear(), index * 3 + idx, 1);
      return `<td
                  class="calendar-cell ${this._sharedClassNames(date)}"
                  data-coreui-date="${date.toDateString()}"
                  tabindex="${isDateDisabled(date, this._config.minDate, this._config.maxDate, this._config.disabledDates) ? -1 : 0}"
                >
                  <div class="calendar-cell-inner month">
                    ${month}
                  </div>
                </td>`;
    }).join('')}
          </tr>`).join('') : ''}
        ${this._view === 'years' ? listOfYears.map(row => `<tr>
            ${row.map(year => {
      const date = new Date(year, 0, 1);
      return `<td
                  class="calendar-cell ${this._sharedClassNames(date)}"
                  data-coreui-date="${date.toDateString()}"
                  tabindex="${isDateDisabled(date, this._config.minDate, this._config.maxDate, this._config.disabledDates) ? -1 : 0}"
                >
                  <div class="calendar-cell-inner year">
                    ${year}
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
      const calendarsEl = document.createElement('div');
      calendarsEl.classList.add('calendars');
      if (this._config.selectionType && this._view === 'days') {
        calendarsEl.classList.add(`select-${this._config.selectionType}`);
      }
      if (this._config.showWeekNumber) {
        calendarsEl.classList.add('show-week-numbers');
      }
      for (const [index, _] of Array.from({
        length: this._config.calendars
      }).entries()) {
        calendarsEl.append(this._createCalendarPanel(index));
      }
      this._element.classList.add(CLASS_NAME_CALENDAR$1);
      this._element.append(calendarsEl);
    }
    _updateCalendar(callback) {
      this._element.innerHTML = '';
      this._createCalendar();
      if (callback) {
        callback();
      }
    }
    _updateClassNames() {
      if (this._config.selectionType === 'week') {
        const rows = SelectorEngine.find(SELECTOR_CALENDAR_ROW, this._element);
        for (const row of rows) {
          const firstCell = SelectorEngine.findOne(SELECTOR_CALENDAR_CELL, row);
          const date = new Date(Manipulator.getDataAttribute(firstCell, 'date'));
          const classNames = this._sharedClassNames(date);
          row.className = `${CLASS_NAME_CALENDAR_ROW} ${classNames}`;
        }
        return;
      }
      const cells = SelectorEngine.find(`${SELECTOR_CALENDAR_CELL}[tabindex="0"]`, this._element);
      for (const cell of cells) {
        const date = new Date(Manipulator.getDataAttribute(cell, 'date'));
        const classNames = this._config.selectionType === 'day' ? this._dayClassNames(date, 'current') : this._sharedClassNames(date);
        cell.className = `${CLASS_NAME_CALENDAR_CELL} ${classNames}`;
      }
    }
    _dayClassNames(date, month) {
      const classNames = {
        ...(this._config.selectionType === 'day' && this._view === 'days' && {
          clickable: month !== 'current' && this._config.selectAdjacementDays,
          disabled: isDateDisabled(date, this._config.minDate, this._config.maxDate, this._config.disabledDates),
          range: month === 'current' && isDateInRange(date, this._startDate, this._endDate),
          'range-hover': month === 'current' && (this._hoverDate && this._selectEndDate ? isDateInRange(date, this._startDate, this._hoverDate) : isDateInRange(date, this._hoverDate, this._endDate)),
          selected: isDateSelected(date, this._startDate, this._endDate)
        }),
        today: isToday(date),
        [month]: true
      };

      // eslint-disable-next-line unicorn/no-array-reduce
      const result = Object.keys(classNames).reduce((o, key) => {
        // eslint-disable-next-line no-unused-expressions
        classNames[key] === true && (o[key] = classNames[key]);
        return o;
      }, {});
      return Object.keys(result).join(' ');
    }
    _sharedClassNames(date) {
      const classNames = {
        disabled: isDateDisabled(date, this._config.minDate, this._config.maxDate, this._config.disabledDates),
        range: isDateInRange(date, this._startDate, this._endDate),
        'range-hover': (this._config.selectionType === 'week' && this._view === 'days' || this._config.selectionType === 'month' && this._view === 'months' || this._config.selectionType === 'year' && this._view === 'years') && (this._hoverDate && this._selectEndDate ? isDateInRange(date, this._startDate, this._hoverDate) : isDateInRange(date, this._hoverDate, this._endDate)),
        selected: isDateSelected(date, this._startDate, this._endDate)
      };

      // eslint-disable-next-line unicorn/no-array-reduce
      const result = Object.keys(classNames).reduce((o, key) => {
        // eslint-disable-next-line no-unused-expressions
        classNames[key] === true && (o[key] = classNames[key]);
        return o;
      }, {});
      return Object.keys(result).join(' ');
    }
    _getConfig(config) {
      config = {
        ...this.constructor.Default,
        ...Manipulator.getDataAttributes(this._element),
        ...config
      };
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
        const data = Calendar.getOrCreateInstance(this);
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

  EventHandler.on(window, EVENT_LOAD_DATA_API$a, () => {
    for (const element of Array.from(document.querySelectorAll(SELECTOR_CALENDAR$2))) {
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

  const NAME$k = 'swipe';
  const EVENT_KEY$g = '.coreui.swipe';
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$g}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$g}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$g}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$g}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$g}`;
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SWIPE_THRESHOLD = 40;
  const Default$j = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const DefaultType$j = {
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
      return Default$j;
    }
    static get DefaultType() {
      return DefaultType$j;
    }
    static get NAME() {
      return NAME$k;
    }

    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$g);
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

  const NAME$j = 'carousel';
  const DATA_KEY$f = 'coreui.carousel';
  const EVENT_KEY$f = `.${DATA_KEY$f}`;
  const DATA_API_KEY$c = '.data-api';
  const ARROW_LEFT_KEY$1 = 'ArrowLeft';
  const ARROW_RIGHT_KEY$1 = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const EVENT_SLIDE = `slide${EVENT_KEY$f}`;
  const EVENT_SLID = `slid${EVENT_KEY$f}`;
  const EVENT_KEYDOWN$2 = `keydown${EVENT_KEY$f}`;
  const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$f}`;
  const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$f}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$f}`;
  const EVENT_LOAD_DATA_API$9 = `load${EVENT_KEY$f}${DATA_API_KEY$c}`;
  const EVENT_CLICK_DATA_API$c = `click${EVENT_KEY$f}${DATA_API_KEY$c}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE$3 = 'active';
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
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  const Default$i = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  const DefaultType$i = {
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
      return Default$i;
    }
    static get DefaultType() {
      return DefaultType$i;
    }
    static get NAME() {
      return NAME$j;
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
        EventHandler.on(this._element, EVENT_KEYDOWN$2, event => this._keydown(event));
      }
      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
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
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$3);
      activeIndicator.removeAttribute('aria-current');
      const newActiveIndicator = SelectorEngine.findOne(`[data-coreui-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$3);
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
        nextElement.classList.add(CLASS_NAME_ACTIVE$3);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$3, orderClassName, directionalClassName);
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

  EventHandler.on(document, EVENT_CLICK_DATA_API$c, SELECTOR_DATA_SLIDE, function (event) {
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
  EventHandler.on(window, EVENT_LOAD_DATA_API$9, () => {
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

  const NAME$i = 'collapse';
  const DATA_KEY$e = 'coreui.collapse';
  const EVENT_KEY$e = `.${DATA_KEY$e}`;
  const DATA_API_KEY$b = '.data-api';
  const EVENT_SHOW$a = `show${EVENT_KEY$e}`;
  const EVENT_SHOWN$a = `shown${EVENT_KEY$e}`;
  const EVENT_HIDE$a = `hide${EVENT_KEY$e}`;
  const EVENT_HIDDEN$a = `hidden${EVENT_KEY$e}`;
  const EVENT_CLICK_DATA_API$b = `click${EVENT_KEY$e}${DATA_API_KEY$b}`;
  const CLASS_NAME_SHOW$d = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE$9 = '[data-coreui-toggle="collapse"]';
  const Default$h = {
    parent: null,
    toggle: true
  };
  const DefaultType$h = {
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
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$9);
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
      return Default$h;
    }
    static get DefaultType() {
      return DefaultType$h;
    }
    static get NAME() {
      return NAME$i;
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
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$a);
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
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$d);
        this._element.style[dimension] = '';
        EventHandler.trigger(this._element, EVENT_SHOWN$a);
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
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$a);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$d);
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
        EventHandler.trigger(this._element, EVENT_HIDDEN$a);
      };
      this._element.style[dimension] = '';
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$d);
    }

    // Private
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
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$9);
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

  EventHandler.on(document, EVENT_CLICK_DATA_API$b, SELECTOR_DATA_TOGGLE$9, function (event) {
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
    const formatter = new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
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
    return d instanceof Date && d.getTime();
  };

  // export const convert12hTo24h = (abbr, hour) => {
  //   if (abbr === 'am' && hour === 12) {
  //     return 0
  //   }

  //   if (abbr === 'am') {
  //     return hour
  //   }

  //   if (abbr === 'pm' && hour === 12) {
  //     return 12
  //   }

  //   return hour + 12
  // }

  // export const convert24hTo12h = hour => hour % 12 || 12

  // export const convertTimeToDate = time =>
  //   time ?
  //     (time instanceof Date ?
  //       time :
  //       new Date(`1970-01-01 ${time}`)) :
  //     null

  // export const getAmPm = (date, locale) => {
  //   if (date.toLocaleTimeString(locale).includes('AM')) {
  //     return 'am'
  //   }

  //   if (date.toLocaleTimeString(locale).includes('PM')) {
  //     return 'pm'
  //   }

  //   return date.getHours() >= 12 ? 'pm' : 'am'
  // }

  // export const getListOfHours = (locale, ampm = 'auto') => Array.from({ length: (ampm === 'auto' && isAmPm(locale)) || ampm === true ? 12 : 24 }, (_, i) => {
  //   return {
  //     value: (ampm === 'auto' && isAmPm(locale)) || ampm === true ? i + 1 : i,
  //     label: ((ampm === 'auto' && isAmPm(locale)) || ampm === true ? i + 1 : i).toLocaleString(locale)
  //   }
  // })

  // export const getListOfMinutes = (locale, valueAsString = false) => Array.from({ length: 60 }, (_, i) => {
  //   const d = new Date()
  //   d.setMinutes(i)
  //   return {
  //     value: valueAsString ? i.toString() : i,
  //     label: d
  //       .toLocaleTimeString(locale, {
  //         minute: '2-digit',
  //         second: '2-digit'
  //       })
  //       .split(/[^\dA-Za-z\u06F0-\u06F9]/)[0]
  //   }
  // })

  // export const getListOfSeconds = (locale, valueAsString = false) => Array.from({ length: 60 }, (_, i) => {
  //   const d = new Date()
  //   d.setSeconds(i)
  //   return {
  //     value: valueAsString ? i.toString() : i,
  //     label: d
  //       .toLocaleTimeString(locale, {
  //         minute: '2-digit',
  //         second: '2-digit'
  //       })
  //       .split(/[^\dA-Za-z\u06F0-\u06F9]/)[1]
  //   }
  // })

  // export const getSelectedHour = (date, locale) => date ? (isAmPm(locale) ? convert24hTo12h(date.getHours()) : date.getHours()) : ''

  // export const getSelectedMinutes = date => (date ? date.getMinutes() : '')

  // export const getSelectedSeconds = date => (date ? date.getSeconds() : '')

  // export const isAmPm = locale => ['am', 'AM', 'pm', 'PM'].some(el => new Date().toLocaleString(locale).includes(el))

  // export const isValidTime = time => {
  //   const d = new Date(`1970-01-01 ${time}`)
  //   return d instanceof Date && d.getTime()
  // }

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO time-picker.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$h = 'time-picker';
  const DATA_KEY$d = 'coreui.time-picker';
  const EVENT_KEY$d = `.${DATA_KEY$d}`;
  const DATA_API_KEY$a = '.data-api';
  const ENTER_KEY = 'Enter';
  const SPACE_KEY = 'Space';
  const TAB_KEY$5 = 'Tab';
  const RIGHT_MOUSE_BUTTON$4 = 2;
  const EVENT_CLICK$4 = `click${EVENT_KEY$d}`;
  const EVENT_HIDE$9 = `hide${EVENT_KEY$d}`;
  const EVENT_HIDDEN$9 = `hidden${EVENT_KEY$d}`;
  const EVENT_INPUT$1 = 'input';
  const EVENT_SHOW$9 = `show${EVENT_KEY$d}`;
  const EVENT_SHOWN$9 = `shown${EVENT_KEY$d}`;
  const EVENT_SUBMIT$1 = 'submit';
  const EVENT_TIME_CHANGE = `timeChange${EVENT_KEY$d}`;
  const EVENT_CLICK_DATA_API$a = `click${EVENT_KEY$d}${DATA_API_KEY$a}`;
  const EVENT_KEYUP_DATA_API$4 = `keyup${EVENT_KEY$d}${DATA_API_KEY$a}`;
  const EVENT_LOAD_DATA_API$8 = `load${EVENT_KEY$d}${DATA_API_KEY$a}`;
  const CLASS_NAME_BODY$1 = 'time-picker-body';
  const CLASS_NAME_CLEANER$2 = 'time-picker-cleaner';
  const CLASS_NAME_DISABLED$2 = 'disabled';
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
  const CLASS_NAME_SHOW$c = 'show';
  const CLASS_NAME_TIME_PICKER$1 = 'time-picker';
  const CLASS_NAME_WAS_VALIDATED$1 = 'was-validated';
  const SELECTOR_DATA_TOGGLE$8 = '[data-coreui-toggle="time-picker"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN$3 = `${SELECTOR_DATA_TOGGLE$8}.${CLASS_NAME_SHOW$c}`;
  const SELECTOR_WAS_VALIDATED$1 = 'form.was-validated';
  const Default$g = {
    cancelButton: 'Cancel',
    cancelButtonClasses: ['btn', 'btn-sm', 'btn-ghost-primary'],
    confirmButton: 'OK',
    confirmButtonClasses: ['btn', 'btn-sm', 'btn-primary'],
    cleaner: true,
    container: 'dropdown',
    disabled: false,
    footer: true,
    hours: null,
    indicator: true,
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
    valid: false,
    variant: 'roll'
  };
  const DefaultType$g = {
    cancelButton: '(boolean|string)',
    cancelButtonClasses: '(array|string)',
    confirmButton: '(boolean|string)',
    confirmButtonClasses: '(array|string)',
    cleaner: 'boolean',
    container: 'string',
    disabled: 'boolean',
    footer: 'boolean',
    hours: '(array|function)',
    indicator: 'boolean',
    inputReadOnly: 'boolean',
    invalid: 'boolean',
    locale: 'string',
    minutes: '(array|boolean|function)',
    name: 'string',
    placeholder: 'string',
    required: 'boolean',
    seconds: '(array|boolean|function)',
    size: '(string|null)',
    time: '(date|string|null)',
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
        if (set === 'toggle') {
          if (value === 'am') {
            this._ampm = 'am';
            _date.setHours(_date.getHours() - 12);
          }
          if (value === 'pm') {
            this._ampm = 'pm';
            _date.setHours(_date.getHours() + 12);
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
      this._input = null;
      this._timePickerBody = null;
      this._localizedTimePartials = getLocalizedTimePartials(this._config.locale, this.ampm, this._config.hours, this._config.minutes, this._config.seconds);
      this._createTimePicker();
      this._createTimePickerSelection();
      this._addEventListeners();
      this._setUpSelects();
    }

    // Getters
    static get Default() {
      return Default$g;
    }
    static get DefaultType() {
      return DefaultType$g;
    }
    static get NAME() {
      return NAME$h;
    }

    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._config.disabled || this._isShown()) {
        return;
      }
      EventHandler.trigger(this._element, EVENT_SHOW$9);
      this._element.classList.add(CLASS_NAME_SHOW$c);
      this._element.setAttribute('aria-expanded', true);
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
      EventHandler.trigger(this._element, EVENT_HIDDEN$9);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    cancel() {
      this._date = this._initialDate;
      this._setInputValue(this._initialDate || '');
      this._input.dispatchEvent(new Event('change'));
      this._timePickerBody.innerHTML = '';
      this.hide();
      this._createTimePickerSelection();
    }
    clear() {
      this._date = null;
      this._setInputValue('');
      this._input.dispatchEvent(new Event('change'));
      this._timePickerBody.innerHTML = '';
      this._createTimePickerSelection();
    }
    reset() {
      this._date = this._convertStringToDate(this._config.time);
      this._setInputValue(this._config.time);
      this._input.dispatchEvent(new Event('change'));
      this._timePickerBody.innerHTML = '';
      this._createTimePickerSelection();
    }
    update(config) {
      this._config = this._getConfig(config);
      this._date = this._convertStringToDate(this._config.time);
      this._ampm = this._date ? getAmPm(new Date(this._date), this._config.locale) : 'am';
      this._timePickerBody.innerHTML = '';
      this._createTimePickerSelection();
    }

    // Private
    _addEventListeners() {
      EventHandler.on(this._togglerElement, EVENT_CLICK$4, () => {
        if (!this._config.disabled) {
          this.show();
          this._initialDate = new Date(this._date);
          if (this._config.variant === 'roll') {
            this._setUpRolls(true);
          }
          if (this._config.variant === 'select') {
            this._setUpSelects();
          }
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
      EventHandler.on(this._input, EVENT_INPUT$1, event => {
        if (isValidTime(event.target.value)) {
          this._date = this._convertStringToDate(event.target.value);
          EventHandler.trigger(this._element, EVENT_TIME_CHANGE, {
            timeString: this._date ? this._date.toTimeString() : null,
            localeTimeString: this._date ? this._date.toLocaleTimeString() : null,
            date: this._date
          });
        }
      });
      if (this._config.container === 'dropdown') {
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
      Manipulator.setDataAttribute(this._element, 'toggle', CLASS_NAME_TIME_PICKER$1);
      if (this._config.size) {
        this._element.classList.add(`time-picker-${this._config.size}`);
      }
      this._element.classList.toggle(CLASS_NAME_IS_VALID$1, this._config.valid);
      if (this._config.disabled) {
        this._element.classList.add(CLASS_NAME_DISABLED$2);
      }
      this._element.classList.toggle(CLASS_NAME_IS_INVALID$1, this._config.invalid);
      if (this._config.container === 'dropdown') {
        this._element.append(this._createTimePickerInputGroup());
        const dropdownEl = document.createElement('div');
        dropdownEl.classList.add(CLASS_NAME_DROPDOWN$1);
        dropdownEl.append(this._createTimePickerBody());
        if (this._config.footer || this._config.timepicker) {
          dropdownEl.append(this._createTimePickerFooter());
        }
        this._element.append(dropdownEl);
        this._menu = dropdownEl;
      }
      if (this._config.container === 'inline') {
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
        inputGroupEl.append(inputGroupIndicatorEl);
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
      }
      this._timePickerBody = timePickerBodyEl;
      return timePickerBodyEl;
    }
    _createTimePickerInlineSelect(className, options) {
      const selectEl = document.createElement('select');
      selectEl.classList.add(CLASS_NAME_INLINE_SELECT, className);
      selectEl.disabled = this._config.disabled;
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
      this._timePickerBody.append(this._createTimePickerInlineSelect('hours', this._localizedTimePartials.listOfHours));
      if (this._config.minutes) {
        this._timePickerBody.append(timeSeparatorEl.cloneNode(true), this._createTimePickerInlineSelect('minutes', this._localizedTimePartials.listOfMinutes));
      }
      if (this._config.seconds) {
        this._timePickerBody.append(timeSeparatorEl, this._createTimePickerInlineSelect('seconds', this._localizedTimePartials.listOfSeconds));
      }
      if (this._localizedTimePartials.hour12) {
        this._timePickerBody.append(this._createTimePickerInlineSelect('toggle', [{
          value: 'am',
          label: 'AM'
        }, {
          value: 'pm',
          label: 'PM'
        }], '_selectAmPm', this._ampm));
      }
    }
    _createTimePickerRoll() {
      this._timePickerBody.append(this._createTimePickerRollCol(this._localizedTimePartials.listOfHours, 'hours'));
      if (this._config.minutes) {
        this._timePickerBody.append(this._createTimePickerRollCol(this._localizedTimePartials.listOfMinutes, 'minutes'));
      }
      if (this._config.seconds) {
        this._timePickerBody.append(this._createTimePickerRollCol(this._localizedTimePartials.listOfSeconds, 'seconds'));
      }
      if (this._localizedTimePartials.hour12) {
        this._timePickerBody.append(this._createTimePickerRollCol([{
          value: 'am',
          label: 'AM'
        }, {
          value: 'pm',
          label: 'PM'
        }], 'toggle', this._ampm));
      }
    }
    _createTimePickerRollCol(options, part) {
      const timePickerRollColEl = document.createElement('div');
      timePickerRollColEl.classList.add(CLASS_NAME_ROLL_COL);
      for (const option of options) {
        const timePickerRollCellEl = document.createElement('div');
        timePickerRollCellEl.classList.add(CLASS_NAME_ROLL_CELL);
        timePickerRollCellEl.setAttribute('role', 'button');
        timePickerRollCellEl.tabIndex = 0;
        timePickerRollCellEl.innerHTML = option.label;
        timePickerRollCellEl.addEventListener('click', () => {
          this._handleTimeChange(part, option.value);
        });
        timePickerRollCellEl.addEventListener('keydown', event => {
          if (event.code === SPACE_KEY || event.key === ENTER_KEY) {
            event.preventDefault();
            this._handleTimeChange(part, option.value);
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
    _setUpRolls(initial = false) {
      for (const part of Array.from(['hours', 'minutes', 'seconds', 'toggle'])) {
        for (const element of SelectorEngine.find(`[data-coreui-${part}]`, this._element)) {
          if (this._getPartOfTime(part) === Manipulator.getDataAttribute(element, part)) {
            element.classList.add(CLASS_NAME_SELECTED$1);
            this._scrollTo(element.parentElement, element, initial);
            for (const sibling of element.parentElement.children) {
              // eslint-disable-next-line max-depth
              if (sibling !== element) {
                sibling.classList.remove(CLASS_NAME_SELECTED$1);
              }
            }
          }
        }
      }
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
      for (const part of Array.from(['hours', 'minutes', 'seconds', 'toggle'])) {
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
    _getConfig(config) {
      config = {
        ...this.constructor.Default,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      return config;
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
      if (part === 'toggle') {
        return getAmPm(new Date(this._date), this._config.locale);
      }
    }
    _isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW$c);
    }
    _scrollTo(parent, children, initial = false) {
      parent.scrollTo({
        top: children.offsetTop,
        behavior: initial ? 'instant' : 'smooth'
      });
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
        const data = TimePicker.getOrCreateInstance(this);
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
      if (event.button === RIGHT_MOUSE_BUTTON$4 || event.type === 'keyup' && event.key !== TAB_KEY$5) {
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

  EventHandler.on(window, EVENT_LOAD_DATA_API$8, () => {
    const timePickers = SelectorEngine.find(SELECTOR_DATA_TOGGLE$8);
    for (let i = 0, len = timePickers.length; i < len; i++) {
      TimePicker.timePickerInterface(timePickers[i]);
    }
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$a, TimePicker.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API$4, TimePicker.clearMenus);

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

  const NAME$g = 'date-range-picker';
  const DATA_KEY$c = 'coreui.date-range-picker';
  const EVENT_KEY$c = `.${DATA_KEY$c}`;
  const DATA_API_KEY$9 = '.data-api';
  const TAB_KEY$4 = 'Tab';
  const RIGHT_MOUSE_BUTTON$3 = 2;
  const EVENT_CLICK$3 = `click${EVENT_KEY$c}`;
  const EVENT_END_DATE_CHANGE = `endDateChange${EVENT_KEY$c}`;
  const EVENT_HIDE$8 = `hide${EVENT_KEY$c}`;
  const EVENT_HIDDEN$8 = `hidden${EVENT_KEY$c}`;
  const EVENT_INPUT = 'input';
  const EVENT_RESIZE$3 = 'resize';
  const EVENT_SHOW$8 = `show${EVENT_KEY$c}`;
  const EVENT_SHOWN$8 = `shown${EVENT_KEY$c}`;
  const EVENT_SUBMIT = 'submit';
  const EVENT_START_DATE_CHANGE = `startDateChange${EVENT_KEY$c}`;
  const EVENT_CLICK_DATA_API$9 = `click${EVENT_KEY$c}${DATA_API_KEY$9}`;
  const EVENT_KEYUP_DATA_API$3 = `keyup${EVENT_KEY$c}${DATA_API_KEY$9}`;
  const EVENT_LOAD_DATA_API$7 = `load${EVENT_KEY$c}${DATA_API_KEY$9}`;
  const CLASS_NAME_BODY = 'date-picker-body';
  const CLASS_NAME_CALENDAR = 'date-picker-calendar';
  const CLASS_NAME_CALENDARS = 'date-picker-calendars';
  const CLASS_NAME_CLEANER$1 = 'date-picker-cleaner';
  const CLASS_NAME_DATE_PICKER = 'date-picker';
  const CLASS_NAME_DATE_RANGE_PICKER = 'date-range-picker';
  const CLASS_NAME_DISABLED$1 = 'disabled';
  const CLASS_NAME_DROPDOWN = 'date-picker-dropdown';
  const CLASS_NAME_INDICATOR = 'date-picker-indicator';
  const CLASS_NAME_INPUT = 'date-picker-input';
  const CLASS_NAME_INPUT_GROUP$1 = 'date-picker-input-group';
  const CLASS_NAME_IS_INVALID = 'is-invalid';
  const CLASS_NAME_IS_VALID = 'is-valid';
  const CLASS_NAME_FOOTER = 'date-picker-footer';
  const CLASS_NAME_RANGES = 'date-picker-ranges';
  const CLASS_NAME_SEPARATOR = 'date-picker-separator';
  const CLASS_NAME_SHOW$b = 'show';
  const CLASS_NAME_TIME_PICKER = 'time-picker';
  const CLASS_NAME_TIME_PICKERS = 'date-picker-timepickers';
  const CLASS_NAME_WAS_VALIDATED = 'was-validated';
  const SELECTOR_CALENDAR$1 = '.calendar';
  const SELECTOR_DATA_TOGGLE$7 = '[data-coreui-toggle="date-range-picker"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN$2 = `${SELECTOR_DATA_TOGGLE$7}.${CLASS_NAME_SHOW$b}`;
  const SELECTOR_INPUT = '.date-picker-input';
  const SELECTOR_WAS_VALIDATED = 'form.was-validated';
  const Default$f = {
    calendars: 2,
    cancelButton: 'Cancel',
    cancelButtonClasses: ['btn', 'btn-sm', 'btn-ghost-primary'],
    confirmButton: 'OK',
    confirmButtonClasses: ['btn', 'btn-sm', 'btn-primary'],
    cleaner: true,
    calendarDate: null,
    date: null,
    disabled: false,
    disabledDates: null,
    endDate: null,
    endName: null,
    firstDayOfWeek: 1,
    footer: false,
    inputDateFormat: null,
    inputDateParse: null,
    invalid: false,
    indicator: true,
    locale: 'default',
    maxDate: null,
    minDate: null,
    name: null,
    placeholder: ['Start date', 'End date'],
    range: true,
    ranges: {},
    rangesButtonsClasses: ['btn', 'btn-ghost-secondary'],
    required: true,
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
    weekNumbersLabel: null
  };
  const DefaultType$f = {
    calendars: 'number',
    cancelButton: '(boolean|string)',
    cancelButtonClasses: '(array|string)',
    confirmButton: '(boolean|string)',
    confirmButtonClasses: '(array|string)',
    cleaner: 'boolean',
    calendarDate: '(date|string|null)',
    date: '(date|string|null)',
    disabledDates: '(array|null)',
    disabled: 'boolean',
    endDate: '(date|string|null)',
    endName: 'string',
    firstDayOfWeek: 'number',
    footer: 'boolean',
    indicator: 'boolean',
    inputDateFormat: 'function',
    inputDateParse: 'function',
    invalid: 'boolean',
    locale: 'string',
    maxDate: '(date|string|null)',
    minDate: '(date|string|null)',
    name: 'string',
    placeholder: '(array|string)',
    range: 'boolean',
    ranges: 'object',
    rangesButtonsClasses: '(array|string)',
    required: 'boolean',
    separator: 'boolean',
    size: '(string|null)',
    startDate: '(date|string|null)',
    startName: 'string',
    selectAdjacementDays: 'boolean',
    selectEndDate: 'boolean',
    selectionType: 'string',
    showAdjacementDays: 'boolean',
    showWeekNumber: 'boolean',
    timepicker: 'boolean',
    todayButton: '(boolean|string)',
    todayButtonClasses: '(array|string)',
    valid: 'boolean',
    weekNumbersLabel: '(string|null)'
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
      this._menu = null;
      this._startInput = null;
      this._timepickers = null;
      this._timePickerEnd = null;
      this._timePickerStart = null;
      this._togglerElement = null;
      this._createDateRangePicker();
      this._createDateRangePickerCalendars();
      this._addEventListeners();
      this._addCalendarEventListeners();
    }

    // Getters
    static get Default() {
      return Default$f;
    }
    static get DefaultType() {
      return DefaultType$f;
    }
    static get NAME() {
      return NAME$g;
    }

    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._config.disabled || this._isShown()) {
        return;
      }
      EventHandler.trigger(this._element, EVENT_SHOW$8);
      this._element.classList.add(CLASS_NAME_SHOW$b);
      this._element.setAttribute('aria-expanded', true);
      EventHandler.trigger(this._element, EVENT_SHOWN$8);
      this._createPopper();
    }
    hide() {
      EventHandler.trigger(this._element, EVENT_HIDE$8);
      if (this._popper) {
        this._popper.destroy();
      }
      this._element.classList.remove(CLASS_NAME_SHOW$b);
      this._element.setAttribute('aria-expanded', 'false');
      EventHandler.trigger(this._element, EVENT_HIDDEN$8);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    cancel() {
      this._startDate = this._initialStartDate;
      this._startInput.value = this._setInputValue(this._initialStartDate);
      this._startInput.dispatchEvent(new Event('change'));
      if (this._config.range) {
        this._endDate = this._initialEndDate;
        this._endInput.value = this._setInputValue(this._initialEndDate);
        this._endInput.dispatchEvent(new Event('change'));
      }
      this.hide();
      this._calendar.update(this._getCalendarConfig);
      if (this._timePickerStart) {
        this._timePickerStart.update(this._getTimePickerConfig(true));
      }
      if (this._timePickerEnd) {
        this._timePickerEnd.update(this._getTimePickerConfig(false));
      }
    }
    clear() {
      this._endDate = null;
      this._endInput.value = '';
      this._endInput.dispatchEvent(new Event('change'));
      this._startDate = null;
      this._startInput.value = '';
      this._startInput.dispatchEvent(new Event('change'));
      this._calendar.update(this._getCalendarConfig());
      if (this._timePickerStart) {
        this._timePickerStart.update(this._getTimePickerConfig(true));
      }
      if (this._timePickerEnd) {
        this._timePickerEnd.update(this._getTimePickerConfig(false));
      }
    }
    reset() {
      this._endDate = this._config.endDate;
      this._endInput.value = this._setInputValue(this._config.endDate);
      this._endInput.dispatchEvent(new Event('change'));
      this._startDate = this._config.startDate;
      this._startInput.value = this._setInputValue(this._config.startDate);
      this._startInput.dispatchEvent(new Event('change'));
      this._calendar.update(this._getCalendarConfig());
      if (this._timePickerStart) {
        this._timePickerStart.update(this._getTimePickerConfig(true));
      }
      if (this._timePickerEnd) {
        this._timePickerEnd.update(this._getTimePickerConfig(false));
      }
    }
    update(config) {
      this._config = this._getConfig(config);
      this._calendarDate = this._config.calendarDate;
      this._startDate = this._config.date || this._config.startDate;
      this._endDate = this._config.endDate;
      this._selectEndDate = this._config.selectEndDate;
      this._createDateRangePicker();
      this._createDateRangePickerCalendars();
      this._addEventListeners();
      this._addCalendarEventListeners();
    }

    // Private
    _addEventListeners() {
      EventHandler.on(this._togglerElement, EVENT_CLICK$3, () => {
        if (!this._config.disabled) {
          this.show();
          this._initialStartDate = new Date(this._startDate);
          this._initialEndDate = new Date(this._endDate);
        }
      });
      EventHandler.on(this._startInput, EVENT_CLICK$3, () => {
        this._selectEndDate = false;
        this._calendar.update(this._getCalendarConfig());
      });
      EventHandler.on(this._startInput, EVENT_INPUT, event => {
        const date = this._config.inputDateParse ? this._config.inputDateParse(event.target.value) : getLocalDateFromString(event.target.value, this._config.locale, this._config.timepicker);
        if (date instanceof Date && date.getTime()) {
          this._startDate = date;
          this._calendarDate = date;
          this._calendar.update(this._getCalendarConfig());
        }
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
      EventHandler.on(this._endInput, EVENT_CLICK$3, () => {
        this._selectEndDate = true;
        this._calendar.update(this._getCalendarConfig());
      });
      EventHandler.on(this._endInput, EVENT_INPUT, event => {
        const date = this._config.inputDateParse ? this._config.inputDateParse(event.target.value) : getLocalDateFromString(event.target.value, this._config.locale, this._config.timepicker);
        if (date instanceof Date && date.getTime()) {
          this._endDate = date;
          this._calendarDate = date;
          this._calendar.update(this._getCalendarConfig());
        }
      });
      EventHandler.on(window, EVENT_RESIZE$3, () => {
        this._mobile = window.innerWidth < 768;
      });
    }
    _addCalendarEventListeners() {
      for (const calendar of SelectorEngine.find(SELECTOR_CALENDAR$1, this._element)) {
        EventHandler.on(calendar, 'startDateChange.coreui.calendar', event => {
          this._startDate = event.date;
          this._startInput.value = this._setInputValue(event.date);
          this._startInput.dispatchEvent(new Event('change'));
          if (this._timePickerStart) {
            this._timePickerStart.update(this._getTimePickerConfig(true));
          }
          if (!this._config.range && !this._config.footer && !this._config.timepicker) {
            this.hide();
          }
          EventHandler.trigger(this._element, EVENT_START_DATE_CHANGE, {
            date: event.date
          });
        });
        EventHandler.on(calendar, 'endDateChange.coreui.calendar', event => {
          this._endDate = event.date;
          this._endInput.value = this._setInputValue(event.date);
          this._startInput.dispatchEvent(new Event('change'));
          if (this._timePickerEnd) {
            this._timePickerEnd.update(this._getTimePickerConfig(false));
          }
          if (this._startDate && !this._config.footer && !this._config.timepicker) {
            this.hide();
          }
          EventHandler.trigger(this._element, EVENT_END_DATE_CHANGE, {
            date: event.date
          });
        });
        EventHandler.on(calendar, 'cellHover.coreui.calendar', event => {
          if (this._selectEndDate) {
            this._endInput.value = event.date ? this._setInputValue(event.date) : this._setInputValue(this._endDate);
            return;
          }
          this._startInput.value = event.date ? this._setInputValue(event.date) : this._setInputValue(this._startDate);
        });
        EventHandler.on(calendar, 'selectEndChange.coreui.calendar', event => {
          this._selectEndDate = event.value;
        });
      }
    }
    _getCalendarConfig() {
      return {
        calendarDate: this._calendarDate,
        calendars: this._config.calendars,
        disabledDates: this._config.disabledDates,
        endDate: this._endDate,
        firstDayOfWeek: this._config.firstDayOfWeek,
        locale: this._config.locale,
        maxDate: this._config.maxDate,
        minDate: this._config.minDate,
        range: this._config.range,
        selectAdjacementDays: this._config.selectAdjacementDays,
        selectEndDate: this._selectEndDate,
        selectionType: this._config.selectionType,
        showAdjacementDays: this._config.showAdjacementDays,
        showWeekNumber: this._config.showWeekNumber,
        startDate: this._startDate,
        weekNumbersLabel: this._config.weekNumbersLabel
      };
    }
    _getTimePickerConfig(start) {
      return {
        container: 'inline',
        disabled: start ? !this._startDate : !this._endDate,
        locale: this._config.locale,
        time: start ? this._startDate && new Date(this._startDate) : this._endDate && new Date(this._endDate),
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
        this._element.classList.add(CLASS_NAME_DISABLED$1);
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
      this._element.append(dropdownEl);
      this._menu = dropdownEl;
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
      inputGroupEl.append(startInputEl);
      if (this._config.separator) {
        inputGroupEl.append(inputGroupTextSeparatorEl);
      }
      if (this._config.range) {
        inputGroupEl.append(endInputEl);
      }
      if (this._config.indicator) {
        const inputGroupIndicatorEl = document.createElement('div');
        inputGroupIndicatorEl.classList.add(CLASS_NAME_INDICATOR);
        inputGroupEl.append(inputGroupIndicatorEl);
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
          buttonEl.role = 'button';
          buttonEl.addEventListener('click', () => {
            this._startDate = this._config.ranges[key][0];
            this._endDate = this._config.ranges[key][1];
            this._startInput.value = this._setInputValue(this._startDate);
            this._startInput.dispatchEvent(new Event('change'));
            this._endInput.value = this._setInputValue(this._endDate);
            this._endInput.dispatchEvent(new Event('change'));
            this._calendar.update(this._getCalendarConfig());
            EventHandler.trigger(this._element, EVENT_START_DATE_CHANGE, {
              date: this._startDate,
              formatedDate: this._formatDate(this._startDate)
            });
            EventHandler.trigger(this._element, EVENT_END_DATE_CHANGE, {
              date: this._endDate,
              formatedDate: this._formatDate(this._endDate)
            });
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
      EventHandler.one(calendarEl, 'calendarDateChange.coreui.calendar', event => {
        this._calendarDate = event.date;
      });
      EventHandler.on(calendarEl, 'calendarMouseleave.coreui.calendar', () => {
        if (this._startDate) {
          this._startInput.value = this._setInputValue(this._startDate);
        }
        if (this._endDate) {
          this._endInput.value = this._setInputValue(this._endDate);
        }
      });
      if (this._config.timepicker) {
        if (this._mobile || this._range && this._config.calendars === 1) {
          const timePickerStartEl = document.createElement('div');
          timePickerStartEl.classList.add(CLASS_NAME_TIME_PICKER);
          this._timePickerStart = new TimePicker(timePickerStartEl, this._getTimePickerConfig(true));
          calendarEl.append(timePickerStartEl);
          EventHandler.one(timePickerStartEl, 'timeChange.coreui.time-picker', event => {
            this._startDate = event.date;
            this._startInput.value = this._setInputValue(this._startDate);
            this._calendar.update(this._getCalendarConfig());
          });
          const timePickerEndEl = document.createElement('div');
          timePickerEndEl.classList.add(CLASS_NAME_TIME_PICKER);
          this._timePickerEnd = new TimePicker(timePickerEndEl, this._getTimePickerConfig(false));
          this._timepickers.append(timePickerEndEl);
          EventHandler.one(timePickerEndEl, 'timeChange.coreui.time-picker', event => {
            this._endDate = event.date;
            this._endInput.value = this._setInputValue(this._endDate);
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
            EventHandler.one(timePickerEl, 'timeChange.coreui.time-picker', event => {
              if (index === 0) {
                this._startDate = event.date;
                this._startInput.value = this._setInputValue(this._startDate);
              } else {
                this._endDate = event.date;
                this._endInput.value = this._setInputValue(this._endDate);
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
          this._startDate = date;
          this._startInput.value = this._setInputValue(date);
          this._startInput.dispatchEvent(new Event('change'));
          if (this._config.range) {
            this._endDate = date;
            this._endInput.value = this._setInputValue(date);
            this._endInput.dispatchEvent(new Event('change'));
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
    _formatDate(date) {
      if (this._config.selectionType !== 'day') {
        return date;
      }
      const _date = new Date(date);
      return this._config.inputDateFormat ? this._config.inputDateFormat(_date) : this._config.timepicker ? _date.toLocaleString(this._config.locale) : _date.toLocaleDateString(this._config.locale);
    }
    _getButtonClasses(classes) {
      if (typeof classes === 'string') {
        return classes.split(' ');
      }
      return classes;
    }
    _getConfig(config) {
      config = {
        ...this.constructor.Default,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      return config;
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
      return this._element.classList.contains(CLASS_NAME_SHOW$b);
    }
    _setInputValue(date) {
      if (date) {
        return this._formatDate(date);
      }
      return '';
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
        const data = DateRangePicker.getOrCreateInstance(this);
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
      if (event.button === RIGHT_MOUSE_BUTTON$3 || event.type === 'keyup' && event.key !== TAB_KEY$4) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN$2);
      for (const toggle of openToggles) {
        const context = DateRangePicker.getInstance(toggle);
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

  EventHandler.on(window, EVENT_LOAD_DATA_API$7, () => {
    const dateRangePickers = SelectorEngine.find(SELECTOR_DATA_TOGGLE$7);
    for (let i = 0, len = dateRangePickers.length; i < len; i++) {
      DateRangePicker.dateRangePickerInterface(dateRangePickers[i]);
    }
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$9, DateRangePicker.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API$3, DateRangePicker.clearMenus);

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

  const NAME$f = 'date-picker';
  const DATA_KEY$b = 'coreui.date-picker';
  const EVENT_KEY$b = `.${DATA_KEY$b}`;
  const DATA_API_KEY$8 = '.data-api';
  const TAB_KEY$3 = 'Tab';
  const RIGHT_MOUSE_BUTTON$2 = 2;
  const EVENT_DATE_CHANGE = `dateChange${EVENT_KEY$b}`;
  const EVENT_CLICK_DATA_API$8 = `click${EVENT_KEY$b}${DATA_API_KEY$8}`;
  const EVENT_KEYUP_DATA_API$2 = `keyup${EVENT_KEY$b}${DATA_API_KEY$8}`;
  const EVENT_LOAD_DATA_API$6 = `load${EVENT_KEY$b}${DATA_API_KEY$8}`;
  const CLASS_NAME_SHOW$a = 'show';
  const SELECTOR_CALENDAR = '.calendar';
  const SELECTOR_DATA_TOGGLE$6 = '[data-coreui-toggle="date-picker"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN$1 = `${SELECTOR_DATA_TOGGLE$6}.${CLASS_NAME_SHOW$a}`;
  const Default$e = {
    ...DateRangePicker.Default,
    calendars: 1,
    placeholder: ['Select date'],
    range: false,
    separator: false
  };
  const DefaultType$e = {
    ...DateRangePicker.DefaultType,
    date: '(date|string|null)'
  };

  /**
   * Class definition
   */

  class DatePicker extends DateRangePicker {
    // Getters
    static get Default() {
      return Default$e;
    }
    static get DefaultType() {
      return DefaultType$e;
    }
    static get NAME() {
      return NAME$f;
    }

    // Overrides
    _addCalendarEventListeners() {
      super._addCalendarEventListeners();
      for (const calendar of SelectorEngine.find(SELECTOR_CALENDAR, this._element)) {
        EventHandler.on(calendar, 'startDateChange.coreui.calendar', event => {
          this._startDate = event.date;
          this._selectEndDate = event.selectEndDate;
          this._startInput.value = this._setInputValue(event.date);
          this._calendar.update(this._getCalendarConfig());
          EventHandler.trigger(this._element, EVENT_DATE_CHANGE, {
            date: event.date
          });
        });
      }
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
        const data = DatePicker.getOrCreateInstance(this);
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
      if (event.button === RIGHT_MOUSE_BUTTON$2 || event.type === 'keyup' && event.key !== TAB_KEY$3) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN$1);
      for (const toggle of openToggles) {
        const context = DatePicker.getInstance(toggle);
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

  EventHandler.on(window, EVENT_LOAD_DATA_API$6, () => {
    const datePickers = SelectorEngine.find(SELECTOR_DATA_TOGGLE$6);
    for (let i = 0, len = datePickers.length; i < len; i++) {
      DatePicker.datePickerInterface(datePickers[i]);
    }
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$8, DatePicker.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API$2, DatePicker.clearMenus);

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

  const NAME$e = 'dropdown';
  const DATA_KEY$a = 'coreui.dropdown';
  const EVENT_KEY$a = `.${DATA_KEY$a}`;
  const DATA_API_KEY$7 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const TAB_KEY$2 = 'Tab';
  const ARROW_UP_KEY$1 = 'ArrowUp';
  const ARROW_DOWN_KEY$1 = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON$1 = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_HIDE$7 = `hide${EVENT_KEY$a}`;
  const EVENT_HIDDEN$7 = `hidden${EVENT_KEY$a}`;
  const EVENT_SHOW$7 = `show${EVENT_KEY$a}`;
  const EVENT_SHOWN$7 = `shown${EVENT_KEY$a}`;
  const EVENT_CLICK_DATA_API$7 = `click${EVENT_KEY$a}${DATA_API_KEY$7}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$a}${DATA_API_KEY$7}`;
  const EVENT_KEYUP_DATA_API$1 = `keyup${EVENT_KEY$a}${DATA_API_KEY$7}`;
  const CLASS_NAME_SHOW$9 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE$5 = '[data-coreui-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$5}.${CLASS_NAME_SHOW$9}`;
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR = '.navbar';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  const PLACEMENT_TOPCENTER = 'top';
  const PLACEMENT_BOTTOMCENTER = 'bottom';
  const Default$d = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  const DefaultType$d = {
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
      return Default$d;
    }
    static get DefaultType() {
      return DefaultType$d;
    }
    static get NAME() {
      return NAME$e;
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
      this._menu.classList.add(CLASS_NAME_SHOW$9);
      this._element.classList.add(CLASS_NAME_SHOW$9);
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
      this._menu.classList.remove(CLASS_NAME_SHOW$9);
      this._element.classList.remove(CLASS_NAME_SHOW$9);
      this._element.setAttribute('aria-expanded', 'false');
      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$7, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$e.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
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
      return this._menu.classList.contains(CLASS_NAME_SHOW$9);
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
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));
      if (!items.length) {
        return;
      }

      // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
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
      if (event.button === RIGHT_MOUSE_BUTTON$1 || event.type === 'keyup' && event.key !== TAB_KEY$2) {
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
        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$2 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
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
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();

      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$5) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$5)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$5)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$5, event.delegateTarget.parentNode);
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

  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$5, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$7, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API$1, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DATA_TOGGLE$5, function (event) {
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

  const NAME$d = 'loading-button';
  const DATA_KEY$9 = 'coreui.loading-button';
  const EVENT_KEY$9 = `.${DATA_KEY$9}`;
  const DATA_API_KEY$6 = '.data-api';
  const EVENT_START = `start${EVENT_KEY$9}`;
  const EVENT_STOP = `stop${EVENT_KEY$9}`;
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$9}${DATA_API_KEY$6}`;
  const CLASS_NAME_IS_LOADING = 'is-loading';
  const CLASS_NAME_LOADING_BUTTON_SPINNER = 'btn-loading-spinner';
  const SELECTOR_DATA_TOGGLE$4 = '[data-coreui-toggle="loading-button"]';
  const Default$c = {
    disabledOnLoading: false,
    spinner: true,
    spinnerType: 'border',
    timeout: false
  };
  const DefaultType$c = {
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
        Data.set(element, DATA_KEY$9, this);
      }
    }

    // Getters

    static get Default() {
      return Default$c;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$d;
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
    dispose() {
      Data.removeData(this._element, DATA_KEY$9);
      this._element = null;
    }
    _getConfig(config) {
      config = {
        ...Default$c,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      return config;
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

  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$4);
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

  const NAME$c = 'backdrop';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$8 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.coreui.${NAME$c}`;
  const Default$b = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements
  };
  const DefaultType$b = {
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
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$c;
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
      element.classList.add(CLASS_NAME_SHOW$8);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$8);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
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
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
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

  const NAME$b = 'focustrap';
  const DATA_KEY$8 = 'coreui.focustrap';
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$8}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$8}`;
  const TAB_KEY$1 = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default$a = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
  };
  const DefaultType$a = {
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
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$b;
    }

    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$8); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$8);
    }

    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
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
      if (event.key !== TAB_KEY$1) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
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

  const NAME$a = 'modal';
  const DATA_KEY$7 = 'coreui.modal';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$5 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$7}`;
  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  const EVENT_RESIZE$2 = `resize${EVENT_KEY$7}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$7}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$7}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$7}${DATA_API_KEY$5}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR$1 = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$3 = '[data-coreui-toggle="modal"]';
  const Default$9 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType$9 = {
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
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
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
      this._element.classList.remove(CLASS_NAME_SHOW$7);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$7);
      EventHandler.off(this._dialog, EVENT_KEY$7);
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
      this._element.classList.add(CLASS_NAME_SHOW$7);
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
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$2, () => {
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

  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
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

  /**
   * --------------------------------------------------------------------------
   * CoreUI PRO multi-select.js
   * License (https://coreui.io/pro/license/)
   * --------------------------------------------------------------------------
   */


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$9 = 'multi-select';
  const DATA_KEY$6 = 'coreui.multi-select';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$4 = '.data-api';
  const TAB_KEY = 'Tab';
  const RIGHT_MOUSE_BUTTON = 2;
  const SELECTOR_CLEANER = '.form-multi-select-cleaner';
  const SELECTOR_OPTGROUP = '.form-multi-select-optgroup';
  const SELECTOR_OPTION = '.form-multi-select-option';
  const SELECTOR_OPTIONS = '.form-multi-select-options';
  const SELECTOR_OPTIONS_EMPTY = '.form-multi-select-options-empty';
  const SELECTOR_SEARCH = '.form-multi-select-search';
  const SELECTOR_SELECT = '.form-multi-select';
  const SELECTOR_SELECTION = '.form-multi-select-selection';
  const EVENT_CHANGED = `changed${EVENT_KEY$6}`;
  const EVENT_CLICK$2 = `click${EVENT_KEY$6}`;
  const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$6}`;
  const EVENT_KEYUP = `keyup${EVENT_KEY$6}`;
  const EVENT_SEARCH = `search${EVENT_KEY$6}`;
  const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$6}${DATA_API_KEY$4}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$4}`;
  const EVENT_LOAD_DATA_API$5 = `load${EVENT_KEY$6}${DATA_API_KEY$4}`;
  const CLASS_NAME_CLEANER = 'form-multi-select-cleaner';
  const CLASS_NAME_DISABLED = 'disabled';
  const CLASS_NAME_INPUT_GROUP = 'form-multi-select-input-group';
  const CLASS_NAME_LABEL = 'label';
  const CLASS_NAME_SELECT = 'form-multi-select';
  const CLASS_NAME_SELECT_DROPDOWN = 'form-multi-select-dropdown';
  const CLASS_NAME_SELECT_ALL = 'form-multi-select-all';
  const CLASS_NAME_OPTGROUP = 'form-multi-select-optgroup';
  const CLASS_NAME_OPTGROUP_LABEL = 'form-multi-select-optgroup-label';
  const CLASS_NAME_OPTION = 'form-multi-select-option';
  const CLASS_NAME_OPTION_WITH_CHECKBOX = 'form-multi-select-option-with-checkbox';
  const CLASS_NAME_OPTIONS = 'form-multi-select-options';
  const CLASS_NAME_OPTIONS_EMPTY = 'form-multi-select-options-empty';
  const CLASS_NAME_SEARCH = 'form-multi-select-search';
  const CLASS_NAME_SELECTED = 'form-multi-selected';
  const CLASS_NAME_SELECTION = 'form-multi-select-selection';
  const CLASS_NAME_SELECTION_TAGS = 'form-multi-select-selection-tags';
  const CLASS_NAME_SHOW$6 = 'show';
  const CLASS_NAME_TAG = 'form-multi-select-tag';
  const CLASS_NAME_TAG_DELETE = 'form-multi-select-tag-delete';
  const Default$8 = {
    cleaner: true,
    disabled: false,
    invalid: false,
    multiple: true,
    name: null,
    options: false,
    optionsMaxHeight: 'auto',
    optionsStyle: 'checkbox',
    placeholder: 'Select...',
    required: false,
    search: false,
    searchNoResultsLabel: 'No results found',
    selectAll: true,
    selectAllLabel: 'Select all options',
    selectionType: 'tags',
    selectionTypeCounterText: 'item(s) selected',
    valid: false
  };
  const DefaultType$8 = {
    cleaner: 'boolean',
    disabled: 'boolean',
    invalid: 'boolean',
    multiple: 'boolean',
    name: 'string',
    options: '(boolean|array)',
    optionsMaxHeight: '(number|string)',
    optionsStyle: 'string',
    placeholder: 'string',
    required: 'boolean',
    search: 'boolean',
    searchNoResultsLabel: 'string',
    selectAll: 'boolean',
    selectAllLabel: 'string',
    selectionType: 'string',
    selectionTypeCounterText: 'string',
    valid: 'boolean'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class MultiSelect extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._indicatorElement = null;
      this._selectAllElement = null;
      this._selectionElement = null;
      this._selectionCleanerElement = null;
      this._searchElement = null;
      this._togglerElement = null;
      this._optionsElement = null;
      this._clone = null;
      this._menu = null;
      this._options = this._getOptions();
      this._popper = null;
      this._search = '';
      this._selected = this._getSelectedOptions(this._options);
      if (this._config.options.length > 0) {
        this._createNativeSelect(this._config.options);
      }
      this._createSelect();
      this._addEventListeners();
      Data.set(this._element, DATA_KEY$6, this);
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
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._config.disabled || this._isShown()) {
        return;
      }
      EventHandler.trigger(this._element, EVENT_SHOW$5);
      this._clone.classList.add(CLASS_NAME_SHOW$6);
      this._clone.setAttribute('aria-expanded', true);
      EventHandler.trigger(this._element, EVENT_SHOWN$5);
      this._createPopper();
      if (this._config.search) {
        SelectorEngine.findOne(SELECTOR_SEARCH, this._clone).focus();
      }
    }
    hide() {
      EventHandler.trigger(this._element, EVENT_HIDE$5);
      if (this._popper) {
        this._popper.destroy();
      }
      this._clone.classList.remove(CLASS_NAME_SHOW$6);
      this._clone.setAttribute('aria-expanded', 'false');
      EventHandler.trigger(this._element, EVENT_HIDDEN$5);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    search(text) {
      this._search = text.length > 0 ? text.toLowerCase() : text;
      this._filterOptionsList();
      EventHandler.trigger(this._element, EVENT_SEARCH);
    }
    update(config) {
      this._config = this._getConfig(config);
      this._options = this._getOptions();
      this._selected = this._getSelectedOptions(this._options);
      this._clone.remove();
      this._element.innerHTML = '';
      this._createNativeOptions(this._element, this._options);
      this._createSelect();
      this._addEventListeners();
    }
    selectAll(options = this._options) {
      for (const option of options) {
        if (option.disabled) {
          continue;
        }
        if (option.label) {
          this.selectAll(option.options);
          continue;
        }
        this._selectOption(option.value, option.text);
      }
    }
    deselectAll(options = this._options) {
      for (const option of options) {
        if (option.disabled) {
          continue;
        }
        if (option.label) {
          this.deselectAll(option.options);
          continue;
        }
        this._deselectOption(option.value);
      }
    }
    getValue() {
      return this._selected;
    }

    // Private

    _addEventListeners() {
      EventHandler.on(this._clone, EVENT_CLICK$2, () => {
        if (!this._config.disabled) {
          this.show();
        }
      });
      EventHandler.on(this._indicatorElement, EVENT_CLICK$2, event => {
        event.preventDefault();
        event.stopPropagation();
        this.toggle();
      });
      EventHandler.on(this._searchElement, EVENT_KEYUP, () => {
        this._onSearchChange(this._searchElement);
      });
      EventHandler.on(this._searchElement, EVENT_KEYDOWN$1, event => {
        const key = event.keyCode || event.charCode;
        if ((key === 8 || key === 46) && event.target.value.length === 0) {
          this._deselectLastOption();
        }
        this._searchElement.focus();
      });
      EventHandler.on(this._selectAllElement, EVENT_CLICK$2, event => {
        event.preventDefault();
        event.stopPropagation();
        this.selectAll();
      });
      EventHandler.on(this._optionsElement, EVENT_CLICK$2, event => {
        event.preventDefault();
        event.stopPropagation();
        this._onOptionsClick(event.target);
      });
      EventHandler.on(this._selectionCleanerElement, EVENT_CLICK$2, event => {
        if (!this._config.disabled) {
          event.preventDefault();
          event.stopPropagation();
          this.deselectAll();
        }
      });
      EventHandler.on(this._optionsElement, EVENT_KEYDOWN$1, event => {
        const key = event.keyCode || event.charCode;
        if (key === 13) {
          this._onOptionsClick(event.target);
          if (this._config.search) {
            SelectorEngine.findOne(SELECTOR_SEARCH, this._clone).focus();
          }
        }
      });
    }
    _getConfig(config) {
      config = {
        ...Default$8,
        ...(this._element.disabled && {
          disabled: true
        }),
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      return config;
    }
    _getClassNames() {
      return this._element.classList.value.split(' ');
    }
    _getOptions(node = this._element) {
      if (this._config.options) {
        return this._config.options;
      }
      const nodes = Array.from(node.childNodes).filter(element => element.nodeName === 'OPTION' || element.nodeName === 'OPTGROUP');
      const options = [];
      for (const node of nodes) {
        if (node.nodeName === 'OPTION' && node.value) {
          options.push({
            value: node.value,
            text: node.innerHTML,
            selected: node.selected,
            disabled: node.disabled
          });
        }
        if (node.nodeName === 'OPTGROUP') {
          options.push({
            label: node.label,
            options: this._getOptions(node)
          });
        }
      }
      return options;
    }
    _getSelectedOptions(options) {
      const selected = [];
      for (const option of options) {
        if (typeof option.value === 'undefined') {
          this._getSelectedOptions(option.options);
          continue;
        }
        if (option.selected) {
          // Add only the last option if single select
          if (!this._config.multiple) {
            selected.length = 0;
          }
          selected.push({
            value: String(option.value),
            text: option.text
          });
        }
      }
      return selected;
    }
    _createNativeSelect(data) {
      this._element.classList.add(CLASS_NAME_SELECT);
      if (this._config.multiple) {
        this._element.setAttribute('multiple', true);
      }
      if (this._config.required) {
        this._element.setAttribute('required', true);
      }
      this._createNativeOptions(this._element, data);
    }
    _createNativeOptions(parentElement, options) {
      for (const option of options) {
        if (typeof option.options === 'undefined') {
          const opt = document.createElement('OPTION');
          opt.value = option.value;
          if (option.disabled === true) {
            opt.setAttribute('disabled', 'disabled');
          }
          if (option.selected === true) {
            opt.setAttribute('selected', 'selected');
          }
          opt.innerHTML = option.text;
          parentElement.append(opt);
        } else {
          const optgroup = document.createElement('optgroup');
          optgroup.label = option.label;
          this._createNativeOptions(optgroup, option.options);
          parentElement.append(optgroup);
        }
      }
    }
    _hideNativeSelect() {
      this._element.tabIndex = '-1';
      this._element.style.display = 'none';
    }
    _createSelect() {
      const multiSelectEl = document.createElement('div');
      multiSelectEl.classList.add(CLASS_NAME_SELECT);
      multiSelectEl.classList.toggle('is-invalid', this._config.invalid);
      multiSelectEl.classList.toggle('is-valid', this._config.valid);
      multiSelectEl.setAttribute('aria-expanded', 'false');
      if (this._config.disabled) {
        this._element.classList.add(CLASS_NAME_DISABLED);
      }
      for (const className of this._getClassNames()) {
        multiSelectEl.classList.add(className);
      }
      this._clone = multiSelectEl;
      this._element.parentNode.insertBefore(multiSelectEl, this._element.nextSibling);
      this._createSelection();
      this._createButtons();
      if (this._config.search) {
        this._createSearchInput();
        this._updateSearch();
      }
      if (this._config.name || this._element.id || this._element.name) {
        this._element.setAttribute('name', this._config.name || this._element.name || `multi-select-${this._element.id}`);
      }
      this._createOptionsContainer();
      this._hideNativeSelect();
      this._updateOptionsList();
    }
    _createSelection() {
      const togglerEl = document.createElement('div');
      togglerEl.classList.add(CLASS_NAME_INPUT_GROUP);
      this._togglerElement = togglerEl;
      const selectionEl = document.createElement('div');
      selectionEl.classList.add(CLASS_NAME_SELECTION);
      if (this._config.multiple && this._config.selectionType === 'tags') {
        selectionEl.classList.add(CLASS_NAME_SELECTION_TAGS);
      }
      togglerEl.append(selectionEl);
      this._clone.append(togglerEl);
      this._updateSelection();
      this._selectionElement = selectionEl;
    }
    _createButtons() {
      const buttons = document.createElement('div');
      buttons.classList.add('form-multi-select-buttons');
      if (this._config.cleaner && this._config.multiple) {
        const cleaner = document.createElement('button');
        cleaner.type = 'button';
        cleaner.classList.add(CLASS_NAME_CLEANER);
        cleaner.style.display = 'none';
        buttons.append(cleaner);
        this._selectionCleanerElement = cleaner;
      }
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.classList.add('form-multi-select-indicator');
      buttons.append(indicator);
      this._indicatorElement = indicator;
      this._togglerElement.append(buttons);
      this._updateSelectionCleaner();
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
      this._searchElement = input;
      this._updateSearchSize();
      this._selectionElement.append(input);
    }
    _createOptionsContainer() {
      const dropdownDiv = document.createElement('div');
      dropdownDiv.classList.add(CLASS_NAME_SELECT_DROPDOWN);
      if (this._config.selectAll && this._config.multiple) {
        const selectAll = document.createElement('button');
        selectAll.classList.add(CLASS_NAME_SELECT_ALL);
        selectAll.innerHTML = this._config.selectAllLabel;
        this._selectAllElement = selectAll;
        dropdownDiv.append(selectAll);
      }
      const optionsDiv = document.createElement('div');
      optionsDiv.classList.add(CLASS_NAME_OPTIONS);
      if (this._config.optionsMaxHeight !== 'auto') {
        optionsDiv.style.maxHeight = `${this._config.optionsMaxHeight}px`;
        optionsDiv.style.overflow = 'auto';
      }
      dropdownDiv.append(optionsDiv);
      this._clone.append(dropdownDiv);
      this._createOptions(optionsDiv, this._options);
      this._optionsElement = optionsDiv;
      this._menu = dropdownDiv;
    }
    _createOptions(parentElement, options) {
      for (const option of options) {
        if (typeof option.value !== 'undefined') {
          const optionDiv = document.createElement('div');
          optionDiv.classList.add(CLASS_NAME_OPTION);
          if (option.disabled) {
            optionDiv.classList.add(CLASS_NAME_DISABLED);
          }
          if (this._config.optionsStyle === 'checkbox') {
            optionDiv.classList.add(CLASS_NAME_OPTION_WITH_CHECKBOX);
          }
          optionDiv.dataset.value = String(option.value);
          optionDiv.tabIndex = 0;
          optionDiv.innerHTML = option.text;
          parentElement.append(optionDiv);
        }
        if (typeof option.label !== 'undefined') {
          const optgroup = document.createElement('div');
          optgroup.classList.add(CLASS_NAME_OPTGROUP);
          const optgrouplabel = document.createElement('div');
          optgrouplabel.innerHTML = option.label;
          optgrouplabel.classList.add(CLASS_NAME_OPTGROUP_LABEL);
          optgroup.append(optgrouplabel);
          this._createOptions(optgroup, option.options);
          parentElement.append(optgroup);
        }
      }
    }
    _createTag(value, text) {
      const tag = document.createElement('div');
      tag.classList.add(CLASS_NAME_TAG);
      tag.dataset.value = value;
      tag.innerHTML = text;
      const closeBtn = document.createElement('button');
      closeBtn.classList.add(CLASS_NAME_TAG_DELETE);
      closeBtn.setAttribute('aria-label', 'Close');
      tag.append(closeBtn);
      EventHandler.on(closeBtn, EVENT_CLICK$2, event => {
        if (!this._config.disabled) {
          event.preventDefault();
          event.stopPropagation();
          tag.remove();
          this._deselectOption(value);
        }
      });
      return tag;
    }
    _onOptionsClick(element) {
      if (!element.classList.contains(CLASS_NAME_OPTION) || element.classList.contains(CLASS_NAME_LABEL)) {
        return;
      }
      const value = String(element.dataset.value);
      const text = element.textContent;
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
    }
    _selectOption(value, text) {
      if (!this._config.multiple) {
        this.deselectAll();
      }
      if (this._selected.filter(option => option.value === String(value)).length === 0) {
        this._selected.push({
          value: String(value),
          text
        });
      }
      const nativeOption = SelectorEngine.findOne(`option[value="${value}"]`, this._element);
      if (nativeOption) {
        nativeOption.selected = true;
      }
      const option = SelectorEngine.findOne(`[data-value="${value}"]`, this._optionsElement);
      if (option) {
        option.classList.add(CLASS_NAME_SELECTED);
      }
      EventHandler.trigger(this._element, EVENT_CHANGED, {
        value: this._selected
      });
      this._updateSelection();
      this._updateSelectionCleaner();
      this._updateSearch();
      this._updateSearchSize();
    }
    _deselectOption(value) {
      const selected = this._selected.filter(option => option.value !== String(value));
      this._selected = selected;
      SelectorEngine.findOne(`option[value="${value}"]`, this._element).selected = false;
      const option = SelectorEngine.findOne(`[data-value="${value}"]`, this._optionsElement);
      if (option) {
        option.classList.remove(CLASS_NAME_SELECTED);
      }
      EventHandler.trigger(this._element, EVENT_CHANGED, {
        value: this._selected
      });
      this._updateSelection();
      this._updateSelectionCleaner();
      this._updateSearch();
      this._updateSearchSize();
    }
    _deselectLastOption() {
      if (this._selected.length > 0) {
        const last = this._selected.pop();
        this._deselectOption(last.value);
      }
    }
    _updateSelection() {
      const selection = SelectorEngine.findOne(SELECTOR_SELECTION, this._clone);
      const search = SelectorEngine.findOne(SELECTOR_SEARCH, this._clone);
      if (this._selected.length === 0 && !this._config.search) {
        selection.innerHTML = `<span class="form-multi-select-placeholder">${this._config.placeholder}</span>`;
        return;
      }
      if (this._config.multiple && this._config.selectionType === 'counter' && !this._config.search) {
        selection.innerHTML = `${this._selected.length} ${this._config.selectionTypeCounterText}`;
      }
      if (this._config.multiple && this._config.selectionType === 'tags') {
        selection.innerHTML = '';
        for (const option of this._selected) {
          selection.append(this._createTag(option.value, option.text));
        }
      }
      if (this._config.multiple && this._config.selectionType === 'text') {
        selection.innerHTML = this._selected.map((option, index) => `<span>${option.text}${index === this._selected.length - 1 ? '' : ','}&nbsp;</span>`).join('');
      }
      if (!this._config.multiple && this._selected.length > 0 && !this._config.search) {
        selection.innerHTML = this._selected[0].text;
      }
      if (search) {
        selection.append(search);
      }
      if (this._popper) {
        this._popper.update();
      }
    }
    _updateSelectionCleaner() {
      if (!this._config.cleaner || this._selectionCleanerElement === null) {
        return;
      }
      const selectionCleaner = SelectorEngine.findOne(SELECTOR_CLEANER, this._clone);
      if (this._selected.length > 0) {
        selectionCleaner.style.removeProperty('display');
        return;
      }
      selectionCleaner.style.display = 'none';
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
        this._searchElement.placeholder = `${this._selected.length} item(s) selected`;
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
    _onSearchChange(element) {
      if (element) {
        this.search(element.value);
        this._updateSearchSize(element.value.length + 1);
      }
    }
    _updateOptionsList(options = this._options) {
      for (const option of options) {
        if (option.label) {
          this._updateOptionsList(option.options);
          continue;
        }
        if (option.selected) {
          this._selectOption(option.value, option.text);
        }
      }
    }
    _isVisible(element) {
      const style = window.getComputedStyle(element);
      return style.display !== 'none';
    }
    _isShown() {
      return this._clone.classList.contains(CLASS_NAME_SHOW$6);
    }
    _filterOptionsList() {
      const options = SelectorEngine.find(SELECTOR_OPTION, this._clone);
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
          if (SelectorEngine.children(optgroup, SELECTOR_OPTION).filter(element => this._isVisible(element)).length > 0) {
            optgroup.style.removeProperty('display');
          } else {
            optgroup.style.display = 'none';
          }
        }
      }
      if (visibleOptions > 0) {
        if (SelectorEngine.findOne(SELECTOR_OPTIONS_EMPTY, this._clone)) {
          SelectorEngine.findOne(SELECTOR_OPTIONS_EMPTY, this._clone).remove();
        }
        return;
      }
      if (visibleOptions === 0) {
        const placeholder = document.createElement('div');
        placeholder.classList.add(CLASS_NAME_OPTIONS_EMPTY);
        placeholder.innerHTML = this._config.searchNoResultsLabel;
        if (!SelectorEngine.findOne(SELECTOR_OPTIONS_EMPTY, this._clone)) {
          SelectorEngine.findOne(SELECTOR_OPTIONS, this._clone).append(placeholder);
        }
      }
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
        const context = Data.get(selects[i], DATA_KEY$6);
        ({
          relatedTarget: selects[i]
        });
        if (event && event.type === 'click') ;
        if (!context) {
          continue;
        }
        if (!context._clone.classList.contains(CLASS_NAME_SHOW$6)) {
          continue;
        }
        if (context._clone.contains(event.target)) {
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

  EventHandler.on(window, EVENT_LOAD_DATA_API$5, () => {
    for (const ms of SelectorEngine.find(SELECTOR_SELECT)) {
      if (ms.tabIndex !== -1) {
        MultiSelect.multiSelectInterface(ms);
      }
    }
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, MultiSelect.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, MultiSelect.clearMenus);

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

  const NAME$8 = 'navigation';
  const DATA_KEY$5 = 'coreui.navigation';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const DATA_API_KEY$3 = '.data-api';
  const Default$7 = {
    activeLinksExact: true,
    groupsAutoCollapse: true
  };
  const DefaultType$7 = {
    activeLinksExact: 'boolean',
    groupsAutoCollapse: '(string|boolean)'
  };
  const CLASS_NAME_ACTIVE$2 = 'active';
  const CLASS_NAME_SHOW$5 = 'show';
  const CLASS_NAME_NAV_GROUP = 'nav-group';
  const CLASS_NAME_NAV_GROUP_TOGGLE = 'nav-group-toggle';
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$5}${DATA_API_KEY$3}`;
  const EVENT_LOAD_DATA_API$4 = `load${EVENT_KEY$5}${DATA_API_KEY$3}`;
  const SELECTOR_NAV_GROUP = '.nav-group';
  const SELECTOR_NAV_GROUP_ITEMS = '.nav-group-items';
  const SELECTOR_NAV_GROUP_TOGGLE = '.nav-group-toggle';
  const SELECTOR_NAV_LINK = '.nav-link';
  const SELECTOR_DATA_NAVIGATION = '[data-coreui="navigation"]';

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
      Data.set(element, DATA_KEY$5, this);
    }
    // Getters

    static get Default() {
      return Default$7;
    }
    static get DATA_KEY() {
      return DATA_KEY$5;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }

    // Private

    _getConfig(config) {
      config = {
        ...Default$7,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      return config;
    }
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
          element.classList.add(CLASS_NAME_ACTIVE$2);
          // eslint-disable-next-line unicorn/no-array-for-each
          Array.from(this._getParents(element, SELECTOR_NAV_GROUP)).forEach(element => {
            element.classList.add(CLASS_NAME_SHOW$5);
            element.setAttribute('aria-expanded', true);
          });
        }
        if (!this._config.activeLinksExact && element.href.startsWith(currentUrl)) {
          element.classList.add(CLASS_NAME_ACTIVE$2);
          // eslint-disable-next-line unicorn/no-array-for-each
          Array.from(this._getParents(element, SELECTOR_NAV_GROUP)).forEach(element => {
            element.classList.add(CLASS_NAME_SHOW$5);
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
      const filter = element => Boolean(element.classList.contains(CLASS_NAME_NAV_GROUP) && element.classList.contains(CLASS_NAME_SHOW$5));

      // Close other groups
      if (this._config.groupsAutoCollapse === true) {
        for (const element of this._getSiblings(toggler.parentNode, filter)) {
          this._slideUp(SelectorEngine.findOne(SELECTOR_NAV_GROUP_ITEMS, element), () => {
            element.classList.remove(CLASS_NAME_SHOW$5);
            element.setAttribute('aria-expanded', false);
          });
        }
      }
      if (toggler.parentNode.classList.contains(CLASS_NAME_SHOW$5)) {
        this._slideUp(SelectorEngine.findOne(SELECTOR_NAV_GROUP_ITEMS, toggler.parentNode), () => {
          toggler.parentNode.classList.remove(CLASS_NAME_SHOW$5);
          toggler.parentNode.setAttribute('aria-expanded', false);
        });
        return;
      }
      toggler.parentNode.classList.add(CLASS_NAME_SHOW$5);
      toggler.parentNode.setAttribute('aria-expanded', true);
      this._slideDown(SelectorEngine.findOne(SELECTOR_NAV_GROUP_ITEMS, toggler.parentNode));
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$3, SELECTOR_NAV_GROUP_TOGGLE, event => {
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
  EventHandler.on(window, EVENT_LOAD_DATA_API$4, () => {
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

  const NAME$7 = 'offcanvas';
  const DATA_KEY$4 = 'coreui.offcanvas';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const DATA_API_KEY$2 = '.data-api';
  const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$4}${DATA_API_KEY$2}`;
  const ESCAPE_KEY = 'Escape';
  const CLASS_NAME_SHOW$4 = 'show';
  const CLASS_NAME_SHOWING$1 = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP$1 = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$4}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$4}`;
  const SELECTOR_DATA_TOGGLE$2 = '[data-coreui-toggle="offcanvas"]';
  const Default$6 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType$6 = {
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
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
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
        this._element.classList.add(CLASS_NAME_SHOW$4);
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
        this._element.classList.remove(CLASS_NAME_SHOW$4, CLASS_NAME_HIDING);
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

  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
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
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE$1, () => {
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
  // eslint-disable-next-line unicorn/better-regex
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

  const NAME$6 = 'TemplateFactory';
  const Default$5 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  const DefaultType$5 = {
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
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
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
      return execute(arg, [this]);
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

  const NAME$5 = 'tooltip';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$3 = 'show';
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
  const EVENT_CLICK$1 = 'click';
  const EVENT_FOCUSIN$1 = 'focusin';
  const EVENT_FOCUSOUT$1 = 'focusout';
  const EVENT_MOUSEENTER = 'mouseenter';
  const EVENT_MOUSELEAVE = 'mouseleave';
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default$4 = {
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
  const DefaultType$4 = {
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
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
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
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
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
      this._activeTrigger.click = !this._activeTrigger.click;
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
      tip.classList.add(CLASS_NAME_SHOW$3);

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
      tip.classList.remove(CLASS_NAME_SHOW$3);

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
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$3);
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
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$3);
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
      return execute(arg, [this._element]);
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
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _setListeners() {
      const triggers = this._config.trigger.split(' ');
      for (const trigger of triggers) {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
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
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
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

  const NAME$4 = 'popover';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  const Default$3 = {
    ...Tooltip.Default,
    content: '',
    offset: [0, 8],
    placement: 'right',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
    trigger: 'click'
  };
  const DefaultType$3 = {
    ...Tooltip.DefaultType,
    content: '(null|string|element|function)'
  };

  /**
   * Class definition
   */

  class Popover extends Tooltip {
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

  const NAME$3 = 'scrollspy';
  const DATA_KEY$3 = 'coreui.scrollspy';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const DATA_API_KEY$1 = '.data-api';
  const EVENT_ACTIVATE = `activate${EVENT_KEY$3}`;
  const EVENT_CLICK = `click${EVENT_KEY$3}`;
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-coreui-spy="scroll"]';
  const SELECTOR_TARGET_LINKS = '[href]';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const Default$2 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  const DefaultType$2 = {
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
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
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
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      // Activate dropdown parents
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
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

  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
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
   * CoreUI sidebar.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$2 = 'sidebar';
  const DATA_KEY$2 = 'coreui.sidebar';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
  const DATA_API_KEY = '.data-api';
  const Default$1 = {};
  const DefaultType$1 = {};
  const CLASS_NAME_BACKDROP = 'sidebar-backdrop';
  const CLASS_NAME_HIDE$1 = 'hide';
  const CLASS_NAME_SHOW$2 = 'show';
  const CLASS_NAME_SIDEBAR_NARROW = 'sidebar-narrow';
  const CLASS_NAME_SIDEBAR_OVERLAID = 'sidebar-overlaid';
  const CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE = 'sidebar-narrow-unfoldable';
  const EVENT_HIDE$2 = `hide${EVENT_KEY$2}`;
  const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$2}`;
  const EVENT_RESIZE = 'resize';
  const EVENT_SHOW$2 = `show${EVENT_KEY$2}`;
  const EVENT_SHOWN$2 = `shown${EVENT_KEY$2}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$2}${DATA_API_KEY}`;
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  const SELECTOR_DATA_CLOSE = '[data-coreui-close="sidebar"]';
  const SELECTOR_DATA_TOGGLE$1 = '[data-coreui-toggle]';
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
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }

    // Public

    show() {
      EventHandler.trigger(this._element, EVENT_SHOW$2);
      if (this._element.classList.contains(CLASS_NAME_HIDE$1)) {
        this._element.classList.remove(CLASS_NAME_HIDE$1);
      }
      if (this._overlaid) {
        this._element.classList.add(CLASS_NAME_SHOW$2);
      }
      if (this._isMobile()) {
        this._element.classList.add(CLASS_NAME_SHOW$2);
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
      if (this._element.classList.contains(CLASS_NAME_SHOW$2)) {
        this._element.classList.remove(CLASS_NAME_SHOW$2);
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
        this._addClassName(CLASS_NAME_SIDEBAR_NARROW);
        this._narrow = true;
      }
    }
    unfoldable() {
      if (!this._isMobile()) {
        this._addClassName(CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE);
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

    _getConfig(config) {
      config = {
        ...Default$1,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      return config;
    }
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
    _addClassName(className) {
      this._element.classList.add(className);
    }
    _clickOutListener(event, sidebar) {
      if (event.target.closest(SELECTOR_SIDEBAR) === null) {
        event.preventDefault();
        event.stopPropagation();
        sidebar.hide();
      }
    }
    _addClickOutListener() {
      EventHandler.on(document, EVENT_CLICK_DATA_API$1, event => {
        this._clickOutListener(event, this);
      });
    }
    _removeClickOutListener() {
      EventHandler.off(document, EVENT_CLICK_DATA_API$1);
    }

    // Sidebar navigation
    _addEventListeners() {
      if (this._mobile && this._show) {
        this._addClickOutListener();
      }
      if (this._overlaid && this._show) {
        this._addClickOutListener();
      }
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, event => {
        event.preventDefault();
        const toggle = Manipulator.getDataAttribute(event.target, 'toggle');
        if (toggle === 'narrow') {
          this.toggleNarrow();
        }
        if (toggle === 'unfoldable') {
          this.toggleUnfoldable();
        }
      });
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_CLOSE, event => {
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

  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
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
    Button,
    Calendar,
    Carousel,
    Collapse,
    DatePicker,
    DateRangePicker,
    Dropdown,
    LoadingButton,
    Modal,
    MultiSelect,
    Navigation,
    OffCanvas: Offcanvas,
    Popover,
    ScrollSpy,
    Sidebar,
    Tab,
    TimePicker,
    Toast,
    Tooltip
  };

  return index_umd;

}));
//# sourceMappingURL=coreui.js.map
