# Vue Number Input Component

> A Vue number field with accessible increment and decrement buttons, with min, max and step handled by the browser.

## Example

_Added in 5.22.0._

`` is a number field with a stepper you can actually hit. The browser's own spinner is tiny, appears only on hover in some engines and does not exist at all on iOS, so the component replaces it with two buttons sized like every other adornment in a form control group. You write neither the frame, the buttons nor their icons.

The `value` attribute seeds the field like on a native input; bind `v-model` for a controlled value.

```html
<template>
  <CNumberInput aria-label="Quantity" value="3" />
</template>

<script setup>
import { CNumberInput } from '@coreui/vue-pro'
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <CFormLabel for="numberInputField">Quantity</CFormLabel>
    <CNumberInput id="numberInputField" :model-value="3" />
    <CFormText>Up to ten items per order.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormLabel, CFormText } from '@coreui/vue'
import { CNumberInput } from '@coreui/vue-pro'
</script>
```

## Min, max and step

`min`, `max` and `step` are the native attributes — the component does not reimplement them, it calls the browser's own stepping. **A button that cannot move the value any further is disabled**, so the bound is visible rather than just unresponsive.

When the field is empty, a button steps from zero, and the result stays within `min` and `max` and on the `step` grid.

```html
<template>
  <CForm>
    <div class="mb-4">
      <CNumberInput label="Quantity" max="10" min="0" value="10" />
    </div>
    <div>
      <CNumberInput label="Amount" step="0.5" value="2" />
    </div>
  </CForm>
</template>

<script setup>
import { CForm, CNumberInput } from '@coreui/vue-pro'
</script>
```

## Sizing

Use the `size` prop to control the height and padding of the field. Sizing belongs to the frame rather than to the control inside it, so the component puts the class on the group it builds.

```html
<template>
  <CForm>
    <div class="mb-4">
      <CNumberInput aria-label="Quantity" size="sm" value="3" />
    </div>
    <div>
      <CNumberInput aria-label="Quantity" size="lg" value="3" />
    </div>
  </CForm>
</template>

<script setup>
import { CForm, CNumberInput } from '@coreui/vue-pro'
</script>
```

## Controlled value

Bind `v-model` to own the value yourself. Stepping reports through the same `input` and `change` events typing does, so there is one path to handle.

```html
<template>
  <CNumberInput v-model="value" label="Quantity" />
  <div class="mt-3 fg-2">Value: {{ value === '' ? '—' : value }}</div>
</template>

<script setup>
import { ref } from 'vue'
import { CNumberInput } from '@coreui/vue-pro'
const value = ref('3')
</script>
```

## Disabled and read-only

```html
<template>
  <CForm>
    <div class="mb-4">
      <CNumberInput disabled label="Disabled" value="3" />
    </div>
    <div>
      <CNumberInput label="Read-only" readonly value="3" />
    </div>
  </CForm>
</template>

<script setup>
import { CForm, CNumberInput } from '@coreui/vue-pro'
</script>
```

Both buttons are disabled while the field is disabled or read-only.

## Holding a button

Holding a button repeats the step after a short delay, and releasing it does not add a step. Set `:repeat="false"` to require a click per step.

## Floating labels

Set `floatingLabel` and the component renders the label itself — no wrapper markup needed — and the text also becomes the field's accessible name; the stepper buttons ride along with the field.

```html
<template>
  <CNumberInput id="floatingNumberInput" floating-label="Quantity" :value="42" />
</template>
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/vue/docs/forms/floating-labels/#always-floating).

## Accessibility

The buttons carry labels (`Increase` / `Decrease` by default, both configurable through `ariaIncrementLabel` and `ariaDecrementLabel`) but are **kept out of the tab order**: a number field already steps with <kbd>↑</kbd> and <kbd>↓</kbd>, so putting them in would add two tab stops per field for something the keyboard already reaches. A mouse press on a button, enabled or not, puts the focus in the field rather than on the button, so typing and the arrow keys act on the field you just stepped. Give the field a `label` or an `aria-label` as you would any other control.

> **Decimal separators.** `` accepts the dot as the decimal separator regardless of locale, and a value the browser rejects is reported as an empty string — the field cannot tell you what was typed. If you need locale-aware separators, currency or grouping, that is a formatted-input problem rather than a stepper one, and `type="number"` is the wrong base for it.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CNumberInput /&gt;](./api/#cnumberinput)
