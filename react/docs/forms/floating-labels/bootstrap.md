# React Bootstrap Floating Labels Component

> Learn how to create clean and accessible floating form labels in React using CoreUI components styled with Bootstrap.

## How to use React Bootstrap Floating Labels component

Use CoreUI’s `<CFormFloating>`, `<CFormInput>`, `<CFormSelect>`, and `<CFormTextarea>` components with Bootstrap styling to create floating labels in React. Floating labels automatically animate above form fields when content is entered or focused.

### Basic example

Enable floating labels by setting the `floatingLabel` prop on supported form controls. A `placeholder` is required as the floating label effect relies on the `:placeholder-shown` pseudo-class.

```html
import React from 'react'
import { CFormInput } from '@coreui/react'

export const FloatingLabelsExample = () => {
  return (
    <>
      <CFormInput
        type="email"
        id="floatingInput"
        floatingClassName="mb-3"
        floatingLabel="Email address"
        placeholder="name@example.com"
      />
      <CFormInput
        type="password"
        id="floatingPassword"
        floatingLabel="Password"
        placeholder="Password"
      />
    </>
  )
}
```

### Using `<CFormFloating>`

You can also wrap a `<CFormInput>` and `<CFormLabel>` pair inside a `<CFormFloating>` container. Make sure the input comes first to enable proper sibling selector behavior.

```jsx
<CFormFloating className="mb-3">
  <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
  <CFormLabel htmlFor="floatingInput">Email address</CFormLabel>
</CFormFloating>
<CFormFloating>
  <CFormInput type="password" id="floatingPassword" placeholder="Password" />
  <CFormLabel htmlFor="floatingPassword">Password</CFormLabel>
</CFormFloating>
```

### Pre-filled values

Floating labels adjust automatically when inputs have a preset value.

```html
import React from 'react'
import { CFormInput } from '@coreui/react'

export const FloatingLabels2Example = () => {
  return (
    <CFormInput
      type="email"
      id="floatingInputValue"
      floatingLabel="Input with value"
      placeholder="name@example.com"
      defaultValue="test@example.com"
    />
  )
}
```

### Validation support

Floating labels integrate seamlessly with form validation styles.

```html
import React from 'react'
import { CFormInput } from '@coreui/react'

export const FloatingLabelsValidationExample = () => {
  return (
    <>
      <CFormInput
        type="email"
        id="floatingInputValid"
        floatingClassName="mb-3"
        floatingLabel="Email addresss"
        placeholder="name@example.com"
        defaultValue="test@example.com"
        valid
      />
      <CFormInput
        type="email"
        id="floatingInputInvalid"
        floatingLabel="Email addresss"
        placeholder="name@example.com"
        defaultValue="test@example.com"
        invalid
      />
    </>
  )
}
```

## Textareas

Textareas styled with floating labels maintain the same height as inputs by default.

```html
import React from 'react'
import { CFormTextarea } from '@coreui/react'

export const FloatingLabelsTextareaExample = () => {
  return (
    <CFormTextarea
      id="floatingTextarea"
      floatingLabel="Comments"
      placeholder="Leave a comment here"
    ></CFormTextarea>
  )
}
```

To change the height, set an explicit `height` via inline styles or custom CSS rather than using the `rows` attribute.

```html
import React from 'react'
import { CFormTextarea } from '@coreui/react'

export const FloatingLabelsTextarea2Example = () => {
  return (
    <CFormTextarea
      placeholder="Leave a comment here"
      id="floatingTextarea2"
      floatingLabel="Comments"
      style={{ height: '100px' }}
    ></CFormTextarea>
  )
}
```

## Select elements

Floating labels also support `<CFormSelect>`. The label always appears in the floated state. **Note:** This is not compatible with `size` or `multiple`.

```html
import React from 'react'
import { CFormSelect } from '@coreui/react'

export const FloatingLabelsSelectExample = () => {
  return (
    <CFormSelect
      id="floatingSelect"
      floatingLabel="Works with selects"
      aria-label="Floating label select example"
    >
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  )
}
```

## Grid layout support

Use floating labels within the CoreUI Bootstrap grid system by nesting inputs inside column classes.

```html
import React from 'react'
import { CCol, CFormInput, CFormSelect, CRow } from '@coreui/react'

export const FloatingLabelsLayoutExample = () => {
  return (
    <CRow xs={{ gutter: 2 }}>
      <CCol md>
        <CFormInput
          type="email"
          id="floatingInputGrid"
          floatingLabel="Email address"
          placeholder="name@example.com"
          defaultValue="email@example.com"
        />
      </CCol>
      <CCol md>
        <CFormSelect
          id="floatingSelectGrid"
          floatingLabel="Email address"
          aria-label="Works with selects"
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CCol>
    </CRow>
  )
}
```

## API reference

Refer to the API documentation for detailed descriptions of all available props and configuration options.

- [&lt;CFormFloating /&gt;](../api/#cformfloating)
