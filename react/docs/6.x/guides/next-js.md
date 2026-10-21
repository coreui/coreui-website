# CoreUI + React + Next.js

> Learn how to use CoreUI for React.js components in your Next.js App Router project.

This guide walks you through adding CoreUI for React.js to a Next.js project using the App Router.

## Create a project

Scaffold a new Next.js application with the official command and answer the prompts.

```sh
npx create-next-app@latest my-app
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

Update `app/layout.tsx` so the stylesheet loads for every route.

```tsx tab={"label":"CoreUI"}
import type { Metadata } from 'next'
import '@coreui/coreui/dist/css/coreui.min.css'

export const metadata: Metadata = {
  title: 'My App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

```tsx tab={"label":"CoreUI PRO"}
import type { Metadata } from 'next'
import '@coreui/coreui-pro/dist/css/coreui.min.css'

export const metadata: Metadata = {
  title: 'My App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

## Use components

CoreUI React components manage state and listen to browser events, so they are client components. Render them in a file that starts with the `'use client'` directive, or inside an existing client boundary — importing them directly into a server component won't work.

```jsx tab={"label":"CoreUI"}
'use client'

import { CButton } from '@coreui/react'

export default function Page() {
  return <CButton theme="primary">Primary button</CButton>
}
```

```jsx tab={"label":"CoreUI PRO"}
'use client'

import { CButton } from '@coreui/react-pro'

export default function Page() {
  return <CButton theme="primary">Primary button</CButton>
}
```

Start the development server and open `http://localhost:3000` to see the button rendered with CoreUI's styles.

```sh
npm run dev
```

> You don't have to mark every page with 'use client'. A common pattern is to keep pages as server components and move the CoreUI markup into small client components that the page imports.
