/* global Chart, coreui, i18next */

/**
 * --------------------------------------------------------------------------
 * CoreUI PRO Boostrap Admin Template main.js
 * License (https://coreui.io/pro/license/)
 * --------------------------------------------------------------------------
 */

/**
 * Dashboard Charts
 *
 * This module initializes and manages all charts on the main Dashboard page (index.html).
 * It includes:
 * - Card charts (small charts in statistic cards)
 * - Main chart (large chart showing traffic/metrics over time)
 * - Custom tooltip configuration using CoreUI's ChartJS utilities
 * - Theme-aware chart updates (responds to dark/light mode changes)
 *
 * All charts use Chart.js with CoreUI's custom styling and color variables.
 */

// Configure Chart.js defaults for custom tooltips
Chart.defaults.pointHitDetectionRadius = 1
Chart.defaults.plugins.tooltip.enabled = false
Chart.defaults.plugins.tooltip.mode = 'index'
Chart.defaults.plugins.tooltip.position = 'nearest'
Chart.defaults.plugins.tooltip.external = coreui.ChartJS.customTooltips
Chart.defaults.defaultFontColor = coreui.Utils.getStyle('--cui-body-color')

document.documentElement.addEventListener('ColorSchemeChange', () => {
  updateCharts()
})

window.addEventListener('DOMContentLoaded', () => {
  updateCharts()
})

const saleChartDates = [
  new Date(2025, 11, 1),
  new Date(2026, 0, 1),
  new Date(2026, 1, 1),
  new Date(2026, 2, 1),
  new Date(2026, 3, 1)
]

const trafficChartDates = [
  new Date(2025, 4, 1),
  new Date(2025, 5, 1),
  new Date(2025, 6, 1),
  new Date(2025, 7, 1),
  new Date(2025, 8, 1),
  new Date(2025, 9, 1),
  new Date(2025, 10, 1),
  new Date(2025, 11, 1),
  new Date(2026, 0, 1),
  new Date(2026, 1, 1),
  new Date(2026, 2, 1),
  new Date(2026, 3, 1)
]

const getLocalizedMonthLabels = dates => dates.map(date => i18next.t('dateOnlyMonthName', { date }))

const getLocalizedShortMonthLabels = dates => dates.map(date => i18next.t('date', {
  date,
  formatParams: {
    date: {
      month: 'short'
    }
  }
}))

i18next.on('languageChanged', () => {
  i18next
    .loadNamespaces('translation')
    .then(() => {
      cardChartNew1.data.labels = getLocalizedMonthLabels(saleChartDates)

      cardChart1.data.labels = [
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 0, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 1, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 2, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 3, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 4, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 5, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 6, 1) })
      ]

      cardChart3.data.labels = [
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 0, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 1, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 2, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 3, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 4, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 5, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 6, 1) })
      ]

      cardChart4.data.labels = [
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 0, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 1, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 2, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 3, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 4, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 5, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 6, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 7, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 8, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 9, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 10, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2023, 11, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2024, 0, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2024, 1, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2024, 2, 1) }),
        i18next.t('dateOnlyMonthName', { date: new Date(2024, 3, 1) })
      ]

      mainBarChart.data.labels = getLocalizedShortMonthLabels(trafficChartDates)

      updateCharts()
    })
})

const updateCharts = () => {
  cardChart1.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-primary')
  mainBarChart.options.scales.x.ticks.color = coreui.Utils.getStyle('--cui-body-color')
  mainBarChart.options.scales.y.ticks.color = coreui.Utils.getStyle('--cui-body-color')
  mainBarChart.options.scales.x.grid.color = coreui.Utils.getStyle('--cui-border-color-translucent')
  mainBarChart.options.scales.x.ticks.color = coreui.Utils.getStyle('--cui-body-color')
  mainBarChart.options.scales.y.grid.color = coreui.Utils.getStyle('--cui-border-color-translucent')
  mainBarChart.options.scales.y.ticks.color = coreui.Utils.getStyle('--cui-body-color')

  cardChartNew1.update()
  cardChart1.update()
  mainBarChart.update()
}

const cardChartNew1 = new Chart(document.getElementById('card-chart-new1'), {
  type: 'line',
  data: {
    labels: getLocalizedMonthLabels(saleChartDates),
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: `rgba(${coreui.Utils.getStyle('--cui-primary-rgb')}, .1)`,
        borderColor: coreui.Utils.getStyle('--cui-primary'),
        borderWidth: 3,
        data: [78, 81, 80, 45, 34],
        fill: true
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false
      },
      y: {
        beginAtZero: true,
        display: false
      }
    },
    elements: {
      line: {
        borderWidth: 2,
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

const cardChart1 = new Chart(document.getElementById('card-chart1'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: coreui.Utils.getStyle('--cui-primary'),
        data: [65, 59, 84, 84, 51, 55, 40]
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        min: 30,
        max: 89,
        display: false,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

const cardChart3 = new Chart(document.getElementById('card-chart3'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [78, 81, 80, 45, 34, 12, 40],
        fill: true
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    elements: {
      line: {
        borderWidth: 2,
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

const cardChart4 = new Chart(document.getElementById('card-chart4'), {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
        barPercentage: 0.6
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
})

const mainBarChart = new Chart(document.getElementById('main-bar-chart'), {
  type: 'bar',
  data: {
    labels: getLocalizedShortMonthLabels(trafficChartDates),
    datasets: [
      {
        label: 'Users',
        backgroundColor: coreui.Utils.getStyle('--cui-primary'),
        borderRadius: 6,
        borderSkipped: false,
        data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98],
        barPercentage: 0.6,
        categoryPercentage: 0.5
      },
      {
        label: 'New users',
        backgroundColor: coreui.Utils.getStyle('--cui-gray-200'),
        borderRadius: 6,
        borderSkipped: false,
        data: [73, 76, 75, 40, 29, 7, 35, 80, 60, 18, 7, 93],
        barPercentage: 0.6,
        categoryPercentage: 0.5
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: 95,
            yMax: 95,
            borderColor: coreui.Utils.getStyle('--cui-danger'),
            borderWidth: 1,
            borderDash: [8, 5]
          }
        }
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          color: coreui.Utils.getStyle('--cui-border-color-translucent'),
          display: false,
          drawTicks: false
        },
        ticks: {
          color: coreui.Utils.getStyle('--cui-body-color'),
          font: {
            size: 14
          },
          padding: 16
        }
      },
      y: {
        border: {
          dash: [2, 4],
          display: false
        },
        grid: {
          color: coreui.Utils.getStyle('--cui-border-color-translucent')
        },
        ticks: {
          beginAtZero: true,
          color: coreui.Utils.getStyle('--cui-body-color'),
          font: {
            size: 14
          },
          maxTicksLimit: 5,
          padding: 16,
          stepSize: Math.ceil(100 / 4)
        }
      }
    }
  }
})
