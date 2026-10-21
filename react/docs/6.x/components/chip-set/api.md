# React Chip Set Component API

> Explore the API reference for the React Chip Set component to coordinate chip selection, selection mode, and keyboard navigation.

## CChipSet

```jsx
import { CChipSet } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaAddedAnnouncement` | `string \| ((values: string[]) => string)` | `'added'` | Sets the wording announced when chips are added: a word that follows their values, joined with commas, or a function that receives the values and returns the whole message. |
| `ariaRemovedAnnouncement` | `string \| ((values: string[]) => string)` | `'removed'` | Sets the wording announced when chips are removed: a word that follows their values, joined with commas, or a function that receives the values and returns the whole message. |
| `ariaRemoveLabel` | `string \| ((label: string) => string)` | - | Names the remove button of every chip with the chip's text: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` (`Remove React`); a function receives the text and returns the whole name. A selectable chip has no such button — the affordance is hidden from assistive technology and removal runs from the chip itself. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `div` | Specifies the root element or custom component used by the React Chip Set component. |
| `chips` | `(string \| CChipSetItem)[]` | - | Renders chips from data instead of children. Each item is a string or an object with a `value`, an optional `label`, and any `CChip` props. Children are used when this is omitted. |
| `className` | `string` | - | Adds custom classes to the React Chip Set root element. |
| `defaultChips` | `(string \| CChipSetItem)[]` | - | Sets the initial uncontrolled chips. In this mode the React Chip Set component owns the list and removes chips itself; use `chips` (with `onRemove`) for a controlled list. |
| `defaultSelected` | `string[]` | - | Sets the initial uncontrolled selection of the React Chip Set component. |
| `disabled` | `boolean` | - | Disables every chip rendered by the React Chip Set component. |
| `filter` | `boolean` | - | Turns the chips into filter chips, each showing a leading check icon while selected. |
| `onRemove` | `((value: string) => void)` | - | Callback fired when a chip requests removal. The chips are controlled by their rendered children, so remove the chip from your data in response. |
| `onSelect` | `((selected: string[]) => void)` | - | Callback fired when the selected chip values of the React Chip Set component change. |
| `removable` | `boolean` | - | Displays a remove button on every chip rendered by the React Chip Set component. |
| `removeIcon` | `ReactNode` | - | Replaces the default remove icon on every chip with a custom icon node. |
| `selectable` | `boolean` | - | Enables selection behavior for the chips rendered by the React Chip Set component. |
| `selected` | `string[]` | - | Controls the selected chip values of the React Chip Set component. |
| `selectedIcon` | `ReactNode` | - | Replaces the default selected icon shown by filter chips with a custom icon node. |
| `selectionMode` | `"single" \| "multiple"` | - | Sets how many chips can be selected at once in the React Chip Set component. |
| `typeahead` | `boolean` | `true` | Moves focus to the chip whose value starts with the typed characters. |
