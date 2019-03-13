/* global CodeMirror, codemirror */

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (2.1.12): code-editor.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers, no-unused-vars */
const editor = CodeMirror.fromTextArea(codemirror, {
  // lineNumbers: true,
  mode : 'xml',
  htmlMode: true
})
editor.setSize('100%', 700)
