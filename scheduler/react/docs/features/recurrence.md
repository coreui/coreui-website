# React Scheduler Recurrence

> RFC 5545 RRULE recurrence with windowed, DST-safe expansion, exception dates, and per-occurrence editing.

Events repeat through the `rrule` property — a raw
[RFC 5545 RRULE](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10)
string. Any rule the standard allows is valid in the data model; the built-in
editing UI exposes daily/weekly/monthly presets.

```html
import { CScheduler } from '@coreui/react-scheduler'

const pad = (n: number) => String(n).padStart(2, '0')
const day = (offset: number) => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export const SchedulerRecurrenceExample = () => (
  <CScheduler
    dayStartHour={7}
    dayEndHour={19}
    events={[
      {
        id: 'standup', title: 'Daily standup', start: `${day(0)}T09:00`, end: `${day(0)}T09:15`, rrule: 'FREQ=DAILY;COUNT=5'
      },
      {
        id: 'yoga', title: 'Yoga', start: `${day(0)}T07:30`, end: `${day(0)}T08:15`, rrule: 'FREQ=DAILY;INTERVAL=2', color: '#2eb85c'
      },
      {
        id: 'grooming', title: 'Backlog grooming', start: `${day(2)}T11:00`, end: `${day(2)}T12:00`, rrule: 'FREQ=WEEKLY', exdates: [`${day(9)}T11:00`]
      }
    ]}
  />
)
```

## How expansion works

Occurrences are computed only for the visible range — never "the whole
series ahead" — and each occurrence keeps the series' wall-clock time across
DST transitions in the scheduler's time zone. An occurrence that would land
on a nonexistent time (the spring-forward gap) shifts forward with the gap;
durations stay real elapsed time.

`exdates` lists wall-clock exception dates excluded from the series.

## Editing occurrences

Clicking any event opens the edit dialog — title, start, end, color, and a
repeat preset. For recurring events the dialog adds an **Applies to** scope
that governs how the edit lands:

| Scope | Effect of a move/resize/delete |
| --- | --- |
| `occurrence` *(default)* | The occurrence detaches: the series gains an `exdate`, the change becomes a standalone event. |
| `future` | The series ends just before this occurrence; the remainder becomes a new series at the edited time. `COUNT` rules are dropped on split. |
| `all` | The whole series shifts by the edit's delta. |

The initial scope comes from the `recurringEditScope` prop. With the
`occurrence` scope, repeat changes are not carried onto the detached copy —
switch the scope to `future` or `all` to change the rule itself.
