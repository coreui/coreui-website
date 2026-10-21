# React Visibility Utilities

> Control the visibility of elements, without modifying their display, with visibility utilities.

Set the `visibility` of elements with our visibility utilities. These utility classes do not modify the `display` value at all and do not affect layout – `.invisible` elements still take up space in the page.

> Elements with the `.invisible` class will be hidden *both* visually and for assistive technology/screen reader users.

Apply `.visible` or `.invisible` as needed.

```jsx
<div className="visible">...</div>
<div className="invisible">...</div>
```

```scss
// Class
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
```

## Customizing

### Utilities API

Visibility utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"visibility": (
  property: visibility,
  class: null,
  values: (
    visible: visible,
    invisible: hidden,
  )
),
```
