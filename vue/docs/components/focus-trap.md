# Vue Focus Trap Component

> Vue Focus Trap component ensures keyboard navigation stays within a designated container element. Essential for creating accessible modal dialogs, dropdown menus, and overlay components that comply with WCAG 2.1 accessibility standards.

## Overview

The Vue Focus Trap component is an accessibility utility that constrains keyboard focus within a specific container element. When active, it prevents Tab and Shift+Tab navigation from leaving the trapped area, ensuring users stay within the intended interactive region. This is essential for modal dialogs, dropdown menus, and other overlay components that need to maintain focus for screen reader users and keyboard navigation compliance.

Focus traps are a critical accessibility pattern required by WCAG 2.1 guidelines for modal dialogs and temporary overlay content. By containing focus within the relevant UI section, focus traps help create predictable and accessible user experiences.

## Key Features

- **WCAG 2.1 Compliant**: Meets accessibility standards for focus management
- **Lightweight**: No extra DOM wrappers - uses direct slot content
- **Flexible**: Works with any slot content that can receive focus
- **Smart Focus**: Configurable first focus target and automatic focus restoration
- **Event Callbacks**: Activation and deactivation event handlers

## Basic Usage

The most basic implementation wraps slot content and activates the focus trap:

```html
<template>
  <div>
    <CButton color="primary" @click="trapActive = !trapActive">
      {{ trapActive ? 'Deactivate' : 'Activate' }} Focus Trap
    </CButton>

    <div class="mt-3 p-3 border rounded">
      <CFocusTrap :active="trapActive">
        <div class="p-3 bg-light border rounded">
          <h5>Focus Trapped Area</h5>
          <p>Tab and Shift+Tab will cycle within this area when active.</p>
          <div class="d-flex gap-2">
            <input type="text" class="form-control" placeholder="First input" />
            <input type="text" class="form-control" placeholder="Second input" />
            <CButton color="secondary">Button</CButton>
          </div>
        </div>
      </CFocusTrap>
    </div>

    <div class="mt-3 p-3 border rounded">
      <h5>Outside Trapped Area</h5>
      <p>These elements are not accessible via Tab when focus trap is active.</p>
      <input type="text" class="form-control mb-2" placeholder="Outside input" />
      <CButton color="warning">Outside Button</CButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CFocusTrap } from '@coreui/vue'

const trapActive = ref(false)
</script>
```

## CoreUI Components with Built-in Focus Trapping

Most CoreUI overlay components already include Vue Focus Trap internally, so you don't need to add it manually:

- **CModal** - Includes built-in focus trapping for modal dialogs
- **COffcanvas** - Has focus trapping for slide-out panels  
- **CDropdown** - Can be enhanced with focus trapping for better accessibility

For these components, focus trapping is handled automatically with proper focus restoration, escape key support, and WCAG 2.1 compliance.

### Modal Dialog with CModal

CModal includes built-in focus trapping, so you don't need to add CFocusTrap manually:

```html
<template>
  <div>
    <CButton color="primary" @click="modalVisible = true"> Open Modal with Focus Trap </CButton>

    <CModal
      :visible="modalVisible"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      @close="modalVisible = false"
    >
      <CModalHeader>
        <CModalTitle id="modal-title">Modal with Built-in Focus Trap</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p id="modal-description">
          This modal includes built-in focus trapping. Try using Tab to navigate - focus will stay
          within this modal dialog.
        </p>
        <div class="mb-3">
          <CFormLabel for="modal-input-1">First Field</CFormLabel>
          <CFormInput id="modal-input-1" placeholder="Enter text here" />
        </div>
        <div class="mb-3">
          <CFormLabel for="modal-input-2">Second Field</CFormLabel>
          <CFormInput id="modal-input-2" placeholder="Enter more text" />
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" @click="modalVisible = false"> Close </CButton>
        <CButton color="primary"> Save Changes </CButton>
      </CModalFooter>
    </CModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormLabel,
  CFormInput,
} from '@coreui/vue'

const modalVisible = ref(false)
</script>
```

### Enhanced Dropdown Menu

You can enhance CDropdown with CFocusTrap for improved keyboard accessibility:

