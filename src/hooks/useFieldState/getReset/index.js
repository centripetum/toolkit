import { RESET } from '../constants'

export default function getReset (dispatch, disabled) {
  if (disabled) {
    return {}
  }

  return {
    reset: () => dispatch({ type: RESET })
  }
}
