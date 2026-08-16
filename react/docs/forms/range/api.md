# React Form Range Component API

> Explore the API reference for the React Form Range component and discover how to effectively utilize its props for customization.

## CFormRange

```jsx
import { CFormRange } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `disabled` | `boolean \| undefined` | - | Toggle the disabled state for the component. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `max` | `number \| undefined` | - | Specifies the maximum value for the component. |
| `min` | `number \| undefined` | - | Specifies the minimum value for the component. |
| `onChange` | `ChangeEventHandler<HTMLInputElement> \| undefined` | - | Method called immediately after the `value` prop changes. |
| `readOnly` | `boolean \| undefined` | - | Toggle the readonly state for the component. |
| `step` | `number \| undefined` | - | Specifies the interval between legal numbers in the component. |
| `value` | `string \| number \| string[] \| undefined` | - | The `value` attribute of component. |
