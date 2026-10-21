# RTL

> Learn how to enable support for right-to-left text in CoreUI for Vue across our layout, components, and utilities.

## Get familiar

We recommend getting familiar with CoreUI for Vue first by reading through our [Getting Started Introduction page](https://coreui.io/vue/docs/getting-started/introduction/). Once you've run through it, continue reading here for how to enable RTL.

## Required HTML

There are two strict requirements for enabling RTL in CoreUI-powered pages.

1. Set `dir="rtl"` on the `<html>` element.
2. Add an appropriate `lang` attribute, like `lang="ar"`, on the `<html>` element.

That is all. **There is no separate RTL stylesheet any more** — the compiled CSS
carries both directions, so the same file you already import reacts to
`dir="rtl"`.

In a Vue app both attributes live on the host document — the `index.html`
your bundler serves, or your framework's document template (for example
Nuxt's `app.head` configuration). The stylesheet stays the one you already

### Starter template

You can see the above requirements reflected in this modified RTL host `index.html`.

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>مرحبا بالعالم!</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

## Components

The Vue components need no RTL configuration. Components that position or
navigate directionally — dropdowns, tooltips, popovers, the menu, the carousel,
the date, time and range pickers, the range slider, the one-time password
input — detect the direction from the document at runtime: `dir="rtl"` on the
`<html>` element, or on the closest ancestor with a `dir="rtl"` attribute for
a right-to-left region inside a left-to-right page.

## Approach

Direction support rests on two decisions:

1. **Layout is written with logical properties.** `margin-inline-start` instead
   of `margin-left`, `inset-inline-end` instead of `right`, `float: inline-start`
   instead of `float: left` — and the same in the class names, so `.ms-4` and
   `.start-50` mean "start" in whichever direction the document runs. The
   browser mirrors them; nothing has to be generated twice.

2. **The handful of properties CSS cannot mirror get an explicit rule.**
   `transform` is not direction-aware, `background-position` has no logical
   keyword, and swapping an icon means swapping an asset. Those cases — the
   off-canvas panel, the range slider's label and tooltip, the select and
   validation arrows, the carousel controls, the breadcrumb divider, the
   narrow sidebar's toggler — are written once with the `ltr-rtl()` mixin,
   which emits the base declaration plus a `:dir(rtl)` override. There are
   about twenty of them in the whole library. The override reads the element's
   own direction, the same thing a logical property resolves against, so an
   off-canvas panel inside a `dir="ltr"` island of a right-to-left page slides
   out the side it is pinned to. Both of them follow the `dir` attribute:
   setting `direction` from CSS alone turns the logical properties around and
   leaves the mirrored declarations where they were, so put `dir` on the
   element or on one of its ancestors.

Together that is why **one stylesheet serves both directions**. Up to v5 we
published a parallel `*.rtl.css` for every file; it is gone, and so is the
`.rtl` half of the `dist/css` folder.

## Customize from source

When it comes to [customization](https://coreui.io/vue/docs/customize/sass/), the preferred way is to take advantage of variables, maps, and mixins.

### LTR only

The RTL overrides are a couple of dozen rules, but if a project is
left-to-right for good you can drop them:

```scss tab={"label":"CoreUI"}
@use "@coreui/coreui/scss/coreui" with (
  $enable-rtl: false
);
```

```scss tab={"label":"CoreUI PRO"}
@use "@coreui/coreui-pro/scss/coreui" with (
  $enable-rtl: false
);
```

### RTL only

The mirror image: the mirrored values become the base declarations and no
`:dir(rtl)` selector is emitted at all. Use it when the whole application is
right-to-left.

```scss tab={"label":"CoreUI"}
@use "@coreui/coreui/scss/coreui" with (
  $enable-ltr: false,
  $enable-rtl: true
);
```

```scss tab={"label":"CoreUI PRO"}
@use "@coreui/coreui-pro/scss/coreui" with (
  $enable-ltr: false,
  $enable-rtl: true
);
```

## Additional resources

- [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling)
