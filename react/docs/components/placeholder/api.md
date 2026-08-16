# React Placeholder Component API

> Explore the API reference for the React Placeholder component and discover how to effectively utilize its props for customization.

## CPlaceholder

```jsx
import { CPlaceholder } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `"glow" \| "wave" \| undefined` | - | Set animation type to better convey the perception of something being actively loaded. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "span") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `span` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `lg` | `number \| undefined` | - | The number of columns on large devices (<1200px). |
| `md` | `number \| undefined` | - | The number of columns on medium devices (<992px). |
| `size` | `"xs" \| "sm" \| "lg" \| undefined` | - | Size the component extra small, small, or large. |
| `sm` | `number \| undefined` | - | The number of columns on small devices (<768px). |
| `xl` | `number \| undefined` | - | The number of columns on X-Large devices (<1400px). |
| `xs` | `number \| undefined` | - | The number of columns on extra small devices (<576px). |
| `xxl` | `number \| undefined` | - | The number of columns on XX-Large devices (≥1400px). |
