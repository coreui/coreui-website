# Browsers and devices

> Learn about the browsers and devices, from modern to old, that are supported by CoreUI, including known quirks and bugs for each.

## Supported browsers

CoreUI for Bootstrap supports the **latest, stable releases** of all major browsers and platforms.

Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform's web view API, are not explicitly supported. However, CoreUI for Bootstrap should (in most cases) display and function correctly in these browsers as well. More specific support information is provided below.

The floor is set by the platform features v6 depends on, with no fallbacks
shipped: **Chrome 123, Edge 123, Firefox 130, Safari 18 and iOS 18**.
Together with the evergreen lines below, this covers about 88% of global usage
as measured with `npx browserslist --coverage`.

### Why these versions?

Each floor is set by the newest feature v6 already requires, because the floor
has to hold for the whole 6.x line:

| Feature | Sets the floor for |
| --- | --- |
| `color-mix()` hue carry-over | Safari and iOS 18 — a mix in `oklch` with an achromatic operand (`transparent`, white, black, the greys) keeps the other colour's hue only from Safari 18; 17.x interpolates the hue towards 0°, so every translucent or tinted colour comes out the wrong hue (indigo turns pink) |
| `light-dark()` | Chrome and Edge 123 — every theme decision resolves through it, and `color-mix()`, with no fallback |
| `<details name="…">` | Firefox 130 — exclusive accordions, which group their panels by `details.name` |
| `@starting-style`, `transition-behavior: allow-discrete` | Firefox 129 — the Menu's entry animation |
| `@property` | Firefox 128 — `inherits: false` on the colour and opacity utilities' custom properties |
| `:has()` | Firefox 121 — validation and focus states on Multi Select and Autocomplete, the sidebar navigation indicators, calendar ranges and the rating icons are all selected with it |

A browser below the floor does not merely lose polish. An unsupported `:has()`
invalidates the whole rule it appears in, unresolved `light-dark()` leaves
colors unset, and a Safari 17 renders the palette with rotated hues — nothing
fails, the colours are just not the ones you set. Where `details.name` reads back undefined, an exclusive accordion
stops closing its siblings and every panel can stand open at once. `@property`
is the quietest of them and the one worth knowing about: without it the
registrations are ignored, custom properties inherit again, and a colour or
opacity utility on a container tints everything nested inside it.

Versions come from MDN's browser compatibility data. Note that caniuse does not
track `@property`, `@starting-style` or `transition-behavior` at all, so
`browserslist "supports …"` cannot answer for them.

