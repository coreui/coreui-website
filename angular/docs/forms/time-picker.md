# Angular Time Picker Component

> Create consistent cross-browser and cross-device Angular time picker.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=angular&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Examples

### Sizing
Set heights using `size` property like `size="lg"` and `size="sm"`.

### Disabled
Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

### Typing a time
The input reads a time typed the way the picker shows it in its `locale`, with the locale's digits and day periods (`9:05 PM`, `오후 9:05`, `۲۱:۰۵`), as well as 24-hour time (`21:05`), a dot as the separator (`21.05`) and `AM`/`PM` in any letter case. A time without a day period is read as 24-hour time. The time is read when the input changes (<kbd>Enter</kbd> or leaving the input), each part snaps to the nearest value allowed by its filter, and seconds are kept only with `seconds`. Text that is not a time clears the picker.

A string bound to `time` or written by a form control is read the same way, along with ISO times and date-times (`15:30:00`, `2026-01-05T15:30:00`, `2026-01-05 15:30:00`). A string in the locale's own format is read with the picker's `locale`, also when the locale arrives later; a time already read, picked or cleared stays when only `locale` changes.

The picker reports a `Date`. A time without a date, from a time string or picked or typed into an empty picker, is set on 1 January 1970; a time string with a UTC offset (`15:30Z`, `15:30+02:00`) is that moment on 1 January 1970, so its local date can be a day earlier or later. A picked or typed time keeps the date of the time it replaces. A `Date` bound to `time` or written by a form control keeps its moment, also when it comes from another window or frame, and so does a date-time string (`2026-01-05T15:30:00`). To store or send a time without a date, use its hours, minutes and, with `seconds`, seconds rather than `toISOString()`: the UTC offset of 1 January 1970 can differ from today's.

### Readonly
Add the `inputReadOnly` boolean attribute to prevent modification of the input value.

### Validation
Set `valid` to show the validation state. `[valid]="false"` also sets `aria-invalid="true"` on the input or, in the `select` variant, on every select. `aria-describedby` on `c-time-picker`, as a static attribute or bound with `[aria-describedby]`, moves to the same fields, so the feedback is read with them; `[attr.aria-describedby]` does not reach the fields.

### Filtered
Add filter callback functions to limit selectable values.

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

- Closing the menu after using it (`Escape`, a button in the footer, a click outside) returns focus to the input. After a tap or a pen press in the menu an editable input does not get it back; a read-only input (`inputReadOnly`) does.

## Forms

Angular handles user input through reactive and template-driven forms.
CoreUI Time Picker supports both types.

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
| `time` | `string \| Date` | `undefined` | Initially selected time. |
| `valid` | `boolean` | `undefined` | Validation state: `true` valid, `false` invalid, which also sets `aria-invalid="true"` on the input or, in the `select` variant, on every select, `undefined` none. |
| `variant` | `'roll' \| 'select'` | `'roll'` | Set the time picker variant to a roll or select. |
| `visible` | `boolean` | `false` | Toggle the visibility of dropdown timepicker menu component. |

### Events

| Name | Description |
| --- | --- |
| `timeChange` | Event emitted on `time` change by the user or the `time` input; form writes do not emit. |
