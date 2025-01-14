import { Separator, SidebarTrigger, useIsMobile } from "@ap2p/ui"
import { Logo } from "assets/images/logo"

import { Menu } from "./components/menu"
import { Profile } from "./components/profile"
import { ThemeSwitcher } from "./components/theme-switcher"

const AppHeader = () => {
  const isMobile = useIsMobile()

  return (
    <header className='flex shrink-0 items-center justify-between gap-7 bg-white px-5 py-3 lg:justify-end'>
      {isMobile && (
        <SidebarTrigger className='ml-[2px] w-[5.75rem] justify-start lg:hidden' />
      )}

      {isMobile && <Logo className='lg:hidden' />}

      <ThemeSwitcher />

      <Separator orientation='vertical' className='hidden h-4 lg:block' />

      {!isMobile && <Menu />}

      <Separator orientation='vertical' className='hidden h-4 lg:block' />

      {!isMobile && <Profile />}
    </header>
  )
}

export { AppHeader }
