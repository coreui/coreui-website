# Vue Data Grid Columns Overview

> Define CoreUI Data Grid columns — keys, labels, cheap value formatting with formatter, and rich cell content with cell slots.

Columns are defined by the [`columns`](https://coreui.io/data-grid/vue/docs/api/options/) array. Each entry maps a
`key` in your data to a header and a cell. This page covers the essentials;
per-column features live on their own pages:
[sizing](https://coreui.io/data-grid/vue/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/vue/docs/columns/pinning/),
[ordering & visibility](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/) and the
[column menu](https://coreui.io/data-grid/vue/docs/columns/menu/).

## Defining columns

```vue
<template>
  <CDataGrid
    :columns="[
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'role', label: 'Role' },
    ]"
    :items="items"
  />
</template>
```

`key` is the property read from each item and doubles as the column id. `label`
is the header text — it falls back to `key` when omitted.

## Formatting values

Use `formatter` to transform the displayed value. It's cheap and stays on the
scroll hot path, so it's the right tool for dates, numbers and currency:

```js
{
  key: 'createdAt',
  label: 'Created',
  formatter: (value) => new Date(value).toLocaleDateString(),
}
```

`formatter` output is also what [CSV export](https://coreui.io/data-grid/vue/docs/features/csv-export/) writes.

## Rich cell content

Use a `cell-{key}` scoped slot for full custom cell content — action buttons,
badges, links. The slot receives `{ item, index }` and is **never** used for
CSV export:

```vue
<template>
  <CDataGrid :columns="columns" :items="items">
    <template #cell-actions="{ item }">
      <button type="button" class="btn btn-sm btn-primary" @click="edit(item)">
        Edit
      </button>
    </template>
  </CDataGrid>
</template>
```

Use `formatter` **or** a `cell-{key}` slot per column — `formatter` for values
on the hot path, the slot for interactive content. See the
[column API](https://coreui.io/data-grid/vue/docs/api/columns/) for every key.
