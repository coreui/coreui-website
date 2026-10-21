# Bootstrap 6 Sidebar

> Bootstrap Sidebar is a powerful and customizable responsive navigation component for any type of vertical navigation. Bootstrap Sidebar come with built-in support for branding, navigation, and more.

## How it works

Here's what you need to know before getting started with the sidebar:

- Sidebar requires a wrapping `.sidebar`.
- Sidebar is hidden by default on mobile devices. Force it to be shown by adding `.show` to the `.sidebar`.
- Sidebar is shown by default on desktop devices. Force it to be hidden by adding `.hide` to the `.sidebar`.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to `.sidebar-nav` to explicitly identify it as a landmark region for users of assistive technologies.

Read on for an example and list of supported sub-components.

## Supported content

Sidebar come with built-in support for a handful of sub-components. Choose from the following as needed:

- `.sidebar-header` for optional header.
- `.sidebar-brand` for your company, product, or project name.
- `.sidebar-nav` for a full-height and lightweight navigation (including support for menus).
- `.sidebar-footer` for optional footer.
- `.sidebar-toggler` for use with our minimizer plugin.

## Examples

Below is a more complete sidebar example shown by default on desktop devices. It combines several optional features in a single demo, including narrow visibility helpers, tree navigation, nested groups, a custom group indicator, badges, and a footer menu.

