import {
  equals,
  groupBy,
  head,
  map,
  maybeToNullable,
  pipe,
  sort
} from 'sanctuary'

export default pipe([sort, groupBy(equals), map(pipe([head, maybeToNullable]))])
