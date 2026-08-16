# Vue Card Component API

> Explore the API reference for the Vue Card component and discover how to effectively utilize its props for customization.

## CCard

```jsx
import { CCard } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `textBgColor` | `Color` | - | Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. |
| `textColor` | `TextColor` | - | Sets the text color context of the component to one of CoreUI’s themed colors. |

## CCardHeader

```jsx
import { CCardHeader } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |

## CCardImage

```jsx
import { CCardImage } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'img'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `orientation` | `string` | - | Optionally orientate the image to the top, bottom. |

## CCardSubtitle

```jsx
import { CCardSubtitle } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'h6'` | Component used for the root node. Either a string to use a HTML element or a component. |

## CCardText

```jsx
import { CCardText } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'p'` | Component used for the root node. Either a string to use a HTML element or a component. |

## CCardTitle

```jsx
import { CCardTitle } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'h5'` | Component used for the root node. Either a string to use a HTML element or a component. |
