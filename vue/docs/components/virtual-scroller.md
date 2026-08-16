# Vue Virtual Scroller Component

> A virtual scroller is a UI element that allows users to scroll through a list of items without requiring the entire list to be loaded into memory at once. This can be particularly useful for lists that are very large or that contain a lot of data, as it allows the user to view and interact with a subset of the list while the rest of the data is loaded in the background.

Virtual scrollers work by only rendering the items that are currently visible on the screen, and as the user scrolls through the list, new items are dynamically loaded and added to the view. This helps to reduce the amount of data that needs to be loaded and processed at any given time, which can improve the performance and responsiveness of the UI.

## Virtual scroll (10000 Items)

```html
<template>
  <CVirtualScroller class="border" :visible-items="20">
    <div v-for="item in 10000" :key="item">Option {{ item }}</div>
  </CVirtualScroller>
</template>

<script setup>
import { CVirtualScroller } from '@coreui/vue-pro'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CVirtualScroller /&gt;](./api/#cvirtualscroller)
