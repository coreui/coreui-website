# Vue Bootstrap Offcanvas Component

> Learn how to use CoreUI’s Vue Offcanvas component with Bootstrap styles for flexible, framework-consistent UI.

## Examples

### Offcanvas components

Below is an offcanvas example that is shown by default (via `show`). Offcanvas includes support for a header with a close button and an optional body class for some initial `padding`. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.

```html
<template>
  <COffcanvas :backdrop="false" placement="start" scroll show>
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="fg-reset" />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Vue component or custom
      elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/vue'
</script>
```

### Live demo

Use the buttons below to show and hide an offcanvas component.

- `:show="false"` hides content (default)
- `show` or `:show="true"` shows content

```html
<template>
  <CButton theme="primary" @click="show = true">Toggle offcanvas</CButton>
  <COffcanvas v-model:show="show" placement="start">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="fg-reset" @click="show = false" />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Vue component or custom
      elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

### Body scrolling

Scrolling the `<body>` element is disabled when an offcanvas and its backdrop are visible. Use the scroll property to toggle `<body>` scrolling and backdrop to toggle the backdrop.

```html
<template>
  <CButton theme="primary" @click="show = true">Enable body scrolling</CButton>
  <COffcanvas v-model:show="show" :backdrop="false" placement="start" scroll>
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas with body scrolling</COffcanvasTitle>
      <CCloseButton class="fg-reset" @click="show = false" />
    </COffcanvasHeader>
    <COffcanvasBody
      >Try scrolling the rest of the page to see this option in action.</COffcanvasBody
    >
  </COffcanvas>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

### Body scrolling and backdrop

You can also enable `<body>` scrolling with a visible backdrop.

```html
<template>
  <CButton theme="primary" @click="show = true">Enable both scrolling &amp; backdrop</CButton>
  <COffcanvas v-model:show="show" placement="start" scroll>
    <COffcanvasHeader>
      <COffcanvasTitle>Backdrop with scrolling</COffcanvasTitle>
      <CCloseButton class="fg-reset" @click="show = false" />
    </COffcanvasHeader>
    <COffcanvasBody
      >Try scrolling the rest of the page to see this option in action.</COffcanvasBody
    >
  </COffcanvas>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

### Static backdrop

If you set a `backdrop` to `static`, your Vue offcanvas component will not close when clicking outside of it.

```html
<template>
  <CButton theme="primary" @click="show = true">Toggle static offcanvas</CButton>
  <COffcanvas v-model:show="show" backdrop="static" placement="start">
    <COffcanvasHeader>
      <COffcanvasTitle>Backdrop with scrolling</COffcanvasTitle>
      <CCloseButton class="fg-reset" @click="show = false" />
    </COffcanvasHeader>
    <COffcanvasBody
      >Try scrolling the rest of the page to see this option in action.</COffcanvasBody
    >
  </COffcanvas>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

## Dark offcanvas

Change the appearance of offcanvases with `dark` boolean property to better match them to different contexts like dark navbars.

```html
<template>
  <COffcanvas :backdrop="false" dark placement="start" scroll show>
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="fg-reset" />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Vue component or custom
      elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/vue'
</script>
```

## Responsive

Responsive offcanvas properties hide content outside the viewport from a specified breakpoint and down.
Above that breakpoint, the contents within will behave as usual. 
For example, `responsive="lg"` hides content in an offcanvas below the lg breakpoint, but shows the content above the lg breakpoint.

```html
<template>
  <CButton theme="primary" class="d-lg-none" @click="show = true">Toggle offcanvas</CButton>
  <CAlert class="d-none d-lg-block" theme="info">
    Resize your browser to show the responsive offcanvas toggle.
  </CAlert>
  <COffcanvas v-model:show="show" placement="start" responsive="lg">
    <COffcanvasHeader>
      <COffcanvasTitle>Responsive offcanvas</COffcanvasTitle>
      <CCloseButton class="fg-reset" @click="show = false" />
    </COffcanvasHeader>
    <COffcanvasBody> This is content within an <code>.offcanvas-lg</code>. </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import { ref } from 'vue'
import {
  CAlert,
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

## Placement

There's no default placement for offcanvas components, so you must add one of the modifier classes below;

- `placement="start"` places offcanvas on the left of the viewport (shown above)
- `placement="end"` places offcanvas on the right of the viewport
- `placement="top"` places offcanvas on the top of the viewport
- `placement="bottom"` places offcanvas on the bottom of the viewport

Try the top, right, and bottom examples out below.

```html
<template>
  <CButton theme="primary" @click="show = true">Toggle top offcanvas</CButton>
  <COffcanvas v-model:show="show" placement="top">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="fg-reset" @click="show = false" />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Vue component or custom
      elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

```html
<template>
  <CButton theme="primary" @click="show = true">Toggle right offcanvas</CButton>
  <COffcanvas v-model:show="show" placement="end">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="fg-reset" @click="show = false" />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Vue component or custom
      elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

```html
<template>
  <CButton theme="primary" @click="show = true">Toggle bottom offcanvas</CButton>
  <COffcanvas v-model:show="show" placement="bottom">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="fg-reset" @click="show = false" />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Vue component or custom
      elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```
