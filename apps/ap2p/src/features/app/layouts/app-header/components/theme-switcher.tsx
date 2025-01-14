import { useId, useState } from "react"

import { Switch } from "@ap2p/ui"
import { Moon, Sun } from "lucide-react"

const ThemeSwitcher = () => {
  const id = useId()
  const [checked, setChecked] = useState(false)

  const toggleSwitch = () => setChecked((prev) => !prev)

  return (
    <div
      className='group inline-flex items-center gap-2'
      data-state={checked ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-off`}
        className='group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-not-allowed text-right text-sm font-medium'
        aria-controls={id}
        // onClick={() => setChecked(false)}
      >
        <Sun size={16} strokeWidth={2} aria-hidden='true' />
      </span>

      <Switch
        id={id}
        checked={checked}
        onCheckedChange={toggleSwitch}
        aria-labelledby={`${id}-off ${id}-on`}
        aria-label='Toggle between dark and light mode'
        disabled
      />
      <span
        id={`${id}-on`}
        className='group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-not-allowed text-left text-sm font-medium'
        aria-controls={id}
        // onClick={() => setChecked(true)}
      >
        <Moon size={16} strokeWidth={2} aria-hidden='true' />
      </span>
    </div>
  )
}

export { ThemeSwitcher }
