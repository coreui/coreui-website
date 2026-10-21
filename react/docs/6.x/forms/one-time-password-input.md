# React One Time Password (OTP) Input Component

> Create secure and user-friendly React.js one-time password input fields with automatic navigation, paste support, validation, and customizable options for modern authentication flows.

## Example

The `` and `` components create secure **React OTP input fields** with automatic character navigation and validation. Perfect for two-factor authentication, SMS verification codes, and secure login flows.

```html
import React, { useState } from 'react'
import { CForm } from '@coreui/react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordExample = () => {
  const [value, setValue] = useState('')

  return (
    <CForm>
      <div className="mb-4">
        <COneTimePassword label="Enter OTP Code" id="basicOTP" name="otp" onChange={setValue}>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      {value && <div className="fg-2 small">Current value: {value}</div>}
    </CForm>
  )
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
import React from 'react'
import { CFormField, CFormText } from '@coreui/react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordFormFieldExample = () => {
  return (
    <CFormField>
      <span className="form-label">Verification code</span>
      <COneTimePassword name="otpField">
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
      </COneTimePassword>
      <CFormText>We sent it to your phone a moment ago.</CFormText>
    </CFormField>
  )
}
```

## One-time password types

The one-time password input supports different input types for various use cases.

```html
import React from 'react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordTypesExample = () => {
  return (
    <>
      <div className="mb-4">
        <COneTimePassword label="Numeric OTP (default)" type="number">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div className="mb-4">
        <COneTimePassword label="Text OTP" type="text">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div>
        <COneTimePassword label="Masked OTP (hidden characters)" masked>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
    </>
  )
}
```

## Placeholders

Provide visual hints to users by setting placeholder text for OTP input fields. You can use a single character for all fields or specify different placeholders for each field.

```html
import React from 'react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordPlaceholdersExample = () => {
  return (
    <>
      <div className="mb-4">
        <COneTimePassword label="Single character placeholder" placeholder="0">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div className="mb-4">
        <COneTimePassword label="Different placeholders per field" placeholder="123456">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div>
        <COneTimePassword label="Letter placeholders" type="text" placeholder="ABCDEF">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
    </>
  )
}
```

## Pre-filled values

Seed the code with `defaultValue` — the input manages it from there.

```html
import React from 'react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordPrefilledExample = () => {
  return (
    <COneTimePassword label="OTP with pre-filled value" defaultValue="123456">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  )
}
```

## Controlled and uncontrolled

The code works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the code |
| --- | --- | --- |
| Uncontrolled | `defaultValue` | the input, from that starting point |
| Controlled | `value` | your component |

`onChange` fires in **both** modes with the joined code, and `onComplete` once every slot is filled — so you can watch the code without taking it over. A native reset of the form puts back the code the input started with: uncontrolled, it sets it and calls `onChange` when that changes the code; controlled, it asks for the first `value` through `onChange` and shows your `value` until you take it.

### Uncontrolled

Seed the slots with `defaultValue`, or leave them empty, and let the input manage the code. This is what every example above does.

```jsx
<COneTimePassword defaultValue="123456">
```

### Controlled

Pass `value` and the slots render exactly what you pass — typing only fires `onChange`. Feed the change back, or nothing moves.

```html
import React, { useState } from 'react'
import { CButton, COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordControlledExample = () => {
  const [code, setCode] = useState('')

  return (
    <>
      <COneTimePassword label="Verification code" value={code} onChange={setCode}>
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
      </COneTimePassword>
      <div className="d-flex align-items-center gap-3 mt-3">
        <CButton theme="secondary" size="sm" onClick={() => setCode('')}>
          Clear
        </CButton>
        <span className="small fg-2">Current code: {code || '-'}</span>
      </div>
    </>
  )
}
```

Use it when the code belongs to something else: form state, a reset button, or a value you validate before accepting it.

## Input modes

Control user input behavior with linear and non-linear modes.

```html
import React from 'react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordInputModesExample = () => {
  return (
    <>
      <div className="mb-4">
        <COneTimePassword label="Linear mode (sequential input)" linear={true}>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div>
        <COneTimePassword label="Non-linear mode (free navigation)" linear={false}>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
    </>
  )
}
```

## Auto-submit

Enable automatic form submission when all one-time password fields are completed.

```html
import React from 'react'
import { CButton, CForm } from '@coreui/react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordAutoSubmitExample = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form submitted!')
    alert('Form submitted automatically!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-4">
        <COneTimePassword label="Auto-submit OTP (fill all 6 digits)" autoSubmit>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <CButton type="submit" theme="primary">
        Manual Submit
      </CButton>
    </CForm>
  )
}
```

## Custom layouts

Create custom one-time password layouts with separators and different field counts.

```html
import React from 'react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordCustomLayoutsExample = () => {
  return (
    <>
      <div className="mb-4">
        <COneTimePassword label="6-digit OTP with separators">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <div className="px-3 fg-3 fw-bold">-</div>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div className="mb-4">
        <COneTimePassword label="9-digit OTP with separators">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <div className="px-3 fg-3 fw-bold">•</div>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <div className="px-3 fg-3 fw-bold">•</div>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div>
        <COneTimePassword label="4-digit PIN" masked>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
    </>
  )
}
```

## Grouped cells

Wrap cells in `<COneTimePasswordGroup>` to join them into one field: the cells share their borders and only the outer corners keep the radius. One group joins the whole code; several groups split it into segments, spaced by the `--cui-form-otp-gap` of the wrapper.

