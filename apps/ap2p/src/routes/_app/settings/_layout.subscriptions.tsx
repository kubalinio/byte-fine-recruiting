import { createFileRoute } from "@tanstack/react-router"

import { WorkInProgress } from "features/shared/components/work-in-progress"

export const Route = createFileRoute("/_app/settings/_layout/subscriptions")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className='flex-1'>
      <WorkInProgress />
    </div>
  )
}
