import { Camera } from "lucide-react"

import { Avatar, AvatarFallback, Badge, Box } from "@ap2p/ui"

const ModuleAvatar = () => {
  return (
    <Box variant='card' padding='md'>
      {/* editable provider */}
      <div className='relative w-fit'>
        <Avatar className='size-20'>
          {/* <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" /> */}
          <AvatarFallback className='text-white'>KK</AvatarFallback>
        </Avatar>

        <Badge className='absolute -bottom-1 left-full min-w-5 -translate-x-6 cursor-not-allowed rounded-full border-2 border-background bg-primary p-1.5'>
          <Camera className='size-4 text-white' />
        </Badge>
      </div>
    </Box>
  )
}

export { ModuleAvatar }
