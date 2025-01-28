import { Clock4 } from "lucide-react"

import { Typography } from "@ap2p/ui"

import { Link } from "./link"

const WorkInProgress = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4 p-4'>
      <Clock4 className='mx-auto size-16 text-gray-400' />

      <Typography as='h2' variant='h3' className='text-center'>
        Work in progress
      </Typography>

      <Link to='/' variant='default' className='px-4 py-2 hover:no-underline'>
        Go back to dashboard
      </Link>
    </div>
  )
}

export { WorkInProgress }
