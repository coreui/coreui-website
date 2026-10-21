# Reduced motion

> How CoreUI for Bootstrap honours the prefers-reduced-motion setting in its transitions, animations and scrolling.

CoreUI for Bootstrap includes support for the [`prefers-reduced-motion` media feature](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion). In browsers/environments that allow the user to specify their preference for reduced motion, most CSS transition effects in CoreUI for Bootstrap (for instance, when a modal dialog is opened or closed, or the sliding animation in carousels) will be disabled, and meaningful animations (such as spinners) will be slowed down.

On browsers that support `prefers-reduced-motion`, and where the user has *not* explicitly signaled that they'd prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), CoreUI for Bootstrap enables smooth scrolling using the `scroll-behavior` property.

## Options

| Variable | Default | Description |
| --- | --- | --- |
| `$enable-reduced-motion` | `true` | Wraps every component transition in `prefers-reduced-motion: no-preference`, so the transition runs only for users who have not asked for less motion. |
| `$enable-smooth-scroll` | `true` | Applies `scroll-behavior: smooth`, except for users asking for reduced motion. |

See [options](https://coreui.io/bootstrap/docs/customize/options/) for the other global switches, and [transitions](https://coreui.io/bootstrap/docs/customize/transitions/) for how components run their transitions.

## Your own animations

Wrap the animations and transitions you add in the same query, so they run only for users who have not asked for less motion:

```css
@media (prefers-reduced-motion: no-preference) {
  .banner {
    animation: slide-in .3s ease-out;
  }
}
```

An animation that starts by itself and lasts longer than five seconds also needs a way to pause or stop it ([pause, stop, hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)), whatever the user's setting. The [carousel](https://coreui.io/bootstrap/docs/components/carousel/) has one.
