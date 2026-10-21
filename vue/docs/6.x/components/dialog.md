# Vue Dialog Component

> Vue Dialog component built on the native <dialog> element — top layer rendering, blurred native backdrop, focus trapping, and accessible semantics out of the box.

## Overview

_Added in 6.0.0._

`<CDialog>` renders a popup on the native `<dialog>` element, so accessibility, focus management and the backdrop come from the browser rather than from a custom implementation. It carries the look Bootstrap 6 introduces under the same name — a centered floating panel over a blurred backdrop.

Dialog shares its behavior with [Modal](../modal/). Modal keeps the classic look and the v5 vocabulary; Dialog carries the new look and the `dialog-*` classes. Pick one — they are independent components, and **Modal is deprecated for removal in v7**.

What the native element provides:

- **Modal or non-modal** — `modal` (default `true`) promotes the dialog to the top layer with a backdrop and focus trapping; `:modal="false"` leaves the page interactive.
- **A built-in backdrop** through the `::backdrop` pseudo-element. `backdrop="static"` locks clicks outside; `:backdrop="false"` suppresses it visually.
- **Escape handling** closes the dialog; `:keyboard="false"` disables it.
- **Accessibility** — focus is trapped inside a modal dialog and returned to the trigger on close, with no `role`, `aria-modal`, `aria-hidden` or `tabindex` in the markup.
- **Animated open and close** — the exit transition, the `::backdrop` fade included, plays in every browser, because the dialog stays in the top layer until the transition ends.

## Example

Toggle a dialog by clicking the button below.

```html
<template>
  <CButton theme="primary" @click="show = true">Launch dialog</CButton>
  <CDialog v-model:show="show">
    <CDialogHeader>
      <CDialogTitle>Dialog title</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>Woohoo, you are reading this text in a dialog!</CDialogBody>
    <CDialogFooter>
      <CButton theme="secondary" @click="show = false">Close</CButton>
      <CButton theme="primary">Save changes</CButton>
    </CDialogFooter>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CDialog,
  CDialogBody,
  CDialogFooter,
  CDialogHeader,
  CDialogTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

## Slide animations

Dialogs fade in and out by default. `animation` picks a different entry: `"slide-down"` comes in from above, `"slide-up"` from below — and the exit reverses it. The value names the variant rather than the direction, so further ones are added to the stylesheet without touching the prop.

```html
<template>
  <div class="hstack gap-3">
    <CButton theme="primary" @click="open('slide-down')">Slide down</CButton>
    <CButton theme="primary" @click="open('slide-up')">Slide up</CButton>
  </div>
  <!-- The variant is held past the close, or the exit would reverse a different entry. -->
  <CDialog v-model:show="show" :animation="animation">
    <CDialogHeader>
      <CDialogTitle>{{ animation }}</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>The exit reverses the entry.</CDialogBody>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const animation = ref('slide-down')
const show = ref(false)

const open = (value) => {
  animation.value = value
  show.value = true
}
</script>
```

## Static backdrop

With `backdrop="static"` the dialog does not close on a click outside — it plays a scale bounce instead.

```html
<template>
  <CButton theme="primary" @click="show = true">Launch static backdrop dialog</CButton>
  <CDialog v-model:show="show" backdrop="static">
    <CDialogHeader>
      <CDialogTitle>Dialog title</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>
      Clicking outside plays a bounce instead of closing. Escape still closes it.
    </CDialogBody>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Backdrop

