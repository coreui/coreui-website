# Vue Pagination Component Styling

> Learn how to customize the Vue Pagination component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue pagination use local CSS variables on `.pagination` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$pagination-tokens: defaults(
  (
    --cui-pagination-min-height: var(--cui-btn-input-min-height),
    --cui-pagination-padding-x: var(--cui-btn-input-padding-x),
    --cui-pagination-padding-y: var(--cui-btn-input-padding-y),
    --cui-pagination-font-size: var(--cui-btn-input-font-size),
    --cui-pagination-color: var(--cui-link-color),
    --cui-pagination-bg: var(--cui-bg-body),
    --cui-pagination-border-width: var(--cui-border-width),
    --cui-pagination-border-color: var(--cui-border-color),
    --cui-pagination-border-radius: var(--cui-btn-input-border-radius),
    --cui-pagination-transition: #{"color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out"},
    --cui-pagination-hover-color: var(--cui-link-hover-color),
    --cui-pagination-hover-bg: var(--cui-bg-1),
    --cui-pagination-hover-border-color: var(--cui-border-color),
    --cui-pagination-focus-color: var(--cui-link-hover-color),
    --cui-pagination-focus-bg: var(--cui-bg-1),
    --cui-pagination-active-color: var(--cui-primary-contrast),
    --cui-pagination-active-bg: var(--cui-primary-bg),
    --cui-pagination-active-border-color: var(--cui-primary-bg),
    --cui-pagination-disabled-color: var(--cui-fg-3),
    --cui-pagination-disabled-bg: var(--cui-bg-2),
    --cui-pagination-disabled-border-color: var(--cui-border-color),
  ),
  $pagination-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CPagination :style="vars">...</CPagination>
</template>

<script setup>
const vars = {
  '--cui-pagination-color': '#333',
  '--cui-pagination-bg': '#f8f9fa',
}
</script>
```
