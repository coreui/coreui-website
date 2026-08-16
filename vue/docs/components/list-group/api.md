# Vue List group Component API

> Explore the API reference for the Vue List group component and discover how to effectively utilize its props for customization.

## CListGroup

```jsx
import { CListGroup } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'ul'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `flush` | `boolean` | - | Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`) |
| `layout` | `string` | - | Specify a layout type. |

## CListGroupItem

```jsx
import { CListGroupItem } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `as` | `string` | `'li'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
