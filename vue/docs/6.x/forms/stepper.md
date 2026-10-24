# Vue Stepper Component – Multi-Step Form Wizard for Vue.js

> Build multi-step forms and wizards easily with the Vue Stepper component. Create advanced Vue form flows with custom indicators, validation, and flexible layouts using Vue 3.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

The **Vue Stepper** component helps you build intuitive, multi-step form experiences (Vue Form Wizards) for your Vue.js applications. It supports horizontal and vertical layouts, built-in form validation, customizable indicators, and full slot-based control over step content.

If you're looking for a Vue Form Wizard or a fully flexible Vue Stepper, this component offers a robust and accessible solution.

## Example

This example shows a simple multi-step form wizard built using the Vue Stepper component. Each step defines its content through a slot named `step-<n>` for its 1-based position (`#step-1`, `#step-2`, …), and optionally provides a native `<form>` reference for validation. The `steps` prop defines the sequence, and the `@step-change` event emits the current index. Internal validation is handled automatically via `formRef`.

```html
<script setup>
import { ref, useId } from 'vue'
import {
  CButton,
  CCheckbox,
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CPasswordInput,
  CStepper,
} from '@coreui/vue-pro'

const stepperRef = ref()
const currentStep = ref(1)
const finish = ref(false)
const uid = useId()

const steps = ['Step 1', 'Step 2', 'Step 3']
</script>

<template>
  <div>
    <CStepper
      ref="stepperRef"
      :steps="steps"
      @finish="finish = true"
      @reset="finish = false"
      @step-change="(step) => (currentStep = step)"
    >
      <template #step-1="{ formRef }">
        <form :ref="formRef" class="row g-4">
          <CCol :md="4">
            <CFormInput type="text" value="Łukasz" label="First name" />
          </CCol>
          <CCol :md="4">
            <CFormInput type="text" value="Holeczek" label="Last name" />
          </CCol>
          <CCol :md="4">
            <CFormLabel :for="`validationCustomUsername-${uid}-01`">Username</CFormLabel>
            <CInputGroup>
              <CInputGroupText :id="`inputGroupPrependFeedback-${uid}`">@</CInputGroupText>
              <CFormInput
                :id="`validationCustomUsername-${uid}-01`"
                type="text"
                :aria-describedby="`inputGroupPrependFeedback-${uid}`"
              />
            </CInputGroup>
          </CCol>
        </form>
      </template>

      <template #step-2="{ formRef }">
        <form :ref="formRef" class="row g-4">
          <CCol :md="6">
            <CFormInput type="text" label="City" />
          </CCol>
          <CCol :md="3">
            <CFormSelect label="State">
              <option disabled>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol :md="3">
            <CFormInput type="text" label="Zip" />
          </CCol>
        </form>
      </template>

      <template #step-3="{ formRef }">
        <form :ref="formRef" class="row g-4">
          <CCol :md="6">
            <CFormInput type="email" label="Email" />
          </CCol>
          <CCol :md="6">
            <CPasswordInput label="Password" />
          </CCol>
          <CCol :xs="12">
            <CCheckbox label="Agree to terms and conditions" />
          </CCol>
        </form>
      </template>
    </CStepper>
    <div v-if="finish">All steps are complete—you're finished.</div>

    <div class="d-flex gap-3 mt-5">
      <CButton v-if="!finish && currentStep > 1" color="secondary" @click="stepperRef?.prev()">
        Previous
      </CButton>
      <CButton
        v-if="!finish && currentStep < steps.length"
        theme="primary"
        @click="stepperRef?.next()"
      >
        Next
      </CButton>
      <CButton
        v-if="!finish && currentStep === steps.length"
        theme="primary"
        @click="stepperRef?.finish()"
      >
        Finish
      </CButton>
      <CButton v-if="finish" theme="danger" @click="stepperRef?.reset()"> Reset </CButton>
    </div>
  </div>
</template>
```

## Vertical indicator layout

