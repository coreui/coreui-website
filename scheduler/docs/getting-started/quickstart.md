# Scheduler Quickstart

> Create your first scheduler: a container element, an events array, and one constructor call.

A scheduler needs a container element and an array of events. Dates are ISO
8601 strings — with or without an explicit UTC offset:

```html
<div id="schedulerDayWeek"></div>
```

```js
const pad = n => String(n).padStart(2, '0')
const day = offset => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

new coreui.Scheduler(document.getElementById('schedulerDayWeek'), {
  view: 'week',
  dayStartHour: 8,
  dayEndHour: 18,
  events: [
    {
      id: 'kickoff', title: 'Kickoff', start: `${day(0)}T09:00`, end: `${day(0)}T10:00`
    },
    {
      id: 'design', title: 'Design review', start: `${day(1)}T10:00`, end: `${day(1)}T11:30`, color: '#2eb85c'
    },
    {
      id: 'pairing', title: 'Pairing', start: `${day(1)}T10:30`, end: `${day(1)}T12:00`
    },
    {
      id: 'demo', title: 'Sprint demo', start: `${day(3)}T14:00`, end: `${day(3)}T15:00`
    }
  ]
})
```

## Reacting to changes

The scheduler owns its state after initialization. Every change — drag,
resize, create, delete, repeat-rule edit — emits a namespaced DOM event with
the changed event and a `revert` callback:

```js
element.addEventListener('eventChange.coreui.scheduler', event => {
  console.log(event.action, event.event)
  // persist to your API; call event.revert() if the server rejects it
})
```

See [Options & events](https://coreui.io/scheduler/docs/api/options/) for the full surface.

## Time zones

Pass an IANA zone to pin the scheduler to it; otherwise the browser's zone is
used. All wall-clock math — including DST transitions — happens in that zone:

```js
new coreui.Scheduler(element, { timeZone: 'Europe/Warsaw', events })
```
