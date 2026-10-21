# Vue Bootstrap Badge Component

> Learn how to use CoreUI’s Vue Badge component with Bootstrap styles for flexible, framework-consistent UI.

## Example

Badge component scales to suit the size of the parent element by using relative font sizing and `em` units.

### Basic usage

```html
<template>
  <CBadge>New</CBadge>
  <CBadge theme="primary">New</CBadge>
  <CBadge theme="primary" variant="subtle">New</CBadge>
  <CBadge theme="primary" variant="outline">New</CBadge>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
</script>
```

Badges can be used as part of links or buttons to provide a counter.

```html
<template>
  <CButton theme="primary"> Notifications <CBadge theme="danger">4</CBadge> </CButton>
</template>

<script setup>
import { CButton, CBadge } from '@coreui/vue'
</script>
```

Remark that depending on how you use them, badges may be complicated for users of screen readers and related assistive technologies.

Unless the context is clear, consider including additional context with a visually hidden piece of additional text.

```html
<template>
  <CButton theme="primary">
    Profile <CBadge theme="secondary">9</CBadge>
    <span class="visually-hidden">unread messages</span>
  </CButton>
</template>

<script setup>
import { CButton, CBadge } from '@coreui/vue'
</script>
```

### Positioned

Use `position` prop to modify a component and position it in the corner of a link or button.

```html
<template>
  <CButton theme="primary" class="position-relative">
    Profile
    <CBadge class="border border-bg" theme="danger" position="top-start" shape="rounded-pill">
      99+ <span class="visually-hidden">unread messages</span>
    </CBadge>
  </CButton>
  <CButton theme="primary" class="position-relative ms-1">
    Profile
    <CBadge class="border border-bg" theme="danger" position="top-end" shape="rounded-pill">
      99+ <span class="visually-hidden">unread messages</span>
    </CBadge>
  </CButton>
  <br />
  <CButton theme="primary" class="position-relative">
    Profile
    <CBadge class="border border-bg" theme="danger" position="bottom-start" shape="rounded-pill">
      99+ <span class="visually-hidden">unread messages</span>
    </CBadge>
  </CButton>
  <CButton theme="primary" class="position-relative ms-1">
    Profile
    <CBadge class="border border-bg" theme="danger" position="bottom-end" shape="rounded-pill">
      99+ <span class="visually-hidden">unread messages</span>
    </CBadge>
  </CButton>
</template>

<script setup>
import { CButton, CBadge } from '@coreui/vue'
</script>
```

You can also create more generic indicators without a counter using a few more utilities.

```html
<template>
  <CButton theme="primary" class="position-relative">
    Profile
    <CBadge class="border border-bg p-3" theme="danger" position="top-end" shape="rounded-circle">
      <span class="visually-hidden">New alerts</span>
    </CBadge>
  </CButton>
</template>

<script setup>
import { CButton, CBadge } from '@coreui/vue'
</script>
```

## Contextual variations

Add any of the below-mentioned `color` props to modify the presentation of a badge.

```html
<template>
  <CBadge theme="primary">primary</CBadge>
  <CBadge theme="secondary">secondary</CBadge>
  <CBadge theme="success">success</CBadge>
  <CBadge theme="danger">danger</CBadge>
  <CBadge theme="warning">warning</CBadge>
  <CBadge theme="info">info</CBadge>
  <CBadge theme="secondary">light</CBadge>
  <CBadge theme="inverse">dark</CBadge>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
</script>
```

## Pill badges

Apply the `shape="rounded-pill"` prop to make badges rounded.

```html
<template>
  <CBadge theme="primary" shape="rounded-pill">primary</CBadge>
  <CBadge theme="secondary" shape="rounded-pill">secondary</CBadge>
  <CBadge theme="success" shape="rounded-pill">success</CBadge>
  <CBadge theme="danger" shape="rounded-pill">danger</CBadge>
  <CBadge theme="warning" shape="rounded-pill">warning</CBadge>
  <CBadge theme="info" shape="rounded-pill">info</CBadge>
  <CBadge theme="secondary" shape="rounded-pill">light</CBadge>
  <CBadge theme="inverse" shape="rounded-pill">dark</CBadge>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
</script>
```

## API reference

Refer to the API documentation below for all supported props of the Vue Bootstrap Badge component:

- [&lt;CBadge /&gt;](../api/#cbadge)
