import * as React from 'react'

import { UPDATE, initialiseState } from './constants'

import getClear from './getClear'
import getReset from './getReset'
import getUndoRedo from './getUndoRedo'
import reducer from './reducer'

const { useReducer } = React

export default function useFieldState ({
  defaultValue,
  handleChange,
  noClear,
  noReset,
  noUndoRedo
}) {
  const [state, dispatch] = useReducer(
    reducer,
    initialiseState(defaultValue, noUndoRedo)
  )

  const undoRedo = getUndoRedo(state, dispatch, noUndoRedo)
  const clear = getClear(dispatch, noClear)
  const reset = getReset(dispatch, noReset)

  const onChange = event => {
    dispatch({
      type: UPDATE,
      value: event && event.target ? event.target.value : ''
    })
  }

  handleChange && handleChange(state.value)

  return {
    ...clear,
    ...reset,
    ...undoRedo,
    dirty: state.value !== defaultValue,
    onChange,
    value: state.value
  }
}
