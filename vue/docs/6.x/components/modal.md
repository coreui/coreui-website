# Vue Modal Component

> Vue Modal component offers a lightweight, multi-purpose popup to add dialogs to yours. Learn how to customize CoreUI Vue modal components easily. Multiple examples and tutorial.

## How it works

Vue modals are lightweight and multi-purpose popups built on the native `<dialog>` element. Modals are split into three primary sections: header, body, and footer. Each has its role and so should be used accordingly. Before getting started with the Vue modal component, be sure to read the following as our menu options have recently changed.

_Added in 6.0.0._

Like its successor [Dialog](../dialog/), the modal also takes the canonical `show` / `v-model:show` props — see [Usage with v-model](../dialog/#usage-with-v-model) on the Dialog page. The `visible` prop is deprecated: it keeps its old behavior, and it is ignored when `show` is set.

- `<CModal>` renders the browser's native `<dialog>` element and opens it with the `showModal()` API. The browser promotes an open modal to the **top layer**, so it displays over everything else in the document with no `z-index` management.
- Focus trapping, background inertness, and the dialog ARIA semantics come from the browser — no `role`, `aria-modal`, `aria-hidden`, or `tabindex` attributes are needed in the markup.
- The backdrop is the native `::backdrop` pseudo-element. Clicking it closes the modal, and page scroll is blocked while a modal is open.
- Modals are vertically and horizontally centered by the browser.
- The [`autofocus` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) has no effect in modals — the element renders before the dialog opens, so the focus never lands. To achieve the same effect, focus the element yourself once the modal opens:

```vue
<template>
  <CModal :show="show" @show="() => requestAnimationFrame(() => input?.focus())">
    <CModalBody>
      <input class="form-control" ref="input" />
    </CModalBody>
  </CModal>
</template>

<script setup>
import { useTemplateRef } from 'vue'

const input = useTemplateRef('input')
</script>
```

## Examples

### Modal components

Below is a _static_ Vue modal component example — it is open and rendered in place. Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.

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

You can also create a custom modal component in Vue, allowing you to pass props such as `show` and listen to `update:show` for greater flexibility and reusability.

### Live demo

Toggle a working Vue modal component demo by clicking the button below. It will slide down and fade in from the top of the page. Integrating modal components is a common practice in modern web apps to improve user interaction and workflow.

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

If you set a `backdrop` to `static`, your Vue modal component will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it.

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

When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.

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

You can also create a scrollable Vue modal component that allows scroll the modal body by adding `scrollable` prop.

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

### Vertically centered

A modal dialog is centered by the browser, so there is nothing to set. The example below pairs it with `scrollable`.

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

### Tooltips and popovers

`<CTooltips>` and `<CPopovers>` can be placed within Vue modals as needed. When modal components are closed, any tooltips and popovers within are also automatically dismissed.

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

Toggle between multiple modals with some clever placement of the `show` props. **Please note multiple modals cannot be opened at the same time** — this method simply toggles between two separate modals.

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

### Change animation

The variable `$modal-fade-transform` determines the transform state of Vue Modal component before the modal fade-in animation, whereas the variable `$modal-show-transform` determines the transform state of Modal component after the modal fade-in animation.

If you want a zoom-in animation, for example, set `$modal-fade-transform: scale(.8)`.

### Remove animation

For modals that simply appear rather than fade into view, set `transition` to `false`.

```vue
<CModal :transition="false">...</CModal>
```

## Optional sizes

Modals have three optional sizes, available via modifier classes to be placed on a `<CModal>`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.

| Size        | Property size | Modal max-width |
| ----------- | ------------- | --------------- |
| Small       | `'sm'`        | `300px`         |
| Default     | None          | `500px`         |
| Large       | `'lg'`        | `800px`         |
| Extra large | `'xl'`        | `1140px`        |

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

## Fullscreen modal

Another override is the option to pop up a Vue modal component that covers the user viewport, available via property `fullscreen`.

| Fullscreen | Availability   |
| ---------- | -------------- |
| `true`     | Always         |
| `'sm'`     | Below `576px`  |
| `'md'`     | Below `768px`  |
| `'lg'`     | Below `1024px`  |
| `'xl'`     | Below `1280px` |
| `'2xl'`    | Below `1536px` |

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

## Accessibility

Be sure to add `aria-labelledby="..."`, referencing the modal title, to `` Additionally, you may give a description of your modal dialog with `aria-describedby` on `<CModal>`. Note that you don’t need to add `role="dialog`, `aria-hidden="true"`, and `aria-modal="true"` since we already add it.

## Dark variant

Add `dark` and the modal flips the tokens its own surface reads, so the modal and everything in it — including the close button — turns dark on a light page.

```html
<template>
  <CButton theme="primary" @click="show = true">Open dark modal</CButton>
  <CModal v-model:show="show" dark>
    <CModalHeader>
      <CModalTitle>Dark modal</CModalTitle>
    </CModalHeader>
    <CModalBody>The surface, the text and the dividers all read the flipped tokens.</CModalBody>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CModal /&gt;](./api/#cmodal)
- [&lt;CModalBody /&gt;](./api/#cmodalbody)
- [&lt;CModalFooter /&gt;](./api/#cmodalfooter)
- [&lt;CModalHeader /&gt;](./api/#cmodalheader)
- [&lt;CModalTitle /&gt;](./api/#cmodaltitle)
