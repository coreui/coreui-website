# React Radio Component API

> Explore the API reference for the React Radio component and discover how to effectively utilize its props for customization.

## CRadio

```jsx
import { CRadio } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the input. |
| `label` | `ReactNode` | - | The label rendered after the input, already wired to it with `htmlFor`. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the checked state, or the form is reset, while `validationState` is set. A given state is a verdict on the choice it was given for; clear it here to let the browser's own validation show again. |
| `size` | `"sm" \| "lg"` | - | Size the radio small or large. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the checked state to one of CoreUI’s themed colors. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the checked state asks to drop it through `onValidationStateChange`. |

## CFormCheck

```jsx
import { CFormCheck } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `button` | `ButtonObject` | - | Create button-like checkboxes and radio buttons. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `floatingLabel` | `ReactNode` | - | Provide a floating label for the component — the text rests inside the field and floats once it has focus or a value. |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `indeterminate` | `boolean` | - | Input Checkbox indeterminate Property. |
| `inline` | `boolean` | - | Group checkboxes or radios on the same horizontal row. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | The element represents a caption for a component. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the checked state, or the form is reset, while `validationState` (or the deprecated `invalid`) is set. A given state is a verdict on the choice it was given for; clear it here to let the browser's own validation show again. |
| `reverse` | `boolean` | - | Put checkboxes or radios on the opposite side. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `type` | `"checkbox" \| "radio"` | `checkbox` | Specifies the type of component. |
| `valid` | `boolean` | - | Set component validation state to valid. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the checked state asks to drop it through `onValidationStateChange`. |
