# React Card Component API

> Explore the API reference for the React Card component and discover how to effectively utilize its props for customization.

## CCard

```jsx
import { CCard } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `layout` | `"row"` | - | Specify a layout type. |
| `textBgColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Paints the card's frame and caps with one of CoreUI’s themed colors. The body keeps the card background — put the class on a single section to theme only that section. |
| `translucent` | `boolean` | - | Let the background through the card and blur it. |
| `variant` | `"subtle"` | - | Set the card variant. The default is solid. |

## CCardBody

```jsx
import { CCardBody } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CCardFooter

```jsx
import { CCardFooter } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CCardGroup

```jsx
import { CCardGroup } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CCardHeader

```jsx
import { CCardHeader } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `div` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CCardImage

```jsx
import { CCardImage } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "img") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `img` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `orientation` | `"top" \| "bottom" \| "start" \| "end"` | - | Optionally orientate the image to the top, bottom, or — in a `layout="row"` card — to the start or end. |

## CCardImageOverlay

```jsx
import { CCardImageOverlay } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CCardSubtitle

```jsx
import { CCardSubtitle } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h6") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `h6` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |

## CCardText

```jsx
import { CCardText } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "p") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `p` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |

## CCardTitle

```jsx
import { CCardTitle } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h5") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `h5` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
