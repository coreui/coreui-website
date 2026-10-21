# Bootstrap 6 Switch

> Render a checkbox as a toggle switch with CoreUI's switch component, in four sizes.

## Approach

A switch is a [checkbox](https://coreui.io/bootstrap/docs/forms/checkbox/) drawn as a track and a thumb: put `.switch` on the `<input type="checkbox">` instead of `.check`. The thumb is the input's own `::before`, so its colour is a token rather than a fill inside an SVG — which is also what let the separate dark-mode artwork go.

Add `role="switch"` to convey the nature of the control to assistive technologies that support the role. Older ones announce it as a plain checkbox, which is a fair fallback. Switches support `disabled` like any checkbox.

## Basic switch

```html
<div class="form-field">
  <input class="switch" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-field">
  <input class="switch" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
  <label for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
```

## Disabled

```html
<div class="form-field">
  <input class="switch" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
  <label for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-field">
  <input class="switch" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
  <label for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
```

## Sizing

`.switch-sm`, `.switch-lg` and `.switch-xl` size the whole row — the track, its thumb, and the label beside it — the way [`.check-sm`](https://coreui.io/bootstrap/docs/forms/checkbox/#sizing) and [`.radio-lg`](https://coreui.io/bootstrap/docs/forms/radio/#sizing) do.

Each sets **one** custom property. The track's width follows its height through the aspect ratio, the thumb follows the height minus the padding, and the alignment margin is computed from the line — so nothing needs re-tuning per size.

```html
<div class="form-field">
  <input class="switch switch-sm" type="checkbox" role="switch" id="flexSwitchCheckSizeSm" checked>
  <label for="flexSwitchCheckSizeSm">Small switch checkbox input</label>
</div>
<div class="form-field">
  <input class="switch" type="checkbox" role="switch" id="flexSwitchCheckSizeDefault" checked>
  <label for="flexSwitchCheckSizeDefault">Default switch checkbox input</label>
</div>
<div class="form-field">
  <input class="switch switch-lg" type="checkbox" role="switch" id="flexSwitchCheckDefaultLg" checked>
  <label for="flexSwitchCheckDefaultLg">Large switch checkbox input</label>
</div>
<div class="form-field">
  <input class="switch switch-xl" type="checkbox" role="switch" id="flexSwitchCheckDefaultXl" checked>
  <label for="flexSwitchCheckDefaultXl">Extra large switch checkbox input</label>
</div>
```

Any other size is that one property:

```html
<input class="switch" type="checkbox" role="switch" style="--cui-switch-height: 2rem" aria-label="...">
```

`--cui-switch-width` defaults to `calc(var(--cui-switch-height) * 1.75)`, so redefining it against the height changes the proportion of every size at once.
## Custom width

The switch reads its size from two tokens, so a wider switch with a larger thumb is two declarations — no new class.

```html
<div class="form-field">
  <div class="switch" style="--cui-switch-width: 2.75rem; --cui-switch-thumb-size: 1.5rem;">
    <input type="checkbox" id="switchCustomWidth" role="switch" switch checked>
  </div>
  <label for="switchCustomWidth">Custom width switch</label>
</div>
```

## Without a label

A switch with no label text is the input on its own. Give it an accessible name some other way — `aria-label`, for instance. The name says what the switch turns on or off, like `aria-label="Email notifications"`, and replaces the `...` placeholder in the example below. See the [forms overview](https://coreui.io/bootstrap/docs/forms/overview/#accessibility) for details.

```html
<input class="switch" type="checkbox" role="switch" id="switchNoLabel" aria-label="...">
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <input class="switch" type="checkbox" role="switch" id="fieldSwitch">
  <label for="fieldSwitch">Email notifications</label>
  <div class="form-text">Turn this off and we will only contact you about your account.</div>
</div>
```

## Deprecated markup

_Deprecated in 6.0.0._

The v5 spelling — `.form-check.form-switch` wrapping a `.form-check-input`, with `.form-switch-lg` / `-xl` for size — still works and renders exactly as it did. It ships in the opt-in [`coreui-legacy.css`](https://coreui.io/bootstrap/docs/getting-started/install/#v5-compatibility-css) rather than in `coreui.css`, and is removed in v7.

```diff
- <div class="form-check form-switch">
-   <input class="form-check-input" type="checkbox" role="switch" id="s">
-   <label class="form-check-label" for="s">Label</label>
- </div>
+ <div class="form-field">
+   <input class="switch" type="checkbox" role="switch" id="s">
+   <label for="s">Label</label>
+ </div>
```

See the [v6 migration guide](https://coreui.io/bootstrap/docs/migration/v6/) for the full picture.

## Theme variants

Modify the appearance of checked switches by adding a [`.theme-{color}` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) to the `.switch` input, or to any element above it. This sets the checked background and border color to the theme color.

## Customizing

### CSS variables

Switches read their own custom properties, so restyling one control does not touch the other two. Set them on the control itself — an ancestor cannot override a token the element declares for itself.

```scss
$switch-tokens: defaults(
  (
    --cui-switch-width: calc(var(--cui-switch-height) * 1.75),
    --cui-switch-height: 1.25rem,
    --cui-switch-border-radius: var(--cui-radius-pill),
    --cui-switch-transition-duration: var(--cui-control-transition-duration),
    --cui-switch-transition-timing: var(--cui-control-transition-timing),
    --cui-switch-bg: var(--cui-bg-3),
    --cui-switch-box-shadow: inset 0 1px 2px color-mix(in oklch, var(--cui-black) 5%, transparent),
    --cui-switch-border-width: var(--cui-border-width),
    --cui-switch-border-color: var(--cui-border-color),
    --cui-switch-padding: .0625rem,
    --cui-switch-thumb-bg: var(--cui-white),
    --cui-switch-thumb-size: calc(var(--cui-switch-height) - var(--cui-switch-padding) * 2 - var(--cui-switch-border-width) * 2),
    --cui-switch-thumb-shadow: 0 1px 2px color-mix(in oklch, var(--cui-black) 10%, transparent),
    --cui-switch-checked-bg: var(--cui-control-checked-bg),
    --cui-switch-checked-border-color: var(--cui-control-checked-border-color),
    --cui-switch-checked-thumb-bg: var(--cui-primary-contrast),
    --cui-switch-disabled-bg: var(--cui-control-disabled-bg),
    --cui-switch-disabled-thumb-bg: var(--cui-fg-3),
    --cui-switch-disabled-opacity: var(--cui-control-disabled-opacity),
    --cui-switch-margin-top: calc((var(--cui-body-line-height) * 1em - var(--cui-switch-height)) * .5),
    --cui-switch-active-filter: var(--cui-control-active-filter),
    --cui-switch-label-disabled-opacity: var(--cui-control-label-disabled-opacity),
  ),
  $switch-tokens
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

Each entry is one `.switch-{size}` class with its own height and font size, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$switch-sizes: defaults(
  (
    sm: (height: 1rem,    font-size: var(--cui-font-size-sm)),
    lg: (height: 1.5rem,  font-size: var(--cui-font-size-lg)),
    xl: (height: 1.75rem, font-size: var(--cui-font-size-lg))
  ),
  $switch-sizes
);
```

The second map lists which of those sizes also answer to the deprecated `.form-switch-{size}` spelling. It holds names only — the heights come from the map above — so a size you add is reachable under the current spelling without appearing here:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$form-switch-sizes: defaults(
  ("lg", "xl"),
  $form-switch-sizes
);
```
