# React Button Component Styling

> Learn how to customize the React Button component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React Button supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$button-tokens: defaults(
  (
    --cui-btn-gap: var(--cui-btn-input-gap),
    --cui-btn-min-height: var(--cui-btn-input-min-height),
    --cui-btn-padding-y: var(--cui-btn-input-padding-y),
    --cui-btn-padding-x: var(--cui-btn-input-padding-x),
    --cui-btn-font-size: var(--cui-btn-input-font-size),
    --cui-btn-font-weight: var(--cui-btn-input-font-weight),
    --cui-btn-line-height: var(--cui-btn-input-line-height),
    --cui-btn-white-space: nowrap,
    --cui-btn-color: #{$btn-color},
    --cui-btn-bg: #{$btn-bg},
    --cui-btn-border-width: var(--cui-btn-input-border-width),
    --cui-btn-border-color: transparent,
    --cui-btn-border-radius: var(--cui-btn-input-border-radius),
    --cui-btn-hover-color: #{$btn-color},
    --cui-btn-hover-bg: #{$btn-hover-bg},
    --cui-btn-hover-border-color: transparent,
    --cui-btn-active-color: #{$btn-color},
    --cui-btn-active-bg: #{$btn-hover-bg},
    --cui-btn-active-border-color: transparent,
    --cui-btn-disabled-color: #{$btn-color},
    --cui-btn-disabled-bg: #{$btn-bg},
    --cui-btn-disabled-border-color: transparent,
    --cui-btn-active-shadow: inset 0 3px 5px color-mix(in oklch, var(--cui-black) 12.5%, transparent),
    --cui-btn-disabled-opacity: var(--cui-btn-input-disabled-opacity),
    --cui-btn-transition-property: var(--cui-btn-input-action-transition-property),
    --cui-btn-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-btn-transition-timing: var(--cui-btn-input-transition-timing)
  ),
  $button-tokens
);
```

`.btn-link` rewrites the ones that make it read as a link:

```scss
$button-link-tokens: defaults(
  (
    --cui-btn-font-weight: var(--cui-font-weight-normal),
    --cui-btn-color: var(--cui-link-color),
    --cui-btn-bg: transparent,
    --cui-btn-border-color: transparent,
    --cui-btn-hover-color: var(--cui-link-hover-color),
    --cui-btn-hover-bg: transparent,
    --cui-btn-hover-border-color: transparent,
    --cui-btn-active-color: var(--cui-link-hover-color),
    --cui-btn-active-bg: transparent,
    --cui-btn-active-border-color: transparent,
    --cui-btn-disabled-color: var(--cui-fg-3),
    --cui-btn-disabled-bg: transparent,
    --cui-btn-disabled-border-color: transparent
  ),
  $button-link-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-btn-color': '#ffe484',
  '--cui-btn-bg': '#efefef',
}

return <CButton style={customVars}>{/* Button content */}</CButton>
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$btn-color:                   var(--cui-fg-body) !default;
$btn-bg:                      var(--cui-bg-2) !default;
$btn-hover-bg:                var(--cui-bg-3) !default;

$btn-outline-color:           var(--cui-fg-2) !default;
$btn-outline-border-color:    var(--cui-border-color) !default;
$btn-outline-hover-color:     var(--cui-fg-body) !default;
$btn-outline-hover-bg:        var(--cui-bg-3) !default;

$btn-subtle-color:            var(--cui-fg-body) !default;
$btn-subtle-bg:               var(--cui-bg-2) !default;
$btn-subtle-hover-bg:         var(--cui-bg-3) !default;