```html
<div class="sidebar border-end h-100">
  <div class="sidebar-header position-relative">
    <div class="sidebar-brand">
      <svg role="img" aria-label="CoreUI Logo Full" class="d-sidebar-narrow-none" width="88" height="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 312 115">
        <g style="fill: currentColor">
          <path d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"></path>
          <path d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"></path>
          <g transform="translate(118 33)">
            <path d="M50.745.428c-8.28.01-14.99 6.72-15 15v17.277c0 8.285 6.715 15 15 15 8.284 0 15-6.715 15-15V15.428c-.01-8.28-6.72-14.99-15-15Zm7 32.277a7 7 0 0 1-14 0V15.428a7 7 0 0 1 14 0v17.277ZM14.079 8.488a7.01 7.01 0 0 1 7.868 6.075.99.99 0 0 0 .984.865h6.03a1.01 1.01 0 0 0 1-1.097C29.354 6.206 22.38.046 14.243.447 6.161 1-.086 7.762 0 15.864V32.27c-.087 8.101 6.161 14.864 14.244 15.416 8.137.401 15.11-5.759 15.716-13.883a1.01 1.01 0 0 0-.999-1.098h-6.03a.99.99 0 0 0-.985.865 7.01 7.01 0 0 1-7.868 6.076A7.164 7.164 0 0 1 8 32.461V15.672a7.164 7.164 0 0 1 6.079-7.184ZM96.922 27.994a12.158 12.158 0 0 0 7.184-11.077v-3.7c0-6.71-5.44-12.15-12.149-12.15H75a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-17h6.621l7.916 17.413a1 1 0 0 0 .91.587h6.591a1 1 0 0 0 .91-1.414l-8.026-17.659Zm-.816-11.077a4.154 4.154 0 0 1-4.148 4.15h-9.852v-12h9.852a4.154 4.154 0 0 1 4.148 4.15v3.7ZM139 1.067h-26a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-19v-12h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-13v-10h19a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM177 1.067h-6a1 1 0 0 0-1 1v22.647a7.007 7.007 0 1 1-14 0V2.067a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v22.647a15.003 15.003 0 1 0 30 0V2.067a1 1 0 0 0-1-1Z"></path>
            <rect width="8" height="38" x="186" y="1.067" rx="1"></rect>
          </g>
        </g>
      </svg>
      <svg role="img" aria-label="CoreUI Logo Signet" class="d-sidebar-narrow" width="88" height="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 102 115">
        <g style="fill: currentColor">
          <path d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"></path>
          <path d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"></path>
        </g>
      </svg>
    </div>
    <button class="btn-ghost btn-sm d-sidebar-narrow-none d-flex" type="button" data-coreui-toggle="unfoldable">
      <i class="icon icon-lg cil-sidebar-open d-sidebar-narrow-unfoldable"></i>
      <i class="icon icon-lg cil-sidebar-close d-sidebar-narrow-unfoldable-none"></i>
    </button>
  </div>
  <ul class="sidebar-nav sidebar-nav-tree" data-coreui-navigation>
    <li class="nav-title">Nav Title</li>
    <li class="nav-item">
      <a class="nav-link active" href="#">
        <i class="nav-icon cil-speedometer"></i> Nav item
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">
        <i class="nav-icon cil-speedometer"></i> Nav item
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="nav-icon cil-layers"></i> With badge
        <span class="badge theme-primary ms-auto">NEW</span>
      </a>
    </li>
    <li class="nav-item nav-group show">
      <a class="nav-link nav-group-toggle" href="#">
        <i class="nav-icon cil-puzzle"></i> Items group
        <span class="nav-group-toggle-indicator">
          <i class="icon icon-sm cil-minus show"></i>
          <i class="icon icon-sm cil-plus hide"></i>
        </span>
      </a>
      <ul class="nav-group-items compact">
        <li class="nav-item">
          <a class="nav-link" href="#">
            Item
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Item
          </a>
        </li>
        <li class="nav-item nav-group show">
          <a class="nav-link nav-group-toggle" href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span>
            Items group 2
            <span class="nav-group-toggle-indicator">
              <i class="icon icon-sm cil-minus show"></i>
              <i class="icon icon-sm cil-plus hide"></i>
            </span>
          </a>
          <ul class="nav-group-items">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Item
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Item
              </a>
            </li>
            <li class="nav-item nav-group">
              <a class="nav-link nav-group-toggle" href="#">
                <span class="nav-icon"><span class="nav-icon-bullet"></span></span>
                Items group 3
                <span class="nav-group-toggle-indicator">
                  <i class="icon icon-sm cil-minus show"></i>
                  <i class="icon icon-sm cil-plus hide"></i>
                </span>
              </a>
              <ul class="nav-group-items">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Item
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Item
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://coreui.io">
        <i class="nav-icon cil-cloud-download"></i> Download CoreUI</a>
    </li>
  </ul>
  <div class="sidebar-footer">
    <a class="btn-ghost w-100 d-flex gap-3 p-1 align-items-center" href="#" role="button" data-coreui-toggle="menu" data-coreui-placement="end-end" aria-expanded="false">
      <div class="avatar avatar-md">
        <img class="avatar-img rounded" src="/assets/img/avatars/7.jpg" alt="user@email.com">
      </div>
      <div class="small text-start d-sidebar-narrow-none">
        <div class="fw-semibold">Lena Scaffold</div>
        <div>lena@acme.com</div>
      </div>
      <i class="nav-icon cil-options ms-auto d-sidebar-narrow-none"></i>
    </a>
    <div class="menu">
      <div class="menu-text d-flex gap-3">
        <div class="avatar avatar-md">
          <img class="avatar-img rounded" src="/assets/img/avatars/7.jpg" alt="user@email.com">
        </div>
        <div class="small text-start">
          <div class="fw-semibold">Lena Scaffold</div>
          <div>lena@acme.com</div>
        </div>
      </div>
      <hr class="menu-divider">
      <a class="menu-item" href="#"><i class="menu-item-icon cil-user"></i>Account</a>
      <a class="menu-item" href="#"><i class="menu-item-icon cil-credit-card"></i>Billing</a>
      <a class="menu-item" href="#"><i class="menu-item-icon cil-settings"></i>Settings</a>
      <hr class="menu-divider">
      <a class="menu-item" href="#"><i class="menu-item-icon cil-account-logout"></i>Logout</a>
    </div>
  </div>
</div>
```

### Narrow sidebar

Add the `.sidebar-narrow` class to make the sidebar narrow.

Use `.d-sidebar-narrow` to show content only in the narrow state and `.d-sidebar-narrow-none` to hide content in the narrow state. They supersede the brand-specific helpers `.sidebar-brand-full`, `.sidebar-brand-narrow` and `.d-narrow-none`, which are deprecated but still work — prefer the `.d-sidebar-narrow*` names in new markup.

```html
<div class="sidebar sidebar-narrow border-end">
  <div class="sidebar-header">
    <div class="sidebar-brand">
      <svg role="img" aria-label="CoreUI Logo Signet" width="88" height="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 102 115">
        <g style="fill: currentColor">
          <path d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"></path>
          <path d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"></path>
        </g>
      </svg>
    </div>
  </div>
  <ul class="sidebar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#" data-coreui-toggle="tooltip" data-coreui-placement="right" title="Nav item">
        <i class="nav-icon cil-speedometer"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" data-coreui-toggle="tooltip" data-coreui-placement="right" title="Nav item">
        <i class="nav-icon cil-speedometer"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://coreui.io" data-coreui-toggle="tooltip" data-coreui-placement="right" title="Download">
        <i class="nav-icon cil-cloud-download"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://coreui.io/pricing/"  data-coreui-toggle="tooltip" data-coreui-placement="right" title="Get CoreUI PRO">
        <i class="nav-icon cil-cart"></i>
      </a>
    </li>
  </ul>
</div>
```

