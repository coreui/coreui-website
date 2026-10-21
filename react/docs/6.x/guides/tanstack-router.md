# CoreUI + React + TanStack Router

> Learn how to use CoreUI for React.js components in a project built with TanStack Router.

This guide walks you through adding CoreUI for React.js to a React application built with TanStack Router.

## Create a project

Scaffold a new TanStack Router application with the official command and answer the prompts. It sets up a Vite project with file-based routing.

```sh
npx create-tsrouter-app@latest my-app
cd my-app
```

## Install CoreUI

Install the React components together with the CSS library that styles them.

```bash tab={"label":"CoreUI"}
npm install @coreui/react @coreui/coreui
```

```bash tab={"label":"CoreUI PRO"}
npm install @coreui/react-pro @coreui/coreui-pro
```

## Import styles

Update `src/routes/__root.tsx` so the stylesheet loads for every route.

```tsx tab={"label":"CoreUI"}
import { Outlet, createRootRoute } from '@tanstack/react-router'
import '@coreui/coreui/dist/css/coreui.min.css'

export const Route = createRootRoute({
  component: () => <Outlet />,
})
```

```tsx tab={"label":"CoreUI PRO"}
import { Outlet, createRootRoute } from '@tanstack/react-router'
import '@coreui/coreui-pro/dist/css/coreui.min.css'

export const Route = createRootRoute({
  component: () => <Outlet />,
})
```

## Use components

Render your first CoreUI component in a route, for example the index route in `src/routes/index.tsx`.

```jsx tab={"label":"CoreUI"}
import { createFileRoute } from '@tanstack/react-router'
import { CButton } from '@coreui/react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return <CButton theme="primary">Primary button</CButton>
}
```

```jsx tab={"label":"CoreUI PRO"}
import { createFileRoute } from '@tanstack/react-router'
import { CButton } from '@coreui/react-pro'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return <CButton theme="primary">Primary button</CButton>
}
```

Start the development server and open the URL it prints to see the button rendered with CoreUI's styles.

```sh
npm run dev
```
