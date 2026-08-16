// Docs-only glue: expose the local Data Grid build as the global `coreui.DataGrid` (the
// UMD global) so the engine's example runner can `new coreui.DataGrid(...)` — the demo
// snippets in src/content/docs/snippets/ are the single source for every example. The
// engine's docs.ts assigns `window.coreui` to its module namespace object, which is
// non-extensible — so merge into a fresh object instead of mutating, and re-apply on
// DOMContentLoaded (before runExampleSnippets fires) in case docs.ts ran after us.
import { DataGrid } from './data-grid.esm.js'

const exposeDataGrid = () => {
  window.coreui = Object.assign({}, window.coreui, { DataGrid })
}
exposeDataGrid()
document.addEventListener('DOMContentLoaded', exposeDataGrid)
