import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context }) => {
    if (context.auth.accessToken) {
      throw redirect({
        to: "/"
      })
    }
  },
  component: () => <AuthLayout />
})

const AuthLayout = () => {
  return (
    <main className='grid h-screen grid-cols-12 items-center justify-center'>
      <Outlet />
    </main>
  )
}
