# Bootstrap 5 Callout

> Callouts provide presentation of content in a visually distinct manner. Includes a heading, icon and typically text-based content.

## Examples

Callout component is prepared for any length of text, as well as an optional elements like icons, headings, etc. For a styling, use one of the **required** contextual classes (e.g., `.callout-success`).

> ##### Conveying meaning to assistive technologies
> 
> Relying on color to convey meaning creates a visual cue that assistive technologies, like screen readers, cannot perceive. It's essential that any information represented by color is either apparent from the content itself (e.g., the visible text) or supplemented by alternative methods, such as extra text using the `.visually-hidden` class.

## Customizing

### CSS variables

Callouts use local CSS variables on `.callout` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-callout-padding-x: #{$callout-padding-x};
--cui-callout-padding-y: #{$callout-padding-y};
--cui-callout-margin-x: #{$callout-margin-x};
--cui-callout-margin-y: #{$callout-margin-y};
--cui-callout-border-width: #{$callout-border-width};
--cui-callout-border-color: #{$callout-border-color};
--cui-callout-border-left-width: #{$callout-border-left-width};
--cui-callout-border-radius: #{$callout-border-radius};
```

### SASS variables

```scss
$callout-padding-y:                 $spacer !default;
$callout-padding-x:                 $spacer !default;
$callout-margin-y:                  $spacer !default;
$callout-margin-x:                  0 !default;
$callout-border-radius:             var(--cui-border-radius) !default;
$callout-border-width:              var(--cui-border-width) !default;
$callout-border-color:              var(--cui-border-color) !default;
$callout-border-left-width:         calc(#{$callout-border-width} * 4) !default; // stylelint-disable-line function-disallowed-list

$callout-variants: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "danger":     $danger,
  "warning":    $warning,
  "info":       $info,
  "light":      $light,
  "dark":       $dark
) !default;
```

#### Variants

Check out [our Sass maps and loops docs](https://coreui.io/bootstrap/docs/customize/sass/#maps-and-loops) for how to customize these loops and extend CoreUI's base-modifier approach to your own code.

#### Modifiers

CoreUI's callout component is built with a base-modifier class approach. This means the bulk of the styling is contained to a base class `.callout` while style variations are confined to modifier classes (e.g., `.callout-danger`). These modifier classes are built from the `$callout-variants` map to make customizing the number and name of our modifier classes.

```scss
// Generate contextual modifier classes for colorizing the collor.
@each $state, $value in $callout-variants {
  .callout-#{$state} {
    --cui-callout-border-left-color: #{$value};
  }
}
```
