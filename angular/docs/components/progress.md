# Angular Progress Component

> Documentation and examples for using Angular progress bars featuring support for stacked bars, animated backgrounds, and text labels.

## Examples

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), ensuring you can stack progress bars, animate them, and place text labels over them.

<div class="callout callout-info">
  <h5>New markup in CoreUI v5</h5>
  <p>
    We’ve simplified the HTML structure for progress bars to improve accessibility while still maintaining backward
    compatibility with the previous structure.
  </p>
</div>

### Basic usage

### Labels

Add labels to your progress bars by placing text within the `<c-progress>`.

Please take note that the default setting for the `<c-progress>` content is to be limited by the `overflow: hidden` property. This is done to prevent the content from extending beyond the progress bar's boundaries. However, if the progress bar is shorter than its label, the content may be truncated and become difficult to read. To modify this behavior, you can use the `.overflow-visible` class from the overflow utilities. Just make sure to specify a specific text color to ensure readability. Do keep in mind that this approach does not consider color modes at the moment.

### Height

We only set a `height` value on the `<c-progress>`, so if you change that value, the inner `<c-progress-bar>` will automatically resize accordingly.

### Backgrounds

Use `color` prop to change the appearance of individual progress bars.

It is important to choose an appropriate text color when incorporating labels into progress bars with a custom background color. This ensures readability and adequate contrast for the labels.

### Multiple bars

<div class="callout callout-info">
  <h5>New markup in CoreUI v5</h5>
  <p>
      We added a new stacked component to group multiple progress bars into a single stacked progress bar.
  </p>
</div>

Include multiple progress bars in a `<c-progress-stacked>` component to create a single stacked progress bar.

### Striped

Add `variant="striped"` to any `<c-progress>` to apply a stripe via CSS gradient over the progress bar's background color.

### Animated stripes

The striped gradient can also be animated. Add `animated` property to `<c-progress>` to animate the stripes right to left via CSS3 animations.

### Thin

Thin variant of progress

## Styling

Learn how to customize the Angular Progress component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables
Angular Progress supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

#### How to use CSS variables

### SASS variables

## Accessibility
The Angular Progress component is built with accessibility in mind. Each progressbar includes the following ARIA attributes:

- `role`: `progressbar`
- `aria-valuemin`: Minimum value
- `aria-valuemax`: Maximum value
- `aria-valuenow`: Current value

## API reference

### Progress Module

### Progress Standalone

### c-progress
_component_

```jsx
import { ProgressComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | `undefined` | Use to animate the stripes right to left via CSS3 animations. |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `height` | `number` | `0` | Sets the height of the component. If you set that value the inner `<c-progress-bar>` will automatically resize accordingly. |
| `max` | `number` | `100` | The max value of the ProgressBar. |
| `role` | `string` | `'progressbar'` | Set default html role attribute. |
| `thin` | `boolean` | `false` | Displays thin progress. |
| `value` | `number` | `0` | The percent value the ProgressBar. |
| `variant` | `'striped'` | `undefined` | Set the progress bar variant to optional striped. |
| `white` | `boolean` | `false` | Change the default color to white. |

### c-progress-bar

- for backward compatibility

```jsx
import { ProgressBarDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animated` | `boolean` | `undefined` | Use to animate the stripes right to left via CSS3 animations. |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `max` | `number` | `100` | The max value of the ProgressBar. |
| `precision` | `number` | `0` | Number of decimal places to round the computed percent value to. |
| `role` | `string` | `'progressbar'` | Set default html role attribute. |
| `value` | `number` | `0` | The percent value the ProgressBar. |
| `variant` | `'striped'` | `undefined` | Set the progress bar variant to optional striped. |
