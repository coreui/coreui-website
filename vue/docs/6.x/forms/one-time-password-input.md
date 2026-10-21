# Vue One-Time Password (OTP) Input Component

> Create secure and user-friendly Vue.js one-time password input fields with automatic navigation, paste support, validation, and customizable options for modern authentication flows.

## Overview

The Vue One-Time Password (OTP) Component is a powerful, user-friendly solution for implementing secure authentication flows in your Vue.js applications. Whether you're building two-factor authentication, email verification, or SMS confirmation systems, this OTP component provides an intuitive interface with advanced features like auto-navigation between fields, intelligent paste handling, and comprehensive keyboard support.

Key features of this Vue OTP component include:
- Auto-navigation between input fields
- Smart paste support with auto-fill
- Number and text input validation
- Linear and non-linear input modes
- Auto-submit functionality
- Keyboard navigation with RTL support
- Full accessibility compliance
- Bootstrap-based styling with size variants

## Basic Example

A straightforward demonstration of how to implement a basic OTP input field with 6 digits.

```html
<template>
  <CForm>
    <div class="mb-4">
      <COneTimePassword id="basicOTP" v-model="value" label="Enter OTP Code" name="otp">
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
      </COneTimePassword>
    </div>
    <div v-if="value" class="fg-2 small">Current value: {{ value }}</div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CForm } from '@coreui/vue'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'

const value = ref('')
</script>
```

The basic implementation requires wrapping `COneTimePasswordInput` components within a `COneTimePassword` container. Each input field automatically handles single character input and navigation.

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <span class="form-label">Verification code</span>
    <COneTimePassword name="otpField">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
    <CFormText>We sent it to your phone a moment ago.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormText } from '@coreui/vue'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'
</script>
```

## One-time password types

The OTP component supports both numeric and text input types through the `type` prop:

```html
<template>
  <div class="mb-4">
    <COneTimePassword label="Numeric OTP (default)" type="number">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div class="mb-4">
    <COneTimePassword label="Text OTP" type="text">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div>
    <COneTimePassword label="Masked OTP (hidden characters)" masked>
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
</template>

<script setup>
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'
</script>
```

- `type="number"` (default) - Restricts input to digits 0-9
- `type="text"` - Allows any single character

## Placeholders

Customize placeholder text for better user guidance:

```html
<template>
  <div class="mb-4">
    <COneTimePassword label="Single character placeholder" placeholder="0">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div class="mb-4">
    <COneTimePassword label="Different placeholders per field" placeholder="123456">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div>
    <COneTimePassword label="Letter placeholders" type="text" placeholder="ABCDEF">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
</template>

<script setup>
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'
</script>
```

- Single character placeholders apply to all fields
- Multi-character strings apply character-by-character to each field

## Pre-filled values

Pass `value` one-way to seed the code — the input manages it from there — or bind `v-model` to keep it in step with your state:

```html
<template>
  <CForm>
    <div class="mb-4">
      <COneTimePassword
        id="prefilledOTPModel"
        v-model="value"
        label="OTP with pre-filled value (v-model)"
        name="otp1"
      >
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
      </COneTimePassword>
    </div>
    <div class="mb-4">
      <COneTimePassword
        id="prefilledOTPValue"
        label="OTP with pre-filled value (value prop)"
        name="otp2"
        :value="valueWithProp"
        @change="handleChange"
      >
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
      </COneTimePassword>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CForm } from '@coreui/vue'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'

const value = ref('123456')
const valueWithProp = ref('654321')

const handleChange = (newValue) => {
  valueWithProp.value = newValue
}
</script>
```

## Usage with v-model

Bind `v-model` and the code follows your state — typing only emits `@update:modelValue` (and `@change` with the same code), so the binding feeds it back, and `@complete` fires once every slot is filled. Passed one-way, `model-value` or `value` seeds the code, and the input manages it from there. A native reset of the form puts back the code the input started with, emitting `change` only when that changes the code; a bound input asks for its first code through `update:modelValue` and shows yours until you take it.

```vue
<COneTimePassword v-model="code">
```

## Input modes

Control user input behavior with linear and non-linear modes.

```html
<template>
  <div class="mb-4">
    <COneTimePassword label="Linear mode (sequential input)" :linear="true">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div>
    <COneTimePassword label="Non-linear mode (free navigation)" :linear="false">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
