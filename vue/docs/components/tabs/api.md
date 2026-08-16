# Vue Tabs Component API

> Explore the API reference for the Vue Tabs component and discover how to effectively utilize its props for customization.

## CTab

```jsx
import { CTab } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `itemKey` | `number\|string` | - | Item key. |
## CTabContent

```jsx
import { CTabContent } from '@coreui/vue'
```
## CTabList

```jsx
import { CTabList } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `layout` | `string` | - | Specify a layout type for component. |
| `variant` | `string` | - | Set the nav variant to tabs or pills. |
## CTabPanel

```jsx
import { CTabPanel } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `itemKey` | `number\|string` | - | Item key. |
| `transition` | `boolean` | `true` | Enable fade in and fade out transition. |
| `visible` | `boolean` | `false` | Toggle the visibility of component. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired when the component requests to be hidden. |
| `show` | Callback fired when the component requests to be shown. |
## CTabs

```jsx
import { CTabs } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeItemKey` | `number\|string` | - | The active item key. |

### Events

| Name | Description |
| --- | --- |
| `change` | The callback is fired when the active tab changes. |
