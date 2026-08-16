# React Bootstrap Textarea Component

> Learn how to style and enhance Bootstrap-style textarea fields in React using CoreUI components with custom sizing, disabled states, and validation feedback.

## How to use React Bootstrap Textarea component

Use `<CFormTextarea>` to create multi-line text inputs in your forms, styled to match Bootstrap’s design system.

### Basic example

Use the component with a label and help text for accessibility and usability.

```html
import React from 'react'
import { CForm, CFormTextarea } from '@coreui/react'

export const FormTextareaExample = () => {
  return (
    <CForm>
      <CFormTextarea
        id="exampleFormControlTextarea1"
        label="Example textarea"
        rows={3}
        text="Must be 8-20 words long."
      ></CFormTextarea>
    </CForm>
  )
}
```

You can also build the same structure manually using individual form components:

```jsx
<CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
<CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
<CFormText as="span" id="passwordHelpInline">Must be 8-20 words long.</CFormText>
```

### Disabled state

Add the `disabled` prop to make the textarea inactive and visually grayed out.

```html
import React from 'react'
import { CFormTextarea } from '@coreui/react'

export const FormTextareaDisabledExample = () => {
  return (
    <CFormTextarea
      className="mb-3"
      placeholder="Disabled textarea"
      aria-label="Disabled textarea example"
      disabled
    ></CFormTextarea>
  )
}
```

### Read-only

Use the `readOnly` prop to prevent edits while still allowing text selection and copying.

```html
import React from 'react'
import { CFormTextarea } from '@coreui/react'

export const FormTextareaReadonlyExample = () => {
  return (
    <CFormTextarea
      placeholder="Readonly textarea"
      aria-label="Readonly textarea example"
      disabled
      readOnly
    ></CFormTextarea>
  )
}
```

## API reference

Refer to the API documentation below for a complete list of available props and subcomponents used to build Bootstrap-style textareas in React.

- [&lt;CFormTextarea /&gt;](../api/#cformtextarea)
- [&lt;CFormFeedback /&gt;](../api/#cformfeedback)
- [&lt;CFormLabel /&gt;](../api/#cformlabel)
- [&lt;CFormText /&gt;](../api/#cformtext)
