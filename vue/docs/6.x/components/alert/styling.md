# Vue Alert Component Styling

> Learn how to customize the Vue Alert component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue alerts use local CSS variables on `.alert` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$alert-tokens: defaults(
  (
    --cui-alert-bg: var(--cui-bg-1),
    --cui-alert-padding-x: var(--cui-spacer),
    --cui-alert-padding-y: var(--cui-spacer),
    --cui-alert-gap: var(--cui-spacer-3),
    --cui-alert-margin-bottom: 1rem,
    --cui-alert-color: inherit,
    --cui-alert-border-color: var(--cui-border-color),
    --cui-alert-border-width: var(--cui-border-width),
    --cui-alert-border-radius: var(--cui-radius-7),
    --cui-alert-link-color: inherit,
    --cui-alert-link-font-weight: var(--cui-font-weight-bold),
    --cui-alert-transition-property: opacity,
    --cui-alert-transition-duration: .15s,
    --cui-alert-transition-timing: linear,
    --cui-hr-border-color: var(--cui-theme-border, var(--cui-alert-border-color)),
  ),
  $alert-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CAlert :style="vars">...</CAlert>
</template>

<script setup>
const vars = {
  '--cui-alert-color': '#333',
  '--cui-alert-bg': '#f8f9fa',
}
</script>
```

## Sass maps

Each entry in the variants map names the theme role every token reads, so adding a variant takes a map entry rather than a new rule.

```scss
$alert-variants: defaults(
  (
    "solid": (
      "color": "contrast",
      "bg": "bg",
      "border-color": "bg"
    )
  ),
  $alert-variants
);
```

## Sass loops

The loop that turns every entry of the variants map into a `.alert-{variant}` class, re-pointing the alert's tokens at the roles that variant names.

```scss
@each $variant, $properties in $alert-variants {
  .alert-#{$variant} {
    @each $property, $value in $properties {
      @if $value == "transparent" {
        --cui-alert-#{$property}: transparent;
      } @else {
        --cui-alert-#{$property}: var(--cui-theme-#{$value});
      }
    }

    --cui-hr-border-color: var(--cui-theme-border, currentcolor);

    @each $property, $value in $properties {
      @if $property == "bg" {
        background-color: var(--cui-alert-bg);
      } @else {
        #{$property}: var(--cui-alert-#{$property});
      }
    }
  }
}
```

### Deprecated color classes

_Deprecated in 6.0.0._

The loop that generates the deprecated color classes, pointing each one at the matching theme color. They ship in the opt-in `coreui-legacy.css`, so a build that leaves that stylesheet out drops them.

```scss
@each $state in map.keys($theme-colors) {
  .alert-#{$state} {
    @include theme-tokens($state);
  }
}
```
