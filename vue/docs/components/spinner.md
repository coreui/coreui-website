# Vue Spinner Component

> Indicate the loading state of a component or page with CoreUI spinners, built entirely with HTML, CSS, and no JavaScript.

## About

CoreUI "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`.

## Border spinner

Use the border spinners for a lightweight loading indicator.

## Basic usage

```html
<template>
  <CSpinner />
</template>

<script setup>
import { CSpinner } from '@coreui/vue'
</script>
```

### Colors

The border spinner uses `currentColor` for its `border-color`. You can use any of our text color utilities on the standard spinner.

```html
<template>
  <CSpinner color="primary" />
  <CSpinner color="secondary" />
  <CSpinner color="success" />
  <CSpinner color="danger" />
  <CSpinner color="warning" />
  <CSpinner color="info" />
  <CSpinner color="light" />
  <CSpinner color="dark" />
</template>

<script setup>
import { CSpinner } from '@coreui/vue'
</script>
```

## Growing spinner

If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!

```html
<template>
  <CSpinner variant="grow" />
</template>

<script setup>
import { CSpinner } from '@coreui/vue'
</script>
```

Once again, this spinner is built with `currentColor`, so you can easily change its appearance. Here it is in blue, along with the supported variants.

```html
<template>
  <CSpinner color="primary" variant="grow" />
  <CSpinner color="secondary" variant="grow" />
  <CSpinner color="success" variant="grow" />
  <CSpinner color="danger" variant="grow" />
  <CSpinner color="warning" variant="grow" />
  <CSpinner color="info" variant="grow" />
  <CSpinner color="light" variant="grow" />
  <CSpinner color="dark" variant="grow" />
</template>

<script setup>
import { CSpinner } from '@coreui/vue'
</script>
```

## Size

Add `size="sm"`property` to make a smaller spinner that can quickly be used within other components.

```html
<template>
  <CSpinner size="sm" />
  <CSpinner size="sm" variant="grow" />
</template>

<script setup>
import { CSpinner } from '@coreui/vue'
</script>
```

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

```html
<template>
  <CButton color="primary" disabled>
    <CSpinner as="span" size="sm" aria-hidden="true" />
  </CButton>
  <CButton color="primary" disabled>
    <CSpinner as="span" size="sm" aria-hidden="true" />
    Loading...
  </CButton>
</template>

<script setup>
import { CButton, CSpinner } from '@coreui/vue'
</script>
```

```html
<template>
  <CButton color="primary" disabled>
    <CSpinner as="span" size="sm" variant="grow" aria-hidden="true" />
  </CButton>
  <CButton color="primary" disabled>
    <CSpinner as="span" size="sm" variant="grow" aria-hidden="true" />
    Loading...
  </CButton>
</template>

<script setup>
import { CButton, CSpinner } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSpinner /&gt;](./api/#cspinner)
