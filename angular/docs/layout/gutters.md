# Angular Gutters

> Gutters are the padding between your columns, used to responsively space and align content in the CoreUI for Angular grid system.

## How they work

- **Gutters are the gaps between column content**, created by horizontal padding. We set `padding-right` and `padding-left` on each column, and use negative margin to offset that at the start and end of each row to align content.

- **Gutters start at `1.5rem (24px)` wide**. This allows us to match our grid to the [padding and margin spacers](https://coreui.io/docs/utilities/spacing) scale.

- **Gutters can be responsively adjusted**. Use breakpoint-specific gutter props to modify horizontal gutters, vertical gutters, and all gutters.

## Horizontal gutters

`c-row [gutter]={gx: *}` directive can be used to control the horizontal gutter widths. The `c-container` or
`c-container fluid` parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a
matching padding utility. For example, in the following example we’ve increased the padding with `.px-4`:

An alternative solution is to add a wrapper around the `c-row` with the `.overflow-hidden` class:

## Vertical gutters

`c-row [gutter]={gy: *}` directive can be used to control the vertical gutter widths. Like the horizontal gutters,
the vertical gutters can cause some overflow below the `c-row` at the end of a page. If this occurs, add a wrapper
around `c-row` with the `.overflow-hidden` class:

## Horizontal and vertical gutters

`c-row [gutter]="2"` directive can be used to control the horizontal gutter widths, for the following example we use
a smaller gutter width, so there won't be a need to add the `.overflow-hidden` wrapper class.

## Row columns gutters

Gutter props can also be added to row columns. In the following example, we use responsive row columns and responsive gutter props.

## No gutters

The gutters between columns in our predefined grid props can be removed with `[gutter]="{g: 0}"`.
This removes the negative margins from `c-row` and the horizontal padding from all immediate children columns.

**Need an edge-to-edge design**? Drop the parent `c-container` or `c-container fluid`.

In practice, here's how it looks. Note you can continue to use this with all other predefined grid props (including column widths, responsive tiers, reorders, and more).

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
