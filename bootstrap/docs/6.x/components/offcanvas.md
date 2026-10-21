# Bootstrap 6 Offcanvas

> Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.

> **Built on the same engine as Drawer — and heading for retirement.** Since v6 the Offcanvas plugin is a compatibility layer over the dialog behavior [Drawer](https://coreui.io/bootstrap/docs/components/drawer/) is built on — same engine and dismissal, with the v5 markup, classes and `*.coreui.offcanvas` events preserved, and the classic look. Existing offcanvas markup keeps working unchanged throughout v6, but **Offcanvas may be removed in v7** — we recommend using Drawer for new work and migrating when convenient.

## How it works

The Bootstrap Offcanvas component serves as a sidebar element that can be activated through JavaScript, allowing it to slide in from the left, right, top, or bottom of the viewport. Triggers, like buttons or anchors, are linked to the elements you want to toggle, and data attributes facilitate their activation in JavaScript.

- Offcanvas is rendered with the browser's native `<dialog>` element and shares its base JavaScript code with modals. Conceptually, they are quite similar, but they remain separate plugins.
- Likewise, some [source Sass](#sass-variables) variables for offcanvas styles and dimensions are derived from the modal variables.
- When displayed, offcanvas features the native `::backdrop` that can be clicked to hide it, and the browser traps focus inside the panel.
- As with modals, only one offcanvas can be displayed at a time.

**Attention!** Due to CSS animation handling, `margin` or `translate` cannot be applied to an `.offcanvas` element. Instead, utilize the class as a separate wrapping element.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/accessibility/reduced-motion/).

> #### Migrating from v5
> 
> The v5 `` markup is upgraded to the native `` structure automatically at runtime, with a console warning. This transitional layer will be removed in v7 — update your markup to the structure documented below.

## Examples

### Offcanvas components

Below is a default offcanvas example (via the `open` attribute on `.offcanvas`). Offcanvas supports a header with a close button and an optional body class for initial `padding`. We recommend including offcanvas headers with dismiss actions whenever possible, or providing an explicit dismiss action.

```html
<dialog class="offcanvas offcanvas-start" id="offcanvas" aria-labelledby="offcanvasLabel" open>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    The content for the Bootstrap offcanvas goes here. You can place nearly any Bootstrap component or custom element here.
  </div>
</dialog>
```

### Live demo

Utilize the buttons below to toggle the visibility of an offcanvas element using JavaScript, which opens and closes the native `<dialog>` element with the `.offcanvas` class.

You can employ a link with the `href` attribute or a button featuring the `data-coreui-target` attribute. In both instances, including `data-coreui-toggle="offcanvas"` is necessary.

```html
<a class="btn-solid theme-primary" data-coreui-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-coreui-target
</button>

<dialog class="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close fg-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="">
      Some text as a placeholder. In real life, you can have the elements you have chosen, like text, images, lists, etc.
    </div>
    <div class="dropdown mt-4">
      <button class="btn-solid theme-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-coreui-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</dialog>
```

### Body scrolling

The `<body>` element's scrolling is disabled when the Bootstrap offcanvas and its backdrop are visible. Utilize the `data-coreui-scroll` attribute to allow scrolling on the `<body>` — the offcanvas then opens non-modally, so the rest of the page also stays interactive.

```html
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

<dialog class="offcanvas offcanvas-start" data-coreui-scroll="true" data-coreui-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Scroll further down the page to see this option in action.
</p>
  </div>
</dialog>
```

### Body scrolling and backdrop

You can also enable `<body>` scrolling with a visible backdrop.

```html
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

<dialog class="offcanvas offcanvas-start" data-coreui-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</dialog>
```

### Static backdrop

When the backdrop is set to static, the Bootstrap offcanvas will remain open when clicking outside of it.
```html
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#staticBackdrop" aria-controls="staticBackdrop">
  Toggle static offcanvas
</button>

<dialog class="offcanvas offcanvas-start" data-coreui-backdrop="static" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      I won’t close if you click outside of me.
    </div>
  </div>
</dialog>
```

### Instant

Add `.offcanvas-instant` to an offcanvas that should appear and disappear at once, with no slide and no backdrop fade — the same opt-out `.drawer-instant` provides for drawers.

## Dark offcanvas

_Added in 4.2.6._

Change the appearance of offcanvas elements using utilities to better match various contexts, such as dark navbars. Here, we add `.text-bg-inverse` to the `.offcanvas`; the close button takes the colour it inherits, so it needs nothing. If there are dropdowns inside, consider also adding `.dropdown-menu-dark` to `.dropdown-menu`.

> Attention! Dark variants for components are no longer supported as of v5.3.0 due to the introduction of color modes. Instead of manually adding the classes mentioned earlier, simply set `data-coreui-theme="dark"` on the root element, a parent wrapper, or the component itself.

```html
<dialog class="offcanvas offcanvas-start text-bg-inverse" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel" open>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvasDark" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Place offcanvas content here.</p>
  </div>
</dialog>
```

## Responsive

_Added in 4.2.6._

Responsive offcanvas classes hide content that is outside the viewport from a specified breakpoint and lower. Above that breakpoint, the content will behave normally. For example, `.offcanvas-lg` hides content in an offcanvas below the `lg` breakpoint, but displays the content above the `lg` breakpoint.

```html
<button class="btn-solid theme-primary d-lg-none" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>

<div class="alert theme-info d-none d-lg-block">Resize your browser to show the responsive offcanvas toggle.</div>

<dialog class="offcanvas-lg offcanvas-end" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" data-coreui-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p class="mb-0">This is content within an <code>.offcanvas-lg</code>.</p>
  </div>
</dialog>
```

Responsive offcanvas classes are available for each breakpoint.

- `.offcanvas`
- `.offcanvas-sm`
- `.offcanvas-md`
- `.offcanvas-lg`
- `.offcanvas-xl`
- `.offcanvas-2xl`

## Placement

Offcanvas components do not have a default position; therefore, you need to apply one of the modifier classes listed below.

- `.offcanvas-start` places the offcanvas on the left side of the viewport (as shown above)
- `.offcanvas-end` places the offcanvas on the right side of the viewport
- `.offcanvas-top` places offcanvas at the top of the viewport
- `.offcanvas-bottom` places offcanvas at the bottom of the viewport

Feel free to experiment with the top, right, and bottom examples below.

```html
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

<dialog class="offcanvas offcanvas-top" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</dialog>
```

```html
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<dialog class="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</dialog>
```

```html
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>

<dialog class="offcanvas offcanvas-bottom" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    ...
  </div>
</dialog>
```

## Accessibility

Since the offcanvas panel is conceptually a modal dialog, be sure to add `aria-labelledby="..."`—referencing the offcanvas title—to `.offcanvas`. Note that the native `<dialog>` element already provides the dialog role and focus management — don't add `role`, `aria-modal`, `aria-hidden`, or `tabindex` yourself.

## Usage

The offcanvas plugin leverages several classes and attributes to perform its functions:

- `.offcanvas` hides the content
- `.offcanvas[open]` shows the content
- `.offcanvas-start` hides the offcanvas on the left
- `.offcanvas-end` hides the offcanvas on the right
- `.offcanvas-top` hides the offcanvas at the top
- `.offcanvas-bottom` hides the offcanvas at the bottom

Include a dismiss button using the `data-coreui-dismiss="offcanvas"` attribute to activate the JavaScript functionality. Ensure you use the `<button>` element for consistent behavior across all devices.

### Via data attributes

Include `data-coreui-toggle="offcanvas"` along with a `data-coreui-target` or `href` in the element to automatically control a single offcanvas component. The `data-coreui-target` attribute allows you to specify a CSS selector for the associated offcanvas. Remember to apply the `offcanvas` class to the offcanvas element. To have it open by default, also add the `open` attribute.

#### Dismiss

Dismissal can be achieved with the `data` attribute on a button **within the offcanvas** as demonstrated below:

```html
<button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
```

> While both methods for dismissing an offcanvas are supported, remember that dismissing from the outside of an offcanvas does not align with the [ARIA Authoring Practices Guide dialog (modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/). Proceed with caution.

### Via JavaScript

Enable manually with:

```js
const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new coreui.Offcanvas(offcanvasEl))
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean or the string `static` | `true` | Shows the native `::backdrop` while the Bootstrap offcanvas is open. Alternatively, specify `static` for a backdrop that doesn't close the offcanvas component when clicked, or `false` to visually suppress it. |
| `keyboard` | boolean | `true` | Closes the offcanvas when the escape key is pressed. |
| `scroll` | boolean | `false` | Allows body scrolling while the offcanvas is open — the offcanvas then opens non-modally, keeping the rest of the page interactive.

### Methods

> #### Promises and transitions
> 
> **Methods that show or hide a component return a promise.** The promise resolves when the transition ends, so `await` continues at the same moment a `shown.coreui.*` or `hidden.coreui.*` listener runs. The methods still return immediately and never block the caller. A call on a component that is already transitioning does nothing and resolves right away.
> 
> [Refer to our JavaScript documentation for further details](https://coreui.io/bootstrap/docs/getting-started/javascript/#promises-and-transitions).

Activates your content as an offcanvas element and accepts an optional options `object`.  

You can create an offcanvas instance using the constructor; for example:

```js
const cuiOffcanvas = new coreui.Offcanvas('#myOffcanvas')
```

| Method | Description |
| --- | --- |
| `getInstance` | *Static* method that allows you to obtain the offcanvas instance associated with a DOM element |
| `getOrCreateInstance` | *Static* method that enables you to retrieve the offcanvas instance linked to a DOM element, or create a new one if it hasn't been initialized |
| `hide` | Hides an offcanvas element. **Returns a promise that resolves after the offcanvas element is hidden** (i.e. after the `hidden.coreui.offcanvas` event occurs).|
| `show` | Displays an offcanvas element. **Returns a promise that resolves after the offcanvas element is shown** (i.e. after the `shown.coreui.offcanvas` event occurs).|
| `toggle` | Switches an offcanvas element between shown and hidden. **Returns a promise that resolves after the offcanvas element is shown or hidden** (i.e. after the `shown.coreui.offcanvas` or `hidden.coreui.offcanvas` event occurs).

### Events

CoreUI for Bootstrap's offcanvas class exposes a few events for hooking into offcanvas functionality.

| Event type | Description |
| --- | --- |
| `hidden.coreui.offcanvas` | This event is fired when an offcanvas element is hidden from the user (it will wait for CSS transitions to complete). |
| `hide.coreui.offcanvas` | This event is fired immediately after the `hide` method has been called. |
| `hidePrevented.coreui.offcanvas` | This event is triggered when the offcanvas is shown, its backdrop is `static`, and a click outside of the offcanvas occurs. The event is also triggered when the escape key is pressed and the `keyboard` option is set to `false`. |
| `show.coreui.offcanvas` | This event fires immediately when the `show` instance method is invoked. |
| `shown.coreui.offcanvas` | This event is fired when an offcanvas element becomes visible to the user (it will wait for CSS transitions to complete).

```js
const myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.coreui.offcanvas', event => {
  // do something...
})
```

## Customizing

### CSS variables

Offcanvas utilizes local CSS variables on `.offcanvas` for improved real-time customization. The values for the CSS variables are defined through Sass, ensuring that Sass customization remains supported as well.

```scss
$offcanvas-tokens: defaults(
  (
    --cui-offcanvas-zindex: var(--cui-z-offcanvas),
    --cui-offcanvas-width: 400px,
    --cui-offcanvas-height: 30vh,
    --cui-offcanvas-padding-x: var(--cui-spacer),
    --cui-offcanvas-padding-y: var(--cui-spacer),
    --cui-offcanvas-color: var(--cui-fg-body),
    --cui-offcanvas-bg: var(--cui-bg-body),
    --cui-offcanvas-border-width: var(--cui-border-width),
    --cui-offcanvas-border-color: var(--cui-border-color-translucent),
    --cui-offcanvas-box-shadow: var(--cui-box-shadow-sm),
    --cui-offcanvas-transition-duration: .3s,
    --cui-offcanvas-transition-timing: ease-in-out,
    --cui-offcanvas-backdrop-bg: var(--cui-black),
    --cui-offcanvas-backdrop-opacity: .5,
    --cui-offcanvas-title-line-height: var(--cui-body-line-height),
    --cui-offcanvas-scale-transform: scale(1.02),
  ),
  $offcanvas-tokens
);
```
