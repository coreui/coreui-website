# React Chip Component API

> Explore the API reference for the React Chip and React Chip Component to customize variants, remove behavior, sizes, and interactions.

## CChip

```jsx
import { CChip } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggles the active state of the React Chip component for non-selectable usage. |
| `ariaRemoveLabel` | `string` | `Remove` | Provides an accessible label for the remove button in the React Chip component. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "span") \| (ElementType & "filter") \| (ElementType & "slot") \| ... 175 more ...` | `span` | Specifies the root element or custom component used by the React Chip component. |
| `className` | `string` | - | Adds custom classes to the React Chip root element. |
| `clickable` | `boolean` | - | Enables interactive hover styling and pointer cursor for the React Chip component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the contextual color of the React Chip component using CoreUI theme colors. |
| `disabled` | `boolean` | - | Disables the React Chip component and removes interactive behavior. |
| `filter` | `boolean` | - | Turns the React Chip component into a filter chip. A filter chip is selectable and shows a leading check icon while selected. |
| `onDeselect` | `((event: MouseEvent<HTMLElement, MouseEvent> \| KeyboardEvent<HTMLElement>) => void)` | - | Callback fired when the React Chip component becomes deselected. |
| `onRemove` | `((event: KeyboardEvent<HTMLElement> \| MouseEvent<HTMLButtonElement, MouseEvent>) => void)` | - | Callback fired when the React Chip component requests removal by button click or keyboard action. |
| `onSelect` | `((event: MouseEvent<HTMLElement, MouseEvent> \| KeyboardEvent<HTMLElement>) => void)` | - | Callback fired when the React Chip component becomes selected. |
| `onSelectedChange` | `((selected: boolean, event: MouseEvent<HTMLElement, MouseEvent> \| KeyboardEvent<HTMLElement>) => void)` | - | Callback fired when the selected state of the React Chip component changes. |
| `removable` | `boolean` | - | Displays a remove button inside the React Chip component. |
| `removeIcon` | `ReactNode` | - | Replaces the default remove icon with a custom icon node in the React Chip component. |
| `selectable` | `boolean` | - | Enables selectable behavior and keyboard toggle support for the React Chip component. |
| `selected` | `boolean` | - | Controls the selected state of a selectable React Chip component. |
| `selectedIcon` | `ReactNode` | - | Replaces the default selected icon shown by a filter React Chip component with a custom icon node. |
| `size` | `"sm" \| "lg"` | - | Sets the size of the React Chip component to small or large. |
| `value` | `string` | - | Sets the value associated with the React Chip component, used by `CChipSet` to track selection. |
| `variant` | `"outline"` | - | Sets the visual variant of the React Chip component to outline style. |
