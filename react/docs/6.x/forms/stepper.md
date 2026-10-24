# React Stepper Component – Multi-Step Form Wizard for React

> Build multi-step forms and wizards easily with the React Stepper component. Create advanced form flows with custom indicators, validation, and flexible layouts for your React applications.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

The React Stepper component helps you build intuitive, multi-step form experiences (Form Wizards) for your React applications. It supports horizontal and vertical layouts, built-in form validation, custom indicators, and seamless integration with any React form library.

If you need a Form Wizard in React, or a fully customizable React Stepper, this component is a perfect solution.

## Example

This example shows a simple multi-step form wizard built using the React Stepper component. Each step defines its content and optionally references a form for validation. The `steps` prop is used to configure the wizard, while the `onStepChange` prop tracks the currently active step. Internal step validation can be managed through provided form references (`formRef`). Use this setup when you need a basic horizontal stepper without advanced customizations.

```html
import React, { useId, useRef, useState } from 'react'
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
import { CPasswordInput, CStepper } from '@coreui/react-pro'
import type { StepperRef } from '@coreui/react-pro/src/components/stepper/types'

export const StepperExample = () => {
  const stepperRef = useRef<StepperRef>(null)
  const uid = useId()
  const [currentStep, setCurrentStep] = useState(1)
  const [finish, setFinish] = useState(false)

  const steps = [
    {
      label: 'Step 1',
      content: (
        <CForm className="row g-4">
          <CCol md={4}>
            <CFormInput type="text" defaultValue="Łukasz" label="First name" />
          </CCol>
          <CCol md={4}>
            <CFormInput type="text" defaultValue="Holeczek" label="Last name" />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor={`validationCustomUsername-${uid}-01`}>Username</CFormLabel>
            <CInputGroup>
              <CInputGroupText id={`inputGroupPrependFeedback-${uid}`}>@</CInputGroupText>
              <CFormInput
                type="text"
                id={`validationCustomUsername-${uid}-01`}
                aria-describedby={`inputGroupPrependFeedback-${uid}`}
              />
            </CInputGroup>
          </CCol>
        </CForm>
      ),
    },
    {
      label: 'Step 2',
      content: (
        <CForm className="row g-4">
          <CCol md={6}>
            <CFormInput type="text" label="City" />
          </CCol>
          <CCol md={3}>
            <CFormSelect label="State">
              <option disabled>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol md={3}>
            <CFormInput type="text" label="Zip" />
          </CCol>
        </CForm>
      ),
    },
    {
      label: 'Step 3',
      content: (
        <CForm className="row g-4">
          <CCol md={6}>
            <CFormInput type="email" label="Email" />
          </CCol>
          <CCol md={6}>
            <CPasswordInput label="Password" />
          </CCol>
          <CCol xs={12}>
            <CFormField>
              <CCheckbox label="Agree to terms and conditions" />
            </CFormField>
          </CCol>
        </CForm>
      ),
    },
  ]
  return (
    <>
      <CStepper
        steps={steps}
        onFinish={() => setFinish(true)}
        onReset={() => setFinish(false)}
        onStepChange={setCurrentStep}
        ref={stepperRef}
      />
      {finish && <div>All steps are complete—you're finished.</div>}
      <div className="d-flex gap-3 mt-5">
        {!finish && currentStep > 1 && (
          <CButton theme="secondary" onClick={() => stepperRef.current?.prev()}>
            Previous
          </CButton>
        )}
        {!finish && currentStep < steps.length && (
          <CButton theme="primary" onClick={() => stepperRef.current?.next()}>
            Next
          </CButton>
        )}
        {!finish && currentStep === steps.length && (
          <CButton theme="primary" onClick={() => stepperRef.current?.finish()}>
            Finish
          </CButton>
        )}
        {finish && (
          <CButton theme="danger" onClick={() => stepperRef.current?.reset()}>
            Reset
          </CButton>
        )}
      </div>
    </>
  )
}
```

