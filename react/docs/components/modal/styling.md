# React Modal Component Styling

> Learn how to customize the React Modal component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Modal supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-modal-zindex: #{$zindex-modal};
--cui-modal-width: #{$modal-md};
--cui-modal-padding: #{$modal-inner-padding};
--cui-modal-margin: #{$modal-dialog-margin};
--cui-modal-color: #{$modal-content-color};
--cui-modal-bg: #{$modal-content-bg};
--cui-modal-border-color: #{$modal-content-border-color};
--cui-modal-border-width: #{$modal-content-border-width};
--cui-modal-border-radius: #{$modal-content-border-radius};
--cui-modal-box-shadow: #{$modal-content-box-shadow-xs};
--cui-modal-inner-border-radius: #{$modal-content-inner-border-radius};
--cui-modal-header-padding-x: #{$modal-header-padding-x};
--cui-modal-header-padding-y: #{$modal-header-padding-y};
--cui-modal-header-padding: #{$modal-header-padding}; // Todo in v6: Split this padding into x and y
--cui-modal-header-border-color: #{$modal-header-border-color};
--cui-modal-header-border-width: #{$modal-header-border-width};
--cui-modal-title-line-height: #{$modal-title-line-height};
--cui-modal-footer-gap: #{$modal-footer-margin-between};
--cui-modal-footer-bg: #{$modal-footer-bg};
--cui-modal-footer-border-color: #{$modal-footer-border-color};
--cui-modal-footer-border-width: #{$modal-footer-border-width};
```

```scss
--cui-backdrop-zindex: #{$zindex-modal-backdrop};
--cui-backdrop-bg: #{$modal-backdrop-bg};
--cui-backdrop-opacity: #{$modal-backdrop-opacity};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-modal-color': '#555',
  '--cui-modal-bg': '#efefef',
}

return <CModal style={customVars}>{/* Modal content */}</CModal>
```

### SASS variables

```scss
$modal-inner-padding:               $spacer !default;

$modal-footer-margin-between:       .5rem !default;

$modal-dialog-margin:               .5rem !default;
$modal-dialog-margin-y-sm-up:       1.75rem !default;

$modal-title-line-height:           $line-height-base !default;

$modal-content-color:               var(--cui-body-color) !default;
$modal-content-bg:                  var(--cui-body-bg) !default;
$modal-content-border-color:        var(--cui-border-color-translucent) !default;
$modal-content-border-width:        var(--cui-border-width) !default;
$modal-content-border-radius:       var(--cui-border-radius-lg) !default;
$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;
$modal-content-box-shadow-xs:       var(--cui-box-shadow-sm) !default;
$modal-content-box-shadow-sm-up:    var(--cui-box-shadow) !default;

$modal-backdrop-bg:                 $black !default;
$modal-backdrop-opacity:            .5 !default;

$modal-header-border-color:         var(--cui-border-color) !default;
$modal-header-border-width:         $modal-content-border-width !default;
$modal-header-padding-y:            $modal-inner-padding !default;
$modal-header-padding-x:            $modal-inner-padding !default;
$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility

$modal-footer-bg:                   null !default;
$modal-footer-border-color:         $modal-header-border-color !default;
$modal-footer-border-width:         $modal-header-border-width !default;

$modal-sm:                          300px !default;
$modal-md:                          500px !default;
$modal-lg:                          800px !default;
$modal-xl:                          1140px !default;

$modal-fade-transform:              translate(0, -50px) !default;
$modal-show-transform:              none !default;
$modal-transition:                  transform .3s ease-out !default;
$modal-scale-transform:             scale(1.02) !default;
```

### SASS loops

[Responsive fullscreen modals](#fullscreen-modal) are generated via the `$breakpoints` map and a loop in `scss/_modal.scss`.

```scss
@each $breakpoint in map.keys($grid-breakpoints) {
  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);
  // stylelint-disable-next-line scss/at-function-named-arguments
  $postfix: if(sass($infix != ""): $infix + "-down"; else: "");

  @include media-breakpoint-down($breakpoint) {
    .modal-fullscreen#{$postfix} {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;

      .modal-content {
        height: 100%;
        border: 0;
        @include border-radius(0);
      }

      .modal-header,
      .modal-footer {
        @include border-radius(0);
      }

      .modal-body {
        overflow-y: auto;
      }
    }
  }
}
```
