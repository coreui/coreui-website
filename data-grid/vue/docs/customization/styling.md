# Vue Data Grid Styling & Theming

> Theme the CoreUI Data Grid with --cui-data-grid-* CSS variables that resolve through CoreUI semantic tokens, so light and dark modes work with no extra CSS.

The Data Grid is styled entirely with CSS custom properties. Every knob is a
`--cui-data-grid-*` variable that resolves through CoreUI's semantic tokens
(`--cui-body-bg`, `--cui-border-color`, …), so the grid inherits your theme —
including `data-coreui-theme="dark"` — with no extra rules.

## Light & dark mode

Because the tokens resolve through CoreUI semantic variables, dark mode works out
of the box:

```vue
<template>
  <div data-coreui-theme="dark">
    <CDataGrid :columns="columns" :items="items" />
  </div>
</template>
```

No grid-specific dark styles are needed — the semantic tokens flip and the grid
follows.

## Overriding tokens

Set any variable on the grid element (or an ancestor) to retheme it — a class
passed to the component lands on the grid's root element:

```vue
<template>
  <CDataGrid class="users-grid" :columns="columns" :items="items" />
</template>
```

```css
.users-grid {
  --cui-data-grid-spacing: 0.75rem;
  --cui-data-grid-header-bg: var(--cui-tertiary-bg);
  --cui-data-grid-viewport-max-height: 40rem;
}
```

## CSS variables

| Variable | Default | Controls |
| --- | --- | --- |
| `--cui-data-grid-viewport-max-height` | `30rem` | Max height of the scroll viewport — the usual way to size the grid. Setting a `height` on the grid element works too: the viewport takes whatever the toolbar and pagination leave. |
| `--cui-data-grid-header-bg` | `var(--cui-body-bg, #fff)` | Header row background. |
| `--cui-data-grid-header-shadow` | `inset 0 calc(-1 * var(--cui-border-width, 1px)) 0 var(--cui-border-color, #dee2e6)` | Header bottom border. |
| `--cui-data-grid-cell-selected-bg` | `rgba(var(--cui-primary-rgb, 50, 31, 219), .12)` | Fill of a selected cell. |
| `--cui-data-grid-cell-selected-border-color` | `var(--cui-primary, #321fdb)` | Outline drawn on the edges of a selected range. |
| `--cui-data-grid-cell-selected-border-width` | `1px` | Width of that outline. |
| `--cui-data-grid-row-handle-width` | `2rem` | Width of the row-reorder handle column. |
| `--cui-data-grid-select-cell-width` | `2.5rem` | Width of the selection checkbox column. |
| `--cui-data-grid-sorter-margin` | `.25rem` | Gap before the sort indicator. |
| `--cui-data-grid-sorter-opacity` | `.3` | Resting opacity of the sort indicator. |
| `--cui-data-grid-spacing` | `.5rem` | Padding and gap of the toolbar and pagination bars. |
| `--cui-data-grid-resizer-width` | `.625rem` | Hit area of the resize handle. |
| `--cui-data-grid-resizer-grip-height` | `60%` | Height of the resize grip. |
| `--cui-data-grid-resizer-grip-color` | `var(--cui-border-color, #dee2e6)` | Resize grip color. |
| `--cui-data-grid-resizer-grip-color-hover` | `var(--cui-secondary-color, #6c757d)` | Resize grip color on hover. |
| `--cui-data-grid-pinned-border-width` | `var(--cui-border-width)` | Width of the divider at the pinned-column edge. |
| `--cui-data-grid-pinned-border-color` | `var(--cui-border-color, #dee2e6)` | Color of that divider. |
| `--cui-data-grid-pinned-bg` | `var(--cui-body-bg, #fff)` | Background of pinned cells. |
| `--cui-data-grid-drop-indicator` | `var(--cui-primary, #321fdb)` | Accent of the drag ghost while reordering (and the indicator line shown when the live preview is off). |
| `--cui-data-grid-drag-transition` | `.15s ease` | Timing of the live reorder preview and the settling ghost. Ignored under `prefers-reduced-motion`. |
| `--cui-data-grid-menu-bg` | `var(--cui-body-bg, #fff)` | Column menu background. |
| `--cui-data-grid-menu-border-color` | `var(--cui-border-color, #dee2e6)` | Column menu border. |
| `--cui-data-grid-menu-shadow` | `var(--cui-box-shadow, 0 .5rem 1rem rgba(0, 0, 0, .15))` | Column menu shadow. |
| `--cui-data-grid-menu-min-width` | `10rem` | Column menu minimum width. |
| `--cui-data-grid-menu-item-hover-bg` | `var(--cui-tertiary-bg, #f8f9fa)` | Column menu item hover background. |
| `--cui-data-grid-loading-bg` | `rgba(var(--cui-body-bg-rgb, 255, 255, 255), .6)` | Background of the loading overlay (server-side mode). |
| `--cui-data-grid-focus-ring-width` | `2px` | Width of the focus ring on the active cell. |
| `--cui-data-grid-focus-ring-color` | `var(--cui-primary, #321fdb)` | Color of that focus ring. |

