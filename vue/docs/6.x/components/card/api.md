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
| `layout` | `string` | - | Specify a layout type. |
| `textBgColor` | `Color` | - | Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. |
| `theme` | `Color` | - | Paints the card's frame and caps with one of CoreUI’s themed colors. The body keeps the card background — put the class on a single section to theme only that section. |
| `translucent` | `boolean` | - | Let the background through the card and blur it. |
| `variant` | `string` | - | Set the card variant. The default is solid. |

## CCardBody

```jsx
import { CCardBody } from '@coreui/vue'
```

## CCardFooter

```jsx
import { CCardFooter } from '@coreui/vue'
```

## CCardGroup

```jsx
import { CCardGroup } from '@coreui/vue'
```

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
| `orientation` | `string` | - | Optionally orientate the image to the top, bottom, or — in a `layout="row"` card — to the start or end. |

## CCardImageOverlay

```jsx
import { CCardImageOverlay } from '@coreui/vue'
```

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
