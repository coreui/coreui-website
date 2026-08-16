# Vue Sidebar Component API

> Explore the API reference for the Vue Sidebar component and discover how to effectively utilize its props for customization.

## CSidebar

```jsx
import { CSidebar } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `colorScheme` | `string` | `undefined` | Sets if the color of text should be colored for a light or dark dark background. |
| `narrow` | `boolean` | - | Make sidebar narrow. |
| `overlaid` | `boolean` | - | Set sidebar to overlaid variant. |
| `placement` | `string` | `undefined` | Components placement, there’s no default placement. |
| `position` | `string` | - | Place sidebar in non-static positions. |
| `size` | `string` | - | Size the component small, large, or extra large. |
| `unfoldable` | `boolean` | - | Expand narrowed sidebar on hover. |
| `visible` | `boolean` | `undefined` | Toggle the visibility of sidebar component. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired when the component requests to be hidden. |
| `show` | Callback fired when the component requests to be shown. |
| `visible-change` | Event emitted after visibility of component changed. |

## CSidebarNav

```jsx
import { CSidebarNav } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string \| Component` | `'ul'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `compact` | `boolean` | - | Make navigation more compact by cutting link padding in half. |
| `variant` | `'tree'` | `undefined` | Sets the navigation variant. |
