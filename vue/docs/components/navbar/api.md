# Vue Navbar Component API

> Explore the API reference for the Vue Navbar component and discover how to effectively utilize its props for customization.

## CNavbar

```jsx
import { CNavbar } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'nav'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `colorScheme` | `string` | - | Sets if the color of text should be colored for a light or dark dark background. |
| `container` | `boolean\|string` | - | Defines optional container wrapping children elements. |
| `expand` | `boolean\|string` | - | Defines the responsive breakpoint to determine when content collapses. |
| `placement` | `string` | - | Place component in non-static positions. |

## CNavbarBrand

```jsx
import { CNavbarBrand } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'a'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |

## CNavbarNav

```jsx
import { CNavbarNav } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'ul'` | Component used for the root node. Either a string to use a HTML element or a component. |
