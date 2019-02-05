import {
  Left,
  Right,
  filter,
  head,
  isLeft,
  map,
  maybeToNullable,
  pipe,
  prop,
  size
} from 'sanctuary'

import unique from '../../utilities/unique'

export default (...funcs) => value => {
  const errors = filter(isLeft)(map(f => f(value))(funcs))

  return size(errors) < size(funcs)
    ? Right(value)
    : Left(map(pipe([prop('value'), head, maybeToNullable]))(unique(errors)))
}
