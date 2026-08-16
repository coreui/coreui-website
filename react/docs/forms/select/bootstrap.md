# React Bootstrap Select Component

> Learn how to build accessible and customizable dropdown menus using CoreUI’s React select component styled with Bootstrap.

## How to use React Bootstrap Select component

Use CoreUI’s `<CFormSelect>` to create custom-styled `<select>` elements that match the Bootstrap look and feel. It supports single and multiple selections, custom sizing, and full accessibility.

### Basic usage

The default select renders a Bootstrap-styled native dropdown.

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

You can also define options manually using JSX:

```jsx
<CFormSelect aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3" disabled>Three</option>
</CFormSelect>
```

### Sizing

Use the `size` prop with values like `"sm"` or `"lg"` to change the select height.

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

You can also enable multi-select behavior using the `multiple` prop:

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

And specify a fixed visible size using the `htmlSize` prop:

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

### Disabled state

Add the `disabled` prop to disable user interaction and apply a muted appearance.

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

## API reference

Refer to the API documentation below for detailed descriptions of all available props and subcomponents.

- [&lt;CFormSelect /&gt;](../api/#cformselect)
- [&lt;CFormFeedback /&gt;](../api/#cformfeedback)
- [&lt;CFormLabel /&gt;](../api/#cformlabel)
- [&lt;CFormText /&gt;](../api/#cformtext)
