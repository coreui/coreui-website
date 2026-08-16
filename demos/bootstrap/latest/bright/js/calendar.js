/* global FullCalendar */

/**
 * --------------------------------------------------------------------------
 * CoreUI PRO Boostrap Admin Template calendar.js
 * License (https://coreui.io/pro/license)
 * --------------------------------------------------------------------------
 */

/**
 * FullCalendar Integration
 *
 * This module initializes the FullCalendar component on the Calendar page (views/apps/calendar.html).
 * FullCalendar is a JavaScript event calendar library that provides:
 * - Multiple view types (month, week, day, list)
 * - Interactive event management
 * - Responsive design
 *
 * The calendar is configured with:
 * - Default view: Month grid view
 * - Navigation: Previous/next buttons and today button
 * - View switching: Month, week, day, and list views available via header toolbar
 *
 * This is a basic setup. In a real application, you would typically add:
 * - Event data from an API or database
 * - Event click handlers
 * - Event creation/editing functionality
 *
 * @see https://fullcalendar.io/docs
 */

document.addEventListener('DOMContentLoaded', () => {
  const calendarEl = document.getElementById('calendar')
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    }
  })
  calendar.render()
})