The grid also inherits the `.table` styles (striping, borders) from
`@coreui/coreui(-pro)`, so table-level CSS variables like
`--cui-table-striped-bg` apply too.

## Sass

The stylesheet is a Sass module, so the same knobs are available at build time.
Every CSS variable above is backed by a Sass variable of the same name without
the `--cui-` prefix, and configuring one changes the emitted token:

```scss
@use "@coreui/data-grid/scss/data-grid" with (
  $data-grid-spacing: .75rem,
  $data-grid-viewport-max-height: 40rem
);
```

A token map is available too. It merges over the defaults, so you can add or
retarget individual custom properties — and a `null` value removes one:

```scss
@use "@coreui/data-grid/scss/data-grid" with (
  $data-grid-tokens: (
    --cui-data-grid-header-bg: var(--cui-tertiary-bg),
    --cui-data-grid-menu-shadow: none
  )
);
```

A few layout values have no runtime token and are configurable at build time
only — the toolbar/header bar height, the popup max-width, and the shared
border, radius and muted-color references the grid chrome reuses. They are the
`data-grid-layout-variables` block in `scss/components/_data-grid.scss`.

`$prefix` is configurable as well (`cui-` by default), for the case where the
surrounding CoreUI build uses a different one.

## Without the CoreUI stylesheet

The grid's markup uses `.table`, `.btn`, the form controls, `.pagination`,
`.spinner-border` and `.visually-hidden` from `@coreui/coreui(-pro)`. If that
stylesheet is not on the page, load `data-grid.standalone.css` instead of
`data-grid.css` — it carries those base styles itself for ~2.7 kB gzip. See
[Installation](https://coreui.io/data-grid/vue/docs/getting-started/installation/).

Two properties make it safe to drop in:

- every base rule is **scoped to `.data-grid`**, so the sheet never restyles the
  rest of your page;
- every base rule sits in the **`data-grid-base` cascade layer**, while the grid's
  own rules stay unlayered. A layered declaration always loses to an unlayered
  one, so if CoreUI (or your own CSS) is loaded after all, it wins on every
  property it declares and the two can coexist.

That second point assumes the surrounding stylesheet is unlayered, which is true
of CoreUI 5. Against a stylesheet that uses cascade layers itself, the outcome
becomes ordinary layer order — rename the layer to place it where you need:

```scss
@use "@coreui/data-grid/scss/data-grid.standalone" with (
  $base-layer: vendor
);
```

The base styles are configurable the same way as the grid. Their variables are
prefixed `$base-` and cover the palette, the control sizing and the icons:

```scss
@use "@coreui/data-grid/scss/data-grid.standalone" with (
  $base-primary: #0d6efd,
  $base-border-color: #d0d7de,
  $base-btn-font-size-sm: .8125rem
);
```
