# React Chip Input Component API

> Explore the API reference for the React Chip Input component and all available CChipInput props.

## CChipInput

```jsx
import { CChipInput } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaAddedAnnouncement` | `string \| ((values: string[]) => string)` | `'added'` | Sets the wording announced when chips are added: a word that follows their values, joined with commas, or a function that receives the values and returns the whole message. |
| `ariaRemovedAnnouncement` | `string \| ((values: string[]) => string)` | `'removed'` | Sets the wording announced when chips are removed: a word that follows their values, joined with commas, or a function that receives the values and returns the whole message. |
| `ariaRemoveLabel` | `string \| ((label: string) => string)` | `Remove` | Names each chip's remove button with the chip's value: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` (`Remove React`); a function receives the value and returns the whole name. |
| `children` | `ReactNode` | - | Declarative `CChip` children used as the initial chips. Their values seed the uncontrolled value when `defaultValue` is not provided (parity with the vanilla Chip Input). |
| `chipClassName` | `ChipClassName` | - | Adds custom classes to chips rendered by the React Chip Input component. Accepts a static className or a resolver function based on chip value. |
| `className` | `string` | - | Adds custom classes to the React Chip Input component root element. |
| `createOnBlur` | `boolean` | `true` | Creates a new chip when the React Chip Input component loses focus with a pending value. |
| `defaultValue` | `string[]` | `[]` | Sets the initial uncontrolled values rendered by the React Chip Input component. |
| `disabled` | `boolean` | - | Disables the React Chip Input component and prevents adding, removing, or selecting chips. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `filter` | `boolean` | - | Renders the chips as filter chips, each showing a leading check icon while selected. Implies `selectable`. |
| `id` | `string` | - | Sets the `id` of the internal text input rendered by the React Chip Input component. |
| `label` | `ReactNode` | - | Renders an inline label inside the React Chip Input component container. |
| `maxChips` | `number \| null` | - | Sets the maximum number of chips that can be created in the React Chip Input component. |
| `name` | `string` | - | Name of the hidden field the chips are submitted under, separated by commas. Without it the chips are not submitted with the form. |
| `onAdd` | `((value: string) => void)` | - | Callback fired when the React Chip Input component adds a new chip. |
| `onChange` | `((values: string[]) => void)` | - | Callback fired when the value list of the React Chip Input component changes. |
| `onInput` | `((value: string) => void)` | - | Callback fired when the internal text input value changes in the React Chip Input component. |
| `onRemove` | `((value: string) => void)` | - | Callback fired when the React Chip Input component removes a chip. |
| `onSelect` | `((selected: string[]) => void)` | - | Callback fired when the selected chip values change in the React Chip Input component. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user adds or removes a chip, or the form is reset, while `validationState` is set. A given state is a verdict on the chips it was given for; clear it here to let the browser's own validation show again. |
| `placeholder` | `string` | - | Sets placeholder text for the internal input of the React Chip Input component. |
| `readOnly` | `boolean` | - | Makes the React Chip Input component readonly while keeping values visible. |
| `removable` | `boolean` | `true` | Displays remove buttons on chips managed by the React Chip Input component. |
| `required` | `boolean` | - | Makes the hidden field that carries the chips required, so an empty React Chip Input component blocks the submit, and marks the text input `aria-required`. |
| `selectable` | `boolean` | - | Enables chip selection behavior in the React Chip Input component. |
| `selectionMode` | `"single" \| "multiple"` | - | Sets how many chips can be selected at once in the React Chip Input component. |
| `separator` | `string \| null` | `,` | Sets the separator character used to create chips while typing or pasting in the React Chip Input component. |
| `size` | `"sm" \| "lg"` | - | Sets the size of the React Chip Input component to small or large. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class on the frame; `'invalid'` also sets `aria-invalid` on the text input and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the chips asks to drop it through `onValidationStateChange`. |
| `value` | `string[]` | - | Controls the values rendered by the React Chip Input component. |
