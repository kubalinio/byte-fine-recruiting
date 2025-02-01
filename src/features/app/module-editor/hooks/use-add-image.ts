import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { useShallow } from "zustand/react/shallow"

const useAddImage = () => {
  const { addElement, setElements, elements, setSelectedElement } =
    useCanvasStore(useShallow(CanvasSelector))

  const handleUploadAndChangeBackground = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]
    if (!file) return

    const imageUrl = URL.createObjectURL(file)

    const imageElement = addElement("image")
    if (!imageElement) return

    imageElement.imgSrc = imageUrl
    imageElement.style.width = "200px"
    imageElement.style.height = "200px"

    setElements([...elements, imageElement])
    setSelectedElement(imageElement)
  }

  return {
    handleUploadAndChangeBackground
  }
}

export { useAddImage }