</template>

<script setup>
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'
</script>
```

- `linear="true"` (default) - Users must fill fields in sequential order
- `linear="false"` - Users can fill any field in any order

## Auto-submit

Automatically submit the form when all OTP fields are completed:

```html
<template>
  <form @submit.prevent="handleSubmit">
    <COneTimePassword
      v-model="otpValue"
      label="Auto-submit OTP (fill all 6 digits)"
      :auto-submit="true"
      @complete="onComplete"
    >
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
    <div class="mt-3">
      <small v-if="submitted" class="fg-success">Form submitted with code: {{ otpValue }}</small>
      <small v-else class="fg-2">Fill all fields to auto-submit</small>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'

const otpValue = ref('')
const submitted = ref(false)

const onComplete = (value) => {
  console.log('OTP completed:', value)
}

const handleSubmit = (event) => {
  event.preventDefault()
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
  }, 3000)
}
</script>
```

The `auto-submit` prop triggers form submission when all fields are filled. The `@complete` event fires when the OTP is fully entered.

## Custom layouts

Create different layouts and field counts to match your requirements:

```html
<template>
  <div class="mb-4">
    <COneTimePassword label="6-digit OTP with separators">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <div class="px-3 fg-3 fw-bold">-</div>
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div class="mb-4">
    <COneTimePassword label="9-digit OTP with separators">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <div class="px-3 fg-3 fw-bold">•</div>
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <div class="px-3 fg-3 fw-bold">•</div>
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div>
    <COneTimePassword label="4-digit PIN" masked>
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
</template>

<script setup>
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'
</script>
```

You can create any number of input fields and even separate them into multiple OTP components for complex layouts.

## Grouped cells

Wrap cells in `<COneTimePasswordGroup>` to join them into one field: the cells share their borders and only the outer corners keep the radius. One group joins the whole code; several groups split it into segments, spaced by the `--cui-form-otp-gap` of the wrapper.

```html
<template>
  <div class="mb-4">
    <COneTimePassword label="6-digit OTP, one group">
      <COneTimePasswordGroup>
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
      </COneTimePasswordGroup>
    </COneTimePassword>
  </div>
  <div>
    <COneTimePassword label="6-digit OTP, two groups">
      <COneTimePasswordGroup>
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
      </COneTimePasswordGroup>
      <COneTimePasswordGroup>
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
      </COneTimePasswordGroup>
    </COneTimePassword>
  </div>
</template>

<script setup>
import { COneTimePassword, COneTimePasswordGroup, COneTimePasswordInput } from '@coreui/vue-pro'
</script>
```

## Sizing

Use the `size` prop to adjust the height and padding of the OTP inputs:

```html
<template>
  <div class="mb-4">
    <COneTimePassword label="Large OTP input" size="lg">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div class="mb-4">
    <COneTimePassword label="Default OTP input">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div>
    <COneTimePassword label="Small OTP input" size="sm">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
</template>

<script setup>
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'
</script>
```

- `size="sm"` – Small inputs
- `size="lg"` – Large inputs

## Disabled

Disable all OTP input fields using the `disabled` prop:

```html
<template>
  <COneTimePassword label="Disabled OTP" value="123456" disabled>
    <COneTimePasswordInput />
    <COneTimePasswordInput />
    <COneTimePasswordInput />
    <COneTimePasswordInput />
    <COneTimePasswordInput />
    <COneTimePasswordInput />
  </COneTimePassword>
</template>