### Unfoldable sidebar

Add the `.sidebar-narrow-unfoldable` class to make the sidebar narrow with unfoldable on hover.

Use `.d-sidebar-narrow-unfoldable` and `.d-sidebar-narrow-unfoldable-none` to control content visibility for unfoldable sidebars.

```html
<div class="sidebar sidebar-narrow-unfoldable border-end">
  <div class="sidebar-header">
    <div class="sidebar-brand">
      <svg role="img" aria-label="CoreUI Logo Full" class="d-sidebar-narrow-none" width="88" height="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 312 115">
        <g style="fill: currentColor">
          <path d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"></path>
          <path d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"></path>
          <g transform="translate(118 33)">
            <path d="M50.745.428c-8.28.01-14.99 6.72-15 15v17.277c0 8.285 6.715 15 15 15 8.284 0 15-6.715 15-15V15.428c-.01-8.28-6.72-14.99-15-15Zm7 32.277a7 7 0 0 1-14 0V15.428a7 7 0 0 1 14 0v17.277ZM14.079 8.488a7.01 7.01 0 0 1 7.868 6.075.99.99 0 0 0 .984.865h6.03a1.01 1.01 0 0 0 1-1.097C29.354 6.206 22.38.046 14.243.447 6.161 1-.086 7.762 0 15.864V32.27c-.087 8.101 6.161 14.864 14.244 15.416 8.137.401 15.11-5.759 15.716-13.883a1.01 1.01 0 0 0-.999-1.098h-6.03a.99.99 0 0 0-.985.865 7.01 7.01 0 0 1-7.868 6.076A7.164 7.164 0 0 1 8 32.461V15.672a7.164 7.164 0 0 1 6.079-7.184ZM96.922 27.994a12.158 12.158 0 0 0 7.184-11.077v-3.7c0-6.71-5.44-12.15-12.149-12.15H75a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-17h6.621l7.916 17.413a1 1 0 0 0 .91.587h6.591a1 1 0 0 0 .91-1.414l-8.026-17.659Zm-.816-11.077a4.154 4.154 0 0 1-4.148 4.15h-9.852v-12h9.852a4.154 4.154 0 0 1 4.148 4.15v3.7ZM139 1.067h-26a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-19v-12h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-13v-10h19a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM177 1.067h-6a1 1 0 0 0-1 1v22.647a7.007 7.007 0 1 1-14 0V2.067a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v22.647a15.003 15.003 0 1 0 30 0V2.067a1 1 0 0 0-1-1Z"></path>
            <rect width="8" height="38" x="186" y="1.067" rx="1"></rect>
          </g>
        </g>
      </svg>
      <svg role="img" aria-label="CoreUI Logo Signet" class="d-sidebar-narrow" width="88" height="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 102 115">
        <g style="fill: currentColor">
          <path d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"></path>
          <path d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"></path>
        </g>
      </svg>
    </div>
  </div>
  <ul class="sidebar-nav">
    <li class="nav-title">Nav Title</li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="nav-icon cil-speedometer"></i> Nav item
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="nav-icon cil-speedometer"></i> With badge
        <span class="badge theme-primary ms-auto">NEW</span>
      </a>
    </li>
    <li class="nav-item nav-group show">
      <a class="nav-link nav-group-toggle" href="#">
        <i class="nav-icon cil-puzzle"></i> Items group
      </a>
      <ul class="nav-group-items">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Items group item
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Items group item
          </a>
        </li>
      </ul>
    </li>
    <li class="nav-item mt-auto">
      <a class="nav-link" href="https://coreui.io">
        <i class="nav-icon cil-cloud-download"></i> Download CoreUI</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://coreui.io/pricing/">
        <i class="nav-icon cil-layers"></i> Try CoreUI
        <strong>PRO</strong>
      </a>
    </li>
  </ul>
</div>
```

### Narrow visibility helpers

Use the sidebar visibility helpers to swap content between regular, narrow, and narrow-unfoldable variants:

