# Vue Date Picker Component

> The Vue Date Picker Component is an essential tool for any Vue-based application that requires date selection functionality.

## About

This component, provided by CoreUI for Vue.js, offers a user-friendly interface and various customization options to ensure an excellent user experience.

With its responsive design and support for all modern browsers, the Vue Date Picker Component can be easily integrated into any application. The component comes with an array of styling options, including color, size, and shape, that can be easily adjusted to fit the application's design.

The Vue Date Picker Component is also fully customizable, allowing developers to tailor the component to their specific needs. With its set of APIs, developers can control the default value, visibility, and date range of the component.

One of the standout features of the Vue Date Picker Component is its accessibility. CoreUI has ensured that the component is fully compliant with the Web Content Accessibility Guidelines (WCAG), making it accessible to all users. The component supports keyboard navigation and screen readers, ensuring that users with disabilities can also benefit from its functionality.

## Example

Below is an example of a basic Vue DatePicker.

### Days

Basic examples demonstrating how to pick dates using the Vue Date Picker Component.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDatePicker label="Date" locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2022/2/16" label="Date" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

#### With footer

The `footer` slot projects your own content below the calendar. Its slot props carry the picker's context — `setDate`, `today`, `clear`, `reset`, `close`, `isDateSelectable`, `date` and `disabled` — so a projected button acts on the picker and reads its state. That is also how a "Today" button disables itself when today falls outside `minDate`, `maxDate` or `disabledDates`; the example checks when the panel renders and again on click, so a date that crosses a limit while the panel is open is not written.

Any descendant can reach the same context with the `useDatePicker()` composable.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDatePicker locale="en-US">
        <template #footer="{ clear, close, isDateSelectable, today }">
          <CButton
            class="me-auto"
            theme="danger"
            :disabled="!isDateSelectable(new Date())"
            size="sm"
            variant="ghost"
            @click="isDateSelectable(new Date()) && today()"
          >
            Today
          </CButton>
          <CButton theme="primary" size="sm" variant="ghost" @click="clear">Clear</CButton>
          <CButton theme="primary" size="sm" @click="close">OK</CButton>
        </template>
      </CDatePicker>
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2022/2/16" locale="en-US">
        <template #footer="{ close, reset }">
          <CButton class="me-auto" theme="primary" size="sm" variant="ghost" @click="reset">
            Reset
          </CButton>
          <CButton theme="primary" size="sm" @click="close">OK</CButton>
        </template>
      </CDatePicker>
    </div>
  </div>
</template>

<script setup>
import { CButton, CDatePicker } from '@coreui/vue-pro'
</script>
```

### With v-model

The `v-model:date` binding keeps the selected date in sync with your component's state.

```html
<template>
  <div class="row mb-4">
    <div class="col-lg-6">
      <CDatePicker v-model:date="vDate" label="Date" locale="en-US" />
    </div>
  </div>
  <div>{{ vDate && vDate.toLocaleDateString([], options) }}</div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
import { ref } from 'vue'
const vDate = ref(new Date(2022, 2, 1))
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
}
</script>
```

### Weeks

Illustration of week selection using the Vue Date Picker, including week number display.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDatePicker label="Week Picker" locale="en-US" selection-type="week" show-week-number />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker
        date="2025W07"
        label="Week Picker"
        locale="en-US"
        selection-type="week"
        show-week-number
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Months

Selecting whole months with the Vue Date Picker Component.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDatePicker label="Month Picker" locale="en-US" selection-type="month" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2022-08" label="Month Picker" locale="en-US" selection-type="month" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Quarters

Selecting quarters using the Vue Date Picker.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDatePicker label="Quarter Picker" locale="en-US" selection-type="quarter" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2025Q1" label="Quarter Picker" locale="en-US" selection-type="quarter" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Years

Picking years using the Vue Date Picker.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDatePicker label="Year Picker" locale="en-US" selection-type="year" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2022" label="Year Picker" locale="en-US" selection-type="year" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## With time

Set `timepicker` to add the time half. The field switches to a date and time mask, the panel grows a row of time selects under the calendar, and picking a day no longer closes the panel — the two halves own different parts of one value, so the interaction is not over until the user says so. While no time is picked, or the field holds a time a list does not offer, each select stands on a `--` placeholder, so every enabled option, the first allowed one included, sets the time.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDatePicker label="Appointment" locale="en-US" timepicker />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2026/07/14 14:30:00" label="Appointment" locale="en-US" timepicker />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

`minDate` and `maxDate` can carry a time of day. Their day stays selectable in the calendar and the time selects disable the hours, minutes and seconds before `minDate` or after `maxDate` on that day. A time the panel sets beyond a limit, such as the current time when the day of `minDate` is picked, moves to the limit; a typed time beyond it marks the field invalid. Until a date is picked, the time selects work on today moved into the limits. A limit without a time of day covers its whole day.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDatePicker
        label="Appointment"
        locale="en-US"
        :max-date="new Date(2026, 9, 30, 17)"
        :min-date="new Date(2026, 9, 15, 9, 30)"
        timepicker
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

`seconds`, `minutes` and `hours` narrow what the time half offers, and are ignored without `timepicker`. Hours are 0 to 23 in every locale; on a 12-hour clock an hour that only one period allows sets that period.

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

A native reset of the form returns the picker to the date it started with and drops the state a submit set; a picker bound with `v-model:date` asks for the date it started with through `update:date` and `date-change` and shows the date your page gives until the page takes it.

```html
<template>
  <CFormField>
    <span class="form-label">Delivery date</span>
    <CDatePicker locale="en-US" name="deliveryDate" />
    <CFormText>We deliver on working days only.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormText } from '@coreui/vue'
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Cleaner and picker button

