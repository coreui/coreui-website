# Bootstrap 6 Radio

> Create consistent cross-browser and cross-device radio buttons with CoreUI's custom radio component.

## Approach

Put `.radio` on the `<input type="radio">`. That is the whole control — no wrapper, no extra element. Radios are for selecting one option out of many; to select several, reach for a [checkbox](https://coreui.io/bootstrap/docs/forms/checkbox/).

The input and its `<label>` stay siblings rather than the input sitting inside the label, so the label can be styled from the input's state. Relate them with `id` and `for`, and reach for [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) when you want the label, a description and validation feedback laid out for you. The dot is a CSS mask on the input's own `::before`, so its colour is a token.

Radios in the same group share a `name` attribute; that is what makes them mutually exclusive.

## Basic radio

```html
<div class="form-field">
  <input class="radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label for="flexRadioDefault1">Default radio</label>
</div>
<div class="form-field">
  <input class="radio" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label for="flexRadioDefault2">Default checked radio</label>
</div>
```

## Disabled

Add the `disabled` attribute; the associated `<label>` is styled to match, in a lighter color, to indicate the state.

```html
<div class="form-field">
  <input class="radio" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
  <label for="flexRadioDisabled">Disabled radio</label>
</div>
<div class="form-field">
  <input class="radio" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
  <label for="flexRadioCheckedDisabled">Disabled checked radio</label>
</div>
```

## Stacked

Any number of radios that are immediate siblings stack vertically and are spaced by `.form-field`.

```html
<div class="form-field">
  <input class="radio" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label for="exampleRadios1">Default radio</label>
</div>
<div class="form-field">
  <input class="radio" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label for="exampleRadios2">Second default radio</label>
</div>
<div class="form-field">
  <input class="radio" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label for="exampleRadios3">Disabled radio</label>
</div>
```

## Inline

There is no inline modifier: the control is an inline element, so a row is a flex container with a gap. Wrap the group in `.d-flex.gap-4`.

```html
<div class="d-flex gap-4">
  <div class="form-field">
    <input class="radio" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
    <label for="inlineRadio1">1</label>
  </div>
  <div class="form-field">
    <input class="radio" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
    <label for="inlineRadio2">2</label>
  </div>
  <div class="form-field">
    <input class="radio" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
    <label for="inlineRadio3">3 (disabled)</label>
  </div>
</div>
```

## Sizing

`.radio-sm` and `.radio-lg` size the whole row — the box, its label, and the space they sit in. Each sets one font size: the box is `1em`, so it follows, and so does the alignment margin, which is computed from the line. Nothing needs re-tuning per size, and a size of your own is one custom property.

```html
<div class="d-flex align-items-start gap-4">
  <div class="form-field">
    <input class="radio radio-sm" type="radio" name="sizeRadio" id="radioSm" checked>
    <label for="radioSm">Small</label>
  </div>
  <div class="form-field">
    <input class="radio" type="radio" name="sizeRadio" id="radioMd" checked>
    <label for="radioMd">Default</label>
  </div>
  <div class="form-field">
    <input class="radio radio-lg" type="radio" name="sizeRadio" id="radioLg" checked>
    <label for="radioLg">Large</label>
  </div>
</div>
```

Any other size is one custom property, and the alignment follows it:

```html
<input class="radio" type="radio" style="--cui-radio-size: 2em" aria-label="...">
```

## Without a label

A radio with no label text is the input on its own. Give it an accessible name some other way — `aria-label`, for instance. The name says what the option is, like `aria-label="Red"` in a color picker, and replaces the `...` placeholder in the example below. See the [forms overview](https://coreui.io/bootstrap/docs/forms/overview/#accessibility) for details.

```html
<input class="radio" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place. Nest one `.form-field` per radio inside an outer one to give the whole group a shared label.

```html
<div class="form-field">
  <span class="form-label">Delivery</span>
  <div class="form-field">
    <input class="radio" type="radio" name="fieldRadio" id="fieldRadio1" checked>
    <label for="fieldRadio1">Standard</label>
    <div class="form-text">Three to five working days.</div>
  </div>
  <div class="form-field">
    <input class="radio" type="radio" name="fieldRadio" id="fieldRadio2">
    <label for="fieldRadio2">Express</label>
    <div class="form-text">Next working day, where available.</div>
  </div>
</div>
```
## Description

Add a description after the label and wrap both in a `.form-field-content`, so the description sits under the label rather than beside the radio.

```html
<div class="form-field">
  <input type="radio" id="radioDescription" class="radio" name="radioDescription" checked />
  <div class="form-field-content">
    <label for="radioDescription">Example radio</label>
    <small class="form-text">Supporting description for the label above.</small>
  </div>
</div>
```

## Toggle buttons

Create button-like radios by putting `.btn-check` on a `<label>` with the button classes, and nesting the input inside it. The label is the button, so there is no `id`/`for` pair to keep in sync. They can be grouped in a [button group](https://coreui.io/bootstrap/docs/components/button-group/).

```html
<label class="btn-solid theme-secondary btn-check">
  <input type="radio" name="options" checked autocomplete="off">
  Checked
</label>

<label class="btn-solid theme-secondary btn-check">
  <input type="radio" name="options" autocomplete="off">
  Radio
</label>

<label class="btn-solid theme-secondary btn-check">
  <input type="radio" name="options" disabled autocomplete="off">
  Disabled
</label>
```

```html
<label class="btn-outline theme-success btn-check">
  <input type="radio" name="options-outlined" checked autocomplete="off">
  Checked success radio
</label>

<label class="btn-outline theme-danger btn-check">
  <input type="radio" name="options-outlined" autocomplete="off">
  Danger radio
</label>
```

## Deprecated markup

_Deprecated in 6.0.0._

The v5 spelling — `.form-check` wrapping a `.form-check-input` and a `.form-check-label` — still works and renders exactly as it did. It ships in the opt-in [`coreui-legacy.css`](https://coreui.io/bootstrap/docs/getting-started/install/#v5-compatibility-css) rather than in `coreui.css`, and is removed in v7.

```diff
- <div class="form-check">
-   <input class="form-check-input" type="radio" name="r" id="r1">
-   <label class="form-check-label" for="r1">Label</label>
- </div>
+ <div class="form-field">
+   <input class="radio" type="radio" name="r" id="r1">
+   <label for="r1">Label</label>
+ </div>
```

The v5 toggle button — `.btn-check` on the input, with a sibling `.btn` label tied to it by `id`/`for` — also still works and renders identically.

See the [v6 migration guide](https://coreui.io/bootstrap/docs/migration/v6/) for the full picture.

## Theme variants

Modify the appearance of checked radios by adding a [`.theme-{color}` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) to the `.radio` input, or to any element above it. This sets the checked background and border color to the theme color.

## Customizing

### CSS variables

Radios read their own custom properties, so restyling one control does not touch the other two. Set them on the control itself — an ancestor cannot override a token the element declares for itself.

```scss
$radio-tokens: defaults(
  (
    --cui-radio-size: var(--cui-control-size),
    --cui-radio-bg: var(--cui-btn-input-bg),
    --cui-radio-border: var(--cui-border-width) solid var(--cui-border-color),
    --cui-radio-border-radius: 50%,
    --cui-radio-checked-bg: var(--cui-control-checked-bg),
    --cui-radio-checked-border-color: var(--cui-control-checked-border-color),
    --cui-radio-mark-color: var(--cui-primary-contrast),
    --cui-radio-mark: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='black'/></svg>"))},
    --cui-radio-disabled-opacity: var(--cui-control-disabled-opacity),
    --cui-radio-margin-top: calc((var(--cui-body-line-height) * 1em - var(--cui-radio-size)) * .5),
    --cui-radio-active-filter: var(--cui-control-active-filter),
    --cui-radio-label-disabled-opacity: var(--cui-control-label-disabled-opacity),
  ),
  $radio-tokens
);
```

### Sass maps

Each size is one entry, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$radio-sizes: defaults(
  (
    sm: (size: .875rem, margin-top: .21875rem, font-size: var(--cui-font-size-sm)),
    lg: (size: 1.25rem, margin-top: .3125rem, font-size: var(--cui-font-size-lg))
  ),
  $radio-sizes
);
```

### Shared variables

The checkbox, the radio and the switch share their size and their focus, active and disabled states. Those live on `:root` as `--cui-control-*`, so one declaration retunes all three at runtime:

```scss
--cui-control-size: 1em,
--cui-control-checked-bg: var(--cui-primary-base),
--cui-control-checked-border-color: var(--cui-primary-base),
--cui-control-indeterminate-bg: var(--cui-primary-base),
--cui-control-indeterminate-border-color: var(--cui-primary-base),
--cui-control-active-filter: brightness(90%),
--cui-control-focus-border-color: var(--cui-btn-input-focus-border-color),
--cui-control-disabled-bg: var(--cui-bg-3),
--cui-control-disabled-opacity: .5,
--cui-control-label-disabled-opacity: .5,
--cui-control-transition-duration: .15s,
--cui-control-transition-timing: cubic-bezier(.34, 1.56, .64, 1),
```
