# Business Hours & Now Indicator

> Shade non-working hours and days, and mark the current time in today's column.

`businessHours` shades everything outside the given hours — and whole days
not listed in `daysOfWeek` (ISO weekday numbers, Monday = 1). By default the
shading is visual only.

```html
<script setup lang="ts">
import { CScheduler } from '@coreui/vue-scheduler'

const pad = (n: number) => String(n).padStart(2, '0')
const day = (offset: number) => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

const events = [
  { id: 'kickoff', title: 'Kickoff', start: `${day(0)}T09:00`, end: `${day(0)}T10:00` },
  { id: 'late', title: 'After hours deploy', start: `${day(3)}T19:00`, end: `${day(3)}T20:00`, color: '#e55353' }
]
</script>

<template>
  <CScheduler
    :business-hours="{ daysOfWeek: [1, 2, 3, 4, 5], startHour: 9, endHour: 17 }"
    :day-start-hour="6"
    :day-end-hour="22"
    :events="events"
  />
</template>
```

## Enforcing business hours

Add `enforce: true` to reject moves, resizes and creations that would land
outside the working hours or on a non-working day — the operation simply
does not commit, and the rejection is announced through the live region
(localizable `outsideBusinessHours` label). All-day events are exempt.

```vue
<CScheduler
  :business-hours="{
    daysOfWeek: [1, 2, 3, 4, 5],
    startHour: 9,
    endHour: 17,
    enforce: true,
  }"
/>
```

## Now indicator

Whenever today is visible in a time-grid view, a line marks the current time
in its column and follows it minute by minute. Style it through the
`--cui-scheduler-now-color` token.
