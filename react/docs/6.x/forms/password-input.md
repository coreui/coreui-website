# React Password Input Component

> A fully customizable React password input component with Bootstrap styling. Includes toggle visibility, validation, sizing options, and accessibility support.

## Example

The `` is a fully featured **React password input field** built with Bootstrap and CoreUI. It includes built-in **password visibility toggling**, `sm` / `lg` **sizing options**, and support for `disabled`, `readOnly`, and form validation states. Ideal for login forms, signup screens, and any secure input in your React app.

```html
import React from 'react'
import { CForm } from '@coreui/react'
import { CPasswordInput } from '@coreui/react-pro'

export const PasswordInputExample = () => {
  return (
    <CForm>
      <div className="mb-4">
        <CPasswordInput label="Password" placeholder="Enter your password" />
      </div>
      <div>
        <CPasswordInput
          label="Password with value"
          placeholder="Enter your password"
          defaultValue="Top secret"
        />
      </div>
    </CForm>
  )
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
import React from 'react'
import { CFormField, CFormLabel, CFormText } from '@coreui/react'
import { CPasswordInput } from '@coreui/react-pro'

export const PasswordInputFormFieldExample = () => {
  return (
    <CFormField>
      <CFormLabel htmlFor="passwordInputField">Password</CFormLabel>
      <CPasswordInput id="passwordInputField" placeholder="Enter your password" />
      <CFormText>At least 12 characters.</CFormText>
    </CFormField>
  )
}
```

## Sizing

Use the `size` prop to control the height and padding of the input. Available options:
- `size="sm"` – small input
- `size="lg"` – large input

```html
import React from 'react'
import { CPasswordInput } from '@coreui/react-pro'

export const PasswordInputSizingExample = () => {
  return (
    <>
      <CPasswordInput size="lg" placeholder="Large password input" aria-label="lg input example" />
      <CPasswordInput placeholder="Default password input" aria-label="default input example" />
      <CPasswordInput size="sm" placeholder="Small password input" aria-label="sm input example" />
    </>
  )
}
```

## Disabled

Add the `disabled` attribute to make the password input uneditable. This also dims the field to indicate it's inactive. The visibility toggle is disabled with it and leaves the tab order, so it can't change what a disabled field shows: a password revealed before stays visible, and can be hidden once the field is enabled again.

```html
import React from 'react'
import { CPasswordInput } from '@coreui/react-pro'

export const PasswordInputDisabledExample = () => {
  return (
    <>
      <CPasswordInput
        placeholder="Disabled password input"
        aria-label="Disabled password input example"
        disabled
      />
      <CPasswordInput
        placeholder="Disabled readonly password input"
        aria-label="Disabled password input example"
        disabled
        readOnly
      />
    </>
  )
}
```

## Readonly

Use the `readOnly` prop to make the input non-editable while still allowing the text to be copied. Unlike `disabled`, it keeps the default cursor.

```html
import React from 'react'
import { CPasswordInput } from '@coreui/react-pro'

export const PasswordInputReadonlyExample = () => {
  return (
    <CPasswordInput
      placeholder="Readonly password input"
      aria-label="Readonly password input example"
      defaultValue="Readonly input here..."
      readOnly
    />
  )
}
```

## Floating labels

Set `floatingLabel` and the component renders the label itself — no wrapper markup needed — and the text also becomes the field's accessible name; the toggle button rides along with the field, and the placeholder stays hidden until the label floats.

```html
import React from 'react'
import { CPasswordInput } from '@coreui/react-pro'

export const PasswordInputFloatingLabelExample = () => (
  <CPasswordInput floatingLabel="Password" id="floatingPasswordInput" />
)
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/react/docs/forms/floating-labels/#always-floating) with the placeholder showing.

## Controlled and uncontrolled visibility

_Added in 6.0.0._

The visibility toggle works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the visibility |
| --- | --- | --- |
| Uncontrolled | `defaultShowPassword` | the input, from that starting point |
| Controlled | `showPassword` | your component |

`onShowPasswordChange` fires in **both** modes with the requested state — so you can watch the toggle without taking it over.

### Uncontrolled

`defaultShowPassword` seeds the toggle — the input starts revealed and manages itself from there. Every example above leaves it out and starts hidden.

```jsx
<CPasswordInput defaultShowPassword label="Password" />
```

### Controlled

Pass `showPassword` and the input renders the type you pass — the toggle button only fires `onShowPasswordChange`. Feed the change back, or nothing flips.

```jsx
const [visible, setVisible] = useState(false)

<CPasswordInput label="Password" onShowPasswordChange={setVisible} showPassword={visible} />
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CPasswordInput /&gt;](./api/#cpasswordinput)
