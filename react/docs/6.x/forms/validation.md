# React Form Validation

> Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.

## Example

For custom CoreUI form validation messages, add the `validate` and `noValidate` properties to your `<CForm>`. The `validate` property renders the `data-coreui-validate` attribute, which opts in to the `:user-invalid` styling — validation styles appear only after the user interacts with a control or attempts to submit, so required fields don't show up as invalid on page load. Pass `validate="valid"` to also show success styling for valid fields. `noValidate` disables the browser default feedback tooltips and hands their job to `<CForm>`. Try to submit the form below.

When the form is submitted with an invalid control, `<CForm>` stops the submit, so `onSubmit` runs only for a submit that goes through, as with the browser's own validation. It marks every invalid control with `.is-invalid` and `aria-invalid="true"`, and adds the message the stylesheet shows for it to its `aria-describedby` while it stays invalid, so a screen reader reads the error with the field. Then it moves focus to the first invalid control, as the browser does. Under `validate="valid"` the valid controls get `.is-valid`. The state follows the corrections the user makes until the form is reset. A message placed where the stylesheet does not show it for the control can be named in `data-coreui-invalid-feedback` on the control. A [`CAutocomplete`](https://coreui.io/react/docs/forms/autocomplete/#validation), a [`CMultiSelect`](https://coreui.io/react/docs/forms/multi-select/#validation), a [`CChipInput`](https://coreui.io/react/docs/forms/chip-input/#validation), a [`CCombobox`](https://coreui.io/react/docs/forms/combobox/#validation), a [`COneTimePassword`](https://coreui.io/react/docs/forms/one-time-password-input/#validation), the [date and time fields](https://coreui.io/react/docs/forms/date-input/#validation) and the [date](https://coreui.io/react/docs/forms/date-picker/#validation), [time](https://coreui.io/react/docs/forms/time-picker/#validation) and [range](https://coreui.io/react/docs/forms/date-range-picker/#validation) pickers show the state on their frame and on the control that takes the focus, and `<CForm>` leaves the field that carries their value to them. So does a [`CRangeSlider`](https://coreui.io/react/docs/forms/range-slider/#validation), with its handles, and a [`CRating`](https://coreui.io/react/docs/forms/rating/#validation), with its radios.

Custom feedback styles apply custom colors, borders and focus styles to communicate feedback.

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

### Handling the result yourself

`onValidate` is called first, with `isValid` telling whether every control passed. A validity it sets with `setCustomValidity()`, for example when two passwords differ, counts for the rest of the validation. A handler that moves focus to an element already on the page keeps it there; `<CForm>` still marks the controls and stops an invalid submit. A handler that calls `preventDefault()` takes the whole result over: `<CForm>` then neither stops the submit, nor marks the controls, nor moves focus, and `onSubmit` runs, so stop an invalid submit there yourself. Keep `event.isValid` for that rather than calling `checkValidity()`: the call reports every invalid control again, and the components that follow those reports, such as `CMultiSelect` or the date fields, then show their error. Do that for an error summary that renders only after `onValidate`, and move focus to it once it is rendered. A submit from a button with `formNoValidate` is not validated.

```jsx
const isValid = useRef(true)

<CForm
  validate
  noValidate
  onValidate={(event) => {
    event.preventDefault()
    isValid.current = event.isValid
    showErrorSummary(event.form, event.isValid)
  }}
  onSubmit={(event) => {
    if (!isValid.current) {
      event.preventDefault()
    }
  }}
>
  {/* controls */}
</CForm>
```

## Browser defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

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

## Custom validation

In case you require custom or server-side validation, set the state yourself with the `validationState` property: `"valid"` or `"invalid"` renders the matching `is-*` class, and `"invalid"` also sets `aria-invalid` on the control. Any custom state you add to the `$form-validation-states` Sass map — `"warning"`, say — is accepted the same way. `"invalid"` also blocks the submit until it is cleared, with the text of the control's invalid feedback as the message the browser shows. A disabled control is not blocked, nor is a read-only text field, since the browser leaves them out of the validation. A control the user cannot reach, such as one in a hidden tab or a collapsed section, still blocks while the browser has nowhere to show its message, so clear the state of a field you hide. A state you give is a verdict on the value it was given for, so when the user changes the value, or the form is reset, the control calls `onValidationStateChange(undefined)`; pass your state setter there to drop the state and let the browser's own validation show again, as the example below does. Only the radio the user checks hears the change, so give a radio group's state to every radio in it. The fields that build their own markup, such as [`CAutocomplete`](https://coreui.io/react/docs/forms/autocomplete/#validation), [`CMultiSelect`](https://coreui.io/react/docs/forms/multi-select/#validation), [`CChipInput`](https://coreui.io/react/docs/forms/chip-input/#validation), [`CCombobox`](https://coreui.io/react/docs/forms/combobox/#validation), [`COneTimePassword`](https://coreui.io/react/docs/forms/one-time-password-input/#validation), the date and time fields and the pickers, work the same way and describe the details on their pages.

