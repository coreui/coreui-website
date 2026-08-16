# React Bootstrap Button Group Component

> Learn how to group buttons using the React Bootstrap Button Group component from CoreUI. Create accessible, styled toolbars and button sets with ease.

## How to use React Bootstrap Button Group component

The React Bootstrap Button Group component allows you to group multiple buttons together into a single toolbar-like unit. Wrap a series of `<CButton>` components in a `<CButtonGroup>` to get started.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic example">
      <CButton color="primary">Left</CButton>
      <CButton color="primary">Middle</CButton>
      <CButton color="primary">Right</CButton>
    </CButtonGroup>
  )
}
```

> Ensure the correct role and provide a label}>
> For assistive technologies (e.g. screen readers) to identify a set of buttons as grouped, use `role="group"` for button groups and `role="toolbar"` for toolbars.
> 
> Always include an accessible label using `aria-label` or `aria-labelledby` to clarify the purpose of the group.

React Bootstrap Button Groups can also be applied to a group of links instead of using the [`CNav`](../../navs-tabs/#base-nav) component.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroup2Example = () => {
  return (
    <CButtonGroup>
      <CButton href="#" color="primary" active>
        Active link
      </CButton>
      <CButton href="#" color="primary">
        Link
      </CButton>
      <CButton href="#" color="primary">
        Link
      </CButton>
    </CButtonGroup>
  )
}
```

## Mixed styles in React Bootstrap Button Groups

Combine buttons with different styles within a single group for more flexible UI designs.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupMixedStylesExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic mixed styles example">
      <CButton color="danger">Left</CButton>
      <CButton color="warning">Middle</CButton>
      <CButton color="success">Right</CButton>
    </CButtonGroup>
  )
}
```

## Outlined button styles

Use `variant="outline"` on grouped buttons to apply Bootstrap's outline button style across the group.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupOutlinedStylesExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic outlined example">
      <CButton color="primary" variant="outline">
        Left
      </CButton>
      <CButton color="primary" variant="outline">
        Middle
      </CButton>
      <CButton color="primary" variant="outline">
        Right
      </CButton>
    </CButtonGroup>
  )
}
```

## Checkbox and radio button groups

Create interactive grouped controls by combining button-style checkboxes and radio buttons inside a React Bootstrap Button Group.

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

## React Bootstrap Button Toolbar

Group multiple button groups together into a toolbar using `<CButtonToolbar>`. Combine with layout utilities to control spacing and alignment.

```html
import React from 'react'
import { CButton, CButtonGroup, CButtonToolbar } from '@coreui/react'

export const ButtonToolbarExample = () => {
  return (
    <CButtonToolbar role="toolbar" aria-label="Toolbar with button groups">
      <CButtonGroup className="me-2" role="group" aria-label="First group">
        <CButton color="primary">1</CButton>
        <CButton color="primary">2</CButton>
        <CButton color="primary">3</CButton>
        <CButton color="primary">4</CButton>
      </CButtonGroup>
      <CButtonGroup className="me-2" role="group" aria-label="Second group">
        <CButton color="secondary">5</CButton>
        <CButton color="secondary">6</CButton>
        <CButton color="secondary">7</CButton>
      </CButtonGroup>
      <CButtonGroup className="me-2" role="group" aria-label="Third group">
        <CButton color="info">8</CButton>
      </CButtonGroup>
    </CButtonToolbar>
  )
}
```

You can also combine input groups with button groups to create interactive toolbars.

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
      <CButtonToolbar className="mb-3" role="toolbar" aria-label="Toolbar with button groups">
        <CButtonGroup className="me-2" role="group" aria-label="First group">
          <CButton color="secondary" variant="outline">
            1
          </CButton>
          <CButton color="secondary" variant="outline">
            2
          </CButton>
          <CButton color="secondary" variant="outline">
            3
          </CButton>
          <CButton color="secondary" variant="outline">
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
        <CButtonGroup className="me-2" role="group" aria-label="First group">
          <CButton color="secondary" variant="outline">
            1
          </CButton>
          <CButton color="secondary" variant="outline">
            2
          </CButton>
          <CButton color="secondary" variant="outline">
            3
          </CButton>
          <CButton color="secondary" variant="outline">
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

## Sizing React Bootstrap Button Groups

Instead of setting size on individual buttons, apply the `size` prop to the `<CButtonGroup>` to make all buttons within it uniformly sized.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroupSizingExample = () => {
  return (
    <>
      <CButtonGroup size="lg" role="group" aria-label="Large button group">
        <CButton color="primary" variant="outline">
          Left
        </CButton>
        <CButton color="primary" variant="outline">
          Middle
        </CButton>
        <CButton color="primary" variant="outline">
          Right
        </CButton>
      </CButtonGroup>
      <br />
      <CButtonGroup role="group" aria-label="Default button group">
        <CButton color="primary" variant="outline">
          Left
        </CButton>
        <CButton color="primary" variant="outline">
          Middle
        </CButton>
        <CButton color="primary" variant="outline">
          Right
        </CButton>
      </CButtonGroup>
      <br />
      <CButtonGroup size="sm" role="group" aria-label="Small button group">
        <CButton color="primary" variant="outline">
          Left
        </CButton>
        <CButton color="primary" variant="outline">
          Middle
        </CButton>
        <CButton color="primary" variant="outline">
          Right
        </CButton>
      </CButtonGroup>
    </>
  )
}
```

## Nesting button groups

Nest a `<CButtonGroup>` inside another to combine dropdowns with standard buttons, as supported in React Bootstrap Button Group usage.

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
      <CButton color="primary">1</CButton>
      <CButton color="primary">2</CButton>
      <CDropdown variant="btn-group">
        <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
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

## Vertical React Bootstrap Button Groups

Stack buttons vertically using the vertical variation of React Bootstrap Button Group. Note: split dropdowns are not supported in vertical mode.

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
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
        </CButtonGroup>
      </CCol>
      <CCol>
        <CButtonGroup vertical role="group" aria-label="Vertical button group">
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CDropdown variant="btn-group">
            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CDropdown variant="btn-group">
            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CDropdown variant="btn-group">
            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CDropdown variant="btn-group">
            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
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

## API reference

Explore the API documentation for available props and configuration for the React Bootstrap Button Group component and toolbars.

- [&lt;CButtonGroup /&gt;](../api/#cbuttongroup)
- [&lt;CButtonToolbar /&gt;]()
