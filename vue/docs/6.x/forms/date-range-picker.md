# Vue Date Range Picker Component

> The Vue Date Range Picker Component is an essential tool for any Vue-based application that requires date range selection functionality.

## Example

Explore basic usage of the Date Range Picker through sample code snippets that demonstrate its core functionality.

### Days

Select date ranges by day, from a basic picker to one with projected footer actions.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-4 mb-sm-0">
      <CDateRangePicker label="Date range" locale="en-US" />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker
        start-date="2022/08/03"
        end-date="2022/08/17"
        label="Date range"
        locale="en-US"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

#### With footer

The `footer` slot projects your own content below the calendars. Its slot props carry the picker's context — `setRange`, `clear`, `reset`, `close`, `isDateSelectable`, `startDate`, `endDate` and `disabled` — so a projected button acts on the picker and reads its state. While a footer is present the panel stays open after the second date, because the footer's actions are what closes it.

Any descendant can reach the same context with the `useDateRangePicker()` composable.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-4 mb-sm-0">
      <CDateRangePicker locale="en-US">
        <template #footer="{ clear, close }">
          <CButton class="me-auto" theme="primary" size="sm" variant="ghost" @click="clear">
            Clear
          </CButton>
          <CButton theme="primary" size="sm" @click="close">OK</CButton>
        </template>
      </CDateRangePicker>
    </div>
    <div class="col-sm-6">
      <CDateRangePicker end-date="2022/08/17" locale="en-US" start-date="2022/08/03">
        <template #footer="{ close, reset }">
          <CButton class="me-auto" theme="primary" size="sm" variant="ghost" @click="reset">
            Reset
          </CButton>
          <CButton theme="primary" size="sm" @click="close">OK</CButton>
        </template>
      </CDateRangePicker>
    </div>
  </div>
</template>

