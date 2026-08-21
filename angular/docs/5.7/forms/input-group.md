# Angular Input Group Component

> Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.

## Basic example

Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to
place `cLabel` outside the input group.

## Wrapping

Input groups wrap by default via `flex-wrap: wrap` in order to accommodate custom form field validation within an
input group. You may disable this with `.flex-nowrap`.

## Sizing

Add the relative form sizing classes to the `c-input-group` itself and contents within will automatically resize—no
need for repeating the form control size classes on each element.

**Sizing on the individual input group elements isn't supported.**

## Checkboxes and radios

Place any checkbox or radio option within an input group's addon instead of text.

## Multiple inputs

While multiple `input` fields are supported visually, validation styles are only available for input groups with a single `cFormControl`.

## Multiple addons

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

## Button addons

Button add-ons are also supported.

## Dropdown addons

Dropdown add-ons are supported too.

## Segmented buttons

Split dropdown add-ons are supported either.

## Custom forms

Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.

### Custom select

### Custom file input

## API reference

### Form Module

### c-input-group
_component_

```jsx
import { InputGroupComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sizing` | `string` | - | Size the component small or large. |

### cInputGroupText
_directive_
