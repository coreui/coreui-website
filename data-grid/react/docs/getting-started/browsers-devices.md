# React Data Grid Browsers and Devices

> The browsers and devices CoreUI Data Grid for React supports, the floor it targets, and the browserslist configuration behind it.

## Supported browsers

The Data Grid targets the **latest stable releases** of every major browser, with
a floor of **Chrome 123, Edge 123, Firefox 129, Safari 17.5 and iOS 17.5**.
Measured with `npx browserslist --coverage`, that range covers **86.47%** of
global usage.

Browsers built on the same engines (Chromium, Gecko, WebKit) are not listed
separately but behave the same, as long as their engine is at or above those
versions. Proxy browsers that render server-side — Opera Mini, UC Browser Mini,
QQ Browser, KaiOS — are excluded outright and are not supported.

### What sets the floor

The floor is the CoreUI PRO baseline, shared with the component library the grid
sits next to, not a limit the grid's own code imposes. Its own requirements are
lower:

| What the grid uses | Available from |
| --- | --- |
| `inset-inline-start` / `inset-inline-end` (sticky offsets for pinned columns) | Chrome 87, Firefox 63, Safari 14.1 |
| `:is()` | Chrome 88, Firefox 78, Safari 14 |
| Private class fields, `??`, `?.`, `??=` in the shipped bundle | Chrome 85, Firefox 90, Safari 14.1 |

The grid would therefore run on engines older than the floor, but only the range
above is tested — and sharing the baseline means a page that mixes the grid with
CoreUI PRO components has a single set of supported engines, not two.

## The browserslist configuration

One file drives both the CSS prefixes Autoprefixer emits and the syntax level
[rolldown](https://rolldown.rs/) lowers the grid core to — including the
`@tanstack/table-core` and `@tanstack/virtual-core` it bundles:

```text
last 2 major versions
not dead
unreleased versions

Chrome >= 123
Edge >= 123
Firefox >= 129
iOS >= 17.5
Safari >= 17.5

not and_uc > 0
not and_qq > 0
not kaios > 0
not op_mini all
```

Raising the floor is what keeps the bundle small: at the previous Chrome 60 /
Safari 12 floor the same code needed 57,477 B gzip against 54,742 B (measured
at the rolldown migration) — a 2.7 kB saving from the floor alone — and
Autoprefixer dropped every prefix but `-webkit-user-select`.

### Mobile devices

| | Chrome | Firefox | Safari | Android Browser &amp; WebView |
| --- | --- | --- | --- | --- |
| **Android** | Supported | Supported | <span class="text-muted">&mdash;</span> | Supported |
| **iOS** | Supported | Supported | Supported | <span class="text-muted">&mdash;</span> |

### Desktop browsers

| | Chrome | Firefox | Microsoft Edge | Opera | Safari |
| --- | --- | --- | --- | --- | --- |
| **Mac** | Supported | Supported | Supported | Supported | Supported |
| **Windows** | Supported | Supported | Supported | Supported | <span class="text-muted">&mdash;</span> |
| **Linux** | Supported | Supported | <span class="text-muted">&mdash;</span> | Supported | <span class="text-muted">&mdash;</span> |

## React

`@coreui/react-data-grid` needs **React 18 or newer** on top of the browser range
above. See [installation](https://coreui.io/data-grid/react/docs/getting-started/installation/).
