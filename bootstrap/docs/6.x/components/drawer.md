# Bootstrap Drawer

> Bootstrap Drawer component built on the native <dialog> element — a floating, inset side panel with a blurred native backdrop, focus trapping, and responsive variants.

## Overview

_Added in 6.0.0._

The Drawer component slides a floating, rounded panel in from any edge of the viewport — for navigation, shopping carts, filters, and settings. It renders on the browser's native `<dialog>` element, so the top layer, `::backdrop`, focus trapping, and dialog semantics come from the browser. It follows the design Bootstrap 6 introduces under the same name — an inset panel over a blurred, translucent backdrop.

Drawer shares its base behavior with [Offcanvas](https://coreui.io/bootstrap/docs/components/offcanvas/). Offcanvas keeps the classic edge-anchored look and the v5 vocabulary; Drawer carries the new Bootstrap 6 look and the `drawer-*` classes. Pick one — they are independent components.

## Example

Toggle a drawer by clicking the button below.

<dialog class="drawer drawer-start" id="exampleDrawer" aria-labelledby="exampleDrawerLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="exampleDrawerLabel">Drawer</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    The drawer content goes here. You can place nearly any Bootstrap component or custom element here.
  </div>
</dialog>

```html
<button type="button" class="btn-solid theme-primary" data-coreui-toggle="drawer" data-coreui-target="#exampleDrawer">
  Open drawer
</button>

<dialog class="drawer drawer-start" id="exampleDrawer" aria-labelledby="exampleDrawerLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="exampleDrawerLabel">Drawer</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    ...
  </div>
</dialog>
```

## Placement

Drawers can slide in from any edge of the viewport — apply one of the placement classes:

- `.drawer-start` — left side of the viewport
- `.drawer-end` — right side of the viewport
- `.drawer-top` — top of the viewport
- `.drawer-bottom` — bottom of the viewport
- `.drawer-fullscreen` — covers the viewport (minus the inset)

<dialog class="drawer drawer-end" id="exampleDrawerEnd" aria-labelledby="exampleDrawerEndLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="exampleDrawerEndLabel">Right drawer</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    ...
  </div>
</dialog>

<dialog class="drawer drawer-top" id="exampleDrawerTop" aria-labelledby="exampleDrawerTopLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="exampleDrawerTopLabel">Top drawer</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    ...
  </div>
</dialog>

<dialog class="drawer drawer-bottom" id="exampleDrawerBottom" aria-labelledby="exampleDrawerBottomLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="exampleDrawerBottomLabel">Bottom drawer</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    ...
  </div>
</dialog>

<dialog class="drawer drawer-fullscreen" id="exampleDrawerFullscreen" aria-labelledby="exampleDrawerFullscreenLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="exampleDrawerFullscreenLabel">Fullscreen drawer</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    ...
  </div>
</dialog>

## Variants

### Translucent

Add `.drawer-translucent` for a frosted-glass panel that blurs the content behind it.

<dialog class="drawer drawer-start drawer-translucent" id="exampleDrawerTranslucent" aria-labelledby="exampleDrawerTranslucentLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="exampleDrawerTranslucentLabel">Translucent drawer</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    ...
  </div>
</dialog>

### Sheet

Combine `.drawer-bottom` with `.drawer-sheet` for a flush-to-edge bottom sheet with no inset and squared bottom corners. On large viewports the sheet is centered with a maximum width (`--cui-drawer-sheet-width`).

<dialog class="drawer drawer-bottom drawer-sheet" id="exampleDrawerSheet" aria-labelledby="exampleDrawerSheetLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="exampleDrawerSheetLabel">Bottom sheet</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    ...
  </div>
</dialog>

### Fit content

Add `.drawer-fit-content` to a `.drawer-start`/`.drawer-end` drawer to keep the panel only as tall as its content.

### Footer

Add a `.drawer-footer` below the `.drawer-body` for the panel's actions. It is a flex row that wraps and keeps its children spaced and vertically centered, so a row of buttons needs no utilities.

### Backdrop presets

The backdrop reads `--cui-backdrop-color`, `--cui-backdrop-opacity` and `--cui-backdrop-blur`; a drawer defaults to a translucent tint of the page. For the dialog's dark scrim add `.backdrop-scrim`; the [presets](https://coreui.io/bootstrap/docs/helpers/backdrop/) work on every overlay component.

```html
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="drawer" data-coreui-target="#drawerScrim">
  Toggle drawer with a dark backdrop
</button>

<dialog class="drawer drawer-start backdrop-scrim" id="drawerScrim" aria-labelledby="drawerScrimLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="drawerScrimLabel">Dark backdrop</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    The scrim the dialog uses, on a drawer.
  </div>
</dialog>
```

### No backdrop

Add `.drawer-no-backdrop` to hide the backdrop while keeping the drawer modal — the panel still takes the top layer and traps focus, but nothing dims the page behind it.

### Instant

Add `.drawer-instant` to a drawer that should appear and disappear at once, with no slide and no backdrop fade. It is the same opt-out that [`.alert-instant`](https://coreui.io/bootstrap/docs/components/alert/#dismissing) provides, and it applies to both directions.

### Dark

Put `data-coreui-theme="dark"` on the drawer and it flips the tokens its own surface reads, so the panel and everything in it — including the close button — turns dark on a light page.

<dialog class="drawer drawer-start" data-coreui-theme="dark" id="drawerDark" aria-labelledby="drawerDarkLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="drawerDarkLabel">Dark drawer</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    <p>The surface, the text and the dividers all read the flipped tokens.</p>
  </div>
</dialog>

```html
<dialog class="drawer drawer-start" data-coreui-theme="dark">
  ...
</dialog>
```

## Body scrolling

The page scroll is blocked while a drawer is open. Set `scroll: true` to open the drawer non-modally instead — the page stays interactive and scrollable. A visible backdrop requires the top layer, so `backdrop: true` (the default) takes precedence over `scroll: true` for the page-interactivity part.

```html
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="drawer" data-coreui-target="#drawerScrolling">Enable body scrolling</button>

<dialog class="drawer drawer-start" data-coreui-scroll="true" data-coreui-backdrop="false" id="drawerScrolling" aria-labelledby="drawerScrollingLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="drawerScrollingLabel">Drawer with body scrolling</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    <p>Scroll further down the page to see this option in action.</p>
  </div>
</dialog>
```

## Static backdrop

When the backdrop is set to `static`, the drawer will remain open when clicking outside of it.

```html
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="drawer" data-coreui-target="#drawerStatic">
  Toggle static drawer
</button>

<dialog class="drawer drawer-start" data-coreui-backdrop="static" id="drawerStatic" aria-labelledby="drawerStaticLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="drawerStaticLabel">Drawer</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    <div>
      I won’t close if you click outside of me.
    </div>
  </div>
</dialog>
```

## Responsive

Responsive drawer classes hide content in a drawer below a specified breakpoint and render it inline above it. For example, `.drawer-lg` acts as a drawer below the `lg` breakpoint and displays the content inline above it.

```html
<button class="btn-solid theme-primary d-lg-none" type="button" data-coreui-toggle="drawer" data-coreui-target="#drawerResponsive" aria-controls="drawerResponsive">Toggle drawer</button>

<div class="alert theme-info d-none d-lg-block">Resize your browser to show the responsive drawer toggle.</div>

<dialog class="drawer-lg drawer-end" id="drawerResponsive" aria-labelledby="drawerResponsiveLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="drawerResponsiveLabel">Responsive drawer</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" data-coreui-target="#drawerResponsive" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    <p class="mb-0">This is content within a <code>.drawer-lg</code>.</p>
  </div>
</dialog>
```

Responsive drawer classes are available for each breakpoint.

- `.drawer`
- `.drawer-sm`
- `.drawer-md`
- `.drawer-lg`
- `.drawer-xl`
- `.drawer-2xl`

## Accessibility

Since the drawer is conceptually a modal dialog, be sure to add `aria-labelledby="..."` — referencing the drawer title — to `.drawer`. The native `<dialog>` element already provides the dialog role and focus management — don't add `role`, `aria-modal`, `aria-hidden`, or `tabindex` yourself.

## Usage

### Via data attributes

Include `data-coreui-toggle="drawer"` along with a `data-coreui-target` or `href` in the element to automatically control a drawer. Dismiss from within with `data-coreui-dismiss="drawer"`. To have a drawer open by default, add the `open` attribute.

### Via JavaScript

```js
const drawerElementList = document.querySelectorAll('.drawer')
const drawerList = [...drawerElementList].map(drawerEl => new coreui.Drawer(drawerEl))
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-backdrop="static"`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean or the string `static` | `true` | Shows the native `::backdrop` while the drawer is open. Alternatively, specify `static` for a backdrop that doesn't close the drawer when clicked, or `false` to visually suppress it. |
| `keyboard` | boolean | `true` | Closes the drawer when the escape key is pressed. |
| `scroll` | boolean | `false` | Allows body scrolling while the drawer is open — the drawer then opens non-modally, keeping the rest of the page interactive.

### Methods

> #### Promises and transitions
> 
> **Methods that show or hide a component return a promise.** The promise resolves when the transition ends, so `await` continues at the same moment a `shown.coreui.*` or `hidden.coreui.*` listener runs. The methods still return immediately and never block the caller. A call on a component that is already transitioning does nothing and resolves right away.
> 
> [Refer to our JavaScript documentation for further details](https://coreui.io/bootstrap/docs/getting-started/javascript/#promises-and-transitions).

| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's drawer. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method that allows you to obtain the drawer instance associated with a DOM element |
| `getOrCreateInstance` | *Static* method that enables you to retrieve the drawer instance linked to a DOM element, or create a new one if it hasn't been initialized |
| `hide` | Hides a drawer. **Returns a promise that resolves after the drawer is hidden** (i.e. after the `hidden.coreui.drawer` event occurs).|
| `show` | Displays a drawer. **Returns a promise that resolves after the drawer is shown** (i.e. after the `shown.coreui.drawer` event occurs).|
| `toggle` | Switches a drawer between shown and hidden. **Returns a promise that resolves after the drawer is shown or hidden** (i.e. after the `shown.coreui.drawer` or `hidden.coreui.drawer` event occurs).

### Events

| Event type | Description |
| --- | --- |
| `hidden.coreui.drawer` | This event is fired when a drawer is hidden from the user (it will wait for CSS transitions to complete). |
| `hide.coreui.drawer` | This event is fired immediately after the `hide` method has been called. |
| `hidePrevented.coreui.drawer` | This event is triggered when the drawer is shown, its backdrop is `static`, and a click outside of the drawer occurs. The event is also triggered when the escape key is pressed and the `keyboard` option is set to `false`. |
| `show.coreui.drawer` | This event fires immediately when the `show` instance method is invoked. |
| `shown.coreui.drawer` | This event is fired when a drawer becomes visible to the user (it will wait for CSS transitions to complete).

```js
const myDrawer = document.getElementById('myDrawer')
myDrawer.addEventListener('hidden.coreui.drawer', event => {
  // do something...
})
```

## Customizing

### CSS variables

Drawers use local CSS variables on `.drawer` for enhanced real-time customization.

```scss
$drawer-tokens: defaults(
  (
    --cui-drawer-inset: var(--cui-spacer),
    --cui-drawer-zindex: var(--cui-z-drawer),
    --cui-drawer-width: 400px,
    --cui-drawer-height: 30vh,
    --cui-drawer-sheet-width: 760px,
    --cui-drawer-padding-x: var(--cui-spacer),
    --cui-drawer-padding-y: var(--cui-spacer),
    --cui-drawer-color: var(--cui-fg-body),
    --cui-drawer-bg: var(--cui-bg-body),
    --cui-drawer-border-width: var(--cui-border-width),
    --cui-drawer-border-color: var(--cui-border-color-translucent),
    --cui-drawer-border-radius: var(--cui-radius-7),
    --cui-drawer-box-shadow: var(--cui-box-shadow-lg),
    --cui-drawer-transition-property: #{"transform, visibility"},
    --cui-drawer-transition-duration: .3s,
    --cui-drawer-transition-timing: var(--cui-transition-timing-overlay),
    --cui-drawer-title-line-height: var(--cui-body-line-height),
    --cui-drawer-body-gap: var(--cui-drawer-padding-y),
    --cui-drawer-footer-gap: .5rem,
    --cui-backdrop-color: var(--cui-bg-body),
    --cui-backdrop-opacity: 25%,
    --cui-drawer-backdrop-bg: color-mix(in oklch, var(--cui-backdrop-color) var(--cui-backdrop-opacity), transparent),
    --cui-drawer-backdrop-blur: var(--cui-backdrop-blur),
    --cui-drawer-scale-transform: scale(1.02),
  ),
  $drawer-tokens
);
```