In this example, the step indicators are stacked vertically above the labels using `step-button-layout="vertical"`, while the form content remains horizontally aligned. This option gives a compact and balanced look, especially useful in narrow layouts.

```html
<template>
  <CStepper :steps="['Step 1', 'Step 2', 'Step 3']" step-button-layout="vertical" />
</template>

<script setup>
import { CStepper } from '@coreui/vue-pro'
</script>
```

## Vertical layout

This example demonstrates a fully vertical Vue Form Wizard. By setting `layout="vertical"`, both the step indicators and the form content are stacked vertically, providing a mobile-friendly top-down progression.

```html
<script setup>
import { ref, useId } from 'vue'
import {
  CButton,
  CCheckbox,
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CPasswordInput,
  CStepper,
} from '@coreui/vue-pro'

const stepperRef = ref()
const currentStep = ref(1)
const finish = ref(false)
const uid = useId()

const steps = ['Step 1', 'Step 2', 'Step 3']
</script>

<template>
  <div>
    <CStepper
      ref="stepperRef"
      :steps="steps"
      layout="vertical"
      @finish="finish = true"
      @reset="finish = false"
      @step-change="(step) => (currentStep = step)"
    >
      <template #step-1="{ formRef }">
        <form :ref="formRef" class="row g-4 py-4" novalidate>
          <CCol :md="4">
            <CFormInput type="text" value="Łukasz" label="First name" />
          </CCol>
          <CCol :md="4">
            <CFormInput type="text" value="Holeczek" label="Last name" />
          </CCol>
          <CCol :md="4">
            <CFormLabel :for="`validationCustomUsername-${uid}-01`">Username</CFormLabel>
            <CInputGroup>
              <CInputGroupText :id="`inputGroupPrependFeedback-${uid}`">@</CInputGroupText>
              <CFormInput
                :id="`validationCustomUsername-${uid}-01`"
                type="text"
                :aria-describedby="`inputGroupPrependFeedback-${uid}`"
              />
            </CInputGroup>
          </CCol>
        </form>
      </template>

      <template #step-2="{ formRef }">
        <form :ref="formRef" class="row g-4 py-4" novalidate>
          <CCol :md="6">
            <CFormInput type="text" label="City" />
          </CCol>
          <CCol :md="3">
            <CFormSelect label="State">
              <option disabled>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol :md="3">
            <CFormInput type="text" label="Zip" />
          </CCol>
        </form>
      </template>

      <template #step-3="{ formRef }">
        <form :ref="formRef" class="row g-4 pt-4" novalidate>
          <CCol :md="6">
            <CFormInput type="email" label="Email" />
          </CCol>
          <CCol :md="6">
            <CPasswordInput label="Password" />
          </CCol>
          <CCol :xs="12">
            <CCheckbox label="Agree to terms and conditions" />
          </CCol>
        </form>
      </template>
    </CStepper>
    <div v-if="finish">All steps are complete—you're finished.</div>

    <div class="d-flex gap-3 mt-5">
      <CButton v-if="!finish && currentStep > 1" color="secondary" @click="stepperRef?.prev()">
        Previous
      </CButton>
      <CButton
        v-if="!finish && currentStep < steps.length"
        theme="primary"
        @click="stepperRef?.next()"
      >
        Next
      </CButton>
      <CButton
        v-if="!finish && currentStep === steps.length"
        theme="primary"
        @click="stepperRef?.finish()"
      >
        Finish
      </CButton>
      <CButton v-if="finish" theme="danger" @click="stepperRef?.reset()"> Reset </CButton>
    </div>
  </div>
</template>
```

## Linear stepper (Form Wizard)

By default, the Vue Stepper operates in linear mode, requiring each step to be completed before the next becomes available. Set `:linear="true"` to enforce this behavior.

Use a linear Vue Form Wizard when you want structured progression in:

- Checkout flows
- Registration processes
- Multi-step forms with required fields

```html
<template>
  <CStepper :steps="['Step 1', 'Step 2', 'Step 3']" />
</template>

<script setup>
import { CStepper } from '@coreui/vue-pro'
</script>
```

