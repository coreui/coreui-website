# Bootstrap 5 Form Controls

> Give textual form controls like `<input>`s and `<textarea>`s an upgrade with custom styles, sizing, focus states, and more.

## Example

```html
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
```

## Sizing

Set heights using classes like `.form-control-lg` and `.form-control-sm`.

```html
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
```

## Form text

Block-level or inline-level form text can be created using `.form-text`.

> Form text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control.

Form text below inputs can be styled with `.form-text`. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.

```html
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
```

Inline text can use any typical inline HTML element (be it a `<span>`, `<small>`, or something else) with nothing more than the `.form-text` class.

```html
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Password</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
<input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
<input class="form-control" type="text" value="Disabled readonly input" aria-label="Disabled input example" disabled readonly>
```

## Readonly

Add the `readonly` boolean attribute on an input to prevent modification of the input's value. `readonly` inputs can still be focused and selected, while `disabled` inputs cannot.

```html
<input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly>
```

## Readonly plain text

If you want to have `<input readonly />` elements in your form styled as plain text, replace `.form-control` with `.form-control-plaintext` to remove the default form field styling and preserve the correct `margin` and `padding`.

```html
  <div class="mb-3 row">
  <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
  </div>
</div>
<div class="mb-3 row">
  <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
  <div class="col-sm-10">
    <input type="password" class="form-control" id="inputPassword">
  </div>
</div>
```

```html
<form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>
```

## File input

```html
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile">
</div>
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>
<div class="mb-3">
  <label for="formFileDisabled" class="form-label">Disabled file input example</label>
  <input class="form-control" type="file" id="formFileDisabled" disabled>
</div>
<div class="mb-3">
  <label for="formFileSm" class="form-label">Small file input example</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file">
</div>
<div>
  <label for="formFileLg" class="form-label">Large file input example</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file">
</div>
```

## Color

Set the `type="color"` and add `.form-control-color` to the `<input />`. We use the modifier class to set fixed `height`s and override some inconsistencies between browsers.

```html
<label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
```

## Datalists

Datalists allow you to create a group of `<option>`s that can be accessed (and autocompleted) from within an `<input />`. These are similar to `<select>` elements, but come with more menu styling limitations and differences. While most browsers and operating systems include some support for `<datalist>` elements, their styling is inconsistent at best.

Learn more about [support for datalist elements](https://caniuse.com/datalist).

```html
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>
```

## Customizing

### SASS variables

`$input-*` are shared across most of our form controls (and not buttons).

```scss
$input-padding-y:                       $input-btn-padding-y !default;
$input-padding-x:                       $input-btn-padding-x !default;
$input-font-family:                     $input-btn-font-family !default;
$input-font-size:                       $input-btn-font-size !default;
$input-font-weight:                     $font-weight-base !default;
$input-line-height:                     $input-btn-line-height !default;

$input-padding-y-sm:                    $input-btn-padding-y-sm !default;
$input-padding-x-sm:                    $input-btn-padding-x-sm !default;
$input-font-size-sm:                    $input-btn-font-size-sm !default;

$input-padding-y-lg:                    $input-btn-padding-y-lg !default;
$input-padding-x-lg:                    $input-btn-padding-x-lg !default;
$input-font-size-lg:                    $input-btn-font-size-lg !default;

$input-bg:                              var(--cui-body-bg) !default;
$input-disabled-color:                  var(--cui-body-color) !default;
$input-disabled-bg:                     var(--cui-secondary-bg) !default;
$input-disabled-border-color:           var(--cui-border-color) !default;

$input-color:                           var(--cui-body-color) !default;
$input-border-color:                    var(--cui-border-color) !default;
$input-border-width:                    $input-btn-border-width !default;
$input-box-shadow:                      var(--cui-box-shadow-inset) !default;

$input-border-radius:                   var(--cui-border-radius) !default;
$input-border-radius-sm:                var(--cui-border-radius-sm) !default;
$input-border-radius-lg:                var(--cui-border-radius-lg) !default;

$input-focus-bg:                        $input-bg !default;
$input-focus-border-color:              tint-color($primary, 50%) !default;
$input-focus-color:                     $input-color !default;
$input-focus-width:                     $input-btn-focus-width !default;
$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;

$input-placeholder-color:               var(--cui-secondary-color) !default;
$input-plaintext-color:                 var(--cui-body-color) !default;

$input-height-border:                   calc(#{$input-border-width} * 2) !default; // stylelint-disable-line function-disallowed-list

$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;
$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;
$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y * .5) !default;

$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;
$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;
$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;

$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$form-color-width:                      3rem !default;
```

`$form-label-*` and `$form-text-*` are for our `<label>`s and `.form-text` component.

```scss
$form-label-margin-bottom:              .5rem !default;
$form-label-font-size:                  null !default;
$form-label-font-style:                 null !default;
$form-label-font-weight:                null !default;
$form-label-color:                      null !default;
```

```scss
$form-text-margin-top:                  .25rem !default;
$form-text-font-size:                   $small-font-size !default;
$form-text-font-style:                  null !default;
$form-text-font-weight:                 null !default;
$form-text-color:                       var(--cui-secondary-color) !default;
```

`$form-file-*` are for file input.

```scss
$form-file-button-color:          $input-color !default;
$form-file-button-bg:             var(--cui-tertiary-bg) !default;
$form-file-button-hover-bg:       var(--cui-secondary-bg) !default;
```
