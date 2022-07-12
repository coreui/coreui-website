/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (v4.2.0): popovers.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new coreui.Toast(toastLiveExample);
    toast.show();
  });
}
//# sourceMappingURL=toasts.js.map