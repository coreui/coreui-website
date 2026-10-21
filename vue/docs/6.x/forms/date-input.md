# Vue Date Input Component

> Create Vue date fields with a section-based input mask. Users type the day, month, and year in separate sections with automatic navigation and validation — like the native date input, but with full control over the format.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

_Added in 5.22.0._

The Vue Date Input component renders a masked date field. The mask is split into day, month, and year sections — click or focus a section and type, use arrow keys to adjust values, and the caret moves to the next section automatically.

By default, the section order and separators are derived from the user's locale, so `12/31/2026` in `en-US` becomes `31.12.2026` in `de-DE` without any configuration.

Pass `date` one-way and it seeds the field, which keeps managing itself from there; bind it with `v-model:date` and the field follows your state — a committed change the parent doesn't accept is reverted — while `date-change` alone only reports what the field does. `date` is compared by timestamp, so an inline `new Date(...)` re-created on every render doesn't disturb typing. A native reset of the form asks a bound field for the `date` it started with through `update:date` and `date-change`.

A field holds what its format shows. The time of day of a `date` given to a field without a time is not kept: the first change the user makes reaches `date-change` at midnight, and a format with a time set later shows 00:00. Use `type="datetime"` or a format with a time when the time matters.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateInput label="Delivery date" locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateInput date="2022-08-17" label="Delivery date" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

## Date and time

Set `type="datetime"` and the field carries the time as well. The hour cycle follows the locale, so a 12-hour locale gets an AM/PM section and a 24-hour one does not. Everything else on this page applies unchanged: the same typing, the same arrow keys, the same `date-change`.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateInput label="Appointment" locale="en-US" type="datetime" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateInput date="2026-07-14 14:30" label="Appointment" locale="en-US" type="datetime" />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

Add `seconds` for a seconds section:

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateInput label="Timestamp" seconds type="datetime" />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

