# Day & Week Views

> The time-grid views: hours on the vertical axis, one column per day, with a configurable visible-hours window.

The `week` view (the default) renders seven day columns on a vertical time
axis; `day` renders one. Events that overlap share the column width, events
crossing midnight continue into the next column, and all-day events collect
in the lane below the header.

```html
import { CScheduler } from '@coreui/react-scheduler'

const pad = (n: number) => String(n).padStart(2, '0')
const day = (offset: number) => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export const SchedulerDayWeekExample = () => (
  <CScheduler
    view="week"
    dayStartHour={8}
    dayEndHour={18}
    events={[
      {
        id: 'kickoff', title: 'Kickoff', start: `${day(0)}T09:00`, end: `${day(0)}T10:00`
      },
      {
        id: 'design', title: 'Design review', start: `${day(1)}T10:00`, end: `${day(1)}T11:30`, color: '#2eb85c'
      },
      {
        id: 'pairing', title: 'Pairing', start: `${day(1)}T10:30`, end: `${day(1)}T12:00`
      },
      {
        id: 'demo', title: 'Sprint demo', start: `${day(3)}T14:00`, end: `${day(3)}T15:00`
      }
    ]}
  />
)
```

## Visible hours

`dayStartHour` and `dayEndHour` (whole hours, 0–24) clamp the grid to the
hours that matter. Events outside the window are clipped; events entirely
outside are hidden:

```tsx
<CScheduler dayStartHour={8} dayEndHour={18} events={events} />
```

## Layout options

- `hourHeight` — pixels per hour (default `48`).
- `expandToFit` — let events widen over free space next to them instead of
  keeping strict per-overlap columns.
- `firstDayOfWeek` — ISO weekday number the week starts on (default `1`,
  Monday).
