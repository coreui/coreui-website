# React Checkbox & Radio Components

> Create consistent cross-browser and cross-device checkboxes and radios with our React checkbox, radio, and switch components.

## Approach

Browser default checkboxes and radios are replaced with the help of `<CFormCheck>`. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

## Checks

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosChecksExample = () => (
  <>
    <CFormCheck id="flexCheckDefault" label="Default checkbox" />
    <CFormCheck id="flexCheckChecked" label="Checked checkbox" defaultChecked />
  </>
)
```

## Indeterminate

Checkboxes can utilize the `:indeterminate` pseudo-class when manually set via `indeterminate` property.

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosIndeterminateExample = () => (
  <CFormCheck id="flexCheckIndeterminate" label="Indeterminate checkbox" indeterminate />
)
```

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosDisabledExample = () => (
  <>
    <CFormCheck label="Disabled checkbox" disabled />
    <CFormCheck label="Disabled checked checkbox" defaultChecked disabled />
  </>
)
```

## Radios

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosRadiosExample = () => (
  <>
    <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Default radio" />
    <CFormCheck
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      label="Checked radio"
      defaultChecked
    />
  </>
)
```

### Disabled

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosRadiosDisabledExample = () => (
  <>
    <CFormCheck
      type="radio"
      name="flexRadioDisabled"
      id="flexRadioDisabled"
      label="Disabled radio"
      disabled
    />
    <CFormCheck
      type="radio"
      name="flexRadioDisabled"
      id="flexRadioCheckedDisabled"
      label="Disabled checked radio"
      defaultChecked
      disabled
    />
  </>
)
```

## Switches

A switch has the markup of a custom checkbox but uses the `switch` boolean properly to render a toggle switch. Switches also support the `disabled` attribute.

```html
import { CFormSwitch } from '@coreui/react'

export const ChecksRadiosSwitchesExample = () => (
  <>
    <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault" />
    <CFormSwitch label="Checked switch checkbox input" id="formSwitchCheckChecked" defaultChecked />
    <CFormSwitch label="Disabled switch checkbox input" id="formSwitchCheckDisabled" disabled />
    <CFormSwitch
      label="Disabled checked switch checkbox input"
      id="formSwitchCheckCheckedDisabled"
      defaultChecked
      disabled
    />
  </>
)
```

### Sizes

```html
import { CFormSwitch } from '@coreui/react'

export const ChecksRadiosSwitchSizesExample = () => (
  <>
    <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault" />
    <CFormSwitch size="lg" label="Large switch checkbox input" id="formSwitchCheckDefaultLg" />
    <CFormSwitch
      size="xl"
      label="Extra large switch checkbox input"
      id="formSwitchCheckDefaultXL"
    />
  </>
)
```

## Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced.

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosStackedExample = () => (
  <>
    <CFormCheck id="defaultCheck1" label="Default checkbox" />
    <CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled />
  </>
)
```

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosStackedRadiosExample = () => (
  <>
    <CFormCheck
      type="radio"
      name="exampleRadios"
      id="exampleRadios1"
      value="option1"
      label="Default radio"
      defaultChecked
    />
    <CFormCheck
      type="radio"
      name="exampleRadios"
      id="exampleRadios2"
      value="option2"
      label="Second default radio"
    />
    <CFormCheck
      type="radio"
      name="exampleRadios"
      id="exampleRadios3"
      value="option3"
      label="Disabled radio"
      disabled
    />
  </>
)
```

## Inline

Group checkboxes or radios on the same horizontal row by adding `inline` boolean property to any `<CFormCheck>`.

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosInlineExample = () => (
  <>
    <CFormCheck inline id="inlineCheckbox1" value="option1" label="1" />
    <CFormCheck inline id="inlineCheckbox2" value="option2" label="2" />
    <CFormCheck inline id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled />
  </>
)
```

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosInlineRadiosExample = () => (
  <>
    <CFormCheck
      inline
      type="radio"
      name="inlineRadioOptions"
      id="inlineCheckbox1"
      value="option1"
      label="1"
    />
    <CFormCheck
      inline
      type="radio"
      name="inlineRadioOptions"
      id="inlineCheckbox2"
      value="option2"
      label="2"
    />
    <CFormCheck
      inline
      type="radio"
      name="inlineRadioOptions"
      id="inlineCheckbox3"
      value="option3"
      label="3 (disabled)"
      disabled
    />
  </>
)
```

## Without labels

Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`).

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosWithoutLabelsExample = () => (
  <>
    <div>
      <CFormCheck id="checkboxNoLabel" value="" aria-label="..." />
    </div>
    <div>
      <CFormCheck type="radio" name="radioNoLabel" id="radioNoLabel" value="" aria-label="..." />
    </div>
  </>
)
```

## Toggle buttons

Create button-like checkboxes and radio buttons by using `button` boolean property on the `<CFormCheck>` component. These toggle buttons can further be grouped in a button group if needed.

### Checkbox toggle buttons

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosCheckboxToggleButtonsExample = () => (
  <CFormCheck
    button={{ color: 'primary' }}
    id="btn-check"
    autoComplete="off"
    label="Single toggle"
  />
)
```

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosCheckboxToggleButtonsCheckedExample = () => (
  <CFormCheck
    button={{ color: 'primary' }}
    id="btn-check-2"
    autoComplete="off"
    label="Checked"
    defaultChecked
  />
)
```

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosCheckboxToggleButtonsDisabledExample = () => (
  <CFormCheck
    button={{ color: 'primary' }}
    id="btn-check-3"
    autoComplete="off"
    label="Disabled"
    disabled
  />
)
```

