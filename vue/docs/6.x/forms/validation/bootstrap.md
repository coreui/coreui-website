# Vue Bootstrap Validation Component

> Learn how to use CoreUI’s Vue Validation component with Bootstrap styles for flexible, framework-consistent UI.

## Example

For custom CoreUI form validation messages, add the `validate` and `novalidate` properties to your `<CForm>`. The `validate` property renders the `data-coreui-validate` attribute, which opts in to the `:user-invalid` styling — validation styles appear only after the user interacts with a control or attempts to submit, so required fields don't show up as invalid on page load. Pass `validate="valid"` to also show success styling for valid fields. `novalidate` disables the browser default feedback tooltips and hands their job to `<CForm>`, which stops an invalid submit, marks the invalid controls, links their messages and moves focus to the first, as described on the [validation page](https://coreui.io/vue/docs/forms/validation/). Try to submit the form below.

Custom feedback styles apply custom colors, borders and focus styles to communicate feedback.

```html
<template>
  <CForm class="row g-4" novalidate validate="valid">
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
        label="Last name"
        value="Otto"
        required
      />
    </CCol>
    <CCol md="4">
      <CFormLabel for="validationCustomUsername">Username</CFormLabel>
      <CFormField>
        <CInputGroup>
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
        </CInputGroup>
        <CFormFeedback validation-state="invalid">Please choose a username.</CFormFeedback>
      </CFormField>
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
      <CFormField>
        <CCheckbox id="invalidCheck" label="Agree to terms and conditions" required />
        <CFormFeedback validation-state="invalid">You must agree before submitting.</CFormFeedback>
      </CFormField>
    </CCol>
    <CCol xs="12">
      <CButton theme="primary" type="submit">Submit form</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CButton,
  CCheckbox,
  CCol,
  CForm,
  CFormFeedback,
  CFormField,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/vue'
</script>
```

## Browser defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

```html
<template>
  <CForm class="row g-4">
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
        label="Last name"
        value="Otto"
        required
      />
    </CCol>
    <CCol md="4">
      <CFormLabel for="validationDefaultUsername">Username</CFormLabel>
      <CFormField>
        <CInputGroup>
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            id="validationDefaultUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
        </CInputGroup>
        <CFormFeedback validation-state="invalid">Please choose a username.</CFormFeedback>
      </CFormField>
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
      <CFormField>
        <CCheckbox id="invalidCheck" label="Agree to terms and conditions" required />
        <CFormFeedback validation-state="invalid">You must agree before submitting.</CFormFeedback>
      </CFormField>
    </CCol>
    <CCol xs="12">
      <CButton theme="primary" type="submit">Submit form</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CButton,
  CCheckbox,
  CCol,
  CForm,
  CFormFeedback,
  CFormField,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/vue'
</script>
```

## Custom validation

In case you require custom or server-side validation, indicate invalid and valid form fields with the `validation-state` property. `"invalid"` also blocks the submit until it is cleared; bind it with `v-model:validation-state` to drop it when the user changes the value, as the example below does.

The `feedback`, `feedback-invalid` and `feedback-valid` messages of a form control are linked to it for you. A feedback element you add yourself, like the one below, has to be associated with the field using `aria-describedby` (noting that this attribute allows more than one `id` to be referenced, in case the field already points to additional form text).

