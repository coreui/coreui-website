# Vue Rating Component

> A Vue star rating component allows users to rate and provide feedback on content or products by selecting a specified number of stars, typically ranging from one to five, representing their level of satisfaction or preference.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## How to use Vue Rating Component.

Embed the Rating component in your Vue application like this:

```html
<template>
  <CRating :value="3" />
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
</script>
```

### vModel
```html
<template>
  <CRating v-model="selected" />
  <div class="mt-4">Selected value: {{ selected }}</div>
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
import { ref } from 'vue'
const selected = ref(2)
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <span id="ratingFieldLabel" class="form-label">Overall rating</span>
    <CRating aria-labelledby="ratingFieldLabel" :model-value="3" name="score" />
    <CFormText>Tell us how the delivery went.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormText } from '@coreui/vue'
import { CRating } from '@coreui/vue-pro'
</script>
```

Inside a `<form>`, a rating that is not bound with `v-model` follows a form reset: it goes back to its `value`, or to no rating when it has none, and emits `change` and `update:modelValue` when that differs from the current value. A rating bound with `v-model` asks for the value it started with through `update:modelValue` and `change`, and a reset that a listener cancels changes nothing.

## Allow clear

Enable users to clear their selected rating by clicking on the current rating again. This functionality is activated by setting `allowClear` boolean property.

```html
<template>
  <CRating allow-clear :value="3" />
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
</script>
```

## Resettable

This allows the selected rating to be deselected, effectively resetting the rating to a state where no value is selected.

```html
<template>
  <div class="d-flex align-items-center">
    <CRating :value="currentValue" @change="(value) => setCurrentValue(value)" />
    <CButton class="ms-4" theme="primary" @click="setCurrentValue(null)">reset</CButton>
  </div>
</template>

<script setup>
import { CButton } from '@coreui/vue'
import { CRating } from '@coreui/vue-pro'
import { ref } from 'vue'
const currentValue = ref(3)
const setCurrentValue = (value) => {
  currentValue.value = value
}
</script>
```

## Read only

Set the Vue rating component to read-only by adding `readOnly` property. The value cannot be changed with the mouse or the keyboard, only the checked star takes focus (the first star while no star is checked), and the group carries `aria-readonly="true"`. Give the rating a `name` to submit its value with the form; without one it only shows the score.

```html
<template>
  <CRating read-only :value="3" />
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
</script>
```

## Disabled

Add the `disabled` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
<template>
  <CRating disabled :value="3" />
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
</script>
```

## Validation

_Added in 6.0.0._

A rating can be required, and it takes a validation state from the page.

- `required` makes every radio required, so the browser stops the submit while no star is picked, and gives the rating `aria-required="true"`. A read-only rating is never required.
- Give a state with `validation-state`. It shows on the rating: it colours the focus ring, the stars keep their colours, and `'invalid'` sets `aria-invalid` on the rating and adds the invalid feedback that follows it, or the one named in its `data-coreui-invalid-feedback`, to the `aria-describedby` of every star.
- `'invalid'` blocks the submit through the checked star, or the first one when none is picked, with the text of the feedback as the message the browser shows, or `Invalid value.` without one. `'valid'` and a custom state do not block, and neither does a disabled or read-only rating.
- When the user picks or clears a star, or the form is reset, the rating emits `update:validationState` with `undefined` before it reports the change; bind the state with `v-model:validation-state` to drop it. A change of the value from your code keeps it.
- A required rating without a value shows `'invalid'` once a validation reports it, and a given state shows over it.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <CFormField class="col-12">
      <span id="deliveryRatingLabel" class="form-label">Delivery</span>
      <CRating
        v-model:validation-state="deliveryState"
        aria-labelledby="deliveryRatingLabel"
        name="deliveryRating"
        required
      />
      <CFormFeedback validation-state="invalid">
        Rate the delivery before you send the review.
      </CFormFeedback>
    </CFormField>
    <div class="col-12">
      <CButton color="primary" type="submit">Send</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CForm, CFormFeedback, CFormField } from '@coreui/vue'
import { CRating } from '@coreui/vue-pro'

const deliveryState = ref('invalid')
</script>
```

## Tooltips

Enable descriptive text on hover by adding `tooltips` prop. This provides immediate feedback or guidance as the user interacts with the rating items.

```html
<template>
  <CRating tooltips :value="3" />
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
</script>
```

For custom messages, provide an array of labels corresponding to each rating value to enhance the user's understanding of each rating level.

```html
<template>
  <CRating :tooltips="['Very bad', 'Bad', 'Meh', 'Good', 'Very good']" :value="3" />
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
</script>
```

## Sizes

Larger or smaller Vue rating component? Add `size="lg"` or `size="sm"` for additional sizes.

```html
<template>
  <CRating size="sm" :value="3" />
  <CRating :value="3" />
  <CRating size="lg" :value="3" />
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
</script>
```

## Precision

Adjust the granularity of the Rating component by setting `precision` prop. This attribute allows for fractional ratings, such as quarter values, to provide more precise feedback.

```html
<template>
  <CRating :precision="0.25" :value="3" />
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
</script>
```

## Number of items

Control the total number of rating items displayed by using `itemCount` property. You can create a Vue rating component with a custom scale, be it larger for detailed assessments or smaller for simplicity.

```html
<template>
  <CRating :item-count="20" :value="5" />
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
</script>
```

```html
<template>
  <CRating :item-count="3" :value="1" />
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
</script>
```

