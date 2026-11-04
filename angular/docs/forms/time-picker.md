# Angular Time Picker Component

> Create consistent cross-browser and cross-device Angular time picker.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=angular&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Examples

### Sizing
Set heights using `size` property like `size="lg"` and `size="sm"`.

### Disabled
Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events. Disabling the picker also closes its open menu.

### Typing a time
The input reads a time typed the way the picker shows it in its `locale`, with the locale's digits and day periods (`9:05 PM`, `오후 9:05`, `۲۱:۰۵`), as well as 24-hour time (`21:05`), a dot as the separator (`21.05`) and `AM`/`PM` in any letter case. A time without a day period is read as 24-hour time. The time is read when the input changes (<kbd>Enter</kbd> or leaving the input) and on <kbd>ArrowDown</kbd> or <kbd>Alt</kbd> + <kbd>ArrowDown</kbd>, each part snaps to the nearest value allowed by its filter, and seconds are kept only with `seconds`. Text that is not a time clears the picker. Picking a value in the menu before the typed text is read replaces that text with the picked time.

A string bound to `time` or written by a form control is read the same way, along with ISO times and date-times (`15:30:00`, `2026-01-05T15:30:00`, `2026-01-05 15:30:00`). A string in the locale's own format is read with the picker's `locale`, also when the locale arrives later; a time already read, picked or cleared stays when only `locale` changes.

The picker reports a `Date`. A time without a date, from a time string or picked or typed into an empty picker, is set on 1 January 1970; a time string with a UTC offset (`15:30Z`, `15:30+02:00`) is that moment on 1 January 1970, so its local date can be a day earlier or later. A picked or typed time keeps the date of the time it replaces. A `Date` bound to `time` or written by a form control keeps its moment, also when it comes from another window or frame, and so does a date-time string (`2026-01-05T15:30:00`). To store or send a time without a date, use its hours, minutes and, with `seconds`, seconds rather than `toISOString()`: the UTC offset of 1 January 1970 can differ from today's.

### Readonly
Add the `inputReadOnly` boolean attribute to prevent modification of the input value.

### Validation
Set `valid` to show the validation state. `[valid]="false"` also sets `aria-invalid="true"` on the input or, in the `select` variant, on every select. `aria-describedby` on `c-time-picker`, as a static attribute or bound with `[aria-describedby]`, moves to the same fields, so the feedback is read with them; `[attr.aria-describedby]` does not reach the fields.

### Filtered
Add filter callback functions to limit selectable values. The first choice in an empty picker fills the parts not picked yet with their first allowed values (seconds stay `0` without `seconds`), so it reports one time. In a 12-hour locale an empty picker shows the day period of the first allowed hour, a day period without allowed hours is disabled, and switching the day period keeps the hour 12 hours apart when it is allowed, otherwise it takes the first allowed hour of that day period.

### with Footer

## Non-english locale
### Auto

### Chinese

### Japanese

### Korean

{/*  ## Right to left support*/}
{/*  RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.*/}

### Hebrew

### Persian

## Accessibility

- The input is a combobox that opens a dialog with the time selection: it has `aria-haspopup="dialog"`, `aria-expanded`, and `aria-controls` pointing to the open menu, named by `ariaPopupLabel` (`Time selection`). _Added in 5.7.41._
- The roll columns are named by `ariaSelectHoursLabel`, `ariaSelectMinutesLabel`, `ariaSelectSecondsLabel` and `ariaSelectMeridiemLabel` (`Select hours`, `Select minutes`, `Select seconds`, `Select AM/PM`), and their values are options with `aria-selected`, named with the value and the column name (`07, Select hours`), so a screen reader says the unit when the focus moves between columns. The selects of the `select` variant get the same names, which take the place of a `<label>` wrapping the picker, so a picker with a visible label needs that label in these names, e.g. `ariaSelectHoursLabel="Start time, hours"`. _Added in 5.7.41._
- On a right-to-left page the columns read AM/PM, hours, minutes, seconds from the left, the way the time is written, and the arrow keys follow that order. _Added in 5.7.41._
- Closing the menu after using it (`Escape`, a button in the footer, a click outside) returns focus to the input. After a tap or a pen press in the menu an editable input does not get it back; a read-only input (`inputReadOnly`) does.

### Keyboard behavior

