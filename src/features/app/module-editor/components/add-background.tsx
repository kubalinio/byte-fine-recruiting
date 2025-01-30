import { useEffect, useRef } from "react"

import type { ChangeEvent } from "react"

import { EditorBg } from "assets/icons"
import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { useShallow } from "zustand/react/shallow"

import { ActionButtonUpload } from "../ui/action-button"

const AddBackground = () => {
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
    const file = e.target.files?.[0]
    if (!file) {
      return
    }

    try {
      // Clean up previous object URL if it exists
      if (previousObjectUrl.current) {
        URL.revokeObjectURL(previousObjectUrl.current)
        previousObjectUrl.current = null
      }

      // Create object URL for the new image
      const objectUrl = URL.createObjectURL(file)
      previousObjectUrl.current = objectUrl

      // Update the frame element (which is always the first element)
      const newElements = elements.map((element, index) => {
        if (index === 0) {
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
    } catch (error) {
      // Reset the previous object URL if there was an error
      if (previousObjectUrl.current) {
        URL.revokeObjectURL(previousObjectUrl.current)
        previousObjectUrl.current = null
      }
    }
  }

  return (
    <ActionButtonUpload
      aria-label='Upload background image'
      accept='image/png, image/jpeg, image/jpg, image/webp'
      onUpload={handleUploadAndChangeBackground}
    >
      <EditorBg />

      <span>Background</span>
    </ActionButtonUpload>
  )
}

export { AddBackground }
