# Vue Smart Pagination Component

> Documentation and examples for showing smart pagination to indicate a series of related content exists across multiple pages.

## Overview

Vue smart pagination component consists of button-like styled links, that are arranged side by side in a horizontal list.

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. SmartPagination is built with list HTML elements so screen readers can announce the number of available links. SmartPagination also use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, SmartPagination provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

```html
<template>
  <CSmartPagination :active-page="6" :pages="10" />
</template>

<script setup>
import { CSmartPagination } from '@coreui/vue-pro'
</script>
```

## Sizing

Fancy larger or smaller pagination? Add `size="lg"` or `size="sm"` for additional sizes.

```html
<template>
  <CSmartPagination :active-page="6" :pages="10" size="lg" />
</template>

<script setup>
import { CSmartPagination } from '@coreui/vue-pro'
</script>
```

```html
<template>
  <CSmartPagination :active-page="6" :pages="10" size="sm" />
</template>

<script setup>
import { CSmartPagination } from '@coreui/vue-pro'
</script>
```

## Alignment

Change the alignment of pagination components with `align="start"`, `align="center"` or `align="end"`.

```html
<template>
  <CSmartPagination :active-page="6" :pages="10" align="center" />
</template>

<script setup>
import { CSmartPagination } from '@coreui/vue-pro'
</script>
```

```html
<template>
  <CSmartPagination :active-page="6" :pages="10" align="end" />
</template>

<script setup>
import { CSmartPagination } from '@coreui/vue-pro'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSmartPagination /&gt;](./api/#csmartpagination)
