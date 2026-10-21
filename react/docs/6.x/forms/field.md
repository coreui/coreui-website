# React Form Field

> A layout wrapper for a form control, its label, description and validation feedback, built on CSS grid.

`<CFormField>` renders the `.form-field` wrapper, which gives a control the layout and spacing it needs alongside its label, description and validation feedback — so a form is spaced by the field itself rather than by margin utilities sprinkled over its parts.

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

## How it works

- **Default layout** is a single-column grid: everything stacks vertically with one gap. Use it for text inputs, selects, textareas, ranges, input groups and any of the [PRO field components](https://coreui.io/react/docs/forms/form-control-group/).
- **Two-column layout** switches on through `:has()` when the input `<CCheckbox>`, `<CRadio>` or `<CSwitch>` renders (`.check`, `.radio`, `.switch`) is a direct child — the control pins to the first column, the label and description stack in the second. The deprecated `.form-check-input` triggers it too, so the markup the legacy `<CFormCheck>` and `<CFormSwitch>` render lays out the same way.
- **A field label** (`<CFormLabel>`, rendering `.form-label`) spans both columns and sits above the control row.
- **Grouped controls** — nest a `<CFormField>` per control inside an outer one to put several radios or checkboxes under a shared label with a shared description.

## Examples

### Select

```html
import React from 'react'
import { CFormField, CFormLabel, CFormSelect } from '@coreui/react'

export const FormFieldSelectExample = () => {
  return (
    <CFormField>
      <CFormLabel htmlFor="fieldSelect">Country</CFormLabel>
      <CFormSelect
        id="fieldSelect"
        options={[
          { label: 'Choose one…' },
          { label: 'United States', value: '1' },
          { label: 'Canada', value: '2' },
          { label: 'United Kingdom', value: '3' },
        ]}
      />
    </CFormField>
  )
}
```

### Textarea

```html
import React from 'react'
import { CFormField, CFormLabel, CFormText, CFormTextarea } from '@coreui/react'

export const FormFieldTextareaExample = () => {
  return (
    <CFormField>
      <CFormLabel htmlFor="fieldTextarea">Message</CFormLabel>
      <CFormTextarea id="fieldTextarea" rows={3} />
      <CFormText>Be sure to include the relevant details.</CFormText>
    </CFormField>
  )
}
```

### Checkbox

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

### Grouped

Nest one `<CFormField>` per control inside an outer one, and give the group its own `.form-label`.

```html
import React from 'react'
import { CFormField, CFormText, CRadio } from '@coreui/react'

export const FormFieldGroupedExample = () => {
  return (
    <CFormField>
      <span className="form-label">Delivery</span>
      <CFormField>
        <CRadio name="fieldRadio" id="fieldRadio1" label="Standard" defaultChecked />
        <CFormText>Three to five working days.</CFormText>
      </CFormField>
      <CFormField>
        <CRadio name="fieldRadio" id="fieldRadio2" label="Express" />
        <CFormText>Next working day, where available.</CFormText>
      </CFormField>
    </CFormField>
  )
}
```

### Switch

```html
import React from 'react'
import { CFormField, CFormText, CSwitch } from '@coreui/react'

export const FormFieldSwitchExample = () => {
  return (
    <CFormField>
      <CSwitch id="fieldSwitch" label="Email notifications" />
      <CFormText>Turn this off and we will only contact you about your account.</CFormText>
    </CFormField>
  )
}
```

## Overhead label

When a check, radio, or switch needs a field title above it, add a `.form-label`. It sits on its own row above the control, while the control's own label and description keep their places:

```html
import React from 'react'
import { CCheckbox, CFormField, CFormText } from '@coreui/react'

export const FormFieldOverheadLabelExample = () => {
  return (
    <CFormField>
      <span className="form-label">Terms and conditions</span>
      <CCheckbox id="fieldOverheadCheck" label="I agree to the terms" />
      <CFormText>Please read them before agreeing.</CFormText>
    </CFormField>
  )
}
```

## Validation

Feedback elements are children of the field like any other, so they inherit its gap and land under the control. Set `validationState` on the form component and pass the message through `feedbackValid` / `feedbackInvalid`.

```html
import React from 'react'
import { CFormField, CFormInput, CFormLabel } from '@coreui/react'

export const FormFieldValidationExample = () => {
  return (
    <CFormField>
      <CFormLabel htmlFor="fieldValidation">Username</CFormLabel>
      <CFormInput
        type="text"
        id="fieldValidation"
        defaultValue="jan kowalski"
        validationState="invalid"
        feedbackInvalid="A username cannot contain spaces."
      />
    </CFormField>
  )
}
```

See [validation](https://coreui.io/react/docs/forms/validation/) for the full picture, including the server-side and browser-native flavours.