## Vertical indicator layout

In this example, the step indicators are displayed vertically above the labels using the `stepButtonLayout="vertical"` prop, while the form content remains laid out horizontally. This option is useful when you want a more compact and visually balanced look for the step navigation, especially in narrower layouts. Use `stepButtonLayout="vertical"` when you want a clear visual separation of steps without changing the main content flow.

```html
import React from 'react'
import { CStepper } from '@coreui/react-pro'

export const StepperVerticalIndicatorLayoutExample = () => {
  return <CStepper steps={['Step 1', 'Step 2', 'Step 3']} stepButtonLayout="vertical" />
}
```

## Vertical layout

This example shows a fully vertical multi-step form wizard created with the React Stepper component. By using the `layout="vertical"` prop, both the step indicators and the step content are stacked vertically. This layout is ideal for mobile devices or designs where vertical flow is preferred. Choose `layout="vertical"` if you want the entire wizard to guide users in a top-to-bottom progression.

```html
import React, { useId, useRef, useState } from 'react'
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
import { CPasswordInput, CStepper } from '@coreui/react-pro'
import type { StepperRef } from '@coreui/react-pro/src/components/stepper/types'

export const StepperVerticalLayoutExample = () => {
  const stepperRef = useRef<StepperRef>(null)
  const uid = useId()
  const [currentStep, setCurrentStep] = useState(1)
  const [finish, setFinish] = useState(false)

  const steps = [
    {
      label: 'Step 1',
      content: (
        <CForm className="row g-4 py-4">
          <CCol md={4}>
            <CFormInput type="text" defaultValue="Łukasz" label="First name" />
          </CCol>
          <CCol md={4}>
            <CFormInput type="text" defaultValue="Holeczek" label="Last name" />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor={`validationCustomUsername-${uid}-01`}>Username</CFormLabel>
            <CInputGroup>
              <CInputGroupText id={`inputGroupPrependFeedback-${uid}`}>@</CInputGroupText>
              <CFormInput
                type="text"
                id={`validationCustomUsername-${uid}-01`}
                aria-describedby={`inputGroupPrependFeedback-${uid}`}
              />
            </CInputGroup>
          </CCol>
        </CForm>
      ),
    },
    {
      label: 'Step 2',
      content: (
        <CForm className="row g-4  py-4">
          <CCol md={6}>
            <CFormInput type="text" label="City" />
          </CCol>
          <CCol md={3}>
            <CFormSelect label="State">
              <option disabled>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol md={3}>
            <CFormInput type="text" label="Zip" />
          </CCol>
        </CForm>
      ),
    },
    {
      label: 'Step 3',
      content: (
        <CForm className="row g-4 pt-4">
          <CCol md={6}>
            <CFormInput type="email" label="Email" />
          </CCol>
          <CCol md={6}>
            <CPasswordInput label="Password" />
          </CCol>
          <CCol xs={12}>
            <CFormField>
              <CCheckbox label="Agree to terms and conditions" />
            </CFormField>
          </CCol>
        </CForm>
      ),
    },
  ]

  return (
    <>
      <CStepper
        layout="vertical"
        steps={steps}
        onFinish={() => setFinish(true)}
        onReset={() => setFinish(false)}
        onStepChange={setCurrentStep}
        ref={stepperRef}
      />
      <div className="d-flex gap-3 mt-5">
        {!finish && currentStep > 1 && (
          <CButton theme="secondary" onClick={() => stepperRef.current?.prev()}>
            Previous
          </CButton>
        )}
        {!finish && currentStep < steps.length && (
          <CButton theme="primary" onClick={() => stepperRef.current?.next()}>
            Next
          </CButton>
        )}
        {!finish && currentStep === steps.length && (
          <CButton theme="primary" onClick={() => stepperRef.current?.finish()}>
            Finish
          </CButton>
        )}
        {finish && (
          <CButton theme="danger" onClick={() => stepperRef.current?.reset()}>
            Reset
          </CButton>
        )}
      </div>
    </>
  )
}
```