### Radio toggle buttons

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosRadioToggleButtonsExample = () => (
  <>
    <CFormCheck
      button={{ color: 'secondary' }}
      type="radio"
      name="options"
      id="option1"
      autoComplete="off"
      label="Checked"
      defaultChecked
    />
    <CFormCheck
      button={{ color: 'secondary' }}
      type="radio"
      name="options"
      id="option2"
      autoComplete="off"
      label="Radio"
    />
    <CFormCheck
      button={{ color: 'secondary' }}
      type="radio"
      name="options"
      id="option3"
      autoComplete="off"
      label="Radio"
      disabled
    />
    <CFormCheck
      button={{ color: 'secondary' }}
      type="radio"
      name="options"
      id="option4"
      autoComplete="off"
      label="Radio"
    />
  </>
)
```

### Outlined styles

Different variants of button, such at the various outlined styles, are supported.

```html
import { CFormCheck } from '@coreui/react'

export const ChecksRadiosOutlinedStylesExample = () => (
  <>
    <div>
      <CFormCheck
        button={{ color: 'primary', variant: 'outline' }}
        id="btn-check-outlined"
        autoComplete="off"
        label="Single toggle"
      />
    </div>
    <div>
      <CFormCheck
        button={{ color: 'secondary', variant: 'outline' }}
        id="btn-check-2-outlined"
        autoComplete="off"
        label="Checked"
        defaultChecked
      />
    </div>
    <div>
      <CFormCheck
        button={{ color: 'success', variant: 'outline' }}
        type="radio"
        name="options-outlined"
        id="success-outlined"
        autoComplete="off"
        label="Radio"
        defaultChecked
      />
      <CFormCheck
        button={{ color: 'danger', variant: 'outline' }}
        type="radio"
        name="options-outlined"
        id="danger-outlined"
        autoComplete="off"
        label="Radio"
      />
    </div>
  </>
)
```

## API

### CFormCheck

```jsx
import { CFormCheck } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `button` | `ButtonObject \| undefined` | - | Create button-like checkboxes and radio buttons. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `feedback` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `ReactNode` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingLabel` | `ReactNode` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `hitArea` | `"full" \| undefined` | - | Sets hit area to the full area of the component. |
| `id` | `string \| undefined` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `indeterminate` | `boolean \| undefined` | - | Input Checkbox indeterminate Property. |
| `inline` | `boolean \| undefined` | - | Group checkboxes or radios on the same horizontal row. |
| `invalid` | `boolean \| undefined` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | The element represents a caption for a component. |
| `reverse` | `boolean \| undefined` | - | Put checkboxes or radios on the opposite side. |
| `tooltipFeedback` | `boolean \| undefined` | - | Display validation feedback in a styled tooltip. |
| `type` | `"checkbox" \| "radio" \| undefined` | `checkbox` | Specifies the type of component. |
| `valid` | `boolean \| undefined` | - | Set component validation state to valid. |

### CFormSwitch

```jsx
import { CFormSwitch } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `id` | `string \| undefined` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `invalid` | `boolean \| undefined` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | The element represents a caption for a component. |
| `reverse` | `boolean \| undefined` | - | Put switch on the opposite side. |
| `size` | `"lg" \| "xl" \| undefined` | - | Size the component large or extra large. Works only with `switch`. |
| `type` | `"checkbox" \| "radio" \| undefined` | `checkbox` | Specifies the type of component. |
| `valid` | `boolean \| undefined` | - | Set component validation state to valid. |
