# Vue Card Component Styling

> Learn how to customize the Vue Card component with CSS variables and Sass for flexible styling and seamless integration into your design.

## Customizing

## CSS variables

Vue cards use local CSS variables on `.card` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$card-tokens: defaults(
  (
    --cui-card-spacer-y: var(--cui-spacer-6),
    --cui-card-spacer-x: var(--cui-spacer-6),
    --cui-card-body-gap: calc(var(--cui-card-spacer-y) * .5),
    --cui-card-title-color: inherit,
    --cui-card-subtitle-color: inherit,
    --cui-card-border-width: var(--cui-border-width),
    --cui-card-border-color: var(--cui-border-color),
    --cui-card-border-radius: var(--cui-radius-7),
    --cui-card-box-shadow: none,
    --cui-card-inner-border-radius: calc(var(--cui-card-border-radius) - var(--cui-card-border-width)),
    --cui-card-cap-padding-y: var(--cui-spacer-3),
    --cui-card-cap-padding-x: var(--cui-card-spacer-x),
    --cui-card-cap-bg: var(--cui-bg-1),
    --cui-card-cap-color: inherit,
    --cui-card-height: auto,
    --cui-card-color: inherit,
    --cui-card-bg: var(--cui-bg-body),
    --cui-card-img-overlay-padding-y: var(--cui-card-spacer-y),
    --cui-card-img-overlay-padding-x: var(--cui-card-spacer-x),
    --cui-card-group-margin: #{$grid-gutter-x * .5},
  ),
  $card-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CCard :style="vars">...</CCard>
</template>

<script setup>
const vars = {
  '--cui-card-title-color': '#333',
  '--cui-card-cap-bg': '#f8f9fa',
}
</script>
```
