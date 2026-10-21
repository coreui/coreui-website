# React Accordion Component API

> Explore the API reference for the React Accordion component and discover how to effectively utilize its props for customization.

## CAccordion

```jsx
import { CAccordion } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeItemKey` | `CAccordionItemKey` | - | Sets the initially open items when the component mounts. |
| `alwaysOpen` | `boolean` | `false` | Make accordion items stay open when another item is opened |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `defaultOpenItemKeys` | `CAccordionItemKey \| CAccordionItemKey[]` | - | Sets the initially open items when the component mounts. After initialization, the component manages the open items internally. Use it for uncontrolled usage. |
| `flush` | `boolean` | - | Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container. |
| `gap` | `boolean` | - | Spaces the items apart and gives each one a full border radius, so the accordion reads as a stack of cards. |
| `onChange` | `((keys: CAccordionItemKey[]) => void)` | - | Callback fired when the open items change. - In controlled mode (`openItemKeys` provided), you must update `openItemKeys` yourself based on the value received. - In uncontrolled mode, this callback is called after the internal state updates. |
| `openItemKeys` | `CAccordionItemKey \| CAccordionItemKey[]` | - | Controls which items are open. When provided, the component operates in a controlled mode: update the value yourself from `onChange`. Takes a single key as well as an array — an array only opens more than one item under `alwaysOpen`, since the HTML Standard forbids leaving more than one open item in a `name` group. |
| `size` | `"sm"` | - | Tighten padding, radius and font size for a more compact accordion. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Tint the open item with one of CoreUI’s themed colors. Closed items are untouched, so the theme marks what is currently expanded rather than recoloring the whole control. |

## CAccordionBody

```jsx
import { CAccordionBody } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CAccordionHeader

```jsx
import { CAccordionHeader } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CAccordionItem

```jsx
import { CAccordionItem } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `itemKey` | `string \| number` | - | Item key. |
| `onHidden` | `(() => void)` | - | Callback fired when the item has been hidden. |
| `onShown` | `(() => void)` | - | Callback fired when the item has been shown. |
| `open` | `boolean` | - | Controls whether the item is open, overriding the accordion's own list. When provided, the item operates in a controlled mode: update the value yourself from `onShown` and `onHidden`. Prefer `openItemKeys` on the accordion where the whole set is driven together. |
| `visible` | `boolean` | - | Controls whether the item is open. |
