# React Bootstrap Tabs Component

> Learn how to create tabbed navigation interfaces in React using CoreUI's components styled like Bootstrap tabs and pills.

## How to use React Bootstrap Tabs component

Use CoreUI's React tabs styled with Bootstrap to organize content into multiple sections that users can switch between using tabs or pills.

### Tabs style

The default `variant="tabs"` creates traditional Bootstrap-style tabbed navigation.

```html
import React from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

export const TabsExample = () => {
  return (
    <CTabs defaultActiveItemKey="profile">
      <CTabList variant="tabs">
        <CTab itemKey="home">Home</CTab>
        <CTab itemKey="profile">Profile</CTab>
        <CTab itemKey="contact">Contact</CTab>
        <CTab disabled itemKey="disabled">
          Disabled
        </CTab>
      </CTabList>
      <CTabContent>
        <CTabPanel className="p-3" itemKey="home">
          Home tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="profile">
          Profile tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="contact">
          Contact tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="disabled">
          Disabled tab content
        </CTabPanel>
      </CTabContent>
    </CTabs>
  )
}
```

### Unstyled

Without the `variant` prop, tabs render with minimal default styles.

```html
import React from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

export const TabsUnstyledExample = () => {
  return (
    <CTabs defaultActiveItemKey="profile">
      <CTabList>
        <CTab itemKey="home">Home</CTab>
        <CTab itemKey="profile">Profile</CTab>
        <CTab itemKey="contact">Contact</CTab>
        <CTab disabled itemKey="disabled">
          Disabled
        </CTab>
      </CTabList>
      <CTabContent>
        <CTabPanel className="p-3" itemKey="home">
          Home tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="profile">
          Profile tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="contact">
          Contact tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="disabled">
          Disabled tab content
        </CTabPanel>
      </CTabContent>
    </CTabs>
  )
}
```

### Pills style

Use `variant="pills"` to display tabs styled like Bootstrap pills.

```html
import React from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

export const TabsPillsExample = () => {
  return (
    <CTabs defaultActiveItemKey={2}>
      <CTabList variant="pills">
        <CTab aria-controls="home-tab-pane" itemKey={1}>
          Home
        </CTab>
        <CTab aria-controls="profile-tab-pane" itemKey={2}>
          Profile
        </CTab>
        <CTab aria-controls="contact-tab-pane" itemKey={3}>
          Contact
        </CTab>
        <CTab aria-controls="disabled-tab-pane" disabled itemKey={4}>
          Disabled
        </CTab>
      </CTabList>
      <CTabContent>
        <CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1}>
          Home tab content
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="profile-tab-pane" itemKey={2}>
          Profile tab content
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="contact-tab-pane" itemKey={3}>
          Contact tab content
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="disabled-tab-pane" itemKey={4}>
          Disabled tab content
        </CTabPanel>
      </CTabContent>
    </CTabs>
  )
}
```

### Underline style

Use `variant="underline"` to show a bottom border underline beneath the active tab.

```html
import React from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

export const TabsUnderlineExample = () => {
  return (
    <CTabs defaultActiveItemKey={2}>
      <CTabList variant="underline">
        <CTab aria-controls="home-tab-pane" itemKey={1}>
          Home
        </CTab>
        <CTab aria-controls="profile-tab-pane" itemKey={2}>
          Profile
        </CTab>
        <CTab aria-controls="contact-tab-pane" itemKey={3}>
          Contact
        </CTab>
        <CTab aria-controls="disabled-tab-pane" disabled itemKey={4}>
          Disabled
        </CTab>
      </CTabList>
      <CTabContent>
        <CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1}>
          Home tab content
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="profile-tab-pane" itemKey={2}>
          Profile tab content
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="contact-tab-pane" itemKey={3}>
          Contact tab content
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="disabled-tab-pane" itemKey={4}>
          Disabled tab content
        </CTabPanel>
      </CTabContent>
    </CTabs>
  )
}
```

### Underline border

Use `variant="underline-border"` to show a full underline across the width of the tab.

```html
import React from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

export const TabsUnderlineBorderExample = () => {
  return (
    <CTabs defaultActiveItemKey={2}>
      <CTabList variant="underline-border">
        <CTab aria-controls="home-tab-pane" itemKey={1}>
          Home
        </CTab>
        <CTab aria-controls="profile-tab-pane" itemKey={2}>
          Profile
        </CTab>
        <CTab aria-controls="contact-tab-pane" itemKey={3}>
          Contact
        </CTab>
        <CTab aria-controls="disabled-tab-pane" disabled itemKey={4}>
          Disabled
        </CTab>
      </CTabList>
      <CTabContent>
        <CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1}>
          Home tab content
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="profile-tab-pane" itemKey={2}>
          Profile tab content
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="contact-tab-pane" itemKey={3}>
          Contact tab content
        </CTabPanel>
        <CTabPanel className="p-3" aria-labelledby="disabled-tab-pane" itemKey={4}>
          Disabled tab content
        </CTabPanel>
      </CTabContent>
    </CTabs>
  )
}
```

