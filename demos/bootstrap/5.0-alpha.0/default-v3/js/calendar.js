/* global FullCalendar */

/**
 * --------------------------------------------------------------------------
 * CoreUI PRO Boostrap Admin Template calendar.js
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