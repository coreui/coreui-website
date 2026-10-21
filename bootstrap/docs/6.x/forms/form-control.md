# Bootstrap 6 Form Controls

> Give textual form controls like `<input>`s and `<textarea>`s an upgrade with custom styles, sizing, focus states, and more.

## Example

```html
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-4">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <label for="formControlField" class="form-label">Email address</label>
  <input type="email" class="form-control" id="formControlField" placeholder="name@example.com">
  <div class="form-text">We'll never share your email with anyone else.</div>
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
<div class="row g-4 align-items-center">
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
  <div class="mb-4 row">
  <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
  </div>
</div>
<div class="mb-4 row">
  <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
  <div class="col-sm-10">
    <input type="password" class="form-control" id="inputPassword">
  </div>
</div>
```

```html
<form class="row g-4">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn-solid theme-primary mb-4">Confirm identity</button>
  </div>
</form>
```

## File input

```html
<div class="mb-4">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile">
</div>
<div class="mb-4">
  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>
<div class="mb-4">
  <label for="formFileDisabled" class="form-label">Disabled file input example</label>
  <input class="form-control" type="file" id="formFileDisabled" disabled>
</div>
<div class="mb-4">
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

### CSS variables

`.form-control` and `.form-select` declare the `--cui-control-*` tokens on themselves, and so does every field built on them: the [form control group](https://coreui.io/bootstrap/docs/forms/form-control-group/#css-variables) and every component that renders one — Autocomplete, Chip Input, Multi Select, the pickers, the password and number inputs — and the cells of the OTP input. Set a token on the field to restyle that field; a value set on an ancestor or on `:root` stops there. To restyle the frame of every field at once, change the [`--cui-btn-input-*` tokens](https://coreui.io/bootstrap/docs/forms/overview/#css-variables) it points to; buttons share their sizes, so they move too. The placeholder, disabled background and file button colours point at the palette instead and are set per field. `.form-control-sm` and `.form-control-lg` are themselves token overrides.

The checkbox, radio and switch are not fields: the few `--cui-control-*` tokens they share sit on `:root` and are listed with the [checkbox](https://coreui.io/bootstrap/docs/forms/checkbox/#shared-variables).

```scss
$form-control-tokens: () !default;
$form-control-tokens: defaults(
  (
    --cui-control-min-height: var(--cui-btn-input-min-height),
    --cui-control-padding-y: var(--cui-btn-input-padding-y),
    --cui-control-padding-x: var(--cui-btn-input-padding-x),
    --cui-control-font-size: var(--cui-btn-input-font-size),
    --cui-control-font-weight: var(--cui-btn-input-font-weight),
    --cui-control-line-height: var(--cui-btn-input-line-height),
    --cui-control-fg: var(--cui-btn-input-fg),
    --cui-control-bg: var(--cui-btn-input-bg),
    --cui-control-border-width: var(--cui-btn-input-border-width),
    --cui-control-border-color: var(--cui-btn-input-border-color),
    --cui-control-border-radius: var(--cui-btn-input-border-radius),
    --cui-control-box-shadow: var(--cui-btn-input-box-shadow),
    --cui-control-transition-property: var(--cui-btn-input-transition-property),
    --cui-control-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-control-transition-timing: var(--cui-btn-input-transition-timing),
    --cui-control-placeholder-color: var(--cui-fg-3),
    --cui-control-focus-color: var(--cui-btn-input-focus-color),
    --cui-control-focus-bg: var(--cui-btn-input-focus-bg),
    --cui-control-focus-border-color: var(--cui-btn-input-focus-border-color),
    --cui-control-disabled-color: var(--cui-control-fg),
    --cui-control-disabled-bg: var(--cui-bg-2),
    --cui-control-disabled-border-color: var(--cui-control-border-color),
    --cui-control-action-color: var(--cui-btn-input-fg),
    --cui-control-action-bg: var(--cui-bg-1),
    --cui-control-action-hover-bg: var(--cui-bg-2),
    --cui-control-action-transition-property: var(--cui-btn-input-action-transition-property),
    --cui-control-action-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-control-action-transition-timing: var(--cui-btn-input-transition-timing),
  ),
  $form-control-tokens
);
```

Two tokens are declared by the class that uses them rather than on every control: `--cui-control-plaintext-color` on `.form-control-plaintext`, and `--cui-control-color-width` on `.form-control-color`.

`.form-label` and `.col-form-label` carry the `--cui-label-*` tokens. Set them on a single label to restyle just that one, or on an ancestor to cover a whole form. The size classes are themselves token overrides: `.col-form-label-lg` sets `--cui-label-padding-y` and `--cui-label-font-size`.

```scss
$form-label-tokens: defaults(
  (
    --cui-label-margin-bottom: .5rem,
    --cui-label-font-size: null,
    --cui-label-font-style: null,
    --cui-label-font-weight: var(--cui-font-weight-medium),
    --cui-label-color: var(--cui-fg-body),
  ),
  $form-label-tokens
);
```

`.form-text` carries the `--cui-form-text-*` tokens.

```scss
$form-text-tokens: defaults(
  (
    --cui-form-text-margin-top: .25rem,
    --cui-form-text-font-size: var(--cui-small-font-size),
    --cui-form-text-font-style: null,
    --cui-form-text-font-weight: null,
    --cui-form-text-color: var(--cui-fg-2),
  ),
  $form-text-tokens
);
```

### Sass maps

Each entry generates one `.form-control-{size}` and `.form-select-{size}` class, pointing the control at the matching `--cui-btn-input-{size}-*` values. Add a key to define a size, or set one to `null` to drop it:

```scss
$form-control-sizes: defaults(
  ("sm", "lg"),
  $form-control-sizes
);
```
