import * as React from 'react'

import { isEmpty, not } from 'ramda'

import getButton from '../helpers/getButton'
import getInput from '../helpers/getInput'
import getLabel from '../helpers/getLabel'
import useFieldState from '../hooks/useFieldState'

export default function Field (props) {
  const {
    clearButton,
    defaultValue,
    handleChange,
    input,
    label,
    labelText,
    name,
    noClear,
    noLabel,
    noReset,
    noUndoRedo,
    onSave,
    redoButton,
    resetButton,
    saveButton,
    type,
    undoButton
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
  const inputType = type || 'text'
  const handleSave = onSave ? () => onSave(name, value) : null

  return (
    <>
      {getLabel(noLabel, label, name, labelText)}
      {getInput(input, name, onChange, inputType, value)}
      {getButton(undoButton, noUndo, 'Undo', undo)}
      {getButton(redoButton, noRedo, 'Redo', redo)}
      {getButton(clearButton, isEmpty(value), 'Clear', clear)}
      {getButton(saveButton, value === defaultValue, 'Save', handleSave)}
      {getButton(resetButton, not(dirty), 'Reset', reset)}
    </>
  )
}
