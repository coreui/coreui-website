# Bootstrap 6 Toaster

> Create toast notifications from JavaScript with the CoreUI Toaster: a store keyed by id with add, update, close and promise, a placed container, a visible-toasts limit and screen-reader priority.

## Overview

_Added in 6.0.0._

The `Toaster` plugin creates [toasts](https://coreui.io/bootstrap/docs/components/toasts/) from options, so nothing has to be in the markup up front. It keeps a store of the toasts it shows, keyed by id, and one instance serves the whole page: `add()` returns the id, `update()` rewrites a toast in place, `close()` hides one or all of them, and `promise()` follows an asynchronous operation through its loading, success and error states.

```js
const toaster = new coreui.Toaster(null, { placement: 'top-end', limit: 3 })
const id = toaster.add({ title: 'Saved', description: 'Your changes are live.', theme: 'success' })
toaster.update(id, { description: 'Done' })
toaster.close(id)
```

Without an element the toaster creates its own `.toast-container` in `<body>`, placed by the `placement` option; pass an existing container instead to keep control over where the toasts land. The container is a `region` landmark named `Notifications`, so users of assistive technology can navigate to it.

## Live example

Two toasters, each with its container in a top corner of the viewport: a list on the end side and a [stack](#stacking) on the start side. Every other example on this page passes a container that sits inside the example, so its toasts stay put.

```html
<button type="button" class="btn-solid theme-primary" id="toasterLiveBtn">Add a toast</button>
<button type="button" class="btn-solid theme-secondary" id="toasterLiveStackBtn">Add to the stack</button>
```

```js
const toaster = new coreui.Toaster(null, { placement: 'top-end' })
const stacked = new coreui.Toaster(null, { placement: 'top-start', stack: true, limit: 6 })

document.getElementById('toasterLiveBtn').addEventListener('click', () => {
  toaster.add({ title: 'CoreUI for Bootstrap', description: 'Hello, world! This is a toast message.' })
})

document.getElementById('toasterLiveStackBtn').addEventListener('click', () => {
  stacked.add({ title: 'CoreUI for Bootstrap', description: 'Hello, world! This one joins a stack.' })
})
```

## Title, description and theme

A toast is a plain options object. `title` renders the header with a close button, `description` the body; a toast without a title puts the close button in the body. `theme` adds the `theme-{color}` class, `priority: 'high'` has screen readers announce it right away, `timeout` overrides the toaster's default (`0` keeps the toast until it is closed) and `dismissible: false` drops the close button.

```html
<div class="hstack gap-3 flex-wrap mb-4">
  <button type="button" class="btn-solid theme-primary" id="toasterTitleBtn">Title and description</button>
  <button type="button" class="btn-solid theme-secondary" id="toasterDescriptionBtn">Description only</button>
  <button type="button" class="btn-solid theme-danger" id="toasterThemeBtn">Themed, high priority</button>
  <button type="button" class="btn-outline theme-secondary" id="toasterStickyBtn">Not dismissible</button>
</div>
<div class="toast-container position-static" id="toasterContent"></div>
```

```js
const toaster = new coreui.Toaster('#toasterContent', { timeout: 0 })

document.getElementById('toasterTitleBtn').addEventListener('click', () => {
  toaster.add({ title: 'Saved', description: 'Your changes are live.' })
})

document.getElementById('toasterDescriptionBtn').addEventListener('click', () => {
  toaster.add({ description: 'Copied to the clipboard' })
})

document.getElementById('toasterThemeBtn').addEventListener('click', () => {
  toaster.add({
    title: 'Payment failed', description: 'The card was declined.', theme: 'danger', priority: 'high'
  })
})

document.getElementById('toasterStickyBtn').addEventListener('click', () => {
  toaster.add({
    title: 'Read me', description: 'This one stays until you close it.', dismissible: false, timeout: 0
  })
})
```

Strings are written as text. Set `html: true` on the toaster to render markup; it runs through the same sanitizer as tooltips, configurable with `allowList` and `sanitizeFn`.

## Updating a toast

Passing an `id` that already exists updates that toast instead of adding a second one, and bumps its `updateKey`, so a "Draft saved" toast clicked twice stays a single toast. `update()` does the same for a toast whose id you kept, and accepts a function of the current toast when the change depends on it: `toaster.update(id, previous => ({ description: previous.data.step + 1 }))`. A toast that is already closing is not reused: adding its `id` again removes it at once and adds a new toast, which takes the newest place in the container.

```html
<div class="hstack gap-3 flex-wrap mb-4">
  <button type="button" class="btn-solid theme-primary" id="toasterDraftBtn">Save draft</button>
  <button type="button" class="btn-solid theme-secondary" id="toasterUploadBtn">Upload with progress</button>
</div>
<div class="toast-container position-static" id="toasterUpdate"></div>
```

```js
const toaster = new coreui.Toaster('#toasterUpdate', { timeout: 0 })
let saves = 0

document.getElementById('toasterDraftBtn').addEventListener('click', () => {
  saves += 1
  toaster.add({ id: 'draft', title: 'Draft saved', description: `Saved ${saves} time${saves === 1 ? '' : 's'}` })
})

document.getElementById('toasterUploadBtn').addEventListener('click', () => {
  const id = toaster.add({ title: 'Uploading…', description: '0 %' })
  let progress = 0

  const interval = setInterval(() => {
    progress += 25
    toaster.update(id, { description: `${progress} %` })

    if (progress === 100) {
      clearInterval(interval)
      toaster.update(id, { title: 'Uploaded', theme: 'success' })
    }
  }, 500)
})
```

## Promises

`promise()` adds a toast in the `loading` state and updates it when the promise settles: `success` receives the resolved value, `error` the rejection. Each state is a description string, a full options object, or a function returning either.

```html
<button type="button" class="btn-solid theme-primary mb-4" id="toasterPromiseBtn">Save</button>
<div class="toast-container position-static" id="toasterPromise"></div>
```

```js
const toaster = new coreui.Toaster('#toasterPromise', { timeout: 0 })

document.getElementById('toasterPromiseBtn').addEventListener('click', () => {
  const request = new Promise((resolve, reject) => {
    setTimeout(() => (Math.random() > 0.3 ? resolve('3 files') : reject(new Error('Network error'))), 2000)
  })

  toaster.promise(request, {
    loading: 'Saving…',
    success: files => `Saved ${files}`,
    error: error => ({ title: 'Not saved', description: error.message, priority: 'high' })
  }).catch(() => {})
})
```

## Action

`action` renders a button in the body; its `onClick` receives the click event and the toast object, so an undo can rewrite the same toast.

```html
<button type="button" class="btn-solid theme-primary mb-4" id="toasterArchiveBtn">Archive message</button>
<div class="toast-container position-static" id="toasterAction"></div>
```

```js
const toaster = new coreui.Toaster('#toasterAction', { timeout: 0 })

document.getElementById('toasterArchiveBtn').addEventListener('click', () => {
  toaster.add({
    description: 'Message archived',
    action: {
      label: 'Undo',
      onClick: (event, toast) => toaster.update(toast.id, { description: 'Message restored', action: null })
    }
  })
})
```

## Limit

`limit` caps how many toasts are visible at once. The newest stay on screen; older ones sink away from the edge and fade, remain in the DOM with `inert` and `data-coreui-limited`, and rise back in as the visible ones go away. `limit: 0` shows everything.

```html
<div class="hstack gap-3 mb-4">
  <button type="button" class="btn-solid theme-primary" id="toasterLimitBtn">Add a toast</button>
  <button type="button" class="btn-outline theme-secondary" id="toasterLimitCloseBtn">Close all</button>
</div>
<div class="toast-container position-static" id="toasterLimit"></div>
```

```js
const toaster = new coreui.Toaster('#toasterLimit', { limit: 2, timeout: 0 })
let count = 0

document.getElementById('toasterLimitBtn').addEventListener('click', () => {
  count += 1
  toaster.add({ title: `Toast ${count}`, description: 'Only two stay visible.' })
})

document.getElementById('toasterLimitCloseBtn').addEventListener('click', () => toaster.close())
```

## Stacking

With `stack: true` the toasts sit on top of each other: the newest in front at full size, the ones behind it scaled down by `--cui-toast-stack-scale` per step and receding towards a vanishing depth. The first toast behind peeks out by `--cui-toast-stack-peek` and every further one by that strip times the scale ratio, so the corners of the stack line up like a deck of cards seen in perspective. Only the front toast's timer runs; the ones behind wait their turn and start counting when they reach the front, so the stack empties from the front. A toast that leaves from behind — closed by id, or pushed over the limit — fades where it is instead of sliding out from under the deck. Hovering or focusing the container spreads the stack into a list; leaving it folds the stack back. The stack takes the place of the flow layout; `limit` decides how many toasts it holds. Folded, the deck shows the front toast and two behind it (`--cui-toast-stack-visible`); spreading it reveals every toast within the limit.

```html
<div class="hstack gap-3 mb-4">
  <button type="button" class="btn-solid theme-primary" id="toasterStackBtn">Add a toast</button>
  <button type="button" class="btn-outline theme-secondary" id="toasterStackCloseBtn">Close all</button>
</div>
<div class="toast-container position-relative" id="toasterStack"></div>
```

```js
const toaster = new coreui.Toaster('#toasterStack', { stack: true, limit: 0, timeout: 0 })
let count = 0

document.getElementById('toasterStackBtn').addEventListener('click', () => {
  count += 1
  toaster.add({ title: `Toast ${count}`, description: count % 2 ? 'Hover or focus the stack to spread it out.' : 'A shorter one.' })
})

document.getElementById('toasterStackCloseBtn').addEventListener('click', () => toaster.close())
```

The toaster keeps the geometry in tokens the CSS reads: `--cui-toast-stack-index`, `--cui-toast-stack-before` (the height of the toasts in front) and `--cui-toast-height` on each toast, `--cui-toast-stack-count`, `--cui-toast-stack-front-height` and `--cui-toast-stack-heights` on the container. Style the stack by these — the `data-coreui-stack-index` and `data-coreui-stack-hidden` attributes mark a toast's place in it.

A stack works in every placement: it grows away from the edge it is pinned to, so at the bottom the newest toast is the lowest one and the stack peeks upward.

```html
<div class="d-grid gap-3" style="grid-template-columns: repeat(3, 1fr); max-width: 30rem" id="toasterPlacementStack">
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="top-start">Top start</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="top-center">Top center</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="top-end">Top end</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="middle-start">Middle start</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="middle-center">Middle center</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="middle-end">Middle end</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="bottom-start">Bottom start</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="bottom-center">Bottom center</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="bottom-end">Bottom end</button>
</div>
```

```js
const stacks = new Map()

for (const button of document.querySelectorAll('#toasterPlacementStack [data-coreui-placement]')) {
  button.addEventListener('click', () => {
    const placement = button.dataset.coreuiPlacement

    if (!stacks.has(placement)) {
      stacks.set(placement, new coreui.Toaster(null, { placement, stack: true, limit: 0 }))
    }

    const toaster = stacks.get(placement)
    toaster.add({ title: `${placement} · ${toaster.getToasts().length + 1}`, description: 'Hover the stack to spread it.' })
  })
}
```

## Motion

A toast slides in from beyond the container's edge while it fades in — from the side in the `start` and `end` placements, from above in `top-center` and from below in `bottom-center` — and leaves the way it came, so the entry and the exit read as one gesture. `middle-center` sits in the middle of the screen with no edge to come from, so its toasts only fade. While a toast leaves, the ones behind it glide into the freed space; when a new one arrives, they make room the same way. `enter` picks another edge for the entry and `leave` for the exit — a `top-end` toaster can drop its toasts in from above and still send them out sideways — and a toast outside a placed container slides by `--cui-toast-slide` instead. `start` and `end` are logical: they follow the direction the container sits in, so under `dir="rtl"` they change sides along with the placement. All of it respects `prefers-reduced-motion`.

```js
const toaster = new coreui.Toaster(null, { placement: 'top-end', enter: 'top', leave: 'end' })
```

### Instant

A toast with `instant: true` skips all of it — no slide, no fade, no glide of its neighbours, no stack transition — and so does every toast when the user prefers reduced motion: the stylesheet emits no transitions under `prefers-reduced-motion: reduce` and the toaster skips its position animations, so toasts appear, move and vanish in place.

```html
<div class="hstack gap-3 mb-4">
  <button type="button" class="btn-solid theme-primary" id="toasterInstantBtn">Add an instant toast</button>
  <button type="button" class="btn-solid theme-secondary" id="toasterAnimatedBtn">Add an animated toast</button>
</div>
<div class="toast-container position-static" id="toasterInstant"></div>
```

```js
const toaster = new coreui.Toaster('#toasterInstant', { timeout: 3000 })

document.getElementById('toasterInstantBtn').addEventListener('click', () => {
  toaster.add({ title: 'Instant', description: 'No slide, no fade, no glide.', instant: true })
})

document.getElementById('toasterAnimatedBtn').addEventListener('click', () => {
  toaster.add({ title: 'Animated', description: 'Slides in and glides the others.' })
})
```

## Placement

`placement` pins the container the toaster creates to the viewport with one of the nine [`.toast-container-{block}-{inline}`](https://coreui.io/bootstrap/docs/components/toasts/#placement) classes: `top`, `middle` or `bottom` × `start`, `center` or `end`. In the `top` placements a new toast is inserted first, in the others last, so the newest always sits closest to the edge.

Each button below adds a toast through a toaster placed at that spot, so you can see where a toast enters from: from the side in the `start` and `end` columns, from above in `top-center` and from below in `bottom-center`, while `middle-center` fades in place.

```html
<div class="d-grid gap-3" style="grid-template-columns: repeat(3, 1fr); max-width: 30rem" id="toasterPlacement">
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="top-start">Top start</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="top-center">Top center</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="top-end">Top end</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="middle-start">Middle start</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="middle-center">Middle center</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="middle-end">Middle end</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="bottom-start">Bottom start</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="bottom-center">Bottom center</button>
  <button type="button" class="btn-outline theme-secondary" data-coreui-placement="bottom-end">Bottom end</button>
</div>
```

```js
const toasters = new Map()

for (const button of document.querySelectorAll('#toasterPlacement [data-coreui-placement]')) {
  button.addEventListener('click', () => {
    const placement = button.dataset.coreuiPlacement

    if (!toasters.has(placement)) {
      toasters.set(placement, new coreui.Toaster(null, { placement }))
    }

    toasters.get(placement).add({ title: placement, description: 'Slides in from the nearest edge.' })
  })
}
```

A container you pass in is used as is — position it yourself:

```js
const inline = new coreui.Toaster('#notifications')
```

## Accessibility

The container is a `region` landmark named by `ariaLabel` (`Notifications` by default), so screen-reader users can jump to it through landmark navigation. Every toast is read through [`announce()`](https://coreui.io/bootstrap/docs/accessibility/screen-readers/#announcing-messages) when it is added or updated: its `title` and `description` go to the polite live region of the page, or to the assertive one with `priority: 'high'`, as a message of their own, so toasts raised together are each announced instead of the last one overwriting the others. The message is sent once and belongs to the page, not to the container, so it still reaches the region when the toaster is disposed right after, and while a modal dialog is open it goes to a region inside that dialog, the one the toaster sits in included. Updating or removing a toast takes its message out of the region. Only that text is announced, never the close button or the action, and the toast element itself carries no live role. A toast added while a modal dialog plays its closing transition, or from `hidden.coreui.modal`, is announced on the page half a second after the dialog has closed, once the page is back for the screen reader; [Announcing messages](https://coreui.io/bootstrap/docs/accessibility/screen-readers/#announcing-messages) has the measurements. The close button is named by `ariaCloseLabel` (`Close` by default); set it once for the whole toaster in a translated interface. `normal`, the default, waits until the user is idle, unless the toast is added together with a `high` one, which takes both to the assertive region; keep `high` for the few messages that should interrupt, such as a failed save (WCAG 4.1.3 Status Messages).

Auto-hiding is a time limit on reading, which WCAG 2.2.1 Timing Adjustable asks you to let the user turn off, adjust or extend. Timers stop while the pointer or focus is inside the container (`pauseOnHover`), so a spread stack or a toast being read does not disappear mid-way, and the default `timeout` is the toaster's to set for the whole page. A toast with an action, or one the user must act on, should not hide on its own: give it `timeout: 0`, so keyboard and screen-reader users can reach the button. Toasts never take focus.

## Usage

Create a toaster once and keep the instance; every toast on the page goes through it.

```js
const toaster = new coreui.Toaster(null, { placement: 'bottom-end', limit: 3 })
const id = toaster.add({ title: 'Saved', description: 'Your changes are live.', theme: 'success' })
```

### Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value](https://coreui.io/bootstrap/docs/getting-started/javascript#sanitizer) | Tags and attributes allowed in toast content when `html` is `true`. |
| `ariaCloseLabel` | string | `'Close'` | Accessible name of every toast's close button. |
| `ariaLabel` | string | `'Notifications'` | Accessible name of the container's `region` landmark. |
| `container` | string, element | `'body'` | Where the toaster appends the container it creates. Ignored when the toaster is given an existing element. |
| `enter` | string | `'auto'` | Edge a toast slides in from: `'start'`, `'end'`, `'top'` or `'bottom'`. `'start'` and `'end'` are logical and follow the direction the container sits in. `'auto'` follows the placement — the side in the `start` and `end` columns, above in `top-center`, below in `bottom-center`, and no slide at all in `middle-center`. |
| `html` | boolean | `false` | Render `title` and `description` as HTML instead of text. |
| `leave` | string | `'auto'` | Edge a toast slides out to, taking the same values as `enter`. `'auto'` is the edge it came in from. |
| `limit` | number | `3` | How many toasts stay visible; the oldest beyond it are hidden and `inert` until a slot frees. `0` disables the limit. |
| `pauseOnHover` | boolean | `true` | Pause every toast's timer while the pointer or focus is inside the container, and resume when it leaves. Each toast still pauses on its own hover and focus. |
| `placement` | string | `'top-end'` | Corner or edge of the viewport for the container the toaster creates: `top`, `middle` or `bottom` × `start`, `center` or `end`. Toasts in the `top` placements are inserted first, in the others last, so the newest always sits closest to the edge. |
| `sanitize` | boolean | `true` | Sanitize HTML content. |
| `sanitizeFn` | null, function | `null` | Your own sanitizer, used instead of the built-in one. |
| `stack` | boolean | `false` | Stack the toasts on top of each other, newest in front, and spread them out on hover or focus. |
| `timeout` | number | `5000` | Default time (ms) before a toast hides. `0` keeps toasts until they are closed. |

### Toast options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | object, null | — | `{ label, onClick(event, toast) }` renders a button in the body. |
| `class` | string | — | Extra classes on the `.toast`. |
| `data` | object | — | Anything you want to read back from the toast object later, e.g. in `update(id, previous => …)`. |
| `description` | string, element, function | — | Body of the toast. |
| `dismissible` | boolean | `true` | Render the close button. |
| `id` | string | generated | Stable id; adding with an existing id updates that toast in place, unless it is already closing, in which case a new toast replaces it. |
| `instant` | boolean | `false` | Skip the fade (`.toast-instant`). |
| `onClose` | function | — | Called when the toast starts hiding, with the toast object. |
| `onRemove` | function | — | Called after the toast left the DOM, with the toast object. |
| `priority` | string | `'normal'` | Which live region announces the toast, as in [`announce()`](https://coreui.io/bootstrap/docs/accessibility/screen-readers/#announcing-messages): `'normal'` the polite one, `'high'` the assertive one, which also takes the normal toasts added together with it. |
| `theme` | string | — | Adds `theme-{color}`. |
| `timeout` | number | toaster's `timeout` | Time (ms) before this toast hides; `0` keeps it. |
| `title` | string, element, function | — | Header of the toast, with the close button next to it. |
| `translucent` | boolean | `false` | Adds `.toast-translucent`. |

### Methods

| Method | Description |
| --- | --- |
| `add(options)` | Renders and shows a toast. Returns its id. With an `id` that already exists it behaves like `update`, unless that toast is already closing. |
| `close(id?)` | Hides the toast, which removes it from the DOM and the store once the fade ends. Without an id, hides every toast. |
| `dispose` | Removes every toast, and the container if the toaster created it. |
| `getInstance` | *Static* method that returns the toaster bound to a container element. |
| `getOrCreateInstance` | *Static* method that returns the toaster bound to a container element or creates one on it. |
| `getToasts()` | The toast objects in insertion order, each with `id`, `updateKey`, `limited`, `element` and the options it was created with. |
| `pause()` / `resume()` | Stop and restart every toast's timer; `pauseOnHover` calls these for the container. |
| `promise(promise, { loading, success, error })` | Adds a toast in the `loading` state and updates it when the promise settles: `success` gets the resolved value, `error` the rejection. Each state is a description string or a full options object, or a function returning either. Returns the promise. |
| `update(id, options)` | Rewrites the toast in place and increments its `updateKey`. `options` may be a function receiving the current toast object and returning the changes. |

### Events

Events fire on the container. Each toast still fires the [toast events](https://coreui.io/bootstrap/docs/components/toasts/#events) on its own element.

| Event | Description |
| --- | --- |
| `add.coreui.toaster` | Fired after a toast was added; `event.id` is its id. |
| `remove.coreui.toaster` | Fired after a toast left the DOM; `event.id` is its id. |

## Customizing

### CSS variables

The toaster renders regular toasts, so their tokens apply — see the [toast CSS variables](https://coreui.io/bootstrap/docs/components/toasts/#css-variables). Four are its own: `--cui-toast-container-inset` on the container sets the distance from the viewport edge, `--cui-toast-translate` on the container is where a toast enters from and leaves to, overridden separately by `--cui-toast-enter-translate` and `--cui-toast-leave-translate` (the `enter` and `leave` options write those; set them yourself for any other offset), `--cui-toast-inline-sign` on the container is the `1` or `-1` those inline offsets are multiplied by, which is how `start` and `end` follow the direction, and `--cui-toast-limited-translate` on a toast sets where a toast over the limit sinks to.

```scss
--cui-toast-zindex: var(--cui-z-toast);
--cui-toast-container-inset: #{var(--cui-spacer-5)};
--cui-toast-inline-sign: 1;
--cui-toast-max-width: #{350px};
--cui-toast-spacing: #{$container-padding-x};
--cui-toast-transition-duration: #{.3s};
--cui-toast-transition-timing: #{ease-out};
```

The stack's peek, scale step and folded count are tokens on `.toast-container-stack`:

```scss
.toast-container-stack {
  --cui-toast-stack-peek: .75rem;
  --cui-toast-stack-scale: .1;
  // Every toast behind is scaled by the same ratio again and pushed towards a vanishing depth,
  // so the corners of the stack line up and each strip is the previous one times the ratio
  --cui-toast-stack-visible: 3;
  --cui-toast-stack-ratio: calc(1 - var(--cui-toast-stack-scale));
  --cui-toast-stack-depth: calc(var(--cui-toast-stack-front-height) + var(--cui-toast-stack-peek) / var(--cui-toast-stack-scale));
  --cui-toast-stack-last: calc(min(var(--cui-toast-stack-count), var(--cui-toast-stack-visible)) - 1);

  width: var(--cui-toast-max-width);
  max-width: 100%;
  height: calc(var(--cui-toast-stack-depth) * (1 - pow(var(--cui-toast-stack-ratio), var(--cui-toast-stack-last))) + var(--cui-toast-stack-front-height) * pow(var(--cui-toast-stack-ratio), var(--cui-toast-stack-last)));
  pointer-events: auto;
  @include transition-props(height, var(--cui-toast-transition-duration), var(--cui-toast-transition-timing));

  > .toast {
    position: absolute;
    inset-block-start: calc(var(--cui-toast-stack-depth) * (1 - pow(var(--cui-toast-stack-ratio), var(--cui-toast-stack-index))));
    inset-inline: 0;
    z-index: calc(var(--cui-toast-stack-count) - var(--cui-toast-stack-index));
    height: var(--cui-toast-stack-front-height);
    margin-block-end: 0;
    overflow: hidden;
    transform-origin: top center;
    scale: pow(var(--cui-toast-stack-ratio), var(--cui-toast-stack-index));

    &:not(.toast-instant) {
      @include transition-props(
        #{"opacity, translate, display, inset-block-start, height, scale"},
        var(--cui-toast-transition-duration),
        var(--cui-toast-transition-timing),
        allow-discrete
      );

      > * {
        @include transition-props(opacity, var(--cui-toast-transition-duration), var(--cui-toast-transition-timing));
      }
    }
  }

  > .toast:not([data-coreui-stack-index="0"]) {
    --cui-toast-leave-translate: 0 0;
    --cui-toast-limited-translate: 0 0;

    > * {
      opacity: 0;
    }
  }

  > .toast[data-coreui-stack-hidden] {
    pointer-events: none;
    opacity: 0;
  }

  &:is(:hover, :focus-within) {
    height: calc(var(--cui-toast-stack-heights) + (var(--cui-toast-stack-count) - 1) * var(--cui-toast-spacing));

    > .toast {
      inset-block-start: calc(var(--cui-toast-stack-before) + var(--cui-toast-stack-index) * var(--cui-toast-spacing));
      height: var(--cui-toast-height);
      scale: 1;

      > * {
        opacity: 1;
      }
    }

    > .toast[data-coreui-stack-hidden]:not([data-coreui-limited]) {
      pointer-events: auto;
      opacity: 1;
    }
  }
}

.toast-container-bottom-start.toast-container-stack,
.toast-container-bottom-center.toast-container-stack,
.toast-container-bottom-end.toast-container-stack {
  > .toast {
    inset-block-start: auto;
    inset-block-end: calc(var(--cui-toast-stack-depth) * (1 - pow(var(--cui-toast-stack-ratio), var(--cui-toast-stack-index))));
    transform-origin: bottom center;

    &:not(.toast-instant) {
      @include transition-props(
        #{"opacity, translate, display, inset-block-end, height, scale"},
        var(--cui-toast-transition-duration),
        var(--cui-toast-transition-timing),
        allow-discrete
      );
    }
  }

  &:is(:hover, :focus-within) > .toast {
    inset-block-end: calc(var(--cui-toast-stack-before) + var(--cui-toast-stack-index) * var(--cui-toast-spacing));
  }
}
```

### Sass variables

```scss
$toast-background-color:            var(--cui-bg-body) !default;
$toast-border-color:                var(--cui-border-color-translucent) !default;
```
