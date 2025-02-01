import type { Element } from "types/canvas-types"

import { ImageField } from "./image-field"
import { TextareaField } from "./textarea-field"

const CreateComponents = ({ element }: { element: Element }) => {
  if (!element) return null

  switch (element.type) {
    case "text":
      return <TextareaField element={element} />
    case "image":
      return <ImageField element={element} />
    default:
      return null
  }
}

export { CreateComponents }
