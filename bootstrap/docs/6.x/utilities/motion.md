# Bootstrap 6 Motion

> Remove the transition from a single element with motion utilities.

Components animate with CSS transitions, and the timing is customizable — see [transitions](https://coreui.io/bootstrap/docs/customize/transitions/). Add `.transition-none` to set `transition: none` on one element, so its property changes apply instantly instead of animating.

Hover both buttons. The first eases into its hover colour; the second snaps.

```html
<button type="button" class="btn-solid theme-primary">Default</button>
<button type="button" class="btn-solid theme-primary transition-none">No hover transition</button>
```

```html
<button type="button" class="btn-solid theme-primary transition-none">...</button>
```

The utility sets the `transition` shorthand, so it removes every transition on the element at once — including any you declared yourself. To retime one component instead of removing its motion, set its `--cui-{component}-transition-duration` to `0s`.

## Animation

_Added in 6.0.0._

Two keyframe animations ship as utilities: `.animation-shake` draws attention to something that went wrong, `.animation-pop` scales an element in as it appears. `.animation-none` removes an animation the way `.transition-none` removes a transition.

```html
<button type="button" class="btn-solid theme-danger animation-shake">Shake</button>
<button type="button" class="btn-solid theme-primary animation-pop">Pop</button>
```

The keyframes are named `animation-shake` and `animation-pop` rather than `shake` and `pop`, so declaring an animation of your own under either bare name does not redefine ours.

An animation restarts when the class is applied, not when the page loads — so to replay one, remove the class, force a reflow, and add it back:

```js
element.classList.remove('animation-shake')
void element.offsetWidth
element.classList.add('animation-shake')
```

Both stand down under `prefers-reduced-motion: reduce` while `$enable-reduced-motion` is on, which is the default — the element appears in its final state with no motion.

## Reduced motion

`.transition-none` and `.animation-none` apply whatever the reader's motion preference is. Reach for them when the motion has to go in every case.

You do not need it to honour that preference: with `$enable-reduced-motion` on, which is the default, every component transition is already wrapped in `prefers-reduced-motion: no-preference`. See [reduced motion](https://coreui.io/bootstrap/docs/accessibility/reduced-motion/).

To remove every transition at build time instead, set the `$enable-transitions` Sass option to `false`.

## Customizing

### Utilities API

Motion utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"transition": (
  property: transition,
  class: transition,
  values: (
    none: none,
  )
),
```

```scss
"animation": (
  property: animation,
  class: animation,
  values: (
    none: none,
    shake: animation-shake .82s cubic-bezier(.36, .07, .19, .97) both,
    pop: animation-pop .3s cubic-bezier(.34, 1.56, .64, 1) both,
  )
),
```
