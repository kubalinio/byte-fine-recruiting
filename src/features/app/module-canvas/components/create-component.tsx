/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react"

import type { Element } from "types/canvas-types"

import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { TextareaField } from "features/app/module-canvas/components/textarea-field"
import { useShallow } from "zustand/react/shallow"

const CreateComponents = ({ element }: { element: Element }) => {
  const { selectedElement, setSelectedElement } = useCanvasStore(
    useShallow(CanvasSelector)
  )

  const handleElementClick = (
    e: React.MouseEvent<HTMLDivElement>,
    currentElement: Element
  ) => {
    setSelectedElement(currentElement)
  }

  if (!element) return null

  switch (element.type) {
    case "text":
      return (
        <TextareaField
          element={element}
          handleElementClick={handleElementClick}
          selectedElement={selectedElement}
        />
      )
    case "image":
      return (
        <div
          key={element.id}
          id={element.id}
          onClick={(e) => {
            handleElementClick(e, element)
          }}
          style={{
            ...element.style,
            position: "absolute",
            display: element.visible ? "block" : "none",
            overflow: "hidden",
            width: element.style.width,
            height: element.style.height
          }}
          className='image-element'
        >
          <img
            style={{
              imageResolution: "from-image",
              width: "100%",
              height: "100%"
            }}
            src={element.imgSrc}
            alt='canvas-image'
          />
        </div>
      )
      break
  }
}

export default CreateComponents
