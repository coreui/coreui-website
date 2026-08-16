# Vue Callout Component

> Vue callout component provides presentation of content in a visually distinct manner. Includes a heading, icon and typically text-based content.

## Examples

Callout component is prepared for any length of text, as well as an optional elements like icons, headings, etc. For a styling, use one of the **required** contextual props (e.g., `color="success"`).

```html
<template>
  <CCallout color="primary">
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
    terminology, guidelines, and code snippets.
  </CCallout>
  <CCallout color="secondary">
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
    terminology, guidelines, and code snippets.
  </CCallout>
  <CCallout color="success">
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
    terminology, guidelines, and code snippets.
  </CCallout>
  <CCallout color="danger">
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
    terminology, guidelines, and code snippets.
  </CCallout>
  <CCallout color="warning">
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
    terminology, guidelines, and code snippets.
  </CCallout>
  <CCallout color="info">
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
    terminology, guidelines, and code snippets.
  </CCallout>
  <CCallout color="light">
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
    terminology, guidelines, and code snippets.
  </CCallout>
  <CCallout color="dark">
    New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
    terminology, guidelines, and code snippets.
  </CCallout>
</template>

<script setup>
import { CCallout } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCallout /&gt;](./api/#ccallout)