Pair it with the `feedback` property: the message is rendered only while a state is set, styled after that state, and added to the control's `aria-describedby` after any `id` you pass there. `feedbackValid` and `feedbackInvalid` belong to the client-side mode above, where the browser decides the state and the stylesheet reveals the matching message. The control watches the same `:user-invalid` and `:user-valid` states the stylesheet reveals the messages by, so it is described by `feedbackInvalid` while the invalid message shows and by `feedbackValid` while the valid one does. A field the form reports invalid through `checkValidity()` or `reportValidity()` counts as reported until the form is reset, even before the user touches it: whenever its value is invalid it gets `aria-invalid` and is described by `feedbackInvalid`, just as after the user has edited it. The [Stepper](https://coreui.io/react/docs/forms/stepper/#form-validation) relies on this when a step fails, so call `checkValidity()` only when the page shows the errors. The date and time fields and the pickers follow their own verdict the same way; the browser judges them by whether a `required` one holds a date they accept, and blocks them while a state you give is `"invalid"`. A `validationState` you set takes precedence over the state the browser or the field reports.

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

## Form components

[`CMultiSelect`](https://coreui.io/react/docs/forms/multi-select/#validation), [`CChipInput`](https://coreui.io/react/docs/forms/chip-input/#validation), [`CCombobox`](https://coreui.io/react/docs/forms/combobox/#validation), [`COneTimePassword`](https://coreui.io/react/docs/forms/one-time-password-input/#validation), [`CDateInput`](https://coreui.io/react/docs/forms/date-input/#validation), [`CTimeInput`](https://coreui.io/react/docs/forms/time-input/#validation) and the pickers built on them keep their value in a native field laid invisibly over the component. That field carries the `name`, takes part in the browser's validation and hands the focus to the component when the browser points at it. [`CAutocomplete`](https://coreui.io/react/docs/forms/autocomplete/#validation) validates its own input, [`CRangeSlider`](https://coreui.io/react/docs/forms/range-slider/#validation) its handles, and [`CRating`](https://coreui.io/react/docs/forms/rating/#validation) its radios. Each of these components shows one validation state, on its frame and on what takes the focus, and decides it in this order:

1. its own error, such as a date outside `minDate` and `maxDate` or an incomplete code;
2. the `validationState` you give it;
3. the state a validation reports for its field: a submit, `<CForm>`, the [Stepper](https://coreui.io/react/docs/forms/stepper/#form-validation), or your own `checkValidity()` or `reportValidity()` call;
4. `:user-invalid` or `:user-valid` of its field, in a `<CForm validate>`.

`CAutocomplete`, `CMultiSelect`, `COneTimePassword` and the pickers also take the deprecated `invalid` and `valid` props. Pass the message with the state, through `feedback` or `feedbackInvalid`, so it is linked to the field when the state shows.

A given `'invalid'` blocks the submit, with the text of the component's invalid feedback as the message the browser shows, or `Invalid value.` when it has none. `'valid'` and a custom state such as `'warning'` do not block, and neither does a disabled component. A given `'valid'` shows over a reported error, but the browser's own constraints still apply, so an empty `required` field keeps blocking. A given state is a verdict on the value it was given for: when the user changes the value, such as with a pick, a removed chip, the cleaner, <kbd>Backspace</kbd> or a native form reset, the component calls `onValidationStateChange(undefined)` before it reports the change. Pass your state setter there to drop the state; without it, the state stays until you clear it. A change of the value from props keeps it.

You can bring your own validation in three ways:

- **Your own rules next to the browser's.** Give `validationState` as above, or call `setCustomValidity()` on the field that carries the value, which you reach through `form.elements` by its name. The component leaves a validity you set as it is.
- **Taking the whole result over.** Call `preventDefault()` in `onValidate` and keep `event.isValid`, as [handling the result yourself](#handling-the-result-yourself) shows. No field is reported then, so the components show only `:user-invalid` or `:user-valid` of their field, as a plain field in the same form does after a submit attempt.
- **Showing the errors.** A `checkValidity()` or `reportValidity()` call reports every invalid field and each component marks itself, so make that call only when the page shows the errors.

## Supported elements

Validation styles are available for the following form controls and components:

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

## Tooltips

If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.

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
