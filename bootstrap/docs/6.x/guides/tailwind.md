# CoreUI & Tailwind CSS

> How to run CoreUI's components next to Tailwind's utilities: one cascade layer order, no second reset, and Tailwind reading our design tokens.

## Two libraries, one cascade

CoreUI ships its utilities as a separate stylesheet, so a project that prefers Tailwind's utilities can leave ours out entirely and keep the components. What has to be agreed between the two is the cascade: both libraries put their rules in named `@layer`s, and two of the names are the same.

CoreUI declares:

```css
@layer colors, config, root, reboot, layout, content, forms, components, custom, helpers, utilities;
```

Tailwind 4 declares:

```css
@layer theme, base, components, utilities;
```

Layers with the same name are one layer, and the browser fixes the order of every layer at its **first** mention. Import Tailwind first and CoreUI's `root`, `reboot` and `forms` land after Tailwind's `utilities`, so a `.p-4` loses to Reboot. Import CoreUI first and Tailwind's `base` — its reset, Preflight — lands after our `forms` and `utilities`, and undoes them on every element it touches. Neither order works on its own.

The fix is one line, written by you, before either stylesheet: a single `@layer` statement that interleaves the two lists. The shared `components` and `utilities` names merge, which is what you want — Tailwind's `@utility` additions sit in the same layer as ours, and your `@layer components` in the same layer as our components.

```css
/* app.css */
@layer theme, base, colors, config, root, reboot, layout, content, forms, components, custom, helpers, utilities;

@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);

@import "@coreui/coreui-pro/css/base.css";
@import "@coreui/coreui-pro/css/components/buttons.css";
@import "@coreui/coreui-pro/css/components/card.css";
```

Two decisions are baked into that file:

- **One reset, not two.** `@import "tailwindcss"` also brings Preflight; the two explicit imports above bring Tailwind's theme and utilities and leave the reset out, because `base.css` already carries [Reboot](https://coreui.io/bootstrap/docs/content/reboot/). Two resets on one page never agree on form controls and headings.
- **CoreUI's utilities stay out.** `coreui-utilities.css` is not imported. Nothing in a component depends on it, so the components render the same. If you do want both sets, import ours too — they share the `utilities` layer, and the later file wins on a name both define. That includes the numbered spacing classes: `p-4` is `.75rem` in CoreUI and `1rem` in Tailwind, and only steps `0`, `1` and `12` give the same value in both.

## Class names both libraries use

Sixty-odd class names exist in both utility sets — `flex`, `border`, `shadow`, `rounded`, `p-1`, `text-center` — which stops mattering the moment our utilities are not loaded. Four names are CoreUI **component or layout** classes that Tailwind also defines as utilities:

| Class | CoreUI | Tailwind |
| --- | --- | --- |
| `.grid` | the [CSS grid](https://coreui.io/bootstrap/docs/layout/css-grid/) container: twelve columns and a gap | `display: grid` |
| `.container` | the [responsive container](https://coreui.io/bootstrap/docs/layout/containers/) with its max-widths | a max-width container of its own |
| `.table` | the [table](https://coreui.io/bootstrap/docs/content/tables/) component | `display: table` |
| `.collapse` | the [collapse](https://coreui.io/bootstrap/docs/components/collapse/) component | `border-collapse: collapse` |

`.table` and `.collapse` are harmless — Tailwind's declaration is one the component already carries. `.grid` and `.container` are not: writing Tailwind's `grid` on an element gives it our twelve-column template and gutter. Either leave `layout/grid.css` and `layout/containers.css` out when you use Tailwind's, or give Tailwind a prefix so its classes cannot meet ours:

```css
@import "tailwindcss/theme.css" layer(theme) prefix(tw);
@import "tailwindcss/utilities.css" layer(utilities) prefix(tw);
```

Tailwind's classes are then written `tw:grid`, `tw:p-4`, and no name is shared.

## Tailwind reading CoreUI's tokens

Tailwind's utilities take their values from its `@theme` block, and a theme value can be a `var()`. Point the entries at CoreUI's tokens and `bg-primary`, `p-4` and `rounded-md` follow our palette, spacing scale and radius — including the color mode, because our tokens resolve through `light-dark()`:

```css
@theme {
  --color-primary: var(--cui-primary-base);
  --color-primary-fg: var(--cui-primary-fg);
  --color-success: var(--cui-success-base);
  --color-danger: var(--cui-danger-base);
  --color-body: var(--cui-bg-body);
  --color-fg: var(--cui-fg-body);

  --spacing: var(--cui-spacer-1);

  --radius-sm: var(--cui-radius-2);
  --radius-md: var(--cui-radius-3);
  --radius-lg: var(--cui-radius-5);

  --font-sans: var(--cui-font-sans-serif);
}
```

`--spacing` is Tailwind's multiplier — `p-4` is four times it — and `--cui-spacer-1` is a quarter of `--cui-spacer`, so Tailwind's spacing follows `--cui-spacer`. The step numbers do not line up with ours, so pick one set of spacing classes per page. Override `--cui-primary-base` on `:root` and both libraries repaint. Every token that can be mapped is listed on the [CSS variables](https://coreui.io/bootstrap/docs/customize/css-variables/) page.

The other direction needs nothing: a component reads its color from the [theme slots](https://coreui.io/bootstrap/docs/customize/theme/) on the element, so `<button class="btn-solid theme-primary">` is themed the same way whether Tailwind is on the page or not, and a `.theme-brand` class of your own works next to Tailwind's `bg-*` classes.

## What CoreUI's components never need

The components do not use utility classes internally, so leaving `coreui-utilities.css` out cannot break one. The classes our JavaScript toggles — `show`, `active`, `collapsing`, `disabled` — are component states that live in the component stylesheets, not utilities, and they are unaffected by Tailwind's content scanning: they are not in your markup, and they do not need to be.
