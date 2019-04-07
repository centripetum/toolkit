import * as React from 'react'
import { not } from 'sanctuary'

import useFieldState from '../../hooks/useFieldState'
import Button from '../styled/Button'
import Input from '../styled/Input'
import Label from '../styled/Label'
import isEmpty from '../../utils/isEmpty'

export default function Field (props) {
  const {
    defaultValue,
    handleChange,
    label,
    name,
    noClear,
    noLabel,
    noReset,
    noUndoRedo,
    onSave
  } = props

  const {
    clear,
    dirty,
    noRedo,
    noUndo,
    onChange,
    redo,
    reset,
    undo,
    value
  } = useFieldState({
    defaultValue,
    handleChange,
    noClear,
    noReset,
    noUndoRedo
  })
  const handleSave = onSave ? () => onSave(name, value) : null

  return (
    <div>
      {noLabel && <Label htmlFor={name}>{label}</Label>}
      <Input name={name} type='text' value={value} onChange={onChange} />
      {undo && (
        <Button onClick={undo} disabled={noUndo}>
          Undo
        </Button>
      )}
      {redo && (
        <Button onClick={redo} disabled={noRedo}>
          Redo
        </Button>
      )}
      {clear && (
        <Button onClick={clear} disabled={isEmpty(value)}>
          Clear
        </Button>
      )}
      {handleSave && (
        <Button onClick={handleSave} disabled={value === defaultValue}>
          Save
        </Button>
      )}
      {reset && (
        <Button onClick={reset} disabled={not(dirty)}>
          Reset
        </Button>
      )}
    </div>
  )
}
