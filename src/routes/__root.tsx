import {
  createRootRoute,
  Outlet,
  ScrollRestoration
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

const enableTanstackRouterDevtools = import.meta.env.DEV

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />

      <Outlet />

      {enableTanstackRouterDevtools && (
        <TanStackRouterDevtools position='top-left' />
      )}
    </>
  )
})
