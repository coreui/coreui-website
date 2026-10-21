# Bootstrap 6 Jumbotron

> Bootstrap jumbotron component indicates a big grey box for showcasing hero unit style content.

## Basic example

The jumbotron component is dropped in version v4 as it can be replicated with utilities. Please check examples of how to create a lightweight, flexible element that can optionally reach the entire viewport to showcase essential marketing information on your site.

```html
<div class="p-6 mb-5 bg-3 rounded-3">
  <h1 class="fs-6xl fw-light lh-1">Hello, world!</h1>
  <p class="fs-lg fw-light">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-5">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn-solid theme-primary btn-lg" href="#" role="button">Learn more</a>
</div>
```

## Full-width Bootstrap jumbotron

```html
<div class="p-6 text-center bg-3">
  <div class="container py-6">
    <h1 class="text-body-emphasis">Full-width jumbotron</h1>
    <p class="col-lg-8 mx-auto lead">
      This takes the basic jumbotron above and makes its background edge-to-edge with a <code>.container</code> inside to align content. Similar to above, it's been recreated with built-in grid and utility classes.
    </p>
  </div>
</div>
```

## Custom Bootstrap jumbotrons

```html
<div class="row align-items-md-stretch">
  <div class="col-md-6">
    <div class="h-100 p-6 bg-black fg-white rounded-3" data-coreui-theme="dark">
      <h2>Change the background</h2>
      <p>Swap the background-color utility and add a <code>.text-*</code> color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
      <button class="btn-outline theme-inverse" type="button">Example button</button>
    </div>
  </div>
  <div class="col-md-6">
    <div class="h-100 p-6 bg-3 border rounded-3">
      <h2>Add borders</h2>
      <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
      <button class="btn-outline theme-secondary" type="button">Example button</button>
    </div>
  </div>
</div>
```
