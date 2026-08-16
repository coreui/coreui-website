# Vue Rating Component

> A Vue star rating component allows users to rate and provide feedback on content or products by selecting a specified number of stars, typically ranging from one to five, representing their level of satisfaction or preference.

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
  <div class="mt-3">Selected value: {{ selected }}</div>
</template>

<script setup>
import { CRating } from '@coreui/vue-pro'
import { ref } from 'vue'
const selected = ref(2)
</script>
```

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
    <CButton class="ms-3" color="primary" @click="setCurrentValue(null)">reset</CButton>
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

Set the Vue rating component to read-only by adding `readOnly` property. This disables interaction, preventing users from changing the displayed rating value.

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

In the example below, we use font icons from the CoreUI Icons set. In the `activeIcon` configuration, we also apply the utility class `text-danger` to change the icon's color to red when it is active.

```html
<template>
  <CRating :value="3">
    <template #activeIcon>
      <CIcon :icon="cilHeart" custom-class-name="text-danger" />
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
  1: { icon: cilMoodVeryBad, customClassName: 'text-danger-emphasis' },
  2: { icon: cilMoodBad, customClassName: 'text-danger' },
  3: { icon: cilMeh, customClassName: 'text-warning' },
  4: { icon: cilMoodGood, customClassName: 'text-success' },
  5: { icon: cilMoodVeryGood, customClassName: 'text-success-emphasis' },
}
</script>
```

## Custom feedback

The Vue Rating component integrates interactive star ratings with dynamic textual feedback using other components from CoreUI. It enables users to select a rating that updates the display and label in real-time, enhancing the interactive experience. Hover effects provide immediate feedback on potential ratings before selection, ensuring an intuitive user interface.

```html
<template>
  <div class="d-flex align-items-center">
    <div class="text-body-secondary me-3">{{ currentValue }} / 5</div>
    <CRating
      class="d-inline-flex"
      :value="currentValue"
      @change="(value) => setCurrentValue(value)"
      @hover="(value) => setLabel(value ? labels[value] : labels[currentValue])"
    />
    <CBadge v-if="label" class="ms-3" color="dark">{{ label }}</CBadge>
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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CRating /&gt;](./api/#crating)
