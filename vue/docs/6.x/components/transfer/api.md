# Vue Transfer Component API

> Explore the API reference for the Vue Transfer component and discover how to effectively utilize its props for customization.

## CTransfer

```jsx
import { CTransfer } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaMoveAllToSourceLabel` | `string` | `'Move all to available'` | Accessible name of the button that moves every visible, enabled option back to the source list. |
| `ariaMoveAllToTargetLabel` | `string` | `'Move all to chosen'` | Accessible name of the button that moves every visible, enabled option to the target list. |
| `ariaMovedAnnouncement` | `string` | `'{count} moved to {title}'` | What is announced after a move. `{count}` is how many options moved, `{title}` the destination's title, and both are replaced wherever they appear. |
| `ariaMoveToSourceLabel` | `string` | `'Move to available'` | Accessible name of the button that moves the selection back to the source list. |
| `ariaMoveToTargetLabel` | `string` | `'Move to chosen'` | Accessible name of the button that moves the selection to the target list. |
| `defaultValue` | `string[]` | - | The values that start in the target list, when the value is not controlled through `value`. |
| `disabled` | `boolean` | - | Turns the whole transfer off: both list boxes, both search fields and every move button. |
| `indicator` | `ListBoxIndicator` | `'checkbox'` | Passed to both list boxes. `'none'` drops the checkbox in front of every option. |
| `items` | `TransferItem[]` | `() => []` | The options the transfer moves around. Each entry is passed to the `item` slot, which renders the contents of its option. |
| `loading` | `boolean \| { source?: boolean; target?: boolean }` | `false` | Covers the wait of one list or of both: a loading list is marked `aria-busy` and shows a row with a spinner and `loadingLabel` below its options, which stay usable. Pass a boolean for both lists, or `{ source, target }` for one of them. |
| `loadingLabel` | `string` | `'Loading…'` | Text of the loading row below the options, announced to screen readers when the shown list starts loading or the list shows up loading. |
| `oneWay` | `boolean` | - | Takes the return trip away: both buttons that move back are hidden and a value that has been chosen stays chosen. |
| `search` | `boolean \| 'external'` | `false` | Passed to both list boxes: puts a search field above each list, hiding the options that do not match — so the arrows skip them, the counter drops them and the select-all button takes only what is left on screen. With `'external'` nothing is hidden here: every keystroke is reported through the `search` event and the answer arrives as new `items`. |
| `searchPlaceholder` | `string` | `'Search'` | Passed to both list boxes: the placeholder of their search fields, and the first half of their accessible name. |
| `selectedLabel` | `CountLabel` | `() => defaultSelectedLabel` | Passed to both list boxes as their header count text. A function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced. |
| `sourceTitle` | `string` | `'Available'` | Title of the source list: the label of its select-all button and its accessible name. |
| `targetTitle` | `string` | `'Chosen'` | Title of the target list. |
| `typeahead` | `boolean` | `true` | Passed to both list boxes: move the highlight to the option matching what the user types. |
| `value` | `string[]` | `undefined` | The values in the target list. When set, the component renders that value and only reports the moves through the `change` event. Supports the `v-model:value` binding. |

### Events

| Name | Description |
| --- | --- |
| `change` | Callback fired after options moved between the lists. |
| `search` | Callback fired when a search field changes. In the `'external'` search mode it is the only report the component makes — nothing is filtered here. |
| `update:value` | Emit the values of the target list to support the `v-model:value` binding. |
