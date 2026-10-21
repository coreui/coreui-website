# React Switch Component API

> Explore the API reference for the React Switch component and discover how to effectively utilize its props for customization.

## CSwitch

```jsx
import { CSwitch } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the input. |
| `label` | `ReactNode` | - | The label rendered after the input, already wired to it with `htmlFor`. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the checked state, or the form is reset, while `validationState` is set. A given state is a verdict on the choice it was given for; clear it here to let the browser's own validation show again. |
| `size` | `"sm" \| "lg" \| "xl"` | - | Size the switch small, large or extra large. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the checked state to one of CoreUI’s themed colors. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the checked state asks to drop it through `onValidationStateChange`. |

## CFormSwitch

```jsx
import { CFormSwitch } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | The element represents a caption for a component. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the checked state, or the form is reset, while `validationState` (or the deprecated `invalid`) is set. A given state is a verdict on the choice it was given for; clear it here to let the browser's own validation show again. |
| `reverse` | `boolean` | - | Put switch on the opposite side. |
| `size` | `"lg" \| "xl"` | - | Size the component large or extra large. Works only with `switch`. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `type` | `"checkbox" \| "radio"` | `checkbox` | Specifies the type of component. |
| `valid` | `boolean` | - | Set component validation state to valid. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the checked state asks to drop it through `onValidationStateChange`. |