<script setup>
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'
</script>
```

## Validation

The code is validated as one value, kept in an input laid invisibly over the group. With `required` an empty or incomplete code blocks the submit, and an incomplete code blocks it even when the field is not required; the browser puts focus on the first empty slot and shows its own message over the group. The state shows on the group as the `.is-*` class, and while it is `'invalid'` every slot carries `aria-invalid="true"` and is described by the message after the group: the `feedback-invalid` text, the `feedback` text while you give a state, or an `.invalid-feedback` you render after the field yourself. The hidden input holds the new code by the time `change` and `complete` are emitted, and sends `input` and `change` once the code has rendered, also when your code changes it through `v-model` or `value`.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <div class="col-md-6">
      <COneTimePassword
        feedback-invalid="Enter the six digits we sent you."
        label="Verification code"
        name="code"
        required
      >
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
      </COneTimePassword>
    </div>
    <div class="col-md-6">
      <COneTimePassword
        v-model:validation-state="backupCodeState"
        feedback="This backup code has already been used."
        label="Backup code"
        name="backupCode"
        value="482913"
      >
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
      </COneTimePassword>
    </div>
    <div class="col-12">
      <CButton color="primary" type="submit">Verify</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CForm } from '@coreui/vue'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'

const backupCodeState = ref('invalid')
</script>
```

The state comes from three places, in this order:

- `validationState`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`; `invalid` and `valid` still work as aliases. While it is set, the component draws it instead of what the browser reports. While it is `'invalid'`, the code blocks the submit with the text of the linked message, or `Invalid value.` when there is none, unless the component is `disabled`.
- A validation that reports the code invalid: a submit, `checkValidity()` or `reportValidity()`, which [`CForm`](https://coreui.io/vue/docs/forms/validation/) and the stepper call as well. From then on the group and the slots show it invalid whenever the code is invalid, until the form is reset, and the message after the group shows.
- In a form with `validate`, the `:user-invalid` state of the hidden input, and with `validate="valid"` also its `:user-valid` state.

A state you give is a verdict on the code it was given for. When the user types, deletes, pastes or autofills a different code, or the form is reset, the component emits `update:validationState` with `undefined`; bind it with `v-model:validation-state` to drop the state, as the second field above does. A change your code makes through `v-model` or `value` keeps it, and so does a keystroke that leaves the code as it is. A reset emits once it has run, so a state you set from a `reset` listener on the form gets the same event, and your handler decides whether to drop it. A native reset of the form puts back the code given by `value`, and leaves a bound `v-model` to you. An `aria-invalid` attribute on the component or on a slot is not read; set the state with `validation-state`.

## Accessibility

The one-time password input component is designed with accessibility in mind and follows WCAG guidelines for form inputs.

- **ARIA Labels**: Each input field automatically receives descriptive `aria-label` attributes
- **Role Attribute**: The container has `role="group"` to indicate related form controls, named by `label`
- **Label click**: clicking the label that names the group moves focus to the first empty slot, as clicking the label of an input focuses it
- **Required**: with `required`, every slot carries `aria-required="true"`, since the value input that holds `required` is hidden from assistive technologies
- **Keyboard Navigation**: Full keyboard support with arrow keys, tab, and backspace
- **Screen Reader Support**: Clear announcements when values change; while the code is reported invalid, every slot carries `aria-invalid="true"` and the error message
- **Focus Management**: Automatic focus handling for seamless navigation
- **Autofill**: only the first field advertises `autocomplete="one-time-code"`, so SMS autofill and password managers target a single field; a code delivered that way is spread across the slots automatically, exactly like a paste

### Customizing accessibility

You can customize the aria-label generation function to provide more specific descriptions:

```vue
<COneTimePassword
  :aria-label="(index, total) => `Enter digit ${index + 1} of your ${total}-digit verification code`"
/>
```

### Keyboard support

The one-time password input component provides comprehensive keyboard navigation support:

| Key | Action |
| --- | --- |
| <kbd>Arrow Right</kbd> | Move focus to next input field |
| <kbd>Arrow Left</kbd> | Move focus to previous input field |
| <kbd>Backspace</kbd> | Delete current character and move to previous field (if empty) |
| <kbd>Tab</kbd> | Move to next focusable element (respects linear mode) |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move to previous focusable element |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd> | Paste clipboard content and auto-fill fields |

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;COneTimePassword /&gt;](./api/#conetimepassword)
- [&lt;COneTimePasswordInput /&gt;](./api/#conetimepasswordinput)
