/* global Ladda */

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (3.2.0): loading-buttons.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
Ladda.bind('.btn-ladda', {
  timeout: 2000
}); // Bind progress buttons and simulate loading progress

Ladda.bind('.btn-ladda-progress', {
  callback: function callback(instance) {
    var progress = 0;
    var interval = setInterval(function () {
      progress = Math.min(progress + Math.random() * 0.1, 1);
      instance.setProgress(progress);

      if (progress === 1) {
        instance.stop();
        clearInterval(interval);
      }
    }, 200);
  }
});
//# sourceMappingURL=loading-buttons.js.map