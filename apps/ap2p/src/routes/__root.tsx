import {
  createRootRouteWithContext,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import type { AuthContextValue } from "@ap2p/auth";

const enableTanstackRouterDevtools = import.meta.env.DEV;

export interface MyRouterContext {
  auth: AuthContextValue;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
      {enableTanstackRouterDevtools && <TanStackRouterDevtools />}
    </>
  ),
});
