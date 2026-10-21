# React Collapse Component API

> Explore the API reference for the React Collapse component and discover how to effectively utilize its props for customization.

## CCollapse

```jsx
import { CCollapse } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `hiddenUntilFound` | `boolean` | - | Hide the collapsed content with `hidden="until-found"` instead of taking it out of the layout, so the browser's find-in-page searches it and reveals it on a match. `onShow` fires when it does — set `show` from it, or the stylesheet hides the content the reader was just sent to. |
| `horizontal` | `boolean` | - | Set horizontal collapsing to transition the width instead of height. |
| `onHide` | `(() => void)` | - | Callback fired when the component requests to be hidden. |
| `onShow` | `(() => void)` | - | Callback fired when the component requests to be shown. |
| `show` | `boolean` | - | Toggle the visibility of component. |
| `visible` | `boolean` | - | Toggle the visibility of component. |
