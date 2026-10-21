# Transitions

> How CoreUI components animate, which state classes drive them, and how to retime, extend or remove the motion without rewriting a component.

## How it works

CSS owns every component transition. A Vue component toggles a state class and then waits for the transition to finish before it fires a callback. It never writes a `transition` and, apart from the sizes it measures for browsers without `interpolate-size`, never writes a style at all.

That split is what makes the motion customizable: restyle it in CSS and the component follows, with no need to reimplement anything.

Each animated component works the same way:

1. The base selector holds the hidden state and the `transition` declaration.
2. A state class holds the visible state.
3. Components that live in the top layer add `@starting-style` for the enter-from state, because the element is not rendered before it opens.

## State classes

The components add and remove a small, fixed set of classes. Style these and your customizations follow the component.

| Class | Meaning |
| --- | --- |
| `.show` | The component is shown; its absence is the hidden state. Used by collapse, menu, toast, tooltip, popover, sidebar and the tab pane. |
| `.collapsing` | Present only while a collapse animates its height or width. Added when the transition starts, removed when it ends. |
| `.hiding` | Present only while an exit transition plays, on the components that sit in the top layer — dialog, drawer, modal and offcanvas. They have to survive their own exit, so dropping `.show` is not enough to mark the outgoing state. |
| `.active` | The shown state for a tab pane, where it also marks the selected pane. |
| `.fade` | The fade itself, for your own markup and for the components that animate only when asked. The alert and the tab pane take it from your markup; the tooltip and popover add it themselves unless `animation` is off. |
| `.{component}-instant` | Skips the transition on one element: `.dialog-instant`, `.drawer-instant`, `.modal-instant`, `.offcanvas-instant`, `.toast-instant`. The components render it themselves when their `transition` or `animation` prop is off. |
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

Collapse and accordion animate a size rather than an opacity. `0` cannot interpolate to `auto` on its own, so both let the browser do it through [`interpolate-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size): the stylesheet owns the whole animation and the component only toggles the state class. Where `interpolate-size` is missing, the component measures the two sizes and the stylesheet still times the move between them — the motion is the same everywhere, only who measures differs.

The collapse's `display` transitions discretely with `allow-discrete`, which is what keeps the closing element in the layout until its size reaches `0`.

## Remove the motion

Five options, from the narrowest to the widest:

1. Set the component's `transition` or `animation` prop to `false`, which renders its `-instant` class on the one element.
2. Add the [`.transition-none` utility](https://coreui.io/vue/docs/utilities/motion/) to one element, which removes every transition on it rather than just the component's own.
3. Set a `-duration` variable to `0s` for one component or a whole subtree.
4. Set `$enable-transitions` to `false` to remove every transition at build time.
5. Leave it to the reader: with `$enable-reduced-motion` on, which is the default, every transition is wrapped in `prefers-reduced-motion: no-preference`, so anyone who asks their system for less motion already gets instant state changes. See [reduced motion](https://coreui.io/vue/docs/accessibility/reduced-motion/).

Whichever you use, the component reads the element's computed `transition-duration` before it waits. A duration of `0s` fires the callbacks on the next tick rather than hanging for a transition that never runs.

## Callbacks

The visibility callbacks are timed against the transition: `@show` fires as a component opens, and `@close` fires once the exit transition has finished — the element is gone from the layout, not merely on its way out.

```vue
<CModal v-model:show="show" @close="() => console.log('gone')">
  ...
</CModal>
```
