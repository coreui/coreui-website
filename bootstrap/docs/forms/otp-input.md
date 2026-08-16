# Bootstrap 5 One Time Password (OTP) Input

> Create secure and user-friendly one-time password input fields with automatic navigation, paste support, validation, and customizable options for modern authentication flows.

## Example

Use the `form-otp` wrapper with `data-coreui-toggle="otp"` to create an one-time password input field with automatic character navigation and validation.

```html
<label for="basicOTP" class="form-label">Enter OTP Code</label>
<div class="form-otp" data-coreui-toggle="otp" data-coreui-id="basicOTP" data-coreui-name="otp">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
</div>
```

## One-time password types

The one-time password input supports different input types for various use cases.

```html
<div class="mb-3">
  <label class="form-label">Numeric OTP (default)</label>
  <div class="form-otp" data-coreui-toggle="otp" data-coreui-type="number">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div class="mb-3">
  <label class="form-label">Text OTP</label>
  <div class="form-otp" data-coreui-toggle="otp" data-coreui-type="text">
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
  <div class="form-otp" data-coreui-toggle="otp" data-coreui-masked="true">
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
<div class="mb-3">
  <label class="form-label">Single character placeholder</label>
  <div class="form-otp" data-coreui-toggle="otp" data-coreui-placeholder="0">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div class="mb-3">
  <label class="form-label">Different placeholders per field</label>
  <div class="form-otp" data-coreui-toggle="otp" data-coreui-placeholder="123456">
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
  <div class="form-otp" data-coreui-toggle="otp" data-coreui-type="text" data-coreui-placeholder="ABCDEF">
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
<div class="form-otp" data-coreui-toggle="otp" data-coreui-value="123456">
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
<div class="mb-3">
  <label class="form-label">Linear mode (sequential input)</label>
  <div class="form-otp" data-coreui-toggle="otp" data-coreui-linear="true">
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
  <div class="form-otp" data-coreui-toggle="otp" data-coreui-linear="false">
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
  <div class="form-otp" data-coreui-toggle="otp" data-coreui-auto-submit="true">
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
<div class="mb-3">
  <label class="form-label">6-digit OTP with separators</label>
  <div class="form-otp" data-coreui-toggle="otp">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <div class="px-2 text-body-tertiary fw-bold">-</div>
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div class="mb-3">
  <label class="form-label">9-digit OTP with separators</label>
  <div class="form-otp" data-coreui-toggle="otp">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <div class="px-2 text-body-tertiary fw-bold">•</div>
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <div class="px-2 text-body-tertiary fw-bold">•</div>
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div>
  <label class="form-label">4-digit PIN</label>
  <div class="form-otp" data-coreui-toggle="otp" data-coreui-masked="true">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
```

## Sizing variants

One-time password input supports different sizes. You may choose from small, normal (default), and large inputs to match our similarly sized text inputs.  To adjust the size of a component, use `.form-otp-lg` or `.form-otp-sm`.

```html
<div class="mb-3">
  <label class="form-label">Large OTP input</label>
  <div class="form-otp form-otp-lg" data-coreui-toggle="otp">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
<div class="mb-3">
  <label class="form-label">Default OTP input</label>
  <div class="form-otp" data-coreui-toggle="otp">
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
  <div class="form-otp form-otp-sm" data-coreui-toggle="otp">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
    <input class="form-otp-control">
  </div>
</div>
```

## Disabled state

Disable the entire one-time password input by adding the `data-coreui-disabled="true"` attribute.

```html
<label class="form-label">Disabled OTP input</label>
<div class="form-otp" data-coreui-toggle="otp" data-coreui-disabled="true" data-coreui-value="123456">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
</div>
```

## Readonly state

Use the `data-coreui-readonly="true"` attribute to make the one-time password input non-editable but still selectable.

```html
<label class="form-label">Readonly OTP input</label>
<div class="form-otp" data-coreui-toggle="otp" data-coreui-readonly="true" data-coreui-value="123456">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
  <input class="form-otp-control">
</div>
```

