# Customize

> Learn how to theme, customize, and extend CoreUI for Bootstrap with Sass, a boatload of global options, an expansive color system, and more.

## Overview

There are multiple ways to customize CoreUI for Bootstrap. Your best path can depend on your project, the complexity of your build tools, the version of CoreUI for Bootstrap you're using, browser support, and more.

Our two preferred methods are:

1. Using CoreUI for Bootstrap [via package manager](https://coreui.io/bootstrap/docs/getting-started/download/#package-managers) so you can use and extend our source files.
2. Using CoreUI for Bootstrap's compiled distribution files or [jsDelivr](https://coreui.io/bootstrap/docs/getting-started/download/#cdn-via-jsdelivr) so you can add onto or override CoreUI for Bootstrap's styles.

While we cannot go into details here on how to use every package manager, we can give some guidance on [using CoreUI for Bootstrap with your own Sass compiler](https://coreui.io/bootstrap/docs/customize/sass/).

For those who want to use the distribution files, review the [getting started page](https://coreui.io/bootstrap/docs/getting-started/introduction/) for how to include those files and an example HTML page. From there, consult the docs for the layout, components, and behaviors you'd like to use.

As you familiarize yourself with Bootstrap, continue exploring this section for more details on how to utilize our global options, making use of and changing our color system, how we build our components, how to use our growing list of CSS custom properties, and how to optimize your code when building with Bootstrap.

## CSPs and embedded SVGs

Several CoreUI for Bootstrap components include embedded SVGs in our CSS to style components consistently and easily across browsers and devices. **For organizations with more strict <abbr title="Content Security Policy">CSP</abbr> configurations**, we've documented all instances of our embedded SVGs (all of which are applied via `background-image`) so you can more thoroughly review your options.

- [Accordion](https://coreui.io/bootstrap/docs/components/accordion/)
- [Carousel controls](https://coreui.io/bootstrap/docs/components/carousel/#with-controls)
- [Close button](https://coreui.io/bootstrap/docs/components/close-button/) (used in alerts and modals)
- [Form checkboxes and radio buttons](https://coreui.io/bootstrap/docs/forms/checks-radios/)
- [Form switches](https://coreui.io/bootstrap/docs/forms/checks-radios/#switches)
- [Form validation icons](https://coreui.io/bootstrap/docs/forms/validation/#server-side)
- [Navbar toggle buttons](https://coreui.io/bootstrap/docs/components/navbar/#responsive-behaviors)
- [Select menus](https://coreui.io/bootstrap/docs/forms/select/)

Based on [community conversation](https://github.com/twbs/bootstrap/issues/25394), some options for addressing this in your own codebase include replacing the URLs with locally hosted assets, removing the images and using inline images (not possible in all components), and modifying your CSP. Our recommendation is to carefully review your own security policies and decide on the best path forward, if necessary.
