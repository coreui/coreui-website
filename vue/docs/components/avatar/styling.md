# Vue Avatar Component Styling

> Learn how to customize the Vue Avatar component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue avatars use local CSS variables on `.avatar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-avatar-width: #{$avatar-width};
--cui-avatar-height: #{$avatar-height};
--cui-avatar-font-size: #{$avatar-font-size};
--cui-avatar-border-radius: #{$avatar-border-radius};
--cui-avatar-status-width: #{$avatar-status-width};
--cui-avatar-status-height: #{$avatar-status-height};
--cui-avatar-status-border-radius: #{$avatar-status-border-radius};
```

#### How to use CSS variables

```vue
<template>
  <CAvatar :style="vars">...</CAvatar>
</template>

<script setup>
const vars = {
  '--cui-avatar-width': '1rem',
  '--cui-avatar-height': '1rem',
}
</script>
```

### SASS variables

```scss
$avatar-width:                 2rem !default;
$avatar-height:                2rem !default;
$avatar-font-size:             .8rem !default;
$avatar-border-radius:         50em !default;
$avatar-status-width:          .5rem !default;
$avatar-status-height:         .5rem !default;
$avatar-status-border-radius:  50em !default;
$avatar-transition:            margin .15s !default;

$avatar-sizes: (
  sm: (
    width: 1.5rem,
    height: 1.5rem,
    font-size: .6rem,
    status-width: .4rem,
    status-height: .4rem
  ),
  md: (
    width: 2.5rem,
    height: 2.5rem,
    font-size: 1rem,
    status-width: .7rem,
    status-height: .7rem
  ),
  lg: (
    width: 3rem,
    height: 3rem,
    font-size: 1.2rem,
    status-width: .8rem,
    status-height: .8rem
  ),
  xl: (
    width: 4rem,
    height: 4rem,
    font-size: 1.6rem,
    status-width: 1rem,
    status-height: 1rem
  ),
) !default;
```
