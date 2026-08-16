# React Tabs Component API

> Explore the API reference for the React Tabs component and discover how to effectively utilize its props for customization.

## CTab

```jsx
import { CTab } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `disabled` | `boolean \| undefined` | - | Toggle the disabled state for the component. |
| `itemKey` | `string \| number` | - | Item key. |

## CTabContent

```jsx
import { CTabContent } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CTabList

```jsx
import { CTabList } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `layout` | `"fill" \| "justified" \| undefined` | - | Specify a layout type for component. |
| `variant` | `"enclosed" \| "enclosed-pills" \| "pills" \| "tabs" \| "underline" \| "underline-border" \| undefined` | - | Set the nav variant to tabs or pills. |

## CTabPanel

```jsx
import { CTabPanel } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `itemKey` | `string \| number` | - | Item key. |
| `onHide` | `(() => void) \| undefined` | - | Callback fired when the component requests to be hidden. |
| `onShow` | `(() => void) \| undefined` | - | Callback fired when the component requests to be shown. |
| `transition` | `boolean \| undefined` | `true` | Enable fade in and fade out transition. |
| `visible` | `boolean \| undefined` | - | Toggle the visibility of component. |

## CTabs

```jsx
import { CTabs } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeItemKey` | `string \| number \| undefined` | - | Controls the currently active tab. When provided, the component operates in a controlled mode. You must handle tab switching manually by updating this prop. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `defaultActiveItemKey` | `string \| number \| undefined` | - | Sets the initially active tab when the component mounts. After initialization, the component manages active tab changes internally. Use `defaultActiveItemKey` for uncontrolled usage. |
| `onChange` | `((value: string \| number) => void) \| undefined` | - | Callback fired when the active tab changes. - In controlled mode (`activeItemKey` provided), you must update `activeItemKey` yourself based on the value received. - In uncontrolled mode, this callback is called after internal state updates. |
