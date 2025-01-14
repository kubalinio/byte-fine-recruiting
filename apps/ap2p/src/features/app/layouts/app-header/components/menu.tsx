import { Button } from "@ap2p/ui"
import { Earth } from "lucide-react"

const Menu = () => {
  return (
    <div>
      <Button
        variant='ghost'
        className='cursor-not-allowed p-0 text-gray-400 hover:bg-transparent hover:text-gray-400'
      >
        <Earth className='mx-auto size-5' />
      </Button>
    </div>
  )
}

export { Menu }
