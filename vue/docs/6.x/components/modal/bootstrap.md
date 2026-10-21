# Vue Bootstrap Modal Component

> Learn how to use CoreUI’s Vue Modal component with Bootstrap styles for flexible, framework-consistent UI.

## How to use the Vue Bootstrap Modal component

The Vue Bootstrap Modal component offers a lightweight, flexible popup for dialogs, alerts, and forms. It's fully customizable and accessible, with support for animations, scrollable content, multiple sizes, and more.

### Static Vue Bootstrap Modal example

This static modal example shows the structure of a modal with header, body, and footer content.

```vue
<CModal>
  <CModalHeader>
    <CModalTitle>Vue Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>
    <p>Vue Modal body text goes here.</p>
  </CModalBody>
  <CModalFooter>
    <CButton theme="secondary">Close</CButton>
    <CButton theme="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
```

### Live demo

```html
<template>
  <CButton theme="primary" @click="show = !show">Launch demo modal</CButton>
  <CModal v-model:show="show" aria-labelledby="LiveDemoExampleLabel">
    <CModalHeader>
      <CModalTitle id="LiveDemoExampleLabel">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
    <CModalFooter>
      <CButton theme="secondary" @click="show = false">Close</CButton>
      <CButton theme="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

### Static backdrop

```html
<template>
  <CButton theme="primary" @click="show = !show">Launch static backdrop modal</CButton>
  <CModal v-model:show="show" backdrop="static" aria-labelledby="StaticBackdropExampleLabel">
    <CModalHeader>
      <CModalTitle id="StaticBackdropExampleLabel">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      I will not close if you click outside me. Don't even try to press escape key.
    </CModalBody>
    <CModalFooter>
      <CButton theme="secondary" @click="show = false">Close</CButton>
      <CButton theme="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

### Scrolling long content

```html
<template>
  <CButton theme="primary" @click="show = !show">Launch demo modal</CButton>
  <CModal v-model:show="show" aria-labelledby="ScrollingLongContentExampleLabel">
    <CModalHeader>
      <CModalTitle id="ScrollingLongContentExampleLabel">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <template v-for="index in 6" :key="index">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
          vel augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla.
        </p>
      </template>
    </CModalBody>
    <CModalFooter>
      <CButton theme="secondary" @click="show = false">Close</CButton>
      <CButton theme="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

```html
<template>
  <CButton theme="primary" @click="show = !show">Launch demo modal</CButton>
  <CModal v-model:show="show" scrollable aria-labelledby="ScrollingLongContent2ExampleLabel">
    <CModalHeader>
      <CModalTitle id="ScrollingLongContent2ExampleLabel">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <template v-for="index in 6" :key="index">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
          vel augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla.
        </p>
      </template>
    </CModalBody>
    <CModalFooter>
      <CButton theme="secondary" @click="show = false">Close</CButton>
      <CButton theme="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

### Vertically centered modals

```html
<template>
  <CButton theme="primary" @click="show = !show">Vertically centered modal</CButton>
  <CModal v-model:show="show" aria-labelledby="VerticallyCenteredExample">
    <CModalHeader>
      <CModalTitle id="VerticallyCenteredExample">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </CModalBody>
    <CModalFooter>
      <CButton theme="secondary" @click="show = false">Close</CButton>
      <CButton theme="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/vue'

const show = ref(false)
</script>
```
```html
<template>
  <CButton theme="primary" @click="show = !show">Vertically centered scrollable modal</CButton>
  <CModal v-model:show="show" scrollable aria-labelledby="VerticallyCenteredScrollableExample2">
    <CModalHeader>
      <CModalTitle id="VerticallyCenteredScrollableExample2">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
    </CModalBody>
    <CModalFooter>
      <CButton theme="secondary" @click="show = false">Close</CButton>
      <CButton theme="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

### Tooltips and popovers in modals

```html
<template>
  <CButton theme="primary" @click="show = !show">Launch demo modal</CButton>
  <CModal v-model:show="show" aria-labelledby="TooltipsAndPopoverExample">
    <CModalHeader>
      <CModalTitle id="TooltipsAndPopoverExample">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <h5>Popover in a modal</h5>
      <p>
        This
        <CPopover title="Popover title" content="Popover body content is set in this property.">
          <CButton theme="primary">button</CButton>
        </CPopover>
        triggers a popover on click.
      </p>
      <hr />
      <h5>Tooltips in a modal</h5>
      <p>
        <CTooltip content="Tooltip">
          <CLink>This link</CLink>
        </CTooltip>
        and
        <CTooltip content="Tooltip">
          <CLink>that link</CLink>
        </CTooltip>
        have tooltips on hover.
      </p>
    </CModalBody>
    <CModalFooter>
      <CButton theme="secondary" @click="show = false">Close</CButton>
      <CButton theme="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CPopover,
  CTooltip,
} from '@coreui/vue'

const show = ref(false)
</script>
```

### Toggle between modals

```html
<template>
  <CButton theme="primary" @click="show = !show">Open first modal</CButton>
  <CModal v-model:show="show" aria-labelledby="ToggleBetweenModalsExample1">
    <CModalHeader>
      <CModalTitle id="ToggleBetweenModalsExample1">Modal 1 title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>Show a second modal and hide this one with the button below.</p>
    </CModalBody>
    <CModalFooter>
      <CButton
        theme="primary"
        @click="
          () => {
            show = false
            show2 = true
          }
        "
      >
        Open second modal
      </CButton>
    </CModalFooter>
  </CModal>
  <CModal v-model:show="show2" aria-labelledby="ToggleBetweenModalsExample2">
    <CModalHeader>
      <CModalTitle id="ToggleBetweenModalsExample2">Modal 2 title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>Hide this modal and show the first with the button below.</p>
    </CModalBody>
    <CModalFooter>
      <CButton
        theme="primary"
        @click="
          () => {
            show = true
            show2 = false
          }
        "
      >
        Back to first
      </CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/vue'

