# Angular Date Range Picker Component

> Create consistent cross-browser and cross-device Angular date range picker.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=angular&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Examples

### With footer

### Weeks

Set `selectionType` to `week` to select a range of whole weeks, and add `showWeekNumber` to show the week numbers in the calendar. Since 5.7.38 the input shows a week as `2025W07`, numbered as its row in the week number column, and reads that text back.

### Months

Set `selectionType` to `month` to select a range of whole months. Since 5.7.38 the input shows a month as `2022-08` and reads that text back.

### Years

Set `selectionType` to `year` to select a range of whole years. Since 5.7.38 the input shows a year as `2022` and reads that text back.

### Sizing
Set heights using `size` property like `size="lg"` and `size="sm"`.

### Disabled
Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

### Readonly
Add the `inputReadOnly` boolean attribute to prevent modification of the input value.

### Preview date on hover

_Added in 5.7.38._

By default, the date range picker shows the hovered or focused calendar date in the start input until a start date is picked, and then in the end input. To disable this feature, set `[previewDateOnHover]="false"`.

### Disabled dates

#### Disabling weekends

Pass a function to `dateFilter` to decide which dates can be picked: it receives a date and returns `true` when the date is selectable. To disable weekends, return `false` for Sunday (`0`) and Saturday (`6`). A range cannot include a date that `dateFilter` rules out, so here a range stays within the working days of one week.

### Custom ranges

## Non-english locale

The inputs read typed dates in the numeric format they show for the locale, with `.`, `/`, `-` or a space between the parts. Since 5.7.40 they also read the digits of the locale and, in `th-TH`, the Buddhist year, and the spaces and the closing mark of the format may be left out. In other calendars, such as Persian (`fa-IR`) or the Japanese eras (`ja-JP-u-ca-japanese`), and in a format that shows an era, typed text is reported as `datePickerParse`: give `inputDateFormat` with `inputDateParse` to read it, or set `inputReadOnly`.

### Auto

### Chinese

### Japanese

### Korean

## Right to left support
RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

### Persian

## Custom formats

Use `inputDateFormat` to write the date into the input in a format of your choice, and `inputDateParse` to read the typed text back into a `Date`. Unlike `format`, which needs a `locale` with its Angular locale data registered (`registerLocaleData`) and makes the input read-only, these keep the input editable. The examples below use the `format` and `parse` functions from `date-fns`, with the English and Spanish patterns `'MMMM dd, yyyy'` and `'yyyy MMMM dd'`.

```ts
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';
```

### Weeks

Set `selectionType` to `week` and give `inputDateFormat` and `inputDateParse` a week-based pattern, such as `'Io RRRR'` (the ISO week number and its year). Add `showWeekNumber` to show the week numbers in the calendar.

### Months

Set `selectionType` to `month` and give `inputDateFormat` and `inputDateParse` a month pattern, such as `'MMM yyyy'`.

### Years

Set `selectionType` to `year` and give `inputDateFormat` and `inputDateParse` a year pattern, such as `'yy'`.

## Accessibility

_Added in 5.7.38._

- The calendar button is named by `ariaPickerLabel` and, once both ends are set, the picked range (`Toggle calendar, Monday, January 5 – Friday, January 9, 2026`), so a screen reader reads the pick when focus comes back to it. The dates follow `locale`: set it to the language of the label.
- The clear button is named by `ariaCleanerLabel`. With a value, it shows while focus is in the field and keeps its place while hidden; `[cleaner]="false"` gives that place back to the inputs in a narrow layout.
- Closing the calendar from inside (`Escape`, a pick with `closeOnSelect`, a close button in the footer) returns focus to the input it was opened from, or to the calendar button that opened it. After a touch an editable input does not get it back, so the on-screen keyboard stays closed; the calendar button takes it when there is one.

### Keyboard behavior

