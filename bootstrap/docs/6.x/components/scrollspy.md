# Bootstrap 6 Scrollspy

> Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.

## How it works

Scrollspy toggles the `.active` class on anchor (`<a>`) elements when the element with the `id` referenced by the anchor's `href` is scrolled into view. Scrollspy is best used in conjunction with a Bootstrap [nav component](https://coreui.io/bootstrap/docs/components/nav/) or [list group](https://coreui.io/bootstrap/docs/components/list-group/), but it will also work with any anchor elements in the current page. Here's how it works.

- To start, scrollspy requires two things: a navigation, list group, or a simple set of links, plus a scrollable container. The scrollable container can be the `<body>` or a custom element with a set `height` and `overflow-y: scroll`.
- On the scrollable container, add `data-coreui-spy="scroll"` and `data-coreui-target="#navId"` where `navId` is the unique `id` of the associated navigation. If there is no focusable element inside the element, be sure to also include a `tabindex="0"` to ensure keyboard access.
- As you scroll the "spied" container, an `.active` class is added and removed from anchor links within the associated navigation. Links must have resolvable `id` targets, otherwise they're ignored. For example, a `<a href="#home">home</a>` must correspond to something in the DOM like `<div id="home"></div>`.
- Target elements that are not visible will be ignored and their nav items won't receive an `.active` class. Call `refresh` once they become visible.
- Target `id`s are looked up with `getElementById`, so an `id` containing dots, colons, slashes or percent-encoded characters resolves without escaping.

### Detection