## Linear Stepper (Form Wizard)

By default, the React Stepper Component behaves as a linear wizard: users must complete each step sequentially before moving to the next one.  
When `linear` mode is enabled (`linear={true}`), users cannot skip steps. They must finish the current form validation successfully to unlock the next step.

Use a Linear React Stepper when you need a guided and controlled experience, such as:

- Checkout processes
- Registration wizards
- Multistep forms with required validation

```html
import React from 'react'
import { CStepper } from '@coreui/react-pro'

export const StepperLinearExample = () => {
  return <CStepper steps={['Step 1', 'Step 2', 'Step 3']} />
}
```

This ensures data integrity and improves the user experience by keeping the flow focused.

## Non-linear Stepper (Optional Steps)

You can configure the React Stepper Component to behave as non-linear, allowing users to open any step directly instead of one at a time. Set `linear={false}` property to allow non-sequential navigation. Moving forward still validates the step being left, as in linear mode; add `validation={false}` to let users move on with an invalid step.

Use a Non-linear React Stepper when users should have full control over navigation, for example:

- Survey forms
- Onboarding flows where some steps are optional
- Complex multi-section forms where order doesn't matter

```html
import React from 'react'
import { CStepper } from '@coreui/react-pro'

export const StepperNonLinearExample = () => {
  return <CStepper linear={false} steps={['Step 1', 'Step 2', 'Step 3']} />
}
```

## Form Validation

The React Stepper component natively supports step-by-step form validation. When the `validation` prop is enabled (it is `true` by default), users must complete each form properly before moving to the next step. If a form inside a step is invalid, validation messages are shown, and navigation is blocked. Use this feature to ensure required fields are filled and basic data integrity is maintained throughout the multi-step process without needing any additional code.

### Browser default validation

This example shows a stepper with native browser validation enabled:

```html
import React, { useId, useRef, useState } from 'react'
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
import { CPasswordInput, CStepper } from '@coreui/react-pro'
import type { StepperRef } from '@coreui/react-pro/src/components/stepper/types'

export const StepperValidationExample = () => {
  const stepperRef = useRef<StepperRef>(null)
  const formStep1Ref = useRef<HTMLFormElement>(null)
  const formStep2Ref = useRef<HTMLFormElement>(null)
  const formStep3Ref = useRef<HTMLFormElement>(null)

  const uid = useId()
  const [currentStep, setCurrentStep] = useState(1)
  const steps = [
    {
      label: 'Step 1',
      content: (
        <CForm className="row g-4" ref={formStep1Ref}>
          <CCol md={4}>
            <CFormInput type="text" defaultValue="Łukasz" label="First name" required />
          </CCol>
          <CCol md={4}>
            <CFormInput type="text" defaultValue="Holeczek" label="Last name" required />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor={`validationCustomUsername-${uid}-01`}>Username</CFormLabel>
            <CInputGroup>
              <CInputGroupText id={`inputGroupPrependFeedback-${uid}`}>@</CInputGroupText>
              <CFormInput
                type="text"
                id={`validationCustomUsername-${uid}-01`}
                aria-describedby={`inputGroupPrependFeedback-${uid}`}
                required
              />
            </CInputGroup>
          </CCol>
        </CForm>
      ),
      formRef: formStep1Ref,
    },
    {
      label: 'Step 2',
      content: (
        <CForm className="row g-4" ref={formStep2Ref}>
          <CCol md={6}>
            <CFormInput type="text" label="City" />
          </CCol>
          <CCol md={3}>
            <CFormSelect label="State">
              <option disabled>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol md={3}>
            <CFormInput type="text" label="Zip" />
          </CCol>
        </CForm>
      ),
      formRef: formStep2Ref,
    },
    {
      label: 'Step 3',
      content: (
        <CForm className="row g-4" ref={formStep3Ref}>
          <CCol md={6}>
            <CFormInput type="email" label="Email" required />
          </CCol>
          <CCol md={6}>
            <CPasswordInput label="Password" required />
          </CCol>
          <CCol xs={12}>
            <CFormField>
              <CCheckbox label="Agree to terms and conditions" />
            </CFormField>
          </CCol>
        </CForm>
      ),
      formRef: formStep3Ref,
    },
  ]
  return (
    <>
      <CStepper steps={steps} onStepChange={setCurrentStep} ref={stepperRef} />
      <div className="d-flex gap-3 mt-5">
        {currentStep > 1 && (
          <CButton theme="secondary" onClick={() => stepperRef.current?.prev()}>
            Previous
          </CButton>
        )}
        {currentStep < steps.length && (
          <CButton theme="primary" onClick={() => stepperRef.current?.next()}>
            Next
          </CButton>
        )}
        {currentStep === steps.length && (
          <>
            <CButton theme="primary" onClick={() => stepperRef.current?.finish()}>
              Finish
            </CButton>
            <CButton theme="danger" onClick={() => stepperRef.current?.reset()}>
              Reset
            </CButton>
          </>
        )}
      </div>
    </>
  )
}
```

