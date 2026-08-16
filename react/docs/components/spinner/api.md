# React Spinner Component API

> Explore the API reference for the React Spinner component and discover how to effectively utilize its props for customization.

## CSpinner

```jsx
import { CSpinner } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `div` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `size` | `"sm" \| undefined` | - | Size the component small. |
| `variant` | `"border" \| "grow" \| undefined` | `border` | Set the button variant to an outlined button or a ghost button. |
| `visuallyHiddenLabel` | `string \| undefined` | `Loading...` | Set visually hidden label for accessibility purposes. |
