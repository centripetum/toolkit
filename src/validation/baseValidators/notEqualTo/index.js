import { Left, Nothing, Right, equals, isNothing, not } from 'sanctuary'

import { NOT_UNEQUALL_TO } from '../../errorTypes'
import createError from '../../utilities/createError'

export default (testValue = Nothing) => value =>
  isNothing(value) || not(equals(value)(testValue))
    ? Right(value)
    : Left(createError(NOT_UNEQUALL_TO, value, testValue))
