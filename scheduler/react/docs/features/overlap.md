# Overlap Control

> Reject drops, resizes and creations that would collide with another event.

With `eventOverlap={false}` a move, resize or creation whose time range
intersects another event is rejected: the operation simply does not commit,
and the rejection is announced to assistive technologies. In the resource
view only events of the same resource collide.

```html
import { CScheduler } from '@coreui/react-scheduler'

const pad = (n: number) => String(n).padStart(2, '0')
const day = (offset: number) => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export const SchedulerOverlapExample = () => (
  <CScheduler
    dayStartHour={8}
    dayEndHour={16}
    eventOverlap={false}
    events={[
      {
        id: 'a', title: 'Fixed meeting', start: `${day(1)}T09:00`, end: `${day(1)}T10:30`
      },
      {
        id: 'b', title: 'Try to drop me on it', start: `${day(1)}T12:00`, end: `${day(1)}T13:00`, color: '#f9b115'
      }
    ]}
  />
)
```

All-day events never participate in collision checks.
