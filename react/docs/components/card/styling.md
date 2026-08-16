# React Card Component Styling

> Learn how to customize the React Card component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Card supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-card-spacer-y: #{$card-spacer-y};
--cui-card-spacer-x: #{$card-spacer-x};
--cui-card-title-spacer-y: #{$card-title-spacer-y};
--cui-card-title-color: #{$card-title-color};
--cui-card-subtitle-color: #{$card-subtitle-color};
--cui-card-border-width: #{$card-border-width};
--cui-card-border-color: #{$card-border-color};
--cui-card-border-radius: #{$card-border-radius};
--cui-card-box-shadow: #{$card-box-shadow};
--cui-card-inner-border-radius: #{$card-inner-border-radius};
--cui-card-cap-padding-y: #{$card-cap-padding-y};
--cui-card-cap-padding-x: #{$card-cap-padding-x};
--cui-card-cap-bg: #{$card-cap-bg};
--cui-card-cap-color: #{$card-cap-color};
--cui-card-height: #{$card-height};
--cui-card-color: #{$card-color};
--cui-card-bg: #{$card-bg};
--cui-card-img-overlay-padding: #{$card-img-overlay-padding};
--cui-card-group-margin: #{$card-group-margin};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-card-cap-bg': '#555',
  '--cui-card-color': '#efefef',
}

return <CCard style={customVars}>{/* Card content */}</CCard>
```

### SASS variables

```scss
$card-spacer-y:                     $spacer !default;
$card-spacer-x:                     $spacer !default;
$card-title-spacer-y:               $spacer * .5 !default;
$card-title-color:                  null !default;
$card-subtitle-color:               null !default;
$card-border-width:                 var(--cui-border-width) !default;
$card-border-color:                 var(--cui-border-color-translucent) !default;
$card-border-radius:                var(--cui-border-radius) !default;
$card-box-shadow:                   null !default;
$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;
$card-cap-padding-y:                $card-spacer-y * .5 !default;
$card-cap-padding-x:                $card-spacer-x !default;
$card-cap-bg:                       rgba(var(--cui-body-color-rgb), .03) !default;
$card-cap-color:                    null !default;
$card-height:                       null !default;
$card-color:                        null !default;
$card-bg:                           var(--cui-body-bg) !default;
$card-img-overlay-padding:          $spacer !default;
$card-group-margin:                 $grid-gutter-width * .5 !default;
```
