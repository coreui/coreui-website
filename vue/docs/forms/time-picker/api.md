# Vue Time Picker Component API

> Explore the API reference for the Vue Time Picker component and discover how to effectively utilize its props for customization.

## CTimePicker

```jsx
import { CTimePicker } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ampm` | `boolean \| 'auto'` | `'auto'` | Set if the component should use the 12/24 hour format. If `true` forces the interface to a 12-hour format. If `false` forces the interface into a 24-hour format. If `auto` the current locale will determine the 12 or 24-hour interface by default locales. |
| `ariaSelectHoursLabel` | `string` | - | Accessible label for the hours selection element. |
| `ariaSelectMeridiemLabel` | `string` | - | Accessible label for the AM/PM selection element. |
| `ariaSelectMinutesLabel` | `string` | - | Accessible label for the minutes selection element. |
| `ariaSelectSecondsLabel` | `string` | - | Accessible label for the seconds selection element. |
| `cancelButton` | `boolean\|string` | `'Cancel'` | Toggle visibility or set the content of cancel button. |
| `cancelButtonColor` | `string` | `'primary'` | Sets the color context of the cancel button to one of CoreUI’s themed colors. |
| `cancelButtonSize` | `string` | `'sm'` | Size the cancel button small or large. |
| `cancelButtonVariant` | `string` | `'ghost'` | Set the cancel button variant to an outlined button or a ghost button. |
| `cleaner` | `boolean` | `true` | Toggle visibility of the cleaner button. |
| `confirmButton` | `boolean\|string` | `'OK'` | Toggle visibility or set the content of confirm button. |
| `confirmButtonColor` | `string` | `'primary'` | Sets the color context of the confirm button to one of CoreUI’s themed colors. |
| `confirmButtonSize` | `string` | `'sm'` | Size the confirm button small or large. |
| `confirmButtonVariant` | `string` | - | Set the confirm button variant to an outlined button or a ghost button. |
| `container` | `'dropdown' \| 'inline' \| string \| HTMLElement \| (() => HTMLElement) \| null` | `'dropdown'` | Set container type for the component, or the element the dropdown is rendered into. - `'dropdown'` - the component is rendered as a dropdown (default), - `'inline'` - the component is rendered inline, without a dropdown, - an HTML element, a CSS selector, or a function that returns a single element - the dropdown is rendered inside that element. Implies `teleport`. **[Added in v5.21.0]** |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `feedback` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `hours` | `number[] \| ((hour: number) => number[])` | - | Specify a list of available hours using an array, or customize the filtering of hours through a function. |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `indicator` | `boolean` | `true` | Toggle visibility or set the content of the input indicator. |
| `inputOnChangeDelay` | `number` | `750` | Defines the delay (in milliseconds) for the input field's onChange event. |
| `inputReadOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `invalid` | `boolean` | `undefined` | Set component validation state to invalid. |
| `label` | `string` | - | Add a caption for a component. |
| `locale` | `string` | `'default'` | Sets the default locale for components. If not set, it is inherited from the navigator.language. |
| `minutes` | `number[] \| ((hour: number) => number[]) \| boolean` | `true` | Toggle the display of minutes, specify a list of available minutes using an array, or customize the filtering of minutes through a function. |
| `name` | `string` | - | Set the name attribute for the input element. |
| `placeholder` | `string` | `'Select time'` | Specifies a short hint that is visible in the input. |
| `required` | `boolean` | - | When present, it specifies that must be filled out before submitting the form. |
| `seconds` | `number[] \| ((hour: number) => number[]) \| boolean` | `true` | Toggle the display of seconds, specify a list of available seconds using an array, or customize the filtering of seconds through a function. |
| `size` | `string` | `undefined` | Size the component small or large. |
| `teleport` | `boolean` | `false` | Generates dropdown menu using Teleport. |
| `text` | `string` | - | Add helper text to the component. |
| `time` | `date\|string` | - | Initial selected time. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | `undefined` | Set component validation state to valid. |
| `variant` | `string` | `'roll'` | Set the time picker variant to a roll or select. |
| `visible` | `boolean` | - | Toggle the visibility of the component. |

### Events

| Name | Description |
| --- | --- |
| `change` | Callback fired when the time changed. |
| `hide` | Callback fired when the component requests to be hidden. |
| `show` | Callback fired when the component requests to be shown. |
| `update:time` | Callback fired when the time changed. |
