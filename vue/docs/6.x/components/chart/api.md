# Vue Chart.js Component API

> Explore the API reference for the Vue Chart.js component and discover how to effectively utilize its props for customization.

## CChart

```jsx
import { CChart } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customTooltips` | `boolean` | `true` | Enables custom html based tooltips instead of standard tooltips. |
| `data` | `ChartData \| ((canvas: HTMLCanvasElement) => ChartData)` | - | The data object that is passed into the Chart.js chart (more info). |
| `height` | `number` | `150` | Height attribute applied to the rendered canvas. |
| `id` | `string` | - | ID attribute applied to the rendered canvas. |
| `options` | `ChartOptions` | - | The options object that is passed into the Chart.js chartRef.value. {@link https://www.chartjs.org/docs/latest/general/options.html More Info} |
| `plugins` | `Plugin[]` | - | The plugins array that is passed into the Chart.js chart (more info) {@link https://www.chartjs.org/docs/latest/developers/plugins.html More Info} |
| `redraw` | `boolean` | - | If true, will tear down and redraw chart on all updates. |
| `type` | `ChartType` | `'bar'` | Chart.js chart type. |
| `width` | `number` | `300` | Width attribute applied to the rendered canvas. |
| `wrapper` | `boolean` | `true` | Put the chart into the wrapper div element. |

### Events

| Name | Description |
| --- | --- |
| `getDatasetAtEvent` | Proxy for Chart.js getDatasetAtEvent. Calls with dataset and triggering event. |
| `getElementAtEvent` | Proxy for Chart.js getElementAtEvent. Calls with single element array and triggering event. |
| `getElementsAtEvent` | Proxy for Chart.js getElementsAtEvent. Calls with element array and triggering event. |
