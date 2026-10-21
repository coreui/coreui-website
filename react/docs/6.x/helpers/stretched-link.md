# React Stretched link Helper

> Make any HTML element or CoreUI for React component clickable by "stretching" a nested link via CSS.

Add `.stretched-link` to a link to make its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) clickable via a `::after` pseudo element. In most cases, this means that an element with `position: relative;` that contains a link with the `.stretched-link` class is clickable. Please note given [how CSS `position` works](https://www.w3.org/TR/CSS21/visuren.html#propdef-position), `.stretched-link` cannot be mixed with most table elements.

Cards have `position: relative` by default in CoreUI, so in this case you can safely add the `.stretched-link` class to a link in the card without any other HTML changes.

Multiple links and tap targets are not recommended with stretched links. However, some `position` and `z-index` styles can help should this be required.

```html
<div className="card" style={{ width: '18rem' }}>
  <svg className="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Card image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Card image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">false</text></svg>
  <div className="card-body">
    <h5 className="card-title">Card with stretched link</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-solid theme-primary stretched-link">Go somewhere</a>
  </div>
</div>
```

Most custom components do not have `position: relative` by default, so we need to add the `.position-relative` here to prevent the link from stretching outside the parent element.

```html
<div className="d-flex position-relative">
  <svg className="docs-placeholder-img flex-shrink-0 me-4" width="144" height="144" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Generic placeholder image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Generic placeholder image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">false</text></svg>
  <div>
    <h5 className="mt-0">Custom component with stretched link</h5>
    <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a href="#" className="stretched-link">Go somewhere</a>
  </div>
</div>
```

```html
<div className="row g-0 bg-4 position-relative">
  <div className="col-md-6 mb-md-0 p-md-5">
    <svg className="docs-placeholder-img w-100" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Generic placeholder image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Generic placeholder image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">false</text></svg>
  </div>
  <div className="col-md-6 p-5 ps-md-0">
    <h5 className="mt-0">Columns with stretched link</h5>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a href="#" className="stretched-link">Go somewhere</a>
  </div>
</div>
```

## Identifying the containing block

If the stretched link doesn't seem to work, the [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) will probably be the cause. The following CSS properties will make an element the containing block:

- A `position` value other than `static`
- A `transform` or `perspective` value other than `none`
- A `will-change` value of `transform` or `perspective`
- A `filter` value other than `none` or a `will-change` value of `filter` (only works on Firefox)

```html
<div className="card" style={{ width: '18rem' }}>
  <svg className="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Card image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Card image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">false</text></svg>
  <div className="card-body">
    <h5 className="card-title">Card with stretched links</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">
      <a href="#" className="stretched-link fg-danger" style={{ position: 'relative' }}>Stretched link will not work here, because <code>position: relative</code> is added to the link</a>
    </p>
    <p className="card-text bg-4" style={{ transform: 'rotate(0)' }}>
      This <a href="#" className="fg-warning stretched-link">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.
    </p>
  </div>
</div>
```

## Customizing

### CSS variables

Modify the `--cui-stretched-link-z-index` CSS variable to lift the generated overlay above other positioned content inside the same containing block.

```scss
$stretched-link-tokens: defaults(
  (
    --cui-stretched-link-z-index: 1,
  ),
  $stretched-link-tokens
);
```

### Sass variables

```scss
$stretched-link-pseudo-element: after !default;
```
