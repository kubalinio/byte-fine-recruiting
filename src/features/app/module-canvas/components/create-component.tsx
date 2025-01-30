import React from "react"

import type { Element } from "types/canvas-types"

import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { useShallow } from "zustand/react/shallow"

const CreateComponents = ({
  element,
  selectedElement,
  setSelectedElement
}: {
  element: Element
  selectedElement: Element

  setSelectedElement: (el: Element) => void
}) => {
  const { elements, setElements } = useCanvasStore(useShallow(CanvasSelector))

  const handleElementClick = (
    e: React.MouseEvent<HTMLDivElement>,
    currentElement: Element
  ) => {
    setSelectedElement(currentElement)
  }
  const handleTextClicked = (targetElement: Element) => {
    const newElements = elements.map((element) => {
      if (element.id === targetElement.id) {
        return {
          ...element,
          contentEditable: !targetElement.contentEditable
        }
      } else {
        return element
      }
    })
    setElements(newElements)
    // recordChange()
  }

  const handleTextChange = (e: React.ChangeEvent, element: Element) => {
    const newElements = elements.map((elmnt) => {
      if (elmnt.id == element.id) {
        return {
          ...element,
          text: e.currentTarget.textContent!
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
    e: React.FocusEvent<HTMLDivElement>,
    element: Element
  ) => {
    e.currentTarget.contentEditable = "false"
    const newElements = elements.map((elmnt) => {
      if (elmnt.id == element.id) {
        return {
          ...element,
          text: e.currentTarget.textContent!
        }
      } else {
        return elmnt
      }
    })

    setElements(newElements)
  }

  console.log("element created ", element)

  switch (element.type) {
    case "text":
      return (
        <div
          key={element.id}
          id={element.id}
          onClick={(e) => {
            handleElementClick(e, element)
          }}
          style={{
            ...element.style,
            display: element.visible ? "flex" : "none",
            flexDirection: "row", // or "column", depending on your layout
            flexWrap: "wrap", // allows the content to wrap
            whiteSpace: "normal", // allows text to wrap normally
            wordBreak: "break-word", // breaks long words to fit within the container
            lineHeight: "1", // or any other value suitable for your design
            // overflow: "hidden", // hides overflow content
            // textOverflow: "ellipsis", // adds ellipsis for overflow text
            msTextAutospace: "ideograph-parenthesis",
            minHeight: "fit",
            minWidth: "fit"
          }}
          className={
            element.isParametrized ? "outline-dashed outline-[#b173c967]" : ""
          }
        >
          <p
            style={{
              cursor: element.contentEditable ? "text" : "cell"
            }}
            onBlur={(e) => {
              handleBlurText(e, element)
            }}
            contentEditable={element.contentEditable}
            onDoubleClick={(e) => {
              handleTextClicked(element)
            }}
          >
            {element.text}
          </p>

          {element.isParametrized &&
          selectedElement &&
          element.id == selectedElement.id ? (
            <div className='absolute right-0 top-0 z-50 h-[5vh] rounded-sm rounded-bl-xl bg-black px-4 font-mono text-2xl font-bold text-[#bfb4da]'>
              <small>{element.parameter?.name}</small>
            </div>
          ) : null}
          {/* <button onClick={()=>handleTextClicked(element)} className=" top-0 right-0 bg-blue-500 text-[50%] h-fit w-fit p-2 rounded-sm"><small>Edit</small></button>  */}
        </div>
      )
      break
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
            display: element.visible ? "block" : "none",
            backgroundImage: `url(${element.imgSrc})`,
            backgroundSize: "contain",
            overflow: "hidden",

            // Remove width and height from inline style
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
            alt='image'
          />
        </div>
      )
      break
  }
}

export default CreateComponents
