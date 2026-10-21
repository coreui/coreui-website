# Bootstrap 6 Toast

> Send push notifications to your visitors with a toast, a lightweight and easily customizable alert message.

Bootstrap toasts are lightweight notifications that mimic the push notifications popularized by mobile and desktop operating systems. They utilize flexbox, making them simple to align and position.

## Overview

Things to know when using the toast plugin:

- Toasts are opt-in for performance reasons, so **you must initialize them yourself**.
- Toasts will automatically hide if you do not specify `autohide: false`.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/getting-started/accessibility/#reduced-motion).

## Examples

### Basic

To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use `display: flex`, allowing easy alignment of content thanks to our margin and flexbox utilities.

Bootstrap toasts are as flexible as you need and require very little markup. At a minimum, you should have a single element containing your “toasted” content, and it's strongly recommended to include a dismiss button.

```html
<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <svg class="docs-placeholder-img rounded me-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
    <strong class="me-auto">CoreUI for Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
```

### Live example

Click the button below to display a toast (positioned with our utilities in the lower right corner) that is hidden by default.

```html
<div class="toast-container position-fixed bottom-0 end-0 p-4">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="docs-placeholder-img rounded me-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
      <strong class="me-auto">CoreUI for Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

<button type="button" class="btn-solid theme-primary" id="liveToastBtn">Show live toast</button>
```

We use the following JavaScript to trigger our live toast demo:

```js
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

const toastCoreUI = coreui.Toast.getOrCreateInstance(toastLiveExample)
toastTrigger.addEventListener('click', () => {
  toastCoreUI.show()
})
```

### Translucent

Add `.toast-translucent` to let the background through the toast and blur it. The header thins out with it, so the whole toast reads as one surface.

```html
<div class="toast toast-translucent show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <svg class="docs-placeholder-img rounded me-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
    <strong class="me-auto">CoreUI for Bootstrap</strong>
    <small class="fg-2">11 mins ago</small>
    <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
```

### Stacking

Wrap toasts in a toast container to stack them, which adds vertical spacing.

```html
<div class="toast-container position-static">
  <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="docs-placeholder-img rounded me-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
      <strong class="me-auto">CoreUI for Bootstrap</strong>
      <small class="fg-2">just now</small>
      <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      See? Just like this.
    </div>
  </div>

  <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="docs-placeholder-img rounded me-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
      <strong class="me-auto">CoreUI for Bootstrap</strong>
      <small class="fg-2">2 seconds ago</small>
      <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Heads up, toasts will stack automatically
    </div>
  </div>
</div>
```

### Dark toasts

