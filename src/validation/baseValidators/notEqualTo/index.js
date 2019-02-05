import { isFunction } from 'ramda-adjunct'
import { Left, Right } from 'sanctuary'

function failMessage (name, value) {
  return `${name} must not be equal to ${value}.`
}

export default function (name, n = Infinity, fail) {
  const errorMessage = isFunction(fail) ? fail : failMessage

  return value => (n != value ? Right(value) : Left([errorMessage(name, n)]))
}
