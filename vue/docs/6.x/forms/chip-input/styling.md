# Vue Chip Input Component Styling

> Learn how to customize the Vue Chip Input component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

A chip input is a [`.form-control-group`](https://coreui.io/vue/docs/forms/form-control-group/styling/#css-variables), so it reads the group's `--cui-control-*` tokens; `.chip-input` only re-points the ones it sets differently — padding, border colour and radius, and the gap between chips. `class` and `style` on `<CChipInput>` land on that element, so override any group token there to restyle a single chip input.

```scss
$chip-input-tokens: () !default;
$chip-input-tokens: defaults(
  (
    --cui-control-padding-y: .25rem,
    --cui-control-padding-x: .75rem,
    --cui-control-border-color: var(--cui-border-color),
    --cui-control-border-radius: var(--cui-radius-4),
    --cui-control-group-gap: .375rem,
  ),
  $chip-input-tokens
);
```

#### How to use CSS variables

```vue
<template>
  <CChipInput :style="vars">...</CChipInput>
</template>

<script setup>
const vars = {
  '--cui-control-bg': '#f8f9fa',
  '--cui-control-group-gap': '.5rem',
}
</script>
```
