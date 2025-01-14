import { useAuth } from "@ap2p/auth"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Typography
} from "@ap2p/ui"
import { Link, useNavigate } from "@tanstack/react-router"
import { Bolt, Dot, Layers2, LogOut, Settings } from "lucide-react"

const SettingDropdown = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate({ to: "/sign-in" })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size='icon'
          variant='outline'
          aria-label='Open account menu'
          className='rounded-full shadow-z2'
        >
          <Settings className='size-6 stroke-[1.5px]' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side='bottom'
        align='end'
        sideOffset={8}
        className='max-w-64'
      >
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to='/'>
              <Bolt
                size={16}
                strokeWidth={2}
                className='opacity-60'
                aria-hidden='true'
              />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link to='/'>
              <Layers2
                size={16}
                strokeWidth={2}
                className='opacity-60'
                aria-hidden='true'
              />
              <span>Subscription</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleLogout}>
          <LogOut
            size={16}
            strokeWidth={2}
            className='opacity-60'
            aria-hidden='true'
          />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const ProfileUser = ({
  avatar,
  first_name,
  last_name,
  email
}: {
  avatar: string | null | undefined
  first_name: string | null | undefined
  last_name: string | null | undefined
  email: string | null | undefined
}) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex flex-col items-end'>
        <Typography as='p' variant='subtitle-1'>
          {first_name && last_name && `${first_name} ${last_name}`}
          {!first_name && email}
        </Typography>

        <span className='flex items-center gap-1.5'>
          <Dot className='size-2 stroke-[1rem] text-green-700' />

          <span className='text-xs text-gray-400'>Online</span>
        </span>
      </div>

      <figure className='size-9 overflow-hidden rounded-full'>
        {avatar && (
          <img src={avatar ?? undefined} alt={first_name ?? "User avatar"} />
        )}
        {!avatar && <div className='size-9 bg-orange-500' />}
      </figure>
    </div>
  )
}

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className='flex items-center gap-x-3'>
      <ProfileUser
        avatar={user?.avatar}
        first_name={user?.first_name}
        last_name={user?.last_name}
        email={user?.email}
      />

      <SettingDropdown />
    </div>
  )
}

export { Profile }
