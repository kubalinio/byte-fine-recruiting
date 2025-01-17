import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from "@ap2p/ui"
import { Outlet } from "@tanstack/react-router"
import { Link } from "features/shared/components/link"
import { Bell, Link as LinkIcon, LucideIcon, Settings } from "lucide-react"

const data = {
  nav: [
    { name: "My account", icon: Settings, url: "/settings/profile" as const },
    {
      name: "Subscriptions",
      icon: LinkIcon,
      url: "/settings/subscriptions" as const
    },
    {
      name: "Notifications",
      icon: Bell,
      url: "/settings" as const,
      disabled: true
    }
  ]
} satisfies {
  nav: Array<{
    name: string
    icon: LucideIcon
    url: string
    disabled?: boolean
  }>
}

const SettingsSidebar = () => {
  return (
    <div className='container py-10 lg:p-16'>
      <SidebarProvider
        style={{
          ["--sidebar-width" as keyof string]: "212px"
        }}
        className='h-full items-start rounded-[1.25rem] bg-white py-8'
      >
        <Sidebar collapsible='none' className='hidden md:flex'>
          <SidebarContent>
            <SidebarGroup className='h-full py-0 pr-0'>
              <SidebarGroupContent className='h-full border-r border-gray-200'>
                <SidebarMenu>
                  {data.nav.map((item) => (
                    <SidebarMenuItem key={item.name} className='mr-4'>
                      <SidebarMenuButton
                        asChild
                        // isActive={item.name === "Messages & media"}
                        disabled={item.disabled}
                      >
                        <Link
                          to={item.url}
                          variant='ghost'
                          className='hover:no-underline'
                        >
                          <item.icon />

                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <Outlet />
      </SidebarProvider>
    </div>
  )
}

export { SettingsSidebar }
