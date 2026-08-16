# Vue Form Validation

> Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.

## Example

For custom CoreUI form validation messages, you'll need to add the `novalidate` boolean property to your `<CForm>`. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the `:invalid` and `:valid` styles applied to your form controls.

Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback.

```html
<template>
  <CForm
    class="row g-3 needs-validation"
    novalidate
    :validated="validatedCustom01"
    @submit="handleSubmitCustom01"
  >
    <CCol md="4">
      <CFormInput
        id="validationCustom01"
        feedback-valid="Looks good!"
        label="First name"
        required
        value="Mark"
      />
    </CCol>
    <CCol md="4">
      <CFormInput
        id="validationCustom02"
        feedback-valid="Looks good!"
        label="Email"
        value="Otto"
        required
      />
    </CCol>
    <CCol md="4">
      <CFormLabel for="validationCustomUsername">Username</CFormLabel>
      <CInputGroup class="has-validation">
        <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
        <CFormInput
          id="validationCustomUsername"
          aria-describedby="inputGroupPrepend"
          feedback-invalid="Please choose a username."
          required
        />
      </CInputGroup>
    </CCol>
    <CCol md="6">
      <CFormInput
        id="validationCustom03"
        feedback-invalid="Please provide a valid city."
        label="City"
        required
      />
    </CCol>
    <CCol md="3">
      <CFormSelect
        id="validationCustom04"
        aria-describedby="validationCustom04Feedback"
        feedback-invalid="Please select a valid state."
        label="State"
        required
      >
        <option selected="" disabled="" value="">Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3">
      <CFormInput
        id="validationCustom05"
        feedback-invalid="Please provide a valid zip."
        label="Zip"
        required
      />
    </CCol>
    <CCol xs="12">
      <CFormCheck
        id="invalidCheck"
        feedback-invalid="You must agree before submitting."
        label="Agree to terms and conditions"
        required
        type="checkbox"
      />
    </CCol>
    <CCol xs="12">
      <CButton color="primary" type="submit">Submit form</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CForm,
  CCol,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
const validatedCustom01 = ref()
const handleSubmitCustom01 = (event) => {
  const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }
  validatedCustom01.value = true
}
</script>
```

## Browser defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

```html
<template>
  <CForm class="row g-3">
    <CCol md="4">
      <CFormInput
        id="validationDefault01"
        feedback-valid="Looks good!"
        label="First name"
        required
        value="Mark"
      />
    </CCol>
    <CCol md="4">
      <CFormInput
        id="validationDefault02"
        feedback-valid="Looks good!"
        label="Email"
        value="Otto"
        required
      />
    </CCol>
    <CCol md="4">
      <CFormLabel for="validationDefaultUsername">Username</CFormLabel>
      <CInputGroup class="has-validation">
        <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
        <CFormInput
          id="validationDefaultUsername"
          aria-describedby="inputGroupPrepend"
          feedback-invalid="Please choose a username."
          required
        />
      </CInputGroup>
    </CCol>
    <CCol md="6">
      <CFormInput
        id="validationDefault03"
        feedback-invalid="Please provide a valid city."
        label="City"
        required
      />
    </CCol>
    <CCol md="3">
      <CFormSelect
        id="validationDefault04"
        aria-describedby="validationDefault04Feedback"
        feedback-invalid="Please select a valid state."
        label="State"
        required
      >
        <option selected="" disabled="" value="">Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3">
      <CFormInput
        id="validationDefault05"
        feedback-invalid="Please provide a valid zip."
        label="Zip"
        required
      />
    </CCol>
    <CCol xs="12">
      <CFormCheck
        id="invalidCheck"
        feedback-invalid="You must agree before submitting."
        label="Agree to terms and conditions"
        required
        type="checkbox"
      />
    </CCol>
    <CCol xs="12">
      <CButton color="primary" type="submit">Submit form</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CForm,
  CCol,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/vue'
</script>
```

## Custom validation

In case you require custom or server-side validation, you can indicate invalid and valid form fields with `invalid` and `valid` boolean properties.

For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using `aria-describedby` (noting that this attribute allows more than one `id` to be referenced, in case the field already points to additional form text).

