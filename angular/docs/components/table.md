# Angular Table Directives

> Documentation and examples for opt-in styling of Angular tables.

## Examples

Using the most basic table CoreUI, here's how `cTable` based tables look in CoreUI.

### Variants

Use contextual classes to color tables, table rows or individual cells.

### Striped rows

Use `striped` property to add zebra-striping to any table row within the `tbody`.

### Striped columns

Use `stripedColumns` property to add zebra-striping to any table column.

Use `color` property to add some color variants.

### Hoverable rows

Use `hover` property to enable a hover state on table rows within a `tbody`.

These hoverable rows can also be combined with the `striped` variant:

### Active tables

Highlight a table row or cell by adding a `cTableActive` property.

### Bordered tables

Add `bordered` property for borders on all sides of the table and cells.

[Border color utilities](https://coreui.io/docs/utilities/borders#border-color) can be added to change colors:

### Borderless

Add `borderless` property for a table without borders.

### Small tables

Add `small` property to make any `cTable` more compact by cutting all cell `padding` in half.

### Vertical alignment

Table cells of `thead` are always vertical aligned to the
bottom. Table cells in `tbody` inherit their alignment from
`cTable` and are aligned to the the top by default. Use the align
property to re-align where needed.

### Nesting

Border styles, active styles, and table variants are not inherited by nested tables.

### Table head

Similar to tables and dark tables, use the modifier prop `color="light"` or `color="dark"` to make `thead` appear light or dark gray.

### Table foot

### Captions

A `caption` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.

You can also put a caption on the top of the table with `caption="top"`.

### Responsive tables

#### Always responsive
Responsive tables allow tables to be scrolled horizontally with ease.
Make any table responsive across all viewports by adding a `responsive` property.

#### Breakpoint specific
Or pick a maximum breakpoint with which to have a responsive table up to by using `responsive="sm|md|lg|xl|xxl"`.

## API reference

### Table Module

```typescript
import { TableModule, UtilitiesModule } from '@coreui/angular';

@NgModule({
    imports: [
      TableModule,
      UtilitiesModule
    ]
})
export class AppModule() { }
```

### cTable
_directive for `table` element_

```jsx
import { TableDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `align` | `'bottom' \| 'middle' \| 'top'` | - | Set the vertical alignment. |
| `borderColor` | `string` | - | Sets the border color of the component to one of CoreUI’s themed colors. |
| `bordered` | `boolean` | `false` | Add borders on all sides of the table and cells. |
| `borderless` | `boolean` | `false` | Remove borders on all sides of the table and cells. |
| `caption` | `'top'` | - | Put the `<caption>` on the top of the table. |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `hover` | `boolean` | `false` | Enable a hover state on table rows within table body. |
| `responsive` | `boolean \| Omit<string, 'xs'>` | - | Make table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to. |
| `small` | `boolean` | `false` | Make table more compact by cutting all cell `padding` in half. |
| `striped` | `boolean` | `false` | Add zebra-striping to any table row within the table body. |
| `stripedColumns` | `boolean` | `false` | Add zebra-striping to any table column. |

### cTableActive
_directive for `tr` or `td` elements_

```jsx
import { TableActiveDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cTableActive` | `boolean` | `false` | Highlight a table row or cell |

### cTableColor
_directive for `table`, `thead`, `th`, `tbody`, `tfoot` `tr` or `td` elements_

```jsx
import { TableColorDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cTableColor` | `string` | `undefined` | Use contextual color for tables, table rows or individual cells. |

### cAlign
_directive for `table`, `thead`, `th`, `tbody`, `tfoot` `tr` or `td` elements_

```jsx
import { AlignDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cAlign` | `Alignment` | `undefined` | Set vertical alignment of inline, inline-block, inline-table, and table cell elements |
