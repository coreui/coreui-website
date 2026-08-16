# Vue Bootstrap Offcanvas Component

> Learn how to use CoreUI’s Vue Offcanvas component with Bootstrap styles for flexible, framework-consistent UI.

## Examples

### Offcanvas components

Below is an offcanvas example that is shown by default (via `:visible="true"`). Offcanvas includes support for a header with a close button and an optional body class for some initial `padding`. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.

```html
<template>
  <div class="docs-example-offcanvas bg-light">
    <COffcanvas :backdrop="false" placement="start" :visible="true">
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton class="text-reset" />
      </COffcanvasHeader>
      <COffcanvasBody>
        Content for the offcanvas goes here. You can place just about any Bootstrap component or
        custom elements here.
      </COffcanvasBody>
    </COffcanvas>
  </div>
</template>

<script setup>
import {
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
</script>
```

### Live demo

Use the buttons below to show and hide an offcanvas component.

- `:visible="false"` hides content (default)
- `visible` or `:visible="true"` shows content

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visible = !visible
      }
    "
    >Toggle offcanvas</CButton
  >
  <COffcanvas
    placement="start"
    :visible="visible"
    @hide="
      () => {
        visible = !visible
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visible = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(false)
</script>
```

### Body scrolling

Scrolling the `<body>` element is disabled when an offcanvas and its backdrop are visible. Use the scroll property to toggle `<body>` scrolling and backdrop to toggle the backdrop.

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleScrolling = !visibleScrolling
      }
    "
    >Enable body scrolling</CButton
  >
  <COffcanvas
    :backdrop="false"
    placement="start"
    scroll
    :visible="visibleScrolling"
    @hide="
      () => {
        visibleScrolling = !visibleScrolling
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleScrolling = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
import { ref } from 'vue'
const visibleScrolling = ref(false)
</script>
```

### Body scrolling and backdrop

You can also enable `<body>` scrolling with a visible backdrop.

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleWithBothOptions = !visibleWithBothOptions
      }
    "
    >Enable both scrolling & backdrop</CButton
  >
  <COffcanvas
    placement="start"
    scroll
    :visible="visibleWithBothOptions"
    @hide="
      () => {
        visibleWithBothOptions = !visibleWithBothOptions
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleWithBothOptions = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
import { ref } from 'vue'
const visibleWithBothOptions = ref(false)
</script>
```

### Static backdrop

If you set a `backdrop` to `static`, your Vue offcanvas component will not close when clicking outside of it.

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleWithStaticBackdrop = !visibleWithStaticBackdrop
      }
    "
    >Toggle static offcanvas</CButton
  >
  <COffcanvas
    backdrop="static"
    placement="start"
    :visible="visibleWithStaticBackdrop"
    @hide="
      () => {
        visibleWithStaticBackdrop = !visibleWithStaticBackdrop
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleWithStaticBackdrop = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      <p>I will not close if you click outside of me.</p>
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
import { ref } from 'vue'
const visibleWithStaticBackdrop = ref(false)
</script>
```

## Dark offcanvas

Change the appearance of offcanvases with `dark` boolean property to better match them to different contexts like dark navbars.

```html
<template>
  <div class="docs-example-offcanvas bg-body-secondary p-0 overflow-hidden">
    <COffcanvas :backdrop="false" dark placement="start" :visible="true">
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton class="text-reset" />
      </COffcanvasHeader>
      <COffcanvasBody>
        Content for the offcanvas goes here. You can place just about any React component or custom
        elements here.
      </COffcanvasBody>
    </COffcanvas>
  </div>
</template>

<script setup>
import {
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
</script>
```

## Responsive 

Responsive offcanvas properties hide content outside the viewport from a specified breakpoint and down.
Above that breakpoint, the contents within will behave as usual. 
For example, `responsive="lg"` hides content in an offcanvas below the lg breakpoint, but shows the content above the lg breakpoint.

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleResponsiveBackdrop = !visibleResponsiveBackdrop
      }
    "
    >Toggle offcanvas</CButton
  >
  <CAlert class="d-none d-lg-block" color="info"
    >Resize your browser to show the responsive offcanvas toggle.</CAlert
  >
  <COffcanvas
    placement="start"
    responsive="lg"
    :visible="visibleResponsiveBackdrop"
    @hide="
      () => {
        visibleResponsiveBackdrop = !visibleResponsiveBackdrop
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Responsive offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleResponsiveBackdrop = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      <p>This is content within an <code>.offcanvas-lg</code></p>
      .
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CButton,
  CAlert,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
import { ref } from 'vue'
const visibleResponsiveBackdrop = ref(false)
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
  <CButton
    color="primary"
    @click="
      () => {
        visibleTop = !visibleTop
      }
    "
    >Toggle top offcanvas</CButton
  >
  <COffcanvas
    placement="top"
    :visible="visibleTop"
    @hide="
      () => {
        visibleTop = !visibleTop
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleTop = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
import { ref } from 'vue'
const visibleTop = ref(false)
</script>
```

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleEnd = !visibleEnd
      }
    "
    >Toggle right offcanvas</CButton
  >
  <COffcanvas
    placement="end"
    :visible="visibleEnd"
    @hide="
      () => {
        visibleEnd = !visibleEnd
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleEnd = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
import { ref } from 'vue'
const visibleEnd = ref(false)
</script>
```

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleBottom = !visibleBottom
      }
    "
    >Toggle bottom offcanvas</CButton
  >
  <COffcanvas
    placement="bottom"
    :visible="visibleBottom"
    @hide="
      () => {
        visibleBottom = !visibleBottom
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleBottom = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
import { ref } from 'vue'
const visibleBottom = ref(false)
</script>
```