```html
<template>
  <CForm class="row g-3 needs-validation">
    <CCol md="4">
      <CFormInput
        id="validationServer01"
        feedback="Looks good!"
        label="Email"
        required
        valid
        value="name@surname.com"
      />
    </CCol>
    <CCol md="4">
      <CFormInput
        id="validationServer02"
        feedback="Looks good!"
        label="Repeat email"
        required
        valid
        value="name@surname.com"
      />
    </CCol>
    <CCol md="4">
      <CFormLabel for="validationServerUsername">Username</CFormLabel>
      <CInputGroup class="has-validation">
        <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
        <CFormInput
          id="validationServerUsername"
          aria-describedby="inputGroupPrepend03"
          feedback="Please choose a username."
          invalid
          required
        />
      </CInputGroup>
    </CCol>
    <CCol md="6">
      <CFormInput
        id="validationServer03"
        feedback="Please provide a valid city."
        invalid
        label="City"
        required
      />
    </CCol>
    <CCol md="3">
      <CFormSelect
        id="validationServer04"
        feedback="Please provide a valid city."
        invalid
        label="State"
      >
        <option disabled>Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3">
      <CFormInput
        id="validationServer05"
        feedback="Please provide a valid zip."
        invalid
        label="zip"
        required
      />
    </CCol>
    <CCol xs="12">
      <CFormCheck
        id="invalidCheck"
        feedback-invalid="You must agree before submitting."
        invalid
        label="Agree to terms and conditions"
        required
        type="checkbox"
      />
    </CCol>
    <CCol xs="12">
      <CButton color="primary" type="submit">Submit form</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CForm,
  CCol,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/vue'
</script>
```

## Supported elements

Validation styles are available for the following form controls and components:

- `<CFormCheck>`s
- `<CFormInput>`s
- `<CFormSelect>`s
- `<CFormTextarea>`s

```html
<template>
  <CForm :validated="true">
    <div class="mb-3">
      <CFormTextarea
        id="validationTextarea"
        feedback-invalid="Please enter a message in the textarea."
        label="Textarea"
        placeholder="Required example textarea"
        required
      />
    </div>
    <CFormCheck
      id="validationFormCheck1"
      class="mb-3"
      label="Check this checkbox"
      feedback-invalid="Example invalid feedback text"
      required
    />
    <CFormCheck
      id="validationFormCheck2"
      type="radio"
      name="radio-stacked"
      label="Check this checkbox"
      required
    />
    <CFormCheck
      id="validationFormCheck3"
      class="mb-3"
      type="radio"
      name="radio-stacked"
      label="Or toggle this other radio"
      feedback-invalid="More example invalid feedback text"
      required
    />
    <div class="mb-3">
      <CFormSelect
        feedback-invalid="Example invalid select feedback"
        aria-label="select example"
        required
      >
        <option selected="" value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </div>
    <div class="mb-3">
      <CFormInput
        id="validationTextarea"
        type="file"
        feedback-invalid="Example invalid form file feedback"
        aria-label="file example"
        required
      />
    </div>
    <div class="mb-3">
      <CButton type="submit" color="primary" disabled>Submit form</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { CForm, CFormTextarea, CFormCheck, CFormSelect, CFormInput, CButton } from '@coreui/vue'
</script>
```

## Tooltips

If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.

```html
<template>
  <CForm
    class="row g-3 needs-validation"
    novalidate
    :validated="validatedTooltip01"
    @submit="handleSubmitTooltip01"
  >
    <CCol md="4" class="position-relative">
      <CFormInput
        id="validationTooltip01"
        feedback-valid="Looks good!"
        label="First name"
        required
        tooltip-feedback
        value="Mark"
      />
    </CCol>
    <CCol md="4" class="position-relative">
      <CFormInput
        id="validationTooltip02"
        feedback-valid="Looks good!"
        label="Last name"
        required
        tooltip-feedback
        value="Otto"
      />
    </CCol>
    <CCol md="4" class="position-relative">
      <CFormLabel for="validationTooltipUsername">Username</CFormLabel>
      <CInputGroup class="has-validation">
        <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
        <CFormInput
          id="validationTooltipUsername"
          aria-describedby="inputGroupPrependFeedback"
          feedback-invalid="Please choose a username."
          required
          tooltip-feedback
        />
      </CInputGroup>
    </CCol>
    <CCol md="6" class="position-relative">
      <CFormInput
        id="validationTooltip03"
        aria-describedby="validationTooltip03Feedback"
        feedback-invalid="Please provide a valid city."
        label="City"
        required
        tooltip-feedback
      />
    </CCol>
    <CCol md="3" class="position-relative">
      <CFormSelect
        id="validationTooltip04"
        aria-describedby="validationTooltip04Feedback"
        feedback-invalid="Please select a valid state."
        label="State"
        required
        tooltip-feedback
      >
        <option selected="" disabled="" value="">Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3" class="position-relative">
      <CFormInput
        id="validationTooltip05"
        aria-describedby="validationTooltip05Feedback"
        feedback-invalid="Please provide a valid zip."
        label="Zip"
        required
        tooltip-feedback
      />
    </CCol>
    <CCol xs="12" class="position-relative">
      <CButton color="primary" type="submit">Submit form</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CForm,
  CCol,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
const validatedTooltip01 = ref()
const handleSubmitTooltip01 = (event) => {
  const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }

  validatedTooltip01.value = true
}
</script>
```
