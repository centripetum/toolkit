import { Left, Right, equals, isNothing, max, not } from 'sanctuary'

import { END_OF_TIME } from '../../constants'
import { NOT_AFTER_DATE_TIME } from '../../errorTypes'
import createError from '../../utilities/createError'

export default (testValue = END_OF_TIME) => value =>
  isNothing(value) ||
  (not(equals(testValue)(value)) && equals(value)(max(testValue)(value)))
    ? Right(value)
    : Left(createError(NOT_AFTER_DATE_TIME, value, testValue))
