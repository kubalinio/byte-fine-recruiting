import type { MoveableManagerInterface, Renderer } from "react-moveable"

import { EditorMove } from "assets/icons"
import { Button } from "ui"

const DragTarget = {
  name: "dimensionViewable",
  props: [],
  events: [],
  render(_moveable: MoveableManagerInterface<any, any>, _React: Renderer) {
    return (
      <Button
        key={"dimension-viewer"}
        className={
          "moveable-dimension absolute -left-5 -top-5 z-[4003] rounded-full bg-white p-1 text-primary shadow-md hover:bg-white-50 active:cursor-move"
        }
      >
        <EditorMove />
      </Button>
    )
  }
} as const

export { DragTarget }
