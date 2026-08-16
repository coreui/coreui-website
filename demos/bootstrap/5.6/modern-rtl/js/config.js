/**
 * --------------------------------------------------------------------------
 * CoreUI PRO Boostrap Admin Template config.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

(() => {
  const THEME = 'coreui-pro-bootstrap-admin-template-theme-modern';
  const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
  if (urlParams.get('theme') && ['auto', 'dark', 'light'].includes(urlParams.get('theme'))) {
    localStorage.setItem(THEME, urlParams.get('theme'));
  }
})();
//# sourceMappingURL=config.js.map