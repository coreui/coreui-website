# Bootstrap 6 One Time Password (OTP) Input

> Create secure and user-friendly one-time password input fields with automatic navigation, paste support, validation, and customizable options for modern authentication flows.

## Example

Use the `form-otp` wrapper with `data-coreui-otp` to create an one-time password input field with automatic character navigation and validation.

```html
<label for="basicOTP" class="form-label">Enter OTP Code</label>
<div class="form-otp" data-coreui-otp data-coreui-id="basicOTP" data-coreui-name="otp">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
</div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <span class="form-label">Verification code</span>
  <div class="form-otp" data-coreui-otp data-coreui-name="otpField">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
  <div class="form-text">We sent it to your phone a moment ago.</div>
</div>
```

## One-time password types

The one-time password input supports different input types for various use cases.

```html
<div class="mb-4">
  <label class="form-label">Numeric OTP (default)</label>
  <div class="form-otp" data-coreui-otp data-coreui-type="number">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div class="mb-4">
  <label class="form-label">Text OTP</label>
  <div class="form-otp" data-coreui-otp data-coreui-type="text">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div>
  <label class="form-label">Masked OTP (hidden characters)</label>
  <div class="form-otp" data-coreui-otp data-coreui-masked="true">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
```

## Placeholders

Provide visual hints to users by setting placeholder text for OTP input fields. You can use a single character for all fields or specify different placeholders for each field.

```html
<div class="mb-4">
  <label class="form-label">Single character placeholder</label>
  <div class="form-otp" data-coreui-otp data-coreui-placeholder="0">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div class="mb-4">
  <label class="form-label">Different placeholders per field</label>
  <div class="form-otp" data-coreui-otp data-coreui-placeholder="123456">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div>
  <label class="form-label">Letter placeholders</label>
  <div class="form-otp" data-coreui-otp data-coreui-type="text" data-coreui-placeholder="ABCDEF">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
```

## Pre-filled values

Set initial values using the `data-coreui-value` attribute.

```html
<label class="form-label">OTP with pre-filled value</label>
<div class="form-otp" data-coreui-otp data-coreui-value="123456">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
</div>
```

## Input modes

Control user input behavior with linear and non-linear modes.

```html
<div class="mb-4">
  <label class="form-label">Linear mode (sequential input)</label>
  <div class="form-otp" data-coreui-otp data-coreui-linear="true">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div>
  <label class="form-label">Non-linear mode (free navigation)</label>
  <div class="form-otp" data-coreui-otp data-coreui-linear="false">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
```

## Auto-submit

Enable automatic form submission when all one-time password fields are completed.

```html
<form>
  <label class="form-label">Auto-submit OTP</label>
  <div class="form-otp" data-coreui-otp data-coreui-auto-submit="true">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</form>
```

## Custom layouts

Create custom one-time password layouts with separators and different field counts.

```html
<div class="mb-4">
  <label class="form-label">6-digit OTP with separators</label>
  <div class="form-otp" data-coreui-otp>
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <div class="px-3 fg-3 fw-bold">-</div>
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div class="mb-4">
  <label class="form-label">9-digit OTP with separators</label>
  <div class="form-otp" data-coreui-otp>
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <div class="px-3 fg-3 fw-bold">•</div>
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <div class="px-3 fg-3 fw-bold">•</div>
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div>
  <label class="form-label">4-digit PIN</label>
  <div class="form-otp" data-coreui-otp data-coreui-masked="true">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
```

## Grouped cells

Wrap cells in `.form-otp-group` to join them into one field: the cells share their borders and only the outer corners keep the radius. One group joins the whole code; several groups split it into segments, spaced by the `--cui-form-otp-gap` of the wrapper.

