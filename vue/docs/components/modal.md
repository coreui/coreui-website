# Vue Modal Component

> Vue Modal component offers a lightweight, multi-purpose popup to add dialogs to yours. Learn how to customize Vue CoreUI Modals easily. Multiple examples and tutorial.

## Examples

### Modal components

Below is a static modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with actions whenever possible, or provide another explicit action.

```html
<template>
  <CModal class="show d-block position-static" :backdrop="false" :keyboard="false" visible>
    <CModalHeader>
      <CModalTitle>Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>Modal body text goes here.</CModalBody>
    <CModalFooter>
      <CButton color="secondary">Close</CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/vue'
</script>
```

### Live demo

Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleLiveDemo = true
      }
    "
    >Launch demo modal</CButton
  >
  <CModal
    :visible="visibleLiveDemo"
    aria-labelledby="LiveDemoExampleLabel"
    @close="
      () => {
        visibleLiveDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="LiveDemoExampleLabel">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleLiveDemo = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/vue'
import { ref } from 'vue'
const visibleLiveDemo = ref(false)
</script>
```

### Static backdrop

If you set `backdrop` property to `static`, your modal will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it.

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleStaticBackdropDemo = true
      }
    "
    >Launch static backdrop modal</CButton
  >
  <CModal
    backdrop="static"
    :visible="visibleStaticBackdropDemo"
    aria-labelledby="StaticBackdropExampleLabel"
    @close="
      () => {
        visibleStaticBackdropDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="StaticBackdropExampleLabel">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleStaticBackdropDemo = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/vue'
import { ref } from 'vue'
const visibleStaticBackdropDemo = ref(false)
</script>
```

### Scrolling long content

When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleScrollingLongContentDemo = true
      }
    "
    >Launch static backdrop modal</CButton
  >
  <CModal
    :visible="visibleScrollingLongContentDemo"
    aria-labelledby="ScrollingLongContentExampleLabel"
    @close="
      () => {
        visibleScrollingLongContentDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="ScrollingLongContentExampleLabel">Modal title</CModalTitle>
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
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
    </CModalBody>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/vue'
import { ref } from 'vue'
const visibleScrollingLongContentDemo = ref(false)
</script>
```

You can also create a scrollable modal that allows scroll the modal body by adding `scrollable` prop.

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleScrollableDemo = true
      }
    "
    >Launch static backdrop modal</CButton
  >
  <CModal
    scrollable
    :visible="visibleScrollableDemo"
    aria-labelledby="ScrollingLongContentExampleLabel2"
    @close="
      () => {
        visibleScrollableDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="ScrollingLongContentExampleLabel2">Modal title</CModalTitle>
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
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
    </CModalBody>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/vue'
import { ref } from 'vue'
const visibleScrollableDemo = ref(false)
</script>
```

### Vertically centered

Add `alignment="center` to `<CModal>` to vertically center the modal.

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleVerticallyCenteredDemo = true
      }
    "
    >Vertically centered modal</CButton
  >
  <CModal
    alignment="center"
    :visible="visibleVerticallyCenteredDemo"
    aria-labelledby="VerticallyCenteredExample"
    @close="
      () => {
        visibleVerticallyCenteredDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="VerticallyCenteredExample">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleVerticallyCenteredDemo = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/vue'
import { ref } from 'vue'
const visibleVerticallyCenteredDemo = ref(false)
</script>
```

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleVerticallyCenteredScrollableDemo = true
      }
    "
    >Vertically centered scrollable modal</CButton
  >
  <CModal
    alignment="center"
    scrollable
    :visible="visibleVerticallyCenteredScrollableDemo"
    aria-labelledby="VerticallyCenteredExample2"
    @close="
      () => {
        visibleVerticallyCenteredScrollableDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="VerticallyCenteredExample2">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleVerticallyCenteredScrollableDemo = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/vue'
import { ref } from 'vue'
const visibleVerticallyCenteredScrollableDemo = ref(false)
</script>
```

### Tooltips and popovers

`<CTooltips>` and `<CPopovers>` can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automaticallyed.

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleTooltipsAndPopoversDemo = true
      }
    "
    >Launch demo modal</CButton
  >
  <CModal
    :visible="visibleTooltipsAndPopoversDemo"
    aria-labelledby="TooltipsAndPopoverExample"
    @close="
      () => {
        visibleTooltipsAndPopoversDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="TooltipsAndPopoverExample">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <h5>Popover in a modal</h5>
      <p>
        This
        <CButton
          v-c-popover="{
            header: 'Popover title',
            content: 'Popover body content is set in this property.',
          }"
          color="secondary"
          >button</CButton
        >
      </p>
      <hr />
      <h5>Tooltips in a modal</h5>
      <p>
        <CLink v-c-tooltip="'Tooltip'">This link</CLink> and
        <CLink v-c-tooltip="'Tooltip'">that link</CLink> have tooltips on hover.
      </p>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleTooltipsAndPopoversDemo = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CLink,
  CModalFooter,
  vcpopover as vCPopover,
  vctooltip as vCTooltip,
} from '@coreui/vue'
import { ref } from 'vue'
const visibleTooltipsAndPopoversDemo = ref(false)
</script>
```

### Toggle between modals

Toggle between multiple modals with some clever placement of the `visible` props. **Please note multiple modals cannot be opened at the same time** — this method simply toggles between two separate modals.

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleToggleBetweenModalsDemo1 = true
      }
    "
    >Open first modal</CButton
  >
  <CModal
    :visible="visibleToggleBetweenModalsDemo1"
    aria-labelledby="ToggleBetweenModalsExample1"
    @close="
      () => {
        visibleToggleBetweenModalsDemo1 = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="ToggleBetweenModalsExample1">Modal 1 title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>Show a second modal and hide this one with the button below.</p>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="primary"
        @click="
          () => {
            visibleToggleBetweenModalsDemo1 = false
            visibleToggleBetweenModalsDemo2 = true
          }
        "
        >Open second modal</CButton
      >
    </CModalFooter>
  </CModal>
  <CModal
    :visible="visibleToggleBetweenModalsDemo2"
    aria-labelledby="ToggleBetweenModalsExample2"
    @close="
      () => {
        visibleToggleBetweenModalsDemo1 = true
        visibleToggleBetweenModalsDemo2 = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="ToggleBetweenModalsExample2">Modal 2 title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>Hide this modal and show the first with the button below.</p>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="primary"
        @click="
          () => {
            visibleToggleBetweenModalsDemo1 = true
            visibleToggleBetweenModalsDemo2 = false
          }
        "
        >Back to first</CButton
      >
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/vue'
import { ref } from 'vue'
const visibleToggleBetweenModalsDemo1 = ref(false)
const visibleToggleBetweenModalsDemo2 = ref(false)
</script>
```

