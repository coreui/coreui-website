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

## Keyboard behavior

_Added in 5.7.38._

`Tab` moves from the inputs to the clear button, which a date range picker with a value shows while the focus is in the field, and then to the calendar button. `Enter` or `Space` on the calendar button opens and closes the calendar, and `Alt` + `ArrowDown` (`Option` + `ArrowDown` on macOS) in an input opens it and moves the focus into the calendar, to the selected date when there is one. In the open calendar the keys work as described for the [calendar](https://coreui.io/angular/docs/components/calendar/#keyboard-behavior), and `Escape` closes it. `Enter` or `Space` on the clear button clears the dates and moves the focus to the start input. Use `ariaPickerLabel` and `ariaCleanerLabel` to name the two buttons in the language of your page.

Once a date is picked, the clear button keeps its place while it is hidden, so nothing moves when it shows up. In a narrow layout, where that place cuts the dates short, set `[cleaner]="false"` to give the room back to the inputs; unless the inputs are read-only, the dates can still be cleared by editing them.

## Forms

Angular handles user input through reactive and template-driven forms.
CoreUI Date Range Picker supports both possibilities.

### Reactive

### Template-driven

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
| `ariaCleanerLabel` | `string` | `'Clear date range'` | Accessible name of the button that clears the dates. |
| `ariaPickerLabel` | `string` | `'Toggle calendar'` | Accessible name of the button that opens and closes the calendar. |
| `calendarDate` | `Date` | `new Date()` | Default date month of the component. |
| `calendars` | `number` | `2` | The number of calendars that render on desktop devices. |
| `cleaner` | `boolean` | `true` | Toggle visibility or set the content of the cleaner button. |
| `closeOnSelect` | `boolean` | `false` | Determine if the dropdown should be closed after value setting. |
| `dateFilter` | `DateFilterType` | - | Custom function to determine selectable dates. |
| `dayFormat` | `DayFormatType` | `'numeric'` | Set the format of day number. |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. |
| `disabledDates` | `(Date \| Date[])[]` | `[]` | Specify the list of dates that cannot be selected. |
| `endDate` | `Date \| null` | `null` | Initial selected end date. |
| `firstDayOfWeek` | `DaysOfWeek` | `1 (Monday)` | Set the first day of the week. |
| `format` | `string` | - | Set date format. We use Angular formatDate() function, see: - https://angular.io/api/common/formatDate - https://angular.io/api/common/DatePipe#pre-defined-format-options |
| `indicator` | `boolean` | `true` | Toggle visibility or set the content of the input indicator. |
| `inputDateFormat` | `object` | - | Custom function to format the selected date into a string according to a custom format. |
| `inputDateParse` | `object` | - | Custom function to parse the input value into a valid Date object. With a week, month or year `selectionType`, the date is moved to the first day of its period, or to the last second of the period when it ends a range. |
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
| `selectionType` | `SelectionType` | `'day'` | Specify the type of date selection as day, week, month, or year. For a week, month or year the input shows `2025W07`, `2025-02` or `2025` and reads that text back (a week also as `2025-W07`), but not a date typed as a day. `inputDateFormat` with `inputDateParse`, or `format` with a `locale`, change what the input shows; when reading, `inputDateParse` is tried first. |
| `separator` | `boolean` | `true` | Default icon or character that separates two dates. |
| `showAdjacentDays` | `boolean` | `true` | Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month. |
| `showWeekNumber` | `boolean` | `false` | Set whether to display week numbers in the calendar. |
| `size` | `'' \| 'sm' \| 'lg'` | `undefined` | Size the component small or large. |
| `startDate` | `Date \| null` | `null` | Initial selected start date. |
| `timepicker` | `boolean` | `false` | Provide an additional time selection by adding select boxes to choose time. |
| `valid` | `boolean` | `undefined` | Toggle visual validation feedback. |
| `value` | `Date \| object \| null` | `null` |  |
| `visible` | `boolean` | `false` | Toggle the visibility of the dropdown date-picker component. |
| `weekdayFormat` | `WeekdayFormatType` | `'short'` | Set the length or format of the day name. |
| `weekNumbersLabel` | `string` | `undefined` | Label displayed over week numbers in the calendar. |
| `withTime` | `boolean` | `false` | Keep track of the time with the date value. |
| `yearFormat` | `YearFormatType` | `'numeric'` | Sets the format of years in the years view: 'numeric' or '2-digit'. |

### Events

| Name | Description |
| --- | --- |
| `calendarCellHover` | Event emitted on calendar cell hover. |
| `calendarDateChange` | Event emitted on calendar month change. |
| `endDateChange` | Emitted when `endDate` changes. |
| `startDateChange` | Emitted when `startDate` changes. |
| `valueChange` | Event emitted on `value` change. |
