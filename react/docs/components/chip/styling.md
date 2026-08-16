# React Chip Component Styling

> Learn how to customize the React Chip component with CSS variables and SASS for flexible styling and seamless integration into your design system.

### CSS variables

React Chip supports CSS variables for easy customization. These variables are defined in CoreUI Sass and can also be overridden directly in your stylesheets or inline styles.

```scss
--cui-chip-height: #{$chip-height};
--cui-chip-padding-x: #{$chip-padding-x};
--cui-chip-gap: #{$chip-gap};
--cui-chip-font-size: #{$chip-font-size};
--cui-chip-font-weight: #{$chip-font-weight};
--cui-chip-border-radius: #{$chip-border-radius};
--cui-chip-img-size: #{$chip-img-size};
--cui-chip-img-border-radius: #{$chip-img-border-radius};
--cui-chip-icon-size: #{$chip-icon-size};
--cui-chip-remove-size: #{$chip-remove-size};
--cui-chip-remove-opacity: #{$chip-remove-opacity};
--cui-chip-remove-hover-opacity: #{$chip-remove-hover-opacity};
--cui-chip-transition: #{$chip-transition};

--cui-chip-color: var(--cui-text-emphasis, #{$chip-color});
--cui-chip-bg: var(--cui-bg-subtle, #{$chip-bg});
--cui-chip-border-width: #{$chip-border-width};
--cui-chip-border-color: #{$chip-border-color};

--cui-chip-active-color: var(--cui-contrast, #{$chip-active-color});
--cui-chip-active-bg: var(--cui-color, #{$chip-active-bg});
--cui-chip-active-border-color: #{$chip-active-border-color};

--cui-chip-hover-color: var(--cui-contrast, #{$chip-hover-color});
--cui-chip-hover-bg: var(--cui-color, #{$chip-hover-bg});
--cui-chip-hover-border-color: #{$chip-hover-border-color};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-chip-bg': 'var(--cui-primary-bg-subtle)',
  '--cui-chip-color': 'var(--cui-primary-text-emphasis)',
}

return <CChip style={customVars}>Custom chip</CChip>
```

### SASS variables

```scss
$chip-font-size:             .875rem !default;
$chip-font-weight:           $font-weight-normal !default;
$chip-height:                1.75rem !default;
$chip-padding-x:             .625rem !default;
$chip-gap:                   .3125rem !default;
$chip-border-radius:         var(--cui-border-radius-pill) !default;
$chip-icon-size:             1rem !default;
$chip-img-size:              1.25rem !default;
$chip-img-border-radius:     50% !default;
$chip-remove-size:           1rem !default;
$chip-remove-opacity:        .65 !default;
$chip-remove-hover-opacity:  1 !default;
$chip-transition:            background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, color .15s ease-in-out !default;

$chip-color:                 var(--cui-body-color) !default;
$chip-bg:                    var(--cui-secondary-bg) !default;
$chip-border-width:          var(--cui-border-width) !default;
$chip-border-color:          transparent !default;

$chip-active-color:          rgba($white, .87) !default;
$chip-active-bg:             var(--cui-primary) !default;
$chip-active-border-color:   transparent !default;

$chip-hover-color:           $chip-color !default;
$chip-hover-bg:              color-mix(in srgb, var(--cui-secondary-bg) 95%, #000) !default;
$chip-hover-border-color:    transparent !default;

$chip-font-size-sm:          .75rem !default;
$chip-height-sm:             1.5rem !default;
$chip-padding-x-sm:          .625rem !default;
$chip-gap-sm:                .25rem !default;
$chip-icon-size-sm:          .875rem !default;
$chip-img-size-sm:           1rem !default;
$chip-remove-size-sm:        .875rem !default;

$chip-font-size-lg:          1rem !default;
$chip-height-lg:             2rem !default;
$chip-padding-x-lg:          .75rem !default;
$chip-gap-lg:                .375rem !default;
$chip-icon-size-lg:          1.25rem !default;
$chip-img-size-lg:           1.5rem !default;
$chip-remove-size-lg:        1.25rem !default;
```
