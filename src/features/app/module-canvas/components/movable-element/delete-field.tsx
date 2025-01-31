import type { MoveableManagerInterface, Renderer } from "react-moveable"

import { Trash } from "assets/icons"
import { Button } from "ui"

const DeleteField = {
  name: "deleteField",
  props: ["deleteElement"] as const,
  events: [],
  render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
    const props = moveable.props as { deleteElement?: () => void }
    const { contentWidth, contentHeight, ...rest } = moveable.state

    const handleDelete = (e: React.MouseEvent) => {
      e.stopPropagation()
      props.deleteElement?.()
    }

    return (
      <Button
        key='delete-button'
        className='text-destructive hover:bg-white-50 absolute -right-0 z-[3002] size-fit rounded-full bg-white p-1'
        style={{
          transform:
            `translate(45%, -50%)` + `translateX(${contentWidth / 1}px)`
        }}
        onClick={handleDelete}
      >
        <Trash className='size-[1.125rem]' />
      </Button>
    )
  }
}

export { DeleteField }
