# CoreUI + React + React Router

> Learn how to use CoreUI for React.js components in a React Router framework mode project.

This guide walks you through adding CoreUI for React.js to an application built with React Router in framework mode.

## Create a project

Scaffold a new React Router application with the official command and answer the prompts.

```sh
npx create-react-router@latest my-app
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

Update `app/root.tsx` so the stylesheet loads for every route — add the import next to the template's `app.css`.

```tsx tab={"label":"CoreUI"}
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import '@coreui/coreui/dist/css/coreui.min.css'
import './app.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
```

```tsx tab={"label":"CoreUI PRO"}
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import './app.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
```

## Use components

Render your first CoreUI component in a route module, for example `app/routes/home.tsx`.

```jsx tab={"label":"CoreUI"}
import { CButton } from '@coreui/react'

export default function Home() {
  return <CButton theme="primary">Primary button</CButton>
}
```

```jsx tab={"label":"CoreUI PRO"}
import { CButton } from '@coreui/react-pro'

export default function Home() {
  return <CButton theme="primary">Primary button</CButton>
}
```

Start the development server and open the URL it prints to see the button rendered with CoreUI's styles.

```sh
npm run dev
```
