# Angular Time Picker Component

> Create consistent cross-browser and cross-device Angular time picker.

## Examples

### Sizing
Set heights using `size` property like `size="lg"` and `size="sm"`.

### Disabled
Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

### Readonly
Add the `inputReadOnly` boolean attribute to prevent modification of the input value.

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
| `cleaner` | `boolean` | `true` | Toggle visibility or set the content of the cleaner button. |
| `dateTimeFormatOptions` | `DateTimeFormatOptions` | `{}` | Sets DateTime format options including timeZone |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. |
| `filterHours` | `object` | `undefined` | Filter available hours to pick. |
| `filterMinutes` | `object` | `undefined` | Filter available minutes to pick. |
| `filterSeconds` | `object` | `undefined` | Filter available seconds to pick. |
| `indicator` | `boolean` | `true` | Toggle visibility or set the content of the input indicator. |
| `inputReadOnly` | `boolean` | `false` | Toggle the readonly state for the component. |
| `locale` | `string` | `default` | Sets the default locale for components. If not set, it is inherited from the browser. |
| `placeholder` | `string` | `'Select time'` | Specifies a short hint visible in time input. |
| `seconds` | `boolean` | `false` | Toggle seconds visibility. |
| `size` | `string` | `undefined` | Size the component small or large. |
| `time` | `Date` | `undefined` | Initially selected time. |
| `valid` | `boolean` | `undefined` | Toggle visual validation feedback. |
| `variant` | `'roll' \| 'select'` | `'roll'` | Set the time picker variant to a roll or select. |
| `visible` | `boolean` | `false` | Toggle the visibility of dropdown timepicker menu component. |

### Events

| Name | Description |
| --- | --- |
| `timeChange` | Event emitted on `time` change. |
