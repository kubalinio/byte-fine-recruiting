import { ReactNode, useRef } from "react"

import { PencilLine } from "lucide-react"

import { Button } from "@ap2p/ui"
import { cn } from "@ap2p/utils"

import { createEditableStore, EditableContext } from "./editable-store"
import { useEditable } from "./use-editable"

// Props interface for the provider
interface EditableContextProviderProps {
  children: ReactNode
  defaultValue?: boolean
}

// Provider component that creates a new store instance for each provider
const EditableContextProvider = ({
  children,
  defaultValue = false
}: EditableContextProviderProps) => {
  // Use useRef to maintain the same store instance across re-renders
  const storeRef = useRef(createEditableStore(defaultValue))

  return (
    <EditableContext.Provider value={storeRef.current}>
      {children}
    </EditableContext.Provider>
  )
}

// EditButton component with toggle functionality
const EditButton = ({
  children,
  className
}: {
  children?: ReactNode
  className?: string
}) => {
  const { isEditing, toggleEdit } = useEditable()

  if (isEditing) return null
  return (
    <Button
      variant='outline'
      size='sm'
      onClick={toggleEdit}
      className={cn("flex items-center gap-2", className)}
      aria-label={isEditing ? "Cancel editing" : "Edit information"}
    >
      {!isEditing && !children && (
        <>
          <PencilLine className='h-4 w-4' />
          <span>Edit</span>
        </>
      )}

      {!isEditing && children && children}
    </Button>
  )
}

export { EditableContextProvider, EditButton }
