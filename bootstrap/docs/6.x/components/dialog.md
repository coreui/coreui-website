# Bootstrap Dialog

> Bootstrap Dialog component built on the native <dialog> element — top layer rendering, blurred native backdrop, focus trapping, and accessible semantics out of the box.

## Overview

_Added in 6.0.0._

The Dialog component renders popups on the browser's native `<dialog>` element, providing built-in accessibility, focus management, and backdrop handling without the complexity of custom implementations. It follows the design Bootstrap 6 introduces under the same name — a centered floating panel over a blurred backdrop.

Dialog shares its base behavior with [Modal](https://coreui.io/bootstrap/docs/components/modal/). Modal keeps the classic modal look and the v5 vocabulary; Dialog carries the new Bootstrap 6 look and the `dialog-*` classes. Pick one — they are independent components.

Key features of the native dialog:

- **Modal or non-modal** via `showModal()` / `show()` — `modal: true` (default) promotes the dialog to the browser's top layer with a backdrop and focus trapping; `modal: false` renders it non-modally, leaving the page interactive.
- **Built-in backdrop** using the `::backdrop` pseudo-element, with a blur effect; set `backdrop: "static"` to lock clicks outside, or `backdrop: false` to visually suppress it.
- **Escape key handling** closes the dialog by default; set `keyboard: false` to disable.
- **Accessibility** — focus is trapped inside modal dialogs and returned to the trigger on close, with native `<dialog>` ARIA semantics: no `role`, `aria-modal`, `aria-hidden`, or `tabindex` attributes in the markup.
- **Animated open and close** — the exit transition (including the `::backdrop` fade) plays in every browser, because the plugin keeps the dialog in the top layer until the transition ends.

## Example

Toggle a dialog by clicking the button below.

<dialog class="dialog" id="exampleDialog" aria-labelledby="exampleDialogLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleDialogLabel">Dialog title</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>This is a native dialog element. It uses the browser's built-in modal behavior for accessibility and focus management.</p>
  </div>
  <div class="dialog-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="dialog">Close</button>
    <button type="button" class="btn-solid theme-primary">Save changes</button>
  </div>
</dialog>

```html
<button type="button" class="btn-solid theme-primary" data-coreui-toggle="dialog" data-coreui-target="#exampleDialog">
  Open dialog
</button>

<dialog class="dialog" id="exampleDialog" aria-labelledby="exampleDialogLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleDialogLabel">Dialog title</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>This is a native dialog element.</p>
  </div>
  <div class="dialog-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="dialog">Close</button>
    <button type="button" class="btn-solid theme-primary">Save changes</button>
  </div>
</dialog>
```

## Slide animations

Dialogs fade in and out by default. Add `.dialog-slide-down` to slide in from above, or `.dialog-slide-up` to slide in from below — the exit reverses the entry.

<dialog class="dialog dialog-slide-down" id="exampleDialogSlideDown" aria-labelledby="exampleDialogSlideDownLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleDialogSlideDownLabel">Slide down</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>This dialog slides in from above.</p>
  </div>
</dialog>

<dialog class="dialog dialog-slide-up" id="exampleDialogSlideUp" aria-labelledby="exampleDialogSlideUpLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleDialogSlideUpLabel">Slide up</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>This dialog slides in from below.</p>
  </div>
</dialog>

```html
<dialog class="dialog dialog-slide-down">...</dialog>
<dialog class="dialog dialog-slide-up">...</dialog>
```

To disable animation entirely, add `.dialog-instant`.

## Static backdrop

When backdrop is set to `static`, the dialog will not close when clicking outside of it — it plays a scale "bounce" instead.

<dialog class="dialog" id="exampleDialogStatic" data-coreui-backdrop="static" data-coreui-keyboard="false" aria-labelledby="exampleDialogStaticLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleDialogStaticLabel">Dialog title</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>I will not close if you click outside of me. Don't even try to press escape key.</p>
  </div>
  <div class="dialog-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="dialog">Close</button>
    <button type="button" class="btn-solid theme-primary">Understood</button>
  </div>
</dialog>

## Backdrop

The backdrop reads three tokens from `:root` — `--cui-backdrop-color`, `--cui-backdrop-opacity` and `--cui-backdrop-blur` — and every overlay component paints it the same way. A dialog defaults to a dark scrim; the drawer defaults to a translucent tint of the page. Pick the other look with a [backdrop preset](https://coreui.io/bootstrap/docs/helpers/backdrop/) on the element: `.backdrop-translucent` here, `.backdrop-scrim` on a drawer, `.backdrop-none` on either.

<dialog class="dialog backdrop-translucent" id="exampleDialogTranslucent" aria-labelledby="exampleDialogTranslucentLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleDialogTranslucentLabel">Translucent backdrop</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>The page behind stays readable through a light tint instead of a dark scrim.</p>
  </div>
</dialog>

```html
<dialog class="dialog backdrop-translucent" id="exampleDialogTranslucent" aria-labelledby="exampleDialogTranslucentLabel">
  …
</dialog>
```

## Scrolling long content

Add `.dialog-scrollable` — the header and footer stay fixed while the dialog body scrolls.

<dialog class="dialog dialog-scrollable" id="exampleDialogScrollable" aria-labelledby="exampleDialogScrollableLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleDialogScrollableLabel">Dialog title</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>This is some placeholder content to show the scrolling behavior for dialogs. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling.</p>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <p>This content should appear at the bottom after you scroll.</p>
  </div>
  <div class="dialog-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="dialog">Close</button>
    <button type="button" class="btn-solid theme-primary">Save changes</button>
  </div>
</dialog>

```html
<dialog class="dialog dialog-scrollable">
  ...
</dialog>
```

## Toggle between dialogs

When a trigger sits inside an open dialog, the component swaps to the target dialog seamlessly — the backdrop stays up without flashing. The swap fires `show.coreui.dialog` on the target and `hide.coreui.dialog` on the open dialog before it changes either one; when a handler cancels either event, or one of the two dialogs is still opening or closing, the open dialog stays as it is.

```html
<dialog class="dialog" id="exampleDialogToggle" aria-labelledby="exampleDialogToggleLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleDialogToggleLabel">Dialog 1</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    Show a second dialog and hide this one with the button below.
  </div>
  <div class="dialog-footer">
    <button class="btn-solid theme-primary" data-coreui-target="#exampleDialogToggle2" data-coreui-toggle="dialog">Open second dialog</button>
  </div>
</dialog>
<dialog class="dialog" id="exampleDialogToggle2" aria-labelledby="exampleDialogToggleLabel2">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleDialogToggleLabel2">Dialog 2</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    Hide this dialog and show the first with the button below.
  </div>
  <div class="dialog-footer">
    <button class="btn-solid theme-primary" data-coreui-target="#exampleDialogToggle" data-coreui-toggle="dialog">Back to first</button>
  </div>
</dialog>
<button class="btn-solid theme-primary" data-coreui-target="#exampleDialogToggle" data-coreui-toggle="dialog">Open first dialog</button>
```

## Non-modal dialogs

Set the `modal` option to `false` to show the dialog without the top layer — no backdrop, no focus trap, and the rest of the page stays interactive.

<dialog class="dialog" id="exampleDialogNonModal" data-coreui-modal="false" aria-labelledby="exampleDialogNonModalLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleDialogNonModalLabel">Non-modal dialog</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>The rest of the page stays interactive while this dialog is open.</p>
  </div>
</dialog>

```html
<dialog class="dialog" id="myDialog" data-coreui-modal="false">
  ...
</dialog>
```

## Optional sizes

Dialogs have three optional sizes, available via modifier classes placed on the `<dialog class="dialog">`.

| Size | Class | Dialog max-width
| --- | --- | --- |
| Small | `.dialog-sm` | `280px` |
| Default | <span class="fg-2">None</span> | `500px` |
| Large | `.dialog-lg` | `800px` |
| Extra large | `.dialog-xl` | `1140px` |

```html
<dialog class="dialog dialog-xl">...</dialog>
<dialog class="dialog dialog-lg">...</dialog>
<dialog class="dialog dialog-sm">...</dialog>
```

## Fullscreen dialog

Pop up a dialog that covers the user viewport, via modifier classes placed on the `<dialog class="dialog">`.

| Class | Availability |
| --- | --- |
| `.dialog-fullscreen` | Always |
| `.dialog-fullscreen-sm-down` | `576px` |
| `.dialog-fullscreen-md-down` | `768px` |
| `.dialog-fullscreen-lg-down` | `1024px` |
| `.dialog-fullscreen-xl-down` | `1280px` |
| `.dialog-fullscreen-2xl-down` | `1536px` |

```html
<dialog class="dialog dialog-fullscreen-sm-down">
  ...
</dialog>
```

## Dark variant

Put `data-coreui-theme="dark"` on the `<dialog>` and it flips the tokens its own surface reads, so the dialog and everything in it — including the close button — turns dark on a light page.

<dialog class="dialog" id="darkDialog" data-coreui-theme="dark" aria-labelledby="darkDialogLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="darkDialogLabel">Dark dialog</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>The surface, the text and the dividers all read the flipped tokens.</p>
  </div>
  <div class="dialog-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="dialog">Close</button>
  </div>
</dialog>

```html
<dialog class="dialog" data-coreui-theme="dark">
  ...
</dialog>
```

## Accessibility

Be sure to add `aria-labelledby="..."`, referencing the dialog title, to the `<dialog>`. Additionally, you may give a description of your dialog with `aria-describedby`. The native `<dialog>` element already provides the dialog role, `aria-modal` semantics, focus trapping, and background inertness — don't add `role`, `aria-modal`, `aria-hidden`, or `tabindex` yourself.

## Usage

### Via data attributes

Set `data-coreui-toggle="dialog"` on a controller element, like a button, along with a `data-coreui-target="#foo"` or `href="#foo"` to target a specific dialog to toggle. Dismiss from within with `data-coreui-dismiss="dialog"`.

### Via JavaScript

```js
const myDialog = new coreui.Dialog(document.getElementById('myDialog'), options)
// or
const myDialogAlternative = new coreui.Dialog('#myDialog', options)
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-backdrop="static"`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean, `'static'` | `true` | Shows the native `::backdrop` behind the dialog. Alternatively, specify `static` for a backdrop which doesn't close the dialog when clicked, or `false` to visually suppress it. |
| `keyboard` | boolean | `true` | Closes the dialog when escape key is pressed. |
| `modal` | boolean | `true` | Opens the dialog in the browser's top layer with a backdrop and focus trapping. Set to `false` for a non-modal dialog that leaves the rest of the page interactive. |

### Methods

> #### Promises and transitions
> 
> **Methods that show or hide a component return a promise.** The promise resolves when the transition ends, so `await` continues at the same moment a `shown.coreui.*` or `hidden.coreui.*` listener runs. The methods still return immediately and never block the caller. A call on a component that is already transitioning does nothing and resolves right away.
> 
> [Refer to our JavaScript documentation for further details](https://coreui.io/bootstrap/docs/getting-started/javascript/#promises-and-transitions).

| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's dialog. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method which allows you to get the dialog instance associated with a DOM element. |
| `getOrCreateInstance` | *Static* method which allows you to get the dialog instance associated with a DOM element, or create a new one in case it wasn't initialized. |
| `handleUpdate` | Provided for API consistency with Modal — the native `<dialog>` needs no manual adjustments. |
| `hide` | Manually hides a dialog. **Returns a promise that resolves after the dialog is hidden** (i.e. after the `hidden.coreui.dialog` event occurs). |
| `show` | Manually opens a dialog. **Returns a promise that resolves after the dialog is shown** (i.e. after the `shown.coreui.dialog` event occurs). Also, you can pass a DOM element as an argument that can be received in the dialog events (as the `relatedTarget` property). |
| `toggle` | Manually toggles a dialog. **Returns a promise that resolves after the dialog is shown or hidden** (i.e. after the `shown.coreui.dialog` or `hidden.coreui.dialog` event occurs). |

### Events

All dialog events are fired at the dialog itself (i.e. at the `<dialog class="dialog">`).

| Event | Description |
| --- | --- |
| `cancel.coreui.dialog` | This event is fired when the dialog is dismissed with the escape key, right before hiding starts. |
| `hidden.coreui.dialog` | This event is fired when the dialog has finished being hidden from the user (will wait for CSS transitions to complete). |
| `hide.coreui.dialog` | This event is fired immediately when the `hide` instance method has been called. |
| `hidePrevented.coreui.dialog` | This event is fired when the dialog is shown, its backdrop is `static` and a click outside of the dialog is performed. The event is also fired when the escape key is pressed and the `keyboard` option is set to `false`. |
| `show.coreui.dialog` | This event fires immediately when the `show` instance method is called. If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |
| `shown.coreui.dialog` | This event is fired when the dialog has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |

```js
const myDialogEl = document.getElementById('myDialog')
myDialogEl.addEventListener('hidden.coreui.dialog', event => {
  // do something...
})
```

## Customizing

### CSS variables

Dialogs use local CSS variables on `.dialog` for enhanced real-time customization.

```scss
$dialog-tokens: defaults(
  (
    --cui-dialog-zindex: var(--cui-z-dialog),
    --cui-dialog-padding-y: var(--cui-spacer),
    --cui-dialog-padding-x: var(--cui-spacer),
    --cui-dialog-width: 500px,
    --cui-dialog-margin: 1.75rem,
    --cui-dialog-color: var(--cui-fg-body),
    --cui-dialog-bg: var(--cui-bg-body),
    --cui-dialog-border-color: var(--cui-border-color-translucent),
    --cui-dialog-border-width: var(--cui-border-width),
    --cui-dialog-border-radius: var(--cui-radius-7),
    --cui-dialog-box-shadow: var(--cui-box-shadow-lg),
    --cui-dialog-transition-property: #{"opacity, transform, visibility"},
    --cui-dialog-transition-duration: .3s,
    --cui-dialog-transition-timing: var(--cui-transition-timing-overlay),
    --cui-dialog-backdrop-bg: color-mix(in oklch, var(--cui-backdrop-color) var(--cui-backdrop-opacity), transparent),
    --cui-dialog-backdrop-blur: var(--cui-backdrop-blur),
    --cui-dialog-header-padding-y: var(--cui-spacer),
    --cui-dialog-header-padding-x: var(--cui-spacer),
    --cui-dialog-header-border-color: var(--cui-border-color-translucent),
    --cui-dialog-header-border-width: var(--cui-border-width),
    --cui-dialog-title-line-height: var(--cui-body-line-height),
    --cui-dialog-footer-padding-y: var(--cui-spacer),
    --cui-dialog-footer-padding-x: var(--cui-spacer),
    --cui-dialog-footer-border-color: var(--cui-border-color-translucent),
    --cui-dialog-footer-border-width: var(--cui-border-width),
    --cui-dialog-footer-gap: .5rem,
    --cui-dialog-slide-distance: 3rem,
    --cui-dialog-scale-transform: scale(1.02),
  ),
  $dialog-tokens
);
```

### Sass maps

Each entry is one `.dialog-{size}` class and the width it sets, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
$dialog-sizes: () !default;
$dialog-sizes: defaults(
  (
    sm: 280px,
    lg: 800px,
    xl: 1140px,
  ),
  $dialog-sizes
);
```
