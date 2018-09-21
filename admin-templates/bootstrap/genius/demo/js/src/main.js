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
        borderColor: 'rgba(190,190,190,0.3)',
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgba(190,190,190,0.3)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        data: [0.5, 1, 1.5, 2, 2.5, 2, 1.5, 1.5, 2, 2.5, 2.5, 3, 3, 2.5, 2.5, 2, 3, 2.5, 2, 1.5, 1, 0.5, 1, 1, 1.5, 2, 2.5, 3, 2.5, 2, 1.5, 1]
      },
      {
        type: 'line',
        backgroundColor: 'transparent',
        borderColor: '#B2B8BD',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#B2B8BD',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [1, 2, 3, 4, 5, 4, 3, 3, 4, 5, 5, 6, 6, 5, 5, 4, 6, 5, 4, 3, 2, 1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2]
      },
      {
        type: 'bar',
        backgroundColor: '#ECECEC',
        borderColor: '#ECECEC',
        pointHoverBackgroundColor: '#fff',
        data: [1, 2, 3, 4, 5, 4, 3, 3, 4, 5, 5, 6, 6, 5, 5, 4, 6, 5, 4, 3, 2, 1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2]
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
        },
        ticks: {
          callback: function(value) {
            return value.charAt(0)
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      },
      line: {
        tension: 0.00001
      }
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
