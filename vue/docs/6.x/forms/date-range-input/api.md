# Vue Date Range Input Component API

> Explore the API reference for the Vue Date Range Input component and discover how to effectively utilize its props for customization.

## CDateRangeInput

```jsx
import { CDateRangeInput } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaDayLabel` | `string` | `'Day'` | The `aria-label` of the day section. |
| `ariaEndLabel` | `string` | `'End date'` | The accessible name of the end field, used when it has no floating label. |
| `ariaHourLabel` | `string` | `'Hour'` | The `aria-label` of the hour section. |
| `ariaMeridiemLabel` | `string` | `'AM/PM'` | The `aria-label` of the meridiem section. |
| `ariaMinuteLabel` | `string` | `'Minute'` | The `aria-label` of the minute section. |
| `ariaMonthLabel` | `string` | `'Month'` | The `aria-label` of the month section. |
| `ariaQuarterLabel` | `string` | `'Quarter'` | The `aria-label` of the quarter section. |
| `ariaSecondLabel` | `string` | `'Second'` | The `aria-label` of the second section. |
| `ariaStartLabel` | `string` | `'Start date'` | The accessible name of the start field, used when it has no floating label. |
| `ariaWeekLabel` | `string` | `'Week'` | The `aria-label` of the week section. |
| `ariaYearLabel` | `string` | `'Year'` | The `aria-label` of the year section. |
| `autoFocus` | `boolean` | - | Focus the first section of the start date right after mounting. |
| `dayPlaceholder` | `string` | - | Replaces the `DD` the day section shows while it is empty. |
| `disabled` | `boolean` | - | Toggle the disabled state for both ends. |
| `disabledDates` | `DisabledDate \| DisabledDate[]` | `undefined` | Specify the list of dates that cannot be selected in either end. It can be a single `Date`, an `[start, end]` range, a matcher function, or an array of these. |
| `endDate` | `Date \| string \| null` | `undefined` | The end date — a `Date` or a date string. Passed one-way it seeds the field; bound with `v-model:end-date` it follows your state. |
| `endFloatingLabel` | `string` | - | The floating label of the end field. The text is also that field's accessible name. |
| `endName` | `string` | - | Name of the value input carrying the end date. Without it the end date is not submitted with the form. |
| `feedback` | `string` | - | Provide valuable, actionable feedback to your users with HTML5 form validation feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied `validationState="invalid"`. |
| `feedbackValid` | `string` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied `validationState="valid"`. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `string` | - | Wrap the whole range in a floating label. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `format` | `string \| ((locale: string) => DateSection[])` | `undefined` | The mask layout for both ends. A string is parsed as dayjs/moment or date-fns/luxon format tokens, a function receives the locale and returns the section layout, and `undefined` derives the layout from the locale. |
| `hourPlaceholder` | `string` | - | Replaces the `HH` (`hh` on a 12-hour clock) the hour section shows while it is empty. |
| `id` | `string` | - | The id attribute of the frame. |
| `inputDateParse` | `(value: string) => Date \| null` | `undefined` | Custom function to parse text pasted into either end into a `Date` object, e.g. with an external date library. |
| `label` | `string` | - | Add a caption for a component. |
| `locale` | `string` | `'default'` | Sets the default locale for both ends. If not set, it is inherited from the browser. |
| `maxDate` | `Date \| string \| null` | `undefined` | Latest date either end can hold. |
| `meridiemPlaceholder` | `string` | - | Replaces the `AM` the meridiem section shows while it is empty. |
| `minDate` | `Date \| string \| null` | `undefined` | Earliest date either end can hold. |
| `minutePlaceholder` | `string` | - | Replaces the `mm` the minute section shows while it is empty. |
| `monthNames` | `string[]` | `undefined` | Twelve custom month names for text month sections (`MMM`/`MMMM`), overriding the locale-derived, date-context grammatical form. |
| `monthPlaceholder` | `string` | - | Replaces the `MM` the month section shows while it is empty. |
| `quarterPlaceholder` | `string` | - | Replaces the `Q` the quarter section shows while it is empty. |
| `readOnly` | `boolean` | - | Make both ends focusable but non-editable. |
| `required` | `boolean` | - | When present, it specifies that both ends must be filled out before submitting the form. |
| `secondPlaceholder` | `string` | - | Replaces the `ss` the second section shows while it is empty. |
| `seconds` | `boolean` | - | Include a seconds section in the locale-derived layout of `type="datetime"`. Both ends follow. |
| `size` | `string` | `undefined` | Size the component small or large - both ends follow. |
| `startDate` | `Date \| string \| null` | `undefined` | The start date — a `Date` or a date string. Passed one-way it seeds the field; bound with `v-model:start-date` it follows your state. |
| `startFloatingLabel` | `string` | - | The floating label of the start field. The text is also that field's accessible name. |
| `startName` | `string` | - | Name of the value input carrying the start date. Without it the start date is not submitted with the form. |
| `text` | `string` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `type` | `string` | `'date'` | Which sections the locale-derived layout carries. A `format` names the sections itself and overrides this. Both ends follow. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class on the frame; `'invalid'` also sets `aria-invalid` on the sections of both ends and blocks the submit. An end before the start and an end the limits reject mark the frame invalid on their own. The user's next change of either end emits `update:validationState` with `undefined`. |
| `weekPlaceholder` | `string` | - | Replaces the `WW` the week section shows while it is empty. |
| `yearPlaceholder` | `string` | - | Replaces the `YYYY` the year section shows while it is empty. |

### Events

| Name | Description |
| --- | --- |
| `end-date-change` | Callback fired when the end date changes. |
| `start-date-change` | Callback fired when the start date changes. |
| `update:endDate` | Emit the new end date to support the `v-model:end-date` binding. |
| `update:startDate` | Emit the new start date to support the `v-model:start-date` binding. |
| `update:validationState` | Event occurs with `undefined` when the user changes either end, or the form is reset, while `validationState` is set. A given state is a verdict on the range it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |
