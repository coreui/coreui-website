# Angular Range Component

> Use our custom Angular Range inputs for consistent cross-browser styling and built-in customization.

## Overview
Create custom range controls with `<input cFormControl type="range">`. The track (the background) and thumb (the
value) are both styled to appear the same across browsers. As only Edge Legacy and Firefox supports "filling" their
track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.

## Disabled
Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

## Min and max
Range inputs have implicit values for `min="0"` and `max="100"`, respectively. You may specify new values for those using the `min` and `max` attributes.

## Steps
By default, range inputs "snap" to integer values. To change this, you can specify a step value. In the example below, we double the number of steps by using `step="0.5"`.

## API reference
### Form Module

### cFormControl
_directive_

Works with `input` html tag of `type="range"`.

{/* todo: */}
{/* ```jsx
import { FormControlDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `plaintext` | `boolean` | `false` | Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use alongside `readonly` |
| `sizing` | `'' \| 'sm' \| 'lg'` | `undefined` | Size the component small or large. |
| `type` | `Omit<InputType, 'checkbox' \| 'radio'>` | `'text'` | Specifies the type of input element. |
| `valid` | `boolean` | `undefined` | Set component validation state to valid. | */}

#### Inputs

| name | description | type | default |
| ---- | ----------- | ---- | ------- |
| `max` | Specifies the maximum value for the component. | `number` | _100_ |
| `min` | Specifies the minimum value for the component. | `number` | _0_ |
| `step` | Specifies the interval between legal numbers in the component. | `number` |_1_|
| `type` | Specifies the html type of input element. | `range` |__required__|
| `value` | The value attribute of the input. | `number` | _(max-min)/2_ |
| `disabled` | Toggle the disabled state for the component. | `boolean` | _false_ |
