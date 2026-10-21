# Bootstrap 6 Focus Ring

> Utility classes that allows you to add and modify custom focus ring styles to elements and components.

The `.focus-ring` helper replaces the browser's default focus indicator with one of our own on `:focus-visible`. It is an `outline`, sized and coloured from a series of CSS variables inherited from the `:root` level, so it can be modified for any element or component.

## Example

Tab to the link below to see the focus ring. Clicking it will not show one — the helper styles `:focus-visible`, which the browser reserves for keyboard focus.

```html
<a href="#" class="d-inline-flex focus-ring py-1 px-3 text-decoration-none border rounded-2">
  Custom focus ring
</a>
```

## Variants

Pair `.focus-ring` with a [theme color](https://coreui.io/bootstrap/docs/customize/theme/) class to recolour the ring. The helper reads `--cui-theme-focus-ring`, which every `.theme-*` class sets, so the ring follows the element's theme rather than needing its own class.

Use this when the element already carries a theme; reach for the `.focus-ring-*` utilities below when you only want to change the ring.

## Customizing

Modify the styling of a focus ring with our CSS variables, Sass variables, utilities, or custom styles.

### CSS variables

Modify the `--cui-focus-ring-*` CSS variables as needed to change the default appearance.

```html
<a href="#" class="d-inline-flex focus-ring py-1 px-3 text-decoration-none border rounded-2" style="--cui-focus-ring-color: color-mix(in srgb, var(--cui-success-base) 25%, transparent)">
  Green focus ring
</a>
```

`.focus-ring` sets styles via global CSS variables that can be overridden on any parent element, as shown above. These variables are generated from their Sass variable counterparts.

```scss
--cui-focus-ring-width: .25rem,
--cui-focus-ring-opacity: .25,
--cui-focus-ring-offset: 0,
--cui-focus-ring-color: var(--cui-primary-focus-ring),
--cui-focus-ring: var(--cui-focus-ring-width) solid var(--cui-focus-ring-color),
```

The ring is an `outline`, so it is never clipped by an ancestor's `overflow` —
it stays visible inside scroll containers, where a `box-shadow` ring was cut off.
Push it away from the element with `--cui-focus-ring-offset`, which defaults to
`0`:

```html
<a href="#" class="d-inline-flex focus-ring py-1 px-3 text-decoration-none border rounded-2" style="--cui-focus-ring-offset: 4px">
  Offset focus ring
</a>
```

### Utilities API

In addition to `.focus-ring`, we have several `.focus-ring-*` utilities to modify the helper class defaults. Modify the color with any of our [theme colors](https://coreui.io/bootstrap/docs/customize/color/#theme-colors). Note that the light and dark variants may not be visible on all background colors given current color mode support.

Focus ring utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"focus-ring": (
  property: (--cui-focus-ring-color: null),
  // Writes the global :root token, so it stays inheriting — see
  // generate-utility-at-properties().
  at-property: false,
  class: focus-ring,
  values: theme-color-refs("focus-ring")
),
```