## Non-linear stepper

You can let users open any step directly instead of one at a time by setting `:linear="false"`. This mode is useful when step order is flexible or optional. Moving forward still validates the step being left, as in linear mode; add `:validation="false"` to let users move on with an invalid step.

Example use cases:

- Survey wizards
- Product onboarding
- Complex forms with independent sections

```html
<template>
  <CStepper :linear="false" :steps="['Step 1', 'Step 2', 'Step 3']" />
</template>

<script setup>
import { CStepper } from '@coreui/vue-pro'
</script>
```

## Form validation

The Vue Stepper component provides native step-by-step validation. With `:validation="true"` (enabled by default), users cannot proceed unless each step's form is valid. Use the `formRef` exposed in the step slot to register your native `<form>`.

### Native browser validation

This example demonstrates default HTML5 validation within a Vue Form Wizard.

```html
<script setup>
import { ref, useId } from 'vue'
import {
  CButton,
  CCheckbox,
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CPasswordInput,
  CStepper,
} from '@coreui/vue-pro'

const stepperRef = ref()
const currentStep = ref(1)
const finish = ref(false)
const uid = useId()

const steps = ['Step 1', 'Step 2', 'Step 3']
</script>

<template>
  <div>
    <CStepper
      ref="stepperRef"
      :steps="steps"
      @finish="finish = true"
      @reset="finish = false"
      @step-change="(step) => (currentStep = step)"
    >
      <template #step-1="{ formRef }">
        <form :ref="formRef" class="row g-4">
          <CCol :md="4">
            <CFormInput type="text" value="Łukasz" label="First name" required />
          </CCol>
          <CCol :md="4">
            <CFormInput type="text" value="Holeczek" label="Last name" required />
          </CCol>
          <CCol :md="4">
            <CFormLabel :for="`validationCustomUsername-${uid}-01`">Username</CFormLabel>
            <CInputGroup>
              <CInputGroupText :id="`inputGroupPrependFeedback-${uid}`">@</CInputGroupText>
              <CFormInput
                :id="`validationCustomUsername-${uid}-01`"
                type="text"
                :aria-describedby="`inputGroupPrependFeedback-${uid}`"
                required
              />
            </CInputGroup>
          </CCol>
        </form>
      </template>

      <template #step-2="{ formRef }">
        <form :ref="formRef" class="row g-4">
          <CCol :md="6">
            <CFormInput type="text" label="City" />
          </CCol>
          <CCol :md="3">
            <CFormSelect label="State">
              <option disabled>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol :md="3">
            <CFormInput type="text" label="Zip" />
          </CCol>
        </form>
      </template>

      <template #step-3="{ formRef }">
        <form :ref="formRef" class="row g-4">
          <CCol :md="6">
            <CFormInput type="email" label="Email" required />
          </CCol>
          <CCol :md="6">
            <CPasswordInput label="Password" required />
          </CCol>
          <CCol :xs="12">
            <CCheckbox label="Agree to terms and conditions" required />
          </CCol>
        </form>
      </template>
    </CStepper>
    <div v-if="finish">All steps are complete—you're finished.</div>

    <div class="d-flex gap-3 mt-5">
      <CButton v-if="!finish && currentStep > 1" color="secondary" @click="stepperRef?.prev()">
        Previous
      </CButton>
      <CButton
        v-if="!finish && currentStep < steps.length"
        theme="primary"
        @click="stepperRef?.next()"
      >
        Next
      </CButton>
      <CButton
        v-if="!finish && currentStep === steps.length"
        theme="primary"
        @click="stepperRef?.finish()"
      >
        Finish
      </CButton>
      <CButton v-if="finish" theme="danger" @click="stepperRef?.reset()"> Reset </CButton>
    </div>
  </div>
</template>
```

### Custom validation

Go beyond native browser validation using `@step-validation-complete`. It is emitted first, before the browser's `invalid` events and before the stepper decides whether the step passes, with `isValid` telling whether every control passed. A validity the handler sets with `setCustomValidity()`, for example when two passwords differ, counts for the step; clear it with `setCustomValidity('')` once the rule holds, or the step stays blocked.

