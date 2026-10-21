# React Bootstrap Form Validation

> Learn how to use Bootstrap-style validation in React forms using CoreUI components. Show validation messages, use custom styles, and support native browser behavior.

## How to use React Bootstrap Form Validation

React Bootstrap validation lets you provide custom or native HTML5 feedback styles for form controls. CoreUI components support both approaches for a better user experience.

### Custom validation styles

Disable the browser’s native validation UI with the `noValidate` prop on `<CForm>`, and use the `validate` prop to opt in to the `:user-invalid` styling — feedback appears after the user interacts with a control or attempts to submit. Pass `validate="valid"` to also show success styling. With both props, `<CForm>` stops an invalid submit, marks the invalid controls, links their messages and moves focus to the first, as described on the [validation page](https://coreui.io/react/docs/forms/validation/). Try submitting the form below to see it in action.

```html
import React from 'react'
import {
  CCheckbox,
  CCol,
  CButton,
  CForm,
  CFormFeedback,
  CFormField,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationExample = () => {
  return (
    <CForm className="row g-4" noValidate validate="valid">
      <CCol md={4}>
        <CFormInput
          type="text"
          defaultValue="Mark"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="First name"
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          defaultValue="Otto"
          feedbackValid="Looks good!"
          id="validationCustom02"
          label="Last name"
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CFormField>
          <CInputGroup>
            <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
            <CFormInput
              type="text"
              aria-describedby="inputGroupPrepend"
              id="validationCustomUsername"
              required
            />
          </CInputGroup>
          <CFormFeedback validationState="invalid">Please choose a username.</CFormFeedback>
        </CFormField>
      </CCol>
      <CCol md={6}>
        <CFormInput
          type="text"
          feedbackInvalid="Please provide a valid city."
          id="validationCustom03"
          label="City"
          required
        />
      </CCol>
      <CCol md={3}>
        <CFormSelect
          feedbackInvalid="Please select a valid state."
          id="validationCustom04"
          label="State"
          required
        >
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={3}>
        <CFormInput
          type="text"
          feedbackInvalid="Please provide a valid zip."
          id="validationCustom05"
          label="Zip"
          required
        />
      </CCol>
      <CCol xs={12}>
        <CFormField>
          <CCheckbox id="invalidCheck" label="Agree to terms and conditions" required />
          <CFormFeedback validationState="invalid">You must agree before submitting.</CFormFeedback>
        </CFormField>
      </CCol>
      <CCol xs={12}>
        <CButton theme="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
```

### Browser default behavior

If you prefer to rely on native browser validation, skip `noValidate` and `validate`. Submit the form and let the browser handle feedback based on built-in rules.

```html
import React from 'react'
import {
  CCheckbox,
  CCol,
  CButton,
  CForm,
  CFormField,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationBrowserDefaultsExample = () => {
  return (
    <CForm className="row g-4">
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationDefault01"
          label="First name"
          defaultValue="Mark"
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationDefault02"
          label="Last name"
          defaultValue="Otto"
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
        <CInputGroup>
          <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationDefaultUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend02"
            required
          />
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormInput type="text" id="validationDefault03" label="City" required />
      </CCol>
      <CCol md={3}>
        <CFormSelect id="validationDefault04" label="State">
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={3}>
        <CFormInput type="text" id="validationDefault05" label="Zip" required />
      </CCol>
      <CCol xs={12}>
        <CFormField>
          <CCheckbox id="invalidCheck" label="Agree to terms and conditions" required />
        </CFormField>
      </CCol>
      <CCol xs={12}>
        <CButton theme="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
```

### Manual validation

Use the `validationState` prop directly on components like `<CFormInput>` to apply validation styles manually, which is useful for server-side validation or complex form logic. `"invalid"` also blocks the submit until it is cleared; pass your state setter to `onValidationStateChange` to drop it when the user changes the value, as the example below does.

```html
import React, { useState } from 'react'
import {
  CCheckbox,
  CCol,
  CButton,
  CForm,
  CFormFeedback,
  CFormField,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationCustomExample = () => {
  const [states, setStates] = useState<Record<string, string | undefined>>({
    city: 'invalid',
    email: 'valid',
    repeatEmail: 'valid',
    state: 'invalid',
    terms: 'invalid',
    username: 'invalid',
    zip: 'invalid',
  })
  const clear = (field: string) => () => setStates((prev) => ({ ...prev, [field]: undefined }))

  return (
    <CForm className="row g-4">
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationServer01"
          label="Email"
          feedback="Looks good!"
          defaultValue="name@surname.com"
          onValidationStateChange={clear('email')}
          validationState={states.email}
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationServer02"
          label="Repeat email"
          feedback="Looks good!"
          defaultValue="name@surname.com"
          onValidationStateChange={clear('repeatEmail')}
          validationState={states.repeatEmail}
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationServerUsername">Username</CFormLabel>
        <CFormField>
          <CInputGroup>
            <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
            <CFormInput
              type="text"
              id="validationServerUsername"
              defaultValue=""
              aria-describedby="inputGroupPrepend03 validationServerUsernameFeedback"
              onValidationStateChange={clear('username')}
              validationState={states.username}
              required
            />
          </CInputGroup>
          <CFormFeedback id="validationServerUsernameFeedback" validationState="invalid">
            Please choose a username.
          </CFormFeedback>
        </CFormField>
      </CCol>
      <CCol md={6}>
        <CFormInput
          type="text"
          id="validationServer03"
          label="City"
          feedback="Please provide a valid city."
          onValidationStateChange={clear('city')}
          validationState={states.city}
          required
        />
      </CCol>
      <CCol md={3}>
        <CFormSelect
          id="validationServer04"
          label="State"
          feedback="Please select a valid state."
          defaultValue=""
          onValidationStateChange={clear('state')}
          validationState={states.state}
        >
          <option disabled value="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={3}>
        <CFormInput
          type="text"
          id="validationServer05"
          label="zip"
          feedback="Please provide a valid zip."
          onValidationStateChange={clear('zip')}
          validationState={states.zip}
          required
        />
      </CCol>
      <CCol xs={12}>
        <CFormField>
          <CCheckbox
            id="invalidCheck"
            label="Agree to terms and conditions"
            onValidationStateChange={clear('terms')}
            validationState={states.terms}
            required
          />
          <CFormFeedback validationState="invalid">You must agree before submitting.</CFormFeedback>
        </CFormField>
      </CCol>
      <CCol xs={12}>
        <CButton theme="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
```

### Supported components

These CoreUI components support Bootstrap validation classes:

- `<CCheckbox>`
- `<CFormInput>`
- `<CFormSelect>`
- `<CFormTextarea>`
- `<CRadio>`
- `<CSwitch>`

```html
import React from 'react'
import {
  CButton,
  CCheckbox,
  CForm,
  CFormFeedback,
  CFormField,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CRadio,
} from '@coreui/react'

export const ValidationSupportedElementsExample = () => {
  return (
    <CForm>
      <div className="mb-4">
        <CFormTextarea
          feedbackInvalid="Please enter a message in the textarea."
          id="validationTextarea"
          validationState="invalid"
          label="Textarea"
          placeholder="Required example textarea"
          required
        ></CFormTextarea>
      </div>
      <CFormField className="mb-4">
        <CCheckbox
          id="validationFormCheck1"
          validationState="invalid"
          label="Check this checkbox"
          required
        />
        <CFormFeedback validationState="invalid">Example invalid feedback text</CFormFeedback>
      </CFormField>
      <CFormField>
        <CRadio
          name="radio-stacked"
          id="validationFormCheck2"
          validationState="invalid"
          label="Check this checkbox"
          required
        />
      </CFormField>
      <CFormField className="mb-4">
        <CRadio
          name="radio-stacked"
          id="validationFormCheck3"
          validationState="invalid"
          label="Or toggle this other radio"
          required
        />
        <CFormFeedback validationState="invalid">More example invalid feedback text</CFormFeedback>
      </CFormField>
      <div className="mb-4">
        <CFormSelect
          feedbackInvalid="Example invalid select feedback"
          aria-label="select example"
          validationState="invalid"
          required
        >
          <option selected value="">
            Open this select menu
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </div>
      <div className="mb-4">
        <CFormInput
          type="file"
          id="validationTextarea"
          feedbackInvalid="Example invalid form file feedback"
          aria-label="file example"
          validationState="invalid"
          required
        />
      </div>
      <div className="mb-4">
        <CButton type="submit" theme="primary" disabled>
          Submit form
        </CButton>
      </div>
    </CForm>
  )
}
```

### Tooltip feedback

For compact layouts, validation messages can appear as tooltips. Make sure the parent container has `position: relative` to position tooltips correctly.

```html
import React from 'react'
import {
  CCol,
  CButton,
  CForm,
  CFormFeedback,
  CFormField,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationTooltipsExample = () => {
  return (
    <CForm className="row g-4" noValidate validate="valid">
      <CCol md={4} className="position-relative">
        <CFormInput
          type="text"
          defaultValue="Mark"
          feedbackValid="Looks good!"
          id="validationTooltip01"
          label="First name"
          required
          tooltipFeedback
        />
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormInput
          type="text"
          defaultValue="Otto"
          feedbackValid="Looks good!"
          id="validationTooltip02"
          label="Last name"
          required
          tooltipFeedback
        />
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltipUsername">Username</CFormLabel>
        <CFormField>
          <CInputGroup>
            <CInputGroupText id="validationTooltipUsernamePrepend">@</CInputGroupText>
            <CFormInput
              type="text"
              aria-describedby="validationTooltipUsernamePrepend"
              id="validationTooltipUsername"
              required
            />
          </CInputGroup>
          <CFormFeedback tooltip validationState="invalid">
            Please choose a username.
          </CFormFeedback>
        </CFormField>
      </CCol>
      <CCol md={6} className="position-relative">
        <CFormInput
          type="text"
          feedbackInvalid="Please provide a valid city."
          id="validationTooltip03"
          label="City"
          required
          tooltipFeedback
        />
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormSelect
          feedbackInvalid="Please select a valid state."
          id="validationTooltip04"
          label="State"
          required
          tooltipFeedback
        >
          <option selected disabled value="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormInput
          type="text"
          feedbackInvalid="Please provide a valid zip."
          id="validationTooltip05"
          label="Zip"
          required
          tooltipFeedback
        />
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton theme="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
```