```html
<div class="mb-4">
  <label class="form-label">6-digit OTP, one group</label>
  <div class="form-otp" data-coreui-otp>
    <div class="form-otp-group">
      <input class="form-otp-control">
      <input class="form-otp-control">
      <input class="form-otp-control">
      <input class="form-otp-control">
      <input class="form-otp-control">
      <input class="form-otp-control">
    </div>
  </div>
</div>
<div>
  <label class="form-label">6-digit OTP, two groups</label>
  <div class="form-otp" data-coreui-otp>
    <div class="form-otp-group">
      <input class="form-otp-control">
      <input class="form-otp-control">
      <input class="form-otp-control">
    </div>
    <div class="form-otp-group">
      <input class="form-otp-control">
      <input class="form-otp-control">
      <input class="form-otp-control">
    </div>
  </div>
</div>
```

## Sizing variants

One-time password input supports different sizes. You may choose from small, normal (default), and large inputs to match our similarly sized text inputs.  To adjust the size of a component, use `.form-otp-lg` or `.form-otp-sm`.

```html
<div class="mb-4">
  <label class="form-label">Large OTP input</label>
  <div class="form-otp form-otp-lg" data-coreui-otp>
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div class="mb-4">
  <label class="form-label">Default OTP input</label>
  <div class="form-otp" data-coreui-otp>
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div>
  <label class="form-label">Small OTP input</label>
  <div class="form-otp form-otp-sm" data-coreui-otp>
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
```

## Disabled

Disable the entire one-time password input by adding the `data-coreui-disabled="true"` attribute.

```html
<label class="form-label">Disabled OTP input</label>
<div class="form-otp" data-coreui-otp data-coreui-disabled="true" data-coreui-value="123456">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
</div>
```

## Validation

