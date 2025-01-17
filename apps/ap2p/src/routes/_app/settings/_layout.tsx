import { createFileRoute } from "@tanstack/react-router"
import { SettingsSidebar } from "features/app/settings/layouts/settings-sidebar"

export const Route = createFileRoute("/_app/settings/_layout")({
  component: SettingsSidebar
})
