# Vue Stepper Component – Multi-Step Form Wizard for Vue.js

> Build multi-step forms and wizards easily with the Vue Stepper component. Create advanced Vue form flows with custom indicators, validation, and flexible layouts using Vue 3.

The **Vue Stepper** component helps you build intuitive, multi-step form experiences (Vue Form Wizards) for your Vue.js applications. It supports horizontal and vertical layouts, built-in form validation, customizable indicators, and full slot-based control over step content.

If you're looking for a Vue Form Wizard or a fully flexible Vue Stepper, this component offers a robust and accessible solution.

## Example

This example shows a simple multi-step form wizard built using the Vue Stepper component. Each step defines its content using named slots and optionally provides a native `<form>` reference for validation. The `steps` prop defines the sequence, and the `@step-change` event emits the current index. Internal validation is handled automatically via `formRef`.

```html
<script setup>
import { ref, useId } from 'vue'
import {
  CButton,
  CCol,
  CFormCheck,
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
        <form :ref="formRef" class="row g-3">
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
        <form :ref="formRef" class="row g-3">
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
        <form :ref="formRef" class="row g-3">
          <CCol :md="6">
            <CFormInput type="email" label="Email" />
          </CCol>
          <CCol :md="6">
            <CPasswordInput label="Password" />
          </CCol>
          <CCol :xs="12">
            <CFormCheck type="checkbox" label="Agree to terms and conditions" />
          </CCol>
        </form>
      </template>
    </CStepper>
    <div v-if="finish">All steps are complete—you're finished.</div>

    <div class="d-flex gap-2 mt-4">
      <CButton v-if="!finish && currentStep > 1" color="secondary" @click="stepperRef?.prev()">
        Previous
      </CButton>
      <CButton
        v-if="!finish && currentStep < steps.length"
        color="primary"
        @click="stepperRef?.next()"
      >
        Next
      </CButton>
      <CButton
        v-if="!finish && currentStep === steps.length"
        color="primary"
        @click="stepperRef?.finish()"
      >
        Finish
      </CButton>
      <CButton v-if="finish" color="danger" @click="stepperRef?.reset()"> Reset </CButton>
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
  CCol,
  CFormCheck,
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
        <form :ref="formRef" class="row g-3 py-3" novalidate>
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
        <form :ref="formRef" class="row g-3 py-3" novalidate>
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
        <form :ref="formRef" class="row g-3 pt-3" novalidate>
          <CCol :md="6">
            <CFormInput type="email" label="Email" />
          </CCol>
          <CCol :md="6">
            <CPasswordInput label="Password" />
          </CCol>
          <CCol :xs="12">
            <CFormCheck type="checkbox" label="Agree to terms and conditions" />
          </CCol>
        </form>
      </template>
    </CStepper>
    <div v-if="finish">All steps are complete—you're finished.</div>

    <div class="d-flex gap-2 mt-4">
      <CButton v-if="!finish && currentStep > 1" color="secondary" @click="stepperRef?.prev()">
        Previous
      </CButton>
      <CButton
        v-if="!finish && currentStep < steps.length"
        color="primary"
        @click="stepperRef?.next()"
      >
        Next
      </CButton>
      <CButton
        v-if="!finish && currentStep === steps.length"
        color="primary"
        @click="stepperRef?.finish()"
      >
        Finish
      </CButton>
      <CButton v-if="finish" color="danger" @click="stepperRef?.reset()"> Reset </CButton>
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

You can allow users to skip between steps freely by setting `:linear="false"`. This mode is useful when step order is flexible or optional.

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
  CCol,
  CFormCheck,
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
        <form :ref="formRef" class="row g-3">
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
        <form :ref="formRef" class="row g-3">
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
        <form :ref="formRef" class="row g-3">
          <CCol :md="6">
            <CFormInput type="email" label="Email" required />
          </CCol>
          <CCol :md="6">
            <CPasswordInput label="Password" required />
          </CCol>
          <CCol :xs="12">
            <CFormCheck type="checkbox" label="Agree to terms and conditions" required />
          </CCol>
        </form>
      </template>
    </CStepper>
    <div v-if="finish">All steps are complete—you're finished.</div>

    <div class="d-flex gap-2 mt-4">
      <CButton v-if="!finish && currentStep > 1" color="secondary" @click="stepperRef?.prev()">
        Previous
      </CButton>
      <CButton
        v-if="!finish && currentStep < steps.length"
        color="primary"
        @click="stepperRef?.next()"
      >
        Next
      </CButton>
      <CButton
        v-if="!finish && currentStep === steps.length"
        color="primary"
        @click="stepperRef?.finish()"
      >
        Finish
      </CButton>
      <CButton v-if="finish" color="danger" @click="stepperRef?.reset()"> Reset </CButton>
    </div>
  </div>
</template>
```

