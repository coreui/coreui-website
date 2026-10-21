# Vue Toast Component

> Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.

Vue toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.

## Overview

Things to know when using the toast plugin:

- Toasts are opt-in for performance reasons, so **you must initialize them yourself**.
- Toasts will automatically hide if you do not specify `autohide: false`.

## Examples

### Basic

To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use `display: flex`, allowing easy alignment of content thanks to our margin and flexbox utilities.

Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your "toasted" content and strongly encourage a dismiss button.

```html
<template>
  <CToast :autohide="false" visible>
    <CToastHeader close-button>
      <svg
        class="rounded me-3"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <span class="me-auto fw-bold">CoreUI for Vue.js</span>
      <small>7 min ago</small>
    </CToastHeader>
    <CToastBody>Hello, world! This is a toast message.</CToastBody>
  </CToast>
</template>

<script setup>
import { CToast, CToastHeader, CToastBody } from '@coreui/vue'
</script>
```

### Translucent

Add the `translucent` property to let the background through the toast and blur it. The header thins out with it, so the whole toast reads as one surface.

```html
<template>
  <CToast :autohide="false" translucent visible>
    <CToastHeader close-button>
      <svg
        class="rounded me-3"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <span class="me-auto fw-bold">CoreUI for Vue.js</span>
      <small>7 min ago</small>
    </CToastHeader>
    <CToastBody>Hello, world! This is a toast message.</CToastBody>
  </CToast>
</template>

<script setup>
import { CToast, CToastHeader, CToastBody } from '@coreui/vue'
</script>
```

### Stacking

You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.

```html
<template>
  <CToaster class="position-static">
    <CToast :autohide="false" visible>
      <CToastHeader close-button>
        <svg
          class="rounded me-3"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <span class="me-auto fw-bold">CoreUI for Vue.js</span>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
    <CToast :autohide="false" visible>
      <CToastHeader close-button>
        <svg
          class="rounded me-3"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <span class="me-auto fw-bold">CoreUI for Vue.js</span>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  </CToaster>
</template>

<script setup>
import { CToaster, CToast, CToastHeader, CToastBody } from '@coreui/vue'
</script>
```

### Custom content

