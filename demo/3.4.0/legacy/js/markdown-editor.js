/* global CodeMirror, codemirror */

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (3.4.0): markdown-editor.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
var editor = CodeMirror.fromTextArea(codemirror, {
  mode: 'markdown',
  lineNumbers: true,
  theme: 'default',
  extraKeys: {
    Enter: 'newlineAndIndentContinueMarkdownList'
  }
});
editor.setSize('100%', 700);
//# sourceMappingURL=markdown-editor.js.map