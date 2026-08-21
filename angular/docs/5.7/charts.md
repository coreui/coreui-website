# Angular Charts Component

> CoreUI Angular wrapper for Chart.js 4.x, the most popular charting library.

## Installation
If you want to use our Chart.js Angular wrapper you have to install an additional package.

- Chart.js v4.x library `chart.js`
- CoreUI Chart.js tooltip plugin and styles `@coreui/chartjs`
- CoreUI Angular Chart.js component `@coreui/angular-chartjs`

### Angular CLI

CoreUI v5.x Chartjs for Angular supports `ng add` to install all required dependencies for your Angular project.

```bash
ng add @coreui/angular-chartjs@5.7
```

### NPM

Your other option is to use `npm install` directly.

```bash
npm install chart.js@4
npm install @coreui/chartjs@4
npm install @coreui/angular-chartjs@5.7
```

### Scss

Import custom CoreUI tooltip styles for Chart.js:

```scss
@use '@coreui/chartjs/scss/coreui-chartjs' as *;
```

## Chart types

### Line Chart

A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets. [Line Chart properties](https://www.chartjs.org/docs/latest/charts/line.html#dataset-properties)

### Bar Chart

A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side. [Bar Chart properties](https://www.chartjs.org/docs/latest/charts/bar.html#dataset-properties)

### Radar Chart

A radar chart is a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets. [Radar Chart properties](https://www.chartjs.org/docs/latest/charts/radar.html#dataset-properties)

### Doughnut and Pie Charts

Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data. [Doughnut and Pie Charts properties](https://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties)

### Polar Area Chart

Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value. [Polar Area Chart properties](https://www.chartjs.org/docs/latest/charts/polar.html#dataset-properties)

### Bubble Chart

A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles. [Bubble Chart properties](https://www.chartjs.org/docs/latest/charts/bubble.html#dataset-properties)

### Scatter Chart

Scatter charts are based on basic line charts with the x axis changed to a linear axis. To use a scatter chart, data must be passed as objects containing X and Y properties. The example below creates a scatter chart with 4 points. [Scatter Chart properties](https://www.chartjs.org/docs/latest/charts/scatter.html#dataset-properties)

## API

```typescript
import { ChartjsModule } from '@coreui/angular-chartjs';

@NgModule({
  imports: [
    ChartjsModule,
})
export class AppModule(){}
```

### c-chart
_component_

`exportAs: cChart`

##### Inputs:

|name|description|type|default|
|---|---|---|---|
|`customTooltips`|Enables custom html based tooltips|`boolean`|_true_
|`data`|The data passed to Chart.js chart|[`ChartData`](https://www.chartjs.org/docs/latest/api/interfaces/ChartData.html)|**required**
|`options`|The options object that is passed into the Chart.js chart|[`ChartOptions`](https://www.chartjs.org/docs/latest/general/options.html)|_undefined_
|`plugins`|The plugins array that is passed into the Chart.js chart|[`PluginOptionsByType`](https://www.chartjs.org/docs/latest/api/interfaces/PluginOptionsByType.html)|_undefined_
|`redraw`|If true, will tear down and redraw chart on all updates|`boolean`|_false_
|`type`|Chart.js chart type.|[`keyof ChartTypeRegistry`](https://www.chartjs.org/docs/latest/api/interfaces/ChartTypeRegistry.html)|_bar_
|`wrapper`|Put the chart into the wrapper with `display: block`.|`boolean`|_true_
|`height`|Height attribute applied to the rendered canvas (px)|`number`|_undefined_
|`width`|Width attribute applied to the rendered canvas (px)|`number`|_undefined_
|`id`|Html id attribute applied to the rendered canvas|`string`|_undefined_

##### Outputs:

|name|description|
|---|---|
|`chartRef`|Returns Chart reference when instantiated. Allows direct access to Chart API.
|`getDatasetAtEvent`|Proxy for Chart.js getDatasetAtEvent. Calls with dataset and triggering event.
|`getElementAtEvent`|Proxy for Chart.js getElementAtEvent. Calls with single element array and triggering event.
|`getElementsAtEvent`|Proxy for Chart.js getElementsAtEvent. Calls with element array and triggering event.

## See also

- Chart.js docs [https://www.chartjs.org/docs/](https://www.chartjs.org/docs/)