Customize your toasts by removing sub-components, tweaking them with [utilities](https://coreui.io/vue/docs/utilities/api/), or by adding your own markup. Here we've created a simpler toast by removing the default `<CToastHeader>`, adding a custom hide icon from [CoreUI Icons](https://coreui.io/icons/), and using some [flexbox utilities](https://coreui.io/vue/docs/utilities/flex/) to adjust the layout.

```html
<template>
  <CToast :autohide="false" class="align-items-center" visible>
    <div class="d-flex">
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
      <CToastClose class="me-3 m-auto" />
    </div>
  </CToast>
</template>

<script setup>
import { CToast, CToastBody, CToastClose } from '@coreui/vue'
</script>
```

Alternatively, you can also add additional controls and components to toasts.

```html
<template>
  <CToast :autohide="false" class="align-items-center" visible>
    <CToastBody>
      Hello, world! This is a toast message.
      <div class="mt-3 pt-3 border-top">
        <CButton type="button" theme="primary" size="sm"> Take action </CButton>
        <CToastClose as="CButton" color="secondary" size="sm" class="ms-1">Close</CToastClose>
      </div>
    </CToastBody>
  </CToast>
</template>

<script setup>
import { CToast, CToastBody, CButton, CToastClose } from '@coreui/vue'
</script>
```

### Color schemes

Building on the above example, you can create different toast color schemes with our [color](https://coreui.io/vue/docs/utilities/colors/) and [background](https://coreui.io/vue/docs/utilities/background/) utilities. Here we've set `color="primary"` and added `.fg-white` class to the `<Ctoast>`, and then set `white` property to our close button. For a crisp edge, we remove the default border with `.border-0`.

```html
<template>
  <CToast :autohide="false" theme="primary" class="fg-white align-items-center" visible>
    <div class="d-flex">
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
      <CToastClose class="me-3 m-auto" white />
    </div>
  </CToast>
</template>

<script setup>
import { CToast, CToastBody, CToastClose } from '@coreui/vue'
</script>
```

## Toaster

_Added in 6.0.0._

`createToaster()` creates a store of toasts that lives outside the component tree, and `` renders a `<CToast>` for every entry, keyed by id — so a toast can be added from anywhere, without any markup up front. See the [toaster](https://coreui.io/vue/docs/components/toaster/) for the store API, the visible-toasts limit, stacking, motion and the live regions it announces through.

## Placement

Place toasts with the `<CToaster>` component. Its `placement` property renders one of the nine `.toast-container-{placement}` classes that fix the container to a corner or an edge of the viewport — `placement="top-end"` pins them to the upper right corner, a common spot for notifications. A `<CToaster>` bound to a store takes the placement from `createToaster()` unless the property overrides it. Toasts in the same toaster stack automatically. To show only ever one toast, you can position a single `<CToast>` yourself with our [position utilities](https://coreui.io/vue/docs/utilities/position/).

```html
<template>
  <CButton theme="primary" @click="toasts.push(toasts.length + 1)">Send a toast</CButton>
  <CToaster class="p-4" placement="top-end">
    <CToast v-for="key in toasts" :key="key" visible>
      <CToastHeader close-button>
        <span class="me-auto fw-bold">CoreUI for Vue.js</span>
        <small>Just now</small>
      </CToastHeader>
      <CToastBody>Pinned to the upper right corner.</CToastBody>
    </CToast>
  </CToaster>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CToast, CToastBody, CToaster, CToastHeader } from '@coreui/vue'

const toasts = ref([])
</script>
```

## Usage with v-model

Bind `v-model:show` and the toast keeps its visibility in step with your state — dismissing it writes `false` back, so the value never drifts from what is on screen.

```html
<template>
  <CButton theme="primary" @click="show = true">Show toast</CButton>
  <p class="mt-4">
    Visible: <strong>{{ show }}</strong>
  </p>
  <CToaster class="p-4" placement="top-end">
    <CToast v-model:show="show">
      <CToastHeader close-button>
        <span class="me-auto fw-bold">CoreUI for Vue.js</span>
      </CToastHeader>
      <CToastBody>Closing this toast writes back to your state.</CToastBody>
    </CToast>
  </CToaster>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CToast, CToastBody, CToaster, CToastHeader } from '@coreui/vue'

const show = ref(false)
</script>
```

## Accessibility

Toasts are meant to be brief interruptions for your visitors or users. To assist those using screen readers and similar assistive technologies, `<CToast>` renders as an [`aria-live` region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) with `role="alert"`, `aria-live="assertive"` and `aria-atomic="true"`. Screen readers announce changes to a live region — showing or updating a toast — without moving focus or interrupting the user, and `aria-atomic="true"` makes the whole toast announce as one unit rather than only the part that changed. If the information is critical to the process, such as a list of form errors, use the [alert component](https://coreui.io/vue/docs/components/alert/) instead.

Adjust `role` and `aria-live` to the content: the defaults suit important messages like errors, while a less urgent notification should carry `role="status"` and `aria-live="polite"`. A toast rendered by a [toaster](https://coreui.io/vue/docs/components/toaster/#accessibility) carries neither: the store announces it through the [live regions of the page](https://coreui.io/vue/docs/accessibility/screen-readers/#announcing-messages), and `priority` picks the polite or the assertive one.

The live region has to exist in the markup *before* the toast is generated for assistive technologies to announce it reliably. `<CToast>` mounts its element only when shown, so for critical messages keep a permanently rendered wrapper carrying the `aria-live` attribute around your toasts, or use the [toaster](https://coreui.io/vue/docs/components/toaster/#accessibility), which announces through the live regions of the page and needs no wrapper.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CToast /&gt;](./api/#ctoast)
- [&lt;CToastHeader /&gt;](./api/#ctoastheader)
- [&lt;CToastBody /&gt;](./api/#ctoastbody)
- [&lt;CToastClose /&gt;](./api/#ctoastclose)
- [&lt;CToaster /&gt;](https://coreui.io/vue/docs/components/toaster/api/#ctoaster)
