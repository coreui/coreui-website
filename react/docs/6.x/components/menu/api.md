# React Menu Component API

> Explore the API reference for the React Menu component and discover how to effectively utilize its props for customization.

## CMenu

```jsx
import { CMenu } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoClose` | `boolean \| "inside" \| "outside"` | `true` | Configures the auto close behavior: - `true` — closes on a click inside or outside the menu, - `'inside'` — closes on a click inside the menu only, - `'outside'` — closes on a click outside the menu only, - `false` — closes only on the toggle or the Escape key. |
| `className` | `string` | - | Adds a custom class name to the React Menu wrapper. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | - | The element the panel is rendered into instead of `document.body`. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `dark` | `boolean` | - | Renders the panel in the dark theme. |
| `defaultShow` | `boolean` | - | The initial open state of an uncontrolled menu — read once on mount. |
| `offset` | `[number, number]` | `[0, 2]` | The distance of the panel from its toggle, as `[skidding, distance]`. |
| `onHide` | `(() => void)` | - | Callback fired when the menu is hidden. |
| `onShow` | `(() => void)` | - | Callback fired when the menu is shown. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the menu requests an open-state change — a dismiss gesture (Escape, outside click, item click) or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the menu stays as it is. |
| `placement` | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end' \| string` | `bottom-start` | Where the panel opens. Breakpoint prefixes make it responsive — `'bottom-start md:top-end'` reads as bottom-start below `md` and top-end from `md` up. A logical `start` or `end` side resolves to the side the writing direction puts it on; `-start` and `-end` are already logical, so they follow the direction on their own. |
| `portal` | `boolean` | `false` | Renders the panel through a portal. |
| `show` | `boolean` | - | Control the open state. When set, the menu renders what `show` says and dismiss gestures only call `onShowChange` — nothing closes until the parent flips the prop. |
| `visible` | `boolean` | - | Controls the visibility of the menu. |

## CMenuContent

```jsx
import { CMenuContent } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | Adds a custom class name to the React Menu panel. |
| `maxHeight` | `string \| number` | - | The height at which a scrollable panel starts scrolling. |
| `scrollable` | `boolean` | - | Renders the panel with its own scrollbar once it grows past `maxHeight`. |
| `translucent` | `boolean` | - | Give the menu a translucent, blurred surface. |

## CMenuDivider

```jsx
import { CMenuDivider } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | Adds a custom class name to the React Menu divider. |

## CMenuHeader

```jsx
import { CMenuHeader } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h6") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `h6` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | Adds a custom class name to the React Menu header. |

## CMenuItem

```jsx
import { CMenuItem } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "a") \| (ElementType & "cite") \| (ElementType & "data") \| ... 175 more ...` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | Adds a custom class name to the React Menu item. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |
| `selected` | `boolean` | - | Marks the item as the current selection. |

## CMenuText

```jsx
import { CMenuText } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `div` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | Adds a custom class name to the React Menu text. |

## CMenuToggle

```jsx
import { CMenuToggle } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. With `toggle` it is the controlled active state of the toggle button. For the uncontrolled toggle use `defaultActive`; manage the controlled state from `onClick`. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "button") \| (ElementType & "cite") \| (ElementType & "data") \| ... 175 more ...` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | Adds a custom class name to the React Menu toggle. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `custom` | `boolean` | - | Wire the menu to a toggle of your own instead of rendering a button. The single child element receives the toggle behavior and keeps its own markup and classes. |
| `defaultActive` | `boolean` | - | The initial active state of an uncontrolled toggle button — read once on mount. Ignored when `active` is set. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |
| `iconOnly` | `boolean` | - | Square the button for a lone icon - remember to give it an `aria-label`. |
| `link` | `boolean` | - | Render the button as a link. It behaves like a button but takes its color from the link color rather than from a theme, so `theme` and `variant` do not apply to it. |
| `role` | `string` | - | The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers. |
| `shape` | `'rounded' \| 'rounded-top' \| 'rounded-end' \| 'rounded-bottom' \| 'rounded-start' \| 'rounded-circle' \| 'rounded-pill' \| 'rounded-0' \| 'rounded-1' \| 'rounded-2' \| 'rounded-3' \| string` | - | Select the shape of the component. |
| `size` | `"xs" \| "sm" \| "lg"` | - | Size the component extra small, small or large. |
| `split` | `boolean` | - | Renders the toggle as the second half of a split button, so only it opens the menu. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. Pair it with `variant` for the shape — a button is a shape plus a colour. The class may also sit on any ancestor, so theming a toolbar themes the buttons inside it. |
| `toggle` | `boolean` | - | Make the button behave as a toggle button. It manages its own active/pressed state, toggling it on click and reflecting it via the `aria-pressed` attribute. |
| `variant` | `"ghost" \| "outline" \| "solid" \| "subtle"` | - | Set the shape of the button — how much ink it uses. Defaults to `solid` when `theme` is set. |

## CSubmenu

```jsx
import { CSubmenu } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | Adds a custom class name to the React Submenu wrapper. |
| `defaultShow` | `boolean` | - | The initial open state of an uncontrolled submenu — read once on mount. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the submenu requests an open-state change — hover, click or the keyboard. In controlled mode update `show` yourself, or the submenu stays as it is. |
| `show` | `boolean` | - | Control the open state. When set, the submenu renders what `show` says and only calls `onShowChange`. |
| `toggler` | `ReactNode` | - | The trigger the nested menu opens from. Rendered as the submenu's own `.menu-item`. |