```html
import React from 'react'
import { COneTimePassword, COneTimePasswordGroup, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordGroupedExample = () => {
  return (
    <>
      <div className="mb-4">
        <COneTimePassword label="6-digit OTP, one group">
          <COneTimePasswordGroup>
            <COneTimePasswordInput />
            <COneTimePasswordInput />
            <COneTimePasswordInput />
            <COneTimePasswordInput />
            <COneTimePasswordInput />
            <COneTimePasswordInput />
          </COneTimePasswordGroup>
        </COneTimePassword>
      </div>
      <div>
        <COneTimePassword label="6-digit OTP, two groups">
          <COneTimePasswordGroup>
            <COneTimePasswordInput />
            <COneTimePasswordInput />
            <COneTimePasswordInput />
          </COneTimePasswordGroup>
          <COneTimePasswordGroup>
            <COneTimePasswordInput />
            <COneTimePasswordInput />
            <COneTimePasswordInput />
          </COneTimePasswordGroup>
        </COneTimePassword>
      </div>
    </>
  )
}
```

## Sizing variants

One-time password input supports different sizes. You may choose from small, normal (default), and large inputs to match our similarly sized text inputs.

```html
import React from 'react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordSizingExample = () => {
  return (
    <>
      <div className="mb-4">
        <COneTimePassword label="Large OTP input" size="lg">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div className="mb-4">
        <COneTimePassword label="Default OTP input">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div>
        <COneTimePassword label="Small OTP input" size="sm">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
    </>
  )
}
```

## Disabled

Disable the entire one-time password input by adding the `disabled` prop.

```html
import React from 'react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordDisabledExample = () => {
  return (
    <COneTimePassword label="Disabled OTP" disabled defaultValue="123456">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  )
}
```

## Validation

The code is validated as one value, kept in an input laid invisibly over the group. With `required` an empty or incomplete code blocks the submit, and an incomplete code blocks it even when the field is not required; the browser puts focus on the first empty slot and shows its own message over the group. The state shows on the group as the `.is-*` class, and while it is `'invalid'` every slot carries `aria-invalid="true"` and is described by the message after the group: the `feedbackInvalid` text, the `feedback` text while you give a state, or an `.invalid-feedback` you render after the field yourself. The hidden input holds the new code by the time `onChange` and `onComplete` run, and sends `input` and `change` once the code has rendered, also when your code changes it through `value`.

```html
import React, { useState } from 'react'
import { CButton, CForm } from '@coreui/react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordValidationExample = () => {
  const [backupCodeState, setBackupCodeState] = useState<string | undefined>('invalid')

  return (
    <CForm className="row g-4" noValidate validate>
      <div className="col-md-6">
        <COneTimePassword
          feedbackInvalid="Enter the six digits we sent you."
          label="Verification code"
          name="code"
          required
        >
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div className="col-md-6">
        <COneTimePassword
          defaultValue="482913"
          feedback="This backup code has already been used."
          label="Backup code"
          name="backupCode"
          onValidationStateChange={setBackupCodeState}
          validationState={backupCodeState}
        >
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div className="col-12">
        <CButton color="primary" type="submit">
          Verify
        </CButton>
      </div>
    </CForm>
  )
}
```

The state comes from three places, in this order:

- `validationState`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`; `invalid` and `valid` still work as aliases. While it is set, the component draws it instead of what the browser reports. While it is `'invalid'`, the code blocks the submit with the text of the linked message, or `Invalid value.` when there is none, unless the component is `disabled`.
- A validation that reports the code invalid: a submit, `checkValidity()` or `reportValidity()`, which [`CForm`](https://coreui.io/react/docs/forms/validation/) and the stepper call as well. From then on the group and the slots show it invalid whenever the code is invalid, until the form is reset, and the message after the group shows.
- In a form with `validate`, the `:user-invalid` state of the hidden input, and with `validate="valid"` also its `:user-valid` state.

A state you give is a verdict on the code it was given for. When the user types, deletes, pastes or autofills a different code, or the form is reset, the component calls `onValidationStateChange(undefined)`; pass your state setter there to drop the state, as the second field above does. A change your code makes through `value` keeps it, and so does a keystroke that leaves the code as it is. A reset asks once it has run, so a state you set from a `reset` listener on the form gets the same call, and your handler decides whether to drop it. A native reset of the form puts back the code given by `defaultValue`, and leaves a controlled `value` to you. An `aria-invalid` passed to the component or to a slot is not read; set the state with `validationState`.

## Accessibility

The one-time password input component is designed with accessibility in mind and follows WCAG guidelines for form inputs.

- **ARIA Labels**: Each input field automatically receives descriptive `aria-label` attributes
- **Role Attribute**: The container has `role="group"` to indicate related form controls, named by `label`
- **Label click**: clicking the label that names the group moves focus to the first empty slot, as clicking the label of an input focuses it
- **Required**: with `required`, every slot carries `aria-required="true"`, since the value input that holds `required` is hidden from assistive technologies
- **Keyboard Navigation**: Full keyboard support with arrow keys, tab, and backspace
- **Screen Reader Support**: Clear announcements when values change; while the code is reported invalid, every slot carries `aria-invalid="true"` and the error message
- **Focus Management**: Automatic focus handling for seamless navigation
- **Autofill**: only the first field advertises `autocomplete="one-time-code"`, so SMS autofill and password managers target a single field; a code delivered that way is spread across the slots automatically, exactly like a paste

### Customizing accessibility

You can customize the aria-label generation function to provide more specific descriptions:

```jsx
<COneTimePassword
  ariaLabel={(index, total) => `Enter digit ${index + 1} of your ${total}-digit verification code`}
/>
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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;COneTimePassword /&gt;](./api/#conetimepassword)
- [&lt;COneTimePasswordInput /&gt;](./api/#conetimepasswordinput)
