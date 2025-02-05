import type { MoveableManagerInterface, Renderer } from "react-moveable"

import { Trash } from "assets/icons"
import { Button } from "ui"

const DeleteField = {
  name: "deleteField",
  props: ["deleteElement"] as const,
  events: [],
  render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
    const props = moveable.props as { deleteElement?: () => void }
    const { origin } = moveable.state

    const handleDelete = (e: React.MouseEvent) => {
      e.stopPropagation()
      props.deleteElement?.()
    }

    return (
      <Button
        key='delete-button'
        className='absolute -right-0 z-[3002] size-fit rounded-full bg-white p-1 text-destructive shadow-md hover:bg-white-50'
        style={{
          transform: `translate(45%, -50%)` + `translateX(${origin[0] * 2}px)`
        }}
        onClick={handleDelete}
      >
        <Trash className='size-[1.125rem]' />
      </Button>
    )
  }
}

export { DeleteField }
