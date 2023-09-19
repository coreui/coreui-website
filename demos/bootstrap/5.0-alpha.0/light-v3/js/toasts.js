/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI PRO Boostrap Admin Template toasts.js
 * License (https://coreui.io/pro/license/)
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