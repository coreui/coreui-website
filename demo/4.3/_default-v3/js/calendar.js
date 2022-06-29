/* global FullCalendar */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (4.2.0): calendar.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */
document.addEventListener('DOMContentLoaded', () => {
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});
//# sourceMappingURL=calendar.js.map