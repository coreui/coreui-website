# Vue Dropdown Component Styling

> Learn how to customize the Vue Dropdown component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue dropdowns use local CSS variables on `.dropdown` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$dropdown-tokens: defaults(
  (
    --cui-dropdown-zindex: var(--cui-z-dropdown),
    --cui-dropdown-min-width: 10rem,
    --cui-dropdown-padding-x: 0,
    --cui-dropdown-padding-y: .5rem,
    --cui-dropdown-spacer: .125rem,
    --cui-dropdown-font-size: var(--cui-body-font-size),
    --cui-dropdown-color: var(--cui-fg-body),
    --cui-dropdown-bg: var(--cui-bg-body),
    --cui-dropdown-border-color: #{$dropdown-border-color},
    --cui-dropdown-border-radius: var(--cui-radius-7),
    --cui-dropdown-border-width: var(--cui-border-width),
    --cui-dropdown-divider-bg: #{$dropdown-border-color},
    --cui-dropdown-divider-margin-y: var(--cui-spacer-3),
    --cui-dropdown-box-shadow: var(--cui-box-shadow),
    --cui-dropdown-link-color: var(--cui-fg-body),
    --cui-dropdown-link-hover-color: var(--cui-fg-body),
    --cui-dropdown-link-hover-bg: var(--cui-bg-1),
    --cui-dropdown-link-active-color: var(--cui-primary-contrast),
    --cui-dropdown-link-active-bg: var(--cui-primary-base),
    --cui-dropdown-link-disabled-color: var(--cui-fg-3),
    --cui-dropdown-item-padding-x: var(--cui-spacer),
    --cui-dropdown-item-border-radius: 0,
    --cui-dropdown-item-padding-y: var(--cui-spacer-1),
    --cui-dropdown-header-color: var(--cui-fg-3),
    --cui-dropdown-header-padding-x: var(--cui-spacer),
    --cui-dropdown-header-padding-y: .5rem,
  ),
  $dropdown-tokens
);
```

Customization through CSS variables can be seen on the `.dropdown-menu-dark` class where we override specific values without adding duplicate CSS selectors.

```scss
$dropdown-dark-tokens: defaults(
  (
    --cui-dropdown-color: var(--cui-gray-300),
    --cui-dropdown-bg: var(--cui-gray-800),
    --cui-dropdown-border-color: #{$dropdown-border-color},
    --cui-dropdown-link-color: var(--cui-gray-300),
    --cui-dropdown-link-hover-color: var(--cui-white),
    --cui-dropdown-divider-bg: #{$dropdown-border-color},
    --cui-dropdown-link-hover-bg: color-mix(in oklch, var(--cui-white) 15%, transparent),
    --cui-dropdown-link-active-color: var(--cui-primary-contrast),
    --cui-dropdown-link-active-bg: var(--cui-primary-base),
    --cui-dropdown-link-disabled-color: var(--cui-gray-500),
    --cui-dropdown-header-color: var(--cui-gray-500),
  ),
  $dropdown-dark-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CDropdown :style="vars">...</CDropdown>
</template>

<script setup>
const vars = {
  '--cui-dropdown-color': '#333',
  '--cui-dropdown-bg': '#f8f9fa',
}
</script>
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$dropdown-border-color:             var(--cui-border-color-translucent) !default;
```
