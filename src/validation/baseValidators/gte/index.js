import { Just, Left, Right, gte, isNothing } from 'sanctuary'

import { NOT_GTE } from '../../errorTypes'
import createError from '../../utilities/createError'

export default (testValue = Just(Infinity)) => value =>
  isNothing(value) || gte(testValue)(value)
    ? Right(value)
    : Left(createError(NOT_GTE, value, testValue))
