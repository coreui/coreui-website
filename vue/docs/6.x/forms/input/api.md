# Vue Form input Component API

> Explore the API reference for the Vue Form input component and discover how to effectively utilize its props for customization.

## CFormInput

```jsx
import { CFormInput } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `feedback` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingLabel` | `string` | - | Provide a floating label for the component — the text rests inside the field and floats once it has focus or a value. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `string` | - | Add a caption for a component. |
| `modelValue` | `File\|number\|string` | - | The default name for a value passed using v-model. |
| `plainText` | `boolean` | - | Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`. |
| `readonly` | `boolean` | - | Toggle the readonly state for the component. |
| `size` | `string` | - | Size the component small or large. |
| `text` | `string` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `type` | `string` | `'text'` | Specifies the type of component. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the value emits `update:validationState` with `undefined`. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when the element loses focus, after the content has been changed. |
| `input` | Event occurs immediately after the value of a component has changed. |
| `update:modelValue` | Emit the new value whenever there’s an input or change event. |
| `update:validationState` | Event occurs with `undefined` when the user changes the value, or the form is reset, while `validationState` (or the deprecated `invalid`) is set. A given state is a verdict on the value it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |

## CFormFeedback

```jsx
import { CFormFeedback } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `invalid` | `boolean` | - | Style the feedback as the invalid message. |
| `tooltip` | `boolean` | - | If your form layout allows it, you can display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Style the feedback as the valid message. |
| `validationState` | `string` | - | The validation state this feedback belongs to, rendered as the `{state}-feedback` (or `{state}-tooltip`) class. Any custom state declared in the `$form-validation-states` Sass map is accepted. |

## CFormLabel

```jsx
import { CFormLabel } from '@coreui/vue'
```

## CFormText

```jsx
import { CFormText } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |
