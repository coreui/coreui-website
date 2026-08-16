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
      <div className="mb-3">
        <COneTimePassword label="Enter OTP Code" id="basicOTP" name="otp" onChange={setValue}>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      {value && <div className="text-body-secondary small">Current value: {value}</div>}
    </CForm>
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
      <div className="mb-3">
        <COneTimePassword label="Numeric OTP (default)" type="number">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div className="mb-3">
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
      <div className="mb-3">
        <COneTimePassword label="Single character placeholder" placeholder="0">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div className="mb-3">
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

Set initial values using the `value` prop.

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

## Input modes

Control user input behavior with linear and non-linear modes.

```html
import React from 'react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordInputModesExample = () => {
  return (
    <>
      <div className="mb-3">
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
      <div className="mb-3">
        <COneTimePassword label="Auto-submit OTP (fill all 6 digits)" autoSubmit>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <CButton type="submit" color="primary">
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
      <div className="mb-3">
        <COneTimePassword label="6-digit OTP with separators">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <div className="px-2 text-body-tertiary fw-bold">-</div>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div className="mb-3">
        <COneTimePassword label="9-digit OTP with separators">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <div className="px-2 text-body-tertiary fw-bold">•</div>
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <div className="px-2 text-body-tertiary fw-bold">•</div>
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

## Sizing variants

One-time password input supports different sizes. You may choose from small, normal (default), and large inputs to match our similarly sized text inputs.

```html
import React from 'react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordSizingExample = () => {
  return (
    <>
      <div className="mb-3">
        <COneTimePassword label="Large OTP input" size="lg">
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
          <COneTimePasswordInput />
        </COneTimePassword>
      </div>
      <div className="mb-3">
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

## Disabled state

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

## Readonly state

Use the `readOnly` prop to make the one-time password input non-editable but still selectable.

```html
import React from 'react'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/react-pro'

export const OneTimePasswordReadonlyExample = () => {
  return (
    <COneTimePassword label="Readonly OTP input" readOnly defaultValue="123456">
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
