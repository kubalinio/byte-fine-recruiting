import * as React from "react"

import type { OnDrag, OnDragEnd } from "react-moveable"

import { CanvasSelector, useCanvasStore } from "context/canva-store"
import Moveable from "react-moveable"
import { useShallow } from "zustand/react/shallow"

import { ChangeColor } from "../change-color"
import { CustomOrigin } from "./custom-origin"
import { DeleteField } from "./delete-field"
import { DragTarget } from "./drag-target"

interface MovableElementProps {
  canvasRef: React.RefObject<HTMLDivElement>
}

/**
 * MovableElement component that handles element transformation on canvas
 */
const MovableElement = ({ canvasRef }: MovableElementProps) => {
  const { selectedElement, elements, setElements, deleteElement } =
    useCanvasStore(useShallow(CanvasSelector))
  const [dragTarget, setDragTarget] = React.useState<HTMLElement>()

  const toPercent = React.useCallback(
    (value: number, total: number) => (value / total) * 100,
    []
  )

  const handleDrag = React.useCallback(
    ({ target, left, top }: OnDrag) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const canvasWidth = canvas.offsetWidth
      const canvasHeight = canvas.offsetHeight

      const leftPercent = toPercent(left, canvasWidth)
      const topPercent = toPercent(top, canvasHeight)

      target.style.left = `${leftPercent}%`
      target.style.top = `${topPercent}%`
    },
    [canvasRef, toPercent]
  )

  const handleDragEnd = React.useCallback(
    ({ target }: OnDragEnd) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const newElements = elements.map((el) => {
        if (el?.id === selectedElement.id) {
          return {
            ...el,
            style: {
              ...el.style,
              left: target.style.left,
              top: target.style.top
            }
          }
        }
        return el
      })

      setElements(newElements)
    },
    [canvasRef, elements, selectedElement.id, setElements]
  )

  const handleDelete = React.useCallback(() => {
    if (selectedElement?.id) {
      deleteElement(selectedElement.id)
    }
  }, [deleteElement, selectedElement?.id])

  React.useEffect(() => {
    setDragTarget(document.querySelector<HTMLElement>(".moveable-dimension")!)
  }, [])

  if (!selectedElement?.id || selectedElement.locked) return null

  return (
    <Moveable
      snappable={true}
      ables={[DragTarget, CustomOrigin, DeleteField, ChangeColor]}
      dragTarget={dragTarget}
      props={{
        dimensionViewable: true,
        customOrigin: true,
        deleteField: true,
        changeColor: true,
        deleteElement: handleDelete
      }}
      originRelative={false}
      origin={false}
      target={`#${selectedElement.id}`}
      container={null}
      className='transformer [&_.moveable-line]:!bg-primary fixed z-50 [&_.moveable-dimension]:!z-[3003]'
      edge={true}
      throttleDrag={0}
      keepRatio={false}
      renderDirections={[]}
      // resizable={!selectedElement.contentEditable}
      resizable={true}
      scalable={!selectedElement.contentEditable}
      draggable={!selectedElement.contentEditable}
      pinchable={!selectedElement.contentEditable}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    />
  )
}

export default MovableElement