### Custom validation

Go beyond native browser validation using `@step-validation-complete`. This callback allows asynchronous or custom logic (e.g. API validation) before advancing the step.

```html
<script setup>
import { ref, useId } from 'vue'
import {
  CButton,
  CCol,
  CFormCheck,
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
const validationState = ref(0)
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
      @step-validation-complete="({ stepNumber }) => (validationState = stepNumber)"
    >
      <template #step-1="{ formRef }">
        <form
          :ref="formRef"
          class="row g-3"
          :class="{ 'was-validated': validationState === 1 }"
          novalidate
        >
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
        <form
          :ref="formRef"
          class="row g-3"
          :class="{ 'was-validated': validationState === 2 }"
          novalidate
        >
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
        <form
          :ref="formRef"
          class="row g-3"
          :class="{ 'was-validated': validationState === 3 }"
          novalidate
        >
          <CCol :md="6">
            <CFormInput type="email" label="Email" required />
          </CCol>
          <CCol :md="6">
            <CPasswordInput label="Password" required />
          </CCol>
          <CCol :xs="12">
            <CFormCheck type="checkbox" label="Agree to terms and conditions" required />
          </CCol>
        </form>
      </template>
    </CStepper>
    <div v-if="finish">All steps are complete—you're finished.</div>

    <div class="d-flex gap-2 mt-4">
      <CButton v-if="!finish && currentStep > 1" color="secondary" @click="stepperRef?.prev()">
        Previous
      </CButton>
      <CButton
        v-if="!finish && currentStep < steps.length"
        color="primary"
        @click="stepperRef?.next()"
      >
        Next
      </CButton>
      <CButton
        v-if="!finish && currentStep === steps.length"
        color="primary"
        @click="stepperRef?.finish()"
      >
        Finish
      </CButton>
      <CButton v-if="finish" color="danger" @click="stepperRef?.reset()"> Reset </CButton>
    </div>
  </div>
</template>
```

### Disable validation

To allow full freedom of movement between steps, simply disable validation by adding `:validation="false"`.

```html
<script setup>
import { ref, useId } from 'vue'
import {
  CButton,
  CCol,
  CFormCheck,
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
        <form :ref="formRef" class="row g-3">
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
        <form :ref="formRef" class="row g-3">
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
        <form :ref="formRef" class="row g-3">
          <CCol :md="6">
            <CFormInput type="email" label="Email" required />
          </CCol>
          <CCol :md="6">
            <CPasswordInput label="Password" required />
          </CCol>
          <CCol :xs="12">
            <CFormCheck type="checkbox" label="Agree to terms and conditions" required />
          </CCol>
        </form>
      </template>
    </CStepper>
    <div v-if="finish">All steps are complete—you're finished.</div>

    <div class="d-flex gap-2 mt-4">
      <CButton v-if="!finish && currentStep > 1" color="secondary" @click="stepperRef?.prev()">
        Previous
      </CButton>
      <CButton
        v-if="!finish && currentStep < steps.length"
        color="primary"
        @click="stepperRef?.next()"
      >
        Next
      </CButton>
      <CButton
        v-if="!finish && currentStep === steps.length"
        color="primary"
        @click="stepperRef?.finish()"
      >
        Finish
      </CButton>
      <CButton v-if="finish" color="danger" @click="stepperRef?.reset()"> Reset </CButton>
    </div>
  </div>
</template>
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

<div class="table-api table-responsive border rounded mb-3">
  <table class="table">
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

Full API documentation for the CStepper component, including all available props, customization options, and integration tips for building advanced multi-step forms and wizards in Vue.

- [&lt;CStepper /&gt;](./api/#cstepper)
