# React Spinner Component Styling

> Learn how to customize the React Spinner component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React spinners use local CSS variables on `.spinner-border` and `.spinner-grow` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

Border spinner variables:

```scss
--cui-spinner-width: #{$spinner-width};
--cui-spinner-height: #{$spinner-height};
--cui-spinner-vertical-align: #{$spinner-vertical-align};
--cui-spinner-border-width: #{$spinner-border-width};
--cui-spinner-animation-speed: #{$spinner-animation-speed};
--cui-spinner-animation-name: spinner-border;
```

Growing spinner variables:

```scss
--cui-spinner-width: #{$spinner-width};
--cui-spinner-height: #{$spinner-height};
--cui-spinner-vertical-align: #{$spinner-vertical-align};
--cui-spinner-animation-speed: #{$spinner-animation-speed};
--cui-spinner-animation-name: spinner-grow;
```

For both spinners, small spinner modifier classes are used to update the values of these CSS variables as needed. For example, the `.spinner-border-sm` class does the following:

```scss
--cui-spinner-width: #{$spinner-width-sm};
--cui-spinner-height: #{$spinner-height-sm};
--cui-spinner-border-width: #{$spinner-border-width-sm};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-spinner-width': '3rem',
  '--cui-spinner-height': '3rem',
}

return <CCallout style={customVars}>...</CCallout>
```

### SASS variables

```scss
$spinner-width:           2rem !default;
$spinner-height:          $spinner-width !default;
$spinner-vertical-align:  -.125em !default;
$spinner-border-width:    .25em !default;
$spinner-animation-speed: .75s !default;

$spinner-width-sm:        1rem !default;
$spinner-height-sm:       $spinner-width-sm !default;
$spinner-border-width-sm: .2em !default;
```

### Keyframes

Used for creating the CSS animations for our spinners. Included in `_spinners.scss`.

```scss
@keyframes spinner-border {
  to { transform: rotate(360deg) #{"/* rtl:ignore */"}; }
}
```

```scss
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
```
