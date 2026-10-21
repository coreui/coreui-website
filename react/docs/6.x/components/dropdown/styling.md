# React Dropdown Component Styling

> Learn how to customize the React Dropdown component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React Button supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

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

```jsx
const customVars = {
  '--cui-dropdown-color': '#777',
  '--cui-dropdown-bg': '#efefef',
}

return <CDropdown style={customVars}>{/* Dropdown content */}</CDropdown>
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$dropdown-border-color:             var(--cui-border-color-translucent) !default;
```

## Sass mixins

Mixins are used to generate the CSS-based carets and can be found in `scss/mixins/_caret.scss`.

```scss
@mixin caret-down($width: var(--cui-caret-width, .3em)) {
  border-block-start: $width solid;
  border-block-end: 0;
  border-inline-start: $width solid transparent;
  border-inline-end: $width solid transparent;
}

@mixin caret-up($width: var(--cui-caret-width, .3em)) {
  border-block-start: 0;
  border-block-end: $width solid;
  border-inline-start: $width solid transparent;
  border-inline-end: $width solid transparent;
}

@mixin caret-end($width: var(--cui-caret-width, .3em)) {
  border-block-start: $width solid transparent;
  border-block-end: $width solid transparent;
  border-inline-start: $width solid;
  border-inline-end: 0;
}

@mixin caret-start($width: var(--cui-caret-width, .3em)) {
  border-block-start: $width solid transparent;
  border-block-end: $width solid transparent;
  border-inline-end: $width solid;
}

@mixin caret(
  $direction: down,
  $width: var(--cui-caret-width, .3em),
  $spacing: var(--cui-caret-spacing, calc(var(--cui-caret-width, .3em) * .85)),
  $vertical-align: var(--cui-caret-vertical-align, calc(var(--cui-caret-width, .3em) * .85))
) {
  @if $enable-caret {
    &::after {
      display: inline-block;
      margin-inline-start: $spacing;
      vertical-align: $vertical-align;
      content: "";
      @if $direction == down {
        @include caret-down($width);
      } @else if $direction == up {
        @include caret-up($width);
      } @else if $direction == end {
        @include caret-end($width);
      }
    }

    @if $direction == start {
      &::after {
        display: none;
      }

      &::before {
        display: inline-block;
        margin-inline-end: $spacing;
        vertical-align: $vertical-align;
        content: "";
        @include caret-start($width);
      }
    }

    &:empty::after {
      margin-inline-start: 0;
    }
  }
}
```
