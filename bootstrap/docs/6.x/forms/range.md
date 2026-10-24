# Bootstrap 6 Range

> Use our custom range inputs for consistent cross-browser styling, with an optional plugin that adds a filled track, a value tooltip and tick marks.

## Overview

Create custom `<input type="range" />` controls with `.form-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. This is the CSS-only form of the control: it needs no JavaScript and works in any markup the page already has.

```html
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">
```

For several thumbs on one track, a vertical orientation or ticks that move a thumb when pressed, use the [range slider](https://coreui.io/bootstrap/docs/forms/range-slider/), which builds this markup.

## Filled track

Only Firefox can fill the track up to the thumb from a stylesheet alone, and CSS cannot read an input's value. The fill is drawn a shade lighter than the thumb, at half the strength of `--cui-range-track-fill-bg`. So the filled track is a small **JavaScript component**: wrap an `<input class="form-range-input">` in `.form-range` and the plugin keeps a `--cui-range-fill` custom property (`0`–`1`) in sync on the wrapper, which the CSS uses to draw the fill, the value tooltip and the tick marks.

The `.form-range` wrapper owns the component's tokens, so the input and any decorations inherit them. Every wrapper with a `.form-range-input` inside is initialized automatically.

```html
<label for="range1" class="form-label">Example range</label>
<div class="form-range">
  <input type="range" class="form-range-input" id="range1">
</div>
```

The fill is a single custom property, so a static fill needs no plugin at all: set `--cui-range-fill` on the input yourself.

```html
<label for="rangeStatic" class="form-label">Static fill</label>
<input type="range" class="form-range" value="40" id="rangeStatic" style="--cui-range-fill: .4">
```

## Tooltip

Add `data-coreui-tooltips` to the wrapper to show a tooltip with the value that follows the thumb. It appears while the pointer is over the input, while the thumb is held, and while the input has focus. The plugin renders `<div class="form-range-tooltip tooltip bs-tooltip-top">` with `.tooltip-arrow` and `.tooltip-inner`, so it takes the look and the `--cui-tooltip-*` tokens of the [tooltip](https://coreui.io/bootstrap/docs/components/tooltip/) component; `tooltipClass` adds classes to it, for example a `theme-{color}`. `tooltipsFormat` may return HTML, which is sanitized, and its text becomes the input's `aria-valuetext`.

```html
<label for="rangeTooltip" class="form-label">Brightness</label>
<div class="form-range" data-coreui-tooltips>
  <input type="range" class="form-range-input" min="0" max="100" value="60" id="rangeTooltip">
</div>
```

Set `data-coreui-tooltips="always"` to keep the tooltip visible at all times.

```html
<label for="rangeTooltipAlways" class="form-label">Brightness</label>
<div class="form-range mt-5" data-coreui-tooltips="always">
  <input type="range" class="form-range-input" min="0" max="100" value="60" id="rangeTooltipAlways">
</div>
```

## Tick marks

Link a `<datalist>` to the input with the `list` attribute and the plugin renders a tick mark for each `<option>`, positioned at its value (even when the values are unevenly spaced). An `<option>`'s `label` is shown beneath its tick, and a labelled tick is drawn taller than an unlabelled one.

```html
<label for="rangeTicks" class="form-label">Temperature</label>
<div class="form-range">
  <input type="range" class="form-range-input" min="0" max="100" step="25" value="50" list="rangeTicksList" id="rangeTicks">
</div>
<datalist id="rangeTicksList">
  <option value="0" label="Cold"></option>
  <option value="25"></option>
  <option value="50" label="Mild"></option>
  <option value="75"></option>
  <option value="100" label="Hot"></option>
</datalist>
```

The `ticks` option draws ticks without a datalist, and combines with one: a number is a tick without a label at that value; an object sets `value`, `label`, `class` and `style`; a string, or an object without `value`, is a label placed by its position in the array, the first at `min` and the last at `max`. A comma-separated `data-coreui-ticks` attribute is a list of labels. While the thumb sits on a labelled tick, its `aria-valuetext` adds the label to the value, so a screen reader announces "50, Medium"; with `tooltipsFormat` the label follows the formatted text when the two differ.

```html
<label for="rangePriority" class="form-label">Priority</label>
<div class="form-range" data-coreui-ticks="Low, Medium, High">
  <input type="range" class="form-range-input" value="50" id="rangePriority">
</div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place. Both forms of the control work there.

