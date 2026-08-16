# React Stepper Component – Multi-Step Form Wizard for React

> Build multi-step forms and wizards easily with the React Stepper component. Create advanced form flows with custom indicators, validation, and flexible layouts for your React applications.

The React Stepper component helps you build intuitive, multi-step form experiences (Form Wizards) for your React applications. It supports horizontal and vertical layouts, built-in form validation, custom indicators, and seamless integration with any React form library.

If you need a Form Wizard in React, or a fully customizable React Stepper, this component is a perfect solution.

## Example

This example shows a simple multi-step form wizard built using the React Stepper component. Each step defines its content and optionally references a form for validation. The `steps` prop is used to configure the wizard, while the `onStepChange` prop tracks the currently active step. Internal step validation can be managed through provided form references (`formRef`). Use this setup when you need a basic horizontal stepper without advanced customizations.

```html
import React, { useId, useRef, useState } from 'react'
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
        <CForm className="row g-3">
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
        <CForm className="row g-3">
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
        <CForm className="row g-3 needs-validation">
          <CCol md={6}>
            <CFormInput type="email" label="Email" />
          </CCol>
          <CCol md={6}>
            <CPasswordInput label="Password" />
          </CCol>
          <CCol xs={12}>
            <CFormCheck type="checkbox" label="Agree to terms and conditions" />
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
      <div className="d-flex gap-2 mt-4">
        {!finish && currentStep > 1 && (
          <CButton color="secondary" onClick={() => stepperRef.current?.prev()}>
            Previous
          </CButton>
        )}
        {!finish && currentStep < steps.length && (
          <CButton color="primary" onClick={() => stepperRef.current?.next()}>
            Next
          </CButton>
        )}
        {!finish && currentStep === steps.length && (
          <CButton color="primary" onClick={() => stepperRef.current?.finish()}>
            Finish
          </CButton>
        )}
        {finish && (
          <CButton color="danger" onClick={() => stepperRef.current?.reset()}>
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
        <CForm className="row g-3 py-3">
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
        <CForm className="row g-3  py-3">
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
        <CForm className="row g-3 pt-3">
          <CCol md={6}>
            <CFormInput type="email" label="Email" />
          </CCol>
          <CCol md={6}>
            <CPasswordInput label="Password" />
          </CCol>
          <CCol xs={12}>
            <CFormCheck type="checkbox" label="Agree to terms and conditions" />
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
      <div className="d-flex gap-2 mt-4">
        {!finish && currentStep > 1 && (
          <CButton color="secondary" onClick={() => stepperRef.current?.prev()}>
            Previous
          </CButton>
        )}
        {!finish && currentStep < steps.length && (
          <CButton color="primary" onClick={() => stepperRef.current?.next()}>
            Next
          </CButton>
        )}
        {!finish && currentStep === steps.length && (
          <CButton color="primary" onClick={() => stepperRef.current?.finish()}>
            Finish
          </CButton>
        )}
        {finish && (
          <CButton color="danger" onClick={() => stepperRef.current?.reset()}>
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

You can configure the React Stepper Component to behave as non-linear, allowing users to jump freely between steps without validation restrictions. Set `linear={false}` property to allow non-sequential navigation.

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

In non-linear mode, all steps are accessible unless explicitly disabled.

## Form Validation

The React Stepper component natively supports step-by-step form validation. When the `validation` prop is enabled (it is `true` by default), users must complete each form properly before moving to the next step. If a form inside a step is invalid, validation messages are shown, and navigation is blocked. Use this feature to ensure required fields are filled and basic data integrity is maintained throughout the multi-step process without needing any additional code.

### Browser default validation 

This example shows a stepper with native browser validation enabled:

```html
import React, { useId, useRef, useState } from 'react'
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
        <CForm className="row g-3" ref={formStep1Ref}>
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
        <CForm className="row g-3" ref={formStep2Ref}>
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
        <CForm className="row g-3" ref={formStep3Ref}>
          <CCol md={6}>
            <CFormInput type="email" label="Email" required />
          </CCol>
          <CCol md={6}>
            <CPasswordInput label="Password" required />
          </CCol>
          <CCol xs={12}>
            <CFormCheck type="checkbox" label="Agree to terms and conditions" />
          </CCol>
        </CForm>
      ),
      formRef: formStep3Ref,
    },
  ]
  return (
    <>
      <CStepper steps={steps} onStepChange={setCurrentStep} ref={stepperRef} />
      <div className="d-flex gap-2 mt-4">
        {currentStep > 1 && (
          <CButton color="secondary" onClick={() => stepperRef.current?.prev()}>
            Previous
          </CButton>
        )}
        {currentStep < steps.length && (
          <CButton color="primary" onClick={() => stepperRef.current?.next()}>
            Next
          </CButton>
        )}
        {currentStep === steps.length && (
          <>
            <CButton color="primary" onClick={() => stepperRef.current?.finish()}>
              Finish
            </CButton>
            <CButton color="danger" onClick={() => stepperRef.current?.reset()}>
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

Beyond basic HTML5 validation, you can define custom validation rules for each step using the `onStepValidationComplete` callback. This allows you to implement asynchronous validation (e.g., API checks) or complex form validation logic per step. In the example below, custom validation triggers additional UI feedback. Use `onStepValidationComplete` when you need precise control over step validation beyond the standard browser mechanisms.

```html
import React, { useId, useRef, useState } from 'react'
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
import { CPasswordInput, CStepper } from '@coreui/react-pro'
import type { StepperRef } from '@coreui/react-pro/src/components/stepper/types'

export const StepperCustomValidationExample = () => {
  const stepperRef = useRef<StepperRef>(null)
  const formStep1Ref = useRef<HTMLFormElement>(null)
  const formStep2Ref = useRef<HTMLFormElement>(null)
  const formStep3Ref = useRef<HTMLFormElement>(null)

  const uid = useId()
  const [currentStep, setCurrentStep] = useState(1)
  const [validationState, setValidationState] = useState(0)

  const steps = [
    {
      label: 'Step 1',
      content: (
        <CForm className="row g-3" ref={formStep1Ref} noValidate validated={validationState === 1}>
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
        <CForm className="row g-3" ref={formStep2Ref} noValidate validated={validationState === 2}>
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
        <CForm className="row g-3" ref={formStep3Ref} noValidate validated={validationState === 3}>
          <CCol md={6}>
            <CFormInput type="email" label="Email" required />
          </CCol>
          <CCol md={6}>
            <CPasswordInput label="Password" required />
          </CCol>
          <CCol xs={12}>
            <CFormCheck type="checkbox" label="Agree to terms and conditions" />
          </CCol>
        </CForm>
      ),
      formRef: formStep3Ref,
    },
  ]
  return (
    <>
      <CStepper
        steps={steps}
        onStepChange={setCurrentStep}
        onStepValidationComplete={({ stepNumber }) => setValidationState(stepNumber)}
        ref={stepperRef}
      />
      <div className="d-flex gap-2 mt-4">
        {currentStep > 1 && (
          <CButton color="secondary" onClick={() => stepperRef.current?.prev()}>
            Previous
          </CButton>
        )}
        {currentStep < steps.length && (
          <CButton color="primary" onClick={() => stepperRef.current?.next()}>
            Next
          </CButton>
        )}
        {currentStep === steps.length && (
          <>
            <CButton color="primary" onClick={() => stepperRef.current?.finish()}>
              Finish
            </CButton>
            <CButton color="danger" onClick={() => stepperRef.current?.reset()}>
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

To completely skip form validation and allow free navigation between steps, add `validation={false}` to the React stepper component:

```html
import React, { useId, useRef, useState } from 'react'
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
        <CForm className="row g-3" ref={formStep1Ref} noValidate>
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
        <CForm className="row g-3" ref={formStep2Ref} noValidate>
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
        <CForm className="row g-3" ref={formStep3Ref} noValidate>
          <CCol md={6}>
            <CFormInput type="email" label="Email" required />
          </CCol>
          <CCol md={6}>
            <CPasswordInput label="Password" required />
          </CCol>
          <CCol xs={12}>
            <CFormCheck type="checkbox" label="Agree to terms and conditions" />
          </CCol>
        </CForm>
      ),
      formRef: formStep3Ref,
    },
  ]
  return (
    <>
      <CStepper steps={steps} onStepChange={setCurrentStep} validation={false} ref={stepperRef} />
      <div className="d-flex gap-2 mt-4">
        {currentStep > 1 && (
          <CButton color="secondary" onClick={() => stepperRef.current?.prev()}>
            Previous
          </CButton>
        )}
        {currentStep < steps.length && (
          <CButton color="primary" onClick={() => stepperRef.current?.next()}>
            Next
          </CButton>
        )}
        {currentStep === steps.length && (
          <>
            <CButton color="primary" onClick={() => stepperRef.current?.finish()}>
              Finish
            </CButton>
            <CButton color="danger" onClick={() => stepperRef.current?.reset()}>
              Reset
            </CButton>
          </>
        )}
      </div>
    </>
  )
}
```

## Accessibility (A11Y)

The CoreUI Stepper Component is built with accessibility in mind:

- Each step button is assigned proper ARIA roles (`role="tab"`) and attributes like `aria-selected`, `aria-controls`, and `tabindex`.
- Step contents (`stepper-pane`) use `role="tabpanel"` and are properly linked to their trigger buttons.
- Live updates are announced to screen readers with `aria-live="polite"`.
- Keyboard navigation is fully supported.

Thanks to these features, your form wizard will be fully compliant with WCAG and modern accessibility standards without additional work.

### Keyboard Support

The Stepper component supports comprehensive keyboard navigation out of the box:

<div className="table-api table-responsive border rounded mb-3">
  <table className="table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Function</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><kbd>ArrowLeft</kbd> / <kbd>ArrowUp</kbd></td>
        <td>Moves focus to previous step.</td>
      </tr>
      <tr>
        <td><kbd>ArrowRight</kbd> / <kbd>ArrowDown</kbd></td>
        <td>Moves focus to next step.</td>
      </tr>
      <tr>
        <td><kbd>Home</kbd> / <kbd>End</kbd></td>
        <td>Jumps focus to first or last step</td>
      </tr>
    </tbody>
  </table>
</div>

## API

Full API documentation for the CStepper component, including all available props, customization options, and integration tips for building advanced multi-step forms and wizards in React.

- [&lt;CStepper /&gt;](./api/#cstepper)
