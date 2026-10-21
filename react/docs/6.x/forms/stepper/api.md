# React Stepper Component API

> Explore the API reference for the React Stepper component and discover how to effectively utilize its props for customization.

## CStepper

```jsx
import { CStepper } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeStepNumber` | `number` | - | Controls the currently active step number in the React Stepper component (Controlled mode). Use this prop when you want full control over the active step from the parent component. Step numbers are 1-based (1, 2, 3, ...). |
| `className` | `string` | - | Custom CSS class name applied to the main React Stepper container. |
| `defaultActiveStepNumber` | `number` | - | Sets the initial active step number for the Form Wizard when the React Stepper is used in Uncontrolled mode. Useful when you want the Stepper to manage its own state internally. Step numbers are 1-based (1, 2, 3, ...). |
| `layout` | `"horizontal" \| "vertical"` | `horizontal` | Defines the overall layout orientation of the React Stepper component. - `'horizontal'`: Step indicators and content are placed horizontally (default). - `'vertical'`: Step indicators and content are stacked vertically. Choose `'vertical'` layout for mobile or narrow designs. |
| `linear` | `boolean` | `true` | Defines whether the Stepper enforces linear progression (cannot skip steps). - `true`: Users must complete steps sequentially. - `false`: Users can open any step directly. Moving forward still validates the step being left. |
| `onFinish` | `(() => void)` | - | Callback fired when the user completes the last step of the Form Wizard. Use this to trigger a submit action or redirect after the final step. |
| `onReset` | `(() => void)` | - | Callback fired when the user triggers the reset action on the React Stepper. Use this to reset the Stepper state or clear related form data. |
| `onStepChange` | `((stepNumber: number) => void)` | - | Callback fired when the active step changes in the React Stepper component. |
| `onStepValidationComplete` | `(({ stepNumber, isValid }: StepperStepValidationResult) => void)` | - | Callback fired when the form of a step is validated, before the stepper decides whether the step passes. Receives an object with the step number and whether every control passed (`true` or `false`). A validity it sets with `setCustomValidity()` counts for the step. |
| `stepButtonLayout` | `"horizontal" \| "vertical"` | `horizontal` | Controls the internal layout of the step indicator (icon and label) inside each step when using a horizontal layout. - `'vertical'` – Places the label below the indicator icon. - `'horizontal'` – Places the label beside the indicator icon (default). This prop has no effect when `layout="vertical"` is used. |
| `steps` | `string[] \| StepperStepData[]` | `[]` | Defines the steps for the React Stepper component. Each step can be either: - A string (simplified format): `['Step 1', 'Step 2', 'Step 3']` - An object (full format): containing a label, optional content, and an optional `formRef` for validation. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `validation` | `boolean` | `true` | Enables or disables built-in form validation inside the React Stepper. When enabled (`true`), each step's associated form must be valid before advancing to the next step. Requires each step to provide a `formRef`. |
