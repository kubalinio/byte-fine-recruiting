import { EditorText } from "assets/icons"
import { CanvasSelector, useCanvasStore } from "context/canva-store"
import { ActionButton } from "features/app/module-editor/ui/action-button"
import { useShallow } from "zustand/react/shallow"

const AddText = () => {
  const { addElement } = useCanvasStore(useShallow(CanvasSelector))

  const handleAddText = () => {
    addElement("text")
  }

  return (
    <ActionButton onClick={handleAddText}>
      <EditorText />

      <span>Text</span>
    </ActionButton>
  )
}

export { AddText }
