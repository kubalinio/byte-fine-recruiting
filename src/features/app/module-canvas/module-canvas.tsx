import * as React from "react"

import type {
  OnDrag,
  OnResize,
  OnResizeEnd,
  OnRotate,
  OnRotateEnd
} from "react-moveable"

import { CanvasSelector, useCanvasStore } from "context/canva-store"
import Moveable from "react-moveable"
import { useShallow } from "zustand/react/shallow"

import { CanvasSkeleton } from "./components/canvas-skeleton"
import CreateComponents from "./components/create-component"

const ModuleCanvas = () => {
  const {
    selectedElement,
    setSelectedElement,
    elements,
    setElements,
    zoomfactor,
    getElement
  } = useCanvasStore(useShallow(CanvasSelector))

  const canvasRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const currentElement = getElement(selectedElement?.id)
    if (currentElement) {
      setSelectedElement(currentElement)
    }
  }, [elements, getElement, selectedElement?.id, setSelectedElement])

  const toPercent = (value: number, total: number) => (value / total) * 100

  console.log("🚀🚀🚀🚀🚀", elements)
  return (
    <div className='relative z-0 col-span-1 flex size-full grow items-center justify-center overflow-auto bg-background text-foreground'>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          scale: zoomfactor
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
          <div className='pointer-events-none absolute inset-0 z-50 size-full'></div>
          {elements.length === 1 &&
          elements[0].type === "frame" &&
          !elements[0].style.backgroundImage ? (
            <CanvasSkeleton />
          ) : (
            elements.map((element, index) =>
              index > 0 ? (
                <CreateComponents
                  key={element.id}
                  element={element}
                  selectedElement={selectedElement}
                  setSelectedElement={setSelectedElement}
                />
              ) : null
            )
          )}

          {selectedElement?.id && !selectedElement.locked && (
            <Moveable
              originRelative={true}
              target={`#${selectedElement.id}`}
              container={null}
              origin={true}
              className='transformer fixed z-50'
              draggable={!selectedElement.contentEditable}
              edge={false}
              throttleDrag={0}
              onDrag={({ target, left, top }: OnDrag) => {
                const canvas = canvasRef.current
                if (!canvas) return

                const canvasWidth = canvas.offsetWidth
                const canvasHeight = canvas.offsetHeight

                const leftPercent = toPercent(left, canvasWidth)
                const topPercent = toPercent(top, canvasHeight)

                target.style.left = `${leftPercent}%`
                target.style.top = `${topPercent}%`
              }}
              onDragEnd={({ target }) => {
                const canvas = canvasRef.current
                if (!canvas) return

                const newElements = elements.map((el) => {
                  if (el.id === selectedElement.id) {
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
                // recordChange()
              }}
              keepRatio={false}
              resizable={!selectedElement.contentEditable}
              throttleResize={0}
              onResize={({ target, width, height, drag }: OnResize) => {
                const canvas = canvasRef.current
                if (!canvas) return

                const canvasWidth = canvas.offsetWidth
                const canvasHeight = canvas.offsetHeight

                const widthPercent = toPercent(width, canvasWidth)
                const heightPercent = toPercent(height, canvasHeight)

                target.style.width = `${widthPercent}%`
                target.style.height = `${heightPercent}%`
                // target.style.transform = drag.transform;
                // target.style.cssText += `width: ${target.style.width}; height: ${target.style.height}`;
              }}
              onResizeEnd={({ lastEvent }: OnResizeEnd) => {
                const canvas = canvasRef.current
                if (!canvas || !lastEvent) return

                const newElements = elements.map((el) => {
                  if (el.id === selectedElement.id) {
                    const canvasWidth = canvas.offsetWidth
                    const canvasHeight = canvas.offsetHeight
                    const widthPercent = toPercent(lastEvent.width, canvasWidth)
                    const heightPercent = toPercent(
                      lastEvent.height,
                      canvasHeight
                    )

                    return {
                      ...el,
                      style: {
                        ...el.style,
                        width: `${widthPercent}%`,
                        height: `${heightPercent}%`
                      }
                    }
                  }
                  return el
                })

                setElements(newElements)
                // recordChange()
              }}
              rotatable={!selectedElement.contentEditable}
              throttleRotate={0}
              onRotate={({ target, transform }: OnRotate) => {
                target.style.transform = transform
              }}
              onRotateEnd={({ lastEvent }: OnRotateEnd) => {
                const newElements = elements.map((el) => {
                  if (el.id === selectedElement.id) {
                    return {
                      ...el,
                      style: {
                        ...el.style,
                        transform: lastEvent?.transform
                      }
                    }
                  }
                  return el
                })

                setElements(newElements)
                // recordChange()
              }}
              pinchable={!selectedElement.contentEditable}
              renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ModuleCanvas
