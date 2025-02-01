import * as React from "react"

import type { Element } from "types/canvas-types"

import { CanvasSelector, useCanvasStore } from "context/canva-store"
import Moveable from "react-moveable"
import { useShallow } from "zustand/react/shallow"

import { ChangeColor } from "./change-color"
import { DeleteField } from "./delete-field"
import { DragTarget } from "./drag-target"

/**
 * MovableElement component that handles element transformation on canvas
 */
const MovableElement = () => {
  const { selectedElement, elements, setElements, deleteElement } =
    useCanvasStore(useShallow(CanvasSelector))
  const [dragTarget, setDragTarget] = React.useState<HTMLElement>()

  const handleDelete = React.useCallback(() => {
    if (selectedElement?.id) {
      deleteElement(selectedElement.id)
    }
  }, [deleteElement, selectedElement?.id])

  const handleChangeText = (value: string) => {
    const newElements = elements.map((elmnt) => {
      if (elmnt?.id == selectedElement?.id) {
        return {
          ...selectedElement,
          style: {
            ...selectedElement?.style,
            color: value
          }
        }
      } else {
        return elmnt
      }
    })

    setElements(newElements as Element[])
  }

  React.useEffect(() => {
    setDragTarget(document.querySelector<HTMLElement>(".moveable-dimension")!)
  }, [])

  if (!selectedElement?.id || selectedElement.locked) return null

  return (
    <Moveable
      ables={[DragTarget, DeleteField, ChangeColor]}
      dragTarget={dragTarget}
      props={{
        dimensionViewable: true,
        deleteField: true,
        changeColor: true,
        deleteElement: handleDelete,
        changeText: handleChangeText,
        selectedElement: selectedElement
      }}
      originRelative={false}
      origin={false}
      target={`#${selectedElement.id}`}
      container={null}
      className='transformer fixed z-50 [&_.moveable-control]:!-ml-3 [&_.moveable-control]:!-mt-3 [&_.moveable-control]:!size-6 [&_.moveable-control]:!bg-primary [&_.moveable-dimension]:!z-[3003] [&_.moveable-line]:!bg-primary'
      edge={false}
      throttleDrag={0}
      keepRatio={false}
      draggable={!selectedElement.contentEditable}
      bounds={{
        left: 16,
        top: 16,
        right: 16,
        bottom: selectedElement.type === "text" ? 42 : 16,
        position: "css"
      }}
      // SCALABLE
      renderDirections={["se"]}
      scalable={true}
      throttleScale={0}
      onScale={(e) => {
        e.target.style.transform = e.drag.transform
      }}
      onRender={(e) => {
        e.target.style.cssText += e.cssText
      }}
      onDrag={(e) => {
        e.target.style.transform = e.transform
      }}
      throttleResize={1}
      snappable={true}
    />
  )
}

export { MovableElement }
