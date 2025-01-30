import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/")({
  beforeLoad: () => {
    document.title = "Canva Editor - Byte Fine"
  },
  component: () => <Dashboard />
})

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
