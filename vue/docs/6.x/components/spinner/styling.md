# Vue Spinner Component Styling

> Learn how to customize the Vue Spinner component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue spinners use local CSS variables on `.spinner-border` and `.spinner-grow` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

Border spinner variables:

```scss
$spinner-border-tokens: defaults(
  (
    --cui-spinner-width: 1em,
    --cui-spinner-height: 1em,
    --cui-spinner-border-width: .125em,
    --cui-spinner-animation-speed: #{$spinner-animation-speed},
    --cui-spinner-animation-timing-function: #{$spinner-animation-timing-function},
    --cui-spinner-animation-name: spinner-border,
  ),
  $spinner-border-tokens
);
```

Growing spinner variables:

```scss
$spinner-grow-tokens: defaults(
  (
    --cui-spinner-width: 1em,
    --cui-spinner-height: 1em,
    --cui-spinner-animation-speed: #{$spinner-animation-speed},
    --cui-spinner-animation-timing-function: ease-in-out,
    --cui-spinner-animation-name: spinner-grow,
  ),
  $spinner-grow-tokens
);
```

For both spinners, small spinner modifier classes are used to update the values of these CSS variables as needed. For example, the `.spinner-border-sm` class does the following:

```scss
--cui-spinner-width: #{.75em};
--cui-spinner-height: #{.75em};
```

### How to use CSS variables

```vue
<template>
  <CSpinner :style="vars">...</CSpinner>
</template>

<script setup>
const vars = {
  '--cui-spinner-width': '1rem',
  '--cui-spinner-height': '1rem',
}
</script>
```
