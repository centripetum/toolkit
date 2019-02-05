import { pipe } from 'ramda'

import charCount from '../utilities/charCount'
import gte from '../validators/gte'

export default function (maxChars = Infinity) {
  return pipe(
    charCount,
    gte(maxChars)
  )
}
