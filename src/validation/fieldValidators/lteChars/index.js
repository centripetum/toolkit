import { pipe } from 'ramda'

import charCount from '../utilities/charCount'
import lte from '../validators/lte'

export default function (maxChars = Infinity) {
  return pipe(
    charCount,
    lte(maxChars)
  )
}
