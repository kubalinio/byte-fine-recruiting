import { useRef } from "react"

import type { Element } from "types/canvas-types"

import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { useShallow } from "zustand/react/shallow"

const useTextareaField = () => {
  const { elements, setElements, selectedElement, setSelectedElement } =
    useCanvasStore(useShallow(CanvasSelector))

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const defaultRows = 2
  const maxRows = undefined

  const handleElementClick = (
    _e: React.MouseEvent<HTMLDivElement>,
    currentElement: Element
  ) => {
    setSelectedElement(currentElement)
  }

  const handleTextChange = (e: React.ChangeEvent, element: Element) => {
    const textarea = e.target as HTMLTextAreaElement
    textarea.style.height = "auto"

    const style = window.getComputedStyle(textarea)
    const borderHeight =
      parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth)
    const paddingHeight =
      parseInt(style.paddingTop) + parseInt(style.paddingBottom)

    const lineHeight = parseInt(style.lineHeight)
    const maxHeight = maxRows
      ? lineHeight * maxRows + borderHeight + paddingHeight
      : Infinity

    const newHeight = Math.min(textarea.scrollHeight + borderHeight, maxHeight)

    textarea.style.height = `${newHeight}px`

    const newElements = elements.map((elmnt) => {
      if (elmnt?.id == element?.id) {
        return {
          ...element,
          style: {
            ...element?.style,
            minHeight: `${newHeight}px`
          },
          text: textarea.value
        }
      } else {
        return elmnt
      }
    })

    setElements(newElements as Element[])
  }

  const handleBlurText = (
    e: React.FocusEvent<HTMLTextAreaElement>,
    element: Element
  ) => {
    e.currentTarget.contentEditable = "false"

    const newElements = elements.map((elmnt) => {
      if (elmnt?.id == element?.id) {
        return {
          ...element,
          text:
            e.currentTarget.textContent === ""
              ? "Type your text here"
              : e.currentTarget.textContent!
        }
      } else {
        return elmnt
      }
    })

    setElements(newElements as Element[])
  }

  return {
    selectedElement,
    textareaRef,
    defaultRows,
    handleTextChange,
    handleBlurText,
    handleElementClick
  }
}

export { useTextareaField }
