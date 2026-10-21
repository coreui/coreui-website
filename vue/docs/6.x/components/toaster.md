# Vue Toaster Component

> Create toast notifications from anywhere in a Vue app with the CoreUI Toaster: a store keyed by id with add, update, close and promise, a placed container, a visible-toasts limit and screen-reader priority.

## Overview

_Added in 6.0.0._

`createToaster()` creates a store of [toasts](https://coreui.io/vue/docs/components/toast/) that lives outside the component tree, so a toast can be added from anywhere — a composable, a Pinia action, a fetch wrapper — without any markup up front. `` renders a `<CToast>` for every entry, keyed by id, and one pair serves the whole app: `add()` returns the id, `update()` rewrites a toast in place, `close()` hides one or all of them, and `promise()` follows an asynchronous operation through its loading, success and error states.

```ts
import { createToaster } from '@coreui/vue'

export const toaster = createToaster({ placement: 'top-end', limit: 3 })

const id = toaster.add({ title: 'Saved', description: 'Your changes are live.', theme: 'success' })
toaster.update(id, { description: 'Done' })
toaster.close(id)
```

The store carries the placement, so `` needs nothing else; the container is a `region` landmark named `Notifications`, and users of assistive technology can navigate to it.

## Live example

Two toasters, each with its container in a top corner of the viewport: a list on the end side and a [stack](#stacking) on the start side. Every other example on this page renders its container inside the example, so its toasts stay put.

```html
<template>
  <CButton theme="primary" @click="addToast">Add a toast</CButton>
  <CButton theme="secondary" @click="addToStack">Add to the stack</CButton>
  <CToaster :toaster="toaster" />
  <CToaster :toaster="stacked" />
</template>

<script setup>
import { CButton, CToaster, createToaster } from '@coreui/vue'

const toaster = createToaster({ placement: 'top-end' })
const stacked = createToaster({ placement: 'top-start', stack: true, limit: 6 })

const addToast = () => {
  toaster.add({
    title: 'CoreUI for Vue.js',
    description: 'Hello, world! This is a toast message.',
  })
}

const addToStack = () => {
  stacked.add({
    title: 'CoreUI for Vue.js',
    description: 'Hello, world! This one joins a stack.',
  })
}
</script>
```

## Title, description and theme

A toast is a plain options object. `title` renders the header with a close button, `description` the body; a toast without a title puts the close button in the body. `theme` adds the `theme-{color}` class, `priority: 'high'` has screen readers announce it right away, `timeout` overrides the toaster's default (`0` keeps the toast until it is closed) and `dismissible: false` drops the close button.

```html
<template>
  <div class="hstack gap-3 flex-wrap mb-4">
    <CButton theme="primary" @click="addTitled">Title and description</CButton>
    <CButton theme="secondary" @click="addDescription">Description only</CButton>
    <CButton theme="danger" @click="addThemed">Themed, high priority</CButton>
    <CButton theme="secondary" variant="outline" @click="addSticky">Not dismissible</CButton>
  </div>
  <CToaster :toaster="toaster" class="position-static" />
</template>

<script setup>
import { CButton, CToaster, createToaster } from '@coreui/vue'

const toaster = createToaster({ timeout: 0 })

const addTitled = () => toaster.add({ title: 'Saved', description: 'Your changes are live.' })

const addDescription = () => toaster.add({ description: 'Copied to the clipboard' })

const addThemed = () =>
  toaster.add({
    title: 'Payment failed',
    description: 'The card was declined.',
    theme: 'danger',
    priority: 'high',
  })

const addSticky = () =>
  toaster.add({
    title: 'Read me',
    description: 'This one stays until you close it.',
    dismissible: false,
    timeout: 0,
  })
</script>
```

`title` and `description` take a string or a `VNode`; for a body of your own pass `render: (toast) => VNode` and the toast object — `id`, `data`, `updateKey` and every option — is yours to read. Components rendered inside a `<CToaster>` reach the store with `useToaster()`.

## Updating a toast

Passing an `id` that already exists updates that toast instead of adding a second one, and bumps its `updateKey`, so a "Draft saved" toast clicked twice stays a single toast. `update()` does the same for a toast whose id you kept, and accepts a function of the current toast when the change depends on it: `toaster.update(id, (previous) => ({ description: previous.data.step + 1 }))`. A toast that is already closing is not reused: adding its `id` again removes it at once and adds a new toast, which takes the newest place in the container.

```html
<template>
  <div class="hstack gap-3 flex-wrap mb-4">
    <CButton theme="primary" @click="saveDraft">Save draft</CButton>
    <CButton theme="secondary" @click="upload">Upload with progress</CButton>
  </div>
  <CToaster :toaster="toaster" class="position-static" />
</template>

<script setup>
import { CButton, CToaster, createToaster } from '@coreui/vue'

const toaster = createToaster({ timeout: 0 })
let saves = 0

const saveDraft = () => {
  saves += 1
  toaster.add({
    id: 'draft',
    title: 'Draft saved',
    description: `Saved ${saves} time${saves === 1 ? '' : 's'}`,
  })
}

const upload = () => {
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
}
</script>
```

## Promises

`promise()` adds a toast in the `loading` state and updates it when the promise settles: `success` receives the resolved value, `error` the rejection. Each state is a description string, a full options object, or a function returning either.

```html
<template>
  <CButton theme="primary" class="mb-4" @click="save">Save</CButton>
  <CToaster :toaster="toaster" class="position-static" />
</template>

<script setup>
import { CButton, CToaster, createToaster } from '@coreui/vue'

const toaster = createToaster({ timeout: 0 })

const save = () => {
  const request = new Promise((resolve, reject) => {
    setTimeout(
      () => (Math.random() > 0.3 ? resolve('3 files') : reject(new Error('Network error'))),
      2000
    )
  })

  toaster
    .promise(request, {
      loading: 'Saving…',
      success: (files) => `Saved ${files}`,
      error: (error) => ({ title: 'Not saved', description: error.message, priority: 'high' }),
    })
    .catch(() => {})
}
</script>
```

## Action

`action` renders a button in the body; its `onClick` receives the click event and the toast object, so an undo can rewrite the same toast.

```html
<template>
  <CButton theme="primary" class="mb-4" @click="archive">Archive message</CButton>
  <CToaster :toaster="toaster" class="position-static" />
</template>

<script setup>
import { CButton, CToaster, createToaster } from '@coreui/vue'

const toaster = createToaster({ timeout: 0 })

const archive = () =>
  toaster.add({
    description: 'Message archived',
    action: {
      label: 'Undo',
      onClick: (event, toast) =>
        toaster.update(toast.id, { description: 'Message restored', action: null }),
    },
  })
</script>
```

## Limit

`limit` caps how many toasts are visible at once. The newest stay on screen; older ones sink away from the edge and fade, remain in the DOM with `inert` and `data-coreui-limited`, and rise back in as the visible ones go away. `limit: 0` shows everything.

```html
<template>
  <div class="hstack gap-3 mb-4">
    <CButton theme="primary" @click="addToast">Add a toast</CButton>
    <CButton theme="secondary" variant="outline" @click="toaster.close()">Close all</CButton>
  </div>
  <CToaster :toaster="toaster" class="position-static" />
</template>

<script setup>
import { CButton, CToaster, createToaster } from '@coreui/vue'

const toaster = createToaster({ limit: 2, timeout: 0 })
let count = 0

const addToast = () => {
  count += 1
  toaster.add({ title: `Toast ${count}`, description: 'Only two stay visible.' })
}
</script>
```

## Stacking

With `stack: true` the toasts sit on top of each other: the newest in front at full size, the ones behind it scaled down by `--cui-toast-stack-scale` per step and receding towards a vanishing depth. The first toast behind peeks out by `--cui-toast-stack-peek` and every further one by that strip times the scale ratio, so the corners of the stack line up like a deck of cards seen in perspective. Only the front toast's timer runs; the ones behind wait their turn and start counting when they reach the front, so the stack empties from the front. A toast that leaves from behind — closed by id, or pushed over the limit — fades where it is instead of sliding out from under the deck. Hovering or focusing the container spreads the stack into a list; leaving it folds the stack back. The stack takes the place of the flow layout; `limit` decides how many toasts it holds. Folded, the deck shows the front toast and two behind it (`--cui-toast-stack-visible`); spreading it reveals every toast within the limit.

```html
<template>
  <div class="hstack gap-3 mb-4">
    <CButton theme="primary" @click="addToast">Add a toast</CButton>
    <CButton theme="secondary" variant="outline" @click="toaster.close()">Close all</CButton>
  </div>
  <CToaster :toaster="toaster" class="position-relative" />
</template>

<script setup>
import { CButton, CToaster, createToaster } from '@coreui/vue'

const toaster = createToaster({ stack: true, limit: 0, timeout: 0 })
let count = 0

const addToast = () => {
  count += 1
  toaster.add({
    title: `Toast ${count}`,
    description: count % 2 ? 'Hover or focus the stack to spread it out.' : 'A shorter one.',
  })
}
</script>
```

`<CToaster>` keeps the geometry in tokens the CSS reads: `--cui-toast-stack-index`, `--cui-toast-stack-before` (the height of the toasts in front) and `--cui-toast-height` on each toast, `--cui-toast-stack-count`, `--cui-toast-stack-front-height` and `--cui-toast-stack-heights` on the container. Style the stack by these — the `data-coreui-stack-index` and `data-coreui-stack-hidden` attributes mark a toast's place in it.

A stack works in every placement: it grows away from the edge it is pinned to, so at the bottom the newest toast is the lowest one and the stack peeks upward.

```html
<template>
  <div class="d-grid gap-3" style="grid-template-columns: repeat(3, 1fr); max-width: 30rem">
    <CButton
      v-for="placement in placements"
      :key="placement"
      theme="secondary"
      variant="outline"
      @click="addToast(placement)"
    >
      {{ placement }}
    </CButton>
  </div>
  <CToaster v-for="placement in placements" :key="placement" :toaster="stacks[placement]" />
</template>

<script setup>
import { CButton, CToaster, createToaster } from '@coreui/vue'

const placements = [
  'top-start',
  'top-center',
  'top-end',
  'middle-start',
  'middle-center',
  'middle-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
]

const stacks = Object.fromEntries(
  placements.map((placement) => [placement, createToaster({ placement, stack: true, limit: 0 })])
)

const addToast = (placement) => {
  const toaster = stacks[placement]

  toaster.add({
    title: `${placement} · ${toaster.getToasts().length + 1}`,
    description: 'Hover the stack to spread it.',
  })
}
</script>
```

## Motion

A toast slides in from beyond the container's edge while it fades in — from the side in the `start` and `end` placements, from above in `top-center` and from below in `bottom-center` — and leaves the way it came, so the entry and the exit read as one gesture. `middle-center` sits in the middle of the screen with no edge to come from, so its toasts only fade. While a toast leaves, the ones behind it glide into the freed space; when a new one arrives, they make room the same way. `enter` picks another edge for the entry and `leave` for the exit — a `top-end` toaster can drop its toasts in from above and still send them out sideways — and a toast outside a placed container slides by `--cui-toast-slide` instead. `start` and `end` are logical: they follow the direction the container sits in, so under `dir="rtl"` they change sides along with the placement. All of it respects `prefers-reduced-motion`.

```ts
const toaster = createToaster({ placement: 'top-end', enter: 'top', leave: 'end' })
```

### Instant

A toast with `instant: true` skips all of it — no slide, no fade, no glide of its neighbours, no stack transition — and so does every toast when the user prefers reduced motion: the stylesheet emits no transitions under `prefers-reduced-motion: reduce` and the toaster skips its position animations, so toasts appear, move and vanish in place.

```html
<template>
  <div class="hstack gap-3 mb-4">
    <CButton theme="primary" @click="addInstant">Add an instant toast</CButton>
    <CButton theme="secondary" @click="addAnimated">Add an animated toast</CButton>
  </div>
  <CToaster :toaster="toaster" class="position-static" />
</template>

<script setup>
import { CButton, CToaster, createToaster } from '@coreui/vue'

const toaster = createToaster({ timeout: 3000 })

const addInstant = () =>
  toaster.add({ title: 'Instant', description: 'No slide, no fade, no glide.', instant: true })

const addAnimated = () =>
  toaster.add({ title: 'Animated', description: 'Slides in and glides the others.' })
</script>
```

## Placement

`placement` pins the container to the viewport with one of the nine [`.toast-container-{block}-{inline}`](https://coreui.io/vue/docs/components/toast/#placement) classes: `top`, `middle` or `bottom` × `start`, `center` or `end`. In the `top` placements a new toast is inserted first, in the others last, so the newest always sits closest to the edge. The `placement` property of `<CToaster>` overrides the store's for that container.

Each button below adds a toast through a toaster placed at that spot, so you can see where a toast enters from: from the side in the `start` and `end` columns, from above in `top-center` and from below in `bottom-center`, while `middle-center` fades in place.

```html
<template>
  <div class="d-grid gap-3" style="grid-template-columns: repeat(3, 1fr); max-width: 30rem">
    <CButton
      v-for="placement in placements"
      :key="placement"
      theme="secondary"
      variant="outline"
      @click="addToast(placement)"
    >
      {{ placement }}
    </CButton>
  </div>
  <CToaster v-for="placement in placements" :key="placement" :toaster="toasters[placement]" />
</template>

<script setup>
import { CButton, CToaster, createToaster } from '@coreui/vue'

const placements = [
  'top-start',
  'top-center',
  'top-end',
  'middle-start',
  'middle-center',
  'middle-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
]

const toasters = Object.fromEntries(
  placements.map((placement) => [placement, createToaster({ placement })])
)

const addToast = (placement) =>
  toasters[placement].add({ title: placement, description: 'Slides in from the nearest edge.' })
</script>
```

Render the container where you want the toasts to land — a `position-static` or `position-relative` class keeps it inside the layout instead of pinning it to the viewport:

```vue
<CToaster :toaster="toaster" class="position-static" />
```

## Accessibility

The container is a `region` landmark named by `ariaLabel` (`Notifications` by default), so screen-reader users can jump to it through landmark navigation. Every toast is read through [`announce()`](https://coreui.io/vue/docs/getting-started/accessibility/#announcing-messages) when it is added or updated: the string parts of its `title` and `description` go to the polite live region of the page, or to the assertive one with `priority: 'high'`, as a message of their own, so toasts raised together are each announced instead of the last one overwriting the others. The store sends the message once and it belongs to the page, not to `<CToaster>`, so a container mounted again on the same store, for example after a route change, does not add the messages of older toasts again, a toast added together with a route change is announced once, and while a modal dialog is open the message goes to a region inside the dialog. Updating or removing a toast takes its message out of the region. Only that text is announced, never the close button or the action, and the toast element itself carries no live role. A toast added while a modal dialog plays its closing transition, or from the modal's `close` event, is announced on the page half a second after the dialog has closed, once the page is back for the screen reader; [Announcing messages](https://coreui.io/vue/docs/getting-started/accessibility/#announcing-messages) has the measurements. The close button `<CToaster>` renders is named by `ariaCloseLabel` (`Close` by default); set it once for the whole toaster in a translated interface, and name the close button of a `render` body yourself. `normal`, the default, waits until the user is idle, unless the toast is added together with a `high` one, which takes both to the assertive region; keep `high` for the few messages that should interrupt, such as a failed save (WCAG 4.1.3 Status Messages).

Auto-hiding is a time limit on reading, which WCAG 2.2.1 Timing Adjustable asks you to let the user turn off, adjust or extend. Timers stop while the pointer or focus is inside the container (`pauseOnHover`), so a spread stack or a toast being read does not disappear mid-way, and the default `timeout` is the toaster's to set for the whole app. A toast with an action, or one the user must act on, should not hide on its own: give it `timeout: 0`, so keyboard and screen-reader users can reach the button. Toasts never take focus.

## Usage

Create a toaster once, outside the component tree, and export it; every toast in the app goes through it. Mount one `<CToaster>` for it — in the app shell, so it survives route changes.

```ts
// toaster.ts
import { createToaster } from '@coreui/vue'

export const toaster = createToaster({ placement: 'bottom-end', limit: 3 })
```

```vue
<template>
  <RouterView />
  <CToaster :toaster="toaster" />
</template>

<script setup>
import { CToaster } from '@coreui/vue'
import { toaster } from './toaster'
</script>
```

`useToaster()` returns the store to any component rendered inside a `<CToaster>`, so a custom body can close or update the toast it belongs to.

### Options

Options of `createToaster()`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCloseLabel` | string | `'Close'` | Accessible name of the close button `<CToaster>` renders in every toast; a `render` body names its own. |
| `ariaLabel` | string | `'Notifications'` | Accessible name of the container's `region` landmark. |
| `enter` | string | `'auto'` | Edge a toast slides in from: `'start'`, `'end'`, `'top'` or `'bottom'`. `'start'` and `'end'` are logical and follow the direction the container sits in. `'auto'` follows the placement — the side in the `start` and `end` columns, above in `top-center`, below in `bottom-center`, and no slide at all in `middle-center`. |
| `leave` | string | `'auto'` | Edge a toast slides out to, taking the same values as `enter`. `'auto'` is the edge it came in from. |
| `limit` | number | `3` | How many toasts stay visible; the oldest beyond it are hidden and `inert` until a slot frees. `0` disables the limit. |
| `pauseOnHover` | boolean | `true` | Pause every toast's timer while the pointer or focus is inside the container, and resume when it leaves. Each toast still pauses on its own hover. |
| `placement` | string | `'top-end'` | Corner or edge of the viewport for the container: `top`, `middle` or `bottom` × `start`, `center` or `end`. Toasts in the `top` placements are inserted first, in the others last, so the newest always sits closest to the edge. |
| `stack` | boolean | `false` | Stack the toasts on top of each other, newest in front, and spread them out on hover or focus. |
| `timeout` | number | `5000` | Default time (ms) before a toast hides. `0` keeps toasts until they are closed. |

### Toast options

Options of `add()`, `update()` and the toast objects `getToasts()` returns.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | object, null | — | `{ label, onClick(event, toast) }` renders a button in the body. |
| `class` | string | — | Extra classes on the `.toast`. |
| `data` | object | — | Anything you want to read back from the toast object later, e.g. in `update(id, (previous) => …)`. |
| `description` | string, VNode | — | Body of the toast. |
| `dismissible` | boolean | `true` | Render the close button. |
| `id` | string | generated | Stable id; adding with an existing id updates that toast in place, unless it is already closing, in which case a new toast replaces it. |
| `instant` | boolean | `false` | Skip the fade (`.toast-instant`). |
| `onClose` | function | — | Called when the toast starts hiding, with the toast object. |
| `onRemove` | function | — | Called after the toast left the DOM, with the toast object. |
| `priority` | string | `'normal'` | Which live region announces the toast, as in [`announce()`](https://coreui.io/vue/docs/getting-started/accessibility/#announcing-messages): `'normal'` the polite one, `'high'` the assertive one, which also takes the normal toasts added together with it. |
| `render` | function | — | `(toast) => VNode` renders the body of the toast yourself, instead of the header and body built from `title`, `description` and `action`. |
| `theme` | string | — | Adds `theme-{color}`. |
| `timeout` | number | toaster's `timeout` | Time (ms) before this toast hides; `0` keeps it. |
| `title` | string, VNode | — | Header of the toast, with the close button next to it. |
| `translucent` | boolean | `false` | Adds `.toast-translucent`. |

A toast object in the store carries `id`, `updateKey`, `limited`, `open` and `order` next to the options it was created with.

### Methods

| Method | Description |
| --- | --- |
| `add(options)` | Adds a toast and returns its id. With an `id` that already exists it behaves like `update`, unless that toast is already closing. |
| `update(id, options)` | Rewrites the toast in place and increments its `updateKey`. `options` may be a function receiving the current toast object and returning the changes. |
| `close(id?)` | Hides the toast, which removes it from the store once the fade ends. Without an id, hides every toast. |
| `remove(id)` | Drops the toast from the store at once, without the exit transition. `<CToaster>` calls it when a toast finished hiding. |
| `promise(promise, { loading, success, error })` | Adds a toast in the `loading` state and updates it when the promise settles: `success` gets the resolved value, `error` the rejection. Each state is a description string or a full options object, or a function returning either. Returns the promise. |
| `pause()` / `resume()` | Stop and restart every toast's timer; `pauseOnHover` calls these for the container. |
| `getToasts()` | The toast objects in render order. |
| `toasts` | The reactive `shallowRef` behind `getToasts()`, to read the toasts in a computed of your own. |

### Events

The store reports through the callbacks of a toast — `onClose` when it starts hiding, `onRemove` once it left the DOM — and every rendered toast still emits the [`<CToast>` events](https://coreui.io/vue/docs/components/toast/api/#ctoast) on its own component.

## Customizing

### CSS variables

`<CToaster>` renders regular toasts, so their tokens apply — see the [toast CSS variables](https://coreui.io/vue/docs/components/toast/styling/#css-variables). Four are its own: `--cui-toast-container-inset` on the container sets the distance from the viewport edge, `--cui-toast-translate` on the container is where a toast enters from and leaves to, overridden separately by `--cui-toast-enter-translate` and `--cui-toast-leave-translate` (the `enter` and `leave` options write those; set them yourself for any other offset), `--cui-toast-inline-sign` on the container is the `1` or `-1` those inline offsets are multiplied by, which is how `start` and `end` follow the direction, and `--cui-toast-limited-translate` on a toast sets where a toast over the limit sinks to.

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

## API

- [&lt;CToaster /&gt;](./api/#ctoaster)
- [&lt;CToast /&gt;](https://coreui.io/vue/docs/components/toast/api/#ctoast)