| Key | Action |
| --- | --- |
| `ArrowDown` or `Alt` + `ArrowDown` (`Option` on macOS) in the input | Read the typed text as leaving the input does, open the menu and move focus to the selected hour, or the first hour when none is selected _Added in 5.7.41._ |
| `Tab` / `Shift` + `Tab` | Move between the input and the columns, landing on each column's selected value, or its first value when none is selected; a time typed in the input is read first; tabbing out of the picker closes the menu |
| `ArrowDown` / `ArrowUp` on a value | Move to the next or previous value in the column |
| `Home` / `End` on a value | Move to the first or last value in the column _Added in 5.7.41._ |
| `ArrowLeft` / `ArrowRight` on a value | Move to the column on that side _Added in 5.7.41._ |
| `Enter` / `Space` on a value | Pick it. Then the focus moves to the next column in the order hours, minutes, seconds, AM/PM, and stays in the last one _Added in 5.7.41._ |
| `Escape` | Close the menu, focus the input |

## Forms

Angular handles user input through reactive and template-driven forms.
CoreUI Time Picker supports both types.

The picker updates its form control and emits `timeChange` once when the user changes the time or the page calls `clearTime()`. With the default `updateOn: 'change'`, a correction made in `valueChanges` is kept and is the time `timeChange` carries. Binding `time` or writing the form control updates the picker without either. A bound or written time that the filters or `seconds` do not allow is shown at the nearest allowed value, while the binding and the form keep the value they set until the user picks a time.

### Reactive

### Template-driven

## API reference

### TimePicker Module

```typescript
import { 
  TimePickerModule,
  DropdownModule,
  SharedModule
} from '@coreui/angular';

@NgModule({
    imports: [
      TimePickerModule,
      DropdownModule,
      SharedModule
    ]
})
export class AppModule() { }
```

### c-time-picker
_component_

```jsx
import { TimePickerComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `aria-describedby` | `string \| null` | `undefined` | Ids of the elements that describe the field, e.g. a hint or the validation message; set on the input or, in the `select` variant, on every select. A validation message hidden by CSS is still read, so bind its id only while the field is invalid: `[aria-describedby]="invalid ? 'feedback' : null"`. Set it as a static attribute, which is removed from the host, or bind `[aria-describedby]`; `[attr.aria-describedby]` does not reach the field. |
| `ariaPopupLabel` | `string` | `'Time selection'` | Accessible name of the menu with the time selection. |
| `ariaSelectHoursLabel` | `string` | `'Select hours'` | Accessible name of the hours column in the roll and of the hours select; each value in the column is named with the value and this text, e.g. `07, Select hours`. |
| `ariaSelectMeridiemLabel` | `string` | `'Select AM/PM'` | Accessible name of the AM/PM column in the roll and of the AM/PM select; each value in the column is named with the value and this text, e.g. `AM, Select AM/PM`. |
| `ariaSelectMinutesLabel` | `string` | `'Select minutes'` | Accessible name of the minutes column in the roll and of the minutes select; each value in the column is named with the value and this text, e.g. `05, Select minutes`. |
| `ariaSelectSecondsLabel` | `string` | `'Select seconds'` | Accessible name of the seconds column in the roll and of the seconds select; each value in the column is named with the value and this text, e.g. `30, Select seconds`. |
| `cleaner` | `boolean` | `true` | Toggle visibility or set the content of the cleaner button. |
| `dateTimeFormatOptions` | `DateTimeFormatOptions` | `{}` | Sets DateTime format options including timeZone |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. |
| `filterHours` | `object` | `undefined` | Filter available hours to pick. |
| `filterMinutes` | `object` | `undefined` | Filter available minutes to pick. |
| `filterSeconds` | `object` | `undefined` | Filter available seconds to pick. |
| `indicator` | `boolean` | `true` | Toggle visibility or set the content of the input indicator. |
| `inputReadOnly` | `boolean` | `false` | Toggle the readonly state for the component. |
| `locale` | `string` | `'default'` | Sets the default locale for components. If not set, it is inherited from the browser. |
| `placeholder` | `string` | `'Select time'` | Specifies a short hint visible in time input. |
| `seconds` | `boolean` | `false` | Toggle seconds visibility. |
| `size` | `'' \| 'sm' \| 'lg'` | `undefined` | Size the component small or large. |
| `time` | `string \| Date` | `undefined` | Initially selected time. A change updates the picker without emitting `timeChange` or reaching the form control. |
| `valid` | `boolean` | `undefined` | Validation state: `true` valid, `false` invalid, which also sets `aria-invalid="true"` on the input or, in the `select` variant, on every select, `undefined` none. |
| `variant` | `'roll' \| 'select'` | `'roll'` | Set the time picker variant to a roll or select. |
| `visible` | `boolean` | `false` | Toggle the visibility of dropdown timepicker menu component. |

### Events

| Name | Description |
| --- | --- |
| `timeChange` | Event emitted when the user changes the time or the page calls `clearTime()`, with the time the picker holds after the form control handled the change; the `time` input and form writes do not emit. |
