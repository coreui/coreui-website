# React Context Menu Component API

> Explore the API reference for the React Context Menu component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CContextMenu

```jsx
import { CContextMenu } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoClose` | `boolean \| "inside" \| "outside"` | `true` | Configures the auto close behavior: - `true` — closes on a click inside or outside the menu, - `'inside'` — closes on a click inside the menu only, - `'outside'` — closes on a click outside the menu only, - `false` — closes only on the Escape key. |
| `className` | `string` | - | A string of all className you want applied to the trigger area. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | - | The element the panel is rendered into instead of `document.body`. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `dark` | `boolean` | - | Renders the panel in the dark theme. |
| `disabled` | `boolean` | - | Keeps the menu closed and lets the browser's own menu through. |
| `offset` | `[number, number]` | `[0, 2]` | The distance of the panel from the pointer, as `[skidding, distance]`. |
| `onContextMenu` | `MouseEventHandler<HTMLDivElement>` | - | Callback fired on a right-click in the trigger area, also while `disabled` is set; a right-click inside the open menu does not reach it. Calling `event.preventDefault()` keeps both this menu and the browser menu closed for that click; the ContextMenu key and Shift+F10 open the menu without calling it. |
| `onHide` | `(() => void)` | - | Callback fired when the menu is hidden. |
| `onShow` | `(() => void)` | - | Callback fired when the menu is shown. |
| `placement` | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end' \| string` | `bottom-start` | Where the panel opens relative to the pointer. It flips when that side of the viewport is short, and a logical `start` or `end` side resolves to the side the writing direction puts it on. |
| `portal` | `boolean` | `false` | Renders the panel through a portal. |

The menu itself is a [`<CMenuContent>`](https://coreui.io/react/docs/components/menu/api/#cmenucontent) with the same items, headers, dividers and submenus as a [Menu](https://coreui.io/react/docs/components/menu/api/).
