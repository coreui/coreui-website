# React Select Component

> React select component. Customize the native `<select>`s with custom CSS that changes the element's initial appearance.

## Default

```html
import React from 'react'
import { CFormSelect } from '@coreui/react'

export const FormSelectExample = () => {
  return (
    <CFormSelect
      aria-label="Default select example"
      options={[
        { label: 'Open this select menu' },
        { label: 'One', value: '1' },
        { label: 'Two', value: '2' },
        { label: 'Three', value: '3', disabled: true },
      ]}
    />
  )
}
```

You can also add options manually

```jsx 
<CFormSelect aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3" disabled>Three</option>
</CFormSelect>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
import React from 'react'
import { CFormField, CFormLabel, CFormSelect, CFormText } from '@coreui/react'

export const FormSelectFormFieldExample = () => {
  return (
    <CFormField>
      <CFormLabel htmlFor="selectField">Country</CFormLabel>
      <CFormSelect
        id="selectField"
        options={[
          { label: 'Choose one…' },
          { label: 'United States', value: '1' },
          { label: 'Canada', value: '2' },
          { label: 'United Kingdom', value: '3' },
        ]}
      />
      <CFormText>We ship to these three for now.</CFormText>
    </CFormField>
  )
}
```

## Sizing

You may also choose from small and large custom selects to match our similarly sized text inputs.

```html
import React from 'react'
import { CFormSelect } from '@coreui/react'

export const FormSelectSizingExample = () => {
  return (
    <>
      <CFormSelect size="lg" className="mb-4" aria-label="Large select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
      <CFormSelect size="sm" className="mb-4" aria-label="Small select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </>
  )
}
```

The `multiple` attribute is also supported:

```html
import React from 'react'
import { CFormSelect } from '@coreui/react'

export const FormSelectSizing2Example = () => {
  return (
    <CFormSelect size="lg" multiple aria-label="Multiple select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  )
}
```

As is the `htmlSize` property:

```html
import React from 'react'
import { CFormSelect } from '@coreui/react'

export const FormSelectSizing3Example = () => {
  return (
    <CFormSelect htmlSize={3} multiple aria-label="size 3 select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  )
}
```

## Disabled

Add the `disabled` boolean attribute on a select to give it a grayed out appearance and remove pointer events.

```html
import React from 'react'
import { CFormSelect } from '@coreui/react'

export const FormSelectDisabledExample = () => {
  return (
    <CFormSelect
      aria-label="Default select example"
      options={[
        'Open this select menu',
        { label: 'One', value: '1' },
        { label: 'Two', value: '2' },
        { label: 'Three', value: '3', disabled: true },
      ]}
    />
  )
}
```

## The chevron on something that is not a select

`.form-control-caret` draws the same chevron on an element that is not a `<select>` — a button opening a listbox, for instance.

```html
import React from 'react'

export const FormSelectCaretExample = () => {
  return (
    <button className="form-control form-control-caret text-start" type="button">
      Open this menu
    </button>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormSelect /&gt;](./api/#cformselect)
- [&lt;CFormFeedback /&gt;](./api/#cformfeedback)
- [&lt;CFormLabel /&gt;](./api/#cformlabel)
- [&lt;CFormText /&gt;](./api/#cformtext)
