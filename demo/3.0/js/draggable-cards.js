/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (2.1.12): draggable-cards.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
var element = '[class*=c-col]';
var handle = '.c-card-header';
var connect = '[class*=c-col]';
$(element).sortable({
  handle: handle,
  connectWith: connect,
  tolerance: 'pointer',
  forcePlaceholderSize: true,
  opacity: 0.8,
  placeholder: 'c-card-placeholder'
}).disableSelection();
//# sourceMappingURL=draggable-cards.js.map