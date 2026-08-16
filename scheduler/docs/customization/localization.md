# Scheduler Localization

> Localize every label and announcement, and let Intl format the dates.

Dates, times and ranges are formatted with the `Intl` API — pass `locale` to
override the browser default. Every string the component renders or announces
comes from the `labels` map.

```html
<div id="schedulerLocalization"></div>
```

```js
const pad = n => String(n).padStart(2, '0')
const day = offset => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

new coreui.Scheduler(document.getElementById('schedulerLocalization'), {
  dayStartHour: 8,
  dayEndHour: 17,
  locale: 'pl-PL',
  labels: {
    allDay: 'Cały dzień',
    day: 'Dzień',
    month: 'Miesiąc',
    agenda: 'Agenda',
    today: 'Dziś',
    week: 'Tydzień',
    newEvent: 'Nowe wydarzenie'
  },
  events: [
    {
      id: 'spotkanie', title: 'Spotkanie zespołu', start: `${day(1)}T10:00`, end: `${day(1)}T11:00`
    }
  ]
})
```

## Locale packs

Ready-made translations of the full label set ship as a tree-shakeable
subpath — currently `de`, `es`, `fr`, `it`, `nl`, `pl`, `pt`:

```js
import { Scheduler } from '@coreui/scheduler'
import { pl } from '@coreui/scheduler/locales'

new Scheduler(element, { locale: 'pl-PL', labels: pl })
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