```html
<template>
  <div>
    <CDropdown>
      <CDropdownToggle color="primary"> Enhanced Dropdown with Focus Trap </CDropdownToggle>
      <CDropdownMenu>
        <CFocusTrap :active="true">
          <div>
            <CDropdownHeader>Search Options</CDropdownHeader>
            <div class="px-3 py-2">
              <CFormInput size="sm" placeholder="Search items..." @keydown.escape="closeDropdown" />
            </div>
            <CDropdownDivider />
            <CDropdownItem href="#">Action 1</CDropdownItem>
            <CDropdownItem href="#">Action 2</CDropdownItem>
            <CDropdownItem href="#">Action 3</CDropdownItem>
            <CDropdownDivider />
            <div class="px-3 py-2">
              <CButton size="sm" color="primary" class="me-2">Apply</CButton>
              <CButton size="sm" color="secondary" @click="closeDropdown">Cancel</CButton>
            </div>
          </div>
        </CFocusTrap>
      </CDropdownMenu>
    </CDropdown>
  </div>
</template>

<script setup>
import {
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownHeader,
  CDropdownItem,
  CDropdownDivider,
  CFormInput,
  CFocusTrap,
} from '@coreui/vue'

const closeDropdown = () => {
  // In a real implementation, you would close the dropdown here
  console.log('Dropdown should close')
}
</script>
```

### Sidebar Navigation with COffcanvas

COffcanvas includes built-in focus trapping for slide-out navigation panels:

```html
<template>
  <div>
    <CButton color="primary" @click="offcanvasVisible = true">
      Open Sidebar with Focus Trap
    </CButton>

    <COffcanvas placement="start" :visible="offcanvasVisible" @hide="offcanvasVisible = false">
      <COffcanvasHeader>
        <COffcanvasTitle>Navigation Sidebar</COffcanvasTitle>
        <CCloseButton class="text-reset" @click="offcanvasVisible = false" />
      </COffcanvasHeader>
      <COffcanvasBody>
        <p>
          This sidebar includes built-in focus trapping. Tab navigation will stay within this panel
          while it's open.
        </p>

        <div class="mb-3">
          <CFormInput placeholder="Search navigation..." />
        </div>

        <CNav variant="pills" orientation="vertical">
          <CNavItem>
            <CNavLink href="#" active>Dashboard</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Products</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem>
        </CNav>

        <div class="mt-4">
          <CButton color="primary" size="sm" class="me-2">Quick Action</CButton>
          <CButton color="secondary" variant="outline" size="sm">Help</CButton>
        </div>
      </COffcanvasBody>
    </COffcanvas>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  COffcanvasBody,
  CCloseButton,
  CFormInput,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/vue'

const offcanvasVisible = ref(false)
</script>
```

## Focus Control Options

### Focus First Element vs Container

The `focus-first-element` prop controls the initial focus behavior:

- `focus-first-element="true"`: Focuses the first tabbable element (good for menus, forms)
- `focus-first-element="false"`: Focuses the container element (good for panels, scrollable regions)

```html
<template>
  <div>
    <div class="mb-3">
      <CButton color="primary" class="me-2" @click="activateTrap(true)">
        Focus First Element
      </CButton>
      <CButton color="secondary" class="me-2" @click="activateTrap(false)">
        Focus Container
      </CButton>
      <CButton color="danger" @click="deactivateTrap"> Deactivate </CButton>
    </div>

    <div class="alert alert-info">
      <strong>Instructions:</strong> Click one of the activation buttons above, then use Tab to see
      the difference in initial focus behavior.
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Focus First Element ({{ focusFirstEnabled }})</strong>
          </div>
          <div class="card-body">
            <CFocusTrap :active="trapActive && focusFirstEnabled" :focus-first-element="true">
              <div class="border p-3" tabindex="-1">
                <p>Container with tabindex="-1"</p>
                <div class="mb-2">
                  <CFormInput placeholder="First tabbable element" />
                </div>
                <div class="mb-2">
                  <CFormTextarea rows="2" placeholder="Textarea"></CFormTextarea>
                </div>
                <CButton color="success">Submit</CButton>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Focus Container ({{ !focusFirstEnabled }})</strong>
          </div>
          <div class="card-body">
            <CFocusTrap :active="trapActive && !focusFirstEnabled" :focus-first-element="false">
              <div class="border p-3" tabindex="-1">
                <p>Container receives focus first</p>
                <div class="mb-2">
                  <CFormInput placeholder="Input field" />
                </div>
                <div class="mb-2">
                  <CFormTextarea rows="2" placeholder="Textarea"></CFormTextarea>
                </div>
                <CButton color="success">Submit</CButton>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CFormInput, CFormTextarea, CFocusTrap } from '@coreui/vue'

const trapActive = ref(false)
const focusFirstEnabled = ref(true)

const activateTrap = (focusFirst) => {
  focusFirstEnabled.value = focusFirst
  trapActive.value = true
}

const deactivateTrap = () => {
  trapActive.value = false
}
</script>
```