### Custom validation style

Beyond basic HTML5 validation, you can add your own rules for each step in the `onStepValidationComplete` callback. It runs first, before the browser's `invalid` events and before the stepper decides whether the step passes, with `isValid` telling whether every control passed. A validity the callback sets with `setCustomValidity()`, for example when two passwords differ, counts for the step; clear it with `setCustomValidity('')` once the rule holds, or the step stays blocked.

```tsx
<CStepper
  steps={steps}
  onStepValidationComplete={() => {
    const confirmPassword = confirmPasswordRef.current
    confirmPassword?.setCustomValidity(
      confirmPassword.value === passwordRef.current?.value ? '' : 'Passwords do not match.'
    )
  }}
/>
```

A form with `noValidate` gets the stepper's own feedback instead of the browser's: each time a step is validated, the invalid controls get `.is-invalid` and `aria-invalid` and the controls that pass lose them, focus moves to the first invalid control that can take focus when the step fails, the state then follows the controls as the user changes them until the form or the stepper is reset, and a `CFormInput`, `CFormSelect`, `CFormTextarea`, `CFormCheck`, `CAutocomplete`, `CChipInput`, `CCombobox`, `CMultiSelect`, `CNumberInput`, `COneTimePassword` or `CPasswordInput` with `feedbackInvalid` is described by that message, so a screen reader reads it together with the field. A `CAutocomplete`, a `CMultiSelect`, a `CChipInput`, a `CCombobox`, a `COneTimePassword`, the date and time fields, the pickers, a `CRangeSlider` and a `CRating` show that state on their own frame and control, and the stepper leaves the field that carries their value to them. Add `data-coreui-validate="valid"` to the form to also mark the valid controls with `.is-valid`; as on [`CForm`](https://coreui.io/react/docs/forms/validation/), the attribute also shows the state of a control once the user has interacted with it. If a handler of `onStepValidationComplete` moves focus itself, for example to an error summary, the stepper leaves it there.

```html
import React, { useId, useRef, useState } from 'react'
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
import { CPasswordInput, CStepper } from '@coreui/react-pro'
import type { StepperRef } from '@coreui/react-pro/src/components/stepper/types'

export const StepperCustomValidationExample = () => {
  const stepperRef = useRef<StepperRef>(null)
  const formStep1Ref = useRef<HTMLFormElement>(null)
  const formStep2Ref = useRef<HTMLFormElement>(null)
  const formStep3Ref = useRef<HTMLFormElement>(null)

  const uid = useId()
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    {
      label: 'Step 1',
      content: (
        <CForm className="row g-4" ref={formStep1Ref} noValidate>
          <CCol md={4}>
            <CFormInput
              type="text"
              id={`validationCustomFirstName-${uid}`}
              defaultValue="Łukasz"
              feedbackInvalid="Please provide your first name."
              label="First name"
              required
            />
          </CCol>
          <CCol md={4}>
            <CFormInput
              type="text"
              id={`validationCustomLastName-${uid}`}
              defaultValue="Holeczek"
              feedbackInvalid="Please provide your last name."
              label="Last name"
              required
            />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor={`validationCustomUsername-${uid}-01`}>Username</CFormLabel>
            <CInputGroup>
              <CInputGroupText id={`inputGroupPrependFeedback-${uid}`}>@</CInputGroupText>
              <CFormInput
                type="text"
                id={`validationCustomUsername-${uid}-01`}
                aria-describedby={`inputGroupPrependFeedback-${uid}`}
                feedbackInvalid="Please choose a username."
                required
              />
            </CInputGroup>
          </CCol>
        </CForm>
      ),
      formRef: formStep1Ref,
    },
    {
      label: 'Step 2',
      content: (
        <CForm className="row g-4" ref={formStep2Ref} noValidate>
          <CCol md={6}>
            <CFormInput type="text" id={`validationCustomCity-${uid}`} label="City" />
          </CCol>
          <CCol md={3}>
            <CFormSelect id={`validationCustomState-${uid}`} label="State">
              <option disabled>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol md={3}>
            <CFormInput type="text" id={`validationCustomZip-${uid}`} label="Zip" />
          </CCol>
        </CForm>
      ),
      formRef: formStep2Ref,
    },
    {
      label: 'Step 3',
      content: (
        <CForm className="row g-4" ref={formStep3Ref} noValidate>
          <CCol md={6}>
            <CFormInput
              type="email"
              id={`validationCustomEmail-${uid}`}
              feedbackInvalid="Please provide a valid email."
              label="Email"
              required
            />
          </CCol>
          <CCol md={6}>
            <CPasswordInput
              id={`validationCustomPassword-${uid}`}
              feedbackInvalid="Please provide a password."
              label="Password"
              required
            />
          </CCol>
          <CCol xs={12}>
            <CFormField>
              <CCheckbox label="Agree to terms and conditions" />
            </CFormField>
          </CCol>
        </CForm>
      ),
      formRef: formStep3Ref,
    },
  ]
  return (
    <>
      <CStepper steps={steps} onStepChange={setCurrentStep} ref={stepperRef} />
      <div className="d-flex gap-3 mt-5">
        {currentStep > 1 && (
          <CButton theme="secondary" onClick={() => stepperRef.current?.prev()}>
            Previous
          </CButton>
        )}
        {currentStep < steps.length && (
          <CButton theme="primary" onClick={() => stepperRef.current?.next()}>
            Next
          </CButton>
        )}
        {currentStep === steps.length && (
          <>
            <CButton theme="primary" onClick={() => stepperRef.current?.finish()}>
              Finish
            </CButton>
            <CButton theme="danger" onClick={() => stepperRef.current?.reset()}>
              Reset
            </CButton>
          </>
        )}
      </div>
    </>
  )
}
```

### Skip validation

To skip form validation, so users can move on with an invalid step, add `validation={false}` to the React stepper component:

```html
import React, { useId, useRef, useState } from 'react'
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
import { CPasswordInput, CStepper } from '@coreui/react-pro'
import type { StepperRef } from '@coreui/react-pro/src/components/stepper/types'

export const StepperSkipValidationExample = () => {
  const stepperRef = useRef<StepperRef>(null)
  const formStep1Ref = useRef<HTMLFormElement>(null)
  const formStep2Ref = useRef<HTMLFormElement>(null)
  const formStep3Ref = useRef<HTMLFormElement>(null)

  const uid = useId()
  const [currentStep, setCurrentStep] = useState(1)
  const steps = [
    {
      label: 'Step 1',
      content: (
        <CForm className="row g-4" ref={formStep1Ref} noValidate>
          <CCol md={4}>
            <CFormInput type="text" defaultValue="Łukasz" label="First name" required />
          </CCol>
          <CCol md={4}>
            <CFormInput type="text" defaultValue="Holeczek" label="Last name" required />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor={`validationCustomUsername-${uid}-01`}>Username</CFormLabel>
            <CInputGroup>
              <CInputGroupText id={`inputGroupPrependFeedback-${uid}`}>@</CInputGroupText>
              <CFormInput
                type="text"
                id={`validationCustomUsername-${uid}-01`}
                aria-describedby={`inputGroupPrependFeedback-${uid}`}
                required
              />
            </CInputGroup>
          </CCol>
        </CForm>
      ),
      formRef: formStep1Ref,
    },
    {
      label: 'Step 2',
      content: (
        <CForm className="row g-4" ref={formStep2Ref} noValidate>
          <CCol md={6}>
            <CFormInput type="text" label="City" />
          </CCol>
          <CCol md={3}>
            <CFormSelect label="State">
              <option disabled>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol md={3}>
            <CFormInput type="text" label="Zip" />
          </CCol>
        </CForm>
      ),
      formRef: formStep2Ref,
    },
    {
      label: 'Step 3',
      content: (
        <CForm className="row g-4" ref={formStep3Ref} noValidate>
          <CCol md={6}>
            <CFormInput type="email" label="Email" required />
          </CCol>
          <CCol md={6}>
            <CPasswordInput label="Password" required />
          </CCol>
          <CCol xs={12}>
            <CFormField>
              <CCheckbox label="Agree to terms and conditions" />
            </CFormField>
          </CCol>
        </CForm>
      ),
      formRef: formStep3Ref,
    },
  ]
  return (
    <>
      <CStepper steps={steps} onStepChange={setCurrentStep} validation={false} ref={stepperRef} />
      <div className="d-flex gap-3 mt-5">
        {currentStep > 1 && (
          <CButton theme="secondary" onClick={() => stepperRef.current?.prev()}>
            Previous
          </CButton>
        )}
        {currentStep < steps.length && (
          <CButton theme="primary" onClick={() => stepperRef.current?.next()}>
            Next
          </CButton>
        )}
        {currentStep === steps.length && (
          <>
            <CButton theme="primary" onClick={() => stepperRef.current?.finish()}>
              Finish
            </CButton>
            <CButton theme="danger" onClick={() => stepperRef.current?.reset()}>
              Reset
            </CButton>
          </>
        )}
      </div>
    </>
  )
}
```

## Theme variants

The [`theme`](https://coreui.io/react/docs/customize/components/#theme-variants) property colors the active and completed step indicators and the connectors:

```html
import React from 'react'
import { CStepper } from '@coreui/react-pro'

export const StepperThemingExample = () => {
  return (
    <CStepper
      theme="success"
      defaultActiveStepNumber={3}
      steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Confirmation' }]}
    />
  )
}
```

## Controlled and uncontrolled

The stepper works either way, and the prop you reach for is what picks the mode. Each comes in two spellings: a 0-based index or a 1-based step number.

| | prop | who owns the active step |
| --- | --- | --- |
| Uncontrolled | `defaultActiveStepNumber` | the stepper, from that starting point |
| Controlled | `activeStepNumber` | your component |

`onStepChange` fires in **both** modes with the 1-based number of the step that was requested — so you can watch the state without taking it over.

### Uncontrolled

Give the stepper a starting point and let it manage itself. This is what every example above does.

```jsx
<CStepper defaultActiveStepNumber={2} steps={steps} />
```

### Controlled

Pass `activeStepNumber` and the stepper renders exactly what you pass — the step buttons and the built-in navigation only fire `onStepChange`. Feed the change back, or nothing moves.

```html
import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import { CStepper } from '@coreui/react-pro'

export const StepperControlledExample = () => {
  const [step, setStep] = useState(1)

  return (
    <>
      <CStepper
        activeStepNumber={step}
        onStepChange={setStep}
        steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Confirmation' }]}
      />
      <div className="d-flex gap-3 mt-4">
        <CButton theme="secondary" disabled={step === 1} onClick={() => setStep(step - 1)}>
          Back
        </CButton>
        <CButton theme="primary" disabled={step === 3} onClick={() => setStep(step + 1)}>
          Next
        </CButton>
      </div>
    </>
  )
}
```

Use it when the active step belongs to something else: a route, a saved draft, or a wizard you drive from outside the stepper.

## Imperative ref

Attach a ref to drive the stepper from your own buttons, outside the built-in navigation: `next()`, `prev()` and `reset()` behave like the matching buttons. `finish()` only does something on the last step, where it completes the wizard; called from an earlier one, it's a no-op. `next()` is the one that falls back to finishing when already on the last step.

```tsx
const stepperRef = useRef<StepperRef>(null)

<CStepper steps={steps} ref={stepperRef} />
<CButton onClick={() => stepperRef.current?.prev()}>Previous</CButton>
<CButton onClick={() => stepperRef.current?.next()}>Next</CButton>
```

## Accessibility (A11Y)

The CoreUI Stepper Component is built with accessibility in mind:

- **The horizontal layout is a tab set.** `stepper-steps` is the `role="tablist"` the step buttons belong to, each button is a `role="tab"` with `aria-selected`, `aria-controls` and `tabindex`, its `.stepper-step` wrapper is `role="presentation"` so the tabs stay direct children of the list, and the panes are `role="tabpanel"` linked to their buttons.
- **The vertical layout is a list of expandable steps.** Each step holds its own content, and a tablist cannot own the form controls of the open step, so none of the tab roles are written there: the list stays a list, each step stays a list item, and the buttons carry `aria-expanded` rather than `aria-selected`.
- When the step changes while focus is inside the stepper, or the change takes focus away (for example when the **Next** or **Reset** button that triggered it is no longer rendered), focus moves to the button of the new step, so a screen reader reads which step the user is on. A step changed from a control that stays outside the stepper leaves focus where it is.
- When a step whose form has `noValidate` fails validation, the invalid controls get `aria-invalid="true"` and focus moves to the first of them that can take focus, as the browser does for a form without `noValidate`.
- While the stepper marks a control invalid, its invalid feedback is added to its `aria-describedby`, the elements named in `data-coreui-invalid-feedback` or else the `.invalid-feedback` and `.invalid-tooltip` that follow it, which covers `feedbackInvalid`, so the validation message is read with the field when focus moves to it. When focus is already on the first invalid control, or no invalid control can take focus, the message is announced through [`announce()`](https://coreui.io/react/docs/accessibility/screen-readers/#announcing-messages) instead, or the browser's validation message when the control has none. The stepper does not rely on `aria-errormessage`, which VoiceOver does not read, and the panes are not live regions, so they do not repeat the message.
- Keyboard navigation is fully supported.

Thanks to these features, your form wizard will be fully compliant with WCAG and modern accessibility standards without additional work.

### Keyboard Support

The Stepper component supports comprehensive keyboard navigation out of the box:

| Key | Function |
| --- | --- |
| <kbd>ArrowLeft</kbd> / <kbd>ArrowUp</kbd> | Moves focus to previous step. |
| <kbd>ArrowRight</kbd> / <kbd>ArrowDown</kbd> | Moves focus to next step. |
| <kbd>Home</kbd> / <kbd>End</kbd> | Jumps focus to first or last step |

## API

Full API documentation for the CStepper component, including all available props, customization options, and integration tips for building advanced multi-step forms and wizards in React.

- [&lt;CStepper /&gt;](./api/#cstepper)
