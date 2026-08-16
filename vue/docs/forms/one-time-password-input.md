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
    <div class="mb-3">
      <COneTimePassword id="basicOTP" v-model="value" label="Enter OTP Code" name="otp">
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
        <COneTimePasswordInput />
      </COneTimePassword>
    </div>
    <div v-if="value" class="text-body-secondary small">Current value: {{ value }}</div>
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

## One-time password types

The OTP component supports both numeric and text input types through the `type` prop:

```html
<template>
  <div class="mb-3">
    <COneTimePassword label="Numeric OTP (default)" type="number">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div class="mb-3">
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
  <div class="mb-3">
    <COneTimePassword label="Single character placeholder" placeholder="0">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div class="mb-3">
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

Use `v-model` for controlled components with pre-filled or dynamic values:

```html
<template>
  <CForm>
    <div class="mb-3">
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
    <div class="mb-3">
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

The component supports both `v-model` and `value` property.

## Input modes

Control user input behavior with linear and non-linear modes.

```html
<template>
  <div class="mb-3">
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
    <div class="mt-2">
      <small v-if="submitted" class="text-success">Form submitted with code: {{ otpValue }}</small>
      <small v-else class="text-muted">Fill all fields to auto-submit</small>
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
  <div class="mb-3">
    <COneTimePassword label="6-digit OTP with separators">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <div class="px-2 text-body-tertiary fw-bold">-</div>
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div class="mb-3">
    <COneTimePassword label="9-digit OTP with separators">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <div class="px-2 text-body-tertiary fw-bold">•</div>
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <div class="px-2 text-body-tertiary fw-bold">•</div>
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

## Sizing

Use the `size` prop to adjust the height and padding of the OTP inputs:

```html
<template>
  <div class="mb-3">
    <COneTimePassword label="Large OTP input" size="lg">
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
      <COneTimePasswordInput />
    </COneTimePassword>
  </div>
  <div class="mb-3">
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

## Disabled state

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

## Read-only state

Make the OTP component read-only while preserving visual feedback:

```html
<template>
  <COneTimePassword v-model="value" readonly>
    <COneTimePasswordInput />
    <COneTimePasswordInput />
    <COneTimePasswordInput />
    <COneTimePasswordInput />
  </COneTimePassword>
</template>

<script setup>
import { ref } from 'vue'
import { COneTimePassword, COneTimePasswordInput } from '@coreui/vue-pro'

const value = ref('1234')
</script>
```

## Form Integration

The OTP component integrates seamlessly with CoreUI's form system, supporting validation states and form controls:

```vue
<COneTimePassword
  label="Verification Code"
  text="Enter the 4-digit code sent to your email"
  :invalid="hasError"
  feedback-invalid="Please enter a valid verification code"
  required
>
  <COneTimePasswordInput />
  <COneTimePasswordInput />
  <COneTimePasswordInput />
  <COneTimePasswordInput />
</COneTimePassword>
```

## Accessibility

The one-time password input component is designed with accessibility in mind and follows WCAG guidelines for form inputs.

- **ARIA Labels**: Each input field automatically receives descriptive `aria-label` attributes
- **Role Attribute**: The container has `role="group"` to indicate related form controls
- **Keyboard Navigation**: Full keyboard support with arrow keys, tab, and backspace
- **Screen Reader Support**: Clear announcements when values change or validation occurs
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
