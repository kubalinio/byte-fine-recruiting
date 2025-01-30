import { Outlet } from "@tanstack/react-router"

const Layout = () => {
  return (
    <main className=''>
      <Outlet />
    </main>
  )
}

export { Layout }
