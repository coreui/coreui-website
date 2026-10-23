# React Number Input Component API

> Explore the API reference for the React Number Input component and discover how to effectively utilize its props for customization.

## CNumberInput

```jsx
import { CNumberInput } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaDecrementLabel` | `string` | `Decrease` | Sets the accessible label (`aria-label`) of the button that decreases the value. |
| `ariaIncrementLabel` | `string` | `Increase` | Sets the accessible label (`aria-label`) of the button that increases the value. |
| `className` | `string` | - | Adds a custom class name to the React Number Input. |
| `decrementIcon` | `ReactNode` | - | The artwork of the button that decreases the value. Defaults to a minus drawn on `currentColor`. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `ReactNode` | - | Provide a floating label for the component — the text rests inside the field and floats once it has focus or a value. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `incrementIcon` | `ReactNode` | - | The artwork of the button that increases the value. Defaults to a plus drawn on `currentColor`. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `onChange` | `ChangeEventHandler<HTMLInputElement, HTMLInputElement>` | - | Method called on the native `change` event of the input. A form reset or a controlled `value` does not call it. |
| `onInput` | `InputEventHandler<HTMLInputElement>` | - | Method called on every `input` event of the field. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the value, or the form is reset, while `validationState` is set. A given state is a verdict on the value it was given for; clear it here to let the browser's own validation show again. |
| `repeat` | `boolean` | `true` | Repeats the step while a button is held. Set to `false` to require a click per step. |
| `size` | `"sm" \| "lg"` | - | Sizes the control, the way `.form-control-sm` and `.form-control-lg` size a form control. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the value asks to drop it through `onValidationStateChange`. |
