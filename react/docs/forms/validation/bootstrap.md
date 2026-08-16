# React Bootstrap Form Validation

> Learn how to use Bootstrap-style validation in React forms using CoreUI components. Show validation messages, use custom styles, and support native browser behavior.

## How to use React Bootstrap Form Validation

React Bootstrap validation lets you provide custom or native HTML5 feedback styles for form controls. CoreUI components support both approaches for a better user experience.

### Custom validation styles

Disable the browser’s native validation UI with the `noValidate` prop on `<CForm>`, and use the `validated` prop to enable feedback based on custom logic. Try submitting the form below to see how validation classes like `:invalid` and `:valid` are applied.

```html
import React, { FormEvent, useState } from 'react'
import {
  CCol,
  CButton,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationExample = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
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
          label="First name"
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText>@</CInputGroupText>
          <CFormInput
            type="text"
            aria-describedby="inputGroupPrependFeedback"
            feedbackValid="Please choose a username."
            id="validationCustomUsername"
            required
          />
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormInput
          type="text"
          aria-describedby="validationCustom03Feedback"
          feedbackInvalid="Please provide a valid city."
          id="validationCustom03"
          label="City"
          required
        />
      </CCol>
      <CCol md={3}>
        <CFormSelect
          aria-describedby="validationCustom04Feedback"
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
          aria-describedby="validationCustom05Feedback"
          feedbackInvalid="Please provide a valid zip."
          id="validationCustom05"
          label="Zip"
          required
        />
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
```

### Browser default behavior

If you prefer to rely on native browser validation, skip `noValidate` and `validated`. Submit the form and let the browser handle feedback based on built-in rules.

```html
import React from 'react'
import {
  CCol,
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationBrowserDefaultsExample = () => {
  return (
    <CForm className="row g-3">
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
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
```

### Manual validation

Use the `valid` and `invalid` props directly on components like `<CFormInput>` to apply validation styles manually, which is useful for server-side validation or complex form logic.

```html
import React from 'react'
import {
  CCol,
  CButton,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationCustomExample = () => {
  return (
    <CForm className="row g-3">
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationServer01"
          label="Email"
          feedback="Looks good!"
          defaultValue="name@surname.com"
          valid
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
          valid
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationServerUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationServerUsername"
            feedback="Please choose a username."
            defaultValue=""
            aria-describedby="inputGroupPrepend03"
            invalid
            required
          />
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormInput
          type="text"
          id="validationServer03"
          label="City"
          feedback="Please provide a valid city."
          invalid
          required
        />
      </CCol>
      <CCol md={3}>
        <CFormSelect
          id="validationServer04"
          label="State"
          feedback="Please provide a valid city."
          invalid
        >
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={3}>
        <CFormInput
          type="text"
          id="validationServer05"
          label="zip"
          feedback="Please provide a valid zip."
          invalid
          required
        />
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          invalid
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
```

### Supported components

These CoreUI components support Bootstrap validation classes:

- `<CFormCheck>`
- `<CFormInput>`
- `<CFormSelect>`
- `<CFormTextarea>`

```html
import React from 'react'
import { CButton, CForm, CFormCheck, CFormInput, CFormSelect, CFormTextarea } from '@coreui/react'

export const ValidationSupportedElementsExample = () => {
  return (
    <CForm validated={true}>
      <div className="mb-3">
        <CFormTextarea
          feedbackInvalid="Please enter a message in the textarea."
          id="validationTextarea"
          label="Textarea"
          placeholder="Required example textarea"
          required
        ></CFormTextarea>
      </div>
      <CFormCheck
        className="mb-3"
        id="validationFormCheck1"
        label="Check this checkbox"
        feedbackInvalid="Example invalid feedback text"
        required
      />
      <CFormCheck
        type="radio"
        name="radio-stacked"
        id="validationFormCheck2"
        label="Check this checkbox"
        required
      />
      <CFormCheck
        className="mb-3"
        type="radio"
        name="radio-stacked"
        id="validationFormCheck3"
        label="Or toggle this other radio"
        feedbackInvalid="More example invalid feedback text"
        required
      />
      <div className="mb-3">
        <CFormSelect
          feedbackInvalid="Example invalid select feedback"
          aria-label="select example"
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
      <div className="mb-3">
        <CFormInput
          type="file"
          id="validationTextarea"
          feedbackInvalid="Example invalid form file feedback"
          aria-label="file example"
          required
        />
      </div>
      <div className="mb-3">
        <CButton type="submit" color="primary" disabled>
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
import React, { FormEvent, useState } from 'react'
import {
  CCol,
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationTooltipsExample = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
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
          label="First name"
          required
          tooltipFeedback
        />
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltipUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            aria-describedby="inputGroupPrependFeedback"
            feedbackInvalid="Please choose a username."
            id="validationTooltipUsername"
            required
            tooltipFeedback
          />
        </CInputGroup>
      </CCol>
      <CCol md={6} className="position-relative">
        <CFormInput
          type="text"
          aria-describedby="validationTooltip03Feedback"
          feedbackInvalid="Please provide a valid city."
          id="validationTooltip03"
          label="City"
          required
          tooltipFeedback
        />
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormSelect
          aria-describedby="validationTooltip04Feedback"
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
          aria-describedby="validationTooltip05Feedback"
          feedbackInvalid="Please provide a valid zip."
          id="validationTooltip05"
          label="Zip"
          required
          tooltipFeedback
        />
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
```
