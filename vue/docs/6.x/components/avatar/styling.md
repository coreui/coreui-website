# Vue Avatar Component Styling

> Learn how to customize the Vue Avatar component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue avatars use local CSS variables on `.avatar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$avatar-tokens: defaults(
  (
    --cui-avatar-size: 2rem,
    --cui-avatar-font-size: calc(var(--cui-avatar-size) * .4),
    --cui-avatar-color: inherit,
    --cui-avatar-bg: var(--cui-bg-2),
    --cui-avatar-border-radius: 50em,
    --cui-avatar-status-size: .5rem,
    --cui-avatar-status-bg: var(--cui-fg-4),
    --cui-avatar-status-border-radius: 50em,
    --cui-avatar-status-border-width: 1px,
    --cui-avatar-status-border-color: var(--cui-bg-body),
    --cui-avatar-transition: #{"transform .15s ease-in-out"},
  ),
  $avatar-tokens
);
```

### How to use CSS variables

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
