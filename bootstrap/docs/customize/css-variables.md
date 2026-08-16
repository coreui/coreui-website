# CSS variables

> Use CoreUI for Bootstrap's CSS custom properties for fast and forward-looking design and development.

CoreUI for Bootstrap includes around two dozen [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) in its compiled CSS, with dozens more on the way for improved customization on a per-component basis. These provide easy access to commonly used values like our theme colors, breakpoints, and primary font stacks when working in your browser's inspector, a code sandbox, or general prototyping.

**All our custom properties are prefixed with `cui-`** to avoid conflicts with third party CSS.

## Root variables

Here are the variables we include (note that the `:root` is required) that can be accessed anywhere CoreUI for Bootstrap's CSS is loaded. They're located in our `_root.scss` file and included in our compiled dist files.

```scss
@if $font-size-root != null {
  --cui-root-font-size: #{$font-size-root};
}
--cui-body-font-family: #{meta.inspect($font-family-base)};
@include rfs($font-size-base, --cui-body-font-size);
--cui-body-font-weight: #{$font-weight-base};
--cui-body-line-height: #{$line-height-base};
@if $body-text-align != null {
  --cui-body-text-align: #{$body-text-align};
}

--cui-body-color: #{$body-color};
--cui-body-color-rgb: #{to-rgb($body-color)};
--cui-body-bg: #{$body-bg};
--cui-body-bg-rgb: #{to-rgb($body-bg)};

--cui-emphasis-color: #{$body-emphasis-color};
--cui-emphasis-color-rgb: #{to-rgb($body-emphasis-color)};

--cui-secondary-color: #{$body-secondary-color};
--cui-secondary-color-rgb: #{to-rgb($body-secondary-color)};
--cui-secondary-bg: #{$body-secondary-bg};
--cui-secondary-bg-rgb: #{to-rgb($body-secondary-bg)};

--cui-tertiary-color: #{$body-tertiary-color};
--cui-tertiary-color-rgb: #{to-rgb($body-tertiary-color)};
--cui-tertiary-bg: #{$body-tertiary-bg};
--cui-tertiary-bg-rgb: #{to-rgb($body-tertiary-bg)};
--cui-tertiary-bg-translucent: #{color-translucent($body-tertiary-bg)};

--cui-body-color-dark: #{$body-color-dark};
--cui-body-color-rgb-dark: #{to-rgb($body-color-dark)};
--cui-body-bg-dark: #{$body-bg-dark};
--cui-body-bg-rgb-dark: #{to-rgb($body-bg-dark)};

--cui-emphasis-color-dark: #{$body-emphasis-color-dark};
--cui-emphasis-color-rgb-dark: #{to-rgb($body-emphasis-color-dark)};

--cui-secondary-color-dark: #{$body-secondary-color-dark};
--cui-secondary-color-rgb-dark: #{to-rgb($body-secondary-color-dark)};
--cui-secondary-bg-dark: #{$body-secondary-bg-dark};
--cui-secondary-bg-rgb-dark: #{to-rgb($body-secondary-bg-dark)};

--cui-tertiary-color-dark: #{$body-tertiary-color-dark};
--cui-tertiary-color-rgb-dark: #{to-rgb($body-tertiary-color-dark)};
--cui-tertiary-bg-dark: #{$body-tertiary-bg-dark};
--cui-tertiary-bg-rgb-dark: #{to-rgb($body-tertiary-bg-dark)};

--cui-high-emphasis: #{$high-emphasis}; // Deprecated in v5.0.0
--cui-medium-emphasis: #{$medium-emphasis}; // Deprecated in v5.0.0
--cui-disabled: #{$disabled}; // Deprecated in v5.0.0

--cui-high-emphasis-inverse: #{$high-emphasis-inverse}; // Deprecated in v5.0.0
--cui-medium-emphasis-inverse: #{$medium-emphasis-inverse}; // Deprecated in v5.0.0
--cui-disabled-inverse: #{$disabled-inverse}; // Deprecated in v5.0.0
```

### Dark mode

These variables are scoped to our built-in dark mode.