- `.d-sidebar-narrow` shows content only in the narrow state
- `.d-sidebar-narrow-none` hides content in the narrow state
- `.d-sidebar-narrow-unfoldable` shows content only when the sidebar uses the `sidebar-narrow-unfoldable` variant
- `.d-sidebar-narrow-unfoldable-none` hides content when the sidebar uses the `sidebar-narrow-unfoldable` variant

### Sizes

The default width is `--cui-sidebar-width`. Add `.sidebar-sm`, `.sidebar-lg` or `.sidebar-xl` for the other widths from the `$sidebar-widths` map; each class also sets the space the sidebar reserves for the content next to it, so the layout follows the width.

```html
<div class="sidebar sidebar-lg border-end">
  <ul class="sidebar-nav" data-coreui-navigation>
    <li class="nav-item">
      <a class="nav-link active" href="#">
        <i class="nav-icon cil-speedometer"></i> Dashboard
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="nav-icon cil-puzzle"></i> Components
      </a>
    </li>
  </ul>
</div>
```

## Navigation

Use `.sidebar-nav` as the main navigation container inside a sidebar. It supports plain links, section titles, nested groups, tree navigation, and custom group indicators.

Add `data-coreui-navigation` when you want CoreUI to handle expandable groups automatically. It marks the link matching the current address as active, opens every group that holds it, and closes the other groups as one is opened.

### Navigation options

The plugin takes its options from data attributes on the same element, converting the name from "_camelCase_" to "_kebab-case_": `data-coreui-active-links-exact="false"`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeLinksExact` | boolean | `true` | Mark a link active only when its `href` is the whole current address. The address is read without its query string and hash, so `/settings?tab=2` still matches `href="/settings"`; the `href` itself is compared as written, so one carrying a query string of its own never matches. Set it to `false` to mark a link active on its sub-routes too, which is a prefix match: `href="/settings"` then stays active on `/settings/profile`. |
| `groupsAutoCollapse` | boolean | `true` | Close the other groups when one opens. Only the literal `true` does so: any other value, including a string, leaves the open ones open. |

```html
<ul class="sidebar-nav" data-coreui-navigation data-coreui-active-links-exact="false">
```

### Basic navigation

Use the following building blocks inside `.sidebar-nav`:

- `.nav-title` for section headings
- `.nav-item` for each navigation entry
- `.nav-link` for clickable items
- `.nav-icon` for optional leading icons
- `.badge` or utility classes such as `.ms-auto` for trailing metadata

### Navigation groups

Use `.nav-group` for expandable navigation sections, `.nav-group-toggle` for the clickable toggle, and `.nav-group-items` for nested items. Add `.show` to `.nav-group` when the group should be expanded by default.

Add `.compact` to `.sidebar-nav` to reduce the vertical padding of links across the entire navigation, or to `.nav-group-items` to apply the same compact spacing only to a nested group. This is useful for denser navigation trees or documentation sidebars.

### Compact navigation

Use `.compact` on `.sidebar-nav` to make the entire navigation denser, or on `.nav-group-items` to compact only a nested section.

```html
<div class="sidebar border-end">
  <ul class="sidebar-nav compact">
    <li class="nav-title">Compact nav</li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="nav-icon cil-speedometer"></i> Nav item
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="nav-icon cil-layers"></i> Nav item
      </a>
    </li>
    <li class="nav-item nav-group show">
      <a class="nav-link nav-group-toggle" href="#">
        <i class="nav-icon cil-puzzle"></i> Items group
      </a>
      <ul class="nav-group-items">
        <li class="nav-item">
          <a class="nav-link" href="#">Items group item</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Items group item</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

### Tree navigation

Add the `.sidebar-nav-tree` class to `.sidebar-nav` to render nested groups as a tree. Nested `.nav-group-items` get connector lines automatically, making deeper navigation levels easier to scan.

