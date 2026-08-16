# Vue Bootstrap Breadcrumb Component

> Learn how to use CoreUI’s Vue Breadcrumb component with Bootstrap styles for flexible, framework-consistent UI.

## Example

The breadcrumb navigation provides links back to each previous page the user navigated through and shows the current location in a website or an application. You don’t have to add separators, because they automatically added in CSS through ::before and content.

```html
<template>
  <CBreadcrumb>
    <CBreadcrumbItem active>Home</CBreadcrumbItem>
  </CBreadcrumb>
  <CBreadcrumb>
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
  <CBreadcrumb>
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem href="#">Library</CBreadcrumbItem>
    <CBreadcrumbItem active>Data</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'
</script>
```

## Dividers

Dividers are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by modifying a local CSS custom property `--cui-breadcrumb-divider`, or through the `$breadcrumb-divider` Sass variable — and `$breadcrumb-divider-flipped` for its RTL counterpart, if needed. We default to our Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time.

```html
<template>
  <CBreadcrumb style="--cui-breadcrumb-divider: '>'">
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'
</script>
```

When modifying via Sass, the [quote](https://sass-lang.com/documentation/modules/string#quote) function is required to generate the quotes around a string. For example, using `>` as the divider, you can use this:

```scss
$breadcrumb-divider: quote(">");
```

It's also possible to use an **embedded SVG icon**. Apply it via our CSS custom property, or use the Sass variable.

```html
<template>
  <CBreadcrumb :style="dividerStyle">
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'

const dividerStyle = {
  '--cui-breadcrumb-divider': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
}
</script>
```

```scss
$breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E");
```

You can also remove the divider setting `--cui-breadcrumb-divider: '';` (empty strings in CSS custom properties counts as a value), or setting the Sass variable to `$breadcrumb-divider: none;`.

```html
<template>
  <CBreadcrumb style="--cui-breadcrumb-divider: ''">
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'
</script>
```

```scss
$breadcrumb-divider: none;
```
