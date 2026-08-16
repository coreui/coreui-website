# React Search Button Component Styling

> Learn how to customize the React Search Button component with CSS variables and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Search Button uses local CSS variables on `.search-button` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-search-button-height: #{$search-button-height};
--cui-search-button-padding-x: #{$search-button-padding-x};
--cui-search-button-font-family: #{$search-button-font-family};
--cui-search-button-font-size: #{$search-button-font-size};
--cui-search-button-font-weight: #{$search-button-font-weight};
--cui-search-button-color: #{$search-button-color};
--cui-search-button-bg: #{$search-button-bg};
--cui-search-button-border-width: #{$search-button-border-width};
--cui-search-button-border-color: #{$search-button-border-color};
--cui-search-button-border-radius: #{$search-button-border-radius};
--cui-search-button-box-shadow: #{$search-button-box-shadow};
--cui-search-button-transition: #{$search-button-transition};
--cui-search-button-focus-color: #{$search-button-focus-color};
--cui-search-button-focus-bg: #{$search-button-focus-bg};
--cui-search-button-focus-border-color: #{$search-button-focus-border-color};
--cui-search-button-focus-box-shadow: #{$search-button-focus-box-shadow};
--cui-search-button-icon-size: #{$search-button-icon-size};
--cui-search-button-keys-gap: #{$search-button-keys-gap};
--cui-search-button-key-width: #{$search-button-key-width};
--cui-search-button-key-height: #{$search-button-key-height};
--cui-search-button-key-padding-inline: #{$search-button-key-padding-inline};
--cui-search-button-key-font-size: #{$search-button-key-font-size};
--cui-search-button-key-bg: #{$search-button-key-bg};
--cui-search-button-key-border-radius: #{$search-button-key-border-radius};
--cui-search-button-key-active-bg: #{$search-button-key-active-bg};
--cui-search-button-placeholder-margin-inline: #{$search-button-placeholder-margin-inline};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-search-button-bg': 'var(--cui-tertiary-bg)',
  '--cui-search-button-color': 'var(--cui-body-color)',
  '--cui-search-button-border-color': 'var(--cui-primary)',
}

return (
  <CSearchButton
    placeholder="Search docs"
    onTrigger={() => {}}
    style={customVars}
  />
)
```

### SASS variables

```scss
$search-button-height:              $input-height !default;
$search-button-padding-x:           $input-padding-x !default;
$search-button-font-family:         $input-font-family !default;
$search-button-font-size:           $input-font-size !default;
$search-button-font-weight:         $input-font-weight !default;
$search-button-color:               $input-placeholder-color !default;
$search-button-bg:                  $input-bg !default;
$search-button-border-width:        $input-border-width !default;
$search-button-border-color:        $input-border-color !default;
$search-button-border-radius:       $input-border-radius !default;
$search-button-box-shadow:          $input-box-shadow !default;
$search-button-transition:          $input-transition !default;

$search-button-focus-color:         $input-focus-color !default;
$search-button-focus-bg:            $input-focus-bg !default;
$search-button-focus-border-color:  $input-focus-border-color !default;
$search-button-focus-box-shadow:    $input-focus-box-shadow !default;

$search-button-icon-size:           1.125rem !default;

$search-button-keys-gap:            .25rem !default;
$search-button-key-width:           1.5rem !default;
$search-button-key-height:          1.5rem !default;
$search-button-key-padding-inline:  .25rem !default;
$search-button-key-font-size:       .75rem !default;
$search-button-key-bg:              var(--cui-tertiary-bg) !default;
$search-button-key-border-radius:   var(--cui-border-radius-sm) !default;
$search-button-key-active-bg:       var(--cui-secondary-bg) !default;

$search-button-placeholder-margin-inline:  .55rem 2rem !default;
```
