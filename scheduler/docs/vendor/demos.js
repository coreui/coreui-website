// Docs-only glue: expose the local Scheduler build as the global
// `coreui.Scheduler` so the engine's example runner can
// `new coreui.Scheduler(...)` — the demo snippets in
// src/content/docs/snippets/ are the single source for every example. The
// engine's docs.ts assigns `window.coreui` to its module namespace object,
// which is non-extensible — so merge into a fresh object instead of mutating,
// and re-apply on DOMContentLoaded (before runExampleSnippets fires) in case
// docs.ts ran after us.
import { Scheduler } from './scheduler.esm.js'

const exposeScheduler = () => {
  window.coreui = Object.assign({}, window.coreui, { Scheduler })
}

exposeScheduler()
document.addEventListener('DOMContentLoaded', exposeScheduler)