```html
<template>
  <CForm class="row g-4">
    <CCol md="4">
      <CFormInput
        id="validationServer01"
        v-model="email"
        feedback="Looks good!"
        label="Email"
        required
        v-model:validation-state="states.email"
      />
    </CCol>
    <CCol md="4">
      <CFormInput
        id="validationServer02"
        v-model="repeatEmail"
        feedback="Looks good!"
        label="Repeat email"
        required
        v-model:validation-state="states.repeatEmail"
      />
    </CCol>
    <CCol md="4">
      <CFormLabel for="validationServerUsername">Username</CFormLabel>
      <CFormField>
        <CInputGroup>
          <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
          <CFormInput
            id="validationServerUsername"
            aria-describedby="inputGroupPrepend03 validationServerUsernameFeedback"
            v-model:validation-state="states.username"
            required
          />
        </CInputGroup>
        <CFormFeedback id="validationServerUsernameFeedback" validation-state="invalid">
          Please choose a username.
        </CFormFeedback>
      </CFormField>
    </CCol>
    <CCol md="6">
      <CFormInput
        id="validationServer03"
        feedback="Please provide a valid city."
        v-model:validation-state="states.city"
        label="City"
        required
      />
    </CCol>
    <CCol md="3">
      <CFormSelect
        id="validationServer04"
        feedback="Please select a valid state."
        v-model:validation-state="states.state"
        label="State"
      >
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3">
      <CFormInput
        id="validationServer05"
        feedback="Please provide a valid zip."
        v-model:validation-state="states.zip"
        label="zip"
        required
      />
    </CCol>
    <CCol xs="12">
      <CFormField>
        <CCheckbox
          id="invalidCheck"
          v-model:validation-state="states.terms"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback validation-state="invalid">You must agree before submitting.</CFormFeedback>
      </CFormField>
    </CCol>
    <CCol xs="12">
      <CButton theme="primary" type="submit">Submit form</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import { reactive, ref } from 'vue'
import {
  CButton,
  CCheckbox,
  CCol,
  CForm,
  CFormFeedback,
  CFormField,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/vue'

const email = ref('name@surname.com')
const repeatEmail = ref('name@surname.com')
const states = reactive({
  city: 'invalid',
  email: 'valid',
  repeatEmail: 'valid',
  state: 'invalid',
  terms: 'invalid',
  username: 'invalid',
  zip: 'invalid',
})
</script>
```

## Supported elements

Validation styles are available for the following form controls and components:

- `<CCheckbox>`s
- `<CFormInput>`s
- `<CFormSelect>`s
- `<CFormTextarea>`s
- `<CRadio>`s

```html
<template>
  <CForm>
    <div class="mb-4">
      <CFormTextarea
        id="validationTextarea"
        feedback-invalid="Please enter a message in the textarea."
        validation-state="invalid"
        label="Textarea"
        placeholder="Required example textarea"
        required
      />
    </div>
    <CFormField class="mb-4">
      <CCheckbox
        id="validationFormCheck1"
        validation-state="invalid"
        label="Check this checkbox"
        required
      />
      <CFormFeedback validation-state="invalid">Example invalid feedback text</CFormFeedback>
    </CFormField>
    <CFormField>
      <CRadio
        id="validationFormCheck2"
        name="radio-stacked"
        validation-state="invalid"
        label="Check this checkbox"
        required
      />
    </CFormField>
    <CFormField class="mb-4">
      <CRadio
        id="validationFormCheck3"
        name="radio-stacked"
        validation-state="invalid"
        label="Or toggle this other radio"
        required
      />
      <CFormFeedback validation-state="invalid">More example invalid feedback text</CFormFeedback>
    </CFormField>
    <div class="mb-4">
      <CFormSelect
        feedback-invalid="Example invalid select feedback"
        aria-label="select example"
        validation-state="invalid"
        required
      >
        <option selected="" value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </div>
    <div class="mb-4">
      <CFormInput
        id="validationTextarea"
        type="file"
        feedback-invalid="Example invalid form file feedback"
        aria-label="file example"
        validation-state="invalid"
        required
      />
    </div>
    <div class="mb-4">
      <CButton type="submit" theme="primary" disabled>Submit form</CButton>
    </div>
  </CForm>
</template>

<script setup>
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
} from '@coreui/vue'
</script>
```

## Tooltips

If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.

```html
<template>
  <CForm class="row g-4" novalidate validate="valid">
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
      <CFormField>
        <CInputGroup>
          <CInputGroupText id="validationTooltipUsernamePrepend">@</CInputGroupText>
          <CFormInput
            id="validationTooltipUsername"
            aria-describedby="validationTooltipUsernamePrepend"
            required
          />
        </CInputGroup>
        <CFormFeedback tooltip validation-state="invalid">Please choose a username.</CFormFeedback>
      </CFormField>
    </CCol>
    <CCol md="6" class="position-relative">
      <CFormInput
        id="validationTooltip03"
        feedback-invalid="Please provide a valid city."
        label="City"
        required
        tooltip-feedback
      />
    </CCol>
    <CCol md="3" class="position-relative">
      <CFormSelect
        id="validationTooltip04"
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
        feedback-invalid="Please provide a valid zip."
        label="Zip"
        required
        tooltip-feedback
      />
    </CCol>
    <CCol xs="12" class="position-relative">
      <CButton theme="primary" type="submit">Submit form</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CForm,
  CCol,
  CFormFeedback,
  CFormField,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CButton,
} from '@coreui/vue'
</script>
```
