# Containers

> Containers are a fundamental building block of CoreUI for Vue.js that contain, pad, and align your content within a given device or viewport.

## How they work

Containers are the most basic layout element in CoreUI for Vue.js and are **required when using our default grid system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers *can* be nested, most layouts do not require a nested container.

CoreUI for Vue.js comes with three different containers:

- `<CContainer>`, which sets a `max-width` at each responsive breakpoint
- `<CContainer fluid>`, which is `width: 100%` at all breakpoints
- `<CContainer {sm|md|lg|xl|2xl}>`, which is `width: 100%` until the specified breakpoint

The table below illustrates how each container's `max-width` compares to the original `<CContainer>` and `<CContainer fluid>` across each breakpoint.

<table class="table">
  <thead>
    <tr>
      <td class="border-dark"></td>
      <th scope="col">
        Extra small<br/>
        <span class="fw-normal">&lt;576px</span>
      </th>
      <th scope="col">
        Small<br/>
        <span class="fw-normal">&ge;576px</span>
      </th>
      <th scope="col">
        Medium<br/>
        <span class="fw-normal">&ge;768px</span>
      </th>
      <th scope="col">
        Large<br/>
        <span class="fw-normal">&ge;1024px</span>
      </th>
      <th scope="col">
        X-Large<br/>
        <span class="fw-normal">&ge;1280px</span>
      </th>
      <th scope="col">
        XX-Large<br/>
        <span class="fw-normal">&ge;1536px</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="fw-normal"><code>&lt;CContainer&gt;</code></th>
      <td class="fg-2">100%</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1200px</td>
      <td>1440px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>&lt;CContainer sm&gt;</code></th>
      <td class="fg-2">100%</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1200px</td>
      <td>1440px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>&lt;CContainer md&gt;</code></th>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td>720px</td>
      <td>960px</td>
      <td>1200px</td>
      <td>1440px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>&lt;CContainer lg&gt;</code></th>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td>960px</td>
      <td>1200px</td>
      <td>1440px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>&lt;CContainer xl&gt;</code></th>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td>1200px</td>
      <td>1440px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>&lt;CContainer 2xl&gt;</code></th>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td>1440px</td>
    </tr>
    <tr>
      <th scope="row" class="fw-normal"><code>&lt;CContainer fluid&gt;</code></th>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
      <td class="fg-2">100%</td>
    </tr>
  </tbody>
</table>

## Default container

Our default `<CContainer>` class is a responsive, fixed-width container, meaning its `max-width` changes at each breakpoint.

```html
<template>
  <CContainer> Content here </CContainer>
</template>

<script setup>
import { CContainer } from '@coreui/vue'
</script>
```

## Responsive containers

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply `max-width`s for each of the higher breakpoints. For example, `<CContainer sm>` is 100% wide to start until the `sm` breakpoint is reached, where it will scale up with `md`, `lg`, `xl`, and `2xl`.

```html
<template>
  <CContainer sm>100% wide until small breakpoint</CContainer>
  <CContainer md>100% wide until medium breakpoint</CContainer>
  <CContainer lg>100% wide until large breakpoint</CContainer>
  <CContainer xl>100% wide until extra large breakpoint</CContainer>
  <CContainer 2xl>100% wide until extra extra large breakpoint</CContainer>
</template>

<script setup>
import { CContainer } from '@coreui/vue'
</script>
```

## Fluid containers

Use `<CContainer fluid>` for a full width container, spanning the entire width of the viewport.

```html
<template>
  <CContainer fluid> Content here </CContainer>
</template>

<script setup>
import { CContainer } from '@coreui/vue'
</script>
```

## Customizing

### Sass maps

As shown above, CoreUI generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifying the Sass map (found in `_config.scss`) that powers them:

```scss
$container-max-widths: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$container-max-widths: defaults(
  (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1200px,
    2xl: 1440px
  ),
  $container-max-widths
);
```

### Sass mixins

In addition to customizing the Sass, you can also create your own containers with our Sass mixin. The mixin declares the container's own `--cui-gutter-*` properties, so the padding follows a gutter override the same way the built-in containers do:

```scss
@mixin make-container($gutter: $container-padding-x) {
  --cui-gutter-x: #{$gutter};
  --cui-gutter-y: 0;
  width: 100%;
  padding-inline: calc(var(--cui-gutter-x) * .5);
  margin-inline: auto;
}
```

```scss
// Usage
.custom-container {
  @include make-container();
}
```

For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation](../grid/#customizing-the-grid).