```vue
<CStepper
  :steps="steps"
  @step-validation-complete="
    confirmPassword?.setCustomValidity(
      confirmPassword.value === password?.value ? '' : 'Passwords do not match.'
    )
  "
/>
```

A form with `novalidate` gets the stepper's own feedback instead of the browser's: each time a step is validated, the invalid controls get `.is-invalid` and `aria-invalid` and the controls that pass lose them, focus moves to the first invalid control that can take focus when the step fails, the state then follows the controls as the user changes them until the form or the stepper is reset, and a `CFormInput`, `CFormSelect`, `CFormTextarea`, `CFormCheck`, `CAutocomplete`, `CChipInput`, `CCombobox`, `CMultiSelect`, `CNumberInput`, `COneTimePassword` or `CPasswordInput` with `feedback-invalid` is described by that message, so a screen reader reads it together with the field. A `CAutocomplete`, a `CMultiSelect`, a `CChipInput`, a `CCombobox`, a `COneTimePassword`, the date and time fields, the pickers, a `CRangeSlider` and a `CRating` show that state on their own frame and control, and the stepper leaves the field that carries their value to them. Add `data-coreui-validate="valid"` to the form to also mark the valid controls with `.is-valid`; as on [`CForm`](https://coreui.io/vue/docs/forms/validation/), the attribute also shows the state of a control once the user has interacted with it. If a `@step-validation-complete` handler moves focus itself, for example to an error summary, the stepper leaves it there.

```html
<script setup>
import { ref, useId } from 'vue'
import {
  CButton,
  CCheckbox,
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CPasswordInput,
  CStepper,
} from '@coreui/vue-pro'

const stepperRef = ref()
const currentStep = ref(1)
const finish = ref(false)
const uid = useId()

const steps = ['Step 1', 'Step 2', 'Step 3']
</script>

<template>
  <div>
    <CStepper
      ref="stepperRef"
      :steps="steps"
      @finish="finish = true"
      @reset="finish = false"
      @step-change="(step) => (currentStep = step)"
    >
      <template #step-1="{ formRef }">
        <form :ref="formRef" class="row g-4" novalidate>
          <CCol :md="4">
            <CFormInput
              :id="`validationCustomFirstName-${uid}`"
              type="text"
              value="Łukasz"
              feedback-invalid="Please provide your first name."
              label="First name"
              required
            />
          </CCol>
          <CCol :md="4">
            <CFormInput
              :id="`validationCustomLastName-${uid}`"
              type="text"
              value="Holeczek"
              feedback-invalid="Please provide your last name."
              label="Last name"
              required
            />
          </CCol>
          <CCol :md="4">
            <CFormLabel :for="`validationCustomUsername-${uid}-01`">Username</CFormLabel>
            <CInputGroup>
              <CInputGroupText :id="`inputGroupPrependFeedback-${uid}`">@</CInputGroupText>
              <CFormInput
                :id="`validationCustomUsername-${uid}-01`"
                type="text"
                :aria-describedby="`inputGroupPrependFeedback-${uid}`"
                feedback-invalid="Please choose a username."
                required
              />
            </CInputGroup>
          </CCol>
        </form>
      </template>

      <template #step-2="{ formRef }">
        <form :ref="formRef" class="row g-4" novalidate>
          <CCol :md="6">
            <CFormInput :id="`validationCustomCity-${uid}`" type="text" label="City" />
          </CCol>
          <CCol :md="3">
            <CFormSelect :id="`validationCustomState-${uid}`" label="State">
              <option disabled>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol :md="3">
            <CFormInput :id="`validationCustomZip-${uid}`" type="text" label="Zip" />
          </CCol>
        </form>
      </template>

      <template #step-3="{ formRef }">
        <form :ref="formRef" class="row g-4" novalidate>
          <CCol :md="6">
            <CFormInput
              :id="`validationCustomEmail-${uid}`"
              type="email"
              feedback-invalid="Please provide a valid email."
              label="Email"
              required
            />
          </CCol>
          <CCol :md="6">
            <CPasswordInput
              :id="`validationCustomPassword-${uid}`"
              feedback-invalid="Please provide a password."
              label="Password"
              required
            />
          </CCol>
          <CCol :xs="12">
            <CCheckbox label="Agree to terms and conditions" required />
          </CCol>
        </form>
      </template>
    </CStepper>
    <div v-if="finish">All steps are complete—you're finished.</div>

    <div class="d-flex gap-3 mt-5">
      <CButton v-if="!finish && currentStep > 1" color="secondary" @click="stepperRef?.prev()">
        Previous
      </CButton>
      <CButton
        v-if="!finish && currentStep < steps.length"
        theme="primary"
        @click="stepperRef?.next()"
      >
        Next
      </CButton>
      <CButton
        v-if="!finish && currentStep === steps.length"
        theme="primary"
        @click="stepperRef?.finish()"
      >
        Finish
      </CButton>
      <CButton v-if="finish" theme="danger" @click="stepperRef?.reset()"> Reset </CButton>
    </div>
  </div>
</template>
```

### Disable validation

To let users move on with an invalid step, disable validation by adding `:validation="false"`.

```html
<script setup>
import { ref, useId } from 'vue'
import {
  CButton,
  CCheckbox,
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CPasswordInput,
  CStepper,
} from '@coreui/vue-pro'

const stepperRef = ref()
const currentStep = ref(1)
const finish = ref(false)
const uid = useId()

const steps = ['Step 1', 'Step 2', 'Step 3']
</script>

<template>
  <div>
    <CStepper
      ref="stepperRef"
      :steps="steps"
      :validation="false"
      @finish="finish = true"
      @reset="finish = false"
      @step-change="(step) => (currentStep = step)"
    >
      <template #step-1="{ formRef }">
        <form :ref="formRef" class="row g-4">
          <CCol :md="4">
            <CFormInput type="text" value="Łukasz" label="First name" required />
          </CCol>
          <CCol :md="4">
            <CFormInput type="text" value="Holeczek" label="Last name" required />
          </CCol>
          <CCol :md="4">
            <CFormLabel :for="`validationCustomUsername-${uid}-01`">Username</CFormLabel>
            <CInputGroup>
              <CInputGroupText :id="`inputGroupPrependFeedback-${uid}`">@</CInputGroupText>
              <CFormInput
                :id="`validationCustomUsername-${uid}-01`"
                type="text"
                :aria-describedby="`inputGroupPrependFeedback-${uid}`"
                required
              />
            </CInputGroup>
          </CCol>
        </form>
      </template>

      <template #step-2="{ formRef }">
        <form :ref="formRef" class="row g-4">
          <CCol :md="6">
            <CFormInput type="text" label="City" />
          </CCol>
          <CCol :md="3">
            <CFormSelect label="State">
              <option disabled>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol :md="3">
            <CFormInput type="text" label="Zip" />
          </CCol>
        </form>
      </template>

      <template #step-3="{ formRef }">
        <form :ref="formRef" class="row g-4">
          <CCol :md="6">
            <CFormInput type="email" label="Email" required />
          </CCol>
          <CCol :md="6">
            <CPasswordInput label="Password" required />
          </CCol>
          <CCol :xs="12">
            <CCheckbox label="Agree to terms and conditions" required />
          </CCol>
        </form>
      </template>
    </CStepper>
    <div v-if="finish">All steps are complete—you're finished.</div>

    <div class="d-flex gap-3 mt-5">
      <CButton v-if="!finish && currentStep > 1" color="secondary" @click="stepperRef?.prev()">
        Previous
      </CButton>
      <CButton
        v-if="!finish && currentStep < steps.length"
        theme="primary"
        @click="stepperRef?.next()"
      >
        Next
      </CButton>
      <CButton
        v-if="!finish && currentStep === steps.length"
        theme="primary"
        @click="stepperRef?.finish()"
      >
        Finish
      </CButton>
      <CButton v-if="finish" theme="danger" @click="stepperRef?.reset()"> Reset </CButton>
    </div>
  </div>
</template>
```

## Theme variants

The [`theme`](https://coreui.io/vue/docs/customize/components/#theme-variants) property colors the active and completed step indicators and the connectors:

```html
<template>
  <CStepper theme="success" :active-step-number="3" :steps="steps" />
</template>

<script setup>
import { CStepper } from '@coreui/vue-pro'

const steps = ['Account', 'Profile', 'Confirmation']
</script>
```

## Usage with v-model

Bind `v-model` and the active step follows your state — the step buttons and the built-in navigation only emit `@update:modelValue` (and `@step-change` with the 1-based number), so the binding feeds it back. Without a binding the stepper manages itself; `active-step-number` seeds the starting step.

```html
<template>
  <CStepper v-model="step" :steps="['Account', 'Profile', 'Confirmation']" />
  <div class="d-flex gap-3 mt-4">
    <CButton theme="secondary" :disabled="step === 1" @click="step--">Back</CButton>
    <CButton theme="primary" :disabled="step === 3" @click="step++">Next</CButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CButton } from '@coreui/vue'
import { CStepper } from '@coreui/vue-pro'

const step = ref(1)
</script>
```

Use it when the active step belongs to something else: a route, a saved draft, or a wizard you drive from outside the stepper.

## Template ref

Attach a template ref to drive the stepper from your own buttons, outside the built-in navigation: `next()`, `prev()` and `reset()` behave like the matching buttons. `finish()` only does something on the last step, where it completes the wizard; called from an earlier one, it's a no-op. `next()` is the one that falls back to finishing when already on the last step.

```vue
<script setup>
import { ref } from 'vue'

const stepper = ref()
</script>

<template>
  <CStepper ref="stepper" :steps="steps" />
  <CButton @click="stepper.prev()">Previous</CButton>
  <CButton @click="stepper.next()">Next</CButton>
</template>
```

## Accessibility (A11Y)

The CoreUI Stepper Component is built with accessibility in mind:

- **The horizontal layout is a tab set.** `stepper-steps` is the `role="tablist"` the step buttons belong to, each button is a `role="tab"` with `aria-selected`, `aria-controls` and `tabindex`, its `.stepper-step` wrapper is `role="presentation"` so the tabs stay direct children of the list, and the panes are `role="tabpanel"` linked to their buttons.
- **The vertical layout is a list of expandable steps.** Each step holds its own content, and a tablist cannot own the form controls of the open step, so none of the tab roles are written there: the list stays a list, each step stays a list item, and the buttons carry `aria-expanded` rather than `aria-selected`.
- When the step changes while focus is inside the stepper, or the change takes focus away (for example when the **Next** or **Reset** button that triggered it is no longer rendered), focus moves to the button of the new step, so a screen reader reads which step the user is on. A step changed from a control that stays outside the stepper leaves focus where it is.
- When a step whose form has `novalidate` fails validation, the invalid controls get `aria-invalid="true"` and focus moves to the first of them that can take focus, as the browser does for a form without `novalidate`.
- While the stepper marks a control invalid, its invalid feedback is added to its `aria-describedby`, the elements named in `data-coreui-invalid-feedback` or else the `.invalid-feedback` and `.invalid-tooltip` that follow it, which covers `feedback-invalid`, so the validation message is read with the field when focus moves to it. When focus is already on the first invalid control, or no invalid control can take focus, the message is announced through [`announce()`](https://coreui.io/vue/docs/accessibility/screen-readers/#announcing-messages) instead, or the browser's validation message when the control has none. The stepper does not rely on `aria-errormessage`, which VoiceOver does not read, and the panes are not live regions, so they do not repeat the message.
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

Full API documentation for the CStepper component, including all available props, customization options, and integration tips for building advanced multi-step forms and wizards in Vue.

- [&lt;CStepper /&gt;](./api/#cstepper)
