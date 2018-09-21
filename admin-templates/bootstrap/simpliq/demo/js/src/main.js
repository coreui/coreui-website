/* eslint-disable object-shorthand */
/* global Chart, CustomTooltips, getStyle, hexToRgba */
import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.0.1): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
// Disable the on-canvas tooltip
Chart.defaults.global.pointHitDetectionRadius = 1
Chart.defaults.global.tooltips.enabled = false
Chart.defaults.global.tooltips.mode = 'index'
Chart.defaults.global.tooltips.position = 'nearest'
Chart.defaults.global.tooltips.custom = CustomTooltips

// eslint-disable-next-line no-unused-vars
const mainChart = new Chart($('#main-chart'), {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    datasets: [
      {
        type: 'line',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        hoverBackgroundColor: 'transparent',
        hoverBorderColor: 'transparent',
        data: [1, 2, 3, 4, 5, 4, 3, 3, 4, 5, 5, 6, 6, 5, 5, 4, 6, 5, 4, 3, 2, 1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2]
      }, {
        type: 'bar',
        barBorderRadius: 10,
        backgroundColor: '#C7CBD5',
        borderColor: 'red',
        hoverBackgroundColor: '#36A9E1',
        hoverBorderColor: '#f5f5f5',
        data: [1, 2, 3, 4, 5, 4, 3, 3, 4, 5, 5, 6, 6, 5, 5, 4, 6, 5, 4, 3, 2, 1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        categoryPercentage: .5,
        barPercentage: 1,
        position: 'top',
        gridLines: {
          color: '#C7CBD5',
          zeroLineColor: '#C7CBD5',
          drawTicks: true,
          borderDash: [8, 5],
          offsetGridLines: false,
          tickMarkLength: 10
        },
        ticks: {
          callback: function(value) {
            return value.charAt(0) + value.charAt(1) + value.charAt(2)
          }
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
          drawOnChartArea: false,
          borderDash: [8, 5],
          offsetGridLines: false
        },
        ticks: {
          beginAtZero: true,
          max: 8,
          maxTicksLimit: 5
        }
      }]
    },
    legend: {
      display: false
    }
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart12 = new Chart($('#cardChart12'), {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      backgroundColor: 'transparent',
      borderColor: '#C7CBD5',
      pointBackgroundColor: '#fff',
      borderWidth: 3,
      data: [75, 59, 94, 104, 151, 155, 240]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          zeroLineWidth: 0.00001,
          color: '#fff'
        }

      }],
      yAxes: [{
        gridLines: {
          zeroLineWidth: 0.00001,
          color: '#fff'
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart13 = new Chart($('#cardChart13'), {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    datasets: [
      {
        data: [0, 0, 1, 2, 21, 9, 12, 10, 31, 13, 65, 10, 12, 6, 4, 3, 0],
        label: 'Current',
        backgroundColor: hexToRgba(getStyle('--info'),10),
        borderColor: getStyle('--info'),
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1
      },
      {
        data: [0, 0, 1, 2, 7, 5, 6, 8, 24, 7, 12, 5, 6, 3, 2, 2, 0],
        label: 'Previous',
        backgroundColor: 'transparent',
        borderColor: getStyle('--success'),
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1
      },
      {
        data: [0, 0, 1, 0, 2, 0, 1, 0, 2, 3, 0, 2, 3, 2, 1, 0, 0],
        label: 'BEP',
        backgroundColor: 'transparent',
        borderColor: getStyle('--danger'),
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }],
      yAxes: [{
        gridLines: {
          color: '#C7CBD5'
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5
        }
      }]
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    },
    legend: {
      display: false
    }
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart14 = new Chart($('#cardChart14'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      backgroundColor: 'transparent',
      borderColor: '#fff',
      pointBackgroundColor: getStyle('--primary'),
      borderWidth: 2,
      data: [31000, 34000, 27000, 24000, 28000, 42500, 42000, 30000, 35500, 35500, 41500, 41600]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontColor: '#fff',
          maxTicksLimit: 3,
          maxRotation: 0,
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(255,255,255,.2)',
          zeroLineColor: 'rgba(255,255,255,.2)'
        },
        ticks: {
          maxTicksLimit: 10,
          stepSize: Math.ceil(45000 / 10),
          max: 45000,
          fontColor: '#fff',
          callback: function(value) {
            return '$' + value;
          }
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 2,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart15 = new Chart($('#cardChart15'), {
  type: 'bar',
  data: {
    labels: ['US','PL','GB','DE','NL','CA','FI', 'RU', 'AU', 'N/A'],
    datasets: [{
      backgroundColor: getStyle('--success'),
      borderWidth: 0,
      data: [35, 14, 10, 8, 6, 6, 5, 4, 3, 9]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          maxRotation: 0,
        },
        barPercentage: 0.6
      }],
      yAxes: [{
        display:false,
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  }
})

const brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const brandBoxChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display:false
    }],
    yAxes: [{
      display:false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
}

// eslint-disable-next-line no-unused-vars
const brandBoxChart1 = new Chart($('#social-box-chart-1'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [65, 59, 84, 84, 51, 55, 40]
    }]
  },
  options: brandBoxChartOptions
})

// eslint-disable-next-line no-unused-vars
const brandBoxChart2 = new Chart($('#social-box-chart-2'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [1, 13, 9, 17, 34, 41, 38]
    }]
  },
  options: brandBoxChartOptions
})

// eslint-disable-next-line no-unused-vars
const brandBoxChart3 = new Chart($('#social-box-chart-3'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [78, 81, 80, 45, 34, 12, 40]
    }]
  },
  options: brandBoxChartOptions
})

// eslint-disable-next-line no-unused-vars
const brandBoxChart4 = new Chart($('#social-box-chart-4'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [35, 23, 56, 22, 97, 23, 64]
    }]
  },
  options: brandBoxChartOptions
})
