# Bootstrap 6 Backdrop

> Pick the layer behind a dialog or a drawer — a dark scrim, a translucent tint of the page, or nothing — from the markup.

## How it works

Every overlay that dims the page paints its native `::backdrop` from three tokens on `:root`: `--cui-backdrop-color`, `--cui-backdrop-opacity` and `--cui-backdrop-blur`. The colour and the opacity are mixed on the element, so either can be changed alone. The [dialog](https://coreui.io/bootstrap/docs/components/dialog/) keeps the root defaults — a dark scrim that deepens in the dark colour scheme — and the [drawer](https://coreui.io/bootstrap/docs/components/drawer/) tints the page instead.

The backdrop helpers set the colour and the opacity on the overlay element itself, so one instance can take the other look without touching `:root`:

| Class | Backdrop |
| --- | --- |
| `.backdrop-scrim` | Black at 50% (65% in the dark scheme) — the dialog's default |
| `.backdrop-translucent` | The page colour at 25% — the drawer's default |
| `.backdrop-none` | No backdrop; the overlay still takes the top layer and traps focus |

Put the class next to `.dialog` or `.drawer`. `::backdrop` inherits custom properties from the element that opened it, so nothing else is needed.

## Examples

### Translucent dialog

<dialog class="dialog backdrop-translucent" id="exampleBackdropTranslucent" aria-labelledby="exampleBackdropTranslucentLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleBackdropTranslucentLabel">Translucent backdrop</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>The page behind stays readable through a light tint instead of a dark scrim.</p>
  </div>
</dialog>

```html
<dialog class="dialog backdrop-translucent" id="exampleBackdropTranslucent" aria-labelledby="exampleBackdropTranslucentLabel">
  …
</dialog>
```

### Dark drawer

```html
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="drawer" data-coreui-target="#exampleBackdropScrim">
  Toggle drawer with a dark backdrop
</button>

<dialog class="drawer drawer-start backdrop-scrim" id="exampleBackdropScrim" aria-labelledby="exampleBackdropScrimLabel">
  <div class="drawer-header">
    <h5 class="drawer-title" id="exampleBackdropScrimLabel">Dark backdrop</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
  </div>
  <div class="drawer-body">
    The scrim the dialog uses, on a drawer.
  </div>
</dialog>
```

### No backdrop

`.backdrop-none` hides the layer while the overlay keeps its modal behaviour — the top layer, the focus trap, the dismiss on <kbd>Esc</kbd>. It is the same effect the component-level `.dialog-no-backdrop` and `.drawer-no-backdrop` provide.

<dialog class="dialog backdrop-none" id="exampleBackdropNone" aria-labelledby="exampleBackdropNoneLabel">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleBackdropNoneLabel">No backdrop</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>Nothing dims the page, but it is still modal.</p>
  </div>
</dialog>

```html
<dialog class="dialog backdrop-none" id="exampleBackdropNone" aria-labelledby="exampleBackdropNoneLabel">
  …
</dialog>
```

## Customizing

### CSS variables

The three tokens live on `:root`, so a change there reaches every overlay; a change on one overlay reaches only its own backdrop.

```scss
--cui-backdrop-color: var(--cui-black),
--cui-backdrop-opacity: 50%,
--cui-backdrop-blur: 8px,
```

The helpers are nothing more than the first two tokens set on the element:

```scss
.backdrop-scrim {
  --cui-backdrop-color: var(--cui-black);
  --cui-backdrop-opacity: 50%;
}

@if $enable-dark-mode {
  @include color-mode(dark) {
    .backdrop-scrim {
      --cui-backdrop-opacity: 65%;
    }
  }
}

.backdrop-translucent {
  --cui-backdrop-color: var(--cui-bg-body);
  --cui-backdrop-opacity: 25%;
}

.backdrop-none::backdrop {
  display: none;
}
```

A look the helpers do not cover is a matter of the same tokens — a brand-coloured tint with no blur:

<dialog class="dialog" id="exampleBackdropCustom" aria-labelledby="exampleBackdropCustomLabel" style="--cui-backdrop-color: var(--cui-primary-base); --cui-backdrop-opacity: 35%; --cui-backdrop-blur: 0;">
  <div class="dialog-header">
    <h5 class="dialog-title" id="exampleBackdropCustomLabel">Custom backdrop</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="dialog" aria-label="Close"></button>
  </div>
  <div class="dialog-body">
    <p>A primary tint at 35%, no blur.</p>
  </div>
</dialog>

```html
<dialog class="dialog" id="exampleBackdropCustom" style="--cui-backdrop-color: var(--cui-primary-base); --cui-backdrop-opacity: 35%; --cui-backdrop-blur: 0;">
  …
</dialog>
```
