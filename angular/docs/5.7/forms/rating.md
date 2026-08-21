# Angular Rating Component

> Angular star rating component allows users to rate and provide feedback on content or products by selecting a specified number of stars, typically ranging from one to five, representing their level of satisfaction or preference.

_Added in 5.1.0._

## Examples
Embed the Rating component in your Angular application like this:

### Allow clear
Enable users to clear their selected rating by clicking on the current rating again. This functionality is activated
by setting `allowClear` boolean property.

This allows the selected rating to be deselected, effectively resetting the rating to a state where no value is
selected.

### Resettable
Our Angular Rating component allows users to assign and reset a star rating within a user interface. In the example below, we use the a button to clear the selected value by passing `null` value.

### Read only
Set the Angular Rating component to read-only by adding `readOnly` property. This disables interaction, preventing
users from changing the displayed rating value.

### Disabled
Add the `disabled` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.

### Tooltips
Enable descriptive text on hover by adding `tooltips` prop. This provides immediate feedback or guidance as the user
interacts with the rating items.

For custom messages, provide an array of labels corresponding to each rating value to enhance the user's understanding
of each rating level.

### Sizes
Larger or smaller Angular rating component? Add `size="lg"` or `size="sm"` for additional sizes.

### Precision
Adjust the granularity of the Rating component by setting `precision` prop. This attribute allows for fractional
ratings, such as quarter values, to provide more precise feedback.
Valid values: `1 | 0.5 | 0.25 | 0.125`.

### Number of items
Control the total number of rating items displayed by using `itemCount` property. You can create a Angular Rating
component
with a custom scale, be it larger for detailed assessments or smaller for simplicity.

### Custom icons
Customize the Angular Rating component with your choice of SVG icons by assigning new values to the `activeIcon` and
`icon` properties. This allows for a unique look tailored to the design language of your site or application.

The Rating component can be customized with either SVG or font icons, allowing for visual alignment with your
application's design. You can specify different icons for each rating value to enhance user interaction.

In the example below, we demonstrate how to set custom icons using SVG, allowing for detailed customization of the
visual elements within the Rating component.

In the example below, we use font icons from the CoreUI Icons set. In the `activeIcon` configuration, we also apply
the utility class `text-danger` to change the icon's color to red when it is active

For a more dynamic experience, define different icons for each rating value, enhancing the visual feedback:

### Custom feedback
The Angular Rating component integrates interactive star ratings with dynamic textual feedback using other components from CoreUI.
It enables users to select a rating that updates the display and label in real-time, enhancing the interactive experience.
Hover effects provide immediate feedback on potential ratings before selection, ensuring an intuitive user interface.

## Forms
Angular handles user input through reactive and template-driven forms. CoreUI Time Picker supports both types.

### Reactive

### Template driven

### Signal forms

## Customizing
### CSS variables

Angular Rating use local CSS variables on `.rating` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-rating-gap: #{$rating-gap};
--cui-rating-transition: #{$rating-transition};
--cui-rating-item-height: #{$rating-item-height};
--cui-rating-item-color: #{$rating-item-color};
--cui-rating-item-scale-transform: #{$rating-item-scale-transform};
--cui-rating-item-active-color: #{$rating-item-active-color};
--cui-rating-item-icon: #{escape-svg($rating-item-icon)};
```

#### How to use CSS variables

```ts
const vars = {
  '--my-css-var': 10,
  '--my-another-css-var': "red"
}
```

```html
<c-rating [ngStyle]="vars" />;
```

### SASS variables

```scss
$rating-gap:                   .0625rem !default;
$rating-transition:            color .15s ease-out, transform .15s ease-out !default;
$rating-item-height-sm:        1rem !default;
$rating-item-height:           1.25rem !default;
$rating-item-height-lg:        1.5rem !default;
$rating-item-color:            var(--cui-tertiary-color) !default;
$rating-item-scale-transform:  scale(1.2) !default;
$rating-item-active-color:     var(--cui-warning) !default;
$rating-item-icon:             url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='currentColor' d='M470.935,194.043,333.8,171.757,270.227,48.22a16,16,0,0,0-28.454,0L178.2,171.757,41.065,194.043A16,16,0,0,0,32.273,221.1l97.845,98.636L108.936,457.051a16,16,0,0,0,23.02,16.724L256,411.2l124.044,62.576a16,16,0,0,0,23.02-16.724L381.882,319.74,479.727,221.1A16,16,0,0,0,470.935,194.043Z'%3E%3C/path%3E%3C/svg%3E") !default;
```

## API reference

### Rating Module

```typescript
import { RatingModule } from '@coreui/angular-pro';

@NgModule({
    imports: [RatingModule,]
})
export class AppModule() { }
```

### c-rating
_component_

```jsx
import { RatingComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeIcon` | `string[]` | `[]` | The default icon to display when the item is selected. @returns: string \| string[] |
| `allowClear` | `boolean` | `false` | Enables the clearing upon clicking the selected item again. @returns: boolean @default: false |
| `ariaLabel` | `object` | - | Function that returns the accessible label (`aria-label`) for each rating item. Receives the item's value and the total item count. @returns: (value: number, itemCount: number) => string @default: (value, itemCount) => `${value} of ${itemCount}` @since: 5.7.7 |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. @returns: boolean @default: false |
| `highlightOnlySelected` | `boolean` | `false` | If enabled, only the currently selected icon will be visibly highlighted. @returns: boolean @default: false |
| `icon` | `string[]` | `[]` | The default icon to display when the item is not selected. @returns: string \| string[] |
| `itemCount` | `number` | `5` | Specifies the total number of stars to be displayed in the star rating component. This property determines the scale of the rating, such as out of 5 stars, 10 stars, etc. @returns: number @default: 5 |
| `precision` | `number` | `1` | Minimum increment value change allowed. @returns: number @default: 1 |
| `readOnly` | `boolean` | `false` | Toggle the readonly state for the component. @returns: boolean @default: false |
| `size` | `string` | - | Size the component small, large, or custom if you define custom icons with custom height. @returns: 'sm' \| 'lg' \| 'custom' \| undefined @default: undefined |
| `tooltips` | `boolean \| string[]` | `undefined` | Enable tooltips with default values or set specific labels for each icon. @returns: boolean \| string[] \| undefined @default: undefined |
| `value` | `string \| number \| null` | `null` | The `value` attribute of component. @returns: number \| null @default: null Emits `valueChange` on value change |

### Events

| Name | Description |
| --- | --- |
| `hoverValueChange` | Event emitted on `mouseenter` and `mouseleave`. |
| `valueChange` | Emitted when `value` changes. |
