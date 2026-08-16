# Bootstrap 5 Range

> Use our custom range inputs for consistent cross-browser styling and built-in customization.

## Overview

Create custom `<input type="range" />` controls with `.form-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Firefox supports "filling" their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.

```html
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>
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

## Output value

The value of the range input can be shown using the `output` element and a bit of JavaScript.

```html
<label for="customRange4" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="100" value="50" id="customRange4">
<output for="customRange4" id="rangeValue" aria-hidden="true"></output>
<script>
  // This is an example script, please modify as needed
  const rangeInput = document.getElementById('customRange4');
  const rangeOutput = document.getElementById('rangeValue');
  // Set initial value
  rangeOutput.textContent = rangeInput.value;
  rangeInput.addEventListener('input', function() {
    rangeOutput.textContent = this.value;
  });
</script>
```

## Customizing

### SASS variables

```scss
$form-range-track-width:          100% !default;
$form-range-track-height:         .5rem !default;
$form-range-track-cursor:         pointer !default;
$form-range-track-bg:             var(--cui-secondary-bg) !default;
$form-range-track-border-radius:  1rem !default;
$form-range-track-box-shadow:     var(--cui-box-shadow-inset) !default;

$form-range-thumb-width:                   1rem !default;
$form-range-thumb-height:                  $form-range-thumb-width !default;
$form-range-thumb-bg:                      $component-active-bg !default;
$form-range-thumb-border:                  0 !default;
$form-range-thumb-border-radius:           1rem !default;
$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;
$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;
$form-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in Edge
$form-range-thumb-active-bg:               tint-color($primary, 70%) !default;
$form-range-thumb-disabled-bg:             var(--cui-secondary-color) !default;
$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;
```