Set `data-coreui-theme="dark"` on a toast to render it dark whatever [color mode](https://coreui.io/bootstrap/docs/customize/color-modes/) the page is in:

```html
<div class="toast show" data-coreui-theme="dark" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">Deployment</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">Build finished and deployed to production.</div>
</div>
```

### Variants

A [theme class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) tints the toast's border and header. Add it to the toast to recolor the whole notification:

```html
<div class="toast theme-success show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">Deployment</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">Build finished and deployed to production.</div>
</div>

<div class="toast theme-danger show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">Deployment</strong>
    <small>2 seconds ago</small>
    <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">Build failed on step 4 of 9.</div>
</div>
```

The same classes work on a single part of a toast, so the body can stay neutral while the header carries the theme:

```html
<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header theme-warning">
    <strong class="me-auto">Certificate</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">The TLS certificate expires in 7 days.</div>
</div>
```

Theme classes also apply from an ancestor, so a themed container passes its colors to every toast inside it.

### Custom content

Customize your toasts by removing sub-components, adjusting them with [utilities](https://coreui.io/bootstrap/docs/utilities/api/), or adding your own markup. In this example, we've made a simpler toast by removing the default `.toast-header`, incorporating a custom hide icon from [CoreUI Icons](https://coreui.io/icons/), and using [flexbox utilities](https://coreui.io/bootstrap/docs/utilities/flex/) to modify the layout.

```html
<div class="toast align-items-center show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
    Hello, world! This is a toast message.
   </div>
    <button type="button" class="btn-close me-3 m-auto" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
```

Alternatively, you can also add additional controls and components to toasts.

```html
<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
    <div class="mt-3 pt-3 border-top">
      <button type="button" class="btn-solid theme-primary btn-sm">Take action</button>
      <button type="button" class="btn-solid theme-secondary btn-sm" data-coreui-dismiss="toast">Close</button>
    </div>
  </div>
</div>
```

### Color schemes

Building on the previous example, you can design various toast color schemes using our [color](https://coreui.io/bootstrap/docs/utilities/colors/) and [background](https://coreui.io/bootstrap/docs/utilities/background/) utilities. We added `.text-bg-primary` to the `.toast`; the close button takes the colour it inherits, so it stays legible on its own. To achieve a clean edge, we remove the default border with `.border-0`.

```html
<div class="toast align-items-center text-bg-primary border-0 show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close me-3 m-auto" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
```

### Instant

By default, toasts fade in and out. To disable the animation, add `.toast-instant` to the toast. The `show` and `hide` methods then finish immediately, so `shown.coreui.toast` and `hidden.coreui.toast` fire right away.

```html
<div class="toast toast-instant show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <svg class="docs-placeholder-img rounded me-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
    <strong class="me-auto">CoreUI for Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    This toast appears and disappears instantly.
  </div>
</div>
```

## Placement

_Added in 6.0.0._

Nine `.toast-container-{block}-{inline}` classes pin the container to the viewport: `block` is `top`, `middle` or `bottom`, `inline` is `start`, `center` or `end`. They set `position: fixed` and read the distance from the edge from `--cui-toast-container-inset` (`--cui-spacer-5` by default). Inside a positioned box — like the example below — add `.position-absolute` to pin the container to that box instead of the viewport.

```html
<form>
  <div class="mb-4">
    <label for="selectToastPlacement">Toast placement</label>
    <select class="form-control mt-3" id="selectToastPlacement">
      <option value="" selected>Select a position...</option>
      <option value="toast-container-top-start">Top start</option>
      <option value="toast-container-top-center">Top center</option>
      <option value="toast-container-top-end">Top end</option>
      <option value="toast-container-middle-start">Middle start</option>
      <option value="toast-container-middle-center">Middle center</option>
      <option value="toast-container-middle-end">Middle end</option>
      <option value="toast-container-bottom-start">Bottom start</option>
      <option value="toast-container-bottom-center">Bottom center</option>
      <option value="toast-container-bottom-end">Bottom end</option>
    </select>
  </div>
</form>
<div aria-live="polite" aria-atomic="true" class="bg-black position-relative docs-example-toasts">
  <div class="toast-container position-absolute" id="toastPlacement">
    <div class="toast show">
      <div class="toast-header">
        <svg class="docs-placeholder-img rounded me-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
        <strong class="me-auto">CoreUI for Bootstrap</strong>
        <small>11 mins ago</small>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</div>
```

For systems that generate more notifications, consider using a wrapping element to allow them to stack easily.

```html
<div aria-live="polite" aria-atomic="true" class="position-relative">
  <!-- Position it: -->
  <!-- - `.toast-container` for spacing between toasts -->
  <!-- - `.toast-container-top-end` to pin the toasts to the upper end corner, inset by the container's inset token -->
  <!-- - `.position-absolute` to pin them to this box rather than the viewport -->
  <div class="toast-container toast-container-top-end position-absolute">

    <!-- Then put toasts within -->
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <svg class="docs-placeholder-img rounded me-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
        <strong class="me-auto">CoreUI for Bootstrap</strong>
        <small class="fg-2">just now</small>
        <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div>

    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <svg class="docs-placeholder-img rounded me-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
        <strong class="me-auto">CoreUI for Bootstrap</strong>
        <small class="fg-2">2 seconds ago</small>
        <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Heads up, toasts will stack automatically
      </div>
    </div>
  </div>
</div>
```

You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.

```html
<!-- Flexbox container for aligning the toasts -->
<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

  <!-- Then put toasts within -->
  <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="docs-placeholder-img rounded me-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
      <strong class="me-auto">CoreUI for Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
```

## Toaster

Toasts you create at runtime — from a form submission, a request that settled, a background job — come from the [Toaster](https://coreui.io/bootstrap/docs/components/toaster/): a store keyed by id with `add()`, `update()`, `close()` and `promise()`, its own placed container, announcements through [`announce()`](https://coreui.io/bootstrap/docs/getting-started/accessibility/#announcing-messages), a visible-toasts limit and screen-reader priority. The markup and classes on this page are what it renders.

## Accessibility

Toasts are meant to be brief interruptions for your visitors or users. To assist those using screen readers and similar assistive technologies, you should wrap your toasts in an [`aria-live` region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Changes to live regions, such as injecting or updating a toast component, are automatically announced by screen readers without moving the user's focus or interrupting the user. Additionally, include `aria-atomic="true"` to ensure the entire toast is announced as a single, unfragmented unit, rather than just announcing what changed—this prevents issues if only part of the toast is updated or if the same toast appears again later. If the information is critical to the process, such as a list of form errors, use the [alert component](https://coreui.io/bootstrap/docs/components/alerts/) instead of a toast.

Note that the live region must exist in the markup *before* the toast is generated or updated. If you generate both dynamically and inject them simultaneously, assistive technologies generally will not announce them.

You should also adjust the `role` and `aria-live` level based on the content. For important messages like errors, use `role="alert" aria-live="assertive"`; otherwise, use `role="status" aria-live="polite"`.

As the content changes, remember to update the [`delay` timeout](#options) so users have enough time to read the toast.

```html
<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-coreui-delay="10000">
  <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
</div>
```

When using `autohide: false`, you need to add a close button to let users dismiss the toast.

```html
<div role="alert" aria-live="assertive" aria-atomic="true" class="toast show" data-coreui-autohide="false">
  <div class="toast-header">
    <svg class="docs-placeholder-img rounded me-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
    <strong class="me-auto">CoreUI for Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
```

While technically it's possible to add focusable or actionable controls, such as additional buttons or links, to your toast, you should avoid doing this with autohiding toasts. Even if you set a long [`delay` timeout](#options), keyboard and assistive technology users might find it hard to reach the toast in time to act because toasts don't receive focus when they appear. If you absolutely need to have additional controls, we recommend using a toast with `autohide: false`.

## Usage

Initialize toasts using JavaScript:

```js
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new coreui.Toast(toastEl, option))
```

### Triggers

Dismissal can be achieved with the `data` attribute on a button **within the toast** as demonstrated below:

```html
<button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-autohide="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autohide` | boolean | `true` | Hides the Bootstrap toast automatically |
| `delay` | number | `5000` | Sets delay before hiding the toast (ms) |

### Methods

> #### Promises and transitions
> 
> **Methods that show or hide a component return a promise.** The promise resolves when the transition ends, so `await` continues at the same moment a `shown.coreui.*` or `hidden.coreui.*` listener runs. The methods still return immediately and never block the caller. A call on a component that is already transitioning does nothing and resolves right away.
> 
> [Refer to our JavaScript documentation for further details](https://coreui.io/bootstrap/docs/getting-started/javascript/#promises-and-transitions).

| Method | Description |
| --- | --- |
| `dispose` | Hides an element's toast. Your Bootstrap toast will stay in the DOM but won't be visible anymore. |
| `getInstance` | *Static* method that allows you to get the toast instance associated with a DOM element. For example: `const myToastEl = document.getElementById('myToastEl')` and `const myToast = coreui.Toast.getInstance(myToastEl)`. Returns a Bootstrap toast instance.
| `getOrCreateInstance` | *Static* method that gets the toast instance associated with a DOM element or creates a new one if it wasn't initialized. For example: `const myToastEl = document.getElementById('myToastEl')` and `const myToast = coreui.Toast.getOrCreateInstance(myToastEl)`. Returns a Bootstrap toast instance.
| `hide` | Hides an element's toast. **Returns a promise that resolves after the toast is hidden** (i.e., after the `hidden.coreui.toast` event occurs). You need to manually call this method if you set `autohide` to `false`. |
| `isShown` | Returns a boolean indicating the toast's visibility state. |
| `show` | Reveals an element's toast. **Returns a promise that resolves after the toast is shown** (i.e., after the `shown.coreui.toast` event occurs). You need to call this method manually; otherwise, your toast won't appear. |

### Events

| Event | Description |
| --- | --- |
| `hidden.coreui.toast` | This event occurs when the toast has finished hiding from the user. |
| `hide.coreui.toast` | This event is triggered immediately when the `hide` instance method is called. |
| `show.coreui.toast` | This event triggers immediately when the `show` instance method is called. |
| `shown.coreui.toast` | This event occurs when the toast has become visible to the user. |

```js
const myToastEl = document.getElementById('myToast')
myToastEl.addEventListener('hidden.coreui.toast', () => {
  // do something...
})
```

## Customizing

### CSS variables

Toasts use local CSS variables on `.toast` for enhanced real-time customization.

```scss
$toast-tokens: defaults(
  (
    --cui-toast-zindex: var(--cui-z-toast),
    --cui-toast-padding-x: .75rem,
    --cui-toast-padding-y: .5rem,
    --cui-toast-spacing: #{$container-padding-x},
    --cui-toast-max-width: #{350px},
    --cui-toast-color: var(--cui-fg-body),
    --cui-toast-bg: #{$toast-background-color},
    --cui-toast-border-width: var(--cui-border-width),
    --cui-toast-border-color: #{$toast-border-color},
    --cui-toast-border-radius: var(--cui-radius-7),
    --cui-toast-box-shadow: var(--cui-box-shadow),
    --cui-toast-header-color: var(--cui-fg-3),
    --cui-toast-header-bg: #{$toast-background-color},
    --cui-toast-header-border-color: #{$toast-border-color},
    --cui-toast-font-size: .875rem,
    --cui-toast-slide: .5rem,
    --cui-toast-transition-property: #{"opacity, translate, display"},
    --cui-toast-transition-duration: #{.3s},
    --cui-toast-transition-timing: #{ease-out},
  ),
  $toast-tokens
);
```

The container declares its own two, on `.toast-container`:

```scss
--cui-toast-zindex: var(--cui-z-toast);
--cui-toast-container-inset: #{var(--cui-spacer-5)};
--cui-toast-inline-sign: 1;
--cui-toast-max-width: #{350px};
--cui-toast-spacing: #{$container-padding-x};
--cui-toast-transition-duration: #{.3s};
--cui-toast-transition-timing: #{ease-out};
```

### Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$toast-background-color:            var(--cui-bg-body) !default;
$toast-border-color:                var(--cui-border-color-translucent) !default;
```
