# Architecture

> How the v6 styling system is put together: cascade layers, design tokens computed in the browser, per-component token surfaces, and theme slots.

_Added in 6.0.0._

Four mechanisms carry the whole v6 styling system. Each one has a page of its own for the details; this page shows how they fit together, and where your overrides plug in.

Where each piece lives, from the raw hue up to the component:

| Layer | File | What it defines |
| --- | --- | --- |
| Color scales | `scss/_colors.scss` | `$color-tokens`, emitted on `:root, :host` in the `colors` layer: one base token per color, expanded into the `100`–`900` steps with `color-mix()` against `$tint-color` / `$shade-color`. The mix names the base token, not its value, so overriding `--cui-primary` retints the whole scale in the browser. The grays are hand-picked stops rather than a mix, because a neutral ramp has to stay neutral. |
| Theme colors | `scss/_theme.scss` | `$theme-colors`, one nested map per role (`primary`, `danger`, …), each holding `base`, `fg`, `fg-emphasis`, `bg`, `bg-subtle`, `bg-muted`, `border`, `focus-ring` and `contrast` |
| Global tokens | `scss/_root.scss` | `$root-tokens`, everything else emitted on `:root, :host` — spacing, radii, typography, z-index and the surface ladders |
| Component tokens | the component's own partial | `$alert-tokens`, `$card-tokens` and the rest, emitted on the component's base class |

Each layer reads the one below it, so a change low down travels upward: retint `--cui-primary-500` and every slot of that theme color follows, along with every component reading those slots.

## Cascade layers

Every rule the library ships lives in a [cascade layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer). The order is declared once, at the top of the bundle:

```css
@layer colors, config, root, reboot, layout, content, forms, components, custom, helpers, utilities;
```

Later layers beat earlier ones regardless of selector specificity, which settles by declaration the fights v5 settled with `!important` and specificity hacks:

- **Utilities win over components** because `utilities` comes last — no `!important` involved, and no switch to bring it back.
- **Your unlayered CSS wins over everything of ours**, because unlayered styles beat every layer. A plain `.card { … }` in your stylesheet overrides the library no matter how simple the selector.
- **`colors` is where the palette ships**, below everything else, so your own `@layer colors` block sits in the same layer and overrides a token like `--cui-primary-500` by source order alone.
- **Two layers are empty and reserved for you.** `config` sits below `root`, for a configuration sheet the whole library should read but never fight; `custom` slots between `components` and `helpers`, for component overrides that should still lose to utilities. Put your CSS in `@layer custom` when you want `.text-center` on the element to keep working.

One caveat: if your build concatenates our CSS with other stylesheets, make sure the layer declaration emitted at the top of the bundle survives minification — a minifier that predates `@layer` can strip it, and with it the whole ordering.

## Design tokens

Global design decisions — colors, spacing, typography, borders, shadows — are emitted as CSS custom properties on `:root` (the palette in the `colors` layer, everything else in `root`). Components never read Sass variables at run time; they read tokens:

```css
.alert {
  padding: var(--cui-alert-padding-y) var(--cui-alert-padding-x);
}
```

Two consequences follow:

- **Derived values are computed in the browser, not frozen at build time.** A size that depends on another size is written as `calc(var(--cui-…) * …)`, so overriding the source token at run time propagates to everything derived from it. Sass arithmetic would have baked the result into the file.
- **A token resolves where it is declared.** Overriding `--cui-body-font-size` on a descendant does not re-resolve `:root`-computed tokens that were derived from it — that is how `var()` substitution works everywhere, not a library rule. Set global tokens globally; set component tokens on the component.

The full token reference lives on [CSS variables](https://coreui.io/react/docs/customize/css-variables/).

## Component tokens

Every component declares its complete styling surface as custom properties on its root class, built from a `$<component>-tokens` Sass map:

```scss
@mixin tokens($map) {
  @each $prop, $value in $map {
    #{$prop}: #{$value};
  }
}
```

That gives you three override levels, from no build step to full build:

1. **At run time, with CSS** — set the token on the component or any ancestor scope; no compilation involved:

   ```css
   .my-sidebar .alert { --cui-alert-bg: hotpink; }
   ```

2. **At build time, per surface** — hand the map your overrides through [Sass modules](https://coreui.io/react/docs/customize/sass/); `null` removes a token entirely:

   ```scss
   @use "@coreui/coreui/scss/coreui" with (
     $alert-tokens: (
       --cui-alert-bg: hotpink,
       --cui-alert-margin-bottom: null,
     )
   );
   ```

3. **At build time, per variable** — the classic `$alert-padding-y: 2rem` overrides keep working, because the map defaults are built from the same Sass variables. Per-component Sass variables are a transitional layer, kept for migration; the tokens are the API that stays.

## Theme slots

Components do not read colors directly — they read them through `--cui-theme-*` slots with a fallback to their own default:

```css
.nav-link {
  color: var(--cui-theme-fg, var(--cui-nav-link-color));
}
```

When no theme class is present, the slot is unset and the fallback applies. A theme class — `.alert-danger`, `.theme-primary` — fills the slots for its subtree, and every component inside follows the theme without owning a single state rule:

```css
.theme-danger {
  --cui-theme-fg: var(--cui-danger-fg);
  --cui-theme-bg-subtle: var(--cui-danger-bg-subtle);
  /* … */
}
```

The slot values come from per-color scales generated with `color-mix()` from each color's base token, and the interactive states are derived at run time with relative color syntax — `oklch(from var(--cui-primary-base) calc(l * .85) c h)` — so overriding `--cui-primary` alone re-colors the subtle backgrounds, borders, emphasis text, hover and active states with it. The color system is documented on [Color](https://coreui.io/react/docs/customize/color/), the scheme switching on [Color modes](https://coreui.io/react/docs/customize/color-modes/).
