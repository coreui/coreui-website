# Vue Range Slider Component Styling

> Learn how to customize the Vue Range Slider component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

The slider renders a [range](https://coreui.io/vue/docs/forms/range/styling/), so it reads the range's tokens, declared on the `.form-range` that `class` and `style` land on: one setting styles both controls. `--cui-range-track-fill-bg` colours the band between the handles and `--cui-range-tick-*` the tick marks and their labels.

```scss
$form-range-tokens: defaults(
  (
    --cui-range-track-width: 100%,
    --cui-range-track-height: .5rem,
    --cui-range-track-cursor: pointer,
    --cui-range-track-bg: color-mix(in oklch, var(--cui-bg-2), var(--cui-bg-3)),
    --cui-range-track-border-radius: 1rem,
    --cui-range-track-box-shadow: var(--cui-box-shadow-inset),
    --cui-range-track-fill-bg: var(--cui-primary-base),
    --cui-range-track-disabled-bg: color-mix(in oklch, var(--cui-bg-4), var(--cui-fg-3)),
    --cui-range-thumb-width: 1rem,
    --cui-range-thumb-height: var(--cui-range-thumb-width),
    --cui-range-thumb-bg: var(--cui-primary-bg),
    --cui-range-thumb-border: 0,
    --cui-range-thumb-border-radius: 1rem,
    --cui-range-thumb-box-shadow: 0 .1rem .25rem color-mix(in oklch, var(--cui-black) 10%, transparent),
    --cui-range-thumb-active-bg: var(--cui-primary-bg-muted),
    --cui-range-thumb-disabled-bg: var(--cui-fg-3),
    --cui-range-thumb-transition-property: #{"background-color, border-color, box-shadow"},
    --cui-range-thumb-transition-duration: .15s,
    --cui-range-thumb-transition-timing: ease-in-out,
    --cui-range-thumb-focus-ring-width: var(--cui-focus-ring-width),
    --cui-range-tick-width: var(--cui-border-width),
    --cui-range-tick-height: .5rem,
    --cui-range-tick-minor-height: calc(var(--cui-range-tick-height) * .75),
    --cui-range-tick-bg: var(--cui-bg-4),
    --cui-range-tick-label-margin-top: .125rem,
    --cui-range-tick-label-font-size: var(--cui-font-size-sm),
    --cui-range-tick-label-color: var(--cui-fg-2),
  ),
  $form-range-tokens
);
```

A vertical slider's height:

```scss
$form-range-vertical-tokens: defaults(
  (
    --cui-range-vertical-height: 10rem,
  ),
  $form-range-vertical-tokens
);
```

`--cui-range-fill-start` and `--cui-range-fill` are not tokens: the component writes them from the lowest and the highest handle, and the CSS draws the band between them.

#### How to use CSS variables

```vue
<template>
  <CRangeSlider :style="vars">...</CRangeSlider>
</template>

<script setup>
const vars = {
  '--cui-range-tick-label-color': '#333',
  '--cui-range-track-bg': '#f8f9fa',
}
</script>
```
