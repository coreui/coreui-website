# Bootstrap 6 Input Group

> Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.

## Basic example

Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place `<label>`s outside the input group.

```html
<div class="input-group mb-4">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-4">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<label for="basic-url" class="form-label">Your vanity URL</label>
<div class="input-group mb-4">
  <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-4">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-4">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server">
</div>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <label for="inputGroupField" class="form-label">Your vanity URL</label>
  <div class="input-group">
    <span class="input-group-text">https://example.com/users/</span>
    <input type="text" class="form-control" id="inputGroupField">
  </div>
  <div class="form-text">Choose a unique name for your profile.</div>
</div>
```

## Wrapping

Input groups wrap by default via `flex-wrap: wrap` in order to accommodate custom form field validation within an input group. You may disable this with `.flex-nowrap`.

```html
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>
```

## Sizing

Add the relative form sizing classes to the `.input-group` itself and contents within will automatically resize—no need for repeating the form control size classes on each element.

**Sizing on the individual input group elements isn't supported.**

```html
<div class="input-group input-group-sm mb-4">
  <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group mb-4">
  <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>
```

## Checkboxes and radios

Place any checkbox or radio option within an input group's addon instead of text. We recommend adding `.mt-0` to the `.check` or `.radio` input when there's no visible text next to the input.

```html
<div class="input-group mb-4">
  <div class="input-group-text">
    <input class="check mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>

<div class="input-group">
  <div class="input-group-text">
    <input class="radio mt-0" type="radio" value="" aria-label="Radio button for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button">
</div>
```

## Multiple inputs

While multiple `<input />`s are supported visually, validation styles are only available for input groups with a single `<input />`.

```html
<div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div>
```

## Multiple addons

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

```html
<div class="input-group mb-4">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
</div>
```

## Button addons

```html
<div class="input-group mb-4">
  <button class="btn-outline theme-secondary" type="button" id="button-addon1">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>

<div class="input-group mb-4">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn-outline theme-secondary" type="button" id="button-addon2">Button</button>
</div>

<div class="input-group mb-4">
  <button class="btn-outline theme-secondary" type="button">Button</button>
  <button class="btn-outline theme-secondary" type="button">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons">
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons">
  <button class="btn-outline theme-secondary" type="button">Button</button>
  <button class="btn-outline theme-secondary" type="button">Button</button>
</div>
```

## Buttons with dropdowns

```html
<div class="input-group mb-4">
  <button class="btn-outline theme-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>

<div class="input-group mb-4">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn-outline theme-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div class="input-group">
  <button class="btn-outline theme-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action before</a></li>
    <li><a class="dropdown-item" href="#">Another action before</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
  <button class="btn-outline theme-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

## Segmented buttons

```html
<div class="input-group mb-4">
  <button type="button" class="btn-outline theme-secondary">Action</button>
  <button type="button" class="btn-outline theme-secondary dropdown-toggle dropdown-toggle-split" data-coreui-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
  <button type="button" class="btn-outline theme-secondary">Action</button>
  <button type="button" class="btn-outline theme-secondary dropdown-toggle dropdown-toggle-split" data-coreui-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

## Custom forms

Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.

### Custom select

```html
<div class="input-group mb-4">
  <label class="input-group-text" for="inputGroupSelect01">Options</label>
  <select class="form-control" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="input-group mb-4">
  <select class="form-control" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label class="input-group-text" for="inputGroupSelect02">Options</label>
</div>

<div class="input-group mb-4">
  <button class="btn-outline theme-secondary" type="button">Button</button>
  <select class="form-control" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="input-group">
  <select class="form-control" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <button class="btn-outline theme-secondary" type="button">Button</button>
</div>
```

### Custom file input

```html
<div class="input-group mb-4">
  <label class="input-group-text" for="inputGroupFile01">Upload</label>
  <input type="file" class="form-control" id="inputGroupFile01">
</div>

<div class="input-group mb-4">
  <input type="file" class="form-control" id="inputGroupFile02">
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>

<div class="input-group mb-4">
  <button class="btn-outline theme-secondary" type="button" id="inputGroupFileAddon03">Button</button>
  <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload">
</div>

<div class="input-group">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
  <button class="btn-outline theme-secondary" type="button" id="inputGroupFileAddon04">Button</button>
</div>
```

## Skipping an element

CSS selectors can only account for so much. When a group carries an element that should not take part in the border-radius and negative-margin logic — a hidden input, a tooltip anchor — add `.input-group-ignore` to it and the corners flow to its visible neighbours:

```html
<div class="input-group">
  <span class="input-group-text" id="visible-addon">@</span>
  <input type="text" class="form-control input-group-ignore d-none" placeholder="Hidden input" aria-label="Hidden input" aria-describedby="visible-addon">
  <input type="text" class="form-control" placeholder="Visible input" aria-label="Visible input" aria-describedby="visible-addon">
</div>
```

## Customizing

### CSS variables

The addon declares its own tokens on `.input-group-text`, so a single addon can be repainted or resized without a modifier class. The first six are the [`--cui-control-*`](https://coreui.io/bootstrap/docs/forms/form-control/#css-variables) frame tokens, copied onto the addon so it lines up with the control next to it; `.input-group-{size}` re-points all of them but the border width, on the addon and on the `.form-control` or `.form-select` next to it. `.input-group` itself declares none — it is a layout wrapper, and a token set on it reaches neither the addon nor the control, because each declares its own.

```scss
$input-group-tokens: () !default;
$input-group-tokens: defaults(
  (
    --cui-control-padding-y: var(--cui-btn-input-padding-y),
    --cui-control-padding-x: var(--cui-btn-input-padding-x),
    --cui-control-font-size: var(--cui-btn-input-font-size),
    --cui-control-line-height: var(--cui-btn-input-line-height),
    --cui-control-border-width: var(--cui-btn-input-border-width),
    --cui-control-border-radius: var(--cui-btn-input-border-radius),
    --cui-input-group-addon-font-weight: var(--cui-btn-input-font-weight),
    --cui-input-group-addon-color: var(--cui-btn-input-fg),
    --cui-input-group-addon-bg: var(--cui-bg-2),
    --cui-input-group-addon-border-color: var(--cui-btn-input-border-color),
  ),
  $input-group-tokens
);
```

```html
<span class="input-group-text" style="--cui-input-group-addon-bg: var(--cui-bg-1);">@</span>
```

### Sass maps

Each entry is one `.input-group-{size}` class, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$input-group-sizes: defaults(
  ("sm", "lg"),
  $input-group-sizes
);
```