## Accessibility

The one-time password input component is designed with accessibility in mind and follows WCAG guidelines for form inputs.

- **ARIA Labels**: Each input field automatically receives descriptive `aria-label` attributes
- **Role Attribute**: The container has `role="group"` to indicate related form controls
- **Keyboard Navigation**: Full keyboard support with arrow keys, tab, and backspace
- **Screen Reader Support**: Clear announcements when values change or validation occurs
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

The simplest way to use the one-time password input is through data attributes. Add `data-coreui-toggle="otp"` to a container with `.form-otp` class containing `.form-otp-control` inputs.

```html
<div class="form-otp" data-coreui-toggle="otp">
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
| `id` | string, null | `null` | ID attribute for the hidden input field |
| `linear` | boolean | `true` | Enforce sequential input (users must fill fields in order) |
| `masked` | boolean | `false` | Show input as password (masked characters) |
| `name` | string, null | `null` | Name attribute for the hidden input field |
| `placeholder` | string, null | `null` | Placeholder text for input fields. Single character applies to all fields, longer strings apply character-by-character |
| `readonly` | boolean | `false` | Make OTP input read-only |
| `required` | boolean | `false` | Makes the input field required for form validation. |
| `type` | string | `'number'` | Input validation type: 'number' for digits only, or any other string for free text |
| `value` | string, number, null | `null` | Initial value for the OTP input |

### Methods

| Method | Description |
| --- | --- |
| `clear` | Clear all OTP input fields |
| `reset` | Reset OTP input to its initial value |
| `update` | Update the OTP input configuration |

```javascript
const otp = coreui.OTPInput.getInstance(document.querySelector('.form-otp'))
otp.clear() // Clear all fields
otp.reset() // Reset to initial value
otp.update({ type: 'number', masked: true }) // Update configuration
```

### Events

| Event | Description |
| --- | --- |
| `change.coreui.otp-input` | Fired whenever the OTP value changes |
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

### SASS variables

Customize the appearance of the one-time password input using the following SASS variables:

```scss
$form-otp-gap:                         .125rem !default;
$form-otp-control-width:               2rem !default;
$form-otp-control-padding-y:           $input-padding-y !default;
$form-otp-control-padding-x:           0 !default;
$form-otp-control-font-family:         $input-font-family !default;
$form-otp-control-font-size:           $input-font-size !default;
$form-otp-control-font-weight:         $input-font-weight !default;
$form-otp-control-line-height:         $input-line-height !default;
$form-otp-control-color:               $input-color !default;
$form-otp-control-bg:                  $input-bg !default;
$form-otp-control-border-width:        $input-border-width !default;
$form-otp-control-border-color:        $input-border-color !default;
$form-otp-control-border-radius:       $input-border-radius !default;
$form-otp-control-box-shadow:          $input-box-shadow !default;
$form-otp-control-transition:          $input-transition !default;
$form-otp-control-focus-color:         $input-focus-color !default;
$form-otp-control-focus-bg:            $input-focus-bg !default;
$form-otp-control-focus-border-color:  $input-focus-border-color !default;
$form-otp-control-focus-box-shadow:    $input-focus-box-shadow !default;

$form-otp-control-width-sm:            1.5rem !default;
$form-otp-control-padding-y-sm:        $input-padding-y-sm !default;
$form-otp-control-padding-x-sm:        0 !default;
$form-otp-control-font-size-sm:        $input-font-size-sm !default;
$form-otp-control-border-radius-sm:    $input-border-radius-sm !default;

$form-otp-control-width-lg:            2.5rem !default;
$form-otp-control-padding-y-lg:        $input-padding-y-lg !default;
$form-otp-control-padding-x-lg:        0 !default;
$form-otp-control-font-size-lg:        $input-font-size-lg !default;
$form-otp-control-border-radius-lg:    $input-border-radius-lg !default;
```