The code is validated as one value, kept in an input laid invisibly over the group. With `data-coreui-required="true"` an empty or incomplete code blocks the submit, and an incomplete code blocks it even when the field is not required; the browser, or the [form plugin](https://coreui.io/bootstrap/docs/forms/validation/#usage) in a form with `novalidate`, puts focus on the first empty slot, the browser with its own message over the group. The state shows on the group as `.is-{state}`, which colours every slot and shows the `.invalid-feedback` that follows the group, and while it is `'invalid'` every slot carries `aria-invalid="true"` and is described by that message. Every change of the code sends `input` and `change` from the input that holds the value.

```html
<form class="row g-4" data-coreui-validate novalidate>
  <div class="col-12">
    <span class="form-label" id="otpValidationLabel">Verification code</span>
    <div class="form-otp" data-coreui-otp aria-labelledby="otpValidationLabel" data-coreui-name="code" data-coreui-required="true">
      <input class="form-otp-control">
      <input class="form-otp-control">
      <input class="form-otp-control">
      <input class="form-otp-control">
      <input class="form-otp-control">
      <input class="form-otp-control">
    </div>
    <div class="invalid-feedback">Enter the six digits we sent you.</div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Verify</button>
  </div>
</form>
```

The state comes from four places, in this order:

- The `validationState` option: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`.
- An `.is-invalid` or `.is-valid` class written on the `.form-otp` element or on a slot in the markup, for example by a server that has already checked the code. It is read once, when the component starts, and moves to the group, since the code is one value.
- A validation that reports the code invalid: a submit, `checkValidity()` or `reportValidity()`, which the form plugin and the [stepper](https://coreui.io/bootstrap/docs/forms/stepper/) call as well. From then on the group shows it invalid whenever the code is invalid, until a native reset of the form.
- In a form with `data-coreui-validate`, the `:user-invalid` state of the input that holds the value, and with `data-coreui-validate="valid"` also its `:user-valid` state.

A state you give, with the option or with the class, is a verdict on the code it was given for, so the next change of the code the user makes drops it: typing or deleting a character, a paste or an autofill. A keystroke that leaves the code as it was keeps it. One action drops the state once, at its first change, so a state you give from a `change.coreui.otp-input`, `input` or `change` listener while the action runs stays. A change your own code makes with `clear()`, `reset()` or `setValue()` keeps it. To set it again, call `setValidationState()`: it also replaces a class written in the markup, so `setValidationState(null)` withdraws that class. The component does not read `aria-invalid` on the group or a slot, and a state class written after it started only paints the group: the slots get no `aria-invalid` and the submit is not blocked, so change the state after start with `setValidationState()`. While the given state is `'invalid'`, the code blocks the submit with the text of the linked message, or `Invalid value.` when there is none; a disabled code does not block. A message placed where the stylesheet does not show it for the group can be named in `data-coreui-invalid-feedback` on the `.form-otp` element. A native reset of the form puts back the code the field started with and drops a state given before it; a state you give from a `reset` listener on the form, or right after `form.reset()`, stays.

```html
<span class="form-label" id="otpServerLabel">Verification code</span>
<div class="form-otp is-invalid" data-coreui-otp aria-labelledby="otpServerLabel" data-coreui-name="code" data-coreui-value="482910">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
</div>
<div class="invalid-feedback">This code has expired. Request a new one.</div>
```

## Accessibility

The one-time password input component is designed with accessibility in mind and follows WCAG guidelines for form inputs.

- **ARIA Labels**: Each input field automatically receives descriptive `aria-label` attributes
- **Label click**: clicking a label that names the field, through `aria-labelledby` or a `<label for>` pointing at the element, moves focus to the first empty slot, as clicking the label of an input focuses it.
- **Role Attribute**: The container has `role="group"` to indicate related form controls
- **Required**: with `data-coreui-required="true"`, every slot carries `aria-required="true"`, since the value input that holds `required` is hidden from assistive technologies
- **Keyboard Navigation**: Full keyboard support with arrow keys, tab, and backspace
- **Screen Reader Support**: Clear announcements when values change; while the state is `'invalid'`, every slot carries `aria-invalid="true"` and the error message after the group
- **Description**: an `aria-describedby` on the group moves to the first slot, and to every slot while the state is `'invalid'`, after the ids each slot already has; the group gets it back on dispose
- **Focus Management**: Automatic focus handling for seamless navigation
- **Autofill**: only the first field advertises `autocomplete="one-time-code"`, so SMS autofill and password managers target a single field; a code delivered that way is spread across the slots automatically, exactly like a paste

### Customizing accessibility

You can customize the aria-label generation function to provide more specific descriptions:

```javascript
const otp = new coreui.OTPInput(element, {
  ariaLabel: (index, total) => `Enter digit ${index + 1} of your ${total}-digit verification code`
})
```

### Keyboard support

The one-time password input component provides comprehensive keyboard navigation support:

| Key | Action |
| --- | --- |
| <kbd>Arrow Right</kbd> | Move focus to next input field |
| <kbd>Arrow Left</kbd> | Move focus to previous input field |
| <kbd>Backspace</kbd> | Delete current character and move to previous field (if empty) |
| <kbd>Tab</kbd> | Move to next focusable element (respects linear mode) |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move to previous focusable element |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd> | Paste clipboard content and auto-fill fields |

## Usage

### Via data attributes

The simplest way to use the one-time password input is through data attributes. Add `data-coreui-otp` to a container with `.form-otp` class containing `.form-otp-control` inputs.

```html
<div class="form-otp" data-coreui-otp data-coreui-name="code">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
</div>
```

### Via JavaScript

Create one-time password inputs programmatically with JavaScript:

```javascript
const otpElement = document.querySelector('.form-otp')
const otp = new coreui.OTPInput(otpElement, {
  name: 'code',
  type: 'number',
  autoSubmit: true,
  linear: true,
  masked: false
})
```

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-coreui-`, as in `data-coreui-type="number"`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | function | `(index, total) => Digit ${index + 1} of ${total}` | Function to generate aria-label for each input field. Receives current index (0-based) and total number of inputs |
| `autoSubmit` | boolean | `false` | Automatically submit the form when all OTP fields are filled |
| `disabled` | boolean | `false` | Disable all OTP input fields |
| `id` | string, null | `null` | ID attribute for the value input |
| `linear` | boolean | `true` | Enforce sequential input (users must fill fields in order) |
| `masked` | boolean | `false` | Show input as password (masked characters) |
| `name` | string, null | `null` | Name of the value input the code is submitted under. Without it the code is not submitted with the form. |
| `placeholder` | string, null | `null` | Placeholder text for input fields. Single character applies to all fields, longer strings apply character-by-character |
| `required` | boolean | `false` | Makes the code required: an empty or incomplete code blocks the submit. |
| `type` | string | `'number'` | Input validation type: 'number' for digits only, or any other string for free text |
| `validationState` | string, null | `null` | The state the code shows: `'valid'`, `'invalid'` or a state of `$form-validation-states`. `'invalid'` blocks the submit. The user's next change of the code drops it. See [Validation](#validation). |
| `value` | string, number, null | `null` | Value the slots start with. Characters the `type` does not accept are dropped, the same way typing and pasting drop them. |

### Methods

| Method | Description |
| --- | --- |
| `clear` | Clear all OTP input fields |
| `reset` | Puts back the code the input started with, its `value` or the code in the markup, as a native form reset does. |
| `disable()` | Disables the field. |
| `enable()` | Enables the field. |
| `setValidationState(state)` | Gives the field a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |
| `setValue(value)` | Sets the code. The slots show that value, cleared where it does not reach, and characters the `type` does not accept are dropped; the slots keep their attributes and the focus, and it fires no event. The slots are read when the field starts: to add or remove one, dispose the instance and create a new one. |

```javascript
const otp = coreui.OTPInput.getInstance(document.querySelector('.form-otp'))
otp.clear() // Clear all fields
otp.reset() // Reset to initial value
otp.setValue('123456') // Set the code
```

### Events

| Event | Description |
| --- | --- |
| `change.coreui.otp-input` | Fired when the code changes: typing, a paste, `clear()`, `reset()` or a native form reset, together with the native `input` and `change` of the hidden field. A call that leaves the code as it was, and `setValue()`, do not fire it. |
| `complete.coreui.otp-input` | Fired when all OTP fields are filled |

```javascript
document.addEventListener('change.coreui.otp-input', event => {
  // eslint-disable-next-line no-console
  console.log('OTP value changed:', event.value)
})

document.addEventListener('complete.coreui.otp-input', event => {
  // eslint-disable-next-line no-console
  console.log('OTP completed:', event.value)
})
```

## Customizing

### CSS variables

Each cell is an input, so it carries the shared `--cui-control-*` tokens on `.form-otp-control` itself. Override them on a single OTP input to restyle just that one; to restyle every text control at once, set the `--cui-btn-input-*` frame on `:root` instead.

```scss
$form-otp-control-tokens: () !default;
$form-otp-control-tokens: defaults(
  (
    --cui-control-padding-x: 0,
    --cui-form-otp-control-width: 2rem,
  ),
  $form-otp-control-tokens
);
```

```scss
$form-otp-tokens: () !default;
$form-otp-tokens: defaults(
  (
    --cui-form-otp-gap: .125rem,
  ),
  $form-otp-tokens
);
```

### Sass maps

Each size is one entry, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$form-otp-sizes: defaults(
  (
    "sm": (
      width:         1.5rem,
      padding-y:     var(--cui-btn-input-sm-padding-y),
      padding-x:     0,
      font-size:     var(--cui-btn-input-sm-font-size),
      border-radius: var(--cui-btn-input-sm-border-radius),
    ),
    "lg": (
      width:         2.5rem,
      padding-y:     var(--cui-btn-input-lg-padding-y),
      padding-x:     0,
      font-size:     var(--cui-btn-input-lg-font-size),
      border-radius: var(--cui-btn-input-lg-border-radius),
    ),
  ),
  $form-otp-sizes
);
```
