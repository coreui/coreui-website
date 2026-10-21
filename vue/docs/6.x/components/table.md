# Vue Table Component

> Documentation and examples for opt-in styling of tables.

## Overview

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
  <CTable theme="inverse" striped>
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
  <CTable theme="inverse" striped-columns>
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
  <CTable theme="success" striped>
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
  <CTable theme="success" striped-columns>
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
  <CTable theme="inverse" hover>
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
  <CTable theme="inverse" :columns="columnsActiveTableExample" :items="itemsActiveTableExample" />
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

[Border color utilities](https://coreui.io/vue/docs/utilities/border-color/) can be added to change colors:

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
  <CTable theme="inverse" borderless :columns="columns" :items="items" />
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

## Card-like tables

Need a bordered, rounded table without nesting it in a [card](https://coreui.io/vue/docs/components/card/)? Wrap the table and clip the corners.

### With utilities

Compose [border](https://coreui.io/vue/docs/utilities/border/), [border radius](https://coreui.io/vue/docs/utilities/border-radius/), and [overflow](https://coreui.io/vue/docs/utilities/overflow/) utilities. Drop the table's bottom margin with `.mb-0`.

```html
<template>
  <div class="border rounded overflow-hidden">
    <CTable class="mb-0" striped :columns="columns" :items="items" />
  </div>
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

### With `card`

Add the `card` property for the card look in one step. The table gets the default border and corner radius of a [card](https://coreui.io/vue/docs/components/card/), and a `.theme-*` class on an ancestor colours the frame the way it colours a card. The cells are clipped, and the borders that would stack on the frame go: the last row's bottom border and the outer borders of a `bordered` table. A caption at the bottom keeps the line above it.

```html
<template>
  <CTable card hover :columns="columns" :items="items" />
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

Combine it with `responsive` when the table can overflow; both land on the same wrapper.

```html
<template>
  <CTable card responsive striped :columns="columns" :items="items" />
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

> ##### Clipping
> 
> `card` clips everything at the rounded edge: a dropdown menu opened from a cell, the focus ring of a control in an edge cell, and columns wider than the frame. Render menus outside the table with the dropdown's [`teleport`](https://coreui.io/vue/docs/components/dropdown/api/#cdropdown) property, and add `responsive` when the table can be wider than its container.

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

## Table group dividers

Add a thicker, darker border between table groups—`<CTableHead>`, `<CTableBody>`, and `<CTableFoot>`—with `.table-group-divider`. Customize the color by changing the `border-top-color` (which we don't currently provide a utility class for at this time).

```html
<template>
  <CTable>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">First</CTableHeaderCell>
        <CTableHeaderCell scope="col">Last</CTableHeaderCell>
        <CTableHeaderCell scope="col">Handle</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody class="table-group-divider">
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
        <CTableDataCell :colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/vue'
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

Similar to tables and dark tables, use the modifier prop `color="secondary"` or `color="inverse"` to make `<CTableHead>`s appear light or dark gray.

```html
<template>
  <CTable>
    <CTableHead theme="secondary">
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
    <CTableHead theme="inverse">
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
    <CTableHead theme="secondary">
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

Add `captionTop` to put the caption on the top of the table.

```html
<template>
  <CTable caption-top>
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

It combines with the `caption` property the same way.

```vue
<template>
  <CTable caption="List of users" caption-top :columns="columns" :items="items"  />
</template>
```
## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by adding a `responsive` property. Or, pick a maximum breakpoint with which to have a responsive table up to by using `responsive="{-sm|-md|-lg|-xl|-2xl}"`.

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
  <CTable responsive="2xl">
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

## Stacked tables

A table that scrolls sideways is still a table; on a narrow screen it is often easier to read one record at a time. Add `.table-stacked{-sm|-md|-lg|-xl|-2xl}` to `<CTable>` to turn each row into a block below that breakpoint — the header is hidden from sight (it stays in the accessibility tree) and every cell carries its own label.

Two things are required: the `responsive` property, because that wrapper is the query container the class measures, and a `data-cell` attribute on every cell after the first, which supplies the label the hidden header would have given. The first cell is treated as the record's title and needs no label.

```html
<template>
  <CTable class="table-stacked-md" responsive>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">Name</CTableHeaderCell>
        <CTableHeaderCell scope="col">Role</CTableHeaderCell>
        <CTableHeaderCell scope="col">Email</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableDataCell>Mark Otto</CTableDataCell>
        <CTableDataCell data-cell="Role">Maintainer</CTableDataCell>
        <CTableDataCell data-cell="Email">mark@example.com</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableDataCell>Jacob Thornton</CTableDataCell>
        <CTableDataCell data-cell="Role">Designer</CTableDataCell>
        <CTableDataCell data-cell="Email">jacob@example.com</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/vue'
</script>
```

> Because the breakpoint is read from the responsive wrapper rather than the window, a stacked table inside a narrow column stacks there while the same markup in the main content area stays a table.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTable /&gt;](./api/#ctable)
- [&lt;CTableBody /&gt;](./api/#ctablebody)
- [&lt;CTableDataCell /&gt;](./api/#ctabledatacell)
- [&lt;CTableFoot /&gt;](./api/#ctablefoot)
- [&lt;CTableHead /&gt;](./api/#ctablehead)
- [&lt;CTableHeaderCell /&gt;](./api/#ctableheadercell)
- [&lt;CTableRow /&gt;](./api/#ctablerow)
