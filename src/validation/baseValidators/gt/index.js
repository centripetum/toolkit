import { Just, Left, Right, gt, isNothing } from 'sanctuary'

import { NOT_GT } from '../../errorTypes'
import createError from '../../utilities/createError'

export default (testValue = Just(Infinity)) => value =>
  isNothing(value) || gt(testValue)(value)
    ? Right(value)
    : Left(createError(NOT_GT, value, testValue))
