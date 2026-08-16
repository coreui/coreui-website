# React Chip Input Component API

> Explore the API reference for the React Chip Input component and all available CChipInput props.

## CChipInput

```jsx
import { CChipInput } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | Declarative `CChip` children used as the initial chips. Their values seed the uncontrolled value when `defaultValue` is not provided (parity with the vanilla Chip Input). |
| `chipClassName` | `ChipClassName \| undefined` | - | Adds custom classes to chips rendered by the React Chip Input component. Accepts a static className or a resolver function based on chip value. |
| `className` | `string \| undefined` | - | Adds custom classes to the React Chip Input component root element. |
| `createOnBlur` | `boolean \| undefined` | `true` | Creates a new chip when the React Chip Input component loses focus with a pending value. |
| `defaultValue` | `string[] \| undefined` | `[]` | Sets the initial uncontrolled values rendered by the React Chip Input component. |
| `disabled` | `boolean \| undefined` | - | Disables the React Chip Input component and prevents adding, removing, or selecting chips. |
| `filter` | `boolean \| undefined` | - | Renders the chips as filter chips, each showing a leading check icon while selected. Implies `selectable`. |
| `id` | `string \| undefined` | - | Sets the `id` of the internal text input rendered by the React Chip Input component. |
| `label` | `ReactNode` | - | Renders an inline label inside the React Chip Input component container. |
| `maxChips` | `number \| null \| undefined` | - | Sets the maximum number of chips that can be created in the React Chip Input component. |
| `name` | `string \| undefined` | - | Sets the name of the hidden input used by the React Chip Input component for form submission. |
| `onAdd` | `((value: string) => void) \| undefined` | - | Callback fired when the React Chip Input component adds a new chip. |
| `onChange` | `((values: string[]) => void) \| undefined` | - | Callback fired when the value list of the React Chip Input component changes. |
| `onInput` | `((value: string) => void) \| undefined` | - | Callback fired when the internal text input value changes in the React Chip Input component. |
| `onRemove` | `((value: string) => void) \| undefined` | - | Callback fired when the React Chip Input component removes a chip. |
| `onSelect` | `((selected: string[]) => void) \| undefined` | - | Callback fired when the selected chip values change in the React Chip Input component. |
| `placeholder` | `string \| undefined` | - | Sets placeholder text for the internal input of the React Chip Input component. |
| `readOnly` | `boolean \| undefined` | - | Makes the React Chip Input component readonly while keeping values visible. |
| `removable` | `boolean \| undefined` | `true` | Displays remove buttons on chips managed by the React Chip Input component. |
| `selectable` | `boolean \| undefined` | - | Enables chip selection behavior in the React Chip Input component. |
| `selectionMode` | `"single" \| "multiple" \| undefined` | - | Sets how many chips can be selected at once in the React Chip Input component. |
| `separator` | `string \| null \| undefined` | `,` | Sets the separator character used to create chips while typing or pasting in the React Chip Input component. |
| `size` | `"sm" \| "lg" \| undefined` | - | Sets the size of the React Chip Input component to small or large. |
| `value` | `string[] \| undefined` | - | Controls the values rendered by the React Chip Input component. |
