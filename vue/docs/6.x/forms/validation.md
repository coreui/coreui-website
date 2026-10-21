# Vue Form Validation

> Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.

## Example

For custom CoreUI form validation messages, add the `validate` and `novalidate` properties to your `<CForm>`. The `validate` property renders the `data-coreui-validate` attribute, which opts in to the `:user-invalid` styling — validation styles appear only after the user interacts with a control or attempts to submit, so required fields don't show up as invalid on page load. Pass `validate="valid"` to also show success styling for valid fields. `novalidate` disables the browser default feedback tooltips and hands their job to `<CForm>`. Try to submit the form below.

When the form is submitted with an invalid control, `<CForm>` stops the submit, so the `submit` event is emitted only for a submit that goes through, as with the browser's own validation, and `@submit.prevent` stays safe to use. It marks every invalid control with `.is-invalid` and `aria-invalid="true"`, and adds the message the stylesheet shows for it to its `aria-describedby` while it stays invalid, so a screen reader reads the error with the field. Then it moves focus to the first invalid control, as the browser does. Under `validate="valid"` the valid controls get `.is-valid`. The state follows the corrections the user makes until the form is reset. A message placed where the stylesheet does not show it for the control can be named in `data-coreui-invalid-feedback` on the control. A [`CAutocomplete`](https://coreui.io/vue/docs/forms/autocomplete/#validation), a [`CMultiSelect`](https://coreui.io/vue/docs/forms/multi-select/#validation), a [`CChipInput`](https://coreui.io/vue/docs/forms/chip-input/#validation), a [`CCombobox`](https://coreui.io/vue/docs/forms/combobox/#validation), a [`COneTimePassword`](https://coreui.io/vue/docs/forms/one-time-password-input/#validation), the [date and time fields](https://coreui.io/vue/docs/forms/date-input/#validation) and the [date](https://coreui.io/vue/docs/forms/date-picker/#validation), [time](https://coreui.io/vue/docs/forms/time-picker/#validation) and [range](https://coreui.io/vue/docs/forms/date-range-picker/#validation) pickers show the state on their frame and on the control that takes the focus, and `<CForm>` leaves the field that carries their value to them. So does a [`CRangeSlider`](https://coreui.io/vue/docs/forms/range-slider/#validation), with its handles, and a [`CRating`](https://coreui.io/vue/docs/forms/rating/#validation), with its radios.

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

### Handling the result yourself

The `validate` event is emitted first, with `isValid` telling whether every control passed. A validity a listener sets with `setCustomValidity()`, for example when two passwords differ, counts for the rest of the validation. A listener that moves focus to an element already on the page keeps it there; `<CForm>` still marks the controls and stops an invalid submit. A listener that calls `preventDefault()` takes the whole result over: `<CForm>` then neither stops the submit, nor marks the controls, nor moves focus, and `submit` is emitted, so stop an invalid submit there yourself. Keep `event.isValid` for that rather than calling `checkValidity()`: the call reports every invalid control again, and the components that follow those reports, such as `CMultiSelect` or the date fields, then show their error. Do that for an error summary that renders only after the `validate` event, and move focus to it once it is rendered. A submit from a button with `formnovalidate` is not validated.

