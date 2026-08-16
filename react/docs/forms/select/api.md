# React Form Select Component API

> Explore the API reference for the React Form Select component and discover how to effectively utilize its props for customization.

## CFormSelect

```jsx
import { CFormSelect } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `feedback` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `ReactNode` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingClassName` | `string \| undefined` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `ReactNode` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `htmlSize` | `number \| undefined` | - | Specifies the number of visible options in a drop-down list. |
| `invalid` | `boolean \| undefined` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `onChange` | `ChangeEventHandler<HTMLSelectElement> \| undefined` | - | Method called immediately after the `value` prop changes. |
| `options` | `Option[] \| string[] \| undefined` | - | Options list of the select component. Available keys: `label`, `value`, `disabled`. Examples: - `options={[{ value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML', disabled: true }]}` - `options={['js', 'html']}` |
| `size` | `"sm" \| "lg" \| undefined` | - | Size the component small or large. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean \| undefined` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean \| undefined` | - | Set component validation state to valid. |
| `value` | `string \| number \| string[] \| undefined` | - | The `value` attribute of component. |

## CFormFeedback

```jsx
import { CFormFeedback } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `div` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `invalid` | `boolean \| undefined` | - | Method called immediately after the `value` prop changes. |
| `tooltip` | `boolean \| undefined` | - | If your form layout allows it, you can display validation feedback in a styled tooltip. |
| `valid` | `boolean \| undefined` | - | Set component validation state to valid. |

## CFormLabel

```jsx
import { CFormLabel } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `customClassName` | `string \| undefined` | - | A string of all className you want to be applied to the component, and override standard className value. |

## CFormText

```jsx
import { CFormText } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `div` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
