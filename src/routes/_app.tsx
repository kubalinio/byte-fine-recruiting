import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_app")({
  component: () => <AppLayout />
})

const AppLayout = () => {
  return (
    <main className='3xl:h-screen container grid grid-cols-2 items-center justify-center gap-x-8 py-8'>
      <Outlet />
    </main>
  )
}
