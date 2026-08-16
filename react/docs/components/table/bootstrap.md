# React Bootstrap Table Component

> Learn how to use CoreUI’s React Bootstrap Table component to build responsive, feature-rich tables styled with Bootstrap in your React app.

## How to use React Bootstrap Table component

The `<CTable>` component with Bootstrap theming lets you build responsive and accessible React tables using CoreUI components. Define structure manually or use the `columns` and `items` API for easier table generation.

```html
import { CTable } from '@coreui/react'

export const TableExample = (props) => {
  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'class',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_1',
      label: 'Heading',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_2',
      label: 'Heading',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_2: '@twitter',
      _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
    },
  ]
  return <CTable columns={columns} items={items} {...props} />
}
```

In version **4.3.0** we introduced a new way to create a table, similarly to our [Smart Table component](https://coreui.io/react/docs/components/smart-table/).

```jsx
const columns = [
  {
    key: 'id',
    label: '#',
    _props: { scope: 'col' },
  },
  {
    key: 'class',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_1',
    label: 'Heading',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_2',
    label: 'Heading',
    _props: { scope: 'col' },
  },
]
const items = [
  {
    id: 1,
    class: 'Mark',
    heading_1: 'Otto',
    heading_2: '@mdo',
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 2,
    class: 'Jacob',
    heading_1: 'Thornton',
    heading_2: '@fat',
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 3,
    class: 'Larry the Bird',
    heading_2: '@twitter',
    _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
  },
]
return <CTable columns={columns} items={items} />
```

You can also put all table components together manually as hitherto.

```jsx
<CTable>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

Both methods produce the same html code.

## Variants

Use contextual classes to color React tables, table rows or individual cells.

```jsx
<CTable>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">Default</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="primary">
      <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="secondary">
      <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="success">
      <CTableHeaderCell scope="row">Success</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="danger">
      <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="warning">
      <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="info">
      <CTableHeaderCell scope="row">Info</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="light">
      <CTableHeaderCell scope="row">Light</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="dark">
      <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

Since version **4.3.0** also this way.

```jsx
const columns = [
  { key: 'class', _props: { scope: 'col' } },
  { key: 'heading_1', label: 'Heading', _props: { scope: 'col' } },
  { key: 'heading_2', label: 'Heading', _props: { scope: 'col' } },
]
const items = [
  {
    class: 'Default',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
  },
  {
    class: 'Primary',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'primary' },
  },
  {
    class: 'Secondary',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'secondary' },
  },
  {
    class: 'Success',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'success' },
  },
  {
    class: 'Danger',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'danger' },
  },
  {
    class: 'Warning',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'warning' },
  },
  {
    class: 'Info',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'info' },
  },
  {
    class: 'Light',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'light' },
  },
  {
    class: 'Dark',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'dark' },
  },
]
return <CTable columns={columns} items={items} />
```

## Accented tables

### Striped rows

Use `striped` property to add zebra-striping to any React table row within the `<CTableBody>`.

```jsx
<CTable striped>
  ...
</CTable>
```

### Striped columns

Enable `striped` to alternate row background colors for better visual distinction.

```jsx
<CTable stripedColumns>
  ...
</CTable>
```

These classes can also be added to React table variants:

```jsx
<CTable color="dark" striped>
  ...
</CTable>
```

```jsx
<CTable color="dark" stripedColumns>
  ...
</CTable>
```

```jsx
<CTable color="success" striped>
  ...
</CTable>
```

```jsx
<CTable color="success" stripedColumns>
  ...
</CTable>
```

### Hoverable rows

Use the `hover` prop to highlight rows when hovered by the user.

```jsx
<CTable hover>
  ...
</CTable>
```

```jsx
<CTable color="dark" hover>
  ...
</CTable>
```

These hoverable rows can also be combined with the striped variant:

```jsx
<CTable striped hover>
  ...
</CTable>
```

### Active tables

Highlight a table row or cell by adding a `active` property.

As mentioned before since version **4.3.0** we have two ways to generate tables, also with custom properties for rows, and cells.

```jsx
const columns = [
  {
    key: 'id',
    label: '#',
    _props: { scope: 'col' },
  },
  {
    key: 'class',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_1',
    label: 'Heading',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_2',
    label: 'Heading',
    _props: { scope: 'col' },
  },
]
const items = [
  {
    id: 1,
    class: 'Mark',
    heading_1: 'Otto',
    heading_2: '@mdo',
    _props: { active: true },
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 2,
    class: 'Jacob',
    heading_1: 'Thornton',
    heading_2: '@fat',
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 3,
    class: 'Larry the Bird',
    heading_2: '@twitter',
    _cellProps: { id: { scope: 'row' }, class: { active: true, colSpan: 2 } },
  },
]
return <CTable columns={columns} items={items} />
```

```jsx
<CTable>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow active>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colSpan={2} active>
        Larry the Bird
      </CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

```jsx
const columns = [
  {
    key: 'id',
    label: '#',
    _props: { scope: 'col' },
  },
  {
    key: 'class',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_1',
    label: 'Heading',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_2',
    label: 'Heading',
    _props: { scope: 'col' },
  },
]
const items = [
  {
    id: 1,
    class: 'Mark',
    heading_1: 'Otto',
    heading_2: '@mdo',
    _props: { active: true },
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 2,
    class: 'Jacob',
    heading_1: 'Thornton',
    heading_2: '@fat',
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 3,
    class: 'Larry the Bird',
    heading_2: '@twitter',
    _cellProps: { id: { scope: 'row' }, class: { active: true, colSpan: 2 } },
  },
]
return <CTable color="dark" columns={columns} items={items} />
```

## Table borders

### Bordered tables

Add `bordered` property for borders on all sides of the table and cells.

```jsx
<CTable bordered>
  ...
</CTable>
```

[Border color utilities](https://coreui.io/bootstrap/docs/utilities/borders#border-color) can be added to change colors:

```jsx
<CTable bordered borderColor="primary">
  ...
</CTable>
```

### Tables without borders

Add `borderless` property for a React table without borders.

```jsx
<CTable borderless>
  ...
</CTable>
```

```jsx
<CTable color="dark" borderless>
  ...
</CTable>
```

## Small tables

Add `small` property to make any `<CTable>` more compact by cutting all cell `padding` in half.

```jsx
<CTable small>
  ...
</CTable>
```

## Vertical alignment

Table cells of `<CTableHead>` are always vertical aligned to the bottom. Table cells in `<CTableBody>` inherit their alignment from `<CTable>` and are aligned to the the top by default. Use the align property to re-align where needed.

In version **4.3.0** we introduced a new way to create a table, similarly to our [Smart Table component](https://coreui.io/react/docs/components/smart-table/).

```jsx
const columns = [
  {
    key: 'heading_1',
    _props: { className: 'w-25', scope: 'col' },
  },
  {
    key: 'heading_2',
    _props: { className: 'w-25', scope: 'col' },
  },
  {
    key: 'heading_3',
    _props: { className: 'w-25', scope: 'col' },
  },
  {
    key: 'heading_4',
    _props: { className: 'w-25', scope: 'col' },
  },
]
const items = [
  {
    heading_1: <>This cell inherits <code>vertical-align: middle;</code> from the table</>,
    heading_2: <>This cell inherits <code>vertical-align: middle;</code> from the table</>,
    heading_3: <>This cell inherits <code>vertical-align: middle;</code> from the table</>,
    heading_4: 'This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.',
  },
  {
    heading_1: <>This cell inherits <code>vertical-align: bottom;</code> from the table row</>,
    heading_2: <>This cell inherits <code>vertical-align: bottom;</code> from the table row</>,
    heading_3: <>This cell inherits <code>vertical-align: bottom;</code> from the table row</>,
    heading_4: 'This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.',
    _props: { align: 'bottom' }
  },
  {
    heading_1: <>This cell inherits <code>vertical-align: middle;</code> from the table</>,
    heading_2: <>This cell inherits <code>vertical-align: middle;</code> from the table</>,
    heading_3: 'This cell is aligned to the top.',
    heading_4: 'This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.',
      _cellProps: { heading_3: { align: 'top' }},
  },
]
return <CTable align="middle" columns={columns} items={items} />
```

You can also put all table components together manually as hitherto.

```jsx
<CTable align="middle" responsive>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col" className="w-25">
        Heading 1
      </CTableHeaderCell>
      <CTableHeaderCell scope="col" className="w-25">
        Heading 2
      </CTableHeaderCell>
      <CTableHeaderCell scope="col" className="w-25">
        Heading 3
      </CTableHeaderCell>
      <CTableHeaderCell scope="col" className="w-25">
        Heading 4
      </CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableDataCell>
        This cell inherits <code>vertical-align: middle;</code> from the table
      </CTableDataCell>
      <CTableDataCell>
        This cell inherits <code>vertical-align: middle;</code> from the table
      </CTableDataCell>
      <CTableDataCell>
        This cell inherits <code>vertical-align: middle;</code> from the table
      </CTableDataCell>
      <CTableDataCell>
        This here is some placeholder text, intended to take up quite a bit of vertical space, to
        demonstrate how the vertical alignment works in the preceding cells.
      </CTableDataCell>
    </CTableRow>
    <CTableRow align="bottom">
      <CTableDataCell>
        This cell inherits <code>vertical-align: bottom;</code> from the table row
      </CTableDataCell>
      <CTableDataCell>
        This cell inherits <code>vertical-align: bottom;</code> from the table row
      </CTableDataCell>
      <CTableDataCell>
        This cell inherits <code>vertical-align: bottom;</code> from the table row
      </CTableDataCell>
      <CTableDataCell>
        This here is some placeholder text, intended to take up quite a bit of vertical space, to
        demonstrate how the vertical alignment works in the preceding cells.
      </CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableDataCell>
        This cell inherits <code>vertical-align: middle;</code> from the table
      </CTableDataCell>
      <CTableDataCell>
        This cell inherits <code>vertical-align: middle;</code> from the table
      </CTableDataCell>
      <CTableDataCell align="top">This cell is aligned to the top.</CTableDataCell>
      <CTableDataCell>
        This here is some placeholder text, intended to take up quite a bit of vertical space, to
        demonstrate how the vertical alignment works in the preceding cells.
      </CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

## Nesting

Border styles, active styles, and React table component variants are not inherited by nested tables.

```jsx
<CTable striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell colSpan={4}>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Header</CTableHeaderCell>
              <CTableHeaderCell scope="col">Header</CTableHeaderCell>
              <CTableHeaderCell scope="col">Header</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">A</CTableHeaderCell>
              <CTableDataCell>First</CTableDataCell>
              <CTableDataCell>Last</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">B</CTableHeaderCell>
              <CTableDataCell>First</CTableDataCell>
              <CTableDataCell>Last</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">C</CTableHeaderCell>
              <CTableDataCell>First</CTableDataCell>
              <CTableDataCell>Last</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CTableHeaderCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

## Anatomy

### Table head

Similar to tables and dark tables, use the modifier prop `color="light"` or `color="dark"` to make `<CTableHead>`s appear light or dark gray.

```jsx
<CTable>
  <CTableHead color="light">
    ...
  </CTableHead>
  <CTableBody>
    ...
  </CTableBody>
</CTable>
```

If you generate a table using the new method incorporated in version **4.3.0**, you have to use `tableHeadProps` property to pass properties to the table header component.

```jsx
const columns = [...]
const items = [...]

return <CTable columns={columns} items={items} tableHeadProps={{ color: 'light' }} />
```

```jsx
<CTable>
  <CTableHead color="dark">
    ...
  </CTableHead>
  <CTableBody>
    ...
  </CTableBody>
</CTable>
```

Starting from version **4.3.0** also this way.

```jsx
const columns = [...]
const items = [...]

return <CTable columns={columns} items={items} tableHeadProps={{ color: 'dark' }} />
```

### Table foot

```jsx
<CTable>
  <CTableHead color="light">
    ...
  </CTableHead>
  <CTableBody>
    ...
  <CTableHead>
    <CTableRow>
      <CTableDataCell>Footer</CTableDataCell>
      <CTableDataCell>Footer</CTableDataCell>
      <CTableDataCell>Footer</CTableDataCell>
      <CTableDataCell>Footer</CTableDataCell>
    </CTableRow>
  </CTableHead>
</CTable>
```

Starting from version **4.3.0** also this way.

```jsx
const columns = [...]
const footer = [
  'Footer',
  'Footer',
  'Footer',
  'Footer',
]
const items = [...]

return <CTable columns={columns} footer={footer} items={items} tableHeadProps={{ color: 'light' }}/>
```

### Captions

A `<CTableCaption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.

```jsx
<CTable>
  <CTableCaption>List of users</CTableCaption>
  <CTableHead>
    ...
  </CTableHead>
  <CTableBody>
    ...
  </CTableBody>
</CTable>
```

Starting from version **4.3.0** also this way.

```jsx
const columns = [...]
const items = [...]

return <CTable caption="List of users" columns={columns} items={items} />
```

You can also put the `<CTableCaption>` on the top of the table with `caption="top"`.

```jsx
<CTable caption="top">
  <CTableCaption>List of users</CTableCaption>
  <CTableHead>
    ...
  </CTableHead>
  <CTableBody>
    ...
  </CTableBody>
</CTable>
```

Since version **4.3.0** also this way.

```jsx
const columns = [...]
const items = [...]

return <CTable captionTop="List of users" columns={columns} items={items} />
```

## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by adding a `responsive` property. Or, pick a maximum breakpoint with which to have a responsive table up to by using `responsive="{-sm|-md|-lg|-xl|-xxl}"`.

```jsx
<CTable responsive>
  ...
</CTable>
```

```jsx
<CTable responsive="sm">
  ...
</CTable>
```

```jsx
<CTable responsive="md">
  ...
</CTable>
```

```jsx
<CTable responsive="lg">
  ...
</CTable>
```

```jsx
<CTable responsive="xl">
  ...
</CTable>
```

```jsx
<CTable responsive="xxl">
  ...
</CTable>
```

## API

Explore all available props and component options in the API reference below.

- [&lt;CTable /&gt;](../api/#ctable)
- [&lt;CTableBody /&gt;](../api/#ctablebody)
- [&lt;CTableDataCell /&gt;](../api/#ctabledatacell)
- [&lt;CTableFoot /&gt;](../api/#ctablefoot)
- [&lt;CTableHead /&gt;](../api/#ctablehead)
- [&lt;CTableHeaderCell /&gt;](../api/#ctableheadercell)
- [&lt;CTableRow /&gt;](../api/#ctablerow)
