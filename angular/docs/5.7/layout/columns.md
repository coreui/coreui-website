# Angular Columns

> Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to flexbox grid system.

## How they work

- **Columns build on the grid's flexbox architecture**. Flexbox means we have options for changing individual columns
and [modifying groups of columns at the row level](https://coreui.io/angular/docs/layout/grid#row-columns). You
choose how columns grow, shrink, or otherwise change.

- **When building grid layouts, all content goes in columns**. The hierarchy of CoreUI grid goes from
[container](https://coreui.io/angular/docs/layout/containers) to
row to column to your content. On rare occasions, you may combine content and column, but be aware there can be
unintended consequences.

- **CoreUI for Angular includes predefined components for creating fast, responsive layouts**. With [six
breakpoints](https://coreui.io/angular/docs/layout/breakpoints)
and a dozen columns at each grid tier, we have dozens of components already built for you to create your desired
layouts. This can be disabled via Sass if you wish.

## Alignment
Use flexbox alignment utilities to vertically and horizontally align columns.

### Vertical alignment

### Horizontal alignment

### Column wrapping
If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new
line.

### Column breaks
Breaking columns to a new line in flexbox requires a small hack - add an element with `width: 100%` wherever you want
to wrap your columns to a new line. Normally this is accomplished with multiple `c-row`s, but not every implementation
method can account for this.

You may also apply this break at specific breakpoints with our [responsive display utilities](https://coreui.io/docs/utilities/display).

## Reordering

### Order props

Use `order="1"` (`first`, `1..5`, `last`) props for controlling the visual order of your content. These props are
responsive, so you can set the order by breakpoint (e.g., `order="{xs: 1, md: 2}"`).
Includes support for 1 through 5 across all six grid tiers.

There are also responsive props `order="first"` and `order="last"` with responsive variations
`order={xs: "last", sm: "first"}` that change the order of an element by applying order: `-1` and order: `6`,
respectively. These values can also be intermixed with the numbered `1..5` values as needed.

## Offsetting columns
You can offset grid columns in two ways: our col props `offset="0..12"` with responsive variations
`offset={md: 2, lg: 3}` col props and our [margin utilities](https://coreui.io/docs/utilities/spacing).
Grid props are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.

### Offset prop
Move columns to the right using `offset={ md: * }` props. These props increase the left margin of a column by `*` columns.
For example, `offset={ md: 4 }` moves .col-md-4 over four columns.

### Margin utilities
You can use margin utilities like `.me-auto` to force sibling columns away from one another.

## Standalone columns
The `c-col` component can also be used outside a `c-row` to give an element a specific width. Whenever column
component are used as non direct children of a row, the paddings are omitted.

The classes can be used together with utilities to create responsive floated images. Make sure to wrap the content in
a `.clearfix` wrapper to clear the float if the text is shorter.

## API reference

### Grid Module

```typescript
import { GridModule } from '@coreui/angular';

@NgModule({
    imports: [GridModule,]
})
export class AppModule() { }
```

### c-col cCol
_component_ _directive_

```jsx
import { ColComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cCol` | `number \| boolean \| 'auto'` | `false` | The number of columns/offset/order on extra small devices (<576px). |
| `lg` | `number \| boolean \| 'auto'` | `false` | The number of columns/offset/order on large devices (<1200px). |
| `md` | `number \| boolean \| 'auto'` | `false` | The number of columns/offset/order on medium devices (<992px). |
| `offset` | `ColOffsetType` | - | Offset grid columns. |
| `order` | `ColOrderType` | - | Controls the visual order of your columns. Includes support for `1` through `5` across all breakpoints. |
| `sm` | `number \| boolean \| 'auto'` | `false` | The number of columns/offset/order on small devices (<768px). |
| `xl` | `number \| boolean \| 'auto'` | `false` | The number of columns/offset/order on X-Large devices (<1400px). |
| `xs` | `number \| boolean \| 'auto'` | `false` | The number of columns on extra small devices (<576px). |
| `xxl` | `number \| boolean \| 'auto'` | `false` | The number of columns/offset/order on XX-Large devices (≥1400px). |