### Focus Restoration

The `restore-focus` prop controls whether focus returns to the previously focused element when the trap deactivates. Focus on a button, then activate the trap. When you deactivate it, notice where focus returns based on the `restore-focus` setting:

```html
<template>
  <div>
    <div class="mb-3">
      <p>
        <strong>Instructions:</strong> Focus on one of the buttons below, then activate a focus
        trap. When you deactivate the trap, notice where focus returns based on the restore-focus
        setting.
      </p>
    </div>

    <div class="row mb-4">
      <div class="col">
        <CButton id="trigger-btn-1" color="primary" class="me-2" @click="activateTrap(true)">
          Activate with Restore Focus
        </CButton>
        <CButton id="trigger-btn-2" color="secondary" class="me-2" @click="activateTrap(false)">
          Activate without Restore Focus
        </CButton>
        <CButton id="trigger-btn-3" color="info"> Another Focusable Button </CButton>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>With Restore Focus</strong>
          </div>
          <div class="card-body">
            <CFocusTrap
              :active="trapActive && restoreFocusEnabled"
              :restore-focus="true"
              @deactivate="onDeactivate"
            >
              <div class="border p-3">
                <p>Focus will return to the triggering button when deactivated.</p>
                <div class="mb-2">
                  <CFormInput placeholder="Type here..." />
                </div>
                <div class="d-flex gap-2">
                  <CButton color="success" size="sm">Save</CButton>
                  <CButton color="danger" size="sm" @click="deactivateTrap">Close</CButton>
                </div>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Without Restore Focus</strong>
          </div>
          <div class="card-body">
            <CFocusTrap
              :active="trapActive && !restoreFocusEnabled"
              :restore-focus="false"
              @deactivate="onDeactivate"
            >
              <div class="border p-3">
                <p>Focus will not automatically return when deactivated.</p>
                <div class="mb-2">
                  <CFormInput placeholder="Type here..." />
                </div>
                <div class="d-flex gap-2">
                  <CButton color="success" size="sm">Save</CButton>
                  <CButton color="danger" size="sm" @click="deactivateTrap">Close</CButton>
                </div>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>
    </div>

    <div v-if="lastEvent" class="alert alert-success mt-3">
      <strong>Last Event:</strong> {{ lastEvent }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CFormInput, CFocusTrap } from '@coreui/vue'

const trapActive = ref(false)
const restoreFocusEnabled = ref(true)
const lastEvent = ref('')

const activateTrap = (restoreFocus) => {
  restoreFocusEnabled.value = restoreFocus
  trapActive.value = true
  lastEvent.value = `Focus trap activated with restore-focus: ${restoreFocus}`
}

const deactivateTrap = () => {
  trapActive.value = false
}

const onDeactivate = () => {
  lastEvent.value = `Focus trap deactivated with restore-focus: ${restoreFocusEnabled.value}`
}
</script>
```

## Event Handling

Use the `@activate` and `@deactivate` events to trigger additional behavior such as screen reader announcements, analytics events, updating application state, or managing other UI components:

```html
<template>
  <div>
    <div class="mb-3">
      <CButton color="primary" class="me-2" @click="trapActive = !trapActive">
        {{ trapActive ? 'Deactivate' : 'Activate' }} Focus Trap
      </CButton>
      <CButton color="secondary" @click="clearLog"> Clear Log </CButton>
    </div>

    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <strong>Focus Trap with Event Handling</strong>
          </div>
          <div class="card-body">
            <CFocusTrap
              :active="trapActive"
              :restore-focus="true"
              @activate="onActivate"
              @deactivate="onDeactivate"
            >
              <div class="border p-3 bg-light">
                <h5>Interactive Content</h5>
                <p>This area demonstrates focus trap event handling.</p>

                <div class="mb-3">
                  <CFormLabel for="username">Username</CFormLabel>
                  <CFormInput
                    id="username"
                    v-model="formData.username"
                    placeholder="Enter username"
                    @focus="logEvent('Username field focused')"
                  />
                </div>

                <div class="mb-3">
                  <CFormLabel for="email">Email</CFormLabel>
                  <CFormInput
                    id="email"
                    v-model="formData.email"
                    type="email"
                    placeholder="Enter email"
                    @focus="logEvent('Email field focused')"
                  />
                </div>

                <div class="mb-3">
                  <CFormCheck
                    id="subscribe"
                    v-model="formData.subscribe"
                    label="Subscribe to newsletter"
                    @change="logEvent('Checkbox toggled: ' + formData.subscribe)"
                  />
                </div>

                <div class="d-flex gap-2">
                  <CButton color="success" @click="handleSubmit"> Submit </CButton>
                  <CButton color="secondary" @click="handleCancel"> Cancel </CButton>
                </div>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <strong>Event Log</strong>
          </div>
          <div class="card-body" style="height: 300px; overflow-y: auto">
            <div v-if="eventLog.length === 0" class="text-muted">No events logged yet.</div>
            <div
              v-for="(event, index) in eventLog"
              :key="index"
              class="small mb-1 p-2 border-bottom"
            >
              <strong>{{ event.timestamp }}:</strong> {{ event.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { CButton, CFormInput, CFormLabel, CFormCheck, CFocusTrap } from '@coreui/vue'

const trapActive = ref(false)
const eventLog = ref([])

const formData = reactive({
  username: '',
  email: '',
  subscribe: false,
})

const logEvent = (message) => {
  const timestamp = new Date().toLocaleTimeString()
  eventLog.value.unshift({ timestamp, message })

  // Limit log to 20 entries
  if (eventLog.value.length > 20) {
    eventLog.value = eventLog.value.slice(0, 20)
  }
}

const onActivate = () => {
  logEvent('🟢 Focus trap activated')
  // Announce to screen readers
  setTimeout(() => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'visually-hidden'
    announcement.textContent = 'Focus trap is now active. Use Tab to navigate within this area.'
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }, 100)
}

const onDeactivate = () => {
  logEvent('🔴 Focus trap deactivated')
  // Announce to screen readers
  setTimeout(() => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'visually-hidden'
    announcement.textContent =
      'Focus trap has been deactivated. You can now navigate the entire page.'
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }, 100)
}

const handleSubmit = () => {
  logEvent('📝 Form submitted with data: ' + JSON.stringify(formData))
  trapActive.value = false
}

const handleCancel = () => {
  logEvent('❌ Form cancelled')
  trapActive.value = false
}

const clearLog = () => {
  eventLog.value = []
  logEvent('🧹 Event log cleared')
}
</script>
```

## Conditional Focus Trapping

Focus traps can be conditionally activated based on application state:

