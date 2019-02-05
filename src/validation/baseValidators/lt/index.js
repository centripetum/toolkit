import { isFunction } from 'ramda-adjunct'
import { Left, Right, lt } from 'sanctuary'

function failMessage (name, value) {
  return `${name} must be fewer than ${value}.`
}

export default function (name, n = Infinity, fail) {
  const errorMessage = isFunction(fail) ? fail : failMessage

  return value =>
    isNaN(value)
      ? Left([`${name} must be a number.`])
      : lt(n)(value)
      ? Right(value)
      : Left([errorMessage(name, n)])
}
