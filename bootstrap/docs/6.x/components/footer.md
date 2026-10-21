# Bootstrap 6 Footer

> Bootstrap Footer is an additional navigation used for displaying general information that a user might want to access from any page within your site. It is a place to display boilerplate text about the site, company info, copyrights, links to a contact form, sitemap, FAQ and other such resources.

## Basic example

The footer component is dropped in version v6 as it can be replicated with utilities. Please check examples of how to build a page footer out of layout, spacing, background, and border utilities.

```html
<footer class="d-flex flex-wrap align-items-center justify-content-between bg-3 border-top px-4 py-3">
  <div>
    <a href="https://coreui.io">CoreUI</a>
    <span>&copy; 2026 creativeLabs.</span>
  </div>
  <div>
    <span>Powered by</span>
    <a href="https://coreui.io">CoreUI</a>
  </div>
</footer>
```

## Pinning the footer

`.sticky-bottom` keeps the footer at the bottom of the viewport while the rest of the page scrolls, and `.fixed-bottom` takes it out of the flow entirely. Both replace what `.footer-sticky` and `.footer-fixed` used to do.

## Custom Bootstrap footers

Swap the background and border utilities to change the look, or drop them entirely for a footer that sits flush with the page.

```html
<footer class="d-flex flex-wrap align-items-center justify-content-between gap-4 bg-black fg-white px-4 py-5" data-coreui-theme="dark">
  <div>
    <a href="https://coreui.io">CoreUI</a>
    <span>&copy; 2026 creativeLabs.</span>
  </div>
  <ul class="list-unstyled d-flex gap-4 mb-0">
    <li><a href="#">Docs</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Support</a></li>
  </ul>
</footer>
```
