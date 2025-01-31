import { useEffect, useRef } from "react"

import type { ChangeEvent } from "react"
import type { Element } from "types/canvas-types"

import { EditorBg } from "assets/icons"
import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { useShallow } from "zustand/react/shallow"

import { ActionButtonUpload } from "./action-button"

const AddBackground = () => {
  const { elements, setElements } = useCanvasStore(useShallow(CanvasSelector))
  const previousObjectUrl = useRef<string | null>(null)

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
      if (previousObjectUrl.current) {
        URL.revokeObjectURL(previousObjectUrl.current)
        previousObjectUrl.current = null
      }

      const objectUrl = URL.createObjectURL(file)
      previousObjectUrl.current = objectUrl

      const newElements = elements.map((element, index) => {
        if (index === 0) {
          return {
            ...element,
            type: "background",
            style: {
              ...element?.style,
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

      setElements(newElements as Element[])
    } catch (error) {
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
