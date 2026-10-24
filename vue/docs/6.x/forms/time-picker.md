# Vue Time Picker Component

> The Vue Time Picker Component offers a seamless way for users to select time values in any Vue-based application.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

To create a basic Vue Time Picker, use:

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CTimePicker label="Time" locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CTimePicker label="Time" locale="en-US" time="02:17:35 PM" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### With v-model

The `v-model:time` binding keeps the selected time in sync with your component's state.

```html
<template>
  <div class="row mb-4">
    <div class="col-lg-6">
      <CTimePicker v-model:time="vTime" label="Time" locale="en-US" />
    </div>
  </div>
  <div>{{ vTime }}</div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
import { ref } from 'vue'
const vTime = ref('02:17:35 PM')
</script>
```

### With footer

The `footer` slot projects your own content below the time selection. Its slot props carry the picker's context — `setTime`, `now`, `clear`, `reset`, `close`, `isTimeSelectable`, `time` and `disabled` — so a projected button acts on the picker and reads its state. That is also how a "Now" button disables itself when the current time falls outside `minDate` or `maxDate`; the example checks when the panel renders and again on click, so a time that crosses a limit while the panel is open is not written.

Any descendant can reach the same context with the `useTimePicker()` composable.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker locale="en-US" max-date="17:00" min-date="09:00">
        <template #footer="{ clear, close, isTimeSelectable, now }">
          <CButton
            class="me-auto"
            theme="danger"
            :disabled="!isTimeSelectable(new Date())"
            size="sm"
            variant="ghost"
            @click="isTimeSelectable(new Date()) && now()"
          >
            Now
          </CButton>
          <CButton theme="primary" size="sm" variant="ghost" @click="clear">Clear</CButton>
          <CButton theme="primary" size="sm" @click="close">OK</CButton>
        </template>
      </CTimePicker>
    </div>
  </div>
</template>

<script setup>
import { CButton, CTimePicker } from '@coreui/vue-pro'
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

A native reset of the form returns the picker to the time it started with and drops the state a submit set; a picker bound with `v-model:time` asks for the time it started with through `update:time` and `time-change` and shows the time your page gives until the page takes it.

```html
<template>
  <CFormField>
    <span class="form-label">Meeting time</span>
    <CTimePicker locale="en-US" name="meetingTime" />
    <CFormText>Local time, in your own time zone.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormText } from '@coreui/vue'
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Floating labels

Set `floatingLabel` and the component wraps its input in `.form-floating` and renders the label itself — the text also becomes the field's accessible name. No wrapper markup is needed, and the mask placeholders stay hidden while the label rests inside the field.

```html
<template>
  <CTimePicker floating-label="Meeting time" locale="en-US" />
</template>
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/vue/docs/forms/floating-labels/#always-floating) with the mask showing.

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
<template>
  <div class="row">
    <div class="col-lg-4 mb-4">
      <CTimePicker locale="en-US" size="lg" />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-3">
      <CTimePicker locale="en-US" size="sm" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Theme variants

