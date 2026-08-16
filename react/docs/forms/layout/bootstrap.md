# React Bootstrap Form Layout Component

> Learn how to build responsive and structured form layouts using CoreUI’s React components styled with Bootstrap.

## How to use React Bootstrap Form Layout

Use CoreUI’s React form components together with Bootstrap’s layout system to build flexible, responsive, and well-structured forms.

### Form container

Wrap form elements in the `<CForm>` component to enable default browser behaviors such as validation and submission.

- CoreUI does not apply default styles to `<CForm>`, giving you full control.
- All `<CButton>` components inside `<CForm>` default to `type="submit"` unless specified otherwise.
- You can disable all fields by setting the `disabled` prop on `<CForm>`.

### Form layout using grid

Combine CoreUI form components with the Bootstrap grid system for complex form layouts.

```html
import React from 'react'
import { CCol, CFormInput, CRow } from '@coreui/react'

export const LayoutFormGridExample = () => {
  return (
    <CRow>
      <CCol xs>
        <CFormInput placeholder="First name" aria-label="First name" />
      </CCol>
      <CCol xs>
        <CFormInput placeholder="Last name" aria-label="Last name" />
      </CCol>
    </CRow>
  )
}
```

### Gutters

Control spacing between columns using Bootstrap's gutter utilities.

```html
import React from 'react'
import { CCol, CFormInput, CRow } from '@coreui/react'

export const LayoutGuttersExample = () => {
  return (
    <CRow className="g-3">
      <CCol xs>
        <CFormInput placeholder="First name" aria-label="First name" />
      </CCol>
      <CCol xs>
        <CFormInput placeholder="Last name" aria-label="Last name" />
      </CCol>
    </CRow>
  )
}
```

You can also create advanced layouts by customizing both horizontal and vertical spacing.

```html
import React from 'react'
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormSelect } from '@coreui/react'

export const LayoutGutters2Example = () => {
  return (
    <CForm className="row g-3">
      <CCol md={6}>
        <CFormInput type="email" id="inputEmail4" label="Email" />
      </CCol>
      <CCol md={6}>
        <CFormInput type="password" id="inputPassword4" label="Password" />
      </CCol>
      <CCol xs={12}>
        <CFormInput id="inputAddress" label="Address" placeholder="1234 Main St" />
      </CCol>
      <CCol xs={12}>
        <CFormInput
          id="inputAddress2"
          label="Address 2"
          placeholder="Apartment, studio, or floor"
        />
      </CCol>
      <CCol md={6}>
        <CFormInput id="inputCity" label="City" />
      </CCol>
      <CCol md={4}>
        <CFormSelect id="inputState" label="State">
          <option>Choose...</option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={2}>
        <CFormInput id="inputZip" label="Zip" />
      </CCol>
      <CCol xs={12}>
        <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Sign in
        </CButton>
      </CCol>
    </CForm>
  )
}
```

### Horizontal form layout

To create horizontal forms, use Bootstrap’s `.row` and `.col-*` grid classes. Add `.col-form-label` to `<CFormLabel>` to align labels vertically with form controls.

```html
import React from 'react'
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CRow } from '@coreui/react'

export const LayoutHorizontalFormExample = () => {
  return (
    <CForm>
      <CRow className="mb-3">
        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="email" id="inputEmail3" />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="password" id="inputPassword3" />
        </CCol>
      </CRow>
      <fieldset className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
        <CCol sm={10}>
          <CFormCheck
            type="radio"
            name="gridRadios"
            id="gridRadios1"
            value="option1"
            label="First radio"
            defaultChecked
          />
          <CFormCheck
            type="radio"
            name="gridRadios"
            id="gridRadios2"
            value="option2"
            label="Second radio"
          />
          <CFormCheck
            type="radio"
            name="gridRadios"
            id="gridRadios3"
            value="option3"
            label="Third disabled radio"
            disabled
          />
        </CCol>
      </fieldset>
      <CRow className="mb-3">
        <div className="col-sm-10 offset-sm-2">
          <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox" />
        </div>
      </CRow>
      <CButton color="primary" type="submit">
        Sign in
      </CButton>
    </CForm>
  )
}
```

#### Sizing horizontal labels

Use `.col-form-label-sm` or `.col-form-label-lg` to match form control sizes.

```html
import React from 'react'
import { CCol, CFormInput, CFormLabel, CRow } from '@coreui/react'

export const LayoutHorizontalFormLabelSizingExample = () => {
  return (
    <>
      <CRow className="mb-3">
        <CFormLabel htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput
            type="email"
            className="form-control form-control-sm"
            id="colFormLabelSm"
            placeholder="col-form-label-sm"
          />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="email" id="colFormLabel" placeholder="col-form-label" />
        </CCol>
      </CRow>
      <CRow>
        <CFormLabel htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">
          Email
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput
            type="email"
            className="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder="col-form-label-lg"
          />
        </CCol>
      </CRow>
    </>
  )
}
```

