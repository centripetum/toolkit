import {
  Left,
  Nothing,
  Right,
  equals,
  lefts,
  map,
  pipe,
  rights,
  size
} from 'sanctuary'

const isEmpty = pipe([size, equals(0)])

export default (...funcs) => (value = Nothing) => {
  const results = map(f => f(value))(funcs)

  return isEmpty(rights(results)) ? Left(lefts(results)) : Right(value)
}
