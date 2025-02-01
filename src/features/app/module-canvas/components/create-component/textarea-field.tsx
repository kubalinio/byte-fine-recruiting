/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import type { Element } from "types/canvas-types"

import { Textarea } from "ui"
import { cn } from "utils/cn"

import { useTextareaField } from "../../hooks/use-textarea-field"

const TextareaField = ({ element }: { element: NonNullable<Element> }) => {
  const {
    selectedElement,
    textareaRef,
    defaultRows,
    handleTextChange,
    handleElementClick,
    handleBlurText
  } = useTextareaField()

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
        flexDirection: "row",
        flexWrap: "wrap",
        whiteSpace: "normal",
        wordBreak: "break-word",
        fontSize: "32px",
        lineHeight: "1",
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
        style={{
          cursor: element.contentEditable ? "text" : "auto",
          color: element.style.color
        }}
        className={cn(
          "size-full resize-none overflow-hidden bg-transparent text-3xl",
          {
            [`${element.style.color}`]: element.style.color
          }
        )}
        onBlur={(e) => {
          handleBlurText(e, element)
        }}
        contentEditable={element.contentEditable}
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