### Change animation

The variable `$modal-fade-transform` determines the transform state of Vue Modal component before the modal fade-in animation, whereas the variable `$modal-show-transform` determines the transform state of Modal component after the modal fade-in animation.
If you want a zoom-in animation, for example, set `$modal-fade-transform: scale(.8)`.

### Remove animation

For modals that simply appear rather than fade into view, set `transition` to `false`.

```vue
<CModal transition={false}>...</CModal>
```

### Accessibility

Be sure to add `aria-labelledby="..."`, referencing the modal title, to `` Additionally, you may give a description of your modal dialog with `aria-describedby` on `<CModal>`. Note that you don’t need to add `role="dialog` since we already add it.

## Optional sizes

Modals have three optional sizes, available via modifier classes to be placed on a `<CModal>`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.

<table class="table">
  <thead>
    <tr>
      <th>Size</th>
      <th>Property size</th>
      <th>Modal max-width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Small</td>
      <td><code>'sm'</code></td>
      <td><code>300px</code></td>
    </tr>
    <tr>
      <td>Default</td>
      <td class="text-body-secondary">None</td>
      <td><code>500px</code></td>
    </tr>
    <tr>
      <td>Large</td>
      <td><code>'lg'</code></td>
      <td><code>800px</code></td>
    </tr>
    <tr>
      <td>Extra large</td>
      <td><code>'xl'</code></td>
      <td><code>1140px</code></td>
    </tr>
  </tbody>
