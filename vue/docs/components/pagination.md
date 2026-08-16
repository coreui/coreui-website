# Vue Pagination Component

> Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.

## Overview

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

```html
<template>
  <CPagination aria-label="Page navigation example">
    <CPaginationItem href="#">Previous</CPaginationItem>
    <CPaginationItem href="#">1</CPaginationItem>
    <CPaginationItem href="#">2</CPaginationItem>
    <CPaginationItem href="#">3</CPaginationItem>
    <CPaginationItem href="#">Next</CPaginationItem>
  </CPagination>
</template>

<script setup>
import { CPagination, CPaginationItem } from '@coreui/vue'
</script>
```

## Working with icons

Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes.

```html
<template>
  <CPagination aria-label="Page navigation example">
    <CPaginationItem aria-label="Previous" href="#"
      ><span aria-hidden="true">&laquo;</span></CPaginationItem
    >
    <CPaginationItem href="#">1</CPaginationItem>
    <CPaginationItem href="#">2</CPaginationItem>
    <CPaginationItem href="#">3</CPaginationItem>
    <CPaginationItem aria-label="Next" href="#"
      ><span aria-hidden="true">&raquo;</span></CPaginationItem
    >
  </CPagination>
</template>

<script setup>
import { CPagination, CPaginationItem } from '@coreui/vue'
</script>
```

## Disabled and active states

Pagination links are customizable for different circumstances. Use `disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `disabled` prop uses `pointer-events: none` to _try_ to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, we always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

```html
<template>
  <CPagination aria-label="Page navigation example">
    <CPaginationItem aria-label="Previous" href="#" disabled
      ><span aria-hidden="true">&laquo;</span></CPaginationItem
    >
    <CPaginationItem href="#" active>1</CPaginationItem>
    <CPaginationItem href="#">2</CPaginationItem>
    <CPaginationItem href="#">3</CPaginationItem>
    <CPaginationItem aria-label="Next" href="#"
      ><span aria-hidden="true">&raquo;</span></CPaginationItem
    >
  </CPagination>
</template>

<script setup>
import { CPagination, CPaginationItem } from '@coreui/vue'
</script>
```

## Sizing

Fancy larger or smaller pagination? Add `size="lg"` or `size="sm"` for additional sizes.

```html
<template>
  <CPagination size="lg" aria-label="Page navigation example">
    <CPaginationItem href="#">Previous</CPaginationItem>
    <CPaginationItem href="#">1</CPaginationItem>
    <CPaginationItem href="#">2</CPaginationItem>
    <CPaginationItem href="#">3</CPaginationItem>
    <CPaginationItem href="#">Next</CPaginationItem>
  </CPagination>
</template>

<script setup>
import { CPagination, CPaginationItem } from '@coreui/vue'
</script>
```

```html
<template>
  <CPagination size="sm" aria-label="Page navigation example">
    <CPaginationItem href="#">Previous</CPaginationItem>
    <CPaginationItem href="#">1</CPaginationItem>
    <CPaginationItem href="#">2</CPaginationItem>
    <CPaginationItem href="#">3</CPaginationItem>
    <CPaginationItem href="#">Next</CPaginationItem>
  </CPagination>
</template>

<script setup>
import { CPagination, CPaginationItem } from '@coreui/vue'
</script>
```

## Alignment

Change the alignment of pagination components with `align` property.

```html
<template>
  <CPagination align="center" aria-label="Page navigation example">
    <CPaginationItem disabled>Previous</CPaginationItem>
    <CPaginationItem href="#">1</CPaginationItem>
    <CPaginationItem href="#">2</CPaginationItem>
    <CPaginationItem href="#">3</CPaginationItem>
    <CPaginationItem href="#">Next</CPaginationItem>
  </CPagination>
</template>

<script setup>
import { CPagination, CPaginationItem } from '@coreui/vue'
</script>
```

```html
<template>
  <CPagination align="end" aria-label="Page navigation example">
    <CPaginationItem disabled>Previous</CPaginationItem>
    <CPaginationItem href="#">1</CPaginationItem>
    <CPaginationItem href="#">2</CPaginationItem>
    <CPaginationItem href="#">3</CPaginationItem>
    <CPaginationItem href="#">Next</CPaginationItem>
  </CPagination>
</template>

<script setup>
import { CPagination, CPaginationItem } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CPagination /&gt;](./api/#coffcanvas)
- [&lt;CPaginationItem /&gt;](./api/#coffcanvasbody)
