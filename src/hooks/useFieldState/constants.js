export const CLEAR = 'CLEAR'
export const REDO = 'REDO'
export const RESET = 'RESET'
export const UNDO = 'UNDO'
export const UPDATE = 'UPDATE'

export function initialiseState (defaultValue = '', noUndoRedo) {
  const undoRedo = noUndoRedo ? {} : { undo: [], redo: [] }

  return {
    defaultValue,
    value: defaultValue,
    ...undoRedo
  }
}
