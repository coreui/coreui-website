# Vue Context Menu Component API

> Explore the API reference for the Vue Context Menu component and discover how to effectively utilize its props for customization.

## CContextMenu

```jsx
import { CContextMenu } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoClose` | `boolean \| 'inside' \| 'outside'` | `true` | Configures the auto close behavior: - `true` — closes on a click inside or outside the menu, - `'inside'` — closes on a click inside the menu only, - `'outside'` — closes on a click outside the menu only, - `false` — closes only on the Escape key. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | The element the panel is rendered into instead of `document.body`. You can pass an HTML element or function that returns a single element. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `dark` | `boolean` | - | Renders the panel in the dark theme. |
| `disabled` | `boolean` | - | Keeps the menu closed and lets the browser's own menu through. |
| `offset` | `[number, number]` | `() => [0, 2]` | The distance of the panel from the pointer, as `[skidding, distance]`. |
| `placement` | `string` | `'bottom-start'` | Where the panel opens relative to the pointer. It flips when that side of the viewport is short, and a logical `start` or `end` side resolves to the side the writing direction puts it on. |
| `portal` | `boolean` | - | Renders the panel through a Teleport. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired when the menu is hidden. |
| `show` | Callback fired when the menu is shown. |

The menu itself is a [`<CMenuContent>`](https://coreui.io/vue/docs/components/menu/api/#cmenucontent) with the same items, headers, dividers and submenus as a [Menu](https://coreui.io/vue/docs/components/menu/api/).
