# Angular Scheduler Remote Data

> Load events on demand as users navigate, and persist every change back to your server.

Instead of passing `events` up front, hand the scheduler a `dataSource`:
`getEvents(start, end)` runs whenever the visible range changes, and
`persistEvents` runs after every committed change.

```html
<c-scheduler [dataSource]="dataSource" />
```

```ts
readonly dataSource: SchedulerDataSource = {
  getEvents: async (start, end) =>
    (await fetch(`/api/events?from=${start}&to=${end}`)).json(),

  persistEvents: async ({ action, event, occurrence, scope }) => {
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ action, event, occurrence, scope }),
    })
    return { success: response.ok } // success: false reverts the change
  },
}
```

Keep the `dataSource` object identity stable across renders (a readonly class
field) — a new object clears the fetched-range cache and refetches.

## Behavior

- `getEvents` receives the visible window as ISO strings (end exclusive) and
  fires on mount and whenever navigation, view switches or prop changes move
  the range — never twice for the same range. A spinner
  (`data-part="loading"`) shows while a request is in flight, and stale
  responses from superseded requests are discarded.
- A failed load keeps the current events and announces the localizable
  `loadFailed` message.
- `persistEvents` gets the same payload as the `eventChange` output (minus `revert`).
  Returning `{ success: false }` — or throwing — reverts the change and
  announces `saveFailed`. `eventChange` still fires first, so analytics
  and optimistic UI keep working.
- The `getVisibleRange()` method on the component instance returns the
  current window (`{ start, end }`) if you prefer wiring fetches yourself
  through `dateChange`/`viewChange`.

## Manual wiring

Everything above is also possible without `dataSource` — listen to
`dateChange`, fetch, call `setEvents()` on the component instance
(`viewChild`), and call `revert()` from your `eventChange` handler when the
server rejects a change. `dataSource` is the packaged version of exactly
that pattern.
