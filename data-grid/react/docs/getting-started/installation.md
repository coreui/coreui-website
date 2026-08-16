# React Data Grid Installation

> Install CoreUI Data Grid for React via npm and load its stylesheet.

## npm

```sh
npm install @coreui/react-data-grid
```

Data Grid ships its stylesheet in the `@coreui/data-grid` package (installed
automatically as a dependency). It builds on the `.table`, `.btn` and form styles
from `@coreui/coreui` or `@coreui/coreui-pro` (≥ 5) when one of them is on the
page, and ships its own copy of them when it is not — see
[Stylesheet](#stylesheet) below.

```tsx
import { CDataGrid } from '@coreui/react-data-grid'
import '@coreui/data-grid/dist/css/data-grid.css'
```

## Stylesheet

Two builds ship in the package — load exactly one:

| File | Load it when |
| --- | --- |
| `data-grid.css` | `@coreui/coreui` or `@coreui/coreui-pro` (≥ 5) is already on the page. |
| `data-grid.standalone.css` | It is not. Adds ~2.7 kB gzip. |

`data-grid.standalone.css` carries the slice of CoreUI the grid's markup relies
on — `.table`, `.btn`, the form controls, `.pagination`, `.spinner-border` and
`.visually-hidden`. Those rules are scoped to `.data-grid` and emitted into a
`data-grid-base` cascade layer, so they never restyle the rest of your page, and
an unlayered CoreUI stylesheet always overrides them.

The grid's CSS defines `--cui-data-grid-*` custom properties that resolve through
CoreUI's semantic variables, so it inherits your theme (including
`data-coreui-theme="dark"`) automatically. See
[Styling & theming](https://coreui.io/data-grid/react/docs/customization/styling/) for the full token reference.

Next: the [Quickstart](https://coreui.io/data-grid/react/docs/getting-started/quickstart/).
