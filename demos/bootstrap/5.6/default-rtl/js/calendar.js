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
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    }
  });
  calendar.render();
});
//# sourceMappingURL=calendar.js.map