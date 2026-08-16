# Vue Form control Component API

> Explore the API reference for the Vue Form control component and discover how to effectively utilize its props for customization.

## CFormTextarea

```jsx
import { CFormTextarea } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `feedback` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingLabel` | `string` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `string` | - | Add a caption for a component. |
| `modelValue` | `string` | - | The default name for a value passed using v-model. |
| `plainText` | `boolean` | - | Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`. |
| `readonly` | `boolean` | - | Toggle the readonly state for the component. |
| `text` | `string` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Set component validation state to valid. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when the element loses focus, after the content has been changed. |
| `input` | Event occurs immediately after the value of a component has changed. |
| `update:modelValue` | Emit the new value whenever there’s an input or change event. |

## CFormFeedback

```jsx
import { CFormFeedback } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `invalid` | `boolean` | - | Method called immediately after the `value` prop changes. |
| `tooltip` | `boolean` | - | If your form layout allows it, you can display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Set component validation state to valid. |

## CFormLabel

```jsx
import { CFormLabel } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClassName` | `array\|string` | - | A string of all className you want to be applied to the component, and override standard className value. |

## CFormText

```jsx
import { CFormText } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |
