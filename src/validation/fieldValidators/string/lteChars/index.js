import { Left, Right, isNothing, lte } from 'sanctuary'

import { TOO_MANY_CHARACTERS } from '../../../errorTypes'
import charCount from '../../../utilities/charCount'
import createError from '../../../utilities/createError'

export default testValue => value =>
  isNothing(value) || lte(testValue)(charCount(value))
    ? Right(value)
    : Left(createError(TOO_MANY_CHARACTERS, value, testValue))
