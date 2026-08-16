# Timeline View

> A horizontal resource timeline: one row per resource, bars across a continuous multi-day axis, overlaps stacked into lanes.

The `timeline` view turns the scheduler sideways: resources become rows and
time runs horizontally across a continuous multi-day axis — bars are not
split at midnight. Overlapping bars in a row stack into sub-lanes and the
row grows to fit.

```html
<div id="schedulerTimeline"></div>
```

```js
const pad = n => String(n).padStart(2, '0')
const day = offset => {
  const date = new Date()
  date.setDate(date.getDate() + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

new coreui.Scheduler(document.getElementById('schedulerTimeline'), {
  view: 'timeline',
  timelineDays: 5,
  timelineHourWidth: 40,
  resources: [
    { id: 'room-1', label: 'Room 1' },
    { id: 'room-2', label: 'Room 2', color: '#2eb85c' },
    { id: 'room-3', label: 'Room 3', color: '#e55353' }
  ],
  events: [
    {
      id: 'board', title: 'Board meeting', resourceId: 'room-1', start: `${day(0)}T09:00`, end: `${day(0)}T11:00`
    },
    {
      id: 'sprint', title: 'Sprint', resourceId: 'room-1', start: `${day(0)}T10:00`, end: `${day(1)}T16:00`
    },
    {
      id: 'workshop', title: 'Workshop', resourceId: 'room-2', start: `${day(1)}T09:00`, end: `${day(2)}T12:00`
    },
    {
      id: 'audit', title: 'Audit', resourceId: 'room-3', start: day(2), end: day(4), allDay: true
    }
  ]
})
```

## Configuration

| Option | Default | Description |
| --- | --- | --- |
| `timelineDays` | `7` | Days covered (and stepped by prev/next). |
| `timelineHourWidth` | `48` | Pixels per hour — the horizontal zoom. |

The resource label column width is the
`--cui-scheduler-timeline-label-width` token (default `10rem`).

## Interactions

- **Drag a bar** horizontally to move it in time (snapped), or into another
  row to reassign its resource.
- **Drag a bar edge** to resize; all-day bars snap to whole days.
- **Drag across empty space** in a row to create an event there.
- **Keyboard:** grab with <kbd>Enter</kbd>, move in time with
  <kbd>←</kbd>/<kbd>→</kbd>, between resources with
  <kbd>↑</kbd>/<kbd>↓</kbd>, confirm with <kbd>Enter</kbd>. <kbd>F2</kbd>
  opens the edit dialog. Creating by keyboard is currently available in the
  time-grid views only.
