# Vue Time Picker Component API

> Explore the API reference for the Vue Time Picker component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CTimePicker

```jsx
import { CTimePicker } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCleanerLabel` | `string` | `'Clear time'` | Sets the accessible label (`aria-label`) of the button that clears the value. |
| `ariaDayLabel` | `string` | `'Day'` | The `aria-label` of the day section. |
| `ariaHourLabel` | `string` | `'Hour'` | The `aria-label` of the hour section. |
| `ariaMeridiemLabel` | `string` | `'AM/PM'` | The `aria-label` of the meridiem section. |
| `ariaMinuteLabel` | `string` | `'Minute'` | The `aria-label` of the minute section. |
| `ariaMonthLabel` | `string` | `'Month'` | The `aria-label` of the month section. |
| `ariaPickerLabel` | `string` | `'Toggle time selection'` | Sets the accessible label (`aria-label`) of the button that opens the time selection. |
| `ariaPopupLabel` | `string` | `'Time selection'` | Sets the accessible label (`aria-label`) of the time selection panel, which opens as a `role="dialog"`. |
| `ariaQuarterLabel` | `string` | `'Quarter'` | The `aria-label` of the quarter section. |
| `ariaSecondLabel` | `string` | `'Second'` | The `aria-label` of the second section. |
| `ariaSelectHoursLabel` | `string` | `'Select hours'` | Sets the accessible label of the hours column. |
| `ariaSelectMeridiemLabel` | `string` | `'Select AM/PM'` | Sets the accessible label of the AM/PM column. |
| `ariaSelectMinutesLabel` | `string` | `'Select minutes'` | Sets the accessible label of the minutes column. |
| `ariaSelectSecondsLabel` | `string` | `'Select seconds'` | Sets the accessible label of the seconds column. |
| `ariaWeekLabel` | `string` | `'Week'` | The `aria-label` of the week section. |
| `ariaYearLabel` | `string` | `'Year'` | The `aria-label` of the year section. |
| `cleaner` | `boolean` | `true` | Renders the button that clears the value. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | The element the time selection is rendered into instead of `document.body`. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `dayPlaceholder` | `string` | - | Replaces the `DD` the day section shows while it is empty. |
| `disabled` | `boolean` | - | Toggles the disabled state. |
| `feedback` | `string` | - | Provide valuable, actionable feedback to your users with HTML5 form validation feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied `invalid` prop. |
| `feedbackValid` | `string` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied `valid` prop. |
| `floatingLabel` | `string` | - | Renders a floating label inside the field — the component wraps its input in `.form-floating` and the text also becomes the field's accessible name. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `format` | `string \| ((locale: string) => DateSection[])` | `undefined` | The mask layout of the field. A string is parsed as dayjs/moment or date-fns/luxon format tokens, a function receives the locale and returns the section layout, and `undefined` derives the layout from the locale. The mask's hour cycle also drives the columns. |
| `hourPlaceholder` | `string` | - | Replaces the `HH` (`hh` on a 12-hour clock) the hour section shows while it is empty. |
| `hours` | `number[] \| ((hour: number) => boolean)` | `undefined` | Narrows the hours to a list, or to the ones a predicate accepts. Hours are 0 to 23 in every locale; on a 12-hour clock an hour that only one day period allows sets that period when picked. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `string` | - | Add a caption for a component. |
| `locale` | `string` | `'default'` | Sets the default locale for the component. If not set, it is inherited from the browser. |
| `maxDate` | - | - | The latest time the user can pick: a time string such as `'17:00'`, or a `Date` of which only the time of day counts. The panel disables the times after it, a time picked in the panel moves back to it, and the field rejects a later time. |
| `meridiemPlaceholder` | `string` | - | Replaces the `AM` the meridiem section shows while it is empty. |
| `minDate` | - | - | The earliest time the user can pick: a time string such as `'09:30'`, or a `Date` of which only the time of day counts. The panel disables the times before it, a time picked in the panel moves up to it, and the field rejects an earlier time. |
| `minutePlaceholder` | `string` | - | Replaces the `mm` the minute section shows while it is empty. |
| `minutes` | `boolean \| number[] \| ((minute: number) => boolean)` | `true` | Renders the minutes column, optionally narrowed the way `hours` is. |
| `monthPlaceholder` | `string` | - | Replaces the `MM` the month section shows while it is empty. |
| `name` | `string` | - | Name of the value input the value is submitted under. Without it the field is not submitted with the form. |
| `pickerIcon` | `boolean` | `true` | The button that opens the panel. Set to `false` to render no button; replace the artwork through the `pickerIcon` slot. |
| `portal` | `boolean` | `true` | Renders the time selection through a portal: into the open `<dialog>` the field sits in, otherwise into `document.body`. |
| `quarterPlaceholder` | `string` | - | Replaces the `Q` the quarter section shows while it is empty. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `required` | `boolean` | - | When present, it specifies that the field must be filled out before submitting the form. |
| `secondPlaceholder` | `string` | - | Replaces the `ss` the second section shows while it is empty. |
| `seconds` | `boolean \| number[] \| ((second: number) => boolean)` | `true` | Renders the seconds column, optionally narrowed the way `hours` is. |
| `show` | `boolean` | `undefined` | Control the open state via `v-model:show`. When set, the time selection renders what `show` says and dismiss gestures only emit `update:show`. |
| `size` | `string` | `undefined` | Sizes the control, the way `.form-control-sm` and `.form-control-lg` size a form control. |
| `text` | `string` | - | Add helper text to the component. |
| `time` | `Date \| string \| null` | `undefined` | The time — a `Date` or a time string like `'14:30'`. Passed one-way it seeds the field, which keeps managing itself; bound with `v-model:time` it follows your state. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` on every section of the field and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the time emits `update:validationState` with `undefined`. |
| `visible` | `boolean` | `undefined` | Controls the visibility of the time selection. |
| `weekPlaceholder` | `string` | - | Replaces the `WW` the week section shows while it is empty. |
| `yearPlaceholder` | `string` | - | Replaces the `YYYY` the year section shows while it is empty. |

### Events

| Name | Description |
| --- | --- |
| `error` | Callback fired when the validation state changes; receives `'incomplete'`, `'minDate'`, `'maxDate'`, `'disabledDate'`, or `null` when the value is valid or the field is empty. When one change moves both the value and the validation state, it fires after `time-change`, so a value set from it replaces the one just reported. |
| `hide` | Callback fired when the time selection is hidden. |
| `show` | Callback fired when the time selection is shown. |
| `time-change` | Callback fired once when the value changes, whether from the field, the panel or the context methods; receives the `Date` the field holds, anchored to 1970-01-01 and cut to the units the field shows, or `null` while the field is empty or incomplete, and the formatted value. |
| `update:show` | Emit the requested open state to support the `v-model:show` binding. |
| `update:time` | Emit the new time to support the `v-model:time` binding. |
| `update:validationState` | Event occurs with `undefined` when the user changes the time, or the form is reset, while `validationState` (or the deprecated `invalid`/`valid`) is set. A given state is a verdict on the value it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |
