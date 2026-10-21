# React Button Group Component

> React button group component allows to group a series of buttons and power them with JavaScript.

## Examples

Wrap a series of `<CButton>` components in `<CButtonGroup>`.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic example">
      <CButton theme="primary">Left</CButton>
      <CButton theme="primary">Middle</CButton>
      <CButton theme="primary">Right</CButton>
    </CButtonGroup>
  )
}
```

> Ensure the correct role and provide a label}>
> For assistive technologies (ex. screen readers) to communicate that a series of buttons are grouped, a proper `role` attribute has to be provided. For button groups, this should be `role="group"`, while toolbars should have a `role="toolbar"`.
> 
> Besides, groups and toolbars should be provided an understandable label, as most assistive technologies will otherwise not declare them, despite the appearance of the specific role attribute. In the following examples provided here, we apply `aria-label`, but options such as `aria-labelledby` can also be used.

These classes can also be added to groups of links, as an alternative to the [`CNav`](./../navs-tabs/#base-nav) components.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroup2Example = () => {
  return (
    <CButtonGroup>
      <CButton href="#" theme="primary" active>
        Active link
      </CButton>
      <CButton href="#" theme="primary">
        Link
      </CButton>
      <CButton href="#" theme="primary">
        Link
      </CButton>
    </CButtonGroup>
  )
}
```

### With links

These components can also be added to groups of links, as an alternative to the [`CNav` navigation components](https://coreui.io/react/docs/components/navs-tabs/).

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupWithLinksExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic example with links">
      <CButton as="a" href="#" theme="primary" active aria-current="page">
        Active link
      </CButton>
      <CButton as="a" href="#" theme="primary">
        Link
      </CButton>
      <CButton as="a" href="#" theme="primary">
        Link
      </CButton>
    </CButtonGroup>
  )
}
```

### Dividers

Add a divider between buttons with the `divider` property. Most useful when used with buttons that have the same theme color and a solid fill.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupDividersExample = () => {
  return (
    <>
      <CButtonGroup divider role="group" aria-label="Divided button group">
        <CButton theme="primary">Left</CButton>
        <CButton theme="primary" active>
          Active
        </CButton>
        <CButton theme="primary">Right</CButton>
      </CButtonGroup>
      <CButtonGroup divider role="group" aria-label="Divided button group">
        <CButton theme="secondary">Left</CButton>
        <CButton theme="secondary">Right</CButton>
      </CButtonGroup>
    </>
  )
}
```

Works with vertical button groups, too.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupDividers2Example = () => {
  return (
    <>
      <CButtonGroup vertical divider role="group" aria-label="Divided vertical button group">
        <CButton theme="primary">Left</CButton>
        <CButton theme="primary" active>
          Active
        </CButton>
        <CButton theme="primary">Right</CButton>
      </CButtonGroup>
      <CButtonGroup vertical divider role="group" aria-label="Divided vertical button group">
        <CButton theme="secondary">Left</CButton>
        <CButton theme="secondary">Right</CButton>
      </CButtonGroup>
    </>
  )
}
```

## Theme variants

Set `theme` on each button to give a whole group one color.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupThemeExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Secondary theme example">
      <CButton theme="secondary">Left</CButton>
      <CButton theme="secondary">Middle</CButton>
      <CButton theme="secondary">Right</CButton>
    </CButtonGroup>
  )
}
```

You can mix and match button variants in a button group.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupMixedStylesExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic mixed styles example">
      <CButton theme="danger">Left</CButton>
      <CButton theme="warning">Middle</CButton>
      <CButton theme="success">Right</CButton>
    </CButtonGroup>
  )
}
```

## Style variants

All button styles are supported in button groups. Mix and match with the `divider` property to add dividers between some styles or just use the button borders in others.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupSolidStylesExample = () => {
  return (
    <CButtonGroup divider role="group" aria-label="Solid example">
      <CButton theme="primary">Left</CButton>
      <CButton theme="primary">Middle</CButton>
      <CButton theme="primary">Right</CButton>
    </CButtonGroup>
  )
}
```

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupOutlinedStylesExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic outlined example">
      <CButton theme="primary" variant="outline">
        Left
      </CButton>
      <CButton theme="primary" variant="outline">
        Middle
      </CButton>
      <CButton theme="primary" variant="outline">
        Right
      </CButton>
    </CButtonGroup>
  )
}
```

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupSubtleStylesExample = () => {
  return (
    <CButtonGroup divider role="group" aria-label="Subtle example">
      <CButton theme="primary" variant="subtle">
        Left
      </CButton>
      <CButton theme="primary" variant="subtle">
        Middle
      </CButton>
      <CButton theme="primary" variant="subtle">
        Right
      </CButton>
    </CButtonGroup>
  )
}
```

## Toggle buttons

Combine button-like checkbox and radio toggle buttons into a seamless looking button group.

### Checkbox

Checkbox toggle buttons can be grouped together. Any or all of the buttons can be checked.

```html
import React from 'react'
import { CButtonGroup, CFormCheck } from '@coreui/react'

export const ButtonGroupCheckboxAndRadioExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
      <CFormCheck
        button={{ color: 'primary', variant: 'outline' }}
        id="btncheck1"
        autoComplete="off"
        label="Checkbox 1"
      />
      <CFormCheck
        button={{ color: 'primary', variant: 'outline' }}
        id="btncheck2"
        autoComplete="off"
        label="Checkbox 2"
      />
      <CFormCheck
        button={{ color: 'primary', variant: 'outline' }}
        id="btncheck3"
        autoComplete="off"
        label="Checkbox 3"
      />
    </CButtonGroup>
  )
}
```

### Radio

By design, radio toggle button groups can only have one button checked at a time.

```html
import React from 'react'
import { CButtonGroup, CFormCheck } from '@coreui/react'

export const ButtonGroupCheckboxAndRadio2Example = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
      <CFormCheck
        type="radio"
        button={{ color: 'primary', variant: 'outline' }}
        name="btnradio"
        id="btnradio1"
        autoComplete="off"
        label="Radio 1"
      />
      <CFormCheck
        type="radio"
        button={{ color: 'primary', variant: 'outline' }}
        name="btnradio"
        id="btnradio2"
        autoComplete="off"
        label="Radio 2"
      />
      <CFormCheck
        type="radio"
        button={{ color: 'primary', variant: 'outline' }}
        name="btnradio"
        id="btnradio3"
        autoComplete="off"
        label="Radio 3"
      />
    </CButtonGroup>
  )
}
```

## Button toolbar

Join sets of button groups into button toolbars for more complicated components. Use utility classes as needed to space out groups, buttons, and more.

```html
import React from 'react'
import { CButton, CButtonGroup, CButtonToolbar } from '@coreui/react'

export const ButtonToolbarExample = () => {
  return (
    <CButtonToolbar role="toolbar" aria-label="Toolbar with button groups">
      <CButtonGroup className="me-3" role="group" aria-label="First group">
        <CButton theme="primary">1</CButton>
        <CButton theme="primary">2</CButton>
        <CButton theme="primary">3</CButton>
        <CButton theme="primary">4</CButton>
      </CButtonGroup>
      <CButtonGroup className="me-3" role="group" aria-label="Second group">
        <CButton theme="secondary">5</CButton>
        <CButton theme="secondary">6</CButton>
        <CButton theme="secondary">7</CButton>
      </CButtonGroup>
      <CButtonGroup className="me-3" role="group" aria-label="Third group">
        <CButton theme="info">8</CButton>
      </CButtonGroup>
    </CButtonToolbar>
  )
}
```

Feel free to combine input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities through to space items correctly.

```html
import React from 'react'
import {
  CButton,
  CButtonGroup,
  CButtonToolbar,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

export const ButtonToolbar2Example = () => {
  return (
    <>
      <CButtonToolbar className="mb-4" role="toolbar" aria-label="Toolbar with button groups">
        <CButtonGroup className="me-3" role="group" aria-label="First group">
          <CButton theme="secondary" variant="outline">
            1
          </CButton>
          <CButton theme="secondary" variant="outline">
            2
          </CButton>
          <CButton theme="secondary" variant="outline">
            3
          </CButton>
          <CButton theme="secondary" variant="outline">
            4
          </CButton>
        </CButtonGroup>
        <CInputGroup>
          <CInputGroupText>@</CInputGroupText>
          <CFormInput
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </CInputGroup>
      </CButtonToolbar>
      <CButtonToolbar
        className="justify-content-between"
        role="group"
        aria-label="Toolbar with button groups"
      >
        <CButtonGroup className="me-3" role="group" aria-label="First group">
          <CButton theme="secondary" variant="outline">
            1
          </CButton>
          <CButton theme="secondary" variant="outline">
            2
          </CButton>
          <CButton theme="secondary" variant="outline">
            3
          </CButton>
          <CButton theme="secondary" variant="outline">
            4
          </CButton>
        </CButtonGroup>
        <CInputGroup>
          <CInputGroupText>@</CInputGroupText>
          <CFormInput
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </CInputGroup>
      </CButtonToolbar>
    </>
  )
}
```

## Sizing

Alternatively, of implementing button sizing classes to each button in a group, set `size` property to all `<CButtonGroup>`'s, including each one when nesting multiple groups.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupSizingExample = () => {
  return (
    <>
      <CButtonGroup size="lg" role="group" aria-label="Large button group">
        <CButton theme="primary" variant="outline">
          Left
        </CButton>
        <CButton theme="primary" variant="outline">
          Middle
        </CButton>
        <CButton theme="primary" variant="outline">
          Right
        </CButton>
      </CButtonGroup>
      <br />
      <CButtonGroup role="group" aria-label="Default button group">
        <CButton theme="primary" variant="outline">
          Left
        </CButton>
        <CButton theme="primary" variant="outline">
          Middle
        </CButton>
        <CButton theme="primary" variant="outline">
          Right
        </CButton>
      </CButtonGroup>
      <br />
      <CButtonGroup size="sm" role="group" aria-label="Small button group">
        <CButton theme="primary" variant="outline">
          Left
        </CButton>
        <CButton theme="primary" variant="outline">
          Middle
        </CButton>
        <CButton theme="primary" variant="outline">
          Right
        </CButton>
      </CButtonGroup>
    </>
  )
}
```

## Nesting

Put a `<CButtonGroup>` inside another `<CButtonGroup>` when you need dropdown menus combined with a series of buttons.

```html
import React from 'react'
import {
  CButton,
  CButtonGroup,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const ButtonGroupNestingExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Button group with nested dropdown">
      <CButton theme="primary">1</CButton>
      <CButton theme="primary">2</CButton>
      <CDropdown variant="btn-group">
        <CDropdownToggle theme="primary">Dropdown</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </CButtonGroup>
  )
}
```

## Vertical variation

Create a set of buttons that appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

```html
import React from 'react'
import {
  CButton,
  CButtonGroup,
  CCol,
  CFormCheck,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
} from '@coreui/react'

export const ButtonGroupVerticalExample = () => {
  return (
    <CRow>
      <CCol>
        <CButtonGroup vertical role="group" aria-label="Vertical button group">
          <CButton theme="primary">Button</CButton>
          <CButton theme="primary">Button</CButton>
          <CButton theme="primary">Button</CButton>
          <CButton theme="primary">Button</CButton>
          <CButton theme="primary">Button</CButton>
          <CButton theme="primary">Button</CButton>
          <CButton theme="primary">Button</CButton>
        </CButtonGroup>
      </CCol>
      <CCol>
        <CButtonGroup vertical role="group" aria-label="Vertical button group">
          <CButton theme="primary">Button</CButton>
          <CButton theme="primary">Button</CButton>
          <CDropdown variant="btn-group">
            <CDropdownToggle theme="primary">Dropdown</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CButton theme="primary">Button</CButton>
          <CButton theme="primary">Button</CButton>
          <CDropdown variant="btn-group">
            <CDropdownToggle theme="primary">Dropdown</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CDropdown variant="btn-group">
            <CDropdownToggle theme="primary">Dropdown</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CDropdown variant="btn-group">
            <CDropdownToggle theme="primary">Dropdown</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CButtonGroup>
      </CCol>
      <CCol>
        <CButtonGroup vertical role="group" aria-label="Vertical button group">
          <CFormCheck
            type="radio"
            button={{ color: 'danger', variant: 'outline' }}
            name="vbtnradio"
            id="vbtnradio1"
            autoComplete="off"
            label="Radio 1"
            defaultChecked
          />
          <CFormCheck
            type="radio"
            button={{ color: 'danger', variant: 'outline' }}
            name="vbtnradio"
            id="vbtnradio2"
            autoComplete="off"
            label="Radio 2"
          />
          <CFormCheck
            type="radio"
            button={{ color: 'danger', variant: 'outline' }}
            name="vbtnradio"
            id="vbtnradio3"
            autoComplete="off"
            label="Radio 3"
          />
        </CButtonGroup>
      </CCol>
    </CRow>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CButtonGroup /&gt;](./api/#cbuttongroup)
- [&lt;CButtonToolbar /&gt;](./api/#cbuttontoolbar)
