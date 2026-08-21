# Angular Grid

> Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.

## Example

CoreUI's grid system uses a series of containers, rows, and columns to layout and align content. It's built with
[flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) in new
window and is fully responsive. Below is an example and an in-depth explanation for how the grid
system comes together.

The above example creates three equal-width columns across all devices and viewports using our predefined grid
classes. Those columns are centered in the page with the parent `c-container`.

## How it works

Breaking it down, here's how the grid system comes together:

- **Our grid supports six responsive breakpoints**. Breakpoints are based on `min-width` media queries, meaning they
affect that breakpoint and all those above it (e.g., `[sm]="4"` applies to `sm`, `md`, `lg`, `xl`, and `xxl`). This
means you can
control container and column sizing and behavior by each breakpoint.
- **Containers center and horizontally pad your content**. Use `c-container` for a responsive pixel width,
`c-container fluid` for `width: 100%` across all viewports and devices, or a responsive container (e.g., `c-container
breakpoint="md"`) for
a combination of fluid and pixel widths.
- **Rows are wrappers for columns**. Each column has horizontal `padding` (called a **gutter**) for controlling the
space between them. This `padding` is then counteracted on the rows with negative margins to ensure the content in
your
columns is visually aligned down the left side. Rows also support modifier classes to [uniformly apply column
sizing](https://coreui.io/angular/docs/layout/grid/#row-columns)
and [gutter classes](https://coreui.io/angular/docs/layout/gutters) to change the spacing of your content.
- **Columns are incredibly flexible**. There are 12 template columns available per row, allowing you to create
different combinations of elements that span any number of columns. Column classes indicate the number of template
columns to span (e.g., `c-col [xs]="4"` spans four). Widths are set in percentages so you always have the same
relative sizing.
- **Gutters are also responsive and customizable**. [Gutter classes](https://coreui.io/angular/docs/layout/gutters)
are available across all breakpoints, with all the
same sizes as our [margin and padding spacing](https://coreui.io/docs/utilities/spacing/). Change horizontal gutters
with `.gx-*` classes, vertical gutters with `.gy-*`, or all gutters with `.g-*` classes. `.g-0` is also available to
remove gutters.

Be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs), like the [inability
to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#flexbug-9).

## Grid options

CoreUI grid system can adapt across all six default breakpoints, and any breakpoints you customize. The six default
grid tiers are as follow:

- Extra small (`xs`)
- Small (`sm`)
- Medium (`md`)
- Large (`lg`)
- Extra large (`xl`)
- Extra extra large (`xxl`)

As noted above, each of these breakpoints have their own container, unique class prefix, and modifiers. Here's how the
grid changes across these breakpoints:

<div class="table-responsive api-table"> <table class="table mb-4 table-striped"> <thead> <tr> <th scope="col"></th> <th scope="col"> xs<br /><span class="fw-normal">&#x3C;576px</span></th> <th scope="col"> sm<br /><span class="fw-normal">≥576px</span></th> <th scope="col"> md<br /><span class="fw-normal">≥768px</span></th> <th scope="col"> lg<br /><span class="fw-normal">≥992px</span></th> <th scope="col"> xl<br /><span class="fw-normal">≥1200px</span></th> <th scope="col"> xxl<br /><span class="fw-normal">≥1400px</span></th> </tr> </thead> <tbody> <tr> <th class="text-nowrap" scope="row">Container <code class="fw-normal">max-width</code></th> <td>None</td> <td>540px</td> <td>720px</td> <td>960px</td> <td>1140px</td> <td>1320px</td> </tr> <tr> <th class="text-nowrap" scope="row">Class prefix</th> <td><code>&#x3C;c-col xs=></code></td> <td><code>&#x3C;c-col sm=></code></td> <td><code>&#x3C;c-col md=></code></td> <td><code>&#x3C;c-col lg=></code></td> <td><code>&#x3C;c-col xl=></code></td> <td><code>&#x3C;c-col xxl=></code></td> </tr> <tr> <th class="text-nowrap" scope="row"># of columns</th> <td colspan="6">12</td> </tr> <tr> <th class="text-nowrap" scope="row">Gutter width</th> <td colspan="6">1.5rem (.75rem on left and right)</td> </tr> <tr> <th class="text-nowrap" scope="row">Custom gutters</th> <td colspan="6"><a href="../gutters">Yes</a></td> </tr> <tr> <th class="text-nowrap" scope="row">Nestable</th> <td colspan="6"><a href="#nesting">Yes</a></td> </tr> <tr> <th class="text-nowrap" scope="row">Column ordering</th> <td colspan="6"><a href="../columns">Yes</a></td> </tr> </tbody> </table> </div>

## Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like `c-col
sm="6"`.

### Equal-width

For example, here are two grid layouts that apply to every device and viewport, from `xs` to `xxl`. Add any number of
unit-less classes for each breakpoint you need and every column will be the same width.

### Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns
automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths.
Note that the other columns will resize no matter the width of the center column.

### Variable width content
Use `c-col xs|sm|md|lg|xl="auto"` props to size columns based on the natural width of their content.

## Responsive classes

CoreUI's grid includes six tiers of predefined classes for building complex responsive layouts. Customize the size of
your columns on extra small, small, medium, large, or extra large devices however you see fit.

### All breakpoints
For grids that are the same from the smallest of devices to the largest, use the `c-col` and `c-col xs=` classes.
Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `c-col`.

### Stacked to horizontal

Using a single set of `c-col sm=` classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (sm).

### Mix and match
Don't want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as
needed. See the example below for a better idea of how it all works.

### Row columns

Use the responsive `c-row [sm | md | lg | xl | xxl]=*` classes to quickly set the number of columns that best render your
content and layout. Whereas normal `c-col xs=` classes apply to the individual columns (e.g., `c-col xs="4"`), the row
columns classes are set on the parent `c-row` as a shortcut. With c-row `c-row [sm | md | lg | xl | xxl]="'auto'"` you can
give the columns their natural width.

Use these row columns classes to quickly create basic grid layouts or to control your card layouts.

## Nesting

To nest your content with the default grid, add a new `row` and set of `.col-sm-*` columns within an existing `.col-sm-*` column.
Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

## API reference

### Grid Module

```typescript
import { GridModule } from '@coreui/angular';

@NgModule({
    imports: [GridModule,]
})
export class AppModule() { }
```

### c-container
_component_

```jsx
import { ContainerComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `breakpoint` | `string` | `''` | Set container 100% wide until a breakpoint. |
| `fluid` | `boolean` | `false` | Set container 100% wide, spanning the entire width of the viewport. |

### c-row cRow
_component_ _directive_

```jsx
import { RowComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `lg` | `NumberOfColumns` | - | The number of columns/offset/order on large devices (<1200px). |
| `md` | `NumberOfColumns` | - | The number of columns/offset/order on medium devices (<992px). |
| `sm` | `NumberOfColumns` | - | The number of columns/offset/order on small devices (<768px). |
| `xl` | `NumberOfColumns` | - | The number of columns/offset/order on X-Large devices (<1400px). |
| `xs` | `NumberOfColumns` | - | The number of columns/offset/order on extra small devices (<576px). |
| `xxl` | `NumberOfColumns` | - | The number of columns/offset/order on XX-Large devices (≥1400px). |

### gutter
_directive_ for c-row

```jsx
import { GutterDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `gutter` | `number \| IGutterObject \| GutterBreakpoints` | `{}` | Define padding between columns to space and align content responsively in the Bootstrap grid system. |

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
