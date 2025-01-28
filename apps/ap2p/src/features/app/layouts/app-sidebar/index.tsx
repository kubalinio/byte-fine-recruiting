import { Logo } from "assets/images/logo"
import { BookOpen, Bot, Plus, SquareTerminal } from "lucide-react"

import {
  Button,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger
} from "@ap2p/ui"

import { NavMain } from "./components/nav-main"

const data = {
  navMain: [
    {
      title: "Robocash",
      url: "/",
      icon: SquareTerminal
    },
    {
      title: "Eskekit",
      url: "/",
      icon: Bot
    },
    {
      title: "Bondora",
      url: "/",
      icon: SquareTerminal
    },
    {
      title: "PeerBerry",
      url: "/",
      icon: Bot
    }
  ],
  navBottom: [
    {
      title: "Documentation",
      url: "/docs/introduction",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/docs/introduction"
        },
        {
          title: "About",
          url: "/docs/about"
        },
        {
          title: "Users",
          url: "/docs/users"
        },
        {
          title: "Help",
          url: "/docs/help"
        }
      ]
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader className='items-start justify-center px-4 pb-0 pt-3'>
        <div className='flex w-12 flex-col items-center justify-center gap-y-2'>
          <Logo
            width={45}
            height={55}
            className='ml-px w-full group-data-[state=expanded]:w-12'
          />

          <SidebarTrigger className='h-8 w-8 data-[open=false]:bg-sidebar-accent/80' />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarContent className='justify-end'>
        <NavMain items={data.navBottom} />
      </SidebarContent>

      <SidebarFooter className='px-4'>
        <Button
          variant='ghost'
          className='group/add-loan size-12 p-0 hover:bg-transparent'
        >
          <span className='flex size-12 items-center justify-center rounded-md bg-primary group-hover/add-loan:bg-primary/90'>
            <Plus className='size-7 text-white' />
          </span>
        </Button>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
