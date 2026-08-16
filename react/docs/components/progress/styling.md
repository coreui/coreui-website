# React Progress Component Styling

> Learn how to customize the React Progress component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Progress supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-progress-height: #{$progress-height};
@include rfs($progress-font-size, --cui-progress-font-size);
--cui-progress-bg: #{$progress-bg};
--cui-progress-border-radius: #{$progress-border-radius};
--cui-progress-box-shadow: #{$progress-box-shadow};
--cui-progress-bar-color: #{$progress-bar-color};
--cui-progress-bar-bg: #{$progress-bar-bg};
--cui-progress-bar-transition: #{$progress-bar-transition};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-progress-bar-color': '#888',
  '--cui-progress-bar-bg': '#f2f4f6',
}

return <CProgress style={customVars}>...</CProgress>
```

### SASS variables

```scss
$progress-height:                   1rem !default;
$progress-font-size:                $font-size-base * .75 !default;
$progress-bg:                       var(--cui-secondary-bg) !default;
$progress-border-radius:            var(--cui-border-radius) !default;
$progress-box-shadow:               var(--cui-box-shadow-inset) !default;
$progress-bar-color:                $white !default;
$progress-bar-bg:                   var(--cui-primary) !default;
$progress-bar-animation-timing:     1s linear infinite !default;
$progress-bar-transition:           width .6s ease !default;

// TODO: clean-up ???
$progress-group-margin-bottom:         $spacer !default;
$progress-group-header-margin-bottom:  $spacer * .25 !default;
```
