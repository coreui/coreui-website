# Angular One Time Password (OTP) Input Component

> Develop secure and user-friendly Angular one-time password input fields with automatic navigation, paste support, validation, and customizable options for modern authentication flows.

_Added in 5.5.23._

## Example

The `c-one-time-password` component and `cOtp` directive are perfect for creating secure Angular OTP input fields. They offer automatic character navigation and validation, making them ideal for two-factor authentication, SMS verification codes, and secure login flows.

## One-time password types

The one-time password input supports various input types for different use cases.

## Placeholders

Provide visual cues to users by displaying placeholder text in the input fields for OTP. You can use a single character for all fields or specify different placeholders for each field.

## Pre-filled values

Set initial values using the `value` prop.

## Input modes

Control user input behavior with linear and non-linear modes.

## Auto-submit

Enable automatic form submission when all one-time password fields are completed.

## Custom layouts

Create custom one-time password layouts with separators and different field counts.

## Sizing variants

One-time password input supports different sizes. You may choose from small, normal (default), and large inputs to match our similarly sized text inputs.

## Disabled state

Disable the entire one-time password input by adding the `disabled` prop.

## Readonly state

Use the `readOnly` prop to make the one-time password input non-editable but still selectable.

## Validation state

Use the `valid` prop to indicate input validity.

## Forms

Angular handles user input through reactive and template-driven forms. CoreUI One Time Password OTP Input for Angular supports both approaches.

### Reactive

The Angular OTP Input component can be used with reactive forms. You can bind the OTP Input value to a form control using the `formControlName` directive.

### Template-driven

The Angular OTP Input component can be used in template-driven forms. You can bind the value to a template variable using the `ngModel` directive.

## Accessibility (a11y)
The one-time password input component is designed with accessibility in mind and follows WCAG guidelines for form inputs.

- __ARIA Labels__: Each input field automatically receives descriptive `aria-label` attributes
- __Role Attribute__: The container has `role="group"` to indicate related form controls
- __Keyboard Navigation__: Full keyboard support with arrow keys, tab, and backspace
- __Screen Reader__ Support: Clear announcements when values change or validation occurs
- __Focus Management__: Automatic focus handling for seamless navigation

### Customizing accessibility

You can customize the aria-label generation function to provide more specific descriptions:

<code lang="ts">
const ariaLabel = (index, total) => `Enter digit ${index + 1} of your ${total}-digit verification code`
</code>

### Keyboard support
The one-time password input component provides comprehensive keyboard navigation support:

| Key | Action |
| --- | --- |
|<kbd>ArrowLeft</kbd> |  Moves focus to previous field |
|<kbd>ArrowRight</kbd>  | Moves focus to next field |
|<kbd>Backspace</kbd>  | Delete current character or move to a previous field (if empty) |
|<kbd>Tab</kbd>  | Move to next focusable element (respects linear mode) |
|<kbd>Shift</kbd> + <kbd>Tab</kbd>  | Move to previous focusable element |
|<kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd>  | Paste clipboard content and auto-fill fields |

## Customizing

### CSS Classes

The One Time Password Input components use the following CSS classes:

- `.form-otp` - Applied to the wrapper container
- `.form-otp-sm` - Small size variant
- `.form-otp-lg` - Large size variant
- `.form-otp-control` - Applied to individual input elements

### SASS variables

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

## API reference

### OTP Module

```ts
import { NgModule } from '@angular/core';
import { OneTimePasswordModule } from '@coreui/angular';

@NgModule({
  imports: [OneTimePasswordModule]
})
export class CustomAppModule {}
```

### OTP Standalone

```ts
import { Component } from '@angular/core';
import { OneTimePasswordComponent, OtpDirective } from '@coreui/angular';

@Component({
  template: `
    <c-one-time-password>
      <input cOtp />
      <input cOtp />
      <input cOtp />
      <input cOtp />
    </c-one-time-password>
  `,
  imports: [OneTimePasswordComponent, OtpDirective]
})
export class CustomAppComponent {}
```

### c-one-time-password
_component_

<br />

```jsx
import { OneTimePasswordComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `object` | - | Function to generate aria-label for each input field. Receives current index (0-based) and total number of inputs. @default: (index, total) => `Digit ${index + 1} of ${total}` |
| `autoSubmit` | `boolean` | `false` | Automatically submit the form when all one-time password fields are filled. @default: false |
| `defaultValue` | `string \| number` | - | Initial value for Angular one-time password input. @default: undefined |
| `disabled` | `boolean` | `false` | Disable all one-time password (OTP) input fields. @default: false |
| `linear` | `boolean` | `true` | Enforce sequential input (users must fill fields in order). @default: true |
| `masked` | `boolean` | `false` | Show input as a password (masked characters). @default: false |
| `placeholder` | `string` | `''` | Placeholder text for input fields. Single character applies to all fields, longer strings apply character-by-character. @default: undefined |
| `readOnly` | `boolean` | `false` | Make the Angular OTP input component read-only. @default: false |
| `sizing` | `string` | - | Sets the visual size of the Angular one-time password (OTP) input. Use 'sm' for small or 'lg' for large input fields. @default: undefined |
| `type` | `'number' \| 'text'` | `'number'` | Input validation type: 'number' for digits only, or 'text' for free text. @default: 'number' |
| `valid` | `boolean` | `undefined` | Set form input validation state to valid. |
| `value` | `string \| number` | `undefined` | Current value for OTP input. @default: undefined |

### Events

| Name | Description |
| --- | --- |
| `complete` | Callback triggered when all Angular one-time password (OTP) fields are filled. |
| `valueChange` | Event triggered when the Angular one-time password (OTP) value changes. |

<br />

### input[cOtp]
_directive_

<br />
