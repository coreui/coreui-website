/*!
* CoreUI PRO data-grid v0.3.0-rc.0 (https://coreui.io)
* Copyright 2026 The CoreUI Team (https://github.com/orgs/coreui/people)
* License (https://coreui.io/pro/license/)
* Bundles @tanstack/table-core and @tanstack/virtual-core, MIT (https://github.com/TanStack/table/blob/main/LICENSE)
*/
(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.coreui = global.coreui || {}));
})(this, function(exports) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#region ../../node_modules/@tanstack/store/dist/alien.js
	let ReactiveFlags = /* @__PURE__ */ function(ReactiveFlags) {
		ReactiveFlags[ReactiveFlags["None"] = 0] = "None";
		ReactiveFlags[ReactiveFlags["Mutable"] = 1] = "Mutable";
		ReactiveFlags[ReactiveFlags["Watching"] = 2] = "Watching";
		ReactiveFlags[ReactiveFlags["RecursedCheck"] = 4] = "RecursedCheck";
		ReactiveFlags[ReactiveFlags["Recursed"] = 8] = "Recursed";
		ReactiveFlags[ReactiveFlags["Dirty"] = 16] = "Dirty";
		ReactiveFlags[ReactiveFlags["Pending"] = 32] = "Pending";
		return ReactiveFlags;
	}({});
	/* @__NO_SIDE_EFFECTS__ */
	function createReactiveSystem({ update, notify, unwatched }) {
		return {
			link,
			unlink,
			propagate,
			checkDirty,
			shallowPropagate
		};
		function link(dep, sub, version) {
			const prevDep = sub.depsTail;
			if (prevDep !== void 0 && prevDep.dep === dep) return;
			const nextDep = prevDep !== void 0 ? prevDep.nextDep : sub.deps;
			if (nextDep !== void 0 && nextDep.dep === dep) {
				nextDep.version = version;
				sub.depsTail = nextDep;
				return;
			}
			const prevSub = dep.subsTail;
			if (prevSub !== void 0 && prevSub.version === version && prevSub.sub === sub) return;
			const newLink = sub.depsTail = dep.subsTail = {
				version,
				dep,
				sub,
				prevDep,
				nextDep,
				prevSub,
				nextSub: void 0
			};
			if (nextDep !== void 0) nextDep.prevDep = newLink;
			if (prevDep !== void 0) prevDep.nextDep = newLink;
			else sub.deps = newLink;
			if (prevSub !== void 0) prevSub.nextSub = newLink;
			else dep.subs = newLink;
		}
		function unlink(link, sub = link.sub) {
			const dep = link.dep;
			const prevDep = link.prevDep;
			const nextDep = link.nextDep;
			const nextSub = link.nextSub;
			const prevSub = link.prevSub;
			if (nextDep !== void 0) nextDep.prevDep = prevDep;
			else sub.depsTail = prevDep;
			if (prevDep !== void 0) prevDep.nextDep = nextDep;
			else sub.deps = nextDep;
			if (nextSub !== void 0) nextSub.prevSub = prevSub;
			else dep.subsTail = prevSub;
			if (prevSub !== void 0) prevSub.nextSub = nextSub;
			else if ((dep.subs = nextSub) === void 0) unwatched(dep);
			return nextDep;
		}
		function propagate(link) {
			let next = link.nextSub;
			let stack;
			top: do {
				const sub = link.sub;
				let flags = sub.flags;
				if (!(flags & (ReactiveFlags.RecursedCheck | ReactiveFlags.Recursed | ReactiveFlags.Dirty | ReactiveFlags.Pending))) sub.flags = flags | ReactiveFlags.Pending;
				else if (!(flags & (ReactiveFlags.RecursedCheck | ReactiveFlags.Recursed))) flags = ReactiveFlags.None;
				else if (!(flags & ReactiveFlags.RecursedCheck)) sub.flags = flags & ~ReactiveFlags.Recursed | ReactiveFlags.Pending;
				else if (!(flags & (ReactiveFlags.Dirty | ReactiveFlags.Pending)) && isValidLink(link, sub)) {
					sub.flags = flags | (ReactiveFlags.Recursed | ReactiveFlags.Pending);
					flags &= ReactiveFlags.Mutable;
				} else flags = ReactiveFlags.None;
				if (flags & ReactiveFlags.Watching) notify(sub);
				if (flags & ReactiveFlags.Mutable) {
					const subSubs = sub.subs;
					if (subSubs !== void 0) {
						const nextSub = (link = subSubs).nextSub;
						if (nextSub !== void 0) {
							stack = {
								value: next,
								prev: stack
							};
							next = nextSub;
						}
						continue;
					}
				}
				if ((link = next) !== void 0) {
					next = link.nextSub;
					continue;
				}
				while (stack !== void 0) {
					link = stack.value;
					stack = stack.prev;
					if (link !== void 0) {
						next = link.nextSub;
						continue top;
					}
				}
				break;
			} while (true);
		}
		function checkDirty(link, sub) {
			let stack;
			let checkDepth = 0;
			let dirty = false;
			top: do {
				const dep = link.dep;
				const flags = dep.flags;
				if (sub.flags & ReactiveFlags.Dirty) dirty = true;
				else if ((flags & (ReactiveFlags.Mutable | ReactiveFlags.Dirty)) === (ReactiveFlags.Mutable | ReactiveFlags.Dirty)) {
					if (update(dep)) {
						const subs = dep.subs;
						if (subs.nextSub !== void 0) shallowPropagate(subs);
						dirty = true;
					}
				} else if ((flags & (ReactiveFlags.Mutable | ReactiveFlags.Pending)) === (ReactiveFlags.Mutable | ReactiveFlags.Pending)) {
					if (link.nextSub !== void 0 || link.prevSub !== void 0) stack = {
						value: link,
						prev: stack
					};
					link = dep.deps;
					sub = dep;
					++checkDepth;
					continue;
				}
				if (!dirty) {
					const nextDep = link.nextDep;
					if (nextDep !== void 0) {
						link = nextDep;
						continue;
					}
				}
				while (checkDepth--) {
					const firstSub = sub.subs;
					const hasMultipleSubs = firstSub.nextSub !== void 0;
					if (hasMultipleSubs) {
						link = stack.value;
						stack = stack.prev;
					} else link = firstSub;
					if (dirty) {
						if (update(sub)) {
							if (hasMultipleSubs) shallowPropagate(firstSub);
							sub = link.sub;
							continue;
						}
						dirty = false;
					} else sub.flags &= ~ReactiveFlags.Pending;
					sub = link.sub;
					const nextDep = link.nextDep;
					if (nextDep !== void 0) {
						link = nextDep;
						continue top;
					}
				}
				return dirty;
			} while (true);
		}
		function shallowPropagate(link) {
			do {
				const sub = link.sub;
				const flags = sub.flags;
				if ((flags & (ReactiveFlags.Pending | ReactiveFlags.Dirty)) === ReactiveFlags.Pending) {
					sub.flags = flags | ReactiveFlags.Dirty;
					if ((flags & (ReactiveFlags.Watching | ReactiveFlags.RecursedCheck)) === ReactiveFlags.Watching) notify(sub);
				}
			} while ((link = link.nextSub) !== void 0);
		}
		function isValidLink(checkLink, sub) {
			let link = sub.depsTail;
			while (link !== void 0) {
				if (link === checkLink) return true;
				link = link.prevDep;
			}
			return false;
		}
	}
	//#endregion
	//#region ../../node_modules/@tanstack/store/dist/atom.js
	function toObserver(nextHandler, errorHandler, completionHandler) {
		const isObserver = typeof nextHandler === "object";
		const self = isObserver ? nextHandler : void 0;
		return {
			next: (isObserver ? nextHandler.next : nextHandler)?.bind(self),
			error: (isObserver ? nextHandler.error : errorHandler)?.bind(self),
			complete: (isObserver ? nextHandler.complete : completionHandler)?.bind(self)
		};
	}
	const queuedEffects = [];
	let cycle = 0;
	const { link, unlink, propagate, checkDirty, shallowPropagate } = /* @__PURE__ */ createReactiveSystem({
		update(atom) {
			return atom._update();
		},
		notify(effect) {
			queuedEffects[queuedEffectsLength++] = effect;
			effect.flags &= ~ReactiveFlags.Watching;
		},
		unwatched(atom) {
			if (atom.depsTail !== void 0) {
				atom.depsTail = void 0;
				atom.flags = ReactiveFlags.Mutable | ReactiveFlags.Dirty;
				purgeDeps(atom);
			}
		}
	});
	let notifyIndex = 0;
	let queuedEffectsLength = 0;
	let activeSub;
	let batchDepth = 0;
	function batch(fn) {
		try {
			++batchDepth;
			fn();
		} finally {
			if (!--batchDepth) flush();
		}
	}
	function purgeDeps(sub) {
		const depsTail = sub.depsTail;
		let dep = depsTail !== void 0 ? depsTail.nextDep : sub.deps;
		while (dep !== void 0) dep = unlink(dep, sub);
	}
	function flush() {
		if (batchDepth > 0) return;
		while (notifyIndex < queuedEffectsLength) {
			const effect = queuedEffects[notifyIndex];
			queuedEffects[notifyIndex++] = void 0;
			effect.notify();
		}
		notifyIndex = 0;
		queuedEffectsLength = 0;
	}
	function createAtom(valueOrFn, options) {
		const isComputed = typeof valueOrFn === "function";
		const getter = valueOrFn;
		const atom = {
			_snapshot: isComputed ? void 0 : valueOrFn,
			subs: void 0,
			subsTail: void 0,
			deps: void 0,
			depsTail: void 0,
			flags: isComputed ? ReactiveFlags.None : ReactiveFlags.Mutable,
			get() {
				if (activeSub !== void 0) link(atom, activeSub, cycle);
				return atom._snapshot;
			},
			subscribe(observerOrFn) {
				const obs = toObserver(observerOrFn);
				const observed = { current: false };
				const e = effect(() => {
					atom.get();
					if (!observed.current) observed.current = true;
					else obs.next?.(atom._snapshot);
				});
				return { unsubscribe: () => {
					e.stop();
				} };
			},
			_update(getValue) {
				const prevSub = activeSub;
				const compare = options?.compare ?? Object.is;
				if (isComputed) {
					activeSub = atom;
					++cycle;
					atom.depsTail = void 0;
				} else if (getValue === void 0) return false;
				if (isComputed) atom.flags = ReactiveFlags.Mutable | ReactiveFlags.RecursedCheck;
				try {
					const oldValue = atom._snapshot;
					const newValue = typeof getValue === "function" ? getValue(oldValue) : getValue === void 0 && isComputed ? getter(oldValue) : getValue;
					if (oldValue === void 0 || !compare(oldValue, newValue)) {
						atom._snapshot = newValue;
						return true;
					}
					return false;
				} finally {
					activeSub = prevSub;
					if (isComputed) atom.flags &= ~ReactiveFlags.RecursedCheck;
					purgeDeps(atom);
				}
			}
		};
		if (isComputed) {
			atom.flags = ReactiveFlags.Mutable | ReactiveFlags.Dirty;
			atom.get = function() {
				const flags = atom.flags;
				if (flags & ReactiveFlags.Dirty || flags & ReactiveFlags.Pending && checkDirty(atom.deps, atom)) {
					if (atom._update()) {
						const subs = atom.subs;
						if (subs !== void 0) shallowPropagate(subs);
					}
				} else if (flags & ReactiveFlags.Pending) atom.flags = flags & ~ReactiveFlags.Pending;
				if (activeSub !== void 0) link(atom, activeSub, cycle);
				return atom._snapshot;
			};
		} else atom.set = function(valueOrFn) {
			if (atom._update(valueOrFn)) {
				const subs = atom.subs;
				if (subs !== void 0) {
					propagate(subs);
					shallowPropagate(subs);
					flush();
				}
			}
		};
		return atom;
	}
	function effect(fn) {
		const run = () => {
			const prevSub = activeSub;
			activeSub = effectObj;
			++cycle;
			effectObj.depsTail = void 0;
			effectObj.flags = ReactiveFlags.Watching | ReactiveFlags.RecursedCheck;
			try {
				return fn();
			} finally {
				activeSub = prevSub;
				effectObj.flags &= ~ReactiveFlags.RecursedCheck;
				purgeDeps(effectObj);
			}
		};
		const effectObj = {
			deps: void 0,
			depsTail: void 0,
			subs: void 0,
			subsTail: void 0,
			flags: ReactiveFlags.Watching | ReactiveFlags.RecursedCheck,
			notify() {
				const flags = this.flags;
				if (flags & ReactiveFlags.Dirty || flags & ReactiveFlags.Pending && checkDirty(this.deps, this)) run();
				else this.flags = ReactiveFlags.Watching;
			},
			stop() {
				this.flags = ReactiveFlags.None;
				this.depsTail = void 0;
				purgeDeps(this);
			}
		};
		run();
		return effectObj;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/store/dist/shallow.js
	function shallow(objA, objB) {
		if (Object.is(objA, objB)) return true;
		if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
		if (objA instanceof Map && objB instanceof Map) {
			if (objA.size !== objB.size) return false;
			for (const [k, v] of objA) if (!objB.has(k) || !Object.is(v, objB.get(k))) return false;
			return true;
		}
		if (objA instanceof Set && objB instanceof Set) {
			if (objA.size !== objB.size) return false;
			for (const v of objA) if (!objB.has(v)) return false;
			return true;
		}
		if (objA instanceof Date && objB instanceof Date) {
			if (objA.getTime() !== objB.getTime()) return false;
			return true;
		}
		const keysA = getOwnKeys(objA);
		if (keysA.length !== getOwnKeys(objB).length) return false;
		for (let i = 0; i < keysA.length; i++) if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) return false;
		return true;
	}
	function getOwnKeys(obj) {
		return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj));
	}
	//#endregion
	//#region src/dom/data.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI dom/data.ts
	* Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
	*
	* This is a modified version of the Bootstrap's dom/data.js
	* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	* --------------------------------------------------------------------------
	*/
	/**
	* Constants
	*/
	const elementMap = /* @__PURE__ */ new Map();
	var data_default = {
		set(element, key, instance) {
			if (!elementMap.has(element)) elementMap.set(element, /* @__PURE__ */ new Map());
			const instanceMap = elementMap.get(element);
			if (!instanceMap.has(key) && instanceMap.size !== 0) {
				console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
				return;
			}
			instanceMap.set(key, instance);
		},
		get(element, key) {
			if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
			return null;
		},
		remove(element, key) {
			if (!elementMap.has(element)) return;
			const instanceMap = elementMap.get(element);
			instanceMap.delete(key);
			if (instanceMap.size === 0) elementMap.delete(element);
		}
	};
	//#endregion
	//#region src/util/index.ts
	const MILLISECONDS_MULTIPLIER = 1e3;
	const TRANSITION_END = "transitionend";
	/**
	* Properly escape IDs selectors to handle weird IDs
	* @param {string} selector
	* @returns {string}
	*/
	const parseSelector = (selector) => {
		if (selector && window.CSS && window.CSS.escape) selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
		return selector;
	};
	const toType = (object) => {
		if (object === null || object === void 0) return `${object}`;
		return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
	};
	const getTransitionDurationFromElement = (element) => {
		if (!element) return 0;
		let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
		if (!Number.parseFloat(transitionDuration) && !Number.parseFloat(transitionDelay)) return 0;
		transitionDuration = transitionDuration.split(",")[0];
		transitionDelay = transitionDelay.split(",")[0];
		return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
	};
	const triggerTransitionEnd = (element) => {
		element.dispatchEvent(new Event(TRANSITION_END));
	};
	const isElement = (object) => {
		if (!object || typeof object !== "object") return false;
		if (typeof object.jquery !== "undefined") object = object[0];
		return typeof object.nodeType !== "undefined";
	};
	const getElement = (object) => {
		if (isElement(object)) return object.jquery ? object[0] : object;
		if (typeof object === "string" && object.length > 0) return document.querySelector(parseSelector(object));
		return null;
	};
	const getjQuery = () => {
		if (window.jQuery && !document.body.hasAttribute("data-coreui-no-jquery")) return window.jQuery;
		return null;
	};
	const DOMContentLoadedCallbacks = [];
	const onDOMContentLoaded = (callback) => {
		if (document.readyState === "loading") {
			if (!DOMContentLoadedCallbacks.length) document.addEventListener("DOMContentLoaded", () => {
				for (const callback of DOMContentLoadedCallbacks) callback();
			});
			DOMContentLoadedCallbacks.push(callback);
		} else callback();
	};
	const defineJQueryPlugin = (plugin) => {
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
		return typeof possibleCallback === "function" ? possibleCallback.call(...args) : defaultValue;
	};
	const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
		if (!waitForTransition) {
			execute(callback);
			return;
		}
		const emulatedDuration = getTransitionDurationFromElement(transitionElement) + 5;
		let called = false;
		const handler = ({ target }) => {
			if (target !== transitionElement) return;
			called = true;
			transitionElement.removeEventListener(TRANSITION_END, handler);
			execute(callback);
		};
		transitionElement.addEventListener(TRANSITION_END, handler);
		setTimeout(() => {
			if (!called) triggerTransitionEnd(transitionElement);
		}, emulatedDuration);
	};
	//#endregion
	//#region src/dom/event-handler.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI dom/event-handler.ts
	* Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
	*
	* This is a modified version of the Bootstrap's dom/event-handler.ts
	* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	* --------------------------------------------------------------------------
	*/
	/**
	* Constants
	*/
	const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
	const stripNameRegex = /\..*/;
	const stripUidRegex = /::\d+$/;
	const eventRegistry = {};
	let uidEvent = 1;
	const customEvents = {
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	const nativeEvents = /* @__PURE__ */ new Set([
		"click",
		"dblclick",
		"mouseup",
		"mousedown",
		"contextmenu",
		"mousewheel",
		"DOMMouseScroll",
		"mouseover",
		"mouseout",
		"mousemove",
		"selectstart",
		"selectend",
		"keydown",
		"keypress",
		"keyup",
		"beforeinput",
		"copy",
		"cut",
		"paste",
		"orientationchange",
		"touchstart",
		"touchmove",
		"touchend",
		"touchcancel",
		"pointerdown",
		"pointermove",
		"pointerup",
		"pointerleave",
		"pointercancel",
		"drag",
		"dragstart",
		"dragend",
		"dragenter",
		"dragleave",
		"dragover",
		"drop",
		"gesturestart",
		"gesturechange",
		"gestureend",
		"focus",
		"blur",
		"change",
		"input",
		"reset",
		"select",
		"submit",
		"focusin",
		"focusout",
		"load",
		"unload",
		"beforeunload",
		"resize",
		"move",
		"DOMContentLoaded",
		"readystatechange",
		"error",
		"abort",
		"scroll"
	]);
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
	function isMouseEventWithinTarget(event) {
		const { delegateTarget, relatedTarget } = event;
		return Boolean(relatedTarget && delegateTarget.contains(relatedTarget));
	}
	function bootstrapHandler(element, fn, handlerTypeEvent) {
		const isCustomMouseEvent = handlerTypeEvent in customEvents;
		return function handler(event) {
			const coreuiEvent = hydrateObj(event, { delegateTarget: element });
			if (isCustomMouseEvent && isMouseEventWithinTarget(coreuiEvent)) return;
			if (handler.oneOff) EventHandler.off(element, handlerTypeEvent, fn);
			return fn.apply(element, [coreuiEvent]);
		};
	}
	function bootstrapDelegationHandler(element, selector, fn, handlerTypeEvent) {
		const isCustomMouseEvent = handlerTypeEvent in customEvents;
		return function handler(event) {
			const domElements = element.querySelectorAll(selector);
			for (let { target } = event; target && target !== this; target = target.parentNode) for (const domElement of domElements) {
				if (domElement !== target) continue;
				const coreuiEvent = hydrateObj(event, { delegateTarget: target });
				if (isCustomMouseEvent && isMouseEventWithinTarget(coreuiEvent)) return;
				if (handler.oneOff) EventHandler.off(element, handlerTypeEvent, selector, fn);
				return fn.apply(target, [coreuiEvent]);
			}
		};
	}
	function findHandler(events, callable, handlerTypeEvent, delegationSelector = null) {
		return Object.values(events).find((event) => event.callable === callable && event.handlerTypeEvent === handlerTypeEvent && event.delegationSelector === delegationSelector);
	}
	function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
		const isDelegated = typeof handler === "string";
		const callable = isDelegated ? delegationFunction : handler || delegationFunction;
		const baseTypeEvent = originalTypeEvent.replace(stripNameRegex, "");
		let typeEvent = customEvents[baseTypeEvent] || baseTypeEvent;
		if (!nativeEvents.has(typeEvent)) typeEvent = originalTypeEvent;
		const handlerTypeEvent = baseTypeEvent in customEvents ? baseTypeEvent : typeEvent;
		return {
			isDelegated,
			callable,
			typeEvent,
			handlerTypeEvent
		};
	}
	function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
		if (typeof originalTypeEvent !== "string" || !element) return;
		const { isDelegated, callable, typeEvent, handlerTypeEvent } = normalizeParameters(originalTypeEvent, handler, delegationFunction);
		const events = getElementEvents(element);
		const handlers = events[typeEvent] || (events[typeEvent] = {});
		const previousFunction = findHandler(handlers, callable, handlerTypeEvent, isDelegated ? handler : null);
		if (previousFunction) {
			previousFunction.oneOff = previousFunction.oneOff && oneOff;
			return;
		}
		const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
		const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable, handlerTypeEvent) : bootstrapHandler(element, callable, handlerTypeEvent);
		fn.delegationSelector = isDelegated ? handler : null;
		fn.callable = callable;
		fn.handlerTypeEvent = handlerTypeEvent;
		fn.oneOff = oneOff;
		fn.uidEvent = uid;
		handlers[uid] = fn;
		element.addEventListener(typeEvent, fn, isDelegated);
	}
	function removeHandler(element, events, typeEvent, handler) {
		element.removeEventListener(typeEvent, handler, Boolean(handler.delegationSelector));
		delete events[typeEvent][handler.uidEvent];
	}
	function removeNamespacedHandlers(element, events, typeEvent, namespace) {
		const storeElementEvent = events[typeEvent] || {};
		for (const [handlerKey, event] of Object.entries(storeElementEvent)) if (handlerKey.includes(namespace)) removeHandler(element, events, typeEvent, event);
	}
	function getTypeEvent(event) {
		event = event.replace(stripNameRegex, "");
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
			if (typeof originalTypeEvent !== "string" || !element) return;
			const { isDelegated, callable, typeEvent, handlerTypeEvent } = normalizeParameters(originalTypeEvent, handler, delegationFunction);
			const inNamespace = typeEvent !== originalTypeEvent && handlerTypeEvent !== originalTypeEvent;
			const events = getElementEvents(element);
			const storeElementEvent = events[typeEvent] || {};
			const isNamespace = originalTypeEvent.startsWith(".");
			if (typeof callable !== "undefined") {
				if (!Object.keys(storeElementEvent).length) return;
				const fn = findHandler(storeElementEvent, callable, handlerTypeEvent, isDelegated ? handler : null);
				if (fn) removeHandler(element, events, typeEvent, fn);
				return;
			}
			if (isNamespace) for (const elementEvent of Object.keys(events)) removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
			for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
				const handlerKey = keyHandlers.replace(stripUidRegex, "");
				if (event.handlerTypeEvent === handlerTypeEvent && (!inNamespace || originalTypeEvent.includes(handlerKey))) removeHandler(element, events, typeEvent, event);
			}
		},
		trigger(element, event, args) {
			if (typeof event !== "string" || !element) return null;
			const $ = getjQuery();
			const inNamespace = event !== getTypeEvent(event);
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
			if (defaultPrevented) evt.preventDefault();
			if (nativeDispatch) element.dispatchEvent(evt);
			if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
			return evt;
		}
	};
	function hydrateObj(obj, meta = {}) {
		for (const [key, value] of Object.entries(meta)) try {
			obj[key] = value;
		} catch {
			Object.defineProperty(obj, key, {
				configurable: true,
				get() {
					return value;
				}
			});
		}
		return obj;
	}
	//#endregion
	//#region src/dom/manipulator.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI dom/manipulator.ts
	* Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
	*
	* This is a modified version of the Bootstrap's dom/manipulator.ts
	* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	* --------------------------------------------------------------------------
	*/
	function normalizeData(value) {
		if (value === "true") return true;
		if (value === "false") return false;
		if (value === Number(value).toString()) return Number(value);
		if (value === "" || value === "null") return null;
		if (typeof value !== "string") return value;
		try {
			return JSON.parse(decodeURIComponent(value));
		} catch {
			return value;
		}
	}
	function normalizeDataKey(key) {
		return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
	}
	const Manipulator = {
		setDataAttribute(element, key, value) {
			element.setAttribute(`data-coreui-${normalizeDataKey(key)}`, value);
		},
		removeDataAttribute(element, key) {
			element.removeAttribute(`data-coreui-${normalizeDataKey(key)}`);
		},
		getDataAttributes(element) {
			if (!element) return {};
			const attributes = {};
			const coreuiKeys = Object.keys(element.dataset).filter((key) => key.startsWith("coreui") && !key.startsWith("coreuiConfig"));
			for (const key of coreuiKeys) {
				let pureKey = key.replace(/^coreui/, "");
				pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
				attributes[pureKey] = normalizeData(element.dataset[key]);
			}
			return attributes;
		},
		getDataAttribute(element, key) {
			return normalizeData(element.getAttribute(`data-coreui-${normalizeDataKey(key)}`));
		}
	};
	//#endregion
	//#region src/util/config.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI util/config.ts
	* Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
	*
	* This is a modified version of the Bootstrap's util/config.ts
	* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	* --------------------------------------------------------------------------
	*/
	/**
	* Class definition
	*/
	var Config = class {
		static get Default() {
			return {};
		}
		static get DefaultType() {
			return {};
		}
		static get NAME() {
			throw new Error("You have to implement the static method \"NAME\", for each component!");
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
			const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
			return {
				...this.constructor.Default,
				...typeof jsonConfig === "object" ? jsonConfig : {},
				...isElement(element) ? Manipulator.getDataAttributes(element) : {},
				...typeof config === "object" ? config : {}
			};
		}
		_typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
			for (const [property, expectedTypes] of Object.entries(configTypes)) {
				const value = config[property];
				const valueType = isElement(value) ? "element" : toType(value);
				if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
			}
		}
	};
	//#endregion
	//#region src/base-component.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI base-component.ts
	* Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
	*
	* This component is a modified version of the Bootstrap's base-component.ts
	* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	* --------------------------------------------------------------------------
	*/
	/**
	* Constants
	*/
	const VERSION = "0.1.0";
	/**
	* Class definition
	*/
	var BaseComponent = class extends Config {
		constructor(element, config) {
			super();
			element = getElement(element);
			if (!element) return;
			this._element = element;
			this._config = this._getConfig(config);
			data_default.set(this._element, this.constructor.DATA_KEY, this);
		}
		dispose() {
			data_default.remove(this._element, this.constructor.DATA_KEY);
			EventHandler.off(this._element, this.constructor.EVENT_KEY);
			for (const propertyName of Object.getOwnPropertyNames(this)) this[propertyName] = null;
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
		static getInstance(element) {
			return data_default.get(getElement(element), this.DATA_KEY);
		}
		static getOrCreateInstance(element, config = {}) {
			return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
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
	};
	//#endregion
	//#region src/engine/active-cell.ts
	const HEADER_ROW_INDEX = -1;
	const clampColumn = (columnId, columnIds) => {
		if (columnIds.includes(columnId)) return columnId;
		return columnIds.length > 0 ? columnIds[0] : null;
	};
	const clampActiveCell = (cell, context) => {
		if (!cell) return null;
		const columnId = clampColumn(cell.columnId, context.columnIds);
		if (columnId === null) return null;
		const maxRow = context.rowCount - 1;
		const rowIndex = cell.rowIndex < 0 ? HEADER_ROW_INDEX : Math.max(0, Math.min(cell.rowIndex, Math.max(maxRow, 0)));
		if (rowIndex >= 0 && maxRow < 0) return {
			rowIndex: HEADER_ROW_INDEX,
			columnId
		};
		return {
			rowIndex,
			columnId
		};
	};
	const resolveNavigation = (key, ctrlKey, current, context) => {
		const { columnIds, rowCount, pageStep, paginated, rtl } = context;
		const columnIndex = columnIds.indexOf(current.columnId);
		if (columnIndex === -1 || columnIds.length === 0) return null;
		const lastRow = rowCount - 1;
		const lastColumn = columnIds.length - 1;
		const cell = (rowIndex, index) => ({ cell: {
			rowIndex,
			columnId: columnIds[index]
		} });
		switch (key) {
			case "ArrowLeft": return rtl ? cell(current.rowIndex, Math.min(columnIndex + 1, lastColumn)) : cell(current.rowIndex, Math.max(columnIndex - 1, 0));
			case "ArrowRight": return rtl ? cell(current.rowIndex, Math.max(columnIndex - 1, 0)) : cell(current.rowIndex, Math.min(columnIndex + 1, lastColumn));
			case "ArrowUp": return cell(Math.max(current.rowIndex - 1, HEADER_ROW_INDEX), columnIndex);
			case "ArrowDown": return cell(Math.min(current.rowIndex + 1, lastRow), columnIndex);
			case "Home":
				if (ctrlKey) return cell(rowCount > 0 ? 0 : HEADER_ROW_INDEX, 0);
				return cell(current.rowIndex, 0);
			case "End":
				if (ctrlKey) return cell(rowCount > 0 ? lastRow : HEADER_ROW_INDEX, lastColumn);
				return cell(current.rowIndex, lastColumn);
			case "PageUp":
				if (paginated && current.rowIndex === 0) return {
					...cell(0, columnIndex),
					pageDelta: -1
				};
				return cell(Math.max(current.rowIndex - pageStep, 0), columnIndex);
			case "PageDown":
				if (paginated && current.rowIndex === lastRow) return {
					...cell(lastRow, columnIndex),
					pageDelta: 1
				};
				return cell(Math.min(current.rowIndex + pageStep, lastRow), columnIndex);
			default: return null;
		}
	};
	const createActiveCellManager = (onChange) => {
		let current = null;
		let focusRequested = false;
		return {
			get: () => current,
			set(cell, options = {}) {
				const changed = !current || current.rowIndex !== cell.rowIndex || current.columnId !== cell.columnId;
				current = cell;
				if (options.focus) focusRequested = true;
				if (changed || options.focus) onChange();
			},
			clamp(context) {
				const next = clampActiveCell(current, context);
				const changed = Boolean(current) !== Boolean(next) || current && next && (current.rowIndex !== next.rowIndex || current.columnId !== next.columnId);
				current = next;
				if (changed) onChange();
			},
			reset() {
				if (current) {
					current = null;
					focusRequested = false;
					onChange();
				}
			},
			consumeFocusRequest() {
				if (!focusRequested) return false;
				focusRequested = false;
				return true;
			}
		};
	};
	//#endregion
	//#region src/engine/data-source.ts
	const FETCH_DEBOUNCE_MS = 100;
	const createDataSource = (context) => {
		let requestId = 0;
		let timeout;
		return {
			load() {
				clearTimeout(timeout);
				const id = ++requestId;
				timeout = setTimeout(async () => {
					context.onLoadingChange(true);
					try {
						const request = context.getRequest();
						const response = await context.provider(request);
						if (id !== requestId) return;
						context.onLoad(response, request);
					} catch (error) {
						if (id !== requestId) return;
						context.onError(error);
					} finally {
						if (id === requestId) context.onLoadingChange(false);
					}
				}, FETCH_DEBOUNCE_MS);
			},
			dispose() {
				clearTimeout(timeout);
				requestId++;
			}
		};
	};
	//#endregion
	//#region src/util/clipboard.ts
	const DELIMITER = "	";
	const ROW_SEPARATOR = "\n";
	const REGION_SEPARATOR = "\n\n";
	const escape = (text) => /[\t\n"]/.test(text) ? `"${text.replace(/"/g, "\"\"")}"` : text;
	const serializeCellSelection = (table, columns) => {
		const { rows } = table.getRowModel();
		return table.getCellSelectionBounds().map((bounds) => {
			const lines = [];
			for (let rowIndex = bounds.minRowIndex; rowIndex <= bounds.maxRowIndex; rowIndex++) {
				const row = rows[rowIndex];
				if (!row) continue;
				const cells = [];
				for (let columnIndex = bounds.minColumnIndex; columnIndex <= bounds.maxColumnIndex; columnIndex++) {
					const column = columns[columnIndex];
					if (!column) continue;
					const value = row.getValue(column.id);
					cells.push(escape(column.formatter ? column.formatter(value, row.original) : String(value ?? "")));
				}
				lines.push(cells.join(DELIMITER));
			}
			return lines.join(ROW_SEPARATOR);
		}).filter((region) => region !== "").join(REGION_SEPARATOR);
	};
	const copyCellSelection = async (table, columns) => {
		const text = serializeCellSelection(table, columns);
		if (text === "") return text;
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			const textarea = document.createElement("textarea");
			textarea.value = text;
			textarea.setAttribute("aria-hidden", "true");
			textarea.style.position = "fixed";
			textarea.style.opacity = "0";
			document.body.append(textarea);
			textarea.select();
			try {
				document.execCommand("copy");
			} finally {
				textarea.remove();
			}
		}
		return text;
	};
	//#endregion
	//#region src/util/print.ts
	const CLASS_NAME_PRINT_ROOT = "data-grid-print-root";
	const printRows = (table) => {
		if (typeof table.getSortedRowModel === "function") return table.getSortedRowModel().rows;
		if (typeof table.getFilteredRowModel === "function") return table.getFilteredRowModel().rows;
		return table.getCoreRowModel().rows;
	};
	const createPrintTable = (table, columns, options = {}) => {
		const root = document.createElement("div");
		root.className = CLASS_NAME_PRINT_ROOT;
		if (options.title) {
			const heading = document.createElement("h1");
			heading.textContent = options.title;
			root.append(heading);
		}
		const tableElement = document.createElement("table");
		tableElement.classList.add("table");
		const head = document.createElement("thead");
		const headRow = document.createElement("tr");
		for (const column of columns) {
			const cell = document.createElement("th");
			cell.scope = "col";
			cell.textContent = column.label;
			headRow.append(cell);
		}
		head.append(headRow);
		const body = document.createElement("tbody");
		for (const row of printRows(table)) {
			const rowElement = document.createElement("tr");
			for (const column of columns) {
				const cell = document.createElement("td");
				const value = row.getValue(column.id);
				cell.textContent = column.formatter ? column.formatter(value, row.original) : String(value ?? "");
				rowElement.append(cell);
			}
			body.append(rowElement);
		}
		tableElement.append(head, body);
		root.append(tableElement);
		return root;
	};
	const printGrid = (table, columns, options = {}) => {
		const root = createPrintTable(table, columns, options);
		document.body.append(root);
		const cleanup = () => {
			root.remove();
			window.removeEventListener("afterprint", cleanup);
		};
		window.addEventListener("afterprint", cleanup);
		try {
			window.print();
		} finally {
			cleanup();
		}
	};
	//#endregion
	//#region src/util/drag.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid util/drag.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const CLASS_NAME_GHOST = "data-grid-drag-ghost";
	const CLASS_NAME_INDICATOR = "data-grid-drop-indicator";
	const CLASS_NAME_DRAGGING = "data-grid-dragging";
	const CLASS_NAME_DRAG_ACTIVE = "data-grid-drag-active";
	const CLASS_NAME_PREVIEW = "data-grid-drag-preview";
	const CLASS_NAME_GHOST_SETTLE = "data-grid-drag-ghost-settle";
	const DRAG_THRESHOLD = 4;
	const DRAG_HYSTERESIS = 3;
	const EDGE_SIZE = 48;
	const EDGE_MAX_SPEED = 18;
	const GHOST_OFFSET = 12;
	const GHOST_SETTLE_FALLBACK_MS = 400;
	const collapse = (text) => text.replace(/\s+/g, " ").trim();
	const destinationIndex = (from, target, after) => target > from ? after ? target : target - 1 : after ? target + 1 : target;
	const swallowClick = (event) => {
		event.preventDefault();
		event.stopPropagation();
	};
	const disarmSwallowClick = () => {
		document.removeEventListener("click", swallowClick, { capture: true });
	};
	const INERT_CONTROLLER = { dispose() {} };
	const createDragController = (options) => {
		if (typeof document === "undefined") return INERT_CONTROLLER;
		const { axis, root } = options;
		const horizontal = axis === "x";
		let sourceHit = null;
		let dragging = false;
		let axisSign = 1;
		let origin = {
			x: 0,
			y: 0
		};
		let pointer = {
			x: 0,
			y: 0
		};
		let drop = null;
		let ghost = null;
		let indicator = null;
		let scrollFrame = 0;
		let pointerId = -1;
		let previewKey = "";
		let sticky = null;
		const previewDeltas = /* @__PURE__ */ new Map();
		const previewClassed = /* @__PURE__ */ new Set();
		const contentStarts = /* @__PURE__ */ new Map();
		const contentSizes = /* @__PURE__ */ new Map();
		const logicalStart = (rect) => {
			if (!horizontal) return rect.top;
			return axisSign === 1 ? rect.left : -rect.right;
		};
		const logicalPointer = () => horizontal ? pointer.x * axisSign : pointer.y;
		const stopAutoScroll = () => {
			if (scrollFrame) {
				cancelAnimationFrame(scrollFrame);
				scrollFrame = 0;
			}
		};
		const autoScroll = () => {
			scrollFrame = 0;
			const scrollElement = options.getScrollElement();
			if (!scrollElement || !dragging) return;
			const rect = scrollElement.getBoundingClientRect();
			const position = horizontal ? pointer.x : pointer.y;
			const start = horizontal ? rect.left : rect.top;
			const end = horizontal ? rect.right : rect.bottom;
			let delta = 0;
			if (position < start + EDGE_SIZE) delta = -18 * Math.min(1, (start + EDGE_SIZE - position) / EDGE_SIZE);
			else if (position > end - EDGE_SIZE) delta = EDGE_MAX_SPEED * Math.min(1, (position - (end - EDGE_SIZE)) / EDGE_SIZE);
			if (delta !== 0) {
				if (horizontal) scrollElement.scrollLeft += delta;
				else scrollElement.scrollTop += delta;
				updateTarget();
				scrollFrame = requestAnimationFrame(autoScroll);
			}
		};
		const moveGhost = () => {
			if (ghost) ghost.style.transform = `translate(${pointer.x + GHOST_OFFSET}px, ${pointer.y + GHOST_OFFSET}px)`;
		};
		const hideIndicator = () => {
			if (indicator) indicator.hidden = true;
		};
		const showIndicator = (target, after) => {
			if (!indicator) return;
			const rect = target.getBoundingClientRect();
			const rootRect = root.getBoundingClientRect();
			indicator.hidden = false;
			if (horizontal) {
				const trailing = after === (axisSign === 1);
				indicator.style.left = `${trailing ? rect.right : rect.left}px`;
				indicator.style.top = `${rootRect.top}px`;
				indicator.style.height = `${rootRect.height}px`;
			} else {
				indicator.style.left = `${rootRect.left}px`;
				indicator.style.top = `${after ? rect.bottom : rect.top}px`;
				indicator.style.width = `${rootRect.width}px`;
			}
		};
		const startDrag = () => {
			dragging = true;
			axisSign = horizontal && getComputedStyle(root).direction === "rtl" ? -1 : 1;
			const active = document.activeElement;
			if (active instanceof HTMLElement && root.contains(active)) active.blur();
			root.classList.add(CLASS_NAME_DRAG_ACTIVE);
			sourceHit.element.classList.add(CLASS_NAME_DRAGGING);
			const rect = sourceHit.element.getBoundingClientRect();
			ghost = document.createElement("div");
			ghost.className = CLASS_NAME_GHOST;
			ghost.setAttribute("aria-hidden", "true");
			ghost.style.width = `${rect.width}px`;
			ghost.style.height = `${rect.height}px`;
			ghost.textContent = options.ghostLabel ? options.ghostLabel(sourceHit) : collapse(sourceHit.element.textContent ?? "");
			if (!options.preview) {
				indicator = document.createElement("div");
				indicator.className = `${CLASS_NAME_INDICATOR} ${CLASS_NAME_INDICATOR}-${axis}`;
				indicator.setAttribute("aria-hidden", "true");
				indicator.hidden = true;
				root.append(indicator);
			}
			root.append(ghost);
			moveGhost();
			captureLayout();
		};
		const contentOrigin = () => {
			const scrollElement = options.getScrollElement();
			if (!scrollElement) return 0;
			const rect = scrollElement.getBoundingClientRect();
			return horizontal ? logicalStart(rect) - axisSign * scrollElement.scrollLeft : rect.top - scrollElement.scrollTop;
		};
		const captureItem = (id, origin) => {
			const element = options.items.getElements(id)[0];
			if (!element) return false;
			const rect = element.getBoundingClientRect();
			const start = logicalStart(rect) - (previewDeltas.get(id) ?? 0);
			contentStarts.set(id, start - origin);
			contentSizes.set(id, horizontal ? rect.width : rect.height);
			return true;
		};
		const captureLayout = () => {
			contentStarts.clear();
			contentSizes.clear();
			const origin = contentOrigin();
			for (const id of options.items.getOrderedIds()) captureItem(id, origin);
		};
		const updateTarget = () => {
			const position = logicalPointer();
			const origin = contentOrigin();
			const zones = [];
			for (const id of options.items.getOrderedIds()) {
				if (!contentStarts.has(id) && !captureItem(id, origin)) continue;
				zones.push({
					id,
					start: origin + contentStarts.get(id),
					size: contentSizes.get(id)
				});
			}
			let hit = null;
			const lastZone = zones[zones.length - 1];
			const fromIndex = zones.findIndex((zone) => zone.id === sourceHit.id);
			if (lastZone && position > lastZone.start + lastZone.size) {
				sticky = null;
				for (let index = zones.length - 1; index >= 0; index--) if (options.canDrop(sourceHit.id, zones[index].id)) {
					hit = {
						id: zones[index].id,
						after: true
					};
					break;
				}
			} else if (lastZone && position < zones[0].start) {
				sticky = null;
				for (const zone of zones) if (options.canDrop(sourceHit.id, zone.id)) {
					hit = {
						id: zone.id,
						after: false
					};
					break;
				}
			} else if (drop && sticky && position >= sticky.lo - DRAG_HYSTERESIS && position <= sticky.hi + DRAG_HYSTERESIS) hit = drop;
			else for (let index = 0; index < zones.length; index++) {
				const zone = zones[index];
				const previous = zones[index - 1];
				const following = zones[index + 1];
				const lo = previous ? (previous.start + previous.size + zone.start) / 2 : zone.start;
				const hi = following ? (zone.start + zone.size + following.start) / 2 : zone.start + zone.size;
				if (position < lo || position > hi) continue;
				if (options.canDrop(sourceHit.id, zone.id)) {
					hit = {
						id: zone.id,
						after: fromIndex === -1 ? position > zone.start + zone.size / 2 : index > fromIndex
					};
					sticky = {
						lo,
						hi
					};
				}
				break;
			}
			if (!hit) {
				drop = null;
				sticky = null;
				hideIndicator();
				applyPreview();
				return;
			}
			drop = hit;
			showIndicator(options.items.getElements(hit.id)[0], hit.after);
			applyPreview();
		};
		const clearPreview = () => {
			for (const id of previewClassed) for (const element of options.items.getElements(id)) {
				element.style.transform = "";
				element.classList.remove(CLASS_NAME_PREVIEW);
			}
			previewKey = "";
			previewDeltas.clear();
			previewClassed.clear();
		};
		const clearLayout = () => {
			contentStarts.clear();
			contentSizes.clear();
		};
		const applyPreview = () => {
			if (!options.preview || !sourceHit) return;
			const ids = options.items.getOrderedIds();
			const from = ids.indexOf(sourceHit.id);
			const target = drop ? ids.indexOf(drop.id) : -1;
			const to = from === -1 || target === -1 ? from : destinationIndex(from, target, drop.after);
			const key = String(to);
			if (key === previewKey) return;
			previewKey = key;
			const next = /* @__PURE__ */ new Map();
			if (from !== -1 && to !== from) {
				const sizeOf = (index) => contentSizes.get(ids[index]) ?? 0;
				const forward = to > from;
				const first = forward ? from + 1 : to;
				const last = forward ? to : from - 1;
				const sourceSize = sizeOf(from);
				let travelled = 0;
				for (let index = first; index <= last; index++) {
					travelled += sizeOf(index);
					next.set(ids[index], forward ? -sourceSize : sourceSize);
				}
				next.set(ids[from], forward ? travelled : -travelled);
			}
			for (const id of previewDeltas.keys()) if (!next.has(id)) for (const element of options.items.getElements(id)) element.style.transform = "";
			for (const [id, delta] of next) {
				if (previewDeltas.get(id) === delta) continue;
				for (const element of options.items.getElements(id)) {
					element.style.transform = horizontal ? `translateX(${axisSign * delta}px)` : `translateY(${delta}px)`;
					element.classList.add(CLASS_NAME_PREVIEW);
				}
				previewClassed.add(id);
			}
			previewDeltas.clear();
			for (const [id, delta] of next) previewDeltas.set(id, delta);
		};
		const settleGhost = (x, y) => {
			if (!ghost) return;
			const element = ghost;
			ghost = null;
			element.classList.add(CLASS_NAME_GHOST_SETTLE);
			element.style.transform = `translate(${x}px, ${y}px)`;
			element.style.opacity = "0";
			let settled = false;
			const finish = () => {
				if (!settled) {
					settled = true;
					element.remove();
				}
			};
			element.addEventListener("transitionend", finish);
			setTimeout(finish, GHOST_SETTLE_FALLBACK_MS);
		};
		const settleTarget = (committed) => {
			if (!sourceHit) return null;
			const rect = sourceHit.element.getBoundingClientRect();
			if (committed) return {
				x: rect.left,
				y: rect.top
			};
			const delta = previewDeltas.get(sourceHit.id) ?? 0;
			return horizontal ? {
				x: rect.left - axisSign * delta,
				y: rect.top
			} : {
				x: rect.left,
				y: rect.top - delta
			};
		};
		const cleanup = () => {
			clearPreview();
			clearLayout();
			stopAutoScroll();
			root.classList.remove(CLASS_NAME_DRAG_ACTIVE);
			sourceHit?.element.classList.remove(CLASS_NAME_DRAGGING);
			ghost?.remove();
			indicator?.remove();
			ghost = null;
			indicator = null;
			sourceHit = null;
			dragging = false;
			drop = null;
			sticky = null;
			pointerId = -1;
			document.removeEventListener("pointermove", onPointerMove);
			document.removeEventListener("pointerup", onPointerUp);
			document.removeEventListener("pointercancel", cancel);
			document.removeEventListener("keydown", onKeydown);
		};
		function cancel() {
			if (dragging) {
				const home = settleTarget(false);
				if (home) settleGhost(home.x, home.y);
			}
			cleanup();
		}
		function onKeydown(event) {
			if (event.key === "Escape") {
				event.preventDefault();
				cancel();
			}
		}
		function onPointerMove(event) {
			if (event.pointerId !== pointerId || !sourceHit) return;
			pointer = {
				x: event.clientX,
				y: event.clientY
			};
			if (!dragging) {
				if (Math.max(Math.abs(pointer.x - origin.x), Math.abs(pointer.y - origin.y)) < DRAG_THRESHOLD) return;
				startDrag();
			}
			event.preventDefault();
			moveGhost();
			updateTarget();
			if (!scrollFrame) scrollFrame = requestAnimationFrame(autoScroll);
		}
		function onPointerUp(event) {
			if (event.pointerId !== pointerId) return;
			const sourceId = sourceHit?.id;
			const source = sourceHit?.element;
			const pending = drop;
			const wasDragging = dragging;
			if (wasDragging) {
				const committed = Boolean(pending && pending.id !== sourceId);
				const landing = settleTarget(committed);
				if (landing) settleGhost(landing.x, landing.y);
			}
			cleanup();
			if (!wasDragging) return;
			if (source?.contains(event.target)) {
				document.addEventListener("click", swallowClick, {
					capture: true,
					once: true
				});
				setTimeout(disarmSwallowClick, 0);
			}
			if (sourceId && pending && pending.id !== sourceId) options.onDrop(sourceId, pending);
		}
		const onPointerDown = (event) => {
			if (!event.isPrimary || event.pointerType === "mouse" && event.button !== 0 || sourceHit) return;
			const element = event.target?.closest(options.handle);
			if (!element) return;
			const hit = options.resolveSource(element, event.target);
			if (!hit) return;
			sourceHit = hit;
			pointerId = event.pointerId;
			origin = {
				x: event.clientX,
				y: event.clientY
			};
			pointer = origin;
			document.addEventListener("pointermove", onPointerMove);
			document.addEventListener("pointerup", onPointerUp);
			document.addEventListener("pointercancel", cancel);
			document.addEventListener("keydown", onKeydown);
		};
		root.addEventListener("pointerdown", onPointerDown);
		return { dispose() {
			root.removeEventListener("pointerdown", onPointerDown);
			disarmSwallowClick();
			cleanup();
		} };
	};
	const SELECTOR_DRAGGABLE_COLUMN = "th[data-coreui-draggable]";
	const SELECTOR_RESIZER$1 = "[data-coreui-resizer]";
	const SELECTOR_PREVIEW_ROWS = "thead tr, tbody tr:not(.data-grid-spacer):not(.data-grid-empty)";
	const columnItems = (root) => ({
		getOrderedIds: () => [...root.querySelectorAll("thead tr:first-child th[data-coreui-column]")].map((cell) => cell.dataset.coreuiColumn ?? ""),
		getElements(id) {
			const header = root.querySelector(`thead th[data-coreui-column="${id}"]`);
			if (!header) return [];
			const { cellIndex } = header;
			const elements = [];
			for (const row of root.querySelectorAll(SELECTOR_PREVIEW_ROWS)) {
				const cell = row.children[cellIndex];
				if (cell) elements.push(cell);
			}
			return elements;
		}
	});
	const createColumnDragController = (options) => createDragController({
		axis: "x",
		root: options.root,
		handle: SELECTOR_DRAGGABLE_COLUMN,
		getScrollElement: options.getScrollElement,
		resolveSource(element, target) {
			if (target.closest(SELECTOR_RESIZER$1)) return null;
			const id = element.dataset.coreuiColumn;
			return id ? {
				id,
				element
			} : null;
		},
		items: columnItems(options.root),
		canDrop: (sourceId, targetId) => sourceId !== targetId && Boolean(options.root.querySelector(`th[data-coreui-column="${targetId}"][data-coreui-draggable]`)) && options.canDrop(sourceId, targetId),
		preview: true,
		onDrop: (sourceKey, drop) => options.onReorder(sourceKey, drop.id, drop.after)
	});
	const SELECTOR_ROW_HANDLE = "[data-coreui-row-handle]";
	const SELECTOR_ROW = "tr[data-coreui-index]";
	const rowItems = (root) => ({
		getOrderedIds: () => [...root.querySelectorAll(`tbody ${SELECTOR_ROW}`)].map((row) => row.dataset.coreuiIndex ?? ""),
		getElements(id) {
			const row = root.querySelector(`tbody tr[data-coreui-index="${id}"]`);
			return row ? [row] : [];
		}
	});
	const createRowDragController = (options) => createDragController({
		axis: "y",
		root: options.root,
		handle: SELECTOR_ROW_HANDLE,
		getScrollElement: options.getScrollElement,
		resolveSource(handle) {
			const row = handle.closest(SELECTOR_ROW);
			const id = row?.dataset.coreuiIndex;
			return row && id ? {
				id,
				element: row
			} : null;
		},
		items: rowItems(options.root),
		canDrop: (sourceId, targetId) => sourceId !== targetId,
		ghostLabel: (source) => collapse(source.element.querySelector("td:not(.data-grid-row-handle-cell):not(.data-grid-select-cell)")?.textContent ?? ""),
		preview: true,
		onDrop: (sourceId, drop) => options.onReorder(Number(sourceId), Number(drop.id), drop.after)
	});
	//#endregion
	//#region src/engine/scheduler.ts
	const createScheduler = (flush) => {
		let scheduled = false;
		let disposed = false;
		const run = () => {
			scheduled = false;
			if (!disposed) flush();
		};
		return {
			schedule() {
				if (scheduled || disposed) return;
				scheduled = true;
				if (typeof window.requestAnimationFrame === "function") {
					window.requestAnimationFrame(run);
					return;
				}
				setTimeout(run, 16);
			},
			dispose() {
				disposed = true;
			}
		};
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/utils.js
	/**
	* Applies a TanStack updater to a value.
	*
	* If the updater is a function it is called with the previous value; otherwise the updater value is returned directly.
	*/
	function functionalUpdate(updater, input) {
		return typeof updater === "function" ? updater(input) : updater;
	}
	/**
	* Clones table state values while preserving non-plain objects.
	*
	* Plain objects and arrays are copied recursively so state updates can avoid mutating existing references.
	*/
	function cloneState(value) {
		if (Array.isArray(value)) return value.map(cloneState);
		if (value && typeof value === "object") {
			const proto = Object.getPrototypeOf(value);
			if (proto !== Object.prototype && proto !== null) return value;
			const copy = proto === null ? makeObjectMap() : {};
			const keys = Object.keys(value);
			for (let i = 0; i < keys.length; i++) {
				const key = keys[i];
				Object.defineProperty(copy, key, {
					configurable: true,
					enumerable: true,
					value: cloneState(value[key]),
					writable: true
				});
			}
			return copy;
		}
		return value;
	}
	/**
	* Copies prototype-instance own properties without carrying over lazy memo
	* closures or the per-row cell cache, both of which are bound to the source
	* instance (cached cells reference the source row).
	*/
	function copyInstancePropertiesWithoutMemos(target, source) {
		const keys = Object.keys(source);
		const targetRecord = target;
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			if (!key.startsWith("_memo_") && key !== "_cellsCache") targetRecord[key] = source[key];
		}
		return target;
	}
	/**
	* Creates an object intended only for string-keyed dictionary lookups.
	*
	* The null prototype keeps user-controlled ids such as `__proto__` and
	* `hasOwnProperty` as plain data keys.
	*/
	function makeObjectMap() {
		return Object.create(null);
	}
	/**
	* Checks whether an object owns a key, including null-prototype dictionaries.
	*/
	function hasOwn(obj, key) {
		return Object.prototype.hasOwnProperty.call(obj, key);
	}
	/**
	* Creates a table state updater for a single state slice.
	*
	* The updater writes through the table base atom for the slice and supports both value and functional updater forms.
	*/
	function makeStateUpdater(key, instance) {
		return (updater) => {
			(instance.options.atoms?.[key] ?? instance.baseAtoms[key]).set((old) => functionalUpdate(updater, old));
		};
	}
	/**
	* Returns whether a value is a function.
	*/
	function isFunction(d) {
		return d instanceof Function;
	}
	/**
	* Flattens a tree of nodes by recursively reading child nodes.
	*
	* The original nodes are preserved in depth-first order.
	*/
	function flattenBy(arr, getChildren) {
		const flat = [];
		const recurse = (subArr) => {
			subArr.forEach((item) => {
				flat.push(item);
				const children = getChildren(item);
				if (children.length) recurse(children);
			});
		};
		recurse(arr);
		return flat;
	}
	/**
	* Creates a dependency-tracked memoized function for table internals.
	*
	* The memo recomputes only when its dependency tuple changes and can emit debug timing information.
	*/
	const memo$1 = ({ fn, memoDeps, onAfterCompare, onAfterUpdate, onBeforeCompare, onBeforeUpdate }) => {
		let deps = [];
		let result;
		const memoizedFn = (depArgs) => {
			onBeforeCompare?.();
			const newDeps = memoDeps?.(depArgs);
			let depsChanged = !newDeps || newDeps.length !== deps?.length;
			if (!depsChanged && newDeps) {
				for (let i = 0; i < newDeps.length; i++) if (newDeps[i] !== deps[i]) {
					depsChanged = true;
					break;
				}
			}
			onAfterCompare?.(depsChanged);
			if (!depsChanged) return result;
			deps = newDeps;
			onBeforeUpdate?.();
			result = fn(...newDeps ?? []);
			onAfterUpdate?.(result);
			return result;
		};
		return memoizedFn;
	};
	/**
	* Wraps a callback so that its first invocation is skipped.
	*
	* Row-model `onAfterUpdate` hooks schedule auto-resets when their inputs
	* change. The initial computation of a row model is not a change, so state
	* resets must not fire for it — otherwise merely reading a row model on mount
	* would wipe initial or controlled state.
	*/
	function skipFirstRun(fn) {
		let hasRun = false;
		return () => {
			if (!hasRun) {
				hasRun = true;
				return;
			}
			fn();
		};
	}
	/**
	* Creates a table-aware memoized function.
	*
	* This wraps `memo` with table debug options and feature metadata so row models and derived APIs can share consistent diagnostics.
	*/
	function tableMemo({ feature, fnName, objectId, onAfterUpdate, table, ...memoOptions }) {
		const onAfterUpdateHandler = () => {
			if (!onAfterUpdate) return;
			const { schedule, untrack } = table._reactivity;
			schedule(() => untrack(() => onAfterUpdate()));
		};
		const debugOptions = { onAfterUpdate: () => {
			onAfterUpdateHandler();
		} };
		return memo$1({
			...memoOptions,
			...debugOptions
		});
	}
	/**
	* Assumes that a function name is in the format of `parentName_fnKey` and returns the `fnKey` and `fnName` in the format of `parentName.fnKey`.
	*/
	function getFunctionNameInfo(staticFnName, splitBy = "_") {
		const [parentName, fnKey] = staticFnName.split(splitBy);
		return {
			fnKey,
			fnName: `${parentName}.${fnKey}`,
			parentName
		};
	}
	/**
	* Assigns Table API methods directly to the table instance.
	* Unlike row/cell/column/header, the table is a singleton so methods are assigned directly.
	*/
	function assignTableAPIs(feature, table, apis) {
		for (const [staticFnName, { fn, memoDeps }] of Object.entries(apis)) {
			const { fnKey, fnName } = getFunctionNameInfo(staticFnName);
			table[fnKey] = memoDeps ? tableMemo({
				memoDeps,
				fn,
				fnName,
				table,
				feature
			}) : fn;
		}
	}
	/**
	* Assigns API methods to a prototype object for memory-efficient method sharing.
	* All instances created with this prototype will share the same method references.
	*
	* For memoized methods, the memo state is lazily created and stored on each instance.
	* This provides the best of both worlds: shared method code + per-instance caching.
	*/
	function assignPrototypeAPIs(feature, prototype, table, apis) {
		for (const [staticFnName, { fn, memoDeps }] of Object.entries(apis)) {
			const { fnKey, fnName } = getFunctionNameInfo(staticFnName);
			if (memoDeps) {
				const memoKey = `_memo_${fnKey}`;
				prototype[fnKey] = function(...args) {
					if (!this[memoKey]) {
						const self = this;
						this[memoKey] = tableMemo({
							memoDeps: (depArgs) => memoDeps(self, depArgs),
							fn: (...deps) => fn(self, ...deps),
							fnName,
							objectId: self.id,
							table,
							feature
						});
					}
					return this[memoKey](...args);
				};
			} else prototype[fnKey] = function(...args) {
				return fn(this, ...args);
			};
		}
	}
	/**
	* Looks to run the memoized function with the builder pattern on the object if it exists, otherwise fall back to the static method passed in.
	*/
	function callMemoOrStaticFn(obj, fnKey, staticFn, ...args) {
		return obj[fnKey]?.(...args) ?? staticFn(obj, ...args);
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/cells/coreCellsFeature.utils.js
	/**
	* Reads this cell's accessor value from its owning row and column.
	*
	* This is the standalone implementation behind `cell.getValue()`, useful when
	* importing static APIs instead of calling methods from the cell prototype.
	*
	* @example
	* ```ts
	* const value = cell_getValue(cell)
	* ```
	*/
	function cell_getValue(cell) {
		return cell.row.getValue(cell.column.id);
	}
	/**
	* Reads the value that should be rendered for this cell.
	*
	* Nullish accessor values are replaced with `table.options.renderFallbackValue`,
	* matching the behavior of `cell.renderValue()`.
	*
	* @example
	* ```ts
	* const rendered = cell_renderValue(cell)
	* ```
	*/
	function cell_renderValue(cell) {
		return cell.getValue() ?? cell.table.options.renderFallbackValue;
	}
	/**
	* Builds the render context passed to a column's `cell` template.
	*
	* The returned object includes stable references to the table, row, column, and
	* cell, plus bound `getValue` and `renderValue` helpers for render functions.
	*
	* @example
	* ```ts
	* const context = cell_getContext(cell)
	* ```
	*/
	function cell_getContext(cell) {
		return {
			table: cell.table,
			column: cell.column,
			row: cell.row,
			cell,
			getValue: () => cell.getValue(),
			renderValue: () => cell.renderValue()
		};
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/cells/coreCellsFeature.js
	/**
	* Core feature that adds cell value, render, and context APIs.
	*/
	const coreCellsFeature = { assignCellPrototype: (prototype, table) => {
		assignPrototypeAPIs("coreCellsFeature", prototype, table, {
			cell_getValue: { fn: (cell) => cell_getValue(cell) },
			cell_renderValue: { fn: (cell) => cell_renderValue(cell) },
			cell_getContext: {
				fn: (cell) => cell_getContext(cell),
				memoDeps: (cell) => [cell]
			}
		});
	} };
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/headers/constructHeader.js
	/**
	* Creates or retrieves the header prototype for a table.
	* The prototype is cached on the table and shared by all header instances.
	*/
	function getHeaderPrototype(table) {
		if (!table._headerPrototype) {
			table._headerPrototype = { table };
			const features = Object.values(table._features);
			for (let i = 0; i < features.length; i++) features[i].assignHeaderPrototype?.(table._headerPrototype, table);
		}
		return table._headerPrototype;
	}
	/**
	* Constructs a header instance from normalized table internals.
	*
	* This wires core properties, feature prototype APIs, and instance data used by table rendering and row-model operations.
	*/
	function constructHeader(table, column, options) {
		const headerPrototype = getHeaderPrototype(table);
		const header = Object.create(headerPrototype);
		header.colSpan = 0;
		header.column = column;
		header.depth = options.depth;
		header.headerGroup = null;
		header.id = options.id ?? column.id;
		header.index = options.index;
		header.isPlaceholder = !!options.isPlaceholder;
		header.placeholderId = options.placeholderId;
		header.rowSpan = 0;
		header.subHeaders = [];
		const initFns = table._headerInstanceInitFns;
		for (let i = 0; i < initFns.length; i++) initFns[i](header);
		return header;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-pinning/columnPinningFeature.utils.js
	/**
	* Creates the default column pinning state.
	*
	* Both pinning regions start empty. Reset APIs use this value when
	* `defaultState` is `true`.
	*
	* @example
	* ```ts
	* const pinning = getDefaultColumnPinningState()
	* ```
	*/
	function getDefaultColumnPinningState() {
		return {
			start: [],
			end: []
		};
	}
	/**
	* Moves this column's leaf column ids into a pinning region.
	*
	* Pinning a group column pins all of its leaves. The leaf ids are first removed
	* from both regions, then appended to the requested `'start'` or `'end'`
	* region. Passing `false` unpins them back to the center.
	*
	* `start` and `end` are logical positions. In LTR languages/layouts, `start`
	* usually corresponds to left and `end` to right. In RTL languages/layouts,
	* `start` usually corresponds to right and `end` to left.
	*
	* @example
	* ```ts
	* column_pin(column, 'start')
	* ```
	*/
	function column_pin(column, position) {
		const leafColumns = column.getLeafColumns();
		const columnIds = [];
		for (let i = 0; i < leafColumns.length; i++) {
			const id = leafColumns[i].id;
			if (id) columnIds.push(id);
		}
		table_setColumnPinning(column.table, (old) => {
			if (position === "end") return {
				start: old.start.filter((d) => !columnIds.includes(d)),
				end: [...old.end.filter((d) => !columnIds.includes(d)), ...columnIds]
			};
			if (position === "start") return {
				start: [...old.start.filter((d) => !columnIds.includes(d)), ...columnIds],
				end: old.end.filter((d) => !columnIds.includes(d))
			};
			return {
				start: old.start.filter((d) => !columnIds.includes(d)),
				end: old.end.filter((d) => !columnIds.includes(d))
			};
		});
	}
	/**
	* Checks whether this column or any of its leaf columns can be pinned.
	*
	* Column-level `enablePinning` and table `enableColumnPinning` both default to
	* `true`; at least one leaf column must allow pinning.
	*
	* @example
	* ```ts
	* const canPin = column_getCanPin(column)
	* ```
	*/
	function column_getCanPin(column) {
		return column.getLeafColumns().some((leafColumn) => (leafColumn.columnDef.enablePinning ?? true) && (column.table.options.enableColumnPinning ?? true));
	}
	/**
	* Reads this column's current pinning region.
	*
	* Group columns report `'start'` or `'end'` when any leaf column is pinned in
	* that region. Unpinned columns return `false`.
	*
	* `start` and `end` are logical positions. In LTR languages/layouts, `start`
	* usually corresponds to left and `end` to right. In RTL languages/layouts,
	* `start` usually corresponds to right and `end` to left.
	*
	* @example
	* ```ts
	* const position = column_getIsPinned(column)
	* ```
	*/
	function column_getIsPinned(column) {
		const leafColumns = column.getLeafColumns();
		const { start, end } = column.table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		for (let i = 0; i < leafColumns.length; i++) if (start.includes(leafColumns[i].id)) return "start";
		for (let i = 0; i < leafColumns.length; i++) if (end.includes(leafColumns[i].id)) return "end";
		return false;
	}
	/**
	* Finds this column's index within its pinned region.
	*
	* Unpinned columns return `0`; pinned columns return their position in
	* `state.columnPinning.start` or `state.columnPinning.end`.
	*
	* @example
	* ```ts
	* const index = column_getPinnedIndex(column)
	* ```
	*/
	function column_getPinnedIndex(column) {
		const position = column_getIsPinned(column);
		return position ? column.table.atoms.columnPinning?.get()?.[position].indexOf(column.id) ?? -1 : 0;
	}
	/**
	* Collects visible cells whose columns are not pinned start or end.
	*
	* The result preserves the row's visible-cell order for center columns.
	*
	* @example
	* ```ts
	* const centerCells = row_getCenterVisibleCells(row)
	* ```
	*/
	function row_getCenterVisibleCells(row) {
		const allCells = callMemoOrStaticFn(row, "getVisibleCells", row_getVisibleCells);
		const { start, end } = row.table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		if (!start.length && !end.length) return allCells;
		const startAndEnd = [...start, ...end];
		return allCells.filter((d) => !startAndEnd.includes(d.column.id));
	}
	/**
	* Collects visible cells for columns pinned to the start region.
	*
	* Cells are returned in `state.columnPinning.start` order and are marked with
	* `cell.position = 'start'`.
	*
	* @example
	* ```ts
	* const startCells = row_getStartVisibleCells(row)
	* ```
	*/
	function row_getStartVisibleCells(row) {
		const { start } = row.table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		if (!start.length) return [];
		const allVisibleCells = callMemoOrStaticFn(row, "getVisibleCellsByColumnId", row_getVisibleCellsByColumnId);
		const cells = [];
		for (let i = 0; i < start.length; i++) {
			const cell = allVisibleCells[start[i]];
			if (cell) {
				cell.position = "start";
				cells.push(cell);
			}
		}
		return cells;
	}
	/**
	* Collects visible cells for columns pinned to the end region.
	*
	* Cells are returned in `state.columnPinning.end` order and are marked with
	* `cell.position = 'end'`.
	*
	* @example
	* ```ts
	* const endCells = row_getEndVisibleCells(row)
	* ```
	*/
	function row_getEndVisibleCells(row) {
		const { end } = row.table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		if (!end.length) return [];
		const allVisibleCells = callMemoOrStaticFn(row, "getVisibleCellsByColumnId", row_getVisibleCellsByColumnId);
		const cells = [];
		for (let i = 0; i < end.length; i++) {
			const cell = allVisibleCells[end[i]];
			if (cell) {
				cell.position = "end";
				cells.push(cell);
			}
		}
		return cells;
	}
	/**
	* Routes a column pinning updater through the table's pinning change handler.
	*
	* The updater may be a next `{ start, end }` state or a function of the
	* previous state, matching the instance `table.setColumnPinning` behavior.
	*
	* @example
	* ```ts
	* table_setColumnPinning(table, (old) => ({ ...old, start: ['select'] }))
	* ```
	*/
	function table_setColumnPinning(table, updater) {
		table.options.onColumnPinningChange?.(updater);
	}
	/**
	* Resets `columnPinning` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.columnPinning` when it
	* exists. Passing `true` ignores initial state and resets to empty start/end
	* arrays.
	*
	* @example
	* ```ts
	* table_resetColumnPinning(table)
	* table_resetColumnPinning(table, true)
	* ```
	*/
	function table_resetColumnPinning(table, defaultState) {
		table_setColumnPinning(table, defaultState ? getDefaultColumnPinningState() : cloneState(table.initialState.columnPinning ?? getDefaultColumnPinningState()));
	}
	/**
	* Checks whether any columns are pinned.
	*
	* Omit `position` to check both sides, or pass `'start'`/`'end'` to inspect a
	* single pinning region.
	*
	* @example
	* ```ts
	* const hasPinnedColumns = table_getIsSomeColumnsPinned(table)
	* ```
	*/
	function table_getIsSomeColumnsPinned(table, position) {
		const pinningState = table.atoms.columnPinning?.get();
		if (!position) return Boolean(pinningState?.start.length || pinningState?.end.length);
		return Boolean(pinningState?.[position].length);
	}
	/**
	* Builds header groups for visible columns pinned to the start region.
	*
	* The leaf columns are read in `state.columnPinning.start` order and then passed
	* through the same header-group builder as the unpinned table.
	*
	* @example
	* ```ts
	* const headerGroups = table_getStartHeaderGroups(table)
	* ```
	*/
	function table_getStartHeaderGroups(table) {
		const allColumns = table.getAllColumns();
		const leafColumnsById = table.getAllLeafColumnsById();
		const { start } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		const orderedLeafColumns = [];
		for (let i = 0; i < start.length; i++) {
			const column = leafColumnsById[start[i]];
			if (column && callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible)) orderedLeafColumns.push(column);
		}
		return buildHeaderGroups(allColumns, orderedLeafColumns, table, "start");
	}
	/**
	* Builds header groups for visible columns pinned to the end region.
	*
	* The leaf columns are read in `state.columnPinning.end` order and then
	* passed through the same header-group builder as the unpinned table.
	*
	* @example
	* ```ts
	* const headerGroups = table_getEndHeaderGroups(table)
	* ```
	*/
	function table_getEndHeaderGroups(table) {
		const allColumns = table.getAllColumns();
		const leafColumnsById = table.getAllLeafColumnsById();
		const { end } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		const orderedLeafColumns = [];
		for (let i = 0; i < end.length; i++) {
			const column = leafColumnsById[end[i]];
			if (column && callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible)) orderedLeafColumns.push(column);
		}
		return buildHeaderGroups(allColumns, orderedLeafColumns, table, "end");
	}
	/**
	* Builds header groups for visible columns that are not pinned.
	*
	* Start- and end-pinned column ids are removed from the visible leaf column
	* list before header groups are built for the center region.
	*
	* @example
	* ```ts
	* const headerGroups = table_getCenterHeaderGroups(table)
	* ```
	*/
	function table_getCenterHeaderGroups(table) {
		const allColumns = table.getAllColumns();
		let leafColumns = callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns);
		const { start, end } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		if (start.length || end.length) {
			const startAndEnd = [...start, ...end];
			leafColumns = leafColumns.filter((column) => !startAndEnd.includes(column.id));
		}
		return buildHeaderGroups(allColumns, leafColumns, table, "center");
	}
	/**
	* Builds footer groups for the start pinned region.
	*
	* Footer groups reuse the start header groups in reverse order.
	*
	* @example
	* ```ts
	* const footerGroups = table_getStartFooterGroups(table)
	* ```
	*/
	function table_getStartFooterGroups(table) {
		return [...callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups)].reverse();
	}
	/**
	* Builds footer groups for the end pinned region.
	*
	* Footer groups reuse the end header groups in reverse order.
	*
	* @example
	* ```ts
	* const footerGroups = table_getEndFooterGroups(table)
	* ```
	*/
	function table_getEndFooterGroups(table) {
		return [...callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups)].reverse();
	}
	/**
	* Builds footer groups for the center, unpinned region.
	*
	* Footer groups reuse the center header groups in reverse order.
	*
	* @example
	* ```ts
	* const footerGroups = table_getCenterFooterGroups(table)
	* ```
	*/
	function table_getCenterFooterGroups(table) {
		return [...callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups)].reverse();
	}
	/**
	* Flattens every header from the start pinned header groups.
	*
	* Parent headers and placeholder headers are included.
	*
	* @example
	* ```ts
	* const headers = table_getStartFlatHeaders(table)
	* ```
	*/
	function table_getStartFlatHeaders(table) {
		const leftHeaderGroups = callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups);
		const result = [];
		for (let i = 0; i < leftHeaderGroups.length; i++) {
			const headers = leftHeaderGroups[i].headers;
			for (let j = 0; j < headers.length; j++) result.push(headers[j]);
		}
		return result;
	}
	/**
	* Flattens every header from the end pinned header groups.
	*
	* Parent headers and placeholder headers are included.
	*
	* @example
	* ```ts
	* const headers = table_getEndFlatHeaders(table)
	* ```
	*/
	function table_getEndFlatHeaders(table) {
		const rightHeaderGroups = callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups);
		const result = [];
		for (let i = 0; i < rightHeaderGroups.length; i++) {
			const headers = rightHeaderGroups[i].headers;
			for (let j = 0; j < headers.length; j++) result.push(headers[j]);
		}
		return result;
	}
	/**
	* Flattens every header from the center header groups.
	*
	* Parent headers and placeholder headers are included.
	*
	* @example
	* ```ts
	* const headers = table_getCenterFlatHeaders(table)
	* ```
	*/
	function table_getCenterFlatHeaders(table) {
		const centerHeaderGroups = callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups);
		const result = [];
		for (let i = 0; i < centerHeaderGroups.length; i++) {
			const headers = centerHeaderGroups[i].headers;
			for (let j = 0; j < headers.length; j++) result.push(headers[j]);
		}
		return result;
	}
	/**
	* Collects leaf headers for the start pinned region.
	*
	* Parent headers are filtered out from the start flat header list.
	*
	* @example
	* ```ts
	* const headers = table_getStartLeafHeaders(table)
	* ```
	*/
	function table_getStartLeafHeaders(table) {
		return callMemoOrStaticFn(table, "getStartFlatHeaders", table_getStartFlatHeaders).filter((header) => !header.subHeaders.length);
	}
	/**
	* Collects leaf headers for the end pinned region.
	*
	* Parent headers are filtered out from the end flat header list.
	*
	* @example
	* ```ts
	* const headers = table_getEndLeafHeaders(table)
	* ```
	*/
	function table_getEndLeafHeaders(table) {
		return callMemoOrStaticFn(table, "getEndFlatHeaders", table_getEndFlatHeaders).filter((header) => !header.subHeaders.length);
	}
	/**
	* Collects leaf headers for the center, unpinned region.
	*
	* Parent headers are filtered out from the center flat header list.
	*
	* @example
	* ```ts
	* const headers = table_getCenterLeafHeaders(table)
	* ```
	*/
	function table_getCenterLeafHeaders(table) {
		return callMemoOrStaticFn(table, "getCenterFlatHeaders", table_getCenterFlatHeaders).filter((header) => !header.subHeaders.length);
	}
	/**
	* Resolves leaf columns pinned to the start region.
	*
	* The result follows `state.columnPinning.start` order and skips stale ids that
	* no longer correspond to a leaf column.
	*
	* @example
	* ```ts
	* const columns = table_getStartLeafColumns(table)
	* ```
	*/
	function table_getStartLeafColumns(table) {
		const { start } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		const leafColumnsById = table.getAllLeafColumnsById();
		const result = [];
		for (let i = 0; i < start.length; i++) {
			const column = leafColumnsById[start[i]];
			if (column) result.push(column);
		}
		return result;
	}
	/**
	* Resolves leaf columns pinned to the end region.
	*
	* The result follows `state.columnPinning.end` order and skips stale ids that
	* no longer correspond to a leaf column.
	*
	* @example
	* ```ts
	* const columns = table_getEndLeafColumns(table)
	* ```
	*/
	function table_getEndLeafColumns(table) {
		const { end } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		const leafColumnsById = table.getAllLeafColumnsById();
		const result = [];
		for (let i = 0; i < end.length; i++) {
			const column = leafColumnsById[end[i]];
			if (column) result.push(column);
		}
		return result;
	}
	/**
	* Resolves leaf columns that are not pinned to either logical side.
	*
	* Start- and end-pinned ids are removed from `table.getAllLeafColumns()`.
	*
	* @example
	* ```ts
	* const columns = table_getCenterLeafColumns(table)
	* ```
	*/
	function table_getCenterLeafColumns(table) {
		const { start, end } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		if (!start.length && !end.length) return table.getAllLeafColumns();
		const startAndEnd = [...start, ...end];
		return table.getAllLeafColumns().filter((d) => !startAndEnd.includes(d.id));
	}
	/**
	* Resolves leaf columns for a requested pinning region.
	*
	* Pass `'start'`, `'center'`, or `'end'` for a partition, or pass `false` to
	* read all leaf columns without partitioning.
	*
	* @example
	* ```ts
	* const columns = table_getPinnedLeafColumns(table, 'center')
	* ```
	*/
	function table_getPinnedLeafColumns(table, position) {
		return !position ? table.getAllLeafColumns() : position === "start" ? callMemoOrStaticFn(table, "getStartLeafColumns", table_getStartLeafColumns) : position === "end" ? callMemoOrStaticFn(table, "getEndLeafColumns", table_getEndLeafColumns) : callMemoOrStaticFn(table, "getCenterLeafColumns", table_getCenterLeafColumns);
	}
	/**
	* Resolves visible leaf columns pinned to the start region.
	*
	* Hidden pinned columns are filtered out after the start pin order is applied.
	*
	* @example
	* ```ts
	* const columns = table_getStartVisibleLeafColumns(table)
	* ```
	*/
	function table_getStartVisibleLeafColumns(table) {
		return callMemoOrStaticFn(table, "getStartLeafColumns", table_getStartLeafColumns).filter((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
	}
	/**
	* Resolves visible leaf columns pinned to the end region.
	*
	* Hidden pinned columns are filtered out after the end pin order is applied.
	*
	* @example
	* ```ts
	* const columns = table_getEndVisibleLeafColumns(table)
	* ```
	*/
	function table_getEndVisibleLeafColumns(table) {
		return callMemoOrStaticFn(table, "getEndLeafColumns", table_getEndLeafColumns).filter((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
	}
	/**
	* Resolves visible leaf columns that are not pinned.
	*
	* This is the center partition used by layouts that render pinned columns
	* separately from the scrollable middle region.
	*
	* @example
	* ```ts
	* const columns = table_getCenterVisibleLeafColumns(table)
	* ```
	*/
	function table_getCenterVisibleLeafColumns(table) {
		return callMemoOrStaticFn(table, "getCenterLeafColumns", table_getCenterLeafColumns).filter((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
	}
	/**
	* Resolves visible leaf columns for a requested pinning region.
	*
	* Omit `position` to get all visible leaf columns, or pass `'start'`, `'center'`,
	* or `'end'` to get one partition.
	*
	* @example
	* ```ts
	* const columns = table_getPinnedVisibleLeafColumns(table, 'start')
	* ```
	*/
	function table_getPinnedVisibleLeafColumns(table, position) {
		return !position ? callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns) : position === "start" ? callMemoOrStaticFn(table, "getStartVisibleLeafColumns", table_getStartVisibleLeafColumns) : position === "end" ? callMemoOrStaticFn(table, "getEndVisibleLeafColumns", table_getEndVisibleLeafColumns) : callMemoOrStaticFn(table, "getCenterVisibleLeafColumns", table_getCenterVisibleLeafColumns);
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-visibility/columnVisibilityFeature.utils.js
	/**
	* Creates the default column visibility state.
	*
	* The feature default is an empty object, where missing column ids are treated
	* as visible. Reset APIs use this value when `defaultState` is `true`.
	*
	* @example
	* ```ts
	* const visibility = getDefaultColumnVisibilityState()
	* ```
	*/
	function getDefaultColumnVisibilityState() {
		return makeObjectMap();
	}
	/**
	* Updates this column's visibility when hiding is allowed.
	*
	* Passing `visible` stores that value. Omitting it flips the column's current
	* visibility state. Group columns update their hideable leaf columns because
	* visibility state is keyed by leaf column ids. Columns that cannot hide stay
	* unchanged.
	*
	* @example
	* ```ts
	* column_toggleVisibility(column)
	* ```
	*/
	function column_toggleVisibility(column, visible) {
		if (column_getCanHide(column)) table_setColumnVisibility(column.table, (old) => {
			const next = Object.assign(makeObjectMap(), old);
			const nextVisible = visible ?? !callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible);
			const leafColumns = column.getLeafColumns();
			for (let i = 0; i < leafColumns.length; i++) {
				const leafColumn = leafColumns[i];
				if (column_getCanHide(leafColumn)) next[leafColumn.id] = nextVisible;
			}
			return next;
		});
	}
	/**
	* Checks whether this column is visible.
	*
	* Leaf columns read `state.columnVisibility[column.id]`, where missing entries
	* default to visible. Parent columns are visible when at least one child column
	* is visible.
	*
	* @example
	* ```ts
	* const visible = column_getIsVisible(column)
	* ```
	*/
	function column_getIsVisible(column) {
		const columnVisibility = column.table.atoms.columnVisibility?.get();
		if (!columnVisibility) return true;
		const childColumns = column.columns;
		if (childColumns.length) return childColumns.some((childColumn) => callMemoOrStaticFn(childColumn, "getIsVisible", column_getIsVisible));
		return (hasOwn(columnVisibility, column.id) ? columnVisibility[column.id] : void 0) ?? true;
	}
	/**
	* Checks whether this column is allowed to be hidden.
	*
	* Both `columnDef.enableHiding` and table `enableHiding` default to `true`.
	*
	* @example
	* ```ts
	* const canHide = column_getCanHide(column)
	* ```
	*/
	function column_getCanHide(column) {
		return (column.columnDef.enableHiding ?? true) && (column.table.options.enableHiding ?? true);
	}
	/**
	* Creates a checkbox-style handler that writes this column's visibility.
	*
	* The handler reads `event.target.checked`, so it is intended for visibility
	* controls whose checked state means "visible".
	*
	* @example
	* ```ts
	* const onChange = column_getToggleVisibilityHandler(column)
	* ```
	*/
	function column_getToggleVisibilityHandler(column) {
		return (e) => {
			column_toggleVisibility(column, e.target.checked);
		};
	}
	/**
	* Collects the cells from this row whose columns are visible.
	*
	* When column pinning is active, the result is ordered as start-pinned cells,
	* center cells, then end-pinned cells.
	*
	* @example
	* ```ts
	* const visibleCells = row_getVisibleCells(row)
	* ```
	*/
	function row_getVisibleCells(row) {
		const allCells = row.getAllCells();
		const visibleCells = [];
		for (let i = 0; i < allCells.length; i++) {
			const cell = allCells[i];
			if (callMemoOrStaticFn(cell.column, "getIsVisible", column_getIsVisible)) visibleCells.push(cell);
		}
		const { start, end } = row.table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		if (!start.length && !end.length) return visibleCells;
		const visibleCellsByColumnId = callMemoOrStaticFn(row, "getVisibleCellsByColumnId", row_getVisibleCellsByColumnId);
		const startCells = [];
		for (let i = 0; i < start.length; i++) {
			const cell = visibleCellsByColumnId[start[i]];
			if (cell) startCells.push(cell);
		}
		const endCells = [];
		for (let i = 0; i < end.length; i++) {
			const cell = visibleCellsByColumnId[end[i]];
			if (cell) endCells.push(cell);
		}
		const centerCells = [];
		for (let i = 0; i < visibleCells.length; i++) {
			const cell = visibleCells[i];
			const id = cell.column.id;
			if (!start.includes(id) && !end.includes(id)) centerCells.push(cell);
		}
		return [
			...startCells,
			...centerCells,
			...endCells
		];
	}
	/**
	* Builds a lookup map of this row's visible cells keyed by column id.
	*
	* Hidden columns are omitted from the map.
	*
	* @example
	* ```ts
	* const visibleCellsById = row_getVisibleCellsByColumnId(row)
	* ```
	*/
	function row_getVisibleCellsByColumnId(row) {
		const result = makeObjectMap();
		const allCells = row.getAllCells();
		for (let i = 0; i < allCells.length; i++) {
			const cell = allCells[i];
			if (callMemoOrStaticFn(cell.column, "getIsVisible", column_getIsVisible)) result[cell.column.id] = cell;
		}
		return result;
	}
	/**
	* Filters the flat column list down to visible columns.
	*
	* Parent/group columns are included when `column_getIsVisible` considers them
	* visible.
	*
	* @example
	* ```ts
	* const columns = table_getVisibleFlatColumns(table)
	* ```
	*/
	function table_getVisibleFlatColumns(table) {
		return table.getAllFlatColumns().filter((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
	}
	/**
	* Filters leaf columns down to those currently visible.
	*
	* This is the column list most row rendering code uses before pinning-specific
	* partitioning.
	*
	* @example
	* ```ts
	* const columns = table_getVisibleLeafColumns(table)
	* ```
	*/
	function table_getVisibleLeafColumns(table) {
		return table.getAllLeafColumns().filter((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
	}
	/**
	* Routes a column visibility updater through the table's visibility change handler.
	*
	* The updater may be a next visibility map or a function of the previous map,
	* matching the instance `table.setColumnVisibility` behavior.
	*
	* @example
	* ```ts
	* table_setColumnVisibility(table, (old) => ({ ...old, age: false }))
	* ```
	*/
	function table_setColumnVisibility(table, updater) {
		table.options.onColumnVisibilityChange?.(updater);
	}
	/**
	* Resets `columnVisibility` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.columnVisibility` when
	* it exists. Passing `true` ignores initial state and resets to `{}`.
	*
	* @example
	* ```ts
	* table_resetColumnVisibility(table)
	* table_resetColumnVisibility(table, true)
	* ```
	*/
	function table_resetColumnVisibility(table, defaultState) {
		table_setColumnVisibility(table, defaultState ? makeObjectMap() : Object.assign(makeObjectMap(), cloneState(table.initialState.columnVisibility ?? {})));
	}
	/**
	* Shows or hides every hideable leaf column.
	*
	* Columns that cannot hide stay visible when toggling all columns off.
	*
	* @example
	* ```ts
	* table_toggleAllColumnsVisible(table)
	* ```
	*/
	function table_toggleAllColumnsVisible(table, value) {
		value = value ?? !table_getIsAllColumnsVisible(table);
		const visibility = makeObjectMap();
		const leafColumns = table.getAllLeafColumns();
		for (let i = 0; i < leafColumns.length; i++) {
			const column = leafColumns[i];
			visibility[column.id] = !value ? !column_getCanHide(column) : value;
		}
		table_setColumnVisibility(table, visibility);
	}
	/**
	* Checks whether every leaf column is currently visible.
	*
	* Non-hideable columns are naturally visible because missing visibility entries
	* default to `true`.
	*
	* @example
	* ```ts
	* const allVisible = table_getIsAllColumnsVisible(table)
	* ```
	*/
	function table_getIsAllColumnsVisible(table) {
		return !table.getAllLeafColumns().some((column) => !callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
	}
	/**
	* Checks whether at least one leaf column is currently visible.
	*
	* This is useful for tri-state "show all columns" controls.
	*
	* @example
	* ```ts
	* const someVisible = table_getIsSomeColumnsVisible(table)
	* ```
	*/
	function table_getIsSomeColumnsVisible(table) {
		return table.getAllLeafColumns().some((column) => callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible));
	}
	/**
	* Creates a checkbox-style handler that shows or hides all columns.
	*
	* The handler reads `event.target.checked`, so it is intended for controls whose
	* checked state means "all columns visible".
	*
	* @example
	* ```ts
	* const onChange = table_getToggleAllColumnsVisibilityHandler(table)
	* ```
	*/
	function table_getToggleAllColumnsVisibilityHandler(table) {
		return (e) => {
			table_toggleAllColumnsVisible(table, e.target.checked);
		};
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/headers/buildHeaderGroups.js
	function getMaxHeaderDepth(columns, depth = 1) {
		let maxDepth = depth;
		for (let i = 0; i < columns.length; i++) {
			const column = columns[i];
			if (callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible) && column.columns.length) maxDepth = Math.max(maxDepth, getMaxHeaderDepth(column.columns, depth + 1));
		}
		return maxDepth;
	}
	function formatHeaderGroupId(headerFamily, depth) {
		return headerFamily ? `${headerFamily}_${depth}` : String(depth);
	}
	function formatHeaderId(headerFamily, depth, columnId, childHeaderId) {
		let id = headerFamily ?? "";
		if (depth) id = id ? `${id}_${depth}` : String(depth);
		if (columnId) id = id ? `${id}_${columnId}` : columnId;
		if (childHeaderId) id = id ? `${id}_${childHeaderId}` : childHeaderId;
		return id;
	}
	function countPendingHeadersForColumn(headers, column) {
		let count = 0;
		for (let i = 0; i < headers.length; i++) if (headers[i].column === column) count++;
		return count;
	}
	function constructHeaderGroup(headersToGroup, depth, table, headerFamily, headerGroups, headerGroupInitFns) {
		const headerGroup = {
			depth,
			id: formatHeaderGroupId(headerFamily, depth),
			headers: []
		};
		const pendingParentHeaders = [];
		for (let i = 0; i < headersToGroup.length; i++) {
			if (!(i in headersToGroup)) continue;
			const headerToGroup = headersToGroup[i];
			const latestPendingParentHeader = pendingParentHeaders[pendingParentHeaders.length - 1];
			const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
			let column;
			let isPlaceholder = false;
			if (isLeafHeader && headerToGroup.column.parent) column = headerToGroup.column.parent;
			else {
				column = headerToGroup.column;
				isPlaceholder = true;
			}
			if (latestPendingParentHeader && latestPendingParentHeader.column === column) latestPendingParentHeader.subHeaders.push(headerToGroup);
			else {
				const header = constructHeader(table, column, {
					id: formatHeaderId(headerFamily, depth, column.id, headerToGroup.id),
					isPlaceholder,
					placeholderId: isPlaceholder ? String(countPendingHeadersForColumn(pendingParentHeaders, column)) : void 0,
					depth,
					index: pendingParentHeaders.length
				});
				header.subHeaders.push(headerToGroup);
				pendingParentHeaders.push(header);
			}
			headerGroup.headers.push(headerToGroup);
			headerToGroup.headerGroup = headerGroup;
		}
		for (let i = 0; i < headerGroupInitFns.length; i++) headerGroupInitFns[i](headerGroup);
		headerGroups.push(headerGroup);
		if (depth > 0) constructHeaderGroup(pendingParentHeaders, depth - 1, table, headerFamily, headerGroups, headerGroupInitFns);
	}
	function updateHeaderSpans(headers) {
		for (let i = 0; i < headers.length; i++) {
			const header = headers[i];
			if (!callMemoOrStaticFn(header.column, "getIsVisible", column_getIsVisible)) continue;
			let colSpan = 0;
			if (header.subHeaders.length) {
				updateHeaderSpans(header.subHeaders);
				for (let j = 0; j < header.subHeaders.length; j++) {
					const child = header.subHeaders[j];
					if (!callMemoOrStaticFn(child.column, "getIsVisible", column_getIsVisible)) continue;
					colSpan += child.colSpan;
				}
			} else colSpan = 1;
			header.colSpan = colSpan;
			if (header.isPlaceholder && header.subHeaders.length === 1 && header.subHeaders[0].column === header.column) {
				let rowSpan = 1;
				let chainChild = header.subHeaders[0];
				while (chainChild) {
					chainChild.rowSpan = 0;
					rowSpan++;
					chainChild = chainChild.subHeaders.length === 1 && chainChild.subHeaders[0].column === header.column ? chainChild.subHeaders[0] : void 0;
				}
				header.rowSpan = rowSpan;
			} else header.rowSpan = 1;
		}
	}
	/**
	* Builds the nested header group structure for a table.
	*
	* The result accounts for visible leaf columns, pinned column groups, and placeholder headers needed to render multi-level headers.
	*/
	function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
		const maxDepth = getMaxHeaderDepth(allColumns);
		const headerGroups = [];
		const headerGroupInitFns = table._headerGroupInstanceInitFns;
		const bottomHeaders = new Array(columnsToGroup.length);
		for (let i = 0; i < columnsToGroup.length; i++) {
			if (!(i in columnsToGroup)) continue;
			bottomHeaders[i] = constructHeader(table, columnsToGroup[i], {
				depth: maxDepth,
				index: i
			});
		}
		constructHeaderGroup(bottomHeaders, maxDepth - 1, table, headerFamily, headerGroups, headerGroupInitFns);
		headerGroups.reverse();
		updateHeaderSpans(headerGroups[0]?.headers ?? []);
		return headerGroups;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/columns/constructColumn.js
	/**
	* Creates or retrieves the column prototype for a table.
	* The prototype is cached on the table and shared by all column instances.
	*/
	function getColumnPrototype(table) {
		if (!table._columnPrototype) {
			table._columnPrototype = { table };
			const features = Object.values(table._features);
			for (let i = 0; i < features.length; i++) features[i].assignColumnPrototype?.(table._columnPrototype, table);
		}
		return table._columnPrototype;
	}
	/**
	* Constructs a column instance from normalized table internals.
	*
	* This wires core properties, feature prototype APIs, and instance data used by table rendering and row-model operations.
	*/
	function constructColumn(table, columnDef, depth, parent) {
		const resolvedColumnDef = {
			...table.getDefaultColumnDef(),
			...columnDef
		};
		const accessorKey = resolvedColumnDef.accessorKey;
		const accessorKeyString = accessorKey === void 0 ? void 0 : String(accessorKey);
		const id = resolvedColumnDef.id ?? accessorKeyString?.replaceAll(".", "_") ?? (typeof resolvedColumnDef.header === "string" ? resolvedColumnDef.header : void 0);
		let accessorFn;
		if (resolvedColumnDef.accessorFn) accessorFn = resolvedColumnDef.accessorFn;
		else if (accessorKey !== void 0) if (typeof accessorKey === "string" && accessorKey.includes(".")) {
			const keys = accessorKey.split(".");
			accessorFn = (originalRow) => {
				let result = originalRow;
				for (let i = 0; i < keys.length; i++) {
					const key = keys[i];
					result = result?.[key];
				}
				return result;
			};
		} else accessorFn = (originalRow) => originalRow[resolvedColumnDef.accessorKey];
		if (!id) throw new Error();
		const columnPrototype = getColumnPrototype(table);
		const column = Object.create(columnPrototype);
		column.accessorFn = accessorFn;
		column.columnDef = resolvedColumnDef;
		column.columns = [];
		column.depth = depth;
		column.id = `${String(id)}`;
		column.parent = parent;
		const initFns = table._columnInstanceInitFns;
		for (let i = 0; i < initFns.length; i++) initFns[i](column);
		return column;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-ordering/columnOrderingFeature.utils.js
	/**
	* Creates the default column order state.
	*
	* The feature default is an empty array, meaning leaf columns keep their natural
	* definition order. Reset APIs use this value when `defaultState` is `true`.
	*
	* @example
	* ```ts
	* const order = getDefaultColumnOrderState()
	* ```
	*/
	function getDefaultColumnOrderState() {
		return [];
	}
	/**
	* Builds column-id to index records for each visible pinning region.
	*
	* All four regions are built in one pass so a single memo entry serves every
	* `column_getIndex` lookup without per-column scans.
	*
	* @example
	* ```ts
	* const indexes = table_getColumnIndexes(table)
	* ```
	*/
	function table_getColumnIndexes(table) {
		const buildIndexes = (columns) => {
			const indexes = makeObjectMap();
			for (let i = 0; i < columns.length; i++) indexes[columns[i].id] = i;
			return indexes;
		};
		return {
			all: buildIndexes(table_getPinnedVisibleLeafColumns(table)),
			center: buildIndexes(table_getPinnedVisibleLeafColumns(table, "center")),
			start: buildIndexes(table_getPinnedVisibleLeafColumns(table, "start")),
			end: buildIndexes(table_getPinnedVisibleLeafColumns(table, "end"))
		};
	}
	/**
	* Finds this column's index within a visible pinning region.
	*
	* Pass `'start'`, `'center'`, or `'end'` to search that region; omit the
	* position to search the full visible leaf column list.
	*
	* @example
	* ```ts
	* const index = column_getIndex(column, 'center')
	* ```
	*/
	function column_getIndex(column, position) {
		return callMemoOrStaticFn(column.table, "getColumnIndexes", table_getColumnIndexes)[position === "start" ? "start" : position === "end" ? "end" : position === "center" ? "center" : "all"][column.id] ?? -1;
	}
	/**
	* Checks whether this column is the first visible column in a pinning region.
	*
	* The same `position` semantics as `column_getIndex` apply.
	*
	* @example
	* ```ts
	* const isFirst = column_getIsFirstColumn(column, 'start')
	* ```
	*/
	function column_getIsFirstColumn(column, position) {
		return table_getPinnedVisibleLeafColumns(column.table, position)[0]?.id === column.id;
	}
	/**
	* Checks whether this column is the last visible column in a pinning region.
	*
	* The same `position` semantics as `column_getIndex` apply.
	*
	* @example
	* ```ts
	* const isLast = column_getIsLastColumn(column, 'end')
	* ```
	*/
	function column_getIsLastColumn(column, position) {
		const columns = table_getPinnedVisibleLeafColumns(column.table, position);
		return columns[columns.length - 1]?.id === column.id;
	}
	/**
	* Routes a column order updater through the table's column-order change handler.
	*
	* The updater may be a next ordered id array or a function of the previous
	* array, matching the instance `table.setColumnOrder` behavior.
	*
	* @example
	* ```ts
	* table_setColumnOrder(table, ['firstName', 'lastName', 'age'])
	* ```
	*/
	function table_setColumnOrder(table, updater) {
		table.options.onColumnOrderChange?.(updater);
	}
	/**
	* Resets `columnOrder` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.columnOrder` when it
	* exists. Passing `true` ignores initial state and resets to `[]`.
	*
	* @example
	* ```ts
	* table_resetColumnOrder(table)
	* table_resetColumnOrder(table, true)
	* ```
	*/
	function table_resetColumnOrder(table, defaultState) {
		table_setColumnOrder(table, defaultState ? [] : cloneState(table.initialState.columnOrder ?? []));
	}
	/**
	* Creates the ordering function used to arrange leaf columns.
	*
	* The returned function applies `state.columnOrder`, preserves unspecified
	* columns in their original order, then delegates to grouping rules.
	*
	* @example
	* ```ts
	* const orderColumnsForTable = table_getOrderColumnsFn(table)
	* ```
	*/
	function table_getOrderColumnsFn(table) {
		const columnOrder = table.atoms.columnOrder?.get();
		return (columns) => {
			let orderedColumns = [];
			if (!columnOrder?.length) orderedColumns = columns;
			else {
				const remaining = /* @__PURE__ */ new Map();
				for (let i = 0; i < columns.length; i++) {
					const column = columns[i];
					remaining.set(column.id, column);
				}
				for (let i = 0; i < columnOrder.length; i++) {
					const id = columnOrder[i];
					const column = remaining.get(id);
					if (column) {
						orderedColumns.push(column);
						remaining.delete(id);
					}
				}
				for (let i = 0; i < columns.length; i++) {
					const column = columns[i];
					if (remaining.has(column.id)) orderedColumns.push(column);
				}
			}
			return orderColumns(table, orderedColumns);
		};
	}
	/**
	* Applies grouped-column placement rules to an already ordered leaf-column list.
	*
	* `groupedColumnMode: 'remove'` drops grouped columns from the list.
	* `groupedColumnMode: 'reorder'` moves grouped columns to the front in grouping
	* state order.
	*
	* @example
	* ```ts
	* const orderedColumns = orderColumns(table, leafColumns)
	* ```
	*/
	function orderColumns(table, leafColumns) {
		const grouping = table.atoms.grouping?.get() ?? [];
		const { groupedColumnMode } = table.options;
		if (!grouping.length || !groupedColumnMode) return leafColumns;
		const nonGroupingColumns = leafColumns.filter((col) => !grouping.includes(col.id));
		if (groupedColumnMode === "remove") return nonGroupingColumns;
		const leafColumnsById = /* @__PURE__ */ new Map();
		for (let i = 0; i < leafColumns.length; i++) {
			const col = leafColumns[i];
			leafColumnsById.set(col.id, col);
		}
		const groupingColumns = [];
		for (let i = 0; i < grouping.length; i++) {
			const col = leafColumnsById.get(grouping[i]);
			if (col) groupingColumns.push(col);
		}
		return [...groupingColumns, ...nonGroupingColumns];
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/columns/coreColumnsFeature.utils.js
	/**
	* Flattens this column and every descendant column into a single array.
	*
	* Group columns appear before their child columns, which matches the normalized
	* column hierarchy produced during table construction.
	*
	* @example
	* ```ts
	* const flatColumns = column_getFlatColumns(column)
	* ```
	*/
	function column_getFlatColumns(column) {
		return [column, ...column.columns.flatMap((col) => col.getFlatColumns())];
	}
	/**
	* Collects the terminal leaf columns below this column.
	*
	* Group columns return their ordered descendants. Non-group columns return an
	* array containing only the column itself.
	*
	* @example
	* ```ts
	* const leafColumns = column_getLeafColumns(column)
	* ```
	*/
	function column_getLeafColumns(column) {
		if (column.columns.length) {
			const leafColumns = column.columns.flatMap((col) => col.getLeafColumns());
			return callMemoOrStaticFn(column.table, "getOrderColumns", table_getOrderColumnsFn)(leafColumns);
		}
		return [column];
	}
	/**
	* Merges built-in, feature, and user default column definitions.
	*
	* Built-in defaults provide a header and fallback cell renderer, feature
	* defaults can add feature-specific column options, and
	* `options.defaultColumn` wins last.
	*
	* @example
	* ```ts
	* const defaultColumn = table_getDefaultColumnDef(table)
	* ```
	*/
	function table_getDefaultColumnDef(table) {
		return {
			header: (props) => {
				const resolvedColumnDef = props.header.column.columnDef;
				if (resolvedColumnDef.accessorKey) return resolvedColumnDef.accessorKey;
				if (resolvedColumnDef.accessorFn) return resolvedColumnDef.id;
				return null;
			},
			cell: (props) => props.renderValue()?.toString?.() ?? null,
			...Object.values(table._features).reduce((obj, feature) => {
				return Object.assign(obj, feature.getDefaultColumnDef?.());
			}, {}),
			...table.options.defaultColumn
		};
	}
	function constructColumns(table, columnDefs, parent, depth = 0) {
		const columns = new Array(columnDefs.length);
		for (let i = 0; i < columnDefs.length; i++) {
			if (!(i in columnDefs)) continue;
			const columnDef = columnDefs[i];
			const column = constructColumn(table, columnDef, depth, parent);
			const groupingColumnDef = columnDef;
			column.columns = groupingColumnDef.columns ? constructColumns(table, groupingColumnDef.columns, column, depth + 1) : [];
			columns[i] = column;
		}
		return columns;
	}
	/**
	* Normalizes `options.columns` into the table's nested column tree.
	*
	* Each column definition is constructed with its parent and depth, and group
	* column children are recursively constructed.
	*
	* @example
	* ```ts
	* const columns = table_getAllColumns(table)
	* ```
	*/
	function table_getAllColumns(table) {
		return constructColumns(table, table.options.columns);
	}
	/**
	* Flattens every table column, including group columns and leaf columns.
	*
	* Use this when parent/group columns must be included in addition to data leaf
	* columns.
	*
	* @example
	* ```ts
	* const flatColumns = table_getAllFlatColumns(table)
	* ```
	*/
	function table_getAllFlatColumns(table) {
		return table.getAllColumns().flatMap((column) => column.getFlatColumns());
	}
	/**
	* Builds an id lookup for every flat column in the table.
	*
	* Group columns and leaf columns are included. Later columns with the same id
	* replace earlier entries.
	*
	* @example
	* ```ts
	* const columnsById = table_getAllFlatColumnsById(table)
	* ```
	*/
	function table_getAllFlatColumnsById(table) {
		const result = makeObjectMap();
		const flatColumns = table.getAllFlatColumns();
		for (let i = 0; i < flatColumns.length; i++) {
			const column = flatColumns[i];
			result[column.id] = column;
		}
		return result;
	}
	/**
	* Collects all terminal leaf columns in their current table order.
	*
	* Column ordering features can reorder the collected leaves before the result
	* is returned.
	*
	* @example
	* ```ts
	* const leafColumns = table_getAllLeafColumns(table)
	* ```
	*/
	function table_getAllLeafColumns(table) {
		const leafColumns = table.getAllColumns().flatMap((c) => c.getLeafColumns());
		return callMemoOrStaticFn(table, "getOrderColumns", table_getOrderColumnsFn)(leafColumns);
	}
	/**
	* Builds an id lookup for terminal leaf columns only.
	*
	* Parent/group columns are excluded, making this lookup appropriate for row
	* cells and feature state keyed by data columns.
	*
	* @example
	* ```ts
	* const leavesById = table_getAllLeafColumnsById(table)
	* ```
	*/
	function table_getAllLeafColumnsById(table) {
		const result = makeObjectMap();
		const leafColumns = table.getAllLeafColumns();
		for (let i = 0; i < leafColumns.length; i++) {
			const column = leafColumns[i];
			result[column.id] = column;
		}
		return result;
	}
	/**
	* Looks up a column by id from the flat column map.
	*
	* The lookup can return group columns or leaf columns. In development, a
	* missing id logs a warning to help catch stale column references.
	*
	* @example
	* ```ts
	* const column = table_getColumn(table, 'firstName')
	* ```
	*/
	function table_getColumn(table, columnId) {
		return table.getAllFlatColumnsById()[columnId];
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/columns/coreColumnsFeature.js
	/**
	* Core feature that builds the column tree and exposes table/column APIs.
	*/
	const coreColumnsFeature = {
		assignColumnPrototype: (prototype, table) => {
			assignPrototypeAPIs("coreColumnsFeature", prototype, table, {
				column_getFlatColumns: {
					fn: (column) => column_getFlatColumns(column),
					memoDeps: (column) => [column.table.options.columns]
				},
				column_getLeafColumns: {
					fn: (column) => column_getLeafColumns(column),
					memoDeps: (column) => [
						column.table.atoms.columnOrder?.get(),
						column.table.atoms.grouping?.get(),
						column.table.options.columns,
						column.table.options.groupedColumnMode
					]
				}
			});
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("coreColumnsFeature", table, {
				table_getDefaultColumnDef: {
					fn: () => table_getDefaultColumnDef(table),
					memoDeps: () => [table.options.defaultColumn]
				},
				table_getAllColumns: {
					fn: () => table_getAllColumns(table),
					memoDeps: () => [table.options.columns]
				},
				table_getAllFlatColumns: {
					fn: () => table_getAllFlatColumns(table),
					memoDeps: () => [table.options.columns]
				},
				table_getAllFlatColumnsById: {
					fn: () => table_getAllFlatColumnsById(table),
					memoDeps: () => [table.options.columns]
				},
				table_getAllLeafColumns: {
					fn: () => table_getAllLeafColumns(table),
					memoDeps: () => [
						table.atoms.columnOrder?.get(),
						table.atoms.grouping?.get(),
						table.options.columns,
						table.options.groupedColumnMode
					]
				},
				table_getAllLeafColumnsById: {
					fn: () => table_getAllLeafColumnsById(table),
					memoDeps: () => [table.getAllLeafColumns()]
				},
				table_getColumn: { fn: (columnId) => table_getColumn(table, columnId) }
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/headers/coreHeadersFeature.utils.js
	function collectLeafHeaders(header, leafHeaders) {
		for (let i = 0; i < header.subHeaders.length; i++) collectLeafHeaders(header.subHeaders[i], leafHeaders);
		leafHeaders.push(header);
	}
	/**
	* Walks a header tree and collects all descendant leaf headers.
	*
	* The header itself is included after its descendants, matching the recursive
	* shape used by nested header groups.
	*
	* @example
	* ```ts
	* const leafHeaders = header_getLeafHeaders(header)
	* ```
	*/
	function header_getLeafHeaders(header) {
		const leafHeaders = [];
		collectLeafHeaders(header, leafHeaders);
		return leafHeaders;
	}
	/**
	* Builds the render context passed to a column's `header` or `footer` template.
	*
	* The context contains the header, its column, and the owning table instance.
	*
	* @example
	* ```ts
	* const context = header_getContext(header)
	* ```
	*/
	function header_getContext(header) {
		return {
			column: header.column,
			header,
			table: header.column.table
		};
	}
	/**
	* Builds visible header groups for the current column tree.
	*
	* Column visibility and pinning are applied before groups are built. When no
	* columns are pinned, the fast path skips pin partitioning.
	*
	* @example
	* ```ts
	* const headerGroups = table_getHeaderGroups(table)
	* ```
	*/
	function table_getHeaderGroups(table) {
		const { start, end } = table.atoms.columnPinning?.get() ?? getDefaultColumnPinningState();
		const allColumns = table.getAllColumns();
		const leafColumns = callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns);
		if (!start.length && !end.length) return buildHeaderGroups(allColumns, leafColumns, table);
		const leafColumnsById = table.getAllLeafColumnsById();
		const leftColumns = [];
		for (let i = 0; i < start.length; i++) {
			const column = leafColumnsById[start[i]];
			if (column && callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible)) leftColumns.push(column);
		}
		const rightColumns = [];
		for (let i = 0; i < end.length; i++) {
			const column = leafColumnsById[end[i]];
			if (column && callMemoOrStaticFn(column, "getIsVisible", column_getIsVisible)) rightColumns.push(column);
		}
		const centerColumns = leafColumns.filter((column) => !start.includes(column.id) && !end.includes(column.id));
		return buildHeaderGroups(allColumns, [
			...leftColumns,
			...centerColumns,
			...rightColumns
		], table);
	}
	/**
	* Builds footer groups by reversing the current header groups.
	*
	* Footer rendering uses the same header objects and grouping structure, but
	* renders them from leaf level back toward the root.
	*
	* @example
	* ```ts
	* const footerGroups = table_getFooterGroups(table)
	* ```
	*/
	function table_getFooterGroups(table) {
		return [...table.getHeaderGroups()].reverse();
	}
	/**
	* Flattens every header from every header group into one array.
	*
	* The result includes parent headers and placeholder headers, in header-group
	* order from top to bottom.
	*
	* @example
	* ```ts
	* const flatHeaders = table_getFlatHeaders(table)
	* ```
	*/
	function table_getFlatHeaders(table) {
		const headerGroups = table.getHeaderGroups();
		const result = [];
		for (let i = 0; i < headerGroups.length; i++) {
			const headers = headerGroups[i].headers;
			for (let j = 0; j < headers.length; j++) result.push(headers[j]);
		}
		return result;
	}
	/**
	* Collects only the leaf headers from the current header tree.
	*
	* Parent/group headers are skipped, making the result suitable for rendering
	* one header per visible leaf column.
	*
	* @example
	* ```ts
	* const leafHeaders = table_getLeafHeaders(table)
	* ```
	*/
	function table_getLeafHeaders(table) {
		const topHeaders = table.getHeaderGroups()[0]?.headers ?? [];
		const result = [];
		for (let i = 0; i < topHeaders.length; i++) {
			const leafHeaders = topHeaders[i].getLeafHeaders();
			for (let j = 0; j < leafHeaders.length; j++) result.push(leafHeaders[j]);
		}
		return result;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/headers/coreHeadersFeature.js
	/**
	* Core feature that builds header groups and exposes header context APIs.
	*/
	const coreHeadersFeature = {
		assignHeaderPrototype: (prototype, table) => {
			assignPrototypeAPIs("coreHeadersFeature", prototype, table, {
				header_getLeafHeaders: {
					fn: (header) => header_getLeafHeaders(header),
					memoDeps: (header) => [header.column.table.options.columns]
				},
				header_getContext: {
					fn: (header) => header_getContext(header),
					memoDeps: (header) => [header.column.table.options.columns]
				}
			});
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("coreHeadersFeature", table, {
				table_getHeaderGroups: {
					fn: () => table_getHeaderGroups(table),
					memoDeps: () => [
						table.options.columns,
						table.atoms.columnOrder?.get(),
						table.atoms.grouping?.get(),
						table.atoms.columnPinning?.get(),
						table.atoms.columnVisibility?.get(),
						table.options.groupedColumnMode
					]
				},
				table_getFooterGroups: {
					fn: () => table_getFooterGroups(table),
					memoDeps: () => [table.getHeaderGroups()]
				},
				table_getFlatHeaders: {
					fn: () => table_getFlatHeaders(table),
					memoDeps: () => [table.getHeaderGroups()]
				},
				table_getLeafHeaders: {
					fn: () => table_getLeafHeaders(table),
					memoDeps: () => [table.getHeaderGroups()]
				}
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/rows/constructRow.js
	/**
	* Creates or retrieves the row prototype for a table.
	* The prototype is cached on the table and shared by all row instances.
	*/
	function getRowPrototype(table) {
		if (!table._rowPrototype) {
			table._rowPrototype = { table };
			const features = Object.values(table._features);
			for (let i = 0; i < features.length; i++) features[i].assignRowPrototype?.(table._rowPrototype, table);
		}
		return table._rowPrototype;
	}
	/**
	* Constructs a row instance from normalized table internals.
	*
	* This wires core properties, feature prototype APIs, and instance data used by table rendering and row-model operations.
	*/
	const constructRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
		const rowPrototype = getRowPrototype(table);
		const row = Object.create(rowPrototype);
		row._displayIndexCache = -1;
		row._uniqueValuesCache = makeObjectMap();
		row._valuesCache = makeObjectMap();
		row.depth = depth;
		row.id = id;
		row.index = rowIndex;
		row.original = original;
		row.parentId = parentId;
		row.subRows = subRows ?? [];
		const initFns = table._rowInstanceInitFns;
		for (let i = 0; i < initFns.length; i++) initFns[i](row);
		return row;
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/row-sorting/sortFns.js
	/**
	* Regular expression used to split mixed text and numeric chunks.
	*
	* The alphanumeric sort functions use these chunks for natural sorting of
	* strings like `item2` before `item10`.
	*/
	const reSplitAlphaNumeric = /([0-9]+)/gm;
	/**
	* Builds a `SortFn` from a value-level comparator plus an optional
	* `resolveDataValue` normalizer.
	*
	* The `sort` comparator receives both rows' data values, each already passed
	* through `resolveDataValue` when one is defined. Keeping normalization in the
	* resolver means a variant of an existing sorting function only has to swap
	* the resolver, not re-implement the comparison.
	*
	* The definition is attached to the returned function, so a variant can be
	* created by spreading a built-in sorting function and overriding what
	* differs:
	*
	* ```ts
	* const stripDiacritics = (value: string) =>
	*   value.normalize('NFD').replace(/\p{Diacritic}/gu, '')
	*
	* const alphanumericIgnoreDiacritics = constructSortFn({
	*   ...sortFn_alphanumeric,
	*   resolveDataValue: (value) =>
	*     stripDiacritics(sortFn_alphanumeric.resolveDataValue!(value)),
	* })
	* ```
	*/
	function constructSortFn(def) {
		const sortFn = Object.assign((rowA, rowB, columnId) => {
			let dataValueA = rowA.getValue(columnId);
			let dataValueB = rowB.getValue(columnId);
			const resolveDataValue = sortFn.resolveDataValue;
			if (resolveDataValue) {
				dataValueA = resolveDataValue(dataValueA);
				dataValueB = resolveDataValue(dataValueB);
			}
			return sortFn.sort(dataValueA, dataValueB, rowA, rowB, columnId);
		}, def);
		return sortFn;
	}
	/**
	* Sorts rows with the built-in alphanumeric strategy.
	*
	* This comparator returns ascending-order results; descending order is applied by the sorting row model.
	*/
	const sortFn_alphanumeric = constructSortFn({
		resolveDataValue: (dataValue) => toString(dataValue).toLowerCase(),
		sort: (dataValueA, dataValueB) => compareAlphanumeric(dataValueA, dataValueB)
	});
	constructSortFn({
		resolveDataValue: (dataValue) => toString(dataValue),
		sort: (dataValueA, dataValueB) => compareAlphanumeric(dataValueA, dataValueB)
	});
	/**
	* Sorts rows with the built-in text strategy.
	*
	* This comparator returns ascending-order results; descending order is applied by the sorting row model.
	*/
	const sortFn_text = constructSortFn({
		resolveDataValue: (dataValue) => toString(dataValue).toLowerCase(),
		sort: (dataValueA, dataValueB) => compareBasic(dataValueA, dataValueB)
	});
	constructSortFn({
		resolveDataValue: (dataValue) => toString(dataValue),
		sort: (dataValueA, dataValueB) => compareBasic(dataValueA, dataValueB)
	});
	/**
	* Sorts rows with the built-in datetime strategy.
	*
	* This comparator returns ascending-order results; descending order is applied by the sorting row model.
	*/
	const sortFn_datetime = constructSortFn({
		resolveDataValue: (dataValue) => toDateSortValue(dataValue),
		sort: (dataValueA, dataValueB) => dataValueA > dataValueB ? 1 : dataValueA < dataValueB ? -1 : 0
	});
	/**
	* Sorts rows with the built-in basic strategy.
	*
	* This comparator returns ascending-order results; descending order is applied by the sorting row model.
	*/
	const sortFn_basic = constructSortFn({ sort: (dataValueA, dataValueB) => compareBasic(dataValueA, dataValueB) });
	function compareBasic(a, b) {
		return a === b ? 0 : a > b ? 1 : -1;
	}
	function toDateSortValue(value) {
		return value instanceof Date ? value.getTime() : value;
	}
	function toString(a) {
		if (typeof a === "number") {
			if (isNaN(a) || a === Infinity || a === -Infinity) return "";
			return String(a);
		}
		if (typeof a === "string") return a;
		return "";
	}
	function compareAlphanumeric(aStr, bStr) {
		let ai = 0;
		let bi = 0;
		const aLen = aStr.length;
		const bLen = bStr.length;
		while (ai < aLen && bi < bLen) {
			const aIsNumeric = isDigit(aStr.charCodeAt(ai));
			const bIsNumeric = isDigit(bStr.charCodeAt(bi));
			const aEnd = findChunkEnd(aStr, ai, aIsNumeric);
			const bEnd = findChunkEnd(bStr, bi, bIsNumeric);
			if (!aIsNumeric && !bIsNumeric) {
				const stringComparison = compareStringChunks(aStr, ai, aEnd, bStr, bi, bEnd);
				if (stringComparison) return stringComparison;
				ai = aEnd;
				bi = bEnd;
				continue;
			}
			if (aIsNumeric !== bIsNumeric) return aIsNumeric ? 1 : -1;
			const numericComparison = compareNumericChunks(aStr, ai, aEnd, bStr, bi, bEnd);
			if (numericComparison) return numericComparison;
			ai = aEnd;
			bi = bEnd;
		}
		return countRemainingChunks(aStr, ai) - countRemainingChunks(bStr, bi);
	}
	function isDigit(charCode) {
		return charCode >= 48 && charCode <= 57;
	}
	function findChunkEnd(str, start, isNumeric) {
		let end = start + 1;
		while (end < str.length && isDigit(str.charCodeAt(end)) === isNumeric) end++;
		return end;
	}
	function compareStringChunks(aStr, aStart, aEnd, bStr, bStart, bEnd) {
		const aLength = aEnd - aStart;
		const bLength = bEnd - bStart;
		const minLength = aLength < bLength ? aLength : bLength;
		for (let i = 0; i < minLength; i++) {
			const aCode = aStr.charCodeAt(aStart + i);
			const bCode = bStr.charCodeAt(bStart + i);
			if (aCode > bCode) return 1;
			if (bCode > aCode) return -1;
		}
		if (aLength > bLength) return 1;
		if (bLength > aLength) return -1;
		return 0;
	}
	function compareNumericChunks(aStr, aStart, aEnd, bStr, bStart, bEnd) {
		let aSignificantStart = aStart;
		while (aSignificantStart < aEnd && aStr.charCodeAt(aSignificantStart) === 48) aSignificantStart++;
		let bSignificantStart = bStart;
		while (bSignificantStart < bEnd && bStr.charCodeAt(bSignificantStart) === 48) bSignificantStart++;
		const aSignificantLength = aEnd - aSignificantStart;
		const bSignificantLength = bEnd - bSignificantStart;
		if (aSignificantLength === 0 && bSignificantLength === 0) return 0;
		if (aSignificantLength <= 15 && bSignificantLength <= 15) {
			const an = parseSmallInt(aStr, aSignificantStart, aEnd);
			const bn = parseSmallInt(bStr, bSignificantStart, bEnd);
			if (an > bn) return 1;
			if (bn > an) return -1;
			return 0;
		}
		const an = parseInt(aStr.slice(aStart, aEnd), 10);
		const bn = parseInt(bStr.slice(bStart, bEnd), 10);
		if (an > bn) return 1;
		if (bn > an) return -1;
		return 0;
	}
	function parseSmallInt(str, start, end) {
		let result = 0;
		for (let i = start; i < end; i++) result = result * 10 + str.charCodeAt(i) - 48;
		return result;
	}
	function countRemainingChunks(str, start) {
		let count = 0;
		let index = start;
		while (index < str.length) {
			count++;
			index = findChunkEnd(str, index, isDigit(str.charCodeAt(index)));
		}
		return count;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/cell-selection/cellSelectionGeometry.js
	function compareBounds(a, b) {
		return a.minRowIndex - b.minRowIndex || a.minColumnIndex - b.minColumnIndex || a.maxRowIndex - b.maxRowIndex || a.maxColumnIndex - b.maxColumnIndex;
	}
	function intersectCellSelectionBounds(a, b) {
		const intersection = {
			minRowIndex: Math.max(a.minRowIndex, b.minRowIndex),
			maxRowIndex: Math.min(a.maxRowIndex, b.maxRowIndex),
			minColumnIndex: Math.max(a.minColumnIndex, b.minColumnIndex),
			maxColumnIndex: Math.min(a.maxColumnIndex, b.maxColumnIndex)
		};
		return intersection.minRowIndex <= intersection.maxRowIndex && intersection.minColumnIndex <= intersection.maxColumnIndex ? intersection : void 0;
	}
	function subtractCellSelectionBounds(source, excluded) {
		const intersection = intersectCellSelectionBounds(source, excluded);
		if (!intersection) return [source];
		const result = [];
		if (source.minRowIndex < intersection.minRowIndex) result.push({
			...source,
			maxRowIndex: intersection.minRowIndex - 1
		});
		if (intersection.maxRowIndex < source.maxRowIndex) result.push({
			...source,
			minRowIndex: intersection.maxRowIndex + 1
		});
		if (source.minColumnIndex < intersection.minColumnIndex) result.push({
			minRowIndex: intersection.minRowIndex,
			maxRowIndex: intersection.maxRowIndex,
			minColumnIndex: source.minColumnIndex,
			maxColumnIndex: intersection.minColumnIndex - 1
		});
		if (intersection.maxColumnIndex < source.maxColumnIndex) result.push({
			minRowIndex: intersection.minRowIndex,
			maxRowIndex: intersection.maxRowIndex,
			minColumnIndex: intersection.maxColumnIndex + 1,
			maxColumnIndex: source.maxColumnIndex
		});
		return result;
	}
	function mergePair(a, b) {
		if (a.minRowIndex === b.minRowIndex && a.maxRowIndex === b.maxRowIndex && (a.maxColumnIndex + 1 === b.minColumnIndex || b.maxColumnIndex + 1 === a.minColumnIndex)) return {
			minRowIndex: a.minRowIndex,
			maxRowIndex: a.maxRowIndex,
			minColumnIndex: Math.min(a.minColumnIndex, b.minColumnIndex),
			maxColumnIndex: Math.max(a.maxColumnIndex, b.maxColumnIndex)
		};
		if (a.minColumnIndex === b.minColumnIndex && a.maxColumnIndex === b.maxColumnIndex && (a.maxRowIndex + 1 === b.minRowIndex || b.maxRowIndex + 1 === a.minRowIndex)) return {
			minRowIndex: Math.min(a.minRowIndex, b.minRowIndex),
			maxRowIndex: Math.max(a.maxRowIndex, b.maxRowIndex),
			minColumnIndex: a.minColumnIndex,
			maxColumnIndex: a.maxColumnIndex
		};
	}
	function mergeAdjacentCellSelectionBounds(input) {
		const result = input.slice();
		for (let i = 0; i < result.length; i++) for (let j = i + 1; j < result.length; j++) {
			const merged = mergePair(result[i], result[j]);
			if (!merged) continue;
			result.splice(j, 1);
			result[i] = merged;
			i = -1;
			break;
		}
		return result.sort(compareBounds);
	}
	function addCellSelectionBounds(selected, included) {
		let fragments = [included];
		for (const existing of selected) {
			fragments = fragments.flatMap((fragment) => subtractCellSelectionBounds(fragment, existing));
			if (!fragments.length) return selected.slice();
		}
		return mergeAdjacentCellSelectionBounds([...selected, ...fragments]);
	}
	/**
	* Grows a rectangle until it fully contains every merged-cell rectangle it
	* touches.
	*
	* Merged cells make plain rectangles insufficient: a selection that clips part
	* of a merge must cover the whole merge, and covering it can bring the
	* rectangle into contact with further merges, so the expansion runs to a fixed
	* point. The loop is bounded by the merge count, since each pass that changes
	* the rectangle consumes at least one merge.
	*/
	function expandCellSelectionBounds(bounds, merges) {
		let expanded = bounds;
		let changed = true;
		while (changed) {
			changed = false;
			for (const merge of merges) {
				if (!intersectCellSelectionBounds(expanded, merge)) continue;
				const union = {
					minRowIndex: Math.min(expanded.minRowIndex, merge.minRowIndex),
					maxRowIndex: Math.max(expanded.maxRowIndex, merge.maxRowIndex),
					minColumnIndex: Math.min(expanded.minColumnIndex, merge.minColumnIndex),
					maxColumnIndex: Math.max(expanded.maxColumnIndex, merge.maxColumnIndex)
				};
				if (union.minRowIndex !== expanded.minRowIndex || union.maxRowIndex !== expanded.maxRowIndex || union.minColumnIndex !== expanded.minColumnIndex || union.maxColumnIndex !== expanded.maxColumnIndex) {
					expanded = union;
					changed = true;
				}
			}
		}
		return expanded;
	}
	function applyCellSelectionBoundsOperations(operations) {
		let selected = [];
		for (const operation of operations) {
			const bounds = {
				minRowIndex: operation.minRowIndex,
				maxRowIndex: operation.maxRowIndex,
				minColumnIndex: operation.minColumnIndex,
				maxColumnIndex: operation.maxColumnIndex
			};
			if (operation.operation === "exclude") selected = mergeAdjacentCellSelectionBounds(selected.flatMap((bound) => subtractCellSelectionBounds(bound, bounds)));
			else selected = addCellSelectionBounds(selected, bounds);
		}
		return selected.sort(compareBounds);
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/cell-selection/cellSelectionFeature.utils.js
	/**
	* Creates the default cell selection state.
	*
	* The feature default is an empty selection. Reset APIs use this value when
	* `defaultState` is `true`.
	*
	* @example
	* ```ts
	* const selection = getDefaultCellSelectionState()
	* ```
	*/
	function getDefaultCellSelectionState() {
		return [];
	}
	/**
	* Routes a cell selection updater through the table's selection change handler.
	*
	* @example
	* ```ts
	* table_setCellSelection(table, (old) => old.slice(0, -1))
	* ```
	*/
	function table_setCellSelection(table, updater) {
		table.options.onCellSelectionChange?.(updater);
	}
	/**
	* Resets `cellSelection` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.cellSelection` when it
	* exists. Passing `true` ignores initial state and resets to an empty selection.
	*
	* @example
	* ```ts
	* table_resetCellSelection(table, true)
	* ```
	*/
	function table_resetCellSelection(table, defaultState) {
		table_setCellSelection(table, defaultState ? getDefaultCellSelectionState() : cloneState(table.initialState.cellSelection) ?? getDefaultCellSelectionState());
	}
	/**
	* Schedules a cell selection reset after `data` changes.
	*
	* Ranges are stored as row and column ids, so without this a data swap would
	* leave a selection pointing at rows that no longer exist, or silently
	* re-select cells whenever new data reuses ids. The reset runs when
	* `autoResetAll` or `autoResetCellSelection` allows it, defaulting to on.
	*
	* Resetting to `initialState.cellSelection` rather than to empty means the
	* first row-model computation is a no-op, matching `table_autoResetExpanded`.
	*
	* @example
	* ```ts
	* table_autoResetCellSelection(table)
	* ```
	*/
	function table_autoResetCellSelection(table) {
		if (!table.atoms.cellSelection) return;
		if (table.options.autoResetAll ?? table.options.autoResetCellSelection ?? true) table._reactivity.schedule(() => table_resetCellSelection(table));
	}
	/**
	* Returns the visible leaf columns in the order their cells actually render.
	*
	* This is deliberately not `getVisibleLeafColumns()`, which is
	* visibility-filtered but *not* pinning-reordered, and not `column_getIndex()`,
	* which indexes that same unpinned list. Cells render start-pinned first, then
	* center, then end (see `row_getVisibleCells`), so indexing a selection in the
	* unpinned order would make a dragged rectangle contiguous in index space but
	* visually scattered the moment a column is pinned.
	*
	* The pinning read is inlined rather than delegated to the column pinning
	* utils so this stays correct when that feature is absent, and so the ordering
	* provably matches `row_getVisibleCells`.
	*/
	function getDisplayOrderedColumns(table) {
		const columns = callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns);
		const pinning = table.atoms.columnPinning?.get();
		if (!pinning || !pinning.start.length && !pinning.end.length) return columns;
		const byId = makeObjectMap();
		for (let i = 0; i < columns.length; i++) byId[columns[i].id] = columns[i];
		const start = [];
		for (let i = 0; i < pinning.start.length; i++) {
			const column = byId[pinning.start[i]];
			if (column) start.push(column);
		}
		const end = [];
		for (let i = 0; i < pinning.end.length; i++) {
			const column = byId[pinning.end[i]];
			if (column) end.push(column);
		}
		const center = [];
		for (let i = 0; i < columns.length; i++) {
			const column = columns[i];
			if (!pinning.start.includes(column.id) && !pinning.end.includes(column.id)) center.push(column);
		}
		return [
			...start,
			...center,
			...end
		];
	}
	/**
	* Builds a column id to render-order index map.
	*
	* Registered by this feature so the lookup stays memoized even when
	* `columnOrderingFeature` is absent, since that feature's `getColumnIndexes`
	* static rebuilds all four maps on every call, which would make per-cell reads
	* O(columns).
	*
	* @example
	* ```ts
	* const index = table_getCellSelectionColumnIndexes(table)[columnId]
	* ```
	*/
	function table_getCellSelectionColumnIndexes(table) {
		const columns = getDisplayOrderedColumns(table);
		const indexes = makeObjectMap();
		for (let i = 0; i < columns.length; i++) indexes[columns[i].id] = i;
		return indexes;
	}
	const EMPTY_MERGE_BOUNDS = [];
	function probeCellSpanIndex(table) {
		return table.getCellSpanIndex?.();
	}
	/**
	* Resolves the merged-cell rectangles of the rendered rows into selection's
	* own index space.
	*
	* The span index positions rows by their paginated render order while
	* selection positions them by pre-paginated display order, so each merge is
	* mapped through `row.getDisplayIndex()`. A merge whose rows do not map to a
	* contiguous display range is skipped defensively; it then behaves like
	* unmerged cells instead of corrupting the geometry.
	*
	* Returns an empty array when `cellSpanningFeature` is not registered, which
	* keeps every selection code path identical to the span-unaware behavior.
	*
	* @example
	* ```ts
	* const merges = table_getCellSelectionMergeBounds(table)
	* ```
	*/
	function table_getCellSelectionMergeBounds(table) {
		const spanIndex = probeCellSpanIndex(table);
		if (!spanIndex) return EMPTY_MERGE_BOUNDS;
		const columnIndexes = callMemoOrStaticFn(table, "getCellSelectionColumnIndexes", table_getCellSelectionColumnIndexes);
		const merges = [];
		for (const columnId in spanIndex.rowSpans) {
			const columnIndex = columnIndexes[columnId];
			if (columnIndex === void 0) continue;
			const spans = spanIndex.rowSpans[columnId];
			const spanColumnIndex = spanIndex.columnIndexes[columnId];
			for (let r = 0; r < spans.length; r++) {
				const span = spans[r];
				if (span <= 1) continue;
				const startRow = spanIndex.rows[r].getDisplayIndex();
				const endRow = spanIndex.rows[r + span - 1].getDisplayIndex();
				if (startRow < 0 || endRow - startRow !== span - 1) continue;
				const colSpan = spanColumnIndex === void 0 ? 1 : Math.max(spanIndex.colSpans[r]?.[spanColumnIndex] ?? 1, 1);
				merges.push({
					minRowIndex: startRow,
					maxRowIndex: endRow,
					minColumnIndex: columnIndex,
					maxColumnIndex: columnIndex + colSpan - 1
				});
			}
		}
		if (spanIndex.colSpans.length) {
			const columnIdBySpanIndex = [];
			for (const columnId in spanIndex.columnIndexes) columnIdBySpanIndex[spanIndex.columnIndexes[columnId]] = columnId;
			for (let r = 0; r < spanIndex.colSpans.length; r++) {
				const rowColSpans = spanIndex.colSpans[r];
				if (!rowColSpans) continue;
				const displayRow = spanIndex.rows[r]?.getDisplayIndex() ?? -1;
				if (displayRow < 0) continue;
				for (let c = 0; c < rowColSpans.length; c++) {
					const span = rowColSpans[c];
					if (span <= 1) continue;
					const columnId = columnIdBySpanIndex[c];
					if (columnId === void 0) continue;
					const vertical = spanIndex.rowSpans[columnId];
					if (vertical && vertical[r] !== 1) continue;
					const columnIndex = columnIndexes[columnId];
					if (columnIndex === void 0) continue;
					merges.push({
						minRowIndex: displayRow,
						maxRowIndex: displayRow,
						minColumnIndex: columnIndex,
						maxColumnIndex: columnIndex + span - 1
					});
				}
			}
		}
		return merges;
	}
	function findMergeBoundsAt(merges, rowIndex, columnIndex) {
		for (let i = 0; i < merges.length; i++) {
			const merge = merges[i];
			if (rowIndex >= merge.minRowIndex && rowIndex <= merge.maxRowIndex && columnIndex >= merge.minColumnIndex && columnIndex <= merge.maxColumnIndex) return merge;
		}
	}
	/**
	* Resolves a row id to its display-order index, or `-1` when it no longer
	* identifies a row in the current order.
	*
	* Callers must have already called `table.getRowsInDisplayOrder()`, which is
	* what populates the display index cache each row reads.
	*/
	function resolveRowIndex(table, rows, rowId) {
		const row = table.getPrePaginatedRowModel().rowsById[rowId] ?? table.getCoreRowModel().rowsById[rowId];
		if (!row) return -1;
		const index = row.getDisplayIndex();
		if (index < 0 || index >= rows.length || rows[index]?.id !== rowId) return -1;
		return index;
	}
	/**
	* Resolves ordered range operations into disjoint, positive display-order
	* index rectangles.
	*
	* This is the single cache every per-cell read goes through, so index lookups
	* happen once per invalidation rather than once per cell. A range whose corners
	* no longer resolve, for example because its anchor row was filtered out, is
	* omitted rather than clamped, so it contributes nothing while remaining in
	* state and returns intact when the filter clears.
	*
	* @example
	* ```ts
	* const bounds = table_getCellSelectionBounds(table)
	* ```
	*/
	function table_getCellSelectionBounds(table) {
		const ranges = table.atoms.cellSelection?.get();
		if (!ranges?.length) return [];
		const rows = table.getRowsInDisplayOrder();
		const columnIndexes = callMemoOrStaticFn(table, "getCellSelectionColumnIndexes", table_getCellSelectionColumnIndexes);
		const operations = [];
		for (let i = 0; i < ranges.length; i++) {
			const range = ranges[i];
			const anchorRowIndex = resolveRowIndex(table, rows, range.anchorRowId);
			const focusRowIndex = resolveRowIndex(table, rows, range.focusRowId);
			const anchorColumnIndex = columnIndexes[range.anchorColumnId] ?? -1;
			const focusColumnIndex = columnIndexes[range.focusColumnId] ?? -1;
			if (anchorRowIndex < 0 || focusRowIndex < 0 || anchorColumnIndex < 0 || focusColumnIndex < 0) continue;
			operations.push({
				minRowIndex: Math.min(anchorRowIndex, focusRowIndex),
				maxRowIndex: Math.max(anchorRowIndex, focusRowIndex),
				minColumnIndex: Math.min(anchorColumnIndex, focusColumnIndex),
				maxColumnIndex: Math.max(anchorColumnIndex, focusColumnIndex),
				operation: range.operation ?? "include"
			});
		}
		const merges = callMemoOrStaticFn(table, "getCellSelectionMergeBounds", table_getCellSelectionMergeBounds);
		if (merges.length) for (let i = 0; i < operations.length; i++) {
			const operation = operations[i];
			const expanded = expandCellSelectionBounds(operation, merges);
			operation.minRowIndex = expanded.minRowIndex;
			operation.maxRowIndex = expanded.maxRowIndex;
			operation.minColumnIndex = expanded.minColumnIndex;
			operation.maxColumnIndex = expanded.maxColumnIndex;
		}
		return applyCellSelectionBoundsOperations(operations);
	}
	/**
	* Tests whether an index pair falls inside any resolved rectangle.
	*/
	function isWithinBounds(bounds, rowIndex, columnIndex) {
		for (let i = 0; i < bounds.length; i++) {
			const bound = bounds[i];
			if (rowIndex >= bound.minRowIndex && rowIndex <= bound.maxRowIndex && columnIndex >= bound.minColumnIndex && columnIndex <= bound.maxColumnIndex) return true;
		}
		return false;
	}
	/**
	* Checks whether this cell can currently be selected.
	*
	* A column def opting out with `enableCellSelection: false` wins over the table
	* option, matching how the other per-column enable flags resolve.
	*
	* @example
	* ```ts
	* const canSelect = cell_getCanSelect(cell)
	* ```
	*/
	function cell_getCanSelect(cell) {
		if (cell.column.columnDef.enableCellSelection === false) return false;
		const enabled = cell.table.options.enableCellSelection;
		if (typeof enabled === "function") return enabled(cell);
		return enabled ?? true;
	}
	/**
	* Resolves a cell to the coordinates every selection read needs.
	*
	* Shared by `getIsSelected` and `getSelectionEdges` so a render pass resolves
	* each cell once. Resolving in both meant every cell paid for the bounds memo,
	* the display index, and the column index map twice over.
	*
	* Returns `null` when the cell cannot participate in a selection at all.
	*/
	function resolveCellPosition(cell) {
		const table = cell.table;
		const bounds = callMemoOrStaticFn(table, "getCellSelectionBounds", table_getCellSelectionBounds);
		if (!bounds.length) return null;
		if (!callMemoOrStaticFn(cell, "getCanSelect", cell_getCanSelect)) return null;
		const rowIndex = cell.row.getDisplayIndex();
		if (rowIndex < 0) return null;
		const columnIndex = callMemoOrStaticFn(table, "getCellSelectionColumnIndexes", table_getCellSelectionColumnIndexes)[cell.column.id] ?? -1;
		if (columnIndex < 0) return null;
		return {
			bounds,
			rowIndex,
			columnIndex
		};
	}
	/**
	* Checks whether this cell falls inside the final positive selection.
	*
	* Deliberately not memoized. Registering this through `assignPrototypeAPIs`
	* with `memoDeps` would allocate a memo closure and dependency array per cell,
	* which costs more than the handful of integer comparisons it would save.
	*
	* @example
	* ```ts
	* const isSelected = cell_getIsSelected(cell)
	* ```
	*/
	function cell_getIsSelected(cell) {
		const position = resolveCellPosition(cell);
		if (!position) return false;
		return isWithinBounds(position.bounds, position.rowIndex, position.columnIndex);
	}
	/**
	* Checks whether this cell is the active cell.
	*
	* @example
	* ```ts
	* const isFocused = cell_getIsFocused(cell)
	* ```
	*/
	function cell_getIsFocused(cell) {
		const ranges = cell.table.atoms.cellSelection?.get();
		const active = ranges?.[ranges.length - 1];
		if (!active) return false;
		return active.anchorRowId === cell.row.id && active.anchorColumnId === cell.column.id;
	}
	/**
	* Returns `0` for the focused cell and `-1` otherwise, for roving tabindex.
	*
	* @example
	* ```ts
	* const tabIndex = cell_getTabIndex(cell)
	* ```
	*/
	function cell_getTabIndex(cell) {
		return callMemoOrStaticFn(cell, "getIsFocused", cell_getIsFocused) ? 0 : -1;
	}
	/**
	* Returns which sides of this cell sit on the outer boundary of the selection.
	*
	* A side is an edge when the neighbouring cell in that direction is not itself
	* covered by a range, which is what lets a consumer draw a single outline
	* around an arbitrary union of rectangles.
	*
	* @example
	* ```ts
	* const { top, right, bottom, left } = cell_getSelectionEdges(cell)
	* ```
	*/
	function cell_getSelectionEdges(cell) {
		const none = {
			top: false,
			right: false,
			bottom: false,
			left: false
		};
		const position = resolveCellPosition(cell);
		if (!position) return none;
		const { bounds, rowIndex, columnIndex } = position;
		if (!isWithinBounds(bounds, rowIndex, columnIndex)) return none;
		const merges = callMemoOrStaticFn(cell.table, "getCellSelectionMergeBounds", table_getCellSelectionMergeBounds);
		const merge = merges.length ? findMergeBoundsAt(merges, rowIndex, columnIndex) : void 0;
		if (!merge) return {
			top: !isWithinBounds(bounds, rowIndex - 1, columnIndex),
			right: !isWithinBounds(bounds, rowIndex, columnIndex + 1),
			bottom: !isWithinBounds(bounds, rowIndex + 1, columnIndex),
			left: !isWithinBounds(bounds, rowIndex, columnIndex - 1)
		};
		return {
			top: isStripOutside(bounds, merge.minRowIndex - 1, merge.minColumnIndex, merge.maxColumnIndex, true),
			right: isStripOutside(bounds, merge.maxColumnIndex + 1, merge.minRowIndex, merge.maxRowIndex, false),
			bottom: isStripOutside(bounds, merge.maxRowIndex + 1, merge.minColumnIndex, merge.maxColumnIndex, true),
			left: isStripOutside(bounds, merge.minColumnIndex - 1, merge.minRowIndex, merge.maxRowIndex, false)
		};
	}
	function isStripOutside(bounds, fixedIndex, from, to, fixedIsRow) {
		for (let i = from; i <= to; i++) if (!isWithinBounds(bounds, fixedIsRow ? fixedIndex : i, fixedIsRow ? i : fixedIndex)) return true;
		return false;
	}
	/**
	* Returns the active cell, i.e. the anchor of the most recent operation.
	*
	* Focus is derived rather than stored: in spreadsheet semantics, dragging from
	* A1 to C5 leaves the active cell at A1, so the active range's anchor already
	* is the active cell.
	*
	* @example
	* ```ts
	* const cell = table_getFocusedCell(table)
	* ```
	*/
	function table_getFocusedCell(table) {
		const ranges = table.atoms.cellSelection?.get();
		const active = ranges?.[ranges.length - 1];
		if (!active) return void 0;
		return (table.getPrePaginatedRowModel().rowsById[active.anchorRowId] ?? table.getCoreRowModel().rowsById[active.anchorRowId])?.getAllCellsByColumnId()[active.anchorColumnId];
	}
	/**
	* Collapses the selection to a single cell at the given coordinates.
	*
	* @example
	* ```ts
	* table_setFocusedCell(table, '3', 'firstName')
	* ```
	*/
	function table_setFocusedCell(table, rowId, columnId) {
		table_selectCellRange(table, {
			anchorRowId: rowId,
			anchorColumnId: columnId,
			focusRowId: rowId,
			focusColumnId: columnId
		});
	}
	/**
	* Selects a rectangle using replace, include, or exclude semantics.
	*
	* @example
	* ```ts
	* table_selectCellRange(table, range, { mode: 'exclude' })
	* ```
	*/
	function table_selectCellRange(table, range, opts) {
		const mode = opts?.mode ?? (opts?.additive ? "include" : "replace");
		const { operation: _operation, ...coordinates } = range;
		const nextRange = mode === "exclude" ? {
			...coordinates,
			operation: "exclude"
		} : coordinates;
		table_setCellSelection(table, (old) => mode === "replace" ? [nextRange] : [...old, nextRange]);
	}
	/**
	* Returns the visible leaf columns that permit selection, in display order.
	*
	* A column-level opt-out is enough to exclude a column here; a per-cell
	* predicate is not consulted, since navigation and select-all work in column
	* space rather than cell space.
	*/
	function getSelectableColumns(table) {
		const columns = getDisplayOrderedColumns(table);
		if (table.options.enableCellSelection === false) return [];
		return columns.filter((column) => column.columnDef.enableCellSelection !== false);
	}
	/**
	* Selects every selectable cell in the table as one range.
	*
	* @example
	* ```ts
	* table_selectAllCells(table)
	* ```
	*/
	function table_selectAllCells(table) {
		const rows = table.getRowsInDisplayOrder();
		const columns = getSelectableColumns(table);
		if (!rows.length || !columns.length) return;
		table_selectCellRange(table, {
			anchorRowId: rows[0].id,
			anchorColumnId: columns[0].id,
			focusRowId: rows[rows.length - 1].id,
			focusColumnId: columns[columns.length - 1].id
		});
	}
	/**
	* Resolves a direction into row and column deltas.
	*/
	function getDirectionDelta(direction) {
		switch (direction) {
			case "up": return {
				rowDelta: -1,
				columnDelta: 0
			};
			case "down": return {
				rowDelta: 1,
				columnDelta: 0
			};
			case "left": return {
				rowDelta: 0,
				columnDelta: -1
			};
			default: return {
				rowDelta: 0,
				columnDelta: 1
			};
		}
	}
	/**
	* Steps one cell in a direction from a starting coordinate.
	*
	* Columns that cannot be selected are skipped over rather than landed on, so
	* arrow navigation never parks on an opted-out column. Returns `null` when the
	* step would leave the grid or find no selectable column.
	*/
	function stepCoordinate(table, rowId, columnId, direction) {
		const rows = table.getRowModel().rows;
		const columns = getDisplayOrderedColumns(table);
		if (!rows.length || !columns.length) return null;
		const { rowDelta, columnDelta } = getDirectionDelta(direction);
		const rowIndex = rows.findIndex((row) => row.id === rowId);
		const columnIndex = columns.findIndex((column) => column.id === columnId);
		if (rowIndex < 0 || columnIndex < 0) return null;
		const merges = callMemoOrStaticFn(table, "getCellSelectionMergeBounds", table_getCellSelectionMergeBounds);
		let fromRowIndex = rows[rowIndex].getDisplayIndex();
		let fromColumnIndex = columnIndex;
		if (merges.length) {
			const startMerge = findMergeBoundsAt(merges, rowIndex, columnIndex);
			if (startMerge) {
				if (rowDelta > 0) fromRowIndex = startMerge.maxRowIndex;
				if (rowDelta < 0) fromRowIndex = startMerge.minRowIndex;
				if (columnDelta > 0) fromColumnIndex = startMerge.maxColumnIndex;
				if (columnDelta < 0) fromColumnIndex = startMerge.minColumnIndex;
			}
		}
		let nextRowIndex = rowIndex + rowDelta;
		if (rowDelta && fromRowIndex !== rows[rowIndex].getDisplayIndex()) {
			const edgeRowIndex = rows.findIndex((row) => row.getDisplayIndex() === fromRowIndex);
			if (edgeRowIndex < 0) return null;
			nextRowIndex = edgeRowIndex + rowDelta;
		}
		if (nextRowIndex < 0 || nextRowIndex >= rows.length) return null;
		const selectableColumnIds = new Set(getSelectableColumns(table).map((column) => column.id));
		if (!selectableColumnIds.size) return null;
		let nextColumnIndex = fromColumnIndex;
		if (columnDelta) do
			nextColumnIndex += columnDelta;
		while (nextColumnIndex >= 0 && nextColumnIndex < columns.length && !selectableColumnIds.has(columns[nextColumnIndex].id));
		else if (!selectableColumnIds.has(columnId)) for (let distance = 1; distance < columns.length; distance++) {
			const before = columns[columnIndex - distance];
			const after = columns[columnIndex + distance];
			if (before && selectableColumnIds.has(before.id)) {
				nextColumnIndex = columnIndex - distance;
				break;
			}
			if (after && selectableColumnIds.has(after.id)) {
				nextColumnIndex = columnIndex + distance;
				break;
			}
		}
		if (nextColumnIndex < 0 || nextColumnIndex >= columns.length || !selectableColumnIds.has(columns[nextColumnIndex].id)) return null;
		let landingRowIndex = nextRowIndex;
		let landingColumnIndex = nextColumnIndex;
		if (merges.length) {
			const landingMerge = findMergeBoundsAt(merges, rows[nextRowIndex].getDisplayIndex(), nextColumnIndex);
			if (landingMerge) {
				landingRowIndex = rows.findIndex((row) => row.getDisplayIndex() === landingMerge.minRowIndex);
				if (landingRowIndex < 0) return null;
				landingColumnIndex = landingMerge.minColumnIndex;
			}
		}
		const landingRow = rows[landingRowIndex];
		const landingColumn = columns[landingColumnIndex];
		if (!landingRow || !landingColumn) return null;
		return {
			rowId: landingRow.id,
			columnId: landingColumn.id
		};
	}
	/**
	* Moves the selection one step in a direction, collapsing it to a single cell.
	*
	* With nothing selected, this selects the first selectable cell so keyboard
	* navigation has somewhere to start.
	*
	* @example
	* ```ts
	* table_moveCellSelection(table, 'down')
	* ```
	*/
	function table_moveCellSelection(table, direction) {
		const ranges = table.atoms.cellSelection?.get();
		const active = ranges?.[ranges.length - 1];
		if (!active) {
			const rows = table.getRowModel().rows;
			const columns = getSelectableColumns(table);
			if (!rows.length || !columns.length) return;
			table_setFocusedCell(table, rows[0].id, columns[0].id);
			return;
		}
		const next = stepCoordinate(table, active.anchorRowId, active.anchorColumnId, direction);
		if (!next) return;
		table_setFocusedCell(table, next.rowId, next.columnId);
	}
	/**
	* Extends the active range one step in a direction, keeping its anchor fixed.
	*
	* @example
	* ```ts
	* table_extendCellSelection(table, 'right')
	* ```
	*/
	function table_extendCellSelection(table, direction) {
		const ranges = table.atoms.cellSelection?.get();
		const active = ranges?.[ranges.length - 1];
		if (!active) {
			table_moveCellSelection(table, direction);
			return;
		}
		const next = stepCoordinate(table, active.focusRowId, active.focusColumnId, direction);
		if (!next) return;
		table_setCellSelection(table, (old) => {
			if (!old.length) return old;
			const nextRanges = old.slice(0, -1);
			nextRanges.push({
				...old[old.length - 1],
				focusRowId: next.rowId,
				focusColumnId: next.columnId
			});
			return nextRanges;
		});
	}
	/**
	* Walks each final positive region, invoking a visitor per selectable cell.
	*
	* Every expansion API shares this so the per-cell enable predicate is applied
	* in exactly one place.
	*/
	function forEachSelectedCell(table, visit, skipCovered = false) {
		const bounds = callMemoOrStaticFn(table, "getCellSelectionBounds", table_getCellSelectionBounds);
		if (!bounds.length) return;
		const rows = table.getRowsInDisplayOrder();
		const columns = getDisplayOrderedColumns(table);
		for (let i = 0; i < bounds.length; i++) {
			const bound = bounds[i];
			for (let rowIndex = bound.minRowIndex; rowIndex <= bound.maxRowIndex; rowIndex++) {
				const row = rows[rowIndex];
				if (!row) continue;
				const cellsByColumnId = row.getAllCellsByColumnId();
				for (let columnIndex = bound.minColumnIndex; columnIndex <= bound.maxColumnIndex; columnIndex++) {
					const column = columns[columnIndex];
					if (!column) continue;
					const cell = cellsByColumnId[column.id];
					if (!cell) continue;
					if (!callMemoOrStaticFn(cell, "getCanSelect", cell_getCanSelect)) continue;
					if (skipCovered && cell.getIsCovered?.()) continue;
					visit(cell, i, rowIndex - bound.minRowIndex, columnIndex - bound.minColumnIndex);
				}
			}
		}
	}
	/**
	* Returns the ids of all selected cells, in row-major order.
	*
	* Cells covered by overlapping ranges are returned once, at their first
	* occurrence.
	*
	* @example
	* ```ts
	* const ids = table_getSelectedCellIds(table)
	* ```
	*/
	function table_getSelectedCellIds(table) {
		const ids = [];
		const seen = /* @__PURE__ */ new Set();
		forEachSelectedCell(table, (cell) => {
			if (seen.has(cell.id)) return;
			seen.add(cell.id);
			ids.push(cell.id);
		}, true);
		return ids;
	}
	/**
	* Returns each final positive region's values as a row-major grid.
	*
	* This is the raw material for clipboard export. Serializing it to text is left
	* to userland, since the delimiter, the null representation, and whether values
	* containing delimiters get quoted are all application decisions.
	*
	* @example
	* ```ts
	* const [firstRange] = table_getSelectedCellRangesData(table)
	* ```
	*/
	function table_getSelectedCellRangesData(table) {
		const grids = [];
		forEachSelectedCell(table, (cell, rangeIndex, rowOffset) => {
			const grid = grids[rangeIndex] ??= [];
			(grid[rowOffset] ??= []).push(cell.getValue());
		});
		return grids;
	}
	/**
	* Returns the number of selected cells.
	*
	* Uses rectangle arithmetic over the normalized, disjoint positive regions.
	* A per-cell `enableCellSelection` predicate requires enumeration.
	*
	* @example
	* ```ts
	* const count = table_getSelectedCellCount(table)
	* ```
	*/
	function table_getSelectedCellCount(table) {
		if (table.options.enableCellSelection === false) return 0;
		const bounds = callMemoOrStaticFn(table, "getCellSelectionBounds", table_getCellSelectionBounds);
		if (!bounds.length) return 0;
		const merges = callMemoOrStaticFn(table, "getCellSelectionMergeBounds", table_getCellSelectionMergeBounds);
		if (typeof table.options.enableCellSelection === "function" || merges.length) {
			const ids = /* @__PURE__ */ new Set();
			forEachSelectedCell(table, (cell) => ids.add(cell.id), true);
			return ids.size;
		}
		const columns = getDisplayOrderedColumns(table);
		let count = 0;
		for (const bound of bounds) {
			let selectableColumns = 0;
			for (let columnIndex = bound.minColumnIndex; columnIndex <= bound.maxColumnIndex; columnIndex++) {
				const column = columns[columnIndex];
				if (!column) continue;
				if (column.columnDef.enableCellSelection !== false) selectableColumns++;
			}
			count += (bound.maxRowIndex - bound.minRowIndex + 1) * selectableColumns;
		}
		return count;
	}
	/**
	* Returns the ids of all rows intersected by the selection.
	*
	* @example
	* ```ts
	* const rowIds = table_getCellSelectionRowIds(table)
	* ```
	*/
	function table_getCellSelectionRowIds(table) {
		const bounds = callMemoOrStaticFn(table, "getCellSelectionBounds", table_getCellSelectionBounds);
		if (!bounds.length) return [];
		const rows = table.getRowsInDisplayOrder();
		const seen = /* @__PURE__ */ new Set();
		const ids = [];
		for (let i = 0; i < bounds.length; i++) {
			const bound = bounds[i];
			for (let index = bound.minRowIndex; index <= bound.maxRowIndex; index++) {
				const row = rows[index];
				if (!row || seen.has(row.id)) continue;
				seen.add(row.id);
				ids.push(row.id);
			}
		}
		return ids;
	}
	/**
	* Returns the ids of all columns intersected by the selection.
	*
	* @example
	* ```ts
	* const columnIds = table_getCellSelectionColumnIds(table)
	* ```
	*/
	function table_getCellSelectionColumnIds(table) {
		const bounds = callMemoOrStaticFn(table, "getCellSelectionBounds", table_getCellSelectionBounds);
		if (!bounds.length) return [];
		const columns = getDisplayOrderedColumns(table);
		const seen = /* @__PURE__ */ new Set();
		const ids = [];
		for (let i = 0; i < bounds.length; i++) {
			const bound = bounds[i];
			for (let index = bound.minColumnIndex; index <= bound.maxColumnIndex; index++) {
				const column = columns[index];
				if (!column || seen.has(column.id)) continue;
				if (column.columnDef.enableCellSelection === false) continue;
				seen.add(column.id);
				ids.push(column.id);
			}
		}
		return ids;
	}
	/**
	* Creates a handler that begins a selection at this cell.
	*
	* Follows `header_getResizeHandler`: the enable check is resolved once outside
	* the returned closure and guarded again inside it, the document is injectable
	* for SSR and cross-document rendering, and the document-level `mouseup`
	* listener is attached here so a drag released outside the table still ends.
	*
	* @example
	* ```tsx
	* <td onMouseDown={cell.getSelectionStartHandler()} />
	* ```
	*/
	function cell_getSelectionStartHandler(cell, _contextDocument) {
		const canSelect = cell_getCanSelect(cell);
		return (e) => {
			if (!canSelect) return;
			const table = cell.table;
			const options = table.options;
			const contextDocument = _contextDocument ?? (typeof document !== "undefined" ? document : null);
			const isRangeEvent = options.enableCellRangeSelection !== false && (options.isCellRangeSelectionEvent?.(e) ?? false);
			const isMultiRangeEvent = options.enableMultiCellRangeSelection !== false && (options.isMultiCellRangeSelectionEvent?.(e) ?? false);
			if (options.enableCellSelectionDrag !== false && options.enableCellRangeSelection !== false && contextDocument) {
				table._isSelectingCells = true;
				const upHandler = () => {
					contextDocument.removeEventListener("mouseup", upHandler);
					table._isSelectingCells = false;
				};
				contextDocument.addEventListener("mouseup", upHandler);
			}
			const rowId = cell.row.id;
			const columnId = cell.column.id;
			const shouldExclude = isMultiRangeEvent && callMemoOrStaticFn(cell, "getIsSelected", cell_getIsSelected);
			table_setCellSelection(table, (old) => {
				const active = old[old.length - 1];
				if (isRangeEvent && active) {
					const ranges = old.slice(0, -1);
					ranges.push({
						...active,
						focusRowId: rowId,
						focusColumnId: columnId
					});
					return ranges;
				}
				const range = {
					anchorRowId: rowId,
					anchorColumnId: columnId,
					focusRowId: rowId,
					focusColumnId: columnId,
					...shouldExclude ? { operation: "exclude" } : {}
				};
				return isMultiRangeEvent ? [...old, range] : [range];
			});
		};
	}
	/**
	* Creates a handler that extends the active range to this cell during a drag.
	*
	* No rAF coalescing is needed here, unlike the resize handler: `mouseenter`
	* fires once per cell boundary crossed rather than continuously, and deferring
	* it by a frame would only delay the highlight.
	*
	* @example
	* ```tsx
	* <td onMouseEnter={cell.getSelectionExtendHandler()} />
	* ```
	*/
	function cell_getSelectionExtendHandler(cell) {
		const canSelect = cell_getCanSelect(cell);
		return (_e) => {
			if (!canSelect) return;
			const table = cell.table;
			if (!table._isSelectingCells) return;
			const ranges = table.atoms.cellSelection?.get();
			const active = ranges?.[ranges.length - 1];
			if (!active) return;
			const rowId = cell.row.id;
			const columnId = cell.column.id;
			if (active.focusRowId === rowId && active.focusColumnId === columnId) return;
			table_setCellSelection(table, (old) => {
				if (!old.length) return old;
				const next = old.slice(0, -1);
				next.push({
					...old[old.length - 1],
					focusRowId: rowId,
					focusColumnId: columnId
				});
				return next;
			});
		};
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/row-expanding/rowExpandingFeature.utils.js
	/**
	* Schedules an expanded-state reset after row-structure changes.
	*
	* The reset runs when `autoResetAll`, `autoResetExpanded`, or the default
	* client-side expanding behavior allows it. Manual expanding opts out unless
	* the reset options explicitly opt back in.
	*
	* @example
	* ```ts
	* table_autoResetExpanded(table)
	* ```
	*/
	function table_autoResetExpanded(table) {
		if (!table.atoms.expanded) return;
		if (table.options.autoResetAll ?? table.options.autoResetExpanded ?? !table.options.manualExpanding) table._reactivity.schedule(() => table_resetExpanded(table));
	}
	/**
	* Routes an expanded-state updater through the table's expanded change handler.
	*
	* The updater may be `true`, a row-id map, or a function of the previous
	* expanded state, matching the instance `table.setExpanded` behavior.
	*
	* @example
	* ```ts
	* table_setExpanded(table, (old) => ({ ...old, [rowId]: true }))
	* ```
	*/
	function table_setExpanded(table, updater) {
		table.options.onExpandedChange?.(updater);
	}
	/**
	* Resets `expanded` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.expanded` when it
	* exists. Passing `true` ignores initial state and resets to `{}`.
	*
	* @example
	* ```ts
	* table_resetExpanded(table)
	* table_resetExpanded(table, true)
	* ```
	*/
	function table_resetExpanded(table, defaultState) {
		const initialExpanded = table.initialState.expanded;
		table_setExpanded(table, defaultState ? makeObjectMap() : initialExpanded === true ? true : Object.assign(makeObjectMap(), cloneState(initialExpanded ?? {})));
	}
	/**
	* Checks whether this row is expanded.
	*
	* `options.getIsRowExpanded` can override state-derived behavior. Otherwise
	* the row is expanded when expanded state is `true` or contains this row id.
	*
	* @example
	* ```ts
	* const expanded = row_getIsExpanded(row)
	* ```
	*/
	function row_getIsExpanded(row) {
		const expanded = row.table.atoms.expanded?.get() ?? {};
		return !!(row.table.options.getIsRowExpanded?.(row) ?? (expanded === true || isExpandedRowId(expanded, row.id)));
	}
	function isExpandedRowId(expanded, rowId) {
		return !!(expanded && expanded !== true && hasOwn(expanded, rowId) && expanded[rowId]);
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/row-pagination/rowPaginationFeature.utils.js
	const defaultPageIndex = 0;
	const defaultPageSize = 10;
	/**
	* Creates the default pagination state used by the pagination feature.
	*
	* The feature default starts at the first page with a page size of 10. Reset
	* APIs use this value when `defaultState` is `true`.
	*
	* @example
	* ```ts
	* const pagination = getDefaultPaginationState()
	* ```
	*/
	function getDefaultPaginationState() {
		return {
			pageIndex: defaultPageIndex,
			pageSize: defaultPageSize
		};
	}
	/**
	* Resets the page index when a page-altering change should return to page 0.
	*
	* The reset runs when `autoResetAll`, `autoResetPageIndex`, or the default
	* client-side pagination behavior allows it. Manual pagination opts out unless
	* the reset options explicitly opt back in.
	*
	* @example
	* ```ts
	* table_autoResetPageIndex(table)
	* ```
	*/
	function table_autoResetPageIndex(table) {
		if (table.options.autoResetAll ?? table.options.autoResetPageIndex ?? !table.options.manualPagination) table_resetPageIndex(table, true);
	}
	/**
	* Routes a pagination updater through the table's pagination change handler.
	*
	* The updater may be a next state object or a function of the previous
	* `PaginationState`; controlled state and external atoms observe the same
	* updater path as the instance API.
	*
	* @example
	* ```ts
	* table_setPagination(table, (old) => old)
	* ```
	*/
	function table_setPagination(table, updater) {
		const safeUpdater = (old) => {
			return functionalUpdate(updater, old);
		};
		return table.options.onPaginationChange?.(safeUpdater);
	}
	/**
	* Resets `pagination` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.pagination` when it
	* exists. Passing `true` ignores initial state and resets to
	* `{ pageIndex: 0, pageSize: 10 }`.
	*
	* @example
	* ```ts
	* table_resetPagination(table)
	* table_resetPagination(table, true)
	* ```
	*/
	function table_resetPagination(table, defaultState) {
		table_setPagination(table, defaultState ? getDefaultPaginationState() : cloneState(table.initialState.pagination ?? getDefaultPaginationState()));
	}
	/**
	* Updates `pagination.pageIndex` and clamps it to the known page range.
	*
	* Unknown page counts (`undefined` or `-1`) allow any non-negative page index.
	* Known page counts clamp the index between `0` and `pageCount - 1`.
	*
	* @example
	* ```ts
	* table_setPageIndex(table, (old) => old)
	* ```
	*/
	function table_setPageIndex(table, updater) {
		table_setPagination(table, (old) => {
			let pageIndex = functionalUpdate(updater, old.pageIndex);
			const maxPageIndex = typeof table.options.pageCount === "undefined" || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
			pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
			return {
				...old,
				pageIndex
			};
		});
	}
	/**
	* Resets only `pagination.pageIndex`.
	*
	* With no argument, the reset uses `table.initialState.pagination?.pageIndex`
	* or `0`. Passing `true` always resets the page index to `0`.
	*
	* @example
	* ```ts
	* table_resetPageIndex(table)
	* table_resetPageIndex(table, true)
	* ```
	*/
	function table_resetPageIndex(table, defaultState) {
		const currentPageIndex = table.atoms.pagination?.get()?.pageIndex ?? defaultPageIndex;
		const newPageIndex = defaultState ? defaultPageIndex : table.initialState.pagination?.pageIndex ?? defaultPageIndex;
		if (newPageIndex === currentPageIndex) return;
		table_setPageIndex(table, newPageIndex);
	}
	/**
	* Resets only `pagination.pageSize`.
	*
	* With no argument, the reset uses `table.initialState.pagination?.pageSize`
	* or `10`. Passing `true` always resets the page size to `10`.
	*
	* @example
	* ```ts
	* table_resetPageSize(table)
	* table_resetPageSize(table, true)
	* ```
	*/
	function table_resetPageSize(table, defaultState) {
		const currentPageSize = table.atoms.pagination?.get()?.pageSize ?? defaultPageSize;
		const newPageSize = defaultState ? defaultPageSize : table.initialState.pagination?.pageSize ?? defaultPageSize;
		if (newPageSize === currentPageSize) return;
		table_setPageSize(table, newPageSize);
	}
	/**
	* Updates `pagination.pageSize` while preserving the current top row.
	*
	* The new size is clamped to at least `1`, and `pageIndex` is recalculated so
	* the row that was previously at the top of the page remains in view.
	*
	* @example
	* ```ts
	* table_setPageSize(table, (old) => old)
	* ```
	*/
	function table_setPageSize(table, updater) {
		table_setPagination(table, (old) => {
			const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
			const topRowIndex = old.pageSize * old.pageIndex;
			const pageIndex = Math.floor(topRowIndex / pageSize);
			return {
				...old,
				pageIndex,
				pageSize
			};
		});
	}
	/**
	* Builds the zero-based page indexes available for the current page count.
	*
	* Unknown or empty page counts return an empty array; otherwise the result is
	* `[0, 1, ...pageCount - 1]`.
	*
	* @example
	* ```ts
	* const pageIndexes = table_getPageOptions(table)
	* ```
	*/
	function table_getPageOptions(table) {
		const pageCount = table_getPageCount(table);
		let pageOptions = [];
		if (pageCount && pageCount > 0) pageOptions = [...new Array(pageCount)].fill(null).map((_, i) => i);
		return pageOptions;
	}
	/**
	* Checks whether the current page index can move backward.
	*
	* The first page is page index `0`, so only positive page indexes can navigate
	* to a previous page.
	*
	* @example
	* ```ts
	* const canGoBack = table_getCanPreviousPage(table)
	* ```
	*/
	function table_getCanPreviousPage(table) {
		return (table.atoms.pagination?.get()?.pageIndex ?? 0) > 0;
	}
	/**
	* Checks whether the current page index can move forward.
	*
	* A `pageCount` of `-1` means the caller does not know the total page count, so
	* this returns `true`. A page count of `0` returns `false`.
	*
	* @example
	* ```ts
	* const canGoForward = table_getCanNextPage(table)
	* ```
	*/
	function table_getCanNextPage(table) {
		const pageIndex = table.atoms.pagination?.get()?.pageIndex ?? defaultPageIndex;
		const pageCount = table_getPageCount(table);
		if (pageCount === -1) return true;
		if (pageCount === 0) return false;
		return pageIndex < pageCount - 1;
	}
	/**
	* Moves the table to the previous page.
	*
	* This delegates to `table_setPageIndex` so pagination state ownership and
	* updater semantics remain consistent.
	*
	* @example
	* ```ts
	* table_previousPage(table)
	* ```
	*/
	function table_previousPage(table) {
		return table_setPageIndex(table, (old) => old - 1);
	}
	/**
	* Moves the table to the next page.
	*
	* This delegates to `table_setPageIndex` so pagination state ownership and
	* updater semantics remain consistent.
	*
	* @example
	* ```ts
	* table_nextPage(table)
	* ```
	*/
	function table_nextPage(table) {
		return table_setPageIndex(table, (old) => {
			return old + 1;
		});
	}
	/**
	* Moves the table to the first page.
	*
	* This is a convenience wrapper around `table_setPageIndex(table, 0)`.
	*
	* @example
	* ```ts
	* table_firstPage(table)
	* ```
	*/
	function table_firstPage(table) {
		return table_setPageIndex(table, 0);
	}
	/**
	* Moves the table to the last known page.
	*
	* The target page is derived from `table_getPageCount(table) - 1`.
	*
	* @example
	* ```ts
	* table_lastPage(table)
	* ```
	*/
	function table_lastPage(table) {
		return table_setPageIndex(table, table_getPageCount(table) - 1);
	}
	/**
	* Resolves the number of pages for the current pagination state.
	*
	* `options.pageCount` wins for manual pagination. Otherwise the value is
	* calculated from `table_getRowCount(table)` and the current `pageSize`.
	*
	* @example
	* ```ts
	* const pages = table_getPageCount(table)
	* ```
	*/
	function table_getPageCount(table) {
		return table.options.pageCount ?? Math.ceil(table_getRowCount(table) / (table.atoms.pagination?.get()?.pageSize ?? defaultPageSize));
	}
	/**
	* Resolves the total row count used for pagination math.
	*
	* `options.rowCount` wins for manual pagination. Otherwise the count comes
	* from the pre-paginated row model so filtering, grouping, sorting, and
	* expansion are reflected before the page slice is applied.
	*
	* @example
	* ```ts
	* const rows = table_getRowCount(table)
	* ```
	*/
	function table_getRowCount(table) {
		return table.options.rowCount ?? table.getPrePaginatedRowModel().rows.length;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/row-sorting/rowSortingFeature.utils.js
	/**
	* Creates the default sorting state.
	*
	* The feature default is an empty array, meaning no columns are sorted. Reset
	* APIs use this value when `defaultState` is `true`.
	*
	* @example
	* ```ts
	* const sorting = getDefaultSortingState()
	* ```
	*/
	function getDefaultSortingState() {
		return [];
	}
	/**
	* Routes a sorting updater through the table's sorting change handler.
	*
	* The updater may be a next `SortingState` array or a function of the previous
	* sorting state, matching the instance `table.setSorting` behavior.
	*
	* @example
	* ```ts
	* table_setSorting(table, (old) => [...old, { id: 'age', desc: true }])
	* ```
	*/
	function table_setSorting(table, updater) {
		table.options.onSortingChange?.(updater);
	}
	/**
	* Resets `sorting` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.sorting` when it
	* exists. Passing `true` ignores initial state and resets to `[]`.
	*
	* @example
	* ```ts
	* table_resetSorting(table)
	* table_resetSorting(table, true)
	* ```
	*/
	function table_resetSorting(table, defaultState) {
		table_setSorting(table, defaultState ? [] : cloneState(table.initialState.sorting ?? []));
	}
	/**
	* Resets sorting after the table data changes when explicitly enabled.
	*
	* Unlike other auto-reset behaviors, sorting is preserved by default. An
	* explicit `autoResetAll` value takes precedence over `autoResetSorting`.
	*
	* @example
	* ```ts
	* table_autoResetSorting(table)
	* ```
	*/
	function table_autoResetSorting(table) {
		if (!table.atoms.sorting) return;
		if (table.options.autoResetAll ?? table.options.autoResetSorting ?? false) table_resetSorting(table);
	}
	/**
	* Chooses a built-in sorting function from sampled filtered row values.
	*
	* Date-like values use `datetime`, mixed text/numeric strings use
	* `alphanumeric`, plain strings use `text`, and unknown values fall back to
	* `basic`.
	*
	* @example
	* ```ts
	* const sortFn = column_getAutoSortFn(column)
	* ```
	*/
	function column_getAutoSortFn(column) {
		const sortFns = column.table._rowModelFns.sortFns;
		const firstRows = column.table.getFilteredRowModel().flatRows.slice(0, 10);
		let sortFnName;
		let isString = false;
		for (let i = 0; i < firstRows.length; i++) {
			const value = firstRows[i].getValue(column.id);
			if (Object.prototype.toString.call(value) === "[object Date]") {
				sortFnName = "datetime";
				break;
			}
			if (typeof value === "string") {
				isString = true;
				if (value.split(reSplitAlphaNumeric).length > 1) {
					sortFnName = "alphanumeric";
					break;
				}
			}
		}
		if (!sortFnName && isString) sortFnName = "text";
		if (sortFnName) {
			let sortFn = sortFns?.[sortFnName];
			if (!sortFn) {
				if (sortFnName === "alphanumeric") sortFn = sortFns?.text;
			}
			if (sortFn) return sortFn;
		}
		return sortFn_basic;
	}
	/**
	* Chooses the default first sort direction from sampled filtered row values.
	*
	* The first non-nullish value among the sampled rows decides: string columns
	* start ascending so alphabetical order is natural; other value types (or
	* columns with no non-nullish sample) start descending. Sampling past leading
	* nullish values keeps the toggle cycle stable when sorting or a data swap
	* moves an empty value into the first row.
	*
	* @example
	* ```ts
	* const direction = column_getAutoSortDir(column)
	* ```
	*/
	function column_getAutoSortDir(column) {
		const firstRows = column.table.getFilteredRowModel().flatRows.slice(0, 10);
		for (let i = 0; i < firstRows.length; i++) {
			const value = firstRows[i].getValue(column.id);
			if (value == null) continue;
			return typeof value === "string" ? "asc" : "desc";
		}
		return "desc";
	}
	/**
	* Resolves the sorting function configured for a column.
	*
	* Function-valued `columnDef.sortFn` is returned directly, `'auto'` delegates
	* to `column_getAutoSortFn`, and string values are looked up in the table's
	* sorting function registry before falling back to `basic`.
	*
	* @example
	* ```ts
	* const sortFn = column_getSortFn(column)
	* ```
	*/
	function column_getSortFn(column) {
		const sortFns = column.table._rowModelFns.sortFns;
		if (isFunction(column.columnDef.sortFn)) return column.columnDef.sortFn;
		if (column.columnDef.sortFn === "auto") return column_getAutoSortFn(column);
		return sortFns?.[column.columnDef.sortFn] ?? sortFn_basic;
	}
	/**
	* Applies the next sorting state for this column.
	*
	* The toggle can add, replace, flip, or remove this column's sort entry. Multi
	* sorting respects `enableMultiSort`, `enableMultiRemove`,
	* `maxMultiSortColCount`, and the `multi` argument.
	*
	* @example
	* ```ts
	* column_toggleSorting(column, undefined, true)
	* ```
	*/
	function column_toggleSorting(column, desc, multi) {
		const nextSortingOrder = column_getNextSortingOrder(column, multi && column_getCanMultiSort(column));
		const hasManualValue = typeof desc !== "undefined";
		table_setSorting(column.table, (old) => {
			const existingIndex = old.findIndex((d) => d.id === column.id);
			const existingSorting = existingIndex === -1 ? void 0 : old[existingIndex];
			let newSorting = [];
			let sortAction;
			const nextDesc = hasManualValue ? desc : nextSortingOrder === "desc";
			const isMultiMode = !!(old.length && column_getCanMultiSort(column) && multi);
			if (isMultiMode) if (existingSorting) sortAction = "toggle";
			else sortAction = "add";
			else if (existingSorting) sortAction = "toggle";
			else sortAction = "replace";
			if (sortAction === "toggle") {
				if (!hasManualValue) {
					if (!nextSortingOrder) sortAction = "remove";
				}
			}
			if (sortAction === "add") {
				newSorting = [...old, {
					id: column.id,
					desc: nextDesc
				}];
				newSorting.splice(0, newSorting.length - (column.table.options.maxMultiSortColCount ?? Number.MAX_SAFE_INTEGER));
			} else if (sortAction === "toggle") newSorting = isMultiMode ? old.map((d) => {
				if (d.id === column.id) return {
					...d,
					desc: nextDesc
				};
				return d;
			}) : [{
				id: column.id,
				desc: nextDesc
			}];
			else if (sortAction === "remove") newSorting = isMultiMode ? old.filter((d) => d.id !== column.id) : [];
			else newSorting = [{
				id: column.id,
				desc: nextDesc
			}];
			return newSorting;
		});
	}
	/**
	* Resolves the first direction used when this column begins sorting.
	*
	* Column-level `sortDescFirst` wins, then table-level `sortDescFirst`, then the
	* auto direction inferred from sampled values.
	*
	* @example
	* ```ts
	* const firstDirection = column_getFirstSortDir(column)
	* ```
	*/
	function column_getFirstSortDir(column) {
		return column.columnDef.sortDescFirst ?? column.table.options.sortDescFirst ?? column_getAutoSortDir(column) === "desc" ? "desc" : "asc";
	}
	/**
	* Resolves the next sort order for this column's toggle cycle.
	*
	* The cycle starts with the first sort direction, flips between `asc` and
	* `desc`, and can return `false` when sorting removal is enabled.
	*
	* @example
	* ```ts
	* const nextOrder = column_getNextSortingOrder(column)
	* ```
	*/
	function column_getNextSortingOrder(column, multi) {
		const firstSortDirection = column_getFirstSortDir(column);
		const isSorted = column_getIsSorted(column);
		if (!isSorted) return firstSortDirection;
		if (isSorted !== firstSortDirection && (column.table.options.enableSortingRemoval ?? true) && (multi ? column.table.options.enableMultiRemove ?? true : true)) return false;
		return isSorted === "desc" ? "asc" : "desc";
	}
	/**
	* Checks whether this accessor column can participate in sorting.
	*
	* The column must have an accessor and sorting must be enabled by both the
	* column definition and table options.
	*
	* @example
	* ```ts
	* const canSort = column_getCanSort(column)
	* ```
	*/
	function column_getCanSort(column) {
		return (column.columnDef.enableSorting ?? true) && (column.table.options.enableSorting ?? true) && !!column.accessorFn;
	}
	/**
	* Checks whether this column can be added to a multi-sort state.
	*
	* Column-level `enableMultiSort` wins over table-level `enableMultiSort`; if
	* neither is set, accessor columns can multi-sort by default.
	*
	* @example
	* ```ts
	* const canMultiSort = column_getCanMultiSort(column)
	* ```
	*/
	function column_getCanMultiSort(column) {
		return column.columnDef.enableMultiSort ?? column.table.options.enableMultiSort ?? !!column.accessorFn;
	}
	/**
	* Reads this column's current sort direction.
	*
	* The result is `false` when the column is not sorted, otherwise `'asc'` or
	* `'desc'` based on the column's entry in `state.sorting`.
	*
	* @example
	* ```ts
	* const direction = column_getIsSorted(column)
	* ```
	*/
	function column_getIsSorted(column) {
		const columnSort = column.table.atoms.sorting?.get()?.find((d) => d.id === column.id);
		return !columnSort ? false : columnSort.desc ? "desc" : "asc";
	}
	/**
	* Finds this column's position in the ordered `state.sorting` array.
	*
	* The result is `-1` when the column is not sorted.
	*
	* @example
	* ```ts
	* const index = column_getSortIndex(column)
	* ```
	*/
	function column_getSortIndex(column) {
		return column.table.atoms.sorting?.get()?.findIndex((d) => d.id === column.id) ?? -1;
	}
	/**
	* Removes this column from the sorting state.
	*
	* Other sorted columns are preserved, including their relative order.
	*
	* @example
	* ```ts
	* column_clearSorting(column)
	* ```
	*/
	function column_clearSorting(column) {
		table_setSorting(column.table, (old) => old.length ? old.filter((d) => d.id !== column.id) : []);
	}
	/**
	* Creates a header event handler that toggles this column's sorting.
	*
	* The handler ignores events when the column cannot sort, and asks
	* `options.isMultiSortEvent` whether the event should add to a multi-sort.
	*
	* @example
	* ```ts
	* const onClick = column_getToggleSortingHandler(column)
	* ```
	*/
	function column_getToggleSortingHandler(column) {
		const canSort = column_getCanSort(column);
		return (e) => {
			if (!canSort) return;
			column_toggleSorting(column, void 0, column_getCanMultiSort(column) ? column.table.options.isMultiSortEvent?.(e) : false);
		};
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/row-models/createCoreRowModel.js
	/**
	* Creates a memoized core row model factory.
	*
	* The factory reads the relevant table state atoms and options, then returns a row model function used by the table row-model pipeline.
	*/
	function createCoreRowModel() {
		return (table) => {
			return tableMemo({
				feature: "coreRowModelsFeature",
				table,
				fnName: "table.getCoreRowModel",
				memoDeps: () => [table.options.data],
				fn: () => _createCoreRowModel(table, table.options.data),
				onAfterUpdate: skipFirstRun(() => {
					table_autoResetExpanded(table);
					table_autoResetPageIndex(table);
					table_autoResetSorting(table);
					table_autoResetCellSelection(table);
				})
			});
		};
	}
	function accessRows(table, rowModel, originalRows, depth = 0, parentRow) {
		const rows = [];
		for (let i = 0; i < originalRows.length; i++) {
			const originalRow = originalRows[i];
			const row = constructRow(table, table.getRowId(originalRow, i, parentRow), originalRow, i, depth, void 0, parentRow?.id);
			rowModel.flatRows.push(row);
			rowModel.rowsById[row.id] = row;
			rows.push(row);
			if (table.options.getSubRows) {
				row.originalSubRows = table.options.getSubRows(originalRow, i);
				if (row.originalSubRows?.length) row.subRows = accessRows(table, rowModel, row.originalSubRows, depth + 1, row);
			}
		}
		return rows;
	}
	function _createCoreRowModel(table, data) {
		const rowModel = {
			rows: [],
			flatRows: [],
			rowsById: makeObjectMap()
		};
		rowModel.rows = accessRows(table, rowModel, data);
		return rowModel;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/row-models/coreRowModelsFeature.utils.js
	/**
	* Resolves the table's unmodified core row model.
	*
	* The factory is created once per table, either from the `coreRowModel` slot on the `features` option
	* or the built-in `createCoreRowModel()`, then reused for later calls.
	*
	* @example
	* ```ts
	* const coreRows = table_getCoreRowModel(table)
	* ```
	*/
	function table_getCoreRowModel(table) {
		if (!table._rowModels.coreRowModel) table._rowModels.coreRowModel = table.options.features.coreRowModel?.(table) ?? createCoreRowModel()(table);
		return table._rowModels.coreRowModel();
	}
	/**
	* Reads the row model immediately before column/global filtering.
	*
	* Filtering is the first derived row-model stage, so this currently aliases
	* `table.getCoreRowModel()`.
	*
	* @example
	* ```ts
	* const rowsBeforeFiltering = table_getPreFilteredRowModel(table)
	* ```
	*/
	function table_getPreFilteredRowModel(table) {
		return table.getCoreRowModel();
	}
	/**
	* Resolves the row model after column and global filtering.
	*
	* When `manualFiltering` is enabled, or no filtered row-model factory was
	* registered, this returns the pre-filtered row model because filtering is
	* expected to happen outside the table.
	*
	* @example
	* ```ts
	* const filteredRows = table_getFilteredRowModel(table)
	* ```
	*/
	function table_getFilteredRowModel(table) {
		if (!table._rowModels.filteredRowModel) table._rowModels.filteredRowModel = table.options.features.filteredRowModel?.(table);
		if (table.options.manualFiltering || !table._rowModels.filteredRowModel) return table.getPreFilteredRowModel();
		return table._rowModels.filteredRowModel();
	}
	/**
	* Reads the row model immediately before grouping.
	*
	* Grouping runs after filtering, so this aliases `table.getFilteredRowModel()`.
	*
	* @example
	* ```ts
	* const rowsBeforeGrouping = table_getPreGroupedRowModel(table)
	* ```
	*/
	function table_getPreGroupedRowModel(table) {
		return table.getFilteredRowModel();
	}
	/**
	* Resolves the row model after grouping has produced grouped rows.
	*
	* When `manualGrouping` is enabled, or no grouped row-model factory was
	* registered, this returns the pre-grouped row model unchanged.
	*
	* @example
	* ```ts
	* const groupedRows = table_getGroupedRowModel(table)
	* ```
	*/
	function table_getGroupedRowModel(table) {
		if (!table._rowModels.groupedRowModel) table._rowModels.groupedRowModel = table.options.features.groupedRowModel?.(table);
		if (table.options.manualGrouping || !table._rowModels.groupedRowModel) return table.getPreGroupedRowModel();
		return table._rowModels.groupedRowModel();
	}
	/**
	* Reads the row model immediately before sorting.
	*
	* Sorting runs after grouping, so this aliases `table.getGroupedRowModel()`.
	*
	* @example
	* ```ts
	* const rowsBeforeSorting = table_getPreSortedRowModel(table)
	* ```
	*/
	function table_getPreSortedRowModel(table) {
		return table.getGroupedRowModel();
	}
	/**
	* Resolves the row model after sorting has been applied.
	*
	* When `manualSorting` is enabled, or no sorted row-model factory was
	* registered, this returns the pre-sorted row model because sorted data is
	* expected to be supplied by the caller.
	*
	* @example
	* ```ts
	* const sortedRows = table_getSortedRowModel(table)
	* ```
	*/
	function table_getSortedRowModel(table) {
		if (!table._rowModels.sortedRowModel) table._rowModels.sortedRowModel = table.options.features.sortedRowModel?.(table);
		if (table.options.manualSorting || !table._rowModels.sortedRowModel) return table.getPreSortedRowModel();
		return table._rowModels.sortedRowModel();
	}
	/**
	* Reads the row model immediately before row expansion.
	*
	* Expansion runs after sorting, so this aliases `table.getSortedRowModel()`.
	*
	* @example
	* ```ts
	* const rowsBeforeExpansion = table_getPreExpandedRowModel(table)
	* ```
	*/
	function table_getPreExpandedRowModel(table) {
		return table.getSortedRowModel();
	}
	/**
	* Resolves the row model after expanded rows have been flattened into view.
	*
	* When `manualExpanding` is enabled, or no expanded row-model factory was
	* registered, this returns the pre-expanded row model unchanged.
	*
	* @example
	* ```ts
	* const expandedRows = table_getExpandedRowModel(table)
	* ```
	*/
	function table_getExpandedRowModel(table) {
		if (!table._rowModels.expandedRowModel) table._rowModels.expandedRowModel = table.options.features.expandedRowModel?.(table);
		if (table.options.manualExpanding || !table._rowModels.expandedRowModel) return table.getPreExpandedRowModel();
		return table._rowModels.expandedRowModel();
	}
	/**
	* Reads the row model immediately before pagination.
	*
	* Pagination is the final built-in row-model stage, so this aliases
	* `table.getExpandedRowModel()`.
	*
	* @example
	* ```ts
	* const rowsBeforePagination = table_getPrePaginatedRowModel(table)
	* ```
	*/
	function table_getPrePaginatedRowModel(table) {
		return table.getExpandedRowModel();
	}
	/**
	* Resolves the row model after pagination has sliced rows for the current page.
	*
	* When `manualPagination` is enabled, or no paginated row-model factory was
	* registered, this returns the pre-paginated row model because pagination is
	* expected to happen before data reaches the table.
	*
	* @example
	* ```ts
	* const pageRows = table_getPaginatedRowModel(table)
	* ```
	*/
	function table_getPaginatedRowModel(table) {
		if (!table._rowModels.paginatedRowModel) table._rowModels.paginatedRowModel = table.options.features.paginatedRowModel?.(table);
		if (table.options.manualPagination || !table._rowModels.paginatedRowModel) return table.getPrePaginatedRowModel();
		return table._rowModels.paginatedRowModel();
	}
	/**
	* Resolves the final row model consumed by renderers.
	*
	* This is the end of the built-in row-model pipeline: core -> filtering ->
	* grouping -> sorting -> expanding -> pagination.
	*
	* @example
	* ```ts
	* const visibleRows = table_getRowModel(table)
	* ```
	*/
	function table_getRowModel(table) {
		return table.getPaginatedRowModel();
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/row-models/coreRowModelsFeature.js
	/**
	* Core feature that wires table row-model accessors and row-model caches.
	*/
	const coreRowModelsFeature = { constructTableAPIs: (table) => {
		assignTableAPIs("coreRowModelsFeature", table, {
			table_getCoreRowModel: { fn: () => table_getCoreRowModel(table) },
			table_getPreFilteredRowModel: { fn: () => table_getPreFilteredRowModel(table) },
			table_getFilteredRowModel: { fn: () => table_getFilteredRowModel(table) },
			table_getPreGroupedRowModel: { fn: () => table_getPreGroupedRowModel(table) },
			table_getGroupedRowModel: { fn: () => table_getGroupedRowModel(table) },
			table_getPreSortedRowModel: { fn: () => table_getPreSortedRowModel(table) },
			table_getSortedRowModel: { fn: () => table_getSortedRowModel(table) },
			table_getPreExpandedRowModel: { fn: () => table_getPreExpandedRowModel(table) },
			table_getExpandedRowModel: { fn: () => table_getExpandedRowModel(table) },
			table_getPrePaginatedRowModel: { fn: () => table_getPrePaginatedRowModel(table) },
			table_getPaginatedRowModel: { fn: () => table_getPaginatedRowModel(table) },
			table_getRowModel: { fn: () => table_getRowModel(table) }
		});
	} };
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/cells/constructCell.js
	/**
	* Creates or retrieves the cell prototype for a table.
	* The prototype is cached on the table and shared by all cell instances.
	*/
	function getCellPrototype(table) {
		if (!table._cellPrototype) {
			table._cellPrototype = { table };
			const features = Object.values(table._features);
			for (let i = 0; i < features.length; i++) features[i].assignCellPrototype?.(table._cellPrototype, table);
		}
		return table._cellPrototype;
	}
	/**
	* Constructs a cell instance from normalized table internals.
	*
	* This wires core properties, feature prototype APIs, and instance data used by table rendering and row-model operations.
	*/
	function constructCell(column, row, table) {
		const cellPrototype = getCellPrototype(table);
		const cell = Object.create(cellPrototype);
		cell.column = column;
		cell.id = `${row.id}_${column.id}`;
		cell.row = row;
		const initFns = table._cellInstanceInitFns;
		for (let i = 0; i < initFns.length; i++) initFns[i](cell);
		return cell;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/rows/coreRowsFeature.utils.js
	/**
	* Returns this row's zero-based position in the current pre-pagination row
	* model. Rows outside that model return `-1`.
	*/
	function row_getDisplayIndex(row) {
		const rows = row.table.getRowsInDisplayOrder();
		const displayIndex = row._displayIndexCache;
		return rows[displayIndex] === row ? displayIndex : -1;
	}
	/**
	* Returns the rows in the current display order after assigning their
	* zero-based display indexes.
	*
	* When expanded rows bypass pagination, expanded descendants are inserted into
	* the returned order even though they are absent from the pre-pagination row
	* model.
	*/
	function table_getRowsInDisplayOrder(table) {
		const rows = table.getPrePaginatedRowModel().rows;
		if (table.options.paginateExpandedRows === false) {
			const displayRows = [];
			const handleRow = (row) => {
				row._displayIndexCache = displayRows.length;
				displayRows.push(row);
				if (row.subRows.length && row.getIsExpanded?.()) row.subRows.forEach(handleRow);
			};
			rows.forEach(handleRow);
			return displayRows;
		}
		for (let i = 0; i < rows.length; i++) rows[i]._displayIndexCache = i;
		return rows;
	}
	/**
	* Reads and caches this row's value for a column.
	*
	* The value is produced by the column accessor. Missing columns or display
	* columns without an accessor return `undefined`.
	*
	* @example
	* ```ts
	* const firstName = row_getValue(row, 'firstName')
	* ```
	*/
	function row_getValue(row, columnId) {
		if (hasOwn(row._valuesCache, columnId)) return row._valuesCache[columnId];
		const column = row.table.getColumn(columnId);
		if (!column?.accessorFn) return;
		row._valuesCache[columnId] = column.accessorFn(row.original, row.index);
		return row._valuesCache[columnId];
	}
	/**
	* Reads and caches the values used by faceting/grouping for a column.
	*
	* If the column defines `getUniqueValues`, that result is used. Otherwise the
	* row's accessor value is wrapped in a single-item array.
	*
	* @example
	* ```ts
	* const values = row_getUniqueValues(row, 'tags')
	* ```
	*/
	function row_getUniqueValues(row, columnId) {
		if (hasOwn(row._uniqueValuesCache, columnId)) return row._uniqueValuesCache[columnId];
		const column = row.table.getColumn(columnId);
		if (!column?.accessorFn) return;
		if (!column.columnDef.getUniqueValues) {
			row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
			return row._uniqueValuesCache[columnId];
		}
		row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, row.index);
		return row._uniqueValuesCache[columnId];
	}
	/**
	* Returns a renderable row value for a column.
	*
	* If the accessor value is nullish, the table's `renderFallbackValue` is used
	* instead.
	*
	* @example
	* ```ts
	* const value = row_renderValue(row, 'firstName')
	* ```
	*/
	function row_renderValue(row, columnId) {
		return row.getValue(columnId) ?? row.table.options.renderFallbackValue;
	}
	/**
	* Flattens this row's descendant tree into leaf rows.
	*
	* The row itself is not included; only nested `subRows` are walked.
	*
	* @example
	* ```ts
	* const descendants = row_getLeafRows(row)
	* ```
	*/
	function row_getLeafRows(row) {
		return flattenBy(row.subRows, (d) => d.subRows);
	}
	/**
	* Returns the deepest structural row depth in the core row model.
	* Root rows are depth `0`, their direct sub-rows are depth `1`, and so on.
	*/
	function table_getMaxSubRowDepth(table) {
		const rows = table.getCoreRowModel().flatRows;
		let maxDepth = 0;
		for (let i = 0; i < rows.length; i++) maxDepth = Math.max(maxDepth, rows[i].depth);
		return maxDepth;
	}
	/**
	* Looks up this row's direct parent, if it has one.
	*
	* Parent lookup prefers the core row model for structural parents, then falls
	* back to the pre-pagination row model for generated parent rows.
	*
	* @example
	* ```ts
	* const parent = row_getParentRow(row)
	* ```
	*/
	function row_getParentRow(row) {
		if (!row.parentId) return;
		return row.table.getCoreRowModel().rowsById[row.parentId] ?? row.table.getRow(row.parentId, true);
	}
	/**
	* Collects this row's ancestor chain from root to direct parent.
	*
	* The current row is not included. Rows without a parent return an empty array.
	*
	* @example
	* ```ts
	* const ancestors = row_getParentRows(row)
	* ```
	*/
	function row_getParentRows(row) {
		const parentRows = [];
		let currentRow = row;
		while (true) {
			const parentRow = currentRow.getParentRow();
			if (!parentRow) break;
			parentRows.push(parentRow);
			currentRow = parentRow;
		}
		return parentRows.reverse();
	}
	/**
	* Constructs one cell for each leaf column in this row.
	*
	* The result follows `table.getAllLeafColumns()` order and includes hidden
	* columns; visibility-specific APIs filter this list later.
	*
	* @example
	* ```ts
	* const cells = row_getAllCells(row)
	* ```
	*/
	function row_getAllCells(row) {
		const columns = row.table.getAllLeafColumns();
		let cache = row._cellsCache;
		if (!cache) cache = row._cellsCache = /* @__PURE__ */ new WeakMap();
		const cells = new Array(columns.length);
		for (let i = 0; i < columns.length; i++) {
			const column = columns[i];
			let cell = cache.get(column);
			if (!cell) {
				cell = constructCell(column, row, row.table);
				cache.set(column, cell);
			}
			cells[i] = cell;
		}
		return cells;
	}
	/**
	* Builds a lookup map of this row's cells keyed by column id.
	*
	* This is the static implementation behind `row.getAllCellsByColumnId()`.
	*
	* @example
	* ```ts
	* const cellsById = row_getAllCellsByColumnId(row)
	* ```
	*/
	function row_getAllCellsByColumnId(row) {
		const result = makeObjectMap();
		const cells = row.getAllCells();
		for (let i = 0; i < cells.length; i++) {
			const cell = cells[i];
			result[cell.column.id] = cell;
		}
		return result;
	}
	/**
	* Resolves the stable id for a row.
	*
	* `options.getRowId` wins when provided. Otherwise root rows use their index
	* and child rows append their index to the parent id, such as `0.2`.
	*
	* @example
	* ```ts
	* const id = table_getRowId(originalRow, table, index, parentRow)
	* ```
	*/
	function table_getRowId(originalRow, table, index, parent) {
		return table.options.getRowId?.(originalRow, index, parent) ?? (parent ? `${parent.id}.${index}` : String(index));
	}
	/**
	* Looks up a row by id from the current or full row model.
	*
	* By default this searches `table.getRowModel()`. Passing `searchAll` searches
	* the pre-pagination model first, then falls back to the core model.
	*
	* @example
	* ```ts
	* const row = table_getRow(table, rowId, true)
	* ```
	*/
	function table_getRow(table, rowId, searchAll) {
		let row = (searchAll ? table.getPrePaginatedRowModel() : table.getRowModel()).rowsById[rowId];
		if (!row) {
			row = table.getCoreRowModel().rowsById[rowId];
			if (!row) throw new Error();
		}
		return row;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/rows/coreRowsFeature.js
	/**
	* Core feature that creates row APIs for values, cells, and tree traversal.
	*/
	const coreRowsFeature = {
		assignRowPrototype: (prototype, table) => {
			assignPrototypeAPIs("coreRowsFeature", prototype, table, {
				row_getDisplayIndex: { fn: (row) => row_getDisplayIndex(row) },
				row_getAllCellsByColumnId: {
					fn: (row) => row_getAllCellsByColumnId(row),
					memoDeps: (row) => [row.getAllCells()]
				},
				row_getAllCells: {
					fn: (row) => row_getAllCells(row),
					memoDeps: (row) => [row.table.getAllLeafColumns()]
				},
				row_getLeafRows: {
					fn: (row) => row_getLeafRows(row),
					memoDeps: (row) => [row.subRows]
				},
				row_getParentRow: { fn: (row) => row_getParentRow(row) },
				row_getParentRows: { fn: (row) => row_getParentRows(row) },
				row_getUniqueValues: { fn: (row, columnId) => row_getUniqueValues(row, columnId) },
				row_getValue: { fn: (row, columnId) => row_getValue(row, columnId) },
				row_renderValue: { fn: (row, columnId) => row_renderValue(row, columnId) }
			});
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("coreRowsFeature", table, {
				table_getRowsInDisplayOrder: {
					fn: () => table_getRowsInDisplayOrder(table),
					memoDeps: () => [
						table.getPrePaginatedRowModel().rows,
						table.options.paginateExpandedRows,
						table.options.paginateExpandedRows === false ? table.atoms.expanded?.get() : void 0
					]
				},
				table_getRowId: { fn: (originalRow, index, parent) => table_getRowId(originalRow, table, index, parent) },
				table_getRow: { fn: (id, searchAll) => table_getRow(table, id, searchAll) },
				table_getMaxSubRowDepth: {
					fn: () => table_getMaxSubRowDepth(table),
					memoDeps: () => [table.getCoreRowModel()]
				}
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/table/coreTablesFeature.utils.js
	/**
	* Synchronizes externally controlled state slices into the table's base atoms.
	*
	* This keeps `options.state` values mirrored in the atom graph so derived
	* atoms, stores, and table APIs read a consistent snapshot.
	*
	* Adapters that update options during their host's render phase pass the
	* state snapshot captured by the committed render as `capturedState` — the
	* shared options object may already hold values from a newer render that
	* never commits. Pass `null` to publish nothing (a captured "no controlled
	* state"); omitting the argument reads the current `table.options.state`
	* instead. An optional `compare` suppresses semantically unchanged slice
	* writes; the default remains reference equality.
	*
	* @example
	* ```ts
	* table_syncExternalStateToBaseAtoms(table)
	* table_syncExternalStateToBaseAtoms(table, capturedState ?? null, shallow)
	* ```
	*/
	function table_syncExternalStateToBaseAtoms(table, capturedState, compare = (currentState, externalState) => currentState === externalState) {
		const state = capturedState === void 0 ? table.options.state : capturedState;
		table._reactivity.batch(() => {
			if (state) for (const key in state) {
				const baseAtom = table.baseAtoms[key];
				if (!baseAtom) continue;
				const rawExternalState = state[key];
				const externalState = rawExternalState === void 0 ? table.initialState[key] : rawExternalState;
				if (!compare(table._reactivity.untrack(() => baseAtom.get()), externalState)) baseAtom.set(() => externalState);
			}
		});
	}
	/**
	* Publishes captured controlled state after a host framework commits.
	*
	* Render-phase adapters stage options without synchronizing base atoms, then
	* pass the state captured by the committed render here. The commit signal also
	* invalidates ownership changes when no base atom was written.
	*/
	function table_publishExternalState(table, state, compare = (currentState, externalState) => currentState === externalState) {
		table._reactivity.batch(() => {
			table_syncExternalStateToBaseAtoms(table, state, compare);
			table._reactivity.commit?.();
		});
	}
	/**
	* Resets all internal table base atoms to `table.initialState`, then clears
	* transient instance data through registered feature reset hooks.
	*
	* This resets internally owned state slices in a single reactivity batch. Use
	* feature-specific reset APIs when a slice may be externally owned.
	*
	* @example
	* ```ts
	* table_reset(table)
	* ```
	*/
	function table_reset(table) {
		const snap = cloneState(table.initialState);
		table._reactivity.batch(() => {
			const keys = Object.keys(snap);
			for (let i = 0; i < keys.length; i++) {
				const key = keys[i];
				table.baseAtoms[key].set(snap[key]);
			}
		});
		const features = Object.values(table._features);
		for (let i = 0; i < features.length; i++) features[i].resetTableInstanceData?.(table);
	}
	/**
	* Merges new table options with the current resolved options.
	*
	* If `options.mergeOptions` is provided, it owns the merge behavior; otherwise
	* options are shallow-merged. Static options that should never change after
	* initialization are restored on a fresh object so framework merge helpers may
	* return readonly getter/proxy objects.
	*
	* @example
	* ```ts
	* const options = table_mergeOptions(table, nextOptions)
	* ```
	*/
	function table_mergeOptions(table, newOptions) {
		const { features, atoms, initialState } = table.options;
		if (!table.options.mergeOptions) return {
			...table.options,
			...newOptions,
			features,
			atoms,
			initialState
		};
		const mergedOptions = table.options.mergeOptions(table.options, newOptions);
		const descriptors = { ...Object.getOwnPropertyDescriptors(mergedOptions) };
		return Object.defineProperties(Object.create(Object.getPrototypeOf(mergedOptions)), {
			...descriptors,
			features: {
				value: features,
				enumerable: true,
				configurable: true,
				writable: true
			},
			atoms: {
				value: atoms,
				enumerable: true,
				configurable: true,
				writable: true
			},
			initialState: {
				value: initialState,
				enumerable: true,
				configurable: true,
				writable: true
			}
		});
	}
	/**
	* Updates the table options object.
	*
	* The updater receives the current resolved options and the merged result is
	* immediately assigned to the table instance.
	*
	* @example
	* ```ts
	* table_setOptions(table, (old) => old)
	* table_setOptions(table, (old) => old, { syncExternalState: false })
	* ```
	*/
	function table_setOptions(table, updater, options) {
		const mergedOptions = table_mergeOptions(table, functionalUpdate(updater, table.options));
		if (table.optionsStore) table.optionsStore.set(() => mergedOptions);
		else table.options = mergedOptions;
		if (options?.syncExternalState !== false) table_publishExternalState(table, mergedOptions.state ?? null);
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/coreFeatures.js
	/**
	* The built-in core feature set required by every table.
	*
	* These features provide table, column, row, header, cell, and core row-model behavior before optional feature plugins are added.
	*/
	const coreFeatures = {
		coreCellsFeature,
		coreColumnsFeature,
		coreHeadersFeature,
		coreRowModelsFeature,
		coreRowsFeature,
		coreTablesFeature: { constructTableAPIs: (table) => {
			assignTableAPIs("coreTablesFeature", table, {
				table_reset: { fn: () => table_reset(table) },
				table_setOptions: { fn: (updater) => table_setOptions(table, updater) }
			});
		} }
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/helpers/tableFeatures.js
	/**
	* A helper function to help define the features that are to be imported and applied to a table instance.
	* Use this utility to make it easier to have the correct type inference for the features that are being imported.
	* **Note:** It is recommended to use this utility statically outside of a component.
	*
	* Alongside feature modules, this object carries everything else that is
	* statically stitched into the table:
	*
	* - Row model factories (`sortedRowModel`, `filteredRowModel`, etc.)
	* - Row model function registries (`sortFns`, `filterFns`, `aggregationFns`),
	*   whose keys become the valid string values for `sortFn`, `filterFn`,
	*   `globalFilterFn`, and `aggregationFn` with full inference
	* - Type-only `tableMeta`/`columnMeta` slots for declaring per-table meta types
	*   instead of using global declaration merging. The values are phantom
	*   (ignored and stripped at runtime); only their types are used.
	* @example
	* ```
	* import {
	*   columnFilteringFeature,
	*   createFilteredRowModel,
	*   createSortedRowModel,
	*   filterFn_includesString,
	*   rowSortingFeature,
	*   sortFn_alphanumeric,
	*   sortFn_text,
	*   tableFeatures,
	* } from '@tanstack/react-table'
	* const features = tableFeatures({
	*   columnFilteringFeature,
	*   rowSortingFeature,
	*   filteredRowModel: createFilteredRowModel(),
	*   sortedRowModel: createSortedRowModel(),
	*   filterFns: { includesString: filterFn_includesString, myCustomFilterFn },
	*   sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
	*   tableMeta: {} as { updateData: (rowIndex: number, columnId: string, value: unknown) => void },
	*   columnMeta: {} as { align?: 'left' | 'right' },
	* });
	* const table = useTable({ features, columns, data });
	* ```
	*/
	function tableFeatures(features) {
		return features;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/reactivity/coreReactivityFeature.utils.js
	/**
	* Bridges atom instances to the `Store`/`ReadonlyStore` API by exposing
	* a `state` getter backed by `atom.get()`, and wiring `setState` for
	* writable atoms.
	*
	* @example
	* ```ts
	* const store = atomToStore(atom)
	* ```
	*/
	function atomToStore(atom) {
		const store = atom;
		Object.defineProperty(atom, "state", { get() {
			return atom.get();
		} });
		if ("set" in atom) store.setState = atom.set.bind(atom);
		return store;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/core/table/constructTable.js
	/**
	* Builds the initial table state from registered features and user initial state.
	*
	* Each feature contributes its default state before user-provided `initialState` values are merged in.
	*/
	function getInitialTableState(features, initialState = {}) {
		Object.values(features).forEach((feature) => {
			initialState = feature.getInitialState?.(initialState) ?? initialState;
		});
		return cloneState(initialState);
	}
	/**
	* Constructs a table instance from normalized table internals.
	*
	* This wires core properties, feature prototype APIs, and instance data used by table rendering and row-model operations.
	*/
	function constructTable(tableOptions) {
		const _reactivity = tableOptions.features.coreReactivityFeature;
		const { aggregationFns, columnMeta: _columnMeta, coreRowModel, expandedRowModel, facetedMinMaxValues, facetedRowModel, facetedUniqueValues, filterFns, filterMeta: _filterMeta, filteredRowModel, groupedRowModel, paginatedRowModel, sortFns, sortedRowModel, tableMeta: _tableMeta, ...features } = tableOptions.features;
		const table = {
			_cellInstanceInitFns: [],
			_columnInstanceInitFns: [],
			_features: {
				...coreFeatures,
				...features
			},
			_headerGroupInstanceInitFns: [],
			_headerInstanceInitFns: [],
			_reactivity,
			_rowInstanceInitFns: [],
			_rowModelFns: {
				aggregationFns,
				filterFns,
				sortFns
			},
			_rowModels: {},
			atoms: {},
			baseAtoms: {}
		};
		const featuresList = Object.values(table._features);
		const mergedOptions = {
			...featuresList.reduce((obj, feature) => {
				return Object.assign(obj, feature.getDefaultTableOptions?.(table));
			}, {}),
			...tableOptions
		};
		if (_reactivity.wrapExternalAtoms && mergedOptions.atoms) for (const [atomKey, _atom] of Object.entries(mergedOptions.atoms)) {
			const atom = _atom;
			const wrappedAtom = _reactivity.createWritableAtom(atom.get(), { debugName: `externalAtom/${atomKey}` });
			mergedOptions.atoms[atomKey] = wrappedAtom;
			let syncExternal = false;
			const syncAtomToWrappedSub = atom.subscribe((value) => {
				if (syncExternal) return;
				wrappedAtom.set(value);
			});
			const syncWrappedToAtomSub = wrappedAtom.subscribe((value) => {
				syncExternal = true;
				atom.set(value);
				syncExternal = false;
			});
			_reactivity.addSubscription(syncAtomToWrappedSub);
			_reactivity.addSubscription(syncWrappedToAtomSub);
		}
		if (_reactivity.createOptionsStore) {
			table.optionsStore = _reactivity.createWritableAtom(mergedOptions, { debugName: "table/optionsStore" });
			Object.defineProperty(table, "options", {
				configurable: true,
				enumerable: true,
				get() {
					return table.optionsStore.get();
				},
				set(value) {
					table.optionsStore.set(() => value);
				}
			});
		} else table.options = mergedOptions;
		table.initialState = getInitialTableState(table._features, table.options.initialState);
		const stateKeys = Object.keys(table.initialState);
		for (let i = 0; i < stateKeys.length; i++) {
			const key = stateKeys[i];
			table.baseAtoms[key] = _reactivity.createWritableAtom(table.initialState[key], { debugName: `table/baseAtoms/${key}` });
			table.atoms[key] = _reactivity.createReadonlyAtom(() => {
				const options = table.options;
				const externalAtom = options.atoms?.[key];
				const reactiveState = externalAtom ? externalAtom.get() : table.baseAtoms[key].get();
				if (externalAtom) return reactiveState;
				const controlledState = options.state;
				if (controlledState && hasOwn(controlledState, key)) {
					const controlledValue = controlledState[key];
					return controlledValue === void 0 ? table.initialState[key] : controlledValue;
				}
				return reactiveState;
			}, { debugName: `table/atoms/${key}` });
		}
		table_syncExternalStateToBaseAtoms(table);
		table.store = atomToStore(_reactivity.createReadonlyAtom(() => {
			const snapshot = {};
			for (let i = 0; i < stateKeys.length; i++) {
				const key = stateKeys[i];
				snapshot[key] = table.atoms[key].get();
			}
			return snapshot;
		}, {
			compare: shallow,
			debugName: "table/store"
		}));
		for (let i = 0; i < featuresList.length; i++) {
			const feature = featuresList[i];
			feature.initTableInstanceData?.(table);
			if (feature.initCellInstanceData) table._cellInstanceInitFns.push(feature.initCellInstanceData.bind(feature));
			if (feature.initColumnInstanceData) table._columnInstanceInitFns.push(feature.initColumnInstanceData.bind(feature));
			if (feature.initHeaderGroupInstanceData) table._headerGroupInstanceInitFns.push(feature.initHeaderGroupInstanceData.bind(feature));
			if (feature.initHeaderInstanceData) table._headerInstanceInitFns.push(feature.initHeaderInstanceData.bind(feature));
			if (feature.initRowInstanceData) table._rowInstanceInitFns.push(feature.initRowInstanceData.bind(feature));
			feature.constructTableAPIs?.(table);
		}
		return table;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/cell-selection/cellSelectionFeature.js
	/**
	* Feature that adds spreadsheet-style cell range selection state and APIs.
	*/
	const cellSelectionFeature = {
		initTableInstanceData: (table) => {
			table._isSelectingCells = false;
		},
		resetTableInstanceData: (table) => {
			table._isSelectingCells = false;
		},
		getInitialState: (initialState) => {
			return {
				cellSelection: getDefaultCellSelectionState(),
				...initialState
			};
		},
		getDefaultTableOptions: (table) => {
			return {
				onCellSelectionChange: makeStateUpdater("cellSelection", table),
				autoResetCellSelection: true,
				enableCellSelection: true,
				enableCellRangeSelection: true,
				enableMultiCellRangeSelection: true,
				enableCellSelectionDrag: true,
				isCellRangeSelectionEvent: (event) => {
					const rangeEvent = event;
					return Boolean(rangeEvent.shiftKey || rangeEvent.nativeEvent?.shiftKey);
				},
				isMultiCellRangeSelectionEvent: (event) => {
					const multiEvent = event;
					return Boolean(multiEvent.ctrlKey || multiEvent.metaKey || multiEvent.nativeEvent?.ctrlKey || multiEvent.nativeEvent?.metaKey);
				}
			};
		},
		assignCellPrototype: (prototype, table) => {
			assignPrototypeAPIs("cellSelectionFeature", prototype, table, {
				cell_getCanSelect: { fn: (cell) => cell_getCanSelect(cell) },
				cell_getIsSelected: { fn: (cell) => cell_getIsSelected(cell) },
				cell_getIsFocused: { fn: (cell) => cell_getIsFocused(cell) },
				cell_getTabIndex: { fn: (cell) => cell_getTabIndex(cell) },
				cell_getSelectionEdges: { fn: (cell) => cell_getSelectionEdges(cell) },
				cell_getSelectionStartHandler: { fn: (cell, contextDocument) => cell_getSelectionStartHandler(cell, contextDocument) },
				cell_getSelectionExtendHandler: { fn: (cell) => cell_getSelectionExtendHandler(cell) }
			});
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("cellSelectionFeature", table, {
				table_setCellSelection: { fn: (updater) => table_setCellSelection(table, updater) },
				table_resetCellSelection: { fn: (defaultState) => table_resetCellSelection(table, defaultState) },
				table_autoResetCellSelection: { fn: () => table_autoResetCellSelection(table) },
				table_getCellSelectionColumnIndexes: {
					fn: () => table_getCellSelectionColumnIndexes(table),
					memoDeps: () => [
						table.atoms.columnVisibility?.get(),
						table.atoms.columnOrder?.get(),
						table.atoms.columnPinning?.get(),
						table.atoms.grouping?.get(),
						table.options.columns,
						table.options.groupedColumnMode
					]
				},
				table_getCellSelectionMergeBounds: {
					fn: () => table_getCellSelectionMergeBounds(table),
					memoDeps: () => [
						table.getCellSpanIndex?.(),
						table.getRowsInDisplayOrder(),
						callMemoOrStaticFn(table, "getCellSelectionColumnIndexes", table_getCellSelectionColumnIndexes)
					]
				},
				table_getCellSelectionBounds: {
					fn: () => table_getCellSelectionBounds(table),
					memoDeps: () => [
						table.atoms.cellSelection?.get(),
						table.getRowsInDisplayOrder(),
						callMemoOrStaticFn(table, "getCellSelectionColumnIndexes", table_getCellSelectionColumnIndexes),
						callMemoOrStaticFn(table, "getCellSelectionMergeBounds", table_getCellSelectionMergeBounds)
					]
				},
				table_selectCellRange: { fn: (range, opts) => table_selectCellRange(table, range, opts) },
				table_selectAllCells: { fn: () => table_selectAllCells(table) },
				table_setFocusedCell: { fn: (rowId, columnId) => table_setFocusedCell(table, rowId, columnId) },
				table_getFocusedCell: { fn: () => table_getFocusedCell(table) },
				table_moveCellSelection: { fn: (direction) => table_moveCellSelection(table, direction) },
				table_extendCellSelection: { fn: (direction) => table_extendCellSelection(table, direction) },
				table_getSelectedCellIds: {
					fn: () => table_getSelectedCellIds(table),
					memoDeps: () => [
						callMemoOrStaticFn(table, "getCellSelectionBounds", table_getCellSelectionBounds),
						callMemoOrStaticFn(table, "getCellSelectionMergeBounds", table_getCellSelectionMergeBounds),
						table.getRowsInDisplayOrder(),
						table.options.enableCellSelection
					]
				},
				table_getSelectedCellRangesData: {
					fn: () => table_getSelectedCellRangesData(table),
					memoDeps: () => [
						callMemoOrStaticFn(table, "getCellSelectionBounds", table_getCellSelectionBounds),
						table.getRowsInDisplayOrder(),
						table.options.enableCellSelection
					]
				},
				table_getSelectedCellCount: {
					fn: () => table_getSelectedCellCount(table),
					memoDeps: () => [
						callMemoOrStaticFn(table, "getCellSelectionBounds", table_getCellSelectionBounds),
						callMemoOrStaticFn(table, "getCellSelectionMergeBounds", table_getCellSelectionMergeBounds),
						table.getRowsInDisplayOrder(),
						table.options.enableCellSelection
					]
				},
				table_getCellSelectionRowIds: {
					fn: () => table_getCellSelectionRowIds(table),
					memoDeps: () => [callMemoOrStaticFn(table, "getCellSelectionBounds", table_getCellSelectionBounds), table.getRowsInDisplayOrder()]
				},
				table_getCellSelectionColumnIds: {
					fn: () => table_getCellSelectionColumnIds(table),
					memoDeps: () => [callMemoOrStaticFn(table, "getCellSelectionBounds", table_getCellSelectionBounds)]
				}
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-faceting/columnFacetingFeature.utils.js
	/**
	* Computes min and max numeric facet values for one column.
	*
	* The configured `facetedMinMaxValues` row-model factory owns the calculation.
	* If no factory is registered, the result is `undefined`.
	*
	* @example
	* ```ts
	* const range = column_getFacetedMinMaxValues(column, table)
	* ```
	*/
	function column_getFacetedMinMaxValues(column, table) {
		const facetedMinMaxValues = table._rowModels.facetedMinMaxValues ??= makeObjectMap();
		let facetedMinMaxValuesFn = facetedMinMaxValues[column.id];
		if (!facetedMinMaxValuesFn) facetedMinMaxValuesFn = facetedMinMaxValues[column.id] = table.options.features.facetedMinMaxValues?.(table, column.id) ?? (() => void 0);
		return facetedMinMaxValuesFn();
	}
	/**
	* Computes the row model used to derive one column's facet values.
	*
	* The faceted row model normally applies every other active filter while
	* excluding this column's own filter. If no factory is registered, the
	* pre-filtered row model is returned.
	*
	* @example
	* ```ts
	* const rows = column_getFacetedRowModel(column, table)
	* ```
	*/
	function column_getFacetedRowModel(column, table) {
		const columnId = column?.id ?? "";
		const facetedRowModels = table._rowModels.facetedRowModels ??= makeObjectMap();
		let facetedRowModelFn = facetedRowModels[columnId];
		if (!facetedRowModelFn) facetedRowModelFn = facetedRowModels[columnId] = table.options.features.facetedRowModel?.(table, columnId) ?? (() => table.getPreFilteredRowModel());
		return facetedRowModelFn();
	}
	/**
	* Computes unique facet values and their occurrence counts for one column.
	*
	* The configured `facetedUniqueValues` row-model factory owns the calculation.
	* If no factory is registered, an empty `Map` is returned.
	*
	* @example
	* ```ts
	* const values = column_getFacetedUniqueValues(column, table)
	* ```
	*/
	function column_getFacetedUniqueValues(column, table) {
		const facetedUniqueValues = table._rowModels.facetedUniqueValues ??= makeObjectMap();
		let facetedUniqueValuesFn = facetedUniqueValues[column.id];
		if (!facetedUniqueValuesFn) facetedUniqueValuesFn = facetedUniqueValues[column.id] = table.options.features.facetedUniqueValues?.(table, column.id) ?? createStableEmptyMapFn();
		return facetedUniqueValuesFn();
	}
	function createStableEmptyMapFn() {
		const emptyMap = /* @__PURE__ */ new Map();
		return () => emptyMap;
	}
	/**
	* Computes min and max numeric facet values for the global filter context.
	*
	* The global context is requested with the internal `__global__` column id. If
	* no factory is registered, the result is `undefined`.
	*
	* @example
	* ```ts
	* const range = table_getGlobalFacetedMinMaxValues(table)
	* ```
	*/
	function table_getGlobalFacetedMinMaxValues(table) {
		if (!table._rowModels.globalFacetedMinMaxValues) table._rowModels.globalFacetedMinMaxValues = table.options.features.facetedMinMaxValues?.(table, "__global__") ?? (() => void 0);
		const facetedMinMaxValuesFn = table._rowModels.globalFacetedMinMaxValues;
		return facetedMinMaxValuesFn();
	}
	/**
	* Computes the row model used to derive global facet values.
	*
	* The global context is requested with the internal `__global__` column id. If
	* no faceted row-model factory is registered, the pre-filtered row model is
	* returned.
	*
	* @example
	* ```ts
	* const rows = table_getGlobalFacetedRowModel(table)
	* ```
	*/
	function table_getGlobalFacetedRowModel(table) {
		if (!table._rowModels.globalFacetedRowModel) table._rowModels.globalFacetedRowModel = table.options.features.facetedRowModel?.(table, "__global__") ?? (() => table.getPreFilteredRowModel());
		const facetedRowModelFn = table._rowModels.globalFacetedRowModel;
		return facetedRowModelFn();
	}
	/**
	* Computes unique values and occurrence counts for the global filter context.
	*
	* The global context is requested with the internal `__global__` column id. If
	* no factory is registered, an empty `Map` is returned.
	*
	* @example
	* ```ts
	* const values = table_getGlobalFacetedUniqueValues(table)
	* ```
	*/
	function table_getGlobalFacetedUniqueValues(table) {
		if (!table._rowModels.globalFacetedUniqueValues) table._rowModels.globalFacetedUniqueValues = table.options.features.facetedUniqueValues?.(table, "__global__") ?? createStableEmptyMapFn();
		const facetedUniqueValuesFn = table._rowModels.globalFacetedUniqueValues;
		return facetedUniqueValuesFn();
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-faceting/columnFacetingFeature.js
	/**
	* Feature that derives faceted row models, unique values, and min/max values for filters.
	*
	* These APIs are deliberately not memoized at this layer: the stock
	* `createFaceted*` factories memoize internally (like every other stock row
	* model), and an extra memo layer here would freeze custom factories whose
	* data changes independently of the faceted row model. Custom factories own
	* their memoization.
	*/
	const columnFacetingFeature = {
		assignColumnPrototype: (prototype, table) => {
			assignPrototypeAPIs("columnFacetingFeature", prototype, table, {
				column_getFacetedRowModel: { fn: (column) => column_getFacetedRowModel(column, column.table) },
				column_getFacetedMinMaxValues: { fn: (column) => column_getFacetedMinMaxValues(column, column.table) },
				column_getFacetedUniqueValues: { fn: (column) => column_getFacetedUniqueValues(column, column.table) }
			});
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("columnFacetingFeature", table, {
				table_getGlobalFacetedRowModel: { fn: () => table_getGlobalFacetedRowModel(table) },
				table_getGlobalFacetedMinMaxValues: { fn: () => table_getGlobalFacetedMinMaxValues(table) },
				table_getGlobalFacetedUniqueValues: { fn: () => table_getGlobalFacetedUniqueValues(table) }
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-filtering/columnFilteringFeature.utils.js
	/**
	* Creates the default column filter state.
	*
	* The feature default is an empty array, meaning no column filters are active.
	* Reset APIs use this value when `defaultState` is `true`.
	*
	* @example
	* ```ts
	* const filters = getDefaultColumnFiltersState()
	* ```
	*/
	function getDefaultColumnFiltersState() {
		return [];
	}
	/**
	* Chooses a built-in filter function from the column's first core row value.
	*
	* Strings use `includesString`, numbers use `inNumberRange`, booleans and
	* objects use `equals`, dates use `inDateRange`, arrays use `arrIncludes`,
	* and unknown values fall back to `weakEquals`.
	*
	* The chosen filter function is looked up in the table's `filterFns`
	* registry. When it is not registered there, this returns `undefined` and
	* warns in development instead of substituting a different filter function.
	*
	* @example
	* ```ts
	* const filterFn = column_getAutoFilterFn(column)
	* ```
	*/
	function column_getAutoFilterFn(column) {
		const filterFns = column.table._rowModelFns.filterFns;
		const rows = column.table.getCoreRowModel().flatRows;
		let value;
		for (let i = 0; i < rows.length; i++) {
			const rowValue = rows[i].getValue(column.id);
			if (rowValue !== null && rowValue !== void 0) {
				value = rowValue;
				break;
			}
		}
		let filterFnName;
		if (typeof value === "string") filterFnName = "includesString";
		else if (typeof value === "number") filterFnName = "inNumberRange";
		else if (typeof value === "boolean") filterFnName = "equals";
		else if (Array.isArray(value)) filterFnName = "arrIncludes";
		else if (Object.prototype.toString.call(value) === "[object Date]") filterFnName = "inDateRange";
		else if (value !== null && typeof value === "object") filterFnName = "equals";
		else filterFnName = "weakEquals";
		return filterFns?.[filterFnName];
	}
	/**
	* Resolves the filter function configured for a column.
	*
	* Function-valued `columnDef.filterFn` is returned directly, `'auto'` delegates
	* to `column_getAutoFilterFn`, and string values are looked up in the table's
	* filter function registry.
	*
	* @example
	* ```ts
	* const filterFn = column_getFilterFn(column)
	* ```
	*/
	function column_getFilterFn(column) {
		let filterFn = null;
		const filterFns = column.table._rowModelFns.filterFns;
		filterFn = isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === "auto" ? column_getAutoFilterFn(column) : filterFns?.[column.columnDef.filterFn];
		return filterFn ?? void 0;
	}
	/**
	* Checks whether column filtering is enabled for this accessor column.
	*
	* The column must have an accessor and filtering must be enabled by the column
	* definition, `enableColumnFilters`, and the table-wide `enableFilters` option.
	*
	* @example
	* ```ts
	* const canFilter = column_getCanFilter(column)
	* ```
	*/
	function column_getCanFilter(column) {
		return (column.columnDef.enableColumnFilter ?? true) && (column.table.options.enableColumnFilters ?? true) && (column.table.options.enableFilters ?? true) && !!column.accessorFn;
	}
	/**
	* Checks whether this column currently has an entry in `state.columnFilters`.
	*
	* This only reflects filter state presence; it does not indicate whether the
	* filter removes any rows.
	*
	* @example
	* ```ts
	* const isFiltered = column_getIsFiltered(column)
	* ```
	*/
	function column_getIsFiltered(column) {
		return column_getFilterIndex(column) > -1;
	}
	/**
	* Reads this column's current filter value from `state.columnFilters`.
	*
	* Missing filter entries return `undefined`.
	*
	* @example
	* ```ts
	* const value = column_getFilterValue(column)
	* ```
	*/
	function column_getFilterValue(column) {
		return column.table.atoms.columnFilters?.get()?.find((d) => d.id === column.id)?.value;
	}
	/**
	* Finds this column's position in the ordered `state.columnFilters` array.
	*
	* The result is `-1` when the column has no active filter.
	*
	* @example
	* ```ts
	* const index = column_getFilterIndex(column)
	* ```
	*/
	function column_getFilterIndex(column) {
		return column.table.atoms.columnFilters?.get()?.findIndex((d) => d.id === column.id) ?? -1;
	}
	/**
	* Adds, updates, or removes this column's filter value.
	*
	* The incoming value may be an updater. After resolution, `autoRemove` rules
	* decide whether the filter should be removed instead of stored.
	*
	* @example
	* ```ts
	* column_setFilterValue(column, (old) => String(old ?? '').trim())
	* ```
	*/
	function column_setFilterValue(column, value) {
		table_setColumnFilters(column.table, (old) => {
			const filterFn = column_getFilterFn(column);
			const previousFilter = old.find((d) => d.id === column.id);
			const newFilter = functionalUpdate(value, previousFilter ? previousFilter.value : void 0);
			if (shouldAutoRemoveFilter(filterFn, newFilter, column)) return old.filter((d) => d.id !== column.id);
			const newFilterObj = {
				id: column.id,
				value: newFilter
			};
			if (previousFilter) return old.map((d) => {
				if (d.id === column.id) return newFilterObj;
				return d;
			});
			if (old.length) return [...old, newFilterObj];
			return [newFilterObj];
		});
	}
	/**
	* Routes a column filter updater through the table's filter change handler.
	*
	* The resolved filters are cleaned before they are emitted: filters for known
	* columns are removed when their filter function says the value should be
	* auto-removed.
	*
	* @example
	* ```ts
	* table_setColumnFilters(table, (old) => old.filter((filter) => filter.id !== 'age'))
	* ```
	*/
	function table_setColumnFilters(table, updater) {
		const leafColumnsById = table.getAllLeafColumnsById();
		const updateFn = (old) => {
			return functionalUpdate(updater, old).filter((filter) => {
				const column = leafColumnsById[filter.id];
				if (column) {
					if (shouldAutoRemoveFilter(column_getFilterFn(column), filter.value, column)) return false;
				}
				return true;
			});
		};
		table.options.onColumnFiltersChange?.(updateFn);
	}
	/**
	* Resets `columnFilters` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.columnFilters` when it
	* exists. Passing `true` ignores initial state and resets to `[]`.
	*
	* @example
	* ```ts
	* table_resetColumnFilters(table)
	* table_resetColumnFilters(table, true)
	* ```
	*/
	function table_resetColumnFilters(table, defaultState) {
		table_setColumnFilters(table, defaultState ? [] : cloneState(table.initialState.columnFilters ?? []));
	}
	/**
	* Returns whether a filter value should be removed from filter state.
	*
	* `undefined` always removes: it is the universal "clear this filter"
	* sentinel used by `setFilterValue(undefined)` and functional updaters. For
	* any other value, a filter function's `autoRemove` hook is authoritative
	* when provided, so custom filter functions can keep values (such as empty
	* strings) that the default heuristic would drop. Without an `autoRemove`
	* hook, empty strings are removed.
	*
	* @example
	* ```ts
	* const removeFilter = shouldAutoRemoveFilter(filterFn, value, column)
	* ```
	*/
	function shouldAutoRemoveFilter(filterFn, value, column) {
		if (typeof value === "undefined") return true;
		if (filterFn?.autoRemove) return !!filterFn.autoRemove(value, column);
		return typeof value === "string" && !value;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-filtering/columnFilteringFeature.js
	/**
	* Feature that adds per-column filtering state, options, and column/table filter APIs.
	*/
	const columnFilteringFeature = {
		getInitialState: (initialState) => {
			return {
				columnFilters: getDefaultColumnFiltersState(),
				...initialState
			};
		},
		getDefaultColumnDef: () => {
			return { filterFn: "auto" };
		},
		getDefaultTableOptions: (table) => {
			return {
				onColumnFiltersChange: makeStateUpdater("columnFilters", table),
				filterFromLeafRows: false,
				maxLeafRowFilterDepth: 100
			};
		},
		assignColumnPrototype: (prototype, table) => {
			assignPrototypeAPIs("columnFilteringFeature", prototype, table, {
				column_getAutoFilterFn: { fn: (column) => column_getAutoFilterFn(column) },
				column_getFilterFn: { fn: (column) => column_getFilterFn(column) },
				column_getCanFilter: { fn: (column) => column_getCanFilter(column) },
				column_getIsFiltered: { fn: (column) => column_getIsFiltered(column) },
				column_getFilterValue: { fn: (column) => column_getFilterValue(column) },
				column_getFilterIndex: { fn: (column) => column_getFilterIndex(column) },
				column_setFilterValue: { fn: (column, value) => column_setFilterValue(column, value) }
			});
		},
		initRowInstanceData: (row) => {
			row.columnFilters = makeObjectMap();
			row.columnFiltersMeta = makeObjectMap();
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("columnFilteringFeature", table, {
				table_setColumnFilters: { fn: (updater) => table_setColumnFilters(table, updater) },
				table_resetColumnFilters: { fn: (defaultState) => table_resetColumnFilters(table, defaultState) }
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-ordering/columnOrderingFeature.js
	/**
	* Feature that adds column ordering state and APIs for ordering leaf columns.
	*/
	const columnOrderingFeature = {
		getInitialState: (initialState) => {
			return {
				columnOrder: getDefaultColumnOrderState(),
				...initialState
			};
		},
		getDefaultTableOptions: (table) => {
			return { onColumnOrderChange: makeStateUpdater("columnOrder", table) };
		},
		assignColumnPrototype: (prototype, table) => {
			assignPrototypeAPIs("columnOrderingFeature", prototype, table, {
				column_getIndex: { fn: (column, position) => column_getIndex(column, position) },
				column_getIsFirstColumn: { fn: (column, position) => column_getIsFirstColumn(column, position) },
				column_getIsLastColumn: { fn: (column, position) => column_getIsLastColumn(column, position) }
			});
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("columnOrderingFeature", table, {
				table_getColumnIndexes: {
					fn: () => table_getColumnIndexes(table),
					memoDeps: () => [
						table.options.columns,
						table.atoms.columnOrder?.get(),
						table.atoms.columnPinning?.get(),
						table.atoms.columnVisibility?.get(),
						table.atoms.grouping?.get(),
						table.options.groupedColumnMode
					]
				},
				table_setColumnOrder: { fn: (updater) => table_setColumnOrder(table, updater) },
				table_resetColumnOrder: { fn: (defaultState) => table_resetColumnOrder(table, defaultState) },
				table_getOrderColumnsFn: {
					fn: () => table_getOrderColumnsFn(table),
					memoDeps: () => [
						table.atoms.columnOrder?.get(),
						table.atoms.grouping?.get(),
						table.options.groupedColumnMode
					]
				}
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-pinning/columnPinningFeature.js
	/**
	* Feature that adds column pinning state and APIs for logical start, center,
	* and end regions.
	*
	* In LTR languages/layouts, start usually corresponds to left and end to
	* right. In RTL languages/layouts, start usually corresponds to right and end
	* to left.
	*/
	const columnPinningFeature = {
		getInitialState: (initialState) => {
			return {
				columnPinning: {
					...getDefaultColumnPinningState(),
					...initialState.columnPinning
				},
				...initialState
			};
		},
		getDefaultTableOptions: (table) => {
			return { onColumnPinningChange: makeStateUpdater("columnPinning", table) };
		},
		assignColumnPrototype: (prototype, table) => {
			assignPrototypeAPIs("columnPinningFeature", prototype, table, {
				column_pin: { fn: (column, position) => column_pin(column, position) },
				column_getCanPin: { fn: (column) => column_getCanPin(column) },
				column_getPinnedIndex: { fn: (column) => column_getPinnedIndex(column) },
				column_getIsPinned: { fn: (column) => column_getIsPinned(column) }
			});
		},
		assignRowPrototype: (prototype, table) => {
			assignPrototypeAPIs("columnPinningFeature", prototype, table, {
				row_getCenterVisibleCells: {
					fn: (row) => row_getCenterVisibleCells(row),
					memoDeps: (row) => [
						row.getAllCells(),
						row.table.atoms.columnPinning?.get(),
						row.table.atoms.columnVisibility?.get()
					]
				},
				row_getStartVisibleCells: {
					fn: (row) => row_getStartVisibleCells(row),
					memoDeps: (row) => [
						row.getAllCells(),
						row.table.atoms.columnPinning?.get()?.start,
						row.table.atoms.columnVisibility?.get()
					]
				},
				row_getEndVisibleCells: {
					fn: (row) => row_getEndVisibleCells(row),
					memoDeps: (row) => [
						row.getAllCells(),
						row.table.atoms.columnPinning?.get()?.end,
						row.table.atoms.columnVisibility?.get()
					]
				}
			});
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("columnPinningFeature", table, {
				table_setColumnPinning: { fn: (updater) => table_setColumnPinning(table, updater) },
				table_resetColumnPinning: { fn: (defaultState) => table_resetColumnPinning(table, defaultState) },
				table_getIsSomeColumnsPinned: { fn: (position) => table_getIsSomeColumnsPinned(table, position) },
				table_getStartHeaderGroups: {
					fn: () => table_getStartHeaderGroups(table),
					memoDeps: () => [
						table.getAllColumns(),
						callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns),
						table.atoms.columnPinning?.get()?.start,
						table.atoms.columnOrder?.get()
					]
				},
				table_getCenterHeaderGroups: {
					fn: () => table_getCenterHeaderGroups(table),
					memoDeps: () => [
						table.getAllColumns(),
						callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns),
						table.atoms.columnPinning?.get(),
						table.atoms.columnOrder?.get()
					]
				},
				table_getEndHeaderGroups: {
					fn: () => table_getEndHeaderGroups(table),
					memoDeps: () => [
						table.getAllColumns(),
						callMemoOrStaticFn(table, "getVisibleLeafColumns", table_getVisibleLeafColumns),
						table.atoms.columnPinning?.get()?.end,
						table.atoms.columnOrder?.get()
					]
				},
				table_getStartFooterGroups: {
					fn: () => table_getStartFooterGroups(table),
					memoDeps: () => [callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups)]
				},
				table_getCenterFooterGroups: {
					fn: () => table_getCenterFooterGroups(table),
					memoDeps: () => [callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups)]
				},
				table_getEndFooterGroups: {
					fn: () => table_getEndFooterGroups(table),
					memoDeps: () => [callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups)]
				},
				table_getStartFlatHeaders: {
					fn: () => table_getStartFlatHeaders(table),
					memoDeps: () => [callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups)]
				},
				table_getEndFlatHeaders: {
					fn: () => table_getEndFlatHeaders(table),
					memoDeps: () => [callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups)]
				},
				table_getCenterFlatHeaders: {
					fn: () => table_getCenterFlatHeaders(table),
					memoDeps: () => [callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups)]
				},
				table_getStartLeafHeaders: {
					fn: () => table_getStartLeafHeaders(table),
					memoDeps: () => [callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups)]
				},
				table_getEndLeafHeaders: {
					fn: () => table_getEndLeafHeaders(table),
					memoDeps: () => [callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups)]
				},
				table_getCenterLeafHeaders: {
					fn: () => table_getCenterLeafHeaders(table),
					memoDeps: () => [callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups)]
				},
				table_getStartLeafColumns: {
					fn: () => table_getStartLeafColumns(table),
					memoDeps: () => [
						table.options.columns,
						table.atoms.columnPinning?.get(),
						table.atoms.columnOrder?.get(),
						table.atoms.grouping?.get(),
						table.options.groupedColumnMode
					]
				},
				table_getEndLeafColumns: {
					fn: () => table_getEndLeafColumns(table),
					memoDeps: () => [
						table.options.columns,
						table.atoms.columnPinning?.get(),
						table.atoms.columnOrder?.get(),
						table.atoms.grouping?.get(),
						table.options.groupedColumnMode
					]
				},
				table_getCenterLeafColumns: {
					fn: () => table_getCenterLeafColumns(table),
					memoDeps: () => [
						table.options.columns,
						table.atoms.columnPinning?.get(),
						table.atoms.columnOrder?.get(),
						table.atoms.grouping?.get(),
						table.options.groupedColumnMode
					]
				},
				table_getPinnedLeafColumns: { fn: (position) => table_getPinnedLeafColumns(table, position) },
				table_getStartVisibleLeafColumns: {
					fn: () => table_getStartVisibleLeafColumns(table),
					memoDeps: () => [
						table.options.columns,
						table.atoms.columnPinning?.get(),
						table.atoms.columnVisibility?.get(),
						table.atoms.columnOrder?.get(),
						table.atoms.grouping?.get(),
						table.options.groupedColumnMode
					]
				},
				table_getCenterVisibleLeafColumns: {
					fn: () => table_getCenterVisibleLeafColumns(table),
					memoDeps: () => [
						table.options.columns,
						table.atoms.columnPinning?.get(),
						table.atoms.columnVisibility?.get(),
						table.atoms.columnOrder?.get(),
						table.atoms.grouping?.get(),
						table.options.groupedColumnMode
					]
				},
				table_getEndVisibleLeafColumns: {
					fn: () => table_getEndVisibleLeafColumns(table),
					memoDeps: () => [
						table.options.columns,
						table.atoms.columnPinning?.get(),
						table.atoms.columnVisibility?.get(),
						table.atoms.columnOrder?.get(),
						table.atoms.grouping?.get(),
						table.options.groupedColumnMode
					]
				},
				table_getPinnedVisibleLeafColumns: { fn: (position) => table_getPinnedVisibleLeafColumns(table, position) }
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-sizing/columnSizingFeature.utils.js
	/**
	* Creates the default committed column sizing state.
	*
	* The feature default is an empty map, so columns fall back to their column def
	* size or the built-in sizing defaults.
	*
	* @example
	* ```ts
	* const sizing = getDefaultColumnSizingState()
	* ```
	*/
	function getDefaultColumnSizingState() {
		return makeObjectMap();
	}
	/**
	* Creates the built-in sizing defaults for column definitions.
	*
	* Columns default to `size: 150`, `minSize: 20`, and
	* `maxSize: Number.MAX_SAFE_INTEGER` unless overridden by column definitions or
	* table defaults.
	*
	* @example
	* ```ts
	* const defaults = getDefaultColumnSizingColumnDef()
	* ```
	*/
	function getDefaultColumnSizingColumnDef() {
		return {
			size: 150,
			minSize: 20,
			maxSize: Number.MAX_SAFE_INTEGER
		};
	}
	/**
	* Resolves a column's current pixel size.
	*
	* Committed `state.columnSizing[column.id]` wins over `columnDef.size`, then the
	* built-in default size. The result is clamped between min and max size.
	*
	* @example
	* ```ts
	* const width = column_getSize(column)
	* ```
	*/
	function column_getSize(column) {
		const defaultSizes = getDefaultColumnSizingColumnDef();
		const columnSizing = column.table.atoms.columnSizing?.get();
		const columnSize = columnSizing && hasOwn(columnSizing, column.id) ? columnSizing[column.id] : void 0;
		return Math.min(Math.max(column.columnDef.minSize ?? defaultSizes.minSize, columnSize ?? column.columnDef.size ?? defaultSizes.size), column.columnDef.maxSize ?? defaultSizes.maxSize);
	}
	function buildColumnOffsets(columns) {
		const starts = makeObjectMap();
		const afters = makeObjectMap();
		const sizes = new Array(columns.length);
		let start = 0;
		for (let i = 0; i < columns.length; i++) {
			const column = columns[i];
			const size = callMemoOrStaticFn(column, "getSize", column_getSize);
			sizes[i] = size;
			starts[column.id] = start;
			start += size;
		}
		let after = 0;
		for (let i = columns.length - 1; i >= 0; i--) {
			afters[columns[i].id] = after;
			after += sizes[i];
		}
		return {
			starts,
			afters
		};
	}
	/**
	* Builds start and after offset maps for every visible leaf column, computed
	* once per pinning region plus the full visible list.
	*
	* A single table-level memo of this result backs all `column.getStart()` and
	* `column.getAfter()` calls with O(1) lookups.
	*
	* @example
	* ```ts
	* const offsets = table_getColumnOffsets(table)
	* const startOffset = offsets.start.starts[column.id]
	* ```
	*/
	function table_getColumnOffsets(table) {
		return {
			all: buildColumnOffsets(table_getPinnedVisibleLeafColumns(table)),
			center: buildColumnOffsets(table_getPinnedVisibleLeafColumns(table, "center")),
			start: buildColumnOffsets(table_getPinnedVisibleLeafColumns(table, "start")),
			end: buildColumnOffsets(table_getPinnedVisibleLeafColumns(table, "end"))
		};
	}
	function toOffsetsKey(position) {
		return position === "start" ? "start" : position === "end" ? "end" : position === "center" ? "center" : "all";
	}
	/**
	* Computes the offset from the start edge of a pinning region to this column.
	*
	* The value is the sum of all previous visible leaf column sizes in the
	* requested `'start'`, `'center'`, or `'end'` region.
	*
	* `start` and `end` are logical positions. In LTR languages/layouts, `start`
	* usually corresponds to left and `end` to right. In RTL languages/layouts,
	* `start` usually corresponds to right and `end` to left.
	*
	* @example
	* ```ts
	* const startOffset = column_getStart(column, 'start')
	* ```
	*/
	function column_getStart(column, position) {
		return callMemoOrStaticFn(column.table, "getColumnOffsets", table_getColumnOffsets)[toOffsetsKey(position)].starts[column.id] ?? 0;
	}
	/**
	* Computes the offset from the end edge of a pinning region after this column.
	*
	* The value is the sum of all following visible leaf column sizes in the
	* requested region.
	*
	* @example
	* ```ts
	* const endOffset = column_getAfter(column, 'end')
	* ```
	*/
	function column_getAfter(column, position) {
		return callMemoOrStaticFn(column.table, "getColumnOffsets", table_getColumnOffsets)[toOffsetsKey(position)].afters[column.id] ?? 0;
	}
	/**
	* Removes this column's committed size override.
	*
	* After reset, the column resolves size from `columnDef.size` or built-in
	* defaults again.
	*
	* @example
	* ```ts
	* column_resetSize(column)
	* ```
	*/
	function column_resetSize(column) {
		table_setColumnSizing(column.table, (old) => {
			const rest = makeObjectMap();
			const columnIds = Object.keys(old);
			for (let i = 0; i < columnIds.length; i++) {
				const columnId = columnIds[i];
				if (columnId !== column.id) rest[columnId] = old[columnId];
			}
			return rest;
		});
	}
	function sumHeaderSize(header) {
		if (!header.subHeaders.length) return column_getSize(header.column);
		let sum = 0;
		for (let i = 0; i < header.subHeaders.length; i++) sum += sumHeaderSize(header.subHeaders[i]);
		return sum;
	}
	/**
	* Computes a header's rendered size from its leaf headers.
	*
	* Group headers sum the sizes of all descendant leaf columns. Leaf headers use
	* their column's current size.
	*
	* @example
	* ```ts
	* const width = header_getSize(header)
	* ```
	*/
	function header_getSize(header) {
		return sumHeaderSize(header);
	}
	/**
	* Computes a header's offset from the start of its header group.
	*
	* The offset is the previous sibling header's start plus size, or `0` for the
	* first header in the group.
	*
	* @example
	* ```ts
	* const offset = header_getStart(header)
	* ```
	*/
	function header_getStart(header) {
		if (header.index > 0) {
			const prevSiblingHeader = header.headerGroup?.headers[header.index - 1];
			if (prevSiblingHeader) return callMemoOrStaticFn(prevSiblingHeader, "getStart", header_getStart) + callMemoOrStaticFn(prevSiblingHeader, "getSize", header_getSize);
		}
		return 0;
	}
	/**
	* Routes a committed column sizing updater through the table's sizing handler.
	*
	* The updater may be a next size map or a function of the previous map,
	* matching the instance `table.setColumnSizing` behavior.
	*
	* @example
	* ```ts
	* table_setColumnSizing(table, (old) => ({ ...old, age: 96 }))
	* ```
	*/
	function table_setColumnSizing(table, updater) {
		table.options.onColumnSizingChange?.(updater);
	}
	/**
	* Resets `columnSizing` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.columnSizing` when it
	* exists. Passing `true` ignores initial state and resets to `{}`.
	*
	* @example
	* ```ts
	* table_resetColumnSizing(table)
	* table_resetColumnSizing(table, true)
	* ```
	*/
	function table_resetColumnSizing(table, defaultState) {
		table_setColumnSizing(table, defaultState ? makeObjectMap() : Object.assign(makeObjectMap(), cloneState(table.initialState.columnSizing ?? {})));
	}
	/**
	* Sums the rendered size of the full table header row.
	*
	* This includes start, center, and end columns in the main header group.
	*
	* @example
	* ```ts
	* const width = table_getTotalSize(table)
	* ```
	*/
	function table_getTotalSize(table) {
		return table.getHeaderGroups()[0]?.headers.reduce((sum, header) => {
			return sum + header_getSize(header);
		}, 0) ?? 0;
	}
	/**
	* Sums the rendered size of the logical start pinned header region.
	*
	* An empty start pinning region returns `0`.
	*
	* @example
	* ```ts
	* const width = table_getStartTotalSize(table)
	* ```
	*/
	function table_getStartTotalSize(table) {
		return callMemoOrStaticFn(table, "getStartHeaderGroups", table_getStartHeaderGroups)[0]?.headers.reduce((sum, header) => {
			return sum + header_getSize(header);
		}, 0) ?? 0;
	}
	/**
	* Sums the rendered size of the center, unpinned header region.
	*
	* An empty center region returns `0`.
	*
	* @example
	* ```ts
	* const width = table_getCenterTotalSize(table)
	* ```
	*/
	function table_getCenterTotalSize(table) {
		return callMemoOrStaticFn(table, "getCenterHeaderGroups", table_getCenterHeaderGroups)[0]?.headers.reduce((sum, header) => {
			return sum + header_getSize(header);
		}, 0) ?? 0;
	}
	/**
	* Sums the rendered size of the logical end pinned header region.
	*
	* An empty end pinning region returns `0`.
	*
	* @example
	* ```ts
	* const width = table_getEndTotalSize(table)
	* ```
	*/
	function table_getEndTotalSize(table) {
		return callMemoOrStaticFn(table, "getEndHeaderGroups", table_getEndHeaderGroups)[0]?.headers.reduce((sum, header) => {
			return sum + header_getSize(header);
		}, 0) ?? 0;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-resizing/columnResizingFeature.utils.js
	/**
	* Creates the default transient column resizing state.
	*
	* The feature default represents no active drag interaction. Reset APIs use
	* this value when `defaultState` is `true`.
	*
	* @example
	* ```ts
	* const resizeInfo = getDefaultColumnResizingState()
	* ```
	*/
	function getDefaultColumnResizingState() {
		return {
			startOffset: null,
			startSize: null,
			deltaOffset: null,
			deltaPercentage: null,
			isResizingColumn: false,
			columnSizingStart: []
		};
	}
	/**
	* Checks whether this column can start a resize interaction.
	*
	* Both `columnDef.enableResizing` and table `enableColumnResizing` default to
	* `true`.
	*
	* @example
	* ```ts
	* const canResize = column_getCanResize(column)
	* ```
	*/
	function column_getCanResize(column) {
		return (column.columnDef.enableResizing ?? true) && (column.table.options.enableColumnResizing ?? true);
	}
	/**
	* Checks whether this column is the active column resize target.
	*
	* The value is read from `state.columnResizing.isResizingColumn`.
	*
	* @example
	* ```ts
	* const isResizing = column_getIsResizing(column)
	* ```
	*/
	function column_getIsResizing(column) {
		return column.table.atoms.columnResizing?.get()?.isResizingColumn === column.id;
	}
	/**
	* Creates the pointer/touch start handler for resizing a header.
	*
	* The handler records starting sizes for all leaf headers, tracks drag deltas,
	* writes transient resize info, and commits column sizes on change or drag end
	* depending on `columnResizeMode`.
	*
	* @example
	* ```ts
	* const onMouseDown = header_getResizeHandler(header)
	* ```
	*/
	function header_getResizeHandler(header, _contextDocument) {
		const column = header.table.getColumn(header.column.id);
		const canResize = column_getCanResize(column);
		return (event) => {
			if (!canResize) return;
			if (isTouchStartEvent(event)) {
				if (event.touches.length > 1) return;
			}
			const startSize = header_getSize(header);
			const columnSizingStart = header.getLeafHeaders().map((leafHeader) => [leafHeader.column.id, column_getSize(leafHeader.column)]);
			const clientX = isTouchStartEvent(event) ? Math.round(event.touches[0].clientX) : event.clientX;
			const newColumnSizing = makeObjectMap();
			const updateOffset = (eventType, clientXPos) => {
				if (typeof clientXPos !== "number") return;
				const table = column.table;
				const isCommit = table.options.columnResizeMode === "onChange" || eventType === "end";
				table._reactivity.batch(() => {
					table_setColumnResizing(table, (old) => {
						const deltaDirection = table.options.columnResizeDirection === "rtl" ? -1 : 1;
						const deltaOffset = (clientXPos - (old.startOffset ?? 0)) * deltaDirection;
						const startSize = old.startSize ?? 0;
						const deltaPercentage = Math.max(startSize > 0 ? deltaOffset / startSize : 0, -.999999);
						if (isCommit) {
							const columnSizingStart = old.columnSizingStart;
							for (let i = 0; i < columnSizingStart.length; i++) {
								const entry = columnSizingStart[i];
								const headerSize = entry[1];
								newColumnSizing[entry[0]] = Math.round(Math.max(headerSize > 0 ? headerSize + headerSize * deltaPercentage : deltaOffset / columnSizingStart.length, 0) * 100) / 100;
							}
						}
						return {
							...old,
							deltaOffset,
							deltaPercentage
						};
					});
					if (isCommit) table_setColumnSizing(table, (old) => Object.assign(makeObjectMap(), old, newColumnSizing));
				});
			};
			let moveRafId = null;
			let hasPendingMove = false;
			let latestMoveX;
			const flushMove = () => {
				if (hasPendingMove) {
					hasPendingMove = false;
					updateOffset("move", latestMoveX);
					moveRafId = requestAnimationFrame(flushMove);
				} else moveRafId = null;
			};
			const onMove = (clientXPos) => {
				latestMoveX = clientXPos;
				if (typeof requestAnimationFrame !== "function") {
					updateOffset("move", clientXPos);
					return;
				}
				if (moveRafId !== null) {
					hasPendingMove = true;
					return;
				}
				updateOffset("move", clientXPos);
				moveRafId = requestAnimationFrame(flushMove);
			};
			const onEnd = (clientXPos) => {
				if (moveRafId !== null) {
					cancelAnimationFrame(moveRafId);
					moveRafId = null;
					hasPendingMove = false;
				}
				column.table._reactivity.batch(() => {
					updateOffset("end", clientXPos ?? latestMoveX);
					table_setColumnResizing(column.table, (old) => ({
						...old,
						isResizingColumn: false,
						startOffset: null,
						startSize: null,
						deltaOffset: null,
						deltaPercentage: null,
						columnSizingStart: []
					}));
				});
			};
			const contextDocument = _contextDocument || (typeof document !== "undefined" ? document : null);
			const mouseEvents = {
				moveHandler: (e) => onMove(e.clientX),
				upHandler: (e) => {
					contextDocument?.removeEventListener("mousemove", mouseEvents.moveHandler);
					contextDocument?.removeEventListener("mouseup", mouseEvents.upHandler);
					onEnd(e.clientX);
				}
			};
			const touchEvents = {
				moveHandler: (touchEvent) => {
					if (touchEvent.cancelable) {
						touchEvent.preventDefault();
						touchEvent.stopPropagation();
					}
					onMove(touchEvent.touches[0].clientX);
					return false;
				},
				upHandler: (e) => {
					removeTouchEvents();
					if (e.cancelable) {
						e.preventDefault();
						e.stopPropagation();
					}
					onEnd(e.touches[0]?.clientX);
				},
				cancelHandler: () => {
					removeTouchEvents();
					onEnd();
				}
			};
			const removeTouchEvents = () => {
				contextDocument?.removeEventListener("touchmove", touchEvents.moveHandler);
				contextDocument?.removeEventListener("touchend", touchEvents.upHandler);
				contextDocument?.removeEventListener("touchcancel", touchEvents.cancelHandler);
			};
			const passiveIfSupported = passiveEventSupported() ? { passive: false } : false;
			if (isTouchStartEvent(event)) {
				contextDocument?.addEventListener("touchmove", touchEvents.moveHandler, passiveIfSupported);
				contextDocument?.addEventListener("touchend", touchEvents.upHandler, passiveIfSupported);
				contextDocument?.addEventListener("touchcancel", touchEvents.cancelHandler, passiveIfSupported);
			} else {
				contextDocument?.addEventListener("mousemove", mouseEvents.moveHandler, passiveIfSupported);
				contextDocument?.addEventListener("mouseup", mouseEvents.upHandler, passiveIfSupported);
			}
			table_setColumnResizing(column.table, (old) => ({
				...old,
				startOffset: clientX,
				startSize,
				deltaOffset: 0,
				deltaPercentage: 0,
				columnSizingStart,
				isResizingColumn: column.id
			}));
		};
	}
	/**
	* Routes a transient column resizing updater through the table's resize handler.
	*
	* This state tracks the active drag interaction; committed widths live in
	* `columnSizing`.
	*
	* @example
	* ```ts
	* table_setColumnResizing(table, (old) => ({ ...old, deltaOffset: 12 }))
	* ```
	*/
	function table_setColumnResizing(table, updater) {
		table.options.onColumnResizingChange?.(updater);
	}
	/**
	* Resets `columnResizing` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.columnResizing` when
	* it exists. Passing `true` ignores initial state and resets to the no-drag
	* default state.
	*
	* @example
	* ```ts
	* table_resetHeaderSizeInfo(table)
	* table_resetHeaderSizeInfo(table, true)
	* ```
	*/
	function table_resetHeaderSizeInfo(table, defaultState) {
		table_setColumnResizing(table, defaultState ? getDefaultColumnResizingState() : cloneState(table.initialState.columnResizing ?? getDefaultColumnResizingState()));
	}
	let passiveSupported = null;
	/**
	* Detects whether the current environment supports passive event listeners.
	*
	* Column resizing uses this to register pointer and touch listeners with
	* `passive: false` only when the environment understands passive options.
	*
	* @example
	* ```ts
	* const canUsePassiveListeners = passiveEventSupported()
	* ```
	*/
	function passiveEventSupported() {
		if (typeof passiveSupported === "boolean") return passiveSupported;
		let supported = false;
		try {
			const options = { get passive() {
				supported = true;
				return false;
			} };
			const noop = () => {};
			window.addEventListener("test", noop, options);
			window.removeEventListener("test", noop);
		} catch (err) {
			supported = false;
		}
		passiveSupported = supported;
		return passiveSupported;
	}
	/**
	* Narrows an unknown event to a `touchstart` event.
	*
	* Column resizing uses this before reading touch coordinates and installing
	* touch-specific listeners.
	*
	* @example
	* ```ts
	* const isTouch = isTouchStartEvent(event)
	* ```
	*/
	function isTouchStartEvent(e) {
		return e.type === "touchstart";
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-resizing/columnResizingFeature.js
	/**
	* Feature that adds column resizing state, options, and resize handlers.
	*/
	const columnResizingFeature = {
		getInitialState: (initialState) => {
			return {
				columnResizing: getDefaultColumnResizingState(),
				...initialState
			};
		},
		getDefaultTableOptions: (table) => {
			return {
				columnResizeMode: "onEnd",
				columnResizeDirection: "ltr",
				onColumnResizingChange: makeStateUpdater("columnResizing", table)
			};
		},
		assignColumnPrototype: (prototype, table) => {
			assignPrototypeAPIs("columnResizingFeature", prototype, table, {
				column_getCanResize: { fn: (column) => column_getCanResize(column) },
				column_getIsResizing: { fn: (column) => column_getIsResizing(column) }
			});
		},
		assignHeaderPrototype: (prototype, table) => {
			assignPrototypeAPIs("columnResizingFeature", prototype, table, { header_getResizeHandler: { fn: (header, _contextDocument) => header_getResizeHandler(header, _contextDocument) } });
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("columnResizingFeature", table, {
				table_setColumnResizing: { fn: (updater) => table_setColumnResizing(table, updater) },
				table_resetHeaderSizeInfo: { fn: (defaultState) => table_resetHeaderSizeInfo(table, defaultState) }
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-sizing/columnSizingFeature.js
	/**
	* Feature that adds column sizing state, defaults, and size measurement APIs.
	*/
	const columnSizingFeature = {
		getInitialState: (initialState) => {
			return {
				columnSizing: getDefaultColumnSizingState(),
				...initialState
			};
		},
		getDefaultColumnDef: () => {
			return getDefaultColumnSizingColumnDef();
		},
		getDefaultTableOptions: (table) => {
			return { onColumnSizingChange: makeStateUpdater("columnSizing", table) };
		},
		assignColumnPrototype: (prototype, table) => {
			assignPrototypeAPIs("columnSizingFeature", prototype, table, {
				column_getSize: {
					fn: (column) => column_getSize(column),
					memoDeps: (column) => [table.options.columns, table.atoms.columnSizing?.get()?.[column.id]]
				},
				column_getStart: { fn: (column, position) => column_getStart(column, position) },
				column_getAfter: { fn: (column, position) => column_getAfter(column, position) },
				column_resetSize: { fn: (column) => column_resetSize(column) }
			});
		},
		assignHeaderPrototype: (prototype, table) => {
			assignPrototypeAPIs("columnSizingFeature", prototype, table, {
				header_getSize: {
					fn: (header) => header_getSize(header),
					memoDeps: (header) => [table.options.columns, header.column.columns.length > 0 ? table.atoms.columnSizing?.get() : table.atoms.columnSizing?.get()?.[header.column.id]]
				},
				header_getStart: {
					fn: (header) => header_getStart(header),
					memoDeps: () => [
						table.options.columns,
						table.atoms.columnSizing?.get(),
						table.atoms.columnOrder?.get(),
						table.atoms.columnPinning?.get(),
						table.atoms.columnVisibility?.get(),
						table.atoms.grouping?.get(),
						table.options.groupedColumnMode
					]
				}
			});
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("columnSizingFeature", table, {
				table_getColumnOffsets: {
					fn: () => table_getColumnOffsets(table),
					memoDeps: () => [
						table.options.columns,
						table.atoms.columnSizing?.get(),
						table.atoms.columnOrder?.get(),
						table.atoms.columnPinning?.get(),
						table.atoms.columnVisibility?.get(),
						table.atoms.grouping?.get(),
						table.options.groupedColumnMode
					]
				},
				table_setColumnSizing: { fn: (updater) => table_setColumnSizing(table, updater) },
				table_resetColumnSizing: { fn: (defaultState) => table_resetColumnSizing(table, defaultState) },
				table_getTotalSize: {
					fn: () => table_getTotalSize(table),
					memoDeps: () => [table.atoms.columnSizing?.get(), table.getHeaderGroups()]
				},
				table_getStartTotalSize: {
					fn: () => table_getStartTotalSize(table),
					memoDeps: () => [table.atoms.columnSizing?.get(), table.getHeaderGroups()]
				},
				table_getCenterTotalSize: {
					fn: () => table_getCenterTotalSize(table),
					memoDeps: () => [table.atoms.columnSizing?.get(), table.getHeaderGroups()]
				},
				table_getEndTotalSize: {
					fn: () => table_getEndTotalSize(table),
					memoDeps: () => [table.atoms.columnSizing?.get(), table.getHeaderGroups()]
				}
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-visibility/columnVisibilityFeature.js
	/**
	* Feature that adds column visibility state and APIs for hiding and showing columns.
	*/
	const columnVisibilityFeature = {
		getInitialState: (initialState) => {
			return {
				columnVisibility: getDefaultColumnVisibilityState(),
				...initialState
			};
		},
		getDefaultTableOptions: (table) => {
			return { onColumnVisibilityChange: makeStateUpdater("columnVisibility", table) };
		},
		assignColumnPrototype: (prototype, table) => {
			assignPrototypeAPIs("columnVisibilityFeature", prototype, table, {
				column_getIsVisible: {
					fn: (column) => column_getIsVisible(column),
					memoDeps: (column) => [
						table.options.columns,
						table.atoms.columnVisibility?.get(),
						column.columns
					]
				},
				column_getCanHide: { fn: (column) => column_getCanHide(column) },
				column_getToggleVisibilityHandler: { fn: (column) => column_getToggleVisibilityHandler(column) },
				column_toggleVisibility: { fn: (column, visible) => column_toggleVisibility(column, visible) }
			});
		},
		assignRowPrototype: (prototype, table) => {
			assignPrototypeAPIs("columnVisibilityFeature", prototype, table, {
				row_getVisibleCells: {
					fn: (row) => row_getVisibleCells(row),
					memoDeps: (row) => [
						row.getAllCells(),
						table.atoms.columnPinning?.get(),
						table.atoms.columnVisibility?.get()
					]
				},
				row_getVisibleCellsByColumnId: {
					fn: (row) => row_getVisibleCellsByColumnId(row),
					memoDeps: (row) => [row.getAllCells(), table.atoms.columnVisibility?.get()]
				}
			});
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("columnVisibilityFeature", table, {
				table_getVisibleFlatColumns: {
					fn: () => table_getVisibleFlatColumns(table),
					memoDeps: () => [
						table.atoms.columnVisibility?.get(),
						table.atoms.columnOrder?.get(),
						table.atoms.grouping?.get(),
						table.options.columns,
						table.options.groupedColumnMode
					]
				},
				table_getVisibleLeafColumns: {
					fn: () => table_getVisibleLeafColumns(table),
					memoDeps: () => [
						table.atoms.columnVisibility?.get(),
						table.atoms.columnOrder?.get(),
						table.atoms.grouping?.get(),
						table.options.columns,
						table.options.groupedColumnMode
					]
				},
				table_setColumnVisibility: { fn: (updater) => table_setColumnVisibility(table, updater) },
				table_resetColumnVisibility: { fn: (defaultState) => table_resetColumnVisibility(table, defaultState) },
				table_toggleAllColumnsVisible: { fn: (value) => table_toggleAllColumnsVisible(table, value) },
				table_getIsAllColumnsVisible: { fn: () => table_getIsAllColumnsVisible(table) },
				table_getIsSomeColumnsVisible: { fn: () => table_getIsSomeColumnsVisible(table) },
				table_getToggleAllColumnsVisibilityHandler: { fn: () => table_getToggleAllColumnsVisibilityHandler(table) }
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-filtering/filterFns.js
	/**
	* Builds a `FilterFn` from a value-level comparator plus optional resolvers.
	*
	* The `filter` comparator receives the row's data value (already passed
	* through `resolveDataValue` when one is defined) and the filter value
	* (already passed through `resolveFilterValue` by the table). Keeping
	* normalization in the resolvers means a variant of an existing filter
	* function only has to swap the resolvers, not re-implement the comparison.
	*
	* The definition is attached to the returned function, so a variant can be
	* created by spreading a built-in filter function and overriding what differs:
	*
	* ```ts
	* const normalize = (value: unknown) =>
	*   String(value ?? '')
	*     .toLowerCase()
	*     .normalize('NFD')
	*     .replace(/\p{Diacritic}/gu, '')
	*
	* const includesStringIgnoreDiacritics = constructFilterFn({
	*   ...filterFn_includesString,
	*   resolveFilterValue: normalize,
	*   resolveDataValue: normalize,
	* })
	* ```
	*
	* Note: the table applies `resolveFilterValue` once per filter before any rows
	* are tested. When calling a filter function directly (outside of a table),
	* apply it yourself: `fn(row, columnId, fn.resolveFilterValue?.(value) ?? value)`.
	*/
	function constructFilterFn(def) {
		const filterFn = Object.assign((row, columnId, filterValue, addMeta) => {
			const rawValue = row.getValue(columnId);
			const dataValue = filterFn.resolveDataValue ? filterFn.resolveDataValue(rawValue) : rawValue;
			return filterFn.filter(dataValue, filterValue, row, columnId, addMeta);
		}, def);
		return filterFn;
	}
	constructFilterFn({
		filter: (dataValue, filterValue) => dataValue === filterValue,
		autoRemove: (val) => testFalsy(val)
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => dataValue == filterValue,
		autoRemove: (val) => testFalsy(val)
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => Boolean(dataValue?.includes(filterValue)),
		autoRemove: (val) => testFalsy(val),
		resolveFilterValue: (val) => String(val),
		resolveDataValue: (val) => val == null ? void 0 : String(val)
	});
	/**
	* Keeps rows whose stringified column value includes the filter text.
	*
	* Both values are lowercased before comparison, and empty filter values are
	* auto-removed.
	*/
	const filterFn_includesString = constructFilterFn({
		filter: (dataValue, filterValue) => Boolean(dataValue?.includes(filterValue)),
		autoRemove: (val) => testFalsy(val),
		resolveFilterValue: (val) => String(val).toLowerCase(),
		resolveDataValue: (val) => val == null ? void 0 : String(val).toLowerCase()
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => dataValue === filterValue,
		autoRemove: (val) => testFalsy(val),
		resolveFilterValue: (val) => String(val).toLowerCase(),
		resolveDataValue: (val) => val == null ? void 0 : String(val).toLowerCase()
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => dataValue === filterValue,
		autoRemove: (val) => testFalsy(val),
		resolveFilterValue: (val) => String(val),
		resolveDataValue: (val) => val == null ? void 0 : String(val)
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => Boolean(dataValue?.startsWith(filterValue)),
		autoRemove: (val) => testFalsy(val),
		resolveFilterValue: (val) => String(val).toLowerCase(),
		resolveDataValue: (val) => val == null ? void 0 : String(val).toLowerCase()
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => Boolean(dataValue?.endsWith(filterValue)),
		autoRemove: (val) => testFalsy(val),
		resolveFilterValue: (val) => String(val).toLowerCase(),
		resolveDataValue: (val) => val == null ? void 0 : String(val).toLowerCase()
	});
	constructFilterFn({
		filter: (dataValue) => testValueEmpty(dataValue),
		autoRemove: (val) => testFalsy(val) || val === false
	});
	constructFilterFn({
		filter: (dataValue) => !testValueEmpty(dataValue),
		autoRemove: (val) => testFalsy(val) || val === false
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => compareGreaterThan(dataValue, filterValue),
		autoRemove: (val) => testFalsy(val)
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => compareGreaterThanOrEqualTo(dataValue, filterValue),
		autoRemove: (val) => testFalsy(val)
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => !compareGreaterThanOrEqualTo(dataValue, filterValue),
		autoRemove: (val) => testFalsy(val)
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => !compareGreaterThan(dataValue, filterValue),
		autoRemove: (val) => testFalsy(val)
	});
	constructFilterFn({
		filter: (dataValue, filterValues) => compareBetween(dataValue, filterValues, false),
		autoRemove: (val) => testFalsy(val) || Array.isArray(val) && testFalsy(val[0]) && testFalsy(val[1])
	});
	constructFilterFn({
		filter: (dataValue, filterValues) => compareBetween(dataValue, filterValues, true),
		autoRemove: (val) => testFalsy(val) || Array.isArray(val) && testFalsy(val[0]) && testFalsy(val[1])
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => {
			if (typeof dataValue !== "number" || Number.isNaN(dataValue)) return false;
			const [min, max] = filterValue;
			return dataValue >= min && dataValue <= max;
		},
		resolveFilterValue: (val) => {
			const [unsafeMin, unsafeMax] = val;
			const parsedMin = typeof unsafeMin !== "number" ? parseFloat(unsafeMin) : unsafeMin;
			const parsedMax = typeof unsafeMax !== "number" ? parseFloat(unsafeMax) : unsafeMax;
			let min = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
			let max = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
			if (min > max) {
				const temp = min;
				min = max;
				max = temp;
			}
			return [min, max];
		},
		autoRemove: (val) => testFalsy(val) || Array.isArray(val) && testFalsy(val[0]) && testFalsy(val[1])
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => {
			const [min, max] = filterValue;
			return dataValue >= min && dataValue <= max;
		},
		resolveFilterValue: (val) => {
			const [unsafeMin, unsafeMax] = val;
			const parsedMin = toDateTimestamp(unsafeMin);
			const parsedMax = toDateTimestamp(unsafeMax);
			let min = Number.isNaN(parsedMin) ? -Infinity : parsedMin;
			let max = Number.isNaN(parsedMax) ? Infinity : parsedMax;
			if (min > max) {
				const temp = min;
				min = max;
				max = temp;
			}
			return [min, max];
		},
		resolveDataValue: (val) => toDateTimestamp(val),
		autoRemove: (val) => testFalsy(val) || Array.isArray(val) && testFalsy(val[0]) && testFalsy(val[1])
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => {
			for (let i = 0; i < filterValue.length; i++) if (dataValue === filterValue[i]) return true;
			return false;
		},
		autoRemove: (val) => testFalsy(val) || !val?.length
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => {
			if (typeof dataValue !== "string" && !Array.isArray(dataValue)) return false;
			for (let i = 0; i < filterValue.length; i++) if (dataValue.includes(filterValue[i])) return true;
			return false;
		},
		autoRemove: (val) => testFalsy(val) || !val?.length
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => {
			if (!Array.isArray(dataValue)) return false;
			for (let i = 0; i < filterValue.length; i++) if (!dataValue.includes(filterValue[i])) return false;
			return true;
		},
		autoRemove: (val) => testFalsy(val) || !val?.length
	});
	constructFilterFn({
		filter: (dataValue, filterValue) => {
			if (!Array.isArray(dataValue)) return false;
			for (let i = 0; i < filterValue.length; i++) if (dataValue.includes(filterValue[i])) return true;
			return false;
		},
		autoRemove: (val) => testFalsy(val) || !val?.length
	});
	function testFalsy(val) {
		return val === void 0 || val === null || val === "";
	}
	function testValueEmpty(dataValue) {
		return dataValue == null || String(dataValue).trim() === "";
	}
	function toDateTimestamp(value) {
		if (value instanceof Date) return value.getTime();
		if (typeof value === "number") return value;
		if (value == null || value === "") return NaN;
		return new Date(value).getTime();
	}
	function compareGreaterThan(dataValue, filterValue) {
		const numericDataValue = dataValue == null ? 0 : +dataValue;
		const numericFilterValue = Number(filterValue);
		if (!isNaN(numericFilterValue) && !isNaN(numericDataValue)) return numericDataValue > numericFilterValue;
		return String(dataValue ?? "").toLowerCase().trim() > String(filterValue).toLowerCase().trim();
	}
	function compareGreaterThanOrEqualTo(dataValue, filterValue) {
		return dataValue === filterValue || compareGreaterThan(dataValue, filterValue);
	}
	function compareBetween(dataValue, filterValues, inclusive) {
		const min = filterValues[0];
		const hasMin = min !== "" && min !== void 0;
		if (hasMin) {
			if (!(inclusive ? compareGreaterThanOrEqualTo(dataValue, min) : compareGreaterThan(dataValue, min))) return false;
		}
		const max = filterValues[1];
		if (max === "" || max === void 0) return true;
		if (hasMin) {
			const numericMin = Number(min);
			const numericMax = Number(max);
			if (!isNaN(numericMin) && !isNaN(numericMax) && numericMin > numericMax) return true;
		}
		return inclusive ? !compareGreaterThan(dataValue, max) : !compareGreaterThanOrEqualTo(dataValue, max);
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/global-filtering/globalFilteringFeature.utils.js
	/**
	* Checks whether this accessor column participates in global filtering.
	*
	* The column must have an accessor and pass column-level, table-level, and
	* optional `getColumnCanGlobalFilter` checks.
	*
	* @example
	* ```ts
	* const canGlobalFilter = column_getCanGlobalFilter(column)
	* ```
	*/
	function column_getCanGlobalFilter(column) {
		return (column.columnDef.enableGlobalFilter ?? true) && (column.table.options.enableGlobalFilter ?? true) && (column.table.options.enableFilters ?? true) && (column.table.options.getColumnCanGlobalFilter?.(column) ?? true) && !!column.accessorFn;
	}
	/**
	* Provides the built-in automatic global filter function.
	*
	* Global filtering defaults to `includesString`, which gives search-box style
	* matching across globally filterable columns.
	*
	* @example
	* ```ts
	* const filterFn = table_getGlobalAutoFilterFn()
	* ```
	*/
	function table_getGlobalAutoFilterFn() {
		return filterFn_includesString;
	}
	/**
	* Resolves the filter function used for global filtering.
	*
	* Function-valued `options.globalFilterFn` is returned directly, `'auto'`
	* delegates to `table_getGlobalAutoFilterFn`, and string values are looked up in
	* the table's filter function registry.
	*
	* @example
	* ```ts
	* const filterFn = table_getGlobalFilterFn(table)
	* ```
	*/
	function table_getGlobalFilterFn(table) {
		const { globalFilterFn } = table.options;
		const filterFns = table._rowModelFns.filterFns;
		return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === "auto" ? table_getGlobalAutoFilterFn() : filterFns?.[globalFilterFn];
	}
	/**
	* Routes a global filter updater through the table's global filter handler.
	*
	* The updater may be a next value or a function of the previous value, matching
	* the instance `table.setGlobalFilter` behavior.
	*
	* @example
	* ```ts
	* table_setGlobalFilter(table, 'search text')
	* ```
	*/
	function table_setGlobalFilter(table, updater) {
		table.options.onGlobalFilterChange?.(updater);
	}
	/**
	* Resets `globalFilter` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.globalFilter`. Passing
	* `true` ignores initial state and resets to `undefined`.
	*
	* @example
	* ```ts
	* table_resetGlobalFilter(table)
	* table_resetGlobalFilter(table, true)
	* ```
	*/
	function table_resetGlobalFilter(table, defaultState) {
		table_setGlobalFilter(table, defaultState ? void 0 : cloneState(table.initialState.globalFilter));
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/global-filtering/globalFilteringFeature.js
	/**
	* Feature that adds global filtering state, defaults, and global filter APIs.
	*/
	const globalFilteringFeature = {
		getInitialState: (initialState) => {
			return {
				globalFilter: void 0,
				...initialState
			};
		},
		getDefaultTableOptions: (table) => {
			return {
				onGlobalFilterChange: makeStateUpdater("globalFilter", table),
				globalFilterFn: "auto",
				getColumnCanGlobalFilter: (column) => {
					if ("enableGlobalFilter" in column.columnDef && column.columnDef.enableGlobalFilter === true) return true;
					const value = table.getCoreRowModel().flatRows.find((row) => row.getAllCellsByColumnId()[column.id]?.getValue() != null)?.getAllCellsByColumnId()[column.id]?.getValue();
					return typeof value === "string" || typeof value === "number";
				}
			};
		},
		assignColumnPrototype: (prototype, table) => {
			assignPrototypeAPIs("globalFilteringFeature", prototype, table, { column_getCanGlobalFilter: { fn: (column) => column_getCanGlobalFilter(column) } });
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("globalFilteringFeature", table, {
				table_getGlobalAutoFilterFn: { fn: () => table_getGlobalAutoFilterFn() },
				table_getGlobalFilterFn: { fn: () => table_getGlobalFilterFn(table) },
				table_setGlobalFilter: { fn: (updater) => table_setGlobalFilter(table, updater) },
				table_resetGlobalFilter: { fn: (defaultState) => table_resetGlobalFilter(table, defaultState) }
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/row-pagination/rowPaginationFeature.js
	/**
	* Feature that adds pagination state and table APIs for page navigation.
	*/
	const rowPaginationFeature = {
		getInitialState: (initialState) => {
			return {
				...initialState,
				pagination: {
					...getDefaultPaginationState(),
					...initialState.pagination
				}
			};
		},
		getDefaultTableOptions: (table) => {
			return { onPaginationChange: makeStateUpdater("pagination", table) };
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("rowPaginationFeature", table, {
				table_autoResetPageIndex: { fn: () => table_autoResetPageIndex(table) },
				table_setPagination: { fn: (updater) => table_setPagination(table, updater) },
				table_resetPagination: { fn: (defaultState) => table_resetPagination(table, defaultState) },
				table_setPageIndex: { fn: (updater) => table_setPageIndex(table, updater) },
				table_resetPageIndex: { fn: (defaultState) => table_resetPageIndex(table, defaultState) },
				table_setPageSize: { fn: (updater) => table_setPageSize(table, updater) },
				table_getPageCount: { fn: () => table_getPageCount(table) },
				table_resetPageSize: { fn: (defaultState) => table_resetPageSize(table, defaultState) },
				table_getPageOptions: { fn: () => table_getPageOptions(table) },
				table_getCanPreviousPage: { fn: () => table_getCanPreviousPage(table) },
				table_getCanNextPage: { fn: () => table_getCanNextPage(table) },
				table_previousPage: { fn: () => table_previousPage(table) },
				table_nextPage: { fn: () => table_nextPage(table) },
				table_firstPage: { fn: () => table_firstPage(table) },
				table_lastPage: { fn: () => table_lastPage(table) },
				table_getRowCount: { fn: () => table_getRowCount(table) }
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/row-selection/rowSelectionFeature.utils.js
	/**
	* Creates the default row selection state.
	*
	* The feature default is an empty map, meaning no rows are selected. Reset APIs
	* use this value when `defaultState` is `true`.
	*
	* @example
	* ```ts
	* const selection = getDefaultRowSelectionState()
	* ```
	*/
	function getDefaultRowSelectionState() {
		return makeObjectMap();
	}
	/**
	* Routes a row selection updater through the table's selection change handler.
	*
	* The updater may be a next selection map or a function of the previous map,
	* matching the instance `table.setRowSelection` behavior.
	*
	* @example
	* ```ts
	* table_setRowSelection(table, (old) => ({ ...old, [rowId]: true }))
	* ```
	*/
	function table_setRowSelection(table, updater) {
		table.options.onRowSelectionChange?.(updater);
	}
	/**
	* Resets `rowSelection` to the configured initial state or feature default.
	*
	* With no argument, the reset clones `table.initialState.rowSelection` when it
	* exists. Passing `true` ignores initial state and resets to `{}`.
	*
	* @example
	* ```ts
	* table_resetRowSelection(table)
	* table_resetRowSelection(table, true)
	* ```
	*/
	function table_resetRowSelection(table, defaultState) {
		table._lastSelectedRowId = null;
		table_setRowSelection(table, defaultState ? makeObjectMap() : Object.assign(makeObjectMap(), cloneState(table.initialState.rowSelection ?? {})));
	}
	/**
	* Selects or deselects every selectable row before grouping.
	*
	* Omitting `value` toggles based on `table_getIsAllRowsSelected(table)`.
	* Selecting skips sub-rows whose ancestors block descent via
	* `enableSubRowSelection`. Deselecting removes matching selectable ids from the
	* existing selection map; rows that cannot be selected keep their selection
	* unless `opts.deselectAll` is `true`.
	*
	* @example
	* ```ts
	* table_toggleAllRowsSelected(table)
	* ```
	*/
	function table_toggleAllRowsSelected(table, value, opts) {
		table._lastSelectedRowId = null;
		table_setRowSelection(table, (old) => {
			value = typeof value !== "undefined" ? value : !callMemoOrStaticFn(table, "getIsAllRowsSelected", table_getIsAllRowsSelected);
			if (opts?.deselectAll && !value) return makeObjectMap();
			const rowSelection = Object.assign(makeObjectMap(), old);
			const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;
			if (value) {
				const subtreeCache = /* @__PURE__ */ new Map();
				preGroupedFlatRows.forEach((row) => {
					if (isRowSelectableInSelectAll(row, subtreeCache)) rowSelection[row.id] = true;
				});
			} else preGroupedFlatRows.forEach((row) => {
				if (row_getCanSelect(row)) delete rowSelection[row.id];
			});
			return rowSelection;
		});
	}
	/**
	* Selects or deselects every selectable row on the current page.
	*
	* Omitting `value` toggles based on `table_getIsAllPageRowsSelected(table)`.
	* Child rows are included when sub-row selection allows it.
	*
	* @example
	* ```ts
	* table_toggleAllPageRowsSelected(table)
	* ```
	*/
	function table_toggleAllPageRowsSelected(table, value, opts) {
		table._lastSelectedRowId = null;
		table_setRowSelection(table, (old) => {
			const resolvedValue = typeof value !== "undefined" ? value : !callMemoOrStaticFn(table, "getIsAllPageRowsSelected", table_getIsAllPageRowsSelected);
			if (opts?.deselectAll && !resolvedValue) return makeObjectMap();
			const rowSelection = Object.assign(makeObjectMap(), old);
			table.getRowModel().rows.forEach((row) => {
				mutateRowIsSelected(rowSelection, row.id, resolvedValue, true, table, true);
			});
			return rowSelection;
		});
	}
	/**
	* Reads the row model before row selection is projected into selected rows.
	*
	* Selection does not alter the base row pipeline, so this returns the core row
	* model.
	*
	* @example
	* ```ts
	* const rowsBeforeSelection = table_getPreSelectedRowModel(table)
	* ```
	*/
	function table_getPreSelectedRowModel(table) {
		return table.getCoreRowModel();
	}
	/**
	* Builds a row model containing selected rows from the core row model.
	*
	* If no row ids are selected, an empty row model is returned without walking
	* the rows.
	*
	* @example
	* ```ts
	* const selectedRows = table_getSelectedRowModel(table)
	* ```
	*/
	function table_getSelectedRowModel(table) {
		const rowModel = table.getCoreRowModel();
		if (!callMemoOrStaticFn(table, "getIsSomeRowsSelected", table_getIsSomeRowsSelected)) return {
			rows: [],
			flatRows: [],
			rowsById: makeObjectMap()
		};
		return selectRowsFn(rowModel, table);
	}
	/**
	* Builds a row model containing selected rows from the filtered row model.
	*
	* If no row ids are selected, an empty row model is returned without walking
	* the rows.
	*
	* @example
	* ```ts
	* const selectedRows = table_getFilteredSelectedRowModel(table)
	* ```
	*/
	function table_getFilteredSelectedRowModel(table) {
		const rowModel = table.getFilteredRowModel();
		if (!callMemoOrStaticFn(table, "getIsSomeRowsSelected", table_getIsSomeRowsSelected)) return {
			rows: [],
			flatRows: [],
			rowsById: makeObjectMap()
		};
		return selectRowsFn(rowModel, table);
	}
	/**
	* Builds a row model containing selected rows from the grouped row model.
	*
	* If no row ids are selected, an empty row model is returned without walking
	* the rows.
	*
	* @example
	* ```ts
	* const selectedRows = table_getGroupedSelectedRowModel(table)
	* ```
	*/
	function table_getGroupedSelectedRowModel(table) {
		const rowModel = table.getSortedRowModel();
		if (!callMemoOrStaticFn(table, "getIsSomeRowsSelected", table_getIsSomeRowsSelected)) return {
			rows: [],
			flatRows: [],
			rowsById: makeObjectMap()
		};
		return selectRowsFn(rowModel, table);
	}
	/**
	* Returns the ids of all selected rows.
	*
	* @example
	* ```ts
	* const selectedRowIds = table_getSelectedRowIds(table)
	* ```
	*/
	function table_getSelectedRowIds(table) {
		return Object.keys(table.atoms.rowSelection?.get() ?? {});
	}
	/**
	* Checks whether every selectable filtered row is selected.
	*
	* The result is false when there are no filtered rows or when selection state is
	* empty. Sub-rows whose ancestors block descent via `enableSubRowSelection` are
	* ignored, matching the rows that `table_toggleAllRowsSelected` selects.
	*
	* @example
	* ```ts
	* const allSelected = table_getIsAllRowsSelected(table)
	* ```
	*/
	function table_getIsAllRowsSelected(table) {
		const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
		const rowSelection = table.atoms.rowSelection?.get() ?? {};
		let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
		if (isAllRowsSelected) {
			const subtreeCache = /* @__PURE__ */ new Map();
			if (preGroupedFlatRows.some((row) => !isRowSelected(row, rowSelection) && isRowSelectableInSelectAll(row, subtreeCache))) isAllRowsSelected = false;
		}
		return isAllRowsSelected;
	}
	/**
	* Checks whether every selectable row on the current page is selected.
	*
	* Non-selectable rows are ignored for this calculation, as are sub-rows whose
	* ancestors block descent via `enableSubRowSelection`.
	*
	* @example
	* ```ts
	* const allPageRowsSelected = table_getIsAllPageRowsSelected(table)
	* ```
	*/
	function table_getIsAllPageRowsSelected(table) {
		const paginationFlatRows = table.getPaginatedRowModel().flatRows;
		const rowSelection = table.atoms.rowSelection?.get() ?? {};
		const subtreeCache = /* @__PURE__ */ new Map();
		let sawSelectableRow = false;
		for (let i = 0; i < paginationFlatRows.length; i++) {
			const row = paginationFlatRows[i];
			if (!isRowSelected(row, rowSelection)) {
				if (isRowSelectableInSelectAll(row, subtreeCache)) return false;
			} else if (!sawSelectableRow && isRowSelectableInSelectAll(row, subtreeCache)) sawSelectableRow = true;
		}
		return sawSelectableRow;
	}
	/**
	* Checks whether at least one row id is selected.
	*
	* The result stays true when every row is selected.
	*
	* @example
	* ```ts
	* const someRowsSelected = table_getIsSomeRowsSelected(table)
	* ```
	*/
	function table_getIsSomeRowsSelected(table) {
		return callMemoOrStaticFn(table, "getSelectedRowIds", table_getSelectedRowIds).length > 0;
	}
	/**
	* Checks whether at least one selectable row on the current page is selected.
	*
	* @example
	* ```ts
	* const somePageRowsSelected = table_getIsSomePageRowsSelected(table)
	* ```
	*/
	function table_getIsSomePageRowsSelected(table) {
		return table.getPaginatedRowModel().flatRows.filter((row) => row_getCanSelect(row)).some((row) => row_getIsSelected(row) || callMemoOrStaticFn(row, "getIsSomeSelected", row_getIsSomeSelected));
	}
	/**
	* Creates a checkbox-style handler that selects or deselects all rows.
	*
	* The handler reads `event.target.checked`, so it is intended for controls whose
	* checked state means "all rows selected".
	*
	* @example
	* ```ts
	* const onChange = table_getToggleAllRowsSelectedHandler(table)
	* ```
	*/
	function table_getToggleAllRowsSelectedHandler(table) {
		return (e) => {
			table_toggleAllRowsSelected(table, e.target.checked);
		};
	}
	/**
	* Creates a checkbox-style handler that selects or deselects current page rows.
	*
	* The handler reads `event.target.checked`, so it is intended for controls whose
	* checked state means "all page rows selected".
	*
	* @example
	* ```ts
	* const onChange = table_getToggleAllPageRowsSelectedHandler(table)
	* ```
	*/
	function table_getToggleAllPageRowsSelectedHandler(table) {
		return (e) => {
			table_toggleAllPageRowsSelected(table, e.target.checked);
		};
	}
	/**
	* Selects or deselects this row.
	*
	* Omitting `value` toggles the row. Child rows are selected recursively unless
	* `opts.selectChildren` is `false`, sub-row selection is disabled, or the row
	* only supports single selection. Pass `deselectParents: true` to also remove
	* ancestor row ids from the selection when this row is deselected.
	*
	* @example
	* ```ts
	* row_toggleSelected(row)
	* row_toggleSelected(row, true)
	* row_toggleSelected(row, false)
	* row_toggleSelected(row, true, { selectChildren: false })
	* row_toggleSelected(row, false, { deselectParents: true })
	* ```
	*/
	function row_toggleSelected(row, value, opts) {
		const isSelected = row_getIsSelected(row);
		table_setRowSelection(row.table, (old) => {
			value = typeof value !== "undefined" ? value : !isSelected;
			const rowSelection = Object.assign(makeObjectMap(), old);
			mutateRowIsSelected(rowSelection, row.id, value, (opts?.selectChildren ?? true) && row_getCanMultiSelect(row), row.table);
			if (!value && opts?.deselectParents) pruneAncestorRowIds(rowSelection, row);
			return rowSelection;
		});
	}
	/**
	* Checks whether this row id is selected in `state.rowSelection`.
	*
	* Missing row ids are treated as not selected.
	*
	* @example
	* ```ts
	* const selected = row_getIsSelected(row)
	* ```
	*/
	function row_getIsSelected(row) {
		return isRowSelected(row, row.table.atoms.rowSelection?.get() ?? {});
	}
	/**
	* Checks whether some, but not all, selectable descendants are selected.
	*
	* This supports indeterminate selection UI for parent rows.
	*
	* @example
	* ```ts
	* const partial = row_getIsSomeSelected(row)
	* ```
	*/
	function row_getIsSomeSelected(row) {
		return isSubRowSelected(row) === "some";
	}
	/**
	* Checks whether all selectable descendants are selected.
	*
	* Rows without selectable descendants return false.
	*
	* @example
	* ```ts
	* const allChildrenSelected = row_getIsAllSubRowsSelected(row)
	* ```
	*/
	function row_getIsAllSubRowsSelected(row) {
		return isSubRowSelected(row) === "all";
	}
	/**
	* Checks whether this row can be selected.
	*
	* `options.enableRowSelection` may be a boolean or a row predicate; it defaults
	* to `true`.
	*
	* @example
	* ```ts
	* const canSelect = row_getCanSelect(row)
	* ```
	*/
	function row_getCanSelect(row) {
		const options = row.table.options;
		if (typeof options.enableRowSelection === "function") return options.enableRowSelection(row);
		return options.enableRowSelection ?? true;
	}
	/**
	* Checks whether selecting this row should also select its subRows.
	*
	* `options.enableSubRowSelection` may be a boolean or a row predicate; it
	* defaults to `true`.
	*
	* @example
	* ```ts
	* const canSelectChildren = row_getCanSelectSubRows(row)
	* ```
	*/
	function row_getCanSelectSubRows(row) {
		const options = row.table.options;
		if (typeof options.enableSubRowSelection === "function") return options.enableSubRowSelection(row);
		return options.enableSubRowSelection ?? true;
	}
	/**
	* Checks whether this row can be selected alongside other rows.
	*
	* `options.enableMultiRowSelection` may be a boolean or a row predicate; it
	* defaults to `true`.
	*
	* @example
	* ```ts
	* const canMultiSelect = row_getCanMultiSelect(row)
	* ```
	*/
	function row_getCanMultiSelect(row) {
		const options = row.table.options;
		if (typeof options.enableMultiRowSelection === "function") return options.enableMultiRowSelection(row);
		return options.enableMultiRowSelection ?? true;
	}
	/**
	* Creates a checkbox-style handler that selects or deselects this row.
	*
	* The handler is a no-op when the row cannot be selected and reads
	* `event.target.checked`. Shift events select or deselect the inclusive range
	* from the most recent selectable row handled by this table. Pass
	* `selectChildren: false` to limit changes to rows explicitly present in the
	* display-order interval, and `deselectParents: true` to remove ancestor row
	* ids from the selection when rows are deselected.
	*
	* @example
	* ```ts
	* const onChange = row_getToggleSelectedHandler(row)
	* ```
	*/
	function row_getToggleSelectedHandler(row, opts) {
		const canSelect = row_getCanSelect(row);
		return (e) => {
			if (!canSelect) return;
			const event = e;
			const table = row.table;
			const checked = event.target.checked;
			const anchorId = table._lastSelectedRowId;
			if (!(table.options.enableRowRangeSelection !== false && anchorId !== null && row_getCanMultiSelect(row) && (table.options.isRowRangeSelectionEvent?.(e) ?? false)) || !selectRowRange(row, anchorId, checked, opts)) row_toggleSelected(row, checked, opts);
			table._lastSelectedRowId = row.id;
		};
	}
	/**
	* Resolves and mutates an inclusive interval in the table's latest logical
	* display order.
	*
	* The anchor is resolved without throwing from the pre-pagination row model,
	* then the core row model. Both endpoint display indexes must still identify
	* those rows in the current order and both endpoints must support
	* multi-selection. Eligible interval rows are applied through one row
	* selection updater; non-selectable and non-multi-selectable rows are skipped.
	* Returns `false` when the interaction should fall back to an ordinary toggle.
	*/
	function selectRowRange(row, anchorId, value, opts) {
		const includeChildren = opts?.selectChildren ?? true;
		const table = row.table;
		const rows = table.getRowsInDisplayOrder();
		const anchorRow = table.getPrePaginatedRowModel().rowsById[anchorId] ?? table.getCoreRowModel().rowsById[anchorId];
		if (!anchorRow) return false;
		const anchorIndex = anchorRow.getDisplayIndex();
		const rowIndex = row.getDisplayIndex();
		const anchorAtIndex = rows[anchorIndex];
		const rowAtIndex = rows[rowIndex];
		if (anchorIndex < 0 || rowIndex < 0 || anchorIndex >= rows.length || rowIndex >= rows.length || anchorAtIndex?.id !== anchorRow.id || rowAtIndex?.id !== row.id || !row_getCanMultiSelect(anchorRow) || !row_getCanMultiSelect(row)) return false;
		const start = Math.min(anchorIndex, rowIndex);
		const end = Math.max(anchorIndex, rowIndex);
		table_setRowSelection(table, (old) => {
			const rowSelection = Object.assign(makeObjectMap(), old);
			for (let index = start; index <= end; index++) {
				const rangeRow = rows[index];
				if (!row_getCanSelect(rangeRow) || !row_getCanMultiSelect(rangeRow)) continue;
				mutateRowIsSelected(rowSelection, rangeRow.id, value, includeChildren, table);
				if (!value && opts?.deselectParents) pruneAncestorRowIds(rowSelection, rangeRow);
			}
			return rowSelection;
		});
		return true;
	}
	function mutateRowIsSelected(rowSelection, rowId, value, includeChildren, table, respectCanSelectOnDeselect) {
		const row = table.getRow(rowId, true);
		if (value) {
			if (!row_getCanMultiSelect(row)) Object.keys(rowSelection).forEach((key) => delete rowSelection[key]);
			if (row_getCanSelect(row)) rowSelection[rowId] = true;
		} else if (!respectCanSelectOnDeselect || row_getCanSelect(row)) delete rowSelection[rowId];
		if (includeChildren && row.subRows.length && row_getCanSelectSubRows(row)) row.subRows.forEach((r) => mutateRowIsSelected(rowSelection, r.id, value, includeChildren, table, respectCanSelectOnDeselect));
	}
	/**
	* Returns whether a select-all cascade can reach this row: the row itself is
	* selectable and no ancestor blocks descent via `enableSubRowSelection`.
	*
	* `subtreeCache` memoizes the per-ancestor verdict for one select-all pass, so
	* ancestor chains shared by sibling rows are only walked (and the
	* `enableSubRowSelection` predicate only invoked) once per unique ancestor.
	*/
	function isRowSelectableInSelectAll(row, subtreeCache) {
		if (!row_getCanSelect(row)) return false;
		const table = row.table;
		if (table.options.enableSubRowSelection === true) return true;
		const parentId = row.parentId;
		if (parentId === void 0) return true;
		const cached = subtreeCache.get(parentId);
		if (cached !== void 0) return cached;
		const rowsById = table.getCoreRowModel().rowsById;
		const visited = [];
		let selectable = true;
		let currentId = parentId;
		while (currentId !== void 0) {
			const known = subtreeCache.get(currentId);
			if (known !== void 0) {
				selectable = known;
				break;
			}
			visited.push(currentId);
			const parent = rowsById[currentId] ?? table.getRow(currentId, true);
			if (!row_getCanSelectSubRows(parent)) {
				selectable = false;
				break;
			}
			currentId = parent.parentId;
		}
		visited.forEach((id) => subtreeCache.set(id, selectable));
		return selectable;
	}
	function pruneAncestorRowIds(rowSelection, row) {
		const rowsById = row.table.getCoreRowModel().rowsById;
		let parentId = row.parentId;
		while (parentId !== void 0) {
			delete rowSelection[parentId];
			parentId = (rowsById[parentId] ?? row.table.getRow(parentId, true)).parentId;
		}
	}
	function selectRowsRecursively(rows, rowSelection, selectedFlatRows, selectedRowsById) {
		const result = [];
		for (let i = 0; i < rows.length; i++) {
			const row = rows[i];
			const isSelected = isRowSelected(row, rowSelection);
			if (isSelected) {
				selectedFlatRows.push(row);
				selectedRowsById[row.id] = row;
			}
			if (row.subRows.length) {
				const newSubRows = selectRowsRecursively(row.subRows, rowSelection, selectedFlatRows, selectedRowsById);
				if (isSelected) {
					const cloned = Object.create(Object.getPrototypeOf(row));
					copyInstancePropertiesWithoutMemos(cloned, row);
					cloned.subRows = newSubRows;
					result.push(cloned);
				}
			} else if (isSelected) result.push(row);
		}
		return result;
	}
	/**
	* Builds a row model containing rows selected by the current row selection state.
	*
	* The result is derived from the supplied row model, so selected ids absent from
	* that model are not materialized as rows.
	*
	* @example
	* ```ts
	* const selectedRows = selectRowsFn(rowModel)
	* ```
	*/
	function selectRowsFn(rowModel, table) {
		const newSelectedFlatRows = [];
		const newSelectedRowsById = makeObjectMap();
		const rowSelection = table.atoms.rowSelection?.get() ?? {};
		return {
			rows: selectRowsRecursively(rowModel.rows, rowSelection, newSelectedFlatRows, newSelectedRowsById),
			flatRows: newSelectedFlatRows,
			rowsById: newSelectedRowsById
		};
	}
	/**
	* Returns whether a row id is selected in the current row selection state.
	*
	* @example
	* ```ts
	* const selected = isRowSelected(row)
	* ```
	*/
	function isRowSelected(row, rowSelection) {
		return !!(hasOwn(rowSelection, row.id) && rowSelection[row.id]);
	}
	/**
	* Returns whether all, some, or none of a row's selectable descendants are selected.
	*
	* The result is used to drive indeterminate row selection UI.
	*
	* @example
	* ```ts
	* const selectedState = isSubRowSelected(row)
	* ```
	*/
	function isSubRowSelected(row) {
		if (!row.subRows.length) return false;
		const rowSelection = row.table.atoms.rowSelection?.get() ?? {};
		let someSelected = false;
		let allChildrenSelected = true;
		let someSelectable = false;
		for (let i = 0; i < row.subRows.length; i++) {
			const subRow = row.subRows[i];
			if (someSelected && !allChildrenSelected) break;
			if (row_getCanSelect(subRow)) {
				someSelectable = true;
				if (isRowSelected(subRow, rowSelection)) someSelected = true;
				else allChildrenSelected = false;
			}
			if (subRow.subRows.length) {
				const subRowChildrenSelected = isSubRowSelected(subRow);
				if (subRowChildrenSelected === "all") {
					someSelected = true;
					someSelectable = true;
				} else if (subRowChildrenSelected === "some") {
					someSelected = true;
					allChildrenSelected = false;
					someSelectable = true;
				} else allChildrenSelected = false;
			}
		}
		if (!someSelectable) return false;
		return allChildrenSelected ? "all" : someSelected ? "some" : false;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/row-selection/rowSelectionFeature.js
	/**
	* Feature that adds row selection state and APIs for row and page selection.
	*/
	const rowSelectionFeature = {
		initTableInstanceData: (table) => {
			table._lastSelectedRowId = null;
		},
		resetTableInstanceData: (table) => {
			table._lastSelectedRowId = null;
		},
		getInitialState: (initialState) => {
			return {
				rowSelection: getDefaultRowSelectionState(),
				...initialState
			};
		},
		getDefaultTableOptions: (table) => {
			return {
				onRowSelectionChange: makeStateUpdater("rowSelection", table),
				enableRowSelection: true,
				enableMultiRowSelection: true,
				enableRowRangeSelection: true,
				enableSubRowSelection: true,
				isRowRangeSelectionEvent: (event) => {
					const rangeEvent = event;
					return Boolean(rangeEvent.shiftKey || rangeEvent.nativeEvent?.shiftKey);
				}
			};
		},
		assignRowPrototype: (prototype, table) => {
			assignPrototypeAPIs("rowSelectionFeature", prototype, table, {
				row_toggleSelected: { fn: (row, value, opts) => row_toggleSelected(row, value, opts) },
				row_getIsSelected: { fn: (row) => row_getIsSelected(row) },
				row_getIsSomeSelected: {
					fn: (row) => row_getIsSomeSelected(row),
					memoDeps: (row) => [
						row.subRows,
						row.table.atoms.rowSelection?.get(),
						row.table.options.enableRowSelection
					]
				},
				row_getIsAllSubRowsSelected: {
					fn: (row) => row_getIsAllSubRowsSelected(row),
					memoDeps: (row) => [
						row.subRows,
						row.table.atoms.rowSelection?.get(),
						row.table.options.enableRowSelection
					]
				},
				row_getCanSelect: { fn: (row) => row_getCanSelect(row) },
				row_getCanSelectSubRows: { fn: (row) => row_getCanSelectSubRows(row) },
				row_getCanMultiSelect: { fn: (row) => row_getCanMultiSelect(row) },
				row_getToggleSelectedHandler: { fn: (row, opts) => row_getToggleSelectedHandler(row, opts) }
			});
		},
		constructTableAPIs: (table) => {
			assignTableAPIs("rowSelectionFeature", table, {
				table_setRowSelection: { fn: (updater) => table_setRowSelection(table, updater) },
				table_resetRowSelection: { fn: (defaultState) => table_resetRowSelection(table, defaultState) },
				table_toggleAllRowsSelected: { fn: (value, opts) => table_toggleAllRowsSelected(table, value, opts) },
				table_toggleAllPageRowsSelected: { fn: (value, opts) => table_toggleAllPageRowsSelected(table, value, opts) },
				table_getPreSelectedRowModel: { fn: () => table_getPreSelectedRowModel(table) },
				table_getSelectedRowModel: {
					fn: () => table_getSelectedRowModel(table),
					memoDeps: () => [table.atoms.rowSelection?.get(), table.getCoreRowModel()]
				},
				table_getFilteredSelectedRowModel: {
					fn: () => table_getFilteredSelectedRowModel(table),
					memoDeps: () => [table.atoms.rowSelection?.get(), table.getFilteredRowModel()]
				},
				table_getGroupedSelectedRowModel: {
					fn: () => table_getGroupedSelectedRowModel(table),
					memoDeps: () => [table.atoms.rowSelection?.get(), table.getSortedRowModel()]
				},
				table_getSelectedRowIds: {
					fn: () => table_getSelectedRowIds(table),
					memoDeps: () => [table.atoms.rowSelection?.get()]
				},
				table_getIsAllRowsSelected: {
					fn: () => table_getIsAllRowsSelected(table),
					memoDeps: () => [
						table.atoms.rowSelection?.get(),
						table.getFilteredRowModel(),
						table.options.enableRowSelection,
						table.options.enableSubRowSelection
					]
				},
				table_getIsAllPageRowsSelected: {
					fn: () => table_getIsAllPageRowsSelected(table),
					memoDeps: () => [
						table.atoms.rowSelection?.get(),
						table.getPaginatedRowModel(),
						table.options.enableRowSelection,
						table.options.enableSubRowSelection
					]
				},
				table_getIsSomeRowsSelected: {
					fn: () => table_getIsSomeRowsSelected(table),
					memoDeps: () => [table.atoms.rowSelection?.get()]
				},
				table_getIsSomePageRowsSelected: {
					fn: () => table_getIsSomePageRowsSelected(table),
					memoDeps: () => [
						table.atoms.rowSelection?.get(),
						table.getPaginatedRowModel(),
						table.options.enableRowSelection
					]
				},
				table_getToggleAllRowsSelectedHandler: { fn: () => table_getToggleAllRowsSelectedHandler(table) },
				table_getToggleAllPageRowsSelectedHandler: { fn: () => table_getToggleAllPageRowsSelectedHandler(table) }
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/row-sorting/rowSortingFeature.js
	/**
	* Feature that adds row sorting state, defaults, and column/table sorting APIs.
	*/
	const rowSortingFeature = {
		getInitialState(initialState) {
			return {
				sorting: getDefaultSortingState(),
				...initialState
			};
		},
		getDefaultColumnDef() {
			return {
				sortFn: "auto",
				sortUndefined: 1
			};
		},
		getDefaultTableOptions(table) {
			return {
				autoResetSorting: false,
				onSortingChange: makeStateUpdater("sorting", table),
				isMultiSortEvent: (e) => {
					return e.shiftKey;
				}
			};
		},
		assignColumnPrototype(prototype, table) {
			assignPrototypeAPIs("rowSortingFeature", prototype, table, {
				column_getAutoSortFn: { fn: (column) => column_getAutoSortFn(column) },
				column_getAutoSortDir: { fn: (column) => column_getAutoSortDir(column) },
				column_getSortFn: { fn: (column) => column_getSortFn(column) },
				column_toggleSorting: { fn: (column, desc, multi) => column_toggleSorting(column, desc, multi) },
				column_getFirstSortDir: { fn: (column) => column_getFirstSortDir(column) },
				column_getNextSortingOrder: { fn: (column, multi) => column_getNextSortingOrder(column, multi) },
				column_getCanSort: { fn: (column) => column_getCanSort(column) },
				column_getCanMultiSort: { fn: (column) => column_getCanMultiSort(column) },
				column_getIsSorted: { fn: (column) => column_getIsSorted(column) },
				column_getSortIndex: { fn: (column) => column_getSortIndex(column) },
				column_clearSorting: { fn: (column) => column_clearSorting(column) },
				column_getToggleSortingHandler: { fn: (column) => column_getToggleSortingHandler(column) }
			});
		},
		constructTableAPIs(table) {
			assignTableAPIs("rowSortingFeature", table, {
				table_setSorting: { fn: (updater) => table_setSorting(table, updater) },
				table_resetSorting: { fn: (defaultState) => table_resetSorting(table, defaultState) }
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-filtering/filterRowsUtils.js
	/**
	* Filters a row model with the supplied row predicate.
	*
	* The helper supports both filtering from leaf rows upward and filtering parents before descendants, depending on table options.
	*/
	function filterRows(rows, filterRowImpl, table) {
		if (table.options.filterFromLeafRows) return filterRowModelFromLeafs(rows, filterRowImpl, table);
		return filterRowModelFromRoot(rows, filterRowImpl, table);
	}
	function filterRowModelFromLeafs(rowsToFilter, filterRow, table) {
		const newFilteredFlatRows = [];
		const newFilteredRowsById = makeObjectMap();
		const maxDepth = table.options.maxLeafRowFilterDepth ?? 100;
		const recurseFilterRows = (rowsToFilter, depth = 0) => {
			const filteredRows = [];
			for (let row of rowsToFilter) {
				const newRow = constructRow(table, row.id, row.original, row.index, row.depth, void 0, row.parentId);
				newRow.columnFilters = row.columnFilters;
				if (row.subRows.length && depth < maxDepth) {
					newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
					row = newRow;
					if (filterRow(row) && !newRow.subRows.length) {
						filteredRows.push(row);
						newFilteredRowsById[row.id] = row;
						newFilteredFlatRows.push(row);
						continue;
					}
					if (filterRow(row) || newRow.subRows.length) {
						filteredRows.push(row);
						newFilteredRowsById[row.id] = row;
						newFilteredFlatRows.push(row);
						continue;
					}
				} else {
					row = newRow;
					if (filterRow(row)) {
						filteredRows.push(row);
						newFilteredRowsById[row.id] = row;
						newFilteredFlatRows.push(row);
					}
				}
			}
			return filteredRows;
		};
		return {
			rows: recurseFilterRows(rowsToFilter),
			flatRows: newFilteredFlatRows,
			rowsById: newFilteredRowsById
		};
	}
	function filterRowModelFromRoot(rowsToFilter, filterRow, table) {
		const newFilteredFlatRows = [];
		const newFilteredRowsById = makeObjectMap();
		const maxDepth = table.options.maxLeafRowFilterDepth ?? 100;
		const recurseFilterRows = (rowsToFilter, depth = 0) => {
			const filteredRows = [];
			for (let row of rowsToFilter) if (filterRow(row)) {
				if (row.subRows.length && depth < maxDepth) {
					const newRow = constructRow(table, row.id, row.original, row.index, row.depth, void 0, row.parentId);
					newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
					row = newRow;
				}
				filteredRows.push(row);
				newFilteredFlatRows.push(row);
				newFilteredRowsById[row.id] = row;
				if (row.subRows.length && depth >= maxDepth) addSubRowsToFlatArrays(row.subRows, newFilteredFlatRows, newFilteredRowsById);
			}
			return filteredRows;
		};
		return {
			rows: recurseFilterRows(rowsToFilter),
			flatRows: newFilteredFlatRows,
			rowsById: newFilteredRowsById
		};
	}
	function addSubRowsToFlatArrays(subRows, flatRows, rowsById) {
		for (const subRow of subRows) {
			flatRows.push(subRow);
			rowsById[subRow.id] = subRow;
			if (subRow.subRows.length) addSubRowsToFlatArrays(subRow.subRows, flatRows, rowsById);
		}
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-faceting/createFacetedRowModel.js
	/**
	* Creates a memoized faceted row model factory.
	*
	* The factory reads the relevant table state atoms and options, then returns a row model function used by the table row-model pipeline.
	*/
	function createFacetedRowModel() {
		return (_table, columnId) => {
			const table = _table;
			return tableMemo({
				feature: "columnFacetingFeature",
				table,
				fnName: "createFacetedRowModel",
				memoDeps: () => [
					table.getPreFilteredRowModel(),
					table.atoms.columnFilters?.get(),
					table.atoms.globalFilter?.get(),
					table.getFilteredRowModel()
				],
				fn: (preRowModel, columnFilters, globalFilter) => _createFacetedRowModel(table, columnId, preRowModel, columnFilters, globalFilter)
			});
		};
	}
	function _createFacetedRowModel(table, columnId, preRowModel, columnFilters, globalFilter) {
		const hasGlobalFilter = globalFilter !== void 0 && globalFilter !== null && globalFilter !== "";
		if (!preRowModel.rows.length || !columnFilters?.length && !hasGlobalFilter) return preRowModel;
		const filterableIds = [];
		if (columnFilters) for (let i = 0; i < columnFilters.length; i++) {
			const id = columnFilters[i].id;
			if (id !== columnId) filterableIds.push(id);
		}
		if (hasGlobalFilter && columnId !== "__global__") filterableIds.push("__global__");
		if (!filterableIds.length) return preRowModel;
		const filterRowsImpl = (row) => {
			for (let i = 0; i < filterableIds.length; i++) if (row.columnFilters?.[filterableIds[i]] === false) return false;
			return true;
		};
		return filterRows(preRowModel.rows, filterRowsImpl, table);
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-faceting/createFacetedUniqueValues.js
	/**
	* Creates a memoized faceted unique values helper for faceted filtering.
	*
	* The returned function derives facet data from the table row model and relevant filter state so filter UIs can display available values.
	*/
	function createFacetedUniqueValues() {
		return (_table, columnId) => {
			const table = _table;
			return tableMemo({
				feature: "columnFacetingFeature",
				table,
				fnName: "table.getFacetedUniqueValues",
				memoDeps: () => {
					if (columnId === "__global__") return [callMemoOrStaticFn(table, "getGlobalFacetedRowModel", table_getGlobalFacetedRowModel).flatRows];
					const column = table.getColumn(columnId);
					if (!column) return [table.getPreFilteredRowModel().flatRows];
					return [callMemoOrStaticFn(column, "getFacetedRowModel", column_getFacetedRowModel, table).flatRows];
				},
				fn: (flatRows) => _createFacetedUniqueValues(table, columnId, flatRows)
			});
		};
	}
	function _createFacetedUniqueValues(table, columnId, flatRows) {
		const columnIds = columnId === "__global__" ? table.getAllLeafColumns().filter((column) => column_getCanGlobalFilter(column)).map((column) => column.id) : [columnId];
		const facetedUniqueValues = /* @__PURE__ */ new Map();
		for (let i = 0; i < flatRows.length; i++) for (let c = 0; c < columnIds.length; c++) {
			const values = flatRows[i].getUniqueValues(columnIds[c]);
			if (!values) continue;
			for (let j = 0; j < values.length; j++) {
				const value = values[j];
				const previousValue = facetedUniqueValues.get(value);
				facetedUniqueValues.set(value, previousValue === void 0 ? 1 : previousValue + 1);
			}
		}
		return facetedUniqueValues;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/column-filtering/createFilteredRowModel.js
	/**
	* Creates a memoized filtered row model factory.
	*
	* The factory reads the relevant table state atoms and options, then returns a row model function used by the table row-model pipeline.
	*
	* Register the filter functions you use with the `filterFns` slot on the
	* `features` option:
	* `tableFeatures({ columnFilteringFeature, filteredRowModel: createFilteredRowModel(), filterFns: { includesString: filterFn_includesString } })`.
	* Importing individual `filterFn_*` functions keeps unused built-ins out of
	* your bundle; filter functions passed directly to the `filterFn` column
	* option need no registration at all.
	*/
	function createFilteredRowModel() {
		return (_table) => {
			const table = _table;
			return tableMemo({
				feature: "columnFilteringFeature",
				table,
				fnName: "table.getFilteredRowModel",
				memoDeps: () => [
					table.getPreFilteredRowModel(),
					table.atoms.columnFilters?.get(),
					table.atoms.globalFilter?.get()
				],
				fn: () => _createFilteredRowModel(table),
				onAfterUpdate: skipFirstRun(() => table_autoResetPageIndex(table))
			});
		};
	}
	function _createFilteredRowModel(table) {
		const rowModel = table.getPreFilteredRowModel();
		const columnFilters = table.atoms.columnFilters?.get();
		const globalFilter = table.atoms.globalFilter?.get();
		const hasGlobalFilter = globalFilter !== void 0 && globalFilter !== null && globalFilter !== "";
		if (!rowModel.rows.length || !columnFilters?.length && !hasGlobalFilter) {
			const flatRows = rowModel.flatRows;
			for (let i = 0; i < flatRows.length; i++) {
				const row = flatRows[i];
				row.columnFilters = makeObjectMap();
				row.columnFiltersMeta = makeObjectMap();
			}
			return rowModel;
		}
		const resolvedColumnFilters = [];
		const resolvedGlobalFilters = [];
		columnFilters?.forEach((columnFilter) => {
			const column = table_getColumn(table, columnFilter.id);
			if (!column) return;
			const filterFn = column_getFilterFn(column);
			if (!filterFn) return;
			resolvedColumnFilters.push({
				id: columnFilter.id,
				filterFn,
				resolvedValue: filterFn.resolveFilterValue?.(columnFilter.value) ?? columnFilter.value
			});
		});
		const filterableIds = columnFilters?.map((d) => d.id) ?? [];
		const globalFilterFn = table_getGlobalFilterFn(table);
		const globallyFilterableColumns = table.getAllLeafColumns().filter((column) => column_getCanGlobalFilter(column));
		if (hasGlobalFilter && globalFilterFn && globallyFilterableColumns.length) {
			filterableIds.push("__global__");
			globallyFilterableColumns.forEach((column) => {
				resolvedGlobalFilters.push({
					id: column.id,
					filterFn: globalFilterFn,
					resolvedValue: globalFilterFn.resolveFilterValue?.(globalFilter) ?? globalFilter
				});
			});
		}
		const flatRows = rowModel.flatRows;
		for (let i = 0; i < flatRows.length; i++) {
			const row = flatRows[i];
			row.columnFilters = makeObjectMap();
			row.columnFiltersMeta = makeObjectMap();
			if (resolvedColumnFilters.length) for (let j = 0; j < resolvedColumnFilters.length; j++) {
				const currentColumnFilter = resolvedColumnFilters[j];
				const id = currentColumnFilter.id;
				row.columnFilters[id] = currentColumnFilter.filterFn(row, id, currentColumnFilter.resolvedValue, (filterMeta) => {
					if (!row.columnFiltersMeta) row.columnFiltersMeta = makeObjectMap();
					row.columnFiltersMeta[id] = filterMeta;
				});
			}
			if (resolvedGlobalFilters.length) {
				for (let j = 0; j < resolvedGlobalFilters.length; j++) {
					const currentGlobalFilter = resolvedGlobalFilters[j];
					const id = currentGlobalFilter.id;
					if (currentGlobalFilter.filterFn(row, id, currentGlobalFilter.resolvedValue, (filterMeta) => {
						if (!row.columnFiltersMeta) row.columnFiltersMeta = makeObjectMap();
						row.columnFiltersMeta[id] = filterMeta;
					})) {
						row.columnFilters.__global__ = true;
						break;
					}
				}
				if (row.columnFilters.__global__ !== true) row.columnFilters.__global__ = false;
			}
		}
		const filterRowsImpl = (row) => {
			for (let i = 0; i < filterableIds.length; i++) if (row.columnFilters[filterableIds[i]] === false) return false;
			return true;
		};
		return filterRows(rowModel.rows, filterRowsImpl, table);
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/row-expanding/createExpandedRowModel.js
	/**
	* Expands a row model according to the current expanded row state.
	*
	* Expanded sub-rows are inserted into the flattened row order while preserving the original row hierarchy.
	*/
	function expandRows(rowModel) {
		const expandedRows = [];
		const handleRow = (row) => {
			expandedRows.push(row);
			if (row.subRows.length && row_getIsExpanded(row)) row.subRows.forEach(handleRow);
		};
		rowModel.rows.forEach(handleRow);
		return {
			rows: expandedRows,
			flatRows: rowModel.flatRows,
			rowsById: rowModel.rowsById
		};
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/row-pagination/createPaginatedRowModel.js
	/**
	* Creates a memoized paginated row model factory.
	*
	* The factory reads the relevant table state atoms and options, then returns a row model function used by the table row-model pipeline.
	*/
	function createPaginatedRowModel() {
		return (_table) => {
			const table = _table;
			return tableMemo({
				feature: "rowPaginationFeature",
				table,
				fnName: "table.getPaginatedRowModel",
				memoDeps: () => [
					table.getPrePaginatedRowModel(),
					table.atoms.pagination?.get(),
					!table.options.paginateExpandedRows ? table.atoms.expanded?.get() : void 0
				],
				fn: () => _createPaginatedRowModel(table)
			});
		};
	}
	function _createPaginatedRowModel(table) {
		const prePaginatedRowModel = table.getPrePaginatedRowModel();
		const pagination = table.atoms.pagination?.get();
		if (!prePaginatedRowModel.rows.length) return prePaginatedRowModel;
		const { pageSize, pageIndex } = pagination ?? getDefaultPaginationState();
		const { rows, flatRows, rowsById } = prePaginatedRowModel;
		const pageStart = pageSize * pageIndex;
		const pageEnd = pageStart + pageSize;
		const paginatedRows = rows.slice(pageStart, pageEnd);
		let paginatedRowModel;
		if (!table.options.paginateExpandedRows) paginatedRowModel = expandRows({
			rows: paginatedRows,
			flatRows,
			rowsById
		});
		else paginatedRowModel = {
			rows: paginatedRows,
			flatRows,
			rowsById
		};
		paginatedRowModel.flatRows = [];
		const seenFlatRows = /* @__PURE__ */ new Set();
		const handleRow = (row) => {
			if (seenFlatRows.has(row.id)) return;
			seenFlatRows.add(row.id);
			paginatedRowModel.flatRows.push(row);
			if (row.subRows.length) row.subRows.forEach(handleRow);
		};
		paginatedRowModel.rows.forEach(handleRow);
		return paginatedRowModel;
	}
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/features/row-sorting/createSortedRowModel.js
	/**
	* Creates a memoized sorted row model factory.
	*
	* The factory reads the relevant table state atoms and options, then returns a row model function used by the table row-model pipeline.
	*
	* Register the sorting functions you use with the `sortFns` slot on the
	* `features` option:
	* `tableFeatures({ rowSortingFeature, sortedRowModel: createSortedRowModel(), sortFns: { alphanumeric: sortFn_alphanumeric } })`.
	* Importing individual `sortFn_*` functions keeps unused built-ins out of
	* your bundle; sorting functions passed directly to the `sortFn` column
	* option need no registration at all.
	*/
	function createSortedRowModel() {
		return (_table) => {
			const table = _table;
			return tableMemo({
				feature: "rowSortingFeature",
				table,
				fnName: "table.getSortedRowModel",
				memoDeps: () => [table.atoms.sorting?.get(), table.getPreSortedRowModel()],
				fn: () => _createSortedRowModel(table),
				onAfterUpdate: skipFirstRun(() => table_autoResetPageIndex(table))
			});
		};
	}
	function _createSortedRowModel(table) {
		const preSortedRowModel = table.getPreSortedRowModel();
		const sorting = table.atoms.sorting?.get();
		if (!preSortedRowModel.rows.length || !sorting?.length) return preSortedRowModel;
		const sortedFlatRows = [];
		const availableSorting = sorting.filter((sort) => {
			const column = table.getColumn(sort.id);
			return column ? column_getCanSort(column) : false;
		});
		if (!availableSorting.length) return preSortedRowModel;
		const resolvedSorting = [];
		for (let i = 0; i < availableSorting.length; i++) {
			const sortEntry = availableSorting[i];
			const column = table.getColumn(sortEntry.id);
			if (!column) continue;
			resolvedSorting.push({
				id: sortEntry.id,
				desc: sortEntry.desc,
				sortUndefined: column.columnDef.sortUndefined,
				invertSorting: column.columnDef.invertSorting,
				sortFn: column_getSortFn(column)
			});
		}
		const compareRows = (rowA, rowB) => {
			for (let i = 0; i < resolvedSorting.length; i++) {
				const sortEntry = resolvedSorting[i];
				const sortUndefined = sortEntry.sortUndefined;
				const isDesc = sortEntry.desc;
				let sortInt = 0;
				if (sortUndefined) {
					const aValue = rowA.getValue(sortEntry.id);
					const bValue = rowB.getValue(sortEntry.id);
					const aUndefined = aValue === void 0;
					const bUndefined = bValue === void 0;
					if (aUndefined && bUndefined) continue;
					if (aUndefined || bUndefined) {
						if (sortUndefined === "first") return aUndefined ? -1 : 1;
						if (sortUndefined === "last") return aUndefined ? 1 : -1;
						sortInt = aUndefined ? sortUndefined : -sortUndefined;
					}
				}
				if (sortInt === 0) sortInt = sortEntry.sortFn(rowA, rowB, sortEntry.id);
				if (sortInt !== 0) {
					if (isDesc) sortInt *= -1;
					if (sortEntry.invertSorting) sortInt *= -1;
					return sortInt;
				}
			}
			return rowA.index - rowB.index;
		};
		const sortData = (rows) => {
			const sortedData = rows.slice();
			sortedData.sort(compareRows);
			let changed = false;
			for (let i = 0; i < sortedData.length; i++) {
				const row = sortedData[i];
				if (row !== rows[i]) changed = true;
				if (row.subRows.length) {
					const sortedSubRows = sortData(row.subRows);
					if (sortedSubRows.changed) {
						const cloned = Object.create(Object.getPrototypeOf(row));
						copyInstancePropertiesWithoutMemos(cloned, row);
						cloned.subRows = sortedSubRows.rows;
						sortedData[i] = cloned;
						sortedFlatRows.push(cloned);
						changed = true;
					} else sortedFlatRows.push(row);
				} else sortedFlatRows.push(row);
			}
			return {
				rows: sortedData,
				changed
			};
		};
		return {
			rows: sortData(preSortedRowModel.rows).rows,
			flatRows: sortedFlatRows,
			rowsById: preSortedRowModel.rowsById
		};
	}
	//#endregion
	//#region src/filters.ts
	const FILTER_OPERATORS = {
		text: [
			"contains",
			"notContains",
			"equals",
			"notEquals",
			"startsWith",
			"endsWith",
			"blank",
			"notBlank"
		],
		number: [
			"equals",
			"notEquals",
			"greaterThan",
			"greaterThanOrEqual",
			"lessThan",
			"lessThanOrEqual",
			"between",
			"blank",
			"notBlank"
		],
		date: [
			"equals",
			"notEquals",
			"greaterThan",
			"greaterThanOrEqual",
			"lessThan",
			"lessThanOrEqual",
			"between",
			"blank",
			"notBlank"
		]
	};
	const VALUELESS_OPERATORS = /* @__PURE__ */ new Set(["blank", "notBlank"]);
	const isBlank = (value) => value === null || value === void 0 || String(value).trim() === "";
	const toComparable = (value, filterType) => {
		if (filterType === "date") {
			const time = value instanceof Date ? value.getTime() : new Date(String(value)).getTime();
			return Number.isNaN(time) ? null : time;
		}
		const numeric = typeof value === "number" ? value : Number(value);
		return Number.isFinite(numeric) ? numeric : null;
	};
	const evaluateCondition = (cellValue, condition, filterType) => {
		const { operator } = condition;
		if (operator === "blank") return isBlank(cellValue);
		if (operator === "notBlank") return !isBlank(cellValue);
		if (isBlank(condition.value)) return true;
		if (filterType === "number" || filterType === "date") {
			const cell = toComparable(cellValue, filterType);
			const bound = toComparable(condition.value, filterType);
			if (cell === null || bound === null) return false;
			switch (operator) {
				case "equals": return cell === bound;
				case "notEquals": return cell !== bound;
				case "greaterThan": return cell > bound;
				case "greaterThanOrEqual": return cell >= bound;
				case "lessThan": return cell < bound;
				case "lessThanOrEqual": return cell <= bound;
				case "between": {
					const upper = toComparable(condition.value2, filterType);
					return upper === null ? cell >= bound : cell >= bound && cell <= upper;
				}
				default: return false;
			}
		}
		const cell = String(cellValue ?? "").toLowerCase();
		const needle = String(condition.value).toLowerCase();
		switch (operator) {
			case "contains": return cell.includes(needle);
			case "notContains": return !cell.includes(needle);
			case "equals": return cell === needle;
			case "notEquals": return cell !== needle;
			case "startsWith": return cell.startsWith(needle);
			case "endsWith": return cell.endsWith(needle);
			default: return false;
		}
	};
	const evaluateColumnFilter = (cellValue, filterValue, filterType = "text") => {
		if (typeof filterValue === "string") return String(cellValue ?? "").toLowerCase().includes(filterValue.toLowerCase());
		if ("conditions" in filterValue) {
			const results = filterValue.conditions.map((condition) => evaluateCondition(cellValue, condition, filterType));
			return filterValue.join === "or" ? results.some(Boolean) : results.every(Boolean);
		}
		return filterValue.value.some((candidate) => String(candidate) === String(cellValue));
	};
	//#endregion
	//#region src/util/direction.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid util/direction.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const isElementRTL = (element) => typeof getComputedStyle === "function" && element ? getComputedStyle(element).direction === "rtl" : false;
	const syncResizeDirection = (table, element) => {
		const direction = isElementRTL(element) ? "rtl" : "ltr";
		if (table.options.columnResizeDirection !== direction) table.setOptions((previous) => ({
			...previous,
			columnResizeDirection: direction
		}));
	};
	//#endregion
	//#region src/ui/toolbar.ts
	const CLASS_NAME_TOOLBAR = "data-grid-toolbar";
	const CLASS_NAME_ACTIONS = "data-grid-toolbar-actions";
	const CLASS_NAME_SEARCH = "data-grid-toolbar-search";
	const resolveToolbar = (options) => {
		const { toolbar } = options;
		const columnVisibility = Boolean(options.columnVisibility);
		if (toolbar === true) return {
			columns: columnVisibility,
			export: true,
			exportOptions: {},
			history: options.history,
			print: true,
			search: true
		};
		if (typeof toolbar === "object") {
			const exportOption = toolbar.export ?? false;
			return {
				columns: (toolbar.columns ?? false) && columnVisibility,
				export: Boolean(exportOption),
				exportOptions: typeof exportOption === "object" ? exportOption : {},
				history: (toolbar.history ?? false) && options.history,
				print: toolbar.print ?? false,
				search: (toolbar.search ?? false) || Boolean(options.globalFilter)
			};
		}
		return {
			columns: false,
			export: false,
			exportOptions: {},
			history: false,
			print: false,
			search: Boolean(options.globalFilter)
		};
	};
	const isGlobalFilterEnabled = (options) => resolveToolbar(options).search;
	const createActionButton = (icon, label, dataAttribute) => {
		const button = document.createElement("button");
		button.type = "button";
		button.classList.add("btn", "btn-ghost", "btn-sm");
		button.innerHTML = icon;
		button.setAttribute(dataAttribute, "");
		button.setAttribute("data-coreui-tooltip", label);
		const text = document.createElement("span");
		text.classList.add("visually-hidden");
		text.textContent = label;
		button.append(text);
		return button;
	};
	const createToolbar = (context) => {
		const element = document.createElement("div");
		element.classList.add(CLASS_NAME_TOOLBAR);
		if (context.columns || context.export || context.print || context.history) {
			const actions = document.createElement("div");
			actions.classList.add(CLASS_NAME_ACTIONS);
			if (context.columns) actions.append(createActionButton(context.icons.columns, context.labels.toolbarColumns, "data-coreui-toolbar-columns"));
			if (context.export) actions.append(createActionButton(context.icons.export, context.labels.toolbarExport, "data-coreui-toolbar-export"));
			if (context.print) actions.append(createActionButton(context.icons.print, context.labels.toolbarPrint, "data-coreui-toolbar-print"));
			if (context.history) {
				const undoButton = createActionButton(context.icons.undo, context.labels.toolbarUndo, "data-coreui-toolbar-undo");
				const redoButton = createActionButton(context.icons.redo, context.labels.toolbarRedo, "data-coreui-toolbar-redo");
				undoButton.disabled = true;
				redoButton.disabled = true;
				actions.append(undoButton, redoButton);
			}
			element.append(actions);
		}
		if (context.search) {
			const search = document.createElement("div");
			search.classList.add(CLASS_NAME_SEARCH);
			const input = document.createElement("input");
			input.type = "search";
			input.classList.add("form-control", "form-control-sm");
			input.placeholder = context.labels.globalFilterPlaceholder;
			input.setAttribute("aria-label", context.labels.globalFilterLabel);
			input.dataset.coreuiGlobalFilter = "";
			search.append(input);
			element.append(search);
		}
		return { element };
	};
	//#endregion
	//#region src/engine/validate.ts
	const FLAG_FEATURES = [
		["cellSelection", ["cellSelectionFeature"]],
		["columnFilters", ["columnFilteringFeature", "filteredRowModel"]],
		["columnOrder", ["columnOrderingFeature"]],
		["columnPinning", [
			"columnPinningFeature",
			"columnSizingFeature",
			"columnVisibilityFeature"
		]],
		["columnSizing", ["columnResizingFeature", "columnSizingFeature"]],
		["columnVisibility", ["columnVisibilityFeature"]],
		["globalFilter", [
			"filteredRowModel",
			"filterFns",
			"globalFilteringFeature"
		]],
		["pagination", ["paginatedRowModel", "rowPaginationFeature"]],
		["rowSelection", ["rowSelectionFeature"]],
		["selectFilters", [
			"columnFacetingFeature",
			"facetedRowModel",
			"facetedUniqueValues"
		]],
		["sorting", ["rowSortingFeature", "sortedRowModel"]]
	];
	const assertFeatureCoverage = (componentName, features, flags) => {
		for (const [flag, requiredKeys] of FLAG_FEATURES) {
			if (!flags[flag]) continue;
			const label = flag === "selectFilters" ? "columnFilters (filterType \"select\")" : flag;
			for (const key of requiredKeys) if (!(key in features)) throw new TypeError(`${componentName.toUpperCase()}: Option "${label}" requires feature "${key}" in "features".`);
		}
	};
	//#endregion
	//#region src/engine/table.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid engine/table.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const UNPAGINATED_PAGE_SIZE = Number.MAX_SAFE_INTEGER;
	const INFINITE_SCROLL_PAGE_SIZE = 50;
	const toTanStackFilterFn = (column) => {
		const { filterFn } = column;
		if (filterFn) return (row, columnId, filterValue) => filterFn(row.getValue(columnId), filterValue, row.original);
		return (row, columnId, filterValue) => evaluateColumnFilter(row.getValue(columnId), filterValue, column.filterType);
	};
	const createGridTable = (options, getElement) => {
		const sortingOptions = typeof options.sorting === "object" ? options.sorting : {};
		const sizingOptions = typeof options.columnSizing === "object" ? options.columnSizing : {};
		const paginationOptions = typeof options.pagination === "object" ? options.pagination : {};
		const serverSide = Boolean(options.dataProvider);
		const sizingEnabled = Boolean(options.columnSizing);
		const pinningEnabled = Boolean(options.columnPinning);
		const widthsEnabled = sizingEnabled || pinningEnabled;
		const paginated = Boolean(options.pagination) || serverSide;
		const infiniteOptions = typeof options.infiniteScroll === "object" ? options.infiniteScroll : {};
		if (options.infiniteScroll) {
			if (!serverSide) throw new TypeError("DATA-GRID: Option \"infiniteScroll\" requires \"dataProvider\".");
			if (options.pagination) throw new TypeError("DATA-GRID: Option \"infiniteScroll\" cannot be combined with \"pagination\".");
			if (!options.virtualization) throw new TypeError("DATA-GRID: Option \"infiniteScroll\" requires \"virtualization\".");
		}
		const { features } = options;
		if (!features) throw new TypeError("DATA-GRID: Option \"features\" is required.");
		assertFeatureCoverage("data-grid", features, {
			cellSelection: options.cellSelection,
			columnFilters: options.columnFilters,
			columnOrder: Boolean(options.columnOrder),
			columnPinning: pinningEnabled,
			columnSizing: sizingEnabled,
			columnVisibility: Boolean(options.columnVisibility),
			globalFilter: isGlobalFilterEnabled(options),
			pagination: paginated,
			rowSelection: Boolean(options.rowSelection),
			selectFilters: options.columnFilters && options.columns.some((column) => column.filterType === "select"),
			sorting: Boolean(options.sorting)
		});
		const initialState = {
			..."rowPaginationFeature" in features && { pagination: {
				pageIndex: 0,
				pageSize: options.infiniteScroll ? infiniteOptions.pageSize ?? INFINITE_SCROLL_PAGE_SIZE : paginated ? paginationOptions.pageSize ?? 10 : UNPAGINATED_PAGE_SIZE
			} },
			...typeof options.columnPinning === "object" && { columnPinning: {
				start: [],
				end: [],
				...options.columnPinning
			} },
			...Array.isArray(options.columnOrder) && { columnOrder: options.columnOrder },
			...typeof options.columnVisibility === "object" && { columnVisibility: options.columnVisibility }
		};
		return constructTable({
			columns: options.columns.map((column) => {
				const size = column.width ?? null;
				return {
					accessorKey: column.key,
					enableColumnFilter: column.filterable !== false,
					enableHiding: column.hideable !== false,
					enableResizing: column.resizable !== false,
					enableSorting: column.sortable !== false,
					filterFn: toTanStackFilterFn(column),
					id: column.key,
					meta: {
						label: column.label,
						formatter: column.formatter,
						width: column.width
					},
					...widthsEnabled && size !== null && { size }
				};
			}),
			columnResizeMode: sizingOptions.mode ?? "onChange",
			columnResizeDirection: isElementRTL(getElement?.()) ? "rtl" : "ltr",
			data: serverSide ? [] : options.items,
			enableCellSelection: Boolean(options.cellSelection),
			enableColumnFilters: Boolean(options.columnFilters),
			enableColumnPinning: pinningEnabled,
			enableColumnResizing: sizingEnabled,
			enableGlobalFilter: isGlobalFilterEnabled(options),
			enableHiding: Boolean(options.columnVisibility),
			enableMultiSort: sortingOptions.multiple !== false,
			enableRowSelection: Boolean(options.rowSelection),
			enableSorting: Boolean(options.sorting),
			enableSortingRemoval: Boolean(sortingOptions.resetable),
			features,
			globalFilterFn: "includesString",
			...serverSide && {
				manualFiltering: true,
				manualPagination: true,
				manualSorting: true,
				rowCount: 0
			},
			...options.itemKey && { getRowId: options.itemKey },
			initialState,
			renderFallbackValue: null
		});
	};
	const subscribeToTableState = (table, listener) => {
		let previous = table.store.state;
		const subscription = table.store.subscribe((next) => {
			const from = previous;
			previous = next;
			listener(from, next);
		});
		return () => subscription.unsubscribe();
	};
	//#endregion
	//#region ../../node_modules/@tanstack/virtual-core/dist/esm/lazy-measurements.js
	function createLazyMeasurementsView(count, flat, getItemKey) {
		const cache = new Array(count);
		return new Proxy(cache, { get(target, prop, receiver) {
			if (typeof prop === "string") {
				const c = prop.charCodeAt(0);
				if (c >= 48 && c <= 57) {
					const i = +prop;
					if (Number.isInteger(i) && i >= 0 && i < count) {
						let v = target[i];
						if (!v) {
							const s = flat[i * 2];
							v = target[i] = {
								index: i,
								key: getItemKey(i),
								start: s,
								size: flat[i * 2 + 1],
								end: s + flat[i * 2 + 1],
								lane: 0
							};
						}
						return v;
					}
				}
				if (prop === "length") return count;
			}
			return Reflect.get(target, prop, receiver);
		} });
	}
	//#endregion
	//#region ../../node_modules/@tanstack/virtual-core/dist/esm/utils.js
	function memo(getDeps, fn, opts) {
		let deps = opts.initialDeps ?? [];
		let result;
		let isInitial = true;
		function memoizedFunction() {
			const newDeps = getDeps();
			if (!(newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep))) return result;
			deps = newDeps;
			result = fn(...newDeps);
			if ((opts == null ? void 0 : opts.onChange) && !(isInitial && opts.skipInitialOnChange)) opts.onChange(result);
			isInitial = false;
			return result;
		}
		memoizedFunction.updateDeps = (newDeps) => {
			deps = newDeps;
		};
		return memoizedFunction;
	}
	function notUndefined(value, msg) {
		if (value === void 0) throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
		else return value;
	}
	const approxEqual = (a, b) => Math.abs(a - b) < 1.01;
	const debounce$1 = (targetWindow, fn, ms) => {
		let timeoutId;
		return function(...args) {
			targetWindow.clearTimeout(timeoutId);
			timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
		};
	};
	//#endregion
	//#region ../../node_modules/@tanstack/virtual-core/dist/esm/index.js
	let _isIOSResult;
	const isIOSWebKit = () => {
		if (_isIOSResult !== void 0) return _isIOSResult;
		if (typeof navigator === "undefined") return _isIOSResult = false;
		if (/iP(hone|od|ad)/.test(navigator.userAgent)) return _isIOSResult = true;
		const mtp = navigator.maxTouchPoints;
		return _isIOSResult = navigator.platform === "MacIntel" && mtp !== void 0 && mtp > 0;
	};
	const getRect = (element) => {
		const { offsetWidth, offsetHeight } = element;
		return {
			width: offsetWidth,
			height: offsetHeight
		};
	};
	const defaultKeyExtractor = (index) => index;
	const defaultRangeExtractor = (range) => {
		const start = Math.max(range.startIndex - range.overscan, 0);
		const len = Math.min(range.endIndex + range.overscan, range.count - 1) - start + 1;
		const arr = new Array(len);
		for (let i = 0; i < len; i++) arr[i] = start + i;
		return arr;
	};
	const observeElementRect = (instance, cb) => {
		const element = instance.scrollElement;
		if (!element) return;
		const targetWindow = instance.targetWindow;
		if (!targetWindow) return;
		const handler = (rect) => {
			const { width, height } = rect;
			cb({
				width: Math.round(width),
				height: Math.round(height)
			});
		};
		handler(getRect(element));
		if (!targetWindow.ResizeObserver) return () => {};
		const observer = new targetWindow.ResizeObserver((entries) => {
			const run = () => {
				const entry = entries[0];
				if (entry == null ? void 0 : entry.borderBoxSize) {
					const box = entry.borderBoxSize[0];
					if (box) {
						handler({
							width: box.inlineSize,
							height: box.blockSize
						});
						return;
					}
				}
				handler(getRect(element));
			};
			instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
		});
		observer.observe(element, { box: "border-box" });
		return () => {
			observer.unobserve(element);
		};
	};
	const addEventListenerOptions = { passive: true };
	const supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
	const observeOffset = (instance, cb, readOffset) => {
		const element = instance.scrollElement;
		if (!element) return;
		const targetWindow = instance.targetWindow;
		if (!targetWindow) return;
		const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
		let offset = 0;
		const fallback = registerScrollendEvent ? null : debounce$1(targetWindow, () => cb(offset, false), instance.options.isScrollingResetDelay);
		const createHandler = (isScrolling) => () => {
			offset = readOffset(element);
			fallback?.();
			cb(offset, isScrolling);
		};
		const handler = createHandler(true);
		const endHandler = createHandler(false);
		element.addEventListener("scroll", handler, addEventListenerOptions);
		if (registerScrollendEvent) element.addEventListener("scrollend", endHandler, addEventListenerOptions);
		return () => {
			element.removeEventListener("scroll", handler);
			if (registerScrollendEvent) element.removeEventListener("scrollend", endHandler);
		};
	};
	const observeElementOffset = (instance, cb) => observeOffset(instance, cb, (el) => {
		const { horizontal, isRtl } = instance.options;
		return horizontal ? el.scrollLeft * (isRtl && -1 || 1) : el.scrollTop;
	});
	const measureElement = (element, entry, instance) => {
		if (instance.options.useCachedMeasurements) {
			const index = instance.indexFromElement(element);
			const key = instance.options.getItemKey(index);
			return instance.itemSizeCache.get(key) ?? instance.options.estimateSize(index);
		}
		if (entry == null ? void 0 : entry.borderBoxSize) {
			const box = entry.borderBoxSize[0];
			if (box) return Math.round(box[instance.options.horizontal ? "inlineSize" : "blockSize"]);
		}
		if (!entry) {
			const index = instance.indexFromElement(element);
			const key = instance.options.getItemKey(index);
			const cachedSize = instance.itemSizeCache.get(key);
			if (cachedSize !== void 0) return cachedSize;
		}
		return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
	};
	const scrollWithAdjustments = (offset, { adjustments = 0, behavior }, instance) => {
		var _a, _b;
		(_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null || _b.call(_a, {
			[instance.options.horizontal ? "left" : "top"]: offset + adjustments,
			behavior
		});
	};
	const elementScroll = scrollWithAdjustments;
	var Virtualizer = class {
		constructor(opts) {
			this.unsubs = [];
			this.scrollElement = null;
			this.targetWindow = null;
			this.isScrolling = false;
			this.scrollState = null;
			this.measurementsCache = [];
			this._flatMeasurements = null;
			this.itemSizeCache = /* @__PURE__ */ new Map();
			this.itemSizeCacheVersion = 0;
			this.laneAssignments = /* @__PURE__ */ new Map();
			this.pendingMin = null;
			this.prevLanes = void 0;
			this.lanesChangedFlag = false;
			this.lanesSettling = false;
			this.pendingScrollAnchor = null;
			this.scrollRect = null;
			this.scrollOffset = null;
			this.scrollDirection = null;
			this.scrollAdjustments = 0;
			this._iosDeferredAdjustment = 0;
			this._iosTouching = false;
			this._iosJustTouchEnded = false;
			this._iosTouchEndTimerId = null;
			this._intendedScrollOffset = null;
			this.elementsCache = /* @__PURE__ */ new Map();
			this.now = () => {
				var _a, _b, _c;
				return ((_c = (_b = (_a = this.targetWindow) == null ? void 0 : _a.performance) == null ? void 0 : _b.now) == null ? void 0 : _c.call(_b)) ?? Date.now();
			};
			this.observer = /* @__PURE__ */ (() => {
				let _ro = null;
				const get = () => {
					if (_ro) return _ro;
					if (!this.targetWindow || !this.targetWindow.ResizeObserver) return null;
					return _ro = new this.targetWindow.ResizeObserver((entries) => {
						entries.forEach((entry) => {
							const run = () => {
								const node = entry.target;
								const index = this.indexFromElement(node);
								if (!node.isConnected) {
									this.observer.unobserve(node);
									for (const [cacheKey, cachedNode] of this.elementsCache) if (cachedNode === node) {
										this.elementsCache.delete(cacheKey);
										break;
									}
									return;
								}
								if (this.shouldMeasureDuringScroll(index)) this.resizeItem(index, this.options.measureElement(node, entry, this));
							};
							this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
						});
					});
				};
				return {
					disconnect: () => {
						var _a;
						(_a = get()) == null || _a.disconnect();
						_ro = null;
					},
					observe: (target) => {
						var _a;
						return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
					},
					unobserve: (target) => {
						var _a;
						return (_a = get()) == null ? void 0 : _a.unobserve(target);
					}
				};
			})();
			this.range = null;
			this.setOptions = (opts2) => {
				var _a, _b;
				const merged = {
					debug: false,
					initialOffset: 0,
					overscan: 1,
					paddingStart: 0,
					paddingEnd: 0,
					scrollPaddingStart: 0,
					scrollPaddingEnd: 0,
					horizontal: false,
					getItemKey: defaultKeyExtractor,
					rangeExtractor: defaultRangeExtractor,
					onChange: () => {},
					measureElement,
					initialRect: {
						width: 0,
						height: 0
					},
					scrollMargin: 0,
					gap: 0,
					indexAttribute: "data-index",
					initialMeasurementsCache: [],
					lanes: 1,
					anchorTo: "start",
					followOnAppend: false,
					scrollEndThreshold: 1,
					isScrollingResetDelay: 150,
					enabled: true,
					isRtl: false,
					useScrollendEvent: false,
					useAnimationFrameWithResizeObserver: false,
					laneAssignmentMode: "estimate",
					useCachedMeasurements: false
				};
				for (const key in opts2) {
					const v = opts2[key];
					if (v !== void 0) merged[key] = v;
				}
				const prevOptions = this.options;
				let anchor = null;
				let followOnAppend = null;
				let edgeKeysChanged = false;
				if (prevOptions !== void 0 && prevOptions.enabled && merged.enabled && merged.anchorTo === "end" && this.scrollElement !== null) {
					const prevCount = prevOptions.count;
					const nextCount = merged.count;
					const measurements = this.getMeasurements();
					const prevFirstKey = prevCount > 0 ? ((_a = measurements[0]) == null ? void 0 : _a.key) ?? prevOptions.getItemKey(0) : null;
					const prevLastKey = prevCount > 0 ? ((_b = measurements[prevCount - 1]) == null ? void 0 : _b.key) ?? prevOptions.getItemKey(prevCount - 1) : null;
					if (nextCount !== prevCount || prevCount > 0 && nextCount > 0 && (merged.getItemKey(0) !== prevFirstKey || merged.getItemKey(nextCount - 1) !== prevLastKey)) {
						edgeKeysChanged = true;
						const item = prevCount > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? measurements[0] : null;
						if (item) anchor = [item.key, this.getScrollOffset() - item.start];
						const behavior = merged.followOnAppend === true ? "auto" : merged.followOnAppend || null;
						if (behavior && nextCount > prevCount && this.isAtEnd(prevOptions.scrollEndThreshold) && (prevCount === 0 || merged.getItemKey(nextCount - 1) !== prevLastKey)) followOnAppend = behavior;
					}
				}
				this.options = merged;
				if (edgeKeysChanged) {
					this.pendingMin = 0;
					this.itemSizeCacheVersion++;
				}
				let anchorResolved = false;
				let anchorDelta = 0;
				if (anchor && this.scrollOffset !== null) {
					const [anchorKey, anchorOffset] = anchor;
					const newMeasurements = this.getMeasurements();
					const { count, getItemKey } = this.options;
					let idx = 0;
					while (idx < count && getItemKey(idx) !== anchorKey) idx++;
					if (idx < count) {
						const anchorItem = newMeasurements[idx];
						if (anchorItem) {
							const newOffset = anchorItem.start + anchorOffset;
							if (newOffset !== this.scrollOffset) {
								anchorDelta = newOffset - this.scrollOffset;
								this.scrollOffset = newOffset;
								anchorResolved = true;
							}
						}
					}
				}
				if (anchorResolved || followOnAppend) this.pendingScrollAnchor = [
					anchorResolved ? anchor[0] : null,
					anchorResolved ? anchor[1] : 0,
					followOnAppend,
					anchorDelta
				];
			};
			this.notify = (sync) => {
				var _a, _b;
				(_b = (_a = this.options).onChange) == null || _b.call(_a, this, sync);
			};
			this.maybeNotify = memo(() => {
				this.calculateRange();
				return [
					this.isScrolling,
					this.range ? this.range.startIndex : null,
					this.range ? this.range.endIndex : null
				];
			}, (isScrolling) => {
				this.notify(isScrolling);
			}, {
				key: false,
				debug: () => this.options.debug,
				initialDeps: [
					this.isScrolling,
					this.range ? this.range.startIndex : null,
					this.range ? this.range.endIndex : null
				]
			});
			this.cleanup = () => {
				this.unsubs.filter(Boolean).forEach((d) => d());
				this.unsubs = [];
				this.observer.disconnect();
				if (this.rafId != null && this.targetWindow) {
					this.targetWindow.cancelAnimationFrame(this.rafId);
					this.rafId = null;
				}
				this.scrollState = null;
				this._iosDeferredAdjustment = 0;
				this._iosTouching = false;
				this._iosJustTouchEnded = false;
				this.scrollElement = null;
				this.targetWindow = null;
			};
			this._didMount = () => {
				return () => {
					this.cleanup();
				};
			};
			this._willUpdate = () => {
				var _a;
				const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
				if (this.scrollElement !== scrollElement) {
					this.cleanup();
					if (!scrollElement) {
						this.maybeNotify();
						return;
					}
					this.scrollElement = scrollElement;
					if (this.scrollElement && "ownerDocument" in this.scrollElement) this.targetWindow = this.scrollElement.ownerDocument.defaultView;
					else this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
					this.elementsCache.forEach((cached) => {
						this.observer.observe(cached);
					});
					this.unsubs.push(this.options.observeElementRect(this, (rect) => {
						this.scrollRect = rect;
						this.maybeNotify();
					}));
					this.unsubs.push(this.options.observeElementOffset(this, (offset, isScrolling) => {
						if (isScrolling && this._intendedScrollOffset === null && offset === this.scrollOffset) return;
						if (this._intendedScrollOffset !== null && Math.abs(offset - this._intendedScrollOffset) < 1.5) offset = this._intendedScrollOffset;
						this._intendedScrollOffset = null;
						this.scrollAdjustments = 0;
						const prevOffset = this.getScrollOffset();
						this.scrollDirection = isScrolling ? prevOffset === offset ? this.scrollDirection : prevOffset < offset ? "forward" : "backward" : null;
						this.scrollOffset = offset;
						this.isScrolling = isScrolling;
						this._flushIosDeferredIfReady();
						if (this.scrollState) this.scheduleScrollReconcile();
						this.maybeNotify();
					}));
					if ("addEventListener" in this.scrollElement) {
						const scrollEl = this.scrollElement;
						const onTouchStart = () => {
							this._iosTouching = true;
							this._iosJustTouchEnded = false;
							if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
								this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
								this._iosTouchEndTimerId = null;
							}
						};
						const onTouchEnd = () => {
							this._iosTouching = false;
							if (!isIOSWebKit() || this.targetWindow == null) return;
							this._iosJustTouchEnded = true;
							this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
								this._iosJustTouchEnded = false;
								this._iosTouchEndTimerId = null;
								this._flushIosDeferredIfReady();
							}, 150);
						};
						scrollEl.addEventListener("touchstart", onTouchStart, addEventListenerOptions);
						scrollEl.addEventListener("touchend", onTouchEnd, addEventListenerOptions);
						this.unsubs.push(() => {
							scrollEl.removeEventListener("touchstart", onTouchStart);
							scrollEl.removeEventListener("touchend", onTouchEnd);
							if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
								this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
								this._iosTouchEndTimerId = null;
							}
						});
					}
					this._scrollToOffset(this.getScrollOffset(), {
						adjustments: void 0,
						behavior: void 0
					});
				}
				const anchor = this.pendingScrollAnchor;
				this.pendingScrollAnchor = null;
				if (anchor && this.scrollElement && this.options.enabled) {
					const [key, _offset, followOnAppend, anchorDelta] = anchor;
					if (key !== null && !followOnAppend) {
						if (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) {
							if (anchorDelta !== 0) this._iosDeferredAdjustment += anchorDelta;
						} else this._scrollToOffset(this.getScrollOffset(), {
							adjustments: void 0,
							behavior: void 0
						});
					}
					if (followOnAppend) this.scrollToEnd({ behavior: followOnAppend });
				}
			};
			this._flushIosDeferredIfReady = () => {
				if (this._iosDeferredAdjustment === 0) return;
				if (this.isScrolling) return;
				if (this._iosTouching) return;
				if (this._iosJustTouchEnded) return;
				const cur = this.getScrollOffset();
				const max = this.getMaxScrollOffset();
				if (cur < 0 || cur > max) return;
				const delta = this._iosDeferredAdjustment;
				this._iosDeferredAdjustment = 0;
				this._scrollToOffset(cur, {
					adjustments: this.scrollAdjustments += delta,
					behavior: void 0
				});
			};
			this.rafId = null;
			this.getSize = () => {
				if (!this.options.enabled) {
					this.scrollRect = null;
					return 0;
				}
				this.scrollRect = this.scrollRect ?? this.options.initialRect;
				return this.scrollRect[this.options.horizontal ? "width" : "height"];
			};
			this.getScrollOffset = () => {
				if (!this.options.enabled) {
					this.scrollOffset = null;
					return 0;
				}
				this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
				return this.scrollOffset;
			};
			this.getMeasurementOptions = memo(() => [
				this.options.count,
				this.options.paddingStart,
				this.options.scrollMargin,
				this.options.getItemKey,
				this.options.enabled,
				this.options.lanes,
				this.options.laneAssignmentMode,
				this.options.gap
			], (count, paddingStart, scrollMargin, getItemKey, enabled, lanes, laneAssignmentMode, gap) => {
				if (this.prevLanes !== void 0 && this.prevLanes !== lanes) this.lanesChangedFlag = true;
				this.prevLanes = lanes;
				this.pendingMin = null;
				return {
					count,
					paddingStart,
					scrollMargin,
					getItemKey,
					enabled,
					lanes,
					laneAssignmentMode,
					gap
				};
			}, { key: false });
			this.getMeasurements = memo(() => [this.getMeasurementOptions(), this.itemSizeCacheVersion], ({ count, paddingStart, scrollMargin, getItemKey, enabled, lanes, laneAssignmentMode, gap }, _itemSizeCacheVersion) => {
				const itemSizeCache = this.itemSizeCache;
				if (!enabled) {
					this.measurementsCache = [];
					this.itemSizeCache.clear();
					this.laneAssignments.clear();
					return [];
				}
				if (this.laneAssignments.size > count) {
					for (const index of this.laneAssignments.keys()) if (index >= count) this.laneAssignments.delete(index);
				}
				if (this.lanesChangedFlag) {
					this.lanesChangedFlag = false;
					this.lanesSettling = true;
					this.measurementsCache = [];
					this.itemSizeCache.clear();
					this.laneAssignments.clear();
					this.pendingMin = null;
				}
				if (this.measurementsCache.length === 0 && !this.lanesSettling) {
					this.measurementsCache = this.options.initialMeasurementsCache;
					this.measurementsCache.forEach((item) => {
						this.itemSizeCache.set(item.key, item.size);
					});
				}
				const min = this.lanesSettling ? 0 : this.pendingMin ?? 0;
				this.pendingMin = null;
				if (this.lanesSettling && this.measurementsCache.length === count) this.lanesSettling = false;
				if (lanes === 1) {
					const need = count * 2;
					let flat = this._flatMeasurements;
					if (!flat || flat.length < need) {
						const next = new Float64Array(need);
						if (flat && min > 0) next.set(flat.subarray(0, min * 2));
						flat = next;
						this._flatMeasurements = flat;
					}
					let runningStart;
					if (min === 0) runningStart = paddingStart + scrollMargin;
					else {
						const prevIdx = min - 1;
						runningStart = flat[prevIdx * 2] + flat[prevIdx * 2 + 1] + gap;
					}
					for (let i = min; i < count; i++) {
						const key = getItemKey(i);
						const measuredSize = itemSizeCache.get(key);
						const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
						flat[i * 2] = runningStart;
						flat[i * 2 + 1] = size;
						runningStart += size + gap;
					}
					const view = createLazyMeasurementsView(count, flat, getItemKey);
					this.measurementsCache = view;
					return view;
				}
				const measurements = this.measurementsCache.slice(0, min);
				const laneLastIndex = new Array(lanes).fill(void 0);
				const laneEnds = new Float64Array(lanes);
				let filledLanes = 0;
				for (let m = 0; m < min; m++) {
					const item = measurements[m];
					if (item) {
						if (laneLastIndex[item.lane] === void 0) filledLanes++;
						laneLastIndex[item.lane] = m;
						laneEnds[item.lane] = item.end;
					}
				}
				for (let i = min; i < count; i++) {
					const key = getItemKey(i);
					const cachedLane = this.laneAssignments.get(i);
					let lane;
					let start;
					const shouldCacheLane = laneAssignmentMode === "estimate" || itemSizeCache.has(key);
					if (cachedLane !== void 0 && this.options.lanes > 1) {
						lane = cachedLane;
						const prevIndex = laneLastIndex[lane];
						const prevInLane = prevIndex !== void 0 ? measurements[prevIndex] : void 0;
						start = prevInLane ? prevInLane.end + gap : paddingStart + scrollMargin;
					} else if (filledLanes === lanes) {
						let bestLane = 0;
						let bestEnd = laneEnds[0];
						let bestIdx = laneLastIndex[0];
						for (let l = 1; l < lanes; l++) {
							const e = laneEnds[l];
							if (e < bestEnd || e === bestEnd && laneLastIndex[l] < bestIdx) {
								bestLane = l;
								bestEnd = e;
								bestIdx = laneLastIndex[l];
							}
						}
						lane = bestLane;
						start = bestEnd + gap;
						if (shouldCacheLane) this.laneAssignments.set(i, lane);
					} else {
						lane = i % this.options.lanes;
						start = paddingStart + scrollMargin;
						if (shouldCacheLane) this.laneAssignments.set(i, lane);
					}
					const measuredSize = itemSizeCache.get(key);
					const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
					const end = start + size;
					measurements[i] = {
						index: i,
						start,
						size,
						end,
						key,
						lane
					};
					if (laneLastIndex[lane] === void 0) filledLanes++;
					laneLastIndex[lane] = i;
					laneEnds[lane] = end;
				}
				this.measurementsCache = measurements;
				return measurements;
			}, {
				key: false,
				debug: () => this.options.debug
			});
			this.calculateRange = memo(() => [
				this.getMeasurements(),
				this.getSize(),
				this.getScrollOffset(),
				this.options.lanes
			], (measurements, outerSize, scrollOffset, lanes) => {
				if (measurements.length === 0 || outerSize === 0) {
					this.range = null;
					return null;
				}
				this.range = calculateRangeImpl(measurements, outerSize, scrollOffset, lanes, lanes === 1 && this._flatMeasurements != null ? this._flatMeasurements : null);
				return this.range;
			}, {
				key: false,
				debug: () => this.options.debug
			});
			this.getVirtualIndexes = memo(() => {
				let startIndex = null;
				let endIndex = null;
				const range = this.calculateRange();
				if (range) {
					startIndex = range.startIndex;
					endIndex = range.endIndex;
				}
				this.maybeNotify.updateDeps([
					this.isScrolling,
					startIndex,
					endIndex
				]);
				return [
					this.options.rangeExtractor,
					this.options.overscan,
					this.options.count,
					startIndex,
					endIndex
				];
			}, (rangeExtractor, overscan, count, startIndex, endIndex) => {
				return startIndex === null || endIndex === null ? [] : rangeExtractor({
					startIndex,
					endIndex,
					overscan,
					count
				});
			}, {
				key: false,
				debug: () => this.options.debug
			});
			this.indexFromElement = (node) => {
				const attributeName = this.options.indexAttribute;
				const indexStr = node.getAttribute(attributeName);
				if (!indexStr) {
					console.warn(`Missing attribute name '${attributeName}={index}' on measured element.`);
					return -1;
				}
				return parseInt(indexStr, 10);
			};
			this.shouldMeasureDuringScroll = (index) => {
				var _a;
				if (!this.scrollState || this.scrollState.behavior !== "smooth") return true;
				const scrollIndex = this.scrollState.index ?? ((_a = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : _a.index);
				if (scrollIndex !== void 0 && this.range) {
					const bufferSize = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2));
					const minIndex = Math.max(0, scrollIndex - bufferSize);
					const maxIndex = Math.min(this.options.count - 1, scrollIndex + bufferSize);
					return index >= minIndex && index <= maxIndex;
				}
				return true;
			};
			this.measureElement = (node) => {
				if (!node) {
					this.elementsCache.forEach((cached, key2) => {
						if (!cached.isConnected) {
							this.observer.unobserve(cached);
							this.elementsCache.delete(key2);
						}
					});
					return;
				}
				const index = this.indexFromElement(node);
				const key = this.options.getItemKey(index);
				const prevNode = this.elementsCache.get(key);
				if (prevNode !== node) {
					if (prevNode) this.observer.unobserve(prevNode);
					this.observer.observe(node);
					this.elementsCache.set(key, node);
				}
				if ((!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(index)) this.resizeItem(index, this.options.measureElement(node, void 0, this));
			};
			this.resizeItem = (index, size) => {
				var _a, _b;
				if (index < 0 || index >= this.options.count) return;
				let cachedSize;
				let itemStart;
				let key;
				const flat = this._flatMeasurements;
				if (this.options.lanes === 1 && flat !== null) {
					key = this.options.getItemKey(index);
					itemStart = flat[index * 2];
					cachedSize = flat[index * 2 + 1];
				} else {
					const item = this.measurementsCache[index];
					if (!item) return;
					key = item.key;
					itemStart = item.start;
					cachedSize = item.size;
				}
				const delta = size - (this.itemSizeCache.get(key) ?? cachedSize);
				if (delta !== 0) {
					const wasAtEnd = this.options.anchorTo === "end" && ((_a = this.scrollState) == null ? void 0 : _a.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold;
					const prevTotalSize = wasAtEnd ? this.getTotalSize() : 0;
					const shouldAdjustScroll = ((_b = this.scrollState) == null ? void 0 : _b.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[index] ?? {
						index,
						key,
						start: itemStart,
						size: cachedSize,
						end: itemStart + cachedSize,
						lane: 0
					}, delta, this) : itemStart < this.getScrollOffset() + this.scrollAdjustments && (!this.itemSizeCache.has(key) || this.scrollDirection !== "backward"));
					if (this.pendingMin === null || index < this.pendingMin) this.pendingMin = index;
					this.itemSizeCache.set(key, size);
					this.itemSizeCacheVersion++;
					if (wasAtEnd) this.applyScrollAdjustment(this.getTotalSize() - prevTotalSize);
					else if (shouldAdjustScroll) this.applyScrollAdjustment(delta);
					this.notify(false);
				}
			};
			this.getVirtualItems = memo(() => [this.getVirtualIndexes(), this.getMeasurements()], (indexes, measurements) => {
				const virtualItems = [];
				for (let k = 0, len = indexes.length; k < len; k++) {
					const measurement = measurements[indexes[k]];
					virtualItems.push(measurement);
				}
				return virtualItems;
			}, {
				key: false,
				debug: () => this.options.debug
			});
			this.getVirtualItemForOffset = (offset) => {
				const measurements = this.getMeasurements();
				if (measurements.length === 0) return;
				const flat = this._flatMeasurements;
				const useFlat = this.options.lanes === 1 && flat != null;
				return notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, useFlat ? (i) => flat[i * 2] : (i) => notUndefined(measurements[i]).start, offset)]);
			};
			this.getMaxScrollOffset = () => {
				if (!this.scrollElement) return 0;
				if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
				else {
					const doc = this.scrollElement.document.documentElement;
					return this.options.horizontal ? doc.scrollWidth - this.scrollElement.innerWidth : doc.scrollHeight - this.scrollElement.innerHeight;
				}
			};
			this.getVirtualDistanceFromEnd = () => {
				return Math.max(this.getTotalSize() - this.getSize() - this.getScrollOffset(), 0);
			};
			this.getDistanceFromEnd = () => {
				return Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0);
			};
			this.isAtEnd = (threshold = this.options.scrollEndThreshold) => {
				return this.getDistanceFromEnd() <= threshold;
			};
			this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
				if (!this.scrollElement) return 0;
				const size = this.getSize();
				const scrollOffset = this.getScrollOffset();
				if (align === "auto") align = toOffset >= scrollOffset + size ? "end" : "start";
				if (align === "center") toOffset += (itemSize - size) / 2;
				else if (align === "end") toOffset -= size;
				const maxOffset = this.getMaxScrollOffset();
				return Math.max(Math.min(maxOffset, toOffset), 0);
			};
			this.getOffsetForIndex = (index, align = "auto") => {
				index = Math.max(0, Math.min(index, this.options.count - 1));
				const size = this.getSize();
				const scrollOffset = this.getScrollOffset();
				const item = this.measurementsCache[index];
				if (!item) return;
				if (align === "auto") {
					if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) align = "end";
					else if (item.start <= scrollOffset + this.options.scrollPaddingStart) align = "start";
					else return [scrollOffset, align];
				}
				if (align === "end" && index === this.options.count - 1) return [this.getMaxScrollOffset(), align];
				const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
				return [this.getOffsetForAlignment(toOffset, align, item.size), align];
			};
			this.scrollToOffset = (toOffset, { align = "start", behavior = "auto" } = {}) => {
				const offset = this.getOffsetForAlignment(toOffset, align);
				const now = this.now();
				this.scrollState = {
					index: null,
					align,
					behavior,
					startedAt: now,
					lastTargetOffset: offset,
					stableFrames: 0
				};
				this._scrollToOffset(offset, {
					adjustments: void 0,
					behavior
				});
				this.scheduleScrollReconcile();
			};
			this.scrollToIndex = (index, { align: initialAlign = "auto", behavior = "auto" } = {}) => {
				index = Math.max(0, Math.min(index, this.options.count - 1));
				const offsetInfo = this.getOffsetForIndex(index, initialAlign);
				if (!offsetInfo) return;
				const [offset, align] = offsetInfo;
				const now = this.now();
				this.scrollState = {
					index,
					align,
					behavior,
					startedAt: now,
					lastTargetOffset: offset,
					stableFrames: 0
				};
				this._scrollToOffset(offset, {
					adjustments: void 0,
					behavior
				});
				this.scheduleScrollReconcile();
			};
			this.scrollBy = (delta, { behavior = "auto" } = {}) => {
				const offset = this.getScrollOffset() + delta;
				const now = this.now();
				this.scrollState = {
					index: null,
					align: "start",
					behavior,
					startedAt: now,
					lastTargetOffset: offset,
					stableFrames: 0
				};
				this._scrollToOffset(offset, {
					adjustments: void 0,
					behavior
				});
				this.scheduleScrollReconcile();
			};
			this.scrollToEnd = ({ behavior = "auto" } = {}) => {
				if (this.options.count > 0) {
					this.scrollToIndex(this.options.count - 1, {
						align: "end",
						behavior
					});
					return;
				}
				this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), { behavior });
			};
			this.getTotalSize = () => {
				var _a;
				const measurements = this.getMeasurements();
				let end;
				if (measurements.length === 0) end = this.options.paddingStart;
				else if (this.options.lanes === 1) {
					const lastIdx = measurements.length - 1;
					const flat = this._flatMeasurements;
					if (flat != null) end = flat[lastIdx * 2] + flat[lastIdx * 2 + 1];
					else end = ((_a = measurements[lastIdx]) == null ? void 0 : _a.end) ?? 0;
				} else {
					const endByLane = Array(this.options.lanes).fill(null);
					let endIndex = measurements.length - 1;
					while (endIndex >= 0 && endByLane.some((val) => val === null)) {
						const item = measurements[endIndex];
						if (endByLane[item.lane] === null) endByLane[item.lane] = item.end;
						endIndex--;
					}
					end = Math.max(...endByLane.filter((val) => val !== null));
				}
				return Math.max(end - this.options.scrollMargin + this.options.paddingEnd, 0);
			};
			this.takeSnapshot = () => {
				const snapshot = [];
				if (this.itemSizeCache.size === 0) return snapshot;
				const m = this.getMeasurements();
				for (const item of m) if (item && this.itemSizeCache.has(item.key)) snapshot.push({
					index: item.index,
					key: item.key,
					start: item.start,
					size: item.size,
					end: item.end,
					lane: item.lane
				});
				return snapshot;
			};
			this._scrollToOffset = (offset, { adjustments, behavior }) => {
				this._intendedScrollOffset = offset + (adjustments ?? 0);
				this.options.scrollToFn(offset, {
					behavior,
					adjustments
				}, this);
			};
			this.measure = () => {
				this.pendingMin = null;
				this.itemSizeCache.clear();
				this.laneAssignments.clear();
				this.itemSizeCacheVersion++;
				this.notify(false);
			};
			this.setOptions(opts);
		}
		applyScrollAdjustment(delta, behavior) {
			if (delta === 0) return;
			if (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) this._iosDeferredAdjustment += delta;
			else {
				this._scrollToOffset(this.getScrollOffset(), {
					adjustments: this.scrollAdjustments += delta,
					behavior
				});
				if (this.scrollOffset !== null) {
					this.scrollOffset += this.scrollAdjustments;
					this.scrollAdjustments = 0;
				}
			}
		}
		scheduleScrollReconcile() {
			if (!this.targetWindow) {
				this.scrollState = null;
				return;
			}
			if (this.rafId != null) return;
			this.rafId = this.targetWindow.requestAnimationFrame(() => {
				this.rafId = null;
				this.reconcileScroll();
			});
		}
		reconcileScroll() {
			if (!this.scrollState) return;
			if (!this.scrollElement) return;
			if (this.now() - this.scrollState.startedAt > 5e3) {
				this.scrollState = null;
				return;
			}
			const offsetInfo = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0;
			const targetOffset = offsetInfo ? offsetInfo[0] : this.scrollState.lastTargetOffset;
			const STABLE_FRAMES = 1;
			const targetChanged = targetOffset !== this.scrollState.lastTargetOffset;
			if (!targetChanged && approxEqual(targetOffset, this.getScrollOffset())) {
				this.scrollState.stableFrames++;
				if (this.scrollState.stableFrames >= STABLE_FRAMES) {
					if (this.getScrollOffset() !== targetOffset) this._scrollToOffset(targetOffset, {
						adjustments: void 0,
						behavior: "auto"
					});
					this.scrollState = null;
					return;
				}
			} else {
				this.scrollState.stableFrames = 0;
				if (targetChanged) {
					const viewport = this.getSize() || 600;
					const distance = Math.abs(targetOffset - this.getScrollOffset());
					const keepSmooth = this.scrollState.behavior === "smooth" && distance > viewport;
					this.scrollState.lastTargetOffset = targetOffset;
					if (!keepSmooth) this.scrollState.behavior = "auto";
					this._scrollToOffset(targetOffset, {
						adjustments: void 0,
						behavior: keepSmooth ? "smooth" : "auto"
					});
				}
			}
			this.scheduleScrollReconcile();
		}
	};
	const findNearestBinarySearch = (low, high, getCurrentValue, value) => {
		while (low <= high) {
			const middle = (low + high) / 2 | 0;
			const currentValue = getCurrentValue(middle);
			if (currentValue < value) low = middle + 1;
			else if (currentValue > value) high = middle - 1;
			else return middle;
		}
		if (low > 0) return low - 1;
		else return 0;
	};
	function findNearestBinarySearchFlat(flat, high, value) {
		let low = 0;
		while (low <= high) {
			const middle = (low + high) / 2 | 0;
			const currentValue = flat[middle * 2];
			if (currentValue < value) low = middle + 1;
			else if (currentValue > value) high = middle - 1;
			else return middle;
		}
		return low > 0 ? low - 1 : 0;
	}
	function calculateRangeImpl(measurements, outerSize, scrollOffset, lanes, flat) {
		const lastIndex = measurements.length - 1;
		if (measurements.length <= lanes) return {
			startIndex: 0,
			endIndex: lastIndex
		};
		if (lanes === 1 && flat !== null) {
			const startIndex2 = findNearestBinarySearchFlat(flat, lastIndex, scrollOffset);
			let endIndex2 = startIndex2;
			const limit = scrollOffset + outerSize;
			while (endIndex2 < lastIndex && flat[endIndex2 * 2] + flat[endIndex2 * 2 + 1] < limit) endIndex2++;
			return {
				startIndex: startIndex2,
				endIndex: endIndex2
			};
		}
		const getStart = (index) => measurements[index].start;
		let startIndex = findNearestBinarySearch(0, lastIndex, getStart, scrollOffset);
		let endIndex = startIndex;
		if (lanes === 1) while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) endIndex++;
		else if (lanes > 1) {
			const endPerLane = Array(lanes).fill(0);
			while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
				const item = measurements[endIndex];
				endPerLane[item.lane] = item.end;
				endIndex++;
			}
			const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
			while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
				const item = measurements[startIndex];
				startPerLane[item.lane] = item.start;
				startIndex--;
			}
			startIndex = Math.max(0, startIndex - startIndex % lanes);
			endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
		}
		return {
			startIndex,
			endIndex
		};
	}
	//#endregion
	//#region src/engine/virtualizer.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid engine/virtualizer.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const createGridVirtualizer = (options) => {
		const instance = new Virtualizer({
			count: options.count,
			estimateSize: () => options.rowHeight,
			getScrollElement: options.getScrollElement,
			observeElementOffset,
			observeElementRect,
			onChange: options.onChange,
			overscan: options.overscan,
			scrollToFn: elementScroll,
			...options.autoRowHeight && { measureElement }
		});
		const unmount = instance._didMount();
		instance._willUpdate();
		return {
			instance,
			setCount(count) {
				if (count !== instance.options.count) instance.setOptions({
					...instance.options,
					count
				});
			},
			remeasure() {
				if (options.autoRowHeight) instance.measure();
			},
			destroy() {
				unmount();
			}
		};
	};
	//#endregion
	//#region src/icons.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid icons.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const DEFAULT_COLUMN_MENU_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M204 148a52 52 0 1 0 104 0 52 52 0 1 0-104 0m78 0a26 26 0 1 1-26-26 26.03 26.03 0 0 1 26 26M204 264a52 52 0 1 0 104 0 52 52 0 1 0-104 0m78 0a26 26 0 1 1-26-26 26.03 26.03 0 0 1 26 26M204 380a52 52 0 1 0 104 0 52 52 0 1 0-104 0m78 0a26 26 0 1 1-26-26 26.03 26.03 0 0 1 26 26\"/></svg>";
	const DEFAULT_FILTER_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M96 197.333h320v32H96zm72 101.334h176v32H168zM216 400h80v32h-80zM48 96h416v32H48z\"/></svg>";
	const DEFAULT_ROW_HANDLE_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M160 96h64v64h-64zm0 128h64v64h-64zm0 128h64v64h-64zM288 96h64v64h-64zm0 128h64v64h-64zm0 128h64v64h-64z\"/></svg>";
	const DEFAULT_TOOLBAR_COLUMNS_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M16 64v384h480V64Zm304 32v320H192V96ZM48 96h112v320H48Zm416 320H352V96h112Z\"/></svg>";
	const DEFAULT_TOOLBAR_EXPORT_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M16 464h480v32H16zm379.313-164.687-22.626-22.626L280 369.373V16h-32v353.373l-92.687-92.686-22.626 22.626L264 430.627z\"/></svg>";
	const DEFAULT_TOOLBAR_UNDO_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M495.473 197.262c0-73.061-43.651-136.118-106.242-164.462q-2-.9-4.021-1.762-4.046-1.715-8.19-3.235-2.071-.761-4.167-1.47-4.19-1.422-8.468-2.64a180.95 180.95 0 0 0-98.675 0q-4.278 1.218-8.469 2.64-2.094.71-4.166 1.47-4.143 1.519-8.19 3.235-2.023.857-4.021 1.762c-62.592 28.344-106.242 91.4-106.242 164.462v237.483L38.627 338.75 16 361.377 150.623 496l134.623-134.623-22.627-22.627-96 96V197.263c0-72.891 52.814-133.678 122.186-146.1a149.4 149.4 0 0 1 52.479 0c69.371 12.426 122.186 73.213 122.186 146.1h32Z\"/></svg>";
	const DEFAULT_TOOLBAR_PRINT_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M400 144V16H112v128H16v256h96v96h288v-96h96V144ZM144 48h224v96H144Zm224 416H144V304h224Zm96-96h-64V272H112v96H48V176h416Z\"/><path fill=\"currentColor\" d=\"M384 208h32v32h-32z\"/></svg>";
	const DEFAULT_TOOLBAR_REDO_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M361.376 495.163 226.753 360.54l22.627-22.627 111.996 111.996 111.997-111.996L496 360.54z\"/><path fill=\"currentColor\" d=\"M377.377 472.52h-32V196.426C345.377 114.584 278.794 48 196.952 48c-83.229 0-148.426 63.106-148.426 143.667h-32c0-48.024 18.85-92.569 53.079-125.429C103.35 33.842 148.576 16 196.952 16c99.487 0 180.425 80.938 180.425 180.426Z\"/></svg>";
	const DEFAULT_SORT_ASCENDING_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M390.624 150.625 256 16 121.376 150.625l22.628 22.627 95.997-95.998v417.982h32V77.257l95.995 95.995z\"/></svg>";
	const DEFAULT_SORT_DESCENDING_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"m367.997 338.75-95.998 95.997V17.503h-32v417.242l-95.996-95.995-22.627 22.627L256 496l134.624-134.623z\"/></svg>";
	const DEFAULT_SORT_NEUTRAL_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M384 433.373V160h-32v274.51l-69.823-69.823-22.627 22.626 107.882 107.883 107.881-107.883-22.626-22.626zM159.432 17.372 51.55 125.255l22.627 22.627L144 78.059V352h32V79.195l68.687 68.687 22.626-22.627z\"/></svg>";
	const PIN_PATH = "m477.8 140.2-106-106a62.132 62.132 0 0 0-93.617 81.24l-4.913 5.533-97.654 42.9-42.611-23.026a24.04 24.04 0 0 0-28.86 4.638L62.6 189.487a23.88 23.88 0 0 0 .479 33.449l101.68 101.679L16 473.373V496h22.627l148.758-148.758L288.6 448.457a23.93 23.93 0 0 0 33.275.642l44.425-41.128a23.98 23.98 0 0 0 4.773-29.092l-23.344-42.858 42.131-90.515 8.6-10.318A62.134 62.134 0 0 0 477.8 140.2m-22.628 65.231a30.125 30.125 0 0 1-42.6 0l-16.885-16.886-33.08 39.678-50.7 108.933 28.087 51.566-34.209 31.669L91.2 205.806l32-33.89 50.969 27.543 118.386-52.008 29.177-32.863-15.158-15.161a30.126 30.126 0 0 1 42.6-42.6l106 106a30.126 30.126 0 0 1 0 42.6Z";
	const SVG_512 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\">";
	const DEFAULT_PIN_START_ICON = `${SVG_512}<path fill="currentColor" d="${PIN_PATH}"/></svg>`;
	const DEFAULT_PIN_END_ICON = `${SVG_512}<g transform="translate(512 0) scale(-1 1)"><path fill="currentColor" d="${PIN_PATH}"/></g></svg>`;
	const DEFAULT_UNPIN_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"m427.314 107.313-22.628-22.626L256 233.373 107.314 84.687l-22.628 22.626L233.373 256 84.686 404.687l22.628 22.626L256 278.627l148.686 148.686 22.628-22.626L278.627 256z\"/></svg>";
	const DEFAULT_MOVE_START_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M254.625 56h-38.632L16 256.2 216 456h38.623V336h144V176h-144Zm112 152v96h-144v113.384l-161.37-161.21 161.37-161.535V208Zm96-152h32v400h-32z\"/></svg>";
	const DEFAULT_MOVE_END_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"M296.007 56h-38.632v120h-144v160h144v120H296l200-199.8Zm-6.632 361.384V304h-144v-96h144V94.639l161.37 161.535ZM17.375 56h32v400h-32z\"/></svg>";
	const DEFAULT_HIDE_COLUMN_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" focusable=\"false\"><path fill=\"currentColor\" d=\"m397.222 131.1-.218-.223c-63.173-63.17-158.534-75.015-233.776-35.531l23.938 23.939c61.571-27.691 136.573-16.327 187.105 34.115L464 246.683v3.107l-71.744 74.585 22.63 22.63L496 262.683V233.79Z\"/><path fill=\"currentColor\" d=\"M352.8 284.33a103.307 103.307 0 0 0-132.893-132.892L246.1 177.63a71.228 71.228 0 0 1 80.507 80.508Zm17.1 62.938-33.831-33.831c.088-.108.179-.212.266-.32l-22.805-22.806q-.126.168-.253.334l-99.681-99.681.334-.253-22.81-22.805c-.108.087-.213.179-.321.266L38.627 16H16v22.627l95.689 95.689L16 233.79v28.893l98.778 102.689.218.222A199.73 199.73 0 0 0 367.372 390l106 106H496v-22.627L392.537 369.911Zm-177.157-131.9 96.128 96.132a71.28 71.28 0 0 1-96.133-96.133Zm-55.014 127.705L48 249.79v-3.107l86.319-89.737 35.065 35.064a103.248 103.248 0 0 0 142.842 142.843l32.007 32.007c-64.51 40.015-150.522 32.095-206.504-23.787\"/></svg>";
	//#endregion
	//#region src/labels.ts
	const DEFAULT_LABELS = {
		addCondition: "Add condition",
		applyFilter: "Apply",
		clearFilter: "Clear filter",
		clearSort: "Unsort",
		columnMenu: "Column options for {column}",
		filterAction: "Filter…",
		filterColumn: "Filter {column}",
		firstPage: "First page",
		globalFilterLabel: "Search",
		globalFilterPlaceholder: "Search",
		hideColumn: "Hide column",
		itemsInfo: "{first}–{last} of {total}",
		joinAnd: "AND",
		joinOr: "OR",
		lastPage: "Last page",
		loadError: "Failed to load data",
		loading: "Loading…",
		moveEnd: "Move to end",
		moveStart: "Move to start",
		nextPage: "Next page",
		operatorBetween: "Between",
		operatorBlank: "Blank",
		operatorContains: "Contains",
		operatorEndsWith: "Ends with",
		operatorEquals: "Equals",
		operatorGreaterThan: "Greater than",
		operatorGreaterThanOrEqual: "Greater than or equal",
		operatorLessThan: "Less than",
		operatorLessThanOrEqual: "Less than or equal",
		operatorNotBlank: "Not blank",
		operatorNotContains: "Does not contain",
		operatorNotEquals: "Not equals",
		operatorStartsWith: "Starts with",
		pageSizeLabel: "Rows per page",
		paginationLabel: "Pagination",
		pinEnd: "Pin to end",
		pinStart: "Pin to start",
		previousPage: "Previous page",
		redoneAnnouncement: "Change redone",
		reorderRow: "Reorder row",
		resetColumns: "Reset",
		resultsAnnouncement: "{count} results",
		searchValues: "Search values",
		selectAllRows: "Select all rows",
		selectAllValues: "Select all",
		selectRow: "Select row",
		showAllColumns: "Show all",
		sortAscending: "Sort ascending",
		sortDescending: "Sort descending",
		toolbarColumns: "Columns",
		toolbarExport: "Export",
		toolbarPrint: "Print",
		toolbarRedo: "Redo",
		toolbarUndo: "Undo",
		undoneAnnouncement: "Change undone",
		unpin: "Unpin"
	};
	const interpolate = (template, tokens) => template.replace(/\{(\w+)\}/g, (match, token) => token in tokens ? String(tokens[token]) : match);
	//#endregion
	//#region src/ui/pinning.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid ui/pinning.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const CLASS_START = "data-grid-cell-pinned-start";
	const CLASS_END = "data-grid-cell-pinned-end";
	const CLASS_START_LAST = "data-grid-cell-pinned-start-last";
	const CLASS_END_FIRST = "data-grid-cell-pinned-end-first";
	const applyPinnedCell = (cell, info) => {
		cell.classList.remove(CLASS_START, CLASS_END, CLASS_START_LAST, CLASS_END_FIRST);
		cell.style.insetInlineStart = "";
		cell.style.insetInlineEnd = "";
		if (!info) return;
		if (info.side === "start") {
			cell.classList.add(CLASS_START);
			if (info.edge) cell.classList.add(CLASS_START_LAST);
			cell.style.insetInlineStart = info.afterSelect ? `calc(var(--cui-data-grid-select-cell-width) + ${info.offset}px)` : `${info.offset}px`;
		} else {
			cell.classList.add(CLASS_END);
			if (info.edge) cell.classList.add(CLASS_END_FIRST);
			cell.style.insetInlineEnd = `${info.offset}px`;
		}
	};
	//#endregion
	//#region src/ui/body.ts
	const CLASS_NAME_EMPTY = "data-grid-empty";
	const FOCUSABLE_SELECTOR$1 = "a[href], button, input, select, textarea, [tabindex]";
	const CLASS_NAME_ROW_ODD = "data-grid-row-odd";
	const CLASS_NAME_ROW_SELECTED = "table-active";
	const CLASS_NAME_CELL_SELECTED = "data-grid-cell-selected";
	const CLASS_NAME_HANDLE_CELL$1 = "data-grid-row-handle-cell";
	const EDGE_CLASS_NAMES = [
		"top",
		"right",
		"bottom",
		"left"
	];
	const CLASS_NAME_SELECT_CELL$1 = "data-grid-select-cell";
	const CLASS_NAME_SPACER = "data-grid-spacer";
	const setCellContent = (cellElement, content, sanitizeContent) => {
		if (typeof content === "string") {
			cellElement.innerHTML = sanitizeContent(content);
			return;
		}
		if (cellElement.childNodes.length === 1 && cellElement.firstChild === content) return;
		cellElement.replaceChildren(content);
	};
	const createBody = (context) => {
		const element = document.createElement("tbody");
		let currentColumns = context.getVisibleColumns();
		let layoutSignature = currentColumns.map((column) => column.key).join("|");
		const leadingCount = (context.rowOrder ? 1 : 0) + (context.selection ? 1 : 0);
		let cellCount = currentColumns.length + leadingCount;
		const buildRowCells = (rowElement) => {
			rowElement.replaceChildren();
			if (context.cellNavigation) rowElement.setAttribute("role", "row");
			const offset = leadingCount;
			if (context.rowOrder) {
				const cellElement = document.createElement("td");
				cellElement.classList.add(CLASS_NAME_HANDLE_CELL$1);
				const handle = document.createElement("span");
				handle.classList.add("data-grid-row-handle");
				handle.dataset.coreuiRowHandle = "";
				handle.setAttribute("aria-hidden", "true");
				handle.innerHTML = context.rowHandleIcon;
				cellElement.append(handle);
				if (context.cellNavigation) {
					cellElement.setAttribute("role", "gridcell");
					cellElement.setAttribute("aria-colindex", "1");
				}
				rowElement.append(cellElement);
			}
			if (context.selection) {
				const cellElement = document.createElement("td");
				cellElement.classList.add(CLASS_NAME_SELECT_CELL$1);
				const input = document.createElement("input");
				input.type = "checkbox";
				input.classList.add("form-check-input");
				input.setAttribute("aria-label", context.labels.selectRow);
				input.dataset.coreuiRowSelect = "";
				if (context.cellNavigation) {
					cellElement.setAttribute("role", "gridcell");
					cellElement.setAttribute("aria-colindex", String(context.rowOrder ? 2 : 1));
					input.tabIndex = -1;
				}
				cellElement.append(input);
				rowElement.append(cellElement);
			}
			for (const [index, column] of currentColumns.entries()) {
				const cellElement = document.createElement("td");
				if (context.cellNavigation) {
					cellElement.setAttribute("role", "gridcell");
					cellElement.setAttribute("aria-colindex", String(offset + index + 1));
					cellElement.dataset.coreuiColumn = column.key;
					cellElement.tabIndex = -1;
				}
				rowElement.append(cellElement);
			}
			rowElement.dataset.coreuiLayout = layoutSignature;
		};
		const createRowElement = () => {
			const rowElement = document.createElement("tr");
			buildRowCells(rowElement);
			return rowElement;
		};
		const updateRowCells = (rowElement, row, index) => {
			const offset = leadingCount;
			const editingCell = context.getEditingCell();
			for (const [cellIndex, column] of currentColumns.entries()) {
				const cellElement = rowElement.children[cellIndex + offset];
				if (editingCell && editingCell.rowId === row.id && editingCell.columnId === column.key) {
					const editorElement = context.getEditorElement();
					if (editorElement) {
						cellElement.replaceChildren(editorElement);
						continue;
					}
				}
				if (column.render) {
					setCellContent(cellElement, column.render(row.original, index), context.sanitizeContent);
					if (context.cellNavigation) for (const focusable of cellElement.querySelectorAll(FOCUSABLE_SELECTOR$1)) focusable.tabIndex = -1;
					continue;
				}
				const value = row.getValue(column.key);
				cellElement.textContent = column.formatter ? column.formatter(value, row.original) : String(value ?? "");
			}
		};
		const updateRowElement = (rowElement, row, index) => {
			if (rowElement.dataset.coreuiLayout !== layoutSignature) {
				buildRowCells(rowElement);
				delete rowElement.dataset.coreuiRow;
			}
			if (context.selection) {
				const input = rowElement.children[leadingCount - 1].firstElementChild;
				const selected = row.getIsSelected();
				input.checked = selected;
				rowElement.classList.toggle(CLASS_NAME_ROW_SELECTED, selected);
				rowElement.setAttribute("aria-selected", String(selected));
			}
			const rowKey = `${context.getDataVersion()}:${row.id}`;
			if (rowElement.dataset.coreuiRow !== rowKey || rowElement.dataset.coreuiIndex !== String(index)) {
				updateRowCells(rowElement, row, index);
				rowElement.dataset.coreuiRow = rowKey;
			}
			if (context.cellSelection) {
				const cells = new Map(row.getAllCells().map((cell) => [cell.column.id, cell]));
				for (const [cellIndex, column] of currentColumns.entries()) {
					const cellElement = rowElement.children[cellIndex + leadingCount];
					const cell = cells.get(column.key);
					const selected = cell?.getIsSelected() ?? false;
					cellElement.classList.toggle(CLASS_NAME_CELL_SELECTED, selected);
					const edges = selected && cell ? cell.getSelectionEdges() : null;
					for (const edge of EDGE_CLASS_NAMES) cellElement.classList.toggle(`${CLASS_NAME_CELL_SELECTED}-${edge}`, Boolean(edges?.[edge]));
				}
			}
			rowElement.dataset.coreuiIndex = String(index);
			rowElement.setAttribute("aria-rowindex", String(context.headerRowCount + context.getRowIndexOffset() + index + 1));
			rowElement.classList.toggle(CLASS_NAME_ROW_ODD, index % 2 === 1);
			if (currentPinning) {
				const pinning = currentPinning;
				const offset = leadingCount;
				for (let cellIndex = 0; cellIndex < leadingCount; cellIndex++) applyPinnedCell(rowElement.children[cellIndex], pinning.select);
				for (const [cellIndex, column] of currentColumns.entries()) applyPinnedCell(rowElement.children[cellIndex + offset], pinning.columns[column.key] ?? null);
			}
		};
		const createSpacer = () => {
			const rowElement = document.createElement("tr");
			rowElement.classList.add(CLASS_NAME_SPACER);
			rowElement.setAttribute("aria-hidden", "true");
			const cellElement = document.createElement("td");
			cellElement.colSpan = Math.max(cellCount, 1);
			rowElement.append(cellElement);
			return rowElement;
		};
		const setSpacerHeight = (spacerElement, height) => {
			spacerElement.style.height = `${height}px`;
			spacerElement.firstElementChild.style.height = `${height}px`;
			spacerElement.style.display = height > 0 ? "" : "none";
		};
		const topSpacer = createSpacer();
		const bottomSpacer = createSpacer();
		let spacersAttached = false;
		let emptyElement = null;
		let rowElements = [];
		let currentPinning = null;
		const rowPool = [];
		const renderEmpty = () => {
			spacersAttached = false;
			rowPool.push(...rowElements);
			rowElements = [];
			if (!emptyElement) {
				emptyElement = document.createElement("tr");
				emptyElement.classList.add(CLASS_NAME_EMPTY);
				emptyElement.append(document.createElement("td"));
			}
			const cellElement = emptyElement.firstElementChild;
			cellElement.colSpan = Math.max(cellCount, 1);
			setCellContent(cellElement, context.renderEmpty(), context.sanitizeContent);
			element.replaceChildren(emptyElement);
		};
		const renderAll = (rows) => {
			if (emptyElement) emptyElement.remove();
			while (rowElements.length > rows.length) {
				const rowElement = rowElements.pop();
				rowElement.remove();
				rowPool.push(rowElement);
			}
			while (rowElements.length < rows.length) {
				const rowElement = rowPool.pop() ?? createRowElement();
				element.append(rowElement);
				rowElements.push(rowElement);
			}
			for (const [index, row] of rows.entries()) updateRowElement(rowElements[index], row, index);
		};
		const renderWindow = (rows, virtualizer) => {
			if (!spacersAttached) {
				element.replaceChildren(topSpacer, bottomSpacer);
				spacersAttached = true;
				rowElements = [];
			}
			const virtualItems = virtualizer.getVirtualItems();
			const totalSize = virtualizer.getTotalSize();
			const paddingTop = virtualItems.length > 0 ? virtualItems[0].start : 0;
			const paddingBottom = virtualItems.length > 0 ? totalSize - virtualItems[virtualItems.length - 1].end : totalSize;
			setSpacerHeight(topSpacer, paddingTop);
			setSpacerHeight(bottomSpacer, paddingBottom);
			while (rowElements.length > virtualItems.length) {
				const rowElement = rowElements.pop();
				rowElement.remove();
				rowPool.push(rowElement);
			}
			while (rowElements.length < virtualItems.length) {
				const rowElement = rowPool.pop() ?? createRowElement();
				bottomSpacer.before(rowElement);
				rowElements.push(rowElement);
			}
			for (const [index, virtualItem] of virtualItems.entries()) {
				const rowElement = rowElements[index];
				updateRowElement(rowElement, rows[virtualItem.index], virtualItem.index);
				if (context.autoRowHeight) {
					rowElement.dataset.index = String(virtualItem.index);
					virtualizer.measureElement(rowElement);
				}
			}
		};
		let editingSignature = null;
		return {
			element,
			update() {
				const rows = context.getRows();
				currentPinning = context.getPinning();
				const editingCell = context.getEditingCell();
				const nextEditingSignature = editingCell ? `${editingCell.rowId}:${editingCell.columnId}` : null;
				if (nextEditingSignature !== editingSignature) {
					editingSignature = nextEditingSignature;
					for (const rowElement of rowElements) delete rowElement.dataset.coreuiRow;
				}
				const columns = context.getVisibleColumns();
				const signature = columns.map((column) => column.key).join("|");
				if (signature !== layoutSignature) {
					currentColumns = columns;
					layoutSignature = signature;
					cellCount = currentColumns.length + leadingCount;
					topSpacer.firstElementChild.colSpan = Math.max(cellCount, 1);
					bottomSpacer.firstElementChild.colSpan = Math.max(cellCount, 1);
				}
				if (rows.length === 0) {
					renderEmpty();
					return;
				}
				const virtualizer = context.getVirtualizer();
				if (virtualizer) {
					renderWindow(rows, virtualizer);
					return;
				}
				renderAll(rows);
			}
		};
	};
	//#endregion
	//#region src/ui/editor.ts
	const CLASS_NAME_EDITOR = "data-grid-cell-editor";
	const createTextEditor = (context) => {
		const input = document.createElement("input");
		input.type = "text";
		input.classList.add("form-control", "form-control-sm", CLASS_NAME_EDITOR);
		input.value = String(context.value ?? "");
		return {
			element: input,
			focus() {
				input.focus();
				input.select();
			},
			getValue: () => input.value
		};
	};
	const createNumberEditor = (context, options) => {
		const input = document.createElement("input");
		input.type = "number";
		input.classList.add("form-control", "form-control-sm", CLASS_NAME_EDITOR);
		if (options.min !== void 0) input.min = String(options.min);
		if (options.max !== void 0) input.max = String(options.max);
		if (options.step !== void 0) input.step = String(options.step);
		input.value = context.value === void 0 || context.value === null ? "" : String(context.value);
		return {
			element: input,
			focus() {
				input.focus();
				input.select();
			},
			getValue: () => input.value === "" ? void 0 : Number(input.value)
		};
	};
	const createSelectEditor = (context, options) => {
		const select = document.createElement("select");
		select.classList.add("form-select", "form-select-sm", CLASS_NAME_EDITOR);
		const values = [];
		for (const option of options.options ?? []) {
			const optionElement = document.createElement("option");
			const value = typeof option === "object" && option !== null ? option.value : option;
			optionElement.textContent = typeof option === "object" && option !== null ? option.label : String(option);
			optionElement.value = String(values.length);
			if (value === context.value) optionElement.selected = true;
			values.push(value);
			select.append(optionElement);
		}
		return {
			element: select,
			focus: () => select.focus(),
			getValue: () => values[Number(select.value)]
		};
	};
	const createBuiltInEditor = (options, context) => {
		if (options.type === "number") return createNumberEditor(context, options);
		if (options.type === "select") return createSelectEditor(context, options);
		return createTextEditor(context);
	};
	//#endregion
	//#region src/ui/header.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid ui/header.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const CLASS_NAME_HEADER = "data-grid-header";
	const CLASS_NAME_HEADER_CELL = "data-grid-header-cell";
	const CLASS_NAME_HEADER_LABEL = "data-grid-header-label";
	const CLASS_NAME_FILTER_ROW = "data-grid-filter-row";
	const CLASS_NAME_RESIZER = "data-grid-resizer";
	const CLASS_NAME_RESIZER_ACTIVE = "data-grid-resizer-active";
	const CLASS_NAME_HANDLE_CELL = "data-grid-row-handle-cell";
	const CLASS_NAME_SELECT_CELL = "data-grid-select-cell";
	const CLASS_NAME_SORTABLE = "data-grid-sortable";
	const CLASS_NAME_SORT_BUTTON = "data-grid-sort-button";
	const CLASS_NAME_SORT_ICON = "data-grid-sort-icon";
	const sortDirection = (columnSort) => {
		if (!columnSort) return "neutral";
		return columnSort.desc ? "descending" : "ascending";
	};
	const iconForDirection = (direction, icons) => {
		if (direction === "ascending") return icons.sortAscending;
		if (direction === "descending") return icons.sortDescending;
		return icons.sortNeutral;
	};
	const createSelectAllCell = (context) => {
		const cell = document.createElement("th");
		cell.classList.add(CLASS_NAME_SELECT_CELL);
		cell.setAttribute("scope", "col");
		if (!context.selectAll) return {
			cell,
			input: null
		};
		const input = document.createElement("input");
		input.type = "checkbox";
		input.classList.add("form-check-input");
		input.setAttribute("aria-label", context.labels.selectAllRows);
		input.dataset.coreuiSelectAll = "";
		cell.append(input);
		return {
			cell,
			input
		};
	};
	const createHandleHeaderCell = () => {
		const cell = document.createElement("th");
		cell.classList.add(CLASS_NAME_HANDLE_CELL);
		cell.setAttribute("scope", "col");
		return cell;
	};
	const createResizer = () => {
		const resizer = document.createElement("span");
		resizer.classList.add(CLASS_NAME_RESIZER);
		resizer.setAttribute("aria-hidden", "true");
		resizer.dataset.coreuiResizer = "";
		return resizer;
	};
	const createLabelRow = (context, cells, resizers, sortIcons) => {
		const row = document.createElement("tr");
		let selectAllInput = null;
		const leadingCells = [];
		if (context.cellNavigation) row.setAttribute("role", "row");
		if (context.rowOrder) {
			const cell = createHandleHeaderCell();
			if (context.cellNavigation) cell.setAttribute("role", "columnheader");
			leadingCells.push(cell);
			row.append(cell);
		}
		if (context.selection) {
			const { cell, input } = createSelectAllCell(context);
			selectAllInput = input;
			leadingCells.push(cell);
			if (context.cellNavigation) {
				cell.setAttribute("role", "columnheader");
				if (input) input.tabIndex = -1;
			}
			row.append(cell);
		}
		for (const column of context.columns) {
			const cell = document.createElement("th");
			cell.setAttribute("scope", "col");
			cell.dataset.coreuiColumn = column.key;
			if (context.cellNavigation) {
				cell.setAttribute("role", "columnheader");
				cell.tabIndex = -1;
			}
			if (column.style) Object.assign(cell.style, column.style);
			if (column.width !== void 0) cell.style.width = `${column.width}px`;
			const content = document.createElement("div");
			content.classList.add(CLASS_NAME_HEADER_CELL);
			if (context.isSortable(column)) {
				cell.classList.add(CLASS_NAME_SORTABLE);
				const button = document.createElement("button");
				button.type = "button";
				button.classList.add(CLASS_NAME_SORT_BUTTON);
				button.append(column.label ?? column.key);
				const icon = document.createElement("span");
				icon.classList.add(CLASS_NAME_SORT_ICON);
				icon.setAttribute("aria-hidden", "true");
				icon.innerHTML = context.icons.sortNeutral;
				icon.dataset.coreuiSort = "neutral";
				button.append(icon);
				sortIcons.set(column.key, icon);
				content.append(button);
			} else {
				const label = document.createElement("span");
				label.classList.add(CLASS_NAME_HEADER_LABEL);
				label.textContent = column.label ?? column.key;
				content.append(label);
			}
			if (context.hasFilterMenu(column)) {
				const button = document.createElement("button");
				button.type = "button";
				button.classList.add("btn", "btn-ghost", "btn-sm", "data-grid-filter-button");
				button.innerHTML = context.icons.filter;
				button.dataset.coreuiFilter = column.key;
				button.setAttribute("aria-haspopup", "dialog");
				button.setAttribute("aria-expanded", "false");
				const filterLabel = interpolate(context.labels.filterColumn, { column: column.label ?? column.key });
				button.setAttribute("aria-label", filterLabel);
				button.setAttribute("data-coreui-tooltip", filterLabel);
				content.append(button);
			}
			if (context.hasMenu(column)) {
				const button = document.createElement("button");
				button.type = "button";
				button.classList.add("btn", "btn-ghost", "btn-sm", "data-grid-menu-button");
				button.innerHTML = context.icons.columnMenu;
				button.dataset.coreuiMenu = column.key;
				button.setAttribute("aria-haspopup", "menu");
				button.setAttribute("aria-expanded", "false");
				const menuLabel = interpolate(context.labels.columnMenu, { column: column.label ?? column.key });
				button.setAttribute("aria-label", menuLabel);
				button.setAttribute("data-coreui-tooltip", menuLabel);
				content.append(button);
			}
			cell.append(content);
			if (context.cellNavigation) for (const button of content.querySelectorAll("button")) button.tabIndex = -1;
			if (context.resizable && context.isResizable(column)) {
				const resizer = createResizer();
				resizers.set(column.key, resizer);
				cell.append(resizer);
			}
			cells.set(column.key, cell);
			row.append(cell);
		}
		return {
			row,
			selectAllInput,
			leadingCells
		};
	};
	const createFilterRow = (context, filterCells, filterSlots) => {
		const row = document.createElement("tr");
		row.classList.add(CLASS_NAME_FILTER_ROW);
		if (context.cellNavigation) row.setAttribute("role", "row");
		const leadingCells = [];
		for (const leading of [context.rowOrder, context.selection]) if (leading) {
			const cell = document.createElement("th");
			leadingCells.push(cell);
			row.append(cell);
		}
		for (const column of context.columns) {
			const cell = document.createElement("th");
			const tableColumn = context.table.getColumn(column.key);
			if (context.isFilterable(column) && column.filter && tableColumn) {
				const slot = column.filter({
					column: tableColumn,
					table: context.table,
					labels: context.labels
				});
				filterSlots.push(slot);
				cell.append(slot.element);
			}
			filterCells.set(column.key, cell);
			row.append(cell);
		}
		return {
			row,
			leadingCells
		};
	};
	const createHeader = (context) => {
		const element = document.createElement("thead");
		element.classList.add(CLASS_NAME_HEADER);
		const cells = /* @__PURE__ */ new Map();
		const resizers = /* @__PURE__ */ new Map();
		const sortIcons = /* @__PURE__ */ new Map();
		const filterCells = /* @__PURE__ */ new Map();
		const filterSlots = [];
		const movableColumns = new Map(context.columns.map((column) => [column.key, column.movable !== false]));
		const { row, selectAllInput, leadingCells } = createLabelRow(context, cells, resizers, sortIcons);
		element.append(row);
		let filterRowElement = null;
		let filterLeadingCells = [];
		if (context.filterRow) {
			const filterRow = createFilterRow(context, filterCells, filterSlots);
			filterLeadingCells = filterRow.leadingCells;
			filterRowElement = filterRow.row;
			element.append(filterRow.row);
		}
		let orderSignature = null;
		const applyOrder = (order) => {
			const visible = new Set(order);
			const reorderRow = (rowElement, cellMap, leading) => {
				const ordered = [...leading];
				for (const id of order) {
					const cell = cellMap.get(id);
					if (cell) ordered.push(cell);
				}
				rowElement.append(...ordered);
				if (context.cellNavigation) for (const [index, cell] of ordered.entries()) cell.setAttribute("aria-colindex", String(index + 1));
				for (const [key, cell] of cellMap) if (!visible.has(key)) cell.remove();
			};
			reorderRow(row, cells, leadingCells);
			if (filterRowElement) reorderRow(filterRowElement, filterCells, filterLeadingCells);
		};
		return {
			element,
			rowCount: context.filterRow ? 2 : 1,
			update(state) {
				const signature = state.order.join("|");
				if (signature !== orderSignature) {
					orderSignature = signature;
					applyOrder(state.order);
				}
				for (const [key, cell] of cells) {
					const columnSort = state.sorting.find((sort) => sort.id === key);
					const direction = sortDirection(columnSort);
					if (direction === "neutral") cell.removeAttribute("aria-sort");
					else cell.setAttribute("aria-sort", direction);
					const sortIcon = sortIcons.get(key);
					if (sortIcon && sortIcon.dataset.coreuiSort !== direction) {
						sortIcon.dataset.coreuiSort = direction;
						sortIcon.innerHTML = iconForDirection(direction, context.icons);
					}
					if (state.sizes && state.sizes[key] !== void 0) cell.style.width = `${state.sizes[key]}px`;
					if (state.pinning) applyPinnedCell(cell, state.pinning.columns[key] ?? null);
				}
				if (context.draggable) {
					const regionOf = (key) => state.pinning?.columns[key]?.side ?? "center";
					const movablePerRegion = /* @__PURE__ */ new Map();
					for (const key of state.order) if (movableColumns.get(key)) {
						const region = regionOf(key);
						movablePerRegion.set(region, (movablePerRegion.get(region) ?? 0) + 1);
					}
					for (const [key, cell] of cells) if (Boolean(movableColumns.get(key)) && (movablePerRegion.get(regionOf(key)) ?? 0) > 1) {
						cell.dataset.coreuiDraggable = "";
						cell.style.touchAction = "none";
					} else {
						delete cell.dataset.coreuiDraggable;
						cell.style.touchAction = "";
					}
				}
				for (const [key, resizer] of resizers) resizer.classList.toggle(CLASS_NAME_RESIZER_ACTIVE, state.resizingColumn === key);
				if (state.filteredColumns) for (const [key, cell] of cells) cell.querySelector("[data-coreui-filter]")?.classList.toggle("data-grid-filter-button-filtered", state.filteredColumns.includes(key));
				if (state.pinning) {
					for (const [key, cell] of filterCells) applyPinnedCell(cell, state.pinning.columns[key] ?? null);
					for (const cell of [...leadingCells, ...filterLeadingCells]) applyPinnedCell(cell, state.pinning.select);
				}
				if (selectAllInput && state.selectAll) {
					selectAllInput.checked = state.selectAll.checked;
					selectAllInput.indeterminate = state.selectAll.indeterminate;
				}
				for (const slot of filterSlots) slot.update?.();
			},
			dispose() {
				for (const slot of filterSlots) slot.dispose?.();
			}
		};
	};
	//#endregion
	//#region src/ui/loading.ts
	const CLASS_NAME_LOADING = "data-grid-loading";
	const createLoading = (labels, className = CLASS_NAME_LOADING) => {
		const element = document.createElement("div");
		element.classList.add(className);
		element.hidden = true;
		const spinner = document.createElement("div");
		spinner.classList.add("spinner-border");
		spinner.setAttribute("role", "status");
		const label = document.createElement("span");
		label.classList.add("visually-hidden");
		label.textContent = labels.loading;
		spinner.append(label);
		element.append(spinner);
		return {
			element,
			setVisible(visible) {
				element.hidden = !visible;
			}
		};
	};
	//#endregion
	//#region src/ui/filter-menu.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid ui/filter-menu.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const CLASS_NAME_FILTER_MENU = "data-grid-filter-menu";
	const CLASS_NAME_CONDITION = "data-grid-filter-menu-condition";
	const CLASS_NAME_JOIN = "data-grid-filter-menu-join";
	const CLASS_NAME_FOOTER$1 = "data-grid-filter-menu-footer";
	const CLASS_NAME_VALUES = "data-grid-filter-menu-values";
	const SEARCH_THRESHOLD = 10;
	const MAX_CONDITIONS = 2;
	const OPERATOR_LABEL_KEYS = {
		contains: "operatorContains",
		notContains: "operatorNotContains",
		equals: "operatorEquals",
		notEquals: "operatorNotEquals",
		startsWith: "operatorStartsWith",
		endsWith: "operatorEndsWith",
		blank: "operatorBlank",
		notBlank: "operatorNotBlank",
		greaterThan: "operatorGreaterThan",
		greaterThanOrEqual: "operatorGreaterThanOrEqual",
		lessThan: "operatorLessThan",
		lessThanOrEqual: "operatorLessThanOrEqual",
		between: "operatorBetween"
	};
	let filterMenuCount = 0;
	const inputTypeFor = (filterType) => filterType === "number" ? "number" : filterType === "date" ? "date" : "text";
	const createFilterMenu = (context) => {
		const element = document.createElement("div");
		element.classList.add(CLASS_NAME_FILTER_MENU);
		element.setAttribute("role", "dialog");
		element.id = `data-grid-filter-menu-${++filterMenuCount}`;
		let trigger = null;
		const close = (refocus = false) => {
			if (!trigger) return;
			trigger.setAttribute("aria-expanded", "false");
			trigger.removeAttribute("aria-controls");
			if (refocus) trigger.focus();
			trigger = null;
			element.remove();
			document.removeEventListener("pointerdown", onOutsidePointerDown, true);
			window.removeEventListener("scroll", onWindowChange, true);
			window.removeEventListener("resize", onWindowChange);
		};
		const onOutsidePointerDown = (event) => {
			const target = event.target;
			if (!element.contains(target) && !trigger?.contains(target)) close();
		};
		const onWindowChange = (event) => {
			if (event?.target instanceof Node && element.contains(event.target)) return;
			close();
		};
		const onKeydown = (event) => {
			if (event.key === "Escape") {
				event.stopPropagation();
				close(true);
			}
		};
		element.addEventListener("keydown", onKeydown);
		const buildConditionRow = (filterType, condition) => {
			const row = document.createElement("div");
			row.classList.add(CLASS_NAME_CONDITION);
			const select = document.createElement("select");
			select.classList.add("form-select", "form-select-sm");
			select.setAttribute("aria-label", context.labels.filterAction);
			for (const operator of FILTER_OPERATORS[filterType]) {
				const option = document.createElement("option");
				option.value = operator;
				option.textContent = context.labels[OPERATOR_LABEL_KEYS[operator]];
				select.append(option);
			}
			select.value = condition?.operator ?? FILTER_OPERATORS[filterType][0];
			const value = document.createElement("input");
			value.type = inputTypeFor(filterType);
			value.classList.add("form-control", "form-control-sm");
			value.dataset.coreuiFilterValue = "";
			value.value = condition?.value === void 0 ? "" : String(condition.value);
			const value2 = document.createElement("input");
			value2.type = inputTypeFor(filterType);
			value2.classList.add("form-control", "form-control-sm");
			value2.dataset.coreuiFilterValue2 = "";
			value2.value = condition?.value2 === void 0 ? "" : String(condition.value2);
			const syncVisibility = () => {
				const operator = select.value;
				value.hidden = VALUELESS_OPERATORS.has(operator);
				value2.hidden = operator !== "between";
			};
			select.addEventListener("change", syncVisibility);
			row.append(select, value, value2);
			syncVisibility();
			return row;
		};
		const readCondition = (row) => {
			const operator = row.querySelector("select").value;
			const { value } = row.querySelector("[data-coreui-filter-value]");
			const value2 = row.querySelector("[data-coreui-filter-value2]").value;
			if (VALUELESS_OPERATORS.has(operator)) return { operator };
			if (value.trim() === "") return null;
			return {
				operator,
				value,
				...operator === "between" && value2.trim() !== "" && { value2 }
			};
		};
		const buildFooter = (onApply, columnKey) => {
			const footer = document.createElement("div");
			footer.classList.add(CLASS_NAME_FOOTER$1);
			const apply = document.createElement("button");
			apply.type = "button";
			apply.classList.add("btn", "btn-primary", "btn-sm");
			apply.textContent = context.labels.applyFilter;
			apply.addEventListener("click", onApply);
			const clear = document.createElement("button");
			clear.type = "button";
			clear.classList.add("btn", "btn-outline-secondary", "btn-sm");
			clear.textContent = context.labels.clearFilter;
			clear.addEventListener("click", () => {
				context.applyFilter(columnKey);
				close(true);
			});
			footer.append(apply, clear);
			return footer;
		};
		const buildConditionsContent = (columnKey, filterType) => {
			const current = context.getFilterValue(columnKey);
			const conditions = current && typeof current !== "string" && "conditions" in current ? current.conditions : [];
			const join = current && typeof current !== "string" && "conditions" in current ? current.join : "and";
			const rows = [buildConditionRow(filterType, conditions[0] ?? null)];
			const body = document.createElement("div");
			body.append(rows[0]);
			const joinRow = document.createElement("div");
			joinRow.classList.add(CLASS_NAME_JOIN);
			const joinName = `${element.id}-join`;
			for (const option of ["and", "or"]) {
				const label = document.createElement("label");
				const radio = document.createElement("input");
				radio.type = "radio";
				radio.classList.add("form-check-input");
				radio.name = joinName;
				radio.value = option;
				radio.checked = join === option;
				label.append(radio, ` ${option === "and" ? context.labels.joinAnd : context.labels.joinOr}`);
				joinRow.append(label);
			}
			const addButton = document.createElement("button");
			addButton.type = "button";
			addButton.classList.add("btn", "btn-link", "btn-sm");
			addButton.textContent = context.labels.addCondition;
			const showSecond = () => {
				if (rows.length >= MAX_CONDITIONS) return;
				rows.push(buildConditionRow(filterType, conditions[1] ?? null));
				addButton.before(joinRow, rows[1]);
				addButton.hidden = true;
			};
			addButton.addEventListener("click", showSecond);
			body.append(addButton);
			if (conditions.length > 1) showSecond();
			const onApply = () => {
				const collected = rows.map((row) => readCondition(row)).filter((condition) => condition !== null);
				const joinValue = joinRow.querySelector("input:checked")?.value ?? "and";
				context.applyFilter(columnKey, collected.length === 0 ? void 0 : {
					conditions: collected,
					join: joinValue
				});
				close(true);
			};
			body.append(buildFooter(onApply, columnKey));
			return body;
		};
		const buildSelectContent = (columnKey) => {
			const values = context.getFacetedValues(columnKey);
			const current = context.getFilterValue(columnKey);
			const selected = current && typeof current !== "string" && "operator" in current ? new Set(current.value.map(String)) : null;
			const body = document.createElement("div");
			const list = document.createElement("div");
			list.classList.add(CLASS_NAME_VALUES);
			const checkboxes = [];
			const rowFor = (labelText, checked) => {
				const label = document.createElement("label");
				label.classList.add("form-check");
				const input = document.createElement("input");
				input.type = "checkbox";
				input.classList.add("form-check-input");
				input.checked = checked;
				const text = document.createElement("span");
				text.classList.add("form-check-label");
				text.textContent = labelText;
				label.append(input, text);
				list.append(label);
				return input;
			};
			const selectAll = rowFor(context.labels.selectAllValues, selected === null);
			selectAll.dataset.coreuiSelectAllValues = "";
			for (const value of values) {
				const input = rowFor(String(value), selected === null || selected.has(String(value)));
				input.dataset.coreuiFilterOption = String(value);
				checkboxes.push(input);
			}
			const syncSelectAll = () => {
				selectAll.checked = checkboxes.every((input) => input.checked);
			};
			selectAll.addEventListener("change", () => {
				for (const input of checkboxes) input.checked = selectAll.checked;
			});
			list.addEventListener("change", (event) => {
				if (event.target !== selectAll) syncSelectAll();
			});
			syncSelectAll();
			if (values.length > SEARCH_THRESHOLD) {
				const search = document.createElement("input");
				search.type = "text";
				search.classList.add("form-control", "form-control-sm");
				search.setAttribute("aria-label", context.labels.searchValues);
				search.placeholder = context.labels.searchValues;
				search.addEventListener("input", () => {
					const needle = search.value.toLowerCase();
					for (const input of checkboxes) input.closest("label").hidden = !input.dataset.coreuiFilterOption.toLowerCase().includes(needle);
				});
				body.append(search);
			}
			body.append(list);
			const onApply = () => {
				const checked = checkboxes.filter((input) => input.checked);
				context.applyFilter(columnKey, checked.length === checkboxes.length ? void 0 : {
					operator: "in",
					value: checked.map((input) => input.dataset.coreuiFilterOption)
				});
				close(true);
			};
			body.append(buildFooter(onApply, columnKey));
			return body;
		};
		const open = (button, columnKey) => {
			close();
			const column = context.getColumn(columnKey);
			if (!column) return;
			element.setAttribute("aria-label", interpolate(context.labels.filterColumn, { column: column.label ?? column.key }));
			const filterType = column.filterType ?? "text";
			element.replaceChildren(filterType === "select" ? buildSelectContent(columnKey) : buildConditionsContent(columnKey, filterType));
			trigger = button;
			button.setAttribute("aria-expanded", "true");
			button.setAttribute("aria-controls", element.id);
			context.root.append(element);
			const rootRect = context.root.getBoundingClientRect();
			const buttonRect = button.getBoundingClientRect();
			element.style.top = `${buttonRect.bottom - rootRect.top}px`;
			element.style.left = `${Math.max(buttonRect.right - rootRect.left - element.offsetWidth, 0)}px`;
			document.addEventListener("pointerdown", onOutsidePointerDown, true);
			window.addEventListener("scroll", onWindowChange, true);
			window.addEventListener("resize", onWindowChange);
			element.querySelector("select, input")?.focus();
		};
		return {
			toggle(button, columnKey) {
				if (trigger === button) {
					close(true);
					return;
				}
				close();
				open(button, columnKey);
			},
			close() {
				close();
			},
			dispose() {
				close();
				element.removeEventListener("keydown", onKeydown);
			}
		};
	};
	//#endregion
	//#region src/ui/menu.ts
	const CLASS_NAME_MENU = "data-grid-menu";
	const CLASS_NAME_MENU_ITEM = "data-grid-menu-item";
	const CLASS_NAME_MENU_ITEM_ICON = "data-grid-menu-item-icon";
	const CLASS_NAME_MENU_DIVIDER = "data-grid-menu-divider";
	let menuCount = 0;
	const createMenu = (context) => {
		const element = document.createElement("div");
		element.classList.add(CLASS_NAME_MENU);
		element.setAttribute("role", "menu");
		element.id = `data-grid-menu-${++menuCount}`;
		let trigger = null;
		const items = () => [...element.querySelectorAll(`.${CLASS_NAME_MENU_ITEM}`)];
		const close = (refocus = false) => {
			if (!trigger) return;
			trigger.setAttribute("aria-expanded", "false");
			trigger.removeAttribute("aria-controls");
			if (refocus) trigger.focus();
			trigger = null;
			element.remove();
			document.removeEventListener("pointerdown", onOutsidePointerDown, true);
			window.removeEventListener("scroll", onWindowChange, true);
			window.removeEventListener("resize", onWindowChange);
		};
		const onOutsidePointerDown = (event) => {
			const target = event.target;
			if (!element.contains(target) && !trigger?.contains(target)) close();
		};
		const onWindowChange = (event) => {
			if (event?.target instanceof Node && element.contains(event.target)) return;
			close();
		};
		const onMenuKeydown = (event) => {
			const enabled = items();
			const activeIndex = enabled.indexOf(document.activeElement);
			switch (event.key) {
				case "Escape":
					event.stopPropagation();
					close(true);
					break;
				case "Tab":
					close();
					break;
				case "ArrowDown":
					event.preventDefault();
					enabled[(activeIndex + 1) % enabled.length]?.focus();
					break;
				case "ArrowUp":
					event.preventDefault();
					enabled[(activeIndex - 1 + enabled.length) % enabled.length]?.focus();
					break;
				case "Home":
					event.preventDefault();
					enabled[0]?.focus();
					break;
				case "End":
					event.preventDefault();
					enabled[enabled.length - 1]?.focus();
			}
		};
		element.addEventListener("keydown", onMenuKeydown);
		const open = (button, columnKey) => {
			const actions = context.getActions(columnKey);
			if (actions.length === 0) return;
			const nodes = [];
			for (const [index, action] of actions.entries()) {
				if (index > 0 && action.group !== actions[index - 1].group) {
					const divider = document.createElement("div");
					divider.classList.add(CLASS_NAME_MENU_DIVIDER);
					divider.setAttribute("role", "separator");
					nodes.push(divider);
				}
				const item = document.createElement("button");
				item.type = "button";
				item.classList.add(CLASS_NAME_MENU_ITEM);
				item.setAttribute("role", "menuitem");
				if (action.icon) {
					const icon = document.createElement("span");
					icon.classList.add(CLASS_NAME_MENU_ITEM_ICON);
					icon.setAttribute("aria-hidden", "true");
					icon.innerHTML = action.icon;
					item.append(icon);
				}
				item.append(action.label);
				if (action.disabled) item.setAttribute("aria-disabled", "true");
				item.addEventListener("click", () => {
					if (action.disabled) return;
					const previousTrigger = trigger;
					close();
					action.run();
					requestAnimationFrame(() => {
						const active = document.activeElement;
						if (active && active !== document.body && context.root.contains(active)) return;
						if (previousTrigger?.isConnected) previousTrigger.focus();
						else context.root.querySelector("[data-coreui-menu]")?.focus();
					});
				});
				nodes.push(item);
			}
			element.replaceChildren(...nodes);
			trigger = button;
			button.setAttribute("aria-expanded", "true");
			button.setAttribute("aria-controls", element.id);
			context.root.append(element);
			const rootRect = context.root.getBoundingClientRect();
			const buttonRect = button.getBoundingClientRect();
			element.style.top = `${buttonRect.bottom - rootRect.top}px`;
			element.style.left = `${Math.max(buttonRect.right - rootRect.left - element.offsetWidth, 0)}px`;
			document.addEventListener("pointerdown", onOutsidePointerDown, true);
			window.addEventListener("scroll", onWindowChange, true);
			window.addEventListener("resize", onWindowChange);
			items()[0]?.focus();
		};
		return {
			toggle(button, columnKey) {
				if (trigger === button) {
					close(true);
					return;
				}
				close();
				open(button, columnKey);
			},
			close() {
				close();
			},
			dispose() {
				close();
				element.removeEventListener("keydown", onMenuKeydown);
			}
		};
	};
	//#endregion
	//#region src/ui/pagination.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid ui/pagination.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const CLASS_NAME_PAGINATION = "data-grid-pagination";
	const CLASS_NAME_PAGINATION_INFO = "data-grid-pagination-info";
	const PAGE_WINDOW = 5;
	const createPageItem = (label, page, options = {}) => {
		const item = document.createElement("li");
		item.classList.add("page-item");
		if (options.active) {
			item.classList.add("active");
			item.setAttribute("aria-current", "page");
		}
		if (options.disabled) item.classList.add("disabled");
		const button = document.createElement("button");
		button.type = "button";
		button.classList.add("page-link");
		button.textContent = label;
		button.disabled = Boolean(options.disabled);
		button.dataset.coreuiPage = page;
		if (options.ariaLabel) button.setAttribute("aria-label", options.ariaLabel);
		item.append(button);
		return item;
	};
	const createPagination = (context) => {
		const element = document.createElement("div");
		element.classList.add(CLASS_NAME_PAGINATION);
		const nav = document.createElement("nav");
		nav.setAttribute("aria-label", context.labels.paginationLabel);
		const list = document.createElement("ul");
		list.classList.add("pagination", "pagination-sm");
		nav.append(list);
		const info = context.info === false ? null : document.createElement("span");
		if (info) info.classList.add(CLASS_NAME_PAGINATION_INFO);
		const select = document.createElement("select");
		select.classList.add("form-select", "form-select-sm");
		select.setAttribute("aria-label", context.labels.pageSizeLabel);
		select.dataset.coreuiPageSize = "";
		for (const size of context.pageSizeOptions) {
			const option = document.createElement("option");
			option.value = String(size);
			option.textContent = String(size);
			select.append(option);
		}
		element.append(nav, ...info ? [info] : [], select);
		return {
			element,
			update(state) {
				const lastPageIndex = Math.max(state.pageCount - 1, 0);
				const windowStart = Math.max(Math.min(state.pageIndex - Math.floor(PAGE_WINDOW / 2), state.pageCount - PAGE_WINDOW), 0);
				const windowEnd = state.pageCount === 0 ? -1 : Math.min(windowStart + PAGE_WINDOW - 1, lastPageIndex);
				const items = [createPageItem("«", "first", {
					ariaLabel: context.labels.firstPage,
					disabled: state.pageIndex === 0
				}), createPageItem("‹", "prev", {
					ariaLabel: context.labels.previousPage,
					disabled: state.pageIndex === 0
				})];
				for (let page = windowStart; page <= windowEnd; page++) items.push(createPageItem(String(page + 1), String(page), { active: page === state.pageIndex }));
				items.push(createPageItem("›", "next", {
					ariaLabel: context.labels.nextPage,
					disabled: state.pageIndex >= lastPageIndex
				}), createPageItem("»", "last", {
					ariaLabel: context.labels.lastPage,
					disabled: state.pageIndex >= lastPageIndex
				}));
				list.replaceChildren(...items);
				if (info) {
					if (typeof context.info === "function") info.textContent = context.info(state);
					else {
						const first = state.totalRows === 0 ? 0 : state.pageIndex * state.pageSize + 1;
						const last = Math.min((state.pageIndex + 1) * state.pageSize, state.totalRows);
						info.textContent = interpolate(context.labels.itemsInfo, {
							first,
							last,
							total: state.totalRows
						});
					}
				}
				if (![...select.options].some((option) => option.value === String(state.pageSize))) {
					const option = document.createElement("option");
					option.value = String(state.pageSize);
					option.textContent = String(state.pageSize);
					select.insertBefore(option, [...select.options].find((item) => Number(item.value) > state.pageSize) ?? null);
				}
				select.value = String(state.pageSize);
			}
		};
	};
	//#endregion
	//#region src/ui/column-chooser.ts
	const CLASS_NAME_COLUMN_CHOOSER = "data-grid-column-chooser";
	const CLASS_NAME_OPTION = "data-grid-column-chooser-option";
	const CLASS_NAME_FOOTER = "data-grid-column-chooser-footer";
	let columnChooserCount = 0;
	const createColumnChooser = (context) => {
		const element = document.createElement("div");
		element.classList.add(CLASS_NAME_COLUMN_CHOOSER);
		element.setAttribute("role", "dialog");
		element.setAttribute("aria-label", context.labels.toolbarColumns);
		element.id = `data-grid-column-chooser-${++columnChooserCount}`;
		let trigger = null;
		const close = (refocus = false) => {
			if (!trigger) return;
			trigger.setAttribute("aria-expanded", "false");
			trigger.removeAttribute("aria-controls");
			if (refocus) trigger.focus();
			trigger = null;
			element.remove();
			document.removeEventListener("pointerdown", onOutsidePointerDown, true);
			window.removeEventListener("scroll", onWindowChange, true);
			window.removeEventListener("resize", onWindowChange);
		};
		const onOutsidePointerDown = (event) => {
			const target = event.target;
			if (!element.contains(target) && !trigger?.contains(target)) close();
		};
		const onWindowChange = (event) => {
			if (event?.target instanceof Node && element.contains(event.target)) return;
			close();
		};
		const onKeydown = (event) => {
			if (event.key === "Escape") {
				event.stopPropagation();
				close(true);
			}
		};
		element.addEventListener("keydown", onKeydown);
		const buildContent = () => {
			const list = document.createElement("div");
			for (const column of context.getColumns()) {
				const label = document.createElement("label");
				label.classList.add("form-check", CLASS_NAME_OPTION);
				const input = document.createElement("input");
				input.type = "checkbox";
				input.classList.add("form-check-input");
				input.checked = column.visible;
				input.dataset.coreuiColumnChooserOption = column.id;
				if (!column.canHide) {
					input.disabled = true;
					input.setAttribute("aria-disabled", "true");
				}
				input.addEventListener("change", () => {
					context.toggleVisibility(column.id, input.checked);
				});
				const text = document.createElement("span");
				text.classList.add("form-check-label");
				text.textContent = column.label;
				label.append(input, text);
				list.append(label);
			}
			const footer = document.createElement("div");
			footer.classList.add(CLASS_NAME_FOOTER);
			const showAll = document.createElement("button");
			showAll.type = "button";
			showAll.classList.add("btn", "btn-link", "btn-sm");
			showAll.textContent = context.labels.showAllColumns;
			showAll.dataset.coreuiColumnChooserShowAll = "";
			showAll.addEventListener("click", () => {
				context.showAll();
				element.replaceChildren(buildContent());
			});
			const reset = document.createElement("button");
			reset.type = "button";
			reset.classList.add("btn", "btn-link", "btn-sm");
			reset.textContent = context.labels.resetColumns;
			reset.dataset.coreuiColumnChooserReset = "";
			reset.addEventListener("click", () => {
				context.reset();
				element.replaceChildren(buildContent());
			});
			footer.append(showAll, reset);
			const content = document.createDocumentFragment();
			content.append(list, footer);
			return content;
		};
		const open = (button) => {
			close();
			element.replaceChildren(buildContent());
			trigger = button;
			button.setAttribute("aria-expanded", "true");
			button.setAttribute("aria-controls", element.id);
			context.root.append(element);
			const rootRect = context.root.getBoundingClientRect();
			const buttonRect = button.getBoundingClientRect();
			element.style.top = `${buttonRect.bottom - rootRect.top}px`;
			element.style.left = `${Math.max(buttonRect.left - rootRect.left, 0)}px`;
			document.addEventListener("pointerdown", onOutsidePointerDown, true);
			window.addEventListener("scroll", onWindowChange, true);
			window.addEventListener("resize", onWindowChange);
			element.querySelector("input:not(:disabled)")?.focus();
		};
		return {
			toggle(button) {
				if (trigger === button) {
					close(true);
					return;
				}
				close();
				open(button);
			},
			close() {
				close();
			},
			dispose() {
				close();
				element.removeEventListener("keydown", onKeydown);
			}
		};
	};
	//#endregion
	//#region src/ui/tooltip.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid ui/tooltip.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const CLASS_NAME_TOOLTIP = "data-grid-tooltip";
	const ATTRIBUTE = "data-coreui-tooltip";
	const SELECTOR = `[${ATTRIBUTE}]`;
	const SHOW_DELAY = 200;
	const GAP = 6;
	const EDGE = 4;
	const createTooltip = (root) => {
		const element = document.createElement("div");
		element.className = CLASS_NAME_TOOLTIP;
		element.setAttribute("role", "tooltip");
		element.setAttribute("aria-hidden", "true");
		element.hidden = true;
		root.append(element);
		let anchor = null;
		let showTimer;
		const anchorFrom = (target) => {
			const element_ = target instanceof Element ? target.closest(SELECTOR) : null;
			return element_ instanceof HTMLElement && element_.getAttribute(ATTRIBUTE) ? element_ : null;
		};
		const position = () => {
			if (!anchor) return;
			const rect = anchor.getBoundingClientRect();
			const width = element.offsetWidth;
			const height = element.offsetHeight;
			const above = rect.top - height - GAP;
			const top = above >= 0 ? above : rect.bottom + GAP;
			const left = Math.max(EDGE, Math.min(rect.left + (rect.width - width) / 2, window.innerWidth - width - EDGE));
			element.style.top = `${top}px`;
			element.style.left = `${left}px`;
			element.style.visibility = "visible";
		};
		const show = (target) => {
			anchor = target;
			element.textContent = target.getAttribute(ATTRIBUTE);
			element.style.visibility = "hidden";
			element.hidden = false;
			position();
		};
		const hide = () => {
			clearTimeout(showTimer);
			anchor = null;
			element.hidden = true;
		};
		const onPointerOver = (event) => {
			const target = anchorFrom(event.target);
			if (!target || target === anchor) return;
			clearTimeout(showTimer);
			showTimer = setTimeout(() => show(target), SHOW_DELAY);
		};
		const onPointerOut = (event) => {
			if (anchor && event.relatedTarget instanceof Node && anchor.contains(event.relatedTarget)) return;
			hide();
		};
		const onFocusIn = (event) => {
			const target = anchorFrom(event.target);
			if (target) show(target);
		};
		root.addEventListener("pointerover", onPointerOver);
		root.addEventListener("pointerout", onPointerOut);
		root.addEventListener("pointerdown", hide);
		root.addEventListener("focusin", onFocusIn);
		root.addEventListener("focusout", hide);
		window.addEventListener("scroll", hide, true);
		return { dispose() {
			clearTimeout(showTimer);
			root.removeEventListener("pointerover", onPointerOver);
			root.removeEventListener("pointerout", onPointerOut);
			root.removeEventListener("pointerdown", hide);
			root.removeEventListener("focusin", onFocusIn);
			root.removeEventListener("focusout", hide);
			window.removeEventListener("scroll", hide, true);
			element.remove();
		} };
	};
	//#endregion
	//#region src/util/export-table.ts
	const rowsFor = (table, scope) => {
		if (scope === "all") return table.getCoreRowModel().rows;
		if (scope === "selected") return table.getSelectedRowModel?.().rows ?? [];
		return (table.getSortedRowModel ?? table.getFilteredRowModel ?? table.getCoreRowModel)().rows;
	};
	const columnsFor = (table) => {
		if (table.getCenterVisibleLeafColumns) return [
			...table.getStartVisibleLeafColumns?.() ?? [],
			...table.getCenterVisibleLeafColumns(),
			...table.getEndVisibleLeafColumns?.() ?? []
		];
		return table.getVisibleLeafColumns?.() ?? table.getAllLeafColumns();
	};
	const headerFor = (column) => String(column.columnDef.meta?.label ?? column.id);
	const formatterFor = (column) => column.columnDef.meta?.formatter;
	//#endregion
	//#region src/util/csv.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid util/csv.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const escapeField = (value, delimiter) => /["\r\n]/.test(value) || value.includes(delimiter) ? `"${value.replace(/"/g, "\"\"")}"` : value;
	const sanitizeField = (value) => /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
	const exportCsv = (table, options = {}) => {
		const delimiter = options.delimiter ?? ",";
		const columns = columnsFor(table);
		const process = (field) => escapeField(options.sanitize ? sanitizeField(field) : field, delimiter);
		const line = (fields) => fields.map(process).join(delimiter);
		const csv = [line(columns.map((column) => headerFor(column))), ...rowsFor(table, options.scope).map((row) => line(columns.map((column) => {
			const value = row.getValue(column.id);
			const formatter = formatterFor(column);
			return formatter ? String(formatter(value, row.original) ?? "") : String(value ?? "");
		})))].join("\r\n");
		return options.bom ? `\uFEFF${csv}` : csv;
	};
	const downloadCsv = (table, options = {}) => {
		const blob = new Blob([exportCsv(table, options)], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.download = options.filename ?? "export.csv";
		anchor.style.display = "none";
		document.body.append(anchor);
		anchor.click();
		anchor.remove();
		setTimeout(() => URL.revokeObjectURL(url));
	};
	//#endregion
	//#region src/util/debounce.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid util/debounce.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const debounce = (callback, delay) => {
		let timeout;
		return (...args) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => callback(...args), delay);
		};
	};
	const DefaultAllowlist = {
		"*": [
			"class",
			"dir",
			"id",
			"lang",
			"role",
			/^aria-[\w-]*$/i
		],
		a: [
			"target",
			"href",
			"title",
			"rel"
		],
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
		img: [
			"src",
			"srcset",
			"alt",
			"title",
			"width",
			"height"
		],
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
	const SVGAllowlist = {
		...DefaultAllowlist,
		svg: [
			"xmlns",
			"version",
			"baseprofile",
			"width",
			"height",
			"viewbox",
			"preserveaspectratio",
			"aria-hidden",
			"role",
			"focusable",
			"fill",
			"stroke",
			"stroke-width",
			"stroke-linecap",
			"stroke-linejoin"
		],
		g: [
			"id",
			"class",
			"transform",
			"style"
		],
		path: [
			"id",
			"class",
			"d",
			"fill",
			"fill-opacity",
			"fill-rule",
			"stroke",
			"stroke-width",
			"stroke-linecap",
			"stroke-linejoin",
			"stroke-miterlimit",
			"stroke-dasharray",
			"stroke-dashoffset",
			"stroke-opacity"
		],
		circle: [
			"id",
			"class",
			"cx",
			"cy",
			"r",
			"fill",
			"fill-opacity",
			"stroke",
			"stroke-width",
			"stroke-opacity"
		],
		rect: [
			"id",
			"class",
			"x",
			"y",
			"width",
			"height",
			"rx",
			"ry",
			"fill",
			"fill-opacity",
			"stroke",
			"stroke-width",
			"stroke-opacity"
		],
		ellipse: [
			"id",
			"class",
			"cx",
			"cy",
			"rx",
			"ry",
			"fill",
			"fill-opacity",
			"stroke",
			"stroke-width",
			"stroke-opacity"
		],
		line: [
			"id",
			"class",
			"x1",
			"y1",
			"x2",
			"y2",
			"stroke",
			"stroke-width",
			"stroke-linecap",
			"stroke-opacity"
		],
		polygon: [
			"id",
			"class",
			"points",
			"fill",
			"fill-opacity",
			"stroke",
			"stroke-width",
			"stroke-opacity"
		],
		polyline: [
			"id",
			"class",
			"points",
			"fill",
			"fill-opacity",
			"stroke",
			"stroke-width",
			"stroke-opacity"
		],
		text: [
			"id",
			"class",
			"x",
			"y",
			"dx",
			"dy",
			"text-anchor",
			"font-family",
			"font-size",
			"font-weight",
			"fill",
			"fill-opacity",
			"stroke",
			"stroke-width",
			"stroke-opacity"
		],
		tspan: [
			"id",
			"class",
			"x",
			"y",
			"dx",
			"dy",
			"text-anchor",
			"font-family",
			"font-size",
			"font-weight",
			"fill",
			"fill-opacity",
			"stroke",
			"stroke-width",
			"stroke-opacity"
		],
		defs: [],
		symbol: [
			"id",
			"class",
			"viewbox",
			"preserveaspectratio"
		],
		use: [
			"id",
			"class",
			"x",
			"y",
			"width",
			"height",
			"href"
		],
		image: [
			"id",
			"class",
			"x",
			"y",
			"width",
			"height",
			"href",
			"preserveaspectratio",
			"xlink:href"
		],
		pattern: [
			"id",
			"class",
			"x",
			"y",
			"width",
			"height",
			"patternunits",
			"patterncontentunits",
			"patterntransform",
			"preserveaspectratio"
		],
		lineargradient: [
			"id",
			"class",
			"gradientunits",
			"x1",
			"y1",
			"x2",
			"y2",
			"spreadmethod",
			"gradienttransform"
		],
		radialgradient: [
			"id",
			"class",
			"gradientunits",
			"cx",
			"cy",
			"r",
			"fx",
			"fy",
			"spreadmethod",
			"gradienttransform"
		],
		mask: [
			"id",
			"class",
			"x",
			"y",
			"width",
			"height",
			"maskunits",
			"maskcontentunits",
			"masktransform"
		],
		clippath: [
			"id",
			"class",
			"clippathunits"
		],
		marker: [
			"id",
			"class",
			"markerunits",
			"markerwidth",
			"markerheight",
			"orient",
			"preserveaspectratio",
			"viewbox",
			"refx",
			"refy"
		],
		title: [],
		desc: []
	};
	const uriAttributes = /* @__PURE__ */ new Set([
		"background",
		"cite",
		"href",
		"itemtype",
		"longdesc",
		"poster",
		"src",
		"xlink:href"
	]);
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
			if (uriAttributes.has(attributeName)) return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
			return true;
		}
		return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
	};
	function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
		if (!unsafeHtml.length) return unsafeHtml;
		if (sanitizeFunction && typeof sanitizeFunction === "function") return sanitizeFunction(unsafeHtml);
		const createdDocument = new window.DOMParser().parseFromString(unsafeHtml, "text/html");
		const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
		for (const element of elements) {
			const elementName = element.nodeName.toLowerCase();
			if (!Object.keys(allowList).includes(elementName)) {
				element.remove();
				continue;
			}
			const attributeList = [].concat(...element.attributes);
			const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
			for (const attribute of attributeList) if (!allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
		}
		return createdDocument.body.innerHTML;
	}
	//#endregion
	//#region src/data-grid.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	/**
	* Constants
	*/
	const NAME = "data-grid";
	const EVENT_KEY = `.coreui.data-grid`;
	const EVENT_CHANGE = `change${EVENT_KEY}`;
	const EVENT_CLICK = `click${EVENT_KEY}`;
	const EVENT_DATA_ERROR = `dataError${EVENT_KEY}`;
	const EVENT_DATA_LOAD = `dataLoad${EVENT_KEY}`;
	const EVENT_DBLCLICK = `dblclick${EVENT_KEY}`;
	const EVENT_EDIT_CANCEL = `editCancel${EVENT_KEY}`;
	const EVENT_EDIT_COMMIT = `editCommit${EVENT_KEY}`;
	const EVENT_EDIT_START = `editStart${EVENT_KEY}`;
	const EVENT_FILTER_CHANGE = `filterChange${EVENT_KEY}`;
	const EVENT_INPUT = `input${EVENT_KEY}`;
	const EVENT_CELL_COPY = `cellCopy${EVENT_KEY}`;
	const EVENT_ORDER_CHANGE = `orderChange${EVENT_KEY}`;
	const EVENT_ROW_ORDER_CHANGE = `rowOrderChange${EVENT_KEY}`;
	const EVENT_PAGINATION_CHANGE = `paginationChange${EVENT_KEY}`;
	const EVENT_PINNING_CHANGE = `pinningChange${EVENT_KEY}`;
	const EVENT_SELECTION_CHANGE = `selectionChange${EVENT_KEY}`;
	const EVENT_SIZING_CHANGE = `sizingChange${EVENT_KEY}`;
	const EVENT_SORTING_CHANGE = `sortingChange${EVENT_KEY}`;
	const EVENT_VISIBILITY_CHANGE = `visibilityChange${EVENT_KEY}`;
	const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
	const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
	const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
	const EVENT_MOUSEDOWN = `mousedown${EVENT_KEY}`;
	const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`;
	const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY}`;
	const EVENT_TOUCHSTART = `touchstart${EVENT_KEY}`;
	const CLASS_NAME_AUTO_ROW_HEIGHT = "data-grid-auto-row-height";
	const CLASS_NAME_DATA_GRID = "data-grid";
	const CLASS_NAME_EDITOR_POPUP = "data-grid-editor-popup";
	const CLASS_NAME_LOADING_MORE = "data-grid-loading-more";
	const CLASS_NAME_PAGINATION_TOP = "data-grid-pagination-top";
	const CLASS_NAME_PINNED = "data-grid-pinned";
	const CLASS_NAME_RESIZABLE = "data-grid-resizable";
	const CLASS_NAME_TABLE = "table";
	const CLASS_NAME_VIEWPORT = "data-grid-viewport";
	const SELECTOR_BODY_CELL = "tbody td[data-coreui-column]";
	const SELECTOR_COLUMN_FILTER = "input[data-coreui-column-filter]";
	const SELECTOR_MENU_BUTTON = "button[data-coreui-menu]";
	const SELECTOR_FILTER_BUTTON = "button[data-coreui-filter]";
	const SELECTOR_GLOBAL_FILTER = "input[data-coreui-global-filter]";
	const SELECTOR_PAGE = "button[data-coreui-page]";
	const SELECTOR_PAGE_SIZE = "select[data-coreui-page-size]";
	const SELECTOR_RESIZER = "[data-coreui-resizer]";
	const SELECTOR_ROW_SELECT = "input[data-coreui-row-select]";
	const SELECTOR_SELECT_ALL = "input[data-coreui-select-all]";
	const SELECTOR_SORT_BUTTON = ".data-grid-sort-button";
	const SELECTOR_TOOLBAR_COLUMNS = "button[data-coreui-toolbar-columns]";
	const SELECTOR_TOOLBAR_EXPORT = "button[data-coreui-toolbar-export]";
	const SELECTOR_TOOLBAR_PRINT = "button[data-coreui-toolbar-print]";
	const SELECTOR_TOOLBAR_REDO = "button[data-coreui-toolbar-redo]";
	const SELECTOR_TOOLBAR_UNDO = "button[data-coreui-toolbar-undo]";
	const FILTER_DEBOUNCE_MS = 250;
	const DEFAULT_PAGE_SIZE_OPTIONS = [
		5,
		10,
		20,
		50
	];
	let editorErrorCount = 0;
	const STATE_STORAGE_PREFIX = "coreui-data-grid:";
	const STATE_AUTOSAVE_DEBOUNCE_MS = 250;
	const HISTORY_LIMIT = 100;
	const INVERTED_ARROWS = {
		ArrowLeft: "ArrowRight",
		ArrowRight: "ArrowLeft"
	};
	const CELL_SELECTION_DIRECTIONS = {
		ArrowDown: "down",
		ArrowLeft: "left",
		ArrowRight: "right",
		ArrowUp: "up"
	};
	const FOCUSABLE_SELECTOR = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]";
	const applyTabIndex = (cellElement, isTabbable) => {
		const value = isTabbable ? 0 : -1;
		if (cellElement.tabIndex !== value) cellElement.tabIndex = value;
	};
	const Default = {
		autoRowHeight: false,
		cellNavigation: false,
		cellSelection: false,
		columnFilters: false,
		columnMenu: false,
		columnMenuIcon: DEFAULT_COLUMN_MENU_ICON,
		columnOrder: false,
		columnPinning: false,
		columnSizing: false,
		columnVisibility: false,
		columns: [],
		dataProvider: null,
		editing: false,
		empty: "No items found",
		features: null,
		filterIcon: DEFAULT_FILTER_ICON,
		globalFilter: false,
		hideColumnIcon: DEFAULT_HIDE_COLUMN_ICON,
		history: false,
		infiniteScroll: false,
		itemKey: null,
		items: [],
		labels: {},
		moveEndIcon: DEFAULT_MOVE_END_ICON,
		moveStartIcon: DEFAULT_MOVE_START_ICON,
		overscan: 10,
		pagination: false,
		pinEndIcon: DEFAULT_PIN_END_ICON,
		pinStartIcon: DEFAULT_PIN_START_ICON,
		printTitle: null,
		rowHandleIcon: DEFAULT_ROW_HANDLE_ICON,
		rowHeight: 44,
		rowOrder: false,
		rowSelection: false,
		sanitize: true,
		sanitizeFn: null,
		slots: {},
		sortAscendingIcon: DEFAULT_SORT_ASCENDING_ICON,
		sortDescendingIcon: DEFAULT_SORT_DESCENDING_ICON,
		sortNeutralIcon: DEFAULT_SORT_NEUTRAL_ICON,
		sorterVisibility: false,
		sorting: true,
		stateKey: null,
		toolbar: false,
		toolbarColumnsIcon: DEFAULT_TOOLBAR_COLUMNS_ICON,
		toolbarExportIcon: DEFAULT_TOOLBAR_EXPORT_ICON,
		toolbarPrintIcon: DEFAULT_TOOLBAR_PRINT_ICON,
		toolbarRedoIcon: DEFAULT_TOOLBAR_REDO_ICON,
		toolbarUndoIcon: DEFAULT_TOOLBAR_UNDO_ICON,
		unpinIcon: DEFAULT_UNPIN_ICON,
		virtualization: true
	};
	const DefaultType = {
		autoRowHeight: "boolean",
		cellNavigation: "boolean",
		cellSelection: "boolean",
		columnFilters: "boolean",
		columnMenu: "(boolean|function)",
		columnMenuIcon: "string",
		columnOrder: "(boolean|array)",
		columnPinning: "(boolean|object)",
		columnSizing: "(boolean|object)",
		columnVisibility: "(boolean|object)",
		columns: "array",
		dataProvider: "(function|null)",
		editing: "boolean",
		empty: "(string|function)",
		features: "(object|null)",
		filterIcon: "string",
		globalFilter: "boolean",
		hideColumnIcon: "string",
		history: "boolean",
		infiniteScroll: "(boolean|object)",
		itemKey: "(function|null)",
		items: "array",
		labels: "object",
		moveEndIcon: "string",
		moveStartIcon: "string",
		overscan: "number",
		pagination: "(boolean|object)",
		pinEndIcon: "string",
		pinStartIcon: "string",
		printTitle: "(string|null)",
		rowHandleIcon: "string",
		rowHeight: "number",
		rowOrder: "boolean",
		rowSelection: "(boolean|object)",
		sanitize: "boolean",
		sanitizeFn: "(function|null)",
		slots: "object",
		sortAscendingIcon: "string",
		sortDescendingIcon: "string",
		sortNeutralIcon: "string",
		sorterVisibility: "(string|boolean)",
		sorting: "(boolean|object)",
		stateKey: "(string|null)",
		toolbar: "(boolean|object)",
		toolbarColumnsIcon: "string",
		toolbarExportIcon: "string",
		toolbarPrintIcon: "string",
		toolbarRedoIcon: "string",
		toolbarUndoIcon: "string",
		unpinIcon: "string",
		virtualization: "boolean"
	};
	/**
	* Class definition
	*/
	var DataGrid$1 = class DataGrid$1 extends BaseComponent {
		constructor(element, config) {
			super(element, config);
			this._unsubscribeState = null;
			this._virtualizer = null;
			this._toolbar = null;
			this._paginations = [];
			this._emptySlot = null;
			this._dataSource = null;
			this._loading = null;
			this._loadingMore = null;
			this._loadFailed = false;
			this._loadedItems = [];
			this._loadMorePending = false;
			this._pageResetPending = false;
			this._dataVersion = 0;
			this._liveRegion = null;
			this._selectionAnchorIndex = null;
			this._activeCell = null;
			this._containsFocus = false;
			this._editingCell = null;
			this._undoStack = [];
			this._redoStack = [];
			this._persistState = null;
			this._editor = null;
			this._editorPointerdownHandler = null;
			this._editorPopup = null;
			this._editorErrorElement = null;
			this._editorFocusPending = false;
			this._columnsByKey = /* @__PURE__ */ new Map();
			this._columnDrag = null;
			this._rowDrag = null;
			this._menu = null;
			this._tooltip = null;
			this._filterMenu = null;
			this._columnChooser = null;
			this._toolbarConfig = null;
			if (!this._element) return;
			this._labels = {
				...DEFAULT_LABELS,
				...this._config.labels
			};
			this._scheduler = createScheduler(() => this._update());
			this._table = this._createTable();
			this._liveRegion = document.createElement("div");
			this._liveRegion.classList.add("visually-hidden");
			this._liveRegion.setAttribute("aria-live", "polite");
			this._element.append(this._liveRegion);
			this._render();
			this._addEventListeners();
			this._tooltip = createTooltip(this._element);
			this._restorePersistedState();
			this._initDataSource();
		}
		get table() {
			return this._table;
		}
		static get Default() {
			return Default;
		}
		static get DefaultType() {
			return DefaultType;
		}
		static get NAME() {
			return NAME;
		}
		getSelectedItems() {
			if (typeof this._table.getSelectedRowModel !== "function") return [];
			return this._table.getSelectedRowModel().rows.map((row) => row.original);
		}
		print() {
			printGrid(this._table, this._printColumns(), { title: this._config.printTitle ?? void 0 });
		}
		getCsv(options) {
			return exportCsv(this._table, options);
		}
		downloadCsv(options) {
			downloadCsv(this._table, options);
		}
		getState() {
			const { state } = this._table.store;
			return {
				columnFilters: state.columnFilters ?? [],
				columnOrder: state.columnOrder ?? [],
				columnPinning: state.columnPinning ?? {
					start: [],
					end: []
				},
				columnSizing: state.columnSizing ?? {},
				columnVisibility: state.columnVisibility ?? {},
				globalFilter: state.globalFilter ?? "",
				pagination: state.pagination ?? {
					pageIndex: 0,
					pageSize: Number.MAX_SAFE_INTEGER
				},
				rowSelection: state.rowSelection ?? {},
				sorting: state.sorting ?? []
			};
		}
		restoreState(state) {
			batch(() => {
				if (state.columnFilters !== void 0 && typeof this._table.setColumnFilters === "function") this._table.setColumnFilters(state.columnFilters);
				if (state.columnOrder !== void 0 && typeof this._table.setColumnOrder === "function") this._table.setColumnOrder(state.columnOrder);
				if (state.columnPinning !== void 0 && typeof this._table.setColumnPinning === "function") this._table.setColumnPinning(state.columnPinning);
				if (state.columnSizing !== void 0 && typeof this._table.setColumnSizing === "function") this._table.setColumnSizing(state.columnSizing);
				if (state.columnVisibility !== void 0 && typeof this._table.setColumnVisibility === "function") this._table.setColumnVisibility(state.columnVisibility);
				if (state.globalFilter !== void 0 && typeof this._table.setGlobalFilter === "function") this._table.setGlobalFilter(state.globalFilter);
				if (state.pagination !== void 0 && typeof this._table.setPagination === "function") this._table.setPagination(state.pagination);
				if (state.rowSelection !== void 0 && typeof this._table.setRowSelection === "function") this._table.setRowSelection(state.rowSelection);
				if (state.sorting !== void 0 && typeof this._table.setSorting === "function") this._table.setSorting(state.sorting);
			});
			if (state.globalFilter !== void 0) {
				const input = this._element.querySelector(SELECTOR_GLOBAL_FILTER);
				if (input) input.value = state.globalFilter;
			}
			this._scheduler.schedule();
		}
		undo() {
			this._applyHistoryEntry(this._undoStack, this._redoStack, true);
		}
		redo() {
			this._applyHistoryEntry(this._redoStack, this._undoStack, false);
		}
		_applyHistoryEntry(from, to, inverted) {
			const entry = from.pop();
			if (!entry) return;
			const row = this._table.getCoreRowModel().rowsById[entry.rowId];
			if (!row) {
				this._updateHistoryButtons();
				return;
			}
			to.push(entry);
			EventHandler.trigger(this._element, EVENT_EDIT_COMMIT, {
				item: row.original,
				columnId: entry.columnId,
				value: inverted ? entry.previousValue : entry.value,
				previousValue: inverted ? entry.value : entry.previousValue
			});
			this._announce(inverted ? this._labels.undoneAnnouncement : this._labels.redoneAnnouncement);
			this._updateHistoryButtons();
		}
		setItems(items) {
			if (this._config.dataProvider) return;
			this._stopEditing({ commit: false });
			this._config.items = items;
			this._dataVersion++;
			this._virtualizer?.remeasure();
			this._table.setOptions((previous) => ({
				...previous,
				data: items
			}));
			this._scheduler.schedule();
		}
		update(config) {
			this._config = this._getConfig({
				...this._config,
				...config
			});
			this._labels = {
				...DEFAULT_LABELS,
				...this._config.labels
			};
			this._teardownUi();
			this._selectionAnchorIndex = null;
			this._loadFailed = false;
			this._pageResetPending = false;
			this._loadedItems = [];
			this._loadMorePending = false;
			this._dataVersion++;
			this._table = this._createTable();
			this._render();
			this._initDataSource();
		}
		dispose() {
			this._teardownUi();
			this._unsubscribeState?.();
			this._unsubscribeState = null;
			this._scheduler.dispose();
			this._tooltip?.dispose();
			this._tooltip = null;
			if (this._liveRegion) this._liveRegion.remove();
			this._element.classList.remove(CLASS_NAME_DATA_GRID);
			this._element.removeAttribute("data-coreui-sorter-visibility");
			super.dispose();
		}
		_configAfterMerge(config) {
			if (config.editing || config.cellSelection) config.cellNavigation = true;
			return config;
		}
		_createTable() {
			this._unsubscribeState?.();
			const table = createGridTable(this._config, () => this._element);
			this._unsubscribeState = subscribeToTableState(table, (previous, next) => {
				this._notifyStateChange(previous, next);
				this._scheduler.schedule();
			});
			return table;
		}
		_teardownUi() {
			this._stopEditing({ commit: false });
			if (this._dataSource) {
				this._dataSource.dispose();
				this._dataSource = null;
			}
			this._header?.dispose();
			if (this._menu) {
				this._menu.dispose();
				this._menu = null;
			}
			if (this._filterMenu) {
				this._filterMenu.dispose();
				this._filterMenu = null;
			}
			if (this._columnChooser) {
				this._columnChooser.dispose();
				this._columnChooser = null;
			}
			if (this._loading) {
				this._loading.element.remove();
				this._loading = null;
			}
			if (this._loadingMore) {
				this._loadingMore.element.remove();
				this._loadingMore = null;
			}
			if (this._columnDrag) {
				this._columnDrag.dispose();
				this._columnDrag = null;
			}
			if (this._rowDrag) {
				this._rowDrag.dispose();
				this._rowDrag = null;
			}
			if (this._virtualizer) {
				this._virtualizer.destroy();
				this._virtualizer = null;
			}
			if (this._toolbar) {
				this._toolbar.dispose?.();
				this._toolbar.element.remove();
				this._toolbar = null;
			}
			for (const pagination of this._paginations) {
				pagination.dispose?.();
				pagination.element.remove();
			}
			this._paginations = [];
			if (this._emptySlot) {
				this._emptySlot.dispose?.();
				this._emptySlot = null;
			}
			if (this._viewportElement) this._viewportElement.remove();
		}
		_slotContext() {
			return {
				table: this._table,
				labels: this._labels
			};
		}
		_isColumnSortable(column) {
			return Boolean(this._config.sorting) && column.sortable !== false;
		}
		_isColumnFilterable(column) {
			return this._config.columnFilters && column.filterable !== false;
		}
		_isColumnResizable(column) {
			return Boolean(this._config.columnSizing) && column.resizable !== false;
		}
		_sanitizeIcon(icon) {
			return this._config.sanitize ? sanitizeHtml(icon, SVGAllowlist, this._config.sanitizeFn) : icon;
		}
		_hasColumnMenu(column) {
			if (!this._config.columnMenu) return false;
			if (typeof this._config.columnMenu === "function") return this._getMenuActions(column.key).length > 0;
			return this._isColumnSortable(column) || Boolean(this._config.columnPinning) || Boolean(this._config.columnVisibility) && column.hideable !== false || Boolean(this._config.columnOrder) && column.movable !== false;
		}
		_renderToolbar() {
			const toolbarConfig = resolveToolbar(this._config);
			this._toolbarConfig = toolbarConfig;
			if (this._config.slots.toolbar) {
				this._toolbar = this._config.slots.toolbar(this._slotContext());
				this._element.append(this._toolbar.element);
				return;
			}
			if (!toolbarConfig.columns && !toolbarConfig.export && !toolbarConfig.print && !toolbarConfig.search && !toolbarConfig.history) return;
			this._toolbar = createToolbar({
				columns: toolbarConfig.columns,
				export: toolbarConfig.export,
				icons: {
					columns: this._sanitizeIcon(this._config.toolbarColumnsIcon),
					export: this._sanitizeIcon(this._config.toolbarExportIcon),
					print: this._sanitizeIcon(this._config.toolbarPrintIcon),
					redo: this._sanitizeIcon(this._config.toolbarRedoIcon),
					undo: this._sanitizeIcon(this._config.toolbarUndoIcon)
				},
				history: toolbarConfig.history,
				labels: this._labels,
				print: toolbarConfig.print,
				search: toolbarConfig.search
			});
			this._element.append(this._toolbar.element);
			if (toolbarConfig.columns) this._columnChooser = createColumnChooser({
				root: this._element,
				labels: this._labels,
				getColumns: () => this._chooserColumns(),
				toggleVisibility: (columnId, visible) => {
					this._table.getColumn(columnId)?.toggleVisibility(visible);
				},
				showAll: () => this._table.toggleAllColumnsVisible(true),
				reset: () => this._table.setColumnVisibility(this._table.initialState.columnVisibility ?? {})
			});
		}
		_render() {
			this._columnsByKey = new Map(this._config.columns.map((column) => [column.key, column]));
			this._activeCell = this._config.cellNavigation ? createActiveCellManager(() => this._scheduler.schedule()) : null;
			this._element.classList.add(CLASS_NAME_DATA_GRID);
			this._element.classList.toggle(CLASS_NAME_AUTO_ROW_HEIGHT, Boolean(this._config.autoRowHeight));
			this._element.classList.toggle(CLASS_NAME_RESIZABLE, Boolean(this._config.columnSizing));
			this._element.classList.toggle(CLASS_NAME_PINNED, Boolean(this._config.columnPinning));
			if (this._config.sorterVisibility) this._element.setAttribute("data-coreui-sorter-visibility", this._config.sorterVisibility);
			else this._element.removeAttribute("data-coreui-sorter-visibility");
			const { slots } = this._config;
			this._renderToolbar();
			if (slots.empty) this._emptySlot = slots.empty(this._slotContext());
			const selectionEnabled = Boolean(this._config.rowSelection);
			const selectionOptions = typeof this._config.rowSelection === "object" ? this._config.rowSelection : {};
			const paginationEnabled = Boolean(this._config.pagination) || Boolean(this._config.dataProvider) && !this._config.infiniteScroll;
			const paginationOptions = typeof this._config.pagination === "object" ? this._config.pagination : {};
			if (this._config.columnMenu) this._menu = createMenu({
				root: this._element,
				getActions: (columnKey) => this._getMenuActions(columnKey)
			});
			if (this._config.columnFilters) this._filterMenu = createFilterMenu({
				root: this._element,
				labels: this._labels,
				getColumn: (columnKey) => this._columnsByKey.get(columnKey) ?? null,
				getFacetedValues: (columnKey) => {
					const column = this._table.getColumn(columnKey);
					return typeof column?.getFacetedUniqueValues === "function" ? [...column.getFacetedUniqueValues().keys()] : [];
				},
				getFilterValue: (columnKey) => this._table.getColumn(columnKey)?.getFilterValue(),
				applyFilter: (columnKey, value) => {
					this._table.getColumn(columnKey)?.setFilterValue(value);
				}
			});
			this._header = createHeader({
				cellNavigation: this._config.cellNavigation,
				columns: this._config.columns,
				draggable: Boolean(this._config.columnOrder),
				filterRow: this._config.columnFilters && this._config.columns.some((column) => column.filter && this._isColumnFilterable(column)),
				hasMenu: (column) => this._hasColumnMenu(column),
				hasFilterMenu: (column) => Boolean(this._filterMenu) && this._isColumnFilterable(column) && !column.filter,
				icons: {
					columnMenu: this._sanitizeIcon(this._config.columnMenuIcon),
					filter: this._sanitizeIcon(this._config.filterIcon),
					sortAscending: this._sanitizeIcon(this._config.sortAscendingIcon),
					sortDescending: this._sanitizeIcon(this._config.sortDescendingIcon),
					sortNeutral: this._sanitizeIcon(this._config.sortNeutralIcon)
				},
				isFilterable: (column) => this._isColumnFilterable(column),
				isResizable: (column) => this._isColumnResizable(column),
				isSortable: (column) => this._isColumnSortable(column),
				labels: this._labels,
				resizable: Boolean(this._config.columnSizing),
				rowOrder: this._config.rowOrder,
				selection: selectionEnabled,
				selectAll: selectionEnabled && selectionOptions.selectAll !== false,
				table: this._table
			});
			this._body = createBody({
				autoRowHeight: this._config.autoRowHeight && this._config.virtualization,
				cellNavigation: this._config.cellNavigation,
				cellSelection: this._config.cellSelection,
				getDataVersion: () => this._dataVersion,
				getEditingCell: () => this._editingCell ? {
					rowId: this._editingCell.rowId,
					columnId: this._editingCell.columnId
				} : null,
				getEditorElement: () => this._editor && !this._editor.popup ? this._editor.element : null,
				getPinning: () => this._config.columnPinning ? this._getPinning() : null,
				getRowIndexOffset: () => this._rowIndexOffset(),
				getRows: () => this._table.getRowModel().rows,
				getVisibleColumns: () => this._visibleColumns(),
				getVirtualizer: () => this._virtualizer?.instance ?? null,
				headerRowCount: this._header.rowCount,
				labels: this._labels,
				renderEmpty: () => {
					if (this._emptySlot) return this._emptySlot.element;
					if (this._loadFailed) return this._labels.loadError;
					return typeof this._config.empty === "function" ? this._config.empty() : this._config.empty;
				},
				rowHandleIcon: this._sanitizeIcon(this._config.rowHandleIcon),
				rowOrder: this._config.rowOrder,
				sanitizeContent: (html) => this._config.sanitize ? sanitizeHtml(html, DefaultAllowlist, this._config.sanitizeFn) : html,
				selection: selectionEnabled
			});
			this._tableElement = document.createElement("table");
			this._tableElement.classList.add(CLASS_NAME_TABLE);
			if (this._config.cellNavigation) this._tableElement.setAttribute("role", "grid");
			this._tableElement.append(this._header.element, this._body.element);
			this._viewportElement = document.createElement("div");
			this._viewportElement.classList.add(CLASS_NAME_VIEWPORT);
			if (this._config.cellNavigation) this._viewportElement.tabIndex = -1;
			this._viewportElement.append(this._tableElement);
			if (this._config.dataProvider) {
				this._loading = createLoading(this._labels);
				this._viewportElement.append(this._loading.element);
			}
			if (this._config.infiniteScroll) {
				this._loadingMore = createLoading(this._labels, CLASS_NAME_LOADING_MORE);
				this._viewportElement.append(this._loadingMore.element);
			}
			this._element.append(this._viewportElement);
			if (paginationEnabled) {
				const position = paginationOptions.position ?? "bottom";
				const paginationSlot = slots.pagination;
				const createInstance = () => {
					if (paginationSlot) {
						const slot = paginationSlot(this._slotContext());
						return {
							element: slot.element,
							refresh: () => slot.update?.(),
							dispose: () => slot.dispose?.()
						};
					}
					const instance = createPagination({
						info: paginationOptions.info ?? true,
						labels: this._labels,
						pageSizeOptions: paginationOptions.pageSizeOptions ?? DEFAULT_PAGE_SIZE_OPTIONS
					});
					return {
						element: instance.element,
						refresh: () => instance.update(this._paginationState()),
						dispose: void 0
					};
				};
				if (position === "top" || position === "both") {
					const pagination = createInstance();
					if (!paginationSlot) pagination.element.classList.add(CLASS_NAME_PAGINATION_TOP);
					this._viewportElement.before(pagination.element);
					this._paginations.push(pagination);
				}
				if (position === "bottom" || position === "both") {
					const pagination = createInstance();
					this._element.append(pagination.element);
					this._paginations.push(pagination);
				}
			} else if (this._config.virtualization) this._virtualizer = createGridVirtualizer({
				autoRowHeight: this._config.autoRowHeight,
				count: this._table.getRowModel().rows.length,
				getScrollElement: () => this._viewportElement,
				onChange: () => this._scheduler.schedule(),
				overscan: this._config.overscan,
				rowHeight: this._config.rowHeight
			});
			this._initColumnDrag();
			this._initRowDrag();
			this._update();
		}
		_addEventListeners() {
			EventHandler.on(this._element, EVENT_KEYDOWN, (event) => {
				this._onCellNavigationKeydown(event);
			});
			EventHandler.on(this._element, EVENT_FOCUSIN, (event) => {
				this._containsFocus = true;
				this._onCellFocusIn(event);
			});
			EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => {
				const related = event.relatedTarget;
				if (!related || !this._element.contains(related)) this._containsFocus = false;
			});
			EventHandler.on(this._element, EVENT_MOUSEDOWN, SELECTOR_BODY_CELL, (event) => {
				this._tableCellFromTarget(event)?.getSelectionStartHandler()(event);
			});
			EventHandler.on(this._element, EVENT_MOUSEENTER, SELECTOR_BODY_CELL, (event) => {
				this._tableCellFromTarget(event)?.getSelectionExtendHandler()(event);
			});
			EventHandler.on(this._element, EVENT_DBLCLICK, (event) => {
				if (!this._config.editing) return;
				const found = this._navigableCellFromTarget(event.target);
				if (found && found.cell.rowIndex >= 0) {
					this._activeCell?.set(found.cell);
					this._startEditing(found.cell);
				}
			});
			EventHandler.on(this._element, EVENT_CLICK, SELECTOR_SORT_BUTTON, (event) => {
				this._toggleColumnSorting(event);
			});
			const applyColumnFilter = debounce((key, value) => {
				if (this._table) this._table.getColumn(key)?.setFilterValue(value === "" ? void 0 : value);
			}, FILTER_DEBOUNCE_MS);
			EventHandler.on(this._element, EVENT_INPUT, SELECTOR_COLUMN_FILTER, (event) => {
				const input = event.delegateTarget ?? event.target;
				applyColumnFilter(input.dataset.coreuiColumnFilter, input.value);
			});
			const applyGlobalFilter = debounce((value) => {
				if (this._table) this._table.setGlobalFilter(value === "" ? void 0 : value);
			}, FILTER_DEBOUNCE_MS);
			EventHandler.on(this._element, EVENT_INPUT, SELECTOR_GLOBAL_FILTER, (event) => {
				const input = event.delegateTarget ?? event.target;
				applyGlobalFilter(input.value);
			});
			EventHandler.on(this._element, EVENT_CLICK, SELECTOR_MENU_BUTTON, (event) => {
				const button = event.delegateTarget ?? event.target;
				this._menu?.toggle(button, button.dataset.coreuiMenu);
			});
			EventHandler.on(this._element, EVENT_CLICK, SELECTOR_FILTER_BUTTON, (event) => {
				const button = event.delegateTarget ?? event.target;
				this._filterMenu?.toggle(button, button.dataset.coreuiFilter);
			});
			EventHandler.on(this._element, EVENT_CLICK, SELECTOR_TOOLBAR_COLUMNS, (event) => {
				const button = event.delegateTarget ?? event.target;
				this._columnChooser?.toggle(button);
			});
			EventHandler.on(this._element, EVENT_CLICK, SELECTOR_TOOLBAR_EXPORT, () => {
				const { exporter, ...exportOptions } = this._toolbarConfig?.exportOptions ?? {};
				(exporter ?? downloadCsv)(this._table, {
					scope: "filtered",
					...exportOptions
				});
			});
			EventHandler.on(this._element, EVENT_CLICK, SELECTOR_TOOLBAR_PRINT, () => {
				this.print();
			});
			EventHandler.on(this._element, EVENT_CLICK, SELECTOR_TOOLBAR_UNDO, () => {
				this.undo();
			});
			EventHandler.on(this._element, EVENT_CLICK, SELECTOR_TOOLBAR_REDO, () => {
				this.redo();
			});
			EventHandler.on(this._element, EVENT_MOUSEDOWN, SELECTOR_RESIZER, (event) => {
				this._startColumnResize(event);
			});
			EventHandler.on(this._element, EVENT_TOUCHSTART, SELECTOR_RESIZER, (event) => {
				this._startColumnResize(event);
			});
			EventHandler.on(this._element, EVENT_CLICK, SELECTOR_ROW_SELECT, (event) => {
				this._toggleRowSelection(event);
			});
			EventHandler.on(this._element, EVENT_CHANGE, SELECTOR_SELECT_ALL, (event) => {
				const input = event.delegateTarget ?? event.target;
				this._table.toggleAllRowsSelected(input.checked);
			});
			EventHandler.on(this._element, EVENT_CLICK, SELECTOR_PAGE, (event) => {
				const page = (event.delegateTarget ?? event.target).dataset.coreuiPage;
				if (page === "first") {
					this._table.firstPage();
					return;
				}
				if (page === "prev") {
					this._table.previousPage();
					return;
				}
				if (page === "next") {
					this._table.nextPage();
					return;
				}
				if (page === "last") {
					this._table.lastPage();
					return;
				}
				this._table.setPageIndex(Number(page));
			});
			EventHandler.on(this._element, EVENT_CHANGE, SELECTOR_PAGE_SIZE, (event) => {
				const select = event.delegateTarget ?? event.target;
				this._table.setPageSize(Number(select.value));
			});
		}
		_toggleColumnSorting(event) {
			const key = (event.delegateTarget ?? event.target).closest("th")?.dataset.coreuiColumn;
			if (!key) return;
			this._table.getColumn(key)?.getToggleSortingHandler()?.(event);
		}
		_navigableCellFromTarget(target) {
			const cellElement = target.closest("td, th");
			if (!cellElement || !this._tableElement.contains(cellElement)) return null;
			const columnId = cellElement.dataset.coreuiColumn;
			if (!columnId) return null;
			const rowElement = cellElement.closest("tr");
			if (rowElement.parentElement === this._body.element) {
				const index = rowElement.dataset.coreuiIndex;
				if (index === void 0) return null;
				return {
					cellElement,
					cell: {
						rowIndex: Number(index),
						columnId
					}
				};
			}
			if (rowElement === this._header.element.firstElementChild) return {
				cellElement,
				cell: {
					rowIndex: -1,
					columnId
				}
			};
			return null;
		}
		_onCellFocusIn(event) {
			if (!this._activeCell) return;
			const found = this._navigableCellFromTarget(event.target);
			if (found) this._activeCell.set(found.cell);
		}
		_onCellNavigationKeydown(event) {
			if (!this._activeCell) return;
			const target = event.target;
			if (this._config.history && (event.ctrlKey || event.metaKey) && !this._editingCell && !target.matches("input, textarea, select")) {
				const key = event.key.toLowerCase();
				if (key === "z" && !event.shiftKey) {
					event.preventDefault();
					this.undo();
					return;
				}
				if (key === "z" && event.shiftKey || key === "y") {
					event.preventDefault();
					this.redo();
					return;
				}
			}
			if (this._editingCell && this._editScopeContains(target)) {
				if (event.key === "Enter") {
					if (!event.defaultPrevented) {
						event.preventDefault();
						this._stopEditing({ commit: true });
					}
					return;
				}
				if (event.key === "Escape") {
					if (!event.defaultPrevented) this._cancelEdit();
					return;
				}
				if (event.key === "Tab") {
					event.preventDefault();
					this._moveEditing(event.shiftKey ? -1 : 1);
					return;
				}
				return;
			}
			if (target === this._viewportElement) {
				const active = this._activeCell.get();
				if (active && event.key !== "Tab") {
					event.preventDefault();
					this._setActiveCell(active);
				}
				return;
			}
			const found = this._navigableCellFromTarget(target);
			if (!found) return;
			if (target !== found.cellElement) {
				if (event.key === "Escape") found.cellElement.focus({ preventScroll: true });
				return;
			}
			if (event.key === "Enter" || event.key === "F2") {
				event.preventDefault();
				const config = this._columnsByKey.get(found.cell.columnId);
				if (found.cell.rowIndex === -1) {
					if (event.key === "Enter" && config && this._isColumnSortable(config)) this._table.getColumn(found.cell.columnId)?.getToggleSortingHandler()?.(event);
					return;
				}
				if (config && this._isColumnEditable(config)) {
					this._startEditing(found.cell);
					return;
				}
				if (event.key === "Enter") this._descendIntoCell(found.cellElement);
				return;
			}
			if (event.key === " ") {
				if (this._config.rowSelection && found.cell.rowIndex >= 0) {
					event.preventDefault();
					this._table.getRowModel().rows[found.cell.rowIndex]?.toggleSelected();
					this._selectionAnchorIndex = found.cell.rowIndex;
				}
				return;
			}
			if (this._config.cellSelection && (event.ctrlKey || event.metaKey) && found.cell.rowIndex >= 0) {
				const key = event.key.toLowerCase();
				if (key === "a") {
					event.preventDefault();
					this._table.selectAllCells();
					this._scheduler.schedule();
					return;
				}
				if (key === "c") {
					event.preventDefault();
					this._copyCellSelection();
					return;
				}
			}
			const result = resolveNavigation(event.key, event.ctrlKey || event.metaKey, found.cell, this._activeCellContext());
			if (!result) return;
			event.preventDefault();
			if (this._config.cellSelection && found.cell.rowIndex >= 0 && result.cell.rowIndex >= 0) {
				const direction = CELL_SELECTION_DIRECTIONS[isElementRTL(this._element) ? INVERTED_ARROWS[event.key] ?? event.key : event.key];
				if (event.shiftKey && direction) {
					this._table.extendCellSelection(direction);
					this._scheduler.schedule();
					return;
				}
			}
			if (result.pageDelta === 1 && this._table.getCanNextPage()) this._table.nextPage();
			else if (result.pageDelta === -1 && this._table.getCanPreviousPage()) this._table.previousPage();
			this._setActiveCell(result.cell);
		}
		_tableCellFromTarget(event) {
			if (!this._config.cellSelection) return null;
			const element = event.delegateTarget ?? event.target;
			const columnId = element.dataset.coreuiColumn;
			const rowIndex = Number(element.closest("tr")?.dataset.coreuiIndex ?? -1);
			if (!columnId || rowIndex < 0) return null;
			return this._table.getRowModel().rows[rowIndex]?.getAllCells().find((cell) => cell.column.id === columnId) ?? null;
		}
		_descendIntoCell(cellElement) {
			cellElement.querySelector(FOCUSABLE_SELECTOR)?.focus({ preventScroll: true });
		}
		_isColumnEditable(column) {
			if (!this._config.editing) return false;
			return Boolean(column.editor) || column.editable === true || typeof column.editable === "object";
		}
		_startEditing(cell) {
			const config = this._columnsByKey.get(cell.columnId);
			if (!config || !this._isColumnEditable(config)) return;
			this._stopEditing({
				commit: true,
				force: true
			});
			const row = this._table.getRowModel().rows[cell.rowIndex];
			if (!row) return;
			const value = row.getValue(cell.columnId);
			const context = {
				item: row.original,
				column: config,
				value,
				commit: (committed) => this._commitEdit(committed),
				cancel: () => this._cancelEdit(),
				labels: this._labels
			};
			const editable = typeof config.editable === "object" ? config.editable : {};
			const editor = config.editor ? config.editor(context) : createBuiltInEditor(editable, context);
			this._editingCell = {
				rowId: row.id,
				columnId: cell.columnId,
				rowIndex: cell.rowIndex,
				item: row.original,
				previousValue: value
			};
			this._editor = editor;
			this._editorFocusPending = true;
			EventHandler.trigger(this._element, EVENT_EDIT_START, {
				item: row.original,
				columnId: cell.columnId
			});
			if (editor.popup) this._mountEditorPopup(cell);
			this._editorPointerdownHandler = (domEvent) => {
				if (!this._editScopeContains(domEvent.target)) this._stopEditing({ commit: true });
			};
			EventHandler.on(document, EVENT_POINTERDOWN, this._editorPointerdownHandler);
			EventHandler.on(editor.element, EVENT_FOCUSOUT, (domEvent) => {
				const related = domEvent.relatedTarget;
				if (related && !this._editScopeContains(related)) this._stopEditing({ commit: true });
			});
			this._scheduler.schedule();
		}
		_editScopeContains(target) {
			if (!target || !this._editingCell || !this._editor) return false;
			if (this._editor.contains?.(target) || this._editor.element.contains(target) || this._editorPopup?.contains(target)) return true;
			const cellElement = this._cellElementFor({
				rowIndex: this._editingCell.rowIndex,
				columnId: this._editingCell.columnId
			});
			return Boolean(cellElement?.contains(target));
		}
		_mountEditorPopup(cell) {
			const cellElement = this._cellElementFor(cell);
			const popup = document.createElement("div");
			popup.classList.add(CLASS_NAME_EDITOR_POPUP);
			if (cellElement) {
				const rootRect = this._element.getBoundingClientRect();
				const cellRect = cellElement.getBoundingClientRect();
				popup.style.top = `${cellRect.top - rootRect.top}px`;
				popup.style.left = `${cellRect.left - rootRect.left}px`;
				popup.style.minWidth = `${cellRect.width}px`;
			}
			popup.append(this._editor.element);
			this._element.append(popup);
			this._editorPopup = popup;
		}
		_commitEdit(value) {
			const editing = this._editingCell;
			if (!editing) return;
			const validate = this._columnsByKey.get(editing.columnId)?.editValidate;
			if (validate) {
				const result = validate(value, editing.item);
				if (result !== true) {
					this._showEditorInvalid(typeof result === "string" ? result : "");
					return;
				}
			}
			this._teardownEditor();
			if (this._config.history) {
				this._undoStack.push({
					rowId: editing.rowId,
					columnId: editing.columnId,
					value,
					previousValue: editing.previousValue
				});
				if (this._undoStack.length > HISTORY_LIMIT) this._undoStack.shift();
				this._redoStack = [];
				this._updateHistoryButtons();
			}
			EventHandler.trigger(this._element, EVENT_EDIT_COMMIT, {
				item: editing.item,
				columnId: editing.columnId,
				value,
				previousValue: editing.previousValue
			});
			this._activeCell?.set({
				rowIndex: editing.rowIndex,
				columnId: editing.columnId
			}, { focus: true });
		}
		_cancelEdit() {
			const editing = this._editingCell;
			if (!editing) return;
			this._teardownEditor();
			EventHandler.trigger(this._element, EVENT_EDIT_CANCEL, {
				item: editing.item,
				columnId: editing.columnId
			});
			this._activeCell?.set({
				rowIndex: editing.rowIndex,
				columnId: editing.columnId
			}, { focus: true });
		}
		_stopEditing(options) {
			if (!this._editingCell) return;
			if (options.commit && this._editor?.getValue) {
				this._commitEdit(this._editor.getValue());
				if (this._editingCell && options.force) this._cancelEdit();
				return;
			}
			this._cancelEdit();
		}
		_showEditorInvalid(message) {
			const editor = this._editor;
			if (!editor) return;
			const input = editor.element.matches("input, select, textarea") ? editor.element : editor.element.querySelector("input, select, textarea");
			if (!input) return;
			if (!this._editorErrorElement) {
				this._editorErrorElement = document.createElement("div");
				this._editorErrorElement.classList.add("visually-hidden");
				this._editorErrorElement.id = `data-grid-editor-error-${++editorErrorCount}`;
				this._element.append(this._editorErrorElement);
			}
			this._editorErrorElement.textContent = message;
			input.classList.add("is-invalid");
			input.setAttribute("aria-invalid", "true");
			input.setAttribute("aria-errormessage", this._editorErrorElement.id);
		}
		_moveEditing(direction) {
			const editing = this._editingCell;
			if (!editing) return;
			const columns = this._visibleColumns();
			const currentIndex = columns.findIndex((column) => column.key === editing.columnId);
			let next = null;
			for (let index = currentIndex + direction; index >= 0 && index < columns.length; index += direction) if (this._isColumnEditable(columns[index])) {
				next = columns[index];
				break;
			}
			this._stopEditing({ commit: true });
			if (this._editingCell) return;
			if (next) {
				const cell = {
					rowIndex: editing.rowIndex,
					columnId: next.key
				};
				this._activeCell?.set(cell, { focus: true });
				this._startEditing(cell);
			}
		}
		_teardownEditor() {
			if (this._editorPointerdownHandler) {
				EventHandler.off(document, EVENT_POINTERDOWN, this._editorPointerdownHandler);
				this._editorPointerdownHandler = null;
			}
			if (this._editor) {
				EventHandler.off(this._editor.element, EVENT_FOCUSOUT);
				this._editor.dispose?.();
			}
			if (this._editorPopup) {
				this._editorPopup.remove();
				this._editorPopup = null;
			}
			if (this._editorErrorElement) {
				this._editorErrorElement.remove();
				this._editorErrorElement = null;
			}
			this._editor = null;
			this._editingCell = null;
			this._editorFocusPending = false;
			this._scheduler.schedule();
		}
		_setActiveCell(cell) {
			this._activeCell?.set(cell, { focus: true });
			if (this._config.cellSelection && cell.rowIndex >= 0) {
				const row = this._table.getRowModel().rows[cell.rowIndex];
				if (row) this._table.setFocusedCell(row.id, cell.columnId);
			}
			if (this._virtualizer && cell.rowIndex >= 0) this._virtualizer.instance.scrollToIndex(cell.rowIndex);
		}
		_printColumns() {
			return this._visibleColumns().map((column) => ({
				id: column.key,
				label: column.label ?? column.key,
				formatter: column.formatter
			}));
		}
		_clipboardColumns() {
			return this._visibleColumns().map((column) => ({
				id: column.key,
				formatter: column.formatter
			}));
		}
		_copyCellSelection() {
			copyCellSelection(this._table, this._clipboardColumns()).then((text) => {
				if (text !== "") EventHandler.trigger(this._element, EVENT_CELL_COPY, { text });
			}, () => {});
		}
		_activeCellContext() {
			const rowCount = this._table.getRowModel().rows.length;
			const paginated = Boolean(this._config.pagination) || Boolean(this._config.dataProvider);
			const viewportRows = Math.floor((this._viewportElement?.clientHeight ?? 0) / this._config.rowHeight);
			return {
				columnIds: this._visibleLeafColumns().map((column) => column.id),
				rowCount,
				pageStep: paginated ? this._table.store.state.pagination.pageSize : Math.max(1, viewportRows || rowCount),
				paginated,
				rtl: isElementRTL(this._element)
			};
		}
		_cellElementFor(cell) {
			if (cell.rowIndex === -1) return this._header.element.querySelector(`tr:first-child th[data-coreui-column="${cell.columnId}"]`);
			return this._body.element.querySelector(`tr[data-coreui-index="${cell.rowIndex}"]`)?.querySelector(`td[data-coreui-column="${cell.columnId}"]`) ?? null;
		}
		_applyCellNavigation() {
			if (!this._activeCell) return;
			const context = this._activeCellContext();
			this._activeCell.clamp(context);
			this._tableElement.setAttribute("aria-colcount", String(context.columnIds.length + (this._config.rowSelection ? 1 : 0)));
			const active = this._activeCell.get();
			const tabbable = active ?? (context.columnIds.length > 0 ? {
				rowIndex: context.rowCount > 0 ? 0 : -1,
				columnId: context.columnIds[0]
			} : null);
			for (const cellElement of this._header.element.querySelectorAll("tr:first-child th[data-coreui-column]")) applyTabIndex(cellElement, tabbable !== null && tabbable.rowIndex === -1 && cellElement.dataset.coreuiColumn === tabbable.columnId);
			for (const rowElement of this._body.element.querySelectorAll("tr[data-coreui-index]")) {
				const isActiveRow = tabbable !== null && rowElement.dataset.coreuiIndex === String(tabbable.rowIndex);
				for (const cellElement of rowElement.querySelectorAll("td[data-coreui-column]")) applyTabIndex(cellElement, isActiveRow && cellElement.dataset.coreuiColumn === tabbable.columnId);
			}
			if (!active) return;
			const activeElement = this._cellElementFor(active);
			if (activeElement) {
				if (this._activeCell.consumeFocusRequest()) activeElement.focus({ preventScroll: true });
				return;
			}
			if (this._containsFocus && !this._element.contains(document.activeElement)) this._viewportElement.focus({ preventScroll: true });
		}
		_getMenuActions(columnKey) {
			const column = this._table.getColumn(columnKey);
			const config = this._columnsByKey.get(columnKey);
			if (!column || !config) return [];
			const actions = [];
			if (this._isColumnSortable(config)) {
				const sorted = column.getIsSorted();
				actions.push({
					key: "sort-asc",
					label: this._labels.sortAscending,
					disabled: sorted === "asc",
					group: "sorting",
					icon: this._sanitizeIcon(this._config.sortAscendingIcon),
					run: () => column.toggleSorting(false)
				}, {
					key: "sort-desc",
					label: this._labels.sortDescending,
					disabled: sorted === "desc",
					group: "sorting",
					icon: this._sanitizeIcon(this._config.sortDescendingIcon),
					run: () => column.toggleSorting(true)
				});
				if (sorted) actions.push({
					key: "clear-sort",
					label: this._labels.clearSort,
					group: "sorting",
					icon: this._sanitizeIcon(this._config.sortNeutralIcon),
					run: () => column.clearSorting()
				});
			}
			if (this._config.columnPinning) {
				const pinned = column.getIsPinned();
				if (pinned !== "start") actions.push({
					key: "pin-start",
					label: this._labels.pinStart,
					group: "pinning",
					icon: this._sanitizeIcon(this._config.pinStartIcon),
					run: () => column.pin("start")
				});
				if (pinned !== "end") actions.push({
					key: "pin-end",
					label: this._labels.pinEnd,
					group: "pinning",
					icon: this._sanitizeIcon(this._config.pinEndIcon),
					run: () => column.pin("end")
				});
				if (pinned) actions.push({
					key: "unpin",
					label: this._labels.unpin,
					group: "pinning",
					icon: this._sanitizeIcon(this._config.unpinIcon),
					run: () => column.pin(false)
				});
			}
			if (this._config.columnOrder && config.movable !== false) {
				const region = this._visibleLeafColumns().filter((item) => this._pinnedRegion(item) === this._pinnedRegion(column));
				const index = region.findIndex((item) => item.id === columnKey);
				actions.push({
					key: "move-start",
					label: this._labels.moveStart,
					disabled: index <= 0,
					group: "ordering",
					icon: this._sanitizeIcon(this._config.moveStartIcon),
					run: () => this._moveColumn(columnKey, -1)
				}, {
					key: "move-end",
					label: this._labels.moveEnd,
					disabled: index === region.length - 1,
					group: "ordering",
					icon: this._sanitizeIcon(this._config.moveEndIcon),
					run: () => this._moveColumn(columnKey, 1)
				});
			}
			if (this._config.columnVisibility && column.getCanHide()) actions.push({
				key: "hide",
				label: this._labels.hideColumn,
				group: "visibility",
				icon: this._sanitizeIcon(this._config.hideColumnIcon),
				run: () => column.toggleVisibility(false)
			});
			const builder = typeof this._config.columnMenu === "function" ? this._config.columnMenu : null;
			return (builder ? builder({
				column: config,
				defaultActions: actions
			}) : actions).map((action) => action.icon ? {
				...action,
				icon: this._sanitizeIcon(action.icon)
			} : action);
		}
		_orderedLeafIds() {
			const allIds = this._table.getAllLeafColumns().map((column) => column.id);
			const order = this._table.store.state.columnOrder ?? [];
			if (order.length === 0) return allIds;
			const known = new Set(allIds);
			const ordered = order.filter((id) => known.has(id));
			const seen = new Set(ordered);
			return [...ordered, ...allIds.filter((id) => !seen.has(id))];
		}
		_moveColumn(columnKey, direction) {
			const column = this._table.getColumn(columnKey);
			if (!column) return;
			const region = this._pinnedRegion(column);
			const ids = this._orderedLeafIds();
			const regionIds = this._visibleLeafColumns().filter((item) => this._pinnedRegion(item) === region).map((item) => item.id);
			const neighbor = regionIds[regionIds.indexOf(columnKey) + direction];
			if (!neighbor) return;
			const from = ids.indexOf(columnKey);
			const to = ids.indexOf(neighbor);
			ids[from] = neighbor;
			ids[to] = columnKey;
			this._table.setColumnOrder(ids);
		}
		_initColumnDrag() {
			if (!this._config.columnOrder) return;
			this._columnDrag = createColumnDragController({
				root: this._element,
				getScrollElement: () => this._viewportElement,
				canDrop: (sourceKey, targetKey) => {
					const source = this._table.getColumn(sourceKey);
					const target = this._table.getColumn(targetKey);
					return Boolean(source && target) && sourceKey !== targetKey && this._pinnedRegion(source) === this._pinnedRegion(target);
				},
				onReorder: (sourceKey, targetKey, after) => this._moveColumnTo(sourceKey, targetKey, after)
			});
		}
		_rowIndexOffset() {
			if (this._config.infiniteScroll || !this._config.pagination && !this._config.dataProvider) return 0;
			const { pageIndex, pageSize } = this._table.store.state.pagination;
			return pageIndex * pageSize;
		}
		_initRowDrag() {
			if (!this._config.rowOrder) return;
			this._rowDrag = createRowDragController({
				root: this._element,
				getScrollElement: () => this._viewportElement,
				onReorder: (sourceIndex, targetIndex, after) => this._moveRowTo(sourceIndex, targetIndex, after)
			});
		}
		_moveRowTo(sourceIndex, targetIndex, after) {
			const offset = this._rowIndexOffset();
			const items = [...this._config.items];
			const from = offset + sourceIndex;
			const [item] = items.splice(from, 1);
			if (item === void 0) return;
			const target = offset + targetIndex;
			const to = target > from ? target - 1 : target;
			const newIndex = after ? to + 1 : to;
			items.splice(newIndex, 0, item);
			EventHandler.trigger(this._element, EVENT_ROW_ORDER_CHANGE, {
				items,
				item,
				oldIndex: from,
				newIndex
			});
		}
		_moveColumnTo(sourceKey, targetKey, after) {
			const ids = this._orderedLeafIds();
			const from = ids.indexOf(sourceKey);
			if (from === -1) return;
			ids.splice(from, 1);
			const to = ids.indexOf(targetKey);
			if (to === -1) return;
			ids.splice(after ? to + 1 : to, 0, sourceKey);
			this._table.setColumnOrder(ids);
		}
		_startColumnResize(event) {
			const key = (event.delegateTarget ?? event.target).closest("th")?.dataset.coreuiColumn;
			if (!key) return;
			if (event.type === "mousedown") event.preventDefault();
			syncResizeDirection(this._table, this._element);
			(this._table.getHeaderGroups()[0]?.headers.find((item) => item.column.id === key))?.getResizeHandler()(event);
		}
		_toggleRowSelection(event) {
			const input = event.delegateTarget ?? event.target;
			const rowElement = input.closest("tr");
			if (!rowElement) return;
			const index = Number(rowElement.dataset.coreuiIndex);
			const { rows } = this._table.getRowModel();
			const selected = input.checked;
			if (event.shiftKey && this._selectionAnchorIndex !== null) {
				const start = Math.min(this._selectionAnchorIndex, index);
				const end = Math.max(this._selectionAnchorIndex, index);
				this._table.setRowSelection((previous) => {
					const next = { ...previous };
					for (const row of rows.slice(start, end + 1)) if (selected) next[row.id] = true;
					else delete next[row.id];
					return next;
				});
			} else rows[index]?.toggleSelected(selected);
			this._selectionAnchorIndex = index;
		}
		_initDataSource() {
			const { dataProvider } = this._config;
			if (!dataProvider) return;
			this._dataSource = createDataSource({
				provider: (request) => dataProvider(request),
				getRequest: () => {
					const { state } = this._table.store;
					return {
						columnFilters: state.columnFilters,
						globalFilter: state.globalFilter ?? "",
						pagination: state.pagination,
						sorting: state.sorting
					};
				},
				onLoad: (response, request) => {
					this._stopEditing({ commit: false });
					this._loadFailed = false;
					this._loadMorePending = false;
					this._dataVersion++;
					let { items } = response;
					if (this._config.infiniteScroll) {
						const firstPage = request.pagination.pageIndex === 0;
						items = firstPage ? response.items : [...this._loadedItems, ...response.items];
						this._loadedItems = items;
						if (firstPage) {
							this._viewportElement.scrollTop = 0;
							this._virtualizer?.remeasure();
						}
					}
					this._table.setOptions((previous) => ({
						...previous,
						data: items,
						rowCount: response.totalRows
					}));
					EventHandler.trigger(this._element, EVENT_DATA_LOAD, {
						items: response.items,
						totalRows: response.totalRows
					});
					this._announceResults(response.totalRows);
					this._scheduler.schedule();
				},
				onError: (error) => {
					this._stopEditing({ commit: false });
					this._loadFailed = true;
					this._loadMorePending = false;
					this._loadedItems = [];
					this._dataVersion++;
					this._table.setOptions((previous) => ({
						...previous,
						data: [],
						rowCount: 0
					}));
					EventHandler.trigger(this._element, EVENT_DATA_ERROR, { error });
					this._scheduler.schedule();
				},
				onLoadingChange: (loading) => {
					const appending = Boolean(this._config.infiniteScroll) && this._loadedItems.length > 0;
					this._loading?.setVisible(loading && !appending);
					this._loadingMore?.setVisible(loading && appending);
					this._viewportElement.setAttribute("aria-busy", String(loading));
				}
			});
			this._dataSource.load();
		}
		_maybeLoadMore() {
			if (!this._config.infiniteScroll || !this._dataSource || !this._virtualizer || this._loadMorePending) return;
			const loaded = this._table.getRowModel().rows.length;
			if (loaded === 0 || loaded >= this._getTotalRows()) return;
			const threshold = (typeof this._config.infiniteScroll === "object" ? this._config.infiniteScroll : {}).threshold ?? this._config.overscan;
			const rendered = this._virtualizer.instance.getVirtualItems();
			const last = rendered[rendered.length - 1];
			if (!last || last.index < loaded - 1 - threshold) return;
			this._loadMorePending = true;
			this._table.setPageIndex(this._table.store.state.pagination.pageIndex + 1);
		}
		_visibleLeafColumns() {
			if (typeof this._table.getCenterVisibleLeafColumns === "function") return [
				...this._table.getStartVisibleLeafColumns(),
				...this._table.getCenterVisibleLeafColumns(),
				...this._table.getEndVisibleLeafColumns()
			];
			if (typeof this._table.getVisibleLeafColumns === "function") return this._table.getVisibleLeafColumns();
			return this._table.getAllLeafColumns();
		}
		_pinnedRegion(column) {
			return typeof column.getIsPinned === "function" ? column.getIsPinned() : false;
		}
		_chooserColumns() {
			const columns = [];
			for (const id of this._orderedLeafIds()) {
				const column = this._table.getColumn(id);
				const config = this._columnsByKey.get(id);
				if (!column || !config) continue;
				columns.push({
					id,
					label: config.label ?? config.key,
					canHide: column.getCanHide(),
					visible: column.getIsVisible()
				});
			}
			return columns;
		}
		_visibleColumns() {
			const columns = [];
			for (const column of this._visibleLeafColumns()) {
				const config = this._columnsByKey.get(column.id);
				if (config) columns.push(config);
			}
			return columns;
		}
		_getColumnSizes() {
			const sizes = {};
			for (const header of this._table.getHeaderGroups()[0]?.headers ?? []) sizes[header.column.id] = header.getSize();
			return sizes;
		}
		_getFilteredColumns() {
			return this._table.store.state.columnFilters.map((filter) => filter.id);
		}
		_getPinning() {
			const leftColumns = this._table.getStartLeafColumns().filter((column) => column.getIsVisible());
			const rightColumns = this._table.getEndLeafColumns().filter((column) => column.getIsVisible());
			const selectPinned = Boolean(this._config.rowSelection) && leftColumns.length > 0;
			const columns = {};
			for (const [index, column] of leftColumns.entries()) columns[column.id] = {
				side: "start",
				offset: column.getStart("start"),
				edge: index === leftColumns.length - 1,
				afterSelect: selectPinned
			};
			for (const [index, column] of rightColumns.entries()) columns[column.id] = {
				side: "end",
				offset: column.getAfter("end"),
				edge: index === 0,
				afterSelect: false
			};
			return {
				columns,
				select: selectPinned ? {
					side: "start",
					offset: 0,
					edge: false,
					afterSelect: false
				} : null
			};
		}
		_storageKey() {
			return this._config.stateKey ? `${STATE_STORAGE_PREFIX}${this._config.stateKey}` : null;
		}
		_restorePersistedState() {
			const key = this._storageKey();
			if (!key) return;
			let state = null;
			try {
				const raw = window.localStorage.getItem(key);
				state = raw ? JSON.parse(raw) : null;
			} catch {
				return;
			}
			if (!state) return;
			this.restoreState(state);
		}
		_updateHistoryButtons() {
			const undoButton = this._element.querySelector(SELECTOR_TOOLBAR_UNDO);
			if (undoButton) undoButton.disabled = this._undoStack.length === 0;
			const redoButton = this._element.querySelector(SELECTOR_TOOLBAR_REDO);
			if (redoButton) redoButton.disabled = this._redoStack.length === 0;
		}
		_announceResults(count) {
			this._announce(interpolate(this._labels.resultsAnnouncement, { count }));
		}
		_announce(message) {
			if (this._liveRegion) this._liveRegion.textContent = message;
		}
		_getTotalRows() {
			if (this._config.dataProvider) return this._table.options.rowCount ?? 0;
			if (typeof this._table.getFilteredRowModel !== "function") return this._table.getCoreRowModel().rows.length;
			return this._table.getFilteredRowModel().rows.length;
		}
		_notifyStateChange(previous, next) {
			if (!this._element) return;
			if (this._config.stateKey) {
				if (!this._persistState) this._persistState = debounce(() => {
					const key = this._storageKey();
					if (!key) return;
					try {
						window.localStorage.setItem(key, JSON.stringify(this.getState()));
					} catch {}
				}, STATE_AUTOSAVE_DEBOUNCE_MS);
				this._persistState();
			}
			if (previous.sorting !== next.sorting || previous.columnFilters !== next.columnFilters || previous.globalFilter !== next.globalFilter || !this._config.infiniteScroll && (previous.pagination?.pageIndex !== next.pagination?.pageIndex || previous.pagination?.pageSize !== next.pagination?.pageSize)) {
				this._stopEditing({
					commit: true,
					force: true
				});
				this._selectionAnchorIndex = null;
				this._activeCell?.reset();
				this._virtualizer?.remeasure();
			}
			if (previous.sorting !== next.sorting) EventHandler.trigger(this._element, EVENT_SORTING_CHANGE, { sorting: next.sorting });
			const filtersChanged = previous.columnFilters !== next.columnFilters || previous.globalFilter !== next.globalFilter;
			if (filtersChanged) {
				EventHandler.trigger(this._element, EVENT_FILTER_CHANGE, {
					columnFilters: next.columnFilters,
					globalFilter: next.globalFilter ?? ""
				});
				if (!this._config.dataProvider) this._announceResults(this._table.getFilteredRowModel().rows.length);
			}
			if (previous.rowSelection !== next.rowSelection) EventHandler.trigger(this._element, EVENT_SELECTION_CHANGE, {
				rowSelection: next.rowSelection,
				selectedItems: this.getSelectedItems()
			});
			if (previous.pagination !== next.pagination && !this._config.infiniteScroll) EventHandler.trigger(this._element, EVENT_PAGINATION_CHANGE, { pagination: next.pagination });
			if (previous.columnSizing !== next.columnSizing) EventHandler.trigger(this._element, EVENT_SIZING_CHANGE, { columnSizing: next.columnSizing });
			if (previous.columnPinning !== next.columnPinning) EventHandler.trigger(this._element, EVENT_PINNING_CHANGE, { columnPinning: next.columnPinning });
			if (previous.columnOrder !== next.columnOrder) EventHandler.trigger(this._element, EVENT_ORDER_CHANGE, { columnOrder: next.columnOrder });
			if (previous.columnVisibility !== next.columnVisibility) EventHandler.trigger(this._element, EVENT_VISIBILITY_CHANGE, { columnVisibility: next.columnVisibility });
			if (this._dataSource) {
				if (filtersChanged || previous.sorting !== next.sorting) {
					if (next.pagination.pageIndex !== 0) {
						this._pageResetPending = true;
						this._table.setPageIndex(0);
					}
					this._dataSource.load();
					return;
				}
				if (previous.pagination !== next.pagination) {
					const echoedPageReset = this._pageResetPending && next.pagination.pageIndex === 0;
					this._pageResetPending = false;
					if (!echoedPageReset) this._dataSource.load();
				}
			}
		}
		_update() {
			if (this._virtualizer) {
				this._virtualizer.setCount(this._table.getRowModel().rows.length);
				this._virtualizer.instance._willUpdate();
			}
			if (this._editingCell && this._virtualizer) {
				const { rowIndex } = this._editingCell;
				if (!this._virtualizer.instance.getVirtualItems().some((item) => item.index === rowIndex)) this._stopEditing({
					commit: true,
					force: true
				});
			}
			this._tableElement.setAttribute("aria-rowcount", String(this._header.rowCount + this._getTotalRows()));
			this._header.update({
				filteredColumns: this._config.columnFilters ? this._getFilteredColumns() : null,
				order: this._visibleLeafColumns().map((column) => column.id),
				pinning: this._config.columnPinning ? this._getPinning() : null,
				resizingColumn: this._config.columnSizing ? this._table.store.state.columnResizing.isResizingColumn : false,
				sizes: this._config.columnSizing || this._config.columnPinning ? this._getColumnSizes() : null,
				sorting: this._table.store.state.sorting ?? [],
				selectAll: this._config.rowSelection ? {
					checked: this._table.getIsAllRowsSelected(),
					indeterminate: this._table.getIsSomeRowsSelected() && !this._table.getIsAllRowsSelected()
				} : null
			});
			this._body.update();
			this._applyCellNavigation();
			if (this._editorFocusPending && this._editor?.element.isConnected) {
				this._editorFocusPending = false;
				if (this._editor.focus) this._editor.focus();
				else (this._editor.element.querySelector(FOCUSABLE_SELECTOR) ?? this._editor.element).focus({ preventScroll: true });
			}
			this._toolbar?.update?.();
			this._emptySlot?.update?.();
			for (const instance of this._paginations) instance.refresh();
			this._maybeLoadMore();
		}
		_paginationState() {
			const { pagination } = this._table.store.state;
			return {
				pageCount: this._table.getPageCount(),
				pageIndex: pagination.pageIndex,
				pageSize: pagination.pageSize,
				totalRows: this._getTotalRows()
			};
		}
		static jQueryInterface(config) {
			return this.each(function() {
				const data = DataGrid$1.getOrCreateInstance(this, typeof config === "string" ? void 0 : config);
				if (typeof config !== "string") return;
				const methods = data;
				if (methods[config] === void 0 || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
				methods[config]();
			});
		}
	};
	//#endregion
	//#region ../../node_modules/@tanstack/table-core/dist/store-reactivity-bindings.js
	/**
	* TanStack Store–based reactivity for vanilla / non-framework use of `constructTable`,
	* with `createOptionsStore: true` so `table.optionsStore` is available for subscriptions.
	*
	* @example
	* ```ts
	* import { constructTable, tableFeatures } from '@tanstack/table-core'
	* import { storeReactivityBindings } from '@tanstack/table-core/store-reactivity-bindings'
	*
	* const table = constructTable({
	*   features: tableFeatures({ coreReactivityFeature: storeReactivityBindings() }),
	*   // ...
	* })
	* ```
	*/
	function storeReactivityBindings() {
		return {
			createOptionsStore: true,
			wrapExternalAtoms: false,
			addSubscription: () => {
				throw new Error("Feature not supported in current reactivity implementation");
			},
			unmount: () => {
				throw new Error("Feature not supported in current reactivity implementation");
			},
			batch,
			schedule: (fn) => queueMicrotask(fn),
			untrack: (fn) => fn(),
			createReadonlyAtom: (fn, options) => {
				return createAtom(() => fn(), { compare: options?.compare });
			},
			createWritableAtom: (value, options) => {
				return createAtom(value, { compare: options?.compare });
			}
		};
	}
	//#endregion
	//#region src/engine/features.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid engine/features.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const dataGridFeatures = tableFeatures({
		coreReactivityFeature: storeReactivityBindings(),
		cellSelectionFeature,
		columnFilteringFeature,
		globalFilteringFeature,
		columnFacetingFeature,
		columnOrderingFeature,
		columnPinningFeature,
		columnSizingFeature,
		columnResizingFeature,
		columnVisibilityFeature,
		rowPaginationFeature,
		rowSelectionFeature,
		rowSortingFeature,
		facetedRowModel: createFacetedRowModel(),
		facetedUniqueValues: createFacetedUniqueValues(),
		filteredRowModel: createFilteredRowModel(),
		paginatedRowModel: createPaginatedRowModel(),
		sortedRowModel: createSortedRowModel(),
		filterFns: { includesString: filterFn_includesString },
		sortFns: {
			alphanumeric: sortFn_alphanumeric,
			datetime: sortFn_datetime,
			text: sortFn_text
		}
	});
	//#endregion
	//#region src/engine/features-lite.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid engine/features-lite.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	const dataGridLiteFeatures = tableFeatures({
		coreReactivityFeature: storeReactivityBindings(),
		columnFilteringFeature,
		globalFilteringFeature,
		rowPaginationFeature,
		rowSortingFeature,
		filteredRowModel: createFilteredRowModel(),
		paginatedRowModel: createPaginatedRowModel(),
		sortedRowModel: createSortedRowModel(),
		filterFns: { includesString: filterFn_includesString },
		sortFns: {
			alphanumeric: sortFn_alphanumeric,
			datetime: sortFn_datetime,
			text: sortFn_text
		}
	});
	//#endregion
	//#region src/index.ts
	/**
	* --------------------------------------------------------------------------
	* CoreUI PRO data-grid index.ts
	* License (https://coreui.io/pro/license/)
	* --------------------------------------------------------------------------
	*/
	var DataGrid = class extends DataGrid$1 {
		static get Default() {
			return {
				...DataGrid$1.Default,
				features: dataGridFeatures
			};
		}
	};
	defineJQueryPlugin(DataGrid);
	//#endregion
	exports.DEFAULT_LABELS = DEFAULT_LABELS;
	exports.DataGrid = DataGrid;
	exports.FILTER_OPERATORS = FILTER_OPERATORS;
	exports.VALUELESS_OPERATORS = VALUELESS_OPERATORS;
	exports.dataGridFeatures = dataGridFeatures;
	exports.dataGridLiteFeatures = dataGridLiteFeatures;
	exports.downloadCsv = downloadCsv;
	exports.evaluateColumnFilter = evaluateColumnFilter;
	exports.exportCsv = exportCsv;
	exports.interpolate = interpolate;
});

//# sourceMappingURL=data-grid.js.map