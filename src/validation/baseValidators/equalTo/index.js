import { Left, Nothing, Right, equals, isNothing } from 'sanctuary'

import { NOT_EQUAL_TO } from '../../errorTypes'
import createError from '../../utilities/createError'

export default (testValue = Nothing) => value =>
  isNothing(value) || equals(value)(testValue)
    ? Right(value)
    : Left(createError(NOT_EQUAL_TO, value, testValue))
