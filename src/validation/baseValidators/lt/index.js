import { Left, Nothing, Right, isNothing, lt } from 'sanctuary'

import { NOT_LT } from '../../errorTypes'
import createError from '../../utilities/createError'

export default (testValue = Nothing) => value =>
  isNothing(value) || lt(testValue)(value)
    ? Right(value)
    : Left(createError(NOT_LT, value, testValue))
