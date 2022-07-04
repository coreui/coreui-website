/* global Chart, coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (v4.2.0): main.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */
// Disable the on-canvas tooltip
Chart.defaults.pointHitDetectionRadius = 1;
Chart.defaults.plugins.tooltip.enabled = false;
Chart.defaults.plugins.tooltip.mode = 'index';
Chart.defaults.plugins.tooltip.position = 'nearest';
Chart.defaults.plugins.tooltip.external = coreui.ChartJS.customTooltips;
Chart.defaults.color = coreui.Utils.getStyle('--cui-body-color'); // console.log(Chart.defaults.color)

document.body.addEventListener('themeChange', () => {
  cardChart1.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-primary');
  cardChart1.update();
}); // const random = (min, max) =>
//   // eslint-disable-next-line no-mixed-operators
//   Math.floor(Math.random() * (max - min + 1) + min)
// eslint-disable-next-line no-unused-vars

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
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          color: coreui.Utils.getStyle('--cui-text-disabled'),
          font: {
            size: 14
          },
          padding: 16
        }
      },
      y: {
        grid: {
          // display: false,
          drawBorder: false,
          borderDash: [2, 4] // drawTicks: false

        },
        gridLines: {
          // You can change the color, the dash effect, the main axe color, etc.
          borderDash: [8, 4],
          color: '#348632'
        },
        ticks: {
          beginAtZero: true,
          color: coreui.Utils.getStyle('--cui-text-disabled'),
          font: {
            size: 14
          },
          maxTicksLimit: 5,
          padding: 16,
          stepSize: Math.ceil(100 / 4) // max: 250

        }
      }
    }
  }
}); // eslint-disable-next-line no-unused-vars

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
}); // eslint-disable-next-line no-unused-vars

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
}); // eslint-disable-next-line no-unused-vars

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
});
//# sourceMappingURL=main.js.map