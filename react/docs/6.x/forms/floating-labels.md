# React Floating labels

> React floating label component. Create beautifully simple form labels that float over your input fields.

## Example

Use `floatingLabel` property on `<CFormInput>`, `<CFormSelect>` or `<CFormTextarea>` to enable floating labels with textual form fields. A `placeholder` is required on each `<CFormInput>`, `<CFormSelect>` and `<CFormTextarea>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. The placeholder stays hidden while the label rests in the field, and shows under the floated label once the field has focus.

```html
import React from 'react'
import { CFormInput } from '@coreui/react'

export const FloatingLabelsExample = () => {
  return (
    <>
      <CFormInput
        type="email"
        id="floatingInput"
        floatingClassName="mb-4"
        floatingLabel="Email address"
        placeholder="name@example.com"
      />
      <CFormInput
        type="password"
        id="floatingPassword"
        floatingLabel="Password"
        placeholder="••••••••"
      />
    </>
  )
}
```

You can create the same form control by wrapping a pair of `<CFormInput>` and `<CFormLabel>` elements in `<CFormFloating>` to enable floating labels with textual form fields. A `placeholder` is required on each `<CFormInput>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. Write the `<CFormLabel>` first, so a screen reader announces it before the field's value. The control-first order keeps working.

```jsx
<CFormFloating className="mb-4">
  <CFormLabel htmlFor="floatingInput">Email address</CFormLabel>
  <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
</CFormFloating>
<CFormFloating>
  <CFormLabel htmlFor="floatingPassword">Password</CFormLabel>
  <CFormInput type="password" id="floatingPassword" placeholder="••••••••" />
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
        floatingClassName="mb-4"
        floatingLabel="Email addresss"
        placeholder="name@example.com"
        defaultValue="test@example.com"
        validationState="valid"
      />
      <CFormInput
        type="email"
        id="floatingInputInvalid"
        floatingLabel="Email addresss"
        placeholder="name@example.com"
        defaultValue="test@example.com"
        validationState="invalid"
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

## Date and time

Date, time, datetime-local, month, and week inputs also always show the label in its floated state. These controls do not support placeholders the way textual inputs do, so a `placeholder` is not required (and is ignored by most browsers on these types). For a field that formats its value by locale, use the [Date Picker](https://coreui.io/react/docs/forms/date-picker/#floating-labels) or the [Time Picker](https://coreui.io/react/docs/forms/time-picker/#floating-labels) with the `floatingLabel` property.

```html
import React from 'react'
import { CFormInput } from '@coreui/react'

export const FloatingLabelsDateTimeExample = () => {
  return (
    <>
      <CFormInput type="date" id="floatingDate" floatingClassName="mb-4" floatingLabel="Date" />
      <CFormInput type="time" id="floatingTime" floatingLabel="Time" />
    </>
  )
}
```

## Disabled

Add the `disabled` boolean property on a `<CFormInput>`, a `<CFormTextarea>` or a `<CFormSelect>` to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
import React from 'react'
import { CFormInput, CFormSelect, CFormTextarea } from '@coreui/react'

export const FloatingLabelsDisabledExample = () => {
  return (
    <>
      <CFormInput
        type="email"
        id="floatingInputDisabled"
        floatingClassName="mb-4"
        floatingLabel="Email address"
        placeholder="name@example.com"
        disabled
      />
      <CFormTextarea
        id="floatingTextareaDisabled"
        floatingClassName="mb-4"
        floatingLabel="Comments"
        placeholder="Leave a comment here"
        disabled
      />
      <CFormTextarea
        id="floatingTextarea2Disabled"
        floatingClassName="mb-4"
        floatingLabel="Comments"
        placeholder="Leave a comment here"
        style={{ height: '100px' }}
        defaultValue="Disabled textarea with some text inside"
        disabled
      />
      <CFormSelect
        id="floatingSelectDisabled"
        floatingLabel="Works with selects"
        aria-label="Floating label disabled select example"
        disabled
      >
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </>
  )
}
```

## Readonly plaintext

Floating labels also support the `plainText` property, which can be helpful for toggling from an editable `<CFormInput>` to a plaintext value without affecting the page layout.

```html
import React from 'react'
import { CFormInput } from '@coreui/react'

export const FloatingLabelsPlaintextExample = () => {
  return (
    <>
      <CFormInput
        type="email"
        id="floatingEmptyPlaintextInput"
        floatingClassName="mb-4"
        floatingLabel="Empty input"
        placeholder="name@example.com"
        plainText
        readOnly
      />
      <CFormInput
        type="email"
        id="floatingPlaintextInput"
        floatingLabel="Input with value"
        placeholder="name@example.com"
        defaultValue="name@example.com"
        plainText
        readOnly
      />
    </>
  )
}
```

## Input groups

Floating labels also support `<CInputGroup>` — put the floating control next to the other addons:

```html
import React from 'react'
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const FloatingLabelsInputGroupExample = () => {
  return (
    <CInputGroup>
      <CInputGroupText>@</CInputGroupText>
      <CFormInput type="text" id="floatingInputGroup1" floatingLabel="Username" placeholder="mdo" />
    </CInputGroup>
  )
}
```

When using `<CInputGroup>` and floating labels along with form validation, wrap the group in `.form-field`, mark the `<CInputGroup>` with `is-invalid`, and place the feedback outside it, so it renders under the whole group rather than inside the frame:

```html
import React from 'react'
import {
  CFormFeedback,
  CFormField,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

export const FloatingLabelsInputGroupValidationExample = () => {
  return (
    <CFormField>
      <CInputGroup className="is-invalid">
        <CInputGroupText>@</CInputGroupText>
        <CFormFloating className="is-invalid">
          <CFormInput
            type="text"
            id="floatingInputGroup2"
            placeholder="mdo"
            validationState="invalid"
            required
          />
          <CFormLabel htmlFor="floatingInputGroup2">Username</CFormLabel>
        </CFormFloating>
      </CInputGroup>
      <CFormFeedback validationState="invalid">Please choose a username.</CFormFeedback>
    </CFormField>
  )
}
```

## Always floating

Set `floatingLabelAlways` on the form control, or `always` on `<CFormFloating>`, to keep the label floated and show the placeholder.

```html
import React from 'react'
import { CFormFloating, CFormInput, CFormLabel } from '@coreui/react'

export const FloatingLabelsAlwaysExample = () => {
  return (
    <>
      <CFormInput
        type="email"
        id="alwaysFloatingInput"
        floatingClassName="mb-4"
        floatingLabel="Email address"
        floatingLabelAlways
        placeholder="name@example.com"
      />
      <CFormFloating always>
        <CFormLabel htmlFor="alwaysFloatingPassword">Password</CFormLabel>
        <CFormInput type="password" id="alwaysFloatingPassword" placeholder="••••••••" />
      </CFormFloating>
    </>
  )
}
```

The date and time pickers take `floatingLabelAlways` as well.

```html
import React from 'react'
import { CDatePicker } from '@coreui/react-pro'

export const FloatingLabelsAlwaysDatePickerExample = () => (
  <CDatePicker floatingLabel="Delivery date" floatingLabelAlways locale="en-US" />
)
```

By default, placeholders stay transparent until the control is focused. With `floatingLabelAlways`, the placeholder stays visible in both states, so keep it short on a textarea, where the floated label covers its first line.

## Layout

When working with the CoreUI for React grid system, be sure to place form elements within column classes.

```html
import React from 'react'
import { CCol, CFormInput, CFormSelect, CRow } from '@coreui/react'

export const FloatingLabelsLayoutExample = () => {
  return (
    <CRow xs={{ gutter: 3 }}>
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
