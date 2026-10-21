# Vue Time Input Component API

> Explore the API reference for the Vue Time Input component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CTimeInput

```jsx
import { CTimeInput } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaDayLabel` | `string` | `'Day'` | The `aria-label` of the day section. |
| `ariaHourLabel` | `string` | `'Hour'` | The `aria-label` of the hour section. |
| `ariaMeridiemLabel` | `string` | `'AM/PM'` | The `aria-label` of the meridiem section. |
| `ariaMinuteLabel` | `string` | `'Minute'` | The `aria-label` of the minute section. |
| `ariaMonthLabel` | `string` | `'Month'` | The `aria-label` of the month section. |
| `ariaQuarterLabel` | `string` | `'Quarter'` | The `aria-label` of the quarter section. |
| `ariaSecondLabel` | `string` | `'Second'` | The `aria-label` of the second section. |
| `ariaWeekLabel` | `string` | `'Week'` | The `aria-label` of the week section. |
| `ariaYearLabel` | `string` | `'Year'` | The `aria-label` of the year section. |
| `autoFocus` | `boolean` | - | Focus the first section right after mounting, like the native `autofocus` attribute. |
| `dayPlaceholder` | `string` | - | Replaces the `DD` the day section shows while it is empty. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `disabledDates` | `DisabledDate \| DisabledDate[]` | `undefined` | Specify the list of dates that cannot be selected. It can be a single `Date`, an `[start, end]` range, a matcher function, or an array of these. |
| `feedback` | `string` | - | Provide valuable, actionable feedback to your users with HTML5 form validation feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied `validationState="invalid"`. |
| `feedbackValid` | `string` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied `validationState="valid"`. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `string` | - | Wrap the field in a floating label. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `format` | `string \| ((locale: string) => DateSection[])` | `undefined` | The mask layout. A string is parsed as dayjs/moment or date-fns/luxon format tokens, a function receives the locale and returns the section layout, and `undefined` derives the layout from the locale. |
| `hourPlaceholder` | `string` | - | Replaces the `HH` (`hh` on a 12-hour clock) the hour section shows while it is empty. |
| `id` | `string` | - | The id attribute of the field. |
| `inputDateParse` | `(value: string) => Date \| null` | `undefined` | Custom function to parse text pasted into the field into a `Date` object, e.g. with an external date library. |
| `label` | `string` | - | Add a caption for a component. |
| `locale` | `string` | `'default'` | Sets the default locale for the component. If not set, it is inherited from the browser. |
| `maxDate` | `Date \| string \| null` | `undefined` | Max selectable date. |
| `meridiemPlaceholder` | `string` | - | Replaces the `AM` the meridiem section shows while it is empty. |
| `minDate` | `Date \| string \| null` | `undefined` | Min selectable date. |
| `minutePlaceholder` | `string` | - | Replaces the `mm` the minute section shows while it is empty. |
| `monthNames` | `string[]` | `undefined` | Twelve custom month names for text month sections (`MMM`/`MMMM`), overriding the locale-derived, date-context grammatical form. |
| `monthPlaceholder` | `string` | - | Replaces the `MM` the month section shows while it is empty. |
| `name` | `string` | - | Name of the value input the value is submitted under. Without it the field is not submitted with the form. |
| `quarterPlaceholder` | `string` | - | Replaces the `Q` the quarter section shows while it is empty. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `required` | `boolean` | - | When present, it specifies that the field must be filled out before submitting the form. |
| `secondPlaceholder` | `string` | - | Replaces the `ss` the second section shows while it is empty. |
| `seconds` | `boolean` | - | Include a seconds section in the locale-derived layout. |
| `size` | `string` | `undefined` | Size the component small or large. |
| `text` | `string` | - | Add helper text to the component. |
| `time` | `Date \| string \| null` | `undefined` | The time — a `Date` or a time string like `'14:30'` or `'2:30 PM'`. Passed one-way it seeds the field, which keeps managing itself; bound with `v-model:time` it follows your state. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` on every section and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. A field of a date range whose end is before its start draws no other state. The user's next change of the value emits `update:validationState` with `undefined`. |
| `weekPlaceholder` | `string` | - | Replaces the `WW` the week section shows while it is empty. |
| `yearPlaceholder` | `string` | - | Replaces the `YYYY` the year section shows while it is empty. |

### Events

| Name | Description |
| --- | --- |
| `error` | Callback fired when the validation state changes; receives `'incomplete'`, `'minDate'`, `'maxDate'`, `'disabledDate'`, or `null` when the value is valid or the field is empty. When one change moves both the value and the validation state, it fires after `time-change`, so a value set from it replaces the one just reported. |
| `time-change` | Callback fired when the time changes; receives a `Date` anchored to 1970-01-01 (or `null` while incomplete or invalid) and the formatted value. |
| `update:time` | Emit the new time to support the `v-model:time` binding. |
| `update:validationState` | Event occurs with `undefined` when the user changes the time, or the form is reset, while `validationState` is set. A given state is a verdict on the value it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |
