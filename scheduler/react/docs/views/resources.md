# Resource View

> One column per room, person or machine — with automatic column virtualization past a dozen resources.

The `resource` view shows a single day with one column per resource. Events
are routed to their column by `resourceId`, and dragging an event into
another column reassigns it.

```html
import { CScheduler } from '@coreui/react-scheduler'

const pad = (n: number) => String(n).padStart(2, '0')
const day = (offset: number) => {
  const date = new Date()
  date.setDate(date.getDate() + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export const SchedulerResourcesExample = () => (
  <CScheduler
    view="resource"
    dayStartHour={8}
    dayEndHour={18}
    resources={[
      { id: 'room-1', label: 'Room 1' },
      { id: 'room-2', label: 'Room 2', color: '#2eb85c' },
      { id: 'room-3', label: 'Room 3', color: '#e55353' }
    ]}
    events={[
      {
        id: 'a', title: 'Board meeting', resourceId: 'room-1', start: `${day(0)}T09:00`, end: `${day(0)}T11:00`
      },
      {
        id: 'b', title: 'Workshop', resourceId: 'room-2', start: `${day(0)}T09:30`, end: `${day(0)}T12:00`
      },
      {
        id: 'c', title: 'Interview', resourceId: 'room-3', start: `${day(0)}T10:00`, end: `${day(0)}T10:45`
      },
      {
        id: 'd', title: 'All hands', resourceId: 'room-1', start: `${day(0)}T14:00`, end: `${day(0)}T15:00`
      }
    ]}
  />
)
```

## Resources

```tsx
<CScheduler
  view="resource"
  resources={[
    { id: 'room-1', label: 'Room 1' },
    { id: 'room-2', label: 'Room 2', color: '#2eb85c' },
  ]}
  events={events} // events reference resources via resourceId
/>
```

A resource `color` becomes the default color for its events — an event's own
`color` still wins. Events without a `resourceId` are not shown in this view.

## Virtualization

Past 12 resources the columns render through a horizontal virtualizer: only
the visible window plus a small overscan exists in the DOM, the header and
all-day rows scroll in sync, and the time axis stays pinned. Column width is
controlled by `resourceColumnWidth` (default `160`).
