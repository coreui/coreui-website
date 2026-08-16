# React Chip Set Component API

> Explore the API reference for the React Chip Set component to coordinate chip selection, selection mode, and keyboard navigation.

## CChipSet

```jsx
import { CChipSet } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaRemoveLabel` | `string \| undefined` | - | Provides an accessible label for the remove button of every chip rendered by the React Chip Set component. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `div` | Specifies the root element or custom component used by the React Chip Set component. |
| `chips` | `(string \| CChipSetItem)[] \| undefined` | - | Renders chips from data instead of children. Each item is a string or an object with a `value`, an optional `label`, and any `CChip` props. Children are used when this is omitted. |
| `className` | `string \| undefined` | - | Adds custom classes to the React Chip Set root element. |
| `defaultChips` | `(string \| CChipSetItem)[] \| undefined` | - | Sets the initial uncontrolled chips. In this mode the React Chip Set component owns the list and removes chips itself; use `chips` (with `onRemove`) for a controlled list. |
| `defaultSelected` | `string[] \| undefined` | - | Sets the initial uncontrolled selection of the React Chip Set component. |
| `disabled` | `boolean \| undefined` | - | Disables every chip rendered by the React Chip Set component. |
| `filter` | `boolean \| undefined` | - | Turns the chips into filter chips, each showing a leading check icon while selected. |
| `onRemove` | `((value: string) => void) \| undefined` | - | Callback fired when a chip requests removal. The chips are controlled by their rendered children, so remove the chip from your data in response. |
| `onSelect` | `((selected: string[]) => void) \| undefined` | - | Callback fired when the selected chip values of the React Chip Set component change. |
| `removable` | `boolean \| undefined` | - | Displays a remove button on every chip rendered by the React Chip Set component. |
| `removeIcon` | `ReactNode` | - | Replaces the default remove icon on every chip with a custom icon node. |
| `selectable` | `boolean \| undefined` | - | Enables selection behavior for the chips rendered by the React Chip Set component. |
| `selected` | `string[] \| undefined` | - | Controls the selected chip values of the React Chip Set component. |
| `selectedIcon` | `ReactNode` | - | Replaces the default selected icon shown by filter chips with a custom icon node. |
| `selectionMode` | `"single" \| "multiple" \| undefined` | - | Sets how many chips can be selected at once in the React Chip Set component. |
