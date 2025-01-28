import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

import { AppHeader } from "features/app/layouts/app-header"
import { AppSidebar } from "features/app/layouts/app-sidebar"

import { SidebarInset, SidebarProvider } from "@ap2p/ui"

export const Route = createFileRoute("/_app")({
  beforeLoad: ({ context }) => {
    if (!context.auth.accessToken) {
      throw redirect({
        to: "/sign-in"
      })
    }
  },
  component: () => <AppLayout />
})

const AppLayout = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />

      <SidebarInset>
        <AppHeader />

        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
