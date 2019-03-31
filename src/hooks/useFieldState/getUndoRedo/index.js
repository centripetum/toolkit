import { REDO, UNDO } from '../constants'
import isEmpty from '../../../utils/isEmpty'

export default function getUndoRedo (state, dispatch, disabled) {
  if (disabled) {
    return {}
  }

  return {
    noRedo: isEmpty(state.redo),
    noUndo: isEmpty(state.undo),
    undo: () => dispatch({ type: UNDO }),
    redo: () => dispatch({ type: REDO })
  }
}