### Column sizing

Use CoreUI’s `<CRow>` and `<CCol>` components to automatically distribute or manually control the width of form inputs.

```html
import React from 'react'
import { CCol, CFormInput, CRow } from '@coreui/react'

export const LayoutColumnSizingExample = () => {
  return (
    <CRow className="g-3">
      <CCol sm={7}>
        <CFormInput placeholder="City" aria-label="City" />
      </CCol>
      <CCol sm>
        <CFormInput placeholder="State" aria-label="State" />
      </CCol>
      <CCol sm>
        <CFormInput placeholder="Zip" aria-label="Zip" />
      </CCol>
    </CRow>
  )
}
```

### Auto sizing columns

Use `<CCol xs="auto">` to allow input elements to take up only as much space as needed.

```html
import React from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

export const LayoutAutoSizingExample = () => {
  return (
    <CForm className="row gy-2 gx-3 align-items-center">
      <CCol xs="auto">
        <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
          Name
        </CFormLabel>
        <CFormInput id="autoSizingInput" placeholder="Jane Doe" />
      </CCol>
      <CCol xs="auto">
        <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup">
          Username
        </CFormLabel>
        <CInputGroup>
          <CInputGroupText>@</CInputGroupText>
          <CFormInput id="autoSizingInputGroup" placeholder="Username" />
        </CInputGroup>
      </CCol>
      <CCol xs="auto">
        <CFormLabel className="visually-hidden" htmlFor="autoSizingSelect">
          Preference
        </CFormLabel>
        <CFormSelect id="autoSizingSelect">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CCol>
      <CCol xs="auto">
        <CFormCheck type="checkbox" id="autoSizingCheck" label="Remember me" />
      </CCol>
      <CCol xs="auto">
        <CButton color="primary" type="submit">
          Submit
        </CButton>
      </CCol>
    </CForm>
  )
}
```

This can be combined with custom sizing to match your UI needs.

```html
import React from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

export const LayoutAutoSizing2Example = () => {
  return (
    <CForm className="row gx-3 gy-2 align-items-center">
      <CCol sm={3}>
        <CFormLabel className="visually-hidden" htmlFor="specificSizeInputName">
          Name
        </CFormLabel>
        <CFormInput id="specificSizeInputName" placeholder="Jane Doe" />
      </CCol>
      <CCol sm={3}>
        <CFormLabel className="visually-hidden" htmlFor="specificSizeInputGroupUsername">
          Username
        </CFormLabel>
        <CInputGroup>
          <CInputGroupText>@</CInputGroupText>
          <CFormInput id="specificSizeInputGroupUsername" placeholder="Username" />
        </CInputGroup>
      </CCol>
      <CCol sm={3}>
        <CFormLabel className="visually-hidden" htmlFor="specificSizeSelect">
          Preference
        </CFormLabel>
        <CFormSelect id="specificSizeSelect">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CCol>
      <CCol xs="auto">
        <CFormCheck type="checkbox" id="autoSizingCheck2" label="Remember me" />
      </CCol>
      <CCol xs="auto">
        <CButton color="primary" type="submit">
          Submit
        </CButton>
      </CCol>
    </CForm>
  )
}
```

### Inline form layout

Use inline layouts to group form controls in a horizontal row, perfect for compact forms. Use `xs="auto"` and `g-2` for spacing, and `align-items-center` for vertical alignment.

```html
import React from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

export const LayoutInlineFormsExample = () => {
  return (
    <CForm className="row row-cols-lg-auto g-3 align-items-center">
      <CCol xs={12}>
        <CFormLabel className="visually-hidden" htmlFor="inlineFormInputGroupUsername">
          Username
        </CFormLabel>
        <CInputGroup>
          <CInputGroupText>@</CInputGroupText>
          <CFormInput id="inlineFormInputGroupUsername" placeholder="Username" />
        </CInputGroup>
      </CCol>

      <CCol xs={12}>
        <CFormLabel className="visually-hidden" htmlFor="inlineFormSelectPref">
          Preference
        </CFormLabel>
        <CFormSelect id="inlineFormSelectPref">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CCol>

      <CCol xs={12}>
        <CFormCheck type="checkbox" id="inlineFormCheck" label="Remember me" />
      </CCol>

      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit
        </CButton>
      </CCol>
    </CForm>
  )
}
```
