# Bootstrap 5 Select

> Customize the native `<select>`s with custom CSS that changes the element's initial appearance.

## Default

Custom `<select>` menus need only a custom class, `.form-select` to trigger the custom styles. Custom styles are limited to the `<select>`'s initial appearance and cannot modify the `<option>`s due to browser limitations.

```html
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

## Sizing

You may also choose from small and large custom selects to match our similarly sized text inputs.

```html
<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

The `multiple` attribute is also supported:

```html
<select class="form-select" multiple aria-label="multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

As is the `size` attribute:

```html
<select class="form-select" size="3" aria-label="size 3 select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

## Disabled

Add the `disabled` boolean attribute on a select to give it a grayed out appearance and remove pointer events.

```html
<select class="form-select" aria-label="Disabled select example" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

## Customizing

### SASS variables

```scss
$form-select-padding-y:             $input-padding-y !default;
$form-select-padding-x:             $input-padding-x !default;
$form-select-font-family:           $input-font-family !default;
$form-select-font-size:             $input-font-size !default;
$form-select-indicator-padding:     $form-select-padding-x * 3 !default; // Extra padding for background-image
$form-select-font-weight:           $input-font-weight !default;
$form-select-line-height:           $input-line-height !default;
$form-select-color:                 $input-color !default;
$form-select-bg:                    $input-bg !default;
$form-select-disabled-color:        null !default;
$form-select-disabled-bg:           $input-disabled-bg !default;
$form-select-disabled-border-color: $input-disabled-border-color !default;
$form-select-bg-position:           right $form-select-padding-x center !default;
$form-select-bg-size:               16px 12px !default; // In pixels because image dimensions
$form-select-indicator-color:       $gray-800 !default;
$form-select-indicator:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>") !default;

$form-select-feedback-icon-padding-end: $form-select-padding-x * 2.5 + $form-select-indicator-padding !default;
$form-select-feedback-icon-position:    center right $form-select-indicator-padding !default;
$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half !default;

$form-select-border-width:        $input-border-width !default;
$form-select-border-color:        $input-border-color !default;
$form-select-border-radius:       $input-border-radius !default;
$form-select-box-shadow:          var(--cui-box-shadow-inset) !default;

$form-select-focus-border-color:  $input-focus-border-color !default;
$form-select-focus-width:         $input-focus-width !default;
$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color !default;

$form-select-padding-y-sm:        $input-padding-y-sm !default;
$form-select-padding-x-sm:        $input-padding-x-sm !default;
$form-select-font-size-sm:        $input-font-size-sm !default;
$form-select-border-radius-sm:    $input-border-radius-sm !default;

$form-select-padding-y-lg:        $input-padding-y-lg !default;
$form-select-padding-x-lg:        $input-padding-x-lg !default;
$form-select-font-size-lg:        $input-font-size-lg !default;
$form-select-border-radius-lg:    $input-border-radius-lg !default;

$form-select-transition:          $input-transition !default;
```
