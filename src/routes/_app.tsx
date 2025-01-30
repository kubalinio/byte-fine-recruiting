import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_app")({
  component: () => <AppLayout />
})

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
