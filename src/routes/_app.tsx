import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_app")({
  component: () => <AppLayout />
})

const AppLayout = () => {
  return (
    <main className='flex h-screen items-center justify-center gap-x-8 py-8'>
      <Outlet />
    </main>
  )
}
