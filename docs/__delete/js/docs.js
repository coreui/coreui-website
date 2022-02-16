// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getcoreui.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global ClipboardJS: false, anchors: false, bootstrap: false, bsCustomFileInput: false */

(function () {
  'use strict'

  function makeArray(list) {
    return [].slice.call(list)
  }

  function getNextSibling(elem, selector) {
    // Get the next sibling element
    var sibling = elem.nextElementSibling;
    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling
    }
  }

  makeArray(document.querySelectorAll('.pro-component'))
    .forEach(function(el) {
      var header = el.nextElementSibling
      header.classList.add('cd-float-left')
      var clearfix = document.createElement('div')
      clearfix.classList.add('cd-clearfix', 'cd-mb-3')
      header.parentNode.insertBefore(clearfix, header.nextSibling);
      var link = document.createElement('a')
      link.href = 'https://coreui.io/pro'
      link.innerHTML = 'CoreUI Pro Component'
      link.classList.add('cd-btn','cd-btn-outline-warning', 'cd-ml-3', 'cd-mt-3')
      header.parentNode.insertBefore(link, header.nextSibling);
    })

  // Tooltip and popover demos
  makeArray(document.querySelectorAll('.tooltip-demo'))
    .forEach(function (tooltip) {
      new coreui.Tooltip(tooltip, {
        selector: '[data-toggle="c-tooltip"]'
      })
    })

  makeArray(document.querySelectorAll('[data-toggle="c-popover"]'))
    .forEach(function (popover) {
      new coreui.Popover(popover)
    })

  makeArray(document.querySelectorAll('.c-toast'))
    .forEach(function (toastNode) {
      var toast = new coreui.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Demos within modals
  makeArray(document.querySelectorAll('.tooltip-test'))
    .forEach(function (tooltip) {
      new coreui.Tooltip(tooltip)
    })

  makeArray(document.querySelectorAll('.popover-test'))
    .forEach(function (popover) {
      new coreui.Popover(popover)
    })

  // Indeterminate checkbox example
  makeArray(document.querySelectorAll('.cd-example-indeterminate [type="checkbox"]'))
    .forEach(function (checkbox) {
      checkbox.indeterminate = true
    })

  // Disable empty links in docs examples
  makeArray(document.querySelectorAll('.cd-content [href="#"]'))
    .forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault()
      })
    })

  // Modal relatedTarget demo
  var exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', function (event) {
      var button = event.relatedTarget // Button that triggered the modal
      var recipient = button.getAttribute('data-whatever') // Extract info from data-* attributes

      // Update the modal's content.
      var modalTitle = exampleModal.querySelector('.modal-title')
      var modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.innerHTML = 'New message to ' + recipient
      modalBodyInput.value = recipient
    })
  }

  // Activate animated progress bar
  var btnToggleAnimatedProgress = document.querySelector('.cd-toggle-animated-progress')
  if (btnToggleAnimatedProgress) {
    btnToggleAnimatedProgress.addEventListener('click', function () {
      btnToggleAnimatedProgress.parentNode
        .querySelector('.progress-bar-striped')
        .classList
        .toggle('progress-bar-animated')
    })
  }

  // Insert copy to clipboard button before .highlight
  var btnHtml = '<div class="cd-clipboard"><button type="button" class="btn-clipboard" title="Copy to clipboard">Copy</button></div>'
  makeArray(document.querySelectorAll('figure.highlight, div.highlight'))
    .forEach(function (element) {
      element.insertAdjacentHTML('beforebegin', btnHtml)
    })

  makeArray(document.querySelectorAll('.btn-clipboard'))
    .forEach(function (btn) {
      var tooltipBtn = new coreui.Tooltip(btn)

      btn.addEventListener('mouseleave', function () {
        // Explicitly hide tooltip, since after clicking it remains
        // focused (as it's a button), so tooltip would otherwise
        // remain visible until focus is moved away
        tooltipBtn.hide()
      })
    })

  var clipboard = new ClipboardJS('.btn-clipboard', {
    target: function (trigger) {
      return trigger.parentNode.nextElementSibling
    }
  })

  clipboard.on('success', function (e) {
    var tooltipBtn = coreui.Tooltip._getInstance(e.trigger)

    e.trigger.setAttribute('title', 'Copied!')
    tooltipBtn._fixTitle()
    tooltipBtn.show()

    e.trigger.setAttribute('title', 'Copy to clipboard')
    tooltipBtn._fixTitle()
    e.clearSelection()
  })

  clipboard.on('error', function (e) {
    var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
    var fallbackMsg = 'Press ' + modifierKey + 'C to copy'
    var tooltipBtn = coreui.Tooltip._getInstance(e.trigger)

    e.trigger.setAttribute('title', fallbackMsg)
    tooltipBtn._fixTitle()
    tooltipBtn.show()

    e.trigger.setAttribute('title', 'Copy to clipboard')
    tooltipBtn._fixTitle()
  })

  anchors.options = {
    icon: '#'
  }
  anchors.add('.cd-content > h2, .cd-content > h3, .cd-content > h4, .cd-content > h5')

  // Wrap inner
  makeArray(document.querySelectorAll('.cd-content > h2, .cd-content > h3, .cd-content > h4, .cd-content > h5'))
    .forEach(function (hEl) {
      hEl.innerHTML = '<span class="cd-content-title">' + hEl.innerHTML + '</span>'
    })

  bsCustomFileInput.init()
})()