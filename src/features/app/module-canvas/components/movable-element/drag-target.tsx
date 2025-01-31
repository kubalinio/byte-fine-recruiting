import * as React from "react"

import type { MoveableManagerInterface, Renderer } from "react-moveable"

import { EditorMove } from "assets/icons"
import { Button } from "ui"

const DragTarget = {
  name: "dimensionViewable",
  props: [],
  events: [],
  render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
    const rect = moveable.getRect()

    // Add key (required)
    // Add class prefix moveable-(required)
    return (
      <Button
        key={"dimension-viewer"}
        className={
          "moveable-dimension absolute -left-5 -top-5 z-[4003] rounded-full bg-white p-1 text-primary hover:bg-white-50"
        }
      >
        <EditorMove />
      </Button>
    )
  }
} as const

export { DragTarget }
