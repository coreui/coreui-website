# Creating Events

> Create events by dragging across empty slots — or entirely from the keyboard.

Press on an empty slot and drag to select a range — releasing creates an
event and emits `eventChange` with `action: 'create'`. In the month view
the same gesture spans days and creates an all-day event.

```html
<script setup lang="ts">
import { CScheduler, type EventChangePayload } from '@coreui/vue-scheduler'
import { ref } from 'vue'

const pad = (n: number) => String(n).padStart(2, '0')
const day = (offset: number) => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

const events = [
  { id: 'busy', title: 'Busy', start: `${day(1)}T10:00`, end: `${day(1)}T11:00` }
]

const log = ref('')

const onEventChange = (change: EventChangePayload) => {
  if (change.action === 'create') {
    log.value = `Created: ${change.event.start} → ${change.event.end}`
  }
}
</script>

<template>
  <CScheduler
    :day-start-hour="8"
    :day-end-hour="18"
    :snap="15"
    :events="events"
    @event-change="onEventChange"
  />
  <p class="mt-2 mb-0 text-body-secondary">{{ log }}</p>
</template>
```

Set `:selectable="false"` to turn range selection (and click selection) off.

## From the keyboard

The time grid is keyboard-navigable: <kbd>Tab</kbd> into it, move between
slots with the arrow keys, press <kbd>Enter</kbd> to anchor a selection,
extend it with <kbd>↑</kbd>/<kbd>↓</kbd> (by `snap`) and
<kbd>←</kbd>/<kbd>→</kbd> (by day), then <kbd>Enter</kbd> to create —
or <kbd>Escape</kbd> to cancel.
