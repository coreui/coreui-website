# Bootstrap 6 Checkbox

> Create consistent cross-browser and cross-device checkboxes with CoreUI's custom checkbox component.

## Approach

Put `.check` on the `<input type="checkbox">`. That is the whole control — no wrapper, no extra element. Checkboxes are for selecting one or several options in a list; for one option out of many, reach for a [radio](https://coreui.io/bootstrap/docs/forms/radio/).

The input and its `<label>` stay siblings rather than the input sitting inside the label, so the label can be styled from the input's state (`:checked`, `:disabled`) with the sibling selector. Relate them with `id` and `for`, and reach for [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) when you want the label, a description and validation feedback laid out for you.

The check and indeterminate marks are drawn with a CSS mask on the input's own `::before`, which is why their colour is a token (`--cui-check-mark-color`) rather than a value baked into an SVG.

## Basic checkbox

```html
<div class="form-field">
  <input class="check" type="checkbox" value="" id="checkDefault">
  <label for="checkDefault">Default checkbox</label>
</div>
<div class="form-field">
  <input class="check" type="checkbox" value="" id="checkChecked" checked>
  <label for="checkChecked">Checked checkbox</label>
</div>
```

## Indeterminate

Checkboxes can use the `:indeterminate` pseudo-class when it is set from JavaScript — there is no HTML attribute for it.

```html
<div class="form-field">
  <input class="check" type="checkbox" value="" id="checkIndeterminate">
  <label for="checkIndeterminate">Indeterminate checkbox</label>
</div>
```

## Disabled

Add the `disabled` attribute; the associated `<label>` is styled to match, in a lighter color, to indicate the state.

```html
<div class="form-field">
  <input class="check" type="checkbox" value="" id="checkDisabled" disabled>
  <label for="checkDisabled">Disabled checkbox</label>
</div>
<div class="form-field">
  <input class="check" type="checkbox" value="" id="checkCheckedDisabled" checked disabled>
  <label for="checkCheckedDisabled">Disabled checked checkbox</label>
</div>
```

## Stacked

Any number of checkboxes that are immediate siblings stack vertically and are spaced by `.form-field`.

```html
<div class="form-field">
  <input class="check" type="checkbox" value="" id="defaultCheck1">
  <label for="defaultCheck1">Default checkbox</label>
</div>
<div class="form-field">
  <input class="check" type="checkbox" value="" id="defaultCheck2" disabled>
  <label for="defaultCheck2">Disabled checkbox</label>
</div>
```

## Inline

There is no inline modifier: the control is an inline element, so a row is a flex container with a gap.

```html
<div class="d-flex gap-4">
  <div class="form-field">
    <input class="check" type="checkbox" id="inlineCheckbox1" value="option1">
    <label for="inlineCheckbox1">1</label>
  </div>
  <div class="form-field">
    <input class="check" type="checkbox" id="inlineCheckbox2" value="option2">
    <label for="inlineCheckbox2">2</label>
  </div>
  <div class="form-field">
    <input class="check" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
    <label for="inlineCheckbox3">3 (disabled)</label>
  </div>
</div>
```

## Sizing

`.check-sm` and `.check-lg` size the whole row — the box, its label, and the space they sit in. Each sets one font size: the box is `1em`, so it follows, and so does the alignment margin, which is computed from the line. Nothing needs re-tuning per size, and a size of your own is one custom property.

```html
<div class="d-flex align-items-start gap-4">
  <div class="form-field">
    <input class="check check-sm" type="checkbox" id="checkSm" checked>
    <label for="checkSm">Small</label>
  </div>
  <div class="form-field">
    <input class="check" type="checkbox" id="checkMd" checked>
    <label for="checkMd">Default</label>
  </div>
  <div class="form-field">
    <input class="check check-lg" type="checkbox" id="checkLg" checked>
    <label for="checkLg">Large</label>
  </div>
</div>
```

Any other size is one custom property, and the alignment follows it:

```html
<input class="check" type="checkbox" style="--cui-check-size: 2em" aria-label="...">
```

## Without a label

A checkbox with no label text is the input on its own. Give it an accessible name some other way — `aria-label`, for instance. The name says what the checkbox does, like `aria-label="Select all rows"`, and replaces the `...` placeholder in the example below. See the [forms overview](https://coreui.io/bootstrap/docs/forms/overview/#accessibility) for details.

```html
<input class="check" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <input class="check" type="checkbox" value="" id="fieldCheck">
  <label for="fieldCheck">Subscribe to the newsletter</label>
  <div class="form-text">We send one email a month, and never share your address.</div>
</div>
```
## Description

Add a description after the label and wrap both in a `.form-field-content`, so the description sits under the label rather than beside the checkbox.

```html
<div class="form-field">
  <input type="checkbox" id="checkDescription" class="check" checked />
  <div class="form-field-content">
    <label for="checkDescription">Example checkbox</label>
    <small class="form-text">Supporting description for the label above.</small>
  </div>
</div>
```

## Toggle buttons

Create button-like checkboxes by putting `.btn-check` on a `<label>` with the button classes, and nesting the input inside it. The label is the button, so there is no `id`/`for` pair to keep in sync. They can be grouped in a [button group](https://coreui.io/bootstrap/docs/components/button-group/).

```html
<label class="btn-solid theme-primary btn-check">
  <input type="checkbox" autocomplete="off">
  Single toggle
</label>

<label class="btn-solid theme-primary btn-check">
  <input type="checkbox" checked autocomplete="off">
  Checked
</label>

<label class="btn-solid theme-primary btn-check">
  <input type="checkbox" disabled autocomplete="off">
  Disabled
</label>
```

```html
<label class="btn-outline theme-primary btn-check">
  <input type="checkbox" autocomplete="off">
  Single toggle
</label>

<label class="btn-outline theme-secondary btn-check">
  <input type="checkbox" checked autocomplete="off">
  Checked
</label>
```

> Visually, these checkbox toggle buttons are identical to the [button plugin toggle buttons](https://coreui.io/bootstrap/docs/components/button/#button-plugin). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas the button plugin toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.

## Deprecated markup

_Deprecated in 6.0.0._

The v5 spelling — `.form-check` wrapping a `.form-check-input` and a `.form-check-label`, with `.form-check-inline` — still works and lays out exactly as it did; it is an alias of the new controls now rather than a second implementation. It ships in the opt-in [`coreui-legacy.css`](https://coreui.io/bootstrap/docs/getting-started/install/#v5-compatibility-css) rather than in `coreui.css`, and is removed in v7.

`.form-check-reverse` is **gone**. It right-flushed the label and the control as a pair, and it was never the settings row — label on the left, control on the right — people reach for. That row is `justify-content: space-between` on the field.

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="deprecatedCheck" checked>
  <label class="form-check-label" for="deprecatedCheck">
    Deprecated markup
  </label>
</div>
```

```diff
- <div class="form-check">
-   <input class="form-check-input" type="checkbox" id="c">
-   <label class="form-check-label" for="c">Label</label>
- </div>
+ <div class="form-field">
+   <input class="check" type="checkbox" id="c">
+   <label for="c">Label</label>
+ </div>
```

The v5 toggle button — `.btn-check` on the input, with a sibling `.btn` label tied to it by `id`/`for` — also still works and renders identically.

See the [v6 migration guide](https://coreui.io/bootstrap/docs/migration/v6/) for the full picture.

## Theme variants

Modify the appearance of checked checkboxes by adding a [`.theme-{color}` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) to the `.check` input, or to any element above it. This sets the checked background and border color to the theme color.

## Customizing

### CSS variables

Checkboxes read their own custom properties, so restyling one control does not touch the other two. Set them on the control itself — an ancestor cannot override a token the element declares for itself.

```scss
$check-tokens: defaults(
  (
    --cui-check-size: var(--cui-control-size),
    --cui-check-bg: var(--cui-btn-input-bg),
    --cui-check-border: var(--cui-border-width) solid var(--cui-border-color),
    --cui-check-border-radius: .25em,
    --cui-check-mark-color: var(--cui-primary-contrast),
    --cui-check-mark-checked: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/></svg>"))},
    --cui-check-mark-indeterminate: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>"))},
    --cui-check-checked-bg: var(--cui-control-checked-bg),
    --cui-check-checked-border-color: var(--cui-control-checked-border-color),
    --cui-check-indeterminate-bg: var(--cui-control-indeterminate-bg),
    --cui-check-indeterminate-border-color: var(--cui-control-indeterminate-border-color),
    --cui-check-disabled-opacity: var(--cui-control-disabled-opacity),
    --cui-check-margin-top: calc((var(--cui-body-line-height) * 1em - var(--cui-check-size)) * .5),
    --cui-check-active-filter: var(--cui-control-active-filter),
    --cui-check-label-disabled-opacity: var(--cui-control-label-disabled-opacity),
  ),
  $check-tokens
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

### Sass maps

Each entry is one size class, and the same map drives both `.check-{size}` and `.radio-{size}` — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$check-sizes: defaults(
  (
    sm: (size: .875rem, margin-top: .21875rem, font-size: var(--cui-font-size-sm)),
    lg: (size: 1.25rem, margin-top: .3125rem, font-size: var(--cui-font-size-lg))
  ),
  $check-sizes
);
```
