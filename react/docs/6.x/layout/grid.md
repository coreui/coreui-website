# Grid

> Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.

## Example

CoreUI's grid system uses a series of containers, rows, and columns to layout and align content. It's built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and is fully responsive. Below is an example and an in-depth explanation for how the grid system comes together.

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridExample = () => (
  <CContainer>
    <CRow>
      <CCol sm="auto">One of three columns</CCol>
      <CCol sm="auto">One of three columns</CCol>
      <CCol sm="auto">One of three columns</CCol>
    </CRow>
  </CContainer>
)
```

The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent `<CContainer>`.

## How it works

Breaking it down, here's how the grid system comes together:

- **Our grid supports [six responsive breakpoints](../breakpoints).** Breakpoints are based on `min-width` media queries, meaning they affect that breakpoint and all those above it (e.g., `sm={4}` applies to `sm`, `md`, `lg`, `xl`, and `2xl`). This means you can control container and column sizing and behavior by each breakpoint.

- **Containers center and horizontally pad your content.** Use `<CContainer>` for a responsive pixel width, `<CContainer fluid>` for `width: 100%` across all viewports and devices, or a responsive container (e.g., `<CContainer md>`) for a combination of fluid and pixel widths.

- **Rows are wrappers for columns.** Each column has horizontal `padding` (called a gutter) for controlling the space between them. This `padding` is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to [uniformly apply column sizing](#row-columns) and [gutter classes](../gutters) to change the spacing of your content.

- **Columns are incredibly flexible.** There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., `CCol xs={4}` spans four). `width`s are set in percentages so you always have the same relative sizing.

- **Gutters are also responsive and customizable.** [Gutter classes are available](../gutters) across all breakpoints, with all the same sizes as our [margin and padding spacing](https://coreui.io/react/docs/utilities/margin/). Change horizontal gutters with `xs|sm|md|lg|xl={{ gutterX: * }}` classes, vertical gutters with `xs|sm|md|lg|xl={{ gutterY: * }}`, or all gutters with `xs|sm|md|lg|xl={{ gutter: * }}` classes. `xs|sm|md|lg|xl={{ gutter: 0 }}` is also available to remove gutters. The top tier is spread in as `{...{ '2xl': { gutter: * } }}`, because `2xl` is not a valid JSX attribute name.

Be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs), like the [inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#flexbug-9).

## Grid options

CoreUI's grid system can adapt across all six default breakpoints, and any breakpoints you customize. The six default grid tiers are as follow:

- Extra small (xs)
- Small (sm)
- Medium (md)
- Large (lg)
- Extra large (xl)
- Extra extra large (2xl)

As noted above, each of these breakpoints have their own container, unique class prefix, and modifiers. Here's how the grid changes across these breakpoints:

{<div className="table-responsive">
  <table className="table mb-5">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">
          xs
          <div className="fw-normal">&lt;576px</div>
        </th>
        <th scope="col">
          sm
          <div className="fw-normal">&ge;576px</div>
        </th>
        <th scope="col">
          md
          <div className="fw-normal">&ge;768px</div>
        </th>
        <th scope="col">
          lg
          <div className="fw-normal">&ge;1024px</div>
        </th>
        <th scope="col">
          xl
          <div className="fw-normal">&ge;1280px</div>
        </th>
        <th scope="col">
          2xl
          <div className="fw-normal">&ge;1536px</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="text-nowrap" scope="row">Container <code className="fw-normal">max-width</code></th>
        <td>None (auto)</td>
        <td>540px</td>
        <td>720px</td>
        <td>960px</td>
        <td>1200px</td>
        <td>1440px</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">Class prefix</th>
        <td><code>.col-</code></td>
        <td><code>.col-sm-</code></td>
        <td><code>.col-md-</code></td>
        <td><code>.col-lg-</code></td>
        <td><code>.col-xl-</code></td>
        <td><code>.col-2xl-</code></td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row"># of columns</th>
        <td colSpan={6}>12</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">Gutter width</th>
        <td colSpan={6}>1.5rem (.75rem on left and right)</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">Custom gutters</th>
        <td colSpan={6}><a href="../gutters">Yes</a></td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">Nestable</th>
        <td colSpan={6}><a href="#nesting">Yes</a></td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">Column ordering</th>
        <td colSpan={6}><a href="../columns#reordering">Yes</a></td>
      </tr>
    </tbody>
  </table>
</div>}

## Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like `<CCol sm={6}>`.

### Equal-width

For example, here are two grid layouts that apply to every device and viewport, from `xs` to `2xl`. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridEqualWidthExample = () => (
  <CContainer>
    <CRow>
      <CCol>1 of 2</CCol>
      <CCol>2 of 2</CCol>
    </CRow>
    <CRow>
      <CCol>1 of 3</CCol>
      <CCol>2 of 3</CCol>
      <CCol>3 of 3</CCol>
    </CRow>
  </CContainer>
)
```

### Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridSettingOneColumnWidthExample = () => (
  <CContainer>
    <CRow>
      <CCol>1 of 3</CCol>
      <CCol xs={6}>2 of 3 (wider)</CCol>
      <CCol>3 of 3</CCol>
    </CRow>
    <CRow>
      <CCol>1 of 3</CCol>
      <CCol xs={6}>2 of 3 (wider)</CCol>
      <CCol>3 of 3</CCol>
    </CRow>
  </CContainer>
)
```

### Variable width content

Use `<CCol {breakpoint}="auto"` props to size columns based on the natural width of their content.

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridVariableWidthContentExample = () => (
  <CContainer>
    <div className="row justify-content-md-center">
      <CCol xs lg={2}>
        1 of 3
      </CCol>
      <CCol md="auto">Variable width content</CCol>
      <CCol xs lg={2}>
        3 of 3
      </CCol>
    </div>
    <CRow>
      <CCol>1 of 3</CCol>
      <CCol md="auto">Variable width content</CCol>
      <CCol xs lg={2}>
        3 of 3
      </CCol>
    </CRow>
  </CContainer>
)
```

## Responsive classes

CoreUI's grid includes six tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

### All breakpoints

For grids that are the same from the smallest of devices to the largest, use the `<CCol>` and `<CCol xs={*}>` classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `<CCol>`.

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridAllBreakpointsExample = () => (
  <CContainer>
    <CRow>
      <CCol>col</CCol>
      <CCol>col</CCol>
      <CCol>col</CCol>
      <CCol>col</CCol>
    </CRow>
    <CRow>
      <CCol xs={8}>col-8</CCol>
      <CCol xs={4}>col-4</CCol>
    </CRow>
  </CContainer>
)
```

### Stacked to horizontal

Using a single set of `<CCol sm={*}>` classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (`sm`).

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridStackedToHorizontalExample = () => (
  <CContainer>
    <CRow>
      <CCol sm={8}>col-sm-8</CCol>
      <CCol sm={4}>col-sm-4</CCol>
    </CRow>
    <CRow>
      <CCol sm>col-sm</CCol>
      <CCol sm>col-sm</CCol>
      <CCol sm>col-sm</CCol>
    </CRow>
  </CContainer>
)
```

### Mix and match

