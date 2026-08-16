# React Bootstrap Form Input Component

> Learn how to use CoreUI’s React input components styled with Bootstrap to create accessible, styled, and responsive form inputs.

## How to use React Bootstrap Form Input component

Use CoreUI’s `<CFormInput>` and related components styled with Bootstrap to create customizable and accessible form inputs in React. Easily control size, disabled state, readonly fields, file uploads, color pickers, and more.

### Basic usage

```html
import React from 'react'
import { CForm, CFormInput } from '@coreui/react'

export const FormInputExample = () => {
  return (
    <CForm>
      <CFormInput
        type="email"
        id="exampleFormControlInput1"
        label="Email address"
        placeholder="name@example.com"
        text="Must be 8-20 characters long."
        aria-describedby="exampleFormControlInputHelpInline"
      />
    </CForm>
  )
}
```

To build more complex form controls with labels and help text, you can compose the form manually using CoreUI components:

```jsx
<CForm>
  <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
  <CFormInput
    type="email"
    id="exampleFormControlInput1"
    placeholder="name@example.com"
    aria-describedby="exampleFormControlInputHelpInline"
  />
  <CFormText as="span" id="exampleFormControlInputHelpInline">
    Must be 8–20 characters long.
  </CFormText>
</CForm>
```

## Input sizing

Change input sizes using the `size` prop (`"sm"` or `"lg"`).

```html
import React from 'react'
import { CFormInput } from '@coreui/react'

export const FormInputSizingExample = () => {
  return (
    <>
      <CFormInput type="text" size="lg" placeholder="Large input" aria-label="lg input example" />
      <CFormInput type="text" placeholder="Default input" aria-label="default input example" />
      <CFormInput type="text" size="sm" placeholder="Small input" aria-label="sm input example" />
    </>
  )
}
```

## Disabled inputs

Add the `disabled` prop to visually disable the input and remove pointer events.

```html
import React from 'react'
import { CFormInput } from '@coreui/react'

export const FormInputDisabledExample = () => {
  return (
    <>
      <CFormInput
        type="text"
        placeholder="Disabled input"
        aria-label="Disabled input example"
        disabled
      />
      <CFormInput
        type="text"
        placeholder="Disabled readonly input"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
    </>
  )
}
```

## Read-only inputs

Use the `readOnly` prop to prevent editing while maintaining focus and tab behavior.

```html
import React from 'react'
import { CCol, CFormInput, CFormLabel, CRow } from '@coreui/react'

export const FormInputReadonlyExample = () => {
  return (
    <>
      <CRow className="mb-3">
        <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput
            type="text"
            id="staticEmail"
            defaultValue="email@example.com"
            readOnly
            plainText
          />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Password
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="password" id="inputPassword" />
        </CCol>
      </CRow>
    </>
  )
}
```

## Plaintext read-only inputs

Add `plainText` for inputs that appear as plain text but retain layout spacing.

```html
import React from 'react'
import { CCol, CFormInput, CFormLabel, CRow } from '@coreui/react'

export const FormInputReadonlyPlainTextExample = () => {
  return (
    <>
      <CRow className="mb-3">
        <CFormLabel htmlFor="staticEmail2" className="col-sm-2 col-form-label">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput
            type="text"
            id="staticEmail2"
            defaultValue="email@example.com"
            readOnly
            plainText
          />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="inputPassword2" className="col-sm-2 col-form-label">
          Password
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="password" id="inputPassword2" />
        </CCol>
      </CRow>
    </>
  )
}
```

```html
import React from 'react'
import { CButton, CCol, CForm, CFormInput, CFormLabel } from '@coreui/react'

export const FormInputReadonlyPlainText2Example = () => {
  return (
    <CForm className="row g-3">
      <CCol xs="auto">
        <CFormLabel htmlFor="staticEmail3" className="visually-hidden">
          Email
        </CFormLabel>
        <CFormInput
          type="text"
          id="staticEmail3"
          defaultValue="email@example.com"
          readOnly
          plainText
        />
      </CCol>
      <CCol xs="auto">
        <CFormLabel htmlFor="inputPassword3" className="visually-hidden">
          Password
        </CFormLabel>
        <CFormInput type="password" id="inputPassword3" placeholder="Password" />
      </CCol>
      <CCol xs="auto">
        <CButton color="primary" type="submit" className="mb-3">
          Confirm identity
        </CButton>
      </CCol>
    </CForm>
  )
}
```

## File input

Use CoreUI's `` for custom-styled file upload fields.

```html
import React from 'react'
import { CFormInput } from '@coreui/react'

export const FormInputFileExample = () => {
  return (
    <>
      <div className="mb-3">
        <CFormInput type="file" id="formFile" label="Default file input example" />
      </div>
      <div className="mb-3">
        <CFormInput
          type="file"
          id="formFileMultiple"
          label="Multiple files input example"
          multiple
        />
      </div>
      <div className="mb-3">
        <CFormInput
          type="file"
          id="formFileDisabled"
          label="Disabled file input example"
          disabled
        />
      </div>
      <div className="mb-3">
        <CFormInput type="file" size="sm" id="formFileSm" label="Small file input example" />
      </div>
      <div>
        <CFormInput type="file" size="lg" id="formFileLg" label="Large file input example" />
      </div>
    </>
  )
}
```

## Color input

Color inputs are supported using `type="color"`.

```html
import React from 'react'
import { CFormInput } from '@coreui/react'

export const FormInputColorExample = () => {
  return (
    <CFormInput
      type="color"
      id="exampleColorInput"
      defaultValue="#563d7c"
      label="Color picker"
      title="Choose your color"
    />
  )
}
```

## API reference

Refer to the API documentation for detailed descriptions of all the props and configuration options.

- [&lt;CFormInput /&gt;](../api/#cforminput)
- [&lt;CFormFeedback /&gt;](../api/#cformfeedback)
- [&lt;CFormLabel /&gt;](../api/#cformlabel)
- [&lt;CFormText /&gt;](../api/#cformtext)
