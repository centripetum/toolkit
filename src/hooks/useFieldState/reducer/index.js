import { head, isNil, prepend, tail } from 'ramda'

import { CLEAR, REDO, RESET, UNDO, UPDATE } from '../constants'

function handleClear ({ undo, value }) {
  if (isNil(undo)) {
    return { value: '' }
  }

  return {
    value: '',
    undo: prepend(value, undo)
  }
}

function handleRedo ({ redo, undo, value }) {
  if (isNil(redo)) {
    return { value }
  }

  return {
    undo: prepend(value, undo),
    redo: tail(redo),
    value: head(redo)
  }
}

function handleReset ({ defaultValue, undo }) {
  if (isNil(undo)) {
    return { dirty: false, value: defaultValue }
  }

  return {
    redo: [],
    undo: [],
    value: defaultValue
  }
}

function handleUpdate ({ undo, value }, newValue) {
  if (isNil(undo)) {
    return { value: newValue }
  }

  return {
    undo: prepend(value, undo),
    value: newValue
  }
}

function handleUndo ({ redo, undo, value }) {
  if (isNil(undo)) {
    return { value }
  }

  return {
    undo: tail(undo),
    redo: prepend(value, redo),
    value: head(undo)
  }
}

export default function reducer (state, action) {
  switch (action.type) {
    case CLEAR:
      return {
        ...state,
        ...handleClear(state)
      }
    case REDO:
      return {
        ...state,
        ...handleRedo(state)
      }
    case RESET:
      return {
        ...state,
        ...handleReset(state)
      }
    case UNDO:
      return {
        ...state,
        ...handleUndo(state)
      }
    case UPDATE:
      return {
        ...state,
        ...handleUpdate(state, action.value)
      }
    default:
      return state
  }
}
