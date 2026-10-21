# React Vertical alignment Utilities

> Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.

Change the alignment of elements with the [`vertical-alignment`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.

Choose from `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom`, and `.align-text-top` as needed.

To vertically center non-inline content (like `<div>`s and more), use our [flex box utilities](https://coreui.io/react/docs/utilities/align-items/).

With inline elements:

```html
<span className="align-baseline">baseline</span>
<span className="align-top">top</span>
<span className="align-middle">middle</span>
<span className="align-bottom">bottom</span>
<span className="align-text-top">text-top</span>
<span className="align-text-bottom">text-bottom</span>
```

With table cells:

```html
<table style={{ height: '100px' }}>
  <tbody>
    <tr>
      <td className="align-baseline">baseline</td>
      <td className="align-top">top</td>
      <td className="align-middle">middle</td>
      <td className="align-bottom">bottom</td>
      <td className="align-text-top">text-top</td>
      <td className="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>
```

## Customizing

### Utilities API

Vertical align utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"align": (
  property: vertical-align,
  class: align,
  values: baseline top middle bottom text-bottom text-top
),
```
