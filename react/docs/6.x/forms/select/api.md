# React Form Select Component API

> Explore the API reference for the React Form Select component and discover how to effectively utilize its props for customization.

## CFormSelect

```jsx
import { CFormSelect } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `ReactNode` | - | Provide a floating label for the component — the text rests inside the field and floats once it has focus or a value. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `htmlSize` | `number` | - | Specifies the number of visible options in a drop-down list. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `onChange` | `ChangeEventHandler<HTMLSelectElement>` | - | Method called immediately after the `value` prop changes. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the value, or the form is reset, while `validationState` (or the deprecated `invalid`) is set. A given state is a verdict on the value it was given for; clear it here to let the browser's own validation show again. |
| `options` | `Option[] \| string[]` | - | Options list of the select component. Available keys: `label`, `value`, `disabled`. Examples: - `options={[{ value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML', disabled: true }]}` - `options={['js', 'html']}` |
| `size` | `"sm" \| "lg"` | - | Size the component small or large. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the value asks to drop it through `onValidationStateChange`. |
| `value` | `string \| number \| string[]` | - | The `value` attribute of component. |

## CFormFeedback

```jsx
import { CFormFeedback } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `div` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `invalid` | `boolean` | - | Style the feedback as the invalid message. |
| `tooltip` | `boolean` | - | If your form layout allows it, you can display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Style the feedback as the valid message. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state this feedback belongs to, rendered as the `{state}-feedback` (or `{state}-tooltip`) class. Any custom state declared in the `$form-validation-states` Sass map is accepted. |

## CFormLabel

```jsx
import { CFormLabel } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `customClassName` | `string` | - |  |

## CFormText

```jsx
import { CFormText } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `div` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
