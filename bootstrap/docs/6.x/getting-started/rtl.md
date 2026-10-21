# RTL

> Learn how to enable support for right-to-left text in CoreUI for Bootstrap across our layout, components, and utilities.

## Get familiar

We recommend getting familiar with CoreUI for Bootstrap first by reading through our [Getting Started Introduction page](https://coreui.io/bootstrap/docs/getting-started/introduction/). Once you've run through it, continue reading here for how to enable RTL.

## Required HTML

There are two strict requirements for enabling RTL in CoreUI-powered pages.

1. Set `dir="rtl"` on the `<html>` element.
2. Add an appropriate `lang` attribute, like `lang="ar"`, on the `<html>` element.

That is all. **There is no separate RTL stylesheet any more** — the compiled CSS
carries both directions, so the same file you already ship reacts to
`dir="rtl"`.

### Starter template

You can see the above requirements reflected in this modified RTL starter template.

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Option 1: CoreUI for Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/css/coreui.min.css" integrity="sha384-9DZ6o3pJWcTwBR8W196XizUEf2kNMD35tkeyWqOB0yzml+nZrEe/13PMCpAIrT4r" crossorigin="anonymous">

    <!-- Option 2: CoreUI PRO for Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@6.0.0-alpha.0/dist/css/coreui.min.css" integrity="sha384-t6XvzdaSKwWiXlIt37TCu6mfRbZKMmw0dOV7/9md0KPAzPqAaIB9vEGG61vovfPd" crossorigin="anonymous">

    <title>مرحبا بالعالم!</title>
  </head>
  <body>
    <h1>مرحبا بالعالم!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: CoreUI for Bootstrap Bundle with Floating UI -->
    <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/js/coreui.bundle.min.js" integrity="sha384-FTek6QoTuxz6Bb078pS0kYQ0qH2LZVB5LWwZl8944mluH+TCk0q3OP4PqA+dHJRl" crossorigin="anonymous"></script>

    <!-- Option 2: CoreUI PRO for Bootstrap Bundle with Floating UI -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@6.0.0-alpha.0/dist/js/coreui.bundle.min.js" integrity="sha384-Lfg2VpFc1rTjT2KnFUnfPVR7QsBPjRnTTQbSeGCIgEETQgxoBJTPipJFB3rQ+OqC" crossorigin="anonymous"></script>
    -->

    <!-- Option 3: Separate Floating UI and CoreUI for Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@floating-ui/core@1.8.0/dist/floating-ui.core.umd.min.js" integrity="sha384-HNCdK6HYLs4EKIDg2Ml3NdfNMVD/LcFbGXnagRABpWmpJjiEuhrtSIckScRnqDOD" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.8.0/dist/floating-ui.dom.umd.min.js" integrity="sha384-h02fHnOrZRtL8NvKyMkr2vfTxUr0lTnQdZexzrbPfME4nd74qGfOZ97tbiroJo1Y" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/js/coreui.min.js" integrity="sha384-gf1tanjsJUdqpGpiHABhWprM/7/k8itp69MQWhJGblqf0/0EhOcPA5GPZZE83Br9" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```

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

When it comes to [customization](https://coreui.io/bootstrap/docs/customize/sass/), the preferred way is to take advantage of variables, maps, and mixins.

### LTR only

The RTL overrides are a couple of dozen rules, but if a project is
left-to-right for good you can drop them:

```scss
@use "@coreui/coreui/scss/coreui" with (
  $enable-rtl: false
);
```

### RTL only

The mirror image: the mirrored values become the base declarations and no
`:dir(rtl)` selector is emitted at all. Use it when the whole application is
right-to-left.

```scss
@use "@coreui/coreui/scss/coreui" with (
  $enable-ltr: false,
  $enable-rtl: true
);
```

## Additional resources

- [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling)