const show = ref(false)
const show2 = ref(false)
</script>
```

### Change modal animation

Use Sass variables like `$modal-fade-transform` and `$modal-show-transform` to customize animation. For example:

```scss
$modal-fade-transform: scale(0.8);
```

### Remove modal animation

Disable animation with:

```vue
<CModal :transition="false">...</CModal>
```

### Accessibility tips

Use `aria-labelledby` and `aria-describedby` on `<CModal>` for improved screen reader support. CoreUI adds required roles and aria attributes automatically.

## Vue Bootstrap Modal sizes

Modals come in predefined sizes via the `size` prop.

| Size        | Prop     | Max width |
|-------------|----------|-----------|
| Small       | `'sm'`   | 300px     |
| Default     | —        | 500px     |
| Large       | `'lg'`   | 800px     |
| Extra large | `'xl'`   | 1140px    |

```html
<template>
  <CButton theme="primary" @click="showXL = !showXL">Extra large modal</CButton>
  <CButton theme="primary" @click="showLg = !showLg">Large modal</CButton>
  <CButton theme="primary" @click="showSm = !showSm">Small modal</CButton>
  <CModal v-model:show="showXL" size="xl" aria-labelledby="OptionalSizesExample1">
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample1">Extra large modal</CModalTitle>
    </CModalHeader>
    <CModalBody>...</CModalBody>
  </CModal>
  <CModal v-model:show="showLg" size="lg" aria-labelledby="OptionalSizesExample2">
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample2">Large modal</CModalTitle>
    </CModalHeader>
    <CModalBody>...</CModalBody>
  </CModal>
  <CModal v-model:show="showSm" size="sm" aria-labelledby="OptionalSizesExample3">
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample3">Small modal</CModalTitle>
    </CModalHeader>
    <CModalBody>...</CModalBody>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/vue'

const showXL = ref(false)
const showLg = ref(false)
const showSm = ref(false)
</script>
```

## Fullscreen Vue Bootstrap Modals

Use the `fullscreen` prop to make modals expand to full viewport width/height. You can apply it conditionally based on breakpoints.

| Fullscreen prop | Breakpoint         |
|------------------|--------------------|
| `true`           | Always             |
| `'sm'`           | Below 576px        |
| `'md'`           | Below 768px        |
| `'lg'`           | Below 1024px        |
| `'xl'`           | Below 1280px       |
| `'2xl'`          | Below 1536px       |

```html
<template>
  <CButton theme="primary" @click="show = !show">Full screen</CButton>
  <CButton theme="primary" @click="showSm = !showSm">Full screen below sm</CButton>
  <CButton theme="primary" @click="showMd = !showMd">Full screen below md</CButton>
  <CButton theme="primary" @click="showLg = !showLg">Full screen below lg</CButton>
  <CButton theme="primary" @click="showXL = !showXL">Full screen below xl</CButton>
  <CButton theme="primary" @click="showXXL = !showXXL">Full screen below 2xl</CButton>
  <CModal v-model:show="show" fullscreen aria-labelledby="FullscreenExample1">
    <CModalHeader>
      <CModalTitle id="FullscreenExample1">Full screen</CModalTitle>
    </CModalHeader>
    <CModalBody>...</CModalBody>
  </CModal>
  <CModal v-model:show="showSm" fullscreen="sm" aria-labelledby="FullscreenExample2">
    <CModalHeader>
      <CModalTitle id="FullscreenExample2">Full screen below sm</CModalTitle>
    </CModalHeader>
    <CModalBody>...</CModalBody>
  </CModal>
  <CModal v-model:show="showMd" fullscreen="md" aria-labelledby="FullscreenExample3">
    <CModalHeader>
      <CModalTitle id="FullscreenExample3">Full screen below md</CModalTitle>
    </CModalHeader>
    <CModalBody>...</CModalBody>
  </CModal>
  <CModal v-model:show="showLg" fullscreen="lg" aria-labelledby="FullscreenExample4">
    <CModalHeader>
      <CModalTitle id="FullscreenExample4">Full screen below lg</CModalTitle>
    </CModalHeader>
    <CModalBody>...</CModalBody>
  </CModal>
  <CModal v-model:show="showXL" fullscreen="xl" aria-labelledby="FullscreenExample5">
    <CModalHeader>
      <CModalTitle id="FullscreenExample5">Full screen below xl</CModalTitle>
    </CModalHeader>
    <CModalBody>...</CModalBody>
  </CModal>
  <CModal v-model:show="showXXL" fullscreen="2xl" aria-labelledby="FullscreenExample6">
    <CModalHeader>
      <CModalTitle id="FullscreenExample6">Full screen below 2xl</CModalTitle>
    </CModalHeader>
    <CModalBody>...</CModalBody>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/vue'

const show = ref(false)
const showSm = ref(false)
const showMd = ref(false)
const showLg = ref(false)
const showXL = ref(false)
const showXXL = ref(false)
</script>
```

## API reference

Explore the API for the Vue Bootstrap Modal component and its related parts:

- [&lt;CModal /&gt;](../api/#cmodal)
- [&lt;CModalBody /&gt;](../api/#cmodalbody)
- [&lt;CModalFooter /&gt;](../api/#cmodalfooter)
- [&lt;CModalHeader /&gt;](../api/#cmodalheader)
- [&lt;CModalTitle /&gt;](../api/#cmodaltitle)