```html
<template>
  <div>
    <div class="mb-4">
      <h5>Conditional Focus Trap Demo</h5>
      <p class="text-muted">
        This example shows how focus traps can be conditionally activated based on application
        state.
      </p>
    </div>

    <div class="row mb-4">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Application State</strong>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <CFormLabel>User Role</CFormLabel>
              <CFormSelect v-model="userRole" @change="updateTrapStates">
                <option value="guest">Guest</option>
                <option value="user">Authenticated User</option>
                <option value="admin">Administrator</option>
              </CFormSelect>
            </div>

            <div class="mb-3">
              <CFormCheck
                id="editing-mode"
                v-model="isEditingMode"
                label="Editing Mode"
                @change="updateTrapStates"
              />
            </div>

            <div class="mb-3">
              <CFormCheck
                id="mobile-view"
                v-model="isMobileView"
                label="Mobile View"
                @change="updateTrapStates"
              />
            </div>

            <div class="mb-3">
              <CFormCheck
                id="high-contrast"
                v-model="isHighContrastMode"
                label="High Contrast Mode"
                @change="updateTrapStates"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Focus Trap Status</strong>
          </div>
          <div class="card-body">
            <div class="mb-2">
              <CBadge :color="mainPanelTrapActive ? 'success' : 'secondary'">
                Main Panel: {{ mainPanelTrapActive ? 'Active' : 'Inactive' }}
              </CBadge>
            </div>
            <div class="mb-2">
              <CBadge :color="sidebarTrapActive ? 'success' : 'secondary'">
                Sidebar: {{ sidebarTrapActive ? 'Active' : 'Inactive' }}
              </CBadge>
            </div>
            <div class="mb-2">
              <CBadge :color="toolbarTrapActive ? 'success' : 'secondary'">
                Toolbar: {{ toolbarTrapActive ? 'Active' : 'Inactive' }}
              </CBadge>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Main Panel -->
      <div class="col-md-8">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>Main Content Panel</strong>
            <small class="text-muted"> Trap Active: {{ mainPanelTrapActive }} </small>
          </div>
          <div class="card-body">
            <CFocusTrap :active="mainPanelTrapActive">
              <div class="border p-3" :class="{ 'border-success': mainPanelTrapActive }">
                <h6>Content Editor</h6>
                <div class="mb-3">
                  <CFormInput placeholder="Document title..." :disabled="!isEditingMode" />
                </div>
                <div class="mb-3">
                  <CFormTextarea
                    rows="4"
                    placeholder="Document content..."
                    :disabled="!isEditingMode"
                  ></CFormTextarea>
                </div>
                <div class="d-flex gap-2">
                  <CButton color="primary" size="sm" :disabled="!isEditingMode"> Save </CButton>
                  <CButton color="secondary" size="sm" :disabled="!isEditingMode">
                    Preview
                  </CButton>
                </div>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>Sidebar Navigation</strong>
            <small class="text-muted"> Trap Active: {{ sidebarTrapActive }} </small>
          </div>
          <div class="card-body">
            <CFocusTrap :active="sidebarTrapActive">
              <div class="border p-2" :class="{ 'border-success': sidebarTrapActive }">
                <CNav variant="pills" orientation="vertical">
                  <CNavItem>
                    <CNavLink href="#" active>Dashboard</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" :disabled="userRole === 'guest'"> My Documents </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" :disabled="userRole !== 'admin'"> Admin Panel </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#">Settings</CNavLink>
                  </CNavItem>
                </CNav>
              </div>
            </CFocusTrap>
          </div>
        </div>

        <!-- Toolbar -->
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>Quick Actions</strong>
            <small class="text-muted"> Trap Active: {{ toolbarTrapActive }} </small>
          </div>
          <div class="card-body">
            <CFocusTrap :active="toolbarTrapActive">
              <div class="border p-2" :class="{ 'border-success': toolbarTrapActive }">
                <div class="d-grid gap-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    size="sm"
                    :disabled="userRole === 'guest'"
                  >
                    New Document
                  </CButton>
                  <CButton color="secondary" variant="outline" size="sm"> Help </CButton>
                  <CButton
                    color="info"
                    variant="outline"
                    size="sm"
                    :disabled="userRole === 'guest'"
                  >
                    Keyboard Shortcuts
                  </CButton>
                </div>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CButton,
  CFormInput,
  CFormTextarea,
  CFormLabel,
  CFormSelect,
  CFormCheck,
  CBadge,
  CNav,
  CNavItem,
  CNavLink,
  CFocusTrap,
} from '@coreui/vue'

const userRole = ref('guest')
const isEditingMode = ref(false)
const isMobileView = ref(false)
const isHighContrastMode = ref(false)

// Computed properties for conditional trap activation
const mainPanelTrapActive = computed(() => {
  // Activate main panel trap when in editing mode and user has permission
  return isEditingMode.value && userRole.value !== 'guest'
})

const sidebarTrapActive = computed(() => {
  // Activate sidebar trap in mobile view for better accessibility
  return isMobileView.value
})

const toolbarTrapActive = computed(() => {
  // Activate toolbar trap in high contrast mode or for admin users
  return isHighContrastMode.value || userRole.value === 'admin'
})

const updateTrapStates = () => {
  // This function is called when any state changes
  // In a real app, you might want to emit events or update global state
  console.log('Focus trap states updated:', {
    mainPanel: mainPanelTrapActive.value,
    sidebar: sidebarTrapActive.value,
    toolbar: toolbarTrapActive.value,
  })
}
</script>
```

## Usage Guidelines

### When to Use Focus Traps

- **Modal Dialogs**: Always use focus traps for modal dialogs and overlays
- **Dropdown Menus**: Implement focus traps for keyboard-navigable dropdown menus
- **Slide-out Panels**: Use focus traps for temporary navigation panels or sidebars
- **Custom Overlays**: Any overlay content that should contain keyboard focus

### Accessibility Best Practices

1. **Always include focusable elements** within the trapped container
2. **Use `restore-focus`** for temporary overlays like modals and dropdowns
3. **Include proper ARIA attributes** on the container (`role="dialog"`, `aria-modal="true"`)
4. **Provide escape mechanisms** like Escape key handling or close buttons
5. **Test with keyboard navigation** to ensure proper focus flow

### Container Requirements

The slot content must meet these requirements:

- **Focusable content**: Should contain elements that can receive focus
- **Proper structure**: Should be a single container element or have clear focus boundaries

```vue

<CFocusTrap :active="true">
  <div tabindex="-1">
    <input type="text" />
    <button>Submit</button>
  </div>
</CFocusTrap>

<CFocusTrap :active="true">
  <div>
    <input type="text" />
    <textarea></textarea>
    <button>Save</button>
  </div>
</CFocusTrap>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the Vue.js Focus Trap component.

- [&lt;CFocusTrap /&gt;](./api/#cfocustrap)
