/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (3.4.0): select.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */
var options = [{
  value: 0,
  text: 'enhancement'
}, {
  value: 1,
  text: 'bug'
}, {
  value: 2,
  text: 'duplicate'
}, {
  value: 3,
  text: 'invalid'
}, {
  label: 'group',
  options: [{
    value: 4,
    text: 'enhancement2'
  }, {
    value: 5,
    text: 'bug2'
  }]
}];
var select1 = document.getElementById('select-1');
var select1c = new coreui.MultiSelect(select1, {
  multiple: false,
  search: true,
  options: options
});
var select2 = document.getElementById('select-2');
var select2c = new coreui.MultiSelect(select2, {
  multiple: true,
  selectionType: 'text',
  search: true,
  options: options
});
var select2a = document.getElementById('select-2');
var select3 = document.getElementById('select-3');
var select3c = new coreui.MultiSelect(select3, {
  multiple: true,
  selectionType: 'tags',
  search: true,
  options: options
});
var select4 = document.getElementById('select-4');
var select4c = new coreui.MultiSelect(select4, {
  multiple: true,
  search: true,
  options: options
});
var select5 = document.getElementById('select-5');
var select5c = new coreui.MultiSelect(select5, {
  inline: true,
  multiple: true,
  search: true,
  options: options,
  searchPlaceholder: 'Search'
});
var select6 = document.getElementById('select-6');
var select6c = new coreui.MultiSelect(select6, {
  inline: true,
  multiple: true,
  search: true,
  options: options,
  selectionType: 'tags',
  searchPlaceholder: 'Search'
});
var select7 = document.getElementById('select-7');
var select7c = new coreui.MultiSelect(select7, {
  inline: true,
  multiple: true,
  search: true,
  options: options,
  selection: false,
  searchPlaceholder: 'Search'
});
var select8 = document.getElementById('select-8');
var select8c = new coreui.MultiSelect(select8, {
  inline: true,
  multiple: true,
  search: false,
  options: options,
  selection: false
}); //

var select9 = document.getElementById('select-9');
var select9c = new coreui.MultiSelect(select9, {
  multiple: false,
  search: true
});
var select10 = document.getElementById('select-10');
var select10c = new coreui.MultiSelect(select10, {
  multiple: true,
  selectionType: 'text',
  search: true
});
var select11 = document.getElementById('select-11');
var select11c = new coreui.MultiSelect(select11, {
  multiple: true,
  selectionType: 'tags',
  search: true
});
var select12 = document.getElementById('select-12');
var select12c = new coreui.MultiSelect(select12, {
  multiple: true,
  search: true
});
var select13 = document.getElementById('select-13');
var select13c = new coreui.MultiSelect(select13, {
  inline: true,
  multiple: true,
  search: true,
  searchPlaceholder: 'Search'
});
var select14 = document.getElementById('select-14');
var select14c = new coreui.MultiSelect(select14, {
  inline: true,
  multiple: true,
  search: true,
  selectionType: 'tags',
  searchPlaceholder: 'Search'
});
var select15 = document.getElementById('select-15');
var select15c = new coreui.MultiSelect(select15, {
  inline: true,
  multiple: true,
  search: true,
  selection: false,
  searchPlaceholder: 'Search'
});
var select16 = document.getElementById('select-16');
var select16c = new coreui.MultiSelect(select16, {
  inline: true,
  multiple: true,
  search: false,
  selection: false
});
//# sourceMappingURL=multi-select.js.map