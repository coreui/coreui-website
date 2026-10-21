# Vue Chip Component API

> Explore the API reference for the Vue Chip component and discover how to effectively utilize its props for customization.

## CChip

```jsx
import { CChip } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaRemoveLabel` | `string \| ((label: string) => string)` | `undefined` | Names the remove button with the chip's text: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` (`Remove Vue`); a function receives the text and returns the whole name. The text is the chip's text content, else its `value`. Unused on a selectable chip, where the affordance is hidden from assistive technology. Defaults to `undefined` so a chip can override the value inherited from a `CChipSet`; falls back to `'Remove'`. |
| `as` | `string` | `'span'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `clickable` | `boolean` | - | Enables interactive hover styling and pointer cursor. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI's themed colors. |
| `defaultSelected` | `boolean` | `undefined` | The initial selected state of an uncontrolled selectable chip — read once on mount. Ignored when `selected` is set. |
| `disabled` | `boolean` | `undefined` | Toggle the disabled state for the component. Defaults to `undefined` so a chip can override the value inherited from a `CChipSet` (including turning it off). |
| `filter` | `boolean` | `undefined` | Turns the component into a filter chip. A filter chip is selectable and shows a leading check icon while selected. Defaults to `undefined` so a chip can override the value inherited from a `CChipSet`. |
| `removable` | `boolean` | `undefined` | Displays a remove button inside the component. Defaults to `undefined` so a chip can override the value inherited from a `CChipSet` (including turning it off). |
| `removeIcon` | `string\|object` | `undefined` | Replaces the default remove icon with a custom icon node. |
| `selectable` | `boolean` | `undefined` | Enables selectable behavior and keyboard toggle support. Defaults to `undefined` so a chip can override the value inherited from a `CChipSet`. |
| `selected` | `boolean` | `undefined` | Controls the selected state of a selectable component. On a non-selectable chip it only renders the `active` class. |
| `selectedIcon` | `string\|object` | `undefined` | Replaces the default selected icon shown by a filter chip with a custom icon node. |
| `size` | `string` | - | Size the component small or large. |
| `theme` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `value` | `string` | `undefined` | Sets the value associated with the component, used by `CChipSet` to track selection. |
| `variant` | `string` | - | Set the button variant to an outlined style. |

### Events

| Name | Description |
| --- | --- |
| `click` | Event called when the user clicks on the component. |
| `deselect` | Event called when the component becomes deselected. |
| `keydown` | Event called when the user presses a key. |
| `remove` | Event called when the component requests removal. |
| `select` | Event called when the component becomes selected. |
| `selected-change` | Event called when the selected state changes. |
