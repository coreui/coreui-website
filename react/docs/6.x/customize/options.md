# Options

> Quickly customize CoreUI for React with built-in variables to easily toggle global CSS preferences for controlling style and behavior.

Customize CoreUI for React with our built-in custom variables file and easily toggle global CSS preferences with new `$enable-*` Sass variables. Override a variable's value and recompile with `npm run test` as needed.

You can find and customize these variables for key global options in CoreUI's `@coreui/coreui/scss/_config.scss` file.

| Variable                       | Values                             | Description                                                                            |
| ------------------------------ | ---------------------------------- | -------------------------------------------------------------------------------------- |
| `$spacer`                      | `1rem` (default), or any value > 0 | Specifies the default spacer value to programmatically generate our [margin](https://coreui.io/react/docs/utilities/margin/), [padding](https://coreui.io/react/docs/utilities/padding/) and [gap](https://coreui.io/react/docs/utilities/gap/) utilities. |
| `$enable-dark-mode`            | `true` (default) or `false`        | Enables built-in dark mode support across the project and its components. |
| `$enable-rounded`              | `true` (default) or `false`        | Enables predefined `border-radius` styles on various components. |
| `$enable-shadows`              | `true` or `false` (default)        | Enables predefined decorative `box-shadow` styles on various components. Does not affect `box-shadow`s used for focus states. |
| `$enable-gradients`            | `true` or `false` (default)        | Enables predefined gradients via `background-image` styles on various components. |
| `$enable-transitions`          | `true` (default) or `false`        | Enables predefined `transition`s on various components. |
| `$enable-reduced-motion`       | `true` (default) or `false`        | Enables the [`prefers-reduced-motion` media query](https://coreui.io/react/docs/accessibility/reduced-motion/), which suppresses certain animations/transitions based on the users' browser/operating system preferences. |
| `$enable-grid-classes`         | `true` (default) or `false`        | Enables the generation of CSS classes for the grid system (e.g. `.row`, `.col-md-1`, etc.). |
| `$enable-container-classes`    | `true` (default) or `false`        | Enables the generation of CSS classes for layout containers. (New in v4.2.0) |
| `$enable-caret`                | `true` (default) or `false`        | Enables pseudo element caret on `.dropdown-toggle`. |
| `$enable-button-pointers`      | `true` (default) or `false`        | Add "hand" cursor to non-disabled button elements. |
| `$enable-cssgrid`              | `true` (default) or `false`        | Enables the generation of the [CSS Grid layout](https://coreui.io/react/docs/layout/css-grid/) classes (e.g. `.grid`, `.g-col-6`). |
| `$enable-deprecation-messages` | `true` (default) or `false`        | Set to `false` to hide warnings when using any of the deprecated variables, mixins and functions that are planned to be removed in the next major. |
| `$enable-smooth-scroll`        | `true` (default) or `false`        | Applies `scroll-behavior: smooth` globally, except for users asking for reduced motion through [`prefers-reduced-motion` media query](https://coreui.io/react/docs/accessibility/reduced-motion/) |
| `$enable-ltr`                  | `false` or `false` (default)       | Enables Left-to-Right |
| `$enable-rtl`                  | `true` (default) or `false`        | Enables Right-to-Left |
