# Vue Badge Component

> Vue badge component is small count and labeling component.

## Examples

Vue badge component scales to suit the size of the parent element by using relative font sizing and `em` units.

Badges come in three variants: solid (default), `variant="subtle"` and `variant="outline"`. A badge without a `theme` stays neutral.

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

### Headings

Badges adapt to the `font-size` of the parent element, down to a floor that keeps them legible.

```html
<template>
  <h1>Example heading <CBadge>New</CBadge></h1>
  <h2>Example heading <CBadge>New</CBadge></h2>
  <h3>Example heading <CBadge>New</CBadge></h3>
  <h4>Example heading <CBadge>New</CBadge></h4>
  <h5>Example heading <CBadge>New</CBadge></h5>
  <h6>Example heading <CBadge>New</CBadge></h6>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
</script>
```

### Buttons

Vue badges can be used as part of links or buttons to provide a counter.

```html
<template>
  <CButton theme="primary"> Notifications <CBadge theme="danger">4</CBadge> </CButton>
</template>

<script setup>
import { CButton, CBadge } from '@coreui/vue'
</script>
```

Remark that depending on how you use them, Vue badges may be complicated for users of screen readers and related assistive technologies. The styling gives sighted users a visual cue about the badge's purpose, but a screen reader announces only its content — so a badge can read as a stray word or number at the end of a sentence, link, or button.

Unless the context is clear — as in the Notifications example above, where the `4` is plainly a count — consider including additional context with a visually hidden piece of additional text.

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

### Sizes

Use the `size` prop to change the padding and the minimum height.

```html
<template>
  <CBadge theme="primary" size="sm">Small</CBadge>
  <CBadge theme="primary">Default</CBadge>
  <CBadge theme="primary" size="lg">Large</CBadge>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
</script>
```

## Variants

Use the `theme` prop to apply a semantic theme color to badges. Combine it with `variant` for the subtle and outline treatments.

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

```html
<template>
  <CBadge theme="primary" variant="subtle">primary</CBadge>
  <CBadge theme="secondary" variant="subtle">secondary</CBadge>
  <CBadge theme="success" variant="subtle">success</CBadge>
  <CBadge theme="danger" variant="subtle">danger</CBadge>
  <CBadge theme="warning" variant="subtle">warning</CBadge>
  <CBadge theme="info" variant="subtle">info</CBadge>
  <CBadge theme="secondary" variant="subtle">light</CBadge>
  <CBadge theme="inverse" variant="subtle">dark</CBadge>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
</script>
```

```html
<template>
  <CBadge theme="primary" variant="outline">primary</CBadge>
  <CBadge theme="secondary" variant="outline">secondary</CBadge>
  <CBadge theme="success" variant="outline">success</CBadge>
  <CBadge theme="danger" variant="outline">danger</CBadge>
  <CBadge theme="warning" variant="outline">warning</CBadge>
  <CBadge theme="info" variant="outline">info</CBadge>
  <CBadge theme="secondary" variant="outline">light</CBadge>
  <CBadge theme="inverse" variant="outline">dark</CBadge>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
</script>
```

> ##### Conveying meaning to assistive technologies
> 
> Relying on color to convey meaning creates a visual cue that assistive technologies, like screen readers, cannot perceive. It's essential that any information represented by color is either apparent from the content itself (e.g., the visible text) or supplemented by alternative methods, such as extra text using the `.visually-hidden` class.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CBadge /&gt;](./api/#cbadge)
