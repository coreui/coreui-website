# Vue Accordion Component API

> Explore the API reference for the Vue Accordion component and discover how to effectively utilize its props for customization.

## CAccordion

```jsx
import { CAccordion } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeItemKey` | `CAccordionItemKey` | `undefined` | Sets the initially open items when the component mounts. |
| `alwaysOpen` | `boolean` | - | Make accordion items stay open when another item is opened |
| `flush` | `boolean` | - | Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container. |
| `gap` | `boolean` | - | Spaces the items apart and gives each one a full border radius, so the accordion reads as a stack of cards. |
| `openItemKeys` | `CAccordionItemKey \| CAccordionItemKey[]` | `undefined` | Controls which items are open. Bind it with `v-model:open-item-keys` to hand control to the parent; passed one-way it seeds the starting state and the accordion keeps managing itself. Takes a single key as well as an array — an array only opens more than one item under `alwaysOpen`, since the HTML Standard forbids leaving more than one open item in a `name` group. |
| `size` | `string` | - | Tighten padding, radius and font size for a more compact accordion. |
| `theme` | `Color` | - | Tint the open item with one of CoreUI’s themed colors. Closed items are untouched, so the theme marks what is currently expanded rather than recoloring the whole control. |

### Events

| Name | Description |
| --- | --- |
| `change` | Callback fired when the open items change. - When `openItemKeys` is bound with `v-model`, you must update it yourself based on the value received. - Otherwise this callback is called after the internal state updates. |
| `update:openItemKeys` | Emit the new open items to support the `v-model:open-item-keys` binding. |

## CAccordionBody

```jsx
import { CAccordionBody } from '@coreui/vue'
```

## CAccordionHeader

```jsx
import { CAccordionHeader } from '@coreui/vue'
```

## CAccordionItem

```jsx
import { CAccordionItem } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `itemKey` | `[Number, String] as (NumberConstructor \| StringConstructor)[]` | `undefined` | The item key. |
| `open` | `boolean` | `undefined` | Controls whether the item is open, overriding the accordion's own list. When provided, the item operates in a controlled mode: update the value yourself from the `shown` and `hidden` events. Prefer `openItemKeys` on the accordion where the whole set is driven together. |
| `visible` | `boolean` | `undefined` | Controls whether the item is open. |

### Events

| Name | Description |
| --- | --- |
| `hidden` | Callback fired when the item has been hidden. |
| `shown` | Callback fired when the item has been shown. |
