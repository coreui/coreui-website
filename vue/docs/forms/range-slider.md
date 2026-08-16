# Vue Range Slider Component

> Enhance your forms with our customizable Vue Range Slider component for advanced range selection.

## Overview

The **Vue Range Slider** component allows users to select a value or range of values within a predefined range. Unlike the standard `<input type="range">`, the Range Slider offers enhanced customization options, including multiple handles, labels, tooltips, and vertical orientation. It ensures consistent styling across browsers and provides a rich set of features for advanced use cases.

```html
<template>
  <CRangeSlider :value="[25, 75]" :labels="['Low', 'Medium', 'High']" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

### vModel
```html
<template>
  <CRangeSlider v-model="selected" :labels="['Low', 'Medium', 'High']" />
  <div class="mt-3">Selected value: {{ selected }}</div>
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
import { ref } from 'vue'
const selected = ref(2)
</script>
```

## Features

- **Multiple Handles:** Select single or multiple values within the range.
- **Custom Labels:** Display labels at specific points on the slider.
- **Tooltips:** Show dynamic tooltips displaying current values.
- **Vertical Orientation:** Rotate the slider for vertical layouts.
- **Clickable Labels:** Enable users to click on labels to set slider values.
- **Disabled State:** Disable the slider to prevent user interaction.

## Basic Vue Range Slider

Create a simple range slider with default settings.

```html
<template>
  <CRangeSlider :value="50" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Multiple handles

Enable multiple handles to allow the selection of a range or/and multiple values.

```html
<template>
  <CRangeSlider class="mb-3" :value="[20, 40]" />
  <CRangeSlider class="mb-3" :value="[20, 40, 60]" />
  <CRangeSlider class="mb-3" :value="[20, 40, 60, 80]" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Vertical Range Slider

Rotate the slider to a vertical orientation.

```html
<template>
  <div class="d-flex">
    <CRangeSlider class="me-3" :value="20" vertical />
    <CRangeSlider class="me-3" :value="[20, 80]" vertical />
    <CRangeSlider :value="[20, 80, 100]" vertical />
  </div>
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Disabled

Disable the slider to prevent user interaction.

```html
<template>
  <CRangeSlider class="mb-3" :value="50" disabled />
  <CRangeSlider :value="[50, 75]" disabled />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Min and max

Vue Range Slider component has implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

```html
<template>
  <CRangeSlider class="mb-3" :min="-50" :max="150" :value="50" />
  <CRangeSlider :min="-50" :max="150" :value="[50, 75]" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Steps

Range Slider inputs automatically "snap" to whole numbers. To modify this behavior, set a `step` value. In the example below, we increase the number of steps by specifying `step="0.25"`.

```html
<template>
  <CRangeSlider class="mb-3" :step="0.25" :value="50" />
  <CRangeSlider :step="0.25" :value="[50, 75]" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Distance

Sets the minimum distance between multiple slider handles by setting `distance` and ensures that the handles do not overlap or get too close.

```html
<template>
  <CRangeSlider :distance="10" :value="[50, 75]" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Labels

Add labels to specific points on the slider for better context. If you provide an array of strings, as in the example below, then labels will be spaced at equal distances from the beginning to the end of the slider.

```html
<template>
  <CRangeSlider :labels="['Start', 'Middle', 'End']" :value="[30, 70]" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

### Labels customization

Labels can be configured as an array of strings or objects. When using objects, you can specify additional properties like `value`, `label`, `className`, and `style`.

```html
<template>
  <CRangeSlider
    :min="-50"
    :max="100"
    :labels="[
      {
        value: -50,
        label: '-50°C',
        className: 'text-info',
      },
      {
        value: 0,
        label: '0°C',
        style: {
          fontWeight: 'bold',
        },
      },
      {
        value: 20,
        label: '20°C',
        className: ['text-warning'],
      },
      {
        value: 100,
        label: '100°C',
        className: 'text-danger',
      },
    ]"
    :tooltips-format="(value) => `${value}°C`"
    :value="[-10, 40]"
  />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

### Clickable labels

By default, users can click on labels to set the slider to specific values. You can disable this feature by setting `clickableLabels` to `false`.

```html
<template>
  <CRangeSlider :clickable-labels="false" :labels="['Low', 'Medium', 'High']" :value="[20, 80]" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Tooltips

By default, tooltips display the current value of each handle. You can disable tooltips by setting `tooltips` to `false`

```html
<template>
  <CRangeSlider :tooltips="false" :value="[40, 60]" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

### Tooltips formatting

Customize the content of tooltips using the `tooltipsFormat` option. This can be a function that formats the tooltip text based on the current value.

```html
<template>
  <CRangeSlider
    :max="1000"
    :labels="[
      {
        value: 0,
        label: '$0',
      },
      {
        value: 250,
        label: '$250',
      },
      {
        value: 500,
        label: '$500',
      },
      {
        value: 1000,
        label: '$1000',
      },
    ]"
    :tooltips-format="(value) => `$${value}`"
    :value="[100, 350]"
  />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Track

The `track` property allows you to customize how the slider's track is displayed. By default, the `track` property is set to `'fill'` enabling dynamic filling of the track based on the slider's current value(s). This means the filled portion of the track will adjust automatically as the slider handle(s) move, offering a responsive visual representation of the selected range.

### Disable filling

If you set `track` to `false`, the slider's track will not display any fill. Only the default track background will be visible, which can be useful for minimalist designs or when you use more then two handles.

```html
<template>
  <CRangeSlider class="mb-3" :track="false" :value="50" />
  <CRangeSlider class="mb-3" :track="false" :value="[50, 75]" />
  <CRangeSlider :track="false" :value="[25, 50, 75]" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Accessibility

The Vue.js Range Slider component is built with accessibility in mind. Each slider handle includes the following ARIA attributes:

- `role="slider"`
- `aria-valuemin`: Minimum value
- `aria-valuemax`: Maximum value
- `aria-valuenow`: Current value
- `aria-orientation`: horizontal or vertical

Additionally, ensure that labels and tooltips are clear and descriptive to provide the best experience for all users.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CRangeSlider /&gt;](./api/#crangeslider)
