import { CLEAR } from '../constants'

export default function getClear (dispatch, disabled) {
  if (disabled) {
    return {}
  }

  return {
    clear: () => dispatch({ type: CLEAR })
  }
}
