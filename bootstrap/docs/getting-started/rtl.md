# RTL

> Learn how to enable support for right-to-left text in CoreUI for Bootstrap across our layout, components, and utilities.

## Get familiar

We recommend getting familiar with CoreUI for Bootstrap first by reading through our [Getting Started Introduction page](https://coreui.io/bootstrap/docs/getting-started/introduction/). Once you've run through it, continue reading here for how to enable RTL.

## Required HTML

There are two strict requirements for enabling RTL in Bootstrap-powered pages.

1. Set `dir="rtl"` on the `<html>` element.
2. Add an appropriate `lang` attribute, like `lang="ar"`, on the `<html>` element.

From there, you'll need to include an RTL version of our CSS. For example, here's the stylesheet for our compiled and minified CSS with RTL enabled:

```html tab={"label":"CoreUI"}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/css/coreui.rtl.min.css" integrity="sha384-uDDl8GghAgqc1ho+BUQz7iYrUcU3bqoT4oCsW2CzpjSfgZttZ444Ehw1Q9+9NWKT" crossorigin="anonymous">
```

```html tab={"label":"CoreUI PRO"}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.27.1/dist/css/coreui.rtl.min.css" integrity="sha384-CvNgc0vYVC64MRqkhIBUqT98RT5YyqLuPNJQ02XrGb0BxOsnq4kO5xKOxTkTjPvv" crossorigin="anonymous">
```

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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/css/coreui.rtl.min.css" integrity="sha384-uDDl8GghAgqc1ho+BUQz7iYrUcU3bqoT4oCsW2CzpjSfgZttZ444Ehw1Q9+9NWKT" crossorigin="anonymous">

    <!-- Option 2: CoreUI PRO for Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.27.1/dist/css/coreui.rtl.min.css" integrity="sha384-CvNgc0vYVC64MRqkhIBUqT98RT5YyqLuPNJQ02XrGb0BxOsnq4kO5xKOxTkTjPvv" crossorigin="anonymous">

    <title>مرحبا بالعالم!</title>
  </head>
  <body>
    <h1>مرحبا بالعالم!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: CoreUI for Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/js/coreui.bundle.min.js" integrity="sha384-FTek6QoTuxz6Bb078pS0kYQ0qH2LZVB5LWwZl8944mluH+TCk0q3OP4PqA+dHJRl" crossorigin="anonymous"></script>

    <!-- Option 2: CoreUI PRO for Bootstrap Bundle with Popper -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.27.1/dist/js/coreui.bundle.min.js" integrity="sha384-KSNFp5bCZnnns+8MiDUlgHPXYw5vF39BnH5qRLrrR0lJarXe8bvSPHL87j5VVj0A" crossorigin="anonymous"></script>
    -->

    <!-- Option 3: Separate Popper and CoreUI for Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/js/coreui.min.js" integrity="sha384-gf1tanjsJUdqpGpiHABhWprM/7/k8itp69MQWhJGblqf0/0EhOcPA5GPZZE83Br9" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```

## Approach

Our approach to building RTL support into CoreUI comes with two important decisions that impact how we write and use our CSS:

1. **First, as in CoreUI 3 we decided to build it with our own mixins** This gives us full control and allows us to generate LTR and RTL separately, or if needed one stylesheet with both versions without any style's duplicates.

2. **Second, in CoreUI 3 we introduced a handful of directional classes ex. `mfs-auto`,  but in CoreUI 4 we've simplified them ex. `ms-auto`, and renamed all directional classes to adopt a logical properties approach.** Most of you have already interacted with logical properties thanks to our flex utilities—they replace direction properties like `left` and `right` in favor `start` and `end`. That makes the class names and values appropriate for LTR and RTL without any overhead.

  For example, instead of `.ml-3` for `margin-left`, use `.ms-3`.

Working with RTL, through our source Sass or compiled CSS, shouldn't be much different from our default LTR though.

## Customize from source

When it comes to [customization](https://coreui.io/bootstrap/docs/customize/sass/), the preferred way is to take advantage of variables, maps, and mixins.

### LTR and RTL at the same time

Need both LTR and RTL on the same page? All you have to do is set following variables:

> Heads up! Since @coreui/coreui v5.3.0 and @coreui/coreui-pro v5.10.0, we support Sass modules.   You can now use the modern @use and @forward rules instead of @import, which is deprecated and will be removed in Dart Sass 3.0.0. Using @import will result in a compilation warning. You can learn more about this transition here.

```scss
@use "@coreui/coreui/scss/coreui" with (
  $enable-ltr: true,
  $enable-rtl: true
);
```

> Sass @import are deprecated and will be removed in Dart Sass 3.0.0.!  You can also use @import rules, but please be aware that they are deprecated and will be removed in Dart Sass 3.0.0, resulting in a compilation warning. You can learn more about this deprecation here.

```scss
$enable-ltr: true;
$enable-rtl: true;

@import "../node_modules/@coreui/coreui/scss/coreui";
```

After running Sass, each selector in your CSS files will be prepended by `html:not([dir=rtl])`, and `*[dir=rtl]` for RTL files. Now you're able to use both files on the same page.

### RTL only

By default LTR is enable and RTL is disable, but you can easily change it and use only RTL.

> Heads up! Since @coreui/coreui v5.3.0 and @coreui/coreui-pro v5.10.0, we support Sass modules.   You can now use the modern @use and @forward rules instead of @import, which is deprecated and will be removed in Dart Sass 3.0.0. Using @import will result in a compilation warning. You can learn more about this transition here.

```scss
@use "@coreui/coreui/scss/coreui" with (
  $enable-ltr: false,
  $enable-rtl: true
);
```

> Sass @import are deprecated and will be removed in Dart Sass 3.0.0.!  You can also use @import rules, but please be aware that they are deprecated and will be removed in Dart Sass 3.0.0, resulting in a compilation warning. You can learn more about this deprecation here.

```scss
$enable-ltr: false;
$enable-rtl: true;

@import "../node_modules/@coreui/coreui/scss/coreui";
```

## Additional resources

- [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling)
