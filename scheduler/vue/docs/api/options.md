# Vue Scheduler Props & Events

> The full CScheduler props, emitted events, and the template-ref API.

## Props

```vue
<CScheduler v-bind="props" />
```

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `agendaDays` | `number` | `14` | Days shown (and stepped) by the agenda view. |
| `businessHours` | `object \| null` | `null` | `{ daysOfWeek?, startHour, endHour, enforce? }` — shades non-working time; `enforce: true` also rejects operations outside it. |
| `dataSource` | `object \| null` | `null` | `{ getEvents(start, end), persistEvents? }` — [remote data](https://coreui.io/scheduler/vue/docs/features/remote-data/). |
| `date` | `string \| Date \| null` | today | Anchor date of the visible range. |
| `dayStartHour` | `number` | `0` | First visible hour of the time grid. |
| `dayEndHour` | `number` | `24` | Hour the time grid ends at (exclusive). |
| `events` | `array` | `[]` | The events — see the [event model](https://coreui.io/scheduler/vue/docs/api/event-model/). |
| `eventOverlap` | `boolean` | `true` | `false` rejects operations that would collide. |
| `expandToFit` | `boolean` | `false` | Widen events over adjacent free space. |
| `firstDayOfWeek` | `number` | `1` | ISO weekday the week starts on. |
| `hourHeight` | `number` | `48` | Pixels per hour in time-grid views. |
| `labels` | `object` | `{}` | Overrides for the [label set](https://coreui.io/scheduler/vue/docs/customization/localization/). |
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

## Events

| Event | Payload | Fires on |
| --- | --- | --- |
| `dateChange` | `date` | Navigation (prev/next/today, more-link jumps). |
| `eventChange` | `{ action, event, occurrence, revert, scope }` | Create, move, resize, update, delete. |
| `selectionChange` | `selection` | Click selection changes. |
| `viewChange` | `view` | View switch. |

## Template-ref API

The component exposes the imperative surface (`CSchedulerRef`) on its
template ref:

| Method | Description |
| --- | --- |
| `getEvents()` | Current events array (post-edits). |
| `getSelection()` | Selected occurrence keys. |
| `getVisibleRange()` | The visible window as `{ start, end }` ISO strings. |
| `navigate(direction)` | `'prev'`, `'next'` or `'today'`. |
| `setDate(date)` | Move the anchor date. |
| `setEvents(events)` | Replace the events. |
| `setView(view)` | Switch the view. |

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { CScheduler, type CSchedulerRef } from '@coreui/vue-scheduler'

const scheduler = ref<CSchedulerRef | null>(null)
</script>

<template>
  <CScheduler ref="scheduler" :events="events" />
  <button @click="scheduler?.navigate('today')">Today</button>
</template>
```
