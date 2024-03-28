/* global Chart, coreui, i18next */

/**
 * --------------------------------------------------------------------------
 * CoreUI PRO Boostrap Admin Template main.js
 * License (https://coreui.io/pro/license/)
 * --------------------------------------------------------------------------
 */

// Disable the on-canvas tooltip

Chart.defaults.pointHitDetectionRadius = 1;
Chart.defaults.plugins.tooltip.enabled = false;
Chart.defaults.plugins.tooltip.mode = 'index';
Chart.defaults.plugins.tooltip.position = 'nearest';
Chart.defaults.plugins.tooltip.external = coreui.ChartJS.customTooltips;
Chart.defaults.defaultFontColor = coreui.Utils.getStyle('--cui-body-color');
document.documentElement.addEventListener('ColorSchemeChange', () => {
  updateCharts();
});
window.addEventListener('DOMContentLoaded', () => {
  updateCharts();
});
i18next.on('languageChanged', () => {
  i18next.loadNamespaces('translation').then(() => {
    cardChart1.data.labels = [i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 0, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 1, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 2, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 3, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 4, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 5, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 6, 1)
    })];
    cardChart3.data.labels = [i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 0, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 1, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 2, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 3, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 4, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 5, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 6, 1)
    })];
    cardChart4.data.labels = [i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 0, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 1, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 2, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 3, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 4, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 5, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 6, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 7, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 8, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 9, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 10, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2023, 11, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2024, 0, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2024, 1, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2024, 2, 1)
    }), i18next.t('dateOnlyMonthName', {
      date: new Date(2024, 3, 1)
    })];
    const formatParams = {
      date: {
        month: 'short'
      }
    };
    mainBarChart.data.labels = [i18next.t('date', {
      date: new Date(Date.UTC(2022, 0, 1)),
      formatParams
    }), i18next.t('date', {
      date: new Date(Date.UTC(2022, 1, 1)),
      formatParams
    }), i18next.t('date', {
      date: new Date(Date.UTC(2022, 2, 1)),
      formatParams
    }), i18next.t('date', {
      date: new Date(Date.UTC(2022, 3, 1)),
      formatParams
    }), i18next.t('date', {
      date: new Date(Date.UTC(2022, 4, 1)),
      formatParams
    }), i18next.t('date', {
      date: new Date(Date.UTC(2022, 5, 1)),
      formatParams
    }), i18next.t('date', {
      date: new Date(Date.UTC(2022, 6, 1)),
      formatParams
    }), i18next.t('date', {
      date: new Date(Date.UTC(2022, 7, 1)),
      formatParams
    }), i18next.t('date', {
      date: new Date(Date.UTC(2022, 8, 1)),
      formatParams
    }), i18next.t('date', {
      date: new Date(Date.UTC(2022, 9, 1)),
      formatParams
    }), i18next.t('date', {
      date: new Date(Date.UTC(2022, 10, 1)),
      formatParams
    }), i18next.t('date', {
      date: new Date(Date.UTC(2022, 11, 1)),
      formatParams
    })];
    updateCharts();
  });
});
const updateCharts = () => {
  cardChart1.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-primary');
  mainBarChart.options.scales.x.ticks.color = coreui.Utils.getStyle('--cui-body-color');
  mainBarChart.options.scales.y.ticks.color = coreui.Utils.getStyle('--cui-body-color');
  mainBarChart.options.scales.x.grid.color = coreui.Utils.getStyle('--cui-border-color-translucent');
  mainBarChart.options.scales.x.ticks.color = coreui.Utils.getStyle('--cui-body-color');
  mainBarChart.options.scales.y.grid.color = coreui.Utils.getStyle('--cui-border-color-translucent');
  mainBarChart.options.scales.y.ticks.color = coreui.Utils.getStyle('--cui-body-color');
  cardChart1.update();
  mainBarChart.update();
};

// eslint-disable-next-line no-unused-vars
const cardChartNew1 = new Chart(document.getElementById('card-chart-new1'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: `rgba(${coreui.Utils.getStyle('--cui-primary-rgb')}, .1)`,
      borderColor: coreui.Utils.getStyle('--cui-primary'),
      borderWidth: 3,
      data: [78, 81, 80, 45, 34, 22, 40],
      fill: true
    }]
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
});
const cardChart1 = new Chart(document.getElementById('card-chart1'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: coreui.Utils.getStyle('--cui-primary'),
      data: [65, 59, 84, 84, 51, 55, 40]
    }]
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
          display: false
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
});
const cardChart3 = new Chart(document.getElementById('card-chart3'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
      fill: true
    }]
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
});
const cardChart4 = new Chart(document.getElementById('card-chart4'), {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
      barPercentage: 0.6
    }]
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
          drawTicks: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
});
const mainBarChart = new Chart(document.getElementById('main-bar-chart'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Users',
      backgroundColor: coreui.Utils.getStyle('--cui-primary'),
      borderRadius: 6,
      borderSkipped: false,
      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
      barPercentage: 0.6,
      categoryPercentage: 0.5
    }, {
      label: 'New users',
      backgroundColor: coreui.Utils.getStyle('--cui-gray-100'),
      borderRadius: 6,
      borderSkipped: false,
      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
      barPercentage: 0.6,
      categoryPercentage: 0.5
    }]
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
        beginAtZero: true,
        border: {
          dash: [2, 4],
          display: false
        },
        grid: {
          color: coreui.Utils.getStyle('--cui-border-color-translucent')
        },
        ticks: {
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
});
//# sourceMappingURL=main.js.map