## Theme variants

Color the active items with a [`.theme-*` class](https://coreui.io/vue/docs/customize/components/#theme-variants) on the rating.

```html
<template>
  <CRating class="theme-danger" :value="3" />
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
</script>
```

## Custom icons

Customize the Vue rating component with your choice of SVG icons by assigning new values to the `activeIcon` and `icon` properties in the JavaScript options. This allows for a unique look tailored to the design language of your site or application.

The Rating component can be customized with either SVG or font icons, allowing for visual alignment with your application's design. You can specify different icons for each rating value to enhance user interaction.

In the example below, we demonstrate how to set custom icons using SVG, allowing for detailed customization of the visual elements within the Rating component.

```html
<template>
  <CRating :value="3">
    <template #activeIcon>
      <CIcon :icon="cisStar" custom-class-name=" " />
    </template>
    <template #icon>
      <CIcon :icon="cilStar" custom-class-name=" " />
    </template>
  </CRating>
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
import { CIcon } from '@coreui/icons-vue'
import { cilStar, cisStar } from '@coreui/icons-pro'
</script>
```

In the example below, we use font icons from the CoreUI Icons set. In the `activeIcon` configuration, we also apply the utility class `fg-danger` to change the icon's color to red when it is active.

```html
<template>
  <CRating :value="3">
    <template #activeIcon>
      <CIcon :icon="cilHeart" custom-class-name="fg-danger" />
    </template>
    <template #icon>
      <CIcon :icon="cilHeart" custom-class-name=" " />
    </template>
  </CRating>
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
import { CIcon } from '@coreui/icons-vue'
import { cilHeart } from '@coreui/icons-pro'
</script>
```

For a more dynamic experience, define different icons for each rating value, enhancing the visual feedback:

```html
<template>
  <CRating
    highlight-only-selected
    :tooltips="['Very bad', 'Bad', 'Meh', 'Good', 'Very good']"
    :value="3"
  >
    <template #icon="{ value }">
      <CIcon :icon="icons[value].icon" :custom-class-name="icons[value].customClassName" />
    </template>
    <template #activeIcon="{ value }">
      <CIcon
        :icon="activeIcons[value].icon"
        :custom-class-name="activeIcons[value].customClassName"
      />
    </template>
  </CRating>
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
import { CIcon } from '@coreui/icons-vue'
import { cilMoodVeryBad, cilMoodBad, cilMoodGood, cilMoodVeryGood, cilMeh } from '@coreui/icons-pro'
const icons = {
  1: { icon: cilMoodVeryBad, customClassName: ' ' },
  2: { icon: cilMoodBad, customClassName: ' ' },
  3: { icon: cilMeh, customClassName: ' ' },
  4: { icon: cilMoodGood, customClassName: ' ' },
  5: { icon: cilMoodVeryGood, customClassName: ' ' },
}
const activeIcons = {
  1: { icon: cilMoodVeryBad, customClassName: 'fg-emphasis-danger' },
  2: { icon: cilMoodBad, customClassName: 'fg-danger' },
  3: { icon: cilMeh, customClassName: 'fg-warning' },
  4: { icon: cilMoodGood, customClassName: 'fg-success' },
  5: { icon: cilMoodVeryGood, customClassName: 'fg-emphasis-success' },
}
</script>
```

## Custom feedback

The Vue Rating component integrates interactive star ratings with dynamic textual feedback using other components from CoreUI. It enables users to select a rating that updates the display and label in real-time, enhancing the interactive experience. Hover effects provide immediate feedback on potential ratings before selection, ensuring an intuitive user interface.

```html
<template>
  <div class="d-flex align-items-center">
    <div class="fg-2 me-4">{{ currentValue }} / 5</div>
    <CRating
      class="d-inline-flex"
      :value="currentValue"
      @change="(value) => setCurrentValue(value)"
      @hover="(value) => setLabel(value ? labels[value] : labels[currentValue])"
    />
    <CBadge v-if="label" class="ms-4" theme="inverse">{{ label }}</CBadge>
  </div>
</template>

<script setup>
import { CBadge } from '@coreui/vue'
import { CRating } from '@coreui/vue-pro'
import { ref } from 'vue'
const currentValue = ref(3)
const setCurrentValue = (value) => {
  currentValue.value = value
}
const labels = {
  1: 'Very bad',
  2: 'Bad',
  3: 'Meh',
  4: 'Good',
  5: 'Very good',
}
const label = ref(labels[3])
const setLabel = (_label) => {
  label.value = _label
}
</script>
```

## Usage with v-model

_Added in 6.0.0._

Bind `v-model` and the rating renders exactly what your state says — a click only emits the change, and nothing moves until you feed it back.

```html
<template>
  <CRating :model-value="value" @change="(next) => (value = next)" />
  <div class="mt-4 d-flex align-items-center gap-4">
    <CButton theme="secondary" @click="value = null">Clear</CButton>
    <span>Current value: {{ value ?? 'none' }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CRating } from '@coreui/vue-pro'

const value = ref(3)
</script>
```

### Initial value

Give the rating a starting point and let it manage itself.

```vue
<CRating :model-value="3" />
```

`change` fires either way with the new value — so you can watch the state without taking it over.

`value` is the same starting point without `model-value` at all — tracked reactively (a later change to it still moves the rating) until a click or a `model-value` takes over for good.

```vue
<CRating :value="3" />
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CRating /&gt;](./api/#crating)
