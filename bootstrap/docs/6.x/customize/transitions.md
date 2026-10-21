# Transitions

> How CoreUI components animate, which state classes drive them, and how to retime, extend or remove the motion without rewriting a component.

## How it works

CSS owns every component transition. JavaScript toggles a state class and then waits for the transition to finish before it fires an event or resolves a promise. It never writes a `transition` and, apart from the sizes it measures for browsers without `interpolate-size`, never writes a style at all.

That split is what makes the motion customizable: restyle it in CSS and the component follows, with no need to reimplement anything.

Each animated component works the same way:

1. The base selector holds the hidden state and the `transition` declaration.
2. A state class holds the visible state.
3. Components that live in the top layer add `@starting-style` for the enter-from state, because the element is not rendered before it opens.

## State classes

JavaScript adds and removes a small, fixed set of classes; `.fade` and `.transition-size` are the two you put on the markup yourself. Style these and your customizations follow the component.

| Class | Meaning |
| --- | --- |
| `.show` | The component is shown; its absence is the hidden state. Used by collapse, menu, toast, tooltip, popover, sidebar and the tab pane. |
| `.collapsing` | Present only while a collapse animates its height or width. Added when the transition starts, removed when it ends. |
| `.hiding` | Present only while an exit transition plays, on the components that have to survive their own exit: dialog, drawer, modal, offcanvas and the alert. Those are visible without `.show`, so dropping it is not enough to mark the outgoing state. |
| `.active` | The shown state for a tab pane, where it also marks the selected pane. |
| `.fade` | The fade itself, for your own markup and for the components that animate only when asked. The alert and the tab pane take it from your markup; the tooltip and popover add it themselves unless `animation` is off. |
| `.transition-size` | The box itself rather than the opacity: an element with it collapses as it leaves and grows as it arrives. Opt-in, on your own markup, and only where the browser can interpolate a size — see [size animations](#size-animations). |
| `.{component}-instant` | Skips the transition on one element: `.dialog-instant`, `.drawer-instant`, `.modal-instant`, `.offcanvas-instant`, `.toast-instant`. |
| `.{component}-static` | The short bounce that signals a refused close: `.dialog-static`, `.drawer-static`, `.modal-static`, `.offcanvas-static`. |

## Customize the motion

### Duration and easing

Every animated component exposes its timing as CSS variables, so it can be retimed per instance at runtime rather than only at build time.

| Custom property | Purpose |
| --- | --- |
| `--cui-{component}-transition-duration` | How long the animation runs. Set it to `0s` to remove the motion. |
| `--cui-{component}-transition-timing` | The easing curve. |

```css
.dialog-slow {
  --cui-dialog-transition-duration: .6s;
}
```

### The animated property

Where an animation is meant to be extended, a third variable names the properties it covers, so adding one is a single declaration instead of a rewritten rule. The accordion, button, collapse, form floating label, range thumb, search button and the check/radio/switch controls all expose `--cui-{component}-transition-property`.

Add `transform` to the button list and a button lifts as it changes colour:

```css
.btn-lift {
  --cui-btn-transition-property: color, background-color, border-color, box-shadow, transform;
}

.btn-lift:hover {
  transform: translateY(-2px);
}
```

Keep the properties that were already there. The variable replaces the list, it does not append to it.

### Shared overlay easing

Dialog, drawer, menu and the popup the field components open read one easing curve from `:root`, so a single override restyles all four.

```scss
--cui-transition-timing-overlay: cubic-bezier(.22, 1, .36, 1),
```

Each of them still has its own `--cui-{component}-transition-timing`, so one overlay can opt out without pulling the others with it.

### Size animations

Collapse and accordion animate a size rather than an opacity. `0` cannot interpolate to `auto` on its own, so both let the browser do it through [`interpolate-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size): the stylesheet owns the whole animation and JavaScript only toggles the state class. Where `interpolate-size` is missing, JavaScript measures the two sizes and the stylesheet still times the move between them — the motion is the same everywhere, only who measures differs.

The collapse's `display` transitions discretely with `allow-discrete`, which is what keeps the closing element in the layout until its size reaches `0`.

`.transition-size` brings the same motion to markup of your own. Put it next to `.fade` and the element animates its height, its block padding, its block borders and its block margin alongside the opacity: it grows from nothing when it is inserted with `.show` on it, and collapses into the page when it loses `.show` or gains `.hiding`, so the content below rises into its place instead of jumping once the element is gone.

```scss
$transition-size-tokens: defaults(
  (
    --cui-transition-size-property: #{"opacity, block-size, margin-block, padding-block, border-block-width, display"},
    --cui-transition-size-duration: .15s,
    --cui-transition-size-timing: linear,
  ),
  $transition-size-tokens
);
```

A hidden `.transition-size` element ends up `display: none`, the way a closed collapse does, so it leaves the layout and the accessibility tree instead of staying as a clipped, focusable strip. `display` rides the transition with `allow-discrete`, which is what keeps the element on screen until the box has reached zero.

Two more things travel with the class. It sets `overflow: hidden` for as long as it is on the element, not only while the box moves, so keep it off anything that has to spill out of its own box, such as an alert holding a dropdown. And `interpolate-size` is inherited, so a descendant that animates to or from `auto` starts interpolating too.

The hidden state is emitted in the `utilities` layer, because it has to zero the spacing a utility may have set: `<div class="alert fade transition-size show py-6 mb-6">` collapses its padding and its margin like any other alert.

The class carries a transition of its own, which replaces the one a component declares unless that component's rule is the more specific of the two. The alert's is, so the alert instead names the sizes in `--cui-alert-transition-property` and keeps its own duration and easing, and `<div class="alert fade transition-size show">` is the whole opt-in. Do the same on any other component whose timing you want to keep.

An element that sits in the page's initial HTML with `.fade`, `.show` and `.transition-size` plays the entrance on first paint, the way `@starting-style` already fades an alert in. Insert it without `.show` and add the class afterwards if you would rather it did not.

Where `interpolate-size` is missing the class does nothing at all: the element fades where it stands and the space it held is reclaimed when it goes.

## Remove the motion

Five options, from the narrowest to the widest:

1. Add the component's `-instant` class to one element, such as `.toast-instant`.
2. Add the [`.transition-none` utility](https://coreui.io/bootstrap/docs/utilities/motion/) to one element, which removes every transition on it rather than just the component's own.
3. Set a `-duration` variable to `0s` for one component or a whole subtree.
4. Set `$enable-transitions` to `false` to remove every transition at build time.
5. Leave it to the reader: with `$enable-reduced-motion` on, which is the default, every transition is wrapped in `prefers-reduced-motion: no-preference`, so anyone who asks their system for less motion already gets instant state changes. See [reduced motion](https://coreui.io/bootstrap/docs/accessibility/reduced-motion/).

Whichever you use, JavaScript reads the element's computed `transition-duration` before it waits. A duration of `0s` resolves events and promises on the next tick rather than hanging for a transition that never runs.

## Events and promises

`show()` and `hide()` return promises that settle once the transition has finished, at the same moment the matching `shown` and `hidden` events fire.

```js
const toast = new coreui.Toast('#myToast')

await toast.show()
// The fade-in has finished.
```
