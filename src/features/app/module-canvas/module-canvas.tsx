import * as React from "react"

import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { useShallow } from "zustand/react/shallow"

import { CanvasSkeleton } from "./components/canvas-skeleton"
import CreateComponents from "./components/create-component"
import MovableElement from "./components/movable-element"

const ModuleCanvas = () => {
  const {
    selectedElement,
    setSelectedElement,
    elements,
    setElements,
    getElement
  } = useCanvasStore(useShallow(CanvasSelector))

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
    <div className='relative z-0 col-span-1 flex size-full grow items-center justify-center overflow-auto bg-background text-foreground'>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%"
        }}
        className='absolute'
      >
        <div
          key={elements[0]?.id}
          id='canvas'
          style={{ ...elements[0]?.style }}
          className='canvas relative bg-[#ffddf4c2] backdrop-blur-sm'
          ref={canvasRef}
        >
          {/* <Moveable target={canvasRef} /> */}
          {/* <div className='pointer-events-none absolute inset-0 z-50 size-full' /> */}

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

          {selectedElement?.id && !selectedElement.locked && (
            <MovableElement
              canvasRef={canvasRef}
              selectedElement={selectedElement}
              elements={elements}
              setElements={setElements}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ModuleCanvas