The field ends with two buttons: one clears the value, the other opens the calendar. The `cleanerIcon` and `pickerIcon` slots swap their artwork for your own, `:cleaner="false"` leaves the cleaner out, and `:picker-icon="false"` leaves out the button that opens the calendar. Without that button the popup has no pointer opener and nothing reports the expanded state, though the field keeps the keyboard openers listed under [Keyboard support](#keyboard-support).

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDatePicker date="2022/08/17" locale="en-US">
        <template #cleanerIcon>
          <CIcon :icon="cilXCircle" />
        </template>
        <template #pickerIcon>
          <CIcon :icon="cilCalendarCheck" />
        </template>
      </CDatePicker>
    </div>
    <div class="col-lg-5">
      <CDatePicker :cleaner="false" date="2022/08/17" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
import { CIcon } from '@coreui/icons-vue'
import { cilCalendarCheck, cilXCircle } from '@coreui/icons'
</script>
```

## Floating labels

Set `floatingLabel` and the component wraps its input in `.form-floating` and renders the label itself — the text also becomes the field's accessible name. No wrapper markup is needed, and the mask placeholders stay hidden while the label rests inside the field.

```html
<template>
  <CDatePicker floating-label="Delivery date" locale="en-US" />
</template>
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/vue/docs/forms/floating-labels/#always-floating) with the mask showing.

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
<template>
  <div class="row mb-5">
    <div class="col-lg-6">
      <CDatePicker locale="en-US" size="lg" />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker locale="en-US" size="sm" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Disabled

Add the `disabled` boolean attribute on the Vue Date Picker to give it a grayed out appearance and remove pointer events.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker disabled locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Readonly

Add the `readOnly` boolean attribute to prevent modification of the field's value. The calendar still opens, so the value can be read but not typed over.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker read-only locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Disabled dates

CoreUI Vue DatePicker component includes a feature that allows you to disable certain dates, such as weekends or holidays. This can be accomplished by passing an array to `disabledDate` prop to the component, which determines which dates should be disabled based on custom logic.

In week, month, quarter and year selection the calendar and the field judge the whole period: it is refused only when it lies wholly before `minDate` or after `maxDate`, or `disabledDates` covers every day of it that the limits leave. In week selection the limits count as whole weeks, so for a week that is all seven days.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker
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
import { CDatePicker } from '@coreui/vue-pro'
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
      <CDatePicker :disabled-dates="disableWeekends" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
const disableWeekends = (date) => {
  const day = date.getDay()
  return day === 0 || day === 6 // Disable Sundays (0) and Saturdays (6)
}
</script>
```

## Validation

The picker shows its validation state on the frame and on the sections of its field, which the message after the picker describes, the way [`<CForm>`](../validation/) does for a native field. The field keeps its value in a `<textarea>` laid invisibly over it, so a `required` picker that is empty, incomplete or holds a rejected date blocks the submit, as the [date input](../date-input/#validation) does. The picker also sets the state itself: a date the limits reject marks it invalid, for as long as it stands.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <div class="col-lg-5">
      <CDatePicker
        feedback-invalid="Please provide a start date."
        label="Start date (required)"
        locale="en-US"
        name="start"
        required
      />
    </div>
    <div class="col-lg-5">
      <CDatePicker
        v-model:validation-state="deliveryState"
        date="2026-07-14"
        feedback="We have no delivery slots left on this date."
        label="Delivery date"
        locale="en-US"
        name="delivery"
      />
    </div>
    <div class="col-12">
      <CButton color="primary" type="submit">Submit</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDatePicker, CForm } from '@coreui/vue-pro'

const deliveryState = ref('invalid')
</script>
```

`validationState` gives a state: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`, with `invalid` and `valid` as deprecated aliases that ask to be dropped the same way, though only a `validation-state` bound with `v-model:validation-state` is cleared by it. A given state is a verdict on the date it was given for. When the user changes the date, with a day picked in the calendar, a time picked with `timepicker`, the cleaner, a footer button that changes the date through the context, or typing in the field, or the form is reset, the picker emits `update:validationState` with `undefined` before `date-change`; bind the state with `v-model:validation-state` to drop it, as the second picker above does. An action that leaves the date as it is emits nothing, and neither does a change your code makes through `date`. While the given state is `'invalid'`, the picker blocks the submit with the text of the message after it, or `Invalid value.` when there is none.

## Locale

CoreUI Vue Date Picker allows users to display dates and times in a non-English locale. This is useful for applications that have international users or need to support multiple languages.

### Auto

By default, the DatePicker component uses the default browser locale, but it can be easily configured to use a different locale supported by the JavaScript Internationalization API. To set the locale, you can simply pass the desired language code as a prop to the DatePicker component. This feature enables to create more inclusive and accessible applications that cater to a diverse audience.

With server-side rendering, pass `locale` explicitly: by default the server writes the text in its own locale and the browser in the reader's, and Vue reports a hydration mismatch when the two differ.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Chinese

Below is an example of a basic Vue Date Picker with Chinese locales.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker label="入住日期" locale="zh-CN" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Japanese

Below is an example of a basic Vue Date Picker with Japanese locales.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker label="日付を選択" locale="ja" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Korean

Below is an example of a basic Vue Date Picker with Korean locales.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker label="날짜 선택" locale="ko" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-4">
      <CDatePicker label="בחר תאריך" locale="he-IL" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Persian

The date picker is Gregorian: with a locale whose own calendar has different months, like Persian, its calendar shows the Gregorian months in that locale's language and digits, and its field holds Gregorian numbers.

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-4">
      <CDatePicker label="تاریخ شروع" locale="fa-IR" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Custom container

By default the calendar is rendered in `document.body`. Pass an HTML element, or a function that returns one, to the `container` property to render it somewhere else — for example inside a scrollable panel or a modal, so that it scrolls together with the rest of the content.

```html
<template>
  <div ref="container">
    <CDatePicker v-if="container" :container="container" locale="en-US" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CDatePicker } from '@coreui/vue-pro'
