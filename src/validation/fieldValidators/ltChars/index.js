import { pipe } from 'ramda'

import charCount from '../utilities/charCount'
import lt from '../validators/lt'

export default function (maxChars = Infinity) {
  return pipe(
    charCount,
    lt(maxChars)
  )
}
