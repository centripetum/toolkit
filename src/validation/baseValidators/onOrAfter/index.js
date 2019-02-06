import { Left, Right, equals, isNothing, max } from 'sanctuary'

import { END_OF_TIME } from '../../constants'
import { NOT_ON_OR_AFTER_DATE_TIME } from '../../errorTypes'
import createError from '../../utilities/createError'

export default (testValue = END_OF_TIME) => value =>
  isNothing(value) || equals(value)(max(testValue)(value))
    ? Right(value)
    : Left(createError(NOT_ON_OR_AFTER_DATE_TIME, value, testValue))
