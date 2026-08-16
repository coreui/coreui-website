/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (4.3.0): loading-buttons.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */

/**
 * Loading Buttons
 *
 * This module initializes CoreUI LoadingButton components for all elements with
 * the .btn-loading class. Loading buttons provide visual feedback during asynchronous
 * operations by displaying a spinner and disabling the button.
 *
 * Features:
 * - Automatic spinner display on click
 * - Button disabled state during loading
 * - Prevents multiple submissions
 * - Smooth loading state transitions
 *
 * Usage on the Buttons page (views/buttons/loading-buttons.html):
 * - Each .btn-loading button is automatically initialized
 * - Click handler starts the loading animation
 * - In production, you would call .stop() when the async operation completes
 *
 * Example programmatic usage:
 * ```javascript
 * const btn = coreui.LoadingButton.getInstance(element)
 * btn.start() // Show loading state
 * // ... perform async operation ...
 * btn.stop()  // Hide loading state
 * ```
 *
 * @see https://coreui.io/bootstrap/docs/components/loading-button/
 */

for (const element of document.querySelectorAll('.btn-loading')) {
  // eslint-disable-next-line no-unused-vars
  const btn = new coreui.LoadingButton(element)
  element.addEventListener('click', event => {
    const myBtn = coreui.LoadingButton.getInstance(event.target)
    myBtn.start()
  })
}
