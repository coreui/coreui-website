# Vue Menu Component API

> Explore the API reference for the Vue Menu component and discover how to effectively utilize its props for customization.

## CMenu

```jsx
import { CMenu } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoClose` | `boolean \| 'inside' \| 'outside'` | `true` | Configures the auto close behavior: - `true` — closes on a click inside or outside the menu, - `'inside'` — closes on a click inside the menu only, - `'outside'` — closes on a click outside the menu only, - `false` — closes only on the toggle or the Escape key. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | The element the panel is rendered into instead of `document.body`. You can pass an HTML element or function that returns a single element. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `dark` | `boolean` | - | Renders the panel in the dark theme. |
| `offset` | `[number, number]` | `() => [0, 2]` | The distance of the panel from its toggle, as `[skidding, distance]`. |
| `placement` | `string` | `'bottom-start'` | Where the panel opens. Logical placements (`'start'`, `'end'`) resolve to the writing direction, and `-start`/`-end` are already logical. Breakpoint prefixes make it responsive — `'bottom-start md:top-end'` reads as bottom-start below `md` and top-end from `md` up. |
| `portal` | `boolean` | `false` | Renders the panel through a Teleport. |
| `show` | `boolean` | `undefined` | Control the open state. When set, the menu renders what `show` says and dismiss gestures only emit `update:show` — nothing closes until the parent flips the prop. Supports the `v-model:show` binding. |
| `visible` | `boolean` | `undefined` | Controls the visibility of the menu. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired when the menu is hidden. |
| `show` | Callback fired when the menu is shown. |
| `update:show` | Emit the requested open state to support the `v-model:show` binding — a dismiss gesture (Escape, outside click, item click) or any internal toggle. |

## CMenuContent

```jsx
import { CMenuContent } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `maxHeight` | `number\|string` | `undefined` | The height at which a scrollable panel starts scrolling. |
| `scrollable` | `boolean` | - | Renders the panel with its own scrollbar once it grows past `maxHeight`. |
| `translucent` | `boolean` | - | Give the menu a translucent, blurred surface. |

## CMenuDivider

```jsx
import { CMenuDivider } from '@coreui/vue'
```

## CMenuHeader

```jsx
import { CMenuHeader } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'h6'` | Component used for the root node. Either a string to use a HTML element or a component. |

## CMenuItem

```jsx
import { CMenuItem } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `as` | `string` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |
| `selected` | `boolean` | - | Marks the item as the current selection. |

### Events

| Name | Description |
| --- | --- |
| `click` | Event called when the user clicks on the component. |

## CMenuText

```jsx
import { CMenuText } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |

## CMenuToggle

```jsx
import { CMenuToggle } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'button'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `custom` | `boolean` | - | Wire the menu to a toggle of your own instead of rendering a button. The single slot element receives the toggle behavior and keeps its own markup and classes. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `shape` | `Shape` | - |  |
| `size` | `string` | - | Size the component small or large. |
| `split` | `boolean` | - | Renders the toggle as the second half of a split button, so only it opens the menu. |
| `theme` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. Pair it with `variant` for the shape — a button is a shape plus a colour. |
| `variant` | `string` | - | Set the shape of the button — how much ink it uses. Defaults to `solid` when `theme` is set. |

## CSubmenu

```jsx
import { CSubmenu } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `show` | `boolean` | `undefined` | The open state of the nested menu. Bind it with `v-model:show` to hand control to the parent — hover, click and the keyboard then only emit `update:show` and nothing moves until the parent flips the value. Passed one-way it seeds the starting state and the submenu keeps managing itself. |
| `toggler` | `string` | `undefined` | The trigger the nested menu opens from, rendered as the submenu's own `.menu-item`. The `toggler` slot takes precedence over the prop. |

### Events

| Name | Description |
| --- | --- |
| `update:show` | Emit the requested open state to support the `v-model:show` binding. |