```scss
--cui-body-color: #{$body-color-dark};
--cui-body-color-rgb: #{to-rgb($body-color-dark)};
--cui-body-bg: #{$body-bg-dark};
--cui-body-bg-rgb: #{to-rgb($body-bg-dark)};

--cui-emphasis-color: #{$body-emphasis-color-dark};
--cui-emphasis-color-rgb: #{to-rgb($body-emphasis-color-dark)};

--cui-secondary-color: #{$body-secondary-color-dark};
--cui-secondary-color-rgb: #{to-rgb($body-secondary-color-dark)};
--cui-secondary-bg: #{$body-secondary-bg-dark};
--cui-secondary-bg-rgb: #{to-rgb($body-secondary-bg-dark)};

--cui-tertiary-color: #{$body-tertiary-color-dark};
--cui-tertiary-color-rgb: #{to-rgb($body-tertiary-color-dark)};
--cui-tertiary-bg: #{$body-tertiary-bg-dark};
--cui-tertiary-bg-rgb: #{to-rgb($body-tertiary-bg-dark)};
--cui-tertiary-bg-translucent: #{color-translucent($body-tertiary-bg-dark, .1, $body-bg-dark)};

--cui-elevation-base-color: #{$elevation-base-color-dark}; // Deprecated in v5.0.0
--cui-high-emphasis: #{$high-emphasis-dark}; // Deprecated in v5.0.0
--cui-medium-emphasis: #{$medium-emphasis-dark}; // Deprecated in v5.0.0
--cui-disabled: #{$disabled-dark}; // Deprecated in v5.0.0

@each $color, $value in $theme-colors-dark {
  --cui-#{$color}: #{$value};
}

@each $color, $value in $grays-dark {
  --cui-gray-#{$color}: #{$value};
}

@each $color, $value in $theme-colors-rgb-dark {
  --cui-#{$color}-rgb: #{$value};
}

@each $color, $value in $theme-colors-text-dark {
  --cui-#{$color}-text-emphasis: #{$value};
}

@each $color, $value in $theme-colors-bg-subtle-dark {
  --cui-#{$color}-bg-subtle: #{$value};
}

@each $color, $value in $theme-colors-border-subtle-dark {
  --cui-#{$color}-border-subtle: #{$value};
}

@each $color, $value in $theme-gradients-dark {
  --cui-#{$color}-start: #{map.get($value, "start")};
  --cui-#{$color}-stop: #{map.get($value, "stop")};
}

--cui-heading-color: #{$headings-color-dark};

--cui-link-color: #{$link-color-dark};
--cui-link-hover-color: #{$link-hover-color-dark};
--cui-link-color-rgb: #{to-rgb($link-color-dark)};
--cui-link-hover-color-rgb: #{to-rgb($link-hover-color-dark)};

--cui-code-color: #{$code-color-dark};
--cui-highlight-color: #{$mark-color-dark};
--cui-highlight-bg: #{$mark-bg-dark};

--cui-border-color: #{$border-color-dark};
--cui-border-color-translucent: #{$border-color-translucent-dark};

--cui-form-valid-color: #{$form-valid-color-dark};
--cui-form-valid-border-color: #{$form-valid-border-color-dark};
--cui-form-invalid-color: #{$form-invalid-color-dark};
--cui-form-invalid-border-color: #{$form-invalid-border-color-dark};
```

## Component variables

CoreUI is increasingly making use of custom properties as local variables for various components. This way we reduce our compiled CSS, ensure styles aren't inherited in places like nested tables, and allow some basic restyling and extending of Bootstrap components after Sass compilation.

Have a look at our table documentation for some [insight into how we're using CSS variables](https://coreui.io/bootstrap/docs/content/tables/#how-do-the-variants-and-accented-tables-work). Our [navbars also use CSS variables](https://coreui.io/bootstrap/docs/components/navbar/#css) as of v4.2.6. We're also using CSS variables across our grids—primarily for gutters the [new opt-in CSS grid](https://coreui.io/bootstrap/docs/layout/css-grid/)—with more component usage coming in the future.

Whenever possible, we'll assign CSS variables at the base component level (e.g., `.navbar` for navbar and its sub-components). This reduces guessing on where and how to customize, and allows for easy modifications by our team in future updates.

## Prefix

Most CSS variables use a prefix to avoid collisions with your own codebase. This prefix is in addition to the `--` that's required on every CSS variable.

Customize the prefix via the `$prefix` Sass variable. By default, it's set to `cui-` (note the trailing dash).

## Examples

CSS variables offer similar flexibility to Sass's variables, but without the need for compilation before being served to the browser. For example, here we're resetting our page's font and link styles with CSS variables.

```css
body {
  font: 1rem/1.5 var(--cui-font-sans-serif);
}
a {
  color: var(--cui-blue);
}
```

## Focus variables

_Added in 4.3.0._

Bootstrap provides custom `:focus` styles using a combination of Sass and CSS variables that can be optionally added to specific components and elements. We do not yet globally override all `:focus` styles.

In our Sass, we set default values that can be customized before compiling.

```scss
$focus-ring-width:      .25rem !default;
$focus-ring-opacity:    .25 !default;
$focus-ring-color:      rgba($primary, $focus-ring-opacity) !default;
$focus-ring-blur:       0 !default;
$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color !default;
```

Those variables are then reassigned to `:root` level CSS variables that can be customized in real-time, including with options for `x` and `y` offsets (which default to their fallback value of `0`).

```scss
--cui-focus-ring-width: #{$focus-ring-width};
--cui-focus-ring-opacity: #{$focus-ring-opacity};
--cui-focus-ring-color: #{$focus-ring-color};
--cui-focus-ring-blur: #{$focus-ring-blur};
```

## Grid breakpoints

While we include our grid breakpoints as CSS variables (except for `xs`), be aware that **CSS variables do not work in media queries**. This is by design in the CSS spec for variables, but may change in coming years with support for `env()` variables. Check out [this Stack Overflow answer](https://stackoverflow.com/a/47212942) for some helpful links. In the mean time, you can use these variables in other CSS situations, as well as in your JavaScript.
