/* global CodeMirror, codemirror */

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (2.1.12): markdown-editor.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
var editor = CodeMirror.fromTextArea(codemirror, {
  mode: 'markdown',
  // lineNumbers: true,
  theme: 'default',
  extraKeys: {
    Enter: 'newlineAndIndentContinueMarkdownList'
  }
});
editor.setSize('100%', 700);
//# sourceMappingURL=markdown-editor.js.map