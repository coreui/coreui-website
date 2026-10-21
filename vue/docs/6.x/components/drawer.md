# Vue Drawer Component

> Vue Drawer component built on the native <dialog> element — a floating side panel with top layer rendering, a native backdrop and accessible semantics out of the box.

## Overview

_Added in 6.0.0._

`<CDrawer>` is a panel that slides in from an edge of the viewport, built on the native `<dialog>` element. It carries the look Bootstrap 6 introduces under the same name — a floating, inset, rounded panel.

Drawer shares its behavior with [Offcanvas](../offcanvas/). Offcanvas keeps the classic look and the v5 vocabulary; Drawer carries the new look and the `drawer-*` classes. Pick one — they are independent components, and **Offcanvas is deprecated for removal in v7**.

## Example

```html
<template>
  <CButton theme="primary" @click="show = true">Toggle drawer</CButton>
  <CDrawer v-model:show="show" placement="start">
    <CDrawerHeader>
      <CDrawerTitle>Drawer</CDrawerTitle>
    </CDrawerHeader>
    <CDrawerBody>Content for the drawer goes here.</CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Placement

Drawers can slide in from any edge of the viewport — `placement` picks which one:

- `placement="start"` — left side of the viewport (shown above)
- `placement="end"` — right side of the viewport
- `placement="top"` — top of the viewport
- `placement="bottom"` — bottom of the viewport
- `fullscreen` — covers the viewport (minus the inset), and needs no placement

```html
<template>
  <CButton theme="primary" @click="show = true">Right drawer</CButton>
  <CDrawer v-model:show="show" placement="end">
    <CDrawerHeader>
      <CDrawerTitle>Drawer right</CDrawerTitle>
      <CCloseButton @click="show = false" />
    </CDrawerHeader>
    <CDrawerBody>Content for the drawer goes here.</CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  CDrawer,
  CDrawerBody,
  CDrawerHeader,
  CDrawerTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

```html
<template>
  <CButton theme="primary" @click="show = true">Top drawer</CButton>
  <CDrawer v-model:show="show" placement="top">
    <CDrawerHeader>
      <CDrawerTitle>Drawer top</CDrawerTitle>
      <CCloseButton @click="show = false" />
    </CDrawerHeader>
    <CDrawerBody>Content for the drawer goes here.</CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  CDrawer,
  CDrawerBody,
  CDrawerHeader,
  CDrawerTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

```html
<template>
  <CButton theme="primary" @click="show = true">Bottom drawer</CButton>
  <CDrawer v-model:show="show" placement="bottom">
    <CDrawerHeader>
      <CDrawerTitle>Drawer bottom</CDrawerTitle>
      <CCloseButton @click="show = false" />
    </CDrawerHeader>
    <CDrawerBody>Content for the drawer goes here.</CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  CDrawer,
  CDrawerBody,
  CDrawerHeader,
  CDrawerTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

```html
<template>
  <CButton theme="primary" @click="show = true">Fullscreen drawer</CButton>
  <CDrawer v-model:show="show" fullscreen>
    <CDrawerHeader>
      <CDrawerTitle>Drawer fullscreen</CDrawerTitle>
      <CCloseButton @click="show = false" />
    </CDrawerHeader>
    <CDrawerBody>Content for the drawer goes here.</CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  CDrawer,
  CDrawerBody,
  CDrawerHeader,
  CDrawerTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

## Variants

`sheet` drops the inset and the rounded corners so the panel sits flush against the edge, `translucent` blurs what is behind it, `fitContent` sizes it to its content, and `fullscreen` covers the viewport.

```html
<template>
  <div class="hstack gap-3 flex-wrap">
    <CButton v-for="value in variants" :key="value" theme="primary" @click="open(value)">
      {{ value }}
    </CButton>
  </div>
  <CDrawer v-model:show="show" placement="end" v-bind="{ [variant]: true }">
    <CDrawerHeader>
      <CDrawerTitle>{{ variant }}</CDrawerTitle>
    </CDrawerHeader>
    <CDrawerBody>Placeholder content for the drawer body.</CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/vue'

const variants = ['sheet', 'translucent', 'fitContent', 'fullscreen']
const variant = ref('sheet')
const show = ref(false)

const open = (value) => {
  variant.value = value
  show.value = true
}
</script>
```

### Footer

Add a `<CDrawerFooter>` below the `<CDrawerBody>` for the panel's actions. It is a flex row that wraps and keeps its children spaced and vertically centered, so a row of buttons needs no utilities.

```html
<template>
  <CButton theme="primary" @click="show = true">Toggle drawer with footer</CButton>
  <CDrawer v-model:show="show" placement="end">
    <CDrawerHeader>
      <CDrawerTitle>Drawer with footer</CDrawerTitle>
    </CDrawerHeader>
    <CDrawerBody>Placeholder content for the drawer body.</CDrawerBody>
    <CDrawerFooter>
      <CButton theme="secondary" variant="outline" @click="show = false">Close</CButton>
      <CButton theme="primary">Save changes</CButton>
    </CDrawerFooter>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerTitle,
} from '@coreui/vue'

