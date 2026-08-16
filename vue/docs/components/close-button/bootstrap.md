# Vue Bootstrap Close Button Component

> Learn how to use CoreUI’s Vue Close Button component with Bootstrap styles for flexible, framework-consistent UI.

## Example

Provide an option to dismiss or close a component with `<CCloseButton>`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default `background-image`.

```html
<template>
  <CCloseButton />
</template>

<script setup>
import { CCloseButton } from '@coreui/vue'
</script>
```

## Disabled state

Disabled close buttons change their `opacity`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

```html
<template>
  <CCloseButton disabled />
</template>

<script setup>
import { CCloseButton } from '@coreui/vue'
</script>
```

## Dark variant

Add `dark` boolean property to the `<CCloseButton>`, to invert the close button. This uses the filter property to invert the background-image without overriding its value.

```html
<template>
  <CCloseButton dark />
  <CCloseButton dark disabled />
</template>

<script setup>
import { CCloseButton } from '@coreui/vue'
</script>
```
