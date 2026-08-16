# React Navs & Tabs Components Styling

> Learn how to customize the React Navs & Tabs components with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React navs use local CSS variables on `.nav`, `.nav-tabs`, `.nav-pills`, `.nav-underline` and `.nav-underline-border` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

On the `.nav` base class:

```scss
--cui-nav-link-padding-x: #{$nav-link-padding-x};
--cui-nav-link-padding-y: #{$nav-link-padding-y};
@include rfs($nav-link-font-size, --cui-nav-link-font-size);
--cui-nav-link-font-weight: #{$nav-link-font-weight};
--cui-nav-link-color: #{$nav-link-color};
--cui-nav-link-hover-color: #{$nav-link-hover-color};
--cui-nav-link-disabled-color: #{$nav-link-disabled-color};
```

On the `.nav-tabs` modifier class:

```scss
--cui-nav-tabs-border-width: #{$nav-tabs-border-width};
--cui-nav-tabs-border-color: #{$nav-tabs-border-color};
--cui-nav-tabs-border-radius: #{$nav-tabs-border-radius};
--cui-nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};
--cui-nav-tabs-link-active-color: #{$nav-tabs-link-active-color};
--cui-nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};
--cui-nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};
```

On the `.nav-pills` modifier class:

```scss
--cui-nav-pills-border-radius: #{$nav-pills-border-radius};
--cui-nav-pills-link-active-color: #{$nav-pills-link-active-color};
--cui-nav-pills-link-active-bg: #{$nav-pills-link-active-bg};
```

_Added in 5.0.0._

On the `.nav-underline` modifier class:

```scss
--cui-nav-underline-gap: #{$nav-underline-gap};
--cui-nav-underline-border-width: #{$nav-underline-border-width};
--cui-nav-underline-link-active-color: #{$nav-underline-link-active-color};
```

_Added in 5.0.0._

On the `.nav-underline-border` modifier class:

```scss
--cui-nav-underline-border-gap: #{$nav-underline-border-gap};
--cui-nav-underline-border-border-color: #{$nav-underline-border-border-color};
--cui-nav-underline-border-border-width: #{$nav-underline-border-border-width};
--cui-nav-underline-border-link-padding-x: #{$nav-underline-border-link-padding-x};
--cui-nav-underline-border-link-padding-y: #{$nav-underline-border-link-padding-y};
--cui-nav-underline-border-link-color: #{$nav-underline-border-link-color};
--cui-nav-underline-border-link-active-color: #{$nav-underline-border-link-active-color};
--cui-nav-underline-border-link-disabled-color: #{$nav-underline-border-link-disabled-color};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-nav-link-color': '#555',
  '--cui-nav-link-disabled-color': '#afaeef',
}

return <CNav style={customVars}>{/* Nav content */}</CNav>
```

### SASS variables

```scss
$nav-link-padding-y:                .5rem !default;
$nav-link-padding-x:                1rem !default;
$nav-link-font-size:                null !default;
$nav-link-font-weight:              null !default;
$nav-link-color:                    var(--cui-link-color) !default;
$nav-link-hover-color:              var(--cui-link-hover-color) !default;
$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out !default;
$nav-link-disabled-color:           var(--cui-secondary-color) !default;
$nav-link-focus-box-shadow:         $focus-ring-box-shadow !default;

$nav-tabs-border-color:             var(--cui-border-color) !default;
$nav-tabs-border-width:             var(--cui-border-width) !default;
$nav-tabs-border-radius:            var(--cui-border-radius) !default;
$nav-tabs-link-hover-border-color:  var(--cui-secondary-bg) var(--cui-secondary-bg) $nav-tabs-border-color !default;
$nav-tabs-link-active-color:        var(--cui-emphasis-color) !default;
$nav-tabs-link-active-bg:           var(--cui-body-bg) !default;
$nav-tabs-link-active-border-color: var(--cui-border-color) var(--cui-border-color) $nav-tabs-link-active-bg !default;

$nav-pills-border-radius:           var(--cui-border-radius) !default;
$nav-pills-link-active-color:       $component-active-color !default;
$nav-pills-link-active-bg:          $component-active-bg !default;

$nav-underline-gap:                 1rem !default;
$nav-underline-border-width:        .125rem !default;
$nav-underline-link-active-color:   var(--cui-emphasis-color) !default;

$nav-underline-border-gap:                  .5rem !default;
$nav-underline-border-border-color:         var(--cui-border-color) !default;
$nav-underline-border-border-width:         .125rem !default;
$nav-underline-border-link-padding-y:       .5rem !default;
$nav-underline-border-link-padding-x:       .5rem !default;
$nav-underline-border-link-color:           var(--cui-secondary-color) !default;
$nav-underline-border-link-active-color:    var(--cui-primary) !default;
$nav-underline-border-link-disabled-color:  var(--cui-tertiary-color) !default;

$nav-enclosed-padding:                   .125rem !default;
$nav-enclosed-bg:                        var(--cui-tertiary-bg) !default;
$nav-enclosed-border-radius:             $border-radius-lg !default;
$nav-enclosed-link-padding-y:            .375rem !default;
$nav-enclosed-link-padding-x:            .875rem !default;
$nav-enclosed-link-color:                var(--cui-body-color) !default;
$nav-enclosed-link-border-width:         1px !default;
$nav-enclosed-link-active-color:         var(--cui-body-color) !default;
$nav-enclosed-link-active-bg:            var(--cui-body-bg) !default;
$nav-enclosed-link-active-border-color:  var(--cui-border-color) !default;
$nav-enclosed-link-hover-box-shadow:     var(--cui-box-shadow-sm) !default;
$nav-enclosed-link-disabled-color:       var(--cui-secondary-color) !default;
```
