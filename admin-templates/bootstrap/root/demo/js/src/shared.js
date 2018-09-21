/* eslint-disable object-shorthand */
/* global Chart, CustomTooltips, getStyle */
import $ from 'jquery'

/* eslint-disable no-magic-numbers */
// Disable the on-canvas tooltip
Chart.defaults.global.pointHitDetectionRadius = 1
Chart.defaults.global.tooltips.enabled = false
Chart.defaults.global.tooltips.mode = 'index'
Chart.defaults.global.tooltips.position = 'nearest'
Chart.defaults.global.tooltips.custom = CustomTooltips

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const elements = 16
const labels = []
const data1 = []
const data2 = []
const data3 = []

for (let i = 0; i <= elements; i++) {
  labels.push('1')
  data1.push(random(40, 100))
  data2.push(random(20, 100))
  data3.push(random(60, 100))
}

// eslint-disable-next-line no-unused-vars
const headerChart = new Chart($('#header-chart-1'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'transparent',
      borderColor: getStyle('--info'),
      borderWidth: 2,
      data: data1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        points: false
      }],
      yAxes: [{
        display: false,
        ticks: {
          max: 102
        }
      }]
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }
})

// eslint-disable-next-line no-unused-vars
const headerChart2  = new Chart($('#header-chart-2'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'transparent',
      borderColor: getStyle('--warning'),
      borderWidth: 2,
      data: data2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        points: false
      }],
      yAxes: [{
        display: false,
        ticks: {
          max: 102
        }
      }]
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }
})

// eslint-disable-next-line no-unused-vars
const headerChart3 = new Chart($('#header-chart-3'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      borderWidth: 2,
      data: data3
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        points: false
      }],
      yAxes: [{
        display:false,
        ticks: {
          max: 102
        }
      }]
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }
})
