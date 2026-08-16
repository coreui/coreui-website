# React Bootstrap Input Group Component

> Learn how to extend CoreUI’s React input fields with Bootstrap-styled input groups—add text, buttons, selects, or custom file inputs seamlessly.

## How to use React Bootstrap Input Group component

Use CoreUI’s `<CInputGroup>` components styled with Bootstrap to enhance form inputs by prepending or appending text, buttons, selects, and more—perfect for building rich form UIs.

### Basic usage

Add text or buttons on either side of the input using `<CInputGroupText>` or `<CButton>`.

```html
import React from 'react'
import { CFormInput, CFormLabel, CFormTextarea, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon1">@</CInputGroupText>
        <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CFormInput
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <CInputGroupText id="basic-addon2">@example.com</CInputGroupText>
      </CInputGroup>

      <CFormLabel htmlFor="basic-url">Your vanity URL</CFormLabel>
      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">https://example.com/users/</CInputGroupText>
        <CFormInput id="basic-url" aria-describedby="basic-addon3" />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText>$</CInputGroupText>
        <CFormInput aria-label="Amount (to the nearest dollar)" />
        <CInputGroupText>.00</CInputGroupText>
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CFormInput placeholder="Username" aria-label="Username" />
        <CInputGroupText>@</CInputGroupText>
        <CFormInput placeholder="Server" aria-label="Server" />
      </CInputGroup>

      <CInputGroup>
        <CInputGroupText>With textarea</CInputGroupText>
        <CFormTextarea aria-label="With textarea"></CFormTextarea>
      </CInputGroup>
    </>
  )
}
```

## Wrapping content

Input groups use `flex-wrap` by default, which allows wrapping when needed—especially useful for validation messages or long inputs.

```html
import React from 'react'
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupWrappingExample = () => {
  return (
    <CInputGroup className="flex-nowrap">
      <CInputGroupText id="addon-wrapping">@</CInputGroupText>
      <CFormInput placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
    </CInputGroup>
  )
}
```

To prevent wrapping, add `.flex-nowrap`.

## Input group sizing

Change size by applying `size="sm"` or `size="lg"` to `<CInputGroup>`. All inner elements will automatically adjust.

```html
import React from 'react'
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupSizingExample = () => {
  return (
    <>
      <CInputGroup size="sm" className="mb-3">
        <CInputGroupText id="inputGroup-sizing-sm">Small</CInputGroupText>
        <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="inputGroup-sizing-default">Default</CInputGroupText>
        <CFormInput
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </CInputGroup>

      <CInputGroup size="lg">
        <CInputGroupText id="inputGroup-sizing-lg">Large</CInputGroupText>
        <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </CInputGroup>
    </>
  )
}
```

> 📌 Note: Do not apply size classes to individual input elements inside the group.

## Checkboxes and radio buttons

Include checkboxes or radios inside your input group to align them with text fields or buttons.

```html
import React from 'react'
import { CFormCheck, CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupCheckboxesAndRadiosExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CInputGroupText>
          <CFormCheck type="checkbox" value="" aria-label="Checkbox for following text input" />
        </CInputGroupText>
        <CFormInput aria-label="Text input with checkbox" />
      </CInputGroup>

      <CInputGroup>
        <CInputGroupText>
          <CFormCheck type="radio" value="" aria-label="Radio button for following text input" />
        </CInputGroupText>
        <CFormInput aria-label="Text input with radio button" />
      </CInputGroup>
    </>
  )
}
```

## Multiple inputs

You can group multiple inputs side by side using a single `<CInputGroup>`. Useful for username + domain, ranges, etc.

```html
import React from 'react'
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupMultipleInputsExample = () => {
  return (
    <CInputGroup>
      <CInputGroupText>First and last name</CInputGroupText>
      <CFormInput aria-label="First name" />
      <CFormInput aria-label="Last name" />
    </CInputGroup>
  )
}
```

## Multiple addons

You can add multiple `<CInputGroupText>` elements before or after the input, or combine them with checkboxes or buttons.

```html
import React from 'react'
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupMultipleAddonsExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CInputGroupText>$</CInputGroupText>
        <CInputGroupText>0.00</CInputGroupText>
        <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
      </CInputGroup>

      <CInputGroup>
        <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
        <CInputGroupText>$</CInputGroupText>
        <CInputGroupText>0.00</CInputGroupText>
      </CInputGroup>
    </>
  )
}
```

## Input group with buttons

Add buttons inside the input group to combine text entry with actions.

