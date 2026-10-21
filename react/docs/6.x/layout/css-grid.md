# CSS Grid

> Learn how to enable, use, and customize our alternate layout system built on CSS Grid with examples and code snippets.

The CoreUI for React.js default grid system represents the culmination of over a decade of CSS layout techniques, tried and tested by millions of people. But, it was also created without many of the modern CSS features and techniques we're seeing in browsers like the new CSS Grid.

> **The CSS Grid system ships enabled as of v6.** Its responsive classes are powered by
> [container queries](https://coreui.io/react/docs/utilities/container-queries/), so a `.grid` responds to its own
> width rather than to the viewport. Set `$enable-cssgrid: false` to leave it out of
> your build.

## How it works

With CoreUI, we've added the option to enable a separate grid system that's built on CSS Grid, but with a CoreUI twist. You still get classes you can apply on a whim to build responsive layouts, but with a different approach under the hood.

- **Both grid systems ship.** They are independent: set `$enable-grid-classes: false` to drop the default flexbox grid, or `$enable-cssgrid: false` to drop this one, then recompile your Sass.

- **Replace instances of `.row` with `.grid`.** The `.grid` class sets `display: grid` and creates a `grid-template` that you build on with your HTML.

- **Replace `.col-*` classes with `.g-col-*` classes.** This is because our CSS Grid columns use the `grid-column` property instead of `width`.

- **Columns and gutter sizes are set via CSS variables.** Set these on the parent `.grid` and customize however you want, inline or in a stylesheet, with `--cui-columns` and `--cui-gap`.

- **Responsive classes use container queries.** Each `.grid` is a query container (`container-type: inline-size`), so responsive `.g-col-*` and `.g-start-*` classes respond to the width of the `.grid` itself rather than the viewport.

In the future, CoreUI will likely shift to a hybrid solution as the `gap` property has achieved nearly full browser support for flexbox.

## Key differences

Compared to the default grid system:

- Flex utilities don't affect the CSS Grid columns in the same way.

- Gaps replaces gutters. The `gap` property replaces the horizontal `padding` from our default grid system and functions more like `margin`.

- As such, unlike `.row`s, `.grid`s have no negative margins and margin utilities cannot be used to change the grid gutters. Grid gaps are applied horizontally and vertically by default. See the [customizing section](#customizing) for more details.

- Inline and custom styles should be viewed as replacements for modifier classes (e.g., `style="--cui-columns: 3;"` vs `class="row-cols-3"`).

- Nesting works similarly, except every `.grid` starts from the defaults rather than picking up the grid around it. See the [nesting section](#nesting) for details.

## Examples

### Three columns

Three equal-width columns across all container sizes and devices can be created by using the `.g-col-4` classes. Add [responsive classes](#responsive) to change the layout by the `.grid` container's width.

```html
<div className="grid text-center">
  <div className="g-col-4">.g-col-4</div>
  <div className="g-col-4">.g-col-4</div>
  <div className="g-col-4">.g-col-4</div>
</div>
```

### Responsive

Use responsive classes to adjust your layout across breakpoints. Here we start with two columns on the narrowest containers, and then grow to three columns on medium containers and above.

Responsive `.g-col-*` and `.g-start-*` classes are powered by [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) rather than media queries. The `.grid` is a query container, so its items respond to the width of the `.grid` itself instead of the viewport — a `.grid` placed inside a narrow column switches layout based on that column's width, not on the size of the browser window.

> **`container-type` implies layout containment**, which makes every `.grid` the containing block for absolutely and fixed-positioned descendants. A `position: fixed` element inside a `.grid` is therefore positioned against the grid, not the viewport. Our own floating panels are unaffected — they render through a portal, outside the grid — but your own fixed markup needs to live outside it.

```html
<div className="grid text-center">
  <div className="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <div className="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <div className="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
</div>
```

Compare that to this two column layout at all container sizes.

```html
<div className="grid text-center">
  <div className="g-col-6">.g-col-6</div>
  <div className="g-col-6">.g-col-6</div>
</div>
```

## Wrapping

Grid items automatically wrap to the next line when there's no more room horizontally. Note that the `gap` applies to horizontal and vertical gaps between grid items.

```html
<div className="grid text-center">
  <div className="g-col-6">.g-col-6</div>
  <div className="g-col-6">.g-col-6</div>

  <div className="g-col-6">.g-col-6</div>
  <div className="g-col-6">.g-col-6</div>
</div>
```

## Starts

Start classes aim to replace our default grid's offset classes, but they're not entirely the same. CSS Grid creates a grid template through styles that tell browsers to "start at this column" and "end at this column." Those properties are `grid-column-start` and `grid-column-end`. Start classes are shorthand for the former. Pair them with the column classes to size and align your columns however you need. Start classes begin at `1` as `0` is an invalid value for these properties.

```html
<div className="grid text-center">
  <div className="g-col-3 g-start-2">.g-col-3 .g-start-2</div>
  <div className="g-col-4 g-start-6">.g-col-4 .g-start-6</div>
</div>
```

## Auto columns

When there are no classes on the grid items (the immediate children of a `.grid`), each grid item will automatically be sized to one column.

```html
<div className="grid text-center">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
```

This behavior can be mixed with grid column classes.

```html
<div className="grid text-center">
  <div className="g-col-6">.g-col-6</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
```

## Nesting

Similar to our default grid system, our CSS Grid allows for easy nesting of `.grid`s. Every `.grid` declares its own rows, columns and gap, so a nested one starts from the defaults no matter what the grid around it is set to. Consider the example below:

- We set three columns on the outer grid with `--cui-columns: 3`.
- The nested grid in the first auto-column takes the default twelve columns — the outer value does not reach it.
- The nested grid in the second auto-column is set to three columns of its own, matching its parent.
- The third auto-column has no nested content.

That independence is the point: a component built on `.grid` keeps its own layout wherever you drop it, instead of silently taking the column count of whatever contains it.

```html
<div className="grid text-center overflow-x-auto" style={{ '--cui-columns': '3' }}>
  <div>
    First auto-column
    <div className="grid">
      <div className="g-col-6">6 of 12</div>
      <div className="g-col-4">4 of 12</div>
      <div className="g-col-2">2 of 12</div>
    </div>
  </div>
  <div>
    Second auto-column
    <div className="grid" style={{ '--cui-columns': '3' }}>
      <div>Auto-column</div>
      <div>Auto-column</div>
    </div>
  </div>
  <div>Third auto-column</div>
</div>
```

## Customizing

Customize the number of columns, the number of rows, and the width of the gaps with local CSS variables.

| Variable | Default | Description |
| --- | --- | --- |
| `--cui-rows` | `1` | The number of rows in your grid template |
| `--cui-columns` | `12` | The number of columns in your grid template |
| `--cui-gap` | `1.5rem` | The size of the gap between columns (vertical and horizontal) |

Every `.grid` declares all three, so they show up in your browser's dev tools and each grid is self-contained. Set them on the `.grid` you want to change — inline, or in a stylesheet — and only that grid changes.

### No grid classes

Immediate children elements of `.grid` are grid items, so they'll be sized without explicitly adding a `.g-col` class.

```html
<div className="grid text-center" style={{ '--cui-columns': '3' }}>
  <div>Auto-column</div>
  <div>Auto-column</div>
  <div>Auto-column</div>
</div>
```

### Columns and gaps

Adjust the number of columns and the gap.

```html
<div className="grid text-center" style={{ '--cui-columns': '4', '--cui-gap': '5rem' }}>
  <div className="g-col-2">.g-col-2</div>
  <div className="g-col-2">.g-col-2</div>
</div>
```

```html
<div className="grid text-center" style={{ '--cui-columns': '10', '--cui-gap': '1rem' }}>
  <div className="g-col-6">.g-col-6</div>
  <div className="g-col-4">.g-col-4</div>
</div>
```

### Adding rows

Adding more rows and changing the placement of columns:

```html
<div className="grid text-center" style={{ '--cui-rows': '3', '--cui-columns': '3' }}>
  <div>Auto-column</div>
  <div className="g-start-2" style={{ gridRow: '2' }}>Auto-column</div>
  <div className="g-start-3" style={{ gridRow: '3' }}>Auto-column</div>
</div>
```

### Gaps

Change the vertical gaps only by modifying the `row-gap`. Note that we use `gap` on `.grid`s, but `row-gap` and `column-gap` can be modified as needed.

```html
<div className="grid text-center" style={{ rowGap: '0' }}>
  <div className="g-col-6">.g-col-6</div>
  <div className="g-col-6">.g-col-6</div>

  <div className="g-col-6">.g-col-6</div>
  <div className="g-col-6">.g-col-6</div>
</div>
```

Because of that, you can have different vertical and horizontal `gap`s, which can take a single value (all sides) or a pair of values (vertical and horizontal). This can be applied with an inline style for `gap`, or with our `--cui-gap` CSS variable.

```html
<div className="grid text-center" style={{ '--cui-gap': '.25rem 1rem' }}>
  <div className="g-col-6">.g-col-6</div>
  <div className="g-col-6">.g-col-6</div>

  <div className="g-col-6">.g-col-6</div>
  <div className="g-col-6">.g-col-6</div>
</div>
```

### Sass

One limitation of the CSS Grid is that our default classes are still generated by two Sass variables, `$grid-columns` and `$grid-gutter-x`. This effectively predetermines the number of classes generated in our compiled CSS. You have two options here:

- Modify those default Sass variables and recompile your CSS.
- Use inline or custom styles to augment the provided classes.

For example, you can increase the column count and change the gap size, and then size your "columns" with a mix of inline styles and predefined CSS Grid column classes (e.g., `.g-col-4`).

```html
<div className="grid text-center" style={{ '--cui-columns': '18', '--cui-gap': '.5rem' }}>
  <div style={{ gridColumn: 'span 14' }}>14 columns</div>
  <div className="g-col-4">.g-col-4</div>
</div>
```
