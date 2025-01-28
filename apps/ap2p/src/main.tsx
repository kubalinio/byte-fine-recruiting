import "./assets/styles/main.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {
  createRouter,
  ErrorComponent,
  RouterProvider
} from "@tanstack/react-router"

import { useAuth } from "@ap2p/auth"
import { Toaster } from "@ap2p/ui"

import { AppProviders } from "./providers/app-providers"
import { routeTree } from "./routeTree.gen"
import { enableMocking } from "./setupMSW"

// import { logger } from './integrations/logger';

if (import.meta.env.DEV) {
  import.meta.glob("./wdyr.ts", { eager: true })
}
const openReactQueryDevtools = import.meta.env.DEV

// if (import.meta.env.VITE_SENTRY_DSN) {
//   logger.init();
// }

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    auth: undefined!
  },
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

function InnerApp() {
  const auth = useAuth()
  return (
    <RouterProvider
      router={router}
      defaultPreload='intent'
      context={{ auth }}
    />
  )
}

function App() {
  return (
    <AppProviders>
      <InnerApp />

      <Toaster />

      {openReactQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
    </AppProviders>
  )
}

// Create root only once
let root: ReactDOM.Root | null = null

const initApp = async () => {
  if (import.meta.env.DEV) {
    await enableMocking()
  }

  const rootElement = document.getElementById("root")
  if (!rootElement) throw new Error("Root element not found")

  // Create root only if it hasn't been created yet
  if (!root) {
    root = ReactDOM.createRoot(rootElement)
  }

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

initApp()
