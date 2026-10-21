# Vue Range Slider Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI Vue Range Slider, ensuring compliance with WAI-ARIA guidelines.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Accessibility

The Vue.js Range Slider component is built with accessibility in mind. Each slider handle includes the following ARIA attributes:

- `role="slider"`
- `aria-valuemin`: Minimum value
- `aria-valuemax`: Maximum value
- `aria-valuenow`: Current value
- `aria-orientation`: horizontal or vertical

Additionally, ensure that labels and tooltips are clear and descriptive to provide the best experience for all users.
