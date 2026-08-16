# React Badge Component API

> Explore the API reference for the React Badge component and discover how to effectively utilize its props for customization.

## CBadge

```jsx
import { CBadge } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "span") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `span` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| 'primary-gradient' \| 'secondary-gradient' \| 'success-gradient' \| 'danger-gradient' \| 'warning-gradient' \| 'info-gradient' \| 'dark-gradient' \| 'light-gradient' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `position` | `"top-start" \| "top-end" \| "bottom-end" \| "bottom-start"` | - | Position badge in one of the corners of a link or button. |
| `shape` | `'rounded' \| 'rounded-top' \| 'rounded-end' \| 'rounded-bottom' \| 'rounded-start' \| 'rounded-circle' \| 'rounded-pill' \| 'rounded-0' \| 'rounded-1' \| 'rounded-2' \| 'rounded-3' \| string` | - | Select the shape of the component. |
| `size` | `"sm"` | - | Size the component small. |
| `textBgColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. |
| `textColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| 'primary-emphasis' \| 'secondary-emphasis' \| 'success-emphasis' \| 'danger-emphasis' \| 'warning-emphasis' \| 'info-emphasis' \| 'light-emphasis' \| 'body' \| 'body-emphasis' \| 'body-secondary' \| 'body-tertiary' \| 'black' \| 'black-50' \| 'white' \| 'white-50' \| string` | - | Sets the text color of the component to one of CoreUI’s themed colors. |
