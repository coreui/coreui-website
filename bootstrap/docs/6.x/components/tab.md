# Bootstrap 6 Tab

> Turn a nav into a tabbable interface with the tab plugin: panes of local content that swap without leaving the page.

The tab plugin turns a [nav](https://coreui.io/bootstrap/docs/components/nav/) into a tabbable interface. The nav carries the markup and the styling; this page covers the behavior the plugin adds on top of it.
Include the plugin individually or through the compiled `coreui.js` file to extend navigational tabs and pills into tabbable panes of local content, even via dropdown menus.

Dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers). As a best practice, we recommend using `<button>` elements for the tabs, as these are controls that trigger a dynamic change, rather than links that navigate to a new page or location.

Note that dynamic tabbed interfaces should <em>not</em> contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab's trigger element is not immediately visible (as it's inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.

## Nav tabs

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-coreui-toggle="tab" data-coreui-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-coreui-toggle="tab" data-coreui-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-coreui-toggle="tab" data-coreui-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="disabled-tab" data-coreui-toggle="tab" data-coreui-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  <div class="tab-pane" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
  <div class="tab-pane" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
  <div class="tab-pane" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
</div>
```

## With arbitrary markup

To help fit your needs, this works with `<ul>`-based markup, as shown above, or with any arbitrary "roll your own" markup. Note that if you're using `<nav>`, you shouldn't add `role="tablist"` directly to it, as this would override the element's native role as a navigation landmark. Instead, switch to an alternative element (in the example below, a simple `<div>`) and wrap the `<nav>` around it.

```html
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-coreui-toggle="tab" data-coreui-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link" id="nav-profile-tab" data-coreui-toggle="tab" data-coreui-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="nav-contact-tab" data-coreui-toggle="tab" data-coreui-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
    <button class="nav-link" id="nav-disabled-tab" data-coreui-toggle="tab" data-coreui-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
  <div class="tab-pane" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
  <div class="tab-pane" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
  <div class="tab-pane" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div>
```

## Pills

The tabs plugin also works with pills.

```html
<ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-coreui-toggle="pill" data-coreui-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-coreui-toggle="pill" data-coreui-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-coreui-toggle="pill" data-coreui-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-disabled-tab" data-coreui-toggle="pill" data-coreui-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">...</div>
  <div class="tab-pane" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
  <div class="tab-pane" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
  <div class="tab-pane" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
</div>
```

And with vertical pills. Ideally, for vertical tabs, you should also add `aria-orientation="vertical"` to the tab list container.

```html
<div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-coreui-toggle="pill" data-coreui-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
    <button class="nav-link" id="v-pills-profile-tab" data-coreui-toggle="pill" data-coreui-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="v-pills-disabled-tab" data-coreui-toggle="pill" data-coreui-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
    <button class="nav-link" id="v-pills-messages-tab" data-coreui-toggle="pill" data-coreui-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab" data-coreui-toggle="pill" data-coreui-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">...</div>
    <div class="tab-pane" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>
    <div class="tab-pane" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
    <div class="tab-pane" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
    <div class="tab-pane" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
  </div>
</div>
```

## List groups

The tab plugin also works with [list groups](https://coreui.io/bootstrap/docs/components/list-group/). Put `data-coreui-toggle="list"` on each `.list-group-item` and pair them with `.tab-pane` elements — the toggle value only names the pattern, the behavior is the same as for tabs and pills.

```html
<div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-coreui-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-coreui-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-coreui-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="list-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Home panel.</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Profile panel.</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Messages panel.</div>
    </div>
  </div>
