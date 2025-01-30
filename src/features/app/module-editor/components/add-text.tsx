import { EditorText } from "assets/icons"
import { ActionButton } from "features/app/module-editor/ui/action-button"

const AddText = () => {
  return (
    <ActionButton>
      <EditorText />

      <span>Text</span>
    </ActionButton>
  )
}

export { AddText }