A [`.theme-*` class](https://coreui.io/vue/docs/customize/components/#theme-variants) on the picker colors the selected cell of every roll.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CTimePicker class="theme-success" label="Time" locale="en-US" time="02:30:00 PM" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker disabled locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Readonly

Add the `readOnly` boolean attribute to prevent modification of the field's value. The time selection still opens, so the value can be read but not typed over.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker read-only locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Min and max times

Constrain the times the user can pick with `min-date` and `max-date`, given as time strings like `'09:30'` or as dates, of which only the time of day counts. The panel disables the hours that hold no allowed time and, once an hour is chosen, the minutes and seconds outside the range, and a time picked in the panel that crosses a limit moves to it. A time typed in the field outside the range gets the `.is-invalid` class, the picker emits `update:time` with `null` and submits no time until the value is corrected. A `maxDate` at midnight covers the whole day; any other `maxDate` before the `minDate` leaves no time to pick.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker
        label="Opening hours (09:30–17:00)"
        locale="en-GB"
        max-date="17:00"
        min-date="09:30"
        :seconds="false"
      />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Validation

The picker takes its validation state [the way the date picker does](../date-picker/#validation): `validationState` gives `'valid'`, `'invalid'` or a state you added to `$form-validation-states`, with `invalid` and `valid` as deprecated aliases that ask to be dropped the same way, though only a `validation-state` bound with `v-model:validation-state` is cleared by it. When the user changes the time, with a time picked in the panel, the cleaner, a footer button that changes the time through the context, or typing in the field, or the form is reset, the picker emits `update:validationState` with `undefined` before `time-change`, so bind it with `v-model:validation-state`, while a change your code makes through `time` emits nothing. While the given state is `'invalid'`, the sections of the field carry `aria-invalid="true"`, are described by the message after the picker, and the picker blocks the submit with its text, or `Invalid value.` when there is none.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <div class="col-lg-4">
      <CTimePicker
        feedback-invalid="Please provide a meeting time."
        label="Meeting time (required)"
        locale="en-US"
        name="meeting"
        required
      />
    </div>
    <div class="col-lg-4">
      <CTimePicker
        v-model:validation-state="roomState"
        feedback="The room is taken at this time."
        label="Room booking"
        locale="en-US"
        name="room"
        time="12:30:00"
      />
    </div>
    <div class="col-12">
      <CButton color="primary" type="submit">Submit</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CForm, CTimePicker } from '@coreui/vue-pro'

const roomState = ref('invalid')
</script>
```

## Custom formats

### Disable minutes and seconds

Customize Vue Time Picker to display only hours, or hours and minutes by disabling minutes/seconds.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CTimePicker label="Only hours and minutes" locale="en-US" :seconds="false" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CTimePicker label="Only hours" locale="en-US" :minutes="false" :seconds="false" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### Custom hours, minutes and seconds

Tailor the Vue Time Picker to your needs by specifying custom values for hours, minutes, and seconds. Use arrays to define selectable options or functions for dynamic filtering. Hours are 0 to 23 in every locale. On a 12-hour clock the column still lists 1 to 12 next to AM/PM: picking an hour that only one period allows sets that period, and the period the picked hour does not allow is disabled, so the example below offers 8 AM to 4 PM, minutes in quarters and seconds under 20.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5">
      <CTimePicker
        locale="en-US"
        :hours="[8, 9, 10, 11, 12, 13, 14, 15, 16]"
        :minutes="[0, 15, 30, 45]"
        :seconds="(s) => s < 20"
      />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Locale

Tailor the Vue Time Picker to match different locales, offering an inclusive user experience across diverse languages. Automatically adapt or set specific locales to meet your application's needs.

The locale decides whether the field and the time columns use a 12-hour or a 24-hour clock, and names the day periods in its own words, 오전 and 오후 in Korean. A `format` pins the clock in every locale, `'HH:mm'` for 24 hours and `'hh:mm a'` for 12.

### Auto

Our Time Picker component automatically detects and adapts to the user's locale, ensuring a localized experience without explicit configuration.

With server-side rendering, pass `locale` explicitly: by default the server writes the text in its own locale and the browser in the reader's, and Vue reports a hydration mismatch when the two differ.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### Chinese

Specify the locale to Chinese (`zh-CN`) for users in China, enhancing usability with a familiar format and language.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker label="入住日期" locale="zh-CN" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### Japanese

Set the Time Picker's locale to Japanese (`ja`) to cater to Japanese users, presenting date and time in a localized format.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker label="日付を選択" locale="ja" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### Korean

Configure the locale to Korean (`ko`) for a tailored experience in Korea, offering date and time selection in the local language.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker label="날짜 선택" locale="ko" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

This approach ensures that our Vue TimePicker component is versatile and adaptable, providing a seamless and intuitive interface for users worldwide.

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-4">
      <CTimePicker label="בחר תאריך" locale="he-IL" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### Persian

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-4">
      <CTimePicker label="تاریخ شروع" locale="fa-IR" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Open state

_Added in 6.0.0._

Bind `v-model:show` and the panel renders what you pass — dismiss gestures only emit `update:show`, so the binding feeds the change back. Here a checkbox pins the panel open, and a dismiss gesture unchecks it.

```html
<template>
  <CFormField class="mb-4">
    <CCheckbox id="timePickerControlledShow" v-model="show" label="Keep the time selection open" />
  </CFormField>
  <div class="row">
    <div class="col-sm-6 col-lg-4">
      <CTimePicker v-model:show="show" label="Time" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CCheckbox, CFormField, CTimePicker } from '@coreui/vue-pro'
const show = ref(false)
</script>
```

### Initial open state

Without a binding the picker manages its own panel. Pass `show` to seed it open on mount.

```vue
<CTimePicker show />
```

The `update:show` event fires either way whenever the panel requests an open-state change — a dismiss gesture (Escape, a click outside) or any internal toggle — so you can watch the state without taking it over. The deprecated `visible` prop keeps its old behavior and is ignored when `show` is set.

## Accessibility

The field is a group of spinbutton sections, so its own arrow keys belong to the value and the panel opens on the native control's dropdown keys instead. The field takes its name from an `aria-labelledby` or `aria-label` you pass to the picker, otherwise from `floatingLabel` or, without one, from `label`, and it is described by an `aria-describedby` you pass to the picker, then by `text` and the feedback that matches its state. Clicking the label that names the field moves focus to its first empty section. Each column of the roll is an ARIA listbox, and a roving tabindex keeps the whole body to a single tab stop, with the arrows moving between the columns. While the field is empty no option is selected, and the tab stop and each column start on their first option the limits allow.

The toggle button carries the panel's state — `aria-haspopup="dialog"`, `aria-controls` pointing at the popup while it is open, and `aria-expanded` — so a screen reader announces what the button does and whether the panel is showing. The panel itself is a `dialog` with `aria-modal`, so focus moves into it on open, stays there while it is open, and returns to the field when it closes.

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>Alt</kbd> (<kbd>Option</kbd> on macOS) + <kbd>Arrow Down</kbd> / <kbd>F4</kbd> | Open the panel and move focus into it |
| <kbd>Escape</kbd> | Close the panel and return focus to the field |
| <kbd>Arrow Up</kbd> / <kbd>Arrow Down</kbd> | Move between the cells of a column |
| <kbd>Arrow Left</kbd> / <kbd>Arrow Right</kbd> | Move between the columns |
| <kbd>Home</kbd> / <kbd>End</kbd> | Jump to the ends of a column |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Select the focused value and move to the next column |

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTimePicker /&gt;](./api/#ctimepicker)
