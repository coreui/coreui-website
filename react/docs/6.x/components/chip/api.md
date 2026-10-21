# React Chip Component API

> Explore the API reference for the React Chip and React Chip Component to customize variants, remove behavior, sizes, and interactions.

## CChip

```jsx
import { CChip } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaRemoveLabel` | `string \| ((label: string) => string)` | `Remove` | Names the remove button with the chip's text: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` (`Remove React`); a function receives the text and returns the whole name. The text is the chip's string content, else its `value`. Unused on a selectable chip, where the affordance is hidden from assistive technology. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "span") \| (ElementType & "filter") \| (ElementType & "slot") \| ... 175 more ...` | `span` | Specifies the root element or custom component used by the React Chip component. |
| `className` | `string` | - | Adds custom classes to the React Chip root element. |
| `clickable` | `boolean` | - | Enables interactive hover styling and pointer cursor for the React Chip component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `defaultSelected` | `boolean` | - | The initial selected state of an uncontrolled selectable React Chip component — read once on mount. Ignored when `selected` is set. |
| `disabled` | `boolean` | - | Disables the React Chip component and removes interactive behavior. |
| `filter` | `boolean` | - | Turns the React Chip component into a filter chip. A filter chip is selectable and shows a leading check icon while selected. |
| `onDeselect` | `((event: MouseEvent<HTMLElement, MouseEvent> \| KeyboardEvent<HTMLElement>) => void)` | - | Callback fired when the React Chip component becomes deselected. |
| `onRemove` | `((event: KeyboardEvent<HTMLElement> \| MouseEvent<HTMLButtonElement, MouseEvent>) => void)` | - | Callback fired when the React Chip component requests removal by button click or keyboard action. |
| `onSelect` | `((event: MouseEvent<HTMLElement, MouseEvent> \| KeyboardEvent<HTMLElement>) => void)` | - | Callback fired when the React Chip component becomes selected. |
| `onSelectedChange` | `((selected: boolean, event: MouseEvent<HTMLElement, MouseEvent> \| KeyboardEvent<HTMLElement>) => void)` | - | Callback fired when the selected state of the React Chip component changes. |
| `removable` | `boolean` | - | Displays a remove button inside the React Chip component. |
| `removeIcon` | `ReactNode` | - | Replaces the default remove icon with a custom icon node in the React Chip component. |
| `selectable` | `boolean` | - | Enables selectable behavior and keyboard toggle support for the React Chip component. |
| `selected` | `boolean` | - | The controlled selected state of a selectable React Chip component. Pair it with `onSelectedChange`; for the uncontrolled mode use `defaultSelected` instead. On a non-selectable chip it only marks the chip as active. |
| `selectedIcon` | `ReactNode` | - | Replaces the default selected icon shown by a filter React Chip component with a custom icon node. |
| `size` | `"sm" \| "lg"` | - | Sets the size of the React Chip component to small or large. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `value` | `string` | - | Sets the value associated with the React Chip component, used by `CChipSet` to track selection. |
| `variant` | `"outline"` | - | Sets the visual variant of the React Chip component to outline style. |
