# Scheduler Styling & Theming

> Every visual knob is a --cui-scheduler-* CSS variable resolving through CoreUI semantic tokens.

The Scheduler is styled entirely through CSS custom properties declared on
`.scheduler`. Each resolves through a CoreUI semantic variable with a
built-in fallback, so light/dark theming via `data-coreui-theme` works
automatically — with or without the CoreUI stylesheet.

## Event colors

Set colors per event or per resource in data — no CSS required:

```tsx
<CScheduler
  events={[{ id: 'a', title: 'Design', color: '#2eb85c' /* … */ }]}
  resources={[{ id: 'room-2', label: 'Room 2', color: '#e55353' }]}
/>
```

An event's `color` wins over its resource's `color`; both override the
`--cui-scheduler-event-bg` token for that element only.

## CSS variables

| Variable | Purpose |
| --- | --- |
| `--cui-scheduler-bg`, `--cui-scheduler-color` | Component surface and text. |
| `--cui-scheduler-border-color`, `--cui-scheduler-border-radius` | Frame and radius. |
| `--cui-scheduler-hour-line-color` | Hour gridlines. |
| `--cui-scheduler-event-bg`, `--cui-scheduler-event-color`, `--cui-scheduler-event-border-radius` | Event boxes and chips. |
| `--cui-scheduler-event-selected-ring` | Selection ring. |
| `--cui-scheduler-focus-ring-width`, `--cui-scheduler-focus-ring-color` | Keyboard focus ring. |
| `--cui-scheduler-drag-preview-bg`, `--cui-scheduler-drag-preview-border` | Drag preview. |
| `--cui-scheduler-selection-bg` | Range-selection overlay. |
| `--cui-scheduler-non-working-bg` | Business-hours shading. |
| `--cui-scheduler-now-color` | Now indicator. |
| `--cui-scheduler-all-day-bg` | All-day lane and outside-month days. |
| `--cui-scheduler-header-bg` | Header rows. |
| `--cui-scheduler-muted-color` | Secondary text (axis, labels). |
| `--cui-scheduler-gutter-width` | Time-axis width. |
| `--cui-scheduler-max-height` | Scroll container height. |
| `--cui-scheduler-button-hover-bg`, `--cui-scheduler-button-active-bg`, `--cui-scheduler-button-active-color` | Toolbar buttons. |

```css
.my-calendar .scheduler {
  --cui-scheduler-event-bg: #2eb85c;
  --cui-scheduler-max-height: 50rem;
}
```

## SASS variables

Every CSS variable above has a `$scheduler-*` Sass counterpart declared
`!default`, so you can retheme at build time:

```scss
@use "@coreui/scheduler/scss/scheduler" with (
  $scheduler-event-bg: var(--cui-info),
  $scheduler-max-height: 50rem
);
```