```html
<div class="sidebar border-end">
  <ul class="sidebar-nav sidebar-nav-tree" data-coreui-navigation>
    <li class="nav-item nav-group show">
      <a class="nav-link nav-group-toggle" href="#">
        <i class="nav-icon cil-folder"></i> Parent item
      </a>
      <ul class="nav-group-items">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Child item
          </a>
        </li>
        <li class="nav-item nav-group show">
          <a class="nav-link nav-group-toggle" href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nested group
          </a>
          <ul class="nav-group-items">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nested child
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nested child
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

### Group indicator

By default, `.nav-group-toggle` renders its own indicator with a pseudo-element. No additional markup is required.

```html
<div class="sidebar border-end">
  <ul class="sidebar-nav" data-coreui-navigation>
    <li class="nav-item nav-group show">
      <a class="nav-link nav-group-toggle" href="#">
        <i class="nav-icon cil-puzzle"></i> Items group
      </a>
      <ul class="nav-group-items">
        <li class="nav-item">
          <a class="nav-link" href="#">Items group item</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Items group item</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

### Custom group indicator

To replace the default indicator, add a `.nav-group-toggle-indicator` element inside the toggle. The default pseudo-element is removed automatically.

Use `.show` and `.hide` inside `.nav-group-toggle-indicator` to control which icon is visible when the group is expanded or collapsed.

```html
<div class="sidebar border-end">
  <ul class="sidebar-nav" data-coreui-navigation>
    <li class="nav-item nav-group show">
      <a class="nav-link nav-group-toggle" href="#">
        <i class="nav-icon cil-puzzle"></i> Items group
        <span class="nav-group-toggle-indicator">
          <i class="icon icon-sm cil-minus show"></i>
          <i class="icon icon-sm cil-plus hide"></i>
        </span>
      </a>
      <ul class="nav-group-items">
        <li class="nav-item">
          <a class="nav-link" href="#">Items group item</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Items group item</a>
        </li>
      </ul>
    </li>
    <li class="nav-item nav-group show">
      <a class="nav-link nav-group-toggle" href="#">
        <i class="nav-icon cil-puzzle"></i> Items group
        <span class="nav-group-toggle-indicator">
          <i class="icon icon-sm cil-chevron-circle-up-alt show"></i>
          <i class="icon icon-sm cil-chevron-circle-down-alt hide"></i>
        </span>
      </a>
      <ul class="nav-group-items">
        <li class="nav-item">
          <a class="nav-link" href="#">Items group item</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Items group item</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

## Color schemes

A sidebar follows the page's color scheme. `.sidebar-dark` and `.sidebar-light` pin it to one scheme whatever the page uses — the same switch as `data-coreui-theme="dark"` or `"light"` on the element — so a dark navigation column can sit on a light page.

```html
<div class="sidebar sidebar-dark border-end">
  <div class="sidebar-header">
    <div class="sidebar-brand">
      <svg role="img" aria-label="CoreUI Logo Full" width="88" height="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 312 115">
        <g style="fill: currentColor">
          <path d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"></path>
          <path d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"></path>
          <g transform="translate(118 33)">
            <path d="M50.745.428c-8.28.01-14.99 6.72-15 15v17.277c0 8.285 6.715 15 15 15 8.284 0 15-6.715 15-15V15.428c-.01-8.28-6.72-14.99-15-15Zm7 32.277a7 7 0 0 1-14 0V15.428a7 7 0 0 1 14 0v17.277ZM14.079 8.488a7.01 7.01 0 0 1 7.868 6.075.99.99 0 0 0 .984.865h6.03a1.01 1.01 0 0 0 1-1.097C29.354 6.206 22.38.046 14.243.447 6.161 1-.086 7.762 0 15.864V32.27c-.087 8.101 6.161 14.864 14.244 15.416 8.137.401 15.11-5.759 15.716-13.883a1.01 1.01 0 0 0-.999-1.098h-6.03a.99.99 0 0 0-.985.865 7.01 7.01 0 0 1-7.868 6.076A7.164 7.164 0 0 1 8 32.461V15.672a7.164 7.164 0 0 1 6.079-7.184ZM96.922 27.994a12.158 12.158 0 0 0 7.184-11.077v-3.7c0-6.71-5.44-12.15-12.149-12.15H75a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-17h6.621l7.916 17.413a1 1 0 0 0 .91.587h6.591a1 1 0 0 0 .91-1.414l-8.026-17.659Zm-.816-11.077a4.154 4.154 0 0 1-4.148 4.15h-9.852v-12h9.852a4.154 4.154 0 0 1 4.148 4.15v3.7ZM139 1.067h-26a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-19v-12h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-13v-10h19a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM177 1.067h-6a1 1 0 0 0-1 1v22.647a7.007 7.007 0 1 1-14 0V2.067a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v22.647a15.003 15.003 0 1 0 30 0V2.067a1 1 0 0 0-1-1Z"></path>
            <rect width="8" height="38" x="186" y="1.067" rx="1"></rect>
          </g>
        </g>
      </svg>
    </div>
  </div>
  <ul class="sidebar-nav">
    <li class="nav-title">Nav Title</li>
    <li class="nav-item">
      <a class="nav-link active" href="#">
        <i class="nav-icon cil-speedometer"></i> Nav item
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="nav-icon cil-speedometer"></i> With badge
        <span class="badge theme-primary ms-auto">NEW</span>
      </a>
    </li>
    <li class="nav-item nav-group show">
      <a class="nav-link nav-group-toggle" href="#">
        <i class="nav-icon cil-puzzle"></i> Items group
      </a>
      <ul class="nav-group-items">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Items group item
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Items group item
          </a>
        </li>
      </ul>
    </li>
    <li class="nav-item mt-6">
      <a class="nav-link" href="https://coreui.io">
        <i class="nav-icon cil-cloud-download"></i> Download CoreUI</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://coreui.io/pricing/">
        <i class="nav-icon cil-layers"></i> Try CoreUI
        <strong>PRO</strong>
      </a>
    </li>
  </ul>
  <div class="sidebar-footer border-top d-flex">
    <button class="sidebar-toggler" type="button"></button>
  </div>
