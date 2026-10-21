# Customize

> Learn how to theme, customize, and extend CoreUI for React with Sass, a boatload of global options, an expansive color system, and more.

## Overview

There are multiple ways to customize CoreUI for React. Your best path can depend on your project, the complexity of your build tools, the version of CoreUI for React you're using, browser support, and more.

Our two preferred methods are:

1. Using CoreUI for React [via package manager](https://coreui.io/react/docs/getting-started/install/#package-managers) so you can use and extend our source files.
2. Using CoreUI's compiled distribution files so you can add onto or override CoreUI's styles.

While we cannot go into details here on how to use every package manager, we can give some guidance on [using CoreUI for React with your own Sass compiler](https://coreui.io/react/docs/customize/sass/).

For those who want to use the distribution files, review the [getting started page](https://coreui.io/react/docs/getting-started/introduction/) for how to include those files. From there, consult the docs for the layout, components, and behaviors you'd like to use.

As you familiarize yourself with CoreUI for React, continue exploring this section for more details on how to utilize our global options, making use of and changing our color system, how we build our components, how to use our growing list of CSS custom properties, and how to optimize your code when building with CoreUI for React.

In v6, **CSS custom properties are the first-class customization layer**: every design decision the library makes is emitted as a token you can override at run time, and Sass is the configuration language that generates them. Where each kind of override belongs — a token on a selector, a map handed to `@use … with ()`, a classic variable — is laid out on [Architecture](https://coreui.io/react/docs/customize/architecture/).

## CSPs and embedded SVGs

Several CoreUI components include embedded SVGs in our CSS to style components consistently and easily across browsers and devices. **For organizations with more strict <abbr title="Content Security Policy">CSP</abbr> configurations**, we've documented all instances of our embedded SVGs (all of which are applied via `background-image`) so you can more thoroughly review your options.

- [Accordion](https://coreui.io/react/docs/components/accordion/)
- [Carousel controls](https://coreui.io/react/docs/components/carousel/#with-controls)
- [Close button](https://coreui.io/react/docs/components/close-button/) (used in alerts and modals)
- [Form checkboxes](https://coreui.io/react/docs/forms/checkbox/)
- [Form radio buttons](https://coreui.io/react/docs/forms/radio/)
- [Form switches](https://coreui.io/react/docs/forms/switch/)
- [Form validation icons](https://coreui.io/react/docs/forms/validation/)
- [Navbar toggle buttons](https://coreui.io/react/docs/components/navbar/#responsive-behaviors)
- [Select menus](https://coreui.io/react/docs/forms/select/)

Based on [community conversation](https://github.com/twbs/bootstrap/issues/25394), some options for addressing this in your own codebase include replacing the URLs with locally hosted assets, removing the images and using inline images (not possible in all components), and modifying your CSP. Our recommendation is to carefully review your own security policies and decide on the best path forward, if necessary.
