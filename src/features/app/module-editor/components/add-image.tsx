import { EditorImg } from "assets/icons"
import { ActionButtonUpload } from "features/app/module-editor/ui/action-button"

const AddImage = () => {
  return (
    <ActionButtonUpload
      accept='image/png, image/jpeg, image/jpg, image/webp'
      // onChange={handleUploadAndChangeBackground}
    >
      <EditorImg />

      <span>Image</span>
    </ActionButtonUpload>
  )
}

export { AddImage }
