# Month View

> A full-month grid with per-day event chips, overflow links, and drag by day.

The `month` view lays the whole month out as a week-aligned grid.
**Multi-day events render as bars spanning their days** — clipped at week
edges with continuation styling and stacked into lanes when they overlap —
while single-day events list as chips below them, all-day first. Days
outside the current month are dimmed.

```ts
import { Component } from '@angular/core'
import { SchedulerComponent } from '@coreui/angular-scheduler'

const pad = (n: number) => String(n).padStart(2, '0')
const day = (offset: number) => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

@Component({
  selector: 'docs-scheduler-month-example',
  imports: [SchedulerComponent],
  template: `
    <c-scheduler view="month" [monthMaxEventsPerDay]="3" [events]="events" />
  `
})
export class SchedulerMonthExample {
  readonly events = [
    {
 id: 'standup', title: 'Standup', start: `${day(0)}T09:00`, end: `${day(0)}T09:15`, rrule: 'FREQ=DAILY;COUNT=10'
},
    {
 id: 'design', title: 'Design review', start: `${day(1)}T10:00`, end: `${day(1)}T11:30`, color: '#2eb85c'
},
    {
 id: 'sync', title: 'Team sync', start: `${day(1)}T10:30`, end: `${day(1)}T11:00`
},
    {
 id: 'one', title: '1:1', start: `${day(1)}T13:00`, end: `${day(1)}T13:30`, color: '#e55353'
},
    {
 id: 'conf', title: 'CoreUI Conf', start: day(4), end: day(6), allDay: true
},
    {
 id: 'planning', title: 'Planning', start: `${day(7)}T10:00`, end: `${day(7)}T12:00`
}
  ]
}
```

## Overflow

`monthMaxEventsPerDay` (default `4`) caps the single-day chips per day; the
remainder collapses into a **+N more** link that jumps straight to that
day's day view. Bars always render.

## Interactions

- **Drag a chip or a bar** to another day to move the event — times (and,
  for all-day events, the day span) are preserved, only the dates change.
- **Drag across empty days** to create an all-day event spanning them.
- **Keyboard:** focus a chip or bar, press <kbd>Enter</kbd> to grab it, move
  with <kbd>←</kbd>/<kbd>→</kbd> (±1 day) and <kbd>↑</kbd>/<kbd>↓</kbd>
  (±1 week), then <kbd>Enter</kbd> to confirm or <kbd>Escape</kbd> to
  cancel.
