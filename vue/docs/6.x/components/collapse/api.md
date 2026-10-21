# Vue Collapse Component API

> Explore the API reference for the Vue Collapse component and discover how to effectively utilize its props for customization.

## CCollapse

```jsx
import { CCollapse } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `hiddenUntilFound` | `boolean` | - | Hide the collapsed content with `hidden="until-found"` instead of taking it out of the layout, so the browser's find-in-page searches it and reveals it on a match. The `show` event fires when it does — set `show` from it, or the stylesheet hides the content the reader was just sent to. |
| `horizontal` | `boolean` | - | Set horizontal collapsing to transition the width instead of height. |
| `show` | `boolean` | `undefined` | Toggle the visibility of component. |
| `visible` | `boolean` | - | Toggle the visibility of component. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired when the component requests to be hidden. |
| `show` | Callback fired when the component requests to be shown. |
