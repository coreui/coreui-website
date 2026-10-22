# Vue Scheduler Localization

> Localize every label and announcement, and let Intl format the dates.

Dates, times and ranges are formatted with the `Intl` API — pass `locale` to
override the browser default. Every string the component renders or announces
comes from the `labels` map.

The grid is Gregorian. When the calendar of a locale has other months (Persian,
Islamic, Hebrew or Chinese, as the default of the locale or asked for with
`-u-ca-`), titles, column headers and day numbers are written in the Gregorian
calendar, in the language and digits of the locale. A locale on the Buddhist,
Japanese or Republic of China calendar (`th-TH`, `ja-JP-u-ca-japanese`) keeps
its own year numbering. The hour axis is a 24-hour clock written the way the
locale writes one (`09:00`, `09.00` in `fi-FI`, `۰۹:۰۰` in `fa-IR`), and the
more link count uses the digits of the locale. Screen reader announcements name
the date with its weekday and year ("Wednesday, August 12, 2026") and the time
in the locale's own time format, so `en-US` hears `09:00 AM`.

With `locale` set, the root gets `lang` with the language Intl resolves it to
(`fa-IR-u-ca-persian` gives `fa-IR`), which tells assistive technology what
language the scheduler is in. It replaces a `lang` you put on the scheduler
element and covers `labels` and event titles too, so pass `labels` in the same
language as `locale`. Without `locale`, your own `lang` stays, and with neither
the scheduler follows the page.

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
