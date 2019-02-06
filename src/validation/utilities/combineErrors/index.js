import {
  Left,
  equals,
  groupBy,
  head,
  map,
  maybeToNullable,
  pipe,
  reduce,
  sort
} from 'sanctuary'

const unique = pipe([sort, groupBy(equals), map(pipe([head, maybeToNullable]))])
const popAndFlatten = reduce(a => v => [
  ...a,
  ...(Array.isArray(v.value) ? v.value : [v.value])
])([])

export default (errors = Left([])) =>
  pipe([popAndFlatten, unique, Left])(errors)
