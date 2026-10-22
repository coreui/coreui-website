# Vue Scheduler Quickstart

> Render your first scheduler: the CScheduler component and an events array.

A scheduler needs the `<CScheduler>` component and an array of events. Dates
are ISO 8601 strings — with or without an explicit UTC offset:

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
  { id: 'design', title: 'Design review', start: `${day(1)}T10:00`, end: `${day(1)}T11:30`, color: '#2eb85c' },
  { id: 'pairing', title: 'Pairing', start: `${day(1)}T10:30`, end: `${day(1)}T12:00` },
  { id: 'demo', title: 'Sprint demo', start: `${day(3)}T14:00`, end: `${day(3)}T15:00` }
]
</script>

<template>
  <CScheduler default-view="week" :day-start-hour="8" :day-end-hour="18" :events="events" />
</template>
```

## Reacting to changes

The scheduler owns its state after mounting. Every change — drag, resize,
create, delete, repeat-rule edit — emits `eventChange` with the changed
event and a `revert` callback:

```vue
<CScheduler
  :events="events"
  @event-change="({ action, event, revert }) => {
    console.log(action, event)
    // persist to your API; call revert() if the server rejects it
  }"
/>
```

See [Props & events](https://coreui.io/scheduler/vue/docs/api/options/) for the full surface.

## Date and view

Pass `default-date` and `default-view` to set where the scheduler starts; it then
navigates on its own. Pass `date` or `view` to control them: the scheduler shows
what you pass and asks for a change through `update:date` and `update:view`, so `v-model:date` and `v-model:view` work. A parent that keeps
the old value keeps the scheduler where it is.

```vue
<CScheduler v-model:date="date" :events="events" />
```

## Time zones

Pass an IANA zone to pin the scheduler to it; otherwise the browser's zone is
used. All wall-clock math — including DST transitions — happens in that zone:

```vue
<CScheduler time-zone="Europe/Warsaw" :events="events" />
```

## Server rendering

When the scheduler is rendered on the server, pass `timeZone` and `defaultDate`:
without them the server uses its own zone and day, the browser its own, and the
markup no longer matches when it hydrates. The now indicator and the events of a
`dataSource` appear once the scheduler mounts in the browser.

```vue
<CScheduler time-zone="Europe/Warsaw" default-date="2026-08-11" :events="events" />
```
