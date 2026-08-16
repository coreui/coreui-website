# Vue Bootstrap Range Component

> Learn how to use CoreUI’s Vue Range component with Bootstrap styles for flexible, framework-consistent UI.

## Overview

Create custom `<input type="range">` controls with `<CFormRange>`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Edge Legacy and Firefox supports "filling" their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.

```html
<template>
  <CFormRange id="customRange1" label="Example range" />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
<template>
  <CFormRange id="disabledRange" disabled label="Disabled range" />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```

## Min and max

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

```html
<template>
  <CFormRange id="customRange2" label="Example range" :min="0" :max="5" :value="3" />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```

## Steps

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `:step="0.5"`.

```html
<template>
  <CFormRange id="customRange3" label="Example range" :min="0" :max="5" :step="0.5" :value="3" />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```
