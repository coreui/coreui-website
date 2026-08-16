# Creating Events

> Create events by dragging across empty slots — or entirely from the keyboard.

Press on an empty slot and drag to select a range — releasing creates an
event and emits `eventChange` with `action: 'create'`. In the month view the
same gesture spans days and creates an all-day event.

```html
<div id="schedulerCreate"></div><p id="schedulerCreateLog" class="mt-2 mb-0 text-body-secondary"></p>
```

```js
const pad = n => String(n).padStart(2, '0')
const day = offset => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

const element = document.getElementById('schedulerCreate')
const log = document.getElementById('schedulerCreateLog')

new coreui.Scheduler(element, {
  dayStartHour: 8,
  dayEndHour: 18,
  snap: 15,
  events: [
    {
      id: 'busy', title: 'Busy', start: `${day(1)}T10:00`, end: `${day(1)}T11:00`
    }
  ]
})

element.addEventListener('eventChange.coreui.scheduler', event => {
  if (event.action === 'create') {
    log.textContent = `Created: ${event.event.start} → ${event.event.end}`
  }
})
```

Set `selectable: false` to turn range selection (and click selection) off.

## From the keyboard

The time grid is keyboard-navigable: <kbd>Tab</kbd> into it, move between
slots with the arrow keys, press <kbd>Enter</kbd> to anchor a selection,
extend it with <kbd>↑</kbd>/<kbd>↓</kbd> (by `snap`) and
<kbd>←</kbd>/<kbd>→</kbd> (by day), then <kbd>Enter</kbd> to create —
or <kbd>Escape</kbd> to cancel.
