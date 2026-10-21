# Vue Theme Utilities

> Style utilities that pair a themed surface with the text color that reads on it, so any element can be colored the way component variants are.

## How it works

A [`.theme-{color}` class](https://coreui.io/vue/docs/customize/components/#theme-variants) sets the theme slot tokens — `--cui-theme-bg`, `--cui-theme-fg`, `--cui-theme-bg-subtle` and friends — without painting anything itself. Components read those slots on their own; for arbitrary markup, add one of the style utilities below to pair a themed surface with the text color that reads on it. `.theme-border` additionally draws a border in the theme's border color and composes with any of the three surfaces.

See [Theme](https://coreui.io/vue/docs/customize/theme/) for how the slots resolve and how to add a color of your own.

### Contrast

`.theme-contrast` fills with the solid theme color and sets the text to the color that reads on it — the pairing behind solid component variants:

### Subtle

`.theme-subtle` uses the theme's subtle surface with its readable foreground. The pairing adjusts to the color mode on its own:

And with `.theme-border`:

### Muted

`.theme-muted` uses the theme's muted surface with its emphasis foreground, for the quietest of the three pairings:

## Comparison

All three pairings side by side, per theme color:

## Mixing colors

Each element carries its own `.theme-{color}`, so siblings can differ — the utility reads whichever theme is in scope:

```html
<div class="d-flex gap-3">
  <div class="theme-success theme-contrast p-4 rounded">Success</div>
  <div class="theme-warning theme-contrast p-4 rounded">Warning</div>
  <div class="theme-danger theme-contrast p-4 rounded">Danger</div>
</div>
```

The theme can also come from any element above, so one wrapper themes every pairing inside it:

```html
<div class="theme-primary d-flex gap-3">
  <div class="theme-contrast p-4 rounded">Contrast</div>
  <div class="theme-subtle p-4 rounded">Subtle</div>
  <div class="theme-muted p-4 rounded">Muted</div>
</div>
```

## Reset

_Added in 6.0.0._

`.theme-reset` drops the theme a subtree inherits: it sets every `--cui-theme-*` slot back to `initial`, so components and utilities below it fall back to their defaults.

```html
<div class="theme-primary p-4 rounded">
  <span class="badge">Primary badge</span>
  <span class="badge theme-reset">Default badge</span>
</div>
```

```scss
@mixin theme-reset() {
  $slots: ();

  @each $slots-of-color in map.values($theme-colors) {
    @each $slot in map.keys($slots-of-color) {
      $slots: map.set($slots, $slot, true);
    }
  }

  @each $slot in map.keys(map.merge($slots, ("hover": true, "active": true))) {
    --cui-theme-#{$slot}: initial;
  }
}

@mixin generate-theme-reset() {
  .theme-reset {
    @include theme-reset();
  }
}
```

## Customizing

### Utilities API

Theme utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
// Theme style utilities — pair with .theme-{color} to apply coordinated
// background and text colors
"theme-contrast": (
  property: (
    "background-color": var(--cui-theme-bg),
    "color": var(--cui-theme-contrast)
  ),
  class: theme-contrast,
  values: (null: null)
),
"theme-subtle": (
  property: (
    "background-color": var(--cui-theme-bg-subtle),
    "color": var(--cui-theme-fg)
  ),
  class: theme-subtle,
  values: (null: null)
),
"theme-muted": (
  property: (
    "background-color": var(--cui-theme-bg-muted),
    "color": var(--cui-theme-fg-emphasis)
  ),
  class: theme-muted,
  values: (null: null)
),
"theme-border": (
  property: border,
  class: theme-border,
  values: (null: var(--cui-border-width) solid var(--cui-theme-border))
),
```
