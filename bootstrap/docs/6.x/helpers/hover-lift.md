# Bootstrap 6 Hover Lift

> Lift an element and add a shadow on hover or focus for a subtle sense of depth.

## How it works

Add `.hover-lift` to any element to translate it upward and deepen its `box-shadow` on `:hover` and `:focus-visible`. It is a lightweight way to signal that a card, tile or other surface is interactive.

The effect sets only `transform` and `box-shadow`, so it composes with anything — cards, buttons, list items, plain containers — and it honours [`prefers-reduced-motion`](https://coreui.io/bootstrap/docs/getting-started/accessibility/#reduced-motion): a reader who asks for reduced motion still gets the raised shadow and offset, without the animation.

## Example

Hover the card below, or tab to it. It is an `<a>` rather than a `<div>` so the `:focus-visible` half of the helper is reachable from the keyboard.

```html
<a href="#" class="card hover-lift text-decoration-none" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Hover me</h5>
    <p class="card-text mb-0">Hover or focus this card to see it lift with a shadow.</p>
  </div>
</a>
```

Because it only touches those two properties, it works just as well on a control:

```html
<button type="button" class="btn-solid theme-primary hover-lift">Lift on hover</button>
```

## Customizing

### CSS variables

CoreUI for Bootstrap's hover lift uses local CSS variables on `.hover-lift` for enhanced real-time customization.

```scss
$hover-lift-tokens: defaults(
  (
    --cui-hover-lift-transition-duration: .2s,
    --cui-hover-lift-transition-timing: ease,
    --cui-hover-lift-transform: translateY(-.25rem),
    --cui-hover-lift-box-shadow: var(--cui-box-shadow-lg),
  ),
  $hover-lift-tokens
);
```

Override them to tune the distance, the shadow or the timing — a larger rise with a snappier transition:

```html
<a href="#" class="card hover-lift text-decoration-none" style="--cui-hover-lift-transform: translateY(-.5rem); --cui-hover-lift-transition-duration: .1s; width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Bigger lift</h5>
    <p class="card-text mb-0">Customized transform and duration.</p>
  </div>
</a>
```
