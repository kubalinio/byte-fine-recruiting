import { useEffect, useRef } from "react"

import type { ChangeEvent } from "react"

import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { useShallow } from "zustand/react/shallow"

const BackgroundUpload = () => {
  const { elements, setElements } = useCanvasStore(useShallow(CanvasSelector))
  const previousObjectUrl = useRef<string | null>(null)

  // Cleanup previous object URL when component unmounts or when a new image is uploaded
  useEffect(() => {
    return () => {
      if (previousObjectUrl.current) {
        URL.revokeObjectURL(previousObjectUrl.current)
      }
    }
  }, [])

  const handleUploadAndChangeBackground = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = e.target.files?.[0]
      if (!file) {
        throw new Error("No file selected")
      }

      // Clean up previous object URL if it exists
      if (previousObjectUrl.current) {
        URL.revokeObjectURL(previousObjectUrl.current)
      }

      // Create object URL for the new image
      const objectUrl = URL.createObjectURL(file)
      previousObjectUrl.current = objectUrl

      // Update the frame element (which is always the first element)
      const newElements = elements.map((element, index) => {
        if (index === 0) {
          // Update the frame element
          return {
            ...element,
            style: {
              ...element.style,
              backgroundImage: `url(${objectUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "transparent"
            }
          }
        }
        return element
      })

      setElements(newElements)
    } catch (e) {
      console.error("Error uploading image:", e)
      alert(`Something went wrong: ${e}`)
      throw new Error("Failed to upload and change background image.")
    }
  }

  return (
    <div>
      <input
        className='w-[90%] rounded-l-md bg-[#0f1318] px-3 py-2 text-[#A49DB5] focus:ring-0'
        type='file'
        name='file'
        id='file'
        accept='image/png, image/jpeg, image/jpg, image/webp'
        placeholder='Upload Image'
        onChange={handleUploadAndChangeBackground}
      />
    </div>
  )
}

export { BackgroundUpload }
