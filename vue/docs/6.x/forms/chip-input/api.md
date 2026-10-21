# Vue Chip Input Component API

> Explore the API reference for the Vue Chip Input component and discover how to effectively utilize its props for customization.

## CChipInput

```jsx
import { CChipInput } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaAddedAnnouncement` | `string \| ((values: string[]) => string)` | `'added'` | Sets the wording announced when chips are added: a word that follows their values, joined with commas, or a function that receives the values and returns the whole message. |
| `ariaRemovedAnnouncement` | `string \| ((values: string[]) => string)` | `'removed'` | Sets the wording announced when chips are removed: a word that follows their values, joined with commas, or a function that receives the values and returns the whole message. |
| `ariaRemoveLabel` | `string \| ((label: string) => string)` | `'Remove'` | Names each chip's remove button with the chip's value: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` (`Remove Vue`); a function receives the value and returns the whole name. |
| `chipClassName` | `ChipClassName` | `undefined` | Adds custom classes to chips rendered by the component. Accepts a static className or a resolver function based on chip value. |
| `createOnBlur` | `boolean` | `true` | Creates a new chip when the component loses focus with a pending value. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `feedback` | `string` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `string` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `string` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `filter` | `boolean` | - | Renders the chips as filter chips, each showing a leading check icon while selected. Implies `selectable`. |
| `id` | `string` | - | Sets the `id` of the internal text input rendered by the component. |
| `label` | `string\|object` | - | Renders an inline label inside the component container. |
| `maxChips` | `number` | `null` | Sets the maximum number of chips that can be created in the component. |
| `modelValue` | `string[]` | `undefined` | The default name for a value passed using v-model. |
| `name` | `string` | - | Name of the hidden field the chips are submitted under, separated by commas. Without it the chips are not submitted with the form. |
| `placeholder` | `string` | `''` | Sets placeholder text for the internal input of the component. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `removable` | `boolean` | `true` | Displays remove buttons on chips managed by the component. |
| `required` | `boolean` | - | Makes the hidden field that carries the chips required, so an empty component blocks the submit, and marks the text input `aria-required`. |
| `selectable` | `boolean` | - | Enables chip selection behavior in the component. |
| `selectionMode` | `string` | `'multiple'` | Sets how many chips can be selected at once. |
| `separator` | `string` | `','` | Sets the separator character used to create chips while typing or pasting in the component. |
| `size` | `string` | - | Size the component small or large. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class on the frame; `'invalid'` also sets `aria-invalid` on the text input and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the chips emits `update:validationState` with `undefined`. |

### Events

| Name | Description |
| --- | --- |
| `add` | Event occurs when the component adds a new chip. |
| `change` | Event occurs when the value list changes. |
| `input` | Event occurs when the internal text input value changes. |
| `remove` | Event occurs when the component removes a chip. |
| `select` | Event occurs when the selected chip values change. |
| `update:modelValue` | Emit the new value whenever there's a change. |
| `update:validationState` | Event occurs with `undefined` when the user adds or removes a chip, or the form is reset, while `validationState` is set. A given state is a verdict on the chips it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |
