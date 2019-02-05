import { isFunction } from 'ramda-adjunct'
import { Left, Right, equals, not } from 'sanctuary'

function failMessage (name, value) {
  return `${name} must not be identical to ${value}.`
}

export default function (name, n = Infinity, fail) {
  const errorMessage = isFunction(fail) ? fail : failMessage

  return value =>
    not(equals(n)(value)) ? Right(value) : Left([errorMessage(name, n)])
}
