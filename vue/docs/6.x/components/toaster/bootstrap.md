# Vue Bootstrap Toaster Component

> Learn how to use CoreUI’s Vue Toaster component with Bootstrap styles for flexible, framework-consistent UI.

## Overview

`createToaster()` keeps the toasts of the whole app in one store and `` renders them, so a toast can be added from anywhere without any markup up front. See the [toaster](https://coreui.io/vue/docs/components/toaster/) for the full API.

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

## Stacking

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
