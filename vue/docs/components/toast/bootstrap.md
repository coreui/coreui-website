# Vue Bootstrap Toast Component

> Learn how to use CoreUI’s Vue Toast component with Bootstrap styles for flexible, framework-consistent UI.

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
        class="rounded me-2"
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

```html
<template>
  <CButton color="primary" @click="createToast">Send a toast</CButton>
  <CToaster class="p-3" placement="top-end">
    <CToast v-for="(toast, index) in toasts" :key="index" visible>
      <CToastHeader close-button>
        <span class="me-auto fw-bold">{{ toast.title }}</span>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>
        {{ toast.content }}
      </CToastBody>
    </CToast>
  </CToaster>
</template>

<script setup>
import { CButton, CToaster, CToast, CToastHeader, CToastBody } from '@coreui/vue'
import { ref } from 'vue'
const toasts = ref([])
const createToast = () => {
  toasts.value.push({
    title: 'new toast',
    content: 'Lorem ipsum dolor cet emit',
  })
}
</script>
```

### Translucent

Toasts are slightly translucent to blend in with what's below them.

```html
<template>
  <CToast :autohide="false" visible>
    <CToastHeader close-button>
      <svg
        class="rounded me-2"
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
          class="rounded me-2"
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
          class="rounded me-2"
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

Customize your toasts by removing sub-components, tweaking them with [utilities](https://coreui.io/bootstrap/docs/utilities/api), or by adding your own markup. Here we've created a simpler toast by removing the default `<CToastHeader>`, adding a custom hide icon from [CoreUI Icons](https://coreui.io/icons/), and using some [flexbox utilities](https://coreui.io/bootstrap/docs/utilities/flex) to adjust the layout.

```html
<template>
  <CToast :autohide="false" class="align-items-center" visible>
    <div class="d-flex">
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
      <CToastClose class="me-2 m-auto" />
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
      <div class="mt-2 pt-2 border-top">
        <CButton type="button" color="primary" size="sm"> Take action </CButton>
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

Building on the above example, you can create different toast color schemes with our [color](https://coreui.io/bootstrap/docs/utilities/colors) and [background](https://coreui.io/bootstrap/docs/utilities/background) utilities. Here we've set `color="primary"` and added `.text-white` class to the `<Ctoast>`, and then set `white` property to our close button. For a crisp edge, we remove the default border with `.border-0`.

```html
<template>
  <CToast :autohide="false" color="primary" class="text-white align-items-center" visible>
    <div class="d-flex">
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
      <CToastClose class="me-2 m-auto" white />
    </div>
  </CToast>
</template>

<script setup>
import { CToast, CToastBody, CToastClose } from '@coreui/vue'
</script>
```
