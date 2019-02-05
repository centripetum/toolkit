import {
  Left,
  Right,
  equals,
  filter,
  head,
  isLeft,
  map,
  maybeToNullable,
  pipe,
  prop,
  show,
  size
} from 'sanctuary'

import unique from '../../utilities/unique'

const isEmpty = pipe([size, equals(0)])

export default (...funcs) => value => {
  const errors = filter(isLeft)(map(f => f(value))(funcs))

  return isEmpty(errors)
    ? Right(value)
    : Left(unique(map(pipe([prop('value'), head, maybeToNullable]))(errors)))
}
