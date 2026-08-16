# React Offcanvas Component Styling

> Learn how to customize the React Offcanvas component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React offcanvas uses local CSS variables on `.offcanvas` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-offcanvas-zindex: #{$zindex-offcanvas};
--cui-offcanvas-width: #{$offcanvas-horizontal-width};
--cui-offcanvas-height: #{$offcanvas-vertical-height};
--cui-offcanvas-padding-x: #{$offcanvas-padding-x};
--cui-offcanvas-padding-y: #{$offcanvas-padding-y};
--cui-offcanvas-color: #{$offcanvas-color};
--cui-offcanvas-bg: #{$offcanvas-bg-color};
--cui-offcanvas-border-width: #{$offcanvas-border-width};
--cui-offcanvas-border-color: #{$offcanvas-border-color};
--cui-offcanvas-box-shadow: #{$offcanvas-box-shadow};
--cui-offcanvas-transition: #{transform $offcanvas-transition-duration ease-in-out};
--cui-offcanvas-title-line-height: #{$offcanvas-title-line-height};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-offcanvas-color': '#555',
  '--cui-offcanvas-bg': '#fff',
}

return <COffcanvas style={customVars}>{/* Offcanvas content */}</COffcanvas>
```

### SASS variables

```scss
$offcanvas-padding-y:               $modal-inner-padding !default;
$offcanvas-padding-x:               $modal-inner-padding !default;
$offcanvas-horizontal-width:        400px !default;
$offcanvas-vertical-height:         30vh !default;
$offcanvas-transition-duration:     .3s !default;
$offcanvas-border-color:            $modal-content-border-color !default;
$offcanvas-border-width:            $modal-content-border-width !default;
$offcanvas-title-line-height:       $modal-title-line-height !default;
$offcanvas-bg-color:                var(--cui-body-bg) !default;
$offcanvas-color:                   var(--cui-body-color) !default;
$offcanvas-box-shadow:              $modal-content-box-shadow-xs !default;
$offcanvas-backdrop-bg:             $modal-backdrop-bg !default;
$offcanvas-backdrop-opacity:        $modal-backdrop-opacity !default;
```
