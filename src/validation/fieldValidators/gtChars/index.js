import { Right, isRight } from 'sanctuary'

import charCount from '../utilities/charCount'
import gt from '../validators/gt'

const message = (name, value) =>
  `${name} must be longer than ${value} characters.`

export default function (name, maxChars = Infinity, failMessage) {
  const errMsg = failMessage || message

  return value => {
    const result = gt(name, maxChars, errMsg)(charCount(value))

    return isRight(result) ? Right(value) : result
  }
}