<script setup>
import { CButton, CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### With v-model

The `v-model:start-date` and `v-model:end-date` bindings keep the selected range in sync with your component's state.

```html
<template>
  <div class="row mb-4">
    <div class="col-lg-6">
      <CDateRangePicker
        v-model:start-date="vStartDate"
        v-model:end-date="vEndDate"
        label="Date range"
        locale="en-US"
      />
    </div>
  </div>
  <div>
    {{ vStartDate && vStartDate.toLocaleDateString([], options) }} -
    {{ vEndDate && vEndDate.toLocaleDateString([], options) }}
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
import { ref } from 'vue'
const vStartDate = ref(new Date(2022, 2, 1))
const vEndDate = ref(new Date(2022, 2, 7))
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
}
</script>
```

### Weeks

Illustration of week range selection using the Vue Date Range Picker, including week number display.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-4 mb-sm-0">
      <CDateRangePicker label="Date range" locale="en-US" selection-type="week" show-week-number />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker
        start-date="2025W07"
        end-date="2025W12"
        label="Date range"
        locale="en-US"
        selection-type="week"
        show-week-number
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Months

Selecting whole months with the Vue Date Range Picker Component.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-4 mb-sm-0">
      <CDateRangePicker label="Date range" locale="en-US" selection-type="month" />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker
        label="Date range"
        locale="en-US"
        selection-type="month"
        start-date="2022-08"
        end-date="2023-05"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Quarters

Selecting quarters using the Vue Date Range Picker.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-4 mb-sm-0">
      <CDateRangePicker label="Date range" locale="en-US" selection-type="quarter" />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker
        label="Date range"
        locale="en-US"
        selection-type="quarter"
        start-date="2025Q3"
        end-date="2026Q2"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Years

Picking years using the Vue Date Range Picker.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-4 mb-sm-0">
      <CDateRangePicker label="Date range" locale="en-US" selection-type="year" />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker
        label="Date range"
        locale="en-US"
        selection-type="year"
        start-date="2022"
        end-date="2028"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

A native reset of the form returns the picker to the range it started with and drops the state a submit set; an end bound with `v-model:start-date`/`v-model:end-date` asks for the date it started with through its update and change events and shows the date your page gives until the page takes it.

```html
<template>
  <CFormField>
    <span class="form-label">Reporting period</span>
    <CDateRangePicker end-name="periodEnd" locale="en-US" start-name="periodStart" />
    <CFormText>Both dates are included in the report.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormText } from '@coreui/vue'
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Cleaner and picker button

The field ends with two buttons: one clears the range, the other opens the calendar. The `cleanerIcon` and `pickerIcon` slots swap their artwork for your own, `:cleaner="false"` leaves the cleaner out, and `:picker-icon="false"` leaves out the button that opens the calendar.

## Floating labels

Set `floatingLabels` and each field carries its own floating label, floating independently — the label text also becomes that field's accessible name. No wrapper markup is needed, and the mask placeholders stay hidden while the label rests inside the field.

```html
<template>
  <CDateRangePicker :floating-labels="['Check-in', 'Check-out']" locale="en-US" />
</template>
```

Set `floatingLabelAlways` to keep both labels [always floating](https://coreui.io/vue/docs/forms/floating-labels/#always-floating) with the masks showing.

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
<template>
  <div class="row mb-5">
    <div class="col-lg-6">
      <CDateRangePicker locale="en-US" size="lg" />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker locale="en-US" size="sm" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Disabled

Add the `disabled` boolean attribute on the Vue Date Range Picker to give it a grayed out appearance and remove pointer events.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker disabled locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Readonly

Add the `readOnly` boolean attribute to prevent modification of the fields' values. The calendar still opens, so the range can be read but not typed over.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker read-only locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Disabled dates

CoreUI Vue Date Range Picker component includes a feature that allows you to disable certain dates, such as weekends or holidays. This can be accomplished by passing an array to the `disabledDates` prop to the component, which determines which dates should be disabled based on custom logic.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker
        :calendar-date="calendarDate"
        :disabled-dates="disabledDates"
        locale="en-US"
        :max-date="maxDate"
        :min-date="minDate"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
const calendarDate = new Date(2022, 2, 1)
const disabledDates = [
  [new Date(2022, 2, 4), new Date(2022, 2, 7)],
  new Date(2022, 2, 16),
  new Date(2022, 3, 16),
  [new Date(2022, 4, 2), new Date(2022, 4, 8)],
]
const maxDate = new Date(2022, 5, 0)
const minDate = new Date(2022, 1, 1)
</script>
```

### Disabling weekends

You can disable weekends by passing a function to the `disabledDates` prop. Here's how to do it:

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker :disabled-dates="disableWeekends" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
const disableWeekends = (date) => {
  const day = date.getDay()
  return day === 0 || day === 6 // Disable Sundays (0) and Saturdays (6)
}
</script>
```

## Validation

The picker shows its validation state on the frame and on the sections of both fields, which the message after the picker describes, the way [`<CForm>`](../validation/) does for a native field. Each field keeps its value in a `<textarea>` laid invisibly over it, so a `required` end that is empty, incomplete or holds a rejected date blocks the submit, as in the [date range input](../date-range-input/#validation). The picker also sets the state itself: a date the limits reject marks the range invalid, and so does an end before the start, for as long as it stands.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <div class="col-lg-7">
      <CDateRangePicker
        v-model:validation-state="stayState"
        end-date="2026-08-17"
        end-name="to"
        feedback="Those dates are already booked."
        locale="en-US"
        start-date="2026-08-10"
        start-name="from"
      />
    </div>
    <div class="col-12">
      <CButton color="primary" type="submit">Submit</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDateRangePicker, CForm } from '@coreui/vue-pro'

const stayState = ref('invalid')
</script>
```

`validation-state` gives a state of the range: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`, with `invalid` and `valid` as deprecated aliases that ask to be dropped the same way, though only a `validation-state` bound with `v-model:validation-state` is cleared by it. `feedback-invalid` or `feedback-valid` is the message shown while that state holds, describing both fields, and `tooltip-feedback` shows it as a tooltip instead. A given state is a verdict on the range it was given for. When the user changes the range, with a day picked in the calendar, the cleaner, a preset or a footer button that changes it through the context, or typing in a field, or the form is reset, the picker emits `update:validationState` with `undefined` before it reports the change; bind the state with `v-model:validation-state` to drop it, as the example does. An action that leaves the range as it is emits nothing, and neither does a change your code makes through `start-date` and `end-date`. While the given state is `'invalid'`, both ends block the submit with the text of the message after the picker, or `Invalid value.` when there is none.

### Blocking the submit

A `required` end that is empty, incomplete or rejected by the limits blocks the submit by itself. An end before the start does not, since both ends hold dates the browser accepts, and neither does an optional end that is empty, incomplete or rejected, which submits no date. Check the dates before you send them; the `start-date-change` and `end-date-change` events report `null` for an end that is empty, incomplete or rejected, so one condition covers both:

```vue
<script setup lang="ts">
import { ref } from 'vue'

const start = ref<Date | null>(null)
const end = ref<Date | null>(null)

const onSubmit = (event: Event) => {
  if (!start.value || !end.value || end.value < start.value) {
    event.preventDefault()
  }
}
</script>

<template>
  <CForm @submit="onSubmit">
    <CDateRangePicker @end-date-change="end = $event" @start-date-change="start = $event" />
    <CButton type="submit">Book</CButton>
  </CForm>
</template>
```

## Custom ranges

The `ranges` slot projects content beside the calendars — that is where range presets live. Its slot props carry the picker's context; a preset button calls `setRange` with its own two dates.

```html
<template>
  <div class="row">
    <div class="col-sm-5">
      <CDateRangePicker locale="en-US">
        <template #ranges="{ setRange }">
          <CButton
            v-for="[label, [start, end]] in presets"
            :key="label"
            theme="primary"
            size="sm"
            variant="ghost"
            @click="setRange(start, end)"
          >
            {{ label }}
          </CButton>
        </template>
      </CDateRangePicker>
    </div>
  </div>
</template>

<script setup>
import { CButton, CDateRangePicker } from '@coreui/vue-pro'

const today = new Date()
const daysAgo = (days) => new Date(new Date().setDate(today.getDate() - days))

const presets = [
  ['Today', [today, today]],
  ['Yesterday', [daysAgo(1), daysAgo(1)]],
  ['Last 7 days', [daysAgo(6), today]],
  ['Last 30 days', [daysAgo(29), today]],
  ['This month', [new Date(today.getFullYear(), today.getMonth(), 1), today]],
  [
    'Last month',
    [
      new Date(today.getFullYear(), today.getMonth() - 1, 1),
      new Date(today.getFullYear(), today.getMonth(), 0),
    ],
  ],
]
</script>
```

## Locale

CoreUI Vue Date Range Picker allows users to display dates and times in a non-English locale. This is useful for applications that have international users or need to support multiple languages.

### Auto

By default, the DateRangePicker component uses the default browser locale, but it can be easily configured to use a different locale supported by the JavaScript Internationalization API. To set the locale, you can simply pass the desired language code as a prop to the DateRangePicker component. This feature enables to create more inclusive and accessible applications that cater to a diverse audience.

With server-side rendering, pass `locale` explicitly: by default the server writes the text in its own locale and the browser in the reader's, and Vue reports a hydration mismatch when the two differ.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Chinese

Below is an example of a basic Vue Date Range Picker with Chinese locales.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker locale="zh-CN" :label="['入住日期', '退房日期']" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Japanese

Below is an example of a basic Vue Date Range Picker with Japanese locales.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker locale="ja" :label="['日付を選択', '終了日']" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Korean

Below is an example of a basic Vue Date Range Picker with Korean locales.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker locale="ko" :label="['날짜 선택', '종료일']" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-5">
      <CDateRangePicker :label="['בחר תאריך', 'תאריך סיום']" locale="he-IL" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Persian

The date range picker is Gregorian: with a locale whose own calendar has different months, like Persian, its calendar shows the Gregorian months in that locale's language and digits, and its fields hold Gregorian numbers.

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-5">
      <CDateRangePicker locale="fa-IR" :label="['تاریخ شروع', 'تاریخ پایان']" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Custom formats

The `format` property is a mask: it spells out the sections both fields render. Tokens are `dd` for the day, `ww` for the ISO week, `MM` (`MMM`, `MMMM` for names) for the month, `QQQ` for the quarter, `yyyy` for the year, and text in single quotes is a literal, even when it contains token letters. Without it the fields follow the locale's own date format.

`inputDateParse` still applies to pasted text, turning a custom string into a `Date`.

```html
<template>
  <div class="row">
    <div class="col-lg-6">
      <CDateRangePicker
        end-date="2022/08/17"
        format="MMMM dd, yyyy"
        locale="en-US"
        start-date="2022/08/03"
        :input-date-parse="(date) => parse(date, 'MMMM dd, yyyy', new Date())"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
import { parse } from 'date-fns'
</script>
```

### Weeks

Setting `selectionType` to `'week'` narrows both fields to the locale's week presentation. Override it with a mask of your own: `yyyy-'W'ww` for the ISO form, or a localized label. The `showWeekNumber` property adds the week numbers to the calendars.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker
        end-date="2022W12"
        format="yyyy-'W'ww"
        label="Date range"
        locale="en-US"
        selection-type="week"
        show-week-number
        start-date="2022W10"
      />
    </div>
    <div class="col-lg-5">
      <CDateRangePicker
        end-date="2022W12"
        format="'Semana' ww, yyyy"
        label="Selector de rango de fechas"
        locale="es-ES"
        selection-type="week"
        show-week-number
        start-date="2022W10"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Months

Setting `selectionType` to `'month'` narrows both fields to `MM/yyyy`. Give `format` a mask of your own — `MMM yyyy` renders the month name instead of its number.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker
        end-date="2022-11"
        format="MMM yyyy"
        label="Date range"
        locale="en-US"
        selection-type="month"
        start-date="2022-08"
      />
    </div>
    <div class="col-lg-5">
      <CDateRangePicker
        end-date="2022-11"
        format="MMM yyyy"
        label="Selector de rango de fechas"
        locale="es-ES"
        selection-type="month"
        start-date="2022-08"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Years

Setting `selectionType` to `'year'` narrows both fields to `yyyy`. A mask of `yy` renders the two-digit form.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker
        end-date="2024"
        format="yy"
        label="Date range"
        locale="en-US"
        selection-type="year"
        start-date="2022"
      />
    </div>
    <div class="col-lg-5">
      <CDateRangePicker
        end-date="2024"
        format="yy"
        label="Selector de rango de fechas"
        locale="es-ES"
        selection-type="year"
        start-date="2022"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Open state

_Added in 6.0.0._

Bind `v-model:show` and the calendar renders what you pass — dismiss gestures only emit `update:show`, so the binding feeds the change back. Here a checkbox pins the calendar open, and a dismiss gesture unchecks it.

```html
<template>
  <CFormField class="mb-4">
    <CCheckbox id="dateRangePickerControlledShow" v-model="show" label="Keep the calendar open" />
  </CFormField>
  <div class="row">
    <div class="col-sm-7">
      <CDateRangePicker v-model:show="show" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CCheckbox, CDateRangePicker, CFormField } from '@coreui/vue-pro'
