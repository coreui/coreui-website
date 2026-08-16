# CoreUI Scheduler

> Resource and time scheduler — day, week, month, agenda and resource views with drag & drop, RFC 5545 recurrence, DST-safe time handling and full keyboard support, around 62 KB gzipped.

CoreUI Scheduler is a resource and time scheduler for planning events across
days, weeks, months and resources. Drag to reschedule, resize to adjust,
select a range to create — with a full keyboard equivalent for every
operation.

```html
<div id="schedulerOverview"></div>
```

```js
const pad = n => String(n).padStart(2, '0')
const day = offset => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

new coreui.Scheduler(document.getElementById('schedulerOverview'), {
  dayStartHour: 7,
  dayEndHour: 20,
  businessHours: { daysOfWeek: [1, 2, 3, 4, 5], startHour: 9, endHour: 17 },
  events: [
    {
      id: 'standup', title: 'Standup', start: `${day(0)}T09:00`, end: `${day(0)}T09:15`, rrule: 'FREQ=DAILY;COUNT=5'
    },
    {
      id: 'design', title: 'Design review', start: `${day(1)}T10:00`, end: `${day(1)}T11:30`, color: '#2eb85c'
    },
    {
      id: 'sync', title: 'Team sync', start: `${day(1)}T10:30`, end: `${day(1)}T11:00`
    },
    {
      id: 'lunch', title: 'Lunch & learn', start: `${day(2)}T12:00`, end: `${day(2)}T13:00`, color: '#f9b115'
    },
    {
      id: 'retro', title: 'Retro', start: `${day(4)}T15:00`, end: `${day(4)}T16:00`
    },
    {
      id: 'conf', title: 'CoreUI Conf', start: day(4), end: day(6), allDay: true
    }
  ],
  expandToFit: true
})
```

## Why CoreUI Scheduler

- **Six views.** [Day & week](https://coreui.io/scheduler/docs/views/day-week/), [month](https://coreui.io/scheduler/docs/views/month/),
  [agenda](https://coreui.io/scheduler/docs/views/agenda/), a [resource view](https://coreui.io/scheduler/docs/views/resources/) with columns
  per room, person or machine — virtualized past a dozen resources — and a
  horizontal [timeline](https://coreui.io/scheduler/docs/views/timeline/).
- **Real recurrence.** Events carry raw
  [RFC 5545 RRULE strings](https://coreui.io/scheduler/docs/features/recurrence/); expansion is windowed and
  DST-correct in any IANA time zone, powered by the Temporal API.
- **Accessible by design.** Every drag operation has a keyboard equivalent
  (grab → arrows → confirm) and operations are announced to assistive
  technologies. See [Keyboard & accessibility](https://coreui.io/scheduler/docs/features/keyboard-accessibility/).
- **Themeable.** Every knob is a `--cui-scheduler-*` CSS variable resolving
  through CoreUI semantic tokens, so light/dark theming works with no extra
  CSS. See [Styling & theming](https://coreui.io/scheduler/docs/customization/styling/).
- **Small.** Around 62 KB gzipped with the date engine, recurrence engine and
  virtualization included — no extra date library to ship.

## How it's built

All scheduling logic — the time model, recurrence expansion, event layout,
and the drag/keyboard interaction state machine — lives in a headless,
framework-free core. The component you install is a thin rendering layer over
it, and every interactive element carries a stable `data-part` attribute you
can target from tests or CSS.

## Get started

Head to [Installation](https://coreui.io/scheduler/docs/getting-started/installation/) and the
[Quickstart](https://coreui.io/scheduler/docs/getting-started/quickstart/), or explore the views from the
sidebar.
