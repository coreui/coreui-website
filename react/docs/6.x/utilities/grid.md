# React Grid Utilities

> Lay out and align CSS Grid containers and their items with responsive utilities for track counts, auto flow, and inline-axis alignment.

These utilities work on any CSS Grid container — our [`.grid`](https://coreui.io/react/docs/layout/css-grid/), a `.d-grid`, or an element you gave `display: grid` yourself. They do nothing in flexbox: flex has no `justify-items`, and it ignores `justify-self`.

## Column counts

Set the track list with `.grid-cols-{1|2|3|4|6}`. Each one divides the container into equal fractions, so the items need no width of their own.

```html
<div className="d-grid grid-cols-3 gap-3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

On our `.grid` component the same job is done by `--cui-columns`, which takes any number. The class is the shortcut for the counts you reach for most.

### Subgrid

`.grid-cols-subgrid` makes a nested grid adopt its parent's tracks instead of defining its own, so items in different rows line up on the same columns.

```html
<div className="d-grid grid-cols-3 gap-3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div className="d-grid grid-cols-subgrid gap-3" style={{ gridColumn: 'span 3' }}>
    <div>Aligned to column 1</div>
    <div>2</div>
    <div>3</div>
  </div>
</div>
```

## Fill columns

`.grid-cols-fill` is the item-side counterpart: it spans the element across every track the container ended up with, whatever that number is.

```html
<div className="d-grid grid-cols-3 gap-3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div className="grid-cols-fill">Spans the full row</div>
</div>
```

## Auto flow

`.grid-auto-flow-{row|column|dense}` controls how items that were not placed explicitly get filled in — down the rows by default, across the columns with `column`, or back-filling earlier gaps with `dense`.

```html
<div className="d-grid grid-cols-3 grid-auto-flow-column gap-3" style={{ gridTemplateRows: 'repeat(2, auto)' }}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

## Alignment

`align-items` and `align-self` position items on the block axis, and they work in both flexbox and grid — they are covered under [flex utilities](https://coreui.io/react/docs/utilities/align-items/). The inline axis is grid-only.

The inline axis is grid-only: see [justify items](https://coreui.io/react/docs/utilities/justify-items/) and [place items](https://coreui.io/react/docs/utilities/place-items/).

## Responsive

Every utility on this page has responsive variants at each [breakpoint](https://coreui.io/react/docs/layout/breakpoints/) — `.grid-cols-md-2`, `.justify-items-lg-center`, `.grid-auto-flow-xl-column`, and so on. They read the **viewport** width, like every other responsive utility. To respond to a container's width instead, see [container queries](https://coreui.io/react/docs/utilities/container-queries/).

```html
<div className="d-grid grid-cols-1 grid-cols-md-2 grid-cols-lg-4 gap-3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

## Customizing

### Sass variables

```scss
// `grid-cols-*` sets the track list on the container; `grid-cols-fill` is
// the item counterpart, spanning whatever the container ended up with.
"grid-template-columns": (
  responsive: true,
  property: grid-template-columns,
  class: grid-cols,
  values: (
    1: 1fr,
    2: repeat(2, 1fr),
    3: repeat(3, 1fr),
    4: repeat(4, 1fr),
    6: repeat(6, 1fr),
    subgrid: subgrid,
  )
),
"grid-column": (
  responsive: true,
  property: grid-column,
  class: grid-cols,
  values: (
    fill: #{"1 / -1"},
  )
),
"grid-auto-flow": (
  responsive: true,
  property: grid-auto-flow,
  class: grid-auto-flow,
  values: row column dense
),
```

The block lives in the `$utilities` map, so the [utility API](https://coreui.io/react/docs/utilities/api/) can extend, restrict or remove it like any other family.
