# React Time Picker Component API

> Explore the API reference for the React Time Picker component and discover how to effectively utilize its props for customization.

## CTimePicker

```jsx
import { CTimePicker } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ampm` | `boolean \| "auto"` | `auto` | Set if the component should use the 12/24 hour format. If `true` forces the interface to a 12-hour format. If `false` forces the interface into a 24-hour format. If `auto` the current locale will determine the 12 or 24-hour interface by default locales. |
| `ariaSelectHoursLabel` | `string` | `Select hours` | Accessible label for the hours selection element. |
| `ariaSelectMeridiemLabel` | `string` | `Select AM/PM` | Accessible label for the AM/PM selection element. |
| `ariaSelectMinutesLabel` | `string` | `Select minutes` | Accessible label for the minutes selection element. |
| `ariaSelectSecondsLabel` | `string` | `Select seconds` | Accessible label for the seconds selection element. |
| `cancelButton` | `ReactNode` | `Cancel` | Toggle visibility or set the content of cancel button. |
| `cancelButtonColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | `primary` | Sets the color context of the cancel button to one of CoreUI’s themed colors. |
| `cancelButtonSize` | `"sm" \| "lg"` | `sm` | Size the cancel button small or large. |
| `cancelButtonVariant` | `"outline" \| "ghost"` | `ghost` | Set the cancel button variant to an outlined button or a ghost button. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `cleaner` | `ReactNode` | `true` | Toggle visibility or set the content of the cleaner button. |
| `confirmButton` | `ReactNode` | `OK` | Toggle visibility or set the content of confirm button. |
| `confirmButtonColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | `primary` | Sets the color context of the confirm button to one of CoreUI’s themed colors. |
| `confirmButtonSize` | `"sm" \| "lg"` | `sm` | Size the confirm button small or large. |
| `confirmButtonVariant` | `"outline" \| "ghost"` | - | Set the confirm button variant to an outlined button or a ghost button. |
| `container` | `Element \| "dropdown" \| "inline" \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | `dropdown` | Set container type for the component, or the element the dropdown is rendered into. - `'dropdown'` - the component is rendered as a dropdown (default), - `'inline'` - the component is rendered inline, without a dropdown, - an HTML element, or a function that returns a single element - the dropdown is rendered inside that element instead of `document.body`. Implies `portal`. **[Added in v5.28.0]** |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `dropdownClassNames` | `string` | - | A string of all className you want applied to the dropdown menu. |
| `feedback` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `ReactNode` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `footer` | `boolean` | `true` | Toggle visibility of footer element. |
| `footerContent` | `ReactNode` | - | Add custom elements to the footer. |
| `hours` | `number[] \| ((hour: number) => number[])` | - | Specify a list of available hours using an array, or customize the filtering of hours through a function. |
| `id` | `string` | - | Set the id attribute for the input element. |
| `indicator` | `ReactNode` | `true` | Toggle visibility or set the content of the input indicator. |
| `inputOnChangeDelay` | `number` | `750` | Defines the delay (in milliseconds) for the input field's onChange event. |
| `inputReadOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `locale` | `string` | `default` | Sets the default locale for components. If not set, it is inherited from the browser. |
| `minutes` | `boolean \| number[] \| ((minute: number) => number[])` | `true` | Toggle the display of minutes, specify a list of available minutes using an array, or customize the filtering of minutes through a function. |
| `name` | `string` | - | Set the name attribute for the input element. |
| `onHide` | `(() => void)` | - | Callback fired when the component requests to be hidden. |
| `onShow` | `(() => void)` | - | Callback fired when the component requests to be shown. |
| `onTimeChange` | `((timeString: string \| null, localeTimeString?: string \| undefined, date?: Date \| undefined) => void)` | - | Callback fired when the time changed. |
| `placeholder` | `string` | `Select time` | Specifies a short hint that is visible in the input. |
| `portal` | `boolean` | `false` | Generates dropdown menu using createPortal. |
| `required` | `boolean` | - | When present, it specifies that time must be filled out before submitting the form. |
| `seconds` | `boolean \| number[] \| ((second: number) => number[])` | `true` | Toggle the display of seconds, specify a list of available seconds using an array, or customize the filtering of seconds through a function. |
| `size` | `"sm" \| "lg"` | - | Size the component small or large. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `time` | `string \| Date \| null` | - | Initial selected time. |
| `toggler` | `ReactNode` | - | The content of toggler. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Set component validation state to valid. |
| `variant` | `"roll" \| "select"` | `roll` | Set the time picker variant to a roll or select. |
| `visible` | `boolean` | - | Toggle the visibility of dropdown menu component. |
