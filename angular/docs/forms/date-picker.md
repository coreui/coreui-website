# Angular Date Picker Component

> Create consistent cross-browser and cross-device Angular date picker.

## Examples

### With footer

### Sizing
Set heights using `size` property like `size="lg"` and `size="sm"`.

### Disabled
Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

### Readonly
Add the `inputReadOnly` boolean attribute to prevent modification of the input value.

### Format
Control the format of the date displayed in the input using the `format` property according to `locale` rules.
Makes the date input read-only.

### Disabled dates
Add dates user cannot select using the `disabledDates` property.

## Non-english locale
### Auto

### Chinese

### Japanese

### Korean

## Right to left support
RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

### Persian

## Forms

Angular handles user input through reactive and template-driven forms.
CoreUI Date Picker supports both options.

### Reactive

### Template-driven

## API reference

### DatePicker Module

```typescript
import { 
  DatePickerModule,
  DropdownModule,
  SharedModule
} from '@coreui/angular';

@NgModule({
    imports: [
      DatePickerModule,
      DropdownModule,
      SharedModule
    ]
})
export class AppModule() { }
```

### c-date-picker
_component_

```jsx
import { DatePickerComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `calendarDate` | `Date` | `new Date()` | Default date month of the component. |
| `calendars` | `number` | `2` | The number of calendars that render on desktop devices. |
| `cleaner` | `boolean` | `true` | Toggle visibility or set the content of the cleaner button. |
| `closeOnSelect` | `boolean` | `false` | Determine if the dropdown should be closed after value setting. |
| `date` | `Date \| null` | `null` | Initial selected start date. |
| `dateFilter` | `DateFilterType` | - | Custom function to determine selectable dates. |
| `dayFormat` | `DayFormatType` | `'numeric'` | Set the format of day number. |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. |
| `disabledDates` | `Date \| Date[][]` | `[]` | Specify the list of dates that cannot be selected. |
| `endDate` | `Date \| null` | `null` | Initial selected end date. |
| `firstDayOfWeek` | `DaysOfWeek` | `1 (Monday)` | Set the first day of the week. |
| `format` | `string` | - | Set date format. We use Angular formatDate() function, see: - https://angular.io/api/common/formatDate - https://angular.io/api/common/DatePipe#pre-defined-format-options |
| `indicator` | `boolean` | `true` | Toggle visibility or set the content of the input indicator. |
| `inputDateFormat` | `object` | - | Custom function to format the selected date into a string according to a custom format. |
| `inputDateParse` | `object` | - | Custom function to parse the input value into a valid Date object. |
| `inputReadOnly` | `boolean` | `false` | Toggle the readonly state for the component. |
| `locale` | `string` | `'default'` | Sets the default locale for components. If not set, it is inherited from the browser. |
| `maxDate` | `Date \| null` | `null` | Max selectable date. |
| `minDate` | `Date \| null` | `null` | Min selectable date. |
| `navigation` | `boolean` | `true` | Show calendar navigation. |
| `navYearFirst` | `boolean` | `false` | Reorder year-month navigation, and render year first. |
| `placeholder` | `string \| string[]` | `['Start date', 'End date']` | Specifies short hints that are visible in start date and end date inputs. |
| `popperOptions` | `Partial<Options>` | `{ strategy: 'absolute' }` | Optional popper Options object |
| `range` | `boolean` | `true` | Allow range selection. |
| `ranges` | `ICalendarRanges` | - | Predefined date ranges the user can select from. |
| `rangesButtonsColor` | `string` | `'secondary'` | Sets the color context of the cancel button to one of CoreUI’s themed colors. |
| `rangesButtonsSize` | `'' \| 'sm' \| 'lg'` | `''` | Size the ranges button small or large. |
| `rangesButtonsVariant` | `'outline' \| 'ghost'` | `'ghost'` | Set the ranges button variant to an outlined button or a ghost button. |
| `selectAdjacentDays` | `boolean` | `false` | Set whether days in adjacent months shown before or after the current month are selectable. This only applies if the `showAdjacentDays` option is set to true. |
| `selectionType` | `SelectionType` | `'day'` | Specify the type of date selection as day, week, month, or year. |
| `separator` | `boolean` | `true` | Default icon or character that separates two dates. |
| `showAdjacentDays` | `boolean` | `true` | Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month. |
| `showWeekNumber` | `boolean` | `false` | Set whether to display week numbers in the calendar. |
| `size` | `'' \| 'sm' \| 'lg'` | `undefined` | Size the component small or large. |
| `timepicker` | `boolean` | `false` | Provide an additional time selection by adding select boxes to choose time. |
| `valid` | `boolean` | `undefined` | Toggle visual validation feedback. |
| `value` | `Date \| object \| null` | `null` |  |
| `visible` | `boolean` | `false` | Toggle the visibility of the dropdown date-picker component. |
| `weekdayFormat` | `WeekdayFormatType` | `'short'` | Set the length or format of the day name. |
| `weekNumbersLabel` | `string` | `undefined` | Label displayed over week numbers in the calendar. |
| `withTime` | `boolean` | `false` | Keep track of the time with the date value. |

### Events

| Name | Description |
| --- | --- |
| `calendarCellHover` | Event emitted on calendar cell hover. |
| `calendarDateChange` | Event emitted on calendar month change. |
| `dateChange` | Emitted when `date` changes. |
| `endDateChange` | Emitted when `endDate` changes. |
| `valueChange` | Event emitted on `value` change. |
