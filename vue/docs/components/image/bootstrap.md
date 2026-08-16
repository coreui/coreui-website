# Vue Bootstrap Image Component

> Learn how to use CoreUI’s Vue Image component with Bootstrap styles for flexible, framework-consistent UI.

## Responsive images

Images in CoreUI for Vue.js are made responsive with `fluid` property. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent element.

```html
<template>
  <CImage fluid src="/assets/img/vue.jpg" />
</template>

<script setup>
import { CImage } from '@coreui/vue'
</script>
```

## Image thumbnails

In addition to our [border-radius utilities](https://coreui.io/bootstrap/docs/utilities/borders), you can use prop`thumbnail` to give an image a rounded 1px border appearance.

```html
<template>
  <CImage rounded thumbnail src="/assets/img/vue400.jpg" width="200" height="200" />
</template>

<script setup>
import { CImage } from '@coreui/vue'
</script>
```

## Aligning images

Align images with the `align` property.

```html
<template>
  <div class="clearfix">
    <CImage align="start" rounded src="/assets/img/vue400.jpg" width="200" height="200" />
    <CImage align="end" rounded src="/assets/img/vue400.jpg" width="200" height="200" />
  </div>
</template>

<script setup>
import { CImage } from '@coreui/vue'
</script>
```

```html
<template>
  <div class="clearfix">
    <CImage align="center" rounded src="/assets/img/vue400.jpg" width="200" height="200" />
  </div>
</template>

<script setup>
import { CImage } from '@coreui/vue'
</script>
```

```html
<template>
  <div class="text-center">
    <CImage rounded src="/assets/img/vue400.jpg" width="200" height="200" />
  </div>
</template>

<script setup>
import { CImage } from '@coreui/vue'
</script>
```
