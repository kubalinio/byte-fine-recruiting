import type { Element } from "types/canvas-types"

import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { useShallow } from "zustand/react/shallow"

const useImageField = () => {
  const { setSelectedElement } = useCanvasStore(useShallow(CanvasSelector))

  const handleElementClick = (
    _e: React.MouseEvent<HTMLDivElement>,
    currentElement: Element
  ) => {
    setSelectedElement(currentElement)
  }
  return { handleElementClick }
}

export { useImageField }
