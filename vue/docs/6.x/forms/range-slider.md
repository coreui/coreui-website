# Vue Range Slider Component

> Enhance your forms with our customizable Vue Range Slider component for advanced range selection.

## Overview

The **Vue Range Slider** component allows users to select a value or range of values within a predefined range. It renders the markup of the [range](https://coreui.io/vue/docs/forms/range/): a `<div class="form-range">` with one native `<input type="range">` per handle, so it looks like a range and reads its tokens, and adds what the range does not have: several handles on one track, `distance` between them, a press on the track that moves the nearest handle, clickable ticks and a vertical orientation. `class`, `style`, `theme`, `dir`, `hidden` and `role` land on the `.form-range`, which is a group named by a string in `aria-label` or by `aria-labelledby`; other input attributes, such as `aria-describedby`, reach every handle, and `id` and `autofocus` the first one.

```html
<template>
  <CRangeSlider
    :value="[25, 75]"
    :ticks="['Low', 'Medium', 'High']"
    :aria-label="['Minimum intensity', 'Maximum intensity']"
  />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

### vModel
```html
<template>
  <CRangeSlider v-model="selected" :aria-label="['Level']" :ticks="['Low', 'Medium', 'High']" />
  <div class="mt-4">Selected value: {{ selected }}</div>
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
import { ref } from 'vue'
const selected = ref([50])
</script>
```

## Features

- **Multiple Handles:** Select single or multiple values within the range.
- **Ticks:** Draw ticks with labels at specific points on the slider.
- **Tooltips:** Show dynamic tooltips displaying current values.
- **Vertical Orientation:** Rotate the slider for vertical layouts.
- **Clickable Ticks:** Enable users to click on ticks to set slider values.
- **Disabled State:** Disable the slider to prevent user interaction.

## Basic Vue Range Slider

Create a simple range slider with default settings.

```html
<template>
  <CRangeSlider :value="50" :aria-label="['Volume']" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place. Point `aria-labelledby` at the label and `aria-describedby` at the description: the slider is a group named by the label, "Budget" here, its handles carry their own names, "Minimum" and "Maximum", and the text below describes every handle (see [Accessibility](#accessibility)).

```html
<template>
  <CFormField>
    <span id="budgetLabel" class="form-label">Budget</span>
    <CRangeSlider
      aria-describedby="budgetHelp"
      aria-labelledby="budgetLabel"
      :aria-label="['Minimum', 'Maximum']"
      :model-value="[25, 75]"
      :name="['budgetMin', 'budgetMax']"
    />
    <CFormText id="budgetHelp">Monthly spend, in thousands.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormText } from '@coreui/vue'
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Multiple handles

Enable multiple handles to allow the selection of a range or/and multiple values. The handles share one track, the band runs from the lowest handle to the highest, and each handle is a native range input, so dragging, the keyboard, touch, form submission and form reset work as they do for one. The handles stay in order, a press on the track moves the nearest one and it follows the pointer until it is released, and when two of them meet the one that can still move stays on top.

```html
<template>
  <CRangeSlider class="mb-4" :value="[20, 40]" :aria-label="['Minimum price', 'Maximum price']" />
  <CRangeSlider
    class="mb-4"
    :value="[20, 40, 60]"
    :aria-label="['Checkpoint 1', 'Checkpoint 2', 'Checkpoint 3']"
  />
  <CRangeSlider
    class="mb-4"
    :value="[20, 40, 60, 80]"
    :aria-label="['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4']"
  />
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
    <CRangeSlider class="me-4" :value="20" vertical :aria-label="['Volume']" />
    <CRangeSlider
      class="me-4"
      :value="[20, 80]"
      vertical
      :aria-label="['Minimum temperature', 'Maximum temperature']"
    />
    <CRangeSlider :value="[20, 80, 100]" vertical :aria-label="['Level 1', 'Level 2', 'Level 3']" />
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
  <CRangeSlider class="mb-4" :value="50" disabled :aria-label="['Volume']" />
  <CRangeSlider :value="[50, 75]" disabled :aria-label="['Minimum price', 'Maximum price']" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Min and max

Vue Range Slider component has implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

```html
<template>
  <CRangeSlider class="mb-4" :min="-50" :max="150" :value="50" :aria-label="['Temperature']" />
  <CRangeSlider
    :min="-50"
    :max="150"
    :value="[50, 75]"
    :aria-label="['Minimum temperature', 'Maximum temperature']"
  />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Steps

Range Slider inputs automatically "snap" to whole numbers. To modify this behavior, set a `step` value. In the example below, we increase the number of steps by specifying `step="0.25"`.

```html
<template>
  <CRangeSlider class="mb-4" :step="0.25" :value="50" :aria-label="['Weight']" />
  <CRangeSlider :step="0.25" :value="[50, 75]" :aria-label="['Minimum weight', 'Maximum weight']" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Distance

Sets the minimum distance between multiple slider handles by setting `distance` and ensures that the handles do not overlap or get too close.

```html
<template>
  <CRangeSlider :distance="10" :value="[50, 75]" :aria-label="['Minimum price', 'Maximum price']" />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Ticks

Add ticks to specific points on the slider for better context. If you provide an array of strings, as in the example below, then ticks will be spaced at equal distances from the beginning to the end of the slider.

```html
<template>
  <CRangeSlider
    :ticks="['Start', 'Middle', 'End']"
    :value="[30, 70]"
    :aria-label="['Minimum progress', 'Maximum progress']"
  />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

### Ticks customization

Ticks can be configured as an array of strings, numbers or objects. A number is a bare tick at that value, with no text; with objects you can specify additional properties like `value`, `label`, `className`, and `style`.

```html
<template>
  <CRangeSlider
    :min="-50"
    :max="100"
    :ticks="[
      {
        value: -50,
        label: '-50°C',
        className: 'fg-info',
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
        className: ['fg-warning'],
      },
      {
        value: 100,
        label: '100°C',
        className: 'fg-danger',
      },
    ]"
    :tooltips-format="(value) => `${value}°C`"
    :value="[-10, 40]"
    :aria-label="['Minimum temperature', 'Maximum temperature']"
  />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

### Tick marks

Every tick is taller when it has text, so bare numbers and labelled points mix in one `ticks` array. All of them are laid out on one grid, so unevenly spaced values stay aligned.

```html
<template>
  <CRangeSlider
    :value="[25, 75]"
    :ticks="[
      { value: 0, label: 'Cold' },
      25,
      { value: 50, label: 'Mild' },
      75,
      { value: 100, label: 'Hot' },
    ]"
    :aria-label="['Minimum temperature', 'Maximum temperature']"
  />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

### Clickable ticks

By default, users can click on ticks to set the slider to specific values. You can disable this feature by setting `clickableTicks` to `false`.

```html
<template>
  <CRangeSlider
    :clickable-ticks="false"
    :ticks="['Low', 'Medium', 'High']"
    :value="[20, 80]"
    :aria-label="['Minimum level', 'Maximum level']"
  />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Tooltips

The value tooltip is the [Tooltip](https://coreui.io/vue/docs/components/tooltip/) component's markup: the component renders `<div class="form-range-tooltip tooltip bs-tooltip-top">` with the tooltip's arrow and body, so it takes the tooltip's look and its `--cui-tooltip-*` tokens. It does not inherit the slider's `theme`; give it its own through `tooltipClassName`.

By default, tooltips show the current value of a handle while the pointer is over it, while it is held, and while it has a visible focus. Set `tooltips` to `"always"` to keep them visible at all times, or to `false` to turn them off.

```html
<template>
  <div class="d-flex flex-column gap-5 pt-5">
    <CRangeSlider
      tooltips="always"
      :value="[40, 60]"
      :aria-label="['Minimum price', 'Maximum price']"
    />
    <CRangeSlider
      :tooltips="false"
      :value="[40, 60]"
      :aria-label="['Minimum price', 'Maximum price']"
    />
  </div>
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
    :ticks="[
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
    :aria-label="['Minimum price', 'Maximum price']"
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
  <CRangeSlider class="mb-4" :track="false" :value="50" :aria-label="['Volume']" />
  <CRangeSlider
    class="mb-4"
    :track="false"
    :value="[50, 75]"
    :aria-label="['Minimum price', 'Maximum price']"
  />
  <CRangeSlider
    :track="false"
    :value="[25, 50, 75]"
    :aria-label="['Checkpoint 1', 'Checkpoint 2', 'Checkpoint 3']"
  />
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Theme variants

Color the filled track and the handles with the `theme` property.

```html
<template>
  <div class="d-flex flex-column gap-4">
    <CRangeSlider
      theme="primary"
      :value="[25, 75]"
      :aria-label="['Primary minimum', 'Primary maximum']"
    />
    <CRangeSlider
      theme="secondary"
      :value="[25, 75]"
      :aria-label="['Secondary minimum', 'Secondary maximum']"
    />
    <CRangeSlider
      theme="success"
      :value="[25, 75]"
      :aria-label="['Success minimum', 'Success maximum']"
    />
    <CRangeSlider
      theme="danger"
      :value="[25, 75]"
      :aria-label="['Danger minimum', 'Danger maximum']"
    />
  </div>
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

The `theme` colours the track and the handles; the tooltip keeps its default look. To theme the tooltip, pass a class through `tooltip-class-name` — it lands on the tooltip only. `theme-secondary` gives a grey tooltip on the default slider; `theme-danger` makes the tooltip match a danger slider.

```html
<template>
  <div class="d-flex flex-column gap-4">
    <CRangeSlider
      :value="[40]"
      tooltip-class-name="theme-secondary"
      :aria-label="['Secondary tooltip']"
    />
    <CRangeSlider
      theme="danger"
      :value="[60]"
      tooltip-class-name="theme-danger"
      :aria-label="['Danger slider, danger tooltip']"
    />
  </div>
</template>

<script setup>
import { CRangeSlider } from '@coreui/vue-pro'
</script>
```

## Validation

_Added in 6.0.0._

A range never fails the browser's own validation: a handle always holds a value between `min` and `max` on a step, and `required` does not apply to it. A state comes from the page, when the value breaks a rule the browser does not know, such as a budget below the minimum of a plan.

- Give it with `validation-state`. The state shows on the slider and on its handles: `'invalid'` colours the thumbs, sets `aria-invalid` on every handle and adds the invalid feedback that follows the slider to their `aria-describedby`.
- `'invalid'` blocks the submit through the first handle, with the text of the feedback as the message the browser shows, or `Invalid value.` without one, and the browser moves the focus to that handle. `'valid'` and a custom state do not block, and neither does a disabled slider.
- When the user moves a handle, or the form is reset, the slider emits `update:validationState` with `undefined` before it reports the change; bind it with `v-model:validation-state` to drop the state. A change of the value from your code keeps it.
- A validity you set on a handle with `setCustomValidity()` shows on the slider once a validation reports it, and a given `'valid'` shows over it.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <CFormField class="col-12">
      <span id="planBudgetLabel" class="form-label">Budget</span>
      <CRangeSlider
        v-model:validation-state="budgetState"
        aria-labelledby="planBudgetLabel"
        :aria-label="['Minimum', 'Maximum']"
        :name="['planBudgetMin', 'planBudgetMax']"
        :value="[5, 40]"
      />
      <CFormFeedback validation-state="invalid">
        The Team plan starts at 10 thousand a month.
      </CFormFeedback>
    </CFormField>
    <div class="col-12">
      <CButton color="primary" type="submit">Save</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CForm, CFormFeedback, CFormField } from '@coreui/vue'
import { CRangeSlider } from '@coreui/vue-pro'

const budgetState = ref('invalid')
</script>
```

## Usage with v-model

_Added in 6.0.0._

Bind `modelValue` with `v-model`, or pass it with an `@update:model-value` listener, and the slider is controlled: it renders exactly what you pass, and dragging a handle only emits the change, always as an array. Feed it back and the handle follows — `v-model` is that loop in one attribute; ignore it and the handle stays on your value. Without a listener, `modelValue` is only the starting value, as below. A native reset of the form puts back the values the slider started with and emits `change` and `update:modelValue` when that moves a handle; a bound slider only asks for its first values there.

```html
<template>
  <CRangeSlider v-model="value" :aria-label="['Minimum price', 'Maximum price']" />
  <div class="mt-4 d-flex align-items-center gap-4">
    <CButton theme="secondary" @click="value = [25, 75]">Reset</CButton>
    <span>Current value: {{ value.join(' – ') }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CRangeSlider } from '@coreui/vue-pro'

const value = ref([25, 75])
</script>
```

### Initial value

Give the slider a starting point and let it manage itself; a form reset brings it back to that value.

```vue
<CRangeSlider :model-value="[20, 80]" />
```

Both take a single number as well as an array of values, and `change` fires either way — so you can watch the state without taking it over.

## Accessibility

Each handle is a native `<input type="range">`, so it is a slider with its value, minimum and maximum without any ARIA of its own, and the browser handles the keyboard: the arrow keys, <kbd>Page Up</kbd>, <kbd>Page Down</kbd>, <kbd>Home</kbd> and <kbd>End</kbd>. In a vertical slider the handles carry `aria-orientation="vertical"`, and <kbd>→</kbd> increases the value in every browser, as <kbd>↑</kbd> does.

The slider is a `group`. Give it the name of the field, with `aria-labelledby` pointing at a visible label or with a string in `aria-label`: a screen reader announces the group, "Budget", when the focus enters it, and then each handle by its own name, so it can tell the handles of one slider from another's. A single handle repeats the name of the group, since it has none of its own. `aria-describedby` describes every handle. Name the handles themselves with an array in `aria-label`, one name per handle, or a function `(index, total) => string`. Without it, two handles are named "Minimum value" and "Maximum value" and more handles "Value 1", "Value 2" and so on. Both take the one `aria-label` prop, so a group named with a string keeps the generated handle names; to give the group a name and the handles names of their own, point `aria-labelledby` at a visible label and pass the array. A single handle has no generated name: it takes the name of the group, followed by its own name when `aria-labelledby` names the group, or a `<label>` for its `id`. A `role` you pass replaces `group` on the slider. While a handle sits on a tick labelled with text, its `aria-valuetext` adds the label to the value ("50, Medium", or the `tooltips-format` text followed by the label when they differ).

Tooltips and tick marks are hidden from assistive technology (`aria-hidden="true"`): a tooltip repeats the value the handle already announces, and a tick label reaches the handle through `aria-valuetext` while the handle sits on its tick.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CRangeSlider /&gt;](./api/#crangeslider)
