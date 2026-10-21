# React Text truncation Helper

> Truncate long strings of text with an ellipsis.

For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis. **Requires `display: inline-block` or `display: block`.**

```html
<!-- Block level -->
<div className="row">
  <div className="col-2 text-truncate">
    This text is quite long, and will be truncated once displayed.
  </div>
</div>

<!-- Inline level -->
<span className="d-inline-block text-truncate" style={{ maxWidth: '150px' }}>
  This text is quite long, and will be truncated once displayed.
</span>
```
