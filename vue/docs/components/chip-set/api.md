# Vue Chip Set Component API

> Explore the API reference for the Vue Chip Set component and discover how to effectively utilize its props for customization.

## CChipSet

```jsx
import { CChipSet } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `chips` | `(string \| CChipSetItem)[]` | `undefined` | Renders chips from data instead of the default slot. Each item is a string or an object with a `value`, an optional `label`, and any `CChip` props. The slot is used when this is omitted. |
| `disabled` | `boolean` | - | Disables every chip rendered by the component. |
| `filter` | `boolean` | - | Turns the chips into filter chips, each showing a leading check icon while selected. |
| `removable` | `boolean` | - | Displays a remove button on every chip rendered by the component. |
| `removeIcon` | `string\|object` | `undefined` | Replaces the default remove icon on every chip with a custom icon node. |
| `selectable` | `boolean` | - | Enables selection behavior for the chips rendered by the component. |
| `selected` | `string[]` | `undefined` | The selected chip values passed using `v-model:selected`. |
| `selectedIcon` | `string\|object` | `undefined` | Replaces the default selected icon shown by filter chips with a custom icon node. |
| `selectionMode` | `string` | `'multiple'` | Sets how many chips can be selected at once. |

### Events

| Name | Description |
| --- | --- |
| `remove` | Event occurs when a chip requests removal, with its value. |
| `select` | Event occurs when the selected chip values change. |
| `update:chips` | Emit the chips without the removed one (for `v-model:chips`). |
| `update:selected` | Emit the new selected values whenever the selection changes (for `v-model:selected`). |