$btn-ghost-color:             var(--cui-fg-2) !default;
$btn-ghost-hover-color:       var(--cui-fg-body) !default;
$btn-ghost-hover-bg:          var(--cui-bg-1) !default;
```

## Sass maps

`$button-sizes` lists the sizes that get a class. Each name generates `.btn-{size}` — plus the matching `.btn-group-{size}` selector — pointing the button's variables at the shared `--cui-btn-input-{size}-*` scale, so adding a name is enough once that scale defines it. Buttons inside an input group follow the group's own sizes, `$input-group-sizes`.

```scss
$button-sizes: defaults(
  ("xs", "sm", "lg"),
  $button-sizes
);
```

`$button-variants` holds every variant. Each entry names, per state, the theme token a button variable reads and the neutral value behind it; `disabled` repeats `base`. Add an entry and both spellings of the new variant are generated — the variant class and the `.btn-{variant}-{color}` class.

```scss
// Each entry names the theme token a button variable reads and the neutral
// value behind it, so the variant class alone is a grey button and any theme
// colour — from `.theme-*`, from a `.btn-*-{color}` class or from an ancestor —
// colours the whole set. `disabled` repeats `base`.
$button-variants: () !default;
$button-variants: defaults(
  (
    "solid": (
      "base": (
        "color": ("contrast", $btn-color),
        "bg": ("bg", $btn-bg),
        "border-color": ("bg", $btn-bg)
      ),
      "hover": (
        "color": ("contrast", $btn-color),
        "bg": ("hover", $btn-hover-bg),
        "border-color": ("hover", $btn-hover-bg)
      ),
      "active": (
        "color": ("contrast", $btn-color),
        "bg": ("active", $btn-hover-bg),
        "border-color": ("active", $btn-hover-bg)
      )
    ),
    "outline": (
      "base": (
        "color": ("fg", $btn-outline-color),
        "bg": "transparent",
        "border-color": ("border", $btn-outline-border-color)
      ),
      "hover": (
        "color": ("contrast", $btn-outline-hover-color),
        "bg": ("hover", $btn-outline-hover-bg),
        "border-color": ("hover", $btn-outline-border-color)
      ),
      "active": (
        "color": ("contrast", $btn-outline-hover-color),
        "bg": ("active", $btn-outline-hover-bg),
        "border-color": ("active", $btn-outline-border-color)
      )
    ),
    "subtle": (
      "base": (
        "color": ("fg", $btn-subtle-color),
        "bg": ("bg-subtle", $btn-subtle-bg),
        "border-color": "transparent"
      ),
      "hover": (
        "color": ("fg-emphasis", $btn-subtle-color),
        "bg": ("bg-muted", $btn-subtle-hover-bg),
        "border-color": "transparent"
      ),
      "active": (
        "color": ("fg-emphasis", $btn-subtle-color),
        "bg": ("bg-muted", $btn-subtle-hover-bg),
        "border-color": "transparent"
      )
    ),
    "ghost": (
      "base": (
        "color": ("fg", $btn-ghost-color),
        "bg": "transparent",
        "border-color": "transparent"
      ),
      "hover": (
        "color": ("contrast", $btn-ghost-hover-color),
        "bg": ("hover", $btn-ghost-hover-bg),
        "border-color": ("hover", $btn-ghost-hover-bg)
      ),
      "active": (
        "color": ("contrast", $btn-ghost-hover-color),
        "bg": ("active", $btn-ghost-hover-bg),
        "border-color": ("active", $btn-ghost-hover-bg)
      )
    )
  ),
  $button-variants
);
```

## Sass mixins

`button-variant()` turns one entry of that map into the button's variables.

```scss
@function btn-variant-value($value) {
  @if $value == "transparent" {
    @return transparent;
  }

  @if meta.type-of($value) == "list" {
    @return var(--cui-theme-#{list.nth($value, 1)}, #{list.nth($value, 2)});
  }

  @return var(--cui-theme-#{$value});
}

@mixin button-variant($variant) {
  $config: map.get($button-variants, $variant);

  @each $property, $value in map.get($config, "base") {
    --cui-btn-#{$property}: #{btn-variant-value($value)};
    --cui-btn-disabled-#{$property}: #{btn-variant-value($value)};
  }

  @each $state in ("hover", "active") {
    @each $property, $value in map.get($config, $state) {
      --cui-btn-#{$state}-#{$property}: #{btn-variant-value($value)};
    }
  }
}
```

## Sass loops

```scss
@each $variant, $config in $button-variants {
  .btn-#{$variant} {
    @include button-variant($variant);
  }
}
```

```scss
@each $size, $_ in $button-sizes {
  .btn-#{$size},
  .btn-group-#{$size} > :is(#{$btn-variant-selectors}) {
    --cui-btn-gap: var(--cui-btn-input-#{$size}-gap);
    --cui-btn-min-height: var(--cui-btn-input-#{$size}-min-height);
    --cui-btn-padding-y: var(--cui-btn-input-#{$size}-padding-y);
    --cui-btn-padding-x: var(--cui-btn-input-#{$size}-padding-x);
    --cui-btn-font-size: var(--cui-btn-input-#{$size}-font-size);
    --cui-btn-line-height: var(--cui-btn-input-#{$size}-line-height);
    --cui-btn-border-radius: var(--cui-btn-input-#{$size}-border-radius);
  }
}
```

### Deprecated color classes

_Deprecated in 6.0.0._

The loop that generates the deprecated color classes, pointing each one at the matching theme color. It lives in the opt-in [`coreui-legacy.css`](https://coreui.io/react/docs/customize/optimize/#v5-compatibility-css), not in `coreui.css`.

```scss
@each $color in map.keys($theme-colors) {
  $selectors: (string.unquote(".btn-#{$color}"));

  @each $variant, $_ in $button-variants {
    @if $variant != "solid" {
      $selectors: list.append($selectors, string.unquote(".btn-#{$variant}-#{$color}"), comma);
    }
  }

  #{$selectors} {
    @include theme-tokens($color);
  }
}
```
