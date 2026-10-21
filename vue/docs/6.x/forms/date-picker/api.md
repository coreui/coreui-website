# Vue Date Picker Component API

> Explore the API reference for the Vue Date Picker component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CDatePicker

```jsx
import { CDatePicker } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCleanerLabel` | `string` | `'Clear date'` | Sets the accessible label (`aria-label`) of the button that clears the value. |
| `ariaDayLabel` | `string` | `'Day'` | The `aria-label` of the day section. |
| `ariaHourLabel` | `string` | `'Hour'` | The `aria-label` of the hour section. |
| `ariaMeridiemLabel` | `string` | `'AM/PM'` | The `aria-label` of the meridiem section. |
| `ariaMinuteLabel` | `string` | `'Minute'` | The `aria-label` of the minute section. |
| `ariaMonthLabel` | `string` | `'Month'` | The `aria-label` of the month section. |
| `ariaNavNextMonthLabel` | `string` | `'Next month'` | A string that provides an accessible label for the button that navigates to the next month in the calendar. |
| `ariaNavNextYearLabel` | `string` | `'Next year'` | A string that provides an accessible label for the button that navigates to the next year in the calendar. |
| `ariaNavNextYearsLabel` | `string` | `'Next 12 years'` | Sets the accessible label (`aria-label`) of the button that turns the years view to the next page of years. |
| `ariaNavPrevMonthLabel` | `string` | `'Previous month'` | A string that provides an accessible label for the button that navigates to the previous month in the calendar. |
| `ariaNavPrevYearLabel` | `string` | `'Previous year'` | A string that provides an accessible label for the button that navigates to the previous year in the calendar. |
| `ariaNavPrevYearsLabel` | `string` | `'Previous 12 years'` | Sets the accessible label (`aria-label`) of the button that turns the years view to the previous page of years. |
| `ariaNothingToPickLabel` | `string` | `'Nothing on this page can be picked'` | Sets the description (`aria-describedby`) of a grid in which nothing can be picked, such as a page wholly outside `minDate` / `maxDate` or one that `disabledDates` covers, also announced when the calendar turns to such a page. An empty string leaves the grid without a description. |
| `ariaPickerLabel` | `string` | `'Toggle calendar'` | Sets the accessible label (`aria-label`) of the button that opens the calendar, followed by the date the picker holds. |
| `ariaPopupLabel` | `string` | `'Calendar'` | Sets the accessible label (`aria-label`) of the calendar panel, which opens as a `role="dialog"`. |
| `ariaQuarterLabel` | `string` | `'Quarter'` | The `aria-label` of the quarter section. |
| `ariaSecondLabel` | `string` | `'Second'` | The `aria-label` of the second section. |
| `ariaSelectedDateAnnouncement` | `string` | `'Selected date: {date}'` | Sets the message announced when a click or Enter / Space picks a date in a panel that stays open, with `timepicker` or without the toggle. A pick that closes the panel names the toggle with the date instead. `{date}` is replaced by the full name of what was picked, such as `Wednesday, August 12, 2026`. An empty string announces nothing. |
| `ariaSelectHoursLabel` | `string` | `'Select hours'` | Sets the accessible label of the hours select of the time half. |
| `ariaSelectMeridiemLabel` | `string` | `'Select AM/PM'` | Sets the accessible label of the AM/PM select of the time half. |
| `ariaSelectMinutesLabel` | `string` | `'Select minutes'` | Sets the accessible label of the minutes select of the time half. |
| `ariaSelectSecondsLabel` | `string` | `'Select seconds'` | Sets the accessible label of the seconds select of the time half. |
| `ariaWeekLabel` | `string` | `'Week'` | The `aria-label` of the week section. |
| `ariaWeekNumberLabel` | `(weekNumber: number) => string \| undefined` | - | Names each week number for screen readers: a function that takes the week number and returns its name. Without it the name is the locale's word for week and the number, such as `Week 36`. Keep the number in the name, so a voice-control user can say what they see. |
| `ariaYearLabel` | `string` | `'Year'` | The `aria-label` of the year section. |
| `calendarDate` | `Date \| string \| null` | `undefined` | The date the calendar opens on while nothing is selected. |
| `cleaner` | `boolean` | `true` | Renders the button that clears the value. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | The element the calendar is rendered into instead of `document.body`. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `date` | `Date \| string \| null` | `undefined` | The date — a `Date` or a date string like `'2026-07-14'`. Passed one-way it seeds the field, which keeps managing itself; bound with `v-model:date` it follows your state. |
| `dayFormat` | `func\|string` | `'numeric'` | Set the format of day name. |
| `dayPlaceholder` | `string` | - | Replaces the `DD` the day section shows while it is empty. |
| `disabled` | `boolean` | - | Toggles the disabled state. |
| `disabledDates` | `DisabledDate \| DisabledDate[]` | `undefined` | Specify the list of dates that cannot be selected. It can be a single `Date`, an `[start, end]` range, a matcher function, or an array of these. In week, month, quarter and year selection a period is disabled when every day of it is. |
| `feedback` | `string` | - | Provide valuable, actionable feedback to your users with HTML5 form validation feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied `invalid` prop. |
| `feedbackValid` | `string` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied `valid` prop. |
| `firstDayOfWeek` | `number` | `1` | Sets the day of start week. - 0 - Sunday, - 1 - Monday, - 2 - Tuesday, - 3 - Wednesday, - 4 - Thursday, - 5 - Friday, - 6 - Saturday, |
| `floatingLabel` | `string` | - | Renders a floating label inside the field — the component wraps its input in `.form-floating` and the text also becomes the field's accessible name. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `format` | `string \| ((locale: string) => DateSection[])` | `undefined` | The mask layout of the field. A string is parsed as dayjs/moment or date-fns/luxon format tokens, a function receives the locale and returns the section layout, and `undefined` derives the layout from the locale and the selection type. |
| `hourPlaceholder` | `string` | - | Replaces the `HH` (`hh` on a 12-hour clock) the hour section shows while it is empty. |
| `hours` | `number[] \| ((hour: number) => boolean)` | `undefined` | Narrows the hours of the time half to a list, or to the ones a predicate accepts. Hours are 0 to 23 in every locale; on a 12-hour clock an hour that only one day period allows sets that period when picked. |
| `inputDateParse` | `(value: string) => Date \| null` | `undefined` | Custom function to parse text pasted into the field into a `Date` object, e.g. with an external date library. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `string` | - | Add a caption for a component. |
| `locale` | `string` | `'default'` | Sets the default locale for the component. If not set, it is inherited from the browser. |
| `maxDate` | `Date \| string \| null` | `undefined` | Max selectable date. The days after its day are disabled, and a time of day it carries leaves its own day selectable. In week selection its whole week stays selectable. |
| `meridiemPlaceholder` | `string` | - | Replaces the `AM` the meridiem section shows while it is empty. |
| `minDate` | `Date \| string \| null` | `undefined` | Min selectable date. The days before its day are disabled, and a time of day it carries leaves its own day selectable. In week selection its whole week stays selectable. |
| `minutePlaceholder` | `string` | - | Replaces the `mm` the minute section shows while it is empty. |
| `minutes` | `boolean \| number[] \| ((minute: number) => boolean)` | `true` | Renders the minutes part of the time half, optionally narrowed the way `hours` is. |
| `monthFormat` | `string` | `'short'` | Sets the format for month names. |
| `monthNames` | `string[]` | `undefined` | Twelve custom month names for text month sections (`MMM`/`MMMM`), overriding the locale-derived, date-context grammatical form. |
| `monthPlaceholder` | `string` | - | Replaces the `MM` the month section shows while it is empty. |
| `name` | `string` | - | Name of the value input the value is submitted under. Without it the field is not submitted with the form. |
| `pickerIcon` | `boolean` | `true` | The button that opens the panel. Set to `false` to render no button; replace the artwork through the `pickerIcon` slot. |
| `portal` | `boolean` | `true` | Renders the calendar through a portal: into the open `<dialog>` the field sits in, otherwise into `document.body`. |
| `quarterPlaceholder` | `string` | - | Replaces the `Q` the quarter section shows while it is empty. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `required` | `boolean` | - | When present, it specifies that the field must be filled out before submitting the form. |
| `secondPlaceholder` | `string` | - | Replaces the `ss` the second section shows while it is empty. |
| `seconds` | `boolean \| number[] \| ((second: number) => boolean)` | `true` | Renders the seconds part of the time half and the field's second section, optionally narrowed the way `hours` is. |
| `selectAdjacentDays` | `boolean` | - | Set whether days in adjacent months shown before or after the current month are selectable. This only applies if the `showAdjacentDays` option is set to true. A picked day of an adjacent month keeps the month on screen and shows as selected with an outline on a subtle background instead of the solid fill. |
| `selectionType` | `string` | `'day'` | Specify the type of date selection as day, week, month, quarter, or year. |
| `show` | `boolean` | `undefined` | Control the open state via `v-model:show`. When set, the calendar renders what `show` says and dismiss gestures only emit `update:show` — nothing closes until the parent flips the prop. |
| `showAdjacentDays` | `boolean` | `true` | Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month. |
| `showWeekNumber` | `boolean` | - | Set whether to display week numbers in the calendar. |
| `size` | `string` | `undefined` | Sizes the control, the way `.form-control-sm` and `.form-control-lg` size a form control. |
| `text` | `string` | - | Add helper text to the component. |
| `timepicker` | `boolean` | - | Add a time half to the panel: a row of hour, minute and second selects under the calendar, and a date and time mask in the field. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` on every section of the field and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the date emits `update:validationState` with `undefined`. |
| `visible` | `boolean` | `undefined` | Controls the visibility of the calendar. |
| `weekdayFormat` | `func\|number\|string` | `2` | Set length or format of day name. |
| `weekNumbersLabel` | `string` | - | Label displayed over week numbers in the calendar. Without it the column is named for screen readers with the locale's word for week. |
| `weekPlaceholder` | `string` | - | Replaces the `WW` the week section shows while it is empty. |
| `yearFormat` | `string` | `'numeric'` | Sets how the year cells of the years view write the year: `'numeric'` (2026) or `'2-digit'` (26). The navigation always writes the full year. |
| `yearPlaceholder` | `string` | - | Replaces the `YYYY` the year section shows while it is empty. |

### Events

| Name | Description |
| --- | --- |
| `calendar-date-change` | Callback fired when the calendar date changed. |
| `date-change` | Callback fired once when the value changes, whether from the field, the calendar or the context methods; receives the `Date` the field holds (or `null` while the field is empty, incomplete or out of range) and the formatted value. |
| `error` | Callback fired when the validation state changes; receives `'incomplete'`, `'minDate'`, `'maxDate'`, `'disabledDate'`, or `null` when the value is valid or the field is empty. When one change moves both the value and the validation state, it fires after `date-change`, so a value set from it replaces the one just reported. |
| `hide` | Callback fired when the calendar is hidden. |
| `show` | Callback fired when the calendar is shown. |
| `update:date` | Emit the new date to support the `v-model:date` binding. |
| `update:show` | Emit the requested open state to support the `v-model:show` binding — a dismiss gesture (Escape, a click outside) or any internal toggle. |
| `update:validationState` | Event occurs with `undefined` when the user changes the date, or the form is reset, while `validationState` (or the deprecated `invalid`/`valid`) is set. A given state is a verdict on the value it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |
| `view-change` | Callback fired when the calendar's view changes between days, months, quarters or years, and with the starting view each time the calendar opens. |
