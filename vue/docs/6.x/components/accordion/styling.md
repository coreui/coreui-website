# Vue Accordion Component Styling

> Learn how to customize the Vue Accordion component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue accordions use local CSS variables on `.accordion` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$accordion-tokens: defaults(
  (
    --cui-accordion-padding-x: 1.25rem,
    --cui-accordion-padding-y: 1rem,
    --cui-accordion-header-padding-x: var(--cui-accordion-padding-x),
    --cui-accordion-header-padding-y: var(--cui-accordion-padding-y),
    --cui-accordion-body-padding-x: var(--cui-accordion-padding-x),
    --cui-accordion-body-padding-y: var(--cui-accordion-padding-y),
    --cui-accordion-font-size: var(--cui-body-font-size),
    --cui-accordion-color: var(--cui-fg-body),
    --cui-accordion-bg: var(--cui-bg-body),
    --cui-accordion-transition-property: #{var(--cui-btn-input-action-transition-property), border-radius},
    --cui-accordion-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-accordion-transition-timing: var(--cui-btn-input-transition-timing),
    --cui-accordion-border-color: var(--cui-border-color),
    --cui-accordion-border-width: var(--cui-border-width),
    --cui-accordion-border-radius: var(--cui-radius-7),
    --cui-accordion-gap: var(--cui-spacer-3),
    --cui-accordion-header-color: var(--cui-fg-2),
    --cui-accordion-header-bg: var(--cui-accordion-bg),
    --cui-accordion-header-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round'><path d='m2 5 6 6 6-6'/></svg>"))},
    --cui-accordion-header-active-icon: #{escape-svg(var(--cui-accordion-header-icon))},
    --cui-accordion-header-icon-width: 1.25rem,
    --cui-accordion-header-icon-color: currentcolor,
    --cui-accordion-header-active-icon-color: currentcolor,
    --cui-accordion-header-icon-transform: rotate(-180deg),
    --cui-accordion-header-icon-transition: transform .2s ease-in-out,
    --cui-accordion-active-color: var(--cui-fg-body),
    --cui-accordion-active-bg: var(--cui-bg-2),
    --cui-accordion-active-border-color: var(--cui-border-color),
    --cui-accordion-content-duration: .35s,
    --cui-accordion-content-easing: ease,
  ),
  $accordion-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CAccordion :style="vars">...</CAccordion>
</template>

<script setup>
const vars = {
  '--cui-accordion-color': '#333',
  '--cui-accordion-bg': '#f8f9fa',
}
</script>
```