`type="time"` keeps only the time sections. That is the field [`<CTimeInput>`](https://coreui.io/vue/docs/forms/time-input/) renders, with `v-model:time` and `@time-change` in place of `v-model:date` and `@date-change`.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateInput label="Opening hour" type="time" />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

A `format` overrides the type, because it names the sections itself. [`<CDateRangeInput>`](https://coreui.io/vue/docs/forms/date-range-input/) takes both props too, so a range with time is the same two props on the range component.

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <span class="form-label">Delivery date</span>
    <CDateInput locale="en-US" name="deliveryDate" />
    <CFormText>We deliver on working days only.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormText } from '@coreui/vue'
import { CDateInput } from '@coreui/vue-pro'
</script>
```

## Formats

Set an explicit format with the `format` property. The parser accepts both dayjs/moment-style tokens (`DD`, `MM`, `YYYY`, `YY`) and date-fns/Unicode-style tokens (`dd`, `MM`, `yyyy`, `yy`), so you can reuse the format strings from the date library you already use. Any other character becomes a literal separator.

```html
<template>
  <div class="row">
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CDateInput format="dd.MM.yyyy" label="dd.MM.yyyy" />
    </div>
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CDateInput format="YYYY-MM-DD" label="YYYY-MM-DD" />
    </div>
    <div class="col-lg-4">
      <CDateInput format="MM/DD/YY" label="MM/DD/YY" />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

Two-digit year sections expand with smart century assignment — values up to 50 years in the future resolve to the current century, older ones to the previous century.

The format doesn't have to include every section — a month-and-year mask works like the native `month` input and reports the first day of the month:

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateInput format="MM.yyyy" label="MM.yyyy" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateInput format="MMMM yyyy" label="MMMM yyyy" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

For picking whole weeks, use the [date picker](../date-picker/) with `selectionType="week"` — a masked week-number field has no native or MUI equivalent and isn't supported.

## Month names

Use the `MMM` or `MMMM` tokens for text month sections with localized short or full month names. Type letters to match a month by prefix — `m` selects <strong>M</strong>arch, continuing with `may` switches to <strong>May</strong> — and the caret moves on as soon as the prefix is unambiguous. Digits and arrow keys keep working too.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateInput format="DD MMMM YYYY" label="DD MMMM YYYY" locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateInput format="MMM D, YYYY" label="MMM D, YYYY" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

Month names default to the grammatical form used inside a full date — e.g. Polish shows the genitive `14 lipca 2026`, not the standalone `lipiec`. To use a different form (or your own localization), pass all twelve names through the `monthNames` property; they are used for display, letter matching, and paste alike.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateInput
        format="DD MMMM YYYY"
        label="Standalone Polish month names"
        locale="pl-PL"
        :month-names="monthNames"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
const monthNames = [
  'styczeń',
  'luty',
  'marzec',
  'kwiecień',
  'maj',
  'czerwiec',
  'lipiec',
  'sierpień',
  'wrzesień',
  'październik',
  'listopad',
  'grudzień',
]
</script>
```

## Locale

Without an explicit format, the mask follows the locale set via the `locale` property.

```html
<template>
  <div class="row">
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CDateInput label="en-US" locale="en-US" />
    </div>
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CDateInput label="pl-PL" locale="pl-PL" year-placeholder="RRRR" />
    </div>
    <div class="col-lg-4">
      <CDateInput label="ja-JP" locale="ja-JP" />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

## Min and max dates

Constrain the selectable range with `minDate` and `maxDate`. A completed date outside the range gets the `.is-invalid` class and the component reports `null` until the value is corrected. A date field compares the limits by the day. A field with a time compares them to the smallest unit it shows, and there a `maxDate` without a time of day covers its whole day.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateInput
        format="dd.MM.yyyy"
        label="Date in July 2026"
        max-date="2026-07-31"
        min-date="2026-07-01"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

## Disabled dates

Beyond a simple range, the `disabledDates` property excludes specific dates — single `Date`s, `[start, end]` ranges, or a matcher function. Unlike in the [date picker](../date-picker/#disabled-dates), there is no calendar to gray out: a completed date that hits a disabled entry gets the `.is-invalid` class and the component reports `null` until the value is corrected.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateInput
        :date="new Date(2026, 6, 10)"
        :disabled-dates="disabledDates"
        format="dd.MM.yyyy"
        label="Delivery date"
        :max-date="new Date(2026, 6, 31)"
        :min-date="new Date(2026, 6, 1)"
      />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateInput
        :disabled-dates="(date) => date.getDay() === 0 || date.getDay() === 6"
        format="dd.MM.yyyy"
        label="Business day"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
const disabledDates = [[new Date(2026, 6, 4), new Date(2026, 6, 7)], new Date(2026, 6, 16)]
</script>
```

## Custom formats

The built-in token parser covers dayjs, moment, date-fns, and luxon format strings for date masks, so you can reuse the format string from the date library you already work with — the library itself isn't required to render or edit the mask. Pair it with `inputDateParse` when you want that library to also parse text pasted into the field, here with `date-fns`:

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateInput
        :date="new Date(2022, 8, 3)"
        format="MMMM DD, YYYY"
        :input-date-parse="(value) => parse(value, 'MMMM dd, yyyy', new Date())"
        label="date-fns format"
        locale="en-US"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
import { parse } from 'date-fns'
</script>
```

## Validation

The field shows its validation state on the element and on its sections, and links the message that follows it, the way [`<CForm>`](../validation/) does for a native field. It keeps its value in a `<textarea>` laid invisibly over the field, which takes part in native constraint validation: a `required` field that is empty, incomplete or holds a rejected date blocks the submit, and the browser, or `<CForm>`, puts focus on its first empty section, the browser with its own message over the field. A field that is not required does not block, and submits no date while it rejects one.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <div class="col-sm-6 col-lg-5">
      <CDateInput
        feedback-invalid="Please provide a delivery date."
        format="dd.MM.yyyy"
        label="Delivery date (required)"
        name="delivery"
        required
      />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateInput
        v-model:validation-state="pickupState"
        date="2026-07-20"
        feedback="We have no pickup slots left on this date."
        format="dd.MM.yyyy"
        label="Pickup date"
        name="pickup"
      />
    </div>
    <div class="col-12">
      <CButton color="primary" type="submit">Submit</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDateInput, CForm } from '@coreui/vue-pro'

const pickupState = ref('invalid')
</script>
```

The state comes from four places, in this order:

- The limits: a completed date outside `minDate`/`maxDate`/`disabledDates` makes the field invalid until it is corrected, whatever else is set, whether the user typed it or the field got it through its value, and again when the limits change. Until then the value field submits no date, also in a read-only field. A date before year 1 counts as before `minDate` even without that prop; when the field loses the focus, its year becomes 1.
- `validationState`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`, for example after a server has checked the date.
- A validation that reports the field invalid: a submit, `checkValidity()` or `reportValidity()`, which `<CForm>` and the [stepper](../stepper/) call as well. From then on the field shows it invalid whenever its date is invalid, until a native reset of the form.
- In a form with the `validate` property of `<CForm>` (the `data-coreui-validate` attribute), the `:user-invalid` and `:user-valid` states of the value field, the same states the stylesheet reads on a native field. A field becomes `.is-valid` only when the form opts into success styling with `validate="valid"`.

A state you give is a verdict on the date it was given for. When the user changes the date, with a typed digit or letter, an arrow, <kbd>Backspace</kbd> or <kbd>Delete</kbd>, a paste or a cut, or the form is reset, the component emits `update:validationState` with `undefined` before `date-change`; bind the state with `v-model:validation-state` to drop it, as the second field above does. A key that leaves the field as it is emits nothing, and neither does a change your code makes through `date`. While the given state is `'invalid'`, the field blocks the submit like any invalid field, with the text of the linked message, or `Invalid value.` when there is none; a custom validity you set on the value field yourself stays as it is, and a disabled or read-only field does not block. An `aria-invalid` you pass is not read as a state. A native form reset returns the field to the date it started with; a `reset` listener that calls `preventDefault()` cancels the whole reset. A field your page controls, with `v-model:date` or the `date-change` event, keeps the value your page gives it.

While the field is invalid, its `feedbackInvalid` text and an `.invalid-feedback` or `.invalid-tooltip` you render after the field yourself describe every section, so a screen reader reads the error with the field. A message rendered later, while the field stays invalid, is picked up when the field next updates, or right after the `error` event when you render it in reply to that event.

To react to validation transitions programmatically, use the `error` event: it receives `'incomplete'`, `'minDate'`, `'maxDate'`, `'disabledDate'`, or `null` when the value is valid or the field is empty.

## Floating labels

Use the `floatingLabel` property. When the field is empty and not focused, the mask placeholders are hidden so the label can rest inside the field; focusing the field floats the label and reveals the mask.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateInput id="floatingDateInput" floating-label="Delivery date" format="dd.MM.yyyy" />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/vue/docs/forms/floating-labels/#always-floating) with the mask showing.

## Sizing

The field renders as a `.form-control`, so the standard sizing works — set the `size` property to `lg` or `sm`.

```html
<template>
  <div class="row">
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CDateInput format="dd.MM.yyyy" label="Large" size="lg" />
    </div>
    <div class="col-lg-4 mb-4 mb-lg-0">
      <CDateInput format="dd.MM.yyyy" label="Default" />
    </div>
    <div class="col-lg-4">
      <CDateInput format="dd.MM.yyyy" label="Small" size="sm" />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

## Disabled and readonly

Set the `disabled` property to disable the field, or `readOnly` to make it focusable but non-editable.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateInput date="2026-07-14" disabled format="dd.MM.yyyy" label="Disabled" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateInput date="2026-07-14" format="dd.MM.yyyy" label="Readonly" read-only />
    </div>
  </div>
</template>

<script setup>
import { CDateInput } from '@coreui/vue-pro'
</script>
```

## Accessibility

The date input implements the [spinbutton pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) per section, mirroring the internal structure of the native date input:

- **Role attributes**: the container has `role="group"`, every section is a `role="spinbutton"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext` (month sections announce the localized month name).
- **Roving tabindex**: the whole field is a single tab stop; arrow keys move between sections.
- **Labels**: `label` and `floatingLabel` name the group through `aria-labelledby`, and an `aria-labelledby` or `aria-label` you pass wins over both; without an `aria-label`, or with an empty one, the group also carries `aria-label="Date input"` (`Date and time input` with `type="datetime"`, `Time input` with `type="time"`), the name it is announced by when nothing else names it. Sections receive `aria-label`s (`Day`, `Month`, `Year`), each replaceable on its own — `ariaDayLabel`, `ariaMonthLabel`, `ariaYearLabel` — for localization.
- **Label click**: clicking the `label`, a `<label>` or `.form-label` an `aria-labelledby` you pass points at, or a `<label for>` pointing at the field's `id` moves focus to the first empty section, as clicking the label of an input focuses it.
- **Validity**: while the field is invalid (a date outside `minDate` / `maxDate` or in `disabledDates`, typed, pasted or given as the value, a date before year 1, `validationState="invalid"`, or a `required` field a validation has reported and that is still empty), every section carries `aria-invalid="true"`; the group, which takes no focus, carries none, and an `aria-invalid` you set on the field is not read. A disabled or read-only field is never reported as missing. With `required`, every section carries `aria-required="true"`.
- **Description**: the field is described by the `aria-describedby` you set, then its `text`, then the feedback that matches its state; that description reaches the first section, and every section while the field is invalid, together with an error message you render after the field, so the error is read wherever the focus sits.
- **Mobile input**: sections use `inputmode="numeric"`, so touch devices show the numeric keyboard.

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>0</kbd>–<kbd>9</kbd> | Type into the focused section; the caret advances when the section is complete |
| <kbd>A</kbd>–<kbd>Z</kbd> | In text month sections, match a month name by prefix; the caret advances when the prefix is unambiguous |
| <kbd>Arrow Up</kbd> / <kbd>Arrow Down</kbd> | Increment / decrement the focused section, wrapping day and month around their bounds; an empty year starts at the current year |
| <kbd>Arrow Right</kbd> / <kbd>Arrow Left</kbd> | Move focus to the next / previous section; in a right-to-left layout the two keys swap |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move focus to the first / last section |
| <kbd>Backspace</kbd> | Clear the focused section; move to the previous section when already empty |
| <kbd>Delete</kbd> | Clear the focused section |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> / <kbd>Cmd</kbd> + <kbd>A</kbd> | Select the whole value; <kbd>Backspace</kbd> then clears all sections, typing restarts from the first section |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Cmd</kbd> + <kbd>C</kbd> | Copy the selection — the whole formatted value after <kbd>Ctrl</kbd> + <kbd>A</kbd> |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd> | Paste a date and fill all sections |

Apart from the shortcuts in the table, a key pressed with <kbd>Alt</kbd>, <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> changes nothing in the field and is not cancelled: arrows, <kbd>Home</kbd> and <kbd>End</kbd> move no focus and change no section, and a digit or letter is not entered. The key stays free for the browser, assistive technology and the picker around the field, where <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> opens the calendar. A character that <kbd>AltGr</kbd> or <kbd>Option</kbd> composes is still entered.
