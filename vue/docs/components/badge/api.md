# Vue Badge Component API

> Explore the API reference for the Vue Badge component and discover how to effectively utilize its props for customization.

## CBadge

```jsx
import { CBadge } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'span'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `position` | `string` | - | Position badge in one of the corners of a link or button. |
| `shape` | `Shape` | - | Select the shape of the component. |
| `size` | `string` | - | Size the component small. |
| `textBgColor` | `Color` | - | Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. |
| `textColor` | `TextColor` | - | Sets the text color of the component to one of CoreUI’s themed colors. |
