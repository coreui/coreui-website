# React Stepper Component Styling

> Learn how to customize the React Stepper component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

### CSS variables

React Stepper supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$stepper-tokens: defaults(
  (
    --cui-stepper-steps-gap: .5rem,
    --cui-stepper-step-gap: .5rem,
    --cui-stepper-step-button-width: 8rem,
    --cui-stepper-step-button-color: var(--cui-fg-2),
    --cui-stepper-step-button-active-color: var(--cui-fg-2),
    --cui-stepper-step-button-complete-color: var(--cui-fg-2),
    --cui-stepper-step-button-disabled-color: var(--cui-fg-2),
    --cui-stepper-step-indicator-width: 2rem,
    --cui-stepper-step-indicator-height: 2rem,
    --cui-stepper-step-indicator-bg: transparent,
    --cui-stepper-step-indicator-color: var(--cui-fg-3),
    --cui-stepper-step-indicator-border-width: var(--cui-border-width),
    --cui-stepper-step-indicator-border-color: var(--cui-border-color),
    --cui-stepper-step-indicator-transition: #{color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out},
    --cui-stepper-step-indicator-active-color: var(--cui-primary-base),
    --cui-stepper-step-indicator-active-border-color: var(--cui-primary-base),
    --cui-stepper-step-indicator-complete-color: var(--cui-primary-contrast),
    --cui-stepper-step-indicator-complete-bg: var(--cui-primary-base),
    --cui-stepper-step-indicator-complete-border-color: var(--cui-primary-base),
    --cui-stepper-step-indicator-disabled-color: var(--cui-fg-3),
    --cui-stepper-step-indicator-disabled-bg: transparent,
    --cui-stepper-step-indicator-disabled-border-color: var(--cui-border-color),
    --cui-stepper-step-indicator-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpolygon fill='var(--ci-primary-color, currentColor)' points='200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269' class='ci-primary'/%3E%3C/svg%3E"),
    --cui-stepper-step-indicator-icon-color: var(--cui-primary-contrast),
    --cui-stepper-step-indicator-icon-size: 1rem,
    --cui-stepper-step-connector-height: .125rem,
    --cui-stepper-step-connector-gap: 1rem,
    --cui-stepper-step-connector-bg: var(--cui-bg-4),
    --cui-stepper-step-connector-complete-bg: var(--cui-primary-base),
    --cui-stepper-step-connector-transition: background-color .15s ease-in-out,
    --cui-stepper-step-content-transition: height .3s ease-in-out,
  ),
  $stepper-tokens
);
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-stepper-step-button-color': '#333',
  '--cui-stepper-step-indicator-bg': '#f8f9fa',
}

return <CStepper style={customVars} />
```
