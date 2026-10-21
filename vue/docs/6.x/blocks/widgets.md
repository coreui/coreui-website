# Vue Widget Blocks

> Ready-made dashboard statistic blocks built from a Vue card and utilities — copy the markup, keep it, change it.

## How it works

A block is markup you copy into your project, not a component you import. Every block on this page is a [card](https://coreui.io/vue/docs/components/card/) plus [spacing](https://coreui.io/vue/docs/utilities/margin/), [color](https://coreui.io/vue/docs/utilities/colors/) and [typography](https://coreui.io/vue/docs/utilities/font-size/) utilities, so it ships no CSS of its own and there is no class here that the rest of the library does not already document.

That is the whole point of keeping them as blocks: a statistic card is a layout decision. Once the markup is yours, a widget can grow a second value, lose its chart or change its heading level without waiting for a prop.

The charts are real [chart components](https://coreui.io/vue/docs/components/chart/) — the same configurations the widget page rendered.

> ##### `CCardBody` lays its children out in a column
> 
> The body is a flex column that packs its children to the start, so anything meant to sit side by side inside one needs `flex-row`, a `CRow` inside it needs `w-100`, and a full-width child needs `w-100` too. Putting the row classes on the body itself does not work: the body's own `flex-direction: column` wins.

## Stat with chart

A colored card carrying one figure, a menu and a chart running to the bottom edge. The chart is inset with `mx-4` on three of them and runs the full card width on the third.

```html
<template>
  <CRow>
    <CCol :sm="6">
      <CCard class="bg-primary border-primary fg-white mb-4">
        <CCardBody class="pb-0 d-flex flex-row justify-content-between align-items-start">
          <div>
            <div class="fs-4 fw-semibold">
              $9.000 <span class="fs-6 fw-normal">(40.9% <CIcon :icon="cilArrowTop" />)</span>
            </div>
            <div>Widget title</div>
          </div>
          <CDropdown alignment="end">
            <CDropdownToggle
              variant="ghost"
              :caret="false"
              class="p-0 fg-white"
              aria-label="Widget actions"
            >
              <CIcon :icon="cilOptions" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CCardBody>
        <CChart
          type="line"
          class="mt-4 mx-4"
          style="height: 70px"
          :data="{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                pointBackgroundColor: '#5856d6',
                data: [65, 59, 84, 84, 51, 55, 40],
              },
            ],
          }"
          :options="{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                border: {
                  display: false,
                },
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                min: 30,
                max: 89,
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              line: {
                borderWidth: 1,
                tension: 0.4,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }"
        />
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard class="bg-info border-info fg-white mb-4">
        <CCardBody class="pb-0 d-flex flex-row justify-content-between align-items-start">
          <div>
            <div class="fs-4 fw-semibold">
              $9.000 <span class="fs-6 fw-normal">(40.9% <CIcon :icon="cilArrowTop" />)</span>
            </div>
            <div>Widget title</div>
          </div>
          <CDropdown alignment="end">
            <CDropdownToggle
              variant="ghost"
              :caret="false"
              class="p-0 fg-white"
              aria-label="Widget actions"
            >
              <CIcon :icon="cilOptions" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CCardBody>
        <CChart
          type="line"
          class="mt-4 mx-4"
          style="height: 70px"
          :data="{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                pointBackgroundColor: '#39f',
                data: [1, 18, 9, 17, 34, 22, 11],
              },
            ],
          }"
          :options="{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                border: {
                  display: false,
                },
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                min: -9,
                max: 39,
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              line: {
                borderWidth: 1,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }"
        />
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard class="bg-warning border-warning fg-white mb-4">
        <CCardBody class="pb-0 d-flex flex-row justify-content-between align-items-start">
          <div>
            <div class="fs-4 fw-semibold">
              $9.000 <span class="fs-6 fw-normal">(40.9% <CIcon :icon="cilArrowTop" />)</span>
            </div>
            <div>Widget title</div>
          </div>
          <CDropdown alignment="end">
            <CDropdownToggle
              variant="ghost"
              :caret="false"
              class="p-0 fg-white"
              aria-label="Widget actions"
            >
              <CIcon :icon="cilOptions" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CCardBody>
        <CChart
          type="line"
          class="mt-4"
          style="height: 70px"
          :data="{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40],
                fill: true,
              },
            ],
          }"
          :options="{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
            elements: {
              line: {
                borderWidth: 2,
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }"
        />
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard class="bg-danger border-danger fg-white mb-4">
        <CCardBody class="pb-0 d-flex flex-row justify-content-between align-items-start">
          <div>
            <div class="fs-4 fw-semibold">
              $9.000 <span class="fs-6 fw-normal">(40.9% <CIcon :icon="cilArrowTop" />)</span>
            </div>
            <div>Widget title</div>
          </div>
          <CDropdown alignment="end">
            <CDropdownToggle
              variant="ghost"
              :caret="false"
              class="p-0 fg-white"
              aria-label="Widget actions"
            >
              <CIcon :icon="cilOptions" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CCardBody>
        <CChart
          type="bar"
          class="mt-4 mx-4"
          style="height: 70px"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
              'January',
              'February',
              'March',
              'April',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                barPercentage: 0.6,
              },
            ],
          }"
          :options="{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                border: {
                  display: false,
                },
                grid: {
                  display: false,
                  drawBorder: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
          }"
        />
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import {
  CCard,
  CCardBody,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
} from '@coreui/vue'
import { CChart } from '@coreui/vue-chartjs'
import { CIcon } from '@coreui/icons-vue'
import { cilArrowTop, cilOptions } from '@coreui/icons'
</script>
```

## Stat with progress

A figure, its label and a progress bar reading the same value.

```html
<template>
  <CRow>
    <CCol :sm="6">
      <CCard class="mb-4">
        <CCardBody>
          <div class="fs-4 fw-semibold">89.9%</div>
          <div>Widget title</div>
          <CProgress class="my-3 w-100" :height="4" theme="success" :value="75" />
          <small class="fg-2">Widget helper text</small>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard class="bg-primary border-primary fg-white mb-4">
        <CCardBody>
          <div class="fs-4 fw-semibold">89.9%</div>
          <div>Widget title</div>
          <CProgress class="my-3 w-100" :height="4" :value="75" white />
          <small class="fg-white fg-70">Widget helper text</small>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { CCard, CCardBody, CCol, CProgress, CRow } from '@coreui/vue'
</script>
```

## Stat with icon and progress

The same shape with an icon set against the top corner.

```html
<template>
  <CRow>
    <CCol :sm="6">
      <CCard class="mb-4">
        <CCardBody>
          <div class="text-end mb-5 fg-2 w-100">
            <CIcon :icon="cilChartPie" :height="36" />
          </div>
          <div class="fs-4 fw-semibold">89.9%</div>
          <div class="fg-2">Widget title</div>
          <CProgress class="mt-4 mb-0 w-100" :height="4" theme="success" :value="75" />
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard class="bg-primary border-primary fg-white mb-4">
        <CCardBody>
          <div class="text-end mb-5 fg-white fg-70 w-100">
            <CIcon :icon="cilChartPie" :height="36" />
          </div>
          <div class="fs-4 fw-semibold">89.9%</div>
          <div class="fg-white fg-70">Widget title</div>
          <CProgress class="mt-4 mb-0 w-100" :height="4" :value="75" white />
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { CCard, CCardBody, CCol, CProgress, CRow } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilChartPie } from '@coreui/icons'
</script>
```

## Stat group

Several figures in one card, divided by a border, under a header where an icon sits over the chart. The header colour comes from `--cui-card-cap-bg`, so a brand colour needs no new class.

```html
<template>
  <CRow>
    <CCol :sm="6">
      <CCard class="mb-4" style="--cui-card-cap-bg: #3b5998">
        <CCardHeader class="position-relative d-flex justify-content-center align-items-center">
          <CIcon class="my-5 fg-white" :icon="cibFacebook" :height="52" />
          <CChart
            class="position-absolute w-100 h-100"
            type="line"
            :data="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  backgroundColor: 'rgba(255,255,255,.1)',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointHoverBackgroundColor: '#fff',
                  borderWidth: 2,
                  data: [65, 59, 84, 84, 51, 55, 40],
                  fill: true,
                },
              ],
            }"
            :options="{
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }"
          />
        </CCardHeader>
        <CCardBody>
          <CRow class="text-center w-100">
            <CCol>
              <div class="fs-5 fw-semibold">89K</div>
              <div class="text-uppercase fg-2 small">Friends</div>
            </CCol>
            <CCol class="border-start">
              <div class="fs-5 fw-semibold">459</div>
              <div class="text-uppercase fg-2 small">Feeds</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard class="mb-4" style="--cui-card-cap-bg: #00aced">
        <CCardHeader class="position-relative d-flex justify-content-center align-items-center">
          <CIcon class="my-5 fg-white" :icon="cibTwitter" :height="52" />
          <CChart
            class="position-absolute w-100 h-100"
            type="line"
            :data="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  backgroundColor: 'rgba(255,255,255,.1)',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointHoverBackgroundColor: '#fff',
                  borderWidth: 2,
                  data: [1, 13, 9, 17, 34, 41, 38],
                  fill: true,
                },
              ],
            }"
            :options="{
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }"
          />
        </CCardHeader>
        <CCardBody>
          <CRow class="text-center w-100">
            <CCol>
              <div class="fs-5 fw-semibold">973K</div>
              <div class="text-uppercase fg-2 small">Followers</div>
            </CCol>
            <CCol class="border-start">
              <div class="fs-5 fw-semibold">1.792</div>
              <div class="text-uppercase fg-2 small">Tweets</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/vue'
import { CChart } from '@coreui/vue-chartjs'
import { CIcon } from '@coreui/icons-vue'
import { cibFacebook, cibTwitter } from '@coreui/icons'
</script>
```

## Compact stat

A label, a figure and a chart, centered — the block to reach for when several sit in a row.

```html
<template>
  <CRow>
    <CCol :sm="6">
      <CCard class="mb-4">
        <CCardBody class="text-center">
          <div class="fg-2 small text-uppercase fw-semibold w-100">Widget title</div>
          <div class="fs-6 fw-semibold py-4 w-100">89.9%</div>
          <CChart
            class="mx-auto"
            type="bar"
            style="height: 40px; width: 80px"
            :data="{
              labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
              datasets: [
                {
                  backgroundColor: '#321fdb',
                  borderColor: 'transparent',
                  borderWidth: 1,
                  data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
                },
              ],
            }"
            :options="{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }"
          />
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard class="mb-4">
        <CCardBody class="text-center">
          <div class="fg-2 small text-uppercase fw-semibold w-100">Widget title</div>
          <div class="fs-6 fw-semibold py-4 w-100">89.9%</div>
          <CChart
            class="mx-auto"
            type="line"
            style="height: 40px; width: 80px"
            :data="{
              labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
              datasets: [
                {
                  backgroundColor: 'transparent',
                  borderColor: '#321fdb',
                  borderWidth: 2,
                  data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
                },
              ],
            }"
            :options="{
              maintainAspectRatio: false,
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }"
          />
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { CCard, CCardBody, CCol, CRow } from '@coreui/vue'
import { CChart } from '@coreui/vue-chartjs'
</script>
```

## Stat with icon

A colored icon tile beside the figure. Drop the body's padding and the tile runs to the card's edges; add a `CCardFooter` for a link out.

```html
<template>
  <CRow>
    <CCol :sm="6">
      <CCard class="mb-4">
        <CCardBody class="d-flex flex-row align-items-center">
          <div class="me-4 fg-white bg-primary p-4">
            <CIcon :icon="cilChartPie" :height="24" />
          </div>
          <div>
            <div class="fs-6 fw-semibold fg-primary">89.9%</div>
            <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard class="mb-4">
        <CCardBody class="d-flex flex-row align-items-center">
          <div class="me-4 fg-white bg-warning p-4">
            <CIcon :icon="cilChartPie" :height="24" />
          </div>
          <div>
            <div class="fs-6 fw-semibold fg-warning">89.9%</div>
            <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  <CRow>
    <CCol :sm="6">
      <CCard class="mb-4">
        <CCardBody class="d-flex flex-row align-items-center p-0">
          <div class="me-4 fg-white bg-primary p-5">
            <CIcon :icon="cilChartPie" :height="24" />
          </div>
          <div>
            <div class="fs-6 fw-semibold fg-primary">89.9%</div>
            <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard class="mb-4">
        <CCardBody class="d-flex flex-row align-items-center p-0">
          <div class="me-4 fg-white bg-warning p-5">
            <CIcon :icon="cilChartPie" :height="24" />
          </div>
          <div>
            <div class="fs-6 fw-semibold fg-warning">89.9%</div>
            <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  <CRow>
    <CCol :sm="6">
      <CCard class="mb-4">
        <CCardBody class="d-flex flex-row align-items-center">
          <div class="me-4 fg-white bg-primary p-4">
            <CIcon :icon="cilChartPie" :height="24" />
          </div>
          <div>
            <div class="fs-6 fw-semibold fg-primary">89.9%</div>
            <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
          </div>
        </CCardBody>
        <CCardFooter>
          <CLink
            class="fw-semibold small fg-2"
            href="https://coreui.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            View more
            <CIcon :icon="cilArrowRight" class="float-end" :width="16" />
          </CLink>
        </CCardFooter>
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard class="mb-4">
        <CCardBody class="d-flex flex-row align-items-center">
          <div class="me-4 fg-white bg-warning p-4">
            <CIcon :icon="cilChartPie" :height="24" />
          </div>
          <div>
            <div class="fs-6 fw-semibold fg-warning">89.9%</div>
            <div class="fg-2 text-uppercase fw-semibold small">Widget title</div>
          </div>
        </CCardBody>
        <CCardFooter>
          <CLink
            class="fw-semibold small fg-2"
            href="https://coreui.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            View more
            <CIcon :icon="cilArrowRight" class="float-end" :width="16" />
          </CLink>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { CCard, CCardBody, CCardFooter, CCol, CLink, CRow } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilArrowRight, cilChartPie } from '@coreui/icons'
</script>
```
