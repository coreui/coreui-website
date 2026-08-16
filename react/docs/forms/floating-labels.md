# React Floating labels

> React floating label component. Create beautifully simple form labels that float over your input fields.

## Example

Use `floatingLabel` property on `<CFormInput>`, `<CFormSelect>` or `<CFormTextarea>` to enable floating labels with textual form fields. A `placeholder` is required on each `<CFormInput>`, `<CFormSelect>` and `<CFormTextarea>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element.

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

You can create the same form control by wrapping a pair of `<CFormInput>` and `<CFormLabel>` elements in `<CFormFloating>` to enable floating labels with textual form fields. A `placeholder` is required on each `<CFormInput>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. Also, note that the `<CFormInput>` must come first so we can utilize a sibling selector (e.g., `~`).

```jsx
<CFormFloating className="mb-3">
  <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
  <CFormLabel htmlFor="floatingInput">Email address</CFormLabel>
</CFormFloating>
<CFormFloating>
  <CFormInput type="password" id="floatingPassword" placeholder="Password" />
  <CFormLabel htmlFor="exampleFormControlTextarea1">Password</CFormLabel>
</CFormFloating>
```

When there's a `value` already defined, `<CFormLabel>`s will automatically adjust to their floated position.

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

Form validation styles also work as expected.

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

By default, `<CFormTextarea>`s will be the same height as `<CFormInput>`s.

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

To set a custom height on your `<CFormTextarea>`, do not use the `rows` attribute. Instead, set an explicit `height` (either inline or via custom CSS).

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

## Selects

Other than `<CFormInput>`, floating labels are only available on `<CFormSelect>`s. They work in the same way, but unlike `<CFormInput>`s, they'll always show the `<CFormLabel>` in its floated state. **Selects with `size` and `multiple` are not supported.**

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

## Layout

When working with the CoreUI for Bootstrap grid system, be sure to place form elements within column classes.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormFloating /&gt;](./api/#cformfloating)
