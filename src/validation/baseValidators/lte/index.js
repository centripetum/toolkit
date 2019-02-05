import { isFunction } from 'ramda-adjunct'
import { Left, Right, lte } from 'sanctuary'

function failMessage (name, value) {
  return `${name} must be ${value} or fewer.`
}

export default function (name, n = Infinity, fail) {
  const errorMessage = isFunction(fail) ? fail : failMessage

  return value =>
    isNaN(value)
      ? Left([`${name} must be a number.`])
      : lte(n)(value)
      ? Right(value)
      : Left([errorMessage(name, n)])
}
