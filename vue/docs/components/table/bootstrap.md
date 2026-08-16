# Vue Bootstrap Table Component

> Learn how to use CoreUI’s Vue Table component with Bootstrap styles for flexible, framework-consistent UI.

## How to use Vue Table Component

Due to the widespread use of `<CTable>` elements across third-party widgets like calendars and date pickers, CoreUI's tables are **opt-in**. All table styles are not inherited in CoreUI, meaning any nested tables can be styled independent from the parent.

Using the most basic table CoreUI, here's how `<CTable>`-based tables look in CoreUI.

```html
<template>
  <CTable :columns="columns" :items="items" />
</template>

<script setup>
import { CTable } from '@coreui/vue'
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
</script>
```
In version **4.5.0** we introduced a new way to create a table, similarly to our [Smart Table component](https://coreui.io/vue/docs/components/smart-table/).

```vue
<template>
  <CTable :columns="columns" :items="items" />
</template>
```

You can also put all table components together manually as hitherto.

```vue
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
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

## Variants

Use contextual classes to color tables, table rows or individual cells.

```html
<template>
  <CTable :columns="columnsVariantExample" :items="itemsVariantExample" />
</template>

<script setup>
import { CTable } from '@coreui/vue'
const columnsVariantExample = [
  { key: 'class', _props: { scope: 'col' } },
  { key: 'heading_1', label: 'Heading', _props: { scope: 'col' } },
  { key: 'heading_2', label: 'Heading', _props: { scope: 'col' } },
]
const itemsVariantExample = [
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
</script>
```

Since version **4.5.0** also this way.

```vue
<template>
  <CTable :columns="columnsVariantExample" :items="itemsVariantExample" />
</template>
```

## Accented tables

### Striped rows

Use `striped` property to add zebra-striping to any table row within the `<CTableBody>`.

```html
<template>
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
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Jacob</CTableDataCell>
        <CTableDataCell>Thornton</CTableDataCell>
        <CTableDataCell>@fat</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

### Striped columns

Use `stripedColumns` boolean property to add zebra-striping to any table column.

```html
<template>
  <CTable striped-columns>
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
        <CTableDataCell col-span="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

These classes can also be added to table variants:

```html
<template>
  <CTable color="dark" striped>
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
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CTable color="dark" striped-columns>
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
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CTable color="success" striped>
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
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CTable color="success" striped-columns>
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
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

### Hoverable rows

Use `hover` property to enable a hover state on table rows within a `<CTableBody>`.

```html
<template>
  <CTable hover>
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
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CTable color="dark" hover>
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
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

These hoverable rows can also be combined with the striped variant:

```html
<template>
  <CTable striped hover>
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
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

### Active tables

Highlight a table row or cell by adding a `active` property.

```html
<template>
  <CTable :columns="columnsActiveTableExample" :items="itemsActiveTableExample" />
</template>

<script setup>
import { CTable } from '@coreui/vue'
const columnsActiveTableExample = [
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
const itemsActiveTableExample = [
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
</script>
```
As mentioned before since version **4.5.0** we have two ways to generate tables, also with custom properties for rows, and cells.

```vue
<template>
  <CTable :columns="columnsActiveTableExample" :items="itemsActiveTableExample" />
</template>
```

```vue
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
      <CTableDataCell colspan="2" active>Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

```html
<template>
  <CTable color="dark" :columns="columnsActiveTableExample" :items="itemsActiveTableExample" />
</template>

<script setup>
import { CTable } from '@coreui/vue'
const columnsActiveTableExample = [
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
const itemsActiveTableExample = [
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
</script>
```

## Table borders

### Bordered tables

Add `bordered` property for borders on all sides of the table and cells.

```html
<template>
  <CTable bordered :columns="columns" :items="items" />
</template>

<script setup>
import { CTable } from '@coreui/vue'
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
</script>
```

[Border color utilities](https://coreui.io/bootstrap/docs/utilities/borders#border-color) can be added to change colors:

```html
<template>
  <CTable bordered border-color="primary" :columns="columns" :items="items" />
</template>

<script setup>
import { CTable } from '@coreui/vue'
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
</script>
```

### Tables without borders

Add `borderless` property for a table without borders.

```html
<template>
  <CTable borderless :columns="columns" :items="items" />
</template>

<script setup>
import { CTable } from '@coreui/vue'
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
</script>
```

```html
<template>
  <CTable color="dark" borderless :columns="columns" :items="items" />
</template>

<script setup>
import { CTable } from '@coreui/vue'
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
</script>
```

## Small tables

Add `small` property to make any `<CTable>` more compact by cutting all cell `padding` in half.

```html
<template>
  <CTable small :columns="columns" :items="items" />
</template>

<script setup>
import { CTable } from '@coreui/vue'
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
</script>
```

## Vertical alignment

Table cells of `<CTableHead>` are always vertical aligned to the bottom. Table cells in `<CTableBody>` inherit their alignment from `<CTable>` and are aligned to the the top by default. Use the align property to re-align where needed.

```html
<template>
  <CTable align="middle" reponsive>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col" class="w-25">Heading 1</CTableHeaderCell>
        <CTableHeaderCell scope="col" class="w-25">Heading 2</CTableHeaderCell>
        <CTableHeaderCell scope="col" class="w-25">Heading 3</CTableHeaderCell>
        <CTableHeaderCell scope="col" class="w-25">Heading 4</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableDataCell
          >This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell
        >
        <CTableDataCell
          >This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell
        >
        <CTableDataCell
          >This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell
        >
        <CTableDataCell
          >This here is some placeholder text, intended to take up quite a bit of vertical space, to
          demonsCTableRowate how the vertical alignment works in the preceding
          cells.</CTableDataCell
        >
      </CTableRow>
      <CTableRow align="bottom">
        <CTableDataCell
          >This cell inherits <code>vertical-align: bottom;</code> from the table
          row</CTableDataCell
        >
        <CTableDataCell
          >This cell inherits <code>vertical-align: bottom;</code> from the table
          row</CTableDataCell
        >
        <CTableDataCell
          >This cell inherits <code>vertical-align: bottom;</code> from the table
          row</CTableDataCell
        >
        <CTableDataCell
          >This here is some placeholder text, intended to take up quite a bit of vertical space, to
          demonsCTableRowate how the vertical alignment works in the preceding
          cells.</CTableDataCell
        >
      </CTableRow>
      <CTableRow>
        <CTableDataCell
          >This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell
        >
        <CTableDataCell
          >This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell
        >
        <CTableDataCell align="top">This cell is aligned to the top.</CTableDataCell>
        <CTableDataCell
          >This here is some placeholder text, intended to take up quite a bit of vertical space, to
          demonsCTableRowate how the vertical alignment works in the preceding
          cells.</CTableDataCell
        >
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

## Nesting

Border styles, active styles, and table variants are not inherited by nested tables.

```html
<template>
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
        <CTableHeaderCell colspan="4">
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
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

## Anatomy

### Table head

Similar to tables and dark tables, use the modifier prop `color="light"` or `color="dark"` to make `<CTableHead>`s appear light or dark gray.

```html
<template>
  <CTable>
    <CTableHead color="light">
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
        <CTableDataCell>Larry</CTableDataCell>
        <CTableDataCell>the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

If you generate a table using the new method incorporated in version **4.5.0**, you have to use tableHeadProps property to pass properties to the table header component.

```vue
<template>
  <CTable :columns="columns" :items="items" :tableHeadProps="{ color: 'light' }" />
</template>
```

```html
<template>
  <CTable>
    <CTableHead color="dark">
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
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

Starting from version **4.5.0** also this way.

```vue
<template>
  <CTable :columns="columns" :items="items" :tableHeadProps="{ color: 'dark' }" />
</template>
```

### Table foot

```html
<template>
  <CTable>
    <CTableHead color="light">
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
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

Starting from version **4.5.0** also this way.

```vue
<template>
  <CTable :columns="columns" :footer="footer" :items="items" :tableHeadProps="{ color: 'dark' }" />
</template>
```

### Captions

A `<CTableCaption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.

```html
<template>
  <CTable>
    <CTableCaption>List of users</CTableCaption>
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
        <CTableDataCell>Larry</CTableDataCell>
        <CTableDataCell>the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableCaption,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

Starting from version **4.5.0** also this way.

```vue
<template>
  <CTable caption="List of users" :columns="columns" :items="items"  />
</template>
```

You can also put the `<CTableCaption>` on the top of the table with `caption="top"`.

```html
<template>
  <CTable caption="top">
    <CTableCaption>List of users</CTableCaption>
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
        <CTableDataCell>Larry</CTableDataCell>
        <CTableDataCell>the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableCaption,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

Since version **4.5.0** also this way.

```vue
<template>
  <CTable captionTop="List of users" :columns="columns" :items="items"  />
</template>
```
## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by adding a `responsive` property. Or, pick a maximum breakpoint with which to have a responsive table up to by using `responsive="{-sm|-md|-lg|-xl|-xxl}"`.

```html
<template>
  <CTable responsive>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CTable responsive="sm">
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CTable responsive="md">
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CTable responsive="lg">
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CTable responsive="xl">
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CTable responsive="xxl">
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
```