</table>

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        xlDemo = true
      }
    "
    >Extra large modal</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        lgDemo = true
      }
    "
    >Large modal</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        smDemo = true
      }
    "
    >Small modal</CButton
  >
  <CModal
    size="xl"
    :visible="xlDemo"
    aria-labelledby="OptionalSizesExample1"
    @close="
      () => {
        xlDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample1">Extra large modal</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    size="lg"
    :visible="lgDemo"
    aria-labelledby="OptionalSizesExample2"
    @close="
      () => {
        lgDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample2">Large modal</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    size="sm"
    :visible="smDemo"
    aria-labelledby="OptionalSizesExample3"
    @close="
      () => {
        smDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample3">Small modal</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/vue'
import { ref } from 'vue'
const xlDemo = ref(false)
const lgDemo = ref(false)
const smDemo = ref(false)
</script>
```

## Fullscreen Modal

Another override is the option to pop up a modal that covers the user viewport, available via property `fullscreen`.

<table class="table">
  <thead>
    <tr>
      <th>Property fullscreen</th>
      <th>Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>true</code></td>
      <td>Always</td>
    </tr>
    <tr>
      <td><code>'sm'</code></td>
      <td>Below <code>576px</code></td>
    </tr>
    <tr>
      <td><code>'md'</code></td>
      <td>Below <code>768px</code></td>
    </tr>
    <tr>
      <td><code>'lg'</code></td>
      <td>Below <code>992px</code></td>
    </tr>
    <tr>
      <td><code>'xl'</code></td>
      <td>Below <code>1200px</code></td>
    </tr>
    <tr>
      <td><code>'xxl'</code></td>
      <td>Below <code>1400px</code></td>
    </tr>
  </tbody>
</table>

```html
<template>
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenDemo = true
      }
    "
    >Full screen</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenSmDemo = true
      }
    "
    >Full screen below sm</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenMdDemo = true
      }
    "
    >Full screen below md</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenLgDemo = true
      }
    "
    >Full screen below lg</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenXlDemo = true
      }
    "
    >Full screen below xl</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenXxlDemo = true
      }
    "
    >Full screen below xxl</CButton
  >
  <CModal
    fullscreen
    :visible="fullscreenDemo"
    aria-labelledby="FullscreenExample1"
    @close="
      () => {
        fullscreenDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample1">Full screen</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="sm"
    :visible="fullscreenSmDemo"
    aria-labelledby="FullscreenExample2"
    @close="
      () => {
        fullscreenSmDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample2">Full screen below sm</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="md"
    :visible="fullscreenMdDemo"
    aria-labelledby="FullscreenExample3"
    @close="
      () => {
        fullscreenMdDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample3">Full screen below md</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="lg"
    :visible="fullscreenLgDemo"
    aria-labelledby="FullscreenExample4"
    @close="
      () => {
        fullscreenLgDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample4">Full screen below lg</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="xl"
    :visible="fullscreenXlDemo"
    aria-labelledby="FullscreenExample5"
    @close="
      () => {
        fullscreenXlDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample5">Full screen below xl</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="xxl"
    :visible="fullscreenXxlDemo"
    aria-labelledby="FullscreenExample6"
    @close="
      () => {
        fullscreenXxlDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample6">Full screen below xxl</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/vue'
import { ref } from 'vue'
const fullscreenDemo = ref(false)
const fullscreenSmDemo = ref(false)
const fullscreenMdDemo = ref(false)
const fullscreenLgDemo = ref(false)
const fullscreenXlDemo = ref(false)
const fullscreenXxlDemo = ref(false)
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CModal /&gt;](./api/#cmodal)
- [&lt;CModalBody /&gt;](./api/#cmodalbody)
- [&lt;CModalFooter /&gt;](./api/#cmodalfooter)
- [&lt;CModalHeader /&gt;](./api/#cmodalheader)
- [&lt;CModalTitle /&gt;](./api/#cmodaltitle)