Don't want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridMixAndMatchExample = () => (
  <CContainer>
    <CRow>
      <CCol md={8}>.col-md-8</CCol>
      <CCol xs={6} md={4}>
        .col-6 .col-md-4
      </CCol>
    </CRow>
    <CRow>
      <CCol xs={6} md={4}>
        .col-6 .col-md-4
      </CCol>
      <CCol xs={6} md={4}>
        .col-6 .col-md-4
      </CCol>
      <CCol xs={6} md={4}>
        .col-6 .col-md-4
      </CCol>
    </CRow>
    <CRow>
      <CCol xs={6}>.col-6</CCol>
      <CCol xs={6}>.col-6</CCol>
    </CRow>
  </CContainer>
)
```

### Row columns

Use the responsive `{breakpoint}={{ cols: * }}` classes to quickly set the number of columns that best render your content and layout. Whereas normal `<CCol xs={*}>` classes apply to the individual columns (e.g., `<CCol xs={4}>`), the row columns classes are set on the parent `<CRow>` as a shortcut. With `{breakpoint}={{ cols: 'auto' }}` you can give the columns their natural width.

Use these row columns classes to quickly create basic grid layouts or to control your card layouts.

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridRowColumns2Example = () => (
  <CContainer>
    <CRow xs={{ cols: 2 }}>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
    </CRow>
  </CContainer>
)
```

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridRowColumns3Example = () => (
  <CContainer>
    <CRow xs={{ cols: 3 }}>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
    </CRow>
  </CContainer>
)
```

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridRowColumnsAutoExample = () => (
  <CContainer>
    <CRow xs={{ cols: 'auto' }}>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
    </CRow>
  </CContainer>
)
```

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridRowColumns4Example = () => (
  <CContainer>
    <CRow xs={{ cols: 4 }}>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
    </CRow>
  </CContainer>
)
```

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridRowColumns4ColExample = () => (
  <CContainer>
    <CRow xs={{ cols: 4 }}>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol xs={6}>Column</CCol>
      <CCol>Column</CCol>
    </CRow>
  </CContainer>
)
```

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridRowColumnsResponsiveExample = () => (
  <CContainer>
    <CRow xs={{ cols: 1 }} sm={{ cols: 2 }} md={{ cols: 4 }}>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
    </CRow>
  </CContainer>
)
```

## Nesting

To nest your content with the default grid, add a new `<CRow>` and set of `<CCol sm={*}>` columns within an existing `<CCol sm={*}>` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

```html
import { CCol, CContainer, CRow } from '@coreui/react'

export const GridNestingExample = () => (
  <CContainer>
    <CRow>
      <CCol sm={3}>Level 1: .col-sm-3</CCol>
      <CCol sm={9}>
        <CRow>
          <CCol xs={8} sm={6}>
            Level 2: .col-8 .col-sm-6
          </CCol>
          <CCol xs={4} sm={6}>
            Level 2: .col-4 .col-sm-6
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  </CContainer>
)
```

## Customizing the grid

Using our built-in grid Sass variables and maps, it's possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, and the container widths—then recompile.

### Columns and gutters

The number of grid columns can be modified via Sass variables. `$grid-columns` is used to generate the widths (in percent) of each individual column while `$grid-gutter-x` sets the width of the column gutters and `$grid-gutter-y` the height of the row gutters.

```scss
$grid-columns: 12 !default;
$grid-gutter-x: 1.5rem !default;
$grid-gutter-y: 0 !default;
```

### Grid tiers

Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you'd update the `$breakpoints` and `$container-max-widths` to something like this:

```scss
$breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);
```

When making any changes to the Sass variables or maps, you'll need to save your changes and recompile. Doing so will output a brand new set of predefined grid classes for column widths, offsets, and ordering. Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid values in `px` (not `rem`, `em`, or `%`).

### Sass variables

Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.

```scss
$grid-columns:  12;
$grid-gutter-x: 1.5rem;
```

```scss
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px
) !default;
```

```scss
$container-max-widths: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$container-max-widths: defaults(
  (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1200px,
    2xl: 1440px
  ),
  $container-max-widths
);
```

### Sass mixins

Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.

```scss
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();

// Without optional size values, the mixin will create equal columns (similar to using .col)
@include make-col();
@include make-col($size, $columns: $grid-columns);