```html
<div class="form-field">
  <label for="rangeField" class="form-label">Volume</label>
  <div class="form-range" data-coreui-tooltips>
    <input type="range" class="form-range-input" id="rangeField">
  </div>
  <div class="form-text">Applies to notification sounds only.</div>
</div>
```

## Disabled

Add the `disabled` boolean attribute on the input to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>
<label for="disabledRangeFill" class="form-label mt-4">Disabled range with a filled track</label>
<div class="form-range">
  <input type="range" class="form-range-input" value="40" id="disabledRangeFill" disabled>
</div>
```

## Min and max

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

```html
<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">
```

## Steps

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`.

```html
<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
```

## Theme variants

Color the thumb and the fill by adding a [`.theme-{color}` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) to the input or a wrapper.

## Usage

The plugin only runs on the wrapper form of the control. A bare `<input class="form-range">` is CSS only and never gets an instance.

### Via data attributes

Every `.form-range` wrapper that contains a `.form-range-input` is initialized on page load—no toggle attribute needed.

| Attribute | Description |
| --- | --- |
| `data-coreui-tooltips` | Add to the `.form-range` wrapper to show a [tooltip](#tooltip) with the value on hover, drag and focus; `"always"` keeps it visible. |
| `list` (on the input) + `<datalist>` | Renders [tick marks](#tick-marks) from the datalist options. |
| `data-coreui-ticks` | Renders [tick marks](#tick-marks) from a comma-separated list of labels. |

```html
<div class="form-range" data-coreui-tooltips>
  <input type="range" class="form-range-input" min="0" max="100" value="40">
</div>
```

### Via JavaScript

```js
const element = document.querySelector('.form-range')
const range = new coreui.Range(element, {
  tooltips: true,
  tooltipsFormat: value => `${value}%`
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-tooltips`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value](https://coreui.io/bootstrap/docs/getting-started/javascript#sanitizer) | Permitted tags and attributes in the HTML that `tooltipsFormat` returns. |
| `list` | string, null | `null` | `id` of a `<datalist>` whose options become tick marks, for an input that should not carry the `list` attribute itself (browsers snap a drag to the options of a linked datalist). |
| `sanitize` | boolean | `true` | Sanitizes the HTML that `tooltipsFormat` returns. |
| `sanitizeFn` | null, function | `null` | Replaces the built-in sanitizer. |
| `ticks` | array, boolean, string | `false` | Tick marks in addition to a linked datalist: numbers are ticks without a label at that value, objects set `value`, `label`, `class` and `style`, and strings (or objects without `value`) are labels placed by their position in the array, from `min` to `max`. |
| `tooltipClass` | string | `''` | Classes added to the tooltip. |
| `tooltips` | boolean, `'always'` | `false` | Shows a tooltip with the current value: `true` on hover, drag and focus, `'always'` at all times. |
| `tooltipsFormat` | function, null | `null` | `(value) => string` that formats the tooltip; HTML is sanitized, and the text becomes the input's `aria-valuetext`. |
| `track` | boolean, `'fill'` | `'fill'` | `false` leaves the track without the band. |

### Methods

| Method | Description |
| --- | --- |
| `dispose` | Destroys the instance, removes the tooltip and tick marks it created, and hands back the attributes and styles it set on the input and the wrapper. |
| `getInstance` | Static method which allows you to get the Range instance associated to a DOM element, you can use it like this: `coreui.Range.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a Range instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Range.getOrCreateInstance(element)` |
| `update` | Recomputes the fill and the tooltip from the input's current value. Useful after setting a value programmatically. |

### Events

| Event | Description |
| --- | --- |
| `changed.coreui.range` | Fired on the input when its value changes: on `input`, on `update()` after code set a new value, and on a form reset that moves it. A `change` after `input` with the same value, `update()` without a new value and the start do not fire it. The event's `value` property holds the current numeric value. |

```js
const input = document.querySelector('.form-range-input')

input.addEventListener('changed.coreui.range', event => {
  console.log('Value:', event.value)
})
```

## Customizing

### CSS variables

`.form-range` carries the tokens, whether it is the input itself or the wrapper. The pseudo-elements that draw the thumb and the track cannot be reached from a stylesheet of your own in every engine, so a token on the input is the way to restyle them:

```css
.form-range.brand {
  --cui-range-thumb-width: 1.5rem;
  --cui-range-track-height: .25rem;
  --cui-range-track-fill-bg: var(--cui-success-base);
}
```

`--cui-range-fill` is not a token: the plugin writes it on the wrapper and the CSS reads it, so setting it yourself is how a [static fill](#filled-track) works.

```scss
$form-range-tokens: defaults(
  (
    --cui-range-track-width: 100%,
    --cui-range-track-height: .5rem,
    --cui-range-track-cursor: pointer,
    --cui-range-track-bg: color-mix(in oklch, var(--cui-bg-2), var(--cui-bg-3)),
    --cui-range-track-border-radius: 1rem,
    --cui-range-track-box-shadow: var(--cui-box-shadow-inset),
    --cui-range-track-fill-bg: var(--cui-primary-base),
    --cui-range-track-disabled-bg: color-mix(in oklch, var(--cui-bg-4), var(--cui-fg-3)),
    --cui-range-thumb-width: 1rem,
    --cui-range-thumb-height: var(--cui-range-thumb-width),
    --cui-range-thumb-bg: var(--cui-primary-bg),
    --cui-range-thumb-border: 0,
    --cui-range-thumb-border-radius: 1rem,
    --cui-range-thumb-box-shadow: 0 .1rem .25rem color-mix(in oklch, var(--cui-black) 10%, transparent),
    --cui-range-thumb-active-bg: var(--cui-primary-bg-muted),
    --cui-range-thumb-disabled-bg: var(--cui-fg-3),
    --cui-range-thumb-transition-property: #{"background-color, border-color, box-shadow"},
    --cui-range-thumb-transition-duration: .15s,
    --cui-range-thumb-transition-timing: ease-in-out,
    --cui-range-thumb-focus-ring-width: var(--cui-focus-ring-width),
    --cui-range-tick-width: var(--cui-border-width),
    --cui-range-tick-height: .5rem,
    --cui-range-tick-minor-height: calc(var(--cui-range-tick-height) * .75),
    --cui-range-tick-bg: var(--cui-bg-4),
    --cui-range-tick-label-margin-top: .125rem,
    --cui-range-tick-label-font-size: var(--cui-font-size-sm),
    --cui-range-tick-label-color: var(--cui-fg-2),
  ),
  $form-range-tokens
);
```

### Sass mixins

Two mixins generate the vendor-specific styles for the range's track and thumb. Note that selectors for pseudo-elements in WebKit and Firefox cannot be combined—each must be used in a separate CSS rule otherwise the styles will not apply.

```scss
@mixin form-range-thumb() {
  inline-size: var(--cui-range-thumb-width);
  block-size: var(--cui-range-thumb-height);
  appearance: none;
  @include gradient-bg(var(--cui-theme-bg, var(--cui-range-thumb-bg)));
  border: var(--cui-range-thumb-border);
  @include border-radius(var(--cui-range-thumb-border-radius));
  @include box-shadow(var(--cui-range-thumb-box-shadow));
  @include transition-props(
    var(--cui-range-thumb-transition-property),
    var(--cui-range-thumb-transition-duration),
    var(--cui-range-thumb-transition-timing)
  );

  &:active {
    @include gradient-bg(var(--cui-theme-bg-muted, var(--cui-range-thumb-active-bg)));
  }
}

@mixin form-range-track() {
  // The plugins keep `--cui-range-fill` (0–1) in sync, and RangeSlider `--cui-range-fill-start`; unset, the band is empty.
  --cui-range-fill-start-edge: calc(var(--cui-range-thumb-width) * .5 + var(--cui-range-fill-start) * (100% - var(--cui-range-thumb-width)));
  --cui-range-fill-edge: calc(var(--cui-range-thumb-width) * .5 + var(--cui-range-fill) * (100% - var(--cui-range-thumb-width)));

  inline-size: var(--cui-range-track-width);
  block-size: var(--cui-range-track-height);
  color: transparent;
  cursor: var(--cui-range-track-cursor);
  background-color: var(--cui-range-track-bg);
  background-image:
    linear-gradient(
      var(--cui-range-track-direction, to right),
      transparent var(--cui-range-fill-start-edge, 0),
      color-mix(in oklch, var(--cui-theme-bg, var(--cui-range-track-fill-bg)) 50%, transparent) var(--cui-range-fill-start-edge, 0),
      color-mix(in oklch, var(--cui-theme-bg, var(--cui-range-track-fill-bg)) 50%, transparent) var(--cui-range-fill-edge, 0),
      transparent var(--cui-range-fill-edge, 0)
    );
  border-color: transparent;
  @include border-radius(var(--cui-range-track-border-radius));
  @include box-shadow(var(--cui-range-track-box-shadow));
}
```
