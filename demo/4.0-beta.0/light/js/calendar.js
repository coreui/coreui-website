/* global FullCalendar */

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (4.0.0-beta.0): calendar.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});
//# sourceMappingURL=calendar.js.map