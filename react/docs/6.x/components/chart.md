# React Chart.js Component

> React wrapper for Chart.js 4.x, the most popular charting library.

## Installation

If you want to use our Chart.js React wrapper you have to install an additional package.

### Npm

```bash
npm install @coreui/react-chartjs
```

### Yarn

```bash
yarn add @coreui/react-chartjs
```

## Chart Types

### Line Chart

A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets.
[Line Chart properties](https://www.chartjs.org/docs/latest/charts/line.html#dataset-properties)

```html
import React, { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'
import { Chart } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'

export const ChartLineExample = () => {
  const chartRef = useRef<Chart<'line'> | null>(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }

        if (options.scales?.x) {
          if (options.scales.x.grid) {
            options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
          }
          if (options.scales.x.ticks) {
            options.scales.x.ticks.color = getStyle('--cui-body-color')
          }
        }

        if (options.scales?.y) {
          if (options.scales.y.grid) {
            options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
          }
          if (options.scales.y.ticks) {
            options.scales.y.ticks.color = getStyle('--cui-body-color')
          }
        }

        chartInstance.update()
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)

    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  const data: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
        fill: true,
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
        fill: true,
      },
    ],
  }

  const options: ChartOptions<'line'> = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        type: 'category',
      },
      y: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        beginAtZero: true,
      },
    },
  }

  return <CChart type="line" data={data} options={options} ref={chartRef} />
}
```

### Bar Chart

A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side. [Bar Chart properties](https://www.chartjs.org/docs/latest/charts/bar.html#dataset-properties)

```html
import React, { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'
import { Chart } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'

export const ChartBarExample = () => {
  const chartRef = useRef<Chart<'bar'> | null>(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }

        if (options.scales?.x) {
          if (options.scales.x.grid) {
            options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
          }
          if (options.scales.x.ticks) {
            options.scales.x.ticks.color = getStyle('--cui-body-color')
          }
        }

        if (options.scales?.y) {
          if (options.scales.y.grid) {
            options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
          }
          if (options.scales.y.ticks) {
            options.scales.y.ticks.color = getStyle('--cui-body-color')
          }
        }

        chartInstance.update()
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)

    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  const data: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'], // 9 labels
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        borderColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  }

  const options: ChartOptions<'bar'> = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        type: 'category',
      },
      y: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        beginAtZero: true,
      },
    },
  }

  return <CChart type="bar" data={data} options={options} ref={chartRef} />
}
```

### Radar Chart

A radar chart is a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets. [Radar Chart properties](https://www.chartjs.org/docs/latest/charts/radar.html#dataset-properties)

```html
import React, { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'
import { Chart } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'

export const ChartRadarExample = () => {
  const chartRef = useRef<Chart<'radar'> | null>(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }

        if (options.scales?.r) {
          if (options.scales.r.grid) {
            options.scales.r.grid.color = getStyle('--cui-border-color-translucent')
          }
          if (options.scales.r.ticks) {
            options.scales.r.ticks.color = getStyle('--cui-body-color')
          }
        }

        chartInstance.update()
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)

    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  const data: ChartData<'radar'> = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(151, 187, 205, 1)',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
      },
    ],
  }

  const options: ChartOptions<'radar'> = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
    scales: {
      r: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        angleLines: {
          color: getStyle('--cui-border-color-translucent'),
        },
        pointLabels: {
          color: getStyle('--cui-body-color'),
        },
        beginAtZero: true,
      },
    },
  }

  return <CChart type="radar" data={data} options={options} ref={chartRef} />
}
```

### Doughnut and Pie Charts

Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data. [Doughnut and Pie Charts properties](https://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties)

```html
import React, { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'
import { Chart } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'

export const ChartDoughnutAndPieExample = () => {
  const chartRef = useRef<Chart<'doughnut'> | null>(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }

        chartInstance.update()
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)

    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  const data: ChartData<'doughnut'> = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10],
      },
    ],
  }

  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
  }

  return <CChart type="doughnut" data={data} options={options} ref={chartRef} />
}
```

### Polar Area Chart

Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value. [Polar Area Chart properties](https://www.chartjs.org/docs/latest/charts/polar.html#dataset-properties)

```html
import React, { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'
import { Chart } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'

export const ChartPolarAreaExample = () => {
  const chartRef = useRef<Chart<'polarArea'> | null>(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }

        if (options.scales?.r?.grid) {
          options.scales.r.grid.color = getStyle('--cui-border-color-translucent')
        }

        chartInstance.update()
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)

    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  const data: ChartData<'polarArea'> = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      },
    ],
  }

  const options: ChartOptions<'polarArea'> = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
    scales: {
      r: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        angleLines: {
          color: getStyle('--cui-border-color-translucent'),
        },
        pointLabels: {
          color: getStyle('--cui-body-color'),
        },
        beginAtZero: true,
      },
    },
  }

  return <CChart type="polarArea" data={data} options={options} ref={chartRef} />
}
```

### Bubble Chart

A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles. [Bubble Chart properties](https://www.chartjs.org/docs/latest/charts/bubble.html#dataset-properties)

```html
import React, { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'
import { Chart } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'

export const ChartBubbleExample = () => {
  const chartRef = useRef<Chart<'bubble'> | null>(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }

        if (options.scales?.x) {
          if (options.scales.x.grid) {
            options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
          }
          if (options.scales.x.ticks) {
            options.scales.x.ticks.color = getStyle('--cui-body-color')
          }
        }

        if (options.scales?.y) {
          if (options.scales.y.grid) {
            options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
          }
          if (options.scales.y.ticks) {
            options.scales.y.ticks.color = getStyle('--cui-body-color')
          }
        }

        chartInstance.update()
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)

    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  const data: ChartData<'bubble'> = {
    datasets: [
      {
        label: 'First Dataset',
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
        ],
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  }

  const options: ChartOptions<'bubble'> = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        type: 'linear',
        position: 'bottom',
      },
      y: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        beginAtZero: true,
      },
    },
  }

  return <CChart type="bubble" data={data} options={options} ref={chartRef} />
}
```

### Scatter Chart

A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles. [Scatter Chart properties](https://www.chartjs.org/docs/latest/charts/scatter.html#dataset-properties)

```html
import React, { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'
import { Chart } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'

export const ChartScatterExample = () => {
  const chartRef = useRef<Chart<'scatter'> | null>(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance
        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }

        if (options.scales) {
          const xAxis = options.scales.x
          const yAxis = options.scales.y

          if (xAxis?.grid && xAxis?.ticks) {
            xAxis.grid.color = getStyle('--cui-border-color-translucent')
            xAxis.ticks.color = getStyle('--cui-body-color')
          }

          if (yAxis?.grid && yAxis?.ticks) {
            yAxis.grid.color = getStyle('--cui-border-color-translucent')
            yAxis.ticks.color = getStyle('--cui-body-color')
          }
        }

        chartInstance.update()
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)

    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  const data: ChartData<'line'> = {
    datasets: [
      {
        label: 'Scatter Dataset',
        data: [
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
          { x: 0.5, y: 5.5 },
        ],
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  }

  const options: ChartOptions<'scatter'> = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
      },
      y: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
  }

  return <CChart type="scatter" data={data} options={options} ref={chartRef} />
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CChart /&gt;](./api/#cchart)
