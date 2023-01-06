/* eslint-disable unicorn/no-array-for-each */
/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (v5.0.0-alpha.0): direction.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

(() => {
  'use strict';

  const storedDirection = localStorage.getItem('direction');
  const getPreferredDirection = () => {
    if (storedDirection) {
      return storedDirection;
    }
    return 'ltr';
  };
  const setDirection = function (direction) {
    document.documentElement.setAttribute('dir', direction);
    const style = document.querySelector('link#main-style');
    style.setAttribute('href', `css/style${direction === 'rtl' ? '.rtl' : ''}.css`);
  };
  setDirection(getPreferredDirection());
  const showActiveDirection = theme => {
    const activeThemeIcon = document.querySelector('.direction-active use');
    const btnToActive = document.querySelector(`[data-coreui-direction-value="${theme}"]`);
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('xlink:href');
    document.querySelectorAll('[data-coreui-direction-value]').forEach(element => {
      element.classList.remove('active');
    });
    btnToActive.classList.add('active');
    activeThemeIcon.setAttribute('xlink:href', svgOfActiveBtn);
  };
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedDirection !== 'light' || storedDirection !== 'dark') {
      setDirection(getPreferredDirection());
    }
  });
  window.addEventListener('DOMContentLoaded', () => {
    showActiveDirection(getPreferredDirection());
    document.querySelectorAll('[data-coreui-direction-value]').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const direction = toggle.getAttribute('data-coreui-direction-value');
        localStorage.setItem('direction', direction);
        setDirection(direction);
        showActiveDirection(direction);
      });
    });
  });
})();
//# sourceMappingURL=direction.js.map