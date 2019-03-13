/* global Ladda */

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (2.1.12): loading-buttons.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
Ladda.bind('.btn-ladda', {
  timeout: 2000
})

// Bind progress buttons and simulate loading progress
Ladda.bind('.btn-ladda-progress', {
  callback: (instance) => {
    let progress = 0
    const interval = setInterval(() => {
      progress = Math.min(progress + Math.random() * 0.1, 1)
      instance.setProgress(progress)

      if (progress === 1) {
        instance.stop()
        clearInterval(interval)
      }
    }, 200)
  }
})
