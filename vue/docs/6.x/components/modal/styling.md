# Vue Modal Component Styling

> Learn how to customize the Vue Modal component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue Modal supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$modal-tokens: defaults(
  (
    --cui-modal-zindex: var(--cui-z-modal),
    --cui-modal-width: 500px,
    --cui-modal-padding-y: var(--cui-spacer),
    --cui-modal-padding-x: var(--cui-spacer),
    --cui-modal-margin: .5rem,
    --cui-modal-color: var(--cui-fg-body),
    --cui-modal-bg: var(--cui-bg-body),
    --cui-modal-border-color: var(--cui-border-color-translucent),
    --cui-modal-border-width: var(--cui-border-width),
    --cui-modal-border-radius: var(--cui-radius-5),
    --cui-modal-box-shadow: var(--cui-box-shadow-sm),
    --cui-modal-inner-border-radius: calc(var(--cui-modal-border-radius) - var(--cui-modal-border-width)),
    --cui-modal-transition-duration: .3s,
    --cui-modal-transition-timing: ease-out,
    --cui-modal-backdrop-bg: var(--cui-black),
    --cui-modal-backdrop-opacity: .5,
    --cui-modal-header-padding-y: var(--cui-modal-padding-y),
    --cui-modal-header-padding-x: var(--cui-modal-padding-x),
    --cui-modal-header-border-color: var(--cui-border-color),
    --cui-modal-header-border-width: var(--cui-border-width),
    --cui-modal-title-line-height: var(--cui-body-line-height),
    --cui-modal-footer-padding-y: var(--cui-modal-padding-y),
    --cui-modal-footer-padding-x: var(--cui-modal-padding-x),
    --cui-modal-footer-gap: .5rem,
    --cui-modal-footer-bg: transparent,
    --cui-modal-footer-border-color: var(--cui-border-color),
    --cui-modal-footer-border-width: var(--cui-border-width),
    --cui-modal-fade-transform: translate(0, -50px),
    --cui-modal-scale-transform: scale(1.02),
  ),
  $modal-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CModal :style="customVars">...</CModal>
</template>

<script setup>
const customVars = {
  '--cui-modal-color': '#555',
  '--cui-modal-bg': '#efefef',
}
</script>
```

## Sass maps

Each entry is one `.modal-{size}` class and the width it sets, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$modal-sizes: defaults(
  (
    sm: 300px,
    lg: 800px,
    xl: 1140px,
  ),
  $modal-sizes
);
```

## Sass loops

Responsive fullscreen modals are generated via the `$breakpoints` map.

```scss
@each $breakpoint in map.keys($breakpoints) {
  $infix: breakpoint-infix($breakpoint, $breakpoints);
  // stylelint-disable-next-line scss/at-function-named-arguments
  $postfix: if(sass($infix != ""): $infix + "-down"; else: "");

  @include media-breakpoint-down($breakpoint) {
    .modal-fullscreen#{$postfix} {
      --cui-modal-width: 100vw;
      --cui-modal-margin: 0;
      --cui-modal-border-radius: 0;
      --cui-modal-border-width: 0;

      width: 100%;
      max-width: none;
      height: 100%;
      max-height: none;

      .modal-header,
      .modal-footer {
        @include border-radius(0);
      }

      .modal-body {
        overflow-y: auto;
      }
    }
  }
}
```
