# React Scheduler Props & Callbacks

> The full CScheduler props, change callbacks, and the imperative ref API.

## Props

```tsx
<CScheduler {...props} />
```

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `agendaDays` | `number` | `14` | Days shown (and stepped) by the agenda view. |
| `businessHours` | `object \| null` | `null` | `{ daysOfWeek?, startHour, endHour, enforce? }` — shades non-working time; `enforce: true` also rejects operations outside it. |
| `dataSource` | `object \| null` | `null` | `{ getEvents(start, end), persistEvents? }` — [remote data](https://coreui.io/scheduler/react/docs/features/remote-data/). |
| `date` | `string \| Date \| null` | today | Anchor date of the visible range. |
| `dayStartHour` | `number` | `0` | First visible hour of the time grid. |
| `dayEndHour` | `number` | `24` | Hour the time grid ends at (exclusive). |
| `events` | `array` | `[]` | The events — see the [event model](https://coreui.io/scheduler/react/docs/api/event-model/). |
| `eventOverlap` | `boolean` | `true` | `false` rejects operations that would collide. |
| `expandToFit` | `boolean` | `false` | Widen events over adjacent free space. |
| `firstDayOfWeek` | `number` | `1` | ISO weekday the week starts on. |
| `hourHeight` | `number` | `48` | Pixels per hour in time-grid views. |
| `labels` | `object` | `{}` | Overrides for the [label set](https://coreui.io/scheduler/react/docs/customization/localization/). |
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
| `view` | `string` | `'week'` | `'day'`, `'week'`, `'month'`, `'agenda'`, `'resource'` or `'timeline'`. |

## Callbacks

| Prop | Payload | Fires on |
| --- | --- | --- |
| `onDateChange` | `date` | Navigation (prev/next/today, more-link jumps). |
| `onEventChange` | `{ action, event, occurrence, revert, scope }` | Create, move, resize, update, delete. |
| `onSelectionChange` | `selection` | Click selection changes. |
| `onViewChange` | `view` | View switch. |

## Ref API

`CScheduler` forwards a ref with the imperative surface (`CSchedulerRef`):

| Method | Description |
| --- | --- |
| `getEvents()` | Current events array (post-edits). |
| `getSelection()` | Selected occurrence keys. |
| `getVisibleRange()` | The visible window as `{ start, end }` ISO strings. |
| `navigate(direction)` | `'prev'`, `'next'` or `'today'`. |
| `setDate(date)` | Move the anchor date. |
| `setEvents(events)` | Replace the events. |
| `setView(view)` | Switch the view. |

```tsx
const ref = useRef<CSchedulerRef>(null)

<CScheduler ref={ref} events={events} />
<button onClick={() => ref.current?.navigate('today')}>Today</button>
```
