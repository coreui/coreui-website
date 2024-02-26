/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (3.4.0): loading-buttons.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */
document.querySelectorAll('.c-loading-button').forEach(function (element) {
  // eslint-disable-next-line unicorn/prefer-add-event-listener
  element.onclick = function () {
    element.addEventListener('start.coreui.loading-button', function () {
      console.log('start');
    });
    element.addEventListener('stop.coreui.loading-button', function () {
      console.log('stop');
    });
    element.addEventListener('complete.coreui.loading-button', function () {
      console.log('complete');
    });
    var lb = coreui.LoadingButton.getInstance(element);
    lb.start();
  };
});
//# sourceMappingURL=loading-buttons.js.map