</div>
```

## Accessibility

Dynamic tabbed interfaces, as described in the [ARIA Authoring Practices Guide tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality, and current state to users of assistive technologies (such as screen readers). As a best practice, we recommend using `<button>` elements for the tabs, as these are controls that trigger a dynamic change, rather than links that navigate to a new page or location.

In line with the ARIA Authoring Practices pattern, only the currently active tab receives keyboard focus. When the JavaScript plugin is initialized, it will set `tabindex="-1"` on all inactive tab controls. Once the currently active tab has focus, the cursor keys activate the previous/next tab, with the plugin changing the [roving `tabindex`](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/) accordingly. However, note that the JavaScript plugin does not distinguish between horizontal and vertical tab lists when it comes to cursor key interactions: regardless of the tab list's orientation, both the up *and* left cursor go to the previous tab, and down *and* right cursor go to the next tab.

> In general, to facilitate keyboard navigation, it's recommended to make the tab panels themselves focusable as well, unless the first element containing meaningful content inside the tab panel is already focusable. The JavaScript plugin does not try to handle this aspect—where appropriate, you'll need to explicitly make your tab panels focusable by adding `tabindex="0"` in your markup.

> The tab JavaScript plugin **does not** support tabbed interfaces that contain dropdown menus, as these cause both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab's trigger element is not immediately visible (as it's inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.

## Usage

### Via data attributes

You can activate a tab or pill navigation without writing any JavaScript by simply specifying `data-coreui-toggle="tab"` or `data-coreui-toggle="pill"` on an element. Use these data attributes on `.nav-tabs` or `.nav-pills`.

```html
<!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-coreui-toggle="tab" data-coreui-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-coreui-toggle="tab" data-coreui-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-coreui-toggle="tab" data-coreui-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-coreui-toggle="tab" data-coreui-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
</div>
```

### Via JavaScript

Enable tabbable tabs via JavaScript (each tab needs to be activated individually):

```js
const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new coreui.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})
```

You can activate individual tabs in several ways:

```js
const triggerEl = document.querySelector('#myTab button[data-coreui-target="#profile"]')
coreui.Tab.getInstance(triggerEl).show() // Select tab by name

const triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
coreui.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
```

### Fade effect

Every `.tab-pane` fades in as it becomes active — no class to add. The pane you leave goes at once, because two in-flow panes cannot cross-fade without one stacking under the other.

Add `.tab-pane-instant` to a pane to switch its fade off, or retime it with `--cui-tab-pane-transition-duration` and `--cui-tab-pane-transition-timing`.

```html
<div class="tab-content">
  <div class="tab-pane tab-pane-instant show active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  <div class="tab-pane tab-pane-instant" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
</div>
```

### Methods

> #### Promises and transitions
> 
> **Methods that show or hide a component return a promise.** The promise resolves when the transition ends, so `await` continues at the same moment a `shown.coreui.*` or `hidden.coreui.*` listener runs. The methods still return immediately and never block the caller. A call on a component that is already transitioning does nothing and resolves right away.
> 
> [Refer to our JavaScript documentation for further details](https://coreui.io/bootstrap/docs/getting-started/javascript/#promises-and-transitions).

#### constructor

You can create a tab instance with the constructor, for example:

```js
const cuiTab = new coreui.Tab('#myTab')
```

| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's tab. |
| `getInstance` | *Static* method which allows you to get the tab instance associated with a DOM element, you can use it like this: `coreui.Tab.getInstance(element)`. |
| `getOrCreateInstance` | *Static* method which allows you to get the tab instance associated with a DOM element, or create a new one in case it wasn't initialized You can use it like this: `coreui.Tab.getOrCreateInstance(element)`. |
| `show` | Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden. **Returns a promise that resolves after the tab pane is shown** (i.e. after the `shown.coreui.tab` event occurs). |

### Events

When showing a new tab, the events fire in the following order:

1. `hide.coreui.tab` (on the current active tab)
2. `show.coreui.tab` (on the to-be-shown tab)
3. `hidden.coreui.tab` (on the previous active tab, the same one as for the `hide.coreui.tab` event)
4. `shown.coreui.tab` (on the newly-active just-shown tab, the same one as for the `show.coreui.tab` event)

If no tab was already active, then the `hide.coreui.tab` and `hidden.coreui.tab` events will not be fired.

| Event type | Description |
| --- | --- |
| `hidden.coreui.tab` | This event fires after a new tab is shown (and thus the previous active tab is hidden). Use `event.target` and `event.relatedTarget` to target the previous active tab and the new active tab, respectively. |
| `hide.coreui.tab` | This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use `event.target` and `event.relatedTarget` to target the current active tab and the new soon-to-be-active tab, respectively. |
| `show.coreui.tab` | This event fires on tab show, but before the new tab has been shown. Use `event.target` and `event.relatedTarget` to target the active tab and the previous active tab (if available) respectively. |
| `shown.coreui.tab` | This event fires on tab show after a tab has been shown. Use `event.target` and `event.relatedTarget` to target the active tab and the previous active tab (if available) respectively. |

```js
const tabEl = document.querySelector('button[data-coreui-toggle="tab"]')
tabEl.addEventListener('shown.coreui.tab', event => {
  event.target // newly activated tab
  event.relatedTarget // previous active tab
})
```
