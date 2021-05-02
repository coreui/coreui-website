/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (3.4.0): loading-buttons.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */
document.querySelectorAll('.btn-loading').forEach(function (element) {
  // eslint-disable-next-line no-unused-vars
  var btn = new coreui.LoadingButton(element);
  element.addEventListener('click', function (event) {
    var myBtn = coreui.LoadingButton.getInstance(event.target);
    myBtn.start();
  });
});
//# sourceMappingURL=loading-buttons.js.map