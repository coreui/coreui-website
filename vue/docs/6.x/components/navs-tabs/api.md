# Vue Navs & Tabs Component API

> Explore the API reference for the Vue Navs & Tabs component and discover how to effectively utilize its props for customization.

## CNav

```jsx
import { CNav } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'ul'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `layout` | `string` | - | Specify a layout type for component. |
| `theme` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `variant` | `string` | - | Set the nav variant to tabs or pills. |

## CNavGroup

```jsx
import { CNavGroup } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'li'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `compact` | `boolean` | - | Make nav group more compact by cutting all `padding` in half. |
| `show` | `boolean` | `undefined` | Show nav group items. Acts as the initial state on its own, or as the controlled value when paired with a `v-model:show` / `@update:show` listener. |
| `visible` | `boolean` | `undefined` | Show nav group items. Acts as the initial state on its own, or as the controlled value when paired with a `v-model:visible` / `@update:visible` listener. |

### Events

| Name | Description |
| --- | --- |
| `update:show` | Emit the requested expanded state to support the `v-model:show` binding — a toggler click or an accordion close request when a sibling opens. |
| `update:visible` | Emit the requested expanded state to support the `v-model:visible` binding. |
| `visible-change` | Event emitted after the expanded state of the group changed. |

## CNavItem

```jsx
import { CNavItem } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `as` | `string` | `'li'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `class` | `string` | - | A string of all className you want applied to the component. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |

`CNavItem` and `CNavLink` have the same properties. If you set the `href` property on `CNavItem` then, `CNavLink` will be generated inside `CNavItem`.

## CNavLink

```jsx
import { CNavLink } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `as` | `string` | `'a'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |

## CTabContent

```jsx
import { CTabContent } from '@coreui/vue'
```

## CTabPane

```jsx
import { CTabPane } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `show` | `boolean` | `undefined` | Toggle the visibility of component. |
| `transition` | `boolean` | `true` | Enable fade in and fade out transition. |
| `visible` | `boolean` | `false` | Toggle the visibility of component. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired when the component requests to be hidden. |
| `show` | Callback fired when the component requests to be shown. |