// Offset with margins
@include make-col-offset($size, $columns: $grid-columns);
```

### Example usage

You can modify the variables to your own custom values, or just use the mixins with their default values. Here's an example of using the default settings to create a two-column layout with a gap between.

```scss
.example-container {
  @include make-container();
  // Make sure to define this width after the mixin to override
  // `width: 100%` generated by `make-container()`
  width: 800px;
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
```

```jsx
<div className="example-container">
  <div className="example-row">
    <div className="example-content-main">Main content</div>
    <div className="example-content-secondary">Secondary content</div>
  </div>
</div>
```

## API

### CContainer

```jsx
import { CContainer } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `2xl` | `boolean` | - | Set container 100% wide until 2X-large breakpoint. Renamed from `xxl`. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `fluid` | `boolean` | - | Set container 100% wide, spanning the entire width of the viewport. |
| `lg` | `boolean` | - | Set container 100% wide until large breakpoint. |
| `md` | `boolean` | - | Set container 100% wide until medium breakpoint. |
| `sm` | `boolean` | - | Set container 100% wide until small breakpoint. |
| `xl` | `boolean` | - | Set container 100% wide until X-large breakpoint. |

### CRow

```jsx
import { CRow } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `2xl` | `{{ cols: 'auto' \| number \| string } \| { gutter: number \| string } \| { gutterX: number \| string } \| { gutterY: number \| string }}` | - | The number of columns/offset/order on 2X-Large devices (≥1536px). Renamed from `xxl`. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `lg` | `{{ cols: 'auto' \| number \| string } \| { gutter: number \| string } \| { gutterX: number \| string } \| { gutterY: number \| string }}` | - | The number of columns/offset/order on large devices (<1280px). |
| `md` | `{{ cols: 'auto' \| number \| string } \| { gutter: number \| string } \| { gutterX: number \| string } \| { gutterY: number \| string }}` | - | The number of columns/offset/order on medium devices (<1024px). |
| `sm` | `{{ cols: 'auto' \| number \| string } \| { gutter: number \| string } \| { gutterX: number \| string } \| { gutterY: number \| string }}` | - | The number of columns/offset/order on small devices (<768px). |
| `xl` | `{{ cols: 'auto' \| number \| string } \| { gutter: number \| string } \| { gutterX: number \| string } \| { gutterY: number \| string }}` | - | The number of columns/offset/order on X-Large devices (<1536px). |
| `xs` | `{{ cols: 'auto' \| number \| string } \| { gutter: number \| string } \| { gutterX: number \| string } \| { gutterY: number \| string }}` | - | The number of columns/offset/order on extra small devices (<576px). |

### CCol

```jsx
import { CCol } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `2xl` | `{ 'auto' \| number \| string \| boolean \| { span: 'auto' \| number \| string \| boolean } \| { offset: number \| string } \| { order: 'first' \| 'last' \| number \| string }}` | - | The number of columns/offset/order on 2X-Large devices (≥1536px). Renamed from `xxl`. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `lg` | `{ 'auto' \| number \| string \| boolean \| { span: 'auto' \| number \| string \| boolean } \| { offset: number \| string } \| { order: 'first' \| 'last' \| number \| string }}` | - | The number of columns/offset/order on large devices (<1280px). |
| `md` | `{ 'auto' \| number \| string \| boolean \| { span: 'auto' \| number \| string \| boolean } \| { offset: number \| string } \| { order: 'first' \| 'last' \| number \| string }}` | - | The number of columns/offset/order on medium devices (<1024px). |
| `sm` | `{ 'auto' \| number \| string \| boolean \| { span: 'auto' \| number \| string \| boolean } \| { offset: number \| string } \| { order: 'first' \| 'last' \| number \| string }}` | - | The number of columns/offset/order on small devices (<768px). |
| `xl` | `{ 'auto' \| number \| string \| boolean \| { span: 'auto' \| number \| string \| boolean } \| { offset: number \| string } \| { order: 'first' \| 'last' \| number \| string }}` | - | The number of columns/offset/order on X-Large devices (<1536px). |
| `xs` | `{ 'auto' \| number \| string \| boolean \| { span: 'auto' \| number \| string \| boolean } \| { offset: number \| string } \| { order: 'first' \| 'last' \| number \| string }}` | - | The number of columns/offset/order on extra small devices (<576px). |
