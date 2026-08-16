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

## Sizing

You may also choose from small and large custom selects to match our similarly sized text inputs.

```html
import React from 'react'
import { CFormSelect } from '@coreui/react'

export const FormSelectSizingExample = () => {
  return (
    <>
      <CFormSelect size="lg" className="mb-3" aria-label="Large select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
      <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormSelect /&gt;](./api/#cformselect)
- [&lt;CFormFeedback /&gt;](./api/#cformfeedback)
- [&lt;CFormLabel /&gt;](./api/#cformlabel)
- [&lt;CFormText /&gt;](./api/#cformtext)
