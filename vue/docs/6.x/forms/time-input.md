# Vue Time Input Component

> Create Vue time fields with a section-based input mask. Users type the hour, minutes, and seconds in separate sections with automatic navigation and validation — like the native time input, but with full control over the format.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

_Added in 5.22.0._

The Vue Time Input component renders a masked time field. The mask is split into hour, minute, and — depending on the locale — AM/PM sections. Click or focus a section and type, use arrow keys to adjust values, and the caret moves to the next section automatically.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CTimeInput label="Meeting time" locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CTimeInput time="14:30" label="Meeting time" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CTimeInput } from '@coreui/vue-pro'
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <span class="form-label">Meeting time</span>
    <CTimeInput locale="en-US" name="meetingTime" />
    <CFormText>Local time, in your own time zone.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormText } from '@coreui/vue'
import { CTimeInput } from '@coreui/vue-pro'
</script>
```

## Formats

Set an explicit format with the `format` property: `HH`/`H` for the 23-hour cycle, `hh`/`h` for the 12-hour cycle, `mm` for minutes, `ss` for seconds, and `A`/`a` for the day period. Type `a` or `p` in the AM/PM section to switch it, or use the arrow keys.

```html
<template>
  <div class="row">
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CTimeInput format="HH:mm" label="HH:mm" />
    </div>
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CTimeInput format="HH:mm:ss" label="HH:mm:ss" />
    </div>
    <div class="col-lg-4">
      <CTimeInput format="hh:mm A" label="hh:mm A" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CTimeInput } from '@coreui/vue-pro'
</script>
```

## Locale

Without an explicit format, the hour cycle and layout follow the locale set via the `locale` property — `en-US` gets a 12-hour clock with an AM/PM section, `pl-PL` or `de-DE` a 24-hour one.

```html
<template>
  <div class="row">
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CTimeInput label="en-US" locale="en-US" />
    </div>
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CTimeInput label="pl-PL" locale="pl-PL" />
    </div>
    <div class="col-lg-4">
      <CTimeInput label="de-DE" locale="de-DE" />
    </div>
  </div>
</template>

<script setup>
import { CTimeInput } from '@coreui/vue-pro'
</script>
```

## Seconds

Without an explicit format, enable the seconds section with the `seconds` property.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CTimeInput label="Time with seconds" seconds />
    </div>
  </div>
</template>

<script setup>
import { CTimeInput } from '@coreui/vue-pro'
</script>
```

## Min and max times

Constrain the selectable range with `minDate` and `maxDate` — time strings work here too. A completed time outside the range gets the `.is-invalid` class and the component reports `null`, and submits no time, until the value is corrected.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CTimeInput
        time="09:30"
        format="HH:mm"
        label="Business hours (09:00–17:00)"
        max-date="17:00"
        min-date="09:00"
      />
    </div>
  </div>
</template>

<script setup>
import { CTimeInput } from '@coreui/vue-pro'
</script>
```

## Validation

The field takes its validation state [the same way as the date input](../date-input/#validation): a completed time outside `minDate`/`maxDate` makes it invalid whatever else is set, then `validationState`, then a validation that reported the field, and in a form with the `validate` property of `<CForm>` the `:user-invalid` state of its value field, with `validate="valid"` also its `:user-valid` state. A given state is a verdict on the time it was given for: when the user changes the time, or the form is reset, the component emits `update:validationState` with `undefined`, so bind it with `v-model:validation-state`, while a change your code makes through `time` emits nothing. A given `'invalid'` blocks the submit with the text of the linked message, or `Invalid value.` when there is none. The `feedbackValid`/`feedbackInvalid` texts render like for any other form control, and while the field is invalid the error, its own or one you render after the field, describes every section.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <div class="col-sm-6 col-lg-5">
      <CTimeInput
        feedback-invalid="Please provide a meeting time."
        format="HH:mm"
        label="Meeting time (required)"
        name="meeting"
        required
      />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CTimeInput
        v-model:validation-state="roomState"
        feedback="The room is taken at this time."
        format="HH:mm"
        label="Room booking"
        name="room"
        time="12:30"
      />
    </div>
    <div class="col-12">
      <CButton color="primary" type="submit">Submit</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CForm, CTimeInput } from '@coreui/vue-pro'

const roomState = ref('invalid')
</script>
```

## Floating labels

Use the `floatingLabel` property. When the field is empty and not focused, the mask placeholders are hidden so the label can rest inside the field; focusing the field floats the label and reveals the mask.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CTimeInput id="floatingTimeInput" floating-label="Meeting time" format="HH:mm" />
    </div>
  </div>
</template>

<script setup>
import { CTimeInput } from '@coreui/vue-pro'
</script>
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/vue/docs/forms/floating-labels/#always-floating) with the mask showing.

## Sizing

The field renders as a `.form-control`, so the standard sizing works — set the `size` property to `lg` or `sm`.

```html
<template>
  <div class="row">
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CTimeInput format="HH:mm" label="Large" size="lg" />
    </div>
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CTimeInput format="HH:mm" label="Default" />
    </div>
    <div class="col-lg-4">
      <CTimeInput format="HH:mm" label="Small" size="sm" />
    </div>
  </div>
</template>

<script setup>
import { CTimeInput } from '@coreui/vue-pro'
</script>
```

## Disabled and readonly

Set the `disabled` property to disable the field, or `readOnly` to make it focusable but non-editable.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CTimeInput time="14:30" disabled format="HH:mm" label="Disabled" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CTimeInput time="14:30" format="HH:mm" label="Readonly" read-only />
    </div>
  </div>
</template>

<script setup>
import { CTimeInput } from '@coreui/vue-pro'
</script>
```

## Value semantics

The component reports a `Date` object anchored to `1970-01-01` — the same convention as the CoreUI time picker — so only the time part is meaningful. `minDate`/`maxDate` therefore constrain the time of day. A native reset of the form puts back the time the field started with and emits `time-change` when that changes it; a bound field only asks for its first `time` through `update:time` and `time-change`.

## Accessibility

The time input shares the [accessibility model of the date input](../date-input/#accessibility): `role="group"` on the container, named by `label`, a `role="spinbutton"` with full ARIA value attributes per section, a single tab stop with roving focus, and `inputmode` hints for mobile keyboards. Clicking the label that names the field moves focus to the first empty section. The AM/PM section announces its localized name via `aria-valuetext` and can be toggled with the <kbd>A</kbd>/<kbd>P</kbd> letters or arrow keys.

The [keyboard support table](../date-input/#keyboard-support) applies unchanged, including <kbd>Ctrl</kbd> + <kbd>A</kbd> (select all), <kbd>Ctrl</kbd> + <kbd>C</kbd> (copy), and paste.