The plugin watches every section with an [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) and decides which one is current from a single rule: an invisible **activation line** drawn across the scroll container, `topMargin` below its top edge (`12%` of the container's height by default). The result depends only on where the container is scrolled to, never on which direction it got there.

- **The active section is the lowest one whose top edge has moved up to or above the activation line.** When several sections are visible at once, the one you have scrolled furthest into wins.
- **Between two sections nothing changes.** While the gap between one section's end and the next heading crosses the line, the previous link stays highlighted instead of the navigation going blank.
- **Above the first section the first link is active**, so the navigation is never empty once the container has content.
- **At the bottom of the container the last link is active**, even when the last section is too short for its top edge to ever reach the line.

Move the line with `topMargin` — a percentage of the container's height or a pixel value, for example `96px` to put it just below a sticky navbar. To take over the observer's root box entirely, set `rootMargin` instead; when both are given, `rootMargin` wins. See [Options](#options).

### Scrollable containers and keyboard access

If you're making a scrollable container (other than the `<body>`), be sure to have a `height` set and `overflow-y: scroll;` applied to it—alongside a `tabindex="0"` to ensure keyboard access.

## Examples

### Navbar

Scroll the area below the navbar and watch the active class change. Open the menu and watch the menu items be highlighted as well.

```html
<nav id="navbar-example2" class="navbar bg-1 px-4 mb-4 rounded-2">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" role="button" data-coreui-toggle="menu" aria-expanded="false">Menu</a>
      <div class="menu">
        <a class="menu-item" href="#scrollspyHeading3">Third</a>
        <a class="menu-item" href="#scrollspyHeading4">Fourth</a>
        <hr class="menu-divider">
        <a class="menu-item" href="#scrollspyHeading5">Fifth</a>
      </div>
    </li>
  </ul>
</nav>
<div data-coreui-spy="scroll" data-coreui-target="#navbar-example2" data-coreui-smooth-scroll="true" class="scrollspy-example bg-1 p-4 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p>
</div>
```

### Nested nav

Scrollspy also works with nested `.nav`s. If a nested `.nav` is `.active`, its parents will also be `.active`. Scroll the area next to the navbar and watch the active class change.

```html
<div class="row">
  <div class="col-4">
    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-5 border-end">
      <nav class="nav nav-pills flex-column">
        <a class="nav-link" href="#item-1">Item 1</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-4 my-1" href="#item-1-1">Item 1-1</a>
          <a class="nav-link ms-4 my-1" href="#item-1-2">Item 1-2</a>
        </nav>
        <a class="nav-link" href="#item-2">Item 2</a>
        <a class="nav-link" href="#item-3">Item 3</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-4 my-1" href="#item-3-1">Item 3-1</a>
          <a class="nav-link ms-4 my-1" href="#item-3-2">Item 3-2</a>
        </nav>
      </nav>
    </nav>
  </div>

  <div class="col-8">
    <div data-coreui-spy="scroll" data-coreui-target="#navbar-example3" data-coreui-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
      <div id="item-1">
        <h4>Item 1</h4>
        <p>...</p>
      </div>
      <div id="item-1-1">
        <h5>Item 1-1</h5>
        <p>...</p>
      </div>
      <div id="item-1-2">
        <h5>Item 1-2</h5>
        <p>...</p>
      </div>
      <div id="item-2">
        <h4>Item 2</h4>
        <p>...</p>
      </div>
      <div id="item-3">
        <h4>Item 3</h4>
        <p>...</p>
      </div>
      <div id="item-3-1">
        <h5>Item 3-1</h5>
        <p>...</p>
      </div>
      <div id="item-3-2">
        <h5>Item 3-2</h5>
        <p>...</p>
      </div>
    </div>
  </div>
</div>
```

### List group

Scrollspy also works with `.list-group`s. Scroll the area next to the list group and watch the active class change.

```html
<div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
    </div>
  </div>
  <div class="col-8">
    <div data-coreui-spy="scroll" data-coreui-target="#list-example" data-coreui-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="list-item-1">Item 1</h4>
      <p>...</p>
      <h4 id="list-item-2">Item 2</h4>
      <p>...</p>
      <h4 id="list-item-3">Item 3</h4>
      <p>...</p>
      <h4 id="list-item-4">Item 4</h4>
      <p>...</p>
    </div>
  </div>
</div>
```

### Simple anchors

Scrollspy is not limited to nav components and list groups, so it will work on any `<a>` anchor elements in the current document. Scroll the area and watch the `.active` class change.

```html
<div class="row">
  <div class="col-4">
    <div id="simple-list-example" class="d-flex flex-column gap-3 simple-list-example-scrollspy text-center">
      <a class="p-1 rounded" href="#simple-list-item-1">Item 1</a>
      <a class="p-1 rounded" href="#simple-list-item-2">Item 2</a>
      <a class="p-1 rounded" href="#simple-list-item-3">Item 3</a>
      <a class="p-1 rounded" href="#simple-list-item-4">Item 4</a>
      <a class="p-1 rounded" href="#simple-list-item-5">Item 5</a>
    </div>
  </div>
  <div class="col-8">
    <div data-coreui-spy="scroll" data-coreui-target="#simple-list-example" data-coreui-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="simple-list-item-1">Item 1</h4>
      <p>...</p>
      <h4 id="simple-list-item-2">Item 2</h4>
      <p>...</p>
      <h4 id="simple-list-item-3">Item 3</h4>
      <p>...</p>
      <h4 id="simple-list-item-4">Item 4</h4>
      <p>...</p>
      <h4 id="simple-list-item-5">Item 5</h4>
      <p>...</p>
    </div>
  </div>
</div>
```

## Usage

### Via data attributes

To easily add scrollspy behavior to your topbar navigation, add `data-coreui-spy="scroll"` to the element you want to spy on (most typically this would be the `<body>`). Then add the `data-coreui-target` attribute with the ID or class of the parent element of any Bootstrap `.nav` component.

```css
body {
  position: relative;
}
```

```html
<body data-coreui-spy="scroll" data-coreui-target="#navbar-example">
  ...
  <div id="navbar-example">
    <ul class="nav nav-tabs" role="tablist">
      ...
    </ul>
  </div>
  ...
</body>
```

### Via JavaScript

After adding `position: relative;` in your CSS, call the scrollspy via JavaScript:

```js
const scrollSpy = new coreui.ScrollSpy(document.body, {
  target: '#navbar-example'
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `rootMargin` | string, null | `null` | Raw override of the Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin). When set it is passed to the observer as is and **takes precedence over `topMargin`** (for example `0px 0px -40%`). Leave it `null` to derive the activation line from `topMargin`. |
| `smoothScroll` | boolean | `false` | Enables smooth scrolling when a user clicks on a link that refers to ScrollSpy observables. Once the scroll settles, the URL hash is updated and focus moves to the target section. |
| `target` | string, DOM element | `null`  | Specifies element to apply Scrollspy plugin. |
| `threshold` | array | `[0]` | Intersection Observer [threshold](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds) values, at which fractions of a section's visibility the observer reports back. |
| `topMargin` | string | `12%` | Position of the [activation line](#detection), measured from the top of the scroll container. Accepts a percentage of the container's height (`12%`) or pixels (`96px`, for example to sit below a sticky navbar). Ignored when `rootMargin` is set. |

### Methods

| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's scrollspy. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method to get the scrollspy instance associated with a DOM element |
| `getOrCreateInstance` | *Static* method to get the scrollspy instance associated with a DOM element, or to create a new one in case it wasn't initialized. |
| `refresh` | When adding or removing elements in the DOM, you'll need to call the refresh method. |

Here's an example using the refresh method:

```js
const dataSpyList = document.querySelectorAll('[data-coreui-spy="scroll"]')
dataSpyList.forEach(dataSpyEl => {
  coreui.ScrollSpy.getInstance(dataSpyEl).refresh()
})
```

### Events

| Event | Description |
| --- | --- |
| `activate.coreui.scrollspy` | This event fires on the scroll element whenever an anchor is activated by the scrollspy. |

```js
const firstScrollSpyEl = document.querySelector('[data-coreui-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.coreui.scrollspy', () => {
  // do something...
})
```
