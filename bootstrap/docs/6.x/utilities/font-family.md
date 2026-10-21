# Bootstrap 6 Font Family

> Switch a selection to our monospace font stack.

## Monospace

Change a selection to our monospace font stack with `.font-monospace`.

```html
<p class="font-monospace">This is in monospace</p>
```

## Body

`.font-body` returns a selection to the body font stack — useful inside `.font-monospace` blocks or components that set their own face.

```html
<p class="font-monospace">Monospace with a <span class="font-body">body-font span</span> inside</p>
```

## Customizing

### CSS variables

Both stacks are one token each on `:root`, so a page can swap a family without recompiling and every class and component reading it follows.

```scss
--cui-font-sans-serif: meta.inspect((system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")),
--cui-font-mono: meta.inspect((SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)),
```

### Utilities API

Font family utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"font-family": (
  property: font-family,
  class: font,
  values: (
    monospace: var(--cui-font-mono),
    body: var(--cui-body-font-family)
  )
),
```