const show = ref(false)
</script>
```

Use it when the open state belongs to something else — a route, a tour step, or a control outside the picker like the checkbox above.

### Initial open state

Without a binding the picker manages its own calendar. Pass `show` to seed it open on mount.

```vue
<CDateRangePicker show />
```

The `update:show` event fires either way whenever the calendar requests an open-state change — a dismiss gesture (Escape, a click outside) or any internal toggle — so you can watch the state without taking it over. The deprecated `visible` prop keeps its old behavior and is ignored when `show` is set.

## Accessibility

Both fields are groups of spinbutton sections, so their own arrow keys belong to the value and the popup opens on the native control's dropdown keys instead. Each field is named by its floating label, or by `aria-start-label` and `aria-end-label` ("Start date" and "End date" by default), so a screen reader tells the two apart. They sit inside one `role="group"` named by `label`, and clicking that label moves focus to the first empty section of the start date. Each is described by an `aria-describedby` you pass to the picker, then by `text` and the feedback that matches its state.

The toggle button carries the panel's state — `aria-haspopup="dialog"`, `aria-controls` pointing at the popup while it is open, and `aria-expanded` — so a screen reader announces what the button does and whether the panel is showing. The panel itself is a `dialog` with `aria-modal`, so focus moves into it on open, stays there while it is open, and returns to the element that opened it, the toggle or the field, when it closes.

The toggle's name ends with the range the picker holds, written by the locale (`Toggle calendar, Thursday, August 20 – Sunday, August 23, 2026`), so a screen reader reads the picked range when the popup closes and focus goes back to the toggle. A live message would be lost at that moment, so the calendar does not announce the pick of the end that closes the popup. A pick that leaves the popup open, such as a new start that keeps the end or any pick with a `footer` slot, is announced through `ariaSelectedRangeAnnouncement`, and so is every pick without a toggle (`pickerIcon` set to `false`).

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>Alt</kbd> (<kbd>Option</kbd> on macOS) + <kbd>Arrow Down</kbd> / <kbd>F4</kbd> | Open the popup and move focus into it |
| <kbd>Escape</kbd> | Close the popup and return focus to the field or the toggle that opened it |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move within the open panel; the field is outside the dialog and stays out of the cycle |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Select the focused value |

Inside the grid, navigation follows the calendar keyboard model: arrows move by day and week, <kbd>Home</kbd> / <kbd>End</kbd> move to the first and last day of the week inside `minDate` / `maxDate` (the first and last week of the month with `selectionType="week"`), and <kbd>Page Down</kbd> / <kbd>Page Up</kbd> (with <kbd>Shift</kbd> for years) move between months and years. A date that cannot be picked takes the focus like any other, and <kbd>Enter</kbd> and <kbd>Space</kbd> do nothing there.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDateRangePicker /&gt;](./api/#cdaterangepicker)
