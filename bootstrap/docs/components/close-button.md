# Bootstrap 5 Close Button

> A generic close button for dismissing content like modals and alerts.

## Example

Provide an option to dismiss or close a component with `.btn-close`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default `background-image`. **Be sure to include text for screen readers**, as we've done with `aria-label`.

```html
<button type="button" class="btn-close" aria-label="Close"></button>
```

## Disabled state

Disabled close buttons change their `opacity`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

```html
<button type="button" class="btn-close" disabled aria-label="Close"></button>
```

## Dark variant

> **Heads up!** As of v5.0.0, the `.btn-close-white` class is deprecated. Instead, use `data-coreui-theme="dark"` to change the color mode of the close button.

Add `data-coreui-theme="dark"` to the `.btn-close`, or to its parent element, to invert the close button. This uses the `filter` property to invert the `background-image` without overriding its value.

```html
<div data-coreui-theme="dark">
  <button type="button" class="btn-close" aria-label="Close"></button>
  <button type="button" class="btn-close" disabled aria-label="Close"></button>
</div>
```

## Customizing

### SASS variables

```scss
$btn-close-width:            1em !default;
$btn-close-height:           $btn-close-width !default;
$btn-close-padding-x:        .25em !default;
$btn-close-padding-y:        $btn-close-padding-x !default;
$btn-close-color:            $black !default;
$btn-close-bg:               url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/></svg>") !default;
$btn-close-focus-shadow:     $focus-ring-box-shadow !default;
$btn-close-opacity:          .5 !default;
$btn-close-hover-opacity:    .75 !default;
$btn-close-focus-opacity:    1 !default;
$btn-close-disabled-opacity: .25 !default;
$btn-close-filter:           null !default;
$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%) !default; // Deprecated in v5.3.2
```
