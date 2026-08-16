# Vue Stepper Component API

> Explore the API reference for the Vue Stepper component and discover how to effectively utilize its props for customization.

Full API documentation for the CStepper component, including all available props, customization options, and integration tips for building advanced multi-step forms and wizards in Vue.

## CStepper

```jsx
import { CStepper } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeStepNumber` | `number` | `1` | The default active step index when not using `v-model`. |
| `id` | `string` | - | Optional unique ID used for accessibility attributes like `aria-labelledby`. |
| `layout` | `String as () => 'horizontal' \| 'vertical'` | `'horizontal'` | Sets the layout direction of the Vue Stepper component. - `'horizontal'` – Steps are placed side-by-side. - `'vertical'` – Steps are stacked vertically (ideal for mobile). This makes the Vue Form Wizard adaptable to various screen sizes. |
| `linear` | `boolean` | `true` | Enables linear step progression in the Vue Form Wizard. - `true`: Steps must be completed in order. - `false`: Users can navigate freely between steps. Useful for enforcing validation and structured data entry in Vue multi-step forms. |
| `modelValue` | `number` | - | The current active step index of the Vue Stepper (used for controlled mode with `v-model`). If this prop is not provided, the Vue Form Wizard will use `activeStepNumber` as its initial value. |
| `stepButtonLayout` | `String as () => 'horizontal' \| 'vertical'` | `'horizontal'` | Controls the layout of the step indicator and label. - `'horizontal'`: Icon and label are side-by-side. - `'vertical'`: Label is shown below the icon. Applies only when `layout` is set to `'horizontal'`. |
| `steps` | `Array as () => (StepperStepData \| string)[]` | - | Defines the list of steps in the Vue Stepper. Each step should include: - `label`: The title displayed in the step. - `indicator` (optional): Custom icon, number, or marker. - `formRef` (optional): A reference to the `<form>` used for validation in Vue Form Wizard scenarios. |
| `validation` | `boolean` | `true` | Enables validation of forms within each step of the Vue Form Wizard. When set to `true`, the user cannot proceed unless the current step's form passes `checkValidity()`. Each step must expose a native form element via the `formRef` slot binding. |

### Events

| Name | Description |
| --- | --- |
| `finish` | Emitted when the user successfully finishes all steps in the Vue Form Wizard. |
| `reset` | Emitted when the stepper is reset to its initial state. |
| `stepChange` | Emitted on any manual or programmatic step change. |
| `stepValidationComplete` | Emitted after each step's form is validated (when `validation: true`). |
| `update:modelValue` | Emitted when the current active step changes. Useful for syncing state with `v-model`. |