| Key | Action |
| --- | --- |
| `Tab` | Start input, end input, clear button, calendar button |
| `Enter` / `Space` on the calendar button | Open or close the calendar |
| `Alt` + `ArrowDown` (`Option` on macOS) in an input | Open the calendar and move focus into it |
| `Enter` / `Space` on a date | Pick it; with `closeOnSelect` the calendar closes once the range is complete |
| `Escape` | Close the calendar |
| `Enter` / `Space` on the clear button | Clear the dates, focus the start input |
| Other keys in the calendar | See [Calendar](https://coreui.io/angular/docs/components/calendar/#keyboard-behavior) |

## Forms

Angular handles user input through reactive, template-driven and signal forms.
CoreUI Date Range Picker supports all three.

The control is marked touched when the user leaves the date range picker (the focus moves to another element or a click lands outside it) or both ends are set while its calendar is open; with `updateOn: 'blur'` that also commits the value.

### Validation

_Added in 5.7.40._

Text the picker cannot turn into an allowed date stays in its input with `aria-invalid="true"`, that end becomes `null` and the control reports (the start first when both fail):

```ts
{ datePickerParse: { part: 'start' | 'end', reason: 'parse' | 'disabled' | 'order', text: string } }
```

- `parse`: not a date (an invalid date from the page gives an empty `text`)
- `disabled`: outside `minDate`/`maxDate`, in `disabledDates` or rejected by `dateFilter`
- `order`: an end before the start or without one

A start without a date clears the end, a typed start after the end begins a new range. Set the value and `disabled` through the form or through the inputs, not both, and give an end from the page its start.

`[valid]="false"` sets `aria-invalid="true"` on both inputs and shows the invalid icon on the end input only. `aria-describedby` on `c-date-range-picker`, as a static attribute or bound with `[aria-describedby]`, moves to both inputs, so the feedback is read with them; `[attr.aria-describedby]` does not reach the inputs.

### Reactive

### Template-driven

### Signal forms

## API reference

### DateRangePicker Module

```typescript
import { 
  DateRangePickerModule,
  DropdownModule,
  SharedModule
} from '@coreui/angular';

@NgModule({
    imports: [
      DateRangePickerModule,
      DropdownModule,
      SharedModule
    ]
})
export class AppModule() { }
```

### c-date-range-picker
_component_

```jsx
import { DateRangePickerComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `aria-describedby` | `string \| null` | `undefined` | Ids of the elements that describe the dates, e.g. a hint or the validation message; set on every date input. A validation message hidden by CSS is still read, so bind its id only while the dates are invalid: `[aria-describedby]="invalid ? 'feedback' : null"`. Set it as a static attribute, which is removed from the host, or bind `[aria-describedby]`; `[attr.aria-describedby]` does not reach the inputs. |
| `ariaCleanerLabel` | `string` | `'Clear date range'` | Accessible name of the button that clears the dates. |
| `ariaPickerLabel` | `string` | `'Toggle calendar'` | Accessible name of the button that opens and closes the calendar. The picked date (in DateRangePicker the range, once both ends are set) follows it, written in `locale`. |
| `calendarDate` | `Date` | `new Date()` | Default date month of the component. |
| `calendars` | `number` | `2` | The number of calendars that render on desktop devices. |
| `cleaner` | `boolean` | `true` | Toggle visibility or set the content of the cleaner button. |
| `closeOnSelect` | `boolean` | `false` | Determine if the dropdown should be closed after value setting. |
| `dateFilter` | `DateFilterType` | - | Custom function to determine selectable dates. |
| `dayFormat` | `DayFormatType` | `'numeric'` | Set the format of day number. |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. |
| `disabledDates` | `(Date \| Date[])[]` | `[]` | Specify the list of dates that cannot be selected. |
| `endDate` | `Date \| null` | `null` | Selected end date. A change from the page writes it without the `(endDateChange)` output, `valueChange` or a form update. |
| `firstDayOfWeek` | `DaysOfWeek` | `1 (Monday)` | Set the first day of the week. |
| `format` | `string` | - | Set date format. We use Angular formatDate() function, see: - https://angular.io/api/common/formatDate - https://angular.io/api/common/DatePipe#pre-defined-format-options |
| `indicator` | `boolean` | `true` | Toggle visibility or set the content of the input indicator. |
| `inputDateFormat` | `object` | - | Custom function to format the selected date into a string according to a custom format. |
| `inputDateParse` | `object` | - | Custom function to parse the input value into a valid Date object. It is the only reader of typed text: text it rejects with an invalid date is reported as `datePickerParse`, without the built-in reader; empty or whitespace-only text clears the date without calling it. Give it with `inputDateFormat`, so the picker can read back what it shows. With a week, month or year `selectionType`, the date is moved to the first day of its period. A date that ends a range is moved to the last second of its day or period; with `withTime` it then takes the time of the end it replaces. |
| `inputReadOnly` | `boolean` | `false` | Toggle the readonly state for the component. |
| `locale` | `string` | `'default'` | Sets the default locale for components. If not set, it is inherited from the browser. |
| `maxDate` | `Date \| null` | `null` | Max selectable date. |
| `minDate` | `Date \| null` | `null` | Min selectable date. |
| `monthFormat` | `MonthFormatType` | `'short'` | Sets the format of month names in the months view: 'long', 'narrow', 'short', 'numeric' or '2-digit'. |
| `navigation` | `boolean` | `true` | Show calendar navigation. |
| `navYearFirst` | `boolean` | `false` | Reorder year-month navigation, and render year first. |
| `placeholder` | `string \| string[]` | `['Start date', 'End date']` | Specifies short hints that are visible in start date and end date inputs. |
| `popperOptions` | `Partial<Options>` | `{ strategy: 'absolute' }` | Optional popper Options object |
| `previewDateOnHover` | `boolean` | `true` | Shows a live preview of the hovered or focused calendar date in the input fields. |
| `range` | `boolean` | `true` | Allow range selection. |
| `ranges` | `ICalendarRanges` | - | Predefined date ranges the user can select from. |
| `rangesButtonsColor` | `string` | `'secondary'` | Sets the color context of the cancel button to one of CoreUI’s themed colors. |
| `rangesButtonsSize` | `'' \| 'sm' \| 'lg'` | `''` | Size the ranges button small or large. |
| `rangesButtonsVariant` | `'outline' \| 'ghost'` | `'ghost'` | Set the ranges button variant to an outlined button or a ghost button. |
| `selectAdjacentDays` | `boolean` | `false` | Set whether days in adjacent months shown before or after the current month are selectable. This only applies if the `showAdjacentDays` option is set to true. |
| `selectionType` | `SelectionType` | `'day'` | Specify the type of date selection as day, week, month, or year. For a week, month or year the input shows `2025W07`, `2025-02` or `2025` and reads that text back (a week also as `2025-W07`), but not a date typed as a day. `inputDateFormat` with `inputDateParse`, or `format` with a `locale`, change what the input shows; when reading, `inputDateParse`, if given, replaces the built-in reader. |
| `separator` | `boolean` | `true` | Default icon or character that separates two dates. |
| `showAdjacentDays` | `boolean` | `true` | Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month. |
| `showWeekNumber` | `boolean` | `false` | Set whether to display week numbers in the calendar. |
| `size` | `'' \| 'sm' \| 'lg'` | `undefined` | Size the component small or large. |
| `startDate` | `Date \| null` | `null` | Selected start date. A change from the page writes it without the `(startDateChange)` output, `valueChange` or a form update. |
| `timepicker` | `boolean` | `false` | Provide an additional time selection by adding select boxes to choose time. |
| `valid` | `boolean` | `undefined` | Validation state: `true` valid, `false` invalid, which also sets `aria-invalid="true"` on the inputs, `undefined` none. |
| `value` | `Date \| object \| null` | `null` | The dates as `{ startDate, endDate }`, or a date for the start date alone. Written without `valueChange`, like a form value. |
| `visible` | `boolean` | `false` | Toggle the visibility of the dropdown date-picker component. |
| `weekdayFormat` | `WeekdayFormatType` | `'short'` | Set the length or format of the day name. |
| `weekNumbersLabel` | `string` | `undefined` | Label displayed over week numbers in the calendar. |
| `withTime` | `boolean` | `false` | Keep track of the time with the date value: a picked or typed date keeps the local time of the date it replaces. |
| `yearFormat` | `YearFormatType` | `'numeric'` | Sets the format of years in the years view: 'numeric' or '2-digit'. |

### Events

| Name | Description |
| --- | --- |
| `calendarCellHover` | Event emitted on calendar cell hover. |
| `calendarDateChange` | Event emitted on calendar month change. |
| `endDateChange` | Event emitted when the user or `endDateModel.set()` changes the end date. |
| `startDateChange` | Event emitted when the user or `startDateModel.set()` changes the start date. |
| `valueChange` | Event emitted when the user, `startDateModel.set()` or `endDateModel.set()` changes the value. |
