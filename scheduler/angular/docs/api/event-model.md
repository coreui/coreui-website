# Scheduler Event Model

> The SchedulerEvent shape: ISO dates, all-day flags, colors, and RFC 5545 recurrence.

## SchedulerEvent

| Property | Type | Description |
| --- | --- | --- |
| `id` | `string` | Stable identifier — required. |
| `title` | `string` | Rendered and announced name. |
| `start` | `string` | ISO 8601 start — `'2026-08-11T09:00'` (scheduler zone) or with an explicit offset. Date-only for all-day events. |
| `end` | `string` | ISO 8601 end, exclusive. |
| `allDay` | `boolean` | Renders in the all-day lane / as a date-spanning chip. |
| `color` | `string` | Any CSS color; overrides the resource color and the theme token. |
| `resourceId` | `string` | Routes the event to a resource-view column. |
| `rrule` | `string` | Raw RFC 5545 RRULE — `'FREQ=WEEKLY;INTERVAL=2;BYDAY=TH'`. |
| `exdates` | `string[]` | Wall-clock occurrence starts excluded from the series. |
| `meta` | `object` | Your own data — carried through untouched. |

```ts
{
  id: 'standup',
  title: 'Daily standup',
  start: '2026-08-10T09:00',
  end: '2026-08-10T09:15',
  rrule: 'FREQ=DAILY;COUNT=20',
  exdates: ['2026-08-14T09:00'],
  color: '#2eb85c',
  meta: { calendarId: 'team' },
}
```

The type is exported as `SchedulerEvent` from `@coreui/angular-scheduler`.

## Dates and zones

Strings without an offset are wall-clock times in the scheduler's
`timeZone`; strings with `Z` or an offset are absolute instants converted
into it. Whatever you pass in, `eventChange` payloads always carry ISO
strings with an explicit offset.

## Recurring series

A recurring event is ONE entry in `events`; its occurrences are expanded for
the visible range only. Edits detach, split or shift the series according to
the [edit scope](https://coreui.io/scheduler/angular/docs/features/recurrence/), and everything the scheduler does to
your data goes through `eventChange` — the arrays you get from
`getEvents()` are always plain, serializable objects.
