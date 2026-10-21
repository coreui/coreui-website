# React Bootstrap Form Field Component

> Learn how to lay out Bootstrap-styled form controls with their labels and descriptions using CoreUI's React Form Field component.

## How to use React Bootstrap Form Field component

Use CoreUI's `<CFormField>` to stack a Bootstrap-styled control with its label and description in one consistent layout. The wrapper is a CSS grid: everything stacks in a single column, and a check control switches the field to a two-column layout with the control pinned beside its text.

```html
import React from 'react'
import { CFormField, CFormInput, CFormLabel, CFormText } from '@coreui/react'

export const FormFieldExample = () => {
  return (
    <CFormField>
      <CFormLabel htmlFor="fieldText">Email address</CFormLabel>
      <CFormInput type="email" id="fieldText" placeholder="name@example.com" />
      <CFormText>We&apos;ll never share your email with anyone else.</CFormText>
    </CFormField>
  )
}
```

### With a checkbox

```html
import React from 'react'
import { CCheckbox, CFormField, CFormText } from '@coreui/react'

export const FormFieldCheckboxExample = () => {
  return (
    <CFormField>
      <CCheckbox id="fieldCheck" label="Subscribe to the newsletter" />
      <CFormText>We send one email a month, and never share your address.</CFormText>
    </CFormField>
  )
}
```
