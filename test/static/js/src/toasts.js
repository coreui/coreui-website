import $ from 'jquery'
/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (v2.1.11): toasts.js
 * License (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
/* eslint-disable no-magic-numbers */
$('.toast').toast('show')
$('#toast-1').on('hidden.bs.toast', () => {
  setTimeout(() => {
    $('#toast-1').toast('show')
  }, 3000)
})
$('#toast-2').on('hidden.bs.toast', () => {
  setTimeout(() => {
    $('#toast-2').toast('show')
  }, 2500)
})
