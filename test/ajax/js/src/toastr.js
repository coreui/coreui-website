/* global toastr */
import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (2.1.12): toastr.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers, no-unused-vars */
let i = -1
let toastCount = 0
let $toastlast

const getMessage = () => {
  const msgs = [
    'My name is Inigo Montoya. You killed my father. Prepare to die!',
    '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
    'Are you the six fingered man?',
    'Inconceivable!',
    'I do not think that means what you think it means.',
    'Have fun storming the castle!'
  ]
  i++
  if (i === msgs.length) {
    i = 0
  }
}

const getMessageWithClearButton = (msg) => {
  msg = msg ? msg : 'Clear itself?'
  msg += '<br /><br /><button type="button" class="btn clear">Yes</button>'
  return msg
}

// eslint-disable-next-line complexity
$('#showtoast').click(() => {
  const shortCutFunction = $('#toastTypeGroup input:radio:checked').val()
  let msg = $('#message').val()
  const title = $('#title').val() || ''
  const $showDuration = $('#showDuration')
  const $hideDuration = $('#hideDuration')
  const $timeOut = $('#timeOut')
  const $extendedTimeOut = $('#extendedTimeOut')
  const $showEasing = $('#showEasing')
  const $hideEasing = $('#hideEasing')
  const $showMethod = $('#showMethod')
  const $hideMethod = $('#hideMethod')
  const toastIndex = toastCount++
  const addClear = $('#addClear').prop('checked')

  toastr.options = {
    closeButton: $('#closeButton').prop('checked'),
    debug: $('#debugInfo').prop('checked'),
    newestOnTop: $('#newestOnTop').prop('checked'),
    progressBar: $('#progressBar').prop('checked'),
    positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
    preventDuplicates: $('#preventDuplicates').prop('checked'),
    onclick: null
  }

  if ($('#addBehaviorOnToastClick').prop('checked')) {
    toastr.options.onclick = function () {
      // eslint-disable-next-line no-alert
      alert('You can perform some custom action after a toast goes away')
    }
  }

  if ($showDuration.val().length) {
    toastr.options.showDuration = $showDuration.val()
  }

  if ($hideDuration.val().length) {
    toastr.options.hideDuration = $hideDuration.val()
  }

  if ($timeOut.val().length) {
    toastr.options.timeOut = addClear ? 0 : $timeOut.val()
  }

  if ($extendedTimeOut.val().length) {
    toastr.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut.val()
  }

  if ($showEasing.val().length) {
    toastr.options.showEasing = $showEasing.val()
  }

  if ($hideEasing.val().length) {
    toastr.options.hideEasing = $hideEasing.val()
  }

  if ($showMethod.val().length) {
    toastr.options.showMethod = $showMethod.val()
  }

  if ($hideMethod.val().length) {
    toastr.options.hideMethod = $hideMethod.val()
  }

  if (addClear) {
    msg = getMessageWithClearButton(msg)
    toastr.options.tapToDismiss = false
  }
  if (!msg) {
    msg = getMessage()
  }

  /* eslint-disable prefer-template, operator-linebreak */
  $('#toastrOptions').text('Command: toastr["' + shortCutFunction + '"]("' + msg + (title ? '", "' + title : '') + '")\n\ntoastr.options = ' + JSON.stringify(toastr.options, null, 2))
  /* eslint-enable prefer-template, operator-linebreak */

  const $toast = toastr[shortCutFunction](msg, title) // Wire up an event handler to a button in the toast, if it exists
  $toastlast = $toast

  if (typeof $toast === 'undefined') {
    return
  }

  if ($toast.find('#okBtn').length) {
    $toast.delegate('#okBtn', 'click', () => {
      // eslint-disable-next-line no-alert
      alert(`you clicked me. i was toast #${toastIndex}. goodbye!`)
      $toast.remove()
    })
  }
  if ($toast.find('#surpriseBtn').length) {
    $toast.delegate('#surpriseBtn', 'click', () => {
      // eslint-disable-next-line no-alert
      alert(`Surprise! you clicked me. i was toast #${toastIndex}. You could perform an action here.`)
    })
  }
  if ($toast.find('.clear').length) {
    $toast.delegate('.clear', 'click', () => {
      toastr.clear($toast, {
        force: true
      })
    })
  }
})

const getLastToast = () => $toastlast

$('#clearlasttoast').click(() => {
  toastr.clear(getLastToast())
})

$('#cleartoasts').click(() => {
  toastr.clear()
})