const container = ref(null)
</script>
```

To render the calendar in place, right after the input group, set `portal` to `false` instead.

## Custom formats

The `format` property is a mask: it spells out the sections the field renders. Tokens are `dd` for the day, `ww` for the ISO week, `MM` (`MMM`, `MMMM` for names) for the month, `QQQ` for the quarter, `yyyy` for the year, and text in single quotes is a literal, even when it contains token letters — `'Week' ww, yyyy` renders `Week 29, 2026`. Without it the field follows the locale's own date format.

`inputDateParse` still applies to pasted text, turning a custom string into a `Date`.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker
        date="2022/08/17"
        format="MMMM dd, yyyy"
        label="Date picker"
        locale="en-US"
        :input-date-parse="(date) => parse(date, 'MMMM dd, yyyy', new Date())"
      />
    </div>
    <div class="col-lg-4">
      <CDatePicker
        date="2022/08/17"
        format="yyyy MMMM dd"
        label="Selector de fechas"
        locale="es-ES"
        :input-date-parse="(date) => parse(date, 'yyyy MMMM dd', new Date(), { locale: es })"
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
import { parse } from 'date-fns'
import { es } from 'date-fns/locale'
</script>
```

### Weeks

Setting `selectionType` to `'week'` narrows the field to the locale's week presentation — `Week 29, 2026`. Override it with a mask of your own: `yyyy-'W'ww` for the ISO form, or a localized label. The `showWeekNumber` property adds the week numbers to the calendar.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker
        date="2022W10"
        format="yyyy-'W'ww"
        label="Date picker"
        locale="en-US"
        selection-type="week"
        show-week-number
      />
    </div>
    <div class="col-lg-4">
      <CDatePicker
        date="2022W10"
        format="'Semana' ww, yyyy"
        label="Selector de fechas"
        locale="es-ES"
        selection-type="week"
        show-week-number
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Months

