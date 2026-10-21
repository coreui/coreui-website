# Bootstrap 6 Close Button

> A generic close button for dismissing content like modals and alerts.

## Example

Provide an option to dismiss or close a component with `.btn-close`. The icon is drawn with a CSS mask, so it takes the element's own `color` — put the button on any surface and it stays legible without a variant class. **Be sure to include text for screen readers**, as we've done with `aria-label`.

```html
<button type="button" class="btn-close" aria-label="Close"></button>
```

## Disabled

Disabled close buttons change their `opacity`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

```html
<button type="button" class="btn-close" disabled aria-label="Close"></button>
```

## On a dark surface

A close button takes the color it inherits, so a colored surface needs nothing extra — the same `.btn-close` works on a dark toast, a dark offcanvas or an alert.

```html
<button type="button" class="btn-close" aria-label="Close"></button>
<button type="button" class="btn-close" disabled aria-label="Close"></button>
```

`data-coreui-theme` on a section flips the tokens but paints nothing by itself, so give that section a surface — `.bg-body` and `.fg-body` read the flipped tokens — and the close button follows the text like everything else in it.

```html
<div data-coreui-theme="dark" class="bg-body fg-body p-4">
  <button type="button" class="btn-close" aria-label="Close"></button>
  <button type="button" class="btn-close" disabled aria-label="Close"></button>
</div>
```

## Customizing

### CSS variables

```scss
$close-tokens: defaults(
  (
    --cui-btn-close-icon-size: 1em,
    --cui-btn-close-padding-y: .25em,
    --cui-btn-close-padding-x: .25em,
    --cui-btn-close-color: inherit,
    --cui-btn-close-icon: #{ escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='black'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/></svg>")) },
    --cui-btn-close-opacity: .5,
    --cui-btn-close-hover-opacity: .75,
    --cui-btn-close-focus-opacity: 1,
    --cui-btn-close-disabled-opacity: .25,
  ),
  $close-tokens
);
```

Point `--cui-btn-close-icon` at any SVG to replace the glyph. The mask uses its shape only, so whatever color the file carries is ignored.
