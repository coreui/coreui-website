/* global $ */
/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (4.3.0): datatables.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */

/**
 * DataTables Initialization
 *
 * This module automatically initializes jQuery DataTables on the DataTables page
 * (views/plugins/datatables.html). DataTables is a powerful jQuery plugin for
 * creating interactive, feature-rich HTML tables.
 *
 * Features automatically enabled:
 * - Pagination
 * - Sorting (click column headers)
 * - Search/filtering
 * - Responsive layout
 *
 * All elements with the .datatable class will be enhanced with DataTables functionality.
 * The border-collapse CSS property is explicitly set to ensure proper table styling.
 *
 * @see https://datatables.net/
 */

$(document).ready(() => {
  $('.datatable').DataTable()
  $('.datatable').attr('style', 'border-collapse: collapse !important')
})
