import { isFunction } from 'ramda-adjunct'
import { Left, Right, gte } from 'sanctuary'

function failMessage (name, value) {
  return `${name} must be at least ${value}.`
}

export default function (name, n = Infinity, fail) {
  const errorMessage = isFunction(fail) ? fail : failMessage

  return value =>
    isNaN(value)
      ? Left([`${name} must be a number.`])
      : gte(n)(value)
      ? Right(value)
      : Left([errorMessage(name, n)])
}
