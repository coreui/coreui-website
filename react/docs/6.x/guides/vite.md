# CoreUI + React + Vite

> Learn how to use CoreUI for React.js components in a React project built with Vite.

This guide walks you through adding CoreUI for React.js to a React application scaffolded with Vite.

## Create a project

Scaffold a new React application with Vite's official command. Use the `react-ts` template for TypeScript, or `react` for plain JavaScript.

```sh
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
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

Update `src/main.tsx` so the stylesheet loads before your app renders — the import replaces the template's `index.css`.

```tsx tab={"label":"CoreUI"}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@coreui/coreui/dist/css/coreui.min.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

```tsx tab={"label":"CoreUI PRO"}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## Use components

Render your first CoreUI component in `src/App.tsx`.

```jsx tab={"label":"CoreUI"}
import { CButton } from '@coreui/react'

function App() {
  return <CButton theme="primary">Primary button</CButton>
}

export default App
```

```jsx tab={"label":"CoreUI PRO"}
import { CButton } from '@coreui/react-pro'

function App() {
  return <CButton theme="primary">Primary button</CButton>
}

export default App
```

Start the development server and open the URL Vite prints (by default `http://localhost:5173`) to see the button rendered with CoreUI's styles.

```sh
npm run dev
```
