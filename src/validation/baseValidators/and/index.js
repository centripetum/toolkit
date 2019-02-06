import { Left, Nothing, Right, equals, lefts, map, pipe, size } from 'sanctuary'

const isEmpty = pipe([size, equals(0)])

export default (...funcs) => (value = Nothing) => {
  const errors = lefts(map(f => f(value))(funcs))

  return isEmpty(errors) ? Right(value) : Left(errors)
}
