import { createFileRoute } from "@tanstack/react-router"

import ModuleCanvas from "features/app/module-canvas/module-canvas"
import ModuleEditor from "features/app/module-editor/module-editor"

export const Route = createFileRoute("/_app/")({
  component: () => <Dashboard />
})

const Dashboard = () => {
  return (
    <>
      <ModuleCanvas />

      <ModuleEditor />
    </>
  )
}
