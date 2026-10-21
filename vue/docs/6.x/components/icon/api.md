# Vue Icon Component API

> Explore the API reference for the Vue Icon component and discover how to effectively utilize its props for customization.

## CIcon

```jsx
import { CIcon } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `string\|array` | `undefined` | Use `:icon="..."` instead of |
| `customClassName` | `string\|array\|object` | `undefined` | Use for replacing default CIcon component classes. Prop is overriding the 'size' prop. |
| `icon` | `string \| string[]` | `undefined` | Name of the icon placed in React object or SVG content. |
| `name` | `string` | `undefined` | Use `icon="..."` instead of |
| `size` | `string` | `undefined` | Size of the icon. Available sizes: 'sm', 'lg', 'xl', 'xxl', '3xl...9xl', 'custom', 'custom-size'. |
| `title` | `string` | `undefined` | Title tag content. |
| `use` | `string` | `undefined` | If defined component will be rendered using 'use' tag. |

## CIconSvg

```jsx
import { CIconSvg } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClassName` | `string\|array\|object` | - | Use for replacing default CIconSvg component classes. Prop is overriding the 'size' prop. |
| `height` | `number` | - | The height attribute defines the vertical length of an icon. |
| `size` | `string` | - | Size of the icon. Available sizes: 'sm', 'lg', 'xl', 'xxl', '3xl...9xl', 'custom', 'custom-size'. |
| `title` | `string` | - | Title tag content. |
| `width` | `number` | - | The width attribute defines the horizontal length of an icon. |
