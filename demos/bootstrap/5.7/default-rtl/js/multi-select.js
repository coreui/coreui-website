/* eslint-disable no-unused-vars */
/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI PRO Boostrap Admin Template multi-select.js
 * License (https://coreui.io/pro/license/)
 * --------------------------------------------------------------------------
 */

const options = [{
  value: 0,
  text: 'enhancement'
}, {
  value: 1,
  text: 'bug',
  selected: true
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
const options2 = [{
  value: 0,
  text: 'up-enhancement'
}, {
  value: 1,
  text: 'up-bug'
}, {
  value: 2,
  text: 'duplicate',
  selected: true
}, {
  value: 3,
  text: 'invalid',
  selected: true
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
const select1 = document.getElementById('select-1');
const select1c = new coreui.MultiSelect(select1, {
  multiple: false,
  search: true,
  options
});
select1c.update({
  multiple: true,
  search: true,
  options: options2
});
const select2 = document.getElementById('select-2');
const select2c = new coreui.MultiSelect(select2, {
  multiple: true,
  selectionType: 'text',
  search: true,
  options
});
const select2a = document.getElementById('select-2');
const select3 = document.getElementById('select-3');
const select3c = new coreui.MultiSelect(select3, {
  multiple: true,
  selectionType: 'tags',
  search: true,
  options
});
const select4 = document.getElementById('select-4');
const select4c = new coreui.MultiSelect(select4, {
  multiple: true,
  search: true,
  options
});
const select5 = document.getElementById('select-5');
const select5c = new coreui.MultiSelect(select5, {
  inline: true,
  multiple: true,
  search: true,
  options,
  searchPlaceholder: 'Search'
});
const select6 = document.getElementById('select-6');
const select6c = new coreui.MultiSelect(select6, {
  inline: true,
  multiple: true,
  search: true,
  options,
  selectionType: 'tags',
  searchPlaceholder: 'Search'
});
const select7 = document.getElementById('select-7');
const select7c = new coreui.MultiSelect(select7, {
  inline: true,
  multiple: true,
  search: true,
  options,
  selection: false,
  searchPlaceholder: 'Search'
});
const select8 = document.getElementById('select-8');
const select8c = new coreui.MultiSelect(select8, {
  inline: true,
  multiple: true,
  search: false,
  options,
  selection: false
});

//

const select9 = document.getElementById('select-9');
const select9c = new coreui.MultiSelect(select9, {
  multiple: false,
  search: true
});
const select10 = document.getElementById('select-10');
const select10c = new coreui.MultiSelect(select10, {
  multiple: true,
  selectionType: 'text',
  search: true
});
const select11 = document.getElementById('select-11');
const select11c = new coreui.MultiSelect(select11, {
  multiple: true,
  selectionType: 'tags',
  search: true
});
const select12 = document.getElementById('select-12');
const select12c = new coreui.MultiSelect(select12, {
  multiple: true,
  search: true
});
const select13 = document.getElementById('select-13');
const select13c = new coreui.MultiSelect(select13, {
  inline: true,
  multiple: true,
  search: true,
  searchPlaceholder: 'Search'
});
const select14 = document.getElementById('select-14');
const select14c = new coreui.MultiSelect(select14, {
  inline: true,
  multiple: true,
  search: true,
  selectionType: 'tags',
  searchPlaceholder: 'Search'
});
const select15 = document.getElementById('select-15');
const select15c = new coreui.MultiSelect(select15, {
  inline: true,
  multiple: true,
  search: true,
  selection: false,
  searchPlaceholder: 'Search'
});
const select16 = document.getElementById('select-16');
const select16c = new coreui.MultiSelect(select16, {
  inline: true,
  multiple: true,
  search: false,
  selection: false
});
//# sourceMappingURL=multi-select.js.map