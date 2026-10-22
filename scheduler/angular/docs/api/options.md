# Angular Scheduler Inputs & Outputs

> The full c-scheduler inputs, outputs, and the component instance API.

## Inputs

```html
<c-scheduler [events]="events" defaultView="week" />
```

| Input | Type | Default | Description |
| --- | --- | --- | --- |
| `agendaDays` | `number` | `14` | Days shown (and stepped) by the agenda view. |
| `businessHours` | `object \| null` | `null` | `{ daysOfWeek?, startHour, endHour, enforce? }` — shades non-working time; `enforce: true` also rejects operations outside it. |
| `dataSource` | `object \| null` | `null` | `{ getEvents(start, end), persistEvents? }` — [remote data](https://coreui.io/scheduler/angular/docs/features/remote-data/). |
| `date` | `string \| Date \| null` | — | Controlled date of the visible range; unset or `null` leaves it uncontrolled. The scheduler shows it and asks for a new one through `[(date)]`. |
| `dayStartHour` | `number` | `0` | First visible hour of the time grid. |
| `dayEndHour` | `number` | `24` | Hour the time grid ends at (exclusive). |
| `defaultDate` | `string \| Date \| null` | today | Start date when `date` is not set; the scheduler then navigates on its own. |
| `defaultView` | `string` | `'week'` | Start view when `view` is not set. |
| `events` | `array` | `[]` | The events — see the [event model](https://coreui.io/scheduler/angular/docs/api/event-model/). |
| `eventOverlap` | `boolean` | `true` | `false` rejects operations that would collide. |
| `expandToFit` | `boolean` | `false` | Widen events over adjacent free space. |
| `firstDayOfWeek` | `number` | `1` | ISO weekday the week starts on. |
| `hourHeight` | `number` | `48` | Pixels per hour in time-grid views. |
| `labels` | `object` | `{}` | Overrides for the [label set](https://coreui.io/scheduler/angular/docs/customization/localization/). |
| `locale` | `string` | browser | BCP 47 locale for date/time formatting. |
| `monthMaxEventsPerDay` | `number` | `4` | Chips per month cell before "+N more". |
| `recurringEditScope` | `string` | `'occurrence'` | Initial scope for recurring edits: `'occurrence'`, `'future'` or `'all'`. |
| `resourceColumnWidth` | `number` | `160` | Column width when the resource view virtualizes. |
| `resources` | `array` | `[]` | `{ id, label?, color? }` — columns of the resource view. |
| `selectable` | `boolean` | `true` | Allow range-select creation and click selection. |
| `snap` | `number` | `15` | Drag/resize/create step in minutes. |
| `timeZone` | `string` | browser | IANA zone all wall-clock math happens in. |
| `timelineDays` | `number` | `7` | Days covered by the timeline view. |
| `timelineHourWidth` | `number` | `48` | Timeline horizontal zoom in pixels per hour. |
| `view` | `string` | — | Controlled view: `'day'`, `'week'`, `'month'`, `'agenda'`, `'resource'` or `'timeline'`. The scheduler asks for a new one through `[(view)]`. |

## Outputs

| Output | Payload | Fires on |
| --- | --- | --- |
| `dateChange` | `date` | Navigation (prev/next/today, more-link jumps, `setDate()`). With a controlled `date` the scheduler moves once the new date comes back. |
| `eventChange` | `{ action, event, occurrence, revert, scope }` | Create, move, resize, update, delete. |
| `selectionChange` | `selection` | Click selection changes. |
| `viewChange` | `view` | View switch (toolbar, more-link jumps, `setView()`). With a controlled `view` the scheduler switches once the new view comes back. |

## Component instance API

Grab the component with `viewChild` for the imperative surface:

| Method | Description |
| --- | --- |
| `getEvents()` | Current events array (post-edits). |
| `getSelection()` | Selected occurrence keys. |
| `getVisibleRange()` | The visible window as `{ start, end }` ISO strings. |
| `navigate(direction)` | `'prev'`, `'next'` or `'today'`; with a controlled `date`, asks through `dateChange`. |
| `setDate(date)` | Move the anchor date; with a controlled `date`, ask for it as navigation does. |
| `setEvents(events)` | Replace the events. |
| `setView(view)` | Switch the view; with a controlled `view`, asks through `viewChange`. |

```ts
readonly scheduler = viewChild.required(SchedulerComponent)

goToday(): void {
  this.scheduler().navigate('today')
}
```