Setting `selectionType` to `'month'` narrows the field to `MM/yyyy`. Give `format` a mask of your own — `MMM yyyy` renders the month name instead of its number.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker
        date="2022-08"
        format="MMM yyyy"
        label="Date picker"
        locale="en-US"
        selection-type="month"
      />
    </div>
    <div class="col-lg-4">
      <CDatePicker
        date="2022-08"
        format="MMM yyyy"
        label="Selector de fechas"
        locale="es-ES"
        selection-type="month"
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Years

Setting `selectionType` to `'year'` narrows the field to `yyyy`. A mask of `yy` renders the two-digit form.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker
        date="2022"
        format="yy"
        label="Date picker"
        locale="en-US"
        selection-type="year"
      />
    </div>
    <div class="col-lg-4">
      <CDatePicker
        date="2022"
        format="yy"
        label="Selector de fechas"
        locale="es-ES"
        selection-type="year"
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Open state

_Added in 6.0.0._

Bind `v-model:show` and the calendar renders what you pass — dismiss gestures only emit `update:show`, so the binding feeds the change back. Here a checkbox pins the calendar open, and a dismiss gesture unchecks it.

```html
<template>
  <CFormField class="mb-4">
    <CCheckbox id="datePickerControlledShow" v-model="show" label="Keep the calendar open" />
  </CFormField>
  <div class="row">
    <div class="col-sm-6 col-lg-5">
      <CDatePicker v-model:show="show" label="Date Picker" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CCheckbox, CDatePicker, CFormField } from '@coreui/vue-pro'
const show = ref(false)
</script>
```

Use it when the open state belongs to something else — a route, a tour step, or a control outside the picker like the checkbox above.

### Initial open state

Without a binding the picker manages its own calendar. Pass `show` to seed it open on mount.

```vue
<CDatePicker show />
```

The `update:show` event fires either way whenever the calendar requests an open-state change — a dismiss gesture (Escape, a click outside) or any internal toggle — so you can watch the state without taking it over. The deprecated `visible` prop keeps its old behavior and is ignored when `show` is set.

## Accessibility

The field is a group of spinbutton sections, so its own arrow keys belong to the value and the popup opens on the native control's dropdown keys instead. The field takes its name from an `aria-labelledby` or `aria-label` you pass to the picker, otherwise from `floatingLabel` or, without one, from `label`, and it is described by an `aria-describedby` you pass to the picker, then by `text` and the feedback that matches its state. Clicking the label that names the field moves focus to its first empty section. Focus enters the calendar on the selected date, else on today or on the `minDate` / `maxDate` today falls outside of, also when that date cannot be picked: it is announced as unavailable and the arrows move on from it. In week selection it enters on the row of that week.

The toggle button carries the panel's state — `aria-haspopup="dialog"`, `aria-controls` pointing at the popup while it is open, and `aria-expanded` — so a screen reader announces what the button does and whether the panel is showing. The panel itself is a `dialog` with `aria-modal`, so focus moves into it on open, stays there while it is open, and returns to the element that opened it, the toggle or the field, when it closes.

The toggle's name ends with the date the picker holds, written in full (`Toggle calendar, Friday, August 14, 2026`, with the time after it with `timepicker`), so a screen reader reads the picked date when the popup closes and focus goes back to the toggle. A live message would be lost at that moment, so the calendar does not announce a pick that closes the popup onto that toggle. With `timepicker` the popup stays open, and the calendar announces the pick through `ariaSelectedDateAnnouncement`; it does the same without a toggle (`pickerIcon` set to `false`).

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>Alt</kbd> (<kbd>Option</kbd> on macOS) + <kbd>Arrow Down</kbd> / <kbd>F4</kbd> | Open the popup and move focus into it |
| <kbd>Escape</kbd> | Close the popup and return focus to the field or the toggle that opened it |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move within the open panel; the field is outside the dialog and stays out of the cycle |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Select the focused value |

Inside the grid, navigation follows the calendar keyboard model: arrows move by day and week, <kbd>Home</kbd> / <kbd>End</kbd> move to the first and last day of the week inside `minDate` / `maxDate` (the first and last week of the month with `selectionType="week"`), and <kbd>Page Down</kbd> / <kbd>Page Up</kbd> (with <kbd>Shift</kbd> for years) move between months and years. A date that cannot be picked takes the focus like any other, and <kbd>Enter</kbd> and <kbd>Space</kbd> do nothing there. A key pressed there with <kbd>Alt</kbd>, <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> is neither handled nor cancelled, so it stays free for the browser and assistive technology.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDatePicker /&gt;](./api/#cdatepicker)
