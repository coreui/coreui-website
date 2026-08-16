# React Scheduler Drag and Drop

> Move and resize events with the pointer — snapped to a configurable step, previewed live, cancellable with Escape.

Drag an event to move it; drag its top or bottom edge to resize. Both
operations snap to the `snap` step (default `15` minutes), render a live
preview, and can be abandoned with <kbd>Escape</kbd> before release.

```html
import { CScheduler } from '@coreui/react-scheduler'
import { useState } from 'react'

const pad = (n: number) => String(n).padStart(2, '0')
const day = (offset: number) => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export const SchedulerDndExample = () => {
  const [log, setLog] = useState('')

  return (
    <>
      <CScheduler
        dayStartHour={8}
        dayEndHour={18}
        snap={30}
        events={[
          {
            id: 'kickoff', title: 'Kickoff', start: `${day(0)}T09:00`, end: `${day(0)}T10:00`
          },
          {
            id: 'review', title: 'Review', start: `${day(2)}T13:00`, end: `${day(2)}T14:30`, color: '#2eb85c'
          }
        ]}
        onEventChange={change => setLog(`${change.action}: ${change.event.title} → ${change.event.start}`)}
      />
      <p className="mt-2 mb-0 text-body-secondary">{log}</p>
    </>
  )
}
```

## Touch

On touch devices the grids pan natively — a drag starts from a **long
press** (~300 ms): hold an event until it engages, then move; page
scrolling is suppressed for the rest of the gesture and <kbd>Escape</kbd>
still cancels. A quick tap keeps its click semantics (selection + edit
dialog), and moving your finger right away simply scrolls.

## The onEventChange payload

Every committed operation calls `onEventChange`:

| Property | Description |
| --- | --- |
| `action` | `'create'`, `'move'`, `'resize'`, `'update'` or `'delete'`. |
| `event` | The event with its updated ISO dates. |
| `occurrence` | The affected occurrence (`key`, `start`, `end`), or `null` for `create`. |
| `revert` | Call to restore the previous state — e.g. when your API rejects the change. |
| `scope` | For recurring events: `'occurrence'`, `'future'` or `'all'`. |

Moving or resizing a single occurrence of a recurring event detaches it by
default: the series gains an exception date and the change materializes as a
standalone event. See [Recurrence](https://coreui.io/scheduler/react/docs/features/recurrence/) for the other
scopes.