```html
import React from 'react'
import { CButton, CFormInput, CInputGroup } from '@coreui/react'

export const InputGroupButtonAddonsExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CButton type="button" color="secondary" variant="outline" id="button-addon1">
          Button
        </CButton>
        <CFormInput
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CFormInput
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <CButton type="button" color="secondary" variant="outline" id="button-addon2">
          Button
        </CButton>
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
        <CFormInput placeholder="" aria-label="Example text with two button addons" />
      </CInputGroup>

      <CInputGroup>
        <CFormInput
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
      </CInputGroup>
    </>
  )
}
```

## Buttons with dropdowns

Group dropdown buttons together with your inputs using `<CDropdown>` components.

```html
import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormInput,
  CInputGroup,
} from '@coreui/react'

export const InputGroupButtonsWithDropdownsExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CDropdown variant="input-group">
          <CDropdownToggle color="secondary" variant="outline">
            Dropdown
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CFormInput aria-label="Text input with dropdown button" />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CFormInput aria-label="Text input with dropdown button" />
        <CDropdown alignment="end" variant="input-group">
          <CDropdownToggle color="secondary" variant="outline">
            Dropdown
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CInputGroup>

      <CInputGroup>
        <CDropdown variant="input-group">
          <CDropdownToggle color="secondary" variant="outline">
            Dropdown
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CFormInput aria-label="Text input with 2 dropdown buttons" />
        <CDropdown alignment="end" variant="input-group">
          <CDropdownToggle color="secondary" variant="outline">
            Dropdown
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CInputGroup>
    </>
  )
}
```

## Segmented buttons

You can also combine a primary button with a split dropdown inside the input group.

```html
import React from 'react'
import {
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormInput,
  CInputGroup,
} from '@coreui/react'

export const InputGroupSegmentedButtonsExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CDropdown variant="input-group">
          <CButton type="button" color="secondary" variant="outline">
            Action
          </CButton>
          <CDropdownToggle color="secondary" variant="outline" split />
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CFormInput aria-label="Text input with segmented dropdown button" />
      </CInputGroup>

      <CInputGroup>
        <CFormInput aria-label="Text input with segmented dropdown button" />
        <CDropdown alignment="end" variant="input-group">
          <CButton type="button" color="secondary" variant="outline">
            Action
          </CButton>
          <CDropdownToggle color="secondary" variant="outline" split />
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CInputGroup>
    </>
  )
}
```

## Custom form inputs

CoreUI supports enhanced input groups with custom selects and file inputs. Default browser styles aren’t supported in this layout.

### Select

```html
import React from 'react'
import { CButton, CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupCustomSelectExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CInputGroupText as="label" htmlFor="inputGroupSelect01">
          Options
        </CInputGroupText>
        <CFormSelect id="inputGroupSelect01">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CInputGroup>
      <CInputGroup className="mb-3">
        <CFormSelect id="inputGroupSelect02">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
        <CInputGroupText as="label" htmlFor="inputGroupSelect02">
          Options
        </CInputGroupText>
      </CInputGroup>
      <CInputGroup className="mb-3">
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
        <CFormSelect id="inputGroupSelect03" aria-label="Example select with button addon">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CInputGroup>
      <CInputGroup>
        <CFormSelect id="inputGroupSelect04" aria-label="Example select with button addon">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
      </CInputGroup>
      Custom file input# Upload
    </>
  )
}
```

### File upload

```html
import React from 'react'
import { CButton, CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupCustomFileInputExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CInputGroupText as="label" htmlFor="inputGroupFile01">
          Upload
        </CInputGroupText>
        <CFormInput type="file" id="inputGroupFile01" />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CFormInput type="file" id="inputGroupFile02" />
        <CInputGroupText as="label" htmlFor="inputGroupFile02">
          Upload
        </CInputGroupText>
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CButton type="button" color="secondary" variant="outline" id="inputGroupFileAddon03">
          Button
        </CButton>
        <CFormInput
          type="file"
          id="inputGroupFile03"
          aria-describedby="inputGroupFileAddon03"
          aria-label="Upload"
        />
      </CInputGroup>

      <CInputGroup>
        <CFormInput
          type="file"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
        />
        <CButton type="button" color="secondary" variant="outline" id="inputGroupFileAddon04">
          Button
        </CButton>
      </CInputGroup>
    </>
  )
}
```

## API reference

Check out the API documentation for full details on available props.

- [&lt;CInputGroup /&gt;](../api/#cinputgroup)
- [&lt;CInputGroupText /&gt;](../api/#cinputgrouptext)
