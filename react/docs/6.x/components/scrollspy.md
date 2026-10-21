# React Scrollspy Component

> Automatically update the navigation based on scroll position to indicate which section is currently active in the viewport.

## How it works

_Added in 6.0.0._

`<CScrollspy>` watches the sections you list by id and hands the id of the current one to its children — the navigation stays yours, controlled through the `active` property like everywhere else in React. It is best used with a [nav component](../navs-tabs/) or [list group](../list-group/), but any anchor elements in the page work the same way. Here's how it works.

- To start, scrollspy requires two things: a navigation, list group, or a simple set of links, plus a scrollable container. The scrollable container can be the viewport or a custom element with a set `height` and `overflow-y: scroll`.
- List the section ids in `ids`, in document order, and pass the scrollable element through `containerRef` when it is not the viewport. If there is no focusable element inside the container, be sure to also include `tabIndex={0}` to ensure keyboard access.
- As you scroll the container, the function-as-children form receives the id of the active section, and `onActivate` fires whenever it changes. Ids must resolve to an element in the DOM, otherwise they're ignored — a link `<a href="#home">` needs something like `<div id="home">` among the sections.
- Sections are looked up when the component mounts and whenever `ids` or `containerRef` change; a section added later is picked up once `ids` changes.

### Detection

The component watches every section with an [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) and decides which one is current from a single rule: an invisible **activation line** drawn across the scroll container, `topMargin` below its top edge (`12%` of the container's height by default). The result depends only on where the container is scrolled to, never on which direction it got there.

- **The active section is the lowest one whose top edge has moved up to or above the activation line.** When several sections are visible at once, the one you have scrolled furthest into wins.
- **Between two sections nothing changes.** While the gap between one section's end and the next heading crosses the line, the previous id stays active instead of the navigation going blank.
- **Above the first section the first id is active**, so the navigation is never empty once the container has content.
- **At the bottom of the container the last id is active**, even when the last section is too short for its top edge to ever reach the line.

Move the line with `topMargin` — a percentage of the container's height or a pixel value, for example `96px` to put it just below a sticky navbar; a pixel line is recomputed when the window resizes. To take over the observer's root box entirely, set `rootMargin` instead; when both are given, `rootMargin` wins. See the [API](#api).

### Scrollable containers and keyboard access

If you're making a scrollable container (other than the viewport), be sure to have a `height` set and `overflow-y: scroll;` applied to it—alongside `tabIndex={0}` to ensure keyboard access.

## Examples

### Navbar

Scroll the area below the navbar and watch the active state change. Open the dropdown and watch the dropdown items be highlighted as well — the toggle lights up whenever any of its items is the active one.

```html
import React, { useRef } from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarBrand,
} from '@coreui/react'
import { CScrollspy } from '@coreui/react-pro'

const copy =
  'This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted.'

export const ScrollspyNavbarExample = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dropdownIds = ['spyNavHeading3', 'spyNavHeading4', 'spyNavHeading5']

  return (
    <CScrollspy
      ids={['spyNavHeading1', 'spyNavHeading2', ...dropdownIds]}
      containerRef={containerRef}
    >
      {(activeId) => (
        <>
          <CNavbar className="bg-3 px-4">
            <CNavbarBrand href="#">Navbar</CNavbarBrand>
            <CNav variant="pills">
              <CNavItem>
                <CNavLink href="#spyNavHeading1" active={activeId === 'spyNavHeading1'}>
                  First
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#spyNavHeading2" active={activeId === 'spyNavHeading2'}>
                  Second
                </CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item">
                <CDropdownToggle
                  link
                  className={activeId && dropdownIds.includes(activeId) ? 'active' : undefined}
                >
                  Dropdown
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#spyNavHeading3" active={activeId === 'spyNavHeading3'}>
                    Third
                  </CDropdownItem>
                  <CDropdownItem href="#spyNavHeading4" active={activeId === 'spyNavHeading4'}>
                    Fourth
                  </CDropdownItem>
                  <CDropdownItem href="#spyNavHeading5" active={activeId === 'spyNavHeading5'}>
                    Fifth
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNav>
          </CNavbar>
          <div
            className="overflow-auto p-4"
            style={{ maxHeight: '14rem' }}
            ref={containerRef}
            tabIndex={0}
          >
            <h4 id="spyNavHeading1">First heading</h4>
            <p>{copy}</p>
            <h4 id="spyNavHeading2">Second heading</h4>
            <p>{copy}</p>
            <h4 id="spyNavHeading3">Third heading</h4>
            <p>{copy}</p>
            <h4 id="spyNavHeading4">Fourth heading</h4>
            <p>{copy}</p>
            <h4 id="spyNavHeading5">Fifth heading</h4>
            <p>{copy}</p>
          </div>
        </>
      )}
    </CScrollspy>
  )
}
```

### Nested nav

Scrollspy also works with nested `<CNav>`s. The component reports one active id, so parent activation is yours to derive — a small map from parent to its section ids keeps the group's link lit while any of its children is active. Scroll the area next to the navbar and watch the active state change.

```html
import React, { useRef } from 'react'
import { CNav, CNavLink } from '@coreui/react'
import { CScrollspy } from '@coreui/react-pro'

const copy =
  'This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted.'

const groups: Record<string, string[]> = {
  spyItem1: ['spyItem1', 'spyItem1-1', 'spyItem1-2'],
  spyItem2: ['spyItem2'],
  spyItem3: ['spyItem3', 'spyItem3-1', 'spyItem3-2'],
}

export const ScrollspyNestedExample = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const parentOf = (id: string | null) =>
    id ? Object.keys(groups).find((parent) => groups[parent].includes(id)) : undefined

  return (
    <CScrollspy ids={Object.values(groups).flat()} containerRef={containerRef}>
      {(activeId) => (
        <div className="row">
          <div className="col-4">
            <CNav className="flex-column" variant="pills">
              <CNavLink href="#spyItem1" active={parentOf(activeId) === 'spyItem1'}>
                Item 1
              </CNavLink>
              <CNav className="flex-column ms-4" variant="pills">
                <CNavLink href="#spyItem1-1" active={activeId === 'spyItem1-1'}>
                  Item 1-1
                </CNavLink>
                <CNavLink href="#spyItem1-2" active={activeId === 'spyItem1-2'}>
                  Item 1-2
                </CNavLink>
              </CNav>
              <CNavLink href="#spyItem2" active={parentOf(activeId) === 'spyItem2'}>
                Item 2
              </CNavLink>
              <CNavLink href="#spyItem3" active={parentOf(activeId) === 'spyItem3'}>
                Item 3
              </CNavLink>
              <CNav className="flex-column ms-4" variant="pills">
                <CNavLink href="#spyItem3-1" active={activeId === 'spyItem3-1'}>
                  Item 3-1
                </CNavLink>
                <CNavLink href="#spyItem3-2" active={activeId === 'spyItem3-2'}>
                  Item 3-2
                </CNavLink>
              </CNav>
            </CNav>
          </div>
          <div
            className="col-8 overflow-auto"
            style={{ maxHeight: '16rem' }}
            ref={containerRef}
            tabIndex={0}
          >
            <h4 id="spyItem1">Item 1</h4>
            <p>{copy}</p>
            <h5 id="spyItem1-1">Item 1-1</h5>
            <p>{copy}</p>
            <h5 id="spyItem1-2">Item 1-2</h5>
            <p>{copy}</p>
            <h4 id="spyItem2">Item 2</h4>
            <p>{copy}</p>
            <h4 id="spyItem3">Item 3</h4>
            <p>{copy}</p>
            <h5 id="spyItem3-1">Item 3-1</h5>
            <p>{copy}</p>
            <h5 id="spyItem3-2">Item 3-2</h5>
            <p>{copy}</p>
          </div>
        </div>
      )}
    </CScrollspy>
  )
}
```

### List group

Scrollspy also works with `<CListGroup>`s. Scroll the area next to the list group and watch the active state change.

```html
import React, { useRef } from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'
import { CScrollspy } from '@coreui/react-pro'

const copy =
  'This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted.'

export const ScrollspyListGroupExample = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const ids = ['spyList1', 'spyList2', 'spyList3', 'spyList4']

  return (
    <CScrollspy ids={ids} containerRef={containerRef}>
      {(activeId) => (
        <div className="row">
          <div className="col-4">
            <CListGroup>
              {ids.map((id, index) => (
                <CListGroupItem as="a" key={id} href={`#${id}`} active={activeId === id}>
                  Item {index + 1}
                </CListGroupItem>
              ))}
            </CListGroup>
          </div>
          <div
            className="col-8 overflow-auto"
            style={{ maxHeight: '16rem' }}
            ref={containerRef}
            tabIndex={0}
          >
            {ids.map((id, index) => (
              <React.Fragment key={id}>
                <h4 id={id}>Item {index + 1}</h4>
                <p>{copy}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </CScrollspy>
  )
}
```

### Simple anchors

Scrollspy is not limited to nav components and list groups, so it will work with any `<a>` anchor elements in the current document. Scroll the area and watch the highlighted link change.

```html
import React, { useRef } from 'react'
import { CScrollspy } from '@coreui/react-pro'

const copy =
  'This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted.'

export const ScrollspyAnchorsExample = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const ids = ['spyAnchor1', 'spyAnchor2', 'spyAnchor3', 'spyAnchor4', 'spyAnchor5']

  return (
    <CScrollspy ids={ids} containerRef={containerRef}>
      {(activeId) => (
        <div className="row">
          <div className="col-4">
            <div className="d-flex flex-column gap-3 text-center">
              {ids.map((id, index) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={activeId === id ? 'p-1 rounded bg-subtle-primary' : 'p-1 rounded'}
                >
                  Item {index + 1}
                </a>
              ))}
            </div>
          </div>
          <div
            className="col-8 overflow-auto"
            style={{ maxHeight: '16rem' }}
            ref={containerRef}
            tabIndex={0}
          >
            {ids.map((id, index) => (
              <React.Fragment key={id}>
                <h4 id={id}>Item {index + 1}</h4>
                <p>{copy}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </CScrollspy>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CScrollspy /&gt;](./api/#cscrollspy)
