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
      <div className="mb-3">
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

Add the `disabled` attribute to make the password input uneditable. This also dims the field to indicate it's inactive.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CPasswordInput /&gt;](./api/#cpasswordinput)
