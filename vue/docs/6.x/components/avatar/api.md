# Vue Avatar Component API

> Explore the API reference for the Vue Avatar component and discover how to effectively utilize its props for customization.

## CAvatar

```jsx
import { CAvatar } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaStatusLabel` | `string` | `undefined` | Names the status indicator for assistive technologies. The indicator is a few pixels of color and nothing else, so a state that carries meaning has to be named; without this the indicator stays decorative. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `shape` | `Shape` | - | Select the shape of the component. |
| `size` | `string` | - | Size the component small, large, or extra large. |
| `src` | `string` | - | The src attribute for the img element. |
| `status` | `Color` | - | Sets the color context of the status indicator to one of CoreUI’s themed colors. |
| `theme` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `variant` | `string` | - | Set the avatar variant. The default is solid. |

## CAvatarStack

```jsx
import { CAvatarStack } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `string` | - | Size every avatar in the stack at once. |
