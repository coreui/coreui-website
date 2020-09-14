/* global moment */

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (3.2.0): advanced-forms.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
$('#date').mask('99/99/9999');
$('#phone').mask('(999) 999-9999');
$('#tin').mask('99-9999999');
$('#ssn').mask('999-99-9999');
$('#eyescript').mask('~9.99 ~9.99 999');
$('#ccn').mask('9999 9999 9999 9999');
$('#select2-1, #select2-2, #select2-4').select2({
  theme: 'coreui'
});
$('#select2-3').select2({
  theme: 'coreui',
  placeholder: 'Your Favorite Football Team',
  allowClear: true
});
$('input[name="daterange"]').daterangepicker({
  opens: 'left',
  ranges: {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  },
  buttonClasses: 'btn btn-sm mx-1',
  applyButtonClasses: 'btn-primary',
  cancelClass: 'btn-secondary'
});
$('input[name="singledatepicker"]').daterangepicker({
  opens: 'right',
  drops: 'up',
  singleDatePicker: true,
  showDropdowns: true,
  locale: {
    format: 'DD.MM.YYYY',
    firstDay: 1
  }
});
//# sourceMappingURL=advanced-forms.js.map