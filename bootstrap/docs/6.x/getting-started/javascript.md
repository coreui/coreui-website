# JavaScript

> Bring CoreUI for Bootstrap to life with our optional JavaScript plugins. Learn about each plugin, our data and programmatic API options, and more.

## JS components

Curious which components explicitly require our JavaScript and [Floating UI](https://floating-ui.com/)?

- Accordion for animating panels and closing the rest of an exclusive group
- Alerts for dismissing
- Autocomplete, Combobox and Multi Select for the whole selection behavior (Combobox also requires [Floating UI](https://floating-ui.com/))
- Buttons for toggling states and checkbox/radio functionality; Loading Button for its busy state
- Calendar, Date Picker, Date Range Picker and Time Picker for date and time selection — the calendar is our own, with no third-party dependency
- Carousel for all slide behaviors, controls, and indicators
- Chips for dismissing, and Chip Input for typing chips into a field
- Collapse for toggling visibility of content
- Dialog and Drawer for displaying, positioning, and scroll behavior
- Menu and Dropdown for displaying and positioning (also requires [Floating UI](https://floating-ui.com/))
- Modal and Offcanvas for displaying, positioning, and focus behavior
- Number Input, OTP Input, Password Input, Password Strength, Range Slider, Rating and Stepper for their form behaviors
- Scrollspy for scroll behavior and navigation updates
- Sidebar and Navigation for the app shell's responsive behaviors
- Tab for toggling tab panes
- Toasts for displaying and dismissing
- Tooltips and popovers for displaying and positioning (also requires [Floating UI](https://floating-ui.com/))

[Floating UI](https://floating-ui.com/) is a `peerDependency` and the only third-party runtime we rely on — install it only if you use the components listed with it.

## Individual or compiled

Plugins can be included individually (using CoreUI's individual `js/dist/*.js`), or all at once using `coreui.js` or the minified `coreui.min.js` (don't include both).

If you use a bundler (Webpack, Rollup...), import the individual plugins from `@coreui/coreui-pro/js/dist/*`: an `import` resolves to the ES module next to each plugin (`js/dist/*.mjs`), a `require()` to its UMD file (`js/dist/*.js`).

Load the plugins one way. The bundle, the per-plugin ES modules and the per-plugin UMD files each carry their own copy of the shared internals, so a plugin that reaches the page through two of them registers its data attribute handlers twice — a dropdown toggle then opens and closes on the same click.

## TypeScript

Our plugins are authored in TypeScript and ship with type declarations — no `@types/…` package is needed. The main entry point and every individual plugin under `js/dist/` come with their own declarations, `.d.ts` for the UMD files and `.d.mts` for the ES modules:

```ts
import { Tooltip } from '@coreui/coreui-pro'

const tooltip = Tooltip.getOrCreateInstance('#example')
tooltip.show()
```

Some plugin modules also export their configuration object type (for example `TooltipConfig`) if you need to type your own wrappers.

## Usage with JavaScript frameworks

- Angular: [CoreUI for Angular](https://coreui.io/angular/docs/getting-started/introduction)
- React: [CoreUI for React](https://coreui.io/react/docs/getting-started/introduction/)
- Vue: [CoreUI for Vue](https://coreui.io/vue/docs/getting-started/introduction/)

## Using CoreUI for Bootstrap as a module

We provide a version of CoreUI for Bootstrap built as `ESM` (`coreui.esm.js` and `coreui.esm.min.js`) which allows you to use CoreUI for Bootstrap as a module in your browser, if your [targeted browsers support it](https://caniuse.com/es6-module).

```html
<script type="module">
  import { Toast } from 'coreui.esm.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>
```

Compared to JS bundlers, using ESM in the browser requires you to use the full path and filename instead of the module name. [Read more about JS modules in the browser.](https://v8.dev/features/modules#specifiers) That's why we use `'coreui.esm.min.js'` instead of `'coreui'` above. However, this is further complicated by our Floating UI dependency, which imports Floating UI into our JavaScript like so:

```js
import { computePosition } from "@floating-ui/dom"
```

If you try this as-is, you'll see an error in the console like the following:

```text
Uncaught TypeError: Failed to resolve module specifier "@floating-ui/dom". Relative references must start with either "/", "./", or "../".
```

To fix this, use an [import map](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) to resolve the bare module names to complete paths. Here's how it works for CoreUI and Floating UI:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-9DZ6o3pJWcTwBR8W196XizUEf2kNMD35tkeyWqOB0yzml+nZrEe/13PMCpAIrT4r" crossorigin="anonymous">
    <title>Hello, modularity!</title>
  </head>
  <body>
    <h1>Hello, modularity!</h1>
    <button id="popoverButton" type="button" class="btn-solid theme-primary btn-lg" data-coreui-toggle="popover" title="ESM in Browser" data-coreui-content="Bang!">Custom popover</button>

    <script type="importmap">
    {
      "imports": {
        "@floating-ui/dom": "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.8.0/+esm",
        "@coreui/coreui": "https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/js/coreui.esm.min.js"
      }
    }
    </script>
    <script type="module">
      import * as coreui from '@coreui/coreui'

      new coreui.Popover(document.getElementById('popoverButton'))
    </script>
  </body>
</html>
```

The map is needed whatever you import. `coreui.esm.js` imports Floating UI at the top, so the specifier has to resolve even for a component that never positions anything. Of the per-component files under `js/dist/`, the `*.js` ones are UMD — load them with a plain `<script>`, not `<script type="module">`; the `*.mjs` ones are the ES modules a bundler picks up.

## Dependencies

Some plugins and CSS components depend on other plugins. If you include plugins individually, make sure to check for these dependencies in the docs.

Our dropdowns, popovers and tooltips also depend on [Floating UI](https://floating-ui.com/).

## Data attributes

Nearly all CoreUI for Bootstrap plugins can be enabled and configured through HTML alone with data attributes (our preferred way of using JavaScript functionality). Be sure to **only use one set of data attributes on a single element** (e.g., you cannot trigger a tooltip and modal from the same button.)

## Selectors

Currently to query DOM elements we use the native methods `querySelector` and `querySelectorAll` for performance reasons, so you have to use [valid selectors](https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier).
If you use special selectors, for example: `collapse:Example` be sure to escape them.

## Shadow DOM

Components work inside a shadow root, with two differences from normal use.

**Initialize with JavaScript, not data attributes.** Our plugins listen on the document and match the event target against a selector. An event that crosses a shadow boundary is retargeted to the host element, so the listener sees the host rather than the button inside — `data-coreui-toggle` never resolves. Construct the component instead:

```js
const root = host.shadowRoot
const dropdown = new coreui.Dropdown(root.querySelector('.dropdown-toggle'))
```

**Adopt the stylesheet into the root.** Document styles do not cross the boundary either, so a component renders unstyled without it:

```js
const sheet = new CSSStyleSheet()
sheet.replaceSync(await (await fetch('/path/to/coreui.min.css')).text())

const root = host.attachShadow({ mode: 'open' })
root.adoptedStyleSheets = [sheet]
```

Design tokens need no extra work: the stylesheet declares them on `:host` alongside `:root`, so every `--cui-*` variable resolves inside the shadow root once the sheet is adopted.

## Events

CoreUI for Bootstrap provides custom events for most plugins' unique actions. Generally, these come in an infinitive and past participle form - where the infinitive (ex. `show`) is triggered at the start of an event, and its past participle form (ex. `shown`) is triggered on the completion of an action.

All infinitive events provide [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) functionality. This provides the ability to stop the execution of an action before it starts. Returning false from an event handler will also automatically call `preventDefault()`.

```js
const myModal = document.getElementById('myModal')

myModal.addEventListener('show.coreui.modal', event => {
  return event.preventDefault() // stops modal from being shown
})
```

## Programmatic API

All constructors accept an optional options object or nothing (which initiates a plugin with its default behavior):

```js
const myModalEl = document.querySelector('#myModal')
const modal = new coreui.Modal(myModalEl) // initialized with defaults

const configObject = { keyboard: false }
const modal1 = new coreui.Modal(myModalEl, configObject) // initialized with no keyboard
```

If you'd like to get a particular plugin instance, each plugin exposes a `getInstance` method. For example, to retrieve an instance directly from an element:

```js
coreui.Popover.getInstance(myPopoverEl)
```

This method will return `null` if an instance is not initiated over the requested element.

Alternatively, `getOrCreateInstance` can be used to get the instance associated with a DOM element, or create a new one in case it wasn't initialized.

```js
coreui.Popover.getOrCreateInstance(myPopoverEl, configObject)
```

In case an instance wasn't initialized, it may accept and use an optional configuration object as second argument.

### CSS selectors in constructors

In addition to the `getInstance` and `getOrCreateInstance` methods, all plugin constructors can accept a DOM element or a valid [CSS selector](#selectors) as the first argument. Plugin elements are found with the `querySelector` method since our plugins only support a single element.

```js
const modal = new coreui.Modal('#myModal')
const dropdown = new coreui.Dropdown('[data-coreui-toggle="dropdown"]')
const offcanvas = coreui.Offcanvas.getInstance('#myOffcanvas')
const alert = coreui.Alert.getOrCreateInstance('#myAlert')
```

### Promises and transitions

All programmatic API methods are **asynchronous**: they start the transition and hand control straight back, so the line after the call runs while the component is still moving.

Methods that show or hide a component return a **promise**. The promise resolves when the transition ends, so you can `await` the method instead of listening for an event.

```js
const collapse = coreui.Collapse.getOrCreateInstance('#myCollapse')

await collapse.show()
// The collapsible area is now expanded
```

These methods return a promise:

| Method | Components |
| --- | --- |
| `show`, `hide`, `toggle` | Collapse, Dialog, Drawer, Menu, Modal, Offcanvas, Popover, Sidebar, Tooltip |
| `show`, `hide` | Toast |
| `show` | Tab |
| `close` | Alert |

The promise resolves with no value. It resolves at the same moment the matching `shown.coreui.*`, `hidden.coreui.*` or `closed.coreui.*` event fires, so both styles run your code at the same time. Use the event when you must react to every change, including ones your own code did not start.

```js
const offcanvasEl = document.getElementById('myOffcanvas')
const offcanvas = coreui.Offcanvas.getOrCreateInstance(offcanvasEl)

// Await the method you called…
await offcanvas.hide()
saveState()

// …or listen for every hide, whoever started it
offcanvasEl.addEventListener('hidden.coreui.offcanvas', () => {
  saveState()
})
```

Because each method returns a promise, you can run steps in order without nesting listeners.

```js
const modal = coreui.Modal.getOrCreateInstance('#myModal')
const toast = coreui.Toast.getOrCreateInstance('#myToast')

await modal.hide()
await toast.show()
```

The promise also resolves when the call does nothing — for example when the component is already open, when a listener calls `preventDefault()` on the `show.coreui.*` event, or when you dispose the component mid-transition. `await` therefore never hangs, but it also does not tell you whether the state changed. Check the state yourself when that matters.

In addition a method call on a **transitioning component will be ignored**. For the promise-returning methods above, such a call resolves immediately. It does not wait for the running transition to end.

```js
const myCarouselEl = document.getElementById('myCarousel')
const carousel = coreui.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.coreui.carousel', event => {
  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
```

#### `dispose` method

Do not call `dispose` immediately after `hide()`. The hide transition is still running at that point, so the component tears down mid-transition. Await the promise first:

```js
const toast = coreui.Toast.getInstance('#myToast')

await toast.hide()
toast.dispose()
```

The event-based equivalent also works:

```js
const myToast = document.querySelector('#myToast')
const toast = coreui.Toast.getInstance(myToast)

myToast.addEventListener('hidden.coreui.toast', () => {
  toast.dispose()
})

toast.hide()
```

From a listener of any other event of the same component, such as `remove.coreui.chip-set` or `change.coreui.multi-select`, defer the call. The component may still be finishing the action that fired the event, and a disposed instance cannot do that:

```js
chipSetElement.addEventListener('remove.coreui.chip-set', () => {
  queueMicrotask(() => chipSet.dispose())
})
```

### Default settings

You can change the default settings for a plugin by modifying the plugin's `Constructor.Default` object:

```js
// changes default for the modal plugin's `keyboard` option to false
coreui.Modal.Default.keyboard = false
```

The pickers build their field and calendar from other plugins. A default changed on a picker reaches its field and calendar, and wins over a default changed on the field or calendar plugin for the same option, so set the defaults on the picker.

```js
coreui.DatePicker.Default.selectionType = 'month' // the field and the calendar both pick months
```

## Methods and properties

Every CoreUI for Bootstrap plugin exposes the following methods and static properties.

| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's plugin instance. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method which allows you to get the plugin instance associated with a DOM element. |
| `getOrCreateInstance` | *Static* method which allows you to get the plugin instance associated with a DOM element, or create a new one in case it wasn't initialized. |

| Static property | Description |
| --- | --- |
| `NAME` | Returns the plugin name. (Example: `coreui.Tooltip.NAME`) |
| `VERSION` | The version of each of CoreUI for Bootstrap's plugins can be accessed via the `VERSION` property of the plugin's constructor (Example: `coreui.Tooltip.VERSION`) |

## Sanitizer

Some plugins render or accept arbitrary HTML in their configuration. To prevent cross-site scripting (XSS) attacks, those options pass through our built-in sanitizer before they reach the page. Sanitization is on by default and covers every plugin that takes HTML — Tooltip and Popover, Rating, the Autocomplete, Combobox and Multi Select option renderers, Chip and Chip Input, Calendar and the Date, Date Range, Date Time and Time pickers, Number Input, Password Input and Range Slider.

The default `allowList` value is the following:

```js
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

export const DefaultAllowlist = {
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
}
```

The default `svgAllowList` value for Ratings is:

```js
export const svgAllowList = {
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
}
```

If you want to add new values to this default `allowList` you can do the following:

```js
const myDefaultAllowList = coreui.Tooltip.Default.allowList

// To allow table elements
myDefaultAllowList.table = []

// To allow td elements and data-coreui-option attributes on td elements
myDefaultAllowList.td = ['data-coreui-option']

// You can push your custom regex to validate your attributes.
// Be careful about your regular expressions being too lax
const myCustomRegex = /^data-my-app-[\w-]+/
myDefaultAllowList['*'].push(myCustomRegex)
```

If you want to bypass our sanitizer because you prefer to use a dedicated library, for example [DOMPurify](https://www.npmjs.com/package/dompurify), you should do the following:

```js
const yourTooltipEl = document.querySelector('#yourTooltip')
const tooltip = new coreui.Tooltip(yourTooltipEl, {
  sanitizeFn(content) {
    return DOMPurify.sanitize(content)
  }
})
```

## Optionally using jQuery

**You don't need jQuery in CoreUI for Bootstrap**, but it's still possible to use our components with jQuery. If CoreUI for Bootstrap detects `jQuery` in the `window` object, it'll add all of our components in jQuery's plugin system. This allows you to do the following:

```js
// to enable tooltips with the default configuration
$('[data-coreui-toggle="tooltip"]').tooltip()

// to initialize tooltips with given configuration
$('[data-coreui-toggle="tooltip"]').tooltip({
  boundary: 'clippingParents',
  customClass: 'myClass'
})

// to trigger the `show` method
$('#myTooltip').tooltip('show')

// to call a method that takes arguments
$('#myTooltip').tooltip('setContent', { '.tooltip-inner': 'Another title' })

// a plugin is registered under the component's own name, so a two-word one
// is reached with brackets rather than a dot
$('#myPicker')['date-picker']('setDate', new Date(2027, 0, 15))
```

The same goes for our other components.

### No conflict

Sometimes it is necessary to use CoreUI for Bootstrap plugins with other UI frameworks. In these circumstances, namespace collisions can occasionally occur. If this happens, you may call `.noConflict` on the plugin you wish to revert the value of.

```js
const coreuiButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.coreuiBtn = coreuiButton // give $().coreuiBtn the CoreUI for Bootstrap functionality
```

CoreUI for Bootstrap does not officially support third-party JavaScript libraries like Prototype or jQuery UI. Despite `.noConflict` and namespaced events, there may be compatibility problems that you need to fix on your own.

### jQuery events

CoreUI for Bootstrap will detect jQuery if `jQuery` is present in the `window` object and there is no `data-coreui-no-jquery` attribute set on `<body>`. If jQuery is found, CoreUI for Bootstrap will emit events thanks to jQuery's event system. The events are dispatched natively as well, so `addEventListener` keeps working; jQuery's methods (`.on`, `.one`) are an additional way to reach them, not a replacement. A jQuery handler that calls `stopImmediatePropagation()` is the one case that stops the native listeners from running.

```js
$('#myTab a').on('shown.coreui.tab', () => {
  // do something...
})
```

## Disabled JavaScript

CoreUI for Bootstrap's plugins have no special fallback when JavaScript is disabled. If you care about the user experience in this case, use [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) to explain the situation (and how to re-enable JavaScript) to your users, and/or add your own custom fallbacks.
