# React Stacks Helper

> Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.

Stacks offer a shortcut for applying a number of flexbox properties to quickly and easily create layouts in CoreUI. All credit for the concept and implementation goes to the open source [Pylon project](https://almonk.github.io/pylon/).

> **Heads up!** Support for gap utilities with flexbox isn't available in Safari prior to 14.5, so consider verifying your intended browser support. Grid layout should have no issues. [Read more](https://caniuse.com/flexbox-gap).

## Vertical

Use `.vstack` to create vertical layouts. Stacked items are full-width by default. Use `.gap-*` utilities to add space between items.

```html
<div className="vstack gap-4">
  <div className="p-3">First item</div>
  <div className="p-3">Second item</div>
  <div className="p-3">Third item</div>
</div>
```

## Horizontal

Use `.hstack` for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use `.gap-*` utilities to add space between items.

```html
<div className="hstack gap-4">
  <div className="p-3">First item</div>
  <div className="p-3">Second item</div>
  <div className="p-3">Third item</div>
</div>
```

Using horizontal margin utilities like `.ms-auto` as spacers:

```html
<div className="hstack gap-4">
  <div className="p-3">First item</div>
  <div className="p-3 ms-auto">Second item</div>
  <div className="p-3">Third item</div>
</div>
```

And with [vertical rules](https://coreui.io/react/docs/helpers/vertical-rule/):

```html
<div className="hstack gap-4">
  <div className="p-3">First item</div>
  <div className="p-3 ms-auto">Second item</div>
  <div className="vr"></div>
  <div className="p-3">Third item</div>
</div>
```

## Responsive

`.hstack{-sm|-md|-lg|-xl|-2xl}` and `.vstack{-sm|-md|-lg|-xl|-2xl}` switch direction at a breakpoint — a stack that reads as a row on a wide layout and as a column on a narrow one, without writing the flex utilities twice.

The breakpoint is measured on the **container**, not the viewport, so mark an ancestor with `.stack-container` (or the [`.contains-inline`](https://coreui.io/react/docs/utilities/container-queries/) utility) for the query to have something to read. Without it the direction never switches.

```html
<div className="stack-container">
  <div className="hstack-md vstack gap-4">
    <div className="p-3">First item</div>
    <div className="p-3">Second item</div>
    <div className="p-3">Third item</div>
  </div>
</div>
```

```jsx
<div className="stack-container">
  <div className="hstack-md vstack gap-4">
    <div className="p-3">First item</div>
    <div className="p-3">Second item</div>
    <div className="p-3">Third item</div>
  </div>
</div>
```

Because the width comes from the container, the same markup can be a column in a sidebar and a row in the main content area of the same page.

## Examples

Use `.vstack` to stack buttons and other elements:

```html
<div className="vstack gap-3 col-md-5 mx-auto">
  <button type="button" className="btn btn-solid theme-secondary">Save changes</button>
  <button type="button" className="btn btn-outline theme-secondary">Cancel</button>
</div>
```

Create an inline form with `.hstack`:

```html
<div className="hstack gap-4">
  <input className="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here..." />
  <button type="button" className="btn btn-solid theme-secondary">Submit</button>
  <div className="vr"></div>
  <button type="button" className="btn btn-outline theme-danger">Reset</button>
</div>
```

## Customizing

### Sass variables

```scss
.stack-container {
  @include set-container();
}

#{$stack-selectors} {
  display: flex;
  align-self: stretch;
}

// The responsive variants read the width of the nearest query container — put
// `.stack-container` (or the `.contains-inline` utility) on an ancestor, or the
// query has nothing to measure and the direction never switches.
@each $breakpoint in map.keys($breakpoints) {
  $infix: breakpoint-infix($breakpoint, $breakpoints);

  .hstack#{$infix} {
    @include container-breakpoint-up($breakpoint) {
      flex-direction: row;
      align-items: center;
    }
  }

  .vstack#{$infix} {
    @include container-breakpoint-up($breakpoint) {
      flex: 1 1 auto;
      flex-direction: column;
      align-items: stretch;
    }
  }
}
```
