/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (4.2.0): loading-buttons.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */
document.querySelectorAll('.btn-loading').forEach(element => {
  // eslint-disable-next-line no-unused-vars
  const btn = new coreui.LoadingButton(element);
  element.addEventListener('click', event => {
    const myBtn = coreui.LoadingButton.getInstance(event.target);
    myBtn.start();
  });
});
//# sourceMappingURL=loading-buttons.js.map