# React Clearfix Helper

> Quickly and easily clear floated content within a container by adding a clearfix utility.

Easily clear `float`s by adding `.clearfix` **to the parent element**. Can also be used as a mixin.

Use in HTML:

```jsx
<div className="clearfix">...</div>
```

The mixin source code:

```scss
@mixin clearfix() {
  &::after {
    display: block;
    clear: both;
    content: "";
  }
}
```

Use the mixin in SCSS:

```scss
.element {
  @include clearfix;
}
```

The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.

```html
<div className="bg-info clearfix">
  <button type="button" className="btn btn-solid theme-secondary float-start">Example Button floated left</button>
  <button type="button" className="btn btn-solid theme-secondary float-end">Example Button floated right</button>
</div>
```
