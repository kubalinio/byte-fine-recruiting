/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useRef } from "react"

import type { Element } from "types/canvas-types"

import { Trash } from "assets/icons"
import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { Button, Textarea } from "ui"
import { cn } from "utils/cn"
import { useShallow } from "zustand/react/shallow"

const TextareaField = ({
  element,
  handleElementClick,
  selectedElement
}: {
  element: Element
  handleElementClick: (
    e: React.MouseEvent<HTMLDivElement>,
    element: Element
  ) => void
  selectedElement: Element
}) => {
  const { elements, setElements } = useCanvasStore(useShallow(CanvasSelector))

  if (!element) return null

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const defaultRows = 2
  const maxRows = undefined

  // const handleTextClicked = (targetElement: Element) => {
  //   const newElements = elements.map((element) => {
  //     if (element.id === targetElement.id) {
  //       return {
  //         ...element,
  //         contentEditable: !targetElement.contentEditable
  //       }
  //     } else {
  //       return element
  //     }
  //   })
  //   setElements(newElements)
  //   // recordChange()
  // }

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
      if (elmnt.id == element.id) {
        return {
          ...element,
          style: {
            ...element.style,
            minHeight: `${newHeight}px`
          },
          text: textarea.value
        }
      } else {
        return elmnt
      }
    })

    setElements(newElements)
  }

  const toggleEditable = (id: string) => {
    const element = document.getElementById(id)
    if (!element) {
      return null
    }

    element.contentEditable = "true"

    // console.log("got the element . toggle editable")
    // if (element.isContentEditable){
    //   element.contentEditable  = "false"
    //   element.style.cursor = "auto"
    // }
    // else {
    //   element.contentEditable = "true"
    //   element.style.cursor = "text"
    // }
  }

  const handleBlurText = (
    e: React.FocusEvent<HTMLTextAreaElement>,
    element: Element
  ) => {
    e.currentTarget.contentEditable = "false"

    const newElements = elements.map((elmnt) => {
      if (elmnt.id == element.id) {
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

    setElements(newElements)
  }

  // console.log("element", element)

  return (
    <div
      key={element.id}
      id={element.id}
      data-active={textareaRef.current?.contains(document.activeElement)}
      onClick={(e) => {
        handleElementClick(e, {
          ...element
        })
      }}
      style={{
        ...element.style,
        display: element.visible ? "flex" : "none",
        flexDirection: "row", // or "column", depending on your layout
        flexWrap: "wrap", // allows the content to wrap
        whiteSpace: "normal", // allows text to wrap normally
        wordBreak: "break-word", // breaks long words to fit within the container
        fontSize: "32px",
        lineHeight: "1", // or any other value suitable for your design
        // overflow: "hidden", // hides overflow content
        // textOverflow: "ellipsis", // adds ellipsis for overflow text
        msTextAutospace: "ideograph-parenthesis",
        minHeight: "fit",
        minWidth: "fit",
        cursor: element.contentEditable ? "text" : "cell",
        zIndex: 3000
      }}
      className={cn("group", {
        "outline-dashed outline-[rgba(177,115,201,0.4)]": element.isParametrized
      })}
    >
      <Textarea
        ref={textareaRef}
        rows={defaultRows}
        className='size-full resize-none overflow-hidden bg-transparent text-3xl'
        style={{
          cursor: element.contentEditable ? "text" : "auto"
        }}
        onBlur={(e) => {
          handleBlurText(e, element)
        }}
        contentEditable={element.contentEditable}
        // onDoubleClick={(e) => {
        //   handleTextClicked(element)
        // }}
        placeholder={
          element.text === "Type your text here" ? element.text : undefined
        }
        defaultValue={
          element.text !== "Type your text here" ? element.text : ""
        }
        onChange={(e) => {
          handleTextChange(e, element)
        }}
      />

      {element.isParametrized &&
      selectedElement &&
      element.id == selectedElement.id ? (
        <div className='absolute right-0 top-0 z-50 h-[5vh] rounded-sm rounded-bl-xl bg-black px-4 font-mono text-2xl font-bold text-[#bfb4da]'>
          <small>{element.parameter?.name}</small>
        </div>
      ) : null}
    </div>
  )
}

export { TextareaField }
