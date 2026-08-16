# React Rating Component API

> Explore the API reference for the React Rating component and discover how to effectively utilize its props for customization.

## CRating

```jsx
import { CRating } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeIcon` | `string \| Element \| Icon \| undefined` | - | The default icon to display when the item is selected. |
| `allowClear` | `boolean \| undefined` | - | Enables the clearing upon clicking the selected item again. |
| `ariaLabel` | `((value: number, itemCount: number) => string) \| undefined` | `(value, itemCount) => `${value} of ${itemCount}`` | A function that returns the accessible label (`aria-label`) for each rating item's radio input. Receives the item's value and the total item count. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `disabled` | `boolean \| undefined` | - | Toggle the disabled state for the component. |
| `highlightOnlySelected` | `boolean \| undefined` | - | If enabled, only the currently selected icon will be visibly highlighted. |
| `icon` | `string \| Element \| Icon \| undefined` | - | The default icon to display when the item is not selected. |
| `itemCount` | `number \| undefined` | `5` | Specifies the total number of stars to be displayed in the star rating component. This property determines the scale of the rating, such as out of 5 stars, 10 stars, etc. |
| `name` | `string \| undefined` | - | The name attribute of the radio input elements. |
| `onChange` | `((value: number \| null) => void) \| undefined` | - | Execute a function when a user changes the selected element. |
| `onHover` | `((value: number \| null) => void) \| undefined` | - | Execute a function when a user hover the element. |
| `precision` | `number \| undefined` | `1` | Minimum increment value change allowed. |
| `readOnly` | `boolean \| undefined` | - | Toggle the readonly state for the component. |
| `size` | `"sm" \| "lg" \| "custom" \| undefined` | - | Size the component small, large, or custom if you define custom icons with custom height. |
| `tooltips` | `boolean \| string[] \| undefined` | - | Enable tooltips with default values or set specific labels for each icon. |
| `value` | `number \| undefined` | - | The `value` attribute of component. |
