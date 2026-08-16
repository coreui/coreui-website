# Vue Scheduler Localization

> Localize every label and announcement, and let Intl format the dates.

Dates, times and ranges are formatted with the `Intl` API — pass `locale` to
override the browser default. Every string the component renders or announces
comes from the `labels` map.

```html
<script setup lang="ts">
import { CScheduler } from '@coreui/vue-scheduler'
import { pl } from '@coreui/vue-scheduler/locales'

const pad = (n: number) => String(n).padStart(2, '0')
const day = (offset: number) => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

const events = [
  { id: 'spotkanie', title: 'Spotkanie zespołu', start: `${day(1)}T10:00`, end: `${day(1)}T11:00` }
]
</script>

<template>
  <CScheduler
    :day-start-hour="8"
    :day-end-hour="17"
    locale="pl-PL"
    :labels="pl"
    :events="events"
  />
</template>
```

## Locale packs

Ready-made translations of the full label set ship as a tree-shakeable
subpath — currently `de`, `es`, `fr`, `it`, `nl`, `pl`, `pt`:

```vue
<script setup lang="ts">
import { CScheduler } from '@coreui/vue-scheduler'
import { pl } from '@coreui/vue-scheduler/locales'
</script>

<template>
  <CScheduler locale="pl-PL" :labels="pl" :events="events" />
</template>
```

Each pack covers every key below; anything you pass in `labels` still wins
over the pack, so partial overrides compose naturally.

## Labels

Messages support `{token}` interpolation. The full set with defaults:

| Key | Default |
| --- | --- |
| `agenda` | `Agenda` |
| `agendaEmpty` | `No events in this range` |
| `allDay` | `All-day` |
| `cancel` | `Cancel` |
| `colorLabel` | `Color` |
| `day` | `Day` |
| `deleteEvent` | `Delete` |
| `editEvent` | `Edit event` |
| `editScope` | `Applies to` |
| `endLabel` | `End` |
| `eventCancelled` | `Cancelled` |
| `eventCreated` | `Created {title}, {date} {start} to {end}` |
| `eventDeleted` | `{title} deleted` |
| `eventGrabbed` | `{title} grabbed. Use the arrow keys to move, Enter to confirm, Escape to cancel` |
| `eventMoved` | `{title} moved to {date} {start}` |
| `eventResized` | `{title} now lasts from {start} to {end}` |
| `eventUpdated` | `{title} updated` |
| `loadFailed` | `Failed to load events` |
| `month` | `Month` |
| `more` | `+{count} more` |
| `newEvent` | `New event` |
| `next` | `Next` |
| `outsideBusinessHours` | `Outside business hours` |
| `overlapBlocked` | `That time is already occupied` |
| `prev` | `Previous` |
| `repeat` | `Repeat` |
| `repeatDaily` | `Daily` |
| `repeatMonthly` | `Monthly` |
| `repeatNone` | `Does not repeat` |
| `repeatWeekly` | `Weekly` |
| `resource` | `Resources` |
| `save` | `Save` |
| `saveFailed` | `The change could not be saved` |
| `scopeAll` | `All events` |
| `scopeFuture` | `This and following events` |
| `scopeOccurrence` | `This event` |
| `startLabel` | `Start` |
| `timeline` | `Timeline` |
| `titleLabel` | `Title` |
| `today` | `Today` |
| `views` | `Views` |
| `week` | `Week` |
