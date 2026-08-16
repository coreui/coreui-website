# Agenda View

> A chronological list of upcoming events grouped by day.

The `agenda` view lists events chronologically, grouped by day, over a
rolling window of `agendaDays` days (default `14`) from the anchor date.
Days without events are hidden.

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
  { id: 'standup', title: 'Standup', start: `${day(0)}T09:00`, end: `${day(0)}T09:15`, rrule: 'FREQ=DAILY;COUNT=10' },
  { id: 'design', title: 'Design review', start: `${day(1)}T10:00`, end: `${day(1)}T11:30`, color: '#2eb85c' },
  { id: 'conf', title: 'CoreUI Conf', start: day(4), end: day(6), allDay: true },
  { id: 'planning', title: 'Planning', start: `${day(7)}T10:00`, end: `${day(7)}T12:00` }
]
</script>

<template>
  <CScheduler view="agenda" :agenda-days="14" :events="events" />
</template>
```

Rows are selectable and respond to <kbd>Delete</kbd>; the prev/next buttons
step by the same `agendaDays` window. A range with no events shows the
localizable `agendaEmpty` placeholder instead of an empty list.