```vue
<CForm
  validate
  novalidate
  @validate="(event) => { event.preventDefault(); isValid = event.isValid; showErrorSummary(event.form, event.isValid) }"
  @submit="(event) => { if (!isValid) event.preventDefault() }"
>
  <!-- controls -->
</CForm>
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

In case you require custom or server-side validation, set the state yourself with the `validation-state` property: `"valid"` or `"invalid"` renders the matching `is-*` class, and `"invalid"` also sets `aria-invalid` on the control. Any custom state you add to the `$form-validation-states` Sass map — `"warning"`, say — is accepted the same way. `"invalid"` also blocks the submit until it is cleared, with the text of the control's invalid feedback as the message the browser shows. A disabled control is not blocked, nor is a read-only text field, since the browser leaves them out of the validation. A control the user cannot reach, such as one in a hidden tab or a collapsed section, still blocks while the browser has nowhere to show its message, so clear the state of a field you hide. A state you give is a verdict on the value it was given for, so when the user changes the value, or the form is reset, the control emits `update:validationState` with `undefined`; bind it with `v-model:validation-state` to drop the state and let the browser's own validation show again, as the example below does. Only the radio the user checks hears the change, so give a radio group's state to every radio in it. The fields that build their own markup, such as [`CAutocomplete`](https://coreui.io/vue/docs/forms/autocomplete/#validation), [`CMultiSelect`](https://coreui.io/vue/docs/forms/multi-select/#validation), [`CChipInput`](https://coreui.io/vue/docs/forms/chip-input/#validation), [`CCombobox`](https://coreui.io/vue/docs/forms/combobox/#validation), [`COneTimePassword`](https://coreui.io/vue/docs/forms/one-time-password-input/#validation), the date and time fields and the pickers, work the same way and describe the details on their pages.

Pair it with the `feedback` property: the message is rendered only while a state is set, styled after that state, and added to the control's `aria-describedby` after any `id` you pass there. `feedback-valid` and `feedback-invalid` belong to the client-side mode above, where the browser decides the state and the stylesheet reveals the matching message. The control watches the same `:user-invalid` and `:user-valid` states the stylesheet reveals the messages by, so it is described by `feedback-invalid` while the invalid message shows and by `feedback-valid` while the valid one does. A field the form reports invalid through `checkValidity()` or `reportValidity()` counts as reported until the form is reset, even before the user touches it: whenever its value is invalid it gets `aria-invalid` and is described by `feedback-invalid`, just as after the user has edited it. The [Stepper](https://coreui.io/vue/docs/forms/stepper/#form-validation) relies on this when a step fails, so call `checkValidity()` only when the page shows the errors. The date and time fields and the pickers follow their own verdict the same way; the browser judges them by whether a `required` one holds a date they accept, and blocks them while a state you give is `"invalid"`. A `validation-state` you set takes precedence over the state the browser or the field reports.

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

## Form components

[`CMultiSelect`](https://coreui.io/vue/docs/forms/multi-select/#validation), [`CChipInput`](https://coreui.io/vue/docs/forms/chip-input/#validation), [`CCombobox`](https://coreui.io/vue/docs/forms/combobox/#validation), [`COneTimePassword`](https://coreui.io/vue/docs/forms/one-time-password-input/#validation), [`CDateInput`](https://coreui.io/vue/docs/forms/date-input/#validation), [`CTimeInput`](https://coreui.io/vue/docs/forms/time-input/#validation) and the pickers built on them keep their value in a native field laid invisibly over the component. That field carries the `name`, takes part in the browser's validation and hands the focus to the component when the browser points at it. [`CAutocomplete`](https://coreui.io/vue/docs/forms/autocomplete/#validation) validates its own input, [`CRangeSlider`](https://coreui.io/vue/docs/forms/range-slider/#validation) its handles, and [`CRating`](https://coreui.io/vue/docs/forms/rating/#validation) its radios. Each of these components shows one validation state, on its frame and on what takes the focus, and decides it in this order:

1. its own error, such as a date outside `minDate` and `maxDate` or an incomplete code;
2. the `validation-state` you give it;
3. the state a validation reports for its field: a submit, `<CForm>`, the [Stepper](https://coreui.io/vue/docs/forms/stepper/#form-validation), or your own `checkValidity()` or `reportValidity()` call;
4. `:user-invalid` or `:user-valid` of its field, in a `<CForm validate>`.

`CAutocomplete`, `CMultiSelect`, `COneTimePassword` and the pickers also take the deprecated `invalid` and `valid` props. Pass the message with the state, through `feedback` or `feedback-invalid`, so it is linked to the field when the state shows.

A given `'invalid'` blocks the submit, with the text of the component's invalid feedback as the message the browser shows, or `Invalid value.` when it has none. `'valid'` and a custom state such as `'warning'` do not block, and neither does a disabled component. A given `'valid'` shows over a reported error, but the browser's own constraints still apply, so an empty `required` field keeps blocking. A given state is a verdict on the value it was given for: when the user changes the value, such as with a pick, a removed chip, the cleaner, <kbd>Backspace</kbd> or a native form reset, the component emits `update:validationState` with `undefined` before it reports the change. Bind it with `v-model:validation-state` to drop the state; without it, the state stays until you clear it. A change of the value from props keeps it.

You can bring your own validation in three ways:

- **Your own rules next to the browser's.** Give `validation-state` as above, or call `setCustomValidity()` on the field that carries the value, which you reach through `form.elements` by its name. The component leaves a validity you set as it is.
- **Taking the whole result over.** Call `preventDefault()` in a `validate` listener and keep `event.isValid`, as [handling the result yourself](#handling-the-result-yourself) shows. No field is reported then, so the components show only `:user-invalid` or `:user-valid` of their field, as a plain field in the same form does after a submit attempt.
- **Showing the errors.** A `checkValidity()` or `reportValidity()` call reports every invalid field and each component marks itself, so make that call only when the page shows the errors.

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
