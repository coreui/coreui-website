/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (v5.0.0-alpha.0): set-config.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

(() => {
  'use strict';

  const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
  if (urlParams.get('direction') && ['ltr', 'rtl'].includes(urlParams.get('direction'))) {
    localStorage.setItem('direction', urlParams.get('direction'));
  }
  if (urlParams.get('theme') && ['auto', 'dark', 'light'].includes(urlParams.get('theme'))) {
    localStorage.setItem('theme', urlParams.get('theme'));
  }
})();
//# sourceMappingURL=set-config.js.map