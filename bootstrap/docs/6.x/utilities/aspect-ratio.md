# Bootstrap 6 Aspect Ratio

> Make an element hold an aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.

## Example

Add an aspect ratio class to the element you want to size — an `<iframe>`, a `<video>`, an `<img>`, or a plain `<div>`. The class sets the CSS `aspect-ratio` property, so the element sizes itself; there is no wrapper to add and no child to position.

```html
<iframe class="w-100 ratio-16x9" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
```

> **Pro-Tip!** You don't need `frameborder="0"` on your ``s as we override that for you in [Reboot](https://coreui.io/bootstrap/docs/content/reboot/).

## Aspect ratios

Swap the class for a different ratio. These come from the `$aspect-ratios` map:

```html
<div class="ratio-1x1">1x1</div>
<div class="ratio-4x3">4x3</div>
<div class="ratio-16x9">16x9</div>
<div class="ratio-21x9">21x9</div>
```

They pair with the [width utilities](https://coreui.io/bootstrap/docs/utilities/width/) — the ratio decides the height once the width is known.

## Custom ratios

The class sets `--cui-ratio` and a separate rule reads it, so a ratio the map does not name is an inline override away. Use `.ratio-auto` to opt in to the reading rule without picking a named ratio:

```html
<div class="w-25 ratio-auto" style="--cui-ratio: 2 / 1;">
  2x1
</div>
```

Because it is a custom property, it can also change across breakpoints:

```scss
.ratio-4x3 {
  @include media-breakpoint-up(md) {
    --cui-ratio: 2 / 1;
  }
}
```

```html
<div class="ratio-4x3">4x3, then 2x1</div>
```

## Customizing

### Sass maps

Each entry is one `.ratio-{key}` class and the ratio it sets. Add a key to define a ratio, or set one to `null` to drop it:

```scss
$aspect-ratios: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$aspect-ratios: defaults(
  (
    "auto":  auto,
    "1x1":   #{"1 / 1"},
    "4x3":   #{"4 / 3"},
    "16x9":  #{"16 / 9"},
    "21x9":  #{"21 / 9"}
  ),
  $aspect-ratios
);
```

### Utilities API

Aspect ratio utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
// Two halves: `.ratio-*` sets the token, and any element carrying such a class reads
// it. Splitting them is what lets `--cui-ratio` be overridden inline for a
// ratio the map does not name.
"aspect-ratio-attr": (
  selector: "attr-includes",
  class: "ratio-",
  property: aspect-ratio,
  values: var(--cui-ratio)
),
"aspect-ratio": (
  property: --cui-ratio,
  class: ratio,
  values: $aspect-ratios
),
```