</div>
```

## Theme variants

Add a [`.theme-{color}` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) to the sidebar and it paints its surface, text, icons and the hover and active links from that colour's slots — the background from `--cui-theme-bg`, the text from `--cui-theme-contrast`, the hovered and active links from `--cui-theme-hover` and `--cui-theme-active`. Combine it with a scheme class when the colour needs a fixed scheme.

## Placement

By default placement for sidebar components is on the left of the viewport, but you can add one of the modifier classes below.

- `.sidebar-start` places sidebar on the left of the viewport (shown above)
- `.sidebar-end` places sidebar on the right of the viewport

## JavaScript behavior

### Methods

You can create a sidebar instance with the sidebar constructor, for example:

```js
const sidebar = new coreui.Sidebar('#mySidebar')
```

| Method | Description |
| --- | --- |
| `getInstance()` | Static method that returns the sidebar instance associated with a DOM element. |
| `getOrCreateInstance()` | Static method that returns the sidebar instance associated with a DOM element, or creates a new one. |
| `hide()` | Hides the sidebar. |
| `narrow()` | Switches the sidebar to the narrow variant on desktop. |
| `reset()` | Removes `sidebar-narrow` and `sidebar-narrow-unfoldable` from the sidebar on desktop. |
| `show()` | Shows the sidebar. |
| `toggle()` | Toggles the sidebar between visible and hidden states. |
| `toggleNarrow()` | Toggles the narrow variant on desktop. |
| `toggleUnfoldable()` | Toggles the narrow-unfoldable variant on desktop. |
| `unfoldable()` | Switches the sidebar to the narrow-unfoldable variant on desktop. |

```js
const sidebar = coreui.Sidebar.getOrCreateInstance('#mySidebar')
sidebar.toggle()
```

### Events

CoreUI for Bootstrap's sidebar plugin exposes a few events for hooking into sidebar behavior.

| Event | Description |
| --- | --- |
| `hidden.coreui.sidebar` | Fired when the sidebar has finished being hidden from the user and CSS transitions have completed. |
| `hide.coreui.sidebar` | Fired immediately when the `hide()` instance method is called. |
| `show.coreui.sidebar` | Fired immediately when the `show()` instance method is called. |
| `shown.coreui.sidebar` | Fired when the sidebar has been made visible to the user and CSS transitions have completed. |

```js
const mySidebar = document.getElementById('mySidebar')
mySidebar.addEventListener('hidden.coreui.sidebar', event => {
  // do something...
})
```

## Customizing

### CSS variables

Sidebars use local CSS variables on `.sidebar`, `.sidebar-backdrop`, `.sidebar-narrow`, `.sidebar-narrow-unfoldable`, and `.sidebar-nav` for enhanced real-time customization.

```scss
$sidebar-tokens: () !default;
$sidebar-tokens: defaults(
  (
    --cui-sidebar-zindex: var(--cui-z-sidebar),
    --cui-sidebar-width: #{$sidebar-width},
    --cui-sidebar-bg: var(--cui-bg-body),
    --cui-sidebar-padding-x: #{$sidebar-padding-x},
    --cui-sidebar-padding-y: #{$sidebar-padding-y},
    --cui-sidebar-color: var(--cui-fg-body),
    --cui-sidebar-brand-color: var(--cui-fg-body),
    --cui-sidebar-transition: #{margin-left .15s, margin-right .15s, box-shadow .075s, transform .15s, width .15s, z-index 0s ease .15s},
    --cui-sidebar-toggler-height: .5rem,
  ),
  $sidebar-tokens
);
```

```scss
$sidebar-overlaid-tokens: () !default;
$sidebar-overlaid-tokens: defaults(
  (
    --cui-sidebar-overlaid-box-shadow: var(--cui-box-shadow),
  ),
  $sidebar-overlaid-tokens
);
```

```scss
$sidebar-narrow-tokens: () !default;
$sidebar-narrow-tokens: defaults(
  (
    --cui-sidebar-narrow-width: #{$sidebar-narrow-width},
    --cui-sidebar-padding-x: .5rem,
  ),
  $sidebar-narrow-tokens
);
```

```scss
$sidebar-narrow-unfoldable-tokens: () !default;
$sidebar-narrow-unfoldable-tokens: defaults(
  (
    --cui-sidebar-narrow-unfoldable-box-shadow: var(--cui-box-shadow),
  ),
  $sidebar-narrow-unfoldable-tokens
);
```

```scss
$sidebar-nav-tokens: () !default;
$sidebar-nav-tokens: defaults(
  (
    --cui-sidebar-nav-padding-x: calc(#{$sidebar-padding-x} * .5),
    --cui-sidebar-nav-padding-y: calc(#{$sidebar-padding-y} * .5),
    --cui-sidebar-nav-gap: 1px,
    --cui-sidebar-nav-title-padding-x: 1rem,
    --cui-sidebar-nav-title-padding-y: .75rem,
    --cui-sidebar-nav-title-margin-top: 1rem,
    --cui-sidebar-nav-title-font-size: 80%,
    --cui-sidebar-nav-title-font-weight: var(--cui-font-weight-bold),
    --cui-sidebar-nav-title-color: var(--cui-fg-3),
    --cui-sidebar-nav-title-transition: #{height .15s, margin .15s},
    --cui-sidebar-nav-link-padding-x: 1rem,
    --cui-sidebar-nav-link-padding-y: .75rem,
    --cui-sidebar-nav-link-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-bg: transparent,
    --cui-sidebar-nav-link-border-color: transparent,
    --cui-sidebar-nav-link-border-radius: var(--cui-radius-4),
    --cui-sidebar-nav-link-border-width: 0,
    --cui-sidebar-nav-link-transition: #{background .15s ease, color .15s ease, padding .15s ease},
    --cui-sidebar-nav-link-active-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-active-bg: color-mix(in oklch, var(--cui-fg-body) 10%, transparent),
    --cui-sidebar-nav-link-disabled-color: var(--cui-fg-3),
    --cui-sidebar-nav-link-hover-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-hover-bg: color-mix(in oklch, var(--cui-fg-body) 10%, transparent),
    --cui-sidebar-nav-link-icon-margin: .75rem,
    --cui-sidebar-nav-link-icon-color: var(--cui-fg-3),
    --cui-sidebar-nav-link-icon-width: 1.25rem,
    --cui-sidebar-nav-link-icon-height: 1.25rem,
    --cui-sidebar-nav-link-icon-font-size: 1.25rem,
    --cui-sidebar-nav-link-active-icon-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-disabled-icon-color: var(--cui-fg-3),
    --cui-sidebar-nav-link-hover-icon-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-icon-bullet-size: .3125rem,
    --cui-sidebar-nav-link-icon-bullet-bg: transparent,
    --cui-sidebar-nav-link-icon-bullet-border-width: var(--cui-border-width),
    --cui-sidebar-nav-link-icon-bullet-border-radius: var(--cui-radius-pill),
    --cui-sidebar-nav-link-icon-bullet-border-color: var(--cui-fg-3),
    --cui-sidebar-nav-link-active-icon-bullet-bg: transparent,
    --cui-sidebar-nav-link-active-icon-bullet-border-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-disabled-icon-bullet-bg: transparent,
    --cui-sidebar-nav-link-disabled-icon-bullet-border-color: var(--cui-fg-3),
    --cui-sidebar-nav-link-hover-icon-bullet-bg: transparent,
    --cui-sidebar-nav-link-hover-icon-bullet-border-color: var(--cui-fg-body),
    --cui-sidebar-nav-group-bg: transparent,
    --cui-sidebar-nav-group-border-width: 0,
    --cui-sidebar-nav-group-border-radius: var(--cui-radius-4),
    --cui-sidebar-nav-group-border-color: transparent,
    --cui-sidebar-nav-group-transition: background .15s ease-in-out,
    --cui-sidebar-nav-group-items-padding-y: 0,
    --cui-sidebar-nav-group-items-padding-x: 0,
    --cui-sidebar-nav-group-items-transition-property: #{height, display},
    --cui-sidebar-nav-group-items-transition-duration: .15s,
    --cui-sidebar-nav-group-items-transition-timing: ease,
    --cui-sidebar-nav-group-indicator-size: 12px,
    --cui-sidebar-nav-group-indicator-color: var(--cui-fg-3),
    --cui-sidebar-nav-group-indicator-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/></svg>"))},
    --cui-sidebar-nav-group-indicator-hover-color: var(--cui-fg-body),
    --cui-sidebar-nav-group-indicator-hover-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/></svg>"))},
    --cui-sidebar-nav-group-indicator-transition: transform .15s,
    --cui-sidebar-nav-group-toggle-show-color: var(--cui-fg-body),
  ),
  $sidebar-nav-tokens
);
```

```scss
$sidebar-nav-tree-tokens: () !default;
$sidebar-nav-tree-tokens: defaults(
  (
    --cui-sidebar-nav-tree-group-border-color: var(--cui-border-color),
    --cui-sidebar-nav-link-icon-bullet-bg: var(--cui-border-color),
    --cui-sidebar-nav-link-hover-icon-bullet-bg: var(--cui-border-color),
    --cui-sidebar-nav-link-active-icon-bullet-bg: var(--cui-border-color),
  ),
  $sidebar-nav-tree-tokens
);
```

```scss
$sidebar-toggler-tokens: () !default;
$sidebar-toggler-tokens: defaults(
  (
    --cui-sidebar-toggler-width: .5rem,
    --cui-sidebar-toggler-padding-x: .25rem,
    --cui-sidebar-toggler-padding-y: .25rem,
    --cui-sidebar-toggler-bg: transparent,
    --cui-sidebar-toggler-color: var(--cui-fg-3),
    --cui-sidebar-toggler-icon: #{escape-svg(url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cg xmlns='http://www.w3.org/2000/svg' transform='matrix(-1 0 0 -1 512 512)'%3E%3Cpath fill='%23000' d='M472,16H40A24.028,24.028,0,0,0,16,40V200H48V48H464V464H48V304H16V472a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,472,16Z'/%3E%3Cpolygon fill='%23000' points='209.377 363.306 232.004 385.933 366.627 251.31 232.004 116.687 209.377 139.313 305.374 235.311 16 235.311 16 267.311 305.372 267.311 209.377 363.306'/%3E%3C/g%3E%3C/svg%3E"))},
    --cui-sidebar-toggler-hover-color: var(--cui-fg-2),
    --cui-sidebar-toggler-focus-color: var(--cui-fg-2),
    --cui-sidebar-toggler-border-radius: var(--cui-radius-4),
    --cui-sidebar-toggler-transition: transform .15s,
  ),
  $sidebar-toggler-tokens
);
```

```scss
$sidebar-backdrop-tokens: () !default;
$sidebar-backdrop-tokens: defaults(
  (
    --cui-sidebar-backdrop-zindex: var(--cui-z-sidebar-backdrop),
    --cui-sidebar-backdrop-bg: color-mix(in oklch, var(--cui-backdrop-color) var(--cui-backdrop-opacity), transparent),
    --cui-sidebar-backdrop-blur: var(--cui-backdrop-blur),
  ),
  $sidebar-backdrop-tokens
);
```

### Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$sidebar-width:                            16rem !default;
$sidebar-padding-y:                        var(--cui-spacer) !default;
$sidebar-padding-x:                        var(--cui-spacer) !default;
```

```scss
$sidebar-narrow-width:                     4rem !default;
```

### Sass maps

Each entry is one `.sidebar-{width}` class and the width it sets — on the sidebar itself and on the space it reserves for the content next to it. Add a key to define a width, or set one to `null` to drop it:

```scss
$sidebar-widths: (
  sm: 12rem,
  lg: 20rem,
  xl: 24rem
) !default;
```
