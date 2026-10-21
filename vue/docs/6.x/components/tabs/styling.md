# Vue Tabs Component Styling

> Learn how to customize the Vue Tabs component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue tabs use local CSS variables on `.nav`, `.nav-tabs`, `.nav-pills`, `.nav-underline` and `.nav-underline-border` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

On the `.nav` base class:

```scss
$nav-tokens: defaults(
  (
    --cui-nav-gap: 0,
    --cui-nav-link-gap: .5rem,
    --cui-nav-link-align: center,
    --cui-nav-link-justify: center,
    --cui-nav-link-border-radius: var(--cui-radius-5),
    --cui-nav-link-padding-x: 1rem,
    --cui-nav-link-padding-y: #{$nav-link-padding-y},
    --cui-nav-link-font-size: inherit,
    --cui-nav-link-font-weight: inherit,
    --cui-nav-link-color: var(--cui-fg-2),
    --cui-nav-link-hover-color: var(--cui-fg-1),
    --cui-nav-link-hover-bg: var(--cui-bg-1),
    --cui-nav-link-active-color: var(--cui-fg-body),
    --cui-nav-link-active-bg: var(--cui-bg-2),
    --cui-nav-link-disabled-color: var(--cui-fg-4),
    --cui-nav-link-transition-property: #{color, background-color, border-color},
    --cui-nav-link-transition-duration: .15s,
    --cui-nav-link-transition-timing: ease-in-out,
  ),
  $nav-tokens
);
```

On the `.nav-tabs` modifier class:

```scss
$nav-tabs-tokens: defaults(
  (
    --cui-nav-tabs-border-width: var(--cui-border-width),
    --cui-nav-tabs-border-color: #{$nav-tabs-border-color},
    --cui-nav-tabs-border-radius: var(--cui-radius-5),
    --cui-nav-tabs-link-hover-border-color: #{var(--cui-border-subtle) var(--cui-border-subtle) $nav-tabs-border-color},
    --cui-nav-tabs-link-active-color: var(--cui-fg-body),
    --cui-nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg},
    --cui-nav-tabs-link-active-border-color: #{var(--cui-border-color) var(--cui-border-color) $nav-tabs-link-active-bg},
  ),
  $nav-tabs-tokens
);
```

On the `.nav-pills` modifier class:

```scss
$nav-pills-tokens: defaults(
  (
    --cui-nav-pills-border-radius: 3rem,
    --cui-nav-pills-link-active-color: var(--cui-primary-contrast),
    --cui-nav-pills-link-active-bg: var(--cui-primary-bg),
  ),
  $nav-pills-tokens
);
```

On the `.nav-underline` modifier class:

```scss
$nav-underline-tokens: defaults(
  (
    --cui-nav-underline-gap: 1rem,
    --cui-nav-underline-border-width: .125rem,
    --cui-nav-underline-link-active-color: var(--cui-fg-body),
  ),
  $nav-underline-tokens
);
```

On the `.nav-underline-border` modifier class:

```scss
$nav-underline-border-tokens: defaults(
  (
    --cui-nav-underline-border-gap: .5rem,
    --cui-nav-underline-border-border-color: var(--cui-border-color),
    --cui-nav-underline-border-border-width: .125rem,
    --cui-nav-underline-border-link-padding-x: .5rem,
    --cui-nav-underline-border-link-padding-y: .5rem,
    --cui-nav-underline-border-link-color: var(--cui-fg-2),
    --cui-nav-underline-border-link-active-color: var(--cui-primary-base),
    --cui-nav-underline-border-link-disabled-color: var(--cui-fg-3),
  ),
  $nav-underline-border-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CTabs :style="vars">...</CTabs>
</template>

<script setup>
const vars = {
  '--cui-nav-link-color': '#333',
  '--cui-nav-link-hover-color': '#f8f9fa',
}
</script>
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$nav-link-padding-y:                .5rem !default;

$nav-tabs-border-color:             var(--cui-border-color) !default;
$nav-tabs-link-active-bg:           var(--cui-bg-body) !default;
```
