# Vue Range Component

> Vue range component. Use our custom range inputs for consistent cross-browser styling and built-in customization.

## Overview

Create custom `<input type="range">` controls with `<CFormRange>`. The track (the background) and thumb (the value) are both styled to appear the same across browsers, and the track fills up to the thumb: the component renders the input inside a `.form-range` wrapper and writes the fill ratio to `--cui-range-fill`, which the CSS uses to draw the fill, the tooltip and the tick marks. The fill is a shade lighter than the thumb; `:track="false"` leaves the track unfilled.

```html
<template>
  <CFormRange id="customRange1" label="Example range" />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```

For several thumbs on one track, a vertical orientation or ticks that move a thumb when pressed, use [`<CRangeSlider>`](https://coreui.io/vue/docs/forms/range-slider/), which renders this markup.

## Tooltip

Set `tooltips` to show a tooltip with the value that follows the thumb. It appears while the pointer is over the input, while the thumb is held, and while the input has focus; `tooltips="always"` keeps it visible at all times. The tooltip is the markup and the look of the [tooltip](https://coreui.io/vue/docs/components/tooltip/) component, and `tooltip-class-name` adds classes to it, for example a `theme-{color}`. `tooltips-format` formats the text, and a string it returns becomes the input's `aria-valuetext`.

```html
<template>
  <CFormRange id="rangeTooltip" label="Brightness" :value="60" tooltips />
  <CFormRange
    id="rangeTooltipAlways"
    class="mt-5"
    label="Brightness"
    :value="60"
    tooltips="always"
    :tooltips-format="(value) => `${value}%`"
  />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```

## Tick marks

Pass `ticks` and the component renders a tick mark for each entry. A number is a bare tick at that value, and an object sets `value`, `label`, `className` and `style`, so the ticks land on their values even when those are unevenly spaced. A labelled tick is drawn taller than an unlabelled one.

```html
<template>
  <CFormRange
    id="rangeTicks"
    label="Temperature"
    :min="0"
    :max="100"
    :step="25"
    :value="50"
    :ticks="[
      { value: 0, label: 'Cold' },
      25,
      { value: 50, label: 'Mild' },
      75,
      { value: 100, label: 'Hot' },
    ]"
  />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```

A string, or an object without `value`, is a label placed by its position in the array, the first at `min` and the last at `max`. While the thumb sits on a tick labelled with text, its `aria-valuetext` adds the label to the value, so a screen reader announces "50, Medium"; with `tooltips-format` the label follows the formatted text when the two differ.

```html
<template>
  <CFormRange id="rangePriority" label="Priority" :ticks="['Low', 'Medium', 'High']" />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <CFormLabel for="rangeField">Volume</CFormLabel>
    <CFormRange id="rangeField" />
    <CFormText>Applies to notification sounds only.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormLabel, CFormRange, CFormText } from '@coreui/vue'
</script>
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
<template>
  <CFormRange id="disabledRange" disabled label="Disabled range" />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```

## Min and max

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

```html
<template>
  <CFormRange id="customRange2" label="Example range" :min="0" :max="5" :value="3" />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```

## Steps

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `:step="0.5"`.

```html
<template>
  <CFormRange id="customRange3" label="Example range" :min="0" :max="5" :step="0.5" :value="3" />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```

Inside a `<form>`, a native reset puts the thumb back on the value the range started with and emits `update:modelValue` when that moves it; a bound range only asks for its first value there.

## Theme variants

Color the thumb and the fill with the [`theme`](https://coreui.io/vue/docs/customize/components/#theme-variants) property.

```html
<template>
  <div class="d-flex flex-column gap-3">
    <CFormRange id="rangeThemePrimary" theme="primary" label="Primary range" :value="50" />
    <CFormRange id="rangeThemeSecondary" theme="secondary" label="Secondary range" :value="50" />
    <CFormRange id="rangeThemeSuccess" theme="success" label="Success range" :value="50" />
    <CFormRange id="rangeThemeDanger" theme="danger" label="Danger range" :value="50" />
    <CFormRange id="rangeThemeWarning" theme="warning" label="Warning range" :value="50" />
    <CFormRange id="rangeThemeInfo" theme="info" label="Info range" :value="50" />
  </div>
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormRange /&gt;](./api/#cformrange)
