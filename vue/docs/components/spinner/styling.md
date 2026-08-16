# Vue Spinner Component Styling

> Learn how to customize the Vue Spinner component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue spinners use local CSS variables on `.spinner-border` and `.spinner-grow` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

Border spinner variables:

```scss
--cui-spinner-width: #{$spinner-width};
--cui-spinner-height: #{$spinner-height};
--cui-spinner-vertical-align: #{$spinner-vertical-align};
--cui-spinner-border-width: #{$spinner-border-width};
--cui-spinner-animation-speed: #{$spinner-animation-speed};
--cui-spinner-animation-name: spinner-border;
```

Growing spinner variables:

```scss
--cui-spinner-width: #{$spinner-width};
--cui-spinner-height: #{$spinner-height};
--cui-spinner-vertical-align: #{$spinner-vertical-align};
--cui-spinner-animation-speed: #{$spinner-animation-speed};
--cui-spinner-animation-name: spinner-grow;
```

For both spinners, small spinner modifier classes are used to update the values of these CSS variables as needed. For example, the `.spinner-border-sm` class does the following:

```scss
--cui-spinner-width: #{$spinner-width-sm};
--cui-spinner-height: #{$spinner-height-sm};
--cui-spinner-border-width: #{$spinner-border-width-sm};
```

#### How to use CSS variables

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

### SASS variables

```scss
$spinner-width:           2rem !default;
$spinner-height:          $spinner-width !default;
$spinner-vertical-align:  -.125em !default;
$spinner-border-width:    .25em !default;
$spinner-animation-speed: .75s !default;

$spinner-width-sm:        1rem !default;
$spinner-height-sm:       $spinner-width-sm !default;
$spinner-border-width-sm: .2em !default;
```
