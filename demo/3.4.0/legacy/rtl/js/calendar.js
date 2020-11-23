/* global FullCalendar */

/**
 * --------------------------------------------------------------------------
 * CoreUI Pro Boostrap Admin Template (3.4.0): calendar.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */
// const calendarEl = document.getElementById('calendar')
// const calendar = new FullCalendar.Calendar(calendarEl, {
//   plugins: ['dayGrid']
// })
// calendar.render()
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});
//# sourceMappingURL=calendar.js.map