# React Font weight Utilities

> Change the weight of text, and add a step to the scale without rewriting the map.

## Font weight

Quickly change the `font-weight` of text. `font-weight` utilities are abbreviated as `.fw-*`.

```html
<p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p className="fw-semibold">Semibold weight text.</p>
<p className="fw-medium">Medium weight text.</p>
<p className="fw-normal">Normal weight text.</p>
<p className="fw-light">Light weight text.</p>
<p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
```

## Adding a weight

_Added in 6.0.0._

The weights come from one `$font-weights` map, which generates the `.fw-*` classes and a `--cui-font-weight-{name}` custom property each. Adding a step therefore adds its utility:

```scss
@use "@coreui/coreui-pro" with (
  $font-weights: map.merge($font-weights, ("black": 900))
);
```

`map.merge` matters here — assigning the map plainly replaces it, and the other six weights go with it.

Components read the tokens rather than a build-time copy, so raising a weight at runtime reaches them:

```css
:root {
  --cui-font-weight-semibold: 650;
}
```

## Customizing

### Sass maps

Each entry is one weight: the key names the `.fw-*` class and the matching `--cui-font-weight-*` token, and `null` drops both.

```scss
$font-weights: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$font-weights: defaults(
  (
    lighter: lighter,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    bolder: bolder
  ),
  $font-weights
);
```

### Utilities API

Font weight utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"font-weight": (
  property: font-weight,
  class: fw,
  values: $font-weights
),
```
