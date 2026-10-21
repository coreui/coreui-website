# Bootstrap 6 Widgets

> Ready-made dashboard statistic blocks built from a Bootstrap card and utilities — copy the markup, keep it, change it.

## How it works

A block is markup you copy into your project, not a component you import. Every block on this page is a [card](https://coreui.io/bootstrap/docs/components/card/) plus [grid](https://coreui.io/bootstrap/docs/layout/grid/), [spacing](https://coreui.io/bootstrap/docs/utilities/margin/), [color](https://coreui.io/bootstrap/docs/utilities/colors/) and [typography](https://coreui.io/bootstrap/docs/utilities/font-size/) utilities, so it ships no CSS of its own and there is no class here that the rest of the library does not already document.

That is the whole point of keeping them as blocks: a statistic card is a layout decision. Once the markup is yours, a widget can grow a second value, lose its chart or change its heading level without waiting for a prop.

A `.card-body` lays its children out in a column and packs them to the start, so anything meant to sit side by side inside one needs `.flex-row`, and a `.row` inside one needs `.w-100`. Putting `.row` on the body itself does not work: the body's own `flex-direction: column` wins and the columns stack.

## Stat with chart

A colored card carrying one figure, a menu and a chart running to the bottom edge. The chart is a `<canvas>` the block only reserves room for — here [Chart.js](https://www.chartjs.org/) draws into it, and the fill runs the full card width when the wrapper drops `.mx-4`.

```html
<div class="row">
  <div class="col-sm-6">
    <div class="card bg-primary border-primary fg-white mb-4">
      <div class="card-body pb-0 d-flex flex-row justify-content-between align-items-start">
        <div>
          <div class="fs-4 fw-semibold">$9.000 <span class="fs-6 fw-normal">(40.9% <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M390.624 150.625 256 16 121.376 150.625l22.628 22.627 95.997-95.998v417.982h32V77.257l95.995 95.995z"/></svg>)</span></div>
          <div>Widget title</div>
        </div>
        <div class="dropdown">
          <button class="btn-ghost p-0 fg-white" type="button" data-coreui-toggle="dropdown" aria-expanded="false" aria-label="Widget actions">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M256 144a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32 32.036 32.036 0 0 1 32-32m0 320a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32m0-272a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32"/></svg>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-4 mx-4" style="height: 70px;">
        <canvas id="blockChart1"></canvas>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-info border-info fg-white mb-4">
      <div class="card-body pb-0 d-flex flex-row justify-content-between align-items-start">
        <div>
          <div class="fs-4 fw-semibold">$9.000 <span class="fs-6 fw-normal">(40.9% <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M390.624 150.625 256 16 121.376 150.625l22.628 22.627 95.997-95.998v417.982h32V77.257l95.995 95.995z"/></svg>)</span></div>
          <div>Widget title</div>
        </div>
        <div class="dropdown">
          <button class="btn-ghost p-0 fg-white" type="button" data-coreui-toggle="dropdown" aria-expanded="false" aria-label="Widget actions">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M256 144a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32 32.036 32.036 0 0 1 32-32m0 320a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32m0-272a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32"/></svg>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-4 mx-4" style="height: 70px;">
        <canvas id="blockChart2"></canvas>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-warning border-warning fg-white mb-4">
      <div class="card-body pb-0 d-flex flex-row justify-content-between align-items-start">
        <div>
          <div class="fs-4 fw-semibold">$9.000 <span class="fs-6 fw-normal">(40.9% <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M390.624 150.625 256 16 121.376 150.625l22.628 22.627 95.997-95.998v417.982h32V77.257l95.995 95.995z"/></svg>)</span></div>
          <div>Widget title</div>
        </div>
        <div class="dropdown">
          <button class="btn-ghost p-0 fg-white" type="button" data-coreui-toggle="dropdown" aria-expanded="false" aria-label="Widget actions">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M256 144a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32 32.036 32.036 0 0 1 32-32m0 320a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32m0-272a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32"/></svg>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-4" style="height: 70px;">
        <canvas id="blockChart3"></canvas>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-danger border-danger fg-white mb-4">
      <div class="card-body pb-0 d-flex flex-row justify-content-between align-items-start">
        <div>
          <div class="fs-4 fw-semibold">$9.000 <span class="fs-6 fw-normal">(40.9% <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M390.624 150.625 256 16 121.376 150.625l22.628 22.627 95.997-95.998v417.982h32V77.257l95.995 95.995z"/></svg>)</span></div>
          <div>Widget title</div>
        </div>
        <div class="dropdown">
          <button class="btn-ghost p-0 fg-white" type="button" data-coreui-toggle="dropdown" aria-expanded="false" aria-label="Widget actions">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M256 144a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32 32.036 32.036 0 0 1 32-32m0 320a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32m0-272a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32"/></svg>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-4 mx-4" style="height: 70px;">
        <canvas id="blockChart4"></canvas>
      </div>
    </div>
  </div>
</div>
```

## Stat with progress

A figure, its label and a progress bar reading the same value. Color the card with [`.text-bg-{color}`](https://coreui.io/bootstrap/docs/helpers/color-background/), frame it with the matching [`.border-{color}`](https://coreui.io/bootstrap/docs/utilities/border/), and the helper text follows it.

```html
<div class="row">
  <div class="col-sm-6">
    <div class="card mb-4">
      <div class="card-body">
        <div class="fs-4 fw-semibold">89.9%</div>
        <div>Widget title</div>
        <div class="progress my-3 w-100" style="height: 4px;">
          <div class="progress-bar theme-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Widget title"></div>
        </div>
        <small class="fg-2">Widget helper text</small>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-primary border-primary fg-white mb-4">
      <div class="card-body">
        <div class="fs-4 fw-semibold">89.9%</div>
        <div>Widget title</div>
        <div class="progress my-3 w-100" style="height: 4px;">
          <div class="progress-bar progress-white" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Widget title"></div>
        </div>
        <small class="fg-white fg-70">Widget helper text</small>
      </div>
    </div>
  </div>
</div>
```

## Stat with icon and progress

The same shape with an icon set against the top corner.

```html
<div class="row">
  <div class="col-sm-6">
    <div class="card mb-4">
      <div class="card-body">
        <div class="text-end mb-5 fg-2 w-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M105.361 398.32A195.891 195.891 0 0 1 343.42 91.125l23.256-23.255A227.875 227.875 0 0 0 82.733 420.948 228.03 228.03 0 0 0 366.24 452.1l-23.312-23.312c-75.028 43.98-173.271 33.829-237.567-30.468"/><path fill="currentColor" d="M468.916 353.07a243.54 243.54 0 0 0 0-186.459 248 248 0 0 0-2.747-6.354 242.3 242.3 0 0 0-50.059-72.686L404.8 76.257l-11.317 11.314-172.27 172.269 172.63 172.631 10.957 10.953 11.31-11.314a242.2 242.2 0 0 0 49.452-71.358 249 249 0 0 0 3.354-7.682m-64.557-231.12a211.57 211.57 0 0 1 0 275.781L266.468 259.84Z"/></svg>
        </div>
        <div class="fs-4 fw-semibold">89.9%</div>
        <div class="fg-2">Widget title</div>
        <div class="progress mt-4 mb-0 w-100" style="height: 4px;">
          <div class="progress-bar theme-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Widget title"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-primary border-primary fg-white mb-4">
      <div class="card-body">
        <div class="text-end mb-5 fg-white fg-70 w-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M105.361 398.32A195.891 195.891 0 0 1 343.42 91.125l23.256-23.255A227.875 227.875 0 0 0 82.733 420.948 228.03 228.03 0 0 0 366.24 452.1l-23.312-23.312c-75.028 43.98-173.271 33.829-237.567-30.468"/><path fill="currentColor" d="M468.916 353.07a243.54 243.54 0 0 0 0-186.459 248 248 0 0 0-2.747-6.354 242.3 242.3 0 0 0-50.059-72.686L404.8 76.257l-11.317 11.314-172.27 172.269 172.63 172.631 10.957 10.953 11.31-11.314a242.2 242.2 0 0 0 49.452-71.358 249 249 0 0 0 3.354-7.682m-64.557-231.12a211.57 211.57 0 0 1 0 275.781L266.468 259.84Z"/></svg>
        </div>
        <div class="fs-4 fw-semibold">89.9%</div>
        <div class="fg-white fg-70">Widget title</div>
        <div class="progress mt-4 mb-0 w-100" style="height: 4px;">
          <div class="progress-bar progress-white" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Widget title"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Stat group

Several figures in one card, divided by a border, under a header where an icon sits over the chart. The header colour comes from `--cui-card-cap-bg`, so a brand colour needs no new class.

```html
<div class="row">
  <div class="col-sm-6">
    <div class="card mb-4" style="--cui-card-cap-bg: #3b5998;">
      <div class="card-header position-relative d-flex justify-content-center align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="my-5 fg-white" width="52" height="52" viewBox="0 0 32 32" role="img" aria-hidden="true"><path fill="currentColor" d="M32 16c0-8.839-7.167-16-16-16C7.161 0 0 7.161 0 16c0 7.984 5.849 14.604 13.5 15.803V20.626H9.437v-4.625H13.5v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584.312 3.584.312V10.5h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-.713 4.625H18.5v11.177C26.145 30.603 32 23.983 32 15.999z"/></svg>
        <canvas class="position-absolute w-100 h-100" id="blockChart5"></canvas>
      </div>
      <div class="card-body">
        <div class="row text-center w-100">
          <div class="col">
            <div class="fs-5 fw-semibold">89K</div>
            <div class="text-uppercase fg-2 small">Friends</div>
          </div>
          <div class="col border-start">
            <div class="fs-5 fw-semibold">459</div>
            <div class="text-uppercase fg-2 small">Feeds</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card mb-4" style="--cui-card-cap-bg: #00aced;">
      <div class="card-header position-relative d-flex justify-content-center align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="my-5 fg-white" width="52" height="52" viewBox="0 0 32 32" role="img" aria-hidden="true"><path fill="currentColor" d="M31.937 6.093a13.4 13.4 0 0 1-3.765 1.032 6.6 6.6 0 0 0 2.885-3.631 13.7 13.7 0 0 1-4.172 1.579 6.56 6.56 0 0 0-11.178 5.973c-5.453-.255-10.287-2.875-13.52-6.833a6.46 6.46 0 0 0-.891 3.303 6.56 6.56 0 0 0 2.916 5.457 6.5 6.5 0 0 1-2.968-.817v.079a6.57 6.57 0 0 0 5.26 6.437 6.8 6.8 0 0 1-1.724.229c-.421 0-.823-.041-1.224-.115a6.59 6.59 0 0 0 6.14 4.557 13.17 13.17 0 0 1-8.135 2.801 13 13 0 0 1-1.563-.088 18.66 18.66 0 0 0 10.079 2.948c12.067 0 18.661-9.995 18.661-18.651 0-.276 0-.557-.021-.839a13.1 13.1 0 0 0 3.281-3.396z"/></svg>
        <canvas class="position-absolute w-100 h-100" id="blockChart6"></canvas>
      </div>
      <div class="card-body">
        <div class="row text-center w-100">
          <div class="col">
            <div class="fs-5 fw-semibold">973K</div>
            <div class="text-uppercase fg-2 small">Followers</div>
          </div>
          <div class="col border-start">
            <div class="fs-5 fw-semibold">1.792</div>
            <div class="text-uppercase fg-2 small">Tweets</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Compact stat

A label, a figure and a chart, centered — the block to reach for when several sit in a row.

```html
<div class="row">
  <div class="col-sm-6">
    <div class="card mb-4">
      <div class="card-body text-center">
        <div class="fg-2 small text-uppercase fw-semibold w-100">Widget title</div>
        <div class="fs-6 fw-semibold py-4 w-100">89.9%</div>
        <div class="mx-auto" style="height: 40px; width: 80px;">
          <canvas id="blockChart7"></canvas>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card mb-4">
      <div class="card-body text-center">
        <div class="fg-2 small text-uppercase fw-semibold w-100">Widget title</div>
        <div class="fs-6 fw-semibold py-4 w-100">89.9%</div>
        <div class="mx-auto" style="height: 40px; width: 80px;">
          <canvas id="blockChart8"></canvas>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Stat with icon

A colored icon tile beside the figure. Drop the body's padding and the tile runs to the card's edges; add a `.card-footer` for a link out.

```html
<div class="row">
  <div class="col-sm-6">
    <div class="card mb-4">
      <div class="card-body d-flex flex-row align-items-center">
        <div class="me-4 fg-white bg-primary p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M105.361 398.32A195.891 195.891 0 0 1 343.42 91.125l23.256-23.255A227.875 227.875 0 0 0 82.733 420.948 228.03 228.03 0 0 0 366.24 452.1l-23.312-23.312c-75.028 43.98-173.271 33.829-237.567-30.468"/><path fill="currentColor" d="M468.916 353.07a243.54 243.54 0 0 0 0-186.459 248 248 0 0 0-2.747-6.354 242.3 242.3 0 0 0-50.059-72.686L404.8 76.257l-11.317 11.314-172.27 172.269 172.63 172.631 10.957 10.953 11.31-11.314a242.2 242.2 0 0 0 49.452-71.358 249 249 0 0 0 3.354-7.682m-64.557-231.12a211.57 211.57 0 0 1 0 275.781L266.468 259.84Z"/></svg>
        </div>
        <div>
          <div class="fs-6 fw-semibold fg-primary">89.9%</div>
          <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card mb-4">
      <div class="card-body d-flex flex-row align-items-center">
        <div class="me-4 fg-white bg-warning p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M105.361 398.32A195.891 195.891 0 0 1 343.42 91.125l23.256-23.255A227.875 227.875 0 0 0 82.733 420.948 228.03 228.03 0 0 0 366.24 452.1l-23.312-23.312c-75.028 43.98-173.271 33.829-237.567-30.468"/><path fill="currentColor" d="M468.916 353.07a243.54 243.54 0 0 0 0-186.459 248 248 0 0 0-2.747-6.354 242.3 242.3 0 0 0-50.059-72.686L404.8 76.257l-11.317 11.314-172.27 172.269 172.63 172.631 10.957 10.953 11.31-11.314a242.2 242.2 0 0 0 49.452-71.358 249 249 0 0 0 3.354-7.682m-64.557-231.12a211.57 211.57 0 0 1 0 275.781L266.468 259.84Z"/></svg>
        </div>
        <div>
          <div class="fs-6 fw-semibold fg-warning">89.9%</div>
          <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6">
    <div class="card mb-4">
      <div class="card-body d-flex flex-row align-items-center p-0">
        <div class="me-4 fg-white bg-primary p-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M105.361 398.32A195.891 195.891 0 0 1 343.42 91.125l23.256-23.255A227.875 227.875 0 0 0 82.733 420.948 228.03 228.03 0 0 0 366.24 452.1l-23.312-23.312c-75.028 43.98-173.271 33.829-237.567-30.468"/><path fill="currentColor" d="M468.916 353.07a243.54 243.54 0 0 0 0-186.459 248 248 0 0 0-2.747-6.354 242.3 242.3 0 0 0-50.059-72.686L404.8 76.257l-11.317 11.314-172.27 172.269 172.63 172.631 10.957 10.953 11.31-11.314a242.2 242.2 0 0 0 49.452-71.358 249 249 0 0 0 3.354-7.682m-64.557-231.12a211.57 211.57 0 0 1 0 275.781L266.468 259.84Z"/></svg>
        </div>
        <div>
          <div class="fs-6 fw-semibold fg-primary">89.9%</div>
          <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card mb-4">
      <div class="card-body d-flex flex-row align-items-center p-0">
        <div class="me-4 fg-white bg-warning p-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M105.361 398.32A195.891 195.891 0 0 1 343.42 91.125l23.256-23.255A227.875 227.875 0 0 0 82.733 420.948 228.03 228.03 0 0 0 366.24 452.1l-23.312-23.312c-75.028 43.98-173.271 33.829-237.567-30.468"/><path fill="currentColor" d="M468.916 353.07a243.54 243.54 0 0 0 0-186.459 248 248 0 0 0-2.747-6.354 242.3 242.3 0 0 0-50.059-72.686L404.8 76.257l-11.317 11.314-172.27 172.269 172.63 172.631 10.957 10.953 11.31-11.314a242.2 242.2 0 0 0 49.452-71.358 249 249 0 0 0 3.354-7.682m-64.557-231.12a211.57 211.57 0 0 1 0 275.781L266.468 259.84Z"/></svg>
        </div>
        <div>
          <div class="fs-6 fw-semibold fg-warning">89.9%</div>
          <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6">
    <div class="card mb-4">
      <div class="card-body d-flex flex-row align-items-center">
        <div class="me-4 fg-white bg-primary p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M105.361 398.32A195.891 195.891 0 0 1 343.42 91.125l23.256-23.255A227.875 227.875 0 0 0 82.733 420.948 228.03 228.03 0 0 0 366.24 452.1l-23.312-23.312c-75.028 43.98-173.271 33.829-237.567-30.468"/><path fill="currentColor" d="M468.916 353.07a243.54 243.54 0 0 0 0-186.459 248 248 0 0 0-2.747-6.354 242.3 242.3 0 0 0-50.059-72.686L404.8 76.257l-11.317 11.314-172.27 172.269 172.63 172.631 10.957 10.953 11.31-11.314a242.2 242.2 0 0 0 49.452-71.358 249 249 0 0 0 3.354-7.682m-64.557-231.12a211.57 211.57 0 0 1 0 275.781L266.468 259.84Z"/></svg>
        </div>
        <div>
          <div class="fs-6 fw-semibold fg-primary">89.9%</div>
          <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
        </div>
      </div>
      <div class="card-footer">
        <a class="fw-semibold small fg-2" href="https://coreui.io/" rel="noopener noreferrer" target="_blank">
          View more
          <svg xmlns="http://www.w3.org/2000/svg" class="float-end" width="16" height="16" viewBox="0 0 512 512" role="img" aria-hidden="true"><polygon fill="currentColor" points="160 128.4 192.3 96 352 256 192.3 416 160 383.6 287.3 256 160 128.4"/></svg>
        </a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card mb-4">
      <div class="card-body d-flex flex-row align-items-center">
        <div class="me-4 fg-white bg-warning p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="currentColor" d="M105.361 398.32A195.891 195.891 0 0 1 343.42 91.125l23.256-23.255A227.875 227.875 0 0 0 82.733 420.948 228.03 228.03 0 0 0 366.24 452.1l-23.312-23.312c-75.028 43.98-173.271 33.829-237.567-30.468"/><path fill="currentColor" d="M468.916 353.07a243.54 243.54 0 0 0 0-186.459 248 248 0 0 0-2.747-6.354 242.3 242.3 0 0 0-50.059-72.686L404.8 76.257l-11.317 11.314-172.27 172.269 172.63 172.631 10.957 10.953 11.31-11.314a242.2 242.2 0 0 0 49.452-71.358 249 249 0 0 0 3.354-7.682m-64.557-231.12a211.57 211.57 0 0 1 0 275.781L266.468 259.84Z"/></svg>
        </div>
        <div>
          <div class="fs-6 fw-semibold fg-warning">89.9%</div>
          <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
        </div>
      </div>
      <div class="card-footer">
        <a class="fw-semibold small fg-2" href="https://coreui.io/" rel="noopener noreferrer" target="_blank">
          View more
          <svg xmlns="http://www.w3.org/2000/svg" class="float-end" width="16" height="16" viewBox="0 0 512 512" role="img" aria-hidden="true"><polygon fill="currentColor" points="160 128.4 192.3 96 352 256 192.3 416 160 383.6 287.3 256 160 128.4"/></svg>
        </a>
      </div>
    </div>
  </div>
</div>
```
