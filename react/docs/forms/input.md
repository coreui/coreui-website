# React Form Input Component

> React input components. Give textual form `<input>`s an upgrade with custom styles, sizing, focus states, validation, and more.

## Example

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

If you need to add custom classNames to form's components, or need to add some custom elements you can add each form component separately. Please check the example below.

```jsx
<CForm>
  <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
  <CFormInput type="email" id="exampleFormControlInput1" placeholder="name@example.com" aria-describedby="exampleFormControlInputHelpInline" />
  <CFormText as="span" id="exampleFormControlInputHelpInline">
    Must be 8-20 characters long.
  </CFormText>
</CForm>
```

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

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

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

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

## Readonly

Add the `readOnly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

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

## Readonly plain text

If you want to have `<input readonly>` elements in your form styled as plain text, use the `plainText` boolean property to remove the default form field styling and preserve the correct margin and padding.

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

## Color

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormInput /&gt;](./api/#cforminput)
- [&lt;CFormFeedback /&gt;](./api/#cformfeedback)
- [&lt;CFormLabel /&gt;](./api/#cformlabel)
- [&lt;CFormText /&gt;](./api/#cformtext)
