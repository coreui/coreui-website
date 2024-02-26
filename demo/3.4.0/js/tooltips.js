/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (3.4.0): tooltips.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */
document.querySelectorAll('[data-toggle="tooltip"]').forEach(function (element) {
  // eslint-disable-next-line no-new
  new coreui.Tooltip(element, {
    offset: function offset(_ref) {
      var placement = _ref.placement,
          reference = _ref.reference,
          popper = _ref.popper;
      console.log(placement);
      console.log(reference);
      console.log(popper);

      if (placement === 'bottom') {
        return [0, popper.height / 2];
      } else {
        return [];
      }
    }
  });
});
//# sourceMappingURL=tooltips.js.map