import { createFileRoute } from "@tanstack/react-router"

import { Logo } from "features/shared/components/logo"
import { Button } from "ui"

export const Route = createFileRoute("/_app/")({
  component: () => <Dashboard />
})

const Dashboard = () => {
  return (
    <>
      <div>
        <h1>Canvas</h1>
        <Logo className='size-10' />
      </div>

      <div>
        <h1>Module Panel</h1>

        <Button>Add Module</Button>
      </div>
    </>
  )
}