The backdrop reads three tokens from `:root` — `--cui-backdrop-color`, `--cui-backdrop-opacity` and `--cui-backdrop-blur` — and every overlay component paints it the same way. A dialog defaults to a dark scrim; the drawer defaults to a translucent tint of the page. Pick the other look with the `backdrop-variant` prop — a [backdrop preset](https://coreui.io/vue/docs/helpers/backdrop/) on the component: `translucent` here, `scrim` on a drawer; `:backdrop="false"` on either drops the layer altogether.

```html
<template>
  <CButton theme="primary" @click="show = true">Launch dialog with a translucent backdrop</CButton>
  <CDialog v-model:show="show" backdrop-variant="translucent">
    <CDialogHeader>
      <CDialogTitle>Translucent backdrop</CDialogTitle>
    </CDialogHeader>
    <CDialogBody
      >The page behind stays readable through a light tint instead of a dark scrim.</CDialogBody
    >
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Scrolling long content

Add `scrollable` to scroll the dialog body while the header and footer stay put.

```html
<template>
  <CButton theme="primary" @click="show = true">Launch scrollable dialog</CButton>
  <CDialog v-model:show="show" scrollable>
    <CDialogHeader>
      <CDialogTitle>Scrollable body</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>
      <p v-for="index in 20" :key="index">
        Placeholder paragraph {{ index }} — the body scrolls while the header stays put.
      </p>
    </CDialogBody>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Toggle between dialogs

A trigger inside an open dialog can swap to another one — the backdrop stays up, so there is no flash between them. Drive both from one piece of state rather than closing the first and opening the second.

```html
<template>
  <CButton theme="primary" @click="open = 'first'">Open first dialog</CButton>

  <CDialog :show="open === 'first'" @update:show="(show) => !show && (open = undefined)">
    <CDialogHeader>
      <CDialogTitle>First dialog</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>
      <CButton theme="primary" @click="open = 'second'">Open second dialog</CButton>
    </CDialogBody>
  </CDialog>

  <CDialog :show="open === 'second'" @update:show="(show) => !show && (open = undefined)">
    <CDialogHeader>
      <CDialogTitle>Second dialog</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>
      <CButton theme="secondary" @click="open = 'first'">Back to the first</CButton>
    </CDialogBody>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const open = ref()
</script>
```

## Non-modal dialogs

Set `:modal="false"` to show the dialog without the top layer — no backdrop, no focus trap, and the rest of the page stays interactive.

```html
<template>
  <CButton theme="primary" @click="show = true">Launch non-modal dialog</CButton>
  <CDialog v-model:show="show" :modal="false">
    <CDialogHeader>
      <CDialogTitle>Non-modal</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>
      No backdrop, no focus trap — the rest of the page stays interactive and scrollable.
    </CDialogBody>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Optional sizes

Dialogs have three optional sizes.

| Size | Prop | Dialog max-width |
| --- | --- | --- |
| Small | `size="sm"` | `280px` |
| Default | — | `500px` |
| Large | `size="lg"` | `800px` |
| Extra large | `size="xl"` | `1140px` |

```html
<template>
  <div class="hstack gap-3">
    <CButton v-for="value in sizes" :key="value" theme="primary" @click="open(value)">
      {{ value }} dialog
    </CButton>
  </div>
  <CDialog v-model:show="show" :size="size">
    <CDialogHeader>
      <CDialogTitle>Size {{ size }}</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>Placeholder content for the dialog body.</CDialogBody>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const sizes = ['sm', 'lg', 'xl']
const size = ref('lg')
const show = ref(false)

const open = (value) => {
  size.value = value
  show.value = true
}
</script>
```

## Fullscreen dialog

Add `fullscreen` for a dialog that covers the viewport. Pass a breakpoint instead — `sm`, `md`, `lg`, `xl` or `2xl` — to cover it only below that width and keep the floating panel above it.

```html
<template>
  <CButton theme="primary" @click="show = true">Fullscreen dialog</CButton>
  <CDialog v-model:show="show" fullscreen>
    <CDialogHeader>
      <CDialogTitle>Fullscreen</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>The dialog covers the entire viewport.</CDialogBody>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Dark variant

Add `dark` and the dialog flips the tokens its own surface reads, so the dialog and everything in it — including the close button — turns dark on a light page.

```html
<template>
  <CButton theme="primary" @click="show = true">Open dark dialog</CButton>
  <CDialog v-model:show="show" dark>
    <CDialogHeader>
      <CDialogTitle>Dark dialog</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>The surface, the text and the dividers all read the flipped tokens.</CDialogBody>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Usage with v-model

Bind `v-model:show` and the dialog renders exactly what your state says — dismiss gestures only emit `update:show`, and nothing closes until you flip the prop. That makes confirm-before-close possible: instead of feeding a close request straight back (which is what `v-model:show` does), ask first.

```html
<template>
  <CButton theme="primary" @click="show = true">Launch dialog</CButton>
  <CDialog :show="show" @update:show="handleShowChange">
    <CDialogHeader>
      <CDialogTitle>Unsaved changes</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>
      {{
        confirming
          ? 'Close without saving? Your changes will be lost.'
          : 'Try to close this dialog with Escape or a click on the backdrop — it will ask first.'
      }}
    </CDialogBody>
    <CDialogFooter>
      <template v-if="confirming">
        <CButton theme="secondary" @click="confirming = false">Keep editing</CButton>
        <CButton theme="danger" @click="close">Discard and close</CButton>
      </template>
      <CButton v-else theme="primary" @click="close">Save and close</CButton>
    </CDialogFooter>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CDialog,
  CDialogBody,
  CDialogFooter,
  CDialogHeader,
  CDialogTitle,
} from '@coreui/vue'

const show = ref(false)
const confirming = ref(false)

const handleShowChange = (nextShow) => {
  if (!nextShow) {
    confirming.value = true
    return
  }

  show.value = nextShow
}

const close = () => {
  confirming.value = false
  show.value = false
}
</script>
```

Use it when closing has consequences — unsaved form input, an interrupted upload — or when the open state belongs to something else, like a route.

### Initial open state

Give the dialog a starting point and let it close itself — dismiss gestures are handled internally.

```vue
<CDialog show>
```

`update:show` fires either way whenever the dialog requests an open-state change — a dismiss gesture (Escape, a click on the backdrop) or any internal toggle — so you can watch the state without taking it over. The deprecated `visible` prop keeps its old behavior and is ignored when `show` is set.

## Accessibility

The native `<dialog>` carries the semantics: a modal dialog traps focus, marks the rest of the page inert and returns focus to the trigger on close, and it is exposed as a dialog to assistive technology without any ARIA attribute of ours. Give the dialog an accessible name by pointing `aria-labelledby` at your `<CDialogTitle>`.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDialog /&gt;](./api/#cdialog)
- [&lt;CDialogBody /&gt;](./api/#cdialogbody)
- [&lt;CDialogFooter /&gt;](./api/#cdialogfooter)
- [&lt;CDialogHeader /&gt;](./api/#cdialogheader)
- [&lt;CDialogTitle /&gt;](./api/#cdialogtitle)
