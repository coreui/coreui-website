# Vue Sidebar Component API

> Explore the API reference for the Vue Sidebar component and discover how to effectively utilize its props for customization.

## CSidebar

```jsx
import { CSidebar } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `colorScheme` | `string` | `undefined` | Sets if the color of text should be colored for a light or dark background. |
| `narrow` | `boolean` | - | Make sidebar narrow. |
| `overlaid` | `boolean` | - | Set sidebar to overlaid variant. |
| `placement` | `string` | `undefined` | Components placement, there’s no default placement. |
| `position` | `string` | - | Place sidebar in non-static positions. |
| `show` | `boolean` | `undefined` | Control the open state. When set, the sidebar renders what `show` says and close gestures only emit `update:show` — nothing changes until the parent flips the prop. |
| `size` | `string` | - | Size the component small, large, or extra large. |
| `unfoldable` | `boolean` | - | Expand narrowed sidebar on hover. |
| `visible` | `boolean` | `undefined` | Toggle the visibility of sidebar component. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired when the component requests to be hidden. |
| `in-viewport-change` | Event emitted when the sidebar enters or leaves the viewport — the sidebar is off-canvas on narrow screens, so this reports whether it is on screen, not the `show` state. |
| `show` | Callback fired when the component requests to be shown. |
| `update:show` | Callback fired when the sidebar requests an open-state change — a close gesture (the mobile backdrop click, an outside click or a nav link selection on mobile) or any internal toggle. When `show` is bound with `v-model`, update it yourself, or the sidebar stays as it is. |
| `visible-change` | Event emitted after visibility of component changed. |

## CSidebarBrand

```jsx
import { CSidebarBrand } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |

## CSidebarFooter

```jsx
import { CSidebarFooter } from '@coreui/vue'
```

## CSidebarHeader

```jsx
import { CSidebarHeader } from '@coreui/vue'
```

## CSidebarNav

```jsx
import { CSidebarNav } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string \| Component` | `'ul'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `compact` | `boolean` | - | Make navigation more compact by cutting link padding in half. |
| `variant` | `'tree'` | `undefined` | Sets the navigation variant. |

## CSidebarToggler

```jsx
import { CSidebarToggler } from '@coreui/vue'
```
