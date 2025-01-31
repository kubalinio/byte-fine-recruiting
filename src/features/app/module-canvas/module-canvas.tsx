/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import * as React from "react"

import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { useShallow } from "zustand/react/shallow"

import { CanvasSkeleton } from "./components/canvas-skeleton"
import CreateComponents from "./components/create-component"
import MovableElement from "./components/movable-element/movable-element"

const ModuleCanvas = () => {
  const { selectedElement, setSelectedElement, elements, getElement } =
    useCanvasStore(useShallow(CanvasSelector))

  const canvasRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const currentElement = getElement(selectedElement?.id ?? "")
    if (currentElement) {
      setSelectedElement(currentElement)
    } else {
      setSelectedElement(null)
    }
  }, [elements, getElement, selectedElement?.id, setSelectedElement])

  return (
    <div className='bg-background text-foreground relative z-0 col-span-1 flex size-full max-h-[60rem] grow items-center justify-center overflow-auto'>
      <div className='absolute size-full'>
        <div
          key={elements[0]?.id}
          id='canvas'
          style={{ ...elements[0]?.style }}
          className='canvas relative bg-[#ffddf4c2] backdrop-blur-sm'
          ref={canvasRef}
        >
          <div
            className='z-1 absolute inset-0 size-full'
            onClick={() => {
              setSelectedElement(null)
            }}
          />

          {elements.length === 1 &&
          elements[0]?.type === "frame" &&
          !elements[0]?.style.backgroundImage ? (
            <CanvasSkeleton />
          ) : (
            elements.map((element, index) =>
              index > 0 ? (
                <CreateComponents key={element?.id} element={element} />
              ) : null
            )
          )}

          {selectedElement?.id && !selectedElement.locked && <MovableElement />}
        </div>
      </div>
    </div>
  )
}

export default ModuleCanvas
