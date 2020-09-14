/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (3.2.0): draggable-cards.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
var element = '[class*=col]';
var handle = '.card-header';
var connect = '[class*=col]';
$(element).sortable({
  handle: handle,
  connectWith: connect,
  tolerance: 'pointer',
  forcePlaceholderSize: true,
  opacity: 0.8,
  placeholder: 'card-placeholder'
}).disableSelection();
//# sourceMappingURL=draggable-cards.js.map