### Fill and justify

Use `layout="fill"` or `layout="justified"` to control how tabs stretch to fill the horizontal space.

```html
import React from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

export const TabsUnstyledFillAndJustifyExample = () => {
  return (
    <CTabs defaultActiveItemKey={2}>
      <CTabList variant="tabs" layout="fill">
        <CTab aria-controls="home-tab-pane" itemKey={1}>
          Home
        </CTab>
        <CTab aria-controls="profile-tab-pane" itemKey={2}>
          Profile tab with longer content
        </CTab>
        <CTab aria-controls="contact-tab-pane" itemKey={3}>
          Contact
        </CTab>
        <CTab aria-controls="disabled-tab-pane" disabled itemKey={4}>
          Disabled
        </CTab>
      </CTabList>
      <CTabContent>
        <CTabPanel className="py-3" aria-labelledby="home-tab-pane" itemKey={1}>
          Home tab content
        </CTabPanel>
        <CTabPanel className="py-3" aria-labelledby="profile-tab-pane" itemKey={2}>
          Profile tab content
        </CTabPanel>
        <CTabPanel className="py-3" aria-labelledby="contact-tab-pane" itemKey={3}>
          Contact tab content
        </CTabPanel>
        <CTabPanel className="py-3" aria-labelledby="disabled-tab-pane" itemKey={4}>
          Disabled tab content
        </CTabPanel>
      </CTabContent>
    </CTabs>
  )
}
```
```html
import React from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

export const TabsUnstyledFillAndJustify2Example = () => {
  return (
    <CTabs defaultActiveItemKey={2}>
      <CTabList variant="tabs" layout="justified">
        <CTab aria-controls="home-tab-pane" itemKey={1}>
          Home
        </CTab>
        <CTab aria-controls="profile-tab-pane" itemKey={2}>
          Profile
        </CTab>
        <CTab aria-controls="contact-tab-pane" itemKey={3}>
          Contact
        </CTab>
        <CTab aria-controls="disabled-tab-pane" disabled itemKey={4}>
          Disabled
        </CTab>
      </CTabList>
      <CTabContent>
        <CTabPanel className="py-3" aria-labelledby="home-tab-pane" itemKey={1}>
          Home tab content
        </CTabPanel>
        <CTabPanel className="py-3" aria-labelledby="profile-tab-pane" itemKey={2}>
          Profile tab content
        </CTabPanel>
        <CTabPanel className="py-3" aria-labelledby="contact-tab-pane" itemKey={3}>
          Contact tab content
        </CTabPanel>
        <CTabPanel className="py-3" aria-labelledby="disabled-tab-pane" itemKey={4}>
          Disabled tab content
        </CTabPanel>
      </CTabContent>
    </CTabs>
  )
}
```

### Controlled tabs

Use `activeItemKey` and `onChange` to fully control the active tab from your component state.

```html
import React, { useState } from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

export const TabsControlledExample = () => {
  const [activeTab, setActiveTab] = useState<number | string>('profile')

  return (
    <CTabs activeItemKey={activeTab} onChange={setActiveTab}>
      <CTabList variant="tabs">
        <CTab itemKey="home">Home</CTab>
        <CTab itemKey="profile">Profile</CTab>
        <CTab itemKey="contact">Contact</CTab>
        <CTab disabled itemKey="disabled">
          Disabled
        </CTab>
      </CTabList>
      <CTabContent>
        <CTabPanel className="p-3" itemKey="home">
          Home tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="profile">
          Profile tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="contact">
          Contact tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="disabled">
          Disabled tab content
        </CTabPanel>
      </CTabContent>
    </CTabs>
  )
}
```

## Accessibility

CoreUI's Tabs component automatically manages `aria-` and `role="..."` attributes to match Bootstrap and WAI-ARIA accessibility guidelines for tabs.

## API reference

Refer to the API documentation for detailed descriptions of all available props and usage patterns.

- [&lt;CTabs /&gt;](../api/#ctabs)
- [&lt;CTabList /&gt;](../api/#ctablist)
- [&lt;CTab /&gt;](../api/#ctab)
- [&lt;CTabContent /&gt;](../api/#ctabcontent)
- [&lt;CTabPanel /&gt;](../api/#ctabpanel)
