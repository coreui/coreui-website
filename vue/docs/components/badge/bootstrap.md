# Vue Bootstrap Badge Component

> Learn how to use CoreUI’s Vue Badge component with Bootstrap styles for flexible, framework-consistent UI.

## Example

Badge component scales to suit the size of the parent element by using relative font sizing and `em` units.

### Basic usage

```html
<template>
  <h1>Example heading <CBadge color="secondary">New</CBadge></h1>
  <h2>Example heading <CBadge color="secondary">New</CBadge></h2>
  <h3>Example heading <CBadge color="secondary">New</CBadge></h3>
  <h4>Example heading <CBadge color="secondary">New</CBadge></h4>
  <h5>Example heading <CBadge color="secondary">New</CBadge></h5>
  <h6>Example heading <CBadge color="secondary">New</CBadge></h6>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
</script>
```

Badges can be used as part of links or buttons to provide a counter.

```html
<template>
  <CButton color="primary"> Notifications <CBadge color="secondary">4</CBadge> </CButton>
</template>

<script setup>
import { CButton, CBadge } from '@coreui/vue'
</script>
```

Remark that depending on how you use them, badges may be complicated for users of screen readers and related assistive technologies.

Unless the context is clear, consider including additional context with a visually hidden piece of additional text.

```html
<template>
  <CButton color="primary">
    Profile <CBadge color="secondary">9</CBadge>
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
  <CButton color="primary" class="position-relative">
    Profile
    <CBadge color="danger" position="top-start" shape="rounded-pill">
      99+ <span class="visually-hidden">unread messages</span>
    </CBadge>
  </CButton>
  <CButton color="primary" class="position-relative ms-1">
    Profile
    <CBadge color="danger" position="top-end" shape="rounded-pill">
      99+ <span class="visually-hidden">unread messages</span>
    </CBadge>
  </CButton>
  <br />
  <CButton color="primary" class="position-relative">
    Profile
    <CBadge color="danger" position="bottom-start" shape="rounded-pill">
      99+ <span class="visually-hidden">unread messages</span>
    </CBadge>
  </CButton>
  <CButton color="primary" class="position-relative ms-1">
    Profile
    <CBadge color="danger" position="bottom-end" shape="rounded-pill">
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
  <CButton color="primary" class="position-relative">
    Profile
    <CBadge
      class="border border-light p-2"
      color="danger"
      position="top-end"
      shape="rounded-circle"
    >
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
  <CBadge color="primary">primary</CBadge>
  <CBadge color="success">success</CBadge>
  <CBadge color="danger">danger</CBadge>
  <CBadge color="warning">warning</CBadge>
  <CBadge color="info">info</CBadge>
  <CBadge text-bg-color="light">light</CBadge>
  <CBadge color="dark">dark</CBadge>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
</script>
```

You can also apply contextual variations with the `textBgColor` property, which automatically sets the text color to ensure compliance with the WCAG 4.5:1 contrast ratio standard for enhanced accessibility.

```html
<template>
  <CBadge text-bg-color="primary">primary</CBadge>
  <CBadge text-bg-color="success">success</CBadge>
  <CBadge text-bg-color="danger">danger</CBadge>
  <CBadge text-bg-color="warning">warning</CBadge>
  <CBadge text-bg-color="info">info</CBadge>
  <CBadge text-bg-color="light">light</CBadge>
  <CBadge text-bg-color="dark">dark</CBadge>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
</script>
```

## Pill badges

Apply the `shape="rounded-pill"` prop to make badges rounded.

```html
<template>
  <CBadge color="primary" shape="rounded-pill">primary</CBadge>
  <CBadge color="success" shape="rounded-pill">success</CBadge>
  <CBadge color="danger" shape="rounded-pill">danger</CBadge>
  <CBadge color="warning" shape="rounded-pill">warning</CBadge>
  <CBadge color="info" shape="rounded-pill">info</CBadge>
  <CBadge text-bg-color="light" shape="rounded-pill">light</CBadge>
  <CBadge color="dark" shape="rounded-pill">dark</CBadge>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
</script>
```
