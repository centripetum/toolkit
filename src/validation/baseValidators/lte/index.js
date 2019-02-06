import { Left, Nothing, Right, isNothing, lte } from 'sanctuary'

import { NOT_LTE } from '../../errorTypes'
import createError from '../../utilities/createError'

export default (testValue = Nothing) => value =>
  isNothing(value) || lte(testValue)(value)
    ? Right(value)
    : Left(createError(NOT_LTE, value, testValue))