const show = ref(false)
</script>
```

### Backdrop presets

The backdrop reads `--cui-backdrop-color`, `--cui-backdrop-opacity` and `--cui-backdrop-blur`; a drawer defaults to a translucent tint of the page. For the dialog's dark scrim set `backdrop-variant="scrim"`; the [presets](https://coreui.io/vue/docs/helpers/backdrop/) work on every overlay component.

```html
<template>
  <CButton theme="primary" @click="show = true">Toggle drawer with a dark backdrop</CButton>
  <CDrawer v-model:show="show" backdrop-variant="scrim" placement="start">
    <CDrawerHeader>
      <CDrawerTitle>Dark backdrop</CDrawerTitle>
    </CDrawerHeader>
    <CDrawerBody>The scrim the dialog uses, on a drawer.</CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

### No backdrop

Set `:backdrop="false"` to hide the backdrop while keeping the drawer modal — the panel still takes the top layer and traps focus, but nothing dims the page behind it. Pair it with `scroll` to make the drawer non-modal instead.

```html
<template>
  <CButton theme="primary" @click="show = true">Drawer without a backdrop</CButton>
  <CDrawer v-model:show="show" :backdrop="false" placement="end">
    <CDrawerHeader>
      <CDrawerTitle>No backdrop</CDrawerTitle>
    </CDrawerHeader>
    <CDrawerBody>Nothing dims the page, but focus is still trapped here.</CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

### Instant

Set `:animation="false"` on a drawer that should appear and disappear at once, with no slide and no backdrop fade — it renders with `.drawer-instant`, and it applies to both directions.

### Dark

Add `dark` and the drawer flips the tokens its own surface reads, so the panel and everything in it — including the close button — turns dark on a light page.

```html
<template>
  <CButton theme="primary" @click="show = true">Dark drawer</CButton>
  <CDrawer v-model:show="show" dark placement="end">
    <CDrawerHeader>
      <CDrawerTitle>Dark drawer</CDrawerTitle>
    </CDrawerHeader>
    <CDrawerBody>The surface, the text and the dividers all read the flipped tokens.</CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Body scrolling

A visible backdrop needs the top layer, so `scroll` alone only unlocks the page scroll. Pair it with `:backdrop="false"` and the drawer opens **non-modally** — the page behind it stays interactive as well as scrollable.

```html
<template>
  <CButton theme="primary" @click="show = true">Enable body scrolling</CButton>
  <CDrawer v-model:show="show" placement="start" scroll :backdrop="false">
    <CDrawerHeader>
      <CDrawerTitle>Body scrolling</CDrawerTitle>
    </CDrawerHeader>
    <CDrawerBody>
      Without a backdrop the drawer opens non-modally, so the page behind it stays interactive and
      scrollable.
    </CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Static backdrop

With `backdrop="static"` the drawer does not close on a click outside — it plays a bounce instead.

```html
<template>
  <CButton theme="primary" @click="show = true">Toggle static drawer</CButton>
  <CDrawer v-model:show="show" placement="start" backdrop="static">
    <CDrawerHeader>
      <CDrawerTitle>Static backdrop</CDrawerTitle>
    </CDrawerHeader>
    <CDrawerBody>Clicking outside plays a bounce instead of closing.</CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Responsive

`responsive` keeps the content in the page from the given breakpoint up, and turns it into a drawer below it. Once the window grows past the breakpoint, an open drawer asks to close through `update:show`: uncontrolled it closes, with `v-model:show` it waits for your state.

```html
<template>
  <CButton class="d-lg-none" theme="primary" @click="show = true">
    Toggle responsive drawer
  </CButton>
  <CDrawer v-model:show="show" placement="start" responsive="lg">
    <CDrawerHeader>
      <CDrawerTitle>Responsive drawer</CDrawerTitle>
    </CDrawerHeader>
    <CDrawerBody>
      Below <code>lg</code> this is a drawer; from <code>lg</code> up the content sits in the page.
    </CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Usage with v-model

Bind `v-model:show` and the drawer renders exactly what your state says — dismiss gestures only emit `update:show`, so feed the change back, or nothing closes — `v-model:show` is that loop in one attribute.

```html
<template>
  <CButton theme="primary" @click="show = true">Open drawer</CButton>
  <CDrawer placement="end" :show="show" @update:show="(value) => (show = value)">
    <CDrawerHeader>
      <CDrawerTitle>Controlled drawer</CDrawerTitle>
    </CDrawerHeader>
    <CDrawerBody>
      The drawer renders what the state says. Escape and the backdrop click land in
      <code>update:show</code>, and feeding them back is what closes the panel.
    </CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

Use it when the open state belongs to something else — a route, a filter panel toggled from a toolbar, a cart the whole page reads — or when closing should be intercepted first.

### Initial open state

Give the drawer a starting point and let it close itself.

```vue
<CDrawer show placement="end">
```

`update:show` fires either way whenever the drawer requests an open-state change — a dismiss gesture (Escape, a click on the backdrop) or any internal toggle. The deprecated `visible` prop keeps its old behavior and is ignored when `show` is set.

## Accessibility

The native `<dialog>` carries the semantics: a modal drawer traps focus, marks the rest of the page inert and returns focus to the trigger on close, without any ARIA attribute of ours. Give the drawer an accessible name by pointing `aria-labelledby` at your `<CDrawerTitle>`.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDrawer /&gt;](./api/#cdrawer)
- [&lt;CDrawerBody /&gt;](./api/#cdrawerbody)
- [&lt;CDrawerFooter /&gt;](./api/#cdrawerfooter)
- [&lt;CDrawerHeader /&gt;](./api/#cdrawerheader)
- [&lt;CDrawerTitle /&gt;](./api/#cdrawertitle)
