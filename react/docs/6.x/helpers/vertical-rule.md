# React Vertical rule Helper

> Use the custom vertical rule helper to create vertical dividers like the `<hr>` element.

## How it works

Vertical rules are inspired by the `<hr />` element, allowing you to create vertical dividers in common layouts. They're styled just like `<hr />` elements:

- They're `1px` wide
- They have `min-height` of `1em`
- Their color is set via `currentColor` and `opacity`

Customize them with additional styles as needed.

## Example

```html
<div className="vr"></div>
```

Vertical rules scale their height in flex layouts:

```html
<div className="d-flex" style={{ height: '200px' }}>
  <div className="vr"></div>
</div>
```

## With stacks

They can also be used in [stacks](https://coreui.io/react/docs/helpers/stacks/):

```html
<div className="hstack gap-4">
  <div className="bg-4 border">First item</div>
  <div className="bg-4 border ms-auto">Second item</div>
  <div className="vr"></div>
  <div className="bg-4 border">Third item</div>
</div>
```

## Customizing

### CSS variables

Modify the `--cui-vr-*` CSS variables on any `.vr` to change its width or color.

```scss
$vr-tokens: defaults(
  (
    --cui-vr-border-width: var(--cui-border-width),
    --cui-vr-color: var(--cui-border-color),
  ),
  $vr-tokens
);
```