You can find our supported range of browsers and their versions [in our `.browserslistrc` file](https://github.com/coreui/coreui/blob/main/.browserslistrc):

```text
last 2 major versions
not dead
unreleased versions

Chrome >= 123
Edge >= 123
Firefox >= 130
iOS >= 18
Safari >= 18

not and_uc > 0
not and_qq > 0
not kaios > 0
not op_mini all
```

We use [Autoprefixer](https://github.com/postcss/autoprefixer) to handle intended browser support via CSS prefixes, which uses [Browserslist](https://github.com/browserslist/browserslist) to manage these browser versions. Consult their documentation for how to integrate these tools into your projects.

### How to read the query list

Two lines of that file do more than they look like they do:

- **`last 2 major versions` carries the mobile coverage.** caniuse tracks Chrome for Android as a single unversioned entry rather than one entry per release, so this line, not the `>=` floors, is what picks it up.
- **`unreleased versions` is worth several points of coverage and costs nothing.** caniuse gives the newest Safari a null release date while that version already holds most of Safari's usage share, and both range queries and `last N versions` skip unreleased versions. The line cannot pull in anything old, because an unreleased version is newer than every floor.

The `not …` exclusions drop proxy and niche browsers that cannot run the floor features anyway; keeping them in the query would only grow the compiled CSS with legacy vendor prefixes.

To measure coverage yourself, run `npx browserslist --coverage` in a clone of the repository.

## Modern platform features

The floor table above names what *sets* each floor; this is the fuller inventory of platform features v6 leans on:

| Feature | Used by |
| --- | --- |
| `light-dark()`, `color-mix()`, `oklch()` | every color in the library — theme tokens, color modes, translucent variants |
| Cascade layers (`@layer`) | the whole stylesheet ships in a fixed layer order, so your own unlayered CSS always wins |
| `:has()` | validation and focus states on field components, button groups, sidebar indicators, calendar ranges, rating |
| `@property` | `inherits: false` registrations that keep the color and opacity utilities from leaking into descendants |
| `@starting-style` + `transition-behavior: allow-discrete` | entry and exit animations on Menu, Dialog, Drawer, Modal, Offcanvas, Popover, Tooltip, Toasts and Alerts |
| Native `<dialog>` | Dialog and Drawer — the top layer, `::backdrop` and focus containment come from the browser |
| `<details name="…">` | exclusive accordions |
| Container queries (`@container`) | stacked tables, horizontal list groups, card groups and stacks respond to their container, not the viewport |
| Relative color syntax (`oklch(from …)`) | theme hover and active states derive from the base color at runtime |
| Logical properties | spacing, borders and RTL support throughout — there is no separate RTL stylesheet |
| Range syntax in media queries | every breakpoint compiles to `@media (width >= …)` |

### Also safe to use

The floors clear more of the platform than the library currently uses. Everything below needs no fallback, no vendor prefix, and no polyfill anywhere in the supported range, so reach for it freely when you build on top of CoreUI:

- Native CSS nesting (Chrome 120, Firefox 117, Safari 17.2)
- `text-wrap: balance` (Chrome 114, Firefox 121, Safari 17.5)
- `:focus-visible` for keyboard-only focus styling
- Container query units and `subgrid`
- Dynamic viewport units (`dvh`, `dvw`) — the library itself sizes scrollable menus with `dvh`
- The `popover` attribute (Chrome 114, Firefox 125, Safari 17)

Versions come from MDN's browser compatibility data, same as the floor table.

### Not available yet

These sit above at least one of our floors, so v6 cannot rely on them without a fallback — and neither should you if you target the same range. With Safari at 18, **Firefox is now the blocker most of the time**:

| Feature | First fully supported in |
| --- | --- |
| `interpolate-size` / `calc-size()` | Chrome 129, no Firefox or Safari yet |
| View transitions | Chrome 111, Firefox 144, Safari 18 |
| Anchor positioning | Chrome 125, Firefox 147, Safari 26 |
| Style container queries | Chrome 111, Firefox 151, Safari 18 |
| `@scope` | Chrome 118, Firefox 146, Safari 26.4 |
| Invoker Commands API (`command` / `commandfor`) | Chrome 135, Firefox 144, Safari 26.2 |
| Scrollbar styling (`scrollbar-color`) | Chrome 121, Firefox 64, Safari 26.2 |
| `text-box-trim` | Chrome 133, Firefox 154, Safari 18.2 |

One of these the library already touches, carefully: `interpolate-size` sits behind `@supports`, so accordions and collapses animate to their intrinsic height where it exists and jump without it, and the opt-in `.transition-size` class does nothing at all without it. Unprefixed `backdrop-filter`, `content-visibility` and relative color syntax with number channel values landed in Safari 18 and are inside the floor now. Anchor positioning is the one most worth waiting for — it would let Menu, Tooltip, Popover and Combobox drop their [Floating UI](https://floating-ui.com/) dependency. Re-check these before you assume one has landed.

## JavaScript

Every browser meeting the CSS floor above fully supports ES modules and the DOM APIs our plugins use — no transpilation or polyfills are required or provided. Both builds work across the whole range: the UMD bundles (`coreui.js`, exposing the `coreui` global) and the ES modules (`coreui.esm.js`). See [JavaScript](https://coreui.io/bootstrap/docs/getting-started/javascript/) for loading patterns.

## Mobile devices

Generally speaking, CoreUI for Bootstrap supports the latest versions of each major platform's default browsers. Proxy browsers (such as Opera Mini, Opera Mobile's Turbo mode, UC Browser Mini, Amazon Silk) are not supported.

| Platform | Supported browsers |
| --- | --- |
| Android | Chrome (last two major versions) |
| iOS and iPadOS | Safari 18+, Chrome (uses WebKit on iOS) |
| Windows, macOS, Linux | Chrome 123+, Edge 123+, Firefox 130+; Safari 18+ on macOS |

For Firefox, in addition to the latest normal stable release, we also support the latest [Extended Support Release (ESR)](https://www.mozilla.org/en-US/firefox/enterprise/) version of Firefox.

As always, make sure you include the responsive viewport meta tag in your `<head>` for proper rendering on mobile devices:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Internet Explorer

Internet Explorer is not supported. **If you require Internet Explorer support, please use CoreUI v3.** If you need the previous browser floors (Chrome 60+, Safari 12+), stay on CoreUI v5.
