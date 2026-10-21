# Vue Chip Set Component API

> Explore the API reference for the Vue Chip Set component and discover how to effectively utilize its props for customization.

## CChipSet

```jsx
import { CChipSet } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaAddedAnnouncement` | `string \| ((values: string[]) => string)` | `'added'` | Sets the wording announced when chips are added: a word that follows their values, joined with commas, or a function that receives the values and returns the whole message. |
| `ariaRemovedAnnouncement` | `string \| ((values: string[]) => string)` | `'removed'` | Sets the wording announced when chips are removed: a word that follows their values, joined with commas, or a function that receives the values and returns the whole message. |
| `ariaRemoveLabel` | `string \| ((label: string) => string)` | `undefined` | Names the remove button of every chip with the chip's text: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` (`Remove Vue`); a function receives the text and returns the whole name. A selectable chip has no such button — the affordance is hidden from assistive technology and removal runs from the chip itself. |
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
| `typeahead` | `boolean` | `true` | Moves focus to the chip whose value starts with the typed characters. |

### Events

| Name | Description |
| --- | --- |
| `remove` | Event occurs when a chip requests removal, with its value. |
| `select` | Event occurs when the selected chip values change. |
| `update:chips` | Emit the chips without the removed one (for `v-model:chips`). |
| `update:selected` | Emit the new selected values whenever the selection changes (for `v-model:selected`). |
