import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/")({
  beforeLoad: () => {
    document.title = "Dashboard - AP2P"
  },
  component: () => <Dashboard />
})

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>

      <div>
        <h2>Recent Transactions</h2>
      </div>
    </div>
  )